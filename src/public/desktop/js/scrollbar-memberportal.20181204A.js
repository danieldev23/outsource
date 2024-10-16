(function(n, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
})(typeof window != "undefined" ? window : this, function(n, t) {
    function ii(n) {
        var t = !!n && "length" in n && n.length,
            r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function ri(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if (typeof t == "string") {
            if (bf.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return lt.call(t, n) > -1 !== r
        })
    }

    function hr(n, t) {
        while ((n = n[t]) && n.nodeType !== 1);
        return n
    }

    function kf(n) {
        var t = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function yt() {
        u.removeEventListener("DOMContentLoaded", yt);
        n.removeEventListener("load", yt);
        i.ready()
    }

    function et() {
        this.expando = i.expando + et.uid++
    }

    function lr(n, t, r) {
        var u;
        if (r === undefined && n.nodeType === 1)
            if (u = "data-" + t.replace(cr, "-$&").toLowerCase(), r = n.getAttribute(u), typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : df.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                e.set(n, t, r)
            } else r = undefined;
        return r
    }

    function vr(n, t, r, u) {
        var h, e = 1,
            l = 20,
            c = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            s = c(),
            o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || o !== "px" && +s) && ot.exec(i.css(n, t));
        if (f && f[3] !== o) {
            o = o || f[3];
            r = r || [];
            f = +s || 1;
            do e = e || ".5", f = f / e, i.style(n, t, f + o); while (e !== (e = c() / s) && e !== 1 && --l)
        }
        return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
    }

    function o(n, t) {
        var r = typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll(t || "*") : [];
        return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function ui(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function kr(n, t, r, u, f) {
        for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if (e = n[l], e || e === 0)
                if (i.type(e) === "object") i.merge(y, e.nodeType ? [e] : e);
                else if (br.test(e)) {
            for (s = s || h.appendChild(t.createElement("div")), p = (pr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
            i.merge(y, s.childNodes);
            s = h.firstChild;
            s.textContent = ""
        } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; e = y[l++];) {
            if (u && i.inArray(e, u) > -1) {
                f && f.push(e);
                continue
            }
            if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && ui(s), r)
                for (v = 0; e = s[v++];) wr.test(e.type || "") && r.push(e)
        }
        return h
    }

    function pt() {
        return !0
    }

    function nt() {
        return !1
    }

    function gr() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function fi(n, t, r, u, f, e) {
        var o, s;
        if (typeof t == "object") {
            typeof r != "string" && (u = u || r, r = undefined);
            for (s in t) fi(n, s, r, u, t[s], e);
            return n
        }
        if (u == null && f == null ? (f = r, u = r = undefined) : f == null && (typeof r == "string" ? (f = u, u = undefined) : (f = u, u = r, r = undefined)), f === !1) f = nt;
        else if (!f) return n;
        return e === 1 && (o = f, f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function nu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function ee(n) {
        return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n
    }

    function oe(n) {
        var t = ue.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function tu(n, t) {
        var f, c, o, s, h, l, a, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u = s.events, u)) {
                delete h.handle;
                h.events = {};
                for (o in u)
                    for (f = 0, c = u[o].length; f < c; f++) i.event.add(t, o, u[o][f])
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        }
    }

    function se(n, t) {
        var i = t.nodeName.toLowerCase();
        i === "input" && yr.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }

    function b(n, t, u, e) {
        t = gi.apply([], t);
        var l, p, c, a, s, w, h = 0,
            v = n.length,
            d = v - 1,
            y = t[0],
            k = i.isFunction(y);
        if (k || v > 1 && typeof y == "string" && !f.checkClone && re.test(y)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = y.call(this, i, r.html()));
            b(r, t, u, e)
        });
        if (v && (l = kr(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, l.childNodes.length === 1 && (l = p), p || e)) {
            for (c = i.map(o(l, "script"), ee), a = c.length; h < v; h++) s = l, h !== d && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
            if (a)
                for (w = c[c.length - 1].ownerDocument, i.map(c, oe), h = 0; h < a; h++) s = c[h], wr.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : i.globalEval(s.textContent.replace(fe, "")))
        }
        return n
    }

    function iu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0;
            (u = e[f]) != null; f++) r || u.nodeType !== 1 || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && ui(o(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function ru(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body),
            u = i.css(r[0], "display");
        return r.detach(), u
    }

    function oi(n) {
        var r = u,
            t = ei[n];
        return t || (t = ru(n, r), t !== "none" && t || (wt = (wt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = wt[0].contentDocument, r.write(), r.close(), t = ru(n, r), wt.detach()), ei[n] = t), t
    }

    function tt(n, t, r) {
        var o, s, h, u, e = n.style;
        return r = r || bt(n), u = r ? r.getPropertyValue(t) || r[t] : undefined, u !== "" && u !== undefined || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), r && !f.pixelMarginRight() && si.test(u) && uu.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h), u !== undefined ? u + "" : u
    }

    function ci(n, t) {
        return {
            get: function() {
                if (n()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function su(n) {
        if (n in ou) return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = eu.length; t--;)
            if (n = eu[t] + i, n in ou) return n
    }

    function hu(n, t, i) {
        var r = ot.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function cu(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + w[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function lu(t, r, e) {
        var h = !0,
            o = r === "width" ? t.offsetWidth : t.offsetHeight,
            s = bt(t),
            c = i.css(t, "boxSizing", !1, s) === "border-box";
        if (u.msFullscreenElement && n.top !== n && t.getClientRects().length && (o = Math.round(t.getBoundingClientRect()[r] * 100)), o <= 0 || o == null) {
            if (o = tt(t, r, s), (o < 0 || o == null) && (o = t.style[r]), si.test(o)) return o;
            h = c && (f.boxSizingReliable() || o === t.style[r]);
            o = parseFloat(o) || 0
        }
        return o + cu(t, r, e || (c ? "border" : "content"), h, s) + "px"
    }

    function au(n, t) {
        for (var e, u, s, o = [], f = 0, h = n.length; f < h; f++)(u = n[f], u.style) && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || e !== "none" || (u.style.display = ""), u.style.display === "" && st(u) && (o[f] = r.access(u, "olddisplay", oi(u.nodeName)))) : (s = st(u), e === "none" && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
        for (f = 0; f < h; f++)(u = n[f], u.style) && (t && u.style.display !== "none" && u.style.display !== "" || (u.style.display = t ? o[f] || "" : "none"));
        return n
    }

    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u)
    }

    function pu() {
        return n.setTimeout(function() {
            it = undefined
        }), it = i.now()
    }

    function dt(n, t) {
        var r, u = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function wu(n, t, i) {
        for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function le(n, t, u) {
        var f, a, p, v, o, w, h, b, l = this,
            y = {},
            s = n.style,
            c = n.nodeType && st(n),
            e = r.get(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), o.unqueued == null && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() {
            o.unqueued || w()
        }), o.unqueued++, l.always(function() {
            l.always(function() {
                o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = h === "none" ? r.get(n, "olddisplay") || oi(n.nodeName) : h, b === "inline" && i.css(n, "float") === "none" && (s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden", l.always(function() {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (a = t[f], vu.exec(a)) {
                if (delete t[f], p = p || a === "toggle", a === (c ? "hide" : "show"))
                    if (a === "show" && e && e[f] !== undefined) c = !0;
                    else continue;
                y[f] = e && e[f] || i.style(n, f)
            } else h = undefined;
        if (i.isEmptyObject(y))(h === "none" ? oi(n.nodeName) : h) === "inline" && (s.display = h);
        else {
            e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
            p && (e.hidden = !c);
            c ? i(n).show() : l.done(function() {
                i(n).hide()
            });
            l.done(function() {
                var t;
                r.remove(n, "fxshow");
                for (t in y) i.style(n, t, y[t])
            });
            for (f in y) v = wu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = f === "width" || f === "height" ? 1 : 0))
        }
    }

    function ae(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function l(n, t, r) {
        var f, o, s = 0,
            a = l.prefilters.length,
            e = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return !1;
                for (var s = it || pu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, f = u.tweens.length; r < f; r++) u.tweens[r].run(i);
                return e.notifyWith(n, [u, i, t]), i < 1 && f ? t : (e.resolveWith(n, [u]), !1)
            },
            u = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: it || pu(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [u, 1, 0]), e.resolveWith(n, [u, t])) : e.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (ae(h, u.opts.specialEasing); s < a; s++)
            if (f = l.prefilters[s].call(u, n, h, u.opts), f) return i.isFunction(f.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(f.stop, f)), f;
        return i.map(h, wu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function k(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function ff(n) {
        return function(t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function ef(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !1
            }), h
        }
        var f = {},
            o = n === yi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function wi(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function be(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                }
        if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function ke(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function bi(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || ge.test(n) ? u(n, i) : bi(n + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) bi(n + "[" + f + "]", t[f], r, u)
    }

    function hf(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 && n.defaultView
    }
    var y = [],
        u = n.document,
        v = y.slice,
        gi = y.concat,
        ti = y.push,
        lt = y.indexOf,
        at = {},
        af = at.toString,
        ft = at.hasOwnProperty,
        f = {},
        nr = "2.2.3",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        yf = /^-ms-/,
        pf = /-([\da-z])/gi,
        wf = function(n, t) {
            return t.toUpperCase()
        },
        p, ur, fr, er, or, sr, h, vt, a, g, br, wt, ei, it, kt, vu, yu, bu, rt, ku, du, gt, gu, nf, li, sf, ut, ki, ni, di, cf, lf;
    i.fn = i.prototype = {
        jquery: nr,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return v.call(this)
        },
        get: function(n) {
            return n != null ? n < 0 ? this[n + this.length] : this[n] : v.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(v.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ti,
        sort: y.sort,
        splice: y.splice
    };
    i.extend = i.fn.extend = function() {
        var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
            if ((e = arguments[u]) != null)
                for (f in e)(r = n[f], t = e[f], n !== t) && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (nr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(n) {
            return n != null && n === n.window
        },
        isNumeric: function(n) {
            var t = n && n.toString();
            return !i.isArray(n) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(n) {
            var t;
            if (i.type(n) !== "object" || n.nodeType || i.isWindow(n) || n.constructor && !ft.call(n, "constructor") && !ft.call(n.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in n);
            return t === undefined || ft.call(n, t)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        type: function(n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? at[af.call(n)] || "object" : typeof n
        },
        globalEval: function(n) {
            var t, r = eval;
            n = i.trim(n);
            n && (n.indexOf("use strict") === 1 ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
        },
        camelCase: function(n) {
            return n.replace(yf, "ms-").replace(pf, wf)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t) {
            var r, i = 0;
            if (ii(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1) break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1) break;
            return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(vf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (ii(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ti.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return t == null ? -1 : lt.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (ii(n))
                for (e = n.length; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), u != null && f.push(u);
            return gi.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, f, r;
            return (typeof t == "string" && (u = n[t], t = n, n = u), !i.isFunction(n)) ? undefined : (f = v.call(arguments, 2), r = function() {
                return n.apply(t || this, f.concat(v.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r)
        },
        now: Date.now,
        support: f
    });
    typeof Symbol == "function" && (i.fn[Symbol.iterator] = y[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        at["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
        function u(n, t, r, u) {
            var l, w, a, s, nt, d, y, g, p = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (r = r || [], typeof n != "string" || !n || v !== 1 && v !== 9 && v !== 11) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (v !== 11 && (d = sr.exec(n)))
                    if (l = d[1]) {
                        if (v === 9)
                            if (a = t.getElementById(l)) {
                                if (a.id === l) return r.push(a), r
                            } else return r;
                        else if (p && (a = p.getElementById(l)) && et(t, a) && a.id === l) return r.push(a), r
                    } else {
                        if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((l = d[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(l)), r
                    }
                if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (v !== 1) p = t, g = n;
                    else if (t.nodeName.toLowerCase() !== "object") {
                        for ((s = t.getAttribute("id")) ? s = s.replace(hr, "\\$&") : t.setAttribute("id", s = e), y = ft(n), w = y.length, nt = yi.test(s) ? "#" + s : "[id='" + s + "']"; w--;) y[w] = nt + " " + yt(y[w]);
                        g = y.join(",");
                        p = gt.test(n) && ii(t.parentNode) || t
                    }
                    if (g) try {
                        return k.apply(r, p.querySelectorAll(g)), r
                    } catch (tt) {} finally {
                        s === e && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function l(n) {
            return n[e] = !0, n
        }

        function a(n) {
            var t = i.createElement("div");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ti(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ii(n) {
            return n && typeof n.getElementsByTagName != "undefined" && n
        }

        function bi() {}

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function ri(n, t, i) {
            var r = t.dir,
                u = i && r === "parentNode",
                f = ki++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (t.nodeType === 1 || u) return n(t, i, f)
            } : function(t, i, o) {
                var s, h, c, l = [v, f];
                if (o) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || u) && n(t, i, o)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || u) {
                            if (c = t[e] || (t[e] = {}), h = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = h[r]) && s[0] === v && s[1] === f) return l[2] = s[2];
                            if (h[r] = l, l[2] = n(t, i, o)) return !0
                        }
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function ar(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, f) {
            return r && !r[e] && (r = fi(r)), u && !u[e] && (u = fi(u, f)), l(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || ar(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? pt(b, p, n, o, s) : b,
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                    return n === o
                }, c, !0), a = ri(function(n) {
                    return nt(o, n) > -1
                }, c, !0), f = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) f = [ri(ui(f), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[e]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(f), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    f.push(u)
                }
            return ui(f)
        }

        function vr(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function(o, s, c, l, a) {
                    var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += it == null ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && (y = rt[p]) != null; p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                if (d(y, s || i, c)) {
                                    l.push(y);
                                    break
                                }
                            a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                        if (o) {
                            if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = gi.call(l));
                            w = pt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
            return f ? l(o) : o
        }
        var rt, f, t, st, oi, ft, wt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            ki = 0,
            hi = ni(),
            ci = ni(),
            lt = ni(),
            bt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            li = -2147483648,
            di = {}.hasOwnProperty,
            g = [],
            gi = g.pop,
            nr = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            dt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            tr = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            ir = new RegExp("^" + r + "*," + r + "*"),
            rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            fr = new RegExp(dt),
            yi = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + vi),
                PSEUDO: new RegExp("^" + dt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + kt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            er = /^(?:input|select|textarea|button)$/i,
            or = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            gt = /[+~]/,
            hr = /'|\\/g,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            },
            pi = function() {
                b()
            };
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (yr) {
            k = {
                apply: g.length ? function(n, t) {
                    nr.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        f = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l === i || l.nodeType !== 9 || !l.documentElement ? i : (i = l, s = i.documentElement, h = !oi(i), (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), f.attributes = a(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), f.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
            }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) {
                return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length
            }), f.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }, t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = f.getElementsByTagName ? function(n, t) {
                return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++]) i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = f.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName != "undefined" && h) return t.getElementsByClassName(n)
            }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + kt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]")
            }), a(function(n) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                f.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                d.push("!=", dt)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, bt = v ? function(n, t) {
                if (n === t) return ut = !0, 0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, r & 1 || !f.sortDetached && t.compareDocumentPosition(n) === r) ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : r & 4 ? -1 : 1
            } : function(n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (o && s) {
                    if (o === s) return wi(n, t)
                } else return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }, i)
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n), t = t.replace(ur, "='$1']"), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                var r = ct.call(n, t);
                if (r || f.disconnectedMatch || n.document && n.document.nodeType !== 11) return r
            } catch (e) {}
            return u(t, i, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n), et(n, t)
        };
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var e = t.attrHandle[r.toLowerCase()],
                u = e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : undefined;
            return u !== undefined ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(bt), ut) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return w = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        o = n.slice(-4) !== "last",
                        f = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                            d = t.parentNode,
                            nt = f && t.nodeName.toLowerCase(),
                            g = !h && !f,
                            l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k];)
                                        if (f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) return !1;
                                    b = k = n === "only" && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                for (c = d, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) && ++l && (g && (y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, f)
                    }) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = [],
                        r = [],
                        i = wt(n.replace(at, "$1"));
                    return i[e] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                        function(t) {
                            return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                        }
                }),
                lang: l(function(n) {
                    return yi.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return or.test(n.nodeName)
                },
                input: function(n) {
                    return er.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = cr(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = lr(rt);
        return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = ir.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = rr.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), r = r.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, wt = u.compile = function(n, t) {
            var r, u = [],
                f = [],
                i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[e] ? u.push(i) : f.push(i);
                i = lt(n, vr(f, u));
                i.selector = n
            }
            return i
        }, si = u.select = function(n, i, r, u) {
            var s, e, o, a, v, l = typeof n == "function" && n,
                c = !u && ft(n = l.selector || n);
            if (r = r || [], c.length === 1) {
                if (e = c[0] = c[0].slice(0), e.length > 2 && (o = e[0]).type === "ID" && f.getById && i.nodeType === 9 && h && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], i) l && (i = i.parentNode);
                    else return r;
                    n = n.slice(e.shift().value.length)
                }
                for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[a = o.type]) break;
                    if ((v = t.find[a]) && (u = v(o.matches[0].replace(y, p), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = u.length && yt(e), !n) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (l || wt(n, c))(u, i, !h, r, !i || gt.test(n) && ii(i.parentNode) || i), r
        }, f.sortStable = e.split("").sort(bt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) {
            return n.compareDocumentPosition(i.createElement("div")) & 1
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
        }) || ti("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), f.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
        }) || ti("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
        }), a(function(n) {
            return n.getAttribute("disabled") == null
        }) || ti(kt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var d = function(n, t, r) {
            for (var u = [], f = r !== undefined;
                (n = n[t]) && n.nodeType !== 9;)
                if (n.nodeType === 1) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        tr = function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        },
        ir = i.expr.match.needsContext,
        rr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        bf = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, u = this.length,
                r = [],
                f = this;
            if (typeof n != "string") return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (t = 0; t < u; t++) i.find(n, f[t], r);
            return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        },
        filter: function(n) {
            return this.pushStack(ri(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ri(this, n || [], !0))
        },
        is: function(n) {
            return !!ri(this, typeof n == "string" && ir.test(n) ? i(n) : n || [], !1).length
        }
    });
    fr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    er = i.fn.init = function(n, t, r) {
        var f, e;
        if (!n) return this;
        if (r = r || ur, typeof n == "string") {
            if (f = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : fr.exec(n), f && (f[1] || !t)) {
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), rr.test(f[1]) && i.isPlainObject(t))
                        for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                return e = u.getElementById(f[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = u, this.selector = n, this
            }
            return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? r.ready !== undefined ? r.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
    };
    er.prototype = i.fn;
    ur = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = ir.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? lt.call(i(n), this[0]) : lt.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return d(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return d(n, "parentNode", i)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return d(n, "nextSibling")
        },
        prevAll: function(n) {
            return d(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return d(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return d(n, "previousSibling", i)
        },
        siblings: function(n) {
            return tr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return tr(n.firstChild)
        },
        contents: function(n) {
            return n.contentDocument || i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (sr[n] || i.uniqueSort(f), or.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    h = /\S+/g;
    i.Callbacks = function(n) {
        n = typeof n == "string" ? kf(n) : i.extend({}, n);
        var o, r, h, f, t = [],
            e = [],
            u = -1,
            c = function() {
                for (f = n.once, h = o = !0; e.length; u = -1)
                    for (r = e.shift(); ++u < t.length;) t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            },
            s = {
                add: function() {
                    return t && (r && !o && (u = t.length - 1, e.push(r)), function f(r) {
                        i.each(r, function(r, u) {
                            i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && i.type(u) !== "string" && f(u)
                        })
                    }(arguments), r && !o && c()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var f;
                            (f = i.inArray(r, t, f)) > -1;) t.splice(f, 1), f <= u && u--
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : t.length > 0
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return f = e = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return f = e = [], r || (t = r = ""), this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(n, t) {
                    return f || (t = t || [], t = [n, t.slice ? t.slice() : t], e.push(t), o || c()), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return n != null ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = v.call(arguments),
                r = u.length,
                e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                f = e === 1 ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? v.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().progress(h(t, c, o)).done(h(t, s, u)).fail(f.reject) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (vt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
        }
    });
    i.ready.promise = function(t) {
        return vt || (vt = i.Deferred(), u.readyState !== "complete" && (u.readyState === "loading" || u.documentElement.doScroll) ? (u.addEventListener("DOMContentLoaded", yt), n.addEventListener("load", yt)) : n.setTimeout(i.ready)), vt.promise(t)
    };
    i.ready.promise();
    a = function(n, t, r, u, f, e, o) {
        var s = 0,
            c = n.length,
            h = r == null;
        if (i.type(r) === "object") {
            f = !0;
            for (s in r) a(n, t, s, r[s], !0, e, o)
        } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                return h.call(i(n), r)
            })), t))
            for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    g = function(n) {
        return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType
    };
    et.uid = 1;
    et.prototype = {
        register: function(n, t) {
            var i = t || {};
            return n.nodeType ? n[this.expando] = i : Object.defineProperty(n, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), n[this.expando]
        },
        cache: function(n) {
            if (!g(n)) return {};
            var t = n[this.expando];
            return t || (t = {}, g(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if (typeof t == "string") u[t] = i;
            else
                for (r in t) u[r] = t[r];
            return u
        },
        get: function(n, t) {
            return t === undefined ? this.cache(n) : n[this.expando] && n[this.expando][t]
        },
        access: function(n, t, r) {
            var u;
            return t === undefined || t && typeof t == "string" && r === undefined ? (u = this.get(n, t), u !== undefined ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), r !== undefined ? r : t)
        },
        remove: function(n, t) {
            var f, r, e, u = n[this.expando];
            if (u !== undefined) {
                if (t === undefined) this.register(n);
                else
                    for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (e = i.camelCase(t), t in u ? r = [t, e] : (r = e, r = r in u ? [r] : r.match(h) || [])), f = r.length; f--;) delete u[r[f]];
                (t === undefined || i.isEmptyObject(u)) && (n.nodeType ? n[this.expando] = undefined : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return t !== undefined && !i.isEmptyObject(t)
        }
    };
    var r = new et,
        e = new et,
        df = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        cr = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function(n, t) {
            e.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var o, f, s, u = this[0],
                h = u && u.attributes;
            if (n === undefined) {
                if (this.length && (s = e.get(u), u.nodeType === 1 && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--;) h[o] && (f = h[o].name, f.indexOf("data-") === 0 && (f = i.camelCase(f.slice(5)), lr(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return typeof n == "object" ? this.each(function() {
                e.set(this, n)
            }) : a(this, function(t) {
                var r, f;
                if (u && t === undefined) return (r = e.get(u, n) || e.get(u, n.replace(cr, "-$&").toLowerCase()), r !== undefined) ? r : (f = i.camelCase(n), r = e.get(u, f), r !== undefined) ? r : (r = lr(u, f, undefined), r !== undefined) ? r : void 0;
                f = i.camelCase(n);
                this.each(function() {
                    var i = e.get(this, f);
                    e.set(this, f, t);
                    n.indexOf("-") > -1 && i !== undefined && e.set(this, n, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var ar = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ot = new RegExp("^(?:([+-])=|)(" + ar + ")([a-z%]*)$", "i"),
        w = ["Top", "Right", "Bottom", "Left"],
        st = function(n, t) {
            return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
        };
    var yr = /^(?:checkbox|radio)$/i,
        pr = /<([\w:-]+)/,
        wr = /^$|\/(?:java|ecma)script/i,
        c = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    br = /<|&#?\w+;/,
        function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
    var gf = /^key/,
        ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        dr = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
            if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                        return typeof i != "undefined" && i.event.triggered !== t.type ? i.event.dispatch.apply(n, arguments) : undefined
                    }), t = (t || "").match(h) || [""], b = t.length; b--;)(w = dr.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o) && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: k.join(".")
                }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;) {
                    if (c = dr.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), !o) {
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                        continue
                    }
                    for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], (e || d === s.origType) && (!u || u.guid === s.guid) && (!c || c.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                    k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                }
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var o, s, e, u, t, h = [],
                c = v.call(arguments),
                l = (r.get(this, "events") || {})[n.type] || [],
                f = i.event.special[n.type] || {};
            if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                for (h = i.event.handlers.call(this, n, l), o = 0;
                    (u = h[o++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = u.elem, s = 0;
                        (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.rnamespace || n.rnamespace.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), e !== undefined && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                return f.postDispatch && f.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, t) {
            var e, u, f, o, h = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && (n.type !== "click" || isNaN(n.button) || n.button < 1))
                for (; r !== this; r = r.parentNode || this)
                    if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
                        for (u = [], e = 0; e < s; e++) o = t[e], f = o.selector + " ", u[f] === undefined && (u[f] = o.needsContext ? i(f, this).index(r) > -1 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }), h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var e, i, r, f = t.button;
                return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), n
            }
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var f, e, o, r = n.type,
                s = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = ne.test(r) ? this.mouseHooks : gf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;) e = o[f], n[e] = s[e];
            return n.target || (n.target = u), n.target.nodeType === 3 && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== gr() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === gr() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && i.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? pt : nt) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: nt,
        isPropagationStopped: nt,
        isImmediatePropagationStopped: nt,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = pt;
            n && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = pt;
            n && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = pt;
            n && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return fi(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return fi(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if (typeof n == "object") {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = nt), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ie = /<script|<style|<link/i,
        re = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ue = /^true\/(.*)/,
        fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(te, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!f.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) se(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) tu(s[u], e[u]);
                else tu(n, h);
            return e = o(h, "script"), e.length > 0 && ui(e, !l && o(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, o = 0;
                (t = n[o]) !== undefined; o++)
                if (g(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = undefined
                    }
                    t[e.expando] && (t[e.expando] = undefined)
                }
        }
    });
    i.fn.extend({
        domManip: b,
        detach: function(n) {
            return iu(this, n, !0)
        },
        remove: function(n) {
            return iu(this, n)
        },
        text: function(n) {
            return a(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().each(function() {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return b(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = nu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return b(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = nu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return b(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return b(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0;
                (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return a(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (n === undefined && t.nodeType === 1) return t.innerHTML;
                if (typeof n == "string" && !ie.test(n) && !c[(pr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) t = this[r] || {}, t.nodeType === 1 && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return b(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ei = {
        HTML: "block",
        BODY: "block"
    };
    var uu = /^margin/,
        si = new RegExp("^(" + ar + ")(?!px)[a-z%]+$", "i"),
        bt = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        },
        hi = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        },
        ht = u.documentElement;
    (function() {
        function o() {
            t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            t.innerHTML = "";
            ht.appendChild(r);
            var i = n.getComputedStyle(t);
            s = i.top !== "1%";
            c = i.marginLeft === "2px";
            e = i.width === "4px";
            t.style.marginRight = "50%";
            h = i.marginRight === "4px";
            ht.removeChild(r)
        }
        var s, e, h, c, r = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = t.style.backgroundClip === "content-box", r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(t), i.extend(f, {
            pixelPosition: function() {
                return o(), s
            },
            boxSizingReliable: function() {
                return e == null && o(), e
            },
            pixelMarginRight: function() {
                return e == null && o(), h
            },
            reliableMarginLeft: function() {
                return e == null && o(), c
            },
            reliableMarginRight: function() {
                var f, i = t.appendChild(u.createElement("div"));
                return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", ht.appendChild(r), f = !parseFloat(n.getComputedStyle(i).marginRight), ht.removeChild(r), t.removeChild(i), f
            }
        }))
    })();
    var he = /^(none|table(?!-c[ea]).+)/,
        ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        fu = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        eu = ["Webkit", "O", "Moz", "ms"],
        ou = u.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = tt(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, t, r, u) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var e, h, o, s = i.camelCase(t),
                    c = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = su(s) || s), o = i.cssHooks[t] || i.cssHooks[s], r !== undefined) {
                    if (h = typeof r, h === "string" && (e = ot.exec(r)) && e[1] && (r = vr(n, t, e), h = "number"), r == null || r !== r) return;
                    h === "number" && (r += e && e[3] || (i.cssNumber[s] ? "" : "px"));
                    f.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit");
                    o && "set" in o && (r = o.set(n, r, u)) === undefined || (c[t] = r)
                } else return o && "get" in o && (e = o.get(n, !1, u)) !== undefined ? e : c[t]
            }
        },
        css: function(n, t, r, u) {
            var f, s, o, e = i.camelCase(t);
            return (t = i.cssProps[e] || (i.cssProps[e] = su(e) || e), o = i.cssHooks[t] || i.cssHooks[e], o && "get" in o && (f = o.get(n, !0, r)), f === undefined && (f = tt(n, t, u)), f === "normal" && t in fu && (f = fu[t]), r === "" || r) ? (s = parseFloat(f), r === !0 || isFinite(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return he.test(i.css(n, "display")) && n.offsetWidth === 0 ? hi(n, ce, function() {
                    return lu(n, t, u)
                }) : lu(n, t, u)
            },
            set: function(n, r, u) {
                var f, e = u && bt(n),
                    o = u && cu(n, t, u, i.css(n, "boxSizing", !1, e) === "border-box", e);
                return o && (f = ot.exec(r)) && (f[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), hu(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = ci(f.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(tt(n, "marginLeft")) || n.getBoundingClientRect().left - hi(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.cssHooks.marginRight = ci(f.reliableMarginRight, function(n, t) {
        if (t) return hi(n, {
            display: "inline-block"
        }, tt, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        uu.test(n) || (i.cssHooks[n + t].set = hu)
    });
    i.fn.extend({
        css: function(n, t) {
            return a(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = bt(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return au(this, !0)
        },
        hide: function() {
            return au(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                st(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = s.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.nodeType === 1 && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    vu = /^(?:toggle|show|hide)$/;
    yu = /queueHooks$/;
    i.Animation = i.extend(l, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return vr(i.elem, n, ot.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], l.tweeners[r] = l.tweeners[r] || [], l.tweeners[r].unshift(t)
        },
        prefilters: [le],
        prefilter: function(n, t) {
            t ? l.prefilters.unshift(n) : l.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(st).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = l(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = n != null && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && yu.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(dt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (it = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        it = undefined
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        kt || (kt = n.setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        n.clearInterval(kt);
        kt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
            return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                var u = n.setTimeout(i, t);
                r.stop = function() {
                    n.clearTimeout(u)
                }
            })
        },
        function() {
            var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = n.value !== "";
            f.optSelected = i.selected;
            t.disabled = !0;
            f.optDisabled = !i.disabled;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = n.value === "t"
        }();
    rt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return a(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute == "undefined") return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(), f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bu : undefined)), r !== undefined) {
                    if (r === null) {
                        i.removeAttr(n, t);
                        return
                    }
                    return f && "set" in f && (u = f.set(n, r, t)) !== undefined ? u : (n.setAttribute(t, r + ""), r)
                }
                return f && "get" in f && (u = f.get(n, t)) !== null ? u : (u = i.find.attr(n, t), u == null ? undefined : u)
            }
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && n.nodeType === 1)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
        }
    });
    bu = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = rt[t] || i.find.attr;
        rt[t] = function(n, t, i) {
            var u, f;
            return i || (f = rt[t], rt[t] = u, u = r(n, t, i) != null ? t.toLowerCase() : null, rt[t] = f), u
        }
    });
    ku = /^(?:input|select|textarea|button)$/i;
    du = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return a(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) return (e === 1 && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined) ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ku.test(n.nodeName) || du.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    gt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, k(this)))
            });
            if (typeof n == "string" && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = k(r), t = r.nodeType === 1 && (" " + u + " ").replace(gt, " "), t) {
                        for (s = 0; f = o[s++];) t.indexOf(" " + f + " ") < 0 && (t += f + " ");
                        e = i.trim(t);
                        u !== e && r.setAttribute("class", e)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, k(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (typeof n == "string" && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = k(r), t = r.nodeType === 1 && (" " + u + " ").replace(gt, " "), t) {
                        for (s = 0; f = o[s++];)
                            while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                        e = i.trim(t);
                        u !== e && r.setAttribute("class", e)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return typeof t == "boolean" && u === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, k(this), t), t)
            }) : this.each(function() {
                var t, e, f, o;
                if (u === "string")
                    for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else(n === undefined || u === "boolean") && (t = k(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (t.nodeType === 1 && (" " + k(t) + " ").replace(gt, " ").indexOf(i) > -1) return !0;
            return !1
        }
    });
    gu = /\r/g;
    nf = /[\x20\t\r\n\f]+/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string" ? r.replace(gu, "") : r == null ? "" : r) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : i.trim(i.text(n)).replace(nf, " ")
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, h = u ? null : [], c = u ? r + 1 : s.length, e = r < 0 ? c : u ? r : 0; e < c; e++)
                        if (t = s[e], (t.selected || e === r) && (f.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), u) return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        })
    });
    li = /^(?:focusinfocus|focusoutblur)$/;
    i.extend(i.event, {
        trigger: function(t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u],
                h = ft.call(t, "type") ? t.type : t,
                y = ft.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((s = c = e = e || u, e.nodeType !== 3 && e.nodeType !== 8) && !li.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = e), f = f == null ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h, li.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && g(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || (!l._default || l._default.apply(p.pop(), f) === !1) && g(e) && a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = undefined, c && (e[a] = c)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t);
            u.isDefaultPrevented() && r.preventDefault()
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    f.focusin = "onfocusin" in n;
    f.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var ct = n.location,
        ai = i.now(),
        vi = /\?/;
    i.parseJSON = function(n) {
        return JSON.parse(n + "")
    };
    i.parseXML = function(t) {
        var r;
        if (!t || typeof t != "string") return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (u) {
            r = undefined
        }
        return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + t), r
    };
    var ve = /#.*$/,
        tf = /([?&])_=[^&]*/,
        ye = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        pe = /^(?:GET|HEAD)$/,
        we = /^\/\//,
        rf = {},
        yi = {},
        uf = "*/".concat("*"),
        pi = u.createElement("a");
    pi.href = ct.href;
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": uf,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? wi(wi(n, i.ajaxSettings), t) : wi(i.ajaxSettings, n)
        },
        ajaxPrefilter: ff(rf),
        ajaxTransport: ff(yi),
        ajax: function(t, r) {
            function b(t, r, u, h) {
                var v, rt, it, p, b, a = r;
                s !== 2 && (s = 2, d && n.clearTimeout(d), l = undefined, k = h || "", e.readyState = t > 0 ? 4 : 0, v = t >= 200 && t < 300 || t === 304, u && (p = be(f, e, u)), p = ke(f, p, e, v), v ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), t === 204 || f.type === "HEAD" ? a = "nocontent" : t === 304 ? a = "notmodified" : (a = p.state, rt = p.data, it = p.error, v = !it)) : (it = a, (t || !a) && (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", v ? nt.resolveWith(c, [rt, a, e]) : nt.rejectWith(c, [e, a, it]), e.statusCode(w), w = undefined, y && g.trigger(v ? "ajaxSuccess" : "ajaxError", [e, f, v ? rt : it]), tt.fireWith(c, [e, a]), y && (g.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            }
            typeof t == "object" && (r = t, t = undefined);
            r = r || {};
            var l, o, k, p, d, a, y, v, f = i.ajaxSetup({}, r),
                c = f.context || f,
                g = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                nt = i.Deferred(),
                tt = i.Callbacks("once memory"),
                w = f.statusCode || {},
                it = {},
                rt = {},
                s = 0,
                ut = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s === 2) {
                            if (!p)
                                for (p = {}; t = ye.exec(k);) p[t[1].toLowerCase()] = t[2];
                            t = p[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return s || (n = rt[i] = rt[i] || n, it[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return s || (f.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s < 2)
                                for (t in n) w[t] = [w[t], n[t]];
                            else e.always(n[e.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ut;
                        return l && l.abort(t), b(0, t), this
                    }
                };
            if (nt.promise(e).complete = tt.add, e.success = e.done, e.error = e.fail, f.url = ((t || f.url || ct.href) + "").replace(ve, "").replace(we, ct.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = i.trim(f.dataType || "*").toLowerCase().match(h) || [""], f.crossDomain == null) {
                a = u.createElement("a");
                try {
                    a.href = f.url;
                    a.href = a.href;
                    f.crossDomain = pi.protocol + "//" + pi.host != a.protocol + "//" + a.host
                } catch (ft) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && typeof f.data != "string" && (f.data = i.param(f.data, f.traditional)), ef(rf, f, r, e), s === 2) return e;
            y = i.event && f.global;
            y && i.active++ == 0 && i.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !pe.test(f.type);
            o = f.url;
            f.hasContent || (f.data && (o = f.url += (vi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = tf.test(o) ? o.replace(tf, "$1_=" + ai++) : o + (vi.test(o) ? "&" : "?") + "_=" + ai++));
            f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
            e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + uf + "; q=0.01" : "") : f.accepts["*"]);
            for (v in f.headers) e.setRequestHeader(v, f.headers[v]);
            if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s === 2)) return e.abort();
            ut = "abort";
            for (v in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) e[v](f[v]);
            if (l = ef(yi, f, r, e), l) {
                if (e.readyState = 1, y && g.trigger("ajaxSend", [e, f]), s === 2) return e;
                f.async && f.timeout > 0 && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, f.timeout));
                try {
                    s = 1;
                    l.send(it, b)
                } catch (ft) {
                    if (s < 2) b(-1, ft);
                    else throw ft;
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return !i.expr.filters.visible(n)
    };
    i.expr.filters.visible = function(n) {
        return n.offsetWidth > 0 || n.offsetHeight > 0 || n.getClientRects().length > 0
    };
    var de = /%20/g,
        ge = /\[\]$/,
        of = /\r?\n/g,
        no = /^(?:submit|button|image|reset|file)$/i,
        to = /^(?:input|select|textarea|keygen)/i;
    return i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) bi(r, n[r], t, f);
        return u.join("&").replace(de, "+")
    }, i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !yr.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace( of , "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace( of , "\r\n")
                }
            }).get()
        }
    }), i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, sf = {
        0: 200,
        1223: 204
    }, ut = i.ajaxSettings.xhr(), f.cors = !!ut && "withCredentials" in ut, f.ajax = ut = !!ut, i.ajaxTransport(function(t) {
        var i, r;
        if (f.cors || ut && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                for (o in u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, n === "abort" ? e.abort() : n === "error" ? typeof e.status != "number" ? f(0, "error") : f(e.status, e.statusText) : f(sf[e.status] || e.status, e.statusText, (e.responseType || "text") !== "text" || typeof e.responseText != "string" ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = i("error");
                e.onabort !== undefined ? e.onabort = r : e.onreadystatechange = function() {
                    e.readyState === 4 && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (i) throw s;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e(n.type === "error" ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }), ki = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = ki.pop() || i.expando + "_" + ai++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, e, o, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ni.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (vi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return o || i.error(f + " was not called"), o[0]
        }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
            o = arguments
        }, u.always(function() {
            e === undefined ? i(n).removeProp(f) : n[f] = e;
            t[f] && (t.jsonpCallback = r.jsonpCallback, ki.push(f));
            o && i.isFunction(e) && e(o[0]);
            o = e = undefined
        }), "script"
    }), i.parseHTML = function(n, t, r) {
        if (!n || typeof n != "string") return null;
        typeof t == "boolean" && (r = t, t = !1);
        t = t || u;
        var f = rr.exec(n),
            e = !r && [];
        return f ? [t.createElement(f[1])] : (f = kr([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, di = i.fn.load, i.fn.load = function(n, t, r) {
        if (typeof n != "string" && di) return di.apply(this, arguments);
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e > -1 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (o = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function(n, t) {
            f.each(function() {
                r.apply(this, s || [n.responseText, t, n])
            })
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return n === undefined ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var t, f, r = this[0],
                u = {
                    top: 0,
                    left: 0
                },
                e = r && r.ownerDocument;
            if (e) return (t = e.documentElement, !i.contains(t, r)) ? u : (u = r.getBoundingClientRect(), f = hf(e), {
                top: u.top + f.pageYOffset - t.clientTop,
                left: u.left + f.pageXOffset - t.clientLeft
            })
        },
        position: function() {
            if (this[0]) {
                var n, r, u = this[0],
                    t = {
                        top: 0,
                        left: 0
                    };
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || ht
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return a(this, function(n, i, u) {
                var f = hf(n);
                if (u === undefined) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = ci(f.pixelPosition, function(n, r) {
            if (r) return r = tt(n, t), si.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || typeof u != "boolean"),
                    o = r || (u === !0 || f === !0 ? "margin" : "border");
                return a(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : undefined, e, null)
            }
        })
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        },
        size: function() {
            return this.length
        }
    }), i.fn.andSelf = i.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }), cf = n.jQuery, lf = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = lf), t && n.jQuery === i && (n.jQuery = cf), i
    }, t || (n.jQuery = n.$ = i), i
}),
function(n, t) {
    typeof define == "function" && define.amd ? define(["jquery"], t) : t(n.jQuery)
}(this, function(n) {
    "use strict";

    function f(i) {
        if (t.webkit && !i) return {
            height: 0,
            width: 0
        };
        if (!t.data.outer) {
            var r = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            t.data.inner = n("<div>").css(n.extend({}, r));
            t.data.outer = n("<div>").css(n.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, r)).append(t.data.inner).appendTo("body")
        }
        return t.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(t.data.outer.offset().top - t.data.inner.offset().top || 0),
            width: Math.ceil(t.data.outer.offset().left - t.data.inner.offset().left || 0)
        }
    }

    function h() {
        var n = f(!0);
        return !(n.height || n.width)
    }

    function e(n) {
        var t = n.originalEvent;
        return t.axis && t.axis === t.HORIZONTAL_AXIS ? !1 : t.wheelDeltaX ? !1 : !0
    }
    var s = !1,
        t = {
            data: {
                index: 0,
                name: "scrollbar"
            },
            macosx: /mac/i.test(navigator.platform),
            mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
            overlay: null,
            scroll: null,
            scrolls: [],
            webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
        },
        r, u, o, i;
    t.scrolls.add = function(n) {
        this.remove(n).push(n)
    };
    t.scrolls.remove = function(t) {
        while (n.inArray(t, this) >= 0) this.splice(n.inArray(t, this), 1);
        return this
    };
    r = {
        autoScrollSize: !0,
        autoUpdate: !0,
        debug: !1,
        disableBodyScroll: !1,
        duration: 200,
        ignoreMobile: !1,
        ignoreOverlay: !1,
        scrollStep: 30,
        showArrows: !1,
        stepScrolling: !0,
        scrollx: null,
        scrolly: null,
        onDestroy: null,
        onInit: null,
        onScroll: null,
        onUpdate: null
    };
    u = function(u) {
        t.scroll || (t.overlay = h(), t.scroll = f(), i(), n(window).resize(function() {
            var r = !1,
                n;
            t.scroll && (t.scroll.height || t.scroll.width) && (n = f(), (n.height !== t.scroll.height || n.width !== t.scroll.width) && (t.scroll = n, r = !0));
            i(r)
        }));
        this.container = u;
        this.namespace = ".scrollbar_" + t.data.index++;
        this.options = n.extend({}, r, window.jQueryScrollbarOptions || {});
        this.scrollTo = null;
        this.scrollx = {};
        this.scrolly = {};
        u.data(t.data.name, this);
        t.scrolls.add(this)
    };
    u.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(t.data.name);
                t.scrolls.remove(this);
                var i = this.container.scrollLeft(),
                    r = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(i).scrollTop(r);
                this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace);
                this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace);
                this.wrapper.remove();
                n(document).add("body").off(this.namespace);
                n.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function(i) {
            var o = this,
                r = this.container,
                c = this.containerWrapper || r,
                s = this.namespace,
                f = n.extend(this.options, i || {}),
                u = {
                    x: this.scrollx,
                    y: this.scrolly
                },
                h = this.wrapper,
                a = {
                    scrollLeft: r.scrollLeft(),
                    scrollTop: r.scrollTop()
                },
                l;
            if (t.mobile && f.ignoreMobile || t.overlay && f.ignoreOverlay || t.macosx && !t.webkit) return !1;
            if (h) c.css({
                height: "auto",
                "margin-right": t.scroll.width * -1 + "px",
                "max-height": ""
            });
            else {
                this.wrapper = h = n("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position", r.css("position") == "absolute" ? "absolute" : "relative").insertBefore(r).append(r);
                r.is("textarea") && (this.containerWrapper = c = n("<div>").insertBefore(r).append(r), h.addClass("scroll-textarea"));
                c.addClass("scroll-content").css({
                    height: "auto",
                    "margin-right": t.scroll.width * -1 + "px",
                    "max-height": ""
                });
                r.on("scroll" + s, function() {
                    n.isFunction(f.onScroll) && f.onScroll.call(o, {
                        maxScroll: u.y.maxScrollOffset,
                        scroll: r.scrollTop(),
                        size: u.y.size,
                        visible: u.y.visible
                    }, {
                        maxScroll: u.x.maxScrollOffset,
                        scroll: r.scrollLeft(),
                        size: u.x.size,
                        visible: u.x.visible
                    });
                    u.x.isVisible && u.x.scroll.bar.css("left", r.scrollLeft() * u.x.kx + "px");
                    u.y.isVisible && u.y.scroll.bar.css("top", r.scrollTop() * u.y.kx + "px")
                });
                h.on("scroll" + s, function() {
                    h.scrollTop(0).scrollLeft(0)
                });
                if (f.disableBodyScroll) {
                    l = function(n) {
                        e(n) ? u.y.isVisible && u.y.mousewheel(n) : u.x.isVisible && u.x.mousewheel(n)
                    };
                    h.on("MozMousePixelScroll" + s, l);
                    h.on("mousewheel" + s, l);
                    if (t.mobile) h.on("touchstart" + s, function(t) {
                        var i = t.originalEvent.touches && t.originalEvent.touches[0] || t,
                            u = {
                                pageX: i.pageX,
                                pageY: i.pageY
                            },
                            f = {
                                left: r.scrollLeft(),
                                top: r.scrollTop()
                            };
                        n(document).on("touchmove" + s, function(n) {
                            var t = n.originalEvent.targetTouches && n.originalEvent.targetTouches[0] || n;
                            r.scrollLeft(f.left + u.pageX - t.pageX);
                            r.scrollTop(f.top + u.pageY - t.pageY);
                            n.preventDefault()
                        });
                        n(document).on("touchend" + s, function() {
                            n(document).off(s)
                        })
                    })
                }
                n.isFunction(f.onInit) && f.onInit.apply(this, [r])
            }
            n.each(u, function(t, i) {
                var v = null,
                    l = 1,
                    c = t === "x" ? "scrollLeft" : "scrollTop",
                    a = f.scrollStep,
                    y = function() {
                        var n = r[c]();
                        r[c](n + a);
                        l == 1 && n + a >= h && (n = r[c]());
                        l == -1 && n + a <= h && (n = r[c]());
                        r[c]() == n && v && v()
                    },
                    h = 0;
                if (!i.scroll) {
                    i.scroll = o._getScroll(f["scroll" + t]).addClass("scroll-" + t);
                    f.showArrows && i.scroll.addClass("scroll-element_arrows_visible");
                    i.mousewheel = function(n) {
                        if (!i.isVisible || t === "x" && e(n)) return !0;
                        if (t === "y" && !e(n)) return u.x.mousewheel(n), !0;
                        var f = n.originalEvent.wheelDelta * -1 || n.originalEvent.detail,
                            s = i.size - i.visible - i.offset;
                        return (f > 0 && h < s || f < 0 && h > 0) && (h = h + f, h < 0 && (h = 0), h > s && (h = s), o.scrollTo = o.scrollTo || {}, o.scrollTo[c] = h, setTimeout(function() {
                            o.scrollTo && (r.stop().animate(o.scrollTo, 240, "linear", function() {
                                h = r[c]()
                            }), o.scrollTo = null)
                        }, 1)), n.preventDefault(), !1
                    };
                    i.scroll.on("MozMousePixelScroll" + s, i.mousewheel).on("mousewheel" + s, i.mousewheel).on("mouseenter" + s, function() {
                        h = r[c]()
                    });
                    i.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + s, function(u) {
                        if (u.which != 1) return !0;
                        l = 1;
                        var e = {
                                eventOffset: u[t === "x" ? "pageX" : "pageY"],
                                maxScrollValue: i.size - i.visible - i.offset,
                                scrollbarOffset: i.scroll.bar.offset()[t === "x" ? "left" : "top"],
                                scrollbarSize: i.scroll.bar[t === "x" ? "outerWidth" : "outerHeight"]()
                            },
                            s = 0,
                            p = 0;
                        return n(this).hasClass("scroll-arrow") ? (l = n(this).hasClass("scroll-arrow_more") ? 1 : -1, a = f.scrollStep * l, h = l > 0 ? e.maxScrollValue : 0) : (l = e.eventOffset > e.scrollbarOffset + e.scrollbarSize ? 1 : e.eventOffset < e.scrollbarOffset ? -1 : 0, a = Math.round(i.visible * .75) * l, h = e.eventOffset - e.scrollbarOffset - (f.stepScrolling ? l == 1 ? e.scrollbarSize : 0 : Math.round(e.scrollbarSize / 2)), h = r[c]() + h / i.kx), o.scrollTo = o.scrollTo || {}, o.scrollTo[c] = f.stepScrolling ? r[c]() + a : h, f.stepScrolling && (v = function() {
                            h = r[c]();
                            clearInterval(p);
                            clearTimeout(s);
                            s = 0;
                            p = 0
                        }, s = setTimeout(function() {
                            p = setInterval(y, 40)
                        }, f.duration + 100)), setTimeout(function() {
                            o.scrollTo && (r.animate(o.scrollTo, f.duration), o.scrollTo = null)
                        }, 1), o._handleMouseDown(v, u)
                    });
                    i.scroll.bar.on("mousedown" + s, function(u) {
                        if (u.which != 1) return !0;
                        var f = u[t === "x" ? "pageX" : "pageY"],
                            e = r[c]();
                        i.scroll.addClass("scroll-draggable");
                        n(document).on("mousemove" + s, function(n) {
                            var u = parseInt((n[t === "x" ? "pageX" : "pageY"] - f) / i.kx, 10);
                            r[c](e + u)
                        });
                        return o._handleMouseDown(function() {
                            i.scroll.removeClass("scroll-draggable");
                            h = r[c]()
                        }, u)
                    })
                }
            });
            n.each(u, function(n, t) {
                var i = "scroll-scroll" + n + "_visible",
                    r = n == "x" ? u.y : u.x;
                t.scroll.removeClass(i);
                r.scroll.removeClass(i);
                c.removeClass(i)
            });
            n.each(u, function(t, i) {
                n.extend(i, t == "x" ? {
                    offset: parseInt(r.css("left"), 10) || 0,
                    size: r.prop("scrollWidth"),
                    visible: h.width()
                } : {
                    offset: parseInt(r.css("top"), 10) || 0,
                    size: r.prop("scrollHeight"),
                    visible: h.height()
                })
            });
            this._updateScroll("x", this.scrollx);
            this._updateScroll("y", this.scrolly);
            n.isFunction(f.onUpdate) && f.onUpdate.apply(this, [r]);
            n.each(u, function(n, t) {
                var e = n === "x" ? "left" : "top",
                    o = n === "x" ? "outerWidth" : "outerHeight",
                    h = n === "x" ? "width" : "height",
                    c = parseInt(r.css(e), 10) || 0,
                    i = t.size,
                    u = t.visible + c,
                    s = t.scroll.size[o]() + (parseInt(t.scroll.size.css(e), 10) || 0);
                f.autoScrollSize && (t.scrollbarSize = parseInt(s * u / i, 10), t.scroll.bar.css(h, t.scrollbarSize + "px"));
                t.scrollbarSize = t.scroll.bar[o]();
                t.kx = (s - t.scrollbarSize) / (i - u) || 1;
                t.maxScrollOffset = i - u
            });
            r.scrollLeft(a.scrollLeft).scrollTop(a.scrollTop).trigger("scroll")
        },
        _getScroll: function(t) {
            var i = {
                advanced: '<div class="scroll-element"><div class="scroll-element_corner"><\/div><div class="scroll-arrow scroll-arrow_less"><\/div><div class="scroll-arrow scroll-arrow_more"><\/div><div class="scroll-element_outer"><div class="scroll-element_size"><\/div><div class="scroll-element_inner-wrapper"><div class="scroll-element_inner scroll-element_track"><div class="scroll-element_inner-bottom"><\/div><\/div><\/div><div class="scroll-bar"><div class="scroll-bar_body"><div class="scroll-bar_body-inner"><\/div><\/div><div class="scroll-bar_bottom"><\/div><div class="scroll-bar_center"><\/div><\/div><\/div><\/div>',
                simple: '<div class="scroll-element"><div class="scroll-element_outer"><div class="scroll-element_size"><\/div><div class="scroll-element_track"><\/div><div class="scroll-bar"><\/div><\/div><\/div>'
            };
            return i[t] && (t = i[t]), t || (t = i.simple), t = typeof t == "string" ? n(t).appendTo(this.wrapper) : n(t), n.extend(t, {
                bar: t.find(".scroll-bar"),
                size: t.find(".scroll-element_size"),
                track: t.find(".scroll-element_track")
            }), t
        },
        _handleMouseDown: function(t, i) {
            var r = this.namespace;
            n(document).on("blur" + r, function() {
                n(document).add("body").off(r);
                t && t()
            });
            n(document).on("dragstart" + r, function(n) {
                return n.preventDefault(), !1
            });
            n(document).on("mouseup" + r, function() {
                n(document).add("body").off(r);
                t && t()
            });
            n("body").on("selectstart" + r, function(n) {
                return n.preventDefault(), !1
            });
            return i && i.preventDefault(), !1
        },
        _updateScroll: function(i, r) {
            var u = this.container,
                o = this.containerWrapper || u,
                f = "scroll-scroll" + i + "_visible",
                e = i === "x" ? this.scrolly : this.scrollx,
                l = parseInt(this.container.css(i === "x" ? "left" : "top"), 10) || 0,
                s = this.wrapper,
                c = r.size,
                h = r.visible + l;
            r.isVisible = c - h > 1;
            r.isVisible ? (r.scroll.addClass(f), e.scroll.addClass(f), o.addClass(f)) : (r.scroll.removeClass(f), e.scroll.removeClass(f), o.removeClass(f));
            i === "y" && (u.is("textarea") || c < h ? o.css({
                height: h + t.scroll.height + "px",
                "max-height": "none"
            }) : o.css({
                "max-height": h + "px"
            }));
            (r.size != u.prop("scrollWidth") || e.size != u.prop("scrollHeight") || r.visible != s.width() || e.visible != s.height() || r.offset != (parseInt(u.css("left"), 10) || 0) || e.offset != (parseInt(u.css("top"), 10) || 0)) && (n.extend(this.scrollx, {
                offset: parseInt(u.css("left"), 10) || 0,
                size: u.prop("scrollWidth"),
                visible: s.width()
            }), n.extend(this.scrolly, {
                offset: parseInt(u.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: s.height()
            }), this._updateScroll(i === "x" ? "y" : "x", e))
        }
    };
    o = u;
    n.fn.scrollbar = function(i, r) {
        return typeof i != "string" && (r = i, i = "init"), typeof r == "undefined" && (r = []), n.isArray(r) || (r = [r]), this.not("body, .scroll-wrapper").each(function() {
            var f = n(this),
                u = f.data(t.data.name);
            (u || i === "init") && (u || (u = new o(f)), u[i] && u[i].apply(u, r))
        }), this
    };
    n.fn.scrollbar.options = r;
    i = function() {
        var n = 0,
            r = 0;
        return function(u) {
            for (var o, c, f, e, l, a, h = 0; h < t.scrolls.length; h++) f = t.scrolls[h], o = f.container, c = f.options, e = f.wrapper, l = f.scrollx, a = f.scrolly, (u || c.autoUpdate && e && e.is(":visible") && (o.prop("scrollWidth") != l.size || o.prop("scrollHeight") != a.size || e.width() != l.visible || e.height() != a.visible)) && (f.init(), c.debug && (window.console && console.log({
                scrollHeight: o.prop("scrollHeight") + ":" + f.scrolly.size,
                scrollWidth: o.prop("scrollWidth") + ":" + f.scrollx.size,
                visibleHeight: e.height() + ":" + f.scrolly.visible,
                visibleWidth: e.width() + ":" + f.scrollx.visible
            }, !0), r++));
            s && r > 10 ? (window.console && console.log("Scroll updates exceed 10"), i = function() {}) : (clearTimeout(n), n = setTimeout(i, 300))
        }
    }();
    window.angular && function(n) {
        n.module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
            var t = r;
            return {
                setOptions: function(i) {
                    n.extend(t, i)
                },
                $get: function() {
                    return {
                        options: n.copy(t)
                    }
                }
            }
        }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(n, t) {
            return {
                restrict: "AC",
                link: function(i, r, u) {
                    var f = t(u.jqueryScrollbar),
                        e = f(i);
                    r.scrollbar(e || n.options).on("$destroy", function() {
                        r.scrollbar("destroy")
                    })
                }
            }
        }])
    }(window.angular)
});
jQuery(document).ready(function() {
    jQuery(".scrollbar-macosx").length > 0 && jQuery(".scrollbar-macosx").scrollbar()
});
$(".scrollBody > .scrollbar-macosx").scroll(function() {
    $(this).scrollTop() > 105 ? $(".rightBtn").addClass("scrollX").removeAttr("style") : $(".rightBtn").removeClass("scrollX").css({
        left: $(this).scrollLeft() + $(this).width() - $(".rightBtn").width()
    })
})