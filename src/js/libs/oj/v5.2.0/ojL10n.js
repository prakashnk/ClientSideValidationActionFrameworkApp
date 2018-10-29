/**
 * @license RequireJS i18n 2.0.2 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/i18n for details
 */
! function() {
    "use strict";
    var e = /(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;

    function n(e, n, o, r, a, t, l) {
        if (n[e] || (e = e.replace(/^zh-(Hans|Hant)-([^-]+)$/, "zh-$2")), n[e]) {
            if (o.push(e), !0 === n[e] || 1 === n[e]) {
                var u = l ? l + e : e;
                r.push(a + u + "/" + t)
            }
            return !0
        }
        return !1
    }

    function o(e) {
        return "object" == typeof e
    }

    function r(e, n) {
        var a;
        for (a in n) n.hasOwnProperty(a) && (null == e[a] ? e[a] = n[a] : o(n[a]) && o(e[a]) && r(e[a], n[a]))
    }
    define(["module"], function(o) {
        var a = o.config ? o.config() : {};
        return {
            version: "2.0.1+",
            load: function(o, t, l, u) {
                (u = u || {}).locale && (a.locale = u.locale);
                var c, i, f, s, h, v, g, p, d, y, O, _, m = e.exec(o),
                    L = m[1],
                    H = m[5],
                    b = [],
                    j = {},
                    x = "";
                m[5] ? (c = (L = m[1]) + H, i = m[4]) : (c = o, H = m[4], i = a.locale, "undefined" != typeof document ? (i || (i = u.isBuild ? "root" : document.documentElement.lang) || (i = void 0 === navigator ? "root" : navigator.language || navigator.userLanguage || "root"), a.locale = i) : i = "root"), f = function(e) {
                    var n, o = e.toLowerCase().split(/-|_/),
                        r = [o[0]],
                        a = 1;
                    for (n = 1; n < o.length; n++) {
                        var t = o[n],
                            l = t.length;
                        if (1 == l) break;
                        switch (a) {
                            case 1:
                                if (a = 2, 4 == l) {
                                    r.push(t.charAt(0).toUpperCase() + t.slice(1));
                                    break
                                }
                            case 2:
                                a = 3, r.push(t.toUpperCase());
                                break;
                            default:
                                r.push(t)
                        }
                    }
                    return function(e) {
                        if (!("zh" != e[0] || e.length > 1 && 4 == e[1].length)) {
                            var n = "Hans",
                                o = e.length > 1 ? e[1] : null;
                            "TW" !== o && "MO" !== o && "HK" !== o || (n = "Hant"), e.splice(1, 0, n)
                        }
                    }(r), r
                }(i), h = a.noOverlay, v = a.defaultNoOverlayLocale;
                var k = a.localePrefix;
                for ((y = a.merge) && (g = y[L + H]) && (m = e.exec(g), p = m[1], d = m[4]), O = [], s = 0; s < f.length; s++) x += (x ? "-" : "") + f[s], O.push(x);
                u.isBuild ? (b.push(c), g && b.push(g), t(b, function() {
                    l()
                })) : ("query" == a.includeLocale && (c = t.toUrl(c + ".js"), c += (-1 === c.indexOf("?") ? "?" : "&") + "loc=" + i), _ = [c], g && _.push(g), t(_, function(e, o) {
                    var a = [],
                        u = function(e, o, r) {
                            for (var t = h || !0 === e.__noOverlay, l = v || e.__defaultNoOverlayLocale, u = !1, c = O.length - 1; c >= 0 && (!u || !t); c--) u = n(O[c], e, a, b, o, r, k);
                            var i = 1 === O.length && "root" === O[0];
                            t && (i || !u) && l && n(l, e, a, b, o, r, k), i || n("root", e, a, b, o, r, k)
                        };
                    u(e, L, H);
                    var c = a.length;
                    o && u(o, p, d), t(b, function() {
                        var n = function(e, n, o, l, u) {
                            for (var c = n; c < o && a[c]; c++) {
                                var i = a[c],
                                    f = k ? k + i : i,
                                    s = e[i];
                                !0 !== s && 1 !== s || (s = t(l + f + "/" + u)), r(j, s)
                            }
                        };
                        n(o, c, a.length, p, d), n(e, 0, c, L, H), j._ojLocale_ = f.join("-"), l(j)
                    })
                }))
            }
        }
    })
}();