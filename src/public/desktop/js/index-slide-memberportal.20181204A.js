(function(n) {
    n.fn.DB_tabMotionBanner = function(t) {
        var i = {
            key: "",
            autoRollingTime: 3e3,
            bgSpeed: 1e3,
            motion: ""
        };
        return n.extend(i, t), this.each(function() {
            function w() {
                b();
                k();
                v();
                e()
            }

            function b() {
                var n, o, e, f, r, s, h;
                for (y.css({
                        position: "relative"
                    }), u.css({
                        position: "absolute"
                    }), n = 0; n < c; n++) n == t ? u.eq(n).show() : u.eq(n).hide();
                for (n = 0; n < u.length; n++)
                    for (o = u.eq(n).find("img"), e = 0; e < o.length; e++) f = o.eq(e), r = i.motion[f.attr("class")], r != null && (s = Number(f.css("left").split("px")[0]), h = Number(f.css("top").split("px")[0]), f.data({
                        x2: s,
                        y2: h,
                        x1: s + r.left,
                        y1: h + r.top,
                        opacity: r.opacity,
                        speed: r.speed,
                        delay: r.delay == null ? 0 : r.delay
                    }))
            }

            function k() {
                r.on("mouseenter", function() {
                    clearInterval(l);
                    s.show();
                    h.show()
                });
                r.on("mouseleave", function() {
                    v();
                    s.hide();
                    h.hide()
                });
                f.on("click", function() {
                    n(this).index() != t && (t = n(this).index(), e())
                });
                f.on("mouseenter", function() {
                    o(n(this).find("img"), "src", "_off", "_on");
                    n(this).index() != t && (t = n(this).index(), e())
                });
                f.on("mouseleave", function() {
                    t != n(this).index() && o(n(this).find("img"), "src", "_on", "_off")
                });
                s.on("click", function() {
                    a()
                });
                h.on("click", function() {
                    t--;
                    t == -1 && (t = c - 1);
                    e()
                })
            }

            function a() {
                t = ++t % c;
                e()
            }

            function v() {
                l = setInterval(a, i.autoRollingTime)
            }

            function e() {
                for (var h, c, s, r, l, e = 0; e < u.length; e++)
                    if (r = u.eq(e), h = p.eq(e), t == e) {
                        for (r.show(), c = r.find("img"), s = 0; s < c.length; s++) r = c.eq(s), l = i.motion[r.attr("class")], l != null && (r.css({
                            left: r.data("x1"),
                            top: r.data("y1"),
                            opacity: r.data("opacity")
                        }), r.stop().delay(r.data("delay")).queue(function() {
                            n(this).css("display", "block");
                            n(this).dequeue()
                        }).animate({
                            left: r.data("x2"),
                            top: r.data("y2"),
                            opacity: 1
                        }, r.data("speed")));
                        o(f.eq(e).find("img"), "src", "_off", "_on");
                        f.eq(e).addClass("select");
                        h.stop(!0, !0).fadeIn(i.bgSpeed)
                    } else r.hide(), o(f.eq(e).find("img"), "src", "_on", "_off"), f.eq(e).removeClass("select"), h.stop(!0, !0).fadeOut(i.bgSpeed)
            }

            function o(n, t, i, r) {
                var u = n.attr(t);
                String(u).search(i) != -1 && n.attr(t, u.replace(i, r))
            }
            var r = n(this),
                y = r.find(".DB_imgSet"),
                u = r.find(".DB_imgSet li"),
                d = r.find(".DB_menuSet"),
                f = r.find(".DB_menuSet li"),
                p = r.find(".DB_bgSet li"),
                s = r.find(".DB_next"),
                h = r.find(".DB_prev"),
                c = u.length,
                t = 0,
                l = 0;
            w()
        })
    }
})(jQuery)