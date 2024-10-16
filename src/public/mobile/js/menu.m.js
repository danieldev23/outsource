$(document).ready(function() {
    function s() {
        var n = i.match(/(\(ipod|\(iphone|\(ipad)/) ? 600 : 0;
        o = setTimeout(function() {
            $(".mask").removeClass("mask_noBottom");
            $(".footer").css("top", "")
        }, n)
    }
    var e, i = navigator.userAgent.toLowerCase(),
        v = parseInt($(".footer").css("top")),
        o, n, u, f, t, l, a;
    $(".loginID,.loginPW").focus(function() {
        var r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset,
            u = $(this)[0].getBoundingClientRect().top,
            n = 105,
            t = 600;
        i.match(/(\(ipod|\(iphone|\(ipad)/) && (n = 50, t = 300);
        $(".bg_header").length !== 0 && $(".bg_header").css("display") !== "none" && (n += $(".bg_header").height());
        $(".infor").length !== 0 && $(".infor").css("display") !== "none" && (n += $(".infor").height());
        $(".container_T").length && (n += $(".container_T").height());
        $("html,body").animate({
            scrollTop: r + u - n
        }, t)
    });
    $("#callPopup").click(function() {
        $("#popup_open").show();
        $(".footer_DW_open").removeClass("on")
    });
    $("#callPopup2").click(function() {
        $("#popup_open2").show();
        $(".footer_DW_open").removeClass("on")
    });
    $("#callPopup3").click(function() {
        $("#popup_open").show();
        $(".footer_DW_open").removeClass("on")
    });
    $(".popup_close").click(function() {
        $(".mask,.mask_join,.mask_all").hide();
        var n = $(window).scrollTop();
        $(".container_main").removeAttr("style");
        $(window).scrollTop(n)
    });
    $("#VRlottery").click(function() {
        $("#popup_open").show();
        $(".footer_DW_open").removeClass("on");
        var n = $(window).scrollTop();
        $(".container_main").css({
            position: "fixed",
            top: "-" + n + "px"
        })
    });
    $("#openGame").click(function() {
        $("#popup_open").hide();
        $("#popup_Game").show()
    });
    $("#Popup_excl").click(function() {
        $("#excl_Popup").show()
    });
    $("#accountID").focusout(function() {
        $("#accountID_open").show()
    });
    $("#accountID_open").children("a").click(function() {
        $("#accountID_open").hide()
    });
    $("#Search_T").click(function() {
        $("#Search_In").css("display") == "none" ? ($("#Search_In").slideDown("fast"), $(this).addClass("on")) : ($("#Search_In").slideUp("fast"), $(this).removeClass("on"))
    });
    $(".btn_depositSelect_T").click(function() {
        $(this).parent(".deposit_select").children(".depositSelect_In").css("display") == "none" ? ($(this).parent(".deposit_select").children(".depositSelect_In").slideDown("fast"), $(this).addClass("on")) : ($(this).parent(".deposit_select").children(".depositSelect_In").slideUp("fast"), $(this).removeClass("on"))
    });
    $(".btn_newsSelect_T").click(function() {
        $(this).parent(".news_select").children(".newsSelect_In").css("display") == "none" ? ($(this).parent(".news_select").children(".newsSelect_In").slideDown("fast"), $(this).addClass("on")) : ($(this).parent(".news_select").children(".newsSelect_In").slideUp("fast"), $(this).removeClass("on"))
    });
    $(".loginID,.loginPW").focus(function() {
        $(".login_main").addClass("on")
    });
    $(".loginID,.loginPW").blur(function() {
        $(".login_main").removeClass("on")
    });
    $("#btn_bankID").click(function() {
        $("#bankID_In").css("display") == "none" ? $("#bankID_In").slideDown("fast") : $("#bankID_In").slideUp("fast")
    });
    $("#bankID_In").click(function() {
        $("#bankID_In").slideUp("fast")
    });
    $(".tradeRec").children(".tradeRec_list:first").children(".tradeRec_listT").addClass("on");
    $(".tradeRec").children(".tradeRec_list:first").children(".tradeRec_listIn").slideDown();
    $(".tradeRec_listTR").click(function() {
        $(this).parent(".tradeRec_listT").parent(".tradeRec_list").children(".tradeRec_listIn").css("display") == "none" ? ($(this).parent(".tradeRec_listT").parent(".tradeRec_list").children(".tradeRec_listIn").slideDown("fast"), $(this).parent(".tradeRec_listT").addClass("on")) : ($(this).parent(".tradeRec_listT").parent(".tradeRec_list").children(".tradeRec_listIn").slideUp("fast"), $(this).parent(".tradeRec_listT").removeClass("on"))
    });
    $(".news").children(".news_list:first").children(".news_listT").addClass("on");
    $(".news").children(".news_list:first").children(".news_listIn").slideDown();
    $(".news_listT").click(function() {
        $(this).parent(".news_list").children(".news_listIn").css("display") == "none" ? ($(this).parent(".news_list").children(".news_listIn").slideDown("fast"), $(this).addClass("on")) : ($(this).parent(".news_list").children(".news_listIn").slideUp("fast"), $(this).removeClass("on"))
    });
    $(".btn_BRSelect_T").click(function() {
        $(this).parent(".BRSelect").children(".BRSelect_In").css("display") == "none" ? ($(this).parent(".BRSelect").children(".BRSelect_In").slideDown("fast"), $(this).addClass("on")) : ($(this).parent(".BRSelect").children(".BRSelect_In").slideUp("fast"), $(this).removeClass("on"))
    });
    $(".bonusRec").children(".bonusRec_list:first").children(".bonusRec_listT").addClass("on");
    $(".bonusRec").children(".bonusRec_list:first").children(".bonusRec_listIn").slideDown();
    $(".bonusRec_listT").click(function() {
        $(this).parent(".bonusRec_list").children(".bonusRec_listIn").css("display") == "none" ? ($(this).parent(".bonusRec_list").children(".bonusRec_listIn").slideDown("fast"), $(this).addClass("on")) : ($(this).parent(".bonusRec_list").children(".bonusRec_listIn").slideUp("fast"), $(this).removeClass("on"))
    });
    $(".bonus_list").click(function() {
        $(this).children(".bonus_listIn").css("display") == "none" ? ($(this).children(".bonus_listIn").slideDown("fast"), $(this).children(".bonus_listT").addClass("on")) : ($(this).children(".bonus_listIn").slideUp("fast"), $(this).children(".bonus_listT").removeClass("on"))
    });
    $(".bonus_listIn").click(function() {
        event.stopPropagation()
    });
    $(".WCtop").click(function() {
        $(".WC_Table_member").find(".on").not(this).toggleClass("on").siblings(".WCbottm").slideToggle();
        $(this).toggleClass("on").siblings(".WCbottm").slideToggle()
    });
    $(".BAR_list:first").addClass("on");
    $(".BAR_list").click(function() {
        $(this).children(".BAR_listIn").css("display") == "none" ? $(this).addClass("on") : $(this).removeClass("on")
    });
    $(".license_arrow").click(function() {
        $(this).parent(".license_list").children(".license_listIn").css("display") == "none" ? ($(this).parent(".license_list").children(".license_listIn").slideDown("fast"), $(this).addClass("on")) : ($(this).parent(".license_list").children(".license_listIn").slideUp("fast"), $(this).removeClass("on"))
    });
    $(".helpSelect").children(".helpSelect_In").slideDown();
    $(".btn_helpSelect_T").addClass("on");
    $(".btn_helpSelect_T").click(function() {
        $(this).parent(".helpSelect").children(".helpSelect_In").css("display") == "none" ? ($(this).parent(".helpSelect").children(".helpSelect_In").slideDown("fast"), $(this).addClass("on")) : ($(this).parent(".helpSelect").children(".helpSelect_In").slideUp("fast"), $(this).removeClass("on"))
    });
    $(".FAQ_listT").click(function() {
        $(this).parent(".FAQ_list").children(".FAQ_listIn").css("display") == "none" ? ($(this).parent(".FAQ_list").children(".FAQ_listIn").slideDown("fast"), $(this).addClass("on")) : ($(this).parent(".FAQ_list").children(".FAQ_listIn").slideUp("fast"), $(this).removeClass("on"))
    });
    $('[class*="btn_GL"]').click(function() {
        n && clearTimeout(n);
        ($(this).hasClass("maintain") || $(this).closest(".container_main").hasClass("container_login")) && ($(".gameMainTain_in").not($(this).find(".gameMainTain_in")).hide(), $(".footer_maintain").hide(), $(this).find(".gameMainTain_in").toggle(), n = setTimeout(function() {
            $(".gameMainTain_in").hide()
        }, 3e3))
    });
    $(function() {
        $(document).bind("click touchend", function(n) {
            var t = $(n.target);
            t.closest('[class*="btn_GL"].maintain,.container_login [class*="btn_GL"]').length == 0 && $(".gameMainTain_in").hide()
        })
    });
    $(document).on("click", ".footer_list.off,.btn_footer_deposit.off,.btn_footer_withdrawal.off,.btn_footer_transfer.off", _.debounce(function() {
        var t = $(this).find(".footer_maintain");
        $(this).attr("class").indexOf("footer_list") == -1 && ($(".footer_DW_open").addClass("on"), t = $(this).next(".footer_maintain"));
        n && clearTimeout(n);
        $(".footer_maintain").not(t).hide();
        t.toggle();
        n = setTimeout(function() {
            console.log("timeout..");
            t.css("display") === "block" && (console.log("hide"), t.hide())
        }, 3e3)
    }, 300, {
        leading: !0,
        trailing: !1
    }));
    $(".btn_prompt:not(.keyboard)").click(function() {
        $(".txt_prompt").not($(this).siblings()).hide().parent().css("z-index", "1");
        $(this).siblings(".txt_prompt").show().parent().css("z-index", "2")
    });
    $(".btn_prompt.keyboard").click(function() {
        $(".txt_prompt").not($(this).siblings()).hide().parent().css("z-index", "1");
        $(this).siblings(".numInputArea").hasClass("on") ? $(this).siblings(".txt_prompt").hide().parent().css("z-index", "1") : $(this).siblings(".txt_prompt").show().parent().css("z-index", "2")
    });
    $(".btn_chat.off").click(function() {
        n && clearTimeout(n);
        var t = $(this).find(".chatMaintain");
        $(".chatMaintain").not(t).hide();
        t.toggle();
        n = setTimeout(function() {
            t.css("display") === "block" && t.hide()
        }, 3e3)
    });
    $(function() {
        $(document).bind("click touchend", function(n) {
            var t = $(n.target);
            t.closest(".btn_chat.off,.chatMaintain").length == 0 && $(".chatMaintain").hide()
        })
    });
    $(document).on("focus", ":text,:password,textarea", function() {
        var n = i.match(/(\(ipod|\(iphone|\(ipad)/) ? 500 : 0;
        setTimeout(function() {
            $(".mask").addClass("mask_noBottom")
        }, n);
        e = window.innerHeight;
        $(".footer").css("top", v);
        clearTimeout(o)
    });
    $(document).on("focusout", ":text,:password,textarea", function() {
        s()
    });
    if ($(window).resize(function() {
            window.innerHeight != e && s()
        }), $(".btn_ADclose").click(function() {
            $(".btn_AD").remove()
        }), $(".memberDrop").click(function() {
            $(this).siblings(".memberDrop").removeClass("on").find("ul").slideUp("fast");
            $(this).toggleClass("on");
            $(this).hasClass("on") ? $(this).find("ul").slideDown("fast") : $(this).find("ul").slideUp("fast")
        }), $(".memberDrop ul").click(function() {
            event.stopPropagation()
        }), $(".girlTitle > li").click(function() {
            $(this).addClass("on").siblings().removeClass("on");
            switch ($(this).attr("id")) {
                case "btn_girlC01":
                    $(this).parent().animate({
                        scrollLeft: 0
                    }, 500);
                    $("#img_girlC01,#girlC01").fadeIn().addClass("on").siblings('img,[class*="girlContent"]').removeClass("on").hide();
                    break;
                case "btn_girlC02":
                    $(this).parent().animate({
                        scrollLeft: 0
                    }, 500);
                    $("#img_girlC02,#girlC02").fadeIn().addClass("on").siblings('img,[class*="girlContent"]').removeClass("on").hide();
                    break;
                case "btn_girlC03":
                    $("#img_girlC03,#girlC03").fadeIn().addClass("on").siblings('img,[class*="girlContent"]').removeClass("on").hide();
                    break;
                case "btn_girlC04":
                    $(this).parent().animate({
                        scrollLeft: 200
                    }, 500);
                    $("#img_girlC04,#girlC04").fadeIn().addClass("on").siblings('img,[class*="girlContent"]').removeClass("on").hide();
                    break;
                case "btn_girlC05":
                    $(this).parent().animate({
                        scrollLeft: 200
                    }, 500);
                    $("#img_girlC05,#girlC05").fadeIn().addClass("on").siblings('img,[class*="girlContent"]').removeClass("on").hide()
            }
        }), jQuery("#GameMainMenu").val()) {
        var h = JSON.parse(jQuery("#GameMainMenu").val()),
            y = new Swiper(".swiper2", {
                spaceBetween: 30,
                loop: !0,
                effect: "fade",
                speed: 600,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: !1
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            }),
            r = "GameMainMenuID",
            c = 0;
        localStorage && (u = localStorage.getItem(r), u === null || $(".container_main").hasClass("container_login") ? localStorage.removeItem(r) : c = u);
        f = new Swiper(".swiper1", {
            touchRatio: .5,
            direction: "vertical",
            autoHeight: !0,
            initialSlide: c,
            pagination: {
                el: ".GameList_L",
                bulletClass: "btn_GL",
                bulletActiveClass: "on",
                clickable: !0,
                renderBullet: function(n, t) {
                    return `<div class="${t}" >
                                                <h2>${h[n].name}</h2>
                                                <div class="${h[n].iconClass}"></div>
                                            </div >`
                }
            },
            on: {
                slideChangeTransitionEnd: function() {
                    $(".swiper-slide").scrollTop(0);
                    localStorage && localStorage.setItem(r, this.activeIndex)
                }
            }
        });
        f.slides.on("touchstart", function(n) {
            t = Math.floor(this.scrollTop);
            l = n.targetTouches[0].pageY
        }, !0);
        f.slides.on("touchmove", function(n) {
            a = n.targetTouches[0].pageY;
            var r = a - l,
                i = this,
                u = i.scrollHeight > i.offsetHeight && (r < 0 && t === 0 || r > 0 && t === i.scrollHeight - i.offsetHeight || t > 0 && t < i.scrollHeight - i.offsetHeight && (i.scrollHeight < i.clientHeight + i.scrollTop - 10 || r > 0));
            u && n.stopPropagation()
        }, !0)
    }
    $(".mainMenu").click(function() {
        $(this).toggleClass("active")
    });
    $(document).bind("touchstart", function(n) {
        $(n.target).closest(`.mainMenu,.winner li,.giftList li`).length <= 0 && $(".mainMenu,.winner li,.giftList li").hasClass("active") && $(".mainMenu,.winner li,.giftList li").removeClass("active")
    });
    $(".popMsgSend,.memberSend,.selectBotton,.gameLink_btn").on("touchstart", function() {
        $(this).addClass("active")
    });
    $(".popMsgSend,.memberSend,.selectBotton,.gameLink_btn").on("touchend", function() {
        $(this).removeClass("active")
    })
});
document.addEventListener("touchstart", function() {}, !0);
$(document).ready(function() {
    var n;
    $(".pMail_listTitle").off();
    $("div.pMail").on("click", ".pMail_listTitle,.icon_arrow", function() {
        $(".pMail_listT").not($(this)).removeClass("on");
        $(".pMail_listIn").not($(this).siblings()).slideUp("fast");
        $(this).parent(".pMail_listT").parent(".pMail_list").children(".pMail_listIn").css("display") == "none" ? ($(this).parent(".pMail_listT").parent(".pMail_list").children(".pMail_listIn").slideDown("fast"), $(this).parent(".pMail_listT").addClass("on")) : ($(this).parent(".pMail_listT").parent(".pMail_list").children(".pMail_listIn").slideUp("fast"), $(this).parent(".pMail_listT").removeClass("on"))
    });
    $("div.pMail").on("click", ".pMailCheckbox", function() {
        $(this).is(".on") ? $(this).removeClass("on") : $(this).addClass("on")
    });
    $("#BtnSelectAll").on("click", function() {
        $(".pMailCheckbox").addClass("on")
    });
    $("#BtnSelectAllCancel").on("click", function() {
        $(".pMailCheckbox").removeClass("on")
    });
    $(document).on("touchstart", function(n) {
        n.stopPropagation();
        var i = $(".footer_DW_open").length > 0 && $(".footer_DW_open").hasClass("on"),
            t = $(n.target).attr("id"),
            r = ($(n.target).hasClass("footer_list") || t == "MemberDeposit" || t == "MemberWithdrawal" || t == "PlatformTransfer" || t == "PlatformTransferSpan" || t == "MemberDepositSpan" || t == "MemberWithdrawalSpan" || t == "MemberDepositImage" || t == "MemberWithdrawalImage" || t == "DepositCenterH5") && !$(n.target).hasClass("btn_footer_DW off");
        $("#FooterTouchstartControll").length > 0 && !r && i && ($(".footer_DW_open").removeClass("on"), $("body").css("-webkit-overflow-scrolling", "touch").css("overflow", "auto"), angular.element("#FooterTouchstartControll").scope().$apply(() => {
            angular.element("#FooterTouchstartControll").controller().RefreshFooterActivity()
        }))
    });
    $("#callLogin").click(function() {
        var n = $(".mask,.mask_join,.mask_all").css("display");
        n === "block" ? $(".container_main").css({
            position: "fixed",
            top: "0px"
        }) : $(".container_main").removeAttr("style")
    });
    n = function(n) {
        (n.stopPropagation(), n.originalEvent.data == "closemenu") && ($(".inforMDropOUT").slideUp("fast"), $("div.icon_inforMoney").removeClass("on"))
    };
    $(window).on("message", n);
    $(".popup_close").click(function() {
        $("html,body").removeClass("ovfHiden")
    })
});
var oriApp = function() {
        return {
            changeTitle: function(n) {
                typeof JBS != "undefined" ? JBS.ChangeTitle(n) : window.webkit && window.webkit.messageHandlers.ChangeTitle.postMessage(n)
            },
            shareRefLink: function(n) {
                typeof JBS != "undefined" ? JBS.shareRefLink(n) : typeof webkit != "undefined" && window.webkit && window.webkit.messageHandlers.shareRefLink.postMessage(n)
            },
            backUrl: function(n) {
                typeof JBS != "undefined" ? JBS.backUrl(n) : typeof webkit != "undefined" && window.webkit && window.webkit.messageHandlers.backUrl.postMessage(n)
            }
        }
    }(),
    embeddedApp = function() {
        var n;
        return {
            openCslive: function(n) {
                typeof JBS != "undefined" ? JBS.openCslive(n) : window.webkit ? window.webkit.messageHandlers.openCslive.postMessage(n) : window.open("/OnlineCS", "_blank")
            },
            initSaveImagesCallback: function(t) {
                n = t
            },
            saveImages: function(n) {
                window.webkit && window.webkit.messageHandlers.saveImages.postMessage(n)
            },
            saveImagesCallback: function(t) {
                typeof n == "function" && (t ? n(!0) : n(!1))
            }
        }
    }()