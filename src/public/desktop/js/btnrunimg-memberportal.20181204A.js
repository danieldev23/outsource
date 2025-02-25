function Slide(n, t, i, r) {
    this.container = $(n);
    this.list = $(n + " .J_slide_list");
    this.handle = $(n + " .J_slide_trigger li");
    this.item = $(n + " .J_slide_item");
    this.itemWH = 0;
    this.count = this.handle.length;
    this.timer = null;
    this.eTime = null;
    this.options = $.extend({
        auto: !0,
        delay: 4,
        duration: 500,
        effect: "fade",
        event: "mouseover",
        firstDelay: null,
        index: 1,
        vertical: !1
    }, t);
    this.init();
    i && i.call(this, r)
}

function Tab(n, t, i) {
    this.container = $(n);
    this.handle = $(n + " .J_tab_nav li");
    this.panel = $(n + " .J_tab_panel");
    this.count = this.handle.length;
    this.timer = null;
    this.eTime = null;
    this.options = $.extend({
        auto: !1,
        delay: 4,
        event: "mouseover",
        index: 1
    }, t);
    this.init();
    i && i.call(this)
}
Slide.prototype = {
    init: function() {
        var r, u, f = this,
            i = this.list,
            t = this.item,
            e = this.count,
            n = this.options,
            s = !!n.auto,
            o = !!n.vertical;
        n.effect === "fade" && (i.css({
            position: "relative"
        }), t.css({
            position: "absolute"
        }));
        n.effect === "slide" && (i.css({
            position: "absolute"
        }), i.parent().hasClass("J_slide_clip") || i.wrap('<div class="J_slide_clip"><\/div>'), r = t.outerWidth(!0), u = t.outerHeight(!0), this.container.find(".J_slide_clip").css({
            position: "relative",
            overflow: "hidden",
            height: u,
            width: r
        }), this.itemWH = o ? u : r, o || (t.css({
            float: "left"
        }), i.width(t.width() * t.length)));
        this.handle.bind(n.event, function() {
            f._trigger(this)
        });
        n.index === "r" && (n.index = this._random(e));
        (n.index > e || n.index < 1) && (n.index = 1);
        this._showFirst(n.index);
        s && (this._auto(n.firstDelay), this.container.hover(function() {
            f._stop()
        }, function() {
            f._auto()
        }))
    },
    _random: function(n) {
        return parseInt(Math.random() * n + 1)
    },
    _trigger: function(n) {
        var t, i = this.options,
            r = this.handle;
        i.index !== r.index(n) + 1 && (t = i.index = r.index(n) + 1, this._show(t))
    },
    _show: function(n) {
        var t = this,
            i = this.options,
            r = !!i.vertical;
        this.handle.removeClass("cur").eq(n - 1).addClass("cur");
        i.effect === "fade" && (clearTimeout(this.eTime), this.eTime = setTimeout(function() {
            t.item.not(t).css({
                zIndex: -1
            }).eq(n - 1).css({
                zIndex: 9
            }).animate({
                opacity: 1
            }, t.options.duration, function() {
                t.item.not(this).css({
                    opacity: 0
                })
            })
        }, 150));
        i.effect === "slide" && (itemWH = this.itemWH, r ? this.list.stop().animate({
            left: -itemWH * (n - 1)
        }, this.options.duration) : this.list.stop().animate({
            left: -itemWH * (n - 1)
        }, this.options.duration))
    },
    _showFirst: function(n) {
        var t = this.options,
            i = !!t.vertical;
        this.handle.removeClass("cur").eq(n - 1).addClass("cur");
        t.effect === "fade" && this.item.not(this).css({
            zIndex: -1,
            opacity: 0
        }).eq(n - 1).css({
            zIndex: 9,
            opacity: 1
        });
        t.effect === "slide" && (itemWH = this.itemWH, i ? this.list.css({
            top: -itemWH * (n - 1)
        }) : this.list.css({
            left: -itemWH * (n - 1)
        }))
    },
    _auto: function(n) {
        var i = this,
            t = i.options;
        this.timer = setTimeout(function() {
            t.index = t.index < i.count ? ++t.index : 1;
            i._show(t.index);
            i._auto()
        }, n ? n * 1e3 : t.delay * 1e3)
    },
    _stop: function() {
        clearTimeout(this.timer)
    }
};
Tab.prototype = {
    init: function() {
        var t = this,
            i = this.count,
            n = this.options,
            r = !!n.auto;
        this.handle.bind(n.event, function() {
            t._trigger(this)
        });
        n.index === "r" && (n.index = this._random(i));
        this._show(n.index);
        r && (this._auto(), this.container.hover(function() {
            t._stop()
        }, function() {
            t._auto()
        }))
    },
    _random: function(n) {
        return parseInt(Math.random() * n + 1)
    },
    _trigger: function(n) {
        var t, i = this.options,
            r = this.handle;
        i.index !== r.index(n) + 1 && (t = i.index = r.index(n) + 1, this._show(t))
    },
    _show: function(n) {
        this.handle.removeClass("cur").eq(n - 1).addClass("cur");
        this.panel.addClass("none").eq(n - 1).removeClass("none")
    },
    _auto: function() {
        var t = this,
            n = t.options;
        this.timer = setTimeout(function() {
            n.index = n.index < t.count ? ++n.index : 1;
            t._show(n.index);
            t._auto()
        }, n.delay * 1e3)
    },
    _stop: function() {
        clearTimeout(this.timer)
    }
}