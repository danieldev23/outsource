(function(n, t) {
    "use strict";
    var i = typeof exports == "object" && typeof module != "undefined" ? module.exports = t(require("angular"), require("moment")) : typeof define == "function" && define.amd ? define(["angular", "moment"], t) : t(n.angular, n.moment)
})(this, function(n, t) {
    var i = n.module("datePicker", ["datePickerMobileTemplate"]);
    i.constant("datePickerConfig", {
        template: "templates/datepicker.html",
        view: "month",
        views: ["year", "month", "date", "hours", "minutes"],
        momentNames: {
            year: "year",
            month: "month",
            date: "day",
            hours: "hours",
            minutes: "minutes"
        },
        viewConfig: {
            year: ["years", "isSameYear"],
            month: ["months", "isSameMonth"],
            hours: ["hours", "isSameHour"],
            minutes: ["minutes", "isSameMinutes"]
        },
        step: 5
    });
    i.filter("mFormat", function() {
        return function(n, i, r) {
            return t.isMoment(n) ? r ? t.tz(n, r).format(i) : n.format(i) : n ? t(n).format(i) : ""
        }
    });
    i.directive("datePicker", ["datePickerConfig", "datePickerUtils", function(i, r) {
        return {
            require: "?ngModel",
            template: '<div ng-include="template"><\/div>',
            scope: {
                model: "=datePicker",
                after: "=?",
                before: "=?"
            },
            link: function(u, f, e, o) {
                function tt() {
                    u.views = i.views.concat();
                    u.view = e.view || i.view;
                    u.views = u.views.slice(u.views.indexOf(e.maxView || "year"), u.views.indexOf(e.minView || "minutes") + 1);
                    (u.views.length === 1 || u.views.indexOf(u.view) === -1) && (u.view = u.views[0])
                }

                function it(n) {
                    return r.getDate(u, e, n)
                }

                function y() {
                    var t = u.view,
                        n;
                    r.setParams(p, b);
                    u.model && !a && (u.date = w(u.model), a = !1);
                    n = u.date;
                    switch (t) {
                        case "year":
                            u.years = r.getVisibleYears(n);
                            break;
                        case "month":
                            u.months = r.getVisibleMonths(n);
                            break;
                        case "date":
                            u.weekdays = u.weekdays || r.getDaysOfWeek();
                            u.weeks = r.getVisibleWeeks(n);
                            break;
                        case "hours":
                            u.hours = r.getVisibleHours(n);
                            break;
                        case "minutes":
                            u.minutes = r.getVisibleMinutes(n, l)
                    }
                    k()
                }

                function ct() {
                    return u.view !== "date" ? u.view : u.date ? u.date.month() : null
                }
                var a = !1,
                    p = u.tz = e.timezone,
                    w = r.createMoment,
                    et = r.eventIsForPicker,
                    l = parseInt(e.step || i.step, 10),
                    ot = !!e.partial,
                    s = it("minDate"),
                    h = it("maxDate"),
                    rt = f[0].id,
                    c = u.now = w(),
                    ut = u.date = w(u.model || c),
                    st = e.autoClose === "true",
                    ht = e.weekdaysMin === "true",
                    b = e.firstDay && e.firstDay >= 0 && e.firstDay <= 6 ? parseInt(e.firstDay, 10) : t().weekday(0).day(),
                    ft, k, v, d, g, nt;
                r.setParams(p, b);
                u.model || ut.minute(Math.ceil(ut.minute() / l) * l).second(0);
                u.template = e.template || i.template;
                u.watchDirectChanges = e.watchDirectChanges !== undefined;
                u.callbackOnSetDate = e.dateChange ? r.findFunction(u, e.dateChange) : undefined;
                tt();
                u.setView = function(n) {
                    u.views.indexOf(n) !== -1 && (u.view = n)
                };
                u.weekdaysMin = ht;
                u.selectDate = function(n) {
                    if (e.disabled || (v(u.date, n) && (n = u.date), n = d(n), !n)) return !1;
                    u.date = n;
                    var t = u.views[u.views.indexOf(u.view) + 1];
                    (!t || ot || u.model) && ft(n);
                    t ? u.setView(t) : st ? (f.addClass("hidden"), u.$emit("hidePicker")) : k()
                };
                ft = function(n) {
                    n && (u.model = n, o && o.$setViewValue(n));
                    u.$emit("setDate", u.model, u.view);
                    u.callbackOnSetDate && u.callbackOnSetDate(e.datePicker, u.date)
                };
                u.$watch(ct, y);
                u.watchDirectChanges && u.$watch("model", function() {
                    a = !1;
                    y()
                });
                k = function() {
                    var o = u.view,
                        c = u.date,
                        s = [],
                        t = "",
                        n, f, l, e;
                    if (r.setParams(p, b), o === "date")
                        for (l = u.weeks, n = 0; n < l.length; n++)
                            for (e = l[n], s.push([]), f = 0; f < e.length; f++) t = "", r.isSameDay(c, e[f]) && (t += "active"), g(e[f], o) && (t += " now"), e[f].month() === c.month() && nt(e[f]) || (t += " disabled"), s[n].push(t);
                    else {
                        var a = i.viewConfig[o],
                            h = u[a[0]],
                            v = a[1];
                        for (n = 0; n < h.length; n++) t = "", r[v](c, h[n]) && (t += "active"), g(h[n], o) && (t += " now"), nt(h[n]) || (t += " disabled"), s.push(t)
                    }
                    u.classes = s
                };
                u.next = function(n) {
                    var i = t(u.date);
                    n = n || 1;
                    switch (u.view) {
                        case "year":
                        case "month":
                            i.year(i.year() + n);
                            break;
                        case "date":
                            i.month(i.month() + n);
                            break;
                        case "hours":
                        case "minutes":
                            i.hours(i.hours() + n)
                    }
                    i = d(i);
                    i && (u.date = i, a = !0, y())
                };
                nt = function(n) {
                    var t = !0;
                    return s && s.isAfter(n) && (t = v(s, n)), h && h.isBefore(n) && (t &= v(h, n)), t
                };
                v = function(n, t) {
                    return n.isSame(t, i.momentNames[u.view]) ? !0 : !1
                };
                d = function(n) {
                    return s && s.isAfter(n) ? s : h && h.isBefore(n) ? h : n
                };
                g = function(n, t) {
                    var i = !0;
                    switch (t) {
                        case "minutes":
                            i &= ~~(c.minutes() / l) == ~~(n.minutes() / l);
                        case "hours":
                            i &= c.hours() === n.hours();
                        case "date":
                            i &= c.date() === n.date();
                        case "month":
                            i &= c.month() === n.month();
                        case "year":
                            i &= c.year() === n.year()
                    }
                    return i
                };
                u.prev = function(n) {
                    return u.next(-n || -1)
                };
                rt && u.$on("pickerUpdate", function(t, i, r) {
                    if (et(i, rt)) {
                        var u = !1,
                            f = !1;
                        n.isDefined(r.minDate) && (s = r.minDate ? r.minDate : !1, f = !0);
                        n.isDefined(r.maxDate) && (h = r.maxDate ? r.maxDate : !1, f = !0);
                        n.isDefined(r.minView) && (e.minView = r.minView, u = !0);
                        n.isDefined(r.maxView) && (e.maxView = r.maxView, u = !0);
                        e.view = r.view || e.view;
                        u && tt();
                        f && y()
                    }
                })
            }
        }
    }]);
    n.module("datePicker").factory("datePickerUtils", function() {
        var r, u, i = function(n, i, u, f, e) {
            var o = Date.UTC(n | 0, i | 0, u | 0, f | 0, e | 0);
            return r ? t.tz(o, r) : t(o)
        };
        return {
            getVisibleMinutes: function(n, t) {
                for (var e = n.year(), o = n.month(), s = n.date(), h = n.hours(), u, c = n.utcOffset() / 60, f = [], r = 0; r < 60; r += t) u = i(e, o, s, h - c, r), f.push(u);
                return f
            },
            getVisibleWeeks: function(n) {
                var f, e, r, i;
                for (n = t(n), f = n.year(), e = n.month(), n.date(1), r = n.day(), n.date(u - (r + (u >= r ? 6 : -1))), i = []; i.length < 6;) {
                    if (n.year() === f && n.month() > e) break;
                    i.push(this.getDaysOfWeek(n));
                    n.add(7, "d")
                }
                return i
            },
            getVisibleYears: function(n) {
                var u = t(n),
                    r = u.year(),
                    f, s, e, o, h;
                for (u.year(r - r % 10), r = u.year(), f = u.utcOffset() / 60, s = [], h = 0; h < 12; h++) e = i(r, 0, 1, 0 - f), o = e.utcOffset() / 60, o !== f && (e = i(r, 0, 1, 0 - o), f = o), s.push(e), r++;
                return s
            },
            getDaysOfWeek: function(n) {
                var s;
                n = n ? n : r ? t.tz(r).day(u) : t().day(u);
                var h = n.year(),
                    c = n.month(),
                    e = n.date(),
                    l = [],
                    f, a = n.utcOffset() / 60,
                    o;
                for (s = 0; s < 7; s++) f = i(h, c, e, 0 - a, 0, !1), o = f.utcOffset() / 60, o !== a && (f = i(h, c, e, 0 - o, 0, !1)), l.push(f), e++;
                return l
            },
            getVisibleMonths: function(n) {
                for (var f = n.year(), e = n.utcOffset() / 60, o = [], t, u, r = 0; r < 12; r++) t = i(f, r, 1, 0 - e, 0, !1), u = t.utcOffset() / 60, u !== e && (t = i(f, r, 1, 0 - u, 0, !1)), o.push(t);
                return o
            },
            getVisibleHours: function(n) {
                for (var f = n.year(), e = n.month(), o = n.date(), s = [], r, u, h = n.utcOffset() / 60, t = 0; t < 24; t++) r = i(f, e, o, t - h, 0, !1), u = r.utcOffset() / 60, u !== h && (r = i(f, e, o, t - u, 0, !1)), s.push(r);
                return s
            },
            isAfter: function(n, t) {
                return n && n.unix() >= t.unix()
            },
            isBefore: function(n, t) {
                return n.unix() <= t.unix()
            },
            isSameYear: function(n, t) {
                return n && n.year() === t.year()
            },
            isSameMonth: function(n, t) {
                return this.isSameYear(n, t) && n.month() === t.month()
            },
            isSameDay: function(n, t) {
                return this.isSameMonth(n, t) && n.date() === t.date()
            },
            isSameHour: function(n, t) {
                return this.isSameDay(n, t) && n.hours() === t.hours()
            },
            isSameMinutes: function(n, t) {
                return this.isSameHour(n, t) && n.minutes() === t.minutes()
            },
            setParams: function(n, t) {
                r = n;
                u = t
            },
            scopeSearch: function(n, t, i) {
                var f = n,
                    e = t.split("."),
                    r, u, o = e.length;
                do {
                    for (r = f = f.$parent, u = 0; u < o; u++) r = r[e[u]], !r;
                    if (r && i(r)) return r
                } while (f.$parent);
                return !1
            },
            findFunction: function(t, i) {
                return this.scopeSearch(t, i, function(t) {
                    return n.isFunction(t)
                })
            },
            findParam: function(n, t) {
                return this.scopeSearch(n, t, function() {
                    return !0
                })
            },
            createMoment: function(n) {
                return r ? t.tz(n, r) : t.isMoment(n) ? t.unix(n.unix()) : t(n)
            },
            getDate: function(n, t, i) {
                var r = !1;
                return t[i] && (r = this.createMoment(t[i]), r.isValid() || (r = this.findParam(n, t[i]), r && (r = this.createMoment(r)))), r
            },
            eventIsForPicker: function(t, i) {
                return n.isArray(t) && t.indexOf(i) > -1 || t === i
            }
        }
    });
    i = n.module("datePicker");
    i.directive("dateRange", ["$compile", "datePickerUtils", "dateTimeConfig", function(i, r, u) {
        function f(i, r, f, e, o) {
            return u.template(n.extend(i, {
                ngModel: f,
                minDate: e && t.isMoment(e) ? e.format() : !1,
                maxDate: o && t.isMoment(o) ? o.format() : !1
            }), r)
        }

        function e() {
            return "picker" + Math.random().toString().substr(2)
        }
        return {
            scope: {
                start: "=",
                end: "="
            },
            link: function(t, u, o) {
                function p(n) {
                    t.$broadcast("pickerUpdate", s[0], {
                        maxDate: n
                    })
                }

                function w(n) {
                    t.$broadcast("pickerUpdate", s[1], {
                        minDate: n
                    })
                }
                var h = null,
                    c = u[0].id,
                    s = [e(), e()],
                    l = r.createMoment,
                    y = r.eventIsForPicker,
                    a, v;
                t.dateChange = function(n, t) {
                    h && h(n, t)
                };
                c && t.$on("pickerUpdate", function(n, i, r) {
                    y(i, c) && t.$broadcast("pickerUpdate", s, r)
                });
                r.setParams(o.timezone);
                t.start = l(t.start);
                t.end = l(t.end);
                t.$watchGroup(["start", "end"], function(n) {
                    w(n[0]);
                    p(n[1])
                });
                n.isDefined(o.dateChange) && (h = r.findFunction(t, o.dateChange));
                o.onSetDate = "dateChange";
                a = '<div><table class="date-range"><tr><td valign="top">' + f(o, s[0], "start", !1, t.end) + '<\/td><td valign="top">' + f(o, s[1], "end", t.start, !1) + "<\/td><\/tr><\/table><\/div>";
                v = i(a)(t);
                u.append(v)
            }
        }
    }]);
    var r = "ng-pristine",
        u = "ng-dirty",
        i = n.module("datePicker");
    i.constant("dateTimeConfig", {
        template: function(n, t) {
            return "<div " + (t ? 'id="' + t + '" ' : "") + 'date-picker="' + n.ngModel + '" ' + (n.view ? 'view="' + n.view + '" ' : "") + (n.maxView ? 'max-view="' + n.maxView + '" ' : "") + (n.maxDate ? 'max-date="' + n.maxDate + '" ' : "") + (n.autoClose ? 'auto-close="' + n.autoClose + '" ' : "") + (n.template ? 'template="' + n.template + '" ' : "") + (n.minView ? 'min-view="' + n.minView + '" ' : "") + (n.minDate ? 'min-date="' + n.minDate + '" ' : "") + (n.partial ? 'partial="' + n.partial + '" ' : "") + (n.step ? 'step="' + n.step + '" ' : "") + (n.onSetDate ? 'date-change="' + n.onSetDate + '" ' : "") + (n.ngModel ? 'ng-model="' + n.ngModel + '" ' : "") + (n.firstDay ? 'first-day="' + n.firstDay + '" ' : "") + (n.timezone ? 'timezone="' + n.timezone + '" ' : "") + (n.weekdaysMin ? ' weekdays-min="' + n.weekdaysMin + '" ' : "") + 'class="date-picker-date-time"><\/div>'
        },
        format: "YYYY-MM-DD HH:mm",
        views: ["date", "year", "month", "hours", "minutes"],
        autoClose: !1,
        position: "relative",
        weekdaysMin: !1
    });
    i.directive("dateTimeAppend", function() {
        return {
            link: function(n, t) {
                t.bind("click", function() {
                    t.find("input")[0].focus()
                })
            }
        }
    });
    i.directive("dateTime", ["$compile", "$document", "$filter", "dateTimeConfig", "$parse", "datePickerUtils", function(i, f, e, o, s, h) {
        var c = f.find("body"),
            l = e("mFormat");
        return {
            require: "ngModel",
            scope: !0,
            link: function(f, e, a, v) {
                function bt(n) {
                    return l(n, b, pt)
                }

                function kt(n) {
                    return n.length === b.length ? n : n.length === 0 ? n : undefined
                }

                function ct(n) {
                    k = n;
                    a.minDate = n ? n.format() : n;
                    et = t.isMoment(n)
                }

                function lt(n) {
                    d = n;
                    a.maxDate = n ? n.format() : n;
                    ot = t.isMoment(n)
                }

                function at() {
                    ht = o.template(a)
                }

                function dt(n) {
                    n.stopPropagation();
                    v.$pristine && (v.$dirty = !0, v.$pristine = !1, e.removeClass(r).addClass(u), tt && tt.$setDirty(), v.$render())
                }

                function nt() {
                    y && (y.remove(), y = null);
                    w && (w.remove(), w = null)
                }

                function vt() {
                    var t, u, r, o;
                    y || (y = i(ht)(f), f.$digest(), st || (f.$on("setDate", function(n, t, i) {
                        dt(n);
                        g && g(f, {
                            $event: n
                        });
                        yt && p[p.length - 1] === i && nt()
                    }), f.$on("hidePicker", function() {
                        e[0].blur()
                    }), f.$on("$destroy", nt), st = !0), ft === "absolute" ? (t = e[0].getBoundingClientRect(), u = t.height || e[0].offsetHeight, y.css({
                        visibility: "hidden"
                    }), c.append(y), r = y[0].getBoundingClientRect(), o = r && t.right >= r.width ? t.right - r.width : t.left, y.css({
                        top: t.top + u + "px",
                        left: o + "px",
                        display: "block",
                        position: ft,
                        visibility: "visible"
                    })) : (w = n.element("<div date-picker-wrapper><\/div>"), e[0].parentElement.insertBefore(w[0], e[0]), w.append(y), y.css({
                        top: e[0].offsetHeight + "px",
                        display: "block"
                    })), y.bind("mousedown", function(n) {
                        n.preventDefault()
                    }))
                }
                var b = a.format || o.format,
                    tt = e.inheritedData("$formController"),
                    p = s(a.views)(f) || o.views.concat(),
                    it = a.view || p[0],
                    rt = p.indexOf(it),
                    yt = a.autoClose ? s(a.autoClose)(f) : o.autoClose,
                    y = null,
                    ut = e[0].id,
                    ft = a.position || o.position,
                    w = null,
                    k = null,
                    et = null,
                    d = null,
                    ot = null,
                    pt = a.timezone || !1,
                    wt = h.eventIsForPicker,
                    g = null,
                    st = !1,
                    gt = a.weekdaysMin ? s(a.weekdaysMin)(f) : o.weekdaysMin,
                    ht;
                rt === -1 && p.splice(rt, 1);
                p.unshift(it);
                v.$formatters.push(bt);
                v.$parsers.unshift(kt);
                n.isDefined(a.minDate) && (ct(h.findParam(f, a.minDate)), v.$validators.min = function(n) {
                    return et ? t.isMoment(n) && (k.isSame(n) || k.isBefore(n)) : !0
                });
                n.isDefined(a.maxDate) && (lt(h.findParam(f, a.maxDate)), v.$validators.max = function(n) {
                    return ot ? t.isMoment(n) && (d.isSame(n) || d.isAfter(n)) : !0
                });
                n.isDefined(a.dateChange) && (g = s(a.dateChange));
                ut && f.$on("pickerUpdate", function(t, i, r) {
                    if (wt(i, ut) && !y) {
                        var u = !1;
                        n.isDefined(r.minDate) && (ct(r.minDate), u = !0);
                        n.isDefined(r.maxDate) && (lt(r.maxDate), u = !0);
                        n.isDefined(r.minView) && (a.minView = r.minView);
                        n.isDefined(r.maxView) && (a.maxView = r.maxView);
                        a.view = r.view || a.view;
                        u && v.$validate();
                        n.isDefined(r.format) && (b = a.format = r.format || o.format, v.$modelValue = -1);
                        at()
                    }
                });
                e.bind("focus", vt);
                e.bind("click", vt);
                e.bind("blur", nt);
                at()
            }
        }
    }])
})