/*!
* OneUI - v3.1.0 - Auto-compiled on 2017-01-16 - Copyright 2017 
* @author pixelcave
*/
if (!
function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    }: b(a)
} ("undefined" != typeof window ? window: this,
function(a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length,
        c = fa.type(a);
        return "function" !== c && !fa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    function d(a, b, c) {
        if (fa.isFunction(b)) return fa.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) !== c
        });
        if (b.nodeType) return fa.grep(a,
        function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (pa.test(b)) return fa.filter(b, a, c);
            b = fa.filter(b, a)
        }
        return fa.grep(a,
        function(a) {
            return _.call(b, a) > -1 !== c
        })
    }
    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;);
        return a
    }
    function f(a) {
        var b = {};
        return fa.each(a.match(va) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    function g() {
        X.removeEventListener("DOMContentLoaded", g),
        a.removeEventListener("load", g),
        fa.ready()
    }
    function h() {
        this.expando = fa.expando + h.uid++
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Ca, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c || "false" !== c && ("null" === c ? null: +c + "" === c ? +c: Ba.test(c) ? fa.parseJSON(c) : c)
            } catch(a) {}
            Aa.set(a, b, c)
        } else c = void 0;
        return c
    }
    function j(a, b, c, d) {
        var e, f = 1,
        g = 20,
        h = d ?
        function() {
            return d.cur()
        }: function() {
            return fa.css(a, b, "")
        },
        i = h(),
        j = c && c[3] || (fa.cssNumber[b] ? "": "px"),
        k = (fa.cssNumber[b] || "px" !== j && +i) && Ea.exec(fa.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do f = f || ".5",
            k /= f,
            fa.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)),
        e
    }
    function k(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && fa.nodeName(a, b) ? fa.merge([a], c) : c
    }
    function l(a, b) {
        for (var c = 0,
        d = a.length; d > c; c++) za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"))
    }
    function m(a, b, c, d, e) {
        for (var f, g, h, i, j, m, n = b.createDocumentFragment(), o = [], p = 0, q = a.length; q > p; p++) if (f = a[p], f || 0 === f) if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
        else if (La.test(f)) {
            for (g = g || n.appendChild(b.createElement("div")), h = (Ia.exec(f) || ["", ""])[1].toLowerCase(), i = Ka[h] || Ka._default, g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2], m = i[0]; m--;) g = g.lastChild;
            fa.merge(o, g.childNodes),
            g = n.firstChild,
            g.textContent = ""
        } else o.push(b.createTextNode(f));
        for (n.textContent = "", p = 0; f = o[p++];) if (d && fa.inArray(f, d) > -1) e && e.push(f);
        else if (j = fa.contains(f.ownerDocument, f), g = k(n.appendChild(f), "script"), j && l(g), c) for (m = 0; f = g[m++];) Ja.test(f.type || "") && c.push(f);
        return n
    }
    function n() {
        return ! 0
    }
    function o() {
        return ! 1
    }
    function p() {
        try {
            return X.activeElement
        } catch(a) {}
    }
    function q(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) q(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = o;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return fa().off(a),
            g.apply(this, arguments)
        },
        e.guid = g.guid || (g.guid = fa.guid++)),
        a.each(function() {
            fa.event.add(this, b, e, d, c)
        })
    }
    function r(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(11 !== b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function s(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function t(a) {
        var b = Sa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function u(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (za.hasData(a) && (f = za.access(a), g = za.set(b, f), j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c])
            }
            Aa.hasData(a) && (h = Aa.access(a), i = fa.extend({},
            h), Aa.set(b, i))
        }
    }
    function v(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ha.test(a.type) ? b.checked = a.checked: "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function w(a, b, c, d) {
        b = Z.apply([], b);
        var e, f, g, h, i, j, l = 0,
        n = a.length,
        o = n - 1,
        p = b[0],
        q = fa.isFunction(p);
        if (q || n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)) return a.each(function(e) {
            var f = a.eq(e);
            q && (b[0] = p.call(this, e, f.html())),
            w(f, b, c, d)
        });
        if (n && (e = m(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (g = fa.map(k(e, "script"), s), h = g.length; n > l; l++) i = e,
            l !== o && (i = fa.clone(i, !0, !0), h && fa.merge(g, k(i, "script"))),
            c.call(a[l], i, l);
            if (h) for (j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0; h > l; l++) i = g[l],
            Ja.test(i.type || "") && !za.access(i, "globalEval") && fa.contains(j, i) && (i.src ? fa._evalUrl && fa._evalUrl(i.src) : fa.globalEval(i.textContent.replace(Ta, "")))
        }
        return a
    }
    function x(a, b, c) {
        for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || fa.cleanData(k(d)),
        d.parentNode && (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    function y(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body),
        d = fa.css(c[0], "display");
        return c.detach(),
        d
    }
    function z(a) {
        var b = X,
        c = Va[a];
        return c || (c = y(a, b), "none" !== c && c || (Ua = (Ua || fa("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ua[0].contentDocument, b.write(), b.close(), c = y(a, b), Ua.detach()), Va[a] = c),
        c
    }
    function A(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ya(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || fa.contains(a.ownerDocument, a) || (g = fa.style(a, b)),
        c && !da.pixelMarginRight() && Xa.test(g) && Wa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f),
        void 0 !== g ? g + "": g
    }
    function B(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get: (this.get = b).apply(this, arguments)
            }
        }
    }
    function C(a) {
        if (a in db) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--;) if (a = cb[c] + b, a in db) return a
    }
    function D(a, b, c) {
        var d = Ea.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += fa.css(a, c + Fa[f], !0, e)),
        d ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + Fa[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
        return g
    }
    function F(a, b, c) {
        var d = !0,
        e = "width" === b ? a.offsetWidth: a.offsetHeight,
        f = Ya(a),
        g = "border-box" === fa.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = A(a, b, f), (0 > e || null == e) && (e = a.style[b]), Xa.test(e)) return e;
            d = g && (da.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border": "content"), d, f) + "px"
    }
    function G(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g],
        d.style && (f[g] = za.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ga(d) && (f[g] = za.access(d, "olddisplay", z(d.nodeName)))) : (e = Ga(d), "none" === c && e || za.set(d, "olddisplay", e ? c: fa.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g],
        d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "": "none"));
        return a
    }
    function H(a, b, c, d, e) {
        return new H.prototype.init(a, b, c, d, e)
    }
    function I() {
        return a.setTimeout(function() {
            eb = void 0
        }),
        eb = fa.now()
    }
    function J(a, b) {
        var c, d = 0,
        e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Fa[d],
        e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function K(a, b, c) {
        for (var d, e = (N.tweeners[b] || []).concat(N.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function L(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
        m = {},
        n = a.style,
        o = a.nodeType && Ga(a),
        p = za.get(a, "fxshow");
        c.queue || (h = fa._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--,
                fa.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = fa.css(a, "display"), k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === fa.css(a, "float") && (n.display = "inline-block")),
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0],
            n.overflowX = c.overflow[1],
            n.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], gb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide": "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0
            }
            m[d] = p && p[d] || fa.style(a, d)
        } else j = void 0;
        if (fa.isEmptyObject(m))"inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = za.access(a, "fxshow", {}),
            f && (p.hidden = !o),
            o ? fa(a).show() : l.done(function() {
                fa(a).hide()
            }),
            l.done(function() {
                var b;
                za.remove(a, "fxshow");
                for (b in m) fa.style(a, b, m[b])
            });
            for (d in m) g = K(o ? p[d] : 0, d, l),
            d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function M(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
            f = g.expand(f),
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function N(a, b, c) {
        var d, e, f = 0,
        g = N.prefilters.length,
        h = fa.Deferred().always(function() {
            delete i.elem
        }),
        i = function() {
            if (e) return ! 1;
            for (var b = eb || I(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c: (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
            elem: a,
            props: fa.extend({},
            b),
            opts: fa.extend(!0, {
                specialEasing: {},
                easing: fa.easing._default
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: eb || I(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0,
                d = b ? j.tweens.length: 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }),
        k = j.props;
        for (M(k, j.opts.specialEasing); g > f; f++) if (d = N.prefilters[f].call(j, a, k, j.opts)) return fa.isFunction(d.stop) && (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)),
        d;
        return fa.map(k, K, j),
        fa.isFunction(j.opts.start) && j.opts.start.call(a, j),
        fa.fx.timer(fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function O(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    function P(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
            f = b.toLowerCase().match(va) || [];
            if (fa.isFunction(c)) for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Q(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0,
            fa.each(a[h] || [],
            function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }),
            i
        }
        var f = {},
        g = a === Ab;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }
    function R(a, b) {
        var c, d, e = fa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a: d || (d = {}))[c] = b[c]);
        return d && fa.extend(!0, a, d),
        a
    }
    function S(a, b, c) {
        for (var d, e, f, g, h = a.contents,
        i = a.dataTypes;
        "*" === i[0];) i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }
    function T(a, b, c, d) {
        var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a.throws) b = g(b);
            else try {
                b = g(b)
            } catch(a) {
                return {
                    state: "parsererror",
                    error: g ? a: "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    function U(a, b, c, d) {
        var e;
        if (fa.isArray(b)) fa.each(b,
        function(b, e) {
            c || Eb.test(a) ? d(a, e) : U(a + "[" + ("object" == typeof e && null != e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== fa.type(b)) d(a, b);
        else for (e in b) U(a + "[" + e + "]", b[e], c, d)
    }
    function V(a) {
        return fa.isWindow(a) ? a: 9 === a.nodeType && a.defaultView
    }
    var W = [],
    X = a.document,
    Y = W.slice,
    Z = W.concat,
    $ = W.push,
    _ = W.indexOf,
    aa = {},
    ba = aa.toString,
    ca = aa.hasOwnProperty,
    da = {},
    ea = "2.2.4",
    fa = function(a, b) {
        return new fa.fn.init(a, b)
    },
    ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ha = /^-ms-/,
    ia = /-([\da-z])/gi,
    ja = function(a, b) {
        return b.toUpperCase()
    };
    fa.fn = fa.prototype = {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Y.call(this)
        },
        pushStack: function(a) {
            var b = fa.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return fa.each(this, a)
        },
        map: function(a) {
            return this.pushStack(fa.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length,
            c = +a + (0 > a ? b: 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: $,
        sort: W.sort,
        splice: W.splice
    },
    fa.extend = fa.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {},
        h++), "object" == typeof g || fa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b],
        d = a[b],
        g !== d && (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d))) ? (e ? (e = !1, f = c && fa.isArray(c) ? c: []) : f = c && fa.isPlainObject(c) ? c: {},
        g[b] = fa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    },
    fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === fa.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return ! fa.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return ! 1;
            if (a.constructor && !ca.call(a, "constructor") && !ca.call(a.constructor.prototype || {},
            "isPrototypeOf")) return ! 1;
            for (b in a);
            return void 0 === b || ca.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return ! 1;
            return ! 0
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? aa[ba.call(a)] || "object": typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = fa.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = X.createElement("script"), b.text = a, X.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(ha, "ms-").replace(ia, ja)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var d, e = 0;
            if (c(a)) for (d = a.length; d > e && b.call(a[e], e, a[e]) !== !1; e++);
            else for (e in a) if (b.call(a[e], e, a[e]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "": (a + "").replace(ga, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : $.call(d, a)),
            d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : _.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length,
            d = 0,
            e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f),
            d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f, g = 0,
            h = [];
            if (c(a)) for (e = a.length; e > g; g++) f = b(a[g], g, d),
            null != f && h.push(f);
            else for (g in a) f = b(a[g], g, d),
            null != f && h.push(f);
            return Z.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c),
            fa.isFunction(a) ? (d = Y.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(Y.call(arguments)))
            },
            e.guid = a.guid = a.guid || fa.guid++, e) : void 0
        },
        now: Date.now,
        support: da
    }),
    "function" == typeof Symbol && (fa.fn[Symbol.iterator] = W[Symbol.iterator]),
    fa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(a, b) {
        aa["[object " + b + "]"] = b.toLowerCase()
    });
    var ka = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument,
            p = b ? b.nodeType: 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b: O) !== G && F(b), b = b || G, I)) {
                if (11 !== p && (j = ra.exec(a))) if (e = j[1]) {
                    if (9 === p) {
                        if (! (g = b.getElementById(e))) return c;
                        if (g.id === e) return c.push(g),
                        c
                    } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g),
                    c
                } else {
                    if (j[2]) return $.apply(c, b.getElementsByTagName(a)),
                    c;
                    if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)),
                    c
                }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) o = b,
                    n = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h: "[id='" + h + "']"; f--;) l[f] = i + " " + m(l[f]);
                        n = l.join(","),
                        o = sa.test(a) && k(b.parentNode) || b
                    }
                    if (n) try {
                        return $.apply(c, o.querySelectorAll(n)),
                        c
                    } catch(a) {} finally {
                        h === N && b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d)
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()],
                a[c + " "] = d
            }
            var b = [];
            return a
        }
        function d(a) {
            return a[N] = !0,
            a
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !! a(b)
            } catch(a) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) w.attrHandle[c[d]] = b
        }
        function g(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function j(a) {
            return d(function(b) {
                return b = +b,
                d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        function l() {}
        function m(a) {
            for (var b = 0,
            c = a.length,
            d = ""; c > b; b++) d += a[b].value;
            return d
        }
        function n(a, b, c) {
            var d = b.dir,
            e = c && "parentNode" === d,
            f = Q++;
            return b.first ?
            function(b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            }: function(b, c, g) {
                var h, i, j, k = [P, f];
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
                } else for (; b = b[d];) if (1 === b.nodeType || e) {
                    if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return ! 0
                }
            }
        }
        function o(a) {
            return a.length > 1 ?
            function(b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function p(a, c, d) {
            for (var e = 0,
            f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)),
            f && !f[N] && (f = r(f, g)),
            d(function(d, g, h, i) {
                var j, k, l, m = [],
                n = [],
                o = g.length,
                r = d || p(b || "*", h.nodeType ? [h] : h, []),
                s = !a || !d && b ? r: q(r, m, a, h, i),
                t = c ? f || (d ? a: o || e) ? [] : g: s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t),
                f ? f(null, g, t, i) : $.apply(g, t)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length,
            f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            },
            g, !0), j = n(function(a) {
                return aa(b, a) > -1
            },
            g, !0), k = [function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null,
                e
            }]; e > h; h++) if (c = w.relative[a[h].type]) k = [n(o(k), c)];
            else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*": ""
                    })).replace(ha, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                }
                k.push(c)
            }
            return o(k)
        }
        function t(a, c) {
            var e = c.length > 0,
            f = a.length > 0,
            g = function(d, g, h, i, j) {
                var k, l, m, n = 0,
                o = "0",
                p = d && [],
                r = [],
                s = C,
                t = d || f && w.find.TAG("*", j),
                u = P += null == s ? 1 : Math.random() || .1,
                v = t.length;
                for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];) if (m(k, g || G, h)) {
                            i.push(k);
                            break
                        }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++];) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r),
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s),
                p
            };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function(a, b) {
            return a === b && (E = !0),
            0
        },
        V = 1 << 31,
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function(a, b) {
            for (var c = 0,
            d = a.length; d > c; c++) if (a[c] === b) return c;
            return - 1
        },
        ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]",
        da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
        fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
        ga = new RegExp(ca + "+", "g"),
        ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
        ia = new RegExp("^" + ca + "*," + ca + "*"),
        ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        la = new RegExp(fa),
        ma = new RegExp("^" + da + "$"),
        na = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da + "|[*])"),
            ATTR: new RegExp("^" + ea),
            PSEUDO: new RegExp("^" + fa),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ba + ")$", "i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        },
        oa = /^(?:input|select|textarea|button)$/i,
        pa = /^h\d$/i,
        qa = /^[^{]+\{\s*\[native \w/,
        ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        sa = /[+~]/,
        ta = /'|\\/g,
        ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        va = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b: 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        },
        wa = function() {
            F()
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes),
            X[O.childNodes.length].nodeType
        } catch(a) {
            $ = {
                apply: X.length ?
                function(a, b) {
                    Z.apply(a, _.call(b))
                }: function(a, b) {
                    for (var c = a.length,
                    d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {},
        y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !! b && "HTML" !== b.nodeName
        },
        F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a: O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(G.createComment("")),
                !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N,
                !G.getElementsByName || !G.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            },
            w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ?
            function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            }: function(a, b) {
                var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            w.find.CLASS = v.getElementsByClassName &&
            function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0
            },
            K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                a.querySelectorAll(":checked").length || J.push(":checked"),
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = G.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                J.push(",.*:")
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"),
                L.call(a, "[s!='']:x"),
                K.push("!=", fa)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
                return ! 1
            },
            U = b ?
            function(a, b) {
                if (a === b) return E = !0,
                0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c: (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            }: function(a, b) {
                if (a === b) return E = !0,
                0;
                var c, d = 0,
                e = a.parentNode,
                f = b.parentNode,
                h = [a],
                i = [b];
                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
            },
            G) : G
        },
        b.matches = function(a, c) {
            return b(a, null, null, c)
        },
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch(a) {}
            return b(c, G, null, [a]).length > 0
        },
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        },
        b.attr = function(a, b) { (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
            d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d: v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
        },
        b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        },
        b.uniqueSort = function(a) {
            var b, c = [],
            d = 0,
            e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null,
            a
        },
        x = b.getText = function(a) {
            var b, c = "",
            d = 0,
            e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d++];) c += x(b);
            return c
        },
        w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ua, va),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[4] || a[5] || "": c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ua, va).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c: !c || (f += "", "=" === c ? f === d: "!=" === c ? f !== d: "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice( - d.length) === d: "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice( - 4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h,
                        t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];) if (h ? m.nodeName.toLowerCase() === r: 1 === m.nodeType) return ! 1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return ! 0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [P, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1) for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r: 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]),
                        a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                    c = [],
                    e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a,
                        e(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(ua, va),
                    function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a),
                    a = a.replace(ua, va).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = I ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! w.pseudos.empty(a)
                },
                header: function(a) {
                    return pa.test(a.nodeName)
                },
                input: function(a) {
                    return oa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b: c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b: c; ++d < b;) a.push(d);
                    return a
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos,
        w.setFilters = new l,
        z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                d = !1,
                (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) ! (e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length: h ? b.error(a) : S(a, i).slice(0)
        },
        A = b.compile = function(a, b) {
            var c, d = [],
            e = [],
            f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]),
                f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)),
                f.selector = a
            }
            return f
        },
        B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
            l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                    j && (b = b.parentNode),
                    a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e--&&(g = f[e], !w.relative[h = g.type]);) if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d),
                    c;
                    break
                }
            }
            return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b),
            c
        },
        v.sortStable = N.split("").sort(U).join("") === N,
        v.detectDuplicates = !!E,
        F(),
        v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        e(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width",
        function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        v.attributes && e(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || f("value",
        function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba,
        function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
        }),
        b
    } (a);
    fa.find = ka,
    fa.expr = ka.selectors,
    fa.expr[":"] = fa.expr.pseudos,
    fa.uniqueSort = fa.unique = ka.uniqueSort,
    fa.text = ka.getText,
    fa.isXMLDoc = ka.isXML,
    fa.contains = ka.contains;
    var la = function(a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
            if (e && fa(a).is(c)) break;
            d.push(a)
        }
        return d
    },
    ma = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
    },
    na = fa.expr.match.needsContext,
    oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    pa = /^.[^:#\[\.,]*$/;
    fa.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b,
        function(a) {
            return 1 === a.nodeType
        }))
    },
    fa.fn.extend({
        find: function(a) {
            var b, c = this.length,
            d = [],
            e = this;
            if ("string" != typeof a) return this.pushStack(fa(a).filter(function() {
                for (b = 0; c > b; b++) if (fa.contains(e[b], this)) return ! 0
            }));
            for (b = 0; c > b; b++) fa.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? fa.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a: a,
            d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !! d(this, "string" == typeof a && na.test(a) ? fa(a) : a || [], !1).length
        }
    });
    var qa, ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    sa = fa.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || qa, "string" == typeof a) {
            if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ra.exec(a), !d || !d[1] && b) return ! b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof fa ? b[0] : b, fa.merge(this, fa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b: X, !0)), oa.test(d[1]) && fa.isPlainObject(b)) for (d in b) fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            return e = X.getElementById(d[2]),
            e && e.parentNode && (this.length = 1, this[0] = e),
            this.context = X,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(fa) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
    };
    sa.prototype = fa.fn,
    qa = fa(X);
    var ta = /^(?:parents|prev(?:Until|All))/,
    ua = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fa.fn.extend({
        has: function(a) {
            var b = fa(a, this),
            c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (fa.contains(this, b[a])) return ! 0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0,
            e = this.length,
            f = [], g = na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? _.call(fa(a), this[0]) : _.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    }),
    fa.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        parents: function(a) {
            return la(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return la(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return la(a, "nextSibling")
        },
        prevAll: function(a) {
            return la(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return la(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return la(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ma((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ma(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || fa.merge([], a.childNodes)
        }
    },
    function(a, b) {
        fa.fn[a] = function(c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c),
            d && "string" == typeof d && (e = fa.filter(d, e)),
            this.length > 1 && (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var va = /\S+/g;
    fa.Callbacks = function(a) {
        a = "string" == typeof a ? f(a) : fa.extend({},
        a);
        var b, c, d, e, g = [],
        h = [],
        i = -1,
        j = function() {
            for (e = a.once, d = b = !0; h.length; i = -1) for (c = h.shift(); ++i < g.length;) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
            a.memory || (c = !1),
            b = !1,
            e && (g = c ? [] : "")
        },
        k = {
            add: function() {
                return g && (c && !b && (i = g.length - 1, h.push(c)),
                function b(c) {
                    fa.each(c,
                    function(c, d) {
                        fa.isFunction(d) ? a.unique && k.has(d) || g.push(d) : d && d.length && "string" !== fa.type(d) && b(d)
                    })
                } (arguments), c && !b && j()),
                this
            },
            remove: function() {
                return fa.each(arguments,
                function(a, b) {
                    for (var c; (c = fa.inArray(b, g, c)) > -1;) g.splice(c, 1),
                    i >= c && i--
                }),
                this
            },
            has: function(a) {
                return a ? fa.inArray(a, g) > -1 : g.length > 0
            },
            empty: function() {
                return g && (g = []),
                this
            },
            disable: function() {
                return e = h = [],
                g = c = "",
                this
            },
            disabled: function() {
                return ! g
            },
            lock: function() {
                return e = h = [],
                c || (g = c = ""),
                this
            },
            locked: function() {
                return !! e
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! d
            }
        };
        return k
    },
    fa.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", fa.Callbacks("once memory"), "resolved"], ["reject", "fail", fa.Callbacks("once memory"), "rejected"], ["notify", "progress", fa.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return fa.Deferred(function(c) {
                        fa.each(b,
                        function(b, f) {
                            var g = fa.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && fa.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? fa.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            fa.each(b,
            function(a, f) {
                var g = f[2],
                h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d: this, arguments),
                    this
                },
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b, c, d, e = 0,
            f = Y.call(arguments),
            g = f.length,
            h = 1 !== g || a && fa.isFunction(a.promise) ? g: 0,
            i = 1 === h ? a: fa.Deferred(),
            j = function(a, c, d) {
                return function(e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? Y.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    });
    var wa;
    fa.fn.ready = function(a) {
        return fa.ready.promise().done(a),
        this
    },
    fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? fa.readyWait++:fa.ready(!0)
        },
        ready: function(a) { (a === !0 ? --fa.readyWait: fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (wa.resolveWith(X, [fa]), fa.fn.triggerHandler && (fa(X).triggerHandler("ready"), fa(X).off("ready"))))
        }
    }),
    fa.ready.promise = function(b) {
        return wa || (wa = fa.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? a.setTimeout(fa.ready) : (X.addEventListener("DOMContentLoaded", g), a.addEventListener("load", g))),
        wa.promise(b)
    },
    fa.ready.promise();
    var xa = function(a, b, c, d, e, f, g) {
        var h = 0,
        i = a.length,
        j = null == c;
        if ("object" === fa.type(c)) {
            e = !0;
            for (h in c) xa(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, fa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(fa(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d: d.call(a[h], h, b(a[h], c)));
        return e ? a: j ? b.call(a) : i ? b(a[0], c) : f
    },
    ya = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    h.uid = 1,
    h.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c: Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }),
            a[this.expando]
        },
        cache: function(a) {
            if (!ya(a)) return {};
            var b = a[this.expando];
            return b || (b = {},
            ya(a) && (a.nodeType ? a[this.expando] = b: Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d: this.get(a, fa.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c: b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    fa.isArray(b) ? d = b.concat(b.map(fa.camelCase)) : (e = fa.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(va) || [])),
                    c = d.length;
                    for (; c--;) delete f[d[c]]
                } (void 0 === b || fa.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !fa.isEmptyObject(b)
        }
    };
    var za = new h,
    Aa = new h,
    Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ca = /[A-Z]/g;
    fa.extend({
        hasData: function(a) {
            return Aa.hasData(a) || za.hasData(a)
        },
        data: function(a, b, c) {
            return Aa.access(a, b, c)
        },
        removeData: function(a, b) {
            Aa.remove(a, b)
        },
        _data: function(a, b, c) {
            return za.access(a, b, c)
        },
        _removeData: function(a, b) {
            za.remove(a, b)
        }
    }),
    fa.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
            g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Aa.get(f), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = fa.camelCase(d.slice(5)), i(f, d, e[d])));
                    za.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                Aa.set(this, a)
            }) : xa(this,
            function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = Aa.get(f, a) || Aa.get(f, a.replace(Ca, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = fa.camelCase(a), c = Aa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else d = fa.camelCase(a),
                this.each(function() {
                    var c = Aa.get(this, d);
                    Aa.set(this, d, b),
                    a.indexOf("-") > -1 && void 0 !== c && Aa.set(this, a, b)
                })
            },
            null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                Aa.remove(this, a)
            })
        }
    }),
    fa.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = za.get(a, b), c && (!d || fa.isArray(c) ? d = za.access(a, b, fa.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fa.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = fa._queueHooks(a, b),
            g = function() {
                fa.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return za.get(a, c) || za.access(a, c, {
                empty: fa.Callbacks("once memory").add(function() {
                    za.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    fa.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--),
            arguments.length < c ? fa.queue(this[0], a) : void 0 === b ? this: this.each(function() {
                var c = fa.queue(this, a, b);
                fa._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                fa.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
            e = fa.Deferred(),
            f = this,
            g = this.length,
            h = function() {--d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = za.get(f[g], a + "queueHooks"),
            c && c.empty && (d++, c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
    Fa = ["Top", "Right", "Bottom", "Left"],
    Ga = function(a, b) {
        return a = b || a,
        "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
    },
    Ha = /^(?:checkbox|radio)$/i,
    Ia = /<([\w:-]+)/,
    Ja = /^$|\/(?:java|ecma)script/i,
    Ka = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ka.optgroup = Ka.option,
    Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead,
    Ka.th = Ka.td;
    var La = /<|&#?\w+;/; !
    function() {
        var a = X.createDocumentFragment(),
        b = a.appendChild(X.createElement("div")),
        c = X.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    } ();
    var Ma = /^key/,
    Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Oa = /^([^.]*)(?:\.(.+)|)/;
    fa.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = fa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return "undefined" != typeof fa && fa.event.triggered !== b.type ? fa.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(va) || [""], j = b.length; j--;) h = Oa.exec(b[j]) || [],
            n = p = h[1],
            o = (h[2] || "").split(".").sort(),
            n && (l = fa.event.special[n] || {},
            n = (e ? l.delegateType: l.bindType) || n, l = fa.event.special[n] || {},
            k = fa.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && fa.expr.match.needsContext.test(e),
                namespace: o.join(".")
            },
            f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), fa.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = za.hasData(a) && za.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(va) || [""], j = b.length; j--;) if (h = Oa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = fa.event.special[n] || {},
                    n = (d ? l.delegateType: l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f],
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && za.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = fa.event.fix(a);
            var b, c, d, e, f, g = [],
            h = Y.call(arguments),
            i = (za.get(this, "events") || {})[a.type] || [],
            j = fa.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = fa.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((fa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
            h = b.delegateCount,
            i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; h > c; c++) f = b[c],
                e = f.selector + " ",
                void 0 === d[e] && (d[e] = f.needsContext ? fa(e, this).index(i) > -1 : fa.find(e, this, null, [i]).length),
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                })
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || X, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[fa.expando]) return a;
            var b, c, d, e = a.type,
            f = a,
            g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Na.test(e) ? this.mouseHooks: Ma.test(e) ? this.keyHooks: {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b],
            a[c] = f[c];
            return a.target || (a.target = X),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return fa.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    fa.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    },
    fa.Event = function(a, b) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? n: o) : this.type = a, b && fa.extend(this, b), this.timeStamp = a && a.timeStamp || fa.now(), void(this[fa.expando] = !0)) : new fa.Event(a, b)
    },
    fa.Event.prototype = {
        constructor: fa.Event,
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = n,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = n,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = n,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                return e && (e === d || fa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    fa.fn.extend({
        on: function(a, b, c, d) {
            return q(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return q(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj,
            fa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace: d.origType, d.selector, d.handler),
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0),
            c === !1 && (c = o),
            this.each(function() {
                fa.event.remove(this, a, c, b)
            })
        }
    });
    var Pa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Qa = /<script|<style|<link/i,
    Ra = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Sa = /^true\/(.*)/,
    Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
        htmlPrefilter: function(a) {
            return a.replace(Pa, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
            i = fa.contains(a.ownerDocument, a);
            if (! (da.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a))) for (g = k(h), f = k(a), d = 0, e = f.length; e > d; d++) v(f[d], g[d]);
            if (b) if (c) for (f = f || k(a), g = g || k(h), d = 0, e = f.length; e > d; d++) u(f[d], g[d]);
            else u(a, h);
            return g = k(h, "script"),
            g.length > 0 && l(g, !i && k(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = fa.event.special,
            f = 0; void 0 !== (c = a[f]); f++) if (ya(c)) {
                if (b = c[za.expando]) {
                    if (b.events) for (d in b.events) e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
                    c[za.expando] = void 0
                }
                c[Aa.expando] && (c[Aa.expando] = void 0)
            }
        }
    }),
    fa.fn.extend({
        domManip: w,
        detach: function(a) {
            return x(this, a, !0)
        },
        remove: function(a) {
            return x(this, a)
        },
        text: function(a) {
            return xa(this,
            function(a) {
                return void 0 === a ? fa.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            },
            null, a, arguments.length)
        },
        append: function() {
            return w(this, arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return w(this, arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = r(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return w(this, arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return w(this, arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(k(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a,
            b = null == b ? a: b,
            this.map(function() {
                return fa.clone(this, a, b)
            })
        },
        html: function(a) {
            return xa(this,
            function(a) {
                var b = this[0] || {},
                c = 0,
                d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Qa.test(a) && !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = fa.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {},
                        1 === b.nodeType && (fa.cleanData(k(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch(a) {}
                }
                b && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return w(this, arguments,
            function(b) {
                var c = this.parentNode;
                fa.inArray(this, a) < 0 && (fa.cleanData(k(this)), c && c.replaceChild(b, this))
            },
            a)
        }
    }),
    fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        fa.fn[a] = function(a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this: this.clone(!0),
            fa(e[g])[b](c),
            $.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ua, Va = {
        HTML: "block",
        BODY: "block"
    },
    Wa = /^margin/,
    Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
    Ya = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    },
    Za = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f],
        a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    },
    $a = X.documentElement; !
    function() {
        function b() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            h.innerHTML = "",
            $a.appendChild(g);
            var b = a.getComputedStyle(h);
            c = "1%" !== b.top,
            f = "2px" === b.marginLeft,
            d = "4px" === b.width,
            h.style.marginRight = "50%",
            e = "4px" === b.marginRight,
            $a.removeChild(g)
        }
        var c, d, e, f, g = X.createElement("div"),
        h = X.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", da.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), fa.extend(da, {
            pixelPosition: function() {
                return b(),
                c
            },
            boxSizingReliable: function() {
                return null == d && b(),
                d
            },
            pixelMarginRight: function() {
                return null == d && b(),
                e
            },
            reliableMarginLeft: function() {
                return null == d && b(),
                f
            },
            reliableMarginRight: function() {
                var b, c = h.appendChild(X.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                c.style.marginRight = c.style.width = "0",
                h.style.width = "1px",
                $a.appendChild(g),
                b = !parseFloat(a.getComputedStyle(c).marginRight),
                $a.removeChild(g),
                h.removeChild(c),
                b
            }
        }))
    } ();
    var _a = /^(none|table(?!-c[ea]).+)/,
    ab = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    bb = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    cb = ["Webkit", "O", "Moz", "ms"],
    db = X.createElement("div").style;
    fa.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = A(a, "opacity");
                        return "" === c ? "1": c
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
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = fa.camelCase(b),
                i = a.style;
                return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h),
                g = fa.cssHooks[b] || fa.cssHooks[h],
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e: i[b] : (f = typeof c, "string" === f && (e = Ea.exec(c)) && e[1] && (c = j(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (fa.cssNumber[h] ? "": "px")), da.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = fa.camelCase(b);
            return b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h),
            g = fa.cssHooks[b] || fa.cssHooks[h],
            g && "get" in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = A(a, b, d)),
            "normal" === e && b in bb && (e = bb[b]),
            "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    fa.each(["height", "width"],
    function(a, b) {
        fa.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? _a.test(fa.css(a, "display")) && 0 === a.offsetWidth ? Za(a, ab,
                function() {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ya(a),
                g = d && E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
                return g && (e = Ea.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = fa.css(a, b)),
                D(a, c, g)
            }
        }
    }),
    fa.cssHooks.marginLeft = B(da.reliableMarginLeft,
    function(a, b) {
        return b ? (parseFloat(A(a, "marginLeft")) || a.getBoundingClientRect().left - Za(a, {
            marginLeft: 0
        },
        function() {
            return a.getBoundingClientRect().left
        })) + "px": void 0
    }),
    fa.cssHooks.marginRight = B(da.reliableMarginRight,
    function(a, b) {
        return b ? Za(a, {
            display: "inline-block"
        },
        A, [a, "marginRight"]) : void 0
    }),
    fa.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        fa.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0,
                e = {},
                f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Wa.test(a) || (fa.cssHooks[a + b].set = D)
    }),
    fa.fn.extend({
        css: function(a, b) {
            return xa(this,
            function(a, b, c) {
                var d, e, f = {},
                g = 0;
                if (fa.isArray(b)) {
                    for (d = Ya(a), e = b.length; e > g; g++) f[b[g]] = fa.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b)
            },
            a, b, arguments.length > 1)
        },
        show: function() {
            return G(this, !0)
        },
        hide: function() {
            return G(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ga(this) ? fa(this).show() : fa(this).hide()
            })
        }
    }),
    fa.Tween = H,
    H.prototype = {
        constructor: H,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || fa.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (fa.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = H.propHooks[this.prop];
            return a && a.get ? a.get(this) : H.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = H.propHooks[this.prop];
            return this.options.duration ? this.pos = b = fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0)
            },
            set: function(a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[fa.cssProps[a.prop]] && !fa.cssHooks[a.prop] ? a.elem[a.prop] = a.now: fa.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    fa.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    fa.fx = H.prototype.init,
    fa.fx.step = {};
    var eb, fb, gb = /^(?:toggle|show|hide)$/,
    hb = /queueHooks$/;
    fa.Animation = fa.extend(N, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return j(c.elem, a, Ea.exec(b), c),
                c
            }]
        },
        tweener: function(a, b) {
            fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(va);
            for (var c, d = 0,
            e = a.length; e > d; d++) c = a[d],
            N.tweeners[c] = N.tweeners[c] || [],
            N.tweeners[c].unshift(b)
        },
        prefilters: [L],
        prefilter: function(a, b) {
            b ? N.prefilters.unshift(a) : N.prefilters.push(a)
        }
    }),
    fa.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fa.extend({},
        a) : {
            complete: c || !c && b || fa.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fa.isFunction(b) && b
        };
        return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            fa.isFunction(d.old) && d.old.call(this),
            d.queue && fa.dequeue(this, d.queue)
        },
        d
    },
    fa.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ga).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = fa.isEmptyObject(a),
            f = fa.speed(b, c, d),
            g = function() {
                var b = N(this, fa.extend({},
                a), f); (e || za.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                e = null != a && a + "queueHooks",
                f = fa.timers,
                g = za.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); ! b && c || fa.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = za.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = fa.timers,
                g = d ? d.length: 0;
                for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    fa.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(J(b, !0), a, d, e)
        }
    }),
    fa.each({
        slideDown: J("show"),
        slideUp: J("hide"),
        slideToggle: J("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        fa.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    fa.timers = [],
    fa.fx.tick = function() {
        var a, b = 0,
        c = fa.timers;
        for (eb = fa.now(); b < c.length; b++) a = c[b],
        a() || c[b] !== a || c.splice(b--, 1);
        c.length || fa.fx.stop(),
        eb = void 0
    },
    fa.fx.timer = function(a) {
        fa.timers.push(a),
        a() ? fa.fx.start() : fa.timers.pop()
    },
    fa.fx.interval = 13,
    fa.fx.start = function() {
        fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval))
    },
    fa.fx.stop = function() {
        a.clearInterval(fb),
        fb = null
    },
    fa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    fa.fn.delay = function(b, c) {
        return b = fa.fx ? fa.fx.speeds[b] || b: b,
        c = c || "fx",
        this.queue(c,
        function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    },
    function() {
        var a = X.createElement("input"),
        b = X.createElement("select"),
        c = b.appendChild(X.createElement("option"));
        a.type = "checkbox",
        da.checkOn = "" !== a.value,
        da.optSelected = c.selected,
        b.disabled = !0,
        da.optDisabled = !c.disabled,
        a = X.createElement("input"),
        a.value = "t",
        a.type = "radio",
        da.radioValue = "t" === a.value
    } ();
    var ib, jb = fa.expr.attrHandle;
    fa.fn.extend({
        attr: function(a, b) {
            return xa(this, fa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                fa.removeAttr(this, a)
            })
        }
    }),
    fa.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? fa.prop(a, b, c) : (1 === f && fa.isXMLDoc(a) || (b = b.toLowerCase(), e = fa.attrHooks[b] || (fa.expr.match.bool.test(b) ? ib: void 0)), void 0 !== c ? null === c ? void fa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d: (d = fa.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
            f = b && b.match(va);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = fa.propFix[c] || c,
            fa.expr.match.bool.test(c) && (a[d] = !1),
            a.removeAttribute(c)
        }
    }),
    ib = {
        set: function(a, b, c) {
            return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    fa.each(fa.expr.match.bool.source.match(/\w+/g),
    function(a, b) {
        var c = jb[b] || fa.find.attr;
        jb[b] = function(a, b, d) {
            var e, f;
            return d || (f = jb[b], jb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, jb[b] = f),
            e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
    lb = /^(?:a|area)$/i;
    fa.fn.extend({
        prop: function(a, b) {
            return xa(this, fa.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fa.propFix[a] || a]
            })
        }
    }),
    fa.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && fa.isXMLDoc(a) || (b = fa.propFix[b] || b, e = fa.propHooks[b]),
            void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: a[b] = c: e && "get" in e && null !== (d = e.get(a, b)) ? d: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = fa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    da.optSelected || (fa.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        fa.propFix[this.toLowerCase()] = this
    });
    var mb = /[\t\r\n\f]/g;
    fa.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).addClass(a.call(this, b, O(this)))
            });
            if ("string" == typeof a && a) for (b = a.match(va) || []; c = this[i++];) if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                h = fa.trim(d),
                e !== h && c.setAttribute("class", h)
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).removeClass(a.call(this, b, O(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) for (b = a.match(va) || []; c = this[i++];) if (e = O(c), d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")) {
                for (g = 0; f = b[g++];) for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                h = fa.trim(d),
                e !== h && c.setAttribute("class", h)
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function(c) {
                fa(this).toggleClass(a.call(this, c, O(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) for (d = 0, e = fa(this), f = a.match(va) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = O(this), b && za.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "": za.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];) if (1 === c.nodeType && (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1) return ! 0;
            return ! 1
        }
    });
    var nb = /\r/g,
    ob = /[\x20\t\r\n\f]+/g;
    fa.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = fa.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, fa(this).val()) : a, null == e ? e = "": "number" == typeof e ? e += "": fa.isArray(e) && (e = fa.map(e,
                function(a) {
                    return null == a ? "": a + ""
                })), b = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c: (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "": c)) : void 0
        }
    }),
    fa.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = fa.find.attr(a, "value");
                    return null != b ? b: fa.trim(fa.text(a)).replace(ob, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options,
                    e = a.selectedIndex,
                    f = "select-one" === a.type || 0 > e,
                    g = f ? null: [], h = f ? e + 1 : d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (da.optDisabled ? !c.disabled: null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !fa.nodeName(c.parentNode, "optgroup"))) {
                        if (b = fa(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options,
                    f = fa.makeArray(b), g = e.length; g--;) d = e[g],
                    (d.selected = fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    fa.each(["radio", "checkbox"],
    function() {
        fa.valHooks[this] = {
            set: function(a, b) {
                return fa.isArray(b) ? a.checked = fa.inArray(fa(a).val(), b) > -1 : void 0
            }
        },
        da.checkOn || (fa.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || X],
            n = ca.call(b, "type") ? b.type: b,
            o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || X, 3 !== d.nodeType && 8 !== d.nodeType && !pb.test(n + fa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[fa.expando] ? b: new fa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : fa.makeArray(c, [b]), l = fa.event.special[n] || {},
            e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !fa.isWindow(d)) {
                    for (i = l.delegateType || n, pb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g),
                    h = g;
                    h === (d.ownerDocument || X) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i: l.bindType || n,
                k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle"),
                k && k.apply(g, c),
                k = j && g[j],
                k && k.apply && ya(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n,
                e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !ya(d) || j && fa.isFunction(d[n]) && !fa.isWindow(d) && (h = d[j], h && (d[j] = null), fa.event.triggered = n, d[n](), fa.event.triggered = void 0, h && (d[j] = h)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = fa.extend(new fa.Event, c, {
                type: a,
                isSimulated: !0
            });
            fa.event.trigger(d, null, b)
        }
    }),
    fa.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                fa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? fa.event.trigger(a, b, c, !0) : void 0
        }
    }),
    fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        fa.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    fa.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    da.focusin = "onfocusin" in a,
    da.focusin || fa.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = function(a) {
            fa.event.simulate(b, a.target, fa.event.fix(a))
        };
        fa.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                e = za.access(d, b);
                e || d.addEventListener(a, c, !0),
                za.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                e = za.access(d, b) - 1;
                e ? za.access(d, b, e) : (d.removeEventListener(a, c, !0), za.remove(d, b))
            }
        }
    });
    var qb = a.location,
    rb = fa.now(),
    sb = /\?/;
    fa.parseJSON = function(a) {
        return JSON.parse(a + "")
    },
    fa.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch(a) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || fa.error("Invalid XML: " + b),
        c
    };
    var tb = /#.*$/,
    ub = /([?&])_=[^&]*/,
    vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    wb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    xb = /^(?:GET|HEAD)$/,
    yb = /^\/\//,
    zb = {},
    Ab = {},
    Bb = "*/".concat("*"),
    Cb = X.createElement("a");
    Cb.href = qb.href,
    fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: wb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bb,
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
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a)
        },
        ajaxPrefilter: P(zb),
        ajaxTransport: P(Ab),
        ajax: function(b, c) {
            function d(b, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), e = void 0, g = h || "", w.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (t = S(m, w, d)), t = T(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent": 304 === b ? x = "notmodified": (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, !b && x || (x = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, k && o.trigger(j ? "ajaxSuccess": "ajaxError", [w, m, j ? l: s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({},
            c),
            n = m.context || m,
            o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
            p = fa.Deferred(),
            q = fa.Callbacks("once memory"),
            r = m.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!h) for (h = {}; b = vb.exec(g);) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g: null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
                    else w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return e && e.abort(b),
                    d(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || qb.href) + "").replace(tb, "").replace(yb, qb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(va) || [""], null == m.crossDomain) {
                j = X.createElement("a");
                try {
                    j.href = m.url,
                    j.href = j.href,
                    m.crossDomain = Cb.protocol + "//" + Cb.host != j.protocol + "//" + j.host
                } catch(a) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), Q(zb, m, c, w), 2 === u) return w;
            k = fa.event && m.global,
            k && 0 === fa.active++&&fa.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !xb.test(m.type),
            f = m.url,
            m.hasContent || (m.data && (f = m.url += (sb.test(f) ? "&": "?") + m.data, delete m.data), m.cache === !1 && (m.url = ub.test(f) ? f.replace(ub, "$1_=" + rb++) : f + (sb.test(f) ? "&": "?") + "_=" + rb++)),
            m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Bb + "; q=0.01": "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            if (e = Q(Ab, m, c, w)) {
                if (w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    w.abort("timeout")
                },
                m.timeout));
                try {
                    u = 1,
                    e.send(s, d)
                } catch(a) {
                    if (! (2 > u)) throw a;
                    d( - 1, a)
                }
            } else d( - 1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return fa.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return fa.get(a, void 0, b, "script")
        }
    }),
    fa.each(["get", "post"],
    function(a, b) {
        fa[b] = function(a, c, d, e) {
            return fa.isFunction(c) && (e = e || d, d = c, c = void 0),
            fa.ajax(fa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            },
            fa.isPlainObject(a) && a))
        }
    }),
    fa._evalUrl = function(a) {
        return fa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    },
    fa.fn.extend({
        wrapAll: function(a) {
            var b;
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = fa(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = fa.isFunction(a);
            return this.each(function(c) {
                fa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    fa.expr.filters.hidden = function(a) {
        return ! fa.expr.filters.visible(a)
    },
    fa.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Db = /%20/g,
    Eb = /\[\]$/,
    Fb = /\r?\n/g,
    Gb = /^(?:submit|button|image|reset|file)$/i,
    Hb = /^(?:input|select|textarea|keygen)/i;
    fa.param = function(a, b) {
        var c, d = [],
        e = function(a, b) {
            b = fa.isFunction(b) ? b() : null == b ? "": b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a,
        function() {
            e(this.name, this.value)
        });
        else for (c in a) U(c, a[c], b, e);
        return d.join("&").replace(Db, "+")
    },
    fa.fn.extend({
        serialize: function() {
            return fa.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && Hb.test(this.nodeName) && !Gb.test(a) && (this.checked || !Ha.test(a))
            }).map(function(a, b) {
                var c = fa(this).val();
                return null == c ? null: fa.isArray(c) ? fa.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Fb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Fb, "\r\n")
                }
            }).get()
        }
    }),
    fa.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch(a) {}
    };
    var Ib = {
        0 : 200,
        1223 : 204
    },
    Jb = fa.ajaxSettings.xhr();
    da.cors = !!Jb && "withCredentials" in Jb,
    da.ajax = Jb = !!Jb,
    fa.ajaxTransport(function(b) {
        var c, d;
        return da.cors || Jb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ib[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        }: {
                            text: h.responseText
                        },
                        h.getAllResponseHeaders()))
                    }
                },
                h.onload = c(),
                d = h.onerror = c("error"),
                void 0 !== h.onabort ? h.onabort = d: h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                },
                c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch(a) {
                    if (c) throw a
                }
            },
            abort: function() {
                c && c()
            }
        }: void 0
    }),
    fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return fa.globalEval(a),
                a
            }
        }
    }),
    fa.ajaxPrefilter("script",
    function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    fa.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fa("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && e("error" === a.type ? 404 : 200, a.type)
                    }),
                    X.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Kb = [],
    Lb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Kb.pop() || fa.expando + "_" + rb++;
            return this[a] = !0,
            a
        }
    }),
    fa.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Lb.test(b.url) ? "url": "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Lb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = fa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Lb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&": "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || fa.error(e + " was not called"),
            g[0]
        },
        b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        },
        d.always(function() {
            void 0 === f ? fa(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback, Kb.push(e)),
            g && fa.isFunction(f) && f(g[0]),
            g = f = void 0
        }), "script") : void 0
    }),
    fa.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1),
        b = b || X;
        var d = oa.exec(a),
        e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m([a], b, e), e && e.length && fa(e).remove(), fa.merge([], d.childNodes))
    };
    var Mb = fa.fn.load;
    fa.fn.load = function(a, b, c) {
        if ("string" != typeof a && Mb) return Mb.apply(this, arguments);
        var d, e, f, g = this,
        h = a.indexOf(" ");
        return h > -1 && (d = fa.trim(a.slice(h)), a = a.slice(0, h)),
        fa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && fa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a)
        }).always(c &&
        function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }),
        this
    },
    fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(a, b) {
        fa.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    fa.expr.filters.animated = function(a) {
        return fa.grep(fa.timers,
        function(b) {
            return a === b.elem
        }).length
    },
    fa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fa.css(a, "position"),
            l = fa(a),
            m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = fa.css(a, "top"),
            i = fa.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
            fa.isFunction(b) && (b = b.call(a, c, fa.extend({},
            h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m)
        }
    },
    fa.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this: this.each(function(b) {
                fa.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
            e = {
                top: 0,
                left: 0
            },
            f = d && d.ownerDocument;
            return f ? (b = f.documentElement, fa.contains(b, d) ? (e = d.getBoundingClientRect(), c = V(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - fa.css(c, "marginTop", !0),
                    left: b.left - d.left - fa.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === fa.css(a, "position");) a = a.offsetParent;
                return a || $a
            })
        }
    }),
    fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, b) {
        var c = "pageYOffset" === b;
        fa.fn[a] = function(d) {
            return xa(this,
            function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset: e, c ? e: f.pageYOffset) : a[d] = e)
            },
            a, d, arguments.length)
        }
    }),
    fa.each(["top", "left"],
    function(a, b) {
        fa.cssHooks[b] = B(da.pixelPosition,
        function(a, c) {
            return c ? (c = A(a, b), Xa.test(c) ? fa(a).position()[b] + "px": c) : void 0
        })
    }),
    fa.each({
        Height: "height",
        Width: "width"
    },
    function(a, b) {
        fa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        },
        function(c, d) {
            fa.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                g = c || (d === !0 || e === !0 ? "margin": "border");
                return xa(this,
                function(b, c, d) {
                    var e;
                    return fa.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? fa.css(b, c, g) : fa.style(b, c, d, g)
                },
                b, f ? d: void 0, f, null)
            }
        })
    }),
    fa.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }),
    fa.fn.andSelf = fa.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return fa
    });
    var Nb = a.jQuery,
    Ob = a.$;
    return fa.noConflict = function(b) {
        return a.$ === fa && (a.$ = Ob),
        b && a.jQuery === fa && (a.jQuery = Nb),
        fa
    },
    b || (a.jQuery = a.$ = fa),
    fa
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
} (jQuery),
+
function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
        b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return ! 1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
        d = this;
        a(this).one("bsTransitionEnd",
        function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    },
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this),
            e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
    d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.7",
    d.TRANSITION_DURATION = 150,
    d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
        f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
        g.length || (g = e.closest(".alert")),
        g.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    },
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.button"),
            f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)),
            "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({},
        c.DEFAULTS, d),
        this.isLoading = !1
    };
    c.VERSION = "3.3.7",
    c.DEFAULTS = {
        loadingText: "loading..."
    },
    c.prototype.setState = function(b) {
        var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val": "html",
        f = d.data();
        b += "Text",
        null == f.resetText && d.data("resetText", d[e]()),
        setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]),
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        },
        this), 0)
    },
    c.prototype.toggle = function() {
        var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
        this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b,
    a.fn.button.Constructor = c,
    a.fn.button.noConflict = function() {
        return a.fn.button = d,
        this
    },
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]',
    function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"),
        a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]',
    function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.carousel"),
            f = a.extend({},
            c.DEFAULTS, d.data(), "object" == typeof b && b),
            g = "string" == typeof b ? b: f.slide;
            e || d.data("bs.carousel", e = new c(this, f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    },
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    },
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    },
    c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    },
    c.prototype.to = function(a) {
        var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (! (a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel",
        function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next": "prev", this.$items.eq(a))
    },
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    },
    c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    },
    c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left": "right",
        i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
        k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd",
            function() {
                f.removeClass([b, h].join(" ")).addClass("active"),
                e.removeClass(["active", h].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                },
                0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)),
            g && this.cycle(),
            this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    };
    var e = function(c) {
        var d, e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({},
            f.data(), e.data()),
            h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    a(window).on("load",
    function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this),
            e = c.data("bs.collapse"),
            f = a.extend({},
            d.DEFAULTS, c.data(), "object" == typeof b && b); ! e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", e = new d(this, f)),
            "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b),
        this.options = a.extend({},
        d.DEFAULTS, c),
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7",
    d.TRANSITION_DURATION = 350,
    d.DEFAULTS = {
        toggle: !0
    },
    d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width": "height"
    },
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (! (e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    },
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    },
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide": "show"]()
    },
    d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        },
        this)).end()
    },
    d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c,
    a.fn.collapse.Constructor = d,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    },
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]',
    function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle": e.data();
        c.call(f, h)
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d: b.parent()
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
            e = b(d),
            f = {
                relatedTarget: this
            };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function d(b) {
        return this.each(function() {
            var c = a(this),
            d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.7",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
            g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return ! 1
        }
    },
    g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"),
                d.trigger("click");
                var h = " li:not(.disabled):visible a",
                i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--,
                    40 == c.which && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    },
    a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form",
    function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
} (jQuery),
+
function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this),
            f = e.data("bs.modal"),
            g = a.extend({},
            c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        },
        this))
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 300,
    c.BACKDROP_TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    },
    c.prototype.show = function(b) {
        var d = this,
        e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal",
        function() {
            d.$element.one("mouseup.dismiss.bs.modal",
            function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body),
            d.$element.show().scrollTop(0),
            d.adjustDialog(),
            e && d.$element[0].offsetWidth,
            d.$element.addClass("in"),
            d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd",
            function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    },
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    },
    c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        },
        this))
    },
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        },
        this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    },
    c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    },
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$body.removeClass("modal-open"),
            a.resetAdjustments(),
            a.resetScrollbar(),
            a.$element.trigger("hidden.bs.modal")
        })
    },
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    c.prototype.backdrop = function(b) {
        var d = this,
        e = this.$element.hasClass("fade") ? "fade": "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            },
            this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(),
                b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    },
    c.prototype.handleUpdate = function() {
        this.adjustDialog()
    },
    c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth: "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth: ""
        })
    },
    c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    },
    c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a,
        this.scrollbarWidth = this.measureScrollbar()
    },
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    },
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    },
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    };
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    },
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]',
    function(c) {
        var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle": a.extend({
            remote: !/#/.test(e) && e
        },
        f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal",
        function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal",
            function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tooltip"),
            f = "object" == typeof b && b; ! e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter": "focusin",
                i = "hover" == g ? "mouseleave": "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({},
        this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    },
    c.prototype.getOptions = function(b) {
        return b = a.extend({},
        this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    },
    c.prototype.getDelegateOptions = function() {
        var b = {},
        c = this.getDefaults();
        return this._options && a.each(this._options,
        function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    },
    c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusin" == b.type ? "focus": "hover"] = !0),
        c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        },
        c.options.delay.show)) : c.show())
    },
    c.prototype.isInStateTrue = function() {
        for (var a in this.inState) if (this.inState[a]) return ! 0;
        return ! 1
    },
    c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b: a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus": "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        },
        c.options.delay.hide)) : c.hide()
    },
    c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
            this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
            j && (h = h.replace(i, "") || "top"),
            f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this),
            this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
            if (j) {
                var n = h,
                o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top": "top" == h && k.top - m < o.top ? "bottom": "right" == h && k.right + l > o.width ? "left": "left" == h && k.left - l < o.left ? "right": h,
                f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type),
                e.hoverState = null,
                "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    },
    c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        b.top += g,
        b.left += h,
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        },
        b), 0),
        d.addClass("in");
        var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left: b.top += k.top;
        var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i: 2 * k.top - f + j,
        n = l ? "offsetWidth": "offsetHeight";
        d.offset(b),
        this.replaceArrow(m, d[0][n], l)
    },
    c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left": "top", 50 * (1 - a / b) + "%").css(c ? "top": "left", "")
    },
    c.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html": "text"](b),
        a.removeClass("fade in top bottom left right")
    },
    c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(),
            e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
            b && b()
        }
        var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"),
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(),
        this.hoverState = null,
        this
    },
    c.prototype.fixTitle = function() {
        var a = this.$element; (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    },
    c.prototype.hasContent = function() {
        return this.getTitle()
    },
    c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({},
        e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
        g = d ? {
            top: 0,
            left: 0
        }: f ? null: b.offset(),
        h = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop: b.scrollTop()
        },
        i = d ? {
            width: a(window).width(),
            height: a(window).height()
        }: null;
        return a.extend({},
        e, h, i, g)
    },
    c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        }: "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        }: "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        }: {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    },
    c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h: i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
            k = b.left + f + c;
            j < g.left ? e.left = g.left - j: k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    },
    c.prototype.getTitle = function() {
        var a, b = this.$element,
        c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    },
    c.prototype.getUID = function(a) {
        do a += ~~ (1e6 * Math.random());
        while (document.getElementById(a));
        return a
    },
    c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    },
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    c.prototype.enable = function() {
        this.enabled = !0
    },
    c.prototype.disable = function() {
        this.enabled = !1
    },
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))),
        b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    },
    c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type),
            a.$tip && a.$tip.detach(),
            a.$tip = null,
            a.$arrow = null,
            a.$viewport = null,
            a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
    a.fn.tooltip.Constructor = c,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d,
        this
    }
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.popover"),
            f = "object" == typeof b && b; ! e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7",
    c.DEFAULTS = a.extend({},
    a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    c.prototype = a.extend({},
    a.fn.tooltip.Constructor.prototype),
    c.prototype.constructor = c,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    },
    c.prototype.setContent = function() {
        var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html": "text"](b),
        a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html": "append": "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    },
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    c.prototype.getContent = function() {
        var a = this.$element,
        b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    },
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b,
    a.fn.popover.Constructor = c,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = d,
        this
    }
} (jQuery),
+
function(a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body),
        this.$scrollElement = a(a(c).is(document.body) ? window: c),
        this.options = a.extend({},
        b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.scrollspy"),
            f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    },
    b.prototype.refresh = function() {
        var b = this,
        c = "offset",
        d = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var b = a(this),
            e = b.data("target") || b.attr("href"),
            f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]),
            b.targets.push(this[1])
        })
    },
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null,
        this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    },
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    },
    b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    },
    a(window).on("load.bs.scrollspy.data-api",
    function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 150,
    c.prototype.show = function() {
        var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            }),
            g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c),
                this.activate(h, h.parent(),
                function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }),
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    },
    c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            e && e()
        }
        var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
        g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    };
    var e = function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
} (jQuery),
+
function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("bs.affix"),
            f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({},
        c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    c.VERSION = "3.3.7",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom": !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
        i = h ? e: f.top,
        j = h ? g: b;
        return null != c && e <= c ? "top": null != d && i + j >= a - d && "bottom"
    },
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
        b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    },
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    },
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h: ""),
                j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h,
                this.unpin = "bottom" == h ? this.getPinnedOffset() : null,
                this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    },
    a(window).on("load",
    function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
            d = c.data();
            d.offset = d.offset || {},
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
} (jQuery),
function(a) {
    a.fn.extend({
        slimScroll: function(b) {
            var c = a.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            },
            b);
            return this.each(function() {
                function d(b) {
                    if (i) {
                        b = b || window.event;
                        var d = 0;
                        b.wheelDelta && (d = -b.wheelDelta / 120),
                        b.detail && (d = b.detail / 3),
                        a(b.target || b.srcTarget || b.srcElement).closest("." + c.wrapperClass).is(r.parent()) && e(d, !0),
                        b.preventDefault && !q && b.preventDefault(),
                        q || (b.returnValue = !1)
                    }
                }
                function e(a, b, d) {
                    q = !1;
                    var e = a,
                    f = r.outerHeight() - u.outerHeight();
                    b && (e = parseInt(u.css("top")) + a * parseInt(c.wheelStep) / 100 * u.outerHeight(), e = Math.min(Math.max(e, 0), f), e = 0 < a ? Math.ceil(e) : Math.floor(e), u.css({
                        top: e + "px"
                    })),
                    o = parseInt(u.css("top")) / (r.outerHeight() - u.outerHeight()),
                    e = o * (r[0].scrollHeight - r.outerHeight()),
                    d && (e = a, a = e / r[0].scrollHeight * r.outerHeight(), a = Math.min(Math.max(a, 0), f), u.css({
                        top: a + "px"
                    })),
                    r.scrollTop(e),
                    r.trigger("slimscrolling", ~~e),
                    g(),
                    h()
                }
                function f() {
                    n = Math.max(r.outerHeight() / r[0].scrollHeight * r.outerHeight(), 30),
                    u.css({
                        height: n + "px"
                    });
                    var a = n == r.outerHeight() ? "none": "block";
                    u.css({
                        display: a
                    })
                }
                function g() {
                    f(),
                    clearTimeout(l),
                    o == ~~o ? (q = c.allowPageScroll, p != o && r.trigger("slimscroll", 0 == ~~o ? "top": "bottom")) : q = !1,
                    p = o,
                    n >= r.outerHeight() ? q = !0 : (u.stop(!0, !0).fadeIn("fast"), c.railVisible && v.stop(!0, !0).fadeIn("fast"))
                }
                function h() {
                    c.alwaysVisible || (l = setTimeout(function() {
                        c.disableFadeOut && i || j || k || (u.fadeOut("slow"), v.fadeOut("slow"))
                    },
                    1e3))
                }
                var i, j, k, l, m, n, o, p, q = !1,
                r = a(this);
                if (r.parent().hasClass(c.wrapperClass)) {
                    var s = r.scrollTop(),
                    u = r.siblings("." + c.barClass),
                    v = r.siblings("." + c.railClass);
                    if (f(), a.isPlainObject(b)) {
                        if ("height" in b && "auto" == b.height) {
                            r.parent().css("height", "auto"),
                            r.css("height", "auto");
                            var w = r.parent().parent().height();
                            r.parent().css("height", w),
                            r.css("height", w)
                        } else "height" in b && (w = b.height, r.parent().css("height", w), r.css("height", w));
                        if ("scrollTo" in b) s = parseInt(c.scrollTo);
                        else if ("scrollBy" in b) s += parseInt(c.scrollBy);
                        else if ("destroy" in b) return u.remove(),
                        v.remove(),
                        void r.unwrap();
                        e(s, !1, !0)
                    }
                } else if (! (a.isPlainObject(b) && "destroy" in b)) {
                    c.height = "auto" == c.height ? r.parent().height() : c.height,
                    s = a("<div></div>").addClass(c.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: c.width,
                        height: c.height
                    }),
                    r.css({
                        overflow: "hidden",
                        width: c.width,
                        height: c.height
                    });
                    var v = a("<div></div>").addClass(c.railClass).css({
                        width: c.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: c.alwaysVisible && c.railVisible ? "block": "none",
                        "border-radius": c.railBorderRadius,
                        background: c.railColor,
                        opacity: c.railOpacity,
                        zIndex: 90
                    }),
                    u = a("<div></div>").addClass(c.barClass).css({
                        background: c.color,
                        width: c.size,
                        position: "absolute",
                        top: 0,
                        opacity: c.opacity,
                        display: c.alwaysVisible ? "block": "none",
                        "border-radius": c.borderRadius,
                        BorderRadius: c.borderRadius,
                        MozBorderRadius: c.borderRadius,
                        WebkitBorderRadius: c.borderRadius,
                        zIndex: 99
                    }),
                    w = "right" == c.position ? {
                        right: c.distance
                    }: {
                        left: c.distance
                    };
                    v.css(w),
                    u.css(w),
                    r.wrap(s),
                    r.parent().append(u),
                    r.parent().append(v),
                    c.railDraggable && u.bind("mousedown",
                    function(b) {
                        var c = a(document);
                        return k = !0,
                        t = parseFloat(u.css("top")),
                        pageY = b.pageY,
                        c.bind("mousemove.slimscroll",
                        function(a) {
                            currTop = t + a.pageY - pageY,
                            u.css("top", currTop),
                            e(0, u.position().top, !1)
                        }),
                        c.bind("mouseup.slimscroll",
                        function(a) {
                            k = !1,
                            h(),
                            c.unbind(".slimscroll")
                        }),
                        !1
                    }).bind("selectstart.slimscroll",
                    function(a) {
                        return a.stopPropagation(),
                        a.preventDefault(),
                        !1
                    }),
                    v.hover(function() {
                        g()
                    },
                    function() {
                        h()
                    }),
                    u.hover(function() {
                        j = !0
                    },
                    function() {
                        j = !1
                    }),
                    r.hover(function() {
                        i = !0,
                        g(),
                        h()
                    },
                    function() {
                        i = !1,
                        h()
                    }),
                    r.bind("touchstart",
                    function(a, b) {
                        a.originalEvent.touches.length && (m = a.originalEvent.touches[0].pageY)
                    }),
                    r.bind("touchmove",
                    function(a) {
                        q || a.originalEvent.preventDefault(),
                        a.originalEvent.touches.length && (e((m - a.originalEvent.touches[0].pageY) / c.touchScrollStep, !0), m = a.originalEvent.touches[0].pageY)
                    }),
                    f(),
                    "bottom" === c.start ? (u.css({
                        top: r.outerHeight() - u.outerHeight()
                    }), e(0, !0)) : "top" !== c.start && (e(a(c.start).position().top, null, !0), c.alwaysVisible || u.hide()),
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", d, !1), this.addEventListener("mousewheel", d, !1)) : document.attachEvent("onmousewheel", d)
                }
            }),
            this
        }
    }),
    a.fn.extend({
        slimscroll: a.fn.slimScroll
    })
} (jQuery),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
} (function(a) {
    "use strict";
    var b, c = function(b, d) {
        this.$element = b,
        this.options = a.extend({},
        c.DEFAULTS, this.$element.data(), d),
        this.enabled = !0,
        this.startClientY = 0,
        this.$element.on(c.CORE.wheelEventName + c.NAMESPACE, this.options.selector, a.proxy(c.CORE.handler, this)),
        this.options.touch && (this.$element.on("touchstart" + c.NAMESPACE, this.options.selector, a.proxy(c.CORE.touchHandler, this)), this.$element.on("touchmove" + c.NAMESPACE, this.options.selector, a.proxy(c.CORE.handler, this)))
    };
    c.NAME = "ScrollLock",
    c.VERSION = "2.1.0",
    c.NAMESPACE = ".scrollLock",
    c.ANIMATION_NAMESPACE = c.NAMESPACE + ".effect",
    c.DEFAULTS = {
        strict: !1,
        strictFn: function(a) {
            return a.prop("scrollHeight") > a.prop("clientHeight")
        },
        selector: !1,
        animation: !1,
        touch: "ontouchstart" in window
    },
    c.CORE = {
        wheelEventName: "onmousewheel" in window ? "ActiveXObject" in window ? "wheel": "mousewheel": "DOMMouseScroll",
        animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(c.ANIMATION_NAMESPACE + " ") + c.ANIMATION_NAMESPACE,
        handler: function(b) {
            var d, e, f, g;
            if (this.enabled && !b.ctrlKey && (d = a(b.currentTarget), this.options.strict !== !0 || this.options.strictFn(d))) {
                b.stopPropagation();
                var h = d.scrollTop(),
                i = d.prop("scrollHeight"),
                j = d.prop("clientHeight"),
                k = b.originalEvent.wheelDelta || -1 * b.originalEvent.detail || -1 * b.originalEvent.deltaY,
                l = 0;
                "wheel" === b.type ? (e = d.height() / a(window).height(), l = b.originalEvent.deltaY * e) : this.options.touch && "touchmove" === b.type && (k = b.originalEvent.changedTouches[0].clientY - this.startClientY),
                ((f = k > 0 && h + l <= 0) || k < 0 && h + l >= i - j) && (b.preventDefault(), l && d.scrollTop(h + l), g = f ? "top": "bottom", this.options.animation && setTimeout(c.CORE.animationHandler.bind(this, d, g), 0), d.trigger(a.Event(g + c.NAMESPACE)))
            }
        },
        touchHandler: function(a) {
            this.startClientY = a.originalEvent.touches[0].clientY
        },
        animationHandler: function(a, b) {
            var d = this.options.animation[b],
            e = this.options.animation.top + " " + this.options.animation.bottom;
            a.off(c.ANIMATION_NAMESPACE).removeClass(e).addClass(d).one(c.CORE.animationEventName,
            function() {
                a.removeClass(d)
            })
        }
    },
    c.prototype.toggleStrict = function() {
        this.options.strict = !this.options.strict
    },
    c.prototype.enable = function() {
        this.enabled = !0
    },
    c.prototype.disable = function() {
        this.enabled = !1
    },
    c.prototype.destroy = function() {
        this.disable(),
        this.$element.off(c.NAMESPACE),
        this.$element = null,
        this.options = null
    },
    b = a.fn.scrollLock,
    a.fn.scrollLock = function(b) {
        return this.each(function() {
            var d = a(this),
            e = "object" == typeof b && b,
            f = d.data(c.NAME); (f || "destroy" !== b) && (f || d.data(c.NAME, f = new c(d, e)), "string" == typeof b && f[b]())
        })
    },
    a.fn.scrollLock.defaults = c.DEFAULTS,
    a.fn.scrollLock.noConflict = function() {
        return a.fn.scrollLock = b,
        this
    }
}),
!
function(a) {
    a.fn.appear = function(b, c) {
        var d = a.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        },
        c);
        return this.each(function() {
            var c = a(this);
            if (c.appeared = !1, !b) return void c.trigger("appear", d.data);
            var e = a(window),
            f = function() {
                if (!c.is(":visible")) return void(c.appeared = !1);
                var a = e.scrollLeft(),
                b = e.scrollTop(),
                f = c.offset(),
                g = f.left,
                h = f.top,
                i = d.accX,
                j = d.accY,
                k = c.height(),
                l = e.height(),
                m = c.width(),
                n = e.width();
                h + k + j >= b && b + l + j >= h && g + m + i >= a && a + n + i >= g ? c.appeared || c.trigger("appear", d.data) : c.appeared = !1
            },
            g = function() {
                if (c.appeared = !0, d.one) {
                    e.unbind("scroll", f);
                    var g = a.inArray(f, a.fn.appear.checks);
                    g >= 0 && a.fn.appear.checks.splice(g, 1)
                }
                b.apply(this, arguments)
            };
            d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g),
            e.scroll(f),
            a.fn.appear.checks.push(f),
            f()
        })
    },
    a.extend(a.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var b = a.fn.appear.checks.length;
            if (b > 0) for (; b--;) a.fn.appear.checks[b]()
        },
        run: function() {
            a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout),
            a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
        }
    }),
    a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"],
    function(b, c) {
        var d = a.fn[c];
        d && (a.fn[c] = function() {
            var b = d.apply(this, arguments);
            return a.fn.appear.run(),
            b
        })
    })
} (jQuery),
!
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
} (function(a) {
    function b(a, b) {
        return a.toFixed(b.decimals)
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({},
        c.DEFAULTS, this.dataOptions(), d),
        this.init()
    };
    c.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: b,
        onUpdate: null,
        onComplete: null
    },
    c.prototype.init = function() {
        this.value = this.options.from,
        this.loops = Math.ceil(this.options.speed / this.options.refreshInterval),
        this.loopCount = 0,
        this.increment = (this.options.to - this.options.from) / this.loops
    },
    c.prototype.dataOptions = function() {
        var a = {
            from: this.$element.data("from"),
            to: this.$element.data("to"),
            speed: this.$element.data("speed"),
            refreshInterval: this.$element.data("refresh-interval"),
            decimals: this.$element.data("decimals")
        },
        b = Object.keys(a);
        for (var c in b) {
            var d = b[c];
            "undefined" == typeof a[d] && delete a[d]
        }
        return a
    },
    c.prototype.update = function() {
        this.value += this.increment,
        this.loopCount++,
        this.render(),
        "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value),
        this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    },
    c.prototype.render = function() {
        var a = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(a)
    },
    c.prototype.restart = function() {
        this.stop(),
        this.init(),
        this.start()
    },
    c.prototype.start = function() {
        this.stop(),
        this.render(),
        this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    },
    c.prototype.stop = function() {
        this.interval && clearInterval(this.interval)
    },
    c.prototype.toggle = function() {
        this.interval ? this.stop() : this.start()
    },
    a.fn.countTo = function(b) {
        return this.each(function() {
            var d = a(this),
            e = d.data("countTo"),
            f = !e || "object" == typeof b,
            g = "object" == typeof b ? b: {},
            h = "string" == typeof b ? b: "start";
            f && (e && e.stop(), d.data("countTo", e = new c(this, g))),
            e[h].call(e)
        })
    }
}),
!
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
} (function(a) {
    function b(b) {
        var c = {},
        d = /^jQuery\d+$/;
        return a.each(b.attributes,
        function(a, b) {
            b.specified && !d.test(b.name) && (c[b.name] = b.value)
        }),
        c
    }
    function c(b, c) {
        var d = this,
        f = a(this);
        if (d.value === f.attr(h ? "placeholder-x": "placeholder") && f.hasClass(n.customClass)) if (d.value = "", f.removeClass(n.customClass), f.data("placeholder-password")) {
            if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c,
            c;
            f.focus()
        } else d == e() && d.select()
    }
    function d(d) {
        var e, f = this,
        g = a(this),
        i = f.id;
        if (!d || "blur" !== d.type || !g.hasClass(n.customClass)) if ("" === f.value) {
            if ("password" === f.type) {
                if (!g.data("placeholder-textinput")) {
                    try {
                        e = g.clone().prop({
                            type: "text"
                        })
                    } catch(c) {
                        e = a("<input>").attr(a.extend(b(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-enabled": !0,
                        "placeholder-password": g,
                        "placeholder-id": i
                    }).bind("focus.placeholder", c),
                    g.data({
                        "placeholder-textinput": e,
                        "placeholder-id": i
                    }).before(e)
                }
                f.value = "",
                g = g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g.data("placeholder-id")).show()
            } else {
                var j = g.data("placeholder-password");
                j && (j[0].value = "", g.attr("id", g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
            }
            g.addClass(n.customClass),
            g[0].value = g.attr(h ? "placeholder-x": "placeholder")
        } else g.removeClass(n.customClass)
    }
    function e() {
        try {
            return document.activeElement
        } catch(a) {}
    }
    var f, g, h = !1,
    i = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
    j = "placeholder" in document.createElement("input") && !i && !h,
    k = "placeholder" in document.createElement("textarea") && !i && !h,
    l = a.valHooks,
    m = a.propHooks,
    n = {};
    j && k ? (g = a.fn.placeholder = function() {
        return this
    },
    g.input = !0, g.textarea = !0) : (g = a.fn.placeholder = function(b) {
        var e = {
            customClass: "placeholder"
        };
        return n = a.extend({},
        e, b),
        this.filter((j ? "textarea": ":input") + "[" + (h ? "placeholder-x": "placeholder") + "]").not("." + n.customClass).not(":radio, :checkbox, [type=hidden]").bind({
            "focus.placeholder": c,
            "blur.placeholder": d
        }).data("placeholder-enabled", !0).trigger("blur.placeholder")
    },
    g.input = j, g.textarea = k, f = {
        get: function(b) {
            var c = a(b),
            d = c.data("placeholder-password");
            return d ? d[0].value: c.data("placeholder-enabled") && c.hasClass(n.customClass) ? "": b.value
        },
        set: function(b, f) {
            var g, h, i = a(b);
            return "" !== f && (g = i.data("placeholder-textinput"), h = i.data("placeholder-password"), g ? (c.call(g[0], !0, f) || (b.value = f), g[0].value = f) : h && (c.call(b, !0, f) || (h[0].value = f), b.value = f)),
            i.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : (i.hasClass(n.customClass) && c.call(b), b.value = f), i) : (b.value = f, i)
        }
    },
    j || (l.input = f, m.value = f), k || (l.textarea = f, m.value = f), a(function() {
        a(document).delegate("form", "submit.placeholder",
        function() {
            var b = a("." + n.customClass, this).each(function() {
                c.call(this, !0, "")
            });
            setTimeout(function() {
                b.each(d)
            },
            10)
        })
    }), a(window).bind("beforeunload.placeholder",
    function() {
        var b = !0;
        try {
            "javascript:void(0)" === document.activeElement.toString() && (b = !1)
        } catch(a) {}
        b && a("." + n.customClass).each(function() {
            this.value = ""
        })
    }))
}),
!
function(a) {
    var b = !1;
    if ("function" == typeof define && define.amd && (define(a), b = !0), "object" == typeof exports && (module.exports = a(), b = !0), !b) {
        var c = window.Cookies,
        d = window.Cookies = a();
        d.noConflict = function() {
            return window.Cookies = c,
            d
        }
    }
} (function() {
    function a() {
        for (var a = 0,
        b = {}; a < arguments.length; a++) {
            var c = arguments[a];
            for (var d in c) b[d] = c[d]
        }
        return b
    }
    function b(c) {
        function d(b, e, f) {
            var g;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (f = a({
                        path: "/"
                    },
                    d.defaults, f), "number" == typeof f.expires) {
                        var h = new Date;
                        h.setMilliseconds(h.getMilliseconds() + 864e5 * f.expires),
                        f.expires = h
                    }
                    try {
                        g = JSON.stringify(e),
                        /^[\{\[]/.test(g) && (e = g)
                    } catch(a) {}
                    return e = c.write ? c.write(e, b) : encodeURIComponent(e + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    b = encodeURIComponent(b + ""),
                    b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                    b = b.replace(/[\(\)]/g, escape),
                    document.cookie = b + "=" + e + (f.expires ? "; expires=" + f.expires.toUTCString() : "") + (f.path ? "; path=" + f.path: "") + (f.domain ? "; domain=" + f.domain: "") + (f.secure ? "; secure": "")
                }
                b || (g = {});
                for (var i = document.cookie ? document.cookie.split("; ") : [], j = /(%[0-9A-Z]{2})+/g, k = 0; k < i.length; k++) {
                    var l = i[k].split("="),
                    m = l.slice(1).join("=");
                    '"' === m.charAt(0) && (m = m.slice(1, -1));
                    try {
                        var n = l[0].replace(j, decodeURIComponent);
                        if (m = c.read ? c.read(m, n) : c(m, n) || m.replace(j, decodeURIComponent), this.json) try {
                            m = JSON.parse(m)
                        } catch(a) {}
                        if (b === n) {
                            g = m;
                            break
                        }
                        b || (g[n] = m)
                    } catch(a) {}
                }
                return g
            }
        }
        return d.set = d,
        d.get = function(a) {
            return d.call(d, a)
        },
        d.getJSON = function() {
            return d.apply({
                json: !0
            },
            [].slice.call(arguments))
        },
        d.defaults = {},
        d.remove = function(b, c) {
            d(b, "", a(c, {
                expires: -1
            }))
        },
        d.withConverter = b,
        d
    }
    return b(function() {})
});
var App = function() {
    var a, b, c, d, e, f, g, h, i, j, k = function() {
        a = jQuery("html"),
        b = jQuery("body"),
        c = jQuery("#page-container"),
        d = jQuery("#sidebar"),
        e = jQuery("#sidebar-scroll"),
        f = jQuery("#side-overlay"),
        g = jQuery("#side-overlay-scroll"),
        h = jQuery("#header-navbar"),
        i = jQuery("#main-container"),
        j = jQuery("#page-footer"),
        jQuery('[data-toggle="tooltip"], .js-tooltip').tooltip({
            container: "body",
            animation: !1
        }),
        jQuery('[data-toggle="popover"], .js-popover').popover({
            container: "body",
            animation: !0,
            trigger: "hover"
        }),
        jQuery('[data-toggle="tabs"] a, .js-tabs a').click(function(a) {
            a.preventDefault(),
            jQuery(this).tab("show")
        }),
        jQuery(".form-control").placeholder()
    },
    l = function() {
        var b;
        i.length && (m(), jQuery(window).on("resize orientationchange",
        function() {
            clearTimeout(b),
            b = setTimeout(function() {
                m()
            },
            150)
        })),
        n("init"),
        c.hasClass("header-navbar-fixed") && c.hasClass("header-navbar-transparent") && jQuery(window).on("scroll",
        function() {
            jQuery(this).scrollTop() > 20 ? c.addClass("header-navbar-scroll") : c.removeClass("header-navbar-scroll")
        }),
        jQuery('[data-toggle="layout"]').on("click",
        function() {
            var b = jQuery(this);
            o(b.data("action")),
            a.hasClass("no-focus") && b.blur()
        })
    },
    m = function() {
        var a = jQuery(window).height(),
        b = h.outerHeight(),
        d = j.outerHeight();
        c.hasClass("header-navbar-fixed") ? i.css("min-height", a - d) : i.css("min-height", a - (b + d))
    },
    n = function(a) {
        var b = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if ("init" === a) {
            n();
            var h;
            jQuery(window).on("resize orientationchange",
            function() {
                clearTimeout(h),
                h = setTimeout(function() {
                    n()
                },
                150)
            })
        } else b > 991 && c.hasClass("side-scroll") ? (jQuery(d).scrollLock("disable"), jQuery(f).scrollLock("disable"), e.length && !e.parent(".slimScrollDiv").length ? e.slimScroll({
            height: d.outerHeight(),
            color: "#fff",
            size: "5px",
            opacity: .35,
            wheelStep: 15,
            distance: "2px",
            railVisible: !1,
            railOpacity: 1
        }) : e.add(e.parent()).css("height", d.outerHeight()), g.length && !g.parent(".slimScrollDiv").length ? g.slimScroll({
            height: f.outerHeight(),
            color: "#000",
            size: "5px",
            opacity: .35,
            wheelStep: 15,
            distance: "2px",
            railVisible: !1,
            railOpacity: 1
        }) : g.add(g.parent()).css("height", f.outerHeight())) : (jQuery(d).scrollLock("enable"), jQuery(f).scrollLock("enable"), e.length && e.parent(".slimScrollDiv").length && (e.slimScroll({
            destroy: !0
        }), e.attr("style", "")), g.length && g.parent(".slimScrollDiv").length && (g.slimScroll({
            destroy: !0
        }), g.attr("style", "")))
    },
    o = function(a) {
        var b = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        switch (a) {
        case "sidebar_pos_toggle":
            c.toggleClass("sidebar-l sidebar-r");
            break;
        case "sidebar_pos_left":
            c.removeClass("sidebar-r").addClass("sidebar-l");
            break;
        case "sidebar_pos_right":
            c.removeClass("sidebar-l").addClass("sidebar-r");
            break;
        case "sidebar_toggle":
            b > 991 ? c.toggleClass("sidebar-o") : c.toggleClass("sidebar-o-xs");
            break;
        case "sidebar_open":
            b > 991 ? c.addClass("sidebar-o") : c.addClass("sidebar-o-xs");
            break;
        case "sidebar_close":
            b > 991 ? c.removeClass("sidebar-o") : c.removeClass("sidebar-o-xs");
            break;
        case "sidebar_mini_toggle":
            b > 991 && c.toggleClass("sidebar-mini");
            break;
        case "sidebar_mini_on":
            b > 991 && c.addClass("sidebar-mini");
            break;
        case "sidebar_mini_off":
            b > 991 && c.removeClass("sidebar-mini");
            break;
        case "side_overlay_toggle":
            c.toggleClass("side-overlay-o");
            break;
        case "side_overlay_open":
            c.addClass("side-overlay-o");
            break;
        case "side_overlay_close":
            c.removeClass("side-overlay-o");
            break;
        case "side_overlay_hoverable_toggle":
            c.toggleClass("side-overlay-hover");
            break;
        case "side_overlay_hoverable_on":
            c.addClass("side-overlay-hover");
            break;
        case "side_overlay_hoverable_off":
            c.removeClass("side-overlay-hover");
            break;
        case "header_fixed_toggle":
            c.toggleClass("header-navbar-fixed");
            break;
        case "header_fixed_on":
            c.addClass("header-navbar-fixed");
            break;
        case "header_fixed_off":
            c.removeClass("header-navbar-fixed");
            break;
        case "side_scroll_toggle":
            c.toggleClass("side-scroll"),
            n();
            break;
        case "side_scroll_on":
            c.addClass("side-scroll"),
            n();
            break;
        case "side_scroll_off":
            c.removeClass("side-scroll"),
            n();
            break;
        default:
            return ! 1
        }
    },
    p = function() {
        jQuery('[data-toggle="nav-submenu"]').on("click",
        function(b) {
            var c = jQuery(this),
            d = c.parent("li");
            return d.hasClass("open") ? d.removeClass("open") : (c.closest("ul").find("> li").removeClass("open"), d.addClass("open")),
            a.hasClass("no-focus") && c.blur(),
            !1
        })
    },
    q = function() {
        r(!1, "init"),
        jQuery('[data-toggle="block-option"]').on("click",
        function() {
            r(jQuery(this).closest(".block"), jQuery(this).data("action"))
        })
    },
    r = function(a, b) {
        var c = "si si-size-fullscreen",
        d = "si si-size-actual",
        e = "si si-arrow-up",
        f = "si si-arrow-down";
        if ("init" === b) jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]').each(function() {
            var a = jQuery(this);
            a.html('<i class="' + (jQuery(this).closest(".block").hasClass("block-opt-fullscreen") ? d: c) + '"></i>')
        }),
        jQuery('[data-toggle="block-option"][data-action="content_toggle"]').each(function() {
            var a = jQuery(this);
            a.html('<i class="' + (a.closest(".block").hasClass("block-opt-hidden") ? f: e) + '"></i>')
        });
        else {
            var g = a instanceof jQuery ? a: jQuery(a);
            if (g.length) {
                var h = jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]', g),
                i = jQuery('[data-toggle="block-option"][data-action="content_toggle"]', g);
                switch (b) {
                case "fullscreen_toggle":
                    g.toggleClass("block-opt-fullscreen"),
                    g.hasClass("block-opt-fullscreen") ? jQuery(g).scrollLock("enable") : jQuery(g).scrollLock("disable"),
                    h.length && (g.hasClass("block-opt-fullscreen") ? jQuery("i", h).removeClass(c).addClass(d) : jQuery("i", h).removeClass(d).addClass(c));
                    break;
                case "fullscreen_on":
                    g.addClass("block-opt-fullscreen"),
                    jQuery(g).scrollLock("enable"),
                    h.length && jQuery("i", h).removeClass(c).addClass(d);
                    break;
                case "fullscreen_off":
                    g.removeClass("block-opt-fullscreen"),
                    jQuery(g).scrollLock("disable"),
                    h.length && jQuery("i", h).removeClass(d).addClass(c);
                    break;
                case "content_toggle":
                    g.toggleClass("block-opt-hidden"),
                    i.length && (g.hasClass("block-opt-hidden") ? jQuery("i", i).removeClass(e).addClass(f) : jQuery("i", i).removeClass(f).addClass(e));
                    break;
                case "content_hide":
                    g.addClass("block-opt-hidden"),
                    i.length && jQuery("i", i).removeClass(e).addClass(f);
                    break;
                case "content_show":
                    g.removeClass("block-opt-hidden"),
                    i.length && jQuery("i", i).removeClass(f).addClass(e);
                    break;
                case "refresh_toggle":
                    g.toggleClass("block-opt-refresh"),
                    jQuery('[data-toggle="block-option"][data-action="refresh_toggle"][data-action-mode="demo"]', g).length && setTimeout(function() {
                        g.removeClass("block-opt-refresh")
                    },
                    2e3);
                    break;
                case "state_loading":
                    g.addClass("block-opt-refresh");
                    break;
                case "state_normal":
                    g.removeClass("block-opt-refresh");
                    break;
                case "close":
                    g.hide();
                    break;
                case "open":
                    g.show();
                    break;
                default:
                    return ! 1
                }
            }
        }
    },
    s = function() {
        jQuery(".form-material.floating > .form-control").each(function() {
            var a = jQuery(this),
            b = a.parent(".form-material");
            setTimeout(function() {
                a.val() && b.addClass("open")
            },
            150),
            a.on("change",
            function() {
                a.val() ? b.addClass("open") : b.removeClass("open")
            })
        })
    },
    t = function() {
        var a = jQuery("#css-theme"),
        b = !!c.hasClass("enable-cookies");
        if (b) {
            var d = !!Cookies.get("colorTheme") && Cookies.get("colorTheme");
            d && ("default" === d ? a.length && a.remove() : a.length ? a.attr("href", d) : jQuery("#css-main").after('<link rel="stylesheet" id="css-theme" href="' + d + '">')),
            a = jQuery("#css-theme")
        }
        jQuery('[data-toggle="theme"][data-theme="' + (a.length ? a.attr("href") : "default") + '"]').parent("li").addClass("active"),
        jQuery('[data-toggle="theme"]').on("click",
        function() {
            var c = jQuery(this),
            d = c.data("theme");
            jQuery('[data-toggle="theme"]').parent("li").removeClass("active"),
            jQuery('[data-toggle="theme"][data-theme="' + d + '"]').parent("li").addClass("active"),
            "default" === d ? a.length && a.remove() : a.length ? a.attr("href", d) : jQuery("#css-main").after('<link rel="stylesheet" id="css-theme" href="' + d + '">'),
            a = jQuery("#css-theme"),
            b && Cookies.set("colorTheme", d, {
                expires: 7
            })
        })
    },
    u = function() {
        jQuery('[data-toggle="scroll-to"]').on("click",
        function() {
            var a = jQuery(this),
            b = a.data("target"),
            d = a.data("speed") ? a.data("speed") : 1e3,
            e = h.length && c.hasClass("header-navbar-fixed") ? h.outerHeight() : 0;
            jQuery("html, body").animate({
                scrollTop: jQuery(b).offset().top - e
            },
            d)
        })
    },
    v = function() {
        jQuery('[data-toggle="class-toggle"]').on("click",
        function() {
            var b = jQuery(this);
            jQuery(b.data("target").toString()).toggleClass(b.data("class").toString()),
            a.hasClass("no-focus") && b.blur()
        })
    },
    w = function() {
        var a = new Date,
        b = jQuery(".js-year-copy");
        2015 === a.getFullYear() ? b.html("2015") : b.html("2015-" + a.getFullYear().toString().substr(2, 2))
    },
    x = function(a) {
        var c = jQuery("#page-loader");
        return "show" === a ? c.length ? c.fadeIn(250) : b.prepend('<div id="page-loader"></div>') : "hide" === a && c.length && c.fadeOut(250),
        !1
    },
    y = function() {
        var a = c.prop("class");
        c.prop("class", ""),
        window.print(),
        c.prop("class", a)
    },
    z = function() {
        jQuery(".js-table-sections").each(function() {
            var a = jQuery(this);
            jQuery(".js-table-sections-header > tr", a).on("click",
            function(b) {
                var c = jQuery(this),
                d = c.parent("tbody");
                d.hasClass("open") || jQuery("tbody", a).removeClass("open"),
                d.toggleClass("open")
            })
        })
    },
    A = function() {
        jQuery(".js-table-checkable").each(function() {
            var a = jQuery(this);
            jQuery("thead input:checkbox", a).on("click",
            function() {
                var b = jQuery(this).prop("checked");
                jQuery("tbody input:checkbox", a).each(function() {
                    var a = jQuery(this);
                    a.prop("checked", b),
                    B(a, b)
                })
            }),
            jQuery("tbody input:checkbox", a).on("click",
            function() {
                var a = jQuery(this);
                B(a, a.prop("checked"))
            }),
            jQuery("tbody > tr", a).on("click",
            function(a) {
                if ("checkbox" !== a.target.type && "button" !== a.target.type && "a" !== a.target.tagName.toLowerCase() && !jQuery(a.target).parent("label").length) {
                    var b = jQuery("input:checkbox", this),
                    c = b.prop("checked");
                    b.prop("checked", !c),
                    B(b, !c)
                }
            })
        })
    },
    B = function(a, b) {
        b ? a.closest("tr").addClass("active") : a.closest("tr").removeClass("active")
    },
    C = function() {
        jQuery('[data-toggle="appear"]').each(function() {
            var b = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            c = jQuery(this),
            d = c.data("class") ? c.data("class") : "animated fadeIn",
            e = c.data("offset") ? c.data("offset") : 0,
            f = a.hasClass("ie9") || b < 992 ? 0 : c.data("timeout") ? c.data("timeout") : 0;
            c.appear(function() {
                setTimeout(function() {
                    c.removeClass("visibility-hidden").addClass(d)
                },
                f)
            },
            {
                accY: e
            })
        })
    },
    D = function() {
        jQuery('[data-toggle="countTo"]').each(function() {
            var a = jQuery(this),
            b = a.data("after"),
            c = a.data("before"),
            d = a.data("speed") ? a.data("speed") : 1500,
            e = a.data("interval") ? a.data("interval") : 15;
            a.appear(function() {
                a.countTo({
                    speed: d,
                    refreshInterval: e,
                    onComplete: function() {
                        b ? a.html(a.html() + b) : c && a.html(c + a.html())
                    }
                })
            })
        })
    },
    E = function() {
        jQuery('[data-toggle="slimscroll"]').each(function() {
            var a = jQuery(this),
            b = a.data("height") ? a.data("height") : "200px",
            c = a.data("size") ? a.data("size") : "5px",
            d = a.data("position") ? a.data("position") : "right",
            e = a.data("color") ? a.data("color") : "#000",
            f = !!a.data("always-visible"),
            g = !!a.data("rail-visible"),
            h = a.data("rail-color") ? a.data("rail-color") : "#999",
            i = a.data("rail-opacity") ? a.data("rail-opacity") : .3;
            a.slimScroll({
                height: b,
                size: c,
                position: d,
                color: e,
                alwaysVisible: f,
                railVisible: g,
                railColor: h,
                railOpacity: i
            })
        })
    },
    F = function() {
        jQuery(".js-gallery").each(function() {
            jQuery(this).magnificPopup({
                delegate: "a.img-link",
                type: "image",
                gallery: {
                    enabled: !0
                }
            })
        }),
        jQuery(".js-gallery-advanced").each(function() {
            jQuery(this).magnificPopup({
                delegate: "a.img-lightbox",
                type: "image",
                gallery: {
                    enabled: !0
                }
            })
        })
    },
    G = function() {
        CKEDITOR.disableAutoInline = !0,
        jQuery("#js-ckeditor-inline").length && CKEDITOR.inline("js-ckeditor-inline"),
        jQuery("#js-ckeditor").length && CKEDITOR.replace("js-ckeditor")
    },
    H = function() {
        jQuery(".js-summernote-air").summernote({
            airMode: !0
        }),
        jQuery(".js-summernote").summernote({
            height: 350,
            minHeight: null,
            maxHeight: null
        })
    },
    I = function() {
        jQuery(".js-slider").each(function() {
            var a = jQuery(this),
            b = !!a.data("slider-arrows") && a.data("slider-arrows"),
            c = !!a.data("slider-dots") && a.data("slider-dots"),
            d = a.data("slider-num") ? a.data("slider-num") : 1,
            e = !!a.data("slider-autoplay") && a.data("slider-autoplay"),
            f = a.data("slider-autoplay-speed") ? a.data("slider-autoplay-speed") : 3e3;
            a.slick({
                arrows: b,
                dots: c,
                slidesToShow: d,
                autoplay: e,
                autoplaySpeed: f
            })
        })
    },
    J = function() {
        jQuery(".js-datepicker").add(".input-daterange").datepicker({
            weekStart: 1,
            autoclose: !0,
            todayHighlight: !0
        })
    },
    K = function() {
        jQuery(".js-colorpicker").each(function() {
            var a = jQuery(this),
            b = a.data("colorpicker-mode") ? a.data("colorpicker-mode") : "hex",
            c = !!a.data("colorpicker-inline");
            a.colorpicker({
                format: b,
                inline: c
            })
        })
    },
    L = function() {
        jQuery(".js-masked-date").mask("99/99/9999"),
        jQuery(".js-masked-date-dash").mask("99-99-9999"),
        jQuery(".js-masked-phone").mask("(999) 999-9999"),
        jQuery(".js-masked-phone-ext").mask("(999) 999-9999? x99999"),
        jQuery(".js-masked-taxid").mask("99-9999999"),
        jQuery(".js-masked-ssn").mask("999-99-9999"),
        jQuery(".js-masked-pkey").mask("a*-999-a999"),
        jQuery(".js-masked-time").mask("99:99")
    },
    M = function() {
        jQuery(".js-tags-input").tagsInput({
            height: "36px",
            width: "100%",
            defaultText: "Add tag",
            removeWithBackspace: !0,
            delimiter: [","]
        })
    },
    N = function() {
        jQuery(".js-select2").select2()
    },
    O = function() {
        hljs.initHighlightingOnLoad()
    },
    P = function() {
        jQuery(".js-notify").on("click",
        function() {
            var a = jQuery(this),
            b = a.data("notify-message"),
            c = a.data("notify-type") ? a.data("notify-type") : "info",
            d = a.data("notify-from") ? a.data("notify-from") : "top",
            e = a.data("notify-align") ? a.data("notify-align") : "right",
            f = a.data("notify-icon") ? a.data("notify-icon") : "",
            g = a.data("notify-url") ? a.data("notify-url") : "";
            jQuery.notify({
                icon: f,
                message: b,
                url: g
            },
            {
                element: "body",
                type: c,
                allow_dismiss: !0,
                newest_on_top: !0,
                showProgressbar: !1,
                placement: {
                    from: d,
                    align: e
                },
                offset: 20,
                spacing: 10,
                z_index: 1033,
                delay: 5e3,
                timer: 1e3,
                animate: {
                    enter: "animated fadeIn",
                    exit: "animated fadeOutDown"
                }
            })
        })
    },
    Q = function() {
        jQuery(".js-draggable-items > .draggable-column").sortable({
            connectWith: ".draggable-column",
            items: ".draggable-item",
            dropOnEmpty: !0,
            opacity: .75,
            handle: ".draggable-handler",
            placeholder: "draggable-placeholder",
            tolerance: "pointer",
            start: function(a, b) {
                b.placeholder.css({
                    height: b.item.outerHeight(),
                    "margin-bottom": b.item.css("margin-bottom")
                })
            }
        })
    },
    R = function() {
        jQuery(".js-pie-chart").easyPieChart({
            barColor: jQuery(this).data("bar-color") ? jQuery(this).data("bar-color") : "#777777",
            trackColor: jQuery(this).data("track-color") ? jQuery(this).data("track-color") : "#eeeeee",
            lineWidth: jQuery(this).data("line-width") ? jQuery(this).data("line-width") : 3,
            size: jQuery(this).data("size") ? jQuery(this).data("size") : "80",
            animate: 750,
            scaleColor: !!jQuery(this).data("scale-color") && jQuery(this).data("scale-color")
        })
    },
    S = function() {
        jQuery(".js-maxlength").each(function() {
            var a = jQuery(this);
            a.maxlength({
                alwaysShow: !!a.data("always-show"),
                threshold: a.data("threshold") ? a.data("threshold") : 10,
                warningClass: a.data("warning-class") ? a.data("warning-class") : "label label-warning",
                limitReachedClass: a.data("limit-reached-class") ? a.data("limit-reached-class") : "label label-danger",
                placement: a.data("placement") ? a.data("placement") : "bottom",
                preText: a.data("pre-text") ? a.data("pre-text") : "",
                separator: a.data("separator") ? a.data("separator") : "/",
                postText: a.data("post-text") ? a.data("post-text") : ""
            })
        })
    },
    T = function() {
        jQuery(".js-datetimepicker").each(function() {
            var a = jQuery(this);
            a.datetimepicker({
                format: !!a.data("format") && a.data("format"),
                useCurrent: !!a.data("use-current") && a.data("use-current"),
                locale: moment.locale("" + (a.data("locale") ? a.data("locale") : "")),
                showTodayButton: !!a.data("show-today-button") && a.data("show-today-button"),
                showClear: !!a.data("show-clear") && a.data("show-clear"),
                showClose: !!a.data("show-close") && a.data("show-close"),
                sideBySide: !!a.data("side-by-side") && a.data("side-by-side"),
                inline: !!a.data("inline") && a.data("inline"),
                icons: {
                    time: "si si-clock",
                    date: "si si-calendar",
                    up: "si si-arrow-up",
                    down: "si si-arrow-down",
                    previous: "si si-arrow-left",
                    next: "si si-arrow-right",
                    today: "si si-size-actual",
                    clear: "si si-trash",
                    close: "si si-close"
                }
            })
        })
    },
    U = function() {
        jQuery(".js-rangeslider").each(function() {
            var a = jQuery(this);
            a.ionRangeSlider({
                input_values_separator: ";"
            })
        })
    },
    V = function() {
        jQuery(".js-simplemde").each(function() {
            var a = jQuery(this);
            new SimpleMDE({
                element: a[0]
            })
        })
    };
    return {
        init: function(a) {
            switch (a) {
            case "uiInit":
                k();
                break;
            case "uiLayout":
                l();
                break;
            case "uiNav":
                p();
                break;
            case "uiBlocks":
                q();
                break;
            case "uiForms":
                s();
                break;
            case "uiHandleTheme":
                t();
                break;
            case "uiToggleClass":
                v();
                break;
            case "uiScrollTo":
                u();
                break;
            case "uiYearCopy":
                w();
                break;
            case "uiLoader":
                x("hide");
                break;
            default:
                k(),
                l(),
                p(),
                q(),
                s(),
                t(),
                v(),
                u(),
                w(),
                x("hide")
            }
        },
        layout: function(a) {
            o(a)
        },
        loader: function(a) {
            x(a)
        },
        blocks: function(a, b) {
            r(a, b)
        },
        initHelper: function(a) {
            switch (a) {
            case "print-page":
                y();
                break;
            case "table-tools":
                z(),
                A();
                break;
            case "appear":
                C();
                break;
            case "appear-countTo":
                D();
                break;
            case "slimscroll":
                E();
                break;
            case "magnific-popup":
                F();
                break;
            case "ckeditor":
                G();
                break;
            case "summernote":
                H();
                break;
            case "slick":
                I();
                break;
            case "datepicker":
                J();
                break;
            case "colorpicker":
                K();
                break;
            case "tags-inputs":
                M();
                break;
            case "masked-inputs":
                L();
                break;
            case "select2":
                N();
                break;
            case "highlightjs":
                O();
                break;
            case "notify":
                P();
                break;
            case "draggable-items":
                Q();
                break;
            case "easy-pie-chart":
                R();
                break;
            case "maxlength":
                S();
                break;
            case "datetimepicker":
                T();
                break;
            case "rangeslider":
                U();
                break;
            case "simplemde":
                V();
                break;
            default:
                return ! 1
            }
        },
        initHelpers: function(a) {
            if (a instanceof Array) for (var b in a) App.initHelper(a[b]);
            else App.initHelper(a)
        }
    }
} (),
OneUI = App;
jQuery(function() {
    "undefined" == typeof angular && App.init()
});