$(function() {
    var n;
    localStorage.setItem("gameMaintainPool", JSON.stringify([]));
    $(".off").click(function(n) {
        var t, i;
        $(this).hasClass("faccount") || $(this).children().hasClass("btn_prompt") || (n.stopPropagation(), t = $(this).find(".game_maintain"), t.hasClass("selfcontrol")) || ($(".txt_maintain").hide(), t.css("display", "block"), i = JSON.parse(localStorage.getItem("gameMaintainPool")), i.push(t.attr("id")), localStorage.setItem("gameMaintainPool", JSON.stringify(i)), setTimeout(function() {
            var n = JSON.parse(localStorage.getItem("gameMaintainPool"));
            n.filter(function() {
                return t.attr("id")
            }).length <= 1 && t.hide();
            n.shift();
            localStorage.setItem("gameMaintainPool", JSON.stringify(n))
        }, 3e3))
    });
    $(".menu_maintain").click(function(n) {
        $(this).hasClass("showTips") && (n.stopPropagation(), _this = $(this).find(".game_maintain"), $(".txt_maintain").hide(), _this.css("display", "block"), setTimeout(function() {
            _this.hide()
        }, 3e3))
    });
    $("body").on("focus", ".btn_prompt", function() {
        $(this).parent().siblings(".txt_maintain").show();
        $(this).parent().siblings(".txt_prompt").show()
    });
    $("body").on("blur", ".btn_prompt", function() {
        $(this).parent().siblings(".txt_maintain").hide();
        $(this).parent().siblings(".txt_prompt").hide()
    });
    $(".btn_chat.off").click(function() {
        n && clearTimeout(n);
        var t = $(this).find(".txt_maintain");
        $(".txt_maintain").not(t).hide();
        t.toggle();
        n = setTimeout(function() {
            t.css("display") === "block" && t.hide()
        }, 3e3)
    });
    $(window).scroll(function() {
        $(this).scrollTop() > 105 ? ($(".customerServ").css("top", "0").css("position", "fixed"), $(".CF_Gift").css("top", "450px").css("position", "fixed")) : ($(".customerServ").css("top", "105px").css("position", "absolute"), $(".CF_Gift").css("top", "555px").css("position", "absolute"))
    })
})