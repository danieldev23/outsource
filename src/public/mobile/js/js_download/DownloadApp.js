$(document).ready(function() {
    //判斷裝置類型並顯示對應資訊
    if (deviceType === '2') {
        $('#android').show();
        $('#btnDownload').html(LangFont["Font_AppDownload"]);
    } else if (deviceType === '3') {
        $('#ios').show();
        $('#btnDownload').html(LangFont["Font_RightAwayDownload"]);
        if (isSafari === '0') {
            alert(LangFont["Font_OnlySupportSafariBrowserReplaceSafariDownload"]);
        }
    }

    //點擊下載事件按鈕
    $('#btnDownload').click(function() {
        if (deviceType == '3' && isSafari == '0') { //IOS 且非 Safari
            alert(LangFont["Font_OnlySupportSafariBrowserReplaceSafariDownload"]);
        } else if (fileUrl.length == 0) { //取不到下載網址 錯誤
            alert(LangFont["Font_ErrorOccurredPleaseTryAgain"]);
        } else {
            downloadFile(fileUrl)

            //IOS 需下載憑證描述檔案(導引使用者到設定頁)
            if (deviceType == '3') {
                //判斷USER IOS 版本 若為10以上(不包含10)需下載 憑證描述檔
                var userAgent = navigator.userAgent.toLowerCase();
                var iosVersion = userAgent.match(/os [\d._]*/gi);
                iosVersion = (iosVersion + "").match(/.[\d*]_/);
                iosVersion = (iosVersion + "").replace('_', '');
                if (iosVersion > 10) {
                    setTimeout(function() {
                        downloadFile("/AppFiles/app.mobileprovision");
                    }, 1500);
                }
            }
        }
    });
});

//使用Iframe方式下載檔案 避免下載間隔過短導致第一份檔案沒正確下載
const downloadFile = (url) => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none"; // 防止影响页面
    iframe.style.height = 0; // 防止影响页面
    iframe.src = url;
    document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
    // 30秒之后删除
    setTimeout(function() {
        iframe.remove();
    }, 30 * 1000);
}