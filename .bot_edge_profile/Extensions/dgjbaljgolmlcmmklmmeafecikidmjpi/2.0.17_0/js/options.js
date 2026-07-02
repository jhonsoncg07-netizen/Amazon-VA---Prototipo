(() => {
    var e = {
        905: (e, t, n) => {
            "use strict";
            function r() {
                return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__;
            }
            function o() {
                return "npm";
            }
            n.d(t, {
                S: () => o,
                n: () => r
            });
        },
        728: (e, t, n) => {
            "use strict";
            n.d(t, {
                KV: () => o
            });
            var r = n(905);
            function o() {
                return !(0, r.n)() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
            }
            e = n.hmd(e);
        },
        638: function(e, t) {
            var n;
            !function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e);
                } : n(t);
            }("undefined" != typeof window ? window : this, (function(r, o) {
                "use strict";
                var i = [], s = Object.getPrototypeOf, a = i.slice, c = i.flat ? function(e) {
                    return i.flat.call(e);
                } : function(e) {
                    return i.concat.apply([], e);
                }, u = i.push, l = i.indexOf, d = {}, p = d.toString, h = d.hasOwnProperty, f = h.toString, m = f.call(Object), g = {}, y = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                }, v = function(e) {
                    return null != e && e === e.window;
                }, _ = r.document, b = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function S(e, t, n) {
                    var r, o, i = (n = n || _).createElement("script");
                    if (i.text = e, t) for (r in b) (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
                    n.head.appendChild(i).parentNode.removeChild(i);
                }
                function x(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e;
                }
                var w = "3.7.1", k = /HTML$/i, T = function(e, t) {
                    return new T.fn.init(e, t);
                };
                function E(e) {
                    var t = !!e && "length" in e && e.length, n = x(e);
                    return !y(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
                }
                function C(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                }
                T.fn = T.prototype = {
                    jquery: w,
                    constructor: T,
                    length: 0,
                    toArray: function() {
                        return a.call(this);
                    },
                    get: function(e) {
                        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
                    },
                    pushStack: function(e) {
                        var t = T.merge(this.constructor(), e);
                        return t.prevObject = this, t;
                    },
                    each: function(e) {
                        return T.each(this, e);
                    },
                    map: function(e) {
                        return this.pushStack(T.map(this, (function(t, n) {
                            return e.call(t, n, t);
                        })));
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(T.grep(this, (function(e, t) {
                            return (t + 1) % 2;
                        })));
                    },
                    odd: function() {
                        return this.pushStack(T.grep(this, (function(e, t) {
                            return t % 2;
                        })));
                    },
                    eq: function(e) {
                        var t = this.length, n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push: u,
                    sort: i.sort,
                    splice: i.splice
                }, T.extend = T.fn.extend = function() {
                    var e, t, n, r, o, i, s = arguments[0] || {}, a = 1, c = arguments.length, u = !1;
                    for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), 
                    a === c && (s = this, a--); a < c; a++) if (null != (e = arguments[a])) for (t in e) r = e[t], 
                    "__proto__" !== t && s !== r && (u && r && (T.isPlainObject(r) || (o = Array.isArray(r))) ? (n = s[t], 
                    i = o && !Array.isArray(n) ? [] : o || T.isPlainObject(n) ? n : {}, o = !1, s[t] = T.extend(u, i, r)) : void 0 !== r && (s[t] = r));
                    return s;
                }, T.extend({
                    expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e);
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e) || (t = s(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || f.call(n) !== m));
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function(e, t, n) {
                        S(e, {
                            nonce: t && t.nonce
                        }, n);
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                        return e;
                    },
                    text: function(e) {
                        var t, n = "", r = 0, o = e.nodeType;
                        if (!o) for (;t = e[r++]; ) n += T.text(t);
                        return 1 === o || 11 === o ? e.textContent : 9 === o ? e.documentElement.textContent : 3 === o || 4 === o ? e.nodeValue : n;
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (E(Object(e)) ? T.merge(n, "string" == typeof e ? [ e ] : e) : u.call(n, e)), 
                        n;
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : l.call(t, e, n);
                    },
                    isXMLDoc: function(e) {
                        var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
                        return !k.test(t || n && n.nodeName || "HTML");
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                        return e.length = o, e;
                    },
                    grep: function(e, t, n) {
                        for (var r = [], o = 0, i = e.length, s = !n; o < i; o++) !t(e[o], o) !== s && r.push(e[o]);
                        return r;
                    },
                    map: function(e, t, n) {
                        var r, o, i = 0, s = [];
                        if (E(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && s.push(o); else for (i in e) null != (o = t(e[i], i, n)) && s.push(o);
                        return c(s);
                    },
                    guid: 1,
                    support: g
                }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = i[Symbol.iterator]), 
                T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    d["[object " + t + "]"] = t.toLowerCase();
                }));
                var I = i.pop, R = i.sort, M = i.splice, O = "[\\x20\\t\\r\\n\\f]", A = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g");
                T.contains = function(e, t) {
                    var n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                };
                var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                function D(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
                }
                T.escapeSelector = function(e) {
                    return (e + "").replace(L, D);
                };
                var N = _, P = u;
                !function() {
                    var e, t, n, o, s, c, u, d, p, f, m = P, y = T.expando, v = 0, _ = 0, b = ee(), S = ee(), x = ee(), w = ee(), k = function(e, t) {
                        return e === t && (s = !0), 0;
                    }, E = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "(?:\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", D = "\\[" + O + "*(" + L + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + O + "*\\]", $ = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + D + ")*)|.*)\\)|)", j = new RegExp(O + "+", "g"), F = new RegExp("^" + O + "*," + O + "*"), B = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"), H = new RegExp(O + "|>"), q = new RegExp($), U = new RegExp("^" + L + "$"), z = {
                        ID: new RegExp("^#(" + L + ")"),
                        CLASS: new RegExp("^\\.(" + L + ")"),
                        TAG: new RegExp("^(" + L + "|[*])"),
                        ATTR: new RegExp("^" + D),
                        PSEUDO: new RegExp("^" + $),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + E + ")$", "i"),
                        needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                    }, W = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Y = /[+~]/, J = new RegExp("\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])", "g"), X = function(e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
                    }, K = function() {
                        ce();
                    }, Q = pe((function(e) {
                        return !0 === e.disabled && C(e, "fieldset");
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        m.apply(i = a.call(N.childNodes), N.childNodes), i[N.childNodes.length].nodeType;
                    } catch (e) {
                        m = {
                            apply: function(e, t) {
                                P.apply(e, a.call(t));
                            },
                            call: function(e) {
                                P.apply(e, a.call(arguments, 1));
                            }
                        };
                    }
                    function Z(e, t, n, r) {
                        var o, i, s, a, u, l, h, f = t && t.ownerDocument, v = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v) return n;
                        if (!r && (ce(t), t = t || c, d)) {
                            if (11 !== v && (u = V.exec(e))) if (o = u[1]) {
                                if (9 === v) {
                                    if (!(s = t.getElementById(o))) return n;
                                    if (s.id === o) return m.call(n, s), n;
                                } else if (f && (s = f.getElementById(o)) && Z.contains(t, s) && s.id === o) return m.call(n, s), 
                                n;
                            } else {
                                if (u[2]) return m.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = u[3]) && t.getElementsByClassName) return m.apply(n, t.getElementsByClassName(o)), 
                                n;
                            }
                            if (!(w[e + " "] || p && p.test(e))) {
                                if (h = e, f = t, 1 === v && (H.test(e) || B.test(e))) {
                                    for ((f = Y.test(e) && ae(t.parentNode) || t) == t && g.scope || ((a = t.getAttribute("id")) ? a = T.escapeSelector(a) : t.setAttribute("id", a = y)), 
                                    i = (l = le(e)).length; i--; ) l[i] = (a ? "#" + a : ":scope") + " " + de(l[i]);
                                    h = l.join(",");
                                }
                                try {
                                    return m.apply(n, f.querySelectorAll(h)), n;
                                } catch (t) {
                                    w(e, !0);
                                } finally {
                                    a === y && t.removeAttribute("id");
                                }
                            }
                        }
                        return ve(e.replace(A, "$1"), t, n, r);
                    }
                    function ee() {
                        var e = [];
                        return function n(r, o) {
                            return e.push(r + " ") > t.cacheLength && delete n[e.shift()], n[r + " "] = o;
                        };
                    }
                    function te(e) {
                        return e[y] = !0, e;
                    }
                    function ne(e) {
                        var t = c.createElement("fieldset");
                        try {
                            return !!e(t);
                        } catch (e) {
                            return !1;
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null;
                        }
                    }
                    function re(e) {
                        return function(t) {
                            return C(t, "input") && t.type === e;
                        };
                    }
                    function oe(e) {
                        return function(t) {
                            return (C(t, "input") || C(t, "button")) && t.type === e;
                        };
                    }
                    function ie(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Q(t) === e : t.disabled === e : "label" in t && t.disabled === e;
                        };
                    }
                    function se(e) {
                        return te((function(t) {
                            return t = +t, te((function(n, r) {
                                for (var o, i = e([], n.length, t), s = i.length; s--; ) n[o = i[s]] && (n[o] = !(r[o] = n[o]));
                            }));
                        }));
                    }
                    function ae(e) {
                        return e && void 0 !== e.getElementsByTagName && e;
                    }
                    function ce(e) {
                        var n, r = e ? e.ownerDocument || e : N;
                        return r != c && 9 === r.nodeType && r.documentElement ? (u = (c = r).documentElement, 
                        d = !T.isXMLDoc(c), f = u.matches || u.webkitMatchesSelector || u.msMatchesSelector, 
                        u.msMatchesSelector && N != c && (n = c.defaultView) && n.top !== n && n.addEventListener("unload", K), 
                        g.getById = ne((function(e) {
                            return u.appendChild(e).id = T.expando, !c.getElementsByName || !c.getElementsByName(T.expando).length;
                        })), g.disconnectedMatch = ne((function(e) {
                            return f.call(e, "*");
                        })), g.scope = ne((function() {
                            return c.querySelectorAll(":scope");
                        })), g.cssHas = ne((function() {
                            try {
                                return c.querySelector(":has(*,:jqfake)"), !1;
                            } catch (e) {
                                return !0;
                            }
                        })), g.getById ? (t.filter.ID = function(e) {
                            var t = e.replace(J, X);
                            return function(e) {
                                return e.getAttribute("id") === t;
                            };
                        }, t.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && d) {
                                var n = t.getElementById(e);
                                return n ? [ n ] : [];
                            }
                        }) : (t.filter.ID = function(e) {
                            var t = e.replace(J, X);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t;
                            };
                        }, t.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && d) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++]; ) if ((n = i.getAttributeNode("id")) && n.value === e) return [ i ];
                                }
                                return [];
                            }
                        }), t.find.TAG = function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                        }, t.find.CLASS = function(e, t) {
                            if (void 0 !== t.getElementsByClassName && d) return t.getElementsByClassName(e);
                        }, p = [], ne((function(e) {
                            var t;
                            u.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>", 
                            e.querySelectorAll("[selected]").length || p.push("\\[" + O + "*(?:value|" + E + ")"), 
                            e.querySelectorAll("[id~=" + y + "-]").length || p.push("~="), e.querySelectorAll("a#" + y + "+*").length || p.push(".#.+[+~]"), 
                            e.querySelectorAll(":checked").length || p.push(":checked"), (t = c.createElement("input")).setAttribute("type", "hidden"), 
                            e.appendChild(t).setAttribute("name", "D"), u.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), 
                            (t = c.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")");
                        })), g.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), k = function(e, t) {
                            if (e === t) return s = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === c || e.ownerDocument == N && Z.contains(N, e) ? -1 : t === c || t.ownerDocument == N && Z.contains(N, t) ? 1 : o ? l.call(o, e) - l.call(o, t) : 0 : 4 & n ? -1 : 1);
                        }, c) : c;
                    }
                    for (e in Z.matches = function(e, t) {
                        return Z(e, null, null, t);
                    }, Z.matchesSelector = function(e, t) {
                        if (ce(e), d && !w[t + " "] && (!p || !p.test(t))) try {
                            var n = f.call(e, t);
                            if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
                        } catch (e) {
                            w(t, !0);
                        }
                        return Z(t, c, null, [ e ]).length > 0;
                    }, Z.contains = function(e, t) {
                        return (e.ownerDocument || e) != c && ce(e), T.contains(e, t);
                    }, Z.attr = function(e, n) {
                        (e.ownerDocument || e) != c && ce(e);
                        var r = t.attrHandle[n.toLowerCase()], o = r && h.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !d) : void 0;
                        return void 0 !== o ? o : e.getAttribute(n);
                    }, Z.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e);
                    }, T.uniqueSort = function(e) {
                        var t, n = [], r = 0, i = 0;
                        if (s = !g.sortStable, o = !g.sortStable && a.call(e, 0), R.call(e, k), s) {
                            for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                            for (;r--; ) M.call(e, n[r], 1);
                        }
                        return o = null, e;
                    }, T.fn.uniqueSort = function() {
                        return this.pushStack(T.uniqueSort(a.apply(this)));
                    }, (t = T.expr = {
                        cacheLength: 50,
                        createPseudo: te,
                        match: z,
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
                            ATTR: function(e) {
                                return e[1] = e[1].replace(J, X), e[3] = (e[3] || e[4] || e[5] || "").replace(J, X), 
                                "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Z.error(e[0]), 
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Z.error(e[0]), 
                                e;
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = le(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                                e[2] = n.slice(0, t)), e.slice(0, 3));
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(J, X).toLowerCase();
                                return "*" === e ? function() {
                                    return !0;
                                } : function(e) {
                                    return C(e, t);
                                };
                            },
                            CLASS: function(e) {
                                var t = b[e + " "];
                                return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && b(e, (function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                                }));
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var o = Z.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(j, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                                };
                            },
                            CHILD: function(e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                                return 1 === r && 0 === o ? function(e) {
                                    return !!e.parentNode;
                                } : function(t, n, c) {
                                    var u, l, d, p, h, f = i !== s ? "nextSibling" : "previousSibling", m = t.parentNode, g = a && t.nodeName.toLowerCase(), _ = !c && !a, b = !1;
                                    if (m) {
                                        if (i) {
                                            for (;f; ) {
                                                for (d = t; d = d[f]; ) if (a ? C(d, g) : 1 === d.nodeType) return !1;
                                                h = f = "only" === e && !h && "nextSibling";
                                            }
                                            return !0;
                                        }
                                        if (h = [ s ? m.firstChild : m.lastChild ], s && _) {
                                            for (b = (p = (u = (l = m[y] || (m[y] = {}))[e] || [])[0] === v && u[1]) && u[2], 
                                            d = p && m.childNodes[p]; d = ++p && d && d[f] || (b = p = 0) || h.pop(); ) if (1 === d.nodeType && ++b && d === t) {
                                                l[e] = [ v, p, b ];
                                                break;
                                            }
                                        } else if (_ && (b = p = (u = (l = t[y] || (t[y] = {}))[e] || [])[0] === v && u[1]), 
                                        !1 === b) for (;(d = ++p && d && d[f] || (b = p = 0) || h.pop()) && (!(a ? C(d, g) : 1 === d.nodeType) || !++b || (_ && ((l = d[y] || (d[y] = {}))[e] = [ v, b ]), 
                                        d !== t)); ) ;
                                        return (b -= o) === r || b % r == 0 && b / r >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(e, n) {
                                var r, o = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                                return o[y] ? o(n) : o.length > 1 ? (r = [ e, e, "", n ], t.setFilters.hasOwnProperty(e.toLowerCase()) ? te((function(e, t) {
                                    for (var r, i = o(e, n), s = i.length; s--; ) e[r = l.call(e, i[s])] = !(t[r] = i[s]);
                                })) : function(e) {
                                    return o(e, 0, r);
                                }) : o;
                            }
                        },
                        pseudos: {
                            not: te((function(e) {
                                var t = [], n = [], r = ye(e.replace(A, "$1"));
                                return r[y] ? te((function(e, t, n, o) {
                                    for (var i, s = r(e, null, o, []), a = e.length; a--; ) (i = s[a]) && (e[a] = !(t[a] = i));
                                })) : function(e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
                                };
                            })),
                            has: te((function(e) {
                                return function(t) {
                                    return Z(e, t).length > 0;
                                };
                            })),
                            contains: te((function(e) {
                                return e = e.replace(J, X), function(t) {
                                    return (t.textContent || T.text(t)).indexOf(e) > -1;
                                };
                            })),
                            lang: te((function(e) {
                                return U.test(e || "") || Z.error("unsupported lang: " + e), e = e.replace(J, X).toLowerCase(), 
                                function(t) {
                                    var n;
                                    do {
                                        if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                };
                            })),
                            target: function(e) {
                                var t = r.location && r.location.hash;
                                return t && t.slice(1) === e.id;
                            },
                            root: function(e) {
                                return e === u;
                            },
                            focus: function(e) {
                                return e === function() {
                                    try {
                                        return c.activeElement;
                                    } catch (e) {}
                                }() && c.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
                            },
                            enabled: ie(!1),
                            disabled: ie(!0),
                            checked: function(e) {
                                return C(e, "input") && !!e.checked || C(e, "option") && !!e.selected;
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0;
                            },
                            parent: function(e) {
                                return !t.pseudos.empty(e);
                            },
                            header: function(e) {
                                return G.test(e.nodeName);
                            },
                            input: function(e) {
                                return W.test(e.nodeName);
                            },
                            button: function(e) {
                                return C(e, "input") && "button" === e.type || C(e, "button");
                            },
                            text: function(e) {
                                var t;
                                return C(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                            },
                            first: se((function() {
                                return [ 0 ];
                            })),
                            last: se((function(e, t) {
                                return [ t - 1 ];
                            })),
                            eq: se((function(e, t, n) {
                                return [ n < 0 ? n + t : n ];
                            })),
                            even: se((function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e;
                            })),
                            odd: se((function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e;
                            })),
                            lt: se((function(e, t, n) {
                                var r;
                                for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                                return e;
                            })),
                            gt: se((function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                return e;
                            }))
                        }
                    }).pseudos.nth = t.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) t.pseudos[e] = re(e);
                    for (e in {
                        submit: !0,
                        reset: !0
                    }) t.pseudos[e] = oe(e);
                    function ue() {}
                    function le(e, n) {
                        var r, o, i, s, a, c, u, l = S[e + " "];
                        if (l) return n ? 0 : l.slice(0);
                        for (a = e, c = [], u = t.preFilter; a; ) {
                            for (s in r && !(o = F.exec(a)) || (o && (a = a.slice(o[0].length) || a), c.push(i = [])), 
                            r = !1, (o = B.exec(a)) && (r = o.shift(), i.push({
                                value: r,
                                type: o[0].replace(A, " ")
                            }), a = a.slice(r.length)), t.filter) !(o = z[s].exec(a)) || u[s] && !(o = u[s](o)) || (r = o.shift(), 
                            i.push({
                                value: r,
                                type: s,
                                matches: o
                            }), a = a.slice(r.length));
                            if (!r) break;
                        }
                        return n ? a.length : a ? Z.error(e) : S(e, c).slice(0);
                    }
                    function de(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r;
                    }
                    function pe(e, t, n) {
                        var r = t.dir, o = t.next, i = o || r, s = n && "parentNode" === i, a = _++;
                        return t.first ? function(t, n, o) {
                            for (;t = t[r]; ) if (1 === t.nodeType || s) return e(t, n, o);
                            return !1;
                        } : function(t, n, c) {
                            var u, l, d = [ v, a ];
                            if (c) {
                                for (;t = t[r]; ) if ((1 === t.nodeType || s) && e(t, n, c)) return !0;
                            } else for (;t = t[r]; ) if (1 === t.nodeType || s) if (l = t[y] || (t[y] = {}), 
                            o && C(t, o)) t = t[r] || t; else {
                                if ((u = l[i]) && u[0] === v && u[1] === a) return d[2] = u[2];
                                if (l[i] = d, d[2] = e(t, n, c)) return !0;
                            }
                            return !1;
                        };
                    }
                    function he(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                            return !0;
                        } : e[0];
                    }
                    function fe(e, t, n, r, o) {
                        for (var i, s = [], a = 0, c = e.length, u = null != t; a < c; a++) (i = e[a]) && (n && !n(i, r, o) || (s.push(i), 
                        u && t.push(a)));
                        return s;
                    }
                    function me(e, t, n, r, o, i) {
                        return r && !r[y] && (r = me(r)), o && !o[y] && (o = me(o, i)), te((function(i, s, a, c) {
                            var u, d, p, h, f = [], g = [], y = s.length, v = i || function(e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) Z(e, t[r], n);
                                return n;
                            }(t || "*", a.nodeType ? [ a ] : a, []), _ = !e || !i && t ? v : fe(v, f, e, a, c);
                            if (n ? n(_, h = o || (i ? e : y || r) ? [] : s, a, c) : h = _, r) for (u = fe(h, g), 
                            r(u, [], a, c), d = u.length; d--; ) (p = u[d]) && (h[g[d]] = !(_[g[d]] = p));
                            if (i) {
                                if (o || e) {
                                    if (o) {
                                        for (u = [], d = h.length; d--; ) (p = h[d]) && u.push(_[d] = p);
                                        o(null, h = [], u, c);
                                    }
                                    for (d = h.length; d--; ) (p = h[d]) && (u = o ? l.call(i, p) : f[d]) > -1 && (i[u] = !(s[u] = p));
                                }
                            } else h = fe(h === s ? h.splice(y, h.length) : h), o ? o(null, s, h, c) : m.apply(s, h);
                        }));
                    }
                    function ge(e) {
                        for (var r, o, i, s = e.length, a = t.relative[e[0].type], c = a || t.relative[" "], u = a ? 1 : 0, d = pe((function(e) {
                            return e === r;
                        }), c, !0), p = pe((function(e) {
                            return l.call(r, e) > -1;
                        }), c, !0), h = [ function(e, t, o) {
                            var i = !a && (o || t != n) || ((r = t).nodeType ? d(e, t, o) : p(e, t, o));
                            return r = null, i;
                        } ]; u < s; u++) if (o = t.relative[e[u].type]) h = [ pe(he(h), o) ]; else {
                            if ((o = t.filter[e[u].type].apply(null, e[u].matches))[y]) {
                                for (i = ++u; i < s && !t.relative[e[i].type]; i++) ;
                                return me(u > 1 && he(h), u > 1 && de(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace(A, "$1"), o, u < i && ge(e.slice(u, i)), i < s && ge(e = e.slice(i)), i < s && de(e));
                            }
                            h.push(o);
                        }
                        return he(h);
                    }
                    function ye(e, r) {
                        var o, i = [], s = [], a = x[e + " "];
                        if (!a) {
                            for (r || (r = le(e)), o = r.length; o--; ) (a = ge(r[o]))[y] ? i.push(a) : s.push(a);
                            (a = x(e, function(e, r) {
                                var o = r.length > 0, i = e.length > 0, s = function(s, a, u, l, p) {
                                    var h, f, g, y = 0, _ = "0", b = s && [], S = [], x = n, w = s || i && t.find.TAG("*", p), k = v += null == x ? 1 : Math.random() || .1, E = w.length;
                                    for (p && (n = a == c || a || p); _ !== E && null != (h = w[_]); _++) {
                                        if (i && h) {
                                            for (f = 0, a || h.ownerDocument == c || (ce(h), u = !d); g = e[f++]; ) if (g(h, a || c, u)) {
                                                m.call(l, h);
                                                break;
                                            }
                                            p && (v = k);
                                        }
                                        o && ((h = !g && h) && y--, s && b.push(h));
                                    }
                                    if (y += _, o && _ !== y) {
                                        for (f = 0; g = r[f++]; ) g(b, S, a, u);
                                        if (s) {
                                            if (y > 0) for (;_--; ) b[_] || S[_] || (S[_] = I.call(l));
                                            S = fe(S);
                                        }
                                        m.apply(l, S), p && !s && S.length > 0 && y + r.length > 1 && T.uniqueSort(l);
                                    }
                                    return p && (v = k, n = x), b;
                                };
                                return o ? te(s) : s;
                            }(s, i))).selector = e;
                        }
                        return a;
                    }
                    function ve(e, n, r, o) {
                        var i, s, a, c, u, l = "function" == typeof e && e, p = !o && le(e = l.selector || e);
                        if (r = r || [], 1 === p.length) {
                            if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && 9 === n.nodeType && d && t.relative[s[1].type]) {
                                if (!(n = (t.find.ID(a.matches[0].replace(J, X), n) || [])[0])) return r;
                                l && (n = n.parentNode), e = e.slice(s.shift().value.length);
                            }
                            for (i = z.needsContext.test(e) ? 0 : s.length; i-- && (a = s[i], !t.relative[c = a.type]); ) if ((u = t.find[c]) && (o = u(a.matches[0].replace(J, X), Y.test(s[0].type) && ae(n.parentNode) || n))) {
                                if (s.splice(i, 1), !(e = o.length && de(s))) return m.apply(r, o), r;
                                break;
                            }
                        }
                        return (l || ye(e, p))(o, n, !d, r, !n || Y.test(e) && ae(n.parentNode) || n), r;
                    }
                    ue.prototype = t.filters = t.pseudos, t.setFilters = new ue, g.sortStable = y.split("").sort(k).join("") === y, 
                    ce(), g.sortDetached = ne((function(e) {
                        return 1 & e.compareDocumentPosition(c.createElement("fieldset"));
                    })), T.find = Z, T.expr[":"] = T.expr.pseudos, T.unique = T.uniqueSort, Z.compile = ye, 
                    Z.select = ve, Z.setDocument = ce, Z.tokenize = le, Z.escape = T.escapeSelector, 
                    Z.getText = T.text, Z.isXML = T.isXMLDoc, Z.selectors = T.expr, Z.support = T.support, 
                    Z.uniqueSort = T.uniqueSort;
                }();
                var $ = function(e, t, n) {
                    for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
                        if (o && T(e).is(n)) break;
                        r.push(e);
                    }
                    return r;
                }, j = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                }, F = T.expr.match.needsContext, B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function H(e, t, n) {
                    return y(t) ? T.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n;
                    })) : t.nodeType ? T.grep(e, (function(e) {
                        return e === t !== n;
                    })) : "string" != typeof t ? T.grep(e, (function(e) {
                        return l.call(t, e) > -1 !== n;
                    })) : T.filter(t, e, n);
                }
                T.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [ r ] : [] : T.find.matches(e, T.grep(t, (function(e) {
                        return 1 === e.nodeType;
                    })));
                }, T.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length, o = this;
                        if ("string" != typeof e) return this.pushStack(T(e).filter((function() {
                            for (t = 0; t < r; t++) if (T.contains(o[t], this)) return !0;
                        })));
                        for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
                        return r > 1 ? T.uniqueSort(n) : n;
                    },
                    filter: function(e) {
                        return this.pushStack(H(this, e || [], !1));
                    },
                    not: function(e) {
                        return this.pushStack(H(this, e || [], !0));
                    },
                    is: function(e) {
                        return !!H(this, "string" == typeof e && F.test(e) ? T(e) : e || [], !1).length;
                    }
                });
                var q, U = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (T.fn.init = function(e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (n = n || q, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : U.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : _, !0)), 
                            B.test(r[1]) && T.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this;
                        }
                        return (o = _.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
                }).prototype = T.fn, q = T(_);
                var z = /^(?:parents|prev(?:Until|All))/, W = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function G(e, t) {
                    for (;(e = e[t]) && 1 !== e.nodeType; ) ;
                    return e;
                }
                T.fn.extend({
                    has: function(e) {
                        var t = T(e, this), n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
                        }));
                    },
                    closest: function(e, t) {
                        var n, r = 0, o = this.length, i = [], s = "string" != typeof e && T(e);
                        if (!F.test(e)) for (;r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                            i.push(n);
                            break;
                        }
                        return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i);
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? l.call(T(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    },
                    add: function(e, t) {
                        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                    }
                }), T.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null;
                    },
                    parents: function(e) {
                        return $(e, "parentNode");
                    },
                    parentsUntil: function(e, t, n) {
                        return $(e, "parentNode", n);
                    },
                    next: function(e) {
                        return G(e, "nextSibling");
                    },
                    prev: function(e) {
                        return G(e, "previousSibling");
                    },
                    nextAll: function(e) {
                        return $(e, "nextSibling");
                    },
                    prevAll: function(e) {
                        return $(e, "previousSibling");
                    },
                    nextUntil: function(e, t, n) {
                        return $(e, "nextSibling", n);
                    },
                    prevUntil: function(e, t, n) {
                        return $(e, "previousSibling", n);
                    },
                    siblings: function(e) {
                        return j((e.parentNode || {}).firstChild, e);
                    },
                    children: function(e) {
                        return j(e.firstChild);
                    },
                    contents: function(e) {
                        return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (C(e, "template") && (e = e.content || e), 
                        T.merge([], e.childNodes));
                    }
                }, (function(e, t) {
                    T.fn[e] = function(n, r) {
                        var o = T.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = T.filter(r, o)), 
                        this.length > 1 && (W[e] || T.uniqueSort(o), z.test(e) && o.reverse()), this.pushStack(o);
                    };
                }));
                var V = /[^\x20\t\r\n\f]+/g;
                function Y(e) {
                    return e;
                }
                function J(e) {
                    throw e;
                }
                function X(e, t, n, r) {
                    var o;
                    try {
                        e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
                    } catch (e) {
                        n.apply(void 0, [ e ]);
                    }
                }
                T.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return T.each(e.match(V) || [], (function(e, n) {
                            t[n] = !0;
                        })), t;
                    }(e) : T.extend({}, e);
                    var t, n, r, o, i = [], s = [], a = -1, c = function() {
                        for (o = o || e.once, r = t = !0; s.length; a = -1) for (n = s.shift(); ++a < i.length; ) !1 === i[a].apply(n[0], n[1]) && e.stopOnFalse && (a = i.length, 
                        n = !1);
                        e.memory || (n = !1), t = !1, o && (i = n ? [] : "");
                    }, u = {
                        add: function() {
                            return i && (n && !t && (a = i.length - 1, s.push(n)), function t(n) {
                                T.each(n, (function(n, r) {
                                    y(r) ? e.unique && u.has(r) || i.push(r) : r && r.length && "string" !== x(r) && t(r);
                                }));
                            }(arguments), n && !t && c()), this;
                        },
                        remove: function() {
                            return T.each(arguments, (function(e, t) {
                                for (var n; (n = T.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= a && a--;
                            })), this;
                        },
                        has: function(e) {
                            return e ? T.inArray(e, i) > -1 : i.length > 0;
                        },
                        empty: function() {
                            return i && (i = []), this;
                        },
                        disable: function() {
                            return o = s = [], i = n = "", this;
                        },
                        disabled: function() {
                            return !i;
                        },
                        lock: function() {
                            return o = s = [], n || t || (i = n = ""), this;
                        },
                        locked: function() {
                            return !!o;
                        },
                        fireWith: function(e, n) {
                            return o || (n = [ e, (n = n || []).slice ? n.slice() : n ], s.push(n), t || c()), 
                            this;
                        },
                        fire: function() {
                            return u.fireWith(this, arguments), this;
                        },
                        fired: function() {
                            return !!r;
                        }
                    };
                    return u;
                }, T.extend({
                    Deferred: function(e) {
                        var t = [ [ "notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2 ], [ "resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected" ] ], n = "pending", o = {
                            state: function() {
                                return n;
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this;
                            },
                            catch: function(e) {
                                return o.then(null, e);
                            },
                            pipe: function() {
                                var e = arguments;
                                return T.Deferred((function(n) {
                                    T.each(t, (function(t, r) {
                                        var o = y(e[r[4]]) && e[r[4]];
                                        i[r[1]]((function() {
                                            var e = o && o.apply(this, arguments);
                                            e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [ e ] : arguments);
                                        }));
                                    })), e = null;
                                })).promise();
                            },
                            then: function(e, n, o) {
                                var i = 0;
                                function s(e, t, n, o) {
                                    return function() {
                                        var a = this, c = arguments, u = function() {
                                            var r, u;
                                            if (!(e < i)) {
                                                if ((r = n.apply(a, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = r && ("object" == typeof r || "function" == typeof r) && r.then, y(u) ? o ? u.call(r, s(i, t, Y, o), s(i, t, J, o)) : (i++, 
                                                u.call(r, s(i, t, Y, o), s(i, t, J, o), s(i, t, Y, t.notifyWith))) : (n !== Y && (a = void 0, 
                                                c = [ r ]), (o || t.resolveWith)(a, c));
                                            }
                                        }, l = o ? u : function() {
                                            try {
                                                u();
                                            } catch (r) {
                                                T.Deferred.exceptionHook && T.Deferred.exceptionHook(r, l.error), e + 1 >= i && (n !== J && (a = void 0, 
                                                c = [ r ]), t.rejectWith(a, c));
                                            }
                                        };
                                        e ? l() : (T.Deferred.getErrorHook ? l.error = T.Deferred.getErrorHook() : T.Deferred.getStackHook && (l.error = T.Deferred.getStackHook()), 
                                        r.setTimeout(l));
                                    };
                                }
                                return T.Deferred((function(r) {
                                    t[0][3].add(s(0, r, y(o) ? o : Y, r.notifyWith)), t[1][3].add(s(0, r, y(e) ? e : Y)), 
                                    t[2][3].add(s(0, r, y(n) ? n : J));
                                })).promise();
                            },
                            promise: function(e) {
                                return null != e ? T.extend(e, o) : o;
                            }
                        }, i = {};
                        return T.each(t, (function(e, r) {
                            var s = r[2], a = r[5];
                            o[r[1]] = s.add, a && s.add((function() {
                                n = a;
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(r[3].fire), 
                            i[r[0]] = function() {
                                return i[r[0] + "With"](this === i ? void 0 : this, arguments), this;
                            }, i[r[0] + "With"] = s.fireWith;
                        })), o.promise(i), e && e.call(i, i), i;
                    },
                    when: function(e) {
                        var t = arguments.length, n = t, r = Array(n), o = a.call(arguments), i = T.Deferred(), s = function(e) {
                            return function(n) {
                                r[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || i.resolveWith(r, o);
                            };
                        };
                        if (t <= 1 && (X(e, i.done(s(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();
                        for (;n--; ) X(o[n], s(n), i.reject);
                        return i.promise();
                    }
                });
                var K = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                T.Deferred.exceptionHook = function(e, t) {
                    r.console && r.console.warn && e && K.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                }, T.readyException = function(e) {
                    r.setTimeout((function() {
                        throw e;
                    }));
                };
                var Q = T.Deferred();
                function Z() {
                    _.removeEventListener("DOMContentLoaded", Z), r.removeEventListener("load", Z), 
                    T.ready();
                }
                T.fn.ready = function(e) {
                    return Q.then(e).catch((function(e) {
                        T.readyException(e);
                    })), this;
                }, T.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || Q.resolveWith(_, [ T ]));
                    }
                }), T.ready.then = Q.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? r.setTimeout(T.ready) : (_.addEventListener("DOMContentLoaded", Z), 
                r.addEventListener("load", Z));
                var ee = function(e, t, n, r, o, i, s) {
                    var a = 0, c = e.length, u = null == n;
                    if ("object" === x(n)) for (a in o = !0, n) ee(e, t, a, n[a], !0, i, s); else if (void 0 !== r && (o = !0, 
                    y(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(T(e), n);
                    })), t)) for (;a < c; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                    return o ? e : u ? t.call(e) : c ? t(e[0], n) : i;
                }, te = /^-ms-/, ne = /-([a-z])/g;
                function re(e, t) {
                    return t.toUpperCase();
                }
                function oe(e) {
                    return e.replace(te, "ms-").replace(ne, re);
                }
                var ie = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
                function se() {
                    this.expando = T.expando + se.uid++;
                }
                se.uid = 1, se.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t;
                    },
                    set: function(e, t, n) {
                        var r, o = this.cache(e);
                        if ("string" == typeof t) o[oe(t)] = n; else for (r in t) o[oe(r)] = t[r];
                        return o;
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe(t)];
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
                        void 0 !== n ? n : t);
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(oe) : (t = oe(t)) in r ? [ t ] : t.match(V) || []).length;
                                for (;n--; ) delete r[t[n]];
                            }
                            (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !T.isEmptyObject(t);
                    }
                };
                var ae = new se, ce = new se, ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, le = /[A-Z]/g;
                function de(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(le, "-$&").toLowerCase(), 
                    "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ue.test(e) ? JSON.parse(e) : e);
                            }(n);
                        } catch (e) {}
                        ce.set(e, t, n);
                    } else n = void 0;
                    return n;
                }
                T.extend({
                    hasData: function(e) {
                        return ce.hasData(e) || ae.hasData(e);
                    },
                    data: function(e, t, n) {
                        return ce.access(e, t, n);
                    },
                    removeData: function(e, t) {
                        ce.remove(e, t);
                    },
                    _data: function(e, t, n) {
                        return ae.access(e, t, n);
                    },
                    _removeData: function(e, t) {
                        ae.remove(e, t);
                    }
                }), T.fn.extend({
                    data: function(e, t) {
                        var n, r, o, i = this[0], s = i && i.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = ce.get(i), 1 === i.nodeType && !ae.get(i, "hasDataAttrs"))) {
                                for (n = s.length; n--; ) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = oe(r.slice(5)), 
                                de(i, r, o[r]));
                                ae.set(i, "hasDataAttrs", !0);
                            }
                            return o;
                        }
                        return "object" == typeof e ? this.each((function() {
                            ce.set(this, e);
                        })) : ee(this, (function(t) {
                            var n;
                            if (i && void 0 === t) return void 0 !== (n = ce.get(i, e)) || void 0 !== (n = de(i, e)) ? n : void 0;
                            this.each((function() {
                                ce.set(this, e, t);
                            }));
                        }), null, t, arguments.length > 1, null, !0);
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            ce.remove(this, e);
                        }));
                    }
                }), T.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = ae.get(e, t), n && (!r || Array.isArray(n) ? r = ae.access(e, t, T.makeArray(n)) : r.push(n)), 
                        r || [];
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = T.queue(e, t), r = n.length, o = n.shift(), i = T._queueHooks(e, t);
                        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), 
                        delete i.stop, o.call(e, (function() {
                            T.dequeue(e, t);
                        }), i)), !r && i && i.empty.fire();
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return ae.get(e, n) || ae.access(e, n, {
                            empty: T.Callbacks("once memory").add((function() {
                                ae.remove(e, [ t + "queue", n ]);
                            }))
                        });
                    }
                }), T.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = T.queue(this, e, t);
                            T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                        }));
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            T.dequeue(this, e);
                        }));
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function(e, t) {
                        var n, r = 1, o = T.Deferred(), i = this, s = this.length, a = function() {
                            --r || o.resolveWith(i, [ i ]);
                        };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = ae.get(i[s], e + "queueHooks")) && n.empty && (r++, 
                        n.empty.add(a));
                        return a(), o.promise(t);
                    }
                });
                var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, he = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"), fe = [ "Top", "Right", "Bottom", "Left" ], me = _.documentElement, ge = function(e) {
                    return T.contains(e.ownerDocument, e);
                }, ye = {
                    composed: !0
                };
                me.getRootNode && (ge = function(e) {
                    return T.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument;
                });
                var ve = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ge(e) && "none" === T.css(e, "display");
                };
                function _e(e, t, n, r) {
                    var o, i, s = 20, a = r ? function() {
                        return r.cur();
                    } : function() {
                        return T.css(e, t, "");
                    }, c = a(), u = n && n[3] || (T.cssNumber[t] ? "" : "px"), l = e.nodeType && (T.cssNumber[t] || "px" !== u && +c) && he.exec(T.css(e, t));
                    if (l && l[3] !== u) {
                        for (c /= 2, u = u || l[3], l = +c || 1; s--; ) T.style(e, t, l + u), (1 - i) * (1 - (i = a() / c || .5)) <= 0 && (s = 0), 
                        l /= i;
                        l *= 2, T.style(e, t, l + u), n = n || [];
                    }
                    return n && (l = +l || +c || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, 
                    r.start = l, r.end = o)), o;
                }
                var be = {};
                function Se(e) {
                    var t, n = e.ownerDocument, r = e.nodeName, o = be[r];
                    return o || (t = n.body.appendChild(n.createElement(r)), o = T.css(t, "display"), 
                    t.parentNode.removeChild(t), "none" === o && (o = "block"), be[r] = o, o);
                }
                function xe(e, t) {
                    for (var n, r, o = [], i = 0, s = e.length; i < s; i++) (r = e[i]).style && (n = r.style.display, 
                    t ? ("none" === n && (o[i] = ae.get(r, "display") || null, o[i] || (r.style.display = "")), 
                    "" === r.style.display && ve(r) && (o[i] = Se(r))) : "none" !== n && (o[i] = "none", 
                    ae.set(r, "display", n)));
                    for (i = 0; i < s; i++) null != o[i] && (e[i].style.display = o[i]);
                    return e;
                }
                T.fn.extend({
                    show: function() {
                        return xe(this, !0);
                    },
                    hide: function() {
                        return xe(this);
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            ve(this) ? T(this).show() : T(this).hide();
                        }));
                    }
                });
                var we, ke, Te = /^(?:checkbox|radio)$/i, Ee = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
                we = _.createDocumentFragment().appendChild(_.createElement("div")), (ke = _.createElement("input")).setAttribute("type", "radio"), 
                ke.setAttribute("checked", "checked"), ke.setAttribute("name", "t"), we.appendChild(ke), 
                g.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", 
                g.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue, we.innerHTML = "<option></option>", 
                g.option = !!we.lastChild;
                var Ie = {
                    thead: [ 1, "<table>", "</table>" ],
                    col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: [ 0, "", "" ]
                };
                function Re(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
                    void 0 === t || t && C(e, t) ? T.merge([ e ], n) : n;
                }
                function Me(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) ae.set(e[n], "globalEval", !t || ae.get(t[n], "globalEval"));
                }
                Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td, g.option || (Ie.optgroup = Ie.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
                var Oe = /<|&#?\w+;/;
                function Ae(e, t, n, r, o) {
                    for (var i, s, a, c, u, l, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++) if ((i = e[h]) || 0 === i) if ("object" === x(i)) T.merge(p, i.nodeType ? [ i ] : i); else if (Oe.test(i)) {
                        for (s = s || d.appendChild(t.createElement("div")), a = (Ee.exec(i) || [ "", "" ])[1].toLowerCase(), 
                        c = Ie[a] || Ie._default, s.innerHTML = c[1] + T.htmlPrefilter(i) + c[2], l = c[0]; l--; ) s = s.lastChild;
                        T.merge(p, s.childNodes), (s = d.firstChild).textContent = "";
                    } else p.push(t.createTextNode(i));
                    for (d.textContent = "", h = 0; i = p[h++]; ) if (r && T.inArray(i, r) > -1) o && o.push(i); else if (u = ge(i), 
                    s = Re(d.appendChild(i), "script"), u && Me(s), n) for (l = 0; i = s[l++]; ) Ce.test(i.type || "") && n.push(i);
                    return d;
                }
                var Le = /^([^.]*)(?:\.(.+)|)/;
                function De() {
                    return !0;
                }
                function Ne() {
                    return !1;
                }
                function Pe(e, t, n, r, o, i) {
                    var s, a;
                    if ("object" == typeof t) {
                        for (a in "string" != typeof n && (r = r || n, n = void 0), t) Pe(e, a, n, r, t[a], i);
                        return e;
                    }
                    if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, 
                    r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ne; else if (!o) return e;
                    return 1 === i && (s = o, (o = function(e) {
                        return T().off(e), s.apply(this, arguments);
                    }).guid = s.guid || (s.guid = T.guid++)), e.each((function() {
                        T.event.add(this, t, o, r, n);
                    }));
                }
                function $e(e, t, n) {
                    n ? (ae.set(e, t, !1), T.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var n, r = ae.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r) (T.event.special[t] || {}).delegateType && e.stopPropagation(); else if (r = a.call(arguments), 
                                ae.set(this, t, r), this[t](), n = ae.get(this, t), ae.set(this, t, !1), r !== n) return e.stopImmediatePropagation(), 
                                e.preventDefault(), n;
                            } else r && (ae.set(this, t, T.event.trigger(r[0], r.slice(1), this)), e.stopPropagation(), 
                            e.isImmediatePropagationStopped = De);
                        }
                    })) : void 0 === ae.get(e, t) && T.event.add(e, t, De);
                }
                T.event = {
                    global: {},
                    add: function(e, t, n, r, o) {
                        var i, s, a, c, u, l, d, p, h, f, m, g = ae.get(e);
                        if (ie(e)) for (n.handler && (n = (i = n).handler, o = i.selector), o && T.find.matchesSelector(me, o), 
                        n.guid || (n.guid = T.guid++), (c = g.events) || (c = g.events = Object.create(null)), 
                        (s = g.handle) || (s = g.handle = function(t) {
                            return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
                        }), u = (t = (t || "").match(V) || [ "" ]).length; u--; ) h = m = (a = Le.exec(t[u]) || [])[1], 
                        f = (a[2] || "").split(".").sort(), h && (d = T.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, 
                        d = T.event.special[h] || {}, l = T.extend({
                            type: h,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && T.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, i), (p = c[h]) || ((p = c[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, f, s) || e.addEventListener && e.addEventListener(h, s)), 
                        d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, l) : p.push(l), 
                        T.event.global[h] = !0);
                    },
                    remove: function(e, t, n, r, o) {
                        var i, s, a, c, u, l, d, p, h, f, m, g = ae.hasData(e) && ae.get(e);
                        if (g && (c = g.events)) {
                            for (u = (t = (t || "").match(V) || [ "" ]).length; u--; ) if (h = m = (a = Le.exec(t[u]) || [])[1], 
                            f = (a[2] || "").split(".").sort(), h) {
                                for (d = T.event.special[h] || {}, p = c[h = (r ? d.delegateType : d.bindType) || h] || [], 
                                a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = i = p.length; i--; ) l = p[i], 
                                !o && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(i, 1), 
                                l.selector && p.delegateCount--, d.remove && d.remove.call(e, l));
                                s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || T.removeEvent(e, h, g.handle), 
                                delete c[h]);
                            } else for (h in c) T.event.remove(e, h + t[u], n, r, !0);
                            T.isEmptyObject(c) && ae.remove(e, "handle events");
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, o, i, s, a = new Array(arguments.length), c = T.event.fix(e), u = (ae.get(this, "events") || Object.create(null))[c.type] || [], l = T.event.special[c.type] || {};
                        for (a[0] = c, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                        if (c.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, c)) {
                            for (s = T.event.handlers.call(this, c, u), t = 0; (o = s[t++]) && !c.isPropagationStopped(); ) for (c.currentTarget = o.elem, 
                            n = 0; (i = o.handlers[n++]) && !c.isImmediatePropagationStopped(); ) c.rnamespace && !1 !== i.namespace && !c.rnamespace.test(i.namespace) || (c.handleObj = i, 
                            c.data = i.data, void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a)) && !1 === (c.result = r) && (c.preventDefault(), 
                            c.stopPropagation()));
                            return l.postDispatch && l.postDispatch.call(this, c), c.result;
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, o, i, s, a = [], c = t.delegateCount, u = e.target;
                        if (c && u.nodeType && !("click" === e.type && e.button >= 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (i = [], s = {}, n = 0; n < c; n++) void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? T(o, this).index(u) > -1 : T.find(o, this, null, [ u ]).length), 
                            s[o] && i.push(r);
                            i.length && a.push({
                                elem: u,
                                handlers: i
                            });
                        }
                        return u = this, c < t.length && a.push({
                            elem: u,
                            handlers: t.slice(c)
                        }), a;
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(T.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: y(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e];
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                });
                            }
                        });
                    },
                    fix: function(e) {
                        return e[T.expando] ? e : new T.Event(e);
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return Te.test(t.type) && t.click && C(t, "input") && $e(t, "click", !0), !1;
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return Te.test(t.type) && t.click && C(t, "input") && $e(t, "click"), !0;
                            },
                            _default: function(e) {
                                var t = e.target;
                                return Te.test(t.type) && t.click && C(t, "input") && ae.get(t, "click") || C(t, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                            }
                        }
                    }
                }, T.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }, T.Event = function(e, t) {
                    if (!(this instanceof T.Event)) return new T.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? De : Ne, 
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
                    this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
                    t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
                }, T.Event.prototype = {
                    constructor: T.Event,
                    isDefaultPrevented: Ne,
                    isPropagationStopped: Ne,
                    isImmediatePropagationStopped: Ne,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = De, e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = De, e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = De, e && !this.isSimulated && e.stopImmediatePropagation(), 
                        this.stopPropagation();
                    }
                }, T.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, T.event.addProp), T.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    function n(e) {
                        if (_.documentMode) {
                            var n = ae.get(this, "handle"), r = T.event.fix(e);
                            r.type = "focusin" === e.type ? "focus" : "blur", r.isSimulated = !0, n(e), r.target === r.currentTarget && n(r);
                        } else T.event.simulate(t, e.target, T.event.fix(e));
                    }
                    T.event.special[e] = {
                        setup: function() {
                            var r;
                            if ($e(this, e, !0), !_.documentMode) return !1;
                            (r = ae.get(this, t)) || this.addEventListener(t, n), ae.set(this, t, (r || 0) + 1);
                        },
                        trigger: function() {
                            return $e(this, e), !0;
                        },
                        teardown: function() {
                            var e;
                            if (!_.documentMode) return !1;
                            (e = ae.get(this, t) - 1) ? ae.set(this, t, e) : (this.removeEventListener(t, n), 
                            ae.remove(this, t));
                        },
                        _default: function(t) {
                            return ae.get(t.target, e);
                        },
                        delegateType: t
                    }, T.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this, o = _.documentMode ? this : r, i = ae.get(o, t);
                            i || (_.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), 
                            ae.set(o, t, (i || 0) + 1);
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this, o = _.documentMode ? this : r, i = ae.get(o, t) - 1;
                            i ? ae.set(o, t, i) : (_.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), 
                            ae.remove(o, t));
                        }
                    };
                })), T.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    T.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = e.relatedTarget, o = e.handleObj;
                            return r && (r === this || T.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                            e.type = t), n;
                        }
                    };
                })), T.fn.extend({
                    on: function(e, t, n, r) {
                        return Pe(this, e, t, n, r);
                    },
                    one: function(e, t, n, r) {
                        return Pe(this, e, t, n, r, 1);
                    },
                    off: function(e, t, n) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
                        this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, t, e[o]);
                            return this;
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), 
                        this.each((function() {
                            T.event.remove(this, e, n, t);
                        }));
                    }
                });
                var je = /<script|<style|<link/i, Fe = /checked\s*(?:[^=]|=\s*.checked.)/i, Be = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function He(e, t) {
                    return C(e, "table") && C(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
                }
                function qe(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
                }
                function Ue(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
                    e;
                }
                function ze(e, t) {
                    var n, r, o, i, s, a;
                    if (1 === t.nodeType) {
                        if (ae.hasData(e) && (a = ae.get(e).events)) for (o in ae.remove(t, "handle events"), 
                        a) for (n = 0, r = a[o].length; n < r; n++) T.event.add(t, o, a[o][n]);
                        ce.hasData(e) && (i = ce.access(e), s = T.extend({}, i), ce.set(t, s));
                    }
                }
                function We(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && Te.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
                }
                function Ge(e, t, n, r) {
                    t = c(t);
                    var o, i, s, a, u, l, d = 0, p = e.length, h = p - 1, f = t[0], m = y(f);
                    if (m || p > 1 && "string" == typeof f && !g.checkClone && Fe.test(f)) return e.each((function(o) {
                        var i = e.eq(o);
                        m && (t[0] = f.call(this, o, i.html())), Ge(i, t, n, r);
                    }));
                    if (p && (i = (o = Ae(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), 
                    i || r)) {
                        for (a = (s = T.map(Re(o, "script"), qe)).length; d < p; d++) u = o, d !== h && (u = T.clone(u, !0, !0), 
                        a && T.merge(s, Re(u, "script"))), n.call(e[d], u, d);
                        if (a) for (l = s[s.length - 1].ownerDocument, T.map(s, Ue), d = 0; d < a; d++) u = s[d], 
                        Ce.test(u.type || "") && !ae.access(u, "globalEval") && T.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }, l) : S(u.textContent.replace(Be, ""), u, l));
                    }
                    return e;
                }
                function Ve(e, t, n) {
                    for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || T.cleanData(Re(r)), 
                    r.parentNode && (n && ge(r) && Me(Re(r, "script")), r.parentNode.removeChild(r));
                    return e;
                }
                T.extend({
                    htmlPrefilter: function(e) {
                        return e;
                    },
                    clone: function(e, t, n) {
                        var r, o, i, s, a = e.cloneNode(!0), c = ge(e);
                        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (s = Re(a), 
                        r = 0, o = (i = Re(e)).length; r < o; r++) We(i[r], s[r]);
                        if (t) if (n) for (i = i || Re(e), s = s || Re(a), r = 0, o = i.length; r < o; r++) ze(i[r], s[r]); else ze(e, a);
                        return (s = Re(a, "script")).length > 0 && Me(s, !c && Re(e, "script")), a;
                    },
                    cleanData: function(e) {
                        for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++) if (ie(n)) {
                            if (t = n[ae.expando]) {
                                if (t.events) for (r in t.events) o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                                n[ae.expando] = void 0;
                            }
                            n[ce.expando] && (n[ce.expando] = void 0);
                        }
                    }
                }), T.fn.extend({
                    detach: function(e) {
                        return Ve(this, e, !0);
                    },
                    remove: function(e) {
                        return Ve(this, e);
                    },
                    text: function(e) {
                        return ee(this, (function(e) {
                            return void 0 === e ? T.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                            }));
                        }), null, e, arguments.length);
                    },
                    append: function() {
                        return Ge(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e);
                        }));
                    },
                    prepend: function() {
                        return Ge(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = He(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        }));
                    },
                    before: function() {
                        return Ge(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        }));
                    },
                    after: function() {
                        return Ge(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        }));
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(Re(e, !1)), 
                        e.textContent = "");
                        return this;
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map((function() {
                            return T.clone(this, e, t);
                        }));
                    },
                    html: function(e) {
                        return ee(this, (function(e) {
                            var t = this[0] || {}, n = 0, r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !je.test(e) && !Ie[(Ee.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                                e = T.htmlPrefilter(e);
                                try {
                                    for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(Re(t, !1)), 
                                    t.innerHTML = e);
                                    t = 0;
                                } catch (e) {}
                            }
                            t && this.empty().append(e);
                        }), null, e, arguments.length);
                    },
                    replaceWith: function() {
                        var e = [];
                        return Ge(this, arguments, (function(t) {
                            var n = this.parentNode;
                            T.inArray(this, e) < 0 && (T.cleanData(Re(this)), n && n.replaceChild(t, this));
                        }), e);
                    }
                }), T.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    T.fn[e] = function(e) {
                        for (var n, r = [], o = T(e), i = o.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), 
                        T(o[s])[t](n), u.apply(r, n.get());
                        return this.pushStack(r);
                    };
                }));
                var Ye = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"), Je = /^--/, Xe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = r), t.getComputedStyle(e);
                }, Ke = function(e, t, n) {
                    var r, o, i = {};
                    for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                    for (o in r = n.call(e), t) e.style[o] = i[o];
                    return r;
                }, Qe = new RegExp(fe.join("|"), "i");
                function Ze(e, t, n) {
                    var r, o, i, s, a = Je.test(t), c = e.style;
                    return (n = n || Xe(e)) && (s = n.getPropertyValue(t) || n[t], a && s && (s = s.replace(A, "$1") || void 0), 
                    "" !== s || ge(e) || (s = T.style(e, t)), !g.pixelBoxStyles() && Ye.test(s) && Qe.test(t) && (r = c.width, 
                    o = c.minWidth, i = c.maxWidth, c.minWidth = c.maxWidth = c.width = s, s = n.width, 
                    c.width = r, c.minWidth = o, c.maxWidth = i)), void 0 !== s ? s + "" : s;
                }
                function et(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get;
                        }
                    };
                }
                !function() {
                    function e() {
                        if (l) {
                            u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                            l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                            me.appendChild(u).appendChild(l);
                            var e = r.getComputedStyle(l);
                            n = "1%" !== e.top, c = 12 === t(e.marginLeft), l.style.right = "60%", s = 36 === t(e.right), 
                            o = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), 
                            me.removeChild(u), l = null;
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e));
                    }
                    var n, o, i, s, a, c, u = _.createElement("div"), l = _.createElement("div");
                    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
                    g.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(g, {
                        boxSizingReliable: function() {
                            return e(), o;
                        },
                        pixelBoxStyles: function() {
                            return e(), s;
                        },
                        pixelPosition: function() {
                            return e(), n;
                        },
                        reliableMarginLeft: function() {
                            return e(), c;
                        },
                        scrollboxSize: function() {
                            return e(), i;
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, o;
                            return null == a && (e = _.createElement("table"), t = _.createElement("tr"), n = _.createElement("div"), 
                            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", 
                            t.style.height = "1px", n.style.height = "9px", n.style.display = "block", me.appendChild(e).appendChild(t).appendChild(n), 
                            o = r.getComputedStyle(t), a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight, 
                            me.removeChild(e)), a;
                        }
                    }));
                }();
                var tt = [ "Webkit", "Moz", "ms" ], nt = _.createElement("div").style, rt = {};
                function ot(e) {
                    return T.cssProps[e] || rt[e] || (e in nt ? e : rt[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; ) if ((e = tt[n] + t) in nt) return e;
                    }(e) || e);
                }
                var it = /^(none|table(?!-c[ea]).+)/, st = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, at = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function ct(e, t, n) {
                    var r = he.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                }
                function ut(e, t, n, r, o, i) {
                    var s = "width" === t ? 1 : 0, a = 0, c = 0, u = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (;s < 4; s += 2) "margin" === n && (u += T.css(e, n + fe[s], !0, o)), r ? ("content" === n && (c -= T.css(e, "padding" + fe[s], !0, o)), 
                    "margin" !== n && (c -= T.css(e, "border" + fe[s] + "Width", !0, o))) : (c += T.css(e, "padding" + fe[s], !0, o), 
                    "padding" !== n ? c += T.css(e, "border" + fe[s] + "Width", !0, o) : a += T.css(e, "border" + fe[s] + "Width", !0, o));
                    return !r && i >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - a - .5)) || 0), 
                    c + u;
                }
                function lt(e, t, n) {
                    var r = Xe(e), o = (!g.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r), i = o, s = Ze(e, t, r), a = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Ye.test(s)) {
                        if (!n) return s;
                        s = "auto";
                    }
                    return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && C(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, r), 
                    (i = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ut(e, t, n || (o ? "border" : "content"), i, r, s) + "px";
                }
                function dt(e, t, n, r, o) {
                    return new dt.prototype.init(e, t, n, r, o);
                }
                T.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Ze(e, "opacity");
                                    return "" === n ? "1" : n;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageSlice: !0,
                        columnCount: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        scale: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, i, s, a = oe(t), c = Je.test(t), u = e.style;
                            if (c || (t = ot(a)), s = T.cssHooks[t] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, r)) ? o : u[t];
                            "string" == (i = typeof n) && (o = he.exec(n)) && o[1] && (n = _e(e, t, o), i = "number"), 
                            null != n && n == n && ("number" !== i || c || (n += o && o[3] || (T.cssNumber[a] ? "" : "px")), 
                            g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                            s && "set" in s && void 0 === (n = s.set(e, n, r)) || (c ? u.setProperty(t, n) : u[t] = n));
                        }
                    },
                    css: function(e, t, n, r) {
                        var o, i, s, a = oe(t);
                        return Je.test(t) || (t = ot(a)), (s = T.cssHooks[t] || T.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), 
                        void 0 === o && (o = Ze(e, t, r)), "normal" === o && t in at && (o = at[t]), "" === n || n ? (i = parseFloat(o), 
                        !0 === n || isFinite(i) ? i || 0 : o) : o;
                    }
                }), T.each([ "height", "width" ], (function(e, t) {
                    T.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !it.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? lt(e, t, r) : Ke(e, st, (function() {
                                return lt(e, t, r);
                            }));
                        },
                        set: function(e, n, r) {
                            var o, i = Xe(e), s = !g.scrollboxSize() && "absolute" === i.position, a = (s || r) && "border-box" === T.css(e, "boxSizing", !1, i), c = r ? ut(e, t, r, a, i) : 0;
                            return a && s && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ut(e, t, "border", !1, i) - .5)), 
                            c && (o = he.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = T.css(e, t)), 
                            ct(0, n, c);
                        }
                    };
                })), T.cssHooks.marginLeft = et(g.reliableMarginLeft, (function(e, t) {
                    if (t) return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left;
                    }))) + "px";
                })), T.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    T.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) o[e + fe[r] + t] = i[r] || i[r - 2] || i[0];
                            return o;
                        }
                    }, "margin" !== e && (T.cssHooks[e + t].set = ct);
                })), T.fn.extend({
                    css: function(e, t) {
                        return ee(this, (function(e, t, n) {
                            var r, o, i = {}, s = 0;
                            if (Array.isArray(t)) {
                                for (r = Xe(e), o = t.length; s < o; s++) i[t[s]] = T.css(e, t[s], !1, r);
                                return i;
                            }
                            return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                        }), e, t, arguments.length > 1);
                    }
                }), T.Tween = dt, dt.prototype = {
                    constructor: dt,
                    init: function(e, t, n, r, o, i) {
                        this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, 
                        this.start = this.now = this.cur(), this.end = r, this.unit = i || (T.cssNumber[n] ? "" : "px");
                    },
                    cur: function() {
                        var e = dt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : dt.propHooks._default.get(this);
                    },
                    run: function(e) {
                        var t, n = dt.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
                        this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
                        n && n.set ? n.set(this) : dt.propHooks._default.set(this), this;
                    }
                }, dt.prototype.init.prototype = dt.prototype, dt.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                        },
                        set: function(e) {
                            T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
                        }
                    }
                }, dt.propHooks.scrollTop = dt.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    }
                }, T.easing = {
                    linear: function(e) {
                        return e;
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing"
                }, T.fx = dt.prototype.init, T.fx.step = {};
                var pt, ht, ft = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;
                function gt() {
                    ht && (!1 === _.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(gt) : r.setTimeout(gt, T.fx.interval), 
                    T.fx.tick());
                }
                function yt() {
                    return r.setTimeout((function() {
                        pt = void 0;
                    })), pt = Date.now();
                }
                function vt(e, t) {
                    var n, r = 0, o = {
                        height: e
                    };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = fe[r])] = o["padding" + n] = e;
                    return t && (o.opacity = o.width = e), o;
                }
                function _t(e, t, n) {
                    for (var r, o = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), i = 0, s = o.length; i < s; i++) if (r = o[i].call(n, t, e)) return r;
                }
                function bt(e, t, n) {
                    var r, o, i = 0, s = bt.prefilters.length, a = T.Deferred().always((function() {
                        delete c.elem;
                    })), c = function() {
                        if (o) return !1;
                        for (var t = pt || yt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, s = u.tweens.length; i < s; i++) u.tweens[i].run(r);
                        return a.notifyWith(e, [ u, r, n ]), r < 1 && s ? n : (s || a.notifyWith(e, [ u, 1, 0 ]), 
                        a.resolveWith(e, [ u ]), !1);
                    }, u = a.promise({
                        elem: e,
                        props: T.extend({}, t),
                        opts: T.extend(!0, {
                            specialEasing: {},
                            easing: T.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: pt || yt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = T.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(r), r;
                        },
                        stop: function(t) {
                            var n = 0, r = t ? u.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; n < r; n++) u.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [ u, 1, 0 ]), a.resolveWith(e, [ u, t ])) : a.rejectWith(e, [ u, t ]), 
                            this;
                        }
                    }), l = u.props;
                    for (function(e, t) {
                        var n, r, o, i, s;
                        for (n in e) if (o = t[r = oe(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), 
                        n !== r && (e[r] = i, delete e[n]), (s = T.cssHooks[r]) && "expand" in s) for (n in i = s.expand(i), 
                        delete e[r], i) n in e || (e[n] = i[n], t[n] = o); else t[r] = o;
                    }(l, u.opts.specialEasing); i < s; i++) if (r = bt.prefilters[i].call(u, e, l, u.opts)) return y(r.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), 
                    r;
                    return T.map(l, _t, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), 
                    T.fx.timer(T.extend(c, {
                        elem: e,
                        anim: u,
                        queue: u.opts.queue
                    })), u;
                }
                T.Animation = T.extend(bt, {
                    tweeners: {
                        "*": [ function(e, t) {
                            var n = this.createTween(e, t);
                            return _e(n.elem, e, he.exec(t), n), n;
                        } ]
                    },
                    tweener: function(e, t) {
                        y(e) ? (t = e, e = [ "*" ]) : e = e.match(V);
                        for (var n, r = 0, o = e.length; r < o; r++) n = e[r], bt.tweeners[n] = bt.tweeners[n] || [], 
                        bt.tweeners[n].unshift(t);
                    },
                    prefilters: [ function(e, t, n) {
                        var r, o, i, s, a, c, u, l, d = "width" in t || "height" in t, p = this, h = {}, f = e.style, m = e.nodeType && ve(e), g = ae.get(e, "fxshow");
                        for (r in n.queue || (null == (s = T._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, 
                        a = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || a();
                        }), s.unqueued++, p.always((function() {
                            p.always((function() {
                                s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                            }));
                        }))), t) if (o = t[r], ft.test(o)) {
                            if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[r]) continue;
                                m = !0;
                            }
                            h[r] = g && g[r] || T.style(e, r);
                        }
                        if ((c = !T.isEmptyObject(t)) || !T.isEmptyObject(h)) for (r in d && 1 === e.nodeType && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
                        null == (u = g && g.display) && (u = ae.get(e, "display")), "none" === (l = T.css(e, "display")) && (u ? l = u : (xe([ e ], !0), 
                        u = e.style.display || u, l = T.css(e, "display"), xe([ e ]))), ("inline" === l || "inline-block" === l && null != u) && "none" === T.css(e, "float") && (c || (p.done((function() {
                            f.display = u;
                        })), null == u && (l = f.display, u = "none" === l ? "" : l)), f.display = "inline-block")), 
                        n.overflow && (f.overflow = "hidden", p.always((function() {
                            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
                        }))), c = !1, h) c || (g ? "hidden" in g && (m = g.hidden) : g = ae.access(e, "fxshow", {
                            display: u
                        }), i && (g.hidden = !m), m && xe([ e ], !0), p.done((function() {
                            for (r in m || xe([ e ]), ae.remove(e, "fxshow"), h) T.style(e, r, h[r]);
                        }))), c = _t(m ? g[r] : 0, r, p), r in g || (g[r] = c.start, m && (c.end = c.start, 
                        c.start = 0));
                    } ],
                    prefilter: function(e, t) {
                        t ? bt.prefilters.unshift(e) : bt.prefilters.push(e);
                    }
                }), T.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? T.extend({}, e) : {
                        complete: n || !n && t || y(e) && e,
                        duration: e,
                        easing: n && t || t && !y(t) && t
                    };
                    return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), 
                    null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
                    }, r;
                }, T.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(ve).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r);
                    },
                    animate: function(e, t, n, r) {
                        var o = T.isEmptyObject(e), i = T.speed(t, n, r), s = function() {
                            var t = bt(this, T.extend({}, e), i);
                            (o || ae.get(this, "finish")) && t.stop(!0);
                        };
                        return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s);
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), 
                        this.each((function() {
                            var t = !0, o = null != e && e + "queueHooks", i = T.timers, s = ae.get(this);
                            if (o) s[o] && s[o].stop && r(s[o]); else for (o in s) s[o] && s[o].stop && mt.test(o) && r(s[o]);
                            for (o = i.length; o--; ) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), 
                            t = !1, i.splice(o, 1));
                            !t && n || T.dequeue(this, e);
                        }));
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each((function() {
                            var t, n = ae.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = T.timers, s = r ? r.length : 0;
                            for (n.finish = !0, T.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
                            t = i.length; t--; ) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), 
                            i.splice(t, 1));
                            for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish;
                        }));
                    }
                }), T.each([ "toggle", "show", "hide" ], (function(e, t) {
                    var n = T.fn[t];
                    T.fn[t] = function(e, r, o) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(vt(t, !0), e, r, o);
                    };
                })), T.each({
                    slideDown: vt("show"),
                    slideUp: vt("hide"),
                    slideToggle: vt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    T.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r);
                    };
                })), T.timers = [], T.fx.tick = function() {
                    var e, t = 0, n = T.timers;
                    for (pt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || T.fx.stop(), pt = void 0;
                }, T.fx.timer = function(e) {
                    T.timers.push(e), T.fx.start();
                }, T.fx.interval = 13, T.fx.start = function() {
                    ht || (ht = !0, gt());
                }, T.fx.stop = function() {
                    ht = null;
                }, T.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, T.fn.delay = function(e, t) {
                    return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                        var o = r.setTimeout(t, e);
                        n.stop = function() {
                            r.clearTimeout(o);
                        };
                    }));
                }, function() {
                    var e = _.createElement("input"), t = _.createElement("select").appendChild(_.createElement("option"));
                    e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = _.createElement("input")).value = "t", 
                    e.type = "radio", g.radioValue = "t" === e.value;
                }();
                var St, xt = T.expr.attrHandle;
                T.fn.extend({
                    attr: function(e, t) {
                        return ee(this, T.attr, e, t, arguments.length > 1);
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            T.removeAttr(this, e);
                        }));
                    }
                }), T.extend({
                    attr: function(e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === i && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? St : void 0)), 
                        void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
                        n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && C(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0, o = t && t.match(V);
                        if (o && 1 === e.nodeType) for (;n = o[r++]; ) e.removeAttribute(n);
                    }
                }), St = {
                    set: function(e, t, n) {
                        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
                    }
                }, T.each(T.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = xt[t] || T.find.attr;
                    xt[t] = function(e, t, r) {
                        var o, i, s = t.toLowerCase();
                        return r || (i = xt[s], xt[s] = o, o = null != n(e, t, r) ? s : null, xt[s] = i), 
                        o;
                    };
                }));
                var wt = /^(?:input|select|textarea|button)$/i, kt = /^(?:a|area)$/i;
                function Tt(e) {
                    return (e.match(V) || []).join(" ");
                }
                function Et(e) {
                    return e.getAttribute && e.getAttribute("class") || "";
                }
                function Ct(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(V) || [];
                }
                T.fn.extend({
                    prop: function(e, t) {
                        return ee(this, T.prop, e, t, arguments.length > 1);
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[T.propFix[e] || e];
                        }));
                    }
                }), T.extend({
                    prop: function(e, t, n) {
                        var r, o, i = e.nodeType;
                        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(e) || (t = T.propFix[t] || t, 
                        o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = T.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : wt.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1;
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), g.optSelected || (T.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null;
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                    }
                }), T.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                    T.propFix[this.toLowerCase()] = this;
                })), T.fn.extend({
                    addClass: function(e) {
                        var t, n, r, o, i, s;
                        return y(e) ? this.each((function(t) {
                            T(this).addClass(e.call(this, t, Et(this)));
                        })) : (t = Ct(e)).length ? this.each((function() {
                            if (r = Et(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                                for (i = 0; i < t.length; i++) o = t[i], n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                s = Tt(n), r !== s && this.setAttribute("class", s);
                            }
                        })) : this;
                    },
                    removeClass: function(e) {
                        var t, n, r, o, i, s;
                        return y(e) ? this.each((function(t) {
                            T(this).removeClass(e.call(this, t, Et(this)));
                        })) : arguments.length ? (t = Ct(e)).length ? this.each((function() {
                            if (r = Et(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
                                for (i = 0; i < t.length; i++) for (o = t[i]; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                                s = Tt(n), r !== s && this.setAttribute("class", s);
                            }
                        })) : this : this.attr("class", "");
                    },
                    toggleClass: function(e, t) {
                        var n, r, o, i, s = typeof e, a = "string" === s || Array.isArray(e);
                        return y(e) ? this.each((function(n) {
                            T(this).toggleClass(e.call(this, n, Et(this), t), t);
                        })) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = Ct(e), 
                        this.each((function() {
                            if (a) for (i = T(this), o = 0; o < n.length; o++) r = n[o], i.hasClass(r) ? i.removeClass(r) : i.addClass(r); else void 0 !== e && "boolean" !== s || ((r = Et(this)) && ae.set(this, "__className__", r), 
                            this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : ae.get(this, "__className__") || ""));
                        })));
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + Tt(Et(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    }
                });
                var It = /\r/g;
                T.fn.extend({
                    val: function(e) {
                        var t, n, r, o = this[0];
                        return arguments.length ? (r = y(e), this.each((function(n) {
                            var o;
                            1 === this.nodeType && (null == (o = r ? e.call(this, n, T(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, (function(e) {
                                return null == e ? "" : e + "";
                            }))), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
                        }))) : o ? (t = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(It, "") : null == n ? "" : n : void 0;
                    }
                }), T.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = T.find.attr(e, "value");
                                return null != t ? t : Tt(T.text(e));
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, o = e.options, i = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], c = s ? i + 1 : o.length;
                                for (r = i < 0 ? c : s ? i : 0; r < c; r++) if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
                                    if (t = T(n).val(), s) return t;
                                    a.push(t);
                                }
                                return a;
                            },
                            set: function(e, t) {
                                for (var n, r, o = e.options, i = T.makeArray(t), s = o.length; s--; ) ((r = o[s]).selected = T.inArray(T.valHooks.option.get(r), i) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), i;
                            }
                        }
                    }
                }), T.each([ "radio", "checkbox" ], (function() {
                    T.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1;
                        }
                    }, g.checkOn || (T.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
                }));
                var Rt = r.location, Mt = {
                    guid: Date.now()
                }, Ot = /\?/;
                T.parseXML = function(e) {
                    var t, n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = (new r.DOMParser).parseFromString(e, "text/xml");
                    } catch (e) {}
                    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || T.error("Invalid XML: " + (n ? T.map(n.childNodes, (function(e) {
                        return e.textContent;
                    })).join("\n") : e)), t;
                };
                var At = /^(?:focusinfocus|focusoutblur)$/, Lt = function(e) {
                    e.stopPropagation();
                };
                T.extend(T.event, {
                    trigger: function(e, t, n, o) {
                        var i, s, a, c, u, l, d, p, f = [ n || _ ], m = h.call(e, "type") ? e.type : e, g = h.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (s = p = a = n = n || _, 3 !== n.nodeType && 8 !== n.nodeType && !At.test(m + T.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), 
                        m = g.shift(), g.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[T.expando] ? e : new T.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, 
                        e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
                        e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : T.makeArray(t, [ e ]), 
                        d = T.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                            if (!o && !d.noBubble && !v(n)) {
                                for (c = d.delegateType || m, At.test(c + m) || (s = s.parentNode); s; s = s.parentNode) f.push(s), 
                                a = s;
                                a === (n.ownerDocument || _) && f.push(a.defaultView || a.parentWindow || r);
                            }
                            for (i = 0; (s = f[i++]) && !e.isPropagationStopped(); ) p = s, e.type = i > 1 ? c : d.bindType || m, 
                            (l = (ae.get(s, "events") || Object.create(null))[e.type] && ae.get(s, "handle")) && l.apply(s, t), 
                            (l = u && s[u]) && l.apply && ie(s) && (e.result = l.apply(s, t), !1 === e.result && e.preventDefault());
                            return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !ie(n) || u && y(n[m]) && !v(n) && ((a = n[u]) && (n[u] = null), 
                            T.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, Lt), n[m](), 
                            e.isPropagationStopped() && p.removeEventListener(m, Lt), T.event.triggered = void 0, 
                            a && (n[u] = a)), e.result;
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = T.extend(new T.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        T.event.trigger(r, null, t);
                    }
                }), T.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            T.event.trigger(e, t, this);
                        }));
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return T.event.trigger(e, t, n, !0);
                    }
                });
                var Dt = /\[\]$/, Nt = /\r?\n/g, Pt = /^(?:submit|button|image|reset|file)$/i, $t = /^(?:input|select|textarea|keygen)/i;
                function jt(e, t, n, r) {
                    var o;
                    if (Array.isArray(t)) T.each(t, (function(t, o) {
                        n || Dt.test(e) ? r(e, o) : jt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
                    })); else if (n || "object" !== x(t)) r(e, t); else for (o in t) jt(e + "[" + o + "]", t[o], n, r);
                }
                T.param = function(e, t) {
                    var n, r = [], o = function(e, t) {
                        var n = y(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, (function() {
                        o(this.name, this.value);
                    })); else for (n in e) jt(n, e[n], t, o);
                    return r.join("&");
                }, T.fn.extend({
                    serialize: function() {
                        return T.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = T.prop(this, "elements");
                            return e ? T.makeArray(e) : this;
                        })).filter((function() {
                            var e = this.type;
                            return this.name && !T(this).is(":disabled") && $t.test(this.nodeName) && !Pt.test(e) && (this.checked || !Te.test(e));
                        })).map((function(e, t) {
                            var n = T(this).val();
                            return null == n ? null : Array.isArray(n) ? T.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Nt, "\r\n")
                                };
                            })) : {
                                name: t.name,
                                value: n.replace(Nt, "\r\n")
                            };
                        })).get();
                    }
                });
                var Ft = /%20/g, Bt = /#.*$/, Ht = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ut = /^(?:GET|HEAD)$/, zt = /^\/\//, Wt = {}, Gt = {}, Vt = "*/".concat("*"), Yt = _.createElement("a");
                function Jt(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, o = 0, i = t.toLowerCase().match(V) || [];
                        if (y(n)) for (;r = i[o++]; ) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                    };
                }
                function Xt(e, t, n, r) {
                    var o = {}, i = e === Gt;
                    function s(a) {
                        var c;
                        return o[a] = !0, T.each(e[a] || [], (function(e, a) {
                            var u = a(t, n, r);
                            return "string" != typeof u || i || o[u] ? i ? !(c = u) : void 0 : (t.dataTypes.unshift(u), 
                            s(u), !1);
                        })), c;
                    }
                    return s(t.dataTypes[0]) || !o["*"] && s("*");
                }
                function Kt(e, t) {
                    var n, r, o = T.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && T.extend(!0, e, r), e;
                }
                Yt.href = Rt.href, T.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Rt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Rt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Vt,
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
                            "text json": JSON.parse,
                            "text xml": T.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? Kt(Kt(e, T.ajaxSettings), t) : Kt(T.ajaxSettings, e);
                    },
                    ajaxPrefilter: Jt(Wt),
                    ajaxTransport: Jt(Gt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var n, o, i, s, a, c, u, l, d, p, h = T.ajaxSetup({}, t), f = h.context || h, m = h.context && (f.nodeType || f.jquery) ? T(f) : T.event, g = T.Deferred(), y = T.Callbacks("once memory"), v = h.statusCode || {}, b = {}, S = {}, x = "canceled", w = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (u) {
                                    if (!s) for (s = {}; t = qt.exec(i); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "];
                                }
                                return null == t ? null : t.join(", ");
                            },
                            getAllResponseHeaders: function() {
                                return u ? i : null;
                            },
                            setRequestHeader: function(e, t) {
                                return null == u && (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e, b[e] = t), 
                                this;
                            },
                            overrideMimeType: function(e) {
                                return null == u && (h.mimeType = e), this;
                            },
                            statusCode: function(e) {
                                var t;
                                if (e) if (u) w.always(e[w.status]); else for (t in e) v[t] = [ v[t], e[t] ];
                                return this;
                            },
                            abort: function(e) {
                                var t = e || x;
                                return n && n.abort(t), k(0, t), this;
                            }
                        };
                        if (g.promise(w), h.url = ((e || h.url || Rt.href) + "").replace(zt, Rt.protocol + "//"), 
                        h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(V) || [ "" ], 
                        null == h.crossDomain) {
                            c = _.createElement("a");
                            try {
                                c.href = h.url, c.href = c.href, h.crossDomain = Yt.protocol + "//" + Yt.host != c.protocol + "//" + c.host;
                            } catch (e) {
                                h.crossDomain = !0;
                            }
                        }
                        if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), 
                        Xt(Wt, h, t, w), u) return w;
                        for (d in (l = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), 
                        h.type = h.type.toUpperCase(), h.hasContent = !Ut.test(h.type), o = h.url.replace(Bt, ""), 
                        h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ft, "+")) : (p = h.url.slice(o.length), 
                        h.data && (h.processData || "string" == typeof h.data) && (o += (Ot.test(o) ? "&" : "?") + h.data, 
                        delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), p = (Ot.test(o) ? "&" : "?") + "_=" + Mt.guid++ + p), 
                        h.url = o + p), h.ifModified && (T.lastModified[o] && w.setRequestHeader("If-Modified-Since", T.lastModified[o]), 
                        T.etag[o] && w.setRequestHeader("If-None-Match", T.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && w.setRequestHeader("Content-Type", h.contentType), 
                        w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : h.accepts["*"]), 
                        h.headers) w.setRequestHeader(d, h.headers[d]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(f, w, h) || u)) return w.abort();
                        if (x = "abort", y.add(h.complete), w.done(h.success), w.fail(h.error), n = Xt(Gt, h, t, w)) {
                            if (w.readyState = 1, l && m.trigger("ajaxSend", [ w, h ]), u) return w;
                            h.async && h.timeout > 0 && (a = r.setTimeout((function() {
                                w.abort("timeout");
                            }), h.timeout));
                            try {
                                u = !1, n.send(b, k);
                            } catch (e) {
                                if (u) throw e;
                                k(-1, e);
                            }
                        } else k(-1, "No Transport");
                        function k(e, t, s, c) {
                            var d, p, _, b, S, x = t;
                            u || (u = !0, a && r.clearTimeout(a), n = void 0, i = c || "", w.readyState = e > 0 ? 4 : 0, 
                            d = e >= 200 && e < 300 || 304 === e, s && (b = function(e, t, n) {
                                for (var r, o, i, s, a = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), 
                                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r) for (o in a) if (a[o] && a[o].test(r)) {
                                    c.unshift(o);
                                    break;
                                }
                                if (c[0] in n) i = c[0]; else {
                                    for (o in n) {
                                        if (!c[0] || e.converters[o + " " + c[0]]) {
                                            i = o;
                                            break;
                                        }
                                        s || (s = o);
                                    }
                                    i = i || s;
                                }
                                if (i) return i !== c[0] && c.unshift(i), n[i];
                            }(h, w, s)), !d && T.inArray("script", h.dataTypes) > -1 && T.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), 
                            b = function(e, t, n, r) {
                                var o, i, s, a, c, u = {}, l = e.dataTypes.slice();
                                if (l[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                                for (i = l.shift(); i; ) if (e.responseFields[i] && (n[e.responseFields[i]] = t), 
                                !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = l.shift()) if ("*" === i) i = c; else if ("*" !== c && c !== i) {
                                    if (!(s = u[c + " " + i] || u["* " + i])) for (o in u) if ((a = o.split(" "))[1] === i && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
                                        !0 === s ? s = u[o] : !0 !== u[o] && (i = a[0], l.unshift(a[1]));
                                        break;
                                    }
                                    if (!0 !== s) if (s && e.throws) t = s(t); else try {
                                        t = s(t);
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + c + " to " + i
                                        };
                                    }
                                }
                                return {
                                    state: "success",
                                    data: t
                                };
                            }(h, b, w, d), d ? (h.ifModified && ((S = w.getResponseHeader("Last-Modified")) && (T.lastModified[o] = S), 
                            (S = w.getResponseHeader("etag")) && (T.etag[o] = S)), 204 === e || "HEAD" === h.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = b.state, 
                            p = b.data, d = !(_ = b.error))) : (_ = x, !e && x || (x = "error", e < 0 && (e = 0))), 
                            w.status = e, w.statusText = (t || x) + "", d ? g.resolveWith(f, [ p, x, w ]) : g.rejectWith(f, [ w, x, _ ]), 
                            w.statusCode(v), v = void 0, l && m.trigger(d ? "ajaxSuccess" : "ajaxError", [ w, h, d ? p : _ ]), 
                            y.fireWith(f, [ w, x ]), l && (m.trigger("ajaxComplete", [ w, h ]), --T.active || T.event.trigger("ajaxStop")));
                        }
                        return w;
                    },
                    getJSON: function(e, t, n) {
                        return T.get(e, t, n, "json");
                    },
                    getScript: function(e, t) {
                        return T.get(e, void 0, t, "script");
                    }
                }), T.each([ "get", "post" ], (function(e, t) {
                    T[t] = function(e, n, r, o) {
                        return y(n) && (o = o || r, r = n, n = void 0), T.ajax(T.extend({
                            url: e,
                            type: t,
                            dataType: o,
                            data: n,
                            success: r
                        }, T.isPlainObject(e) && e));
                    };
                })), T.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                })), T._evalUrl = function(e, t, n) {
                    return T.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            T.globalEval(e, t, n);
                        }
                    });
                }, T.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), 
                        this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                            return e;
                        })).append(this)), this;
                    },
                    wrapInner: function(e) {
                        return y(e) ? this.each((function(t) {
                            T(this).wrapInner(e.call(this, t));
                        })) : this.each((function() {
                            var t = T(this), n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e);
                        }));
                    },
                    wrap: function(e) {
                        var t = y(e);
                        return this.each((function(n) {
                            T(this).wrapAll(t ? e.call(this, n) : e);
                        }));
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            T(this).replaceWith(this.childNodes);
                        })), this;
                    }
                }), T.expr.pseudos.hidden = function(e) {
                    return !T.expr.pseudos.visible(e);
                }, T.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }, T.ajaxSettings.xhr = function() {
                    try {
                        return new r.XMLHttpRequest;
                    } catch (e) {}
                };
                var Qt = {
                    0: 200,
                    1223: 204
                }, Zt = T.ajaxSettings.xhr();
                g.cors = !!Zt && "withCredentials" in Zt, g.ajax = Zt = !!Zt, T.ajaxTransport((function(e) {
                    var t, n;
                    if (g.cors || Zt && !e.crossDomain) return {
                        send: function(o, i) {
                            var s, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                            for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), 
                            o) a.setRequestHeader(s, o[s]);
                            t = function(e) {
                                return function() {
                                    t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, 
                                    "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(Qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()));
                                };
                            }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                4 === a.readyState && r.setTimeout((function() {
                                    t && n();
                                }));
                            }, t = t("abort");
                            try {
                                a.send(e.hasContent && e.data || null);
                            } catch (e) {
                                if (t) throw e;
                            }
                        },
                        abort: function() {
                            t && t();
                        }
                    };
                })), T.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1);
                })), T.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return T.globalEval(e), e;
                        }
                    }
                }), T.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                })), T.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(r, o) {
                            t = T("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                            }), _.head.appendChild(t[0]);
                        },
                        abort: function() {
                            n && n();
                        }
                    };
                }));
                var en, tn = [], nn = /(=)\?(?=&|$)|\?\?/;
                T.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = tn.pop() || T.expando + "_" + Mt.guid++;
                        return this[e] = !0, e;
                    }
                }), T.ajaxPrefilter("json jsonp", (function(e, t, n) {
                    var o, i, s, a = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
                    a ? e[a] = e[a].replace(nn, "$1" + o) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), 
                    e.converters["script json"] = function() {
                        return s || T.error(o + " was not called"), s[0];
                    }, e.dataTypes[0] = "json", i = r[o], r[o] = function() {
                        s = arguments;
                    }, n.always((function() {
                        void 0 === i ? T(r).removeProp(o) : r[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, 
                        tn.push(o)), s && y(i) && i(s[0]), s = i = void 0;
                    })), "script";
                })), g.createHTMLDocument = ((en = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
                2 === en.childNodes.length), T.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, 
                    t.head.appendChild(r)) : t = _), i = !n && [], (o = B.exec(e)) ? [ t.createElement(o[1]) ] : (o = Ae([ e ], t, i), 
                    i && i.length && T(i).remove(), T.merge([], o.childNodes)));
                    var r, o, i;
                }, T.fn.load = function(e, t, n) {
                    var r, o, i, s = this, a = e.indexOf(" ");
                    return a > -1 && (r = Tt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 
                    s.length > 0 && T.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        i = arguments, s.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
                    })).always(n && function(e, t) {
                        s.each((function() {
                            n.apply(this, i || [ e.responseText, t, e ]);
                        }));
                    }), this;
                }, T.expr.pseudos.animated = function(e) {
                    return T.grep(T.timers, (function(t) {
                        return e === t.elem;
                    })).length;
                }, T.offset = {
                    setOffset: function(e, t, n) {
                        var r, o, i, s, a, c, u = T.css(e, "position"), l = T(e), d = {};
                        "static" === u && (e.style.position = "relative"), a = l.offset(), i = T.css(e, "top"), 
                        c = T.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + c).indexOf("auto") > -1 ? (s = (r = l.position()).top, 
                        o = r.left) : (s = parseFloat(i) || 0, o = parseFloat(c) || 0), y(t) && (t = t.call(e, n, T.extend({}, a))), 
                        null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), 
                        "using" in t ? t.using.call(e, d) : l.css(d);
                    }
                }, T.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                            T.offset.setOffset(this, e, t);
                        }));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
                        {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0;
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0], o = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect(); else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position"); ) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), 
                                o.left += T.css(e, "borderLeftWidth", !0));
                            }
                            return {
                                top: t.top - o.top - T.css(r, "marginTop", !0),
                                left: t.left - o.left - T.css(r, "marginLeft", !0)
                            };
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === T.css(e, "position"); ) e = e.offsetParent;
                            return e || me;
                        }));
                    }
                }), T.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    T.fn[e] = function(r) {
                        return ee(this, (function(e, r, o) {
                            var i;
                            if (v(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                            i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
                        }), e, r, arguments.length);
                    };
                })), T.each([ "top", "left" ], (function(e, t) {
                    T.cssHooks[t] = et(g.pixelPosition, (function(e, n) {
                        if (n) return n = Ze(e, t), Ye.test(n) ? T(e).position()[t] + "px" : n;
                    }));
                })), T.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    T.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        T.fn[r] = function(o, i) {
                            var s = arguments.length && (n || "boolean" != typeof o), a = n || (!0 === o || !0 === i ? "margin" : "border");
                            return ee(this, (function(t, n, o) {
                                var i;
                                return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
                                Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? T.css(t, n, a) : T.style(t, n, o, a);
                            }), t, s ? o : void 0, s);
                        };
                    }));
                })), T.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(e, t) {
                    T.fn[t] = function(e) {
                        return this.on(t, e);
                    };
                })), T.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r);
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                    hover: function(e, t) {
                        return this.on("mouseenter", e).on("mouseleave", t || e);
                    }
                }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    T.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                }));
                var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                T.proxy = function(e, t) {
                    var n, r, o;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = a.call(arguments, 2), 
                    (o = function() {
                        return e.apply(t || this, r.concat(a.call(arguments)));
                    }).guid = e.guid = e.guid || T.guid++, o;
                }, T.holdReady = function(e) {
                    e ? T.readyWait++ : T.ready(!0);
                }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = C, T.isFunction = y, 
                T.isWindow = v, T.camelCase = oe, T.type = x, T.now = Date.now, T.isNumeric = function(e) {
                    var t = T.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }, T.trim = function(e) {
                    return null == e ? "" : (e + "").replace(rn, "$1");
                }, void 0 === (n = function() {
                    return T;
                }.apply(t, [])) || (e.exports = n);
                var on = r.jQuery, sn = r.$;
                return T.noConflict = function(e) {
                    return r.$ === T && (r.$ = sn), e && r.jQuery === T && (r.jQuery = on), T;
                }, void 0 === o && (r.jQuery = r.$ = T), T;
            }));
        }
    }, t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports;
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t;
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        });
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), n.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
        }
    }), e), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, (() => {
        "use strict";
        var e = {};
        n.r(e), n.d(e, {
            FunctionToString: () => _n,
            InboundFilters: () => hn,
            LinkedErrors: () => ki
        });
        var t = {};
        n.r(t), n.d(t, {
            Breadcrumbs: () => Zr,
            Dedupe: () => no,
            GlobalHandlers: () => go,
            HttpContext: () => xo,
            LinkedErrors: () => Ro,
            TryCatch: () => Lo
        });
        var r = {};
        n.r(r), n.d(r, {
            Breadcrumbs: () => Zr,
            BrowserClient: () => Ir,
            BrowserProfilingIntegration: () => Af,
            BrowserTracing: () => Bh,
            Dedupe: () => no,
            Feedback: () => Mp,
            FunctionToString: () => _n,
            GlobalHandlers: () => go,
            HttpContext: () => xo,
            Hub: () => ct,
            InboundFilters: () => hn,
            Integrations: () => Df,
            LinkedErrors: () => Ro,
            ModuleMetadata: () => Oi,
            Replay: () => vd,
            ReplayCanvas: () => Xd,
            SDK_VERSION: () => it,
            SEMANTIC_ATTRIBUTE_SENTRY_OP: () => Di,
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => Ni,
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => Li,
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => Ai,
            Scope: () => rt,
            TryCatch: () => Lo,
            WINDOW: () => wr,
            addBreadcrumb: () => Nt,
            addEventProcessor: () => lr,
            addGlobalEventProcessor: () => Se,
            addIntegration: () => an,
            addTracingExtensions: () => ys,
            breadcrumbsIntegration: () => Qr,
            browserApiErrorsIntegration: () => Ao,
            browserProfilingIntegration: () => Of,
            browserTracingIntegration: () => zh,
            captureConsoleIntegration: () => Ap,
            captureEvent: () => Lt,
            captureException: () => Ot,
            captureMessage: () => At,
            captureSession: () => tn,
            captureUserFeedback: () => bi,
            chromeStackLineParser: () => qo,
            close: () => Vt,
            configureScope: () => Dt,
            contextLinesIntegration: () => Np,
            continueTrace: () => Vi,
            createTransport: () => ai,
            createUserFeedbackEnvelope: () => Cr,
            debugIntegration: () => $p,
            dedupeIntegration: () => Bp,
            defaultIntegrations: () => hi,
            defaultRequestInstrumentationOptions: () => Dh,
            defaultStackLineParsers: () => Qo,
            defaultStackParser: () => Zo,
            endSession: () => Zt,
            eventFromException: () => vr,
            eventFromMessage: () => _r,
            exceptionFromError: () => hr,
            extraErrorDataIntegration: () => Gp,
            extractTraceparentData: () => $i,
            feedbackIntegration: () => Rp,
            flush: () => Gt,
            forceLoad: () => yi,
            functionToStringIntegration: () => vn,
            geckoStackLineParser: () => Wo,
            getActiveSpan: () => Gi,
            getActiveTransaction: () => Pi,
            getClient: () => Jt,
            getCurrentHub: () => dt,
            getCurrentScope: () => Kt,
            getDefaultIntegrations: () => fi,
            getHubFromCarrier: () => gt,
            getReplay: () => bd,
            getSpanStatusFromHttpCode: () => ns,
            globalHandlersIntegration: () => mo,
            httpClientIntegration: () => Yp,
            httpContextIntegration: () => So,
            inboundFiltersIntegration: () => pn,
            init: () => mi,
            instrumentOutgoingRequests: () => Nh,
            isInitialized: () => Xt,
            lastEventId: () => Yt,
            linkedErrorsIntegration: () => Io,
            makeBrowserOfflineTransport: () => of,
            makeFetchTransport: () => li,
            makeMain: () => lt,
            makeMultiplexedTransport: () => _s,
            makeXHRTransport: () => pi,
            metrics: () => Ts,
            moduleMetadataIntegration: () => Mi,
            onLoad: () => vi,
            onProfilingStartRouteTransaction: () => If,
            opera10StackLineParser: () => Jo,
            opera11StackLineParser: () => Ko,
            parameterize: () => Es,
            replayCanvasIntegration: () => Jd,
            replayIntegration: () => yd,
            reportingObserverIntegration: () => rh,
            rewriteFramesIntegration: () => lh,
            sendFeedback: () => ap,
            sessionTimingIntegration: () => ph,
            setContext: () => Pt,
            setCurrentClient: () => bn,
            setExtra: () => jt,
            setExtras: () => $t,
            setHttpStatus: () => os,
            setMeasurement: () => Cs,
            setTag: () => Bt,
            setTags: () => Ft,
            setUser: () => Ht,
            showReportDialog: () => gi,
            spanStatusfromHttpCode: () => rs,
            startBrowserTracingNavigationSpan: () => Gh,
            startBrowserTracingPageLoadSpan: () => Wh,
            startInactiveSpan: () => Wi,
            startSession: () => Qt,
            startSpan: () => Ui,
            startSpanManual: () => zi,
            startTransaction: () => Wt,
            trace: () => qi,
            winjsStackLineParser: () => Vo,
            withActiveSpan: () => zt,
            withIsolationScope: () => Ut,
            withScope: () => qt,
            wrap: () => _i
        });
        var o = n(638), i = n.n(o);
        function s(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== l(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t);
                        if ("object" !== l(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e, "string");
                return "symbol" === l(t) ? t : String(t);
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a() {
            a = function() {
                return e;
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
                e[t] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t];
            }
            try {
                u({}, "");
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n;
                };
            }
            function d(e, t, n, o) {
                var i = t && t.prototype instanceof f ? t : f, s = Object.create(i.prototype), a = new C(o || []);
                return r(s, "_invoke", {
                    value: w(e, n, a)
                }), s;
            }
            function p(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            e.wrap = d;
            var h = {};
            function f() {}
            function m() {}
            function g() {}
            var y = {};
            u(y, i, (function() {
                return this;
            }));
            var v = Object.getPrototypeOf, _ = v && v(v(I([])));
            _ && _ !== t && n.call(_, i) && (y = _);
            var b = g.prototype = f.prototype = Object.create(y);
            function S(e) {
                [ "next", "throw", "return" ].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e);
                    }));
                }));
            }
            function x(e, t) {
                function o(r, i, s, a) {
                    var c = p(e[r], e, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == l(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            o("next", e, s, a);
                        }), (function(e) {
                            o("throw", e, s, a);
                        })) : t.resolve(d).then((function(e) {
                            u.value = e, s(u);
                        }), (function(e) {
                            return o("throw", e, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(e, n) {
                        function r() {
                            return new t((function(t, r) {
                                o(e, n, t, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = k(s, n);
                            if (a) {
                                if (a === h) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = p(e, t, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function k(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", 
                t.arg = void 0, k(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", 
                t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
                var o = p(r, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                h;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, h);
            }
            function T(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function E(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function C(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(T, this), this.reset(!0);
            }
            function I(e) {
                if (e) {
                    var t = e[i];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function t() {
                            for (;++r < e.length; ) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: R
                };
            }
            function R() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return m.prototype = g, r(b, "constructor", {
                value: g,
                configurable: !0
            }), r(g, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, u(e, c, "GeneratorFunction")), 
                e.prototype = Object.create(b), e;
            }, e.awrap = function(e) {
                return {
                    __await: e
                };
            }, S(x.prototype), u(x.prototype, s, (function() {
                return this;
            })), e.AsyncIterator = x, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new x(d(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                    return e.done ? e.value : s.next();
                }));
            }, S(b), u(b, c, "Generator"), u(b, i, (function() {
                return this;
            })), u(b, "toString", (function() {
                return "[object Generator]";
            })), e.keys = function(e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e;
                    }
                    return e.done = !0, e;
                };
            }, e.values = I, C.prototype = {
                constructor: C,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), 
                    !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                    h) : this.complete(s);
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                    h;
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), h;
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                E(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), h;
                }
            }, e;
        }
        function c(e, t, n, r, o, i, s) {
            try {
                var a = e[i](s), c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function u(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = e.apply(t, n);
                    function s(e) {
                        c(i, r, o, s, a, "next", e);
                    }
                    function a(e) {
                        c(i, r, o, s, a, "throw", e);
                    }
                    s(void 0);
                }));
            };
        }
        function l(e) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        var d = self.browser instanceof Object && null !== self.browser && "object" === l(self.browser.runtime) ? self.browser : self.chrome, p = (d.declarativeNetRequest, 
        d.i18n, d.runtime);
        function h(e) {
            return new Promise((function(t, n) {
                var r = 5;
                !function o() {
                    p.sendMessage(e).then((function(e) {
                        t(e);
                    })).catch((function(e) {
                        (r -= 1) <= 0 ? n(e) : setTimeout(o, 200);
                    }));
                }();
            }));
        }
        function f(e) {
            return m.apply(this, arguments);
        }
        function m() {
            return (m = u(a().mark((function e(t) {
                var n, r;
                return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (d.storage instanceof Object != 0) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (d.storage.local instanceof Object != 0) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return e.prev = 4, e.next = 7, d.storage.local.get(t);

                      case 7:
                        if ((n = e.sent) instanceof Object != 0) {
                            e.next = 10;
                            break;
                        }
                        return e.abrupt("return");

                      case 10:
                        return r = void 0 === n[t] ? "darkTheme" !== t && ("modeLevel" === t ? 1 : "userRules" === t || "allowlist" === t ? [] : "safeSearch" === t || void 0) : n[t], 
                        e.abrupt("return", r);

                      case 14:
                        e.prev = 14, e.t0 = e.catch(4);

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }), e, null, [ [ 4, 14 ] ]);
            })))).apply(this, arguments);
        }
        function g(e, t) {
            return y.apply(this, arguments);
        }
        function y() {
            return (y = u(a().mark((function e(t, n) {
                return a().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (d.storage instanceof Object != 0) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        if (d.storage.local instanceof Object != 0) {
                            e.next = 4;
                            break;
                        }
                        return e.abrupt("return");

                      case 4:
                        return e.abrupt("return", d.storage.local.set(s({}, t, n)));

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }), e);
            })))).apply(this, arguments);
        }
        const v = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function _(e) {
            return e && e.Math == Math ? e : void 0;
        }
        const b = "object" == typeof globalThis && _(globalThis) || "object" == typeof window && _(window) || "object" == typeof self && _(self) || "object" == typeof n.g && _(n.g) || function() {
            return this;
        }() || {};
        function S() {
            return b;
        }
        function x(e, t, n) {
            const r = n || b, o = r.__SENTRY__ = r.__SENTRY__ || {};
            return o[e] || (o[e] = t());
        }
        const w = [ "debug", "info", "warn", "error", "log", "assert", "trace" ], k = {};
        function T(e) {
            if (!("console" in b)) return e();
            const t = b.console, n = {}, r = Object.keys(k);
            r.forEach((e => {
                const r = k[e];
                n[e] = t[e], t[e] = r;
            }));
            try {
                return e();
            } finally {
                r.forEach((e => {
                    t[e] = n[e];
                }));
            }
        }
        const E = function() {
            let e = !1;
            const t = {
                enable: () => {
                    e = !0;
                },
                disable: () => {
                    e = !1;
                },
                isEnabled: () => e
            };
            return v ? w.forEach((n => {
                t[n] = (...t) => {
                    e && T((() => {
                        b.console[n](`Sentry Logger [${n}]:`, ...t);
                    }));
                };
            })) : w.forEach((e => {
                t[e] = () => {};
            })), t;
        }(), C = Object.prototype.toString;
        function I(e) {
            switch (C.call(e)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;

              default:
                return F(e, Error);
            }
        }
        function R(e, t) {
            return C.call(e) === `[object ${t}]`;
        }
        function M(e) {
            return R(e, "ErrorEvent");
        }
        function O(e) {
            return R(e, "DOMError");
        }
        function A(e) {
            return R(e, "String");
        }
        function L(e) {
            return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
        }
        function D(e) {
            return null === e || L(e) || "object" != typeof e && "function" != typeof e;
        }
        function N(e) {
            return R(e, "Object");
        }
        function P(e) {
            return "undefined" != typeof Event && F(e, Event);
        }
        function $(e) {
            return Boolean(e && e.then && "function" == typeof e.then);
        }
        function j(e) {
            return "number" == typeof e && e != e;
        }
        function F(e, t) {
            try {
                return e instanceof t;
            } catch (e) {
                return !1;
            }
        }
        function B(e) {
            return !("object" != typeof e || null === e || !e.__isVue && !e._isVue);
        }
        const H = S();
        function U(e, t = {}) {
            if (!e) return "<unknown>";
            try {
                let n = e;
                const r = 5, o = [];
                let i = 0, s = 0;
                const a = " > ", c = a.length;
                let u;
                const l = Array.isArray(t) ? t : t.keyAttrs, d = !Array.isArray(t) && t.maxStringLength || 80;
                for (;n && i++ < r && (u = z(n, l), !("html" === u || i > 1 && s + o.length * c + u.length >= d)); ) o.push(u), 
                s += u.length, n = n.parentNode;
                return o.reverse().join(a);
            } catch (e) {
                return "<unknown>";
            }
        }
        function z(e, t) {
            const n = e, r = [];
            let o, i, s, a, c;
            if (!n || !n.tagName) return "";
            if (H.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent) return n.dataset.sentryComponent;
            r.push(n.tagName.toLowerCase());
            const u = t && t.length ? t.filter((e => n.getAttribute(e))).map((e => [ e, n.getAttribute(e) ])) : null;
            if (u && u.length) u.forEach((e => {
                r.push(`[${e[0]}="${e[1]}"]`);
            })); else if (n.id && r.push(`#${n.id}`), o = n.className, o && A(o)) for (i = o.split(/\s+/), 
            c = 0; c < i.length; c++) r.push(`.${i[c]}`);
            const l = [ "aria-label", "type", "name", "title", "alt" ];
            for (c = 0; c < l.length; c++) s = l[c], a = n.getAttribute(s), a && r.push(`[${s}="${a}"]`);
            return r.join("");
        }
        function W() {
            try {
                return H.document.location.href;
            } catch (e) {
                return "";
            }
        }
        function G(e) {
            return H.document && H.document.querySelector ? H.document.querySelector(e) : null;
        }
        function V(e) {
            if (!H.HTMLElement) return null;
            let t = e;
            for (let e = 0; e < 5; e++) {
                if (!t) return null;
                if (t instanceof HTMLElement && t.dataset.sentryComponent) return t.dataset.sentryComponent;
                t = t.parentNode;
            }
            return null;
        }
        function Y(e, t = 0) {
            return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
        }
        function J(e, t) {
            let n = e;
            const r = n.length;
            if (r <= 150) return n;
            t > r && (t = r);
            let o = Math.max(t - 60, 0);
            o < 5 && (o = 0);
            let i = Math.min(o + 140, r);
            return i > r - 5 && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), 
            o > 0 && (n = `'{snip} ${n}`), i < r && (n += " {snip}"), n;
        }
        function X(e, t) {
            if (!Array.isArray(e)) return "";
            const n = [];
            for (let t = 0; t < e.length; t++) {
                const r = e[t];
                try {
                    B(r) ? n.push("[VueViewModel]") : n.push(String(r));
                } catch (e) {
                    n.push("[value cannot be serialized]");
                }
            }
            return n.join(t);
        }
        function Q(e, t = [], n = !1) {
            return t.some((t => function(e, t, n = !1) {
                return !!A(e) && (R(t, "RegExp") ? t.test(e) : !!A(t) && (n ? e === t : e.includes(t)));
            }(e, t, n)));
        }
        function Z(e, t, n) {
            if (!(t in e)) return;
            const r = e[t], o = n(r);
            "function" == typeof o && te(o, r), e[t] = o;
        }
        function ee(e, t, n) {
            try {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                });
            } catch (n) {
                v && E.log(`Failed to add non-enumerable property "${t}" to object`, e);
            }
        }
        function te(e, t) {
            try {
                const n = t.prototype || {};
                e.prototype = t.prototype = n, ee(e, "__sentry_original__", t);
            } catch (e) {}
        }
        function ne(e) {
            return e.__sentry_original__;
        }
        function re(e) {
            if (I(e)) return {
                message: e.message,
                name: e.name,
                stack: e.stack,
                ...ie(e)
            };
            if (P(e)) {
                const t = {
                    type: e.type,
                    target: oe(e.target),
                    currentTarget: oe(e.currentTarget),
                    ...ie(e)
                };
                return "undefined" != typeof CustomEvent && F(e, CustomEvent) && (t.detail = e.detail), 
                t;
            }
            return e;
        }
        function oe(e) {
            try {
                return "undefined" != typeof Element && F(e, Element) ? U(e) : Object.prototype.toString.call(e);
            } catch (e) {
                return "<unknown>";
            }
        }
        function ie(e) {
            if ("object" == typeof e && null !== e) {
                const t = {};
                for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t;
            }
            return {};
        }
        function se(e) {
            return ae(e, new Map);
        }
        function ae(e, t) {
            if (function(e) {
                if (!N(e)) return !1;
                try {
                    const t = Object.getPrototypeOf(e).constructor.name;
                    return !t || "Object" === t;
                } catch (e) {
                    return !0;
                }
            }(e)) {
                const n = t.get(e);
                if (void 0 !== n) return n;
                const r = {};
                t.set(e, r);
                for (const n of Object.keys(e)) void 0 !== e[n] && (r[n] = ae(e[n], t));
                return r;
            }
            if (Array.isArray(e)) {
                const n = t.get(e);
                if (void 0 !== n) return n;
                const r = [];
                return t.set(e, r), e.forEach((e => {
                    r.push(ae(e, t));
                })), r;
            }
            return e;
        }
        function ce() {
            const e = b, t = e.crypto || e.msCrypto;
            let n = () => 16 * Math.random();
            try {
                if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
                t && t.getRandomValues && (n = () => {
                    const e = new Uint8Array(1);
                    return t.getRandomValues(e), e[0];
                });
            } catch (e) {}
            return ([ 1e7 ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (e => (e ^ (15 & n()) >> e / 4).toString(16)));
        }
        function ue(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0;
        }
        function le(e) {
            const {message: t, event_id: n} = e;
            if (t) return t;
            const r = ue(e);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
        }
        function de(e, t, n) {
            const r = e.exception = e.exception || {}, o = r.values = r.values || [], i = o[0] = o[0] || {};
            i.value || (i.value = t || ""), i.type || (i.type = n || "Error");
        }
        function pe(e, t) {
            const n = ue(e);
            if (!n) return;
            const r = n.mechanism;
            if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...t
            }, t && "data" in t) {
                const e = {
                    ...r && r.data,
                    ...t.data
                };
                n.mechanism.data = e;
            }
        }
        function he(e) {
            if (e && e.__sentry_captured__) return !0;
            try {
                ee(e, "__sentry_captured__", !0);
            } catch (e) {}
            return !1;
        }
        function fe(e) {
            return Array.isArray(e) ? e : [ e ];
        }
        const me = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        var ge;
        function ye(e) {
            return new _e((t => {
                t(e);
            }));
        }
        function ve(e) {
            return new _e(((t, n) => {
                n(e);
            }));
        }
        !function(e) {
            e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED";
        }(ge || (ge = {}));
        class _e {
            constructor(e) {
                _e.prototype.__init.call(this), _e.prototype.__init2.call(this), _e.prototype.__init3.call(this), 
                _e.prototype.__init4.call(this), this._state = ge.PENDING, this._handlers = [];
                try {
                    e(this._resolve, this._reject);
                } catch (e) {
                    this._reject(e);
                }
            }
            then(e, t) {
                return new _e(((n, r) => {
                    this._handlers.push([ !1, t => {
                        if (e) try {
                            n(e(t));
                        } catch (e) {
                            r(e);
                        } else n(t);
                    }, e => {
                        if (t) try {
                            n(t(e));
                        } catch (e) {
                            r(e);
                        } else r(e);
                    } ]), this._executeHandlers();
                }));
            }
            catch(e) {
                return this.then((e => e), e);
            }
            finally(e) {
                return new _e(((t, n) => {
                    let r, o;
                    return this.then((t => {
                        o = !1, r = t, e && e();
                    }), (t => {
                        o = !0, r = t, e && e();
                    })).then((() => {
                        o ? n(r) : t(r);
                    }));
                }));
            }
            __init() {
                this._resolve = e => {
                    this._setResult(ge.RESOLVED, e);
                };
            }
            __init2() {
                this._reject = e => {
                    this._setResult(ge.REJECTED, e);
                };
            }
            __init3() {
                this._setResult = (e, t) => {
                    this._state === ge.PENDING && ($(t) ? t.then(this._resolve, this._reject) : (this._state = e, 
                    this._value = t, this._executeHandlers()));
                };
            }
            __init4() {
                this._executeHandlers = () => {
                    if (this._state === ge.PENDING) return;
                    const e = this._handlers.slice();
                    this._handlers = [], e.forEach((e => {
                        e[0] || (this._state === ge.RESOLVED && e[1](this._value), this._state === ge.REJECTED && e[2](this._value), 
                        e[0] = !0);
                    }));
                };
            }
        }
        function be() {
            return x("globalEventProcessors", (() => []));
        }
        function Se(e) {
            be().push(e);
        }
        function xe(e, t, n, r = 0) {
            return new _e(((o, i) => {
                const s = e[r];
                if (null === t || "function" != typeof s) o(t); else {
                    const a = s({
                        ...t
                    }, n);
                    me && s.id && null === a && E.log(`Event processor "${s.id}" dropped event`), $(a) ? a.then((t => xe(e, t, n, r + 1).then(o))).then(null, i) : xe(e, a, n, r + 1).then(o).then(null, i);
                }
            }));
        }
        const we = "production";
        function Te() {
            return Date.now() / 1e3;
        }
        const Ee = function() {
            const {performance: e} = b;
            if (!e || !e.now) return Te;
            const t = Date.now() - e.now(), n = null == e.timeOrigin ? t : e.timeOrigin;
            return () => (n + e.now()) / 1e3;
        }();
        let Ce;
        const Ie = (() => {
            const {performance: e} = b;
            if (!e || !e.now) return void (Ce = "none");
            const t = 36e5, n = e.now(), r = Date.now(), o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t, i = o < t, s = e.timing && e.timing.navigationStart, a = "number" == typeof s ? Math.abs(s + n - r) : t;
            return i || a < t ? o <= a ? (Ce = "timeOrigin", e.timeOrigin) : (Ce = "navigationStart", 
            s) : (Ce = "dateNow", r);
        })();
        function Re(e) {
            const t = Ee(), n = {
                sid: ce(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => function(e) {
                    return se({
                        sid: `${e.sid}`,
                        init: e.init,
                        started: new Date(1e3 * e.started).toISOString(),
                        timestamp: new Date(1e3 * e.timestamp).toISOString(),
                        status: e.status,
                        errors: e.errors,
                        did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                        duration: e.duration,
                        abnormal_mechanism: e.abnormal_mechanism,
                        attrs: {
                            release: e.release,
                            environment: e.environment,
                            ip_address: e.ipAddress,
                            user_agent: e.userAgent
                        }
                    });
                }(n)
            };
            return e && Me(n, e), n;
        }
        function Me(e, t = {}) {
            if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), 
            e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || Ee(), 
            t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), 
            t.sid && (e.sid = 32 === t.sid.length ? t.sid : ce()), void 0 !== t.init && (e.init = t.init), 
            !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), 
            e.ignoreDuration) e.duration = void 0; else if ("number" == typeof t.duration) e.duration = t.duration; else {
                const t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0;
            }
            t.release && (e.release = t.release), t.environment && (e.environment = t.environment), 
            !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), 
            "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status);
        }
        function Oe(e, t) {
            let n = {};
            t ? n = {
                status: t
            } : "ok" === e.status && (n = {
                status: "exited"
            }), Me(e, n);
        }
        function Ae(e) {
            return e.transaction;
        }
        const Le = "baggage", De = "sentry-", Ne = /^sentry-/;
        function $e(e) {
            if (!A(e) && !Array.isArray(e)) return;
            let t = {};
            if (Array.isArray(e)) t = e.reduce(((e, t) => {
                const n = Fe(t);
                for (const t of Object.keys(n)) e[t] = n[t];
                return e;
            }), {}); else {
                if (!e) return;
                t = Fe(e);
            }
            const n = Object.entries(t).reduce(((e, [t, n]) => (t.match(Ne) && (e[t.slice(De.length)] = n), 
            e)), {});
            return Object.keys(n).length > 0 ? n : void 0;
        }
        function je(e) {
            if (e) return function(e) {
                if (0 !== Object.keys(e).length) return Object.entries(e).reduce(((e, [t, n], r) => {
                    const o = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`, i = 0 === r ? o : `${e},${o}`;
                    return i.length > 8192 ? (v && E.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), 
                    e) : i;
                }), "");
            }(Object.entries(e).reduce(((e, [t, n]) => (n && (e[`${De}${t}`] = n), e)), {}));
        }
        function Fe(e) {
            return e.split(",").map((e => e.split("=").map((e => decodeURIComponent(e.trim()))))).reduce(((e, [t, n]) => (e[t] = n, 
            e)), {});
        }
        const Be = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
        function He(e) {
            if (!e) return;
            const t = e.match(Be);
            if (!t) return;
            let n;
            return "1" === t[3] ? n = !0 : "0" === t[3] && (n = !1), {
                traceId: t[1],
                parentSampled: n,
                parentSpanId: t[2]
            };
        }
        function qe(e, t) {
            const n = He(e), r = $e(t), {traceId: o, parentSpanId: i, parentSampled: s} = n || {};
            return n ? {
                traceId: o || ce(),
                parentSpanId: i || ce().substring(16),
                spanId: ce().substring(16),
                sampled: s,
                dsc: r || {}
            } : {
                traceId: o || ce(),
                spanId: ce().substring(16)
            };
        }
        function Ue(e = ce(), t = ce().substring(16), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
        }
        function We(e) {
            const {spanId: t, traceId: n} = e.spanContext(), {data: r, op: o, parent_span_id: i, status: s, tags: a, origin: c} = Je(e);
            return se({
                data: r,
                op: o,
                parent_span_id: i,
                span_id: t,
                status: s,
                tags: a,
                trace_id: n,
                origin: c
            });
        }
        function Ge(e) {
            const {traceId: t, spanId: n} = e.spanContext();
            return Ue(t, n, Xe(e));
        }
        function Ve(e) {
            return "number" == typeof e ? Ye(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Ye(e.getTime()) : Ee();
        }
        function Ye(e) {
            return e > 9999999999 ? e / 1e3 : e;
        }
        function Je(e) {
            return function(e) {
                return "function" == typeof e.getSpanJSON;
            }(e) ? e.getSpanJSON() : "function" == typeof e.toJSON ? e.toJSON() : {};
        }
        function Xe(e) {
            const {traceFlags: t} = e.spanContext();
            return Boolean(1 & t);
        }
        function Ke(e, t, n) {
            const r = t.getOptions(), {publicKey: o} = t.getDsn() || {}, {segment: i} = n && n.getUser() || {}, s = se({
                environment: r.environment || we,
                release: r.release,
                user_segment: i,
                public_key: o,
                trace_id: e
            });
            return t.emit && t.emit("createDsc", s), s;
        }
        function Qe(e) {
            const t = Jt();
            if (!t) return {};
            const n = Ke(Je(e).trace_id || "", t, Kt()), r = Ae(e);
            if (!r) return n;
            const o = r && r._frozenDynamicSamplingContext;
            if (o) return o;
            const {sampleRate: i, source: s} = r.metadata;
            null != i && (n.sample_rate = `${i}`);
            const a = Je(r);
            return s && "url" !== s && (n.transaction = a.description), n.sampled = String(Xe(r)), 
            t.emit && t.emit("createDsc", n), n;
        }
        function Ze(e, t) {
            const {fingerprint: n, span: r, breadcrumbs: o, sdkProcessingMetadata: i} = t;
            !function(e, t) {
                const {extra: n, tags: r, user: o, contexts: i, level: s, transactionName: a} = t, c = se(n);
                c && Object.keys(c).length && (e.extra = {
                    ...c,
                    ...e.extra
                });
                const u = se(r);
                u && Object.keys(u).length && (e.tags = {
                    ...u,
                    ...e.tags
                });
                const l = se(o);
                l && Object.keys(l).length && (e.user = {
                    ...l,
                    ...e.user
                });
                const d = se(i);
                d && Object.keys(d).length && (e.contexts = {
                    ...d,
                    ...e.contexts
                }), s && (e.level = s), a && (e.transaction = a);
            }(e, t), r && function(e, t) {
                e.contexts = {
                    trace: We(t),
                    ...e.contexts
                };
                const n = Ae(t);
                if (n) {
                    e.sdkProcessingMetadata = {
                        dynamicSamplingContext: Qe(t),
                        ...e.sdkProcessingMetadata
                    };
                    const r = Je(n).description;
                    r && (e.tags = {
                        transaction: r,
                        ...e.tags
                    });
                }
            }(e, r), function(e, t) {
                e.fingerprint = e.fingerprint ? fe(e.fingerprint) : [], t && (e.fingerprint = e.fingerprint.concat(t)), 
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
            }(e, n), function(e, t) {
                const n = [ ...e.breadcrumbs || [], ...t ];
                e.breadcrumbs = n.length ? n : void 0;
            }(e, o), function(e, t) {
                e.sdkProcessingMetadata = {
                    ...e.sdkProcessingMetadata,
                    ...t
                };
            }(e, i);
        }
        function et(e, t) {
            const {extra: n, tags: r, user: o, contexts: i, level: s, sdkProcessingMetadata: a, breadcrumbs: c, fingerprint: u, eventProcessors: l, attachments: d, propagationContext: p, transactionName: h, span: f} = t;
            tt(e, "extra", n), tt(e, "tags", r), tt(e, "user", o), tt(e, "contexts", i), tt(e, "sdkProcessingMetadata", a), 
            s && (e.level = s), h && (e.transactionName = h), f && (e.span = f), c.length && (e.breadcrumbs = [ ...e.breadcrumbs, ...c ]), 
            u.length && (e.fingerprint = [ ...e.fingerprint, ...u ]), l.length && (e.eventProcessors = [ ...e.eventProcessors, ...l ]), 
            d.length && (e.attachments = [ ...e.attachments, ...d ]), e.propagationContext = {
                ...e.propagationContext,
                ...p
            };
        }
        function tt(e, t, n) {
            if (n && Object.keys(n).length) {
                e[t] = {
                    ...e[t]
                };
                for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r]);
            }
        }
        let nt;
        class rt {
            constructor() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], 
                this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, 
                this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = ot();
            }
            static clone(e) {
                return e ? e.clone() : new rt;
            }
            clone() {
                const e = new rt;
                return e._breadcrumbs = [ ...this._breadcrumbs ], e._tags = {
                    ...this._tags
                }, e._extra = {
                    ...this._extra
                }, e._contexts = {
                    ...this._contexts
                }, e._user = this._user, e._level = this._level, e._span = this._span, e._session = this._session, 
                e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, 
                e._eventProcessors = [ ...this._eventProcessors ], e._requestSession = this._requestSession, 
                e._attachments = [ ...this._attachments ], e._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata
                }, e._propagationContext = {
                    ...this._propagationContext
                }, e._client = this._client, e;
            }
            setClient(e) {
                this._client = e;
            }
            getClient() {
                return this._client;
            }
            addScopeListener(e) {
                this._scopeListeners.push(e);
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e), this;
            }
            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    segment: void 0,
                    username: void 0
                }, this._session && Me(this._session, {
                    user: e
                }), this._notifyScopeListeners(), this;
            }
            getUser() {
                return this._user;
            }
            getRequestSession() {
                return this._requestSession;
            }
            setRequestSession(e) {
                return this._requestSession = e, this;
            }
            setTags(e) {
                return this._tags = {
                    ...this._tags,
                    ...e
                }, this._notifyScopeListeners(), this;
            }
            setTag(e, t) {
                return this._tags = {
                    ...this._tags,
                    [e]: t
                }, this._notifyScopeListeners(), this;
            }
            setExtras(e) {
                return this._extra = {
                    ...this._extra,
                    ...e
                }, this._notifyScopeListeners(), this;
            }
            setExtra(e, t) {
                return this._extra = {
                    ...this._extra,
                    [e]: t
                }, this._notifyScopeListeners(), this;
            }
            setFingerprint(e) {
                return this._fingerprint = e, this._notifyScopeListeners(), this;
            }
            setLevel(e) {
                return this._level = e, this._notifyScopeListeners(), this;
            }
            setTransactionName(e) {
                return this._transactionName = e, this._notifyScopeListeners(), this;
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), 
                this;
            }
            setSpan(e) {
                return this._span = e, this._notifyScopeListeners(), this;
            }
            getSpan() {
                return this._span;
            }
            getTransaction() {
                const e = this._span;
                return e && e.transaction;
            }
            setSession(e) {
                return e ? this._session = e : delete this._session, this._notifyScopeListeners(), 
                this;
            }
            getSession() {
                return this._session;
            }
            update(e) {
                if (!e) return this;
                const t = "function" == typeof e ? e(this) : e;
                if (t instanceof rt) {
                    const e = t.getScopeData();
                    this._tags = {
                        ...this._tags,
                        ...e.tags
                    }, this._extra = {
                        ...this._extra,
                        ...e.extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...e.contexts
                    }, e.user && Object.keys(e.user).length && (this._user = e.user), e.level && (this._level = e.level), 
                    e.fingerprint.length && (this._fingerprint = e.fingerprint), t.getRequestSession() && (this._requestSession = t.getRequestSession()), 
                    e.propagationContext && (this._propagationContext = e.propagationContext);
                } else if (N(t)) {
                    const t = e;
                    this._tags = {
                        ...this._tags,
                        ...t.tags
                    }, this._extra = {
                        ...this._extra,
                        ...t.extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...t.contexts
                    }, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), 
                    t.requestSession && (this._requestSession = t.requestSession), t.propagationContext && (this._propagationContext = t.propagationContext);
                }
                return this;
            }
            clear() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, 
                this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, 
                this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), 
                this._attachments = [], this._propagationContext = ot(), this;
            }
            addBreadcrumb(e, t) {
                const n = "number" == typeof t ? t : 100;
                if (n <= 0) return this;
                const r = {
                    timestamp: Te(),
                    ...e
                }, o = this._breadcrumbs;
                return o.push(r), this._breadcrumbs = o.length > n ? o.slice(-n) : o, this._notifyScopeListeners(), 
                this;
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1];
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this;
            }
            addAttachment(e) {
                return this._attachments.push(e), this;
            }
            getAttachments() {
                return this.getScopeData().attachments;
            }
            clearAttachments() {
                return this._attachments = [], this;
            }
            getScopeData() {
                const {_breadcrumbs: e, _attachments: t, _contexts: n, _tags: r, _extra: o, _user: i, _level: s, _fingerprint: a, _eventProcessors: c, _propagationContext: u, _sdkProcessingMetadata: l, _transactionName: d, _span: p} = this;
                return {
                    breadcrumbs: e,
                    attachments: t,
                    contexts: n,
                    tags: r,
                    extra: o,
                    user: i,
                    level: s,
                    fingerprint: a || [],
                    eventProcessors: c,
                    propagationContext: u,
                    sdkProcessingMetadata: l,
                    transactionName: d,
                    span: p
                };
            }
            applyToEvent(e, t = {}, n = []) {
                return Ze(e, this.getScopeData()), xe([ ...n, ...be(), ...this._eventProcessors ], e, t);
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata,
                    ...e
                }, this;
            }
            setPropagationContext(e) {
                return this._propagationContext = e, this;
            }
            getPropagationContext() {
                return this._propagationContext;
            }
            captureException(e, t) {
                const n = t && t.event_id ? t.event_id : ce();
                if (!this._client) return E.warn("No client configured on scope - will not capture exception!"), 
                n;
                const r = new Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }, this), n;
            }
            captureMessage(e, t, n) {
                const r = n && n.event_id ? n.event_id : ce();
                if (!this._client) return E.warn("No client configured on scope - will not capture message!"), 
                r;
                const o = new Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: o,
                    ...n,
                    event_id: r
                }, this), r;
            }
            captureEvent(e, t) {
                const n = t && t.event_id ? t.event_id : ce();
                return this._client ? (this._client.captureEvent(e, {
                    ...t,
                    event_id: n
                }, this), n) : (E.warn("No client configured on scope - will not capture event!"), 
                n);
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e => {
                    e(this);
                })), this._notifyingListeners = !1);
            }
        }
        function ot() {
            return {
                traceId: ce(),
                spanId: ce().substring(16)
            };
        }
        const it = "7.120.3", st = parseFloat(it), at = 100;
        class ct {
            constructor(e, t, n, r = st) {
                let o, i;
                this._version = r, t ? o = t : (o = new rt, o.setClient(e)), n ? i = n : (i = new rt, 
                i.setClient(e)), this._stack = [ {
                    scope: o
                } ], e && this.bindClient(e), this._isolationScope = i;
            }
            isOlderThan(e) {
                return this._version < e;
            }
            bindClient(e) {
                const t = this.getStackTop();
                t.client = e, t.scope.setClient(e), e && e.setupIntegrations && e.setupIntegrations();
            }
            pushScope() {
                const e = this.getScope().clone();
                return this.getStack().push({
                    client: this.getClient(),
                    scope: e
                }), e;
            }
            popScope() {
                return !(this.getStack().length <= 1 || !this.getStack().pop());
            }
            withScope(e) {
                const t = this.pushScope();
                let n;
                try {
                    n = e(t);
                } catch (e) {
                    throw this.popScope(), e;
                }
                return $(n) ? n.then((e => (this.popScope(), e)), (e => {
                    throw this.popScope(), e;
                })) : (this.popScope(), n);
            }
            getClient() {
                return this.getStackTop().client;
            }
            getScope() {
                return this.getStackTop().scope;
            }
            getIsolationScope() {
                return this._isolationScope;
            }
            getStack() {
                return this._stack;
            }
            getStackTop() {
                return this._stack[this._stack.length - 1];
            }
            captureException(e, t) {
                const n = this._lastEventId = t && t.event_id ? t.event_id : ce(), r = new Error("Sentry syntheticException");
                return this.getScope().captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }), n;
            }
            captureMessage(e, t, n) {
                const r = this._lastEventId = n && n.event_id ? n.event_id : ce(), o = new Error(e);
                return this.getScope().captureMessage(e, t, {
                    originalException: e,
                    syntheticException: o,
                    ...n,
                    event_id: r
                }), r;
            }
            captureEvent(e, t) {
                const n = t && t.event_id ? t.event_id : ce();
                return e.type || (this._lastEventId = n), this.getScope().captureEvent(e, {
                    ...t,
                    event_id: n
                }), n;
            }
            lastEventId() {
                return this._lastEventId;
            }
            addBreadcrumb(e, t) {
                const {scope: n, client: r} = this.getStackTop();
                if (!r) return;
                const {beforeBreadcrumb: o = null, maxBreadcrumbs: i = at} = r.getOptions && r.getOptions() || {};
                if (i <= 0) return;
                const s = {
                    timestamp: Te(),
                    ...e
                }, a = o ? T((() => o(s, t))) : s;
                null !== a && (r.emit && r.emit("beforeAddBreadcrumb", a, t), n.addBreadcrumb(a, i));
            }
            setUser(e) {
                this.getScope().setUser(e), this.getIsolationScope().setUser(e);
            }
            setTags(e) {
                this.getScope().setTags(e), this.getIsolationScope().setTags(e);
            }
            setExtras(e) {
                this.getScope().setExtras(e), this.getIsolationScope().setExtras(e);
            }
            setTag(e, t) {
                this.getScope().setTag(e, t), this.getIsolationScope().setTag(e, t);
            }
            setExtra(e, t) {
                this.getScope().setExtra(e, t), this.getIsolationScope().setExtra(e, t);
            }
            setContext(e, t) {
                this.getScope().setContext(e, t), this.getIsolationScope().setContext(e, t);
            }
            configureScope(e) {
                const {scope: t, client: n} = this.getStackTop();
                n && e(t);
            }
            run(e) {
                const t = lt(this);
                try {
                    e(this);
                } finally {
                    lt(t);
                }
            }
            getIntegration(e) {
                const t = this.getClient();
                if (!t) return null;
                try {
                    return t.getIntegration(e);
                } catch (t) {
                    return me && E.warn(`Cannot retrieve integration ${e.id} from the current Hub`), 
                    null;
                }
            }
            startTransaction(e, t) {
                const n = this._callExtensionMethod("startTransaction", e, t);
                return me && !n && (this.getClient() ? E.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : E.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), 
                n;
            }
            traceHeaders() {
                return this._callExtensionMethod("traceHeaders");
            }
            captureSession(e = !1) {
                if (e) return this.endSession();
                this._sendSessionUpdate();
            }
            endSession() {
                const e = this.getStackTop().scope, t = e.getSession();
                t && Oe(t), this._sendSessionUpdate(), e.setSession();
            }
            startSession(e) {
                const {scope: t, client: n} = this.getStackTop(), {release: r, environment: o = we} = n && n.getOptions() || {}, {userAgent: i} = b.navigator || {}, s = Re({
                    release: r,
                    environment: o,
                    user: t.getUser(),
                    ...i && {
                        userAgent: i
                    },
                    ...e
                }), a = t.getSession && t.getSession();
                return a && "ok" === a.status && Me(a, {
                    status: "exited"
                }), this.endSession(), t.setSession(s), s;
            }
            shouldSendDefaultPii() {
                const e = this.getClient(), t = e && e.getOptions();
                return Boolean(t && t.sendDefaultPii);
            }
            _sendSessionUpdate() {
                const {scope: e, client: t} = this.getStackTop(), n = e.getSession();
                n && t && t.captureSession && t.captureSession(n);
            }
            _callExtensionMethod(e, ...t) {
                const n = ut().__SENTRY__;
                if (n && n.extensions && "function" == typeof n.extensions[e]) return n.extensions[e].apply(this, t);
                me && E.warn(`Extension method ${e} couldn't be found, doing nothing.`);
            }
        }
        function ut() {
            return b.__SENTRY__ = b.__SENTRY__ || {
                extensions: {},
                hub: void 0
            }, b;
        }
        function lt(e) {
            const t = ut(), n = gt(t);
            return yt(t, e), n;
        }
        function dt() {
            const e = ut();
            if (e.__SENTRY__ && e.__SENTRY__.acs) {
                const t = e.__SENTRY__.acs.getCurrentHub();
                if (t) return t;
            }
            return function(e = ut()) {
                return function(e) {
                    return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
                }(e) && !gt(e).isOlderThan(st) || yt(e, new ct), gt(e);
            }(e);
        }
        function pt() {
            return dt().getIsolationScope();
        }
        function ft(e, t = {}) {
            const n = ut();
            return n.__SENTRY__ && n.__SENTRY__.acs ? n.__SENTRY__.acs.runWithAsyncContext(e, t) : e();
        }
        function gt(e) {
            return x("hub", (() => new ct), e);
        }
        function yt(e, t) {
            return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0);
        }
        const _t = /\(error: (.*)\)/, bt = /captureMessage|captureException/;
        function St(...e) {
            const t = e.sort(((e, t) => e[0] - t[0])).map((e => e[1]));
            return (e, n = 0) => {
                const r = [], o = e.split("\n");
                for (let e = n; e < o.length; e++) {
                    const n = o[e];
                    if (n.length > 1024) continue;
                    const i = _t.test(n) ? n.replace(_t, "$1") : n;
                    if (!i.match(/\S*Error: /)) {
                        for (const e of t) {
                            const t = e(i);
                            if (t) {
                                r.push(t);
                                break;
                            }
                        }
                        if (r.length >= 50) break;
                    }
                }
                return function(e) {
                    if (!e.length) return [];
                    const t = Array.from(e);
                    return /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(), t.reverse(), 
                    bt.test(t[t.length - 1].function || "") && (t.pop(), bt.test(t[t.length - 1].function || "") && t.pop()), 
                    t.slice(0, 50).map((e => ({
                        ...e,
                        filename: e.filename || t[t.length - 1].filename,
                        function: e.function || "?"
                    })));
                }(r);
            };
        }
        const xt = "<anonymous>";
        function wt(e) {
            try {
                return e && "function" == typeof e && e.name || xt;
            } catch (e) {
                return xt;
            }
        }
        function kt(e, t = 100, n = 1 / 0) {
            try {
                return Et("", e, t, n);
            } catch (e) {
                return {
                    ERROR: `**non-serializable** (${e})`
                };
            }
        }
        function Tt(e, t = 3, n = 102400) {
            const r = kt(e, t);
            return o = r, function(e) {
                return ~-encodeURI(e).split(/%..|./).length;
            }(JSON.stringify(o)) > n ? Tt(e, t - 1, n) : r;
            var o;
        }
        function Et(e, t, r = 1 / 0, o = 1 / 0, i = function() {
            const e = "function" == typeof WeakSet, t = e ? new WeakSet : [];
            return [ function(n) {
                if (e) return !!t.has(n) || (t.add(n), !1);
                for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
                return t.push(n), !1;
            }, function(n) {
                if (e) t.delete(n); else for (let e = 0; e < t.length; e++) if (t[e] === n) {
                    t.splice(e, 1);
                    break;
                }
            } ];
        }()) {
            const [s, a] = i;
            if (null == t || [ "number", "boolean", "string" ].includes(typeof t) && !j(t)) return t;
            const c = function(e, t) {
                try {
                    if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
                    if ("domainEmitter" === e) return "[DomainEmitter]";
                    if (void 0 !== n.g && t === n.g) return "[Global]";
                    if ("undefined" != typeof window && t === window) return "[Window]";
                    if ("undefined" != typeof document && t === document) return "[Document]";
                    if (B(t)) return "[VueViewModel]";
                    if (N(r = t) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r) return "[SyntheticEvent]";
                    if ("number" == typeof t && t != t) return "[NaN]";
                    if ("function" == typeof t) return `[Function: ${wt(t)}]`;
                    if ("symbol" == typeof t) return `[${String(t)}]`;
                    if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                    const o = function(e) {
                        const t = Object.getPrototypeOf(e);
                        return t ? t.constructor.name : "null prototype";
                    }(t);
                    return /^HTML(\w*)Element$/.test(o) ? `[HTMLElement: ${o}]` : `[object ${o}]`;
                } catch (e) {
                    return `**non-serializable** (${e})`;
                }
                var r;
            }(e, t);
            if (!c.startsWith("[object ")) return c;
            if (t.__sentry_skip_normalization__) return t;
            const u = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : r;
            if (0 === u) return c.replace("object ", "");
            if (s(t)) return "[Circular ~]";
            const l = t;
            if (l && "function" == typeof l.toJSON) try {
                return Et("", l.toJSON(), u - 1, o, i);
            } catch (e) {}
            const d = Array.isArray(t) ? [] : {};
            let p = 0;
            const h = re(t);
            for (const e in h) {
                if (!Object.prototype.hasOwnProperty.call(h, e)) continue;
                if (p >= o) {
                    d[e] = "[MaxProperties ~]";
                    break;
                }
                const t = h[e];
                d[e] = Et(e, t, u - 1, o, i), p++;
            }
            return a(t), d;
        }
        function Ct(e, t, n, r, o, i) {
            const {normalizeDepth: s = 3, normalizeMaxBreadth: a = 1e3} = e, c = {
                ...t,
                event_id: t.event_id || n.event_id || ce(),
                timestamp: t.timestamp || Te()
            }, u = n.integrations || e.integrations.map((e => e.name));
            !function(e, t) {
                const {environment: n, release: r, dist: o, maxValueLength: i = 250} = t;
                "environment" in e || (e.environment = "environment" in t ? n : we), void 0 === e.release && void 0 !== r && (e.release = r), 
                void 0 === e.dist && void 0 !== o && (e.dist = o), e.message && (e.message = Y(e.message, i));
                const s = e.exception && e.exception.values && e.exception.values[0];
                s && s.value && (s.value = Y(s.value, i));
                const a = e.request;
                a && a.url && (a.url = Y(a.url, i));
            }(c, e), function(e, t) {
                t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [ ...e.sdk.integrations || [], ...t ]);
            }(c, u), void 0 === t.type && function(e, t) {
                const n = b._sentryDebugIds;
                if (!n) return;
                let r;
                const o = It.get(t);
                o ? r = o : (r = new Map, It.set(t, r));
                const i = Object.keys(n).reduce(((e, o) => {
                    let i;
                    const s = r.get(o);
                    s ? i = s : (i = t(o), r.set(o, i));
                    for (let t = i.length - 1; t >= 0; t--) {
                        const r = i[t];
                        if (r.filename) {
                            e[r.filename] = n[o];
                            break;
                        }
                    }
                    return e;
                }), {});
                try {
                    e.exception.values.forEach((e => {
                        e.stacktrace.frames.forEach((e => {
                            e.filename && (e.debug_id = i[e.filename]);
                        }));
                    }));
                } catch (e) {}
            }(c, e.stackParser);
            const l = function(e, t) {
                if (!t) return e;
                const n = e ? e.clone() : new rt;
                return n.update(t), n;
            }(r, n.captureContext);
            n.mechanism && pe(c, n.mechanism);
            const d = o && o.getEventProcessors ? o.getEventProcessors() : [], p = (nt || (nt = new rt), 
            nt).getScopeData();
            i && et(p, i.getScopeData()), l && et(p, l.getScopeData());
            const h = [ ...n.attachments || [], ...p.attachments ];
            return h.length && (n.attachments = h), Ze(c, p), xe([ ...d, ...be(), ...p.eventProcessors ], c, n).then((e => (e && function(e) {
                const t = {};
                try {
                    e.exception.values.forEach((e => {
                        e.stacktrace.frames.forEach((e => {
                            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), 
                            delete e.debug_id);
                        }));
                    }));
                } catch (e) {}
                if (0 === Object.keys(t).length) return;
                e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
                const n = e.debug_meta.images;
                Object.keys(t).forEach((e => {
                    n.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t[e]
                    });
                }));
            }(e), "number" == typeof s && s > 0 ? function(e, t, n) {
                if (!e) return null;
                const r = {
                    ...e,
                    ...e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map((e => ({
                            ...e,
                            ...e.data && {
                                data: kt(e.data, t, n)
                            }
                        })))
                    },
                    ...e.user && {
                        user: kt(e.user, t, n)
                    },
                    ...e.contexts && {
                        contexts: kt(e.contexts, t, n)
                    },
                    ...e.extra && {
                        extra: kt(e.extra, t, n)
                    }
                };
                return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, 
                e.contexts.trace.data && (r.contexts.trace.data = kt(e.contexts.trace.data, t, n))), 
                e.spans && (r.spans = e.spans.map((e => {
                    const r = Je(e).data;
                    return r && (e.data = kt(r, t, n)), e;
                }))), r;
            }(e, s, a) : e)));
        }
        const It = new WeakMap;
        const Mt = [ "user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext" ];
        function Ot(e, t) {
            return dt().captureException(e, function(e) {
                if (e) return function(e) {
                    return e instanceof rt || "function" == typeof e;
                }(e) || function(e) {
                    return Object.keys(e).some((e => Mt.includes(e)));
                }(e) ? {
                    captureContext: e
                } : e;
            }(t));
        }
        function At(e, t) {
            const n = "string" == typeof t ? t : void 0, r = "string" != typeof t ? {
                captureContext: t
            } : void 0;
            return dt().captureMessage(e, n, r);
        }
        function Lt(e, t) {
            return dt().captureEvent(e, t);
        }
        function Dt(e) {
            dt().configureScope(e);
        }
        function Nt(e, t) {
            dt().addBreadcrumb(e, t);
        }
        function Pt(e, t) {
            dt().setContext(e, t);
        }
        function $t(e) {
            dt().setExtras(e);
        }
        function jt(e, t) {
            dt().setExtra(e, t);
        }
        function Ft(e) {
            dt().setTags(e);
        }
        function Bt(e, t) {
            dt().setTag(e, t);
        }
        function Ht(e) {
            dt().setUser(e);
        }
        function qt(...e) {
            const t = dt();
            if (2 === e.length) {
                const [n, r] = e;
                return n ? t.withScope((() => (t.getStackTop().scope = n, r(n)))) : t.withScope(r);
            }
            return t.withScope(e[0]);
        }
        function Ut(e) {
            return ft((() => e(pt())));
        }
        function zt(e, t) {
            return qt((n => (n.setSpan(e), t(n))));
        }
        function Wt(e, t) {
            return dt().startTransaction({
                ...e
            }, t);
        }
        async function Gt(e) {
            const t = Jt();
            return t ? t.flush(e) : (me && E.warn("Cannot flush events. No client defined."), 
            Promise.resolve(!1));
        }
        async function Vt(e) {
            const t = Jt();
            return t ? t.close(e) : (me && E.warn("Cannot flush events and disable SDK. No client defined."), 
            Promise.resolve(!1));
        }
        function Yt() {
            return dt().lastEventId();
        }
        function Jt() {
            return dt().getClient();
        }
        function Xt() {
            return !!Jt();
        }
        function Kt() {
            return dt().getScope();
        }
        function Qt(e) {
            const t = Jt(), n = pt(), r = Kt(), {release: o, environment: i = we} = t && t.getOptions() || {}, {userAgent: s} = b.navigator || {}, a = Re({
                release: o,
                environment: i,
                user: r.getUser() || n.getUser(),
                ...s && {
                    userAgent: s
                },
                ...e
            }), c = n.getSession();
            return c && "ok" === c.status && Me(c, {
                status: "exited"
            }), Zt(), n.setSession(a), r.setSession(a), a;
        }
        function Zt() {
            const e = pt(), t = Kt(), n = t.getSession() || e.getSession();
            n && Oe(n), en(), e.setSession(), t.setSession();
        }
        function en() {
            const e = pt(), t = Kt(), n = Jt(), r = t.getSession() || e.getSession();
            r && n && n.captureSession && n.captureSession(r);
        }
        function tn(e = !1) {
            e ? Zt() : en();
        }
        const nn = [];
        function rn(e) {
            const t = e.defaultIntegrations || [], n = e.integrations;
            let r;
            t.forEach((e => {
                e.isDefaultInstance = !0;
            })), r = Array.isArray(n) ? [ ...t, ...n ] : "function" == typeof n ? fe(n(t)) : t;
            const o = function(e) {
                const t = {};
                return e.forEach((e => {
                    const {name: n} = e, r = t[n];
                    r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e);
                })), Object.keys(t).map((e => t[e]));
            }(r), i = function(e, t) {
                for (let n = 0; n < e.length; n++) if (!0 === t(e[n])) return n;
                return -1;
            }(o, (e => "Debug" === e.name));
            if (-1 !== i) {
                const [e] = o.splice(i, 1);
                o.push(e);
            }
            return o;
        }
        function on(e, t) {
            for (const n of t) n && n.afterAllSetup && n.afterAllSetup(e);
        }
        function sn(e, t, n) {
            if (n[t.name]) me && E.log(`Integration skipped because it was already installed: ${t.name}`); else {
                if (n[t.name] = t, -1 === nn.indexOf(t.name) && (t.setupOnce(Se, dt), nn.push(t.name)), 
                t.setup && "function" == typeof t.setup && t.setup(e), e.on && "function" == typeof t.preprocessEvent) {
                    const n = t.preprocessEvent.bind(t);
                    e.on("preprocessEvent", ((t, r) => n(t, r, e)));
                }
                if (e.addEventProcessor && "function" == typeof t.processEvent) {
                    const n = t.processEvent.bind(t), r = Object.assign(((t, r) => n(t, r, e)), {
                        id: t.name
                    });
                    e.addEventProcessor(r);
                }
                me && E.log(`Integration installed: ${t.name}`);
            }
        }
        function an(e) {
            const t = Jt();
            t && t.addIntegration ? t.addIntegration(e) : me && E.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
        }
        function cn(e, t) {
            return Object.assign((function(...e) {
                return t(...e);
            }), {
                id: e
            });
        }
        const un = [ /^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/ ], ln = [ /^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/ ], dn = "InboundFilters", pn = (e = {}) => ({
            name: dn,
            setupOnce() {},
            processEvent(t, n, r) {
                const o = r.getOptions();
                return function(e, t) {
                    return t.ignoreInternal && function(e) {
                        try {
                            return "SentryError" === e.exception.values[0].type;
                        } catch (e) {}
                        return !1;
                    }(e) ? (me && E.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${le(e)}`), 
                    !0) : function(e, t) {
                        return !(e.type || !t || !t.length) && function(e) {
                            const t = [];
                            let n;
                            e.message && t.push(e.message);
                            try {
                                n = e.exception.values[e.exception.values.length - 1];
                            } catch (e) {}
                            return n && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)), 
                            me && 0 === t.length && E.error(`Could not extract message for event ${le(e)}`), 
                            t;
                        }(e).some((e => Q(e, t)));
                    }(e, t.ignoreErrors) ? (me && E.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${le(e)}`), 
                    !0) : function(e, t) {
                        if ("transaction" !== e.type || !t || !t.length) return !1;
                        const n = e.transaction;
                        return !!n && Q(n, t);
                    }(e, t.ignoreTransactions) ? (me && E.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${le(e)}`), 
                    !0) : function(e, t) {
                        if (!t || !t.length) return !1;
                        const n = fn(e);
                        return !!n && Q(n, t);
                    }(e, t.denyUrls) ? (me && E.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${le(e)}.\nUrl: ${fn(e)}`), 
                    !0) : !function(e, t) {
                        if (!t || !t.length) return !0;
                        const n = fn(e);
                        return !n || Q(n, t);
                    }(e, t.allowUrls) && (me && E.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${le(e)}.\nUrl: ${fn(e)}`), 
                    !0);
                }(t, function(e = {}, t = {}) {
                    return {
                        allowUrls: [ ...e.allowUrls || [], ...t.allowUrls || [] ],
                        denyUrls: [ ...e.denyUrls || [], ...t.denyUrls || [] ],
                        ignoreErrors: [ ...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : un ],
                        ignoreTransactions: [ ...e.ignoreTransactions || [], ...t.ignoreTransactions || [], ...e.disableTransactionDefaults ? [] : ln ],
                        ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                    };
                }(e, o)) ? null : t;
            }
        }), hn = cn(dn, pn);
        function fn(e) {
            try {
                let t;
                try {
                    t = e.exception.values[0].stacktrace.frames;
                } catch (e) {}
                return t ? function(e = []) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        const n = e[t];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
                    }
                    return null;
                }(t) : null;
            } catch (t) {
                return me && E.error(`Cannot extract url for event ${le(e)}`), null;
            }
        }
        let mn;
        const gn = "FunctionToString", yn = new WeakMap, vn = () => ({
            name: gn,
            setupOnce() {
                mn = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...e) {
                        const t = ne(this), n = yn.has(Jt()) && void 0 !== t ? t : this;
                        return mn.apply(n, e);
                    };
                } catch (e) {}
            },
            setup(e) {
                yn.set(e, !0);
            }
        }), _n = cn(gn, vn);
        function bn(e) {
            const t = dt().getStackTop();
            t.client = e, t.scope.setClient(e);
        }
        const Sn = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function xn(e, t = !1) {
            const {host: n, path: r, pass: o, port: i, projectId: s, protocol: a, publicKey: c} = e;
            return `${a}://${c}${t && o ? `:${o}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${s}`;
        }
        function wn(e) {
            const t = Sn.exec(e);
            if (!t) return void T((() => {}));
            const [n, r, o = "", i, s = "", a] = t.slice(1);
            let c = "", u = a;
            const l = u.split("/");
            if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
                const e = u.match(/^\d+/);
                e && (u = e[0]);
            }
            return kn({
                host: i,
                pass: o,
                path: c,
                projectId: u,
                port: s,
                protocol: n,
                publicKey: r
            });
        }
        function kn(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            };
        }
        function Tn(e) {
            const t = "string" == typeof e ? wn(e) : kn(e);
            if (t && function(e) {
                if (!v) return !0;
                const {port: t, projectId: n, protocol: r} = e;
                return !([ "protocol", "publicKey", "host", "projectId" ].find((t => !e[t] && (E.error(`Invalid Sentry Dsn: ${t} missing`), 
                !0))) || (n.match(/^\d+$/) ? function(e) {
                    return "http" === e || "https" === e;
                }(r) ? t && isNaN(parseInt(t, 10)) && (E.error(`Invalid Sentry Dsn: Invalid port ${t}`), 
                1) : (E.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1) : (E.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 
                1)));
            }(t)) return t;
        }
        function Cn(e) {
            const t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
            return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
        }
        function Rn(e, t = {}) {
            const n = "string" == typeof t ? t : t.tunnel, r = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
            return n || `${function(e) {
                return `${Cn(e)}${e.projectId}/envelope/`;
            }(e)}?${function(e, t) {
                return n = {
                    sentry_key: e.publicKey,
                    sentry_version: "7",
                    ...t && {
                        sentry_client: `${t.name}/${t.version}`
                    }
                }, Object.keys(n).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`)).join("&");
                var n;
            }(e, r)}`;
        }
        const Mn = S();
        function On() {
            if (!("fetch" in Mn)) return !1;
            try {
                return new Headers, new Request("http://www.example.com"), new Response, !0;
            } catch (e) {
                return !1;
            }
        }
        function An(e) {
            return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
        }
        function Ln() {
            if ("string" == typeof EdgeRuntime) return !0;
            if (!On()) return !1;
            if (An(Mn.fetch)) return !0;
            let e = !1;
            const t = Mn.document;
            if (t && "function" == typeof t.createElement) try {
                const n = t.createElement("iframe");
                n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = An(n.contentWindow.fetch)), 
                t.head.removeChild(n);
            } catch (e) {
                v && E.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
            }
            return e;
        }
        const Dn = S(), Nn = {}, Pn = {};
        function $n(e, t) {
            Nn[e] = Nn[e] || [], Nn[e].push(t);
        }
        function jn(e, t) {
            Pn[e] || (t(), Pn[e] = !0);
        }
        function Fn(e, t) {
            const n = e && Nn[e];
            if (n) for (const r of n) try {
                r(t);
            } catch (t) {
                v && E.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${wt(r)}\nError:`, t);
            }
        }
        const Bn = b;
        let Hn;
        function qn(e) {
            const t = "history";
            $n(t, e), jn(t, Un);
        }
        function Un() {
            if (!function() {
                const e = Dn.chrome, t = e && e.app && e.app.runtime, n = "history" in Dn && !!Dn.history.pushState && !!Dn.history.replaceState;
                return !t && n;
            }()) return;
            const e = Bn.onpopstate;
            function t(e) {
                return function(...t) {
                    const n = t.length > 2 ? t[2] : void 0;
                    if (n) {
                        const e = Hn, t = String(n);
                        Hn = t, Fn("history", {
                            from: e,
                            to: t
                        });
                    }
                    return e.apply(this, t);
                };
            }
            Bn.onpopstate = function(...t) {
                const n = Bn.location.href, r = Hn;
                if (Hn = n, Fn("history", {
                    from: r,
                    to: n
                }), e) try {
                    return e.apply(this, t);
                } catch (e) {}
            }, Z(Bn.history, "pushState", t), Z(Bn.history, "replaceState", t);
        }
        function zn(e, t = []) {
            return [ e, t ];
        }
        function Wn(e, t) {
            const [n, r] = e;
            return [ n, [ ...r, t ] ];
        }
        function Gn(e, t) {
            const n = e[1];
            for (const e of n) if (t(e, e[0].type)) return !0;
            return !1;
        }
        function Vn(e, t) {
            return (t || new TextEncoder).encode(e);
        }
        function Yn(e, t) {
            const [n, r] = e;
            let o = JSON.stringify(n);
            function i(e) {
                "string" == typeof o ? o = "string" == typeof e ? o + e : [ Vn(o, t), e ] : o.push("string" == typeof e ? Vn(e, t) : e);
            }
            for (const e of r) {
                const [t, n] = e;
                if (i(`\n${JSON.stringify(t)}\n`), "string" == typeof n || n instanceof Uint8Array) i(n); else {
                    let e;
                    try {
                        e = JSON.stringify(n);
                    } catch (t) {
                        e = JSON.stringify(kt(n));
                    }
                    i(e);
                }
            }
            return "string" == typeof o ? o : function(e) {
                const t = e.reduce(((e, t) => e + t.length), 0), n = new Uint8Array(t);
                let r = 0;
                for (const t of e) n.set(t, r), r += t.length;
                return n;
            }(o);
        }
        function Jn(e, t) {
            const n = "string" == typeof e.data ? Vn(e.data, t) : e.data;
            return [ se({
                type: "attachment",
                length: n.length,
                filename: e.filename,
                content_type: e.contentType,
                attachment_type: e.attachmentType
            }), n ];
        }
        const Xn = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            feedback: "feedback",
            span: "span",
            statsd: "metric_bucket"
        };
        function Kn(e) {
            return Xn[e];
        }
        function Qn(e) {
            if (!e || !e.sdk) return;
            const {name: t, version: n} = e.sdk;
            return {
                name: t,
                version: n
            };
        }
        function Zn(e, t, n, r) {
            const o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: e.event_id,
                sent_at: (new Date).toISOString(),
                ...t && {
                    sdk: t
                },
                ...!!n && r && {
                    dsn: xn(r)
                },
                ...o && {
                    trace: se({
                        ...o
                    })
                }
            };
        }
        class er extends Error {
            constructor(e, t = "warn") {
                super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), 
                this.logLevel = t;
            }
        }
        function tr(e, t, n, r) {
            const o = Qn(n), i = e.type && "replay_event" !== e.type ? e.type : "event";
            !function(e, t) {
                t && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, 
                e.sdk.integrations = [ ...e.sdk.integrations || [], ...t.integrations || [] ], e.sdk.packages = [ ...e.sdk.packages || [], ...t.packages || [] ]);
            }(e, n && n.sdk);
            const s = Zn(e, o, r, t);
            return delete e.sdkProcessingMetadata, zn(s, [ [ {
                type: i
            }, e ] ]);
        }
        function nr(e) {
            return e.replace(/[^\w\-./]+/gi, "");
        }
        const rr = [ [ "\n", "\\n" ], [ "\r", "\\r" ], [ "\t", "\\t" ], [ "\\", "\\\\" ], [ "|", "\\u{7c}" ], [ ",", "\\u{2c}" ] ];
        function or(e) {
            return [ ...e ].reduce(((e, t) => e + function(e) {
                for (const [t, n] of rr) if (e === t) return n;
                return e;
            }(t)), "");
        }
        const sr = "Not capturing exception because it's already been captured.";
        function cr(e) {
            return void 0 === e.type;
        }
        function ur(e) {
            return "transaction" === e.type;
        }
        function lr(e) {
            const t = Jt();
            t && t.addEventProcessor && t.addEventProcessor(e);
        }
        var dr = n(905);
        const pr = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function hr(e, t) {
            const n = mr(e, t), r = {
                type: t && t.name,
                value: yr(t)
            };
            return n.length && (r.stacktrace = {
                frames: n
            }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), 
            r;
        }
        function fr(e, t) {
            return {
                exception: {
                    values: [ hr(e, t) ]
                }
            };
        }
        function mr(e, t) {
            const n = t.stacktrace || t.stack || "", r = function(e) {
                if (e) {
                    if ("number" == typeof e.framesToPop) return e.framesToPop;
                    if (gr.test(e.message)) return 1;
                }
                return 0;
            }(t);
            try {
                return e(n, r);
            } catch (e) {}
            return [];
        }
        const gr = /Minified React error #\d+;/i;
        function yr(e) {
            const t = e && e.message;
            return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message";
        }
        function vr(e, t, n, r) {
            const o = br(e, t, n && n.syntheticException || void 0, r);
            return pe(o), o.level = "error", n && n.event_id && (o.event_id = n.event_id), ye(o);
        }
        function _r(e, t, n = "info", r, o) {
            const i = Sr(e, t, r && r.syntheticException || void 0, o);
            return i.level = n, r && r.event_id && (i.event_id = r.event_id), ye(i);
        }
        function br(e, t, n, r, o) {
            let i;
            if (M(t) && t.error) return fr(e, t.error);
            if (O(t) || R(t, "DOMException")) {
                const o = t;
                if ("stack" in t) i = fr(e, t); else {
                    const t = o.name || (O(o) ? "DOMError" : "DOMException"), s = o.message ? `${t}: ${o.message}` : t;
                    i = Sr(e, s, n, r), de(i, s);
                }
                return "code" in o && (i.tags = {
                    ...i.tags,
                    "DOMException.code": `${o.code}`
                }), i;
            }
            return I(t) ? fr(e, t) : N(t) || P(t) ? (i = function(e, t, n, r) {
                const o = Jt(), i = o && o.getOptions().normalizeDepth, s = {
                    exception: {
                        values: [ {
                            type: P(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: xr(t, {
                                isUnhandledRejection: r
                            })
                        } ]
                    },
                    extra: {
                        __serialized__: Tt(t, i)
                    }
                };
                if (n) {
                    const t = mr(e, n);
                    t.length && (s.exception.values[0].stacktrace = {
                        frames: t
                    });
                }
                return s;
            }(e, t, n, o), pe(i, {
                synthetic: !0
            }), i) : (i = Sr(e, t, n, r), de(i, `${t}`, void 0), pe(i, {
                synthetic: !0
            }), i);
        }
        function Sr(e, t, n, r) {
            const o = {};
            if (r && n) {
                const r = mr(e, n);
                r.length && (o.exception = {
                    values: [ {
                        value: t,
                        stacktrace: {
                            frames: r
                        }
                    } ]
                });
            }
            if (L(t)) {
                const {__sentry_template_string__: e, __sentry_template_values__: n} = t;
                return o.logentry = {
                    message: e,
                    params: n
                }, o;
            }
            return o.message = t, o;
        }
        function xr(e, {isUnhandledRejection: t}) {
            const n = function(e, t = 40) {
                const n = Object.keys(re(e));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= t) return Y(n[0], t);
                for (let e = n.length; e > 0; e--) {
                    const r = n.slice(0, e).join(", ");
                    if (!(r.length > t)) return e === n.length ? r : Y(r, t);
                }
                return "";
            }(e), r = t ? "promise rejection" : "exception";
            return M(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : P(e) ? `Event \`${function(e) {
                try {
                    const t = Object.getPrototypeOf(e);
                    return t ? t.constructor.name : void 0;
                } catch (e) {}
            }(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
        }
        const wr = b;
        let kr = 0;
        function Tr() {
            return kr > 0;
        }
        function Er(e, t = {}, n) {
            if ("function" != typeof e) return e;
            try {
                const t = e.__sentry_wrapped__;
                if (t) return "function" == typeof t ? t : e;
                if (ne(e)) return e;
            } catch (t) {
                return e;
            }
            const r = function() {
                const r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    const o = r.map((e => Er(e, t)));
                    return e.apply(this, o);
                } catch (e) {
                    throw kr++, setTimeout((() => {
                        kr--;
                    })), qt((n => {
                        n.addEventProcessor((e => (t.mechanism && (de(e, void 0, void 0), pe(e, t.mechanism)), 
                        e.extra = {
                            ...e.extra,
                            arguments: r
                        }, e))), Ot(e);
                    })), e;
                }
            };
            try {
                for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
            } catch (e) {}
            te(r, e), ee(e, "__sentry_wrapped__", r);
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: () => e.name
                });
            } catch (e) {}
            return r;
        }
        function Cr(e, {metadata: t, tunnel: n, dsn: r}) {
            return zn({
                event_id: e.event_id,
                sent_at: (new Date).toISOString(),
                ...t && t.sdk && {
                    sdk: {
                        name: t.sdk.name,
                        version: t.sdk.version
                    }
                },
                ...!!n && !!r && {
                    dsn: xn(r)
                }
            }, [ function(e) {
                return [ {
                    type: "user_report"
                }, e ];
            }(e) ]);
        }
        class Ir extends class {
            constructor(e) {
                if (this._options = e, this._integrations = {}, this._integrationsInitialized = !1, 
                this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], 
                e.dsn ? this._dsn = Tn(e.dsn) : me && E.warn("No DSN provided, client will not send events."), 
                this._dsn) {
                    const t = Rn(this._dsn, e);
                    this._transport = e.transport({
                        tunnel: this._options.tunnel,
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...e.transportOptions,
                        url: t
                    });
                }
            }
            captureException(e, t, n) {
                if (he(e)) return void (me && E.log(sr));
                let r = t && t.event_id;
                return this._process(this.eventFromException(e, t).then((e => this._captureEvent(e, t, n))).then((e => {
                    r = e;
                }))), r;
            }
            captureMessage(e, t, n, r) {
                let o = n && n.event_id;
                const i = L(e) ? e : String(e), s = D(e) ? this.eventFromMessage(i, t, n) : this.eventFromException(e, n);
                return this._process(s.then((e => this._captureEvent(e, n, r))).then((e => {
                    o = e;
                }))), o;
            }
            captureEvent(e, t, n) {
                if (t && t.originalException && he(t.originalException)) return void (me && E.log(sr));
                let r = t && t.event_id;
                const o = (e.sdkProcessingMetadata || {}).capturedSpanScope;
                return this._process(this._captureEvent(e, t, o || n).then((e => {
                    r = e;
                }))), r;
            }
            captureSession(e) {
                "string" != typeof e.release ? me && E.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), 
                Me(e, {
                    init: !1
                }));
            }
            getDsn() {
                return this._dsn;
            }
            getOptions() {
                return this._options;
            }
            getSdkMetadata() {
                return this._options._metadata;
            }
            getTransport() {
                return this._transport;
            }
            flush(e) {
                const t = this._transport;
                return t ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(e).then((n => t.flush(e).then((e => n && e))))) : ye(!0);
            }
            close(e) {
                return this.flush(e).then((e => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), 
                e)));
            }
            getEventProcessors() {
                return this._eventProcessors;
            }
            addEventProcessor(e) {
                this._eventProcessors.push(e);
            }
            setupIntegrations(e) {
                (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations();
            }
            init() {
                this._isEnabled() && this._setupIntegrations();
            }
            getIntegrationById(e) {
                return this.getIntegrationByName(e);
            }
            getIntegrationByName(e) {
                return this._integrations[e];
            }
            getIntegration(e) {
                try {
                    return this._integrations[e.id] || null;
                } catch (t) {
                    return me && E.warn(`Cannot retrieve integration ${e.id} from the current Client`), 
                    null;
                }
            }
            addIntegration(e) {
                const t = this._integrations[e.name];
                sn(this, e, this._integrations), t || on(this, [ e ]);
            }
            sendEvent(e, t = {}) {
                this.emit("beforeSendEvent", e, t);
                let n = tr(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const e of t.attachments || []) n = Wn(n, Jn(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const r = this._sendEnvelope(n);
                r && r.then((t => this.emit("afterSendEvent", e, t)), null);
            }
            sendSession(e) {
                const t = function(e, t, n, r) {
                    const o = Qn(n);
                    return zn({
                        sent_at: (new Date).toISOString(),
                        ...o && {
                            sdk: o
                        },
                        ...!!r && t && {
                            dsn: xn(t)
                        }
                    }, [ "aggregates" in e ? [ {
                        type: "sessions"
                    }, e ] : [ {
                        type: "session"
                    }, e.toJSON() ] ]);
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(t);
            }
            recordDroppedEvent(e, t, n) {
                if (this._options.sendClientReports) {
                    const r = "number" == typeof n ? n : 1, o = `${e}:${t}`;
                    me && E.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`), this._outcomes[o] = (this._outcomes[o] || 0) + r;
                }
            }
            captureAggregateMetrics(e) {
                me && E.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
                const t = function(e, t, n, r) {
                    const o = {
                        sent_at: (new Date).toISOString()
                    };
                    return n && n.sdk && (o.sdk = {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }), r && t && (o.dsn = xn(t)), zn(o, [ function(e) {
                        const t = function(e) {
                            let t = "";
                            for (const n of e) {
                                const e = Object.entries(n.tags), r = e.length > 0 ? `|#${e.map((([e, t]) => `${e}:${t}`)).join(",")}` : "";
                                t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`;
                            }
                            return t;
                        }(e);
                        return [ {
                            type: "statsd",
                            length: t.length
                        }, t ];
                    }(e) ]);
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(t);
            }
            on(e, t) {
                this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t);
            }
            emit(e, ...t) {
                this._hooks[e] && this._hooks[e].forEach((e => e(...t)));
            }
            _setupIntegrations() {
                const {integrations: e} = this._options;
                this._integrations = function(e, t) {
                    const n = {};
                    return t.forEach((t => {
                        t && sn(e, t, n);
                    })), n;
                }(this, e), on(this, e), this._integrationsInitialized = !0;
            }
            _updateSessionFromEvent(e, t) {
                let n = !1, r = !1;
                const o = t.exception && t.exception.values;
                if (o) {
                    r = !0;
                    for (const e of o) {
                        const t = e.mechanism;
                        if (t && !1 === t.handled) {
                            n = !0;
                            break;
                        }
                    }
                }
                const i = "ok" === e.status;
                (i && 0 === e.errors || i && n) && (Me(e, {
                    ...n && {
                        status: "crashed"
                    },
                    errors: e.errors || Number(r || n)
                }), this.captureSession(e));
            }
            _isClientDoneProcessing(e) {
                return new _e((t => {
                    let n = 0;
                    const r = setInterval((() => {
                        0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), 
                        t(!1)));
                    }), 1);
                }));
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._transport;
            }
            _prepareEvent(e, t, n, r = pt()) {
                const o = this.getOptions(), i = Object.keys(this._integrations);
                return !t.integrations && i.length > 0 && (t.integrations = i), this.emit("preprocessEvent", e, t), 
                Ct(o, e, t, n, this, r).then((e => {
                    if (null === e) return e;
                    const t = {
                        ...r.getPropagationContext(),
                        ...n ? n.getPropagationContext() : void 0
                    };
                    if ((!e.contexts || !e.contexts.trace) && t) {
                        const {traceId: r, spanId: o, parentSpanId: i, dsc: s} = t;
                        e.contexts = {
                            trace: {
                                trace_id: r,
                                span_id: o,
                                parent_span_id: i
                            },
                            ...e.contexts
                        };
                        const a = s || Ke(r, this, n);
                        e.sdkProcessingMetadata = {
                            dynamicSamplingContext: a,
                            ...e.sdkProcessingMetadata
                        };
                    }
                    return e;
                }));
            }
            _captureEvent(e, t = {}, n) {
                return this._processEvent(e, t, n).then((e => e.event_id), (e => {
                    if (me) {
                        const t = e;
                        "log" === t.logLevel ? E.log(t.message) : E.warn(t);
                    }
                }));
            }
            _processEvent(e, t, n) {
                const r = this.getOptions(), {sampleRate: o} = r, i = ur(e), s = cr(e), a = e.type || "error", c = `before send for type \`${a}\``;
                if (s && "number" == typeof o && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", e), 
                ve(new er(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
                const u = "replay_event" === a ? "replay" : a, l = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(e, t, n, l).then((n => {
                    if (null === n) throw this.recordDroppedEvent("event_processor", u, e), new er("An event processor returned `null`, will not send event.", "log");
                    if (t.data && !0 === t.data.__sentry__) return n;
                    return function(e, t) {
                        const n = `${t} must return \`null\` or a valid event.`;
                        if ($(e)) return e.then((e => {
                            if (!N(e) && null !== e) throw new er(n);
                            return e;
                        }), (e => {
                            throw new er(`${t} rejected with ${e}`);
                        }));
                        if (!N(e) && null !== e) throw new er(n);
                        return e;
                    }(function(e, t, n) {
                        const {beforeSend: r, beforeSendTransaction: o} = e;
                        if (cr(t) && r) return r(t, n);
                        if (ur(t) && o) {
                            if (t.spans) {
                                const e = t.spans.length;
                                t.sdkProcessingMetadata = {
                                    ...t.sdkProcessingMetadata,
                                    spanCountBeforeProcessing: e
                                };
                            }
                            return o(t, n);
                        }
                        return t;
                    }(r, n, t), c);
                })).then((r => {
                    if (null === r) {
                        if (this.recordDroppedEvent("before_send", u, e), i) {
                            const t = 1 + (e.spans || []).length;
                            this.recordDroppedEvent("before_send", "span", t);
                        }
                        throw new er(`${c} returned \`null\`, will not send event.`, "log");
                    }
                    const o = n && n.getSession();
                    if (!i && o && this._updateSessionFromEvent(o, r), i) {
                        const e = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
                        e > 0 && this.recordDroppedEvent("before_send", "span", e);
                    }
                    const s = r.transaction_info;
                    if (i && s && r.transaction !== e.transaction) {
                        const e = "custom";
                        r.transaction_info = {
                            ...s,
                            source: e
                        };
                    }
                    return this.sendEvent(r, t), r;
                })).then(null, (e => {
                    if (e instanceof er) throw e;
                    throw this.captureException(e, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: e
                    }), new er(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`);
                }));
            }
            _process(e) {
                this._numProcessing++, e.then((e => (this._numProcessing--, e)), (e => (this._numProcessing--, 
                e)));
            }
            _sendEnvelope(e) {
                if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) return this._transport.send(e).then(null, (e => {
                    me && E.error("Error while sending event:", e);
                }));
                me && E.error("Transport disabled");
            }
            _clearOutcomes() {
                const e = this._outcomes;
                return this._outcomes = {}, Object.keys(e).map((t => {
                    const [n, r] = t.split(":");
                    return {
                        reason: n,
                        category: r,
                        quantity: e[t]
                    };
                }));
            }
        } {
            constructor(e) {
                !function(e, t, n = [ t ], r = "npm") {
                    const o = e._metadata || {};
                    o.sdk || (o.sdk = {
                        name: `sentry.javascript.${t}`,
                        packages: n.map((e => ({
                            name: `${r}:@sentry/${e}`,
                            version: it
                        }))),
                        version: it
                    }), e._metadata = o;
                }(e, "browser", [ "browser" ], wr.SENTRY_SDK_SOURCE || (0, dr.S)()), super(e), e.sendClientReports && wr.document && wr.document.addEventListener("visibilitychange", (() => {
                    "hidden" === wr.document.visibilityState && this._flushOutcomes();
                }));
            }
            eventFromException(e, t) {
                return vr(this._options.stackParser, e, t, this._options.attachStacktrace);
            }
            eventFromMessage(e, t = "info", n) {
                return _r(this._options.stackParser, e, t, n, this._options.attachStacktrace);
            }
            captureUserFeedback(e) {
                if (!this._isEnabled()) return void (pr && E.warn("SDK not enabled, will not capture user feedback."));
                const t = Cr(e, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this._sendEnvelope(t);
            }
            _prepareEvent(e, t, n) {
                return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n);
            }
            _flushOutcomes() {
                const e = this._clearOutcomes();
                if (0 === e.length) return void (pr && E.log("No outcomes to send"));
                if (!this._dsn) return void (pr && E.log("No dsn provided, will not send outcomes"));
                pr && E.log("Sending outcomes:", e);
                const t = (n = e, zn((r = this._options.tunnel && xn(this._dsn)) ? {
                    dsn: r
                } : {}, [ [ {
                    type: "client_report"
                }, {
                    timestamp: Te(),
                    discarded_events: n
                } ] ]));
                var n, r;
                this._sendEnvelope(t);
            }
        }
        function Rr(e) {
            const t = "console";
            $n(t, e), jn(t, Mr);
        }
        function Mr() {
            "console" in b && w.forEach((function(e) {
                e in b.console && Z(b.console, e, (function(t) {
                    return k[e] = t, function(...t) {
                        Fn("console", {
                            args: t,
                            level: e
                        });
                        const n = k[e];
                        n && n.apply(b.console, t);
                    };
                }));
            }));
        }
        const Or = b;
        let Lr, Dr, Nr;
        function Pr(e) {
            $n("dom", e), jn("dom", $r);
        }
        function $r() {
            if (!Or.document) return;
            const e = Fn.bind(null, "dom"), t = jr(e, !0);
            Or.document.addEventListener("click", t, !1), Or.document.addEventListener("keypress", t, !1), 
            [ "EventTarget", "Node" ].forEach((t => {
                const n = Or[t] && Or[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Z(n, "addEventListener", (function(t) {
                    return function(n, r, o) {
                        if ("click" === n || "keypress" == n) try {
                            const r = this, i = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}, s = i[n] = i[n] || {
                                refCount: 0
                            };
                            if (!s.handler) {
                                const r = jr(e);
                                s.handler = r, t.call(this, n, r, o);
                            }
                            s.refCount++;
                        } catch (e) {}
                        return t.call(this, n, r, o);
                    };
                })), Z(n, "removeEventListener", (function(e) {
                    return function(t, n, r) {
                        if ("click" === t || "keypress" == t) try {
                            const n = this, o = n.__sentry_instrumentation_handlers__ || {}, i = o[t];
                            i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, 
                            delete o[t]), 0 === Object.keys(o).length && delete n.__sentry_instrumentation_handlers__);
                        } catch (e) {}
                        return e.call(this, t, n, r);
                    };
                })));
            }));
        }
        function jr(e, t = !1) {
            return n => {
                if (!n || n._sentryCaptured) return;
                const r = function(e) {
                    try {
                        return e.target;
                    } catch (e) {
                        return null;
                    }
                }(n);
                if (function(e, t) {
                    return "keypress" === e && (!t || !t.tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable);
                }(n.type, r)) return;
                ee(n, "_sentryCaptured", !0), r && !r._sentryId && ee(r, "_sentryId", ce());
                const o = "keypress" === n.type ? "input" : n.type;
                (function(e) {
                    if (e.type !== Dr) return !1;
                    try {
                        if (!e.target || e.target._sentryId !== Nr) return !1;
                    } catch (e) {}
                    return !0;
                })(n) || (e({
                    event: n,
                    name: o,
                    global: t
                }), Dr = n.type, Nr = r ? r._sentryId : void 0), clearTimeout(Lr), Lr = Or.setTimeout((() => {
                    Nr = void 0, Dr = void 0;
                }), 1e3);
            };
        }
        const Fr = b, Br = "__sentry_xhr_v3__";
        function Hr(e) {
            $n("xhr", e), jn("xhr", qr);
        }
        function qr() {
            if (!Fr.XMLHttpRequest) return;
            const e = XMLHttpRequest.prototype;
            Z(e, "open", (function(e) {
                return function(...t) {
                    const n = Date.now(), r = A(t[0]) ? t[0].toUpperCase() : void 0, o = function(e) {
                        if (A(e)) return e;
                        try {
                            return e.toString();
                        } catch (e) {}
                    }(t[1]);
                    if (!r || !o) return e.apply(this, t);
                    this[Br] = {
                        method: r,
                        url: o,
                        request_headers: {}
                    }, "POST" === r && o.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                    const i = () => {
                        const e = this[Br];
                        if (e && 4 === this.readyState) {
                            try {
                                e.status_code = this.status;
                            } catch (e) {}
                            Fn("xhr", {
                                args: [ r, o ],
                                endTimestamp: Date.now(),
                                startTimestamp: n,
                                xhr: this
                            });
                        }
                    };
                    return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? Z(this, "onreadystatechange", (function(e) {
                        return function(...t) {
                            return i(), e.apply(this, t);
                        };
                    })) : this.addEventListener("readystatechange", i), Z(this, "setRequestHeader", (function(e) {
                        return function(...t) {
                            const [n, r] = t, o = this[Br];
                            return o && A(n) && A(r) && (o.request_headers[n.toLowerCase()] = r), e.apply(this, t);
                        };
                    })), e.apply(this, t);
                };
            })), Z(e, "send", (function(e) {
                return function(...t) {
                    const n = this[Br];
                    return n ? (void 0 !== t[0] && (n.body = t[0]), Fn("xhr", {
                        args: [ n.method, n.url ],
                        startTimestamp: Date.now(),
                        xhr: this
                    }), e.apply(this, t)) : e.apply(this, t);
                };
            }));
        }
        function Ur(e) {
            const t = "fetch";
            $n(t, e), jn(t, zr);
        }
        function zr() {
            Ln() && Z(b, "fetch", (function(e) {
                return function(...t) {
                    const {method: n, url: r} = function(e) {
                        if (0 === e.length) return {
                            method: "GET",
                            url: ""
                        };
                        if (2 === e.length) {
                            const [t, n] = e;
                            return {
                                url: Gr(t),
                                method: Wr(n, "method") ? String(n.method).toUpperCase() : "GET"
                            };
                        }
                        const t = e[0];
                        return {
                            url: Gr(t),
                            method: Wr(t, "method") ? String(t.method).toUpperCase() : "GET"
                        };
                    }(t), o = {
                        args: t,
                        fetchData: {
                            method: n,
                            url: r
                        },
                        startTimestamp: Date.now()
                    };
                    return Fn("fetch", {
                        ...o
                    }), e.apply(b, t).then((e => (Fn("fetch", {
                        ...o,
                        endTimestamp: Date.now(),
                        response: e
                    }), e)), (e => {
                        throw Fn("fetch", {
                            ...o,
                            endTimestamp: Date.now(),
                            error: e
                        }), e;
                    }));
                };
            }));
        }
        function Wr(e, t) {
            return !!e && "object" == typeof e && !!e[t];
        }
        function Gr(e) {
            return "string" == typeof e ? e : e ? Wr(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
        }
        const Vr = [ "fatal", "error", "warning", "log", "info", "debug" ];
        function Yr(e) {
            return "warn" === e ? "warning" : Vr.includes(e) ? e : "log";
        }
        function Jr(e) {
            if (!e) return {};
            const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t) return {};
            const n = t[6] || "", r = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                search: n,
                hash: r,
                relative: t[5] + n + r
            };
        }
        const Kr = "Breadcrumbs", Qr = (e = {}) => {
            const t = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            };
            return {
                name: Kr,
                setupOnce() {},
                setup(e) {
                    t.console && Rr(function(e) {
                        return function(t) {
                            if (Jt() !== e) return;
                            const n = {
                                category: "console",
                                data: {
                                    arguments: t.args,
                                    logger: "console"
                                },
                                level: Yr(t.level),
                                message: X(t.args, " ")
                            };
                            if ("assert" === t.level) {
                                if (!1 !== t.args[0]) return;
                                n.message = `Assertion failed: ${X(t.args.slice(1), " ") || "console.assert"}`, 
                                n.data.arguments = t.args.slice(1);
                            }
                            Nt(n, {
                                input: t.args,
                                level: t.level
                            });
                        };
                    }(e)), t.dom && Pr(function(e, t) {
                        return function(n) {
                            if (Jt() !== e) return;
                            let r, o, i = "object" == typeof t ? t.serializeAttribute : void 0, s = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            s && s > 1024 && (pr && E.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`), 
                            s = 1024), "string" == typeof i && (i = [ i ]);
                            try {
                                const e = n.event, t = function(e) {
                                    return !!e && !!e.target;
                                }(e) ? e.target : e;
                                r = U(t, {
                                    keyAttrs: i,
                                    maxStringLength: s
                                }), o = V(t);
                            } catch (e) {
                                r = "<unknown>";
                            }
                            if (0 === r.length) return;
                            const a = {
                                category: `ui.${n.name}`,
                                message: r
                            };
                            o && (a.data = {
                                "ui.component_name": o
                            }), Nt(a, {
                                event: n.event,
                                name: n.name,
                                global: n.global
                            });
                        };
                    }(e, t.dom)), t.xhr && Hr(function(e) {
                        return function(t) {
                            if (Jt() !== e) return;
                            const {startTimestamp: n, endTimestamp: r} = t, o = t.xhr[Br];
                            if (!n || !r || !o) return;
                            const {method: i, url: s, status_code: a, body: c} = o;
                            Nt({
                                category: "xhr",
                                data: {
                                    method: i,
                                    url: s,
                                    status_code: a
                                },
                                type: "http"
                            }, {
                                xhr: t.xhr,
                                input: c,
                                startTimestamp: n,
                                endTimestamp: r
                            });
                        };
                    }(e)), t.fetch && Ur(function(e) {
                        return function(t) {
                            if (Jt() !== e) return;
                            const {startTimestamp: n, endTimestamp: r} = t;
                            if (r && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method)) if (t.error) Nt({
                                category: "fetch",
                                data: t.fetchData,
                                level: "error",
                                type: "http"
                            }, {
                                data: t.error,
                                input: t.args,
                                startTimestamp: n,
                                endTimestamp: r
                            }); else {
                                const e = t.response;
                                Nt({
                                    category: "fetch",
                                    data: {
                                        ...t.fetchData,
                                        status_code: e && e.status
                                    },
                                    type: "http"
                                }, {
                                    input: t.args,
                                    response: e,
                                    startTimestamp: n,
                                    endTimestamp: r
                                });
                            }
                        };
                    }(e)), t.history && qn(function(e) {
                        return function(t) {
                            if (Jt() !== e) return;
                            let n = t.from, r = t.to;
                            const o = Jr(wr.location.href);
                            let i = n ? Jr(n) : void 0;
                            const s = Jr(r);
                            i && i.path || (i = o), o.protocol === s.protocol && o.host === s.host && (r = s.relative), 
                            o.protocol === i.protocol && o.host === i.host && (n = i.relative), Nt({
                                category: "navigation",
                                data: {
                                    from: n,
                                    to: r
                                }
                            });
                        };
                    }(e)), t.sentry && e.on && e.on("beforeSendEvent", function(e) {
                        return function(t) {
                            Jt() === e && Nt({
                                category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                                event_id: t.event_id,
                                level: t.level,
                                message: le(t)
                            }, {
                                event: t
                            });
                        };
                    }(e));
                }
            };
        }, Zr = cn(Kr, Qr), to = () => {
            let e;
            return {
                name: "Dedupe",
                setupOnce() {},
                processEvent(t) {
                    if (t.type) return t;
                    try {
                        if (function(e, t) {
                            return !!t && (!!function(e, t) {
                                const n = e.message, r = t.message;
                                return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!oo(e, t) && !!ro(e, t))));
                            }(e, t) || !!function(e, t) {
                                const n = io(t), r = io(e);
                                return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!oo(e, t) && !!ro(e, t)));
                            }(e, t));
                        }(t, e)) return pr && E.warn("Event dropped due to being a duplicate of previously captured event."), 
                        null;
                    } catch (e) {}
                    return e = t;
                }
            };
        }, no = cn("Dedupe", to);
        function ro(e, t) {
            let n = so(e), r = so(t);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (let e = 0; e < r.length; e++) {
                const t = r[e], o = n[e];
                if (t.filename !== o.filename || t.lineno !== o.lineno || t.colno !== o.colno || t.function !== o.function) return !1;
            }
            return !0;
        }
        function oo(e, t) {
            let n = e.fingerprint, r = t.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""));
            } catch (e) {
                return !1;
            }
        }
        function io(e) {
            return e.exception && e.exception.values && e.exception.values[0];
        }
        function so(e) {
            const t = e.exception;
            if (t) try {
                return t.values[0].stacktrace.frames;
            } catch (e) {
                return;
            }
        }
        let ao = null;
        function co(e) {
            const t = "error";
            $n(t, e), jn(t, uo);
        }
        function uo() {
            ao = b.onerror, b.onerror = function(e, t, n, r, o) {
                return Fn("error", {
                    column: r,
                    error: o,
                    line: n,
                    msg: e,
                    url: t
                }), !(!ao || ao.__SENTRY_LOADER__) && ao.apply(this, arguments);
            }, b.onerror.__SENTRY_INSTRUMENTED__ = !0;
        }
        let lo = null;
        function po(e) {
            const t = "unhandledrejection";
            $n(t, e), jn(t, ho);
        }
        function ho() {
            lo = b.onunhandledrejection, b.onunhandledrejection = function(e) {
                return Fn("unhandledrejection", e), !(lo && !lo.__SENTRY_LOADER__) || lo.apply(this, arguments);
            }, b.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
        }
        const fo = "GlobalHandlers", mo = (e = {}) => {
            const t = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            };
            return {
                name: fo,
                setupOnce() {
                    Error.stackTraceLimit = 50;
                },
                setup(e) {
                    t.onerror && (function(e) {
                        co((t => {
                            const {stackParser: n, attachStacktrace: r} = _o();
                            if (Jt() !== e || Tr()) return;
                            const {msg: o, url: i, line: s, column: a, error: c} = t, u = void 0 === c && A(o) ? function(e, t, n, r) {
                                let i = M(e) ? e.message : e, s = "Error";
                                const a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                                a && (s = a[1], i = a[2]);
                                return yo({
                                    exception: {
                                        values: [ {
                                            type: s,
                                            value: i
                                        } ]
                                    }
                                }, t, n, r);
                            }(o, i, s, a) : yo(br(n, c || o, void 0, r, !1), i, s, a);
                            u.level = "error", Lt(u, {
                                originalException: c,
                                mechanism: {
                                    handled: !1,
                                    type: "onerror"
                                }
                            });
                        }));
                    }(e), vo("onerror")), t.onunhandledrejection && (function(e) {
                        po((t => {
                            const {stackParser: n, attachStacktrace: r} = _o();
                            if (Jt() !== e || Tr()) return;
                            const o = function(e) {
                                if (D(e)) return e;
                                const t = e;
                                try {
                                    if ("reason" in t) return t.reason;
                                    if ("detail" in t && "reason" in t.detail) return t.detail.reason;
                                } catch (e) {}
                                return e;
                            }(t), i = D(o) ? {
                                exception: {
                                    values: [ {
                                        type: "UnhandledRejection",
                                        value: `Non-Error promise rejection captured with value: ${String(o)}`
                                    } ]
                                }
                            } : br(n, o, void 0, r, !0);
                            i.level = "error", Lt(i, {
                                originalException: o,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }
                            });
                        }));
                    }(e), vo("onunhandledrejection"));
                }
            };
        }, go = cn(fo, mo);
        function yo(e, t, n, r) {
            const o = e.exception = e.exception || {}, i = o.values = o.values || [], s = i[0] = i[0] || {}, a = s.stacktrace = s.stacktrace || {}, c = a.frames = a.frames || [], u = isNaN(parseInt(r, 10)) ? void 0 : r, l = isNaN(parseInt(n, 10)) ? void 0 : n, d = A(t) && t.length > 0 ? t : W();
            return 0 === c.length && c.push({
                colno: u,
                filename: d,
                function: "?",
                in_app: !0,
                lineno: l
            }), e;
        }
        function vo(e) {
            pr && E.log(`Global Handler attached: ${e}`);
        }
        function _o() {
            const e = Jt();
            return e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        }
        const bo = "HttpContext", So = () => ({
            name: bo,
            setupOnce() {},
            preprocessEvent(e) {
                if (!wr.navigator && !wr.location && !wr.document) return;
                const t = e.request && e.request.url || wr.location && wr.location.href, {referrer: n} = wr.document || {}, {userAgent: r} = wr.navigator || {}, o = {
                    ...e.request && e.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                }, i = {
                    ...e.request,
                    ...t && {
                        url: t
                    },
                    headers: o
                };
                e.request = i;
            }
        }), xo = cn(bo, So);
        function wo(e, t, n = 250, r, o, i, s) {
            if (!(i.exception && i.exception.values && s && F(s.originalException, Error))) return;
            const a = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
            var c, u;
            a && (i.exception.values = (c = ko(e, t, o, s.originalException, r, i.exception.values, a, 0), 
            u = n, c.map((e => (e.value && (e.value = Y(e.value, u)), e)))));
        }
        function ko(e, t, n, r, o, i, s, a) {
            if (i.length >= n + 1) return i;
            let c = [ ...i ];
            if (F(r[o], Error)) {
                To(s, a);
                const i = e(t, r[o]), u = c.length;
                Eo(i, o, u, a), c = ko(e, t, n, r[o], o, [ i, ...c ], i, u);
            }
            return Array.isArray(r.errors) && r.errors.forEach(((r, i) => {
                if (F(r, Error)) {
                    To(s, a);
                    const u = e(t, r), l = c.length;
                    Eo(u, `errors[${i}]`, l, a), c = ko(e, t, n, r, o, [ u, ...c ], u, l);
                }
            })), c;
        }
        function To(e, t) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            }, e.mechanism = {
                ...e.mechanism,
                ..."AggregateError" === e.type && {
                    is_exception_group: !0
                },
                exception_id: t
            };
        }
        function Eo(e, t, n, r) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            }, e.mechanism = {
                ...e.mechanism,
                type: "chained",
                source: t,
                exception_id: n,
                parent_id: r
            };
        }
        const Co = "LinkedErrors", Io = (e = {}) => {
            const t = e.limit || 5, n = e.key || "cause";
            return {
                name: Co,
                setupOnce() {},
                preprocessEvent(e, r, o) {
                    const i = o.getOptions();
                    wo(hr, i.stackParser, i.maxValueLength, n, t, e, r);
                }
            };
        }, Ro = cn(Co, Io), Mo = [ "EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload" ], Oo = "TryCatch", Ao = (e = {}) => {
            const t = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            };
            return {
                name: Oo,
                setupOnce() {
                    t.setTimeout && Z(wr, "setTimeout", Do), t.setInterval && Z(wr, "setInterval", Do), 
                    t.requestAnimationFrame && Z(wr, "requestAnimationFrame", No), t.XMLHttpRequest && "XMLHttpRequest" in wr && Z(XMLHttpRequest.prototype, "send", Po);
                    const e = t.eventTarget;
                    e && (Array.isArray(e) ? e : Mo).forEach($o);
                }
            };
        }, Lo = cn(Oo, Ao);
        function Do(e) {
            return function(...t) {
                const n = t[0];
                return t[0] = Er(n, {
                    mechanism: {
                        data: {
                            function: wt(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }), e.apply(this, t);
            };
        }
        function No(e) {
            return function(t) {
                return e.apply(this, [ Er(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: wt(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }) ]);
            };
        }
        function Po(e) {
            return function(...t) {
                const n = this;
                return [ "onload", "onerror", "onprogress", "onreadystatechange" ].forEach((e => {
                    e in n && "function" == typeof n[e] && Z(n, e, (function(t) {
                        const n = {
                            mechanism: {
                                data: {
                                    function: e,
                                    handler: wt(t)
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }, r = ne(t);
                        return r && (n.mechanism.data.handler = wt(r)), Er(t, n);
                    }));
                })), e.apply(this, t);
            };
        }
        function $o(e) {
            const t = wr, n = t[e] && t[e].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Z(n, "addEventListener", (function(t) {
                return function(n, r, o) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = Er(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: wt(r),
                                    target: e
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }));
                    } catch (e) {}
                    return t.apply(this, [ n, Er(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: wt(r),
                                target: e
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }), o ]);
                };
            })), Z(n, "removeEventListener", (function(e) {
                return function(t, n, r) {
                    const o = n;
                    try {
                        const n = o && o.__sentry_wrapped__;
                        n && e.call(this, t, n, r);
                    } catch (e) {}
                    return e.call(this, t, o, r);
                };
            })));
        }
        function Fo(e, t, n, r) {
            const o = {
                filename: e,
                function: t,
                in_app: !0
            };
            return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o;
        }
        const Bo = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Ho = /\((\S*)(?::(\d+))(?::(\d+))\)/, qo = [ 30, e => {
            const t = Bo.exec(e);
            if (t) {
                if (t[2] && 0 === t[2].indexOf("eval")) {
                    const e = Ho.exec(t[2]);
                    e && (t[2] = e[1], t[3] = e[2], t[4] = e[3]);
                }
                const [e, n] = ei(t[1] || "?", t[2]);
                return Fo(n, e, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
            }
        } ], Uo = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, zo = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Wo = [ 50, e => {
            const t = Uo.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    const e = zo.exec(t[3]);
                    e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "");
                }
                let e = t[3], n = t[1] || "?";
                return [n, e] = ei(n, e), Fo(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
            }
        } ], Go = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, Vo = [ 40, e => {
            const t = Go.exec(e);
            return t ? Fo(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0;
        } ], Yo = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, Jo = [ 10, e => {
            const t = Yo.exec(e);
            return t ? Fo(t[2], t[3] || "?", +t[1]) : void 0;
        } ], Xo = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i, Ko = [ 20, e => {
            const t = Xo.exec(e);
            return t ? Fo(t[5], t[3] || t[4] || "?", +t[1], +t[2]) : void 0;
        } ], Qo = [ qo, Wo, Vo ], Zo = St(...Qo), ei = (e, t) => {
            const n = -1 !== e.indexOf("safari-extension"), r = -1 !== e.indexOf("safari-web-extension");
            return n || r ? [ -1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}` ] : [ e, t ];
        };
        function ri(e, t = Date.now()) {
            const n = parseInt(`${e}`, 10);
            if (!isNaN(n)) return 1e3 * n;
            const r = Date.parse(`${e}`);
            return isNaN(r) ? 6e4 : r - t;
        }
        function oi(e, t, n = Date.now()) {
            return function(e, t) {
                return e[t] || e.all || 0;
            }(e, t) > n;
        }
        function ii(e, {statusCode: t, headers: n}, r = Date.now()) {
            const o = {
                ...e
            }, i = n && n["x-sentry-rate-limits"], s = n && n["retry-after"];
            if (i) for (const e of i.trim().split(",")) {
                const [t, n, , , i] = e.split(":", 5), s = parseInt(t, 10), a = 1e3 * (isNaN(s) ? 60 : s);
                if (n) for (const e of n.split(";")) "metric_bucket" === e && i && !i.split(";").includes("custom") || (o[e] = r + a); else o.all = r + a;
            } else s ? o.all = r + ri(s, r) : 429 === t && (o.all = r + 6e4);
            return o;
        }
        function ai(e, t, n = function(e) {
            const t = [];
            function n(e) {
                return t.splice(t.indexOf(e), 1)[0];
            }
            return {
                $: t,
                add: function(r) {
                    if (!(void 0 === e || t.length < e)) return ve(new er("Not adding Promise because buffer limit was reached."));
                    const o = r();
                    return -1 === t.indexOf(o) && t.push(o), o.then((() => n(o))).then(null, (() => n(o).then(null, (() => {})))), 
                    o;
                },
                drain: function(e) {
                    return new _e(((n, r) => {
                        let o = t.length;
                        if (!o) return n(!0);
                        const i = setTimeout((() => {
                            e && e > 0 && n(!1);
                        }), e);
                        t.forEach((e => {
                            ye(e).then((() => {
                                --o || (clearTimeout(i), n(!0));
                            }), r);
                        }));
                    }));
                }
            };
        }(e.bufferSize || 30)) {
            let r = {};
            function o(o) {
                const i = [];
                if (Gn(o, ((t, n) => {
                    const o = Kn(n);
                    if (oi(r, o)) {
                        const r = ci(t, n);
                        e.recordDroppedEvent("ratelimit_backoff", o, r);
                    } else i.push(t);
                })), 0 === i.length) return ye();
                const s = zn(o[0], i), a = t => {
                    Gn(s, ((n, r) => {
                        const o = ci(n, r);
                        e.recordDroppedEvent(t, Kn(r), o);
                    }));
                };
                return n.add((() => t({
                    body: Yn(s, e.textEncoder)
                }).then((e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && me && E.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), 
                r = ii(r, e), e)), (e => {
                    throw a("network_error"), e;
                })))).then((e => e), (e => {
                    if (e instanceof er) return me && E.error("Skipped sending event because buffer is full."), 
                    a("queue_overflow"), ye();
                    throw e;
                }));
            }
            return o.__sentry__baseTransport__ = !0, {
                send: o,
                flush: e => n.drain(e)
            };
        }
        function ci(e, t) {
            if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0;
        }
        let ui;
        function li(e, t = function() {
            if (ui) return ui;
            if (An(wr.fetch)) return ui = wr.fetch.bind(wr);
            const e = wr.document;
            let t = wr.fetch;
            if (e && "function" == typeof e.createElement) try {
                const n = e.createElement("iframe");
                n.hidden = !0, e.head.appendChild(n);
                const r = n.contentWindow;
                r && r.fetch && (t = r.fetch), e.head.removeChild(n);
            } catch (e) {
                pr && E.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
            }
            return ui = t.bind(wr);
        }()) {
            let n = 0, r = 0;
            return ai(e, (function(o) {
                const i = o.body.length;
                n += i, r++;
                const s = {
                    body: o.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: e.headers,
                    keepalive: n <= 6e4 && r < 15,
                    ...e.fetchOptions
                };
                try {
                    return t(e.url, s).then((e => (n -= i, r--, {
                        statusCode: e.status,
                        headers: {
                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": e.headers.get("Retry-After")
                        }
                    })));
                } catch (e) {
                    return ui = void 0, n -= i, r--, ve(e);
                }
            }));
        }
        function pi(e) {
            return ai(e, (function(t) {
                return new _e(((n, r) => {
                    const o = new XMLHttpRequest;
                    o.onerror = r, o.onreadystatechange = () => {
                        4 === o.readyState && n({
                            statusCode: o.status,
                            headers: {
                                "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": o.getResponseHeader("Retry-After")
                            }
                        });
                    }, o.open("POST", e.url);
                    for (const t in e.headers) Object.prototype.hasOwnProperty.call(e.headers, t) && o.setRequestHeader(t, e.headers[t]);
                    o.send(t.body);
                }));
            }));
        }
        const hi = [ pn(), vn(), Ao(), Qr(), mo(), Io(), to(), So() ];
        function fi(e) {
            return [ ...hi ];
        }
        function mi(e = {}) {
            void 0 === e.defaultIntegrations && (e.defaultIntegrations = fi()), void 0 === e.release && ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__), 
            wr.SENTRY_RELEASE && wr.SENTRY_RELEASE.id && (e.release = wr.SENTRY_RELEASE.id)), 
            void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0);
            const t = {
                ...e,
                stackParser: (n = e.stackParser || Zo, Array.isArray(n) ? St(...n) : n),
                integrations: rn(e),
                transport: e.transport || (On() ? li : pi)
            };
            var n;
            !function(e, t) {
                !0 === t.debug && (me ? E.enable() : T((() => {}))), Kt().update(t.initialScope);
                const n = new e(t);
                bn(n), function(e) {
                    e.init ? e.init() : e.setupIntegrations && e.setupIntegrations();
                }(n);
            }(Ir, t), e.autoSessionTracking && (void 0 !== wr.document ? (Qt({
                ignoreDuration: !0
            }), tn(), qn((({from: e, to: t}) => {
                void 0 !== e && e !== t && (Qt({
                    ignoreDuration: !0
                }), tn());
            }))) : pr && E.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
        }
        const gi = (e = {}, t = dt()) => {
            if (!wr.document) return void (pr && E.error("Global document not defined in showReportDialog call"));
            const {client: n, scope: r} = t.getStackTop(), o = e.dsn || n && n.getDsn();
            if (!o) return void (pr && E.error("DSN not configured for showReportDialog call"));
            r && (e.user = {
                ...r.getUser(),
                ...e.user
            }), e.eventId || (e.eventId = t.lastEventId());
            const i = wr.document.createElement("script");
            i.async = !0, i.crossOrigin = "anonymous", i.src = function(e, t) {
                const n = Tn(e);
                if (!n) return "";
                const r = `${Cn(n)}embed/error-page/`;
                let o = `dsn=${xn(n)}`;
                for (const e in t) if ("dsn" !== e && "onClose" !== e) if ("user" === e) {
                    const e = t.user;
                    if (!e) continue;
                    e.name && (o += `&name=${encodeURIComponent(e.name)}`), e.email && (o += `&email=${encodeURIComponent(e.email)}`);
                } else o += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
                return `${r}?${o}`;
            }(o, e), e.onLoad && (i.onload = e.onLoad);
            const {onClose: s} = e;
            if (s) {
                const e = t => {
                    if ("__sentry_reportdialog_closed__" === t.data) try {
                        s();
                    } finally {
                        wr.removeEventListener("message", e);
                    }
                };
                wr.addEventListener("message", e);
            }
            const a = wr.document.head || wr.document.body;
            a ? a.appendChild(i) : pr && E.error("Not injecting report dialog. No injection point found in HTML");
        };
        function yi() {}
        function vi(e) {
            e();
        }
        function _i(e) {
            return Er(e)();
        }
        function bi(e) {
            const t = Jt();
            t && t.captureUserFeedback(e);
        }
        function xi(e, t) {
            const n = {
                type: t.name || t.constructor.name,
                value: t.message
            }, r = function(e, t) {
                return e(t.stack || "", 1);
            }(e, t);
            return r.length && (n.stacktrace = {
                frames: r
            }), n;
        }
        const wi = "LinkedErrors", ki = cn(wi, ((e = {}) => {
            const t = e.limit || 5, n = e.key || "cause";
            return {
                name: wi,
                setupOnce() {},
                preprocessEvent(e, r, o) {
                    const i = o.getOptions();
                    wo(xi, i.stackParser, i.maxValueLength, n, t, e, r);
                }
            };
        })), Ti = e, Ei = new Map, Ci = new Set;
        function Ii(e, t) {
            return function(e) {
                if (b._sentryModuleMetadata) for (const t of Object.keys(b._sentryModuleMetadata)) {
                    const n = b._sentryModuleMetadata[t];
                    if (Ci.has(t)) continue;
                    Ci.add(t);
                    const r = e(t);
                    for (const e of r.reverse()) if (e.filename) {
                        Ei.set(e.filename, n);
                        break;
                    }
                }
            }(e), Ei.get(t);
        }
        const Ri = "ModuleMetadata", Mi = () => ({
            name: Ri,
            setupOnce() {},
            setup(e) {
                "function" == typeof e.on && e.on("beforeEnvelope", (e => {
                    Gn(e, ((e, t) => {
                        if ("event" === t) {
                            const t = Array.isArray(e) ? e[1] : void 0;
                            t && (function(e) {
                                try {
                                    e.exception.values.forEach((e => {
                                        if (e.stacktrace) for (const t of e.stacktrace.frames || []) delete t.module_metadata;
                                    }));
                                } catch (e) {}
                            }(t), e[1] = t);
                        }
                    }));
                }));
            },
            processEvent: (e, t, n) => (function(e, t) {
                try {
                    t.exception.values.forEach((t => {
                        if (t.stacktrace) for (const n of t.stacktrace.frames || []) {
                            if (!n.filename) continue;
                            const t = Ii(e, n.filename);
                            t && (n.module_metadata = t);
                        }
                    }));
                } catch (e) {}
            }(n.getOptions().stackParser, e), e)
        }), Oi = cn(Ri, Mi), Ai = "sentry.source", Li = "sentry.sample_rate", Di = "sentry.op", Ni = "sentry.origin";
        function Pi(e) {
            return (e || dt()).getScope().getTransaction();
        }
        const $i = He;
        let ji = !1;
        function Fi() {
            const e = Pi();
            if (e) {
                const t = "internal_error";
                me && E.log(`[Tracing] Transaction: ${t} -> Global error occured`), e.setStatus(t);
            }
        }
        function Bi(e, t, n = (() => {})) {
            let r;
            try {
                r = e();
            } catch (e) {
                throw t(e), n(), e;
            }
            return function(e, t, n) {
                return $(e) ? e.then((e => (n(), e)), (e => {
                    throw t(e), n(), e;
                })) : (n(), e);
            }(r, t, n);
        }
        function Hi(e) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
            const t = Jt(), n = e || t && t.getOptions();
            return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n);
        }
        function qi(e, t, n = (() => {}), r = (() => {})) {
            const o = dt(), i = Kt(), s = i.getSpan(), a = Ji(e), c = Yi(o, {
                parentSpan: s,
                spanContext: a,
                forceTransaction: !1,
                scope: i
            });
            return i.setSpan(c), Bi((() => t(c)), (e => {
                c && c.setStatus("internal_error"), n(e, c);
            }), (() => {
                c && c.end(), i.setSpan(s), r();
            }));
        }
        function Ui(e, t) {
            const n = Ji(e);
            return ft((() => qt(e.scope, (r => {
                const o = dt(), i = r.getSpan(), s = e.onlyIfParent && !i ? void 0 : Yi(o, {
                    parentSpan: i,
                    spanContext: n,
                    forceTransaction: e.forceTransaction,
                    scope: r
                });
                return Bi((() => t(s)), (() => {
                    if (s) {
                        const {status: e} = Je(s);
                        e && "ok" !== e || s.setStatus("internal_error");
                    }
                }), (() => s && s.end()));
            }))));
        }
        function zi(e, t) {
            const n = Ji(e);
            return ft((() => qt(e.scope, (r => {
                const o = dt(), i = r.getSpan(), s = e.onlyIfParent && !i ? void 0 : Yi(o, {
                    parentSpan: i,
                    spanContext: n,
                    forceTransaction: e.forceTransaction,
                    scope: r
                });
                function a() {
                    s && s.end();
                }
                return Bi((() => t(s, a)), (() => {
                    if (s && s.isRecording()) {
                        const {status: e} = Je(s);
                        e && "ok" !== e || s.setStatus("internal_error");
                    }
                }));
            }))));
        }
        function Wi(e) {
            if (!Hi()) return;
            const t = Ji(e), n = dt(), r = e.scope ? e.scope.getSpan() : Gi();
            if (e.onlyIfParent && !r) return;
            const o = (e.scope || Kt()).clone();
            return Yi(n, {
                parentSpan: r,
                spanContext: t,
                forceTransaction: e.forceTransaction,
                scope: o
            });
        }
        function Gi() {
            return Kt().getSpan();
        }
        Fi.tag = "sentry_tracingErrorCallback";
        const Vi = ({sentryTrace: e, baggage: t}, n) => {
            const r = Kt(), {traceparentData: o, dynamicSamplingContext: i, propagationContext: s} = function(e, t) {
                const n = He(e), r = $e(t), {traceId: o, parentSpanId: i, parentSampled: s} = n || {};
                return n ? {
                    traceparentData: n,
                    dynamicSamplingContext: r || {},
                    propagationContext: {
                        traceId: o || ce(),
                        parentSpanId: i || ce().substring(16),
                        spanId: ce().substring(16),
                        sampled: s,
                        dsc: r || {}
                    }
                } : {
                    traceparentData: n,
                    dynamicSamplingContext: void 0,
                    propagationContext: {
                        traceId: o || ce(),
                        spanId: ce().substring(16)
                    }
                };
            }(e, t);
            r.setPropagationContext(s), me && o && E.log(`[Tracing] Continuing trace ${o.traceId}.`);
            const a = {
                ...o,
                metadata: se({
                    dynamicSamplingContext: i
                })
            };
            return n ? ft((() => n(a))) : a;
        };
        function Yi(e, {parentSpan: t, spanContext: n, forceTransaction: r, scope: o}) {
            if (!Hi()) return;
            const i = pt();
            let s;
            if (t && !r) s = t.startChild(n); else if (t) {
                const r = Qe(t), {traceId: o, spanId: i} = t.spanContext(), a = Xe(t);
                s = e.startTransaction({
                    traceId: o,
                    parentSpanId: i,
                    parentSampled: a,
                    ...n,
                    metadata: {
                        dynamicSamplingContext: r,
                        ...n.metadata
                    }
                });
            } else {
                const {traceId: t, dsc: r, parentSpanId: a, sampled: c} = {
                    ...i.getPropagationContext(),
                    ...o.getPropagationContext()
                };
                s = e.startTransaction({
                    traceId: t,
                    parentSpanId: a,
                    parentSampled: c,
                    ...n,
                    metadata: {
                        dynamicSamplingContext: r,
                        ...n.metadata
                    }
                });
            }
            return o.setSpan(s), function(e, t, n) {
                e && (ee(e, Ki, n), ee(e, Xi, t));
            }(s, o, i), s;
        }
        function Ji(e) {
            if (e.startTime) {
                const t = {
                    ...e
                };
                return t.startTimestamp = Ve(e.startTime), delete t.startTime, t;
            }
            return e;
        }
        const Xi = "_sentryScope", Ki = "_sentryIsolationScope";
        let Qi;
        function Zi(e) {
            return Qi ? Qi.get(e) : void 0;
        }
        function es(e) {
            const t = Zi(e);
            if (!t) return;
            const n = {};
            for (const [, [e, r]] of t) n[e] || (n[e] = []), n[e].push(se(r));
            return n;
        }
        var ts;
        function ns(e) {
            if (e < 400 && e >= 100) return "ok";
            if (e >= 400 && e < 500) switch (e) {
              case 401:
                return "unauthenticated";

              case 403:
                return "permission_denied";

              case 404:
                return "not_found";

              case 409:
                return "already_exists";

              case 413:
                return "failed_precondition";

              case 429:
                return "resource_exhausted";

              default:
                return "invalid_argument";
            }
            if (e >= 500 && e < 600) switch (e) {
              case 501:
                return "unimplemented";

              case 503:
                return "unavailable";

              case 504:
                return "deadline_exceeded";

              default:
                return "internal_error";
            }
            return "unknown_error";
        }
        !function(e) {
            e.Ok = "ok", e.DeadlineExceeded = "deadline_exceeded", e.Unauthenticated = "unauthenticated", 
            e.PermissionDenied = "permission_denied", e.NotFound = "not_found", e.ResourceExhausted = "resource_exhausted", 
            e.InvalidArgument = "invalid_argument", e.Unimplemented = "unimplemented", e.Unavailable = "unavailable", 
            e.InternalError = "internal_error", e.UnknownError = "unknown_error", e.Cancelled = "cancelled", 
            e.AlreadyExists = "already_exists", e.FailedPrecondition = "failed_precondition", 
            e.Aborted = "aborted", e.OutOfRange = "out_of_range", e.DataLoss = "data_loss";
        }(ts || (ts = {}));
        const rs = ns;
        function os(e, t) {
            e.setTag("http.status_code", String(t)), e.setData("http.response.status_code", t);
            const n = ns(t);
            "unknown_error" !== n && e.setStatus(n);
        }
        class is {
            constructor(e = 1e3) {
                this._maxlen = e, this.spans = [];
            }
            add(e) {
                this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e);
            }
        }
        class ss {
            constructor(e = {}) {
                this._traceId = e.traceId || ce(), this._spanId = e.spanId || ce().substring(16), 
                this._startTime = e.startTimestamp || Ee(), this.tags = e.tags ? {
                    ...e.tags
                } : {}, this.data = e.data ? {
                    ...e.data
                } : {}, this.instrumenter = e.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
                    [Ni]: e.origin || "manual",
                    [Di]: e.op,
                    ...e.attributes
                }), this._name = e.name || e.description, e.parentSpanId && (this._parentSpanId = e.parentSpanId), 
                "sampled" in e && (this._sampled = e.sampled), e.status && (this._status = e.status), 
                e.endTimestamp && (this._endTime = e.endTimestamp), void 0 !== e.exclusiveTime && (this._exclusiveTime = e.exclusiveTime), 
                this._measurements = e.measurements ? {
                    ...e.measurements
                } : {};
            }
            get name() {
                return this._name || "";
            }
            set name(e) {
                this.updateName(e);
            }
            get description() {
                return this._name;
            }
            set description(e) {
                this._name = e;
            }
            get traceId() {
                return this._traceId;
            }
            set traceId(e) {
                this._traceId = e;
            }
            get spanId() {
                return this._spanId;
            }
            set spanId(e) {
                this._spanId = e;
            }
            set parentSpanId(e) {
                this._parentSpanId = e;
            }
            get parentSpanId() {
                return this._parentSpanId;
            }
            get sampled() {
                return this._sampled;
            }
            set sampled(e) {
                this._sampled = e;
            }
            get attributes() {
                return this._attributes;
            }
            set attributes(e) {
                this._attributes = e;
            }
            get startTimestamp() {
                return this._startTime;
            }
            set startTimestamp(e) {
                this._startTime = e;
            }
            get endTimestamp() {
                return this._endTime;
            }
            set endTimestamp(e) {
                this._endTime = e;
            }
            get status() {
                return this._status;
            }
            set status(e) {
                this._status = e;
            }
            get op() {
                return this._attributes[Di];
            }
            set op(e) {
                this.setAttribute(Di, e);
            }
            get origin() {
                return this._attributes[Ni];
            }
            set origin(e) {
                this.setAttribute(Ni, e);
            }
            spanContext() {
                const {_spanId: e, _traceId: t, _sampled: n} = this;
                return {
                    spanId: e,
                    traceId: t,
                    traceFlags: n ? 1 : 0
                };
            }
            startChild(e) {
                const t = new ss({
                    ...e,
                    parentSpanId: this._spanId,
                    sampled: this._sampled,
                    traceId: this._traceId
                });
                t.spanRecorder = this.spanRecorder, t.spanRecorder && t.spanRecorder.add(t);
                const n = Ae(this);
                if (t.transaction = n, me && n) {
                    const r = `[Tracing] Starting '${e && e.op || "< unknown op >"}' span on transaction '${Je(t).description || "< unknown name >"}' (${n.spanContext().spanId}).`;
                    E.log(r), this._logMessage = r;
                }
                return t;
            }
            setTag(e, t) {
                return this.tags = {
                    ...this.tags,
                    [e]: t
                }, this;
            }
            setData(e, t) {
                return this.data = {
                    ...this.data,
                    [e]: t
                }, this;
            }
            setAttribute(e, t) {
                void 0 === t ? delete this._attributes[e] : this._attributes[e] = t;
            }
            setAttributes(e) {
                Object.keys(e).forEach((t => this.setAttribute(t, e[t])));
            }
            setStatus(e) {
                return this._status = e, this;
            }
            setHttpStatus(e) {
                return os(this, e), this;
            }
            setName(e) {
                this.updateName(e);
            }
            updateName(e) {
                return this._name = e, this;
            }
            isSuccess() {
                return "ok" === this._status;
            }
            finish(e) {
                return this.end(e);
            }
            end(e) {
                if (this._endTime) return;
                const t = Ae(this);
                if (me && t && t.spanContext().spanId !== this._spanId) {
                    const e = this._logMessage;
                    e && E.log(e.replace("Starting", "Finishing"));
                }
                this._endTime = Ve(e);
            }
            toTraceparent() {
                return Ge(this);
            }
            toContext() {
                return se({
                    data: this._getData(),
                    description: this._name,
                    endTimestamp: this._endTime,
                    op: this.op,
                    parentSpanId: this._parentSpanId,
                    sampled: this._sampled,
                    spanId: this._spanId,
                    startTimestamp: this._startTime,
                    status: this._status,
                    tags: this.tags,
                    traceId: this._traceId
                });
            }
            updateWithContext(e) {
                return this.data = e.data || {}, this._name = e.name || e.description, this._endTime = e.endTimestamp, 
                this.op = e.op, this._parentSpanId = e.parentSpanId, this._sampled = e.sampled, 
                this._spanId = e.spanId || this._spanId, this._startTime = e.startTimestamp || this._startTime, 
                this._status = e.status, this.tags = e.tags || {}, this._traceId = e.traceId || this._traceId, 
                this;
            }
            getTraceContext() {
                return We(this);
            }
            getSpanJSON() {
                return se({
                    data: this._getData(),
                    description: this._name,
                    op: this._attributes[Di],
                    parent_span_id: this._parentSpanId,
                    span_id: this._spanId,
                    start_timestamp: this._startTime,
                    status: this._status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this._endTime,
                    trace_id: this._traceId,
                    origin: this._attributes[Ni],
                    _metrics_summary: es(this),
                    profile_id: this._attributes.profile_id,
                    exclusive_time: this._exclusiveTime,
                    measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
                });
            }
            isRecording() {
                return !this._endTime && !!this._sampled;
            }
            toJSON() {
                return this.getSpanJSON();
            }
            _getData() {
                const {data: e, _attributes: t} = this, n = Object.keys(e).length > 0, r = Object.keys(t).length > 0;
                if (n || r) return n && r ? {
                    ...e,
                    ...t
                } : n ? e : t;
            }
        }
        class as extends ss {
            constructor(e, t) {
                super(e), this._contexts = {}, this._hub = t || dt(), this._name = e.name || "", 
                this._metadata = {
                    ...e.metadata
                }, this._trimEnd = e.trimEnd, this.transaction = this;
                const n = this._metadata.dynamicSamplingContext;
                n && (this._frozenDynamicSamplingContext = {
                    ...n
                });
            }
            get name() {
                return this._name;
            }
            set name(e) {
                this.setName(e);
            }
            get metadata() {
                return {
                    source: "custom",
                    spanMetadata: {},
                    ...this._metadata,
                    ...this._attributes[Ai] && {
                        source: this._attributes[Ai]
                    },
                    ...this._attributes[Li] && {
                        sampleRate: this._attributes[Li]
                    }
                };
            }
            set metadata(e) {
                this._metadata = e;
            }
            setName(e, t = "custom") {
                this._name = e, this.setAttribute(Ai, t);
            }
            updateName(e) {
                return this._name = e, this;
            }
            initSpanRecorder(e = 1e3) {
                this.spanRecorder || (this.spanRecorder = new is(e)), this.spanRecorder.add(this);
            }
            setContext(e, t) {
                null === t ? delete this._contexts[e] : this._contexts[e] = t;
            }
            setMeasurement(e, t, n = "") {
                this._measurements[e] = {
                    value: t,
                    unit: n
                };
            }
            setMetadata(e) {
                this._metadata = {
                    ...this._metadata,
                    ...e
                };
            }
            end(e) {
                const t = Ve(e), n = this._finishTransaction(t);
                if (n) return this._hub.captureEvent(n);
            }
            toContext() {
                return se({
                    ...super.toContext(),
                    name: this._name,
                    trimEnd: this._trimEnd
                });
            }
            updateWithContext(e) {
                return super.updateWithContext(e), this._name = e.name || "", this._trimEnd = e.trimEnd, 
                this;
            }
            getDynamicSamplingContext() {
                return Qe(this);
            }
            setHub(e) {
                this._hub = e;
            }
            getProfileId() {
                if (void 0 !== this._contexts && void 0 !== this._contexts.profile) return this._contexts.profile.profile_id;
            }
            _finishTransaction(e) {
                if (void 0 !== this._endTime) return;
                this._name || (me && E.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), 
                this._name = "<unlabeled transaction>"), super.end(e);
                const t = this._hub.getClient();
                if (t && t.emit && t.emit("finishTransaction", this), !0 !== this._sampled) return me && E.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), 
                void (t && t.recordDroppedEvent("sample_rate", "transaction"));
                const n = this.spanRecorder ? this.spanRecorder.spans.filter((e => e !== this && Je(e).timestamp)) : [];
                if (this._trimEnd && n.length > 0) {
                    const e = n.map((e => Je(e).timestamp)).filter(Boolean);
                    this._endTime = e.reduce(((e, t) => e > t ? e : t));
                }
                const {scope: r, isolationScope: o} = {
                    scope: this[Xi],
                    isolationScope: this[Ki]
                };
                const {metadata: s} = this, {source: a} = s, c = {
                    contexts: {
                        ...this._contexts,
                        trace: We(this)
                    },
                    spans: n,
                    start_timestamp: this._startTime,
                    tags: this.tags,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        ...s,
                        capturedSpanScope: r,
                        capturedSpanIsolationScope: o,
                        ...se({
                            dynamicSamplingContext: Qe(this)
                        })
                    },
                    _metrics_summary: es(this),
                    ...a && {
                        transaction_info: {
                            source: a
                        }
                    }
                };
                return Object.keys(this._measurements).length > 0 && (me && E.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), 
                c.measurements = this._measurements), me && E.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), 
                c;
            }
        }
        const cs = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            heartbeatInterval: 5e3
        }, us = [ "heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled" ];
        class ls extends is {
            constructor(e, t, n, r) {
                super(r), this._pushActivity = e, this._popActivity = t, this.transactionSpanId = n;
            }
            add(e) {
                if (e.spanContext().spanId !== this.transactionSpanId) {
                    const t = e.end;
                    e.end = (...n) => (this._popActivity(e.spanContext().spanId), t.apply(e, n)), void 0 === Je(e).timestamp && this._pushActivity(e.spanContext().spanId);
                }
                super.add(e);
            }
        }
        class ds extends as {
            constructor(e, t, n = cs.idleTimeout, r = cs.finalTimeout, o = cs.heartbeatInterval, i = !1, s = !1) {
                super(e, t), this._idleHub = t, this._idleTimeout = n, this._finalTimeout = r, this._heartbeatInterval = o, 
                this._onScope = i, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, 
                this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = us[4], 
                this._autoFinishAllowed = !s, i && (me && E.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), 
                t.getScope().setSpan(this)), s || this._restartIdleTimeout(), setTimeout((() => {
                    this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = us[3], 
                    this.end());
                }), this._finalTimeout);
            }
            end(e) {
                const t = Ve(e);
                if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setAttribute("finishReason", this._finishReason), 
                this.spanRecorder) {
                    me && E.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
                    for (const e of this._beforeFinishCallbacks) e(this, t);
                    this.spanRecorder.spans = this.spanRecorder.spans.filter((e => {
                        if (e.spanContext().spanId === this.spanContext().spanId) return !0;
                        Je(e).timestamp || (e.setStatus("cancelled"), e.end(t), me && E.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                        const {start_timestamp: n, timestamp: r} = Je(e), o = n && n < t, i = (this._finalTimeout + this._idleTimeout) / 1e3, s = r && n && r - n < i;
                        if (me) {
                            const t = JSON.stringify(e, void 0, 2);
                            o ? s || E.log("[Tracing] discarding Span since it finished after Transaction final timeout", t) : E.log("[Tracing] discarding Span since it happened after Transaction was finished", t);
                        }
                        return o && s;
                    })), me && E.log("[Tracing] flushing IdleTransaction");
                } else me && E.log("[Tracing] No active IdleTransaction");
                if (this._onScope) {
                    const e = this._idleHub.getScope();
                    e.getTransaction() === this && e.setSpan(void 0);
                }
                return super.end(e);
            }
            registerBeforeFinishCallback(e) {
                this._beforeFinishCallbacks.push(e);
            }
            initSpanRecorder(e) {
                if (!this.spanRecorder) {
                    const t = e => {
                        this._finished || this._pushActivity(e);
                    }, n = e => {
                        this._finished || this._popActivity(e);
                    };
                    this.spanRecorder = new ls(t, n, this.spanContext().spanId, e), me && E.log("Starting heartbeat"), 
                    this._pingHeartbeat();
                }
                this.spanRecorder.add(this);
            }
            cancelIdleTimeout(e, {restartOnChildSpanChange: t} = {
                restartOnChildSpanChange: !0
            }) {
                this._idleTimeoutCanceledPermanently = !1 === t, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), 
                this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = us[5], 
                this.end(e)));
            }
            setFinishReason(e) {
                this._finishReason = e;
            }
            sendAutoFinishSignal() {
                this._autoFinishAllowed || (me && E.log("[Tracing] Received finish signal for idle transaction."), 
                this._restartIdleTimeout(), this._autoFinishAllowed = !0);
            }
            _restartIdleTimeout(e) {
                this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout((() => {
                    this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = us[1], 
                    this.end(e));
                }), this._idleTimeout);
            }
            _pushActivity(e) {
                this.cancelIdleTimeout(void 0, {
                    restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                }), me && E.log(`[Tracing] pushActivity: ${e}`), this.activities[e] = !0, me && E.log("[Tracing] new activities count", Object.keys(this.activities).length);
            }
            _popActivity(e) {
                if (this.activities[e] && (me && E.log(`[Tracing] popActivity ${e}`), delete this.activities[e], 
                me && E.log("[Tracing] new activities count", Object.keys(this.activities).length)), 
                0 === Object.keys(this.activities).length) {
                    const e = Ee();
                    this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = us[5], 
                    this.end(e)) : this._restartIdleTimeout(e + this._idleTimeout / 1e3);
                }
            }
            _beat() {
                if (this._finished) return;
                const e = Object.keys(this.activities).join("");
                e === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, 
                this._prevHeartbeatString = e, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (me && E.log("[Tracing] Transaction finished because of no change for 3 heart beats"), 
                this.setStatus("deadline_exceeded"), this._finishReason = us[0], this.end()) : this._pingHeartbeat();
            }
            _pingHeartbeat() {
                me && E.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), 
                setTimeout((() => {
                    this._beat();
                }), this._heartbeatInterval);
            }
        }
        function ps(e, t, n) {
            if (!Hi(t)) return e.sampled = !1, e;
            if (void 0 !== e.sampled) return e.setAttribute(Li, Number(e.sampled)), e;
            let r;
            return "function" == typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setAttribute(Li, Number(r))) : void 0 !== n.parentSampled ? r = n.parentSampled : void 0 !== t.tracesSampleRate ? (r = t.tracesSampleRate, 
            e.setAttribute(Li, Number(r))) : (r = 1, e.setAttribute(Li, r)), hs(r) ? r ? (e.sampled = Math.random() < r, 
            e.sampled ? (me && E.log(`[Tracing] starting ${e.op} transaction - ${Je(e).description}`), 
            e) : (me && E.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), 
            e)) : (me && E.log("[Tracing] Discarding transaction because " + ("function" == typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), 
            e.sampled = !1, e) : (me && E.warn("[Tracing] Discarding transaction because of invalid sample rate."), 
            e.sampled = !1, e);
        }
        function hs(e) {
            return j(e) || "number" != typeof e && "boolean" != typeof e ? (me && E.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`), 
            !1) : !(e < 0 || e > 1) || (me && E.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`), 
            !1);
        }
        function fs() {
            const e = this.getScope().getSpan();
            return e ? {
                "sentry-trace": Ge(e)
            } : {};
        }
        function ms(e, t) {
            const n = this.getClient(), r = n && n.getOptions() || {}, o = r.instrumenter || "sentry", i = e.instrumenter || "sentry";
            o !== i && (me && E.error(`A transaction was started with instrumenter=\`${i}\`, but the SDK is configured with the \`${o}\` instrumenter.\nThe transaction will not be sampled. Please use the ${o} instrumentation to start transactions.`), 
            e.sampled = !1);
            let s = new as(e, this);
            return s = ps(s, r, {
                name: e.name,
                parentSampled: e.parentSampled,
                transactionContext: e,
                attributes: {
                    ...e.data,
                    ...e.attributes
                },
                ...t
            }), s.isRecording() && s.initSpanRecorder(r._experiments && r._experiments.maxSpans), 
            n && n.emit && n.emit("startTransaction", s), s;
        }
        function gs(e, t, n, r, o, i, s, a = !1) {
            const c = e.getClient(), u = c && c.getOptions() || {};
            let l = new ds(t, e, n, r, s, o, a);
            return l = ps(l, u, {
                name: t.name,
                parentSampled: t.parentSampled,
                transactionContext: t,
                attributes: {
                    ...t.data,
                    ...t.attributes
                },
                ...i
            }), l.isRecording() && l.initSpanRecorder(u._experiments && u._experiments.maxSpans), 
            c && c.emit && c.emit("startTransaction", l), l;
        }
        function ys() {
            const e = ut();
            e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}, e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = ms), 
            e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = fs), 
            ji || (ji = !0, co(Fi), po(Fi)));
        }
        function vs(e, t) {
            let n;
            return Gn(e, ((e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0), 
            !!n))), n;
        }
        function _s(e, t) {
            return n => {
                const r = e(n), o = new Map;
                function i(t, r) {
                    const i = r ? `${t}:${r}` : t;
                    let s = o.get(i);
                    if (!s) {
                        const a = wn(t);
                        if (!a) return;
                        const c = Rn(a, n.tunnel);
                        s = r ? function(e, t) {
                            return n => {
                                const r = e(n);
                                return {
                                    ...r,
                                    send: async e => {
                                        const n = vs(e, [ "event", "transaction", "profile", "replay_event" ]);
                                        return n && (n.release = t), r.send(e);
                                    }
                                };
                            };
                        }(e, r)({
                            ...n,
                            url: c
                        }) : e({
                            ...n,
                            url: c
                        }), o.set(i, s);
                    }
                    return [ t, s ];
                }
                return {
                    send: async function(e) {
                        const n = t({
                            envelope: e,
                            getEvent: function(t) {
                                const n = t && t.length ? t : [ "event" ];
                                return vs(e, n);
                            }
                        }).map((e => "string" == typeof e ? i(e, void 0) : i(e.dsn, e.release))).filter((e => !!e));
                        return 0 === n.length && n.push([ "", r ]), (await Promise.all(n.map((([t, n]) => n.send(function(e, t) {
                            return zn(t ? {
                                ...e[0],
                                dsn: t
                            } : e[0], e[1]);
                        }(e, t))))))[0];
                    },
                    flush: async function(e) {
                        const t = [ await r.flush(e) ];
                        for (const [, n] of o) t.push(await n.flush(e));
                        return t.every((e => e));
                    }
                };
            };
        }
        const bs = {
            c: class {
                constructor(e) {
                    this._value = e;
                }
                get weight() {
                    return 1;
                }
                add(e) {
                    this._value += e;
                }
                toString() {
                    return `${this._value}`;
                }
            },
            g: class {
                constructor(e) {
                    this._last = e, this._min = e, this._max = e, this._sum = e, this._count = 1;
                }
                get weight() {
                    return 5;
                }
                add(e) {
                    this._last = e, e < this._min && (this._min = e), e > this._max && (this._max = e), 
                    this._sum += e, this._count++;
                }
                toString() {
                    return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
                }
            },
            d: class {
                constructor(e) {
                    this._value = [ e ];
                }
                get weight() {
                    return this._value.length;
                }
                add(e) {
                    this._value.push(e);
                }
                toString() {
                    return this._value.join(":");
                }
            },
            s: class {
                constructor(e) {
                    this.first = e, this._value = new Set([ e ]);
                }
                get weight() {
                    return this._value.size;
                }
                add(e) {
                    this._value.add(e);
                }
                toString() {
                    return Array.from(this._value).map((e => "string" == typeof e ? function(e) {
                        let t = 0;
                        for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
                        return t >>> 0;
                    }(e) : e)).join(":");
                }
            }
        };
        class Ss {
            constructor(e) {
                this._client = e, this._buckets = new Map, this._interval = setInterval((() => this.flush()), 5e3);
            }
            add(e, t, n, r = "none", o = {}, i = Ee()) {
                const s = Math.floor(i), a = t.replace(/[^\w\-.]+/gi, "_"), c = function(e) {
                    const t = {};
                    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[nr(n)] = or(String(e[n])));
                    return t;
                }(o), u = function(e) {
                    return e.replace(/[^\w]+/gi, "_");
                }(r), l = function(e, t, n, r) {
                    return `${e}${t}${n}${Object.entries(se(r)).sort(((e, t) => e[0].localeCompare(t[0])))}`;
                }(e, a, u, c);
                let d = this._buckets.get(l);
                const p = d && "s" === e ? d.metric.weight : 0;
                d ? (d.metric.add(n), d.timestamp < s && (d.timestamp = s)) : (d = {
                    metric: new bs[e](n),
                    timestamp: s,
                    metricType: e,
                    name: a,
                    unit: u,
                    tags: c
                }, this._buckets.set(l, d)), function(e, t, n, r, o, i) {
                    const s = Gi();
                    if (s) {
                        const a = Zi(s) || new Map, c = `${e}:${t}@${r}`, u = a.get(i);
                        if (u) {
                            const [, e] = u;
                            a.set(i, [ c, {
                                min: Math.min(e.min, n),
                                max: Math.max(e.max, n),
                                count: e.count += 1,
                                sum: e.sum += n,
                                tags: e.tags
                            } ]);
                        } else a.set(i, [ c, {
                            min: n,
                            max: n,
                            count: 1,
                            sum: n,
                            tags: o
                        } ]);
                        Qi || (Qi = new WeakMap), Qi.set(s, a);
                    }
                }(e, a, "string" == typeof n ? d.metric.weight - p : n, u, o, l);
            }
            flush() {
                if (0 !== this._buckets.size) {
                    if (this._client.captureAggregateMetrics) {
                        const e = Array.from(this._buckets).map((([, e]) => e));
                        this._client.captureAggregateMetrics(e);
                    }
                    this._buckets.clear();
                }
            }
            close() {
                clearInterval(this._interval), this.flush();
            }
        }
        const xs = "MetricsAggregator", ws = () => ({
            name: xs,
            setupOnce() {},
            setup(e) {
                e.metricsAggregator = new Ss(e);
            }
        });
        function ks(e, t, n, r = {}) {
            const o = Jt(), i = Kt();
            if (o) {
                if (!o.metricsAggregator) return void (me && E.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs"));
                const {unit: s, tags: a, timestamp: c} = r, {release: u, environment: l} = o.getOptions(), d = i.getTransaction(), p = {};
                u && (p.release = u), l && (p.environment = l), d && (p.transaction = Je(d).description || ""), 
                me && E.log(`Adding value of ${n} to ${e} metric ${t}`), o.metricsAggregator.add(e, t, n, s, {
                    ...p,
                    ...a
                }, c);
            }
        }
        const Ts = {
            increment: function(e, t = 1, n) {
                ks("c", e, t, n);
            },
            distribution: function(e, t, n) {
                ks("d", e, t, n);
            },
            set: function(e, t, n) {
                ks("s", e, t, n);
            },
            gauge: function(e, t, n) {
                ks("g", e, t, n);
            },
            MetricsAggregator: cn(xs, ws),
            metricsAggregatorIntegration: ws
        };
        function Es(e, ...t) {
            const n = new String(String.raw(e, ...t));
            return n.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), 
            n.__sentry_template_values__ = t, n;
        }
        function Cs(e, t, n) {
            const r = Pi();
            r && r.setMeasurement(e, t, n);
        }
        function Is(e) {
            let t, n = e[0], r = 1;
            for (;r < e.length; ) {
                const o = e[r], i = e[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (t = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...e) => n.call(t, ...e))), 
                t = void 0);
            }
            return n;
        }
        function Rs(e, t) {
            const n = t && function(e) {
                return void 0 !== e.getClient;
            }(t) ? t.getClient() : t, r = n && n.getDsn(), o = n && n.getOptions().tunnel;
            return function(e, t) {
                return !!t && e.includes(t.host);
            }(e, r) || function(e, t) {
                return !!t && Ms(e) === Ms(t);
            }(e, o);
        }
        function Ms(e) {
            return "/" === e[e.length - 1] ? e.slice(0, -1) : e;
        }
        var Os = n(728);
        function As() {
            return "undefined" != typeof window && (!(0, Os.KV)() || void 0 !== b.process && "renderer" === b.process.type);
        }
        const Ls = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, Ds = (e, t, n) => {
            let r, o;
            return i => {
                t.value >= 0 && (i || n) && (o = t.value - (r || 0), (o || void 0 === r) && (r = t.value, 
                t.delta = o, e(t)));
            };
        }, Ns = b, Ps = () => Ns.__WEB_VITALS_POLYFILL__ ? Ns.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
            const e = Ns.performance.timing, t = Ns.performance.navigation.type, n = {
                entryType: "navigation",
                startTime: 0,
                type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate"
            };
            for (const t in e) "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
            return n;
        })()) : Ns.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0], $s = () => {
            const e = Ps();
            return e && e.activationStart || 0;
        }, js = (e, t) => {
            const n = Ps();
            let r = "navigate";
            return n && (r = Ns.document && Ns.document.prerendering || $s() > 0 ? "prerender" : n.type.replace(/_/g, "-")), 
            {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: `v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
                navigationType: r
            };
        }, Fs = (e, t, n) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    const r = new PerformanceObserver((e => {
                        t(e.getEntries());
                    }));
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, n || {})), r;
                }
            } catch (e) {}
        }, Bs = (e, t) => {
            const n = r => {
                "pagehide" !== r.type && "hidden" !== Ns.document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), 
                removeEventListener("pagehide", n, !0)));
            };
            Ns.document && (addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0));
        };
        let qs = -1;
        const Us = () => (qs < 0 && (Ns.document && Ns.document.visibilityState && (qs = "hidden" !== Ns.document.visibilityState || Ns.document.prerendering ? 1 / 0 : 0), 
        Bs((({timeStamp: e}) => {
            qs = e;
        }), !0)), {
            get firstHiddenTime() {
                return qs;
            }
        });
        let Ws = 0, Gs = 1 / 0, Vs = 0;
        const Ys = e => {
            e.forEach((e => {
                e.interactionId && (Gs = Math.min(Gs, e.interactionId), Vs = Math.max(Vs, e.interactionId), 
                Ws = Vs ? (Vs - Gs) / 7 + 1 : 0);
            }));
        };
        let Js;
        const Ks = () => Js ? Ws : performance.interactionCount || 0, Qs = [], Zs = {}, ea = e => {
            const t = Qs[Qs.length - 1], n = Zs[e.interactionId];
            if (n || Qs.length < 10 || e.duration > t.latency) {
                if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration); else {
                    const t = {
                        id: e.interactionId,
                        latency: e.duration,
                        entries: [ e ]
                    };
                    Zs[t.id] = t, Qs.push(t);
                }
                Qs.sort(((e, t) => t.latency - e.latency)), Qs.splice(10).forEach((e => {
                    delete Zs[e.id];
                }));
            }
        }, ta = (e, t) => {
            t = t || {}, "interactionCount" in performance || Js || (Js = Fs("event", Ys, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }));
            const n = js("INP");
            let r;
            const o = e => {
                e.forEach((e => {
                    e.interactionId && ea(e), "first-input" === e.entryType && !Qs.some((t => t.entries.some((t => e.duration === t.duration && e.startTime === t.startTime)))) && ea(e);
                }));
                const t = (() => {
                    const e = Math.min(Qs.length - 1, Math.floor(Ks() / 50));
                    return Qs[e];
                })();
                t && t.latency !== n.value && (n.value = t.latency, n.entries = t.entries, r());
            }, i = Fs("event", o, {
                durationThreshold: t.durationThreshold || 40
            });
            r = Ds(e, n, t.reportAllChanges), i && (i.observe({
                type: "first-input",
                buffered: !0
            }), Bs((() => {
                o(i.takeRecords()), n.value < 0 && Ks() > 0 && (n.value = 0, n.entries = []), r(!0);
            })));
        }, na = {}, oa = e => {
            Ns.document && (Ns.document.prerendering ? addEventListener("prerenderingchange", (() => oa(e)), !0) : "complete" !== Ns.document.readyState ? addEventListener("load", (() => oa(e)), !0) : setTimeout(e, 0));
        }, sa = {}, aa = {};
        let ca, ua, la, da, pa;
        function ha(e, t = !1) {
            return Sa("lcp", e, va, la, t);
        }
        function fa(e, t) {
            return xa(e, t), aa[e] || (function(e) {
                const t = {};
                "event" === e && (t.durationThreshold = 0), Fs(e, (t => {
                    ma(e, {
                        entries: t
                    });
                }), t);
            }(e), aa[e] = !0), wa(e, t);
        }
        function ma(e, t) {
            const n = sa[e];
            if (n && n.length) for (const r of n) try {
                r(t);
            } catch (t) {
                Ls && E.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${wt(r)}\nError:`, t);
            }
        }
        function ga() {
            return ((e, t = {}) => {
                const n = js("CLS", 0);
                let r, o = 0, i = [];
                const s = e => {
                    e.forEach((e => {
                        if (!e.hadRecentInput) {
                            const t = i[0], s = i[i.length - 1];
                            o && 0 !== i.length && e.startTime - s.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, 
                            i.push(e)) : (o = e.value, i = [ e ]), o > n.value && (n.value = o, n.entries = i, 
                            r && r());
                        }
                    }));
                }, a = Fs("layout-shift", s);
                if (a) {
                    r = Ds(e, n, t.reportAllChanges);
                    const o = () => {
                        s(a.takeRecords()), r(!0);
                    };
                    return Bs(o), o;
                }
            })((e => {
                ma("cls", {
                    metric: e
                }), ca = e;
            }), {
                reportAllChanges: !0
            });
        }
        function ya() {
            return (e => {
                const t = Us(), n = js("FID");
                let r;
                const o = e => {
                    e.startTime < t.firstHiddenTime && (n.value = e.processingStart - e.startTime, n.entries.push(e), 
                    r(!0));
                }, i = e => {
                    e.forEach(o);
                }, s = Fs("first-input", i);
                r = Ds(e, n), s && Bs((() => {
                    i(s.takeRecords()), s.disconnect();
                }), !0);
            })((e => {
                ma("fid", {
                    metric: e
                }), ua = e;
            }));
        }
        function va() {
            return (e => {
                const t = Us(), n = js("LCP");
                let r;
                const o = e => {
                    const o = e[e.length - 1];
                    if (o) {
                        const e = Math.max(o.startTime - $s(), 0);
                        e < t.firstHiddenTime && (n.value = e, n.entries = [ o ], r());
                    }
                }, i = Fs("largest-contentful-paint", o);
                if (i) {
                    r = Ds(e, n);
                    const t = () => {
                        na[n.id] || (o(i.takeRecords()), i.disconnect(), na[n.id] = !0, r(!0));
                    };
                    return [ "keydown", "click" ].forEach((e => {
                        Ns.document && addEventListener(e, t, {
                            once: !0,
                            capture: !0
                        });
                    })), Bs(t, !0), t;
                }
            })((e => {
                ma("lcp", {
                    metric: e
                }), la = e;
            }));
        }
        function _a() {
            return ((e, t) => {
                t = t || {};
                const n = js("TTFB"), r = Ds(e, n, t.reportAllChanges);
                oa((() => {
                    const e = Ps();
                    if (e) {
                        if (n.value = Math.max(e.responseStart - $s(), 0), n.value < 0 || n.value > performance.now()) return;
                        n.entries = [ e ], r(!0);
                    }
                }));
            })((e => {
                ma("ttfb", {
                    metric: e
                }), da = e;
            }));
        }
        function ba() {
            return ta((e => {
                ma("inp", {
                    metric: e
                }), pa = e;
            }));
        }
        function Sa(e, t, n, r, o = !1) {
            let i;
            return xa(e, t), aa[e] || (i = n(), aa[e] = !0), r && t({
                metric: r
            }), wa(e, t, o ? i : void 0);
        }
        function xa(e, t) {
            sa[e] = sa[e] || [], sa[e].push(t);
        }
        function wa(e, t, n) {
            return () => {
                n && n();
                const r = sa[e];
                if (!r) return;
                const o = r.indexOf(t);
                -1 !== o && r.splice(o, 1);
            };
        }
        const ka = b, Ta = "sentryReplaySession", Ca = "Unable to send Replay";
        function Aa(e) {
            let t, n = e[0], r = 1;
            for (;r < e.length; ) {
                const o = e[r], i = e[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (t = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...e) => n.call(t, ...e))), 
                t = void 0);
            }
            return n;
        }
        var La;
        function Da(e) {
            const t = Aa([ e, "optionalAccess", e => e.host ]);
            return Boolean(Aa([ t, "optionalAccess", e => e.shadowRoot ]) === e);
        }
        function Na(e) {
            return "[object ShadowRoot]" === Object.prototype.toString.call(e);
        }
        function Pa(e) {
            try {
                const n = e.rules || e.cssRules;
                return n ? ((t = Array.from(n, $a).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), 
                t) : null;
            } catch (e) {
                return null;
            }
            var t;
        }
        function $a(e) {
            let t;
            if (function(e) {
                return "styleSheet" in e;
            }(e)) try {
                t = Pa(e.styleSheet) || function(e) {
                    const {cssText: t} = e;
                    if (t.split('"').length < 3) return t;
                    const n = [ "@import", `url(${JSON.stringify(e.href)})` ];
                    return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`), 
                    e.supportsText && n.push(`supports(${e.supportsText})`), e.media.length && n.push(e.media.mediaText), 
                    n.join(" ") + ";";
                }(e);
            } catch (e) {} else if (function(e) {
                return "selectorText" in e;
            }(e) && e.selectorText.includes(":")) return function(e) {
                return e.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
            }(e.cssText);
            return t || e.cssText;
        }
        !function(e) {
            e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", 
            e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment";
        }(La || (La = {}));
        class ja {
            constructor() {
                this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap;
            }
            getId(e) {
                if (!e) return -1;
                return () => -1, null != (n = Aa([ this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id ])) ? n : -1;
                var n;
            }
            getNode(e) {
                return this.idNodeMap.get(e) || null;
            }
            getIds() {
                return Array.from(this.idNodeMap.keys());
            }
            getMeta(e) {
                return this.nodeMetaMap.get(e) || null;
            }
            removeNodeFromMap(e) {
                const t = this.getId(e);
                this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach((e => this.removeNodeFromMap(e)));
            }
            has(e) {
                return this.idNodeMap.has(e);
            }
            hasNode(e) {
                return this.nodeMetaMap.has(e);
            }
            add(e, t) {
                const n = t.id;
                this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
            }
            replace(e, t) {
                const n = this.getNode(e);
                if (n) {
                    const e = this.nodeMetaMap.get(n);
                    e && this.nodeMetaMap.set(t, e);
                }
                this.idNodeMap.set(e, t);
            }
            reset() {
                this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap;
            }
        }
        function Fa({maskInputOptions: e, tagName: t, type: n}) {
            return "OPTION" === t && (t = "SELECT"), Boolean(e[t.toLowerCase()] || n && e[n] || "password" === n || "INPUT" === t && !n && e.text);
        }
        function Ba({isMasked: e, element: t, value: n, maskInputFn: r}) {
            let o = n || "";
            return e ? (r && (o = r(o, t)), "*".repeat(o.length)) : o;
        }
        function Ha(e) {
            return e.toLowerCase();
        }
        function qa(e) {
            return e.toUpperCase();
        }
        const Ua = "__rrweb_original__";
        function za(e) {
            const t = e.type;
            return e.hasAttribute("data-rr-is-password") ? "password" : t ? Ha(t) : null;
        }
        function Wa(e, t, n) {
            return "INPUT" !== t || "radio" !== n && "checkbox" !== n ? e.value : e.getAttribute("value") || "";
        }
        let Ga = 1;
        const Va = new RegExp("[^a-z0-9-_:]");
        function Ja() {
            return Ga++;
        }
        let Xa, Ka;
        const Qa = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, Za = /^(?:[a-z+]+:)?\/\//i, ec = /^www\..*/i, tc = /^(data:)([^,]*),(.*)/i;
        function nc(e, t) {
            return (e || "").replace(Qa, ((e, n, r, o, i, s) => {
                const a = r || i || s, c = n || o || "";
                if (!a) return e;
                if (Za.test(a) || ec.test(a)) return `url(${c}${a}${c})`;
                if (tc.test(a)) return `url(${c}${a}${c})`;
                if ("/" === a[0]) return `url(${c}${function(e) {
                    let t = "";
                    return t = e.indexOf("//") > -1 ? e.split("/").slice(0, 3).join("/") : e.split("/")[0], 
                    t = t.split("?")[0], t;
                }(t) + a}${c})`;
                const u = t.split("/"), l = a.split("/");
                u.pop();
                for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
                return `url(${c}${u.join("/")}${c})`;
            }));
        }
        const rc = /^[^ \t\n\r\u000c]+/, oc = /^[, \t\n\r\u000c]+/;
        function ic(e, t) {
            if (!t || "" === t.trim()) return t;
            const n = e.createElement("a");
            return n.href = t, n.href;
        }
        function sc(e) {
            return Boolean("svg" === e.tagName || e.ownerSVGElement);
        }
        function ac() {
            const e = document.createElement("a");
            return e.href = "", e.href;
        }
        function cc(e, t, n, r, o, i) {
            return r ? "src" === n || "href" === n && ("use" !== t || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] ? ic(e, r) : "background" !== n || "table" !== t && "td" !== t && "th" !== t ? "srcset" === n ? function(e, t) {
                if ("" === t.trim()) return t;
                let n = 0;
                function r(e) {
                    let r;
                    const o = e.exec(t.substring(n));
                    return o ? (r = o[0], n += r.length, r) : "";
                }
                const o = [];
                for (;r(oc), !(n >= t.length); ) {
                    let i = r(rc);
                    if ("," === i.slice(-1)) i = ic(e, i.substring(0, i.length - 1)), o.push(i); else {
                        let r = "";
                        i = ic(e, i);
                        let s = !1;
                        for (;;) {
                            const e = t.charAt(n);
                            if ("" === e) {
                                o.push((i + r).trim());
                                break;
                            }
                            if (s) ")" === e && (s = !1); else {
                                if ("," === e) {
                                    n += 1, o.push((i + r).trim());
                                    break;
                                }
                                "(" === e && (s = !0);
                            }
                            r += e, n += 1;
                        }
                    }
                }
                return o.join(", ");
            }(e, r) : "style" === n ? nc(r, ac()) : "object" === t && "data" === n ? ic(e, r) : "function" == typeof i ? i(n, r, o) : r : ic(e, r) : r;
        }
        function uc(e, t, n) {
            return ("video" === e || "audio" === e) && "autoplay" === t;
        }
        function lc(e, t, n = 1 / 0, r = 0) {
            return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : lc(e.parentNode, t, n, r + 1) : -1;
        }
        function dc(e, t) {
            return n => {
                const r = n;
                if (null === r) return !1;
                try {
                    if (e) if ("string" == typeof e) {
                        if (r.matches(`.${e}`)) return !0;
                    } else if (function(e, t) {
                        for (let n = e.classList.length; n--; ) {
                            const r = e.classList[n];
                            if (t.test(r)) return !0;
                        }
                        return !1;
                    }(r, e)) return !0;
                    return !(!t || !r.matches(t));
                } catch (e) {
                    return !1;
                }
            };
        }
        function pc(e, t, n, r, o, i) {
            try {
                const s = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                if (null === s) return !1;
                if ("INPUT" === s.tagName) {
                    const e = s.getAttribute("autocomplete");
                    if ([ "current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc" ].includes(e)) return !0;
                }
                let a = -1, c = -1;
                if (i) {
                    if (c = lc(s, dc(r, o)), c < 0) return !0;
                    a = lc(s, dc(t, n), c >= 0 ? c : 1 / 0);
                } else {
                    if (a = lc(s, dc(t, n)), a < 0) return !1;
                    c = lc(s, dc(r, o), a >= 0 ? a : 1 / 0);
                }
                return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0 || !i);
            } catch (e) {}
            return !!i;
        }
        function fc(e) {
            return null == e ? "" : e.toLowerCase();
        }
        function mc(e, t) {
            const {doc: n, mirror: r, blockClass: o, blockSelector: i, unblockSelector: s, maskAllText: a, maskTextClass: c, unmaskTextClass: u, maskTextSelector: l, unmaskTextSelector: d, skipChild: p = !1, inlineStylesheet: h = !0, maskInputOptions: f = {}, maskAttributeFn: m, maskTextFn: g, maskInputFn: y, slimDOMOptions: v, dataURLOptions: _ = {}, inlineImages: b = !1, recordCanvas: S = !1, onSerialize: x, onIframeLoad: w, iframeLoadTimeout: k = 5e3, onStylesheetLoad: T, stylesheetLoadTimeout: E = 5e3, keepIframeSrcFn: C = (() => !1), newlyAddedElement: I = !1} = t;
            let {preserveWhiteSpace: R = !0} = t;
            const M = function(e, t) {
                const {doc: n, mirror: r, blockClass: o, blockSelector: i, unblockSelector: s, maskAllText: a, maskAttributeFn: c, maskTextClass: u, unmaskTextClass: l, maskTextSelector: d, unmaskTextSelector: p, inlineStylesheet: h, maskInputOptions: f = {}, maskTextFn: m, maskInputFn: g, dataURLOptions: y = {}, inlineImages: v, recordCanvas: _, keepIframeSrcFn: b, newlyAddedElement: S = !1} = t, x = function(e, t) {
                    if (!t.hasNode(e)) return;
                    const n = t.getId(e);
                    return 1 === n ? void 0 : n;
                }(n, r);
                switch (e.nodeType) {
                  case e.DOCUMENT_NODE:
                    return "CSS1Compat" !== e.compatMode ? {
                        type: La.Document,
                        childNodes: [],
                        compatMode: e.compatMode
                    } : {
                        type: La.Document,
                        childNodes: []
                    };

                  case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: La.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: x
                    };

                  case e.ELEMENT_NODE:
                    return function(e, t) {
                        const {doc: n, blockClass: r, blockSelector: o, unblockSelector: i, inlineStylesheet: s, maskInputOptions: a = {}, maskAttributeFn: c, maskInputFn: u, dataURLOptions: l = {}, inlineImages: d, recordCanvas: p, keepIframeSrcFn: h, newlyAddedElement: f = !1, rootId: m, maskAllText: g, maskTextClass: y, unmaskTextClass: v, maskTextSelector: _, unmaskTextSelector: b} = t, S = function(e, t, n, r) {
                            try {
                                if (r && e.matches(r)) return !1;
                                if ("string" == typeof t) {
                                    if (e.classList.contains(t)) return !0;
                                } else for (let n = e.classList.length; n--; ) {
                                    const r = e.classList[n];
                                    if (t.test(r)) return !0;
                                }
                                if (n) return e.matches(n);
                            } catch (e) {}
                            return !1;
                        }(e, r, o, i), x = function(e) {
                            if (e instanceof HTMLFormElement) return "form";
                            const t = Ha(e.tagName);
                            return Va.test(t) ? "div" : t;
                        }(e);
                        let w = {};
                        const k = e.attributes.length;
                        for (let t = 0; t < k; t++) {
                            const r = e.attributes[t];
                            r.name && !uc(x, r.name, r.value) && (w[r.name] = cc(n, x, Ha(r.name), r.value, e, c));
                        }
                        if ("link" === x && s) {
                            const t = Array.from(n.styleSheets).find((t => t.href === e.href));
                            let r = null;
                            t && (r = Pa(t)), r && (delete w.rel, delete w.href, w._cssText = nc(r, t.href));
                        }
                        if ("style" === x && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            const t = Pa(e.sheet);
                            t && (w._cssText = nc(t, ac()));
                        }
                        if ("input" === x || "textarea" === x || "select" === x || "option" === x) {
                            const t = e, n = za(t), r = Wa(t, qa(x), n), o = t.checked;
                            if ("submit" !== n && "button" !== n && r) {
                                const e = pc(t, y, _, v, b, Fa({
                                    type: n,
                                    tagName: qa(x),
                                    maskInputOptions: a
                                }));
                                w.value = Ba({
                                    isMasked: e,
                                    element: t,
                                    value: r,
                                    maskInputFn: u
                                });
                            }
                            o && (w.checked = o);
                        }
                        if ("option" === x && (e.selected && !a.select ? w.selected = !0 : delete w.selected), 
                        "canvas" === x && p) if ("2d" === e.__context) (function(e) {
                            const t = e.getContext("2d");
                            if (!t) return !0;
                            for (let n = 0; n < e.width; n += 50) for (let r = 0; r < e.height; r += 50) {
                                const o = t.getImageData, i = Ua in o ? o[Ua] : o;
                                if (new Uint32Array(i.call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some((e => 0 !== e))) return !1;
                            }
                            return !0;
                        })(e) || (w.rr_dataURL = e.toDataURL(l.type, l.quality)); else if (!("__context" in e)) {
                            const t = e.toDataURL(l.type, l.quality), n = document.createElement("canvas");
                            n.width = e.width, n.height = e.height, t !== n.toDataURL(l.type, l.quality) && (w.rr_dataURL = t);
                        }
                        if ("img" === x && d) {
                            Xa || (Xa = n.createElement("canvas"), Ka = Xa.getContext("2d"));
                            const t = e, r = t.crossOrigin;
                            t.crossOrigin = "anonymous";
                            const o = () => {
                                t.removeEventListener("load", o);
                                try {
                                    Xa.width = t.naturalWidth, Xa.height = t.naturalHeight, Ka.drawImage(t, 0, 0), w.rr_dataURL = Xa.toDataURL(l.type, l.quality);
                                } catch (e) {}
                                r ? w.crossOrigin = r : t.removeAttribute("crossorigin");
                            };
                            t.complete && 0 !== t.naturalWidth ? o() : t.addEventListener("load", o);
                        }
                        if ("audio" !== x && "video" !== x || (w.rr_mediaState = e.paused ? "paused" : "played", 
                        w.rr_mediaCurrentTime = e.currentTime), f || (e.scrollLeft && (w.rr_scrollLeft = e.scrollLeft), 
                        e.scrollTop && (w.rr_scrollTop = e.scrollTop)), S) {
                            const {width: t, height: n} = e.getBoundingClientRect();
                            w = {
                                class: w.class,
                                rr_width: `${t}px`,
                                rr_height: `${n}px`
                            };
                        }
                        let T;
                        "iframe" !== x || h(w.src) || (e.contentDocument || (w.rr_src = w.src), delete w.src);
                        try {
                            customElements.get(x) && (T = !0);
                        } catch (e) {}
                        return {
                            type: La.Element,
                            tagName: x,
                            attributes: w,
                            childNodes: [],
                            isSVG: sc(e) || void 0,
                            needBlock: S,
                            rootId: m,
                            isCustom: T
                        };
                    }(e, {
                        doc: n,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: s,
                        inlineStylesheet: h,
                        maskAttributeFn: c,
                        maskInputOptions: f,
                        maskInputFn: g,
                        dataURLOptions: y,
                        inlineImages: v,
                        recordCanvas: _,
                        keepIframeSrcFn: b,
                        newlyAddedElement: S,
                        rootId: x,
                        maskAllText: a,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: p
                    });

                  case e.TEXT_NODE:
                    return function(e, t) {
                        const {maskAllText: n, maskTextClass: r, unmaskTextClass: o, maskTextSelector: i, unmaskTextSelector: s, maskTextFn: a, maskInputOptions: c, maskInputFn: u, rootId: l} = t, d = e.parentNode && e.parentNode.tagName;
                        let p = e.textContent;
                        const h = "STYLE" === d || void 0, f = "SCRIPT" === d || void 0, m = "TEXTAREA" === d || void 0;
                        if (h && p) {
                            try {
                                e.nextSibling || e.previousSibling || Aa([ e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules ]) && (p = Pa(e.parentNode.sheet));
                            } catch (e) {}
                            p = nc(p, ac());
                        }
                        f && (p = "SCRIPT_PLACEHOLDER");
                        const g = pc(e, r, i, o, s, n);
                        return h || f || m || !p || !g || (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")), 
                        m && p && (c.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), 
                        "OPTION" === d && p && (p = Ba({
                            isMasked: pc(e, r, i, o, s, Fa({
                                type: null,
                                tagName: d,
                                maskInputOptions: c
                            })),
                            element: e,
                            value: p,
                            maskInputFn: u
                        })), {
                            type: La.Text,
                            textContent: p || "",
                            isStyle: h,
                            rootId: l
                        };
                    }(e, {
                        maskAllText: a,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        maskTextFn: m,
                        maskInputOptions: f,
                        maskInputFn: g,
                        rootId: x
                    });

                  case e.CDATA_SECTION_NODE:
                    return {
                        type: La.CDATA,
                        textContent: "",
                        rootId: x
                    };

                  case e.COMMENT_NODE:
                    return {
                        type: La.Comment,
                        textContent: e.textContent || "",
                        rootId: x
                    };

                  default:
                    return !1;
                }
            }(e, {
                doc: n,
                mirror: r,
                blockClass: o,
                blockSelector: i,
                maskAllText: a,
                unblockSelector: s,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: l,
                unmaskTextSelector: d,
                inlineStylesheet: h,
                maskInputOptions: f,
                maskAttributeFn: m,
                maskTextFn: g,
                maskInputFn: y,
                dataURLOptions: _,
                inlineImages: b,
                recordCanvas: S,
                keepIframeSrcFn: C,
                newlyAddedElement: I
            });
            if (!M) return null;
            let O;
            O = r.hasNode(e) ? r.getId(e) : !function(e, t) {
                if (t.comment && e.type === La.Comment) return !0;
                if (e.type === La.Element) {
                    if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && e.attributes.href.endsWith(".js"))) return !0;
                    if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (fc(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === fc(e.attributes.name) || "icon" === fc(e.attributes.rel) || "apple-touch-icon" === fc(e.attributes.rel) || "shortcut icon" === fc(e.attributes.rel)))) return !0;
                    if ("meta" === e.tagName) {
                        if (t.headMetaDescKeywords && fc(e.attributes.name).match(/^description|keywords$/)) return !0;
                        if (t.headMetaSocial && (fc(e.attributes.property).match(/^(og|twitter|fb):/) || fc(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === fc(e.attributes.name))) return !0;
                        if (t.headMetaRobots && ("robots" === fc(e.attributes.name) || "googlebot" === fc(e.attributes.name) || "bingbot" === fc(e.attributes.name))) return !0;
                        if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                        if (t.headMetaAuthorship && ("author" === fc(e.attributes.name) || "generator" === fc(e.attributes.name) || "framework" === fc(e.attributes.name) || "publisher" === fc(e.attributes.name) || "progid" === fc(e.attributes.name) || fc(e.attributes.property).match(/^article:/) || fc(e.attributes.property).match(/^product:/))) return !0;
                        if (t.headMetaVerification && ("google-site-verification" === fc(e.attributes.name) || "yandex-verification" === fc(e.attributes.name) || "csrf-token" === fc(e.attributes.name) || "p:domain_verify" === fc(e.attributes.name) || "verify-v1" === fc(e.attributes.name) || "verification" === fc(e.attributes.name) || "shopify-checkout-api-token" === fc(e.attributes.name))) return !0;
                    }
                }
                return !1;
            }(M, v) && (R || M.type !== La.Text || M.isStyle || M.textContent.replace(/^\s+|\s+$/gm, "").length) ? Ja() : -2;
            const A = Object.assign(M, {
                id: O
            });
            if (r.add(e, A), -2 === O) return null;
            x && x(e);
            let L = !p;
            if (A.type === La.Element) {
                L = L && !A.needBlock, delete A.needBlock;
                const t = e.shadowRoot;
                t && Na(t) && (A.isShadowHost = !0);
            }
            if ((A.type === La.Document || A.type === La.Element) && L) {
                v.headWhitespace && A.type === La.Element && "head" === A.tagName && (R = !1);
                const t = {
                    doc: n,
                    mirror: r,
                    blockClass: o,
                    blockSelector: i,
                    maskAllText: a,
                    unblockSelector: s,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: l,
                    unmaskTextSelector: d,
                    skipChild: p,
                    inlineStylesheet: h,
                    maskInputOptions: f,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: y,
                    slimDOMOptions: v,
                    dataURLOptions: _,
                    inlineImages: b,
                    recordCanvas: S,
                    preserveWhiteSpace: R,
                    onSerialize: x,
                    onIframeLoad: w,
                    iframeLoadTimeout: k,
                    onStylesheetLoad: T,
                    stylesheetLoadTimeout: E,
                    keepIframeSrcFn: C
                };
                for (const n of Array.from(e.childNodes)) {
                    const e = mc(n, t);
                    e && A.childNodes.push(e);
                }
                if (function(e) {
                    return e.nodeType === e.ELEMENT_NODE;
                }(e) && e.shadowRoot) for (const n of Array.from(e.shadowRoot.childNodes)) {
                    const r = mc(n, t);
                    r && (Na(e.shadowRoot) && (r.isShadow = !0), A.childNodes.push(r));
                }
            }
            return e.parentNode && Da(e.parentNode) && Na(e.parentNode) && (A.isShadow = !0), 
            A.type === La.Element && "iframe" === A.tagName && function(e, t, n) {
                const r = e.contentWindow;
                if (!r) return;
                let o, i = !1;
                try {
                    o = r.document.readyState;
                } catch (e) {
                    return;
                }
                if ("complete" !== o) {
                    const r = setTimeout((() => {
                        i || (t(), i = !0);
                    }), n);
                    return void e.addEventListener("load", (() => {
                        clearTimeout(r), i = !0, t();
                    }));
                }
                const s = "about:blank";
                if (r.location.href !== s || e.src === s || "" === e.src) return setTimeout(t, 0), 
                e.addEventListener("load", t);
                e.addEventListener("load", t);
            }(e, (() => {
                const t = e.contentDocument;
                if (t && w) {
                    const n = mc(t, {
                        doc: t,
                        mirror: r,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: s,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: l,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: v,
                        dataURLOptions: _,
                        inlineImages: b,
                        recordCanvas: S,
                        preserveWhiteSpace: R,
                        onSerialize: x,
                        onIframeLoad: w,
                        iframeLoadTimeout: k,
                        onStylesheetLoad: T,
                        stylesheetLoadTimeout: E,
                        keepIframeSrcFn: C
                    });
                    n && w(e, n);
                }
            }), k), A.type === La.Element && "link" === A.tagName && "stylesheet" === A.attributes.rel && function(e, t, n) {
                let r, o = !1;
                try {
                    r = e.sheet;
                } catch (e) {
                    return;
                }
                if (r) return;
                const i = setTimeout((() => {
                    o || (t(), o = !0);
                }), n);
                e.addEventListener("load", (() => {
                    clearTimeout(i), o = !0, t();
                }));
            }(e, (() => {
                if (T) {
                    const t = mc(e, {
                        doc: n,
                        mirror: r,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: s,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: l,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: v,
                        dataURLOptions: _,
                        inlineImages: b,
                        recordCanvas: S,
                        preserveWhiteSpace: R,
                        onSerialize: x,
                        onIframeLoad: w,
                        iframeLoadTimeout: k,
                        onStylesheetLoad: T,
                        stylesheetLoadTimeout: E,
                        keepIframeSrcFn: C
                    });
                    t && T(e, t);
                }
            }), E), A;
        }
        function gc(e) {
            let t, n = e[0], r = 1;
            for (;r < e.length; ) {
                const o = e[r], i = e[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (t = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...e) => n.call(t, ...e))), 
                t = void 0);
            }
            return n;
        }
        function yc(e, t, n = document) {
            const r = {
                capture: !0,
                passive: !0
            };
            return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
        }
        let vc = {
            map: {},
            getId: () => -1,
            getNode: () => null,
            removeNodeFromMap() {},
            has: () => !1,
            reset() {}
        };
        function _c(e, t, n = {}) {
            let r = null, o = 0;
            return function(...i) {
                const s = Date.now();
                o || !1 !== n.leading || (o = s);
                const a = t - (s - o), c = this;
                a <= 0 || a > t ? (r && (function(...e) {
                    Fc("clearTimeout")(...e);
                }(r), r = null), o = s, e.apply(c, i)) : r || !1 === n.trailing || (r = Bc((() => {
                    o = !1 === n.leading ? 0 : Date.now(), r = null, e.apply(c, i);
                }), a));
            };
        }
        function bc(e, t, n, r, o = window) {
            const i = o.Object.getOwnPropertyDescriptor(e, t);
            return o.Object.defineProperty(e, t, r ? n : {
                set(e) {
                    Bc((() => {
                        n.set.call(this, e);
                    }), 0), i && i.set && i.set.call(this, e);
                }
            }), () => bc(e, t, i || {}, !0);
        }
        function Sc(e, t, n) {
            try {
                if (!(t in e)) return () => {};
                const r = e[t], o = n(r);
                return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })), e[t] = o, () => {
                    e[t] = r;
                };
            } catch (e) {
                return () => {};
            }
        }
        "undefined" != typeof window && window.Proxy && window.Reflect && (vc = new Proxy(vc, {
            get: (e, t, n) => Reflect.get(e, t, n)
        }));
        let xc = Date.now;
        function wc(e) {
            const t = e.document;
            return {
                left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : gc([ t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft ]) || gc([ t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft ]) || gc([ t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft ]) || 0,
                top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : gc([ t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop ]) || gc([ t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop ]) || gc([ t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop ]) || 0
            };
        }
        function kc() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
        }
        function Tc() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
        }
        function Ec(e) {
            return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null;
        }
        function Cc(e, t, n, r, o) {
            if (!e) return !1;
            const i = Ec(e);
            if (!i) return !1;
            const s = dc(t, n);
            if (!o) {
                const e = r && i.matches(r);
                return s(i) && !e;
            }
            const a = lc(i, s);
            let c = -1;
            return !(a < 0) && (r && (c = lc(i, dc(null, r))), a > -1 && c < 0 || a < c);
        }
        function Ic(e, t) {
            return -2 === t.getId(e);
        }
        function Rc(e, t) {
            if (Da(e)) return !1;
            const n = t.getId(e);
            return !t.has(n) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || Rc(e.parentNode, t));
        }
        function Mc(e) {
            return Boolean(e.changedTouches);
        }
        function Oc(e, t) {
            return Boolean("IFRAME" === e.nodeName && t.getMeta(e));
        }
        function Ac(e, t) {
            return Boolean("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e));
        }
        function Lc(e) {
            return Boolean(gc([ e, "optionalAccess", e => e.shadowRoot ]));
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) || (xc = () => (new Date).getTime());
        class Dc {
            constructor() {
                this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map;
            }
            getId(e) {
                return () => -1, null != (t = this.styleIDMap.get(e)) ? t : -1;
                var t;
            }
            has(e) {
                return this.styleIDMap.has(e);
            }
            add(e, t) {
                if (this.has(e)) return this.getId(e);
                let n;
                return n = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, n), this.idStyleMap.set(n, e), 
                n;
            }
            getStyle(e) {
                return this.idStyleMap.get(e) || null;
            }
            reset() {
                this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1;
            }
            generateId() {
                return this.id++;
            }
        }
        function Nc(e) {
            let t = null;
            return gc([ e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType ]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), 
            t;
        }
        function $c(e) {
            const t = e.ownerDocument;
            return !!t && (t.contains(e) || function(e) {
                const t = e.ownerDocument;
                if (!t) return !1;
                const n = function(e) {
                    let t, n = e;
                    for (;t = Nc(n); ) n = t;
                    return n;
                }(e);
                return t.contains(n);
            }(e));
        }
        const jc = {};
        function Fc(e) {
            const t = jc[e];
            if (t) return t;
            const n = window.document;
            let r = window[e];
            if (n && "function" == typeof n.createElement) try {
                const t = n.createElement("iframe");
                t.hidden = !0, n.head.appendChild(t);
                const o = t.contentWindow;
                o && o[e] && (r = o[e]), n.head.removeChild(t);
            } catch (e) {}
            return jc[e] = r.bind(window);
        }
        function Bc(...e) {
            return Fc("setTimeout")(...e);
        }
        var Hc = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", 
        e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", 
        e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", 
        e))(Hc || {}), qc = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", 
        e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", 
        e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", 
        e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", 
        e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", 
        e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", 
        e[e.CustomElement = 16] = "CustomElement", e))(qc || {}), Uc = (e => (e[e.MouseUp = 0] = "MouseUp", 
        e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", 
        e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", 
        e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", 
        e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(Uc || {}), zc = (e => (e[e.Mouse = 0] = "Mouse", 
        e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(zc || {});
        function Wc(e) {
            let t, n = e[0], r = 1;
            for (;r < e.length; ) {
                const o = e[r], i = e[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (t = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...e) => n.call(t, ...e))), 
                t = void 0);
            }
            return n;
        }
        function Gc(e) {
            return "__ln" in e;
        }
        class Vc {
            constructor() {
                this.length = 0, this.head = null, this.tail = null;
            }
            get(e) {
                if (e >= this.length) throw new Error("Position outside of list range");
                let t = this.head;
                for (let n = 0; n < e; n++) t = Wc([ t, "optionalAccess", e => e.next ]) || null;
                return t;
            }
            addNode(e) {
                const t = {
                    value: e,
                    previous: null,
                    next: null
                };
                if (e.__ln = t, e.previousSibling && Gc(e.previousSibling)) {
                    const n = e.previousSibling.__ln.next;
                    t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, 
                    n && (n.previous = t);
                } else if (e.nextSibling && Gc(e.nextSibling) && e.nextSibling.__ln.previous) {
                    const n = e.nextSibling.__ln.previous;
                    t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && (n.next = t);
                } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                null === t.next && (this.tail = t), this.length++;
            }
            removeNode(e) {
                const t = e.__ln;
                this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, 
                this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, 
                this.length--);
            }
        }
        const Yc = (e, t) => `${e}@${t}`;
        class Jc {
            constructor() {
                this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, 
                this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, 
                this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                    e.forEach(this.processMutation), this.emit();
                }, this.emit = () => {
                    if (this.frozen || this.locked) return;
                    const e = [], t = new Set, n = new Vc, r = e => {
                        let t = e, n = -2;
                        for (;-2 === n; ) t = t && t.nextSibling, n = t && this.mirror.getId(t);
                        return n;
                    }, o = o => {
                        if (!o.parentNode || !$c(o)) return;
                        const i = Da(o.parentNode) ? this.mirror.getId(Nc(o)) : this.mirror.getId(o.parentNode), s = r(o);
                        if (-1 === i || -1 === s) return n.addNode(o);
                        const a = mc(o, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                Oc(e, this.mirror) && this.iframeManager.addIframe(e), Ac(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), 
                                Lc(o) && this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc);
                            },
                            onIframeLoad: (e, t) => {
                                this.iframeManager.attachIframe(e, t), this.shadowDomManager.observeAttachShadow(e);
                            },
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t);
                            }
                        });
                        a && (e.push({
                            parentId: i,
                            nextId: s,
                            node: a
                        }), t.add(a.id));
                    };
                    for (;this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (const e of this.movedSet) Kc(this.removes, e, this.mirror) && !this.movedSet.has(e.parentNode) || o(e);
                    for (const e of this.addedSet) Zc(this.droppedSet, e) || Kc(this.removes, e, this.mirror) ? Zc(this.movedSet, e) ? o(e) : this.droppedSet.add(e) : o(e);
                    let i = null;
                    for (;n.length; ) {
                        let e = null;
                        if (i) {
                            const t = this.mirror.getId(i.value.parentNode), n = r(i.value);
                            -1 !== t && -1 !== n && (e = i);
                        }
                        if (!e) {
                            let t = n.tail;
                            for (;t; ) {
                                const n = t;
                                if (t = t.previous, n) {
                                    const t = this.mirror.getId(n.value.parentNode);
                                    if (-1 === r(n.value)) continue;
                                    if (-1 !== t) {
                                        e = n;
                                        break;
                                    }
                                    {
                                        const t = n.value;
                                        if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            const r = t.parentNode.host;
                                            if (-1 !== this.mirror.getId(r)) {
                                                e = n;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!e) {
                            for (;n.head; ) n.removeNode(n.head.value);
                            break;
                        }
                        i = e.previous, n.removeNode(e.value), o(e.value);
                    }
                    const s = {
                        texts: this.texts.map((e => ({
                            id: this.mirror.getId(e.node),
                            value: e.value
                        }))).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                        attributes: this.attributes.map((e => {
                            const {attributes: t} = e;
                            if ("string" == typeof t.style) {
                                const n = JSON.stringify(e.styleDiff), r = JSON.stringify(e._unchangedStyles);
                                n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff);
                            }
                            return {
                                id: this.mirror.getId(e.node),
                                attributes: t
                            };
                        })).filter((e => !t.has(e.id))).filter((e => this.mirror.has(e.id))),
                        removes: this.removes,
                        adds: e
                    };
                    (s.texts.length || s.attributes.length || s.removes.length || s.adds.length) && (this.texts = [], 
                    this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, 
                    this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(s));
                }, this.processMutation = e => {
                    if (!Ic(e.target, this.mirror)) switch (e.type) {
                      case "characterData":
                        {
                            const t = e.target.textContent;
                            Cc(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                value: pc(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, Ec(e.target)) : t.replace(/[\S]/g, "*") : t,
                                node: e.target
                            });
                            break;
                        }

                      case "attributes":
                        {
                            const t = e.target;
                            let n = e.attributeName, r = e.target.getAttribute(n);
                            if ("value" === n) {
                                const n = za(t), o = t.tagName;
                                r = Wa(t, o, n);
                                const i = Fa({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: o,
                                    type: n
                                });
                                r = Ba({
                                    isMasked: pc(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, i),
                                    element: t,
                                    value: r,
                                    maskInputFn: this.maskInputFn
                                });
                            }
                            if (Cc(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue) return;
                            let o = this.attributeMap.get(e.target);
                            if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                if (t.contentDocument) return;
                                n = "rr_src";
                            }
                            if (o || (o = {
                                node: e.target,
                                attributes: {},
                                styleDiff: {},
                                _unchangedStyles: {}
                            }, this.attributes.push(o), this.attributeMap.set(e.target, o)), "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), 
                            !uc(t.tagName, n) && (o.attributes[n] = cc(this.doc, Ha(t.tagName), Ha(n), r, t, this.maskAttributeFn), 
                            "style" === n)) {
                                if (!this.unattachedDoc) try {
                                    this.unattachedDoc = document.implementation.createHTMLDocument();
                                } catch (e) {
                                    this.unattachedDoc = this.doc;
                                }
                                const n = this.unattachedDoc.createElement("span");
                                e.oldValue && n.setAttribute("style", e.oldValue);
                                for (const e of Array.from(t.style)) {
                                    const r = t.style.getPropertyValue(e), i = t.style.getPropertyPriority(e);
                                    r !== n.style.getPropertyValue(e) || i !== n.style.getPropertyPriority(e) ? o.styleDiff[e] = "" === i ? r : [ r, i ] : o._unchangedStyles[e] = [ r, i ];
                                }
                                for (const e of Array.from(n.style)) "" === t.style.getPropertyValue(e) && (o.styleDiff[e] = !1);
                            }
                            break;
                        }

                      case "childList":
                        if (Cc(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                        e.addedNodes.forEach((t => this.genAdds(t, e.target))), e.removedNodes.forEach((t => {
                            const n = this.mirror.getId(t), r = Da(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                            Cc(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Ic(t, this.mirror) || !function(e, t) {
                                return -1 !== t.getId(e);
                            }(t, this.mirror) || (this.addedSet.has(t) ? (Xc(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || Rc(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[Yc(n, r)] ? Xc(this.movedSet, t) : this.removes.push({
                                parentId: r,
                                id: n,
                                isShadow: !(!Da(e.target) || !Na(e.target)) || void 0
                            })), this.mapRemoves.push(t));
                        }));
                    }
                }, this.genAdds = (e, t) => {
                    if (!this.processedNodeManager.inOtherBuffer(e, this) && !this.addedSet.has(e) && !this.movedSet.has(e)) {
                        if (this.mirror.hasNode(e)) {
                            if (Ic(e, this.mirror)) return;
                            this.movedSet.add(e);
                            let n = null;
                            t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)), n && -1 !== n && (this.movedMap[Yc(this.mirror.getId(e), n)] = !0);
                        } else this.addedSet.add(e), this.droppedSet.delete(e);
                        Cc(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (e.childNodes.forEach((e => this.genAdds(e))), 
                        Lc(e) && e.shadowRoot.childNodes.forEach((t => {
                            this.processedNodeManager.add(t, this), this.genAdds(t, e);
                        })));
                    }
                };
            }
            init(e) {
                [ "mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager" ].forEach((t => {
                    this[t] = e[t];
                }));
            }
            freeze() {
                this.frozen = !0, this.canvasManager.freeze();
            }
            unfreeze() {
                this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
            }
            isFrozen() {
                return this.frozen;
            }
            lock() {
                this.locked = !0, this.canvasManager.lock();
            }
            unlock() {
                this.locked = !1, this.canvasManager.unlock(), this.emit();
            }
            reset() {
                this.shadowDomManager.reset(), this.canvasManager.reset();
            }
        }
        function Xc(e, t) {
            e.delete(t), t.childNodes.forEach((t => Xc(e, t)));
        }
        function Kc(e, t, n) {
            return 0 !== e.length && Qc(e, t, n);
        }
        function Qc(e, t, n) {
            const {parentNode: r} = t;
            if (!r) return !1;
            const o = n.getId(r);
            return !!e.some((e => e.id === o)) || Qc(e, r, n);
        }
        function Zc(e, t) {
            return 0 !== e.size && eu(e, t);
        }
        function eu(e, t) {
            const {parentNode: n} = t;
            return !!n && (!!e.has(n) || eu(e, n));
        }
        let tu;
        const ou = e => tu ? (...t) => {
            try {
                return e(...t);
            } catch (e) {
                if (tu && !0 === tu(e)) return () => {};
                throw e;
            }
        } : e;
        function iu(e) {
            let t, n = e[0], r = 1;
            for (;r < e.length; ) {
                const o = e[r], i = e[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (t = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...e) => n.call(t, ...e))), 
                t = void 0);
            }
            return n;
        }
        const su = [];
        function au(e) {
            try {
                if ("composedPath" in e) {
                    const t = e.composedPath();
                    if (t.length) return t[0];
                } else if ("path" in e && e.path.length) return e.path[0];
            } catch (e) {}
            return e && e.target;
        }
        function cu(e, t) {
            const n = new Jc;
            su.push(n), n.init(e);
            let r = window.MutationObserver || window.__rrMutationObserver;
            const o = iu([ window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver") ]);
            o && window[o] && (r = window[o]);
            const i = new r(ou((t => {
                e.onMutation && !1 === e.onMutation(t) || n.processMutations.bind(n)(t);
            })));
            return i.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }), i;
        }
        function lu({scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, unblockSelector: i, sampling: s}) {
            return yc("scroll", ou(_c(ou((s => {
                const a = au(s);
                if (!a || Cc(a, r, o, i, !0)) return;
                const c = n.getId(a);
                if (a === t && t.defaultView) {
                    const n = wc(t.defaultView);
                    e({
                        id: c,
                        x: n.left,
                        y: n.top
                    });
                } else e({
                    id: c,
                    x: a.scrollLeft,
                    y: a.scrollTop
                });
            })), s.scroll || 100)), t);
        }
        const du = [ "INPUT", "TEXTAREA", "SELECT" ], pu = new WeakMap;
        function hu({inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, unblockSelector: i, ignoreClass: s, ignoreSelector: a, maskInputOptions: c, maskInputFn: u, sampling: l, userTriggeredOnInput: d, maskTextClass: p, unmaskTextClass: h, maskTextSelector: f, unmaskTextSelector: m}) {
            function g(e) {
                let n = au(e);
                const l = e.isTrusted, g = n && qa(n.tagName);
                if ("OPTION" === g && (n = n.parentElement), !n || !g || du.indexOf(g) < 0 || Cc(n, r, o, i, !0)) return;
                const v = n;
                if (v.classList.contains(s) || a && v.matches(a)) return;
                const _ = za(n);
                let b = Wa(v, g, _), S = !1;
                const x = Fa({
                    maskInputOptions: c,
                    tagName: g,
                    type: _
                }), w = pc(n, p, f, h, m, x);
                "radio" !== _ && "checkbox" !== _ || (S = n.checked), b = Ba({
                    isMasked: w,
                    element: n,
                    value: b,
                    maskInputFn: u
                }), y(n, d ? {
                    text: b,
                    isChecked: S,
                    userTriggered: l
                } : {
                    text: b,
                    isChecked: S
                });
                const k = n.name;
                "radio" === _ && k && S && t.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach((e => {
                    if (e !== n) {
                        const t = Ba({
                            isMasked: w,
                            element: e,
                            value: Wa(e, g, _),
                            maskInputFn: u
                        });
                        y(e, d ? {
                            text: t,
                            isChecked: !S,
                            userTriggered: !1
                        } : {
                            text: t,
                            isChecked: !S
                        });
                    }
                }));
            }
            function y(t, r) {
                const o = pu.get(t);
                if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
                    pu.set(t, r);
                    const o = n.getId(t);
                    ou(e)({
                        ...r,
                        id: o
                    });
                }
            }
            const v = ("last" === l.input ? [ "change" ] : [ "input", "change" ]).map((e => yc(e, ou(g), t))), _ = t.defaultView;
            if (!_) return () => {
                v.forEach((e => e()));
            };
            const b = _.Object.getOwnPropertyDescriptor(_.HTMLInputElement.prototype, "value"), S = [ [ _.HTMLInputElement.prototype, "value" ], [ _.HTMLInputElement.prototype, "checked" ], [ _.HTMLSelectElement.prototype, "value" ], [ _.HTMLTextAreaElement.prototype, "value" ], [ _.HTMLSelectElement.prototype, "selectedIndex" ], [ _.HTMLOptionElement.prototype, "selected" ] ];
            return b && b.set && v.push(...S.map((e => bc(e[0], e[1], {
                set() {
                    ou(g)({
                        target: this,
                        isTrusted: !1
                    });
                }
            }, !1, _)))), ou((() => {
                v.forEach((e => e()));
            }));
        }
        function fu(e) {
            return function(e, t) {
                if (vu("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || vu("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || vu("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || vu("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                    const n = Array.from(e.parentRule.cssRules).indexOf(e);
                    t.unshift(n);
                } else if (e.parentStyleSheet) {
                    const n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                    t.unshift(n);
                }
                return t;
            }(e, []);
        }
        function mu(e, t, n) {
            let r, o;
            return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : o = n.getId(e), {
                styleId: o,
                id: r
            }) : {};
        }
        function gu({mirror: e, stylesheetManager: t}, n) {
            let r = null;
            r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
            const o = "#document" === n.nodeName ? iu([ n, "access", e => e.defaultView, "optionalAccess", e => e.Document ]) : iu([ n, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot ]), i = iu([ o, "optionalAccess", e => e.prototype ]) ? Object.getOwnPropertyDescriptor(iu([ o, "optionalAccess", e => e.prototype ]), "adoptedStyleSheets") : void 0;
            return null !== r && -1 !== r && o && i ? (Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: i.configurable,
                enumerable: i.enumerable,
                get() {
                    return iu([ i, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this) ]);
                },
                set(e) {
                    const n = iu([ i, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e) ]);
                    if (null !== r && -1 !== r) try {
                        t.adoptStyleSheets(e, r);
                    } catch (e) {}
                    return n;
                }
            }), ou((() => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: i.configurable,
                    enumerable: i.enumerable,
                    get: i.get,
                    set: i.set
                });
            }))) : () => {};
        }
        function yu(e, t = {}) {
            const n = e.doc.defaultView;
            if (!n) return () => {};
            const r = cu(e, e.doc), o = function({mousemoveCb: e, sampling: t, doc: n, mirror: r}) {
                if (!1 === t.mousemove) return () => {};
                const o = "number" == typeof t.mousemove ? t.mousemove : 50, i = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500;
                let s, a = [];
                const c = _c(ou((t => {
                    const n = Date.now() - s;
                    e(a.map((e => (e.timeOffset -= n, e))), t), a = [], s = null;
                })), i), u = ou(_c(ou((e => {
                    const t = au(e), {clientX: n, clientY: o} = Mc(e) ? e.changedTouches[0] : e;
                    s || (s = xc()), a.push({
                        x: n,
                        y: o,
                        id: r.getId(t),
                        timeOffset: xc() - s
                    }), c("undefined" != typeof DragEvent && e instanceof DragEvent ? qc.Drag : e instanceof MouseEvent ? qc.MouseMove : qc.TouchMove);
                })), o, {
                    trailing: !1
                })), l = [ yc("mousemove", u, n), yc("touchmove", u, n), yc("drag", u, n) ];
                return ou((() => {
                    l.forEach((e => e()));
                }));
            }(e), i = function({mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, unblockSelector: i, sampling: s}) {
                if (!1 === s.mouseInteraction) return () => {};
                const a = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction, c = [];
                let u = null;
                return Object.keys(Uc).filter((e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e])).forEach((s => {
                    let a = Ha(s);
                    const l = (t => s => {
                        const a = au(s);
                        if (Cc(a, r, o, i, !0)) return;
                        let c = null, l = t;
                        if ("pointerType" in s) {
                            switch (s.pointerType) {
                              case "mouse":
                                c = zc.Mouse;
                                break;

                              case "touch":
                                c = zc.Touch;
                                break;

                              case "pen":
                                c = zc.Pen;
                            }
                            c === zc.Touch ? Uc[t] === Uc.MouseDown ? l = "TouchStart" : Uc[t] === Uc.MouseUp && (l = "TouchEnd") : zc.Pen;
                        } else Mc(s) && (c = zc.Touch);
                        null !== c ? (u = c, (l.startsWith("Touch") && c === zc.Touch || l.startsWith("Mouse") && c === zc.Mouse) && (c = null)) : Uc[t] === Uc.Click && (c = u, 
                        u = null);
                        const d = Mc(s) ? s.changedTouches[0] : s;
                        if (!d) return;
                        const p = n.getId(a), {clientX: h, clientY: f} = d;
                        ou(e)({
                            type: Uc[l],
                            id: p,
                            x: h,
                            y: f,
                            ...null !== c && {
                                pointerType: c
                            }
                        });
                    })(s);
                    if (window.PointerEvent) switch (Uc[s]) {
                      case Uc.MouseDown:
                      case Uc.MouseUp:
                        a = a.replace("mouse", "pointer");
                        break;

                      case Uc.TouchStart:
                      case Uc.TouchEnd:
                        return;
                    }
                    c.push(yc(a, l, t));
                })), ou((() => {
                    c.forEach((e => e()));
                }));
            }(e), s = lu(e), a = function({viewportResizeCb: e}, {win: t}) {
                let n = -1, r = -1;
                return yc("resize", ou(_c(ou((() => {
                    const t = kc(), o = Tc();
                    n === t && r === o || (e({
                        width: Number(o),
                        height: Number(t)
                    }), n = t, r = o);
                })), 200)), t);
            }(e, {
                win: n
            }), c = hu(e), u = function({mediaInteractionCb: e, blockClass: t, blockSelector: n, unblockSelector: r, mirror: o, sampling: i, doc: s}) {
                const a = ou((s => _c(ou((i => {
                    const a = au(i);
                    if (!a || Cc(a, t, n, r, !0)) return;
                    const {currentTime: c, volume: u, muted: l, playbackRate: d} = a;
                    e({
                        type: s,
                        id: o.getId(a),
                        currentTime: c,
                        volume: u,
                        muted: l,
                        playbackRate: d
                    });
                })), i.media || 500))), c = [ yc("play", a(0), s), yc("pause", a(1), s), yc("seeked", a(2), s), yc("volumechange", a(3), s), yc("ratechange", a(4), s) ];
                return ou((() => {
                    c.forEach((e => e()));
                }));
            }(e), l = function({styleSheetRuleCb: e, mirror: t, stylesheetManager: n}, {win: r}) {
                if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
                const o = r.CSSStyleSheet.prototype.insertRule;
                r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                    apply: ou(((r, o, i) => {
                        const [s, a] = i, {id: c, styleId: u} = mu(o, t, n.styleMirror);
                        return (c && -1 !== c || u && -1 !== u) && e({
                            id: c,
                            styleId: u,
                            adds: [ {
                                rule: s,
                                index: a
                            } ]
                        }), r.apply(o, i);
                    }))
                });
                const i = r.CSSStyleSheet.prototype.deleteRule;
                let s, a;
                r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                    apply: ou(((r, o, i) => {
                        const [s] = i, {id: a, styleId: c} = mu(o, t, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && e({
                            id: a,
                            styleId: c,
                            removes: [ {
                                index: s
                            } ]
                        }), r.apply(o, i);
                    }))
                }), r.CSSStyleSheet.prototype.replace && (s = r.CSSStyleSheet.prototype.replace, 
                r.CSSStyleSheet.prototype.replace = new Proxy(s, {
                    apply: ou(((r, o, i) => {
                        const [s] = i, {id: a, styleId: c} = mu(o, t, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && e({
                            id: a,
                            styleId: c,
                            replace: s
                        }), r.apply(o, i);
                    }))
                })), r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, 
                r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
                    apply: ou(((r, o, i) => {
                        const [s] = i, {id: a, styleId: c} = mu(o, t, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && e({
                            id: a,
                            styleId: c,
                            replaceSync: s
                        }), r.apply(o, i);
                    }))
                }));
                const c = {};
                _u("CSSGroupingRule") ? c.CSSGroupingRule = r.CSSGroupingRule : (_u("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule), 
                _u("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule), _u("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
                const u = {};
                return Object.entries(c).forEach((([r, o]) => {
                    u[r] = {
                        insertRule: o.prototype.insertRule,
                        deleteRule: o.prototype.deleteRule
                    }, o.prototype.insertRule = new Proxy(u[r].insertRule, {
                        apply: ou(((r, o, i) => {
                            const [s, a] = i, {id: c, styleId: u} = mu(o.parentStyleSheet, t, n.styleMirror);
                            return (c && -1 !== c || u && -1 !== u) && e({
                                id: c,
                                styleId: u,
                                adds: [ {
                                    rule: s,
                                    index: [ ...fu(o), a || 0 ]
                                } ]
                            }), r.apply(o, i);
                        }))
                    }), o.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                        apply: ou(((r, o, i) => {
                            const [s] = i, {id: a, styleId: c} = mu(o.parentStyleSheet, t, n.styleMirror);
                            return (a && -1 !== a || c && -1 !== c) && e({
                                id: a,
                                styleId: c,
                                removes: [ {
                                    index: [ ...fu(o), s ]
                                } ]
                            }), r.apply(o, i);
                        }))
                    });
                })), ou((() => {
                    r.CSSStyleSheet.prototype.insertRule = o, r.CSSStyleSheet.prototype.deleteRule = i, 
                    s && (r.CSSStyleSheet.prototype.replace = s), a && (r.CSSStyleSheet.prototype.replaceSync = a), 
                    Object.entries(c).forEach((([e, t]) => {
                        t.prototype.insertRule = u[e].insertRule, t.prototype.deleteRule = u[e].deleteRule;
                    }));
                }));
            }(e, {
                win: n
            }), d = gu(e, e.doc), p = function({styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r}, {win: o}) {
                const i = o.CSSStyleDeclaration.prototype.setProperty;
                o.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
                    apply: ou(((o, s, a) => {
                        const [c, u, l] = a;
                        if (n.has(c)) return i.apply(s, [ c, u, l ]);
                        const {id: d, styleId: p} = mu(iu([ s, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet ]), t, r.styleMirror);
                        return (d && -1 !== d || p && -1 !== p) && e({
                            id: d,
                            styleId: p,
                            set: {
                                property: c,
                                value: u,
                                priority: l
                            },
                            index: fu(s.parentRule)
                        }), o.apply(s, a);
                    }))
                });
                const s = o.CSSStyleDeclaration.prototype.removeProperty;
                return o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                    apply: ou(((o, i, a) => {
                        const [c] = a;
                        if (n.has(c)) return s.apply(i, [ c ]);
                        const {id: u, styleId: l} = mu(iu([ i, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet ]), t, r.styleMirror);
                        return (u && -1 !== u || l && -1 !== l) && e({
                            id: u,
                            styleId: l,
                            remove: {
                                property: c
                            },
                            index: fu(i.parentRule)
                        }), o.apply(i, a);
                    }))
                }), ou((() => {
                    o.CSSStyleDeclaration.prototype.setProperty = i, o.CSSStyleDeclaration.prototype.removeProperty = s;
                }));
            }(e, {
                win: n
            }), h = e.collectFonts ? function({fontCb: e, doc: t}) {
                const n = t.defaultView;
                if (!n) return () => {};
                const r = [], o = new WeakMap, i = n.FontFace;
                n.FontFace = function(e, t, n) {
                    const r = new i(e, t, n);
                    return o.set(r, {
                        family: e,
                        buffer: "string" != typeof t,
                        descriptors: n,
                        fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                    }), r;
                };
                const s = Sc(t.fonts, "add", (function(t) {
                    return function(n) {
                        return Bc(ou((() => {
                            const t = o.get(n);
                            t && (e(t), o.delete(n));
                        })), 0), t.apply(this, [ n ]);
                    };
                }));
                return r.push((() => {
                    n.FontFace = i;
                })), r.push(s), ou((() => {
                    r.forEach((e => e()));
                }));
            }(e) : () => {}, f = function(e) {
                const {doc: t, mirror: n, blockClass: r, blockSelector: o, unblockSelector: i, selectionCb: s} = e;
                let a = !0;
                const c = ou((() => {
                    const e = t.getSelection();
                    if (!e || a && iu([ e, "optionalAccess", e => e.isCollapsed ])) return;
                    a = e.isCollapsed || !1;
                    const c = [], u = e.rangeCount || 0;
                    for (let t = 0; t < u; t++) {
                        const s = e.getRangeAt(t), {startContainer: a, startOffset: u, endContainer: l, endOffset: d} = s;
                        Cc(a, r, o, i, !0) || Cc(l, r, o, i, !0) || c.push({
                            start: n.getId(a),
                            startOffset: u,
                            end: n.getId(l),
                            endOffset: d
                        });
                    }
                    s({
                        ranges: c
                    });
                }));
                return c(), yc("selectionchange", c);
            }(e), m = function({doc: e, customElementCb: t}) {
                const n = e.defaultView;
                return n && n.customElements ? Sc(n.customElements, "define", (function(e) {
                    return function(n, r, o) {
                        try {
                            t({
                                define: {
                                    name: n
                                }
                            });
                        } catch (e) {}
                        return e.apply(this, [ n, r, o ]);
                    };
                })) : () => {};
            }(e), g = [];
            for (const t of e.plugins) g.push(t.observer(t.callback, n, t.options));
            return ou((() => {
                su.forEach((e => e.reset())), r.disconnect(), o(), i(), s(), a(), c(), u(), l(), 
                d(), p(), h(), f(), m(), g.forEach((e => e()));
            }));
        }
        function vu(e) {
            return void 0 !== window[e];
        }
        function _u(e) {
            return Boolean(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype);
        }
        class bu {
            constructor(e) {
                this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
            }
            getId(e, t, n, r) {
                const o = n || this.getIdToRemoteIdMap(e), i = r || this.getRemoteIdToIdMap(e);
                let s = o.get(t);
                return s || (s = this.generateIdFn(), o.set(t, s), i.set(s, t)), s;
            }
            getIds(e, t) {
                const n = this.getIdToRemoteIdMap(e), r = this.getRemoteIdToIdMap(e);
                return t.map((t => this.getId(e, t, n, r)));
            }
            getRemoteId(e, t, n) {
                const r = n || this.getRemoteIdToIdMap(e);
                if ("number" != typeof t) return t;
                return r.get(t) || -1;
            }
            getRemoteIds(e, t) {
                const n = this.getRemoteIdToIdMap(e);
                return t.map((t => this.getRemoteId(e, t, n)));
            }
            reset(e) {
                if (!e) return this.iframeIdToRemoteIdMap = new WeakMap, void (this.iframeRemoteIdToIdMap = new WeakMap);
                this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e);
            }
            getIdToRemoteIdMap(e) {
                let t = this.iframeIdToRemoteIdMap.get(e);
                return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t;
            }
            getRemoteIdToIdMap(e) {
                let t = this.iframeRemoteIdToIdMap.get(e);
                return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t;
            }
        }
        function Su(e) {
            let t, n = e[0], r = 1;
            for (;r < e.length; ) {
                const o = e[r], i = e[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (t = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...e) => n.call(t, ...e))), 
                t = void 0);
            }
            return n;
        }
        class xu {
            constructor() {
                this.crossOriginIframeMirror = new bu(Ja), this.crossOriginIframeRootIdMap = new WeakMap;
            }
            addIframe() {}
            addLoadListener() {}
            attachIframe() {}
        }
        class wu {
            constructor(e) {
                this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new bu(Ja), 
                this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, 
                this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, 
                this.crossOriginIframeStyleMirror = new bu(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), 
                this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
            }
            addIframe(e) {
                this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e);
            }
            addLoadListener(e) {
                this.loadListener = e;
            }
            attachIframe(e, t) {
                this.mutationCb({
                    adds: [ {
                        parentId: this.mirror.getId(e),
                        nextId: null,
                        node: t
                    } ],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }), Su([ this, "access", e => e.loadListener, "optionalCall", t => t(e) ]), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument));
            }
            handleMessage(e) {
                const t = e;
                if ("rrweb" !== t.data.type || t.origin !== t.data.origin) return;
                if (!e.source) return;
                const n = this.crossOriginIframeMap.get(e.source);
                if (!n) return;
                const r = this.transformCrossOriginEvent(n, t.data.event);
                r && this.wrappedEmit(r, t.data.isCheckout);
            }
            transformCrossOriginEvent(e, t) {
                switch (t.type) {
                  case Hc.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e), this.crossOriginIframeStyleMirror.reset(e), 
                        this.replaceIdOnNode(t.data.node, e);
                        const n = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, n), this.patchRootIdOnNode(t.data.node, n), 
                        {
                            timestamp: t.timestamp,
                            type: Hc.IncrementalSnapshot,
                            data: {
                                source: qc.Mutation,
                                adds: [ {
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                } ],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        };
                    }

                  case Hc.Meta:
                  case Hc.Load:
                  case Hc.DomContentLoaded:
                    return !1;

                  case Hc.Plugin:
                    return t;

                  case Hc.Custom:
                    return this.replaceIds(t.data.payload, e, [ "id", "parentId", "previousId", "nextId" ]), 
                    t;

                  case Hc.IncrementalSnapshot:
                    switch (t.data.source) {
                      case qc.Mutation:
                        return t.data.adds.forEach((t => {
                            this.replaceIds(t, e, [ "parentId", "nextId", "previousId" ]), this.replaceIdOnNode(t.node, e);
                            const n = this.crossOriginIframeRootIdMap.get(e);
                            n && this.patchRootIdOnNode(t.node, n);
                        })), t.data.removes.forEach((t => {
                            this.replaceIds(t, e, [ "parentId", "id" ]);
                        })), t.data.attributes.forEach((t => {
                            this.replaceIds(t, e, [ "id" ]);
                        })), t.data.texts.forEach((t => {
                            this.replaceIds(t, e, [ "id" ]);
                        })), t;

                      case qc.Drag:
                      case qc.TouchMove:
                      case qc.MouseMove:
                        return t.data.positions.forEach((t => {
                            this.replaceIds(t, e, [ "id" ]);
                        })), t;

                      case qc.ViewportResize:
                        return !1;

                      case qc.MediaInteraction:
                      case qc.MouseInteraction:
                      case qc.Scroll:
                      case qc.CanvasMutation:
                      case qc.Input:
                        return this.replaceIds(t.data, e, [ "id" ]), t;

                      case qc.StyleSheetRule:
                      case qc.StyleDeclaration:
                        return this.replaceIds(t.data, e, [ "id" ]), this.replaceStyleIds(t.data, e, [ "styleId" ]), 
                        t;

                      case qc.Font:
                        return t;

                      case qc.Selection:
                        return t.data.ranges.forEach((t => {
                            this.replaceIds(t, e, [ "start", "end" ]);
                        })), t;

                      case qc.AdoptedStyleSheet:
                        return this.replaceIds(t.data, e, [ "id" ]), this.replaceStyleIds(t.data, e, [ "styleIds" ]), 
                        Su([ t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t((t => {
                            this.replaceStyleIds(t, e, [ "styleId" ]);
                        })) ]), t;
                    }
                }
                return !1;
            }
            replace(e, t, n, r) {
                for (const o of r) (Array.isArray(t[o]) || "number" == typeof t[o]) && (Array.isArray(t[o]) ? t[o] = e.getIds(n, t[o]) : t[o] = e.getId(n, t[o]));
                return t;
            }
            replaceIds(e, t, n) {
                return this.replace(this.crossOriginIframeMirror, e, t, n);
            }
            replaceStyleIds(e, t, n) {
                return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
            }
            replaceIdOnNode(e, t) {
                this.replaceIds(e, t, [ "id", "rootId" ]), "childNodes" in e && e.childNodes.forEach((e => {
                    this.replaceIdOnNode(e, t);
                }));
            }
            patchRootIdOnNode(e, t) {
                e.type === La.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach((e => {
                    this.patchRootIdOnNode(e, t);
                }));
            }
        }
        class ku {
            init() {}
            addShadowRoot() {}
            observeAttachShadow() {}
            reset() {}
        }
        class Tu {
            constructor(e) {
                this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, 
                this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, 
                this.init();
            }
            init() {
                this.reset(), this.patchAttachShadow(Element, document);
            }
            addShadowRoot(e, t) {
                if (!Na(e)) return;
                if (this.shadowDoms.has(e)) return;
                this.shadowDoms.add(e);
                const n = cu({
                    ...this.bypassOptions,
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, e);
                this.restoreHandlers.push((() => n.disconnect())), this.restoreHandlers.push(lu({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                })), Bc((() => {
                    e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), 
                    this.restoreHandlers.push(gu({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, e));
                }), 0);
            }
            observeAttachShadow(e) {
                e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument);
            }
            patchAttachShadow(e, t) {
                const n = this;
                this.restoreHandlers.push(Sc(e.prototype, "attachShadow", (function(e) {
                    return function(r) {
                        const o = e.call(this, r);
                        return this.shadowRoot && $c(this) && n.addShadowRoot(this.shadowRoot, t), o;
                    };
                })));
            }
            reset() {
                this.restoreHandlers.forEach((e => {
                    try {
                        e();
                    } catch (e) {}
                })), this.restoreHandlers = [], this.shadowDoms = new WeakSet;
            }
        }
        class Eu {
            reset() {}
            freeze() {}
            unfreeze() {}
            lock() {}
            unlock() {}
            snapshot() {}
        }
        class Cu {
            constructor(e) {
                this.trackedLinkElements = new WeakSet, this.styleMirror = new Dc, this.mutationCb = e.mutationCb, 
                this.adoptedStyleSheetCb = e.adoptedStyleSheetCb;
            }
            attachLinkElement(e, t) {
                "_cssText" in t.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [ {
                        id: t.id,
                        attributes: t.attributes
                    } ]
                }), this.trackLinkElement(e);
            }
            trackLinkElement(e) {
                this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e));
            }
            adoptStyleSheets(e, t) {
                if (0 === e.length) return;
                const n = {
                    id: t,
                    styleIds: []
                }, r = [];
                for (const t of e) {
                    let e;
                    this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), 
                    r.push({
                        styleId: e,
                        rules: Array.from(t.rules || CSSRule, ((e, t) => ({
                            rule: $a(e),
                            index: t
                        })))
                    })), n.styleIds.push(e);
                }
                r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
            }
            reset() {
                this.styleMirror.reset(), this.trackedLinkElements = new WeakSet;
            }
            trackStylesheetInLinkElement(e) {}
        }
        class Iu {
            constructor() {
                this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear();
            }
            periodicallyClear() {
                !function(...e) {
                    Fc("requestAnimationFrame")(...e);
                }((() => {
                    this.clear(), this.loop && this.periodicallyClear();
                }));
            }
            inOtherBuffer(e, t) {
                const n = this.nodeMap.get(e);
                return n && Array.from(n).some((e => e !== t));
            }
            add(e, t) {
                this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t));
            }
            clear() {
                this.nodeMap = new WeakMap;
            }
            destroy() {
                this.loop = !1;
            }
        }
        let Ru, Mu;
        const Ou = new ja;
        function Au(e = {}) {
            const {emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: o = "rr-block", blockSelector: i = null, unblockSelector: s = null, ignoreClass: a = "rr-ignore", ignoreSelector: c = null, maskAllText: u = !1, maskTextClass: l = "rr-mask", unmaskTextClass: d = null, maskTextSelector: p = null, unmaskTextSelector: h = null, inlineStylesheet: f = !0, maskAllInputs: m, maskInputOptions: g, slimDOMOptions: y, maskAttributeFn: v, maskInputFn: _, maskTextFn: b, maxCanvasSize: S = null, packFn: x, sampling: w = {}, dataURLOptions: k = {}, mousemoveWait: T, recordCanvas: E = !1, recordCrossOriginIframes: C = !1, recordAfter: I = ("DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load"), userTriggeredOnInput: R = !1, collectFonts: M = !1, inlineImages: O = !1, plugins: A, keepIframeSrcFn: L = (() => !1), ignoreCSSAttributes: D = new Set([]), errorHandler: N, onMutation: P, getCanvasManager: $} = e;
            !function(e) {
                tu = e;
            }(N);
            const j = !C || window.parent === window;
            let F = !1;
            if (!j) try {
                window.parent.document && (F = !1);
            } catch (e) {
                F = !0;
            }
            if (j && !t) throw new Error("emit function is required");
            void 0 !== T && void 0 === w.mousemove && (w.mousemove = T), Ou.reset();
            const B = !0 === m ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== g ? g : {}, H = !0 === y || "all" === y ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === y,
                headMetaDescKeywords: "all" === y
            } : y || {};
            let q;
            !function(e = window) {
                "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), 
                "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), 
                Node.prototype.contains || (Node.prototype.contains = (...e) => {
                    let t = e[0];
                    if (!(0 in e)) throw new TypeError("1 argument is required");
                    do {
                        if (this === t) return !0;
                    } while (t = t && t.parentNode);
                    return !1;
                });
            }();
            let U = 0;
            const z = e => {
                for (const t of A || []) t.eventProcessor && (e = t.eventProcessor(e));
                return x && !F && (e = x(e)), e;
            };
            Ru = (e, o) => {
                const i = e;
                if (i.timestamp = xc(), !Is([ su, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e() ]) || i.type === Hc.FullSnapshot || i.type === Hc.IncrementalSnapshot && i.data.source === qc.Mutation || su.forEach((e => e.unfreeze())), 
                j) Is([ t, "optionalCall", e => e(z(i), o) ]); else if (F) {
                    const e = {
                        type: "rrweb",
                        event: z(i),
                        origin: window.location.origin,
                        isCheckout: o
                    };
                    window.parent.postMessage(e, "*");
                }
                if (i.type === Hc.FullSnapshot) q = i, U = 0; else if (i.type === Hc.IncrementalSnapshot) {
                    if (i.data.source === qc.Mutation && i.data.isAttachIframe) return;
                    U++;
                    const e = r && U >= r, t = n && q && i.timestamp - q.timestamp > n;
                    (e || t) && Z(!0);
                }
            };
            const W = e => {
                Ru({
                    type: Hc.IncrementalSnapshot,
                    data: {
                        source: qc.Mutation,
                        ...e
                    }
                });
            }, G = e => Ru({
                type: Hc.IncrementalSnapshot,
                data: {
                    source: qc.Scroll,
                    ...e
                }
            }), V = e => Ru({
                type: Hc.IncrementalSnapshot,
                data: {
                    source: qc.CanvasMutation,
                    ...e
                }
            }), Y = new Cu({
                mutationCb: W,
                adoptedStyleSheetCb: e => Ru({
                    type: Hc.IncrementalSnapshot,
                    data: {
                        source: qc.AdoptedStyleSheet,
                        ...e
                    }
                })
            }), J = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new xu : new wu({
                mirror: Ou,
                mutationCb: W,
                stylesheetManager: Y,
                recordCrossOriginIframes: C,
                wrappedEmit: Ru
            });
            for (const e of A || []) e.getMirror && e.getMirror({
                nodeMirror: Ou,
                crossOriginIframeMirror: J.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: J.crossOriginIframeStyleMirror
            });
            const X = new Iu, K = function(e, t) {
                try {
                    return e ? e(t) : new Eu;
                } catch (e) {
                    return new Eu;
                }
            }($, {
                mirror: Ou,
                win: window,
                mutationCb: e => Ru({
                    type: Hc.IncrementalSnapshot,
                    data: {
                        source: qc.CanvasMutation,
                        ...e
                    }
                }),
                recordCanvas: E,
                blockClass: o,
                blockSelector: i,
                unblockSelector: s,
                maxCanvasSize: S,
                sampling: w.canvas,
                dataURLOptions: k,
                errorHandler: N
            }), Q = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new ku : new Tu({
                mutationCb: W,
                scrollCb: G,
                bypassOptions: {
                    onMutation: P,
                    blockClass: o,
                    blockSelector: i,
                    unblockSelector: s,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    inlineStylesheet: f,
                    maskInputOptions: B,
                    dataURLOptions: k,
                    maskAttributeFn: v,
                    maskTextFn: b,
                    maskInputFn: _,
                    recordCanvas: E,
                    inlineImages: O,
                    sampling: w,
                    slimDOMOptions: H,
                    iframeManager: J,
                    stylesheetManager: Y,
                    canvasManager: K,
                    keepIframeSrcFn: L,
                    processedNodeManager: X
                },
                mirror: Ou
            }), Z = (e = !1) => {
                Ru({
                    type: Hc.Meta,
                    data: {
                        href: window.location.href,
                        width: Tc(),
                        height: kc()
                    }
                }, e), Y.reset(), Q.init(), su.forEach((e => e.lock()));
                const t = function(e, t) {
                    const {mirror: n = new ja, blockClass: r = "rr-block", blockSelector: o = null, unblockSelector: i = null, maskAllText: s = !1, maskTextClass: a = "rr-mask", unmaskTextClass: c = null, maskTextSelector: u = null, unmaskTextSelector: l = null, inlineStylesheet: d = !0, inlineImages: p = !1, recordCanvas: h = !1, maskAllInputs: f = !1, maskAttributeFn: m, maskTextFn: g, maskInputFn: y, slimDOM: v = !1, dataURLOptions: _, preserveWhiteSpace: b, onSerialize: S, onIframeLoad: x, iframeLoadTimeout: w, onStylesheetLoad: k, stylesheetLoadTimeout: T, keepIframeSrcFn: E = (() => !1)} = t || {};
                    return mc(e, {
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: o,
                        unblockSelector: i,
                        maskAllText: s,
                        maskTextClass: a,
                        unmaskTextClass: c,
                        maskTextSelector: u,
                        unmaskTextSelector: l,
                        skipChild: !1,
                        inlineStylesheet: d,
                        maskInputOptions: !0 === f ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0
                        } : !1 === f ? {} : f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: !0 === v || "all" === v ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === v,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === v ? {} : v,
                        dataURLOptions: _,
                        inlineImages: p,
                        recordCanvas: h,
                        preserveWhiteSpace: b,
                        onSerialize: S,
                        onIframeLoad: x,
                        iframeLoadTimeout: w,
                        onStylesheetLoad: k,
                        stylesheetLoadTimeout: T,
                        keepIframeSrcFn: E,
                        newlyAddedElement: !1
                    });
                }(document, {
                    mirror: Ou,
                    blockClass: o,
                    blockSelector: i,
                    unblockSelector: s,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    inlineStylesheet: f,
                    maskAllInputs: B,
                    maskAttributeFn: v,
                    maskInputFn: _,
                    maskTextFn: b,
                    slimDOM: H,
                    dataURLOptions: k,
                    recordCanvas: E,
                    inlineImages: O,
                    onSerialize: e => {
                        Oc(e, Ou) && J.addIframe(e), Ac(e, Ou) && Y.trackLinkElement(e), Lc(e) && Q.addShadowRoot(e.shadowRoot, document);
                    },
                    onIframeLoad: (e, t) => {
                        J.attachIframe(e, t), Q.observeAttachShadow(e);
                    },
                    onStylesheetLoad: (e, t) => {
                        Y.attachLinkElement(e, t);
                    },
                    keepIframeSrcFn: L
                });
                t && (Ru({
                    type: Hc.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: wc(window)
                    }
                }), su.forEach((e => e.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Y.adoptStyleSheets(document.adoptedStyleSheets, Ou.getId(document)));
            };
            Mu = Z;
            try {
                const e = [], t = e => ou(yu)({
                    onMutation: P,
                    mutationCb: W,
                    mousemoveCb: (e, t) => Ru({
                        type: Hc.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => Ru({
                        type: Hc.IncrementalSnapshot,
                        data: {
                            source: qc.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: G,
                    viewportResizeCb: e => Ru({
                        type: Hc.IncrementalSnapshot,
                        data: {
                            source: qc.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => Ru({
                        type: Hc.IncrementalSnapshot,
                        data: {
                            source: qc.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => Ru({
                        type: Hc.IncrementalSnapshot,
                        data: {
                            source: qc.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => Ru({
                        type: Hc.IncrementalSnapshot,
                        data: {
                            source: qc.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => Ru({
                        type: Hc.IncrementalSnapshot,
                        data: {
                            source: qc.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: V,
                    fontCb: e => Ru({
                        type: Hc.IncrementalSnapshot,
                        data: {
                            source: qc.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        Ru({
                            type: Hc.IncrementalSnapshot,
                            data: {
                                source: qc.Selection,
                                ...e
                            }
                        });
                    },
                    customElementCb: e => {
                        Ru({
                            type: Hc.IncrementalSnapshot,
                            data: {
                                source: qc.CustomElement,
                                ...e
                            }
                        });
                    },
                    blockClass: o,
                    ignoreClass: a,
                    ignoreSelector: c,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    maskInputOptions: B,
                    inlineStylesheet: f,
                    sampling: w,
                    recordCanvas: E,
                    inlineImages: O,
                    userTriggeredOnInput: R,
                    collectFonts: M,
                    doc: e,
                    maskAttributeFn: v,
                    maskInputFn: _,
                    maskTextFn: b,
                    keepIframeSrcFn: L,
                    blockSelector: i,
                    unblockSelector: s,
                    slimDOMOptions: H,
                    dataURLOptions: k,
                    mirror: Ou,
                    iframeManager: J,
                    stylesheetManager: Y,
                    shadowDomManager: Q,
                    processedNodeManager: X,
                    canvasManager: K,
                    ignoreCSSAttributes: D,
                    plugins: Is([ A, "optionalAccess", e => e.filter, "call", e => e((e => e.observer)), "optionalAccess", e => e.map, "call", e => e((e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => Ru({
                            type: Hc.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    }))) ]) || []
                }, {});
                J.addLoadListener((n => {
                    try {
                        e.push(t(n.contentDocument));
                    } catch (e) {}
                }));
                const n = () => {
                    Z(), e.push(t(document));
                };
                return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(yc("DOMContentLoaded", (() => {
                    Ru({
                        type: Hc.DomContentLoaded,
                        data: {}
                    }), "DOMContentLoaded" === I && n();
                }))), e.push(yc("load", (() => {
                    Ru({
                        type: Hc.Load,
                        data: {}
                    }), "load" === I && n();
                }), window))), () => {
                    e.forEach((e => e())), X.destroy(), Mu = void 0, tu = void 0;
                };
            } catch (e) {}
        }
        Au.mirror = Ou, Au.takeFullSnapshot = function(e) {
            if (!Mu) throw new Error("please take full snapshot after start recording");
            Mu(e);
        };
        function Du(e) {
            return e > 9999999999 ? e : 1e3 * e;
        }
        function Nu(e) {
            return e > 9999999999 ? e / 1e3 : e;
        }
        function Pu(e, t) {
            "sentry.transaction" !== t.category && ([ "ui.click", "ui.input" ].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), 
            e.addUpdate((() => (e.throttledAddEvent({
                type: Hc.Custom,
                timestamp: 1e3 * (t.timestamp || 0),
                data: {
                    tag: "breadcrumb",
                    payload: kt(t, 10, 1e3)
                }
            }), "console" === t.category))));
        }
        function ju(e) {
            return e.closest("button,a") || e;
        }
        function Fu(e) {
            const t = Bu(e);
            return t && t instanceof Element ? ju(t) : t;
        }
        function Bu(e) {
            return function(e) {
                return "object" == typeof e && !!e && "target" in e;
            }(e) ? e.target : e;
        }
        let Hu;
        class Uu {
            constructor(e, t, n = Pu) {
                this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, 
                this._threshold = t.threshold / 1e3, this._scollTimeout = t.scrollTimeout / 1e3, 
                this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = n;
            }
            addListeners() {
                const e = function(e) {
                    return Hu || (Hu = [], Z(ka, "open", (function(e) {
                        return function(...t) {
                            if (Hu) try {
                                Hu.forEach((e => e()));
                            } catch (e) {}
                            return e.apply(ka, t);
                        };
                    }))), Hu.push(e), () => {
                        const t = Hu ? Hu.indexOf(e) : -1;
                        t > -1 && Hu.splice(t, 1);
                    };
                }((() => {
                    this._lastMutation = Wu();
                }));
                this._teardown = () => {
                    e(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0;
                };
            }
            removeListeners() {
                this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
            }
            handleClick(e, t) {
                if (function(e, t) {
                    return !zu.includes(e.tagName) || ("INPUT" === e.tagName && ![ "submit", "button" ].includes(e.getAttribute("type") || "") || (!("A" !== e.tagName || !(e.hasAttribute("download") || e.hasAttribute("target") && "_self" !== e.getAttribute("target"))) || !(!t || !e.matches(t))));
                }(t, this._ignoreSelector) || !function(e) {
                    return !(!e.data || "number" != typeof e.data.nodeId || !e.timestamp);
                }(e)) return;
                const n = {
                    timestamp: Nu(e.timestamp),
                    clickBreadcrumb: e,
                    clickCount: 0,
                    node: t
                };
                this._clicks.some((e => e.node === n.node && Math.abs(e.timestamp - n.timestamp) < 1)) || (this._clicks.push(n), 
                1 === this._clicks.length && this._scheduleCheckClicks());
            }
            registerMutation(e = Date.now()) {
                this._lastMutation = Nu(e);
            }
            registerScroll(e = Date.now()) {
                this._lastScroll = Nu(e);
            }
            registerClick(e) {
                const t = ju(e);
                this._handleMultiClick(t);
            }
            _handleMultiClick(e) {
                this._getClicks(e).forEach((e => {
                    e.clickCount++;
                }));
            }
            _getClicks(e) {
                return this._clicks.filter((t => t.node === e));
            }
            _checkClicks() {
                const e = [], t = Wu();
                this._clicks.forEach((n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), 
                    !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), 
                    n.timestamp + this._timeout <= t && e.push(n);
                }));
                for (const t of e) {
                    const e = this._clicks.indexOf(t);
                    e > -1 && (this._generateBreadcrumbs(t), this._clicks.splice(e, 1));
                }
                this._clicks.length && this._scheduleCheckClicks();
            }
            _generateBreadcrumbs(e) {
                const t = this._replay, n = e.scrollAfter && e.scrollAfter <= this._scollTimeout, r = e.mutationAfter && e.mutationAfter <= this._threshold, o = !n && !r, {clickCount: i, clickBreadcrumb: s} = e;
                if (o) {
                    const n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout), r = n < 1e3 * this._timeout ? "mutation" : "timeout", o = {
                        type: "default",
                        message: s.message,
                        timestamp: s.timestamp,
                        category: "ui.slowClickDetected",
                        data: {
                            ...s.data,
                            url: ka.location.href,
                            route: t.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: r,
                            clickCount: i || 1
                        }
                    };
                    this._addBreadcrumbEvent(t, o);
                } else if (i > 1) {
                    const e = {
                        type: "default",
                        message: s.message,
                        timestamp: s.timestamp,
                        category: "ui.multiClick",
                        data: {
                            ...s.data,
                            url: ka.location.href,
                            route: t.getCurrentRoute(),
                            clickCount: i,
                            metric: !0
                        }
                    };
                    this._addBreadcrumbEvent(t, e);
                }
            }
            _scheduleCheckClicks() {
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout((() => this._checkClicks()), 1e3);
            }
        }
        const zu = [ "A", "BUTTON", "INPUT" ];
        function Wu() {
            return Date.now() / 1e3;
        }
        function Vu(e) {
            return {
                timestamp: Date.now() / 1e3,
                type: "default",
                ...e
            };
        }
        var Yu;
        !function(e) {
            e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", 
            e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment";
        }(Yu || (Yu = {}));
        const Ju = new Set([ "id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component" ]);
        function Xu(e) {
            const t = {};
            for (const n in e) if (Ju.has(n)) {
                let r = n;
                "data-testid" !== n && "data-test-id" !== n || (r = "testId"), t[r] = e[n];
            }
            return t;
        }
        function Qu(e, t) {
            const n = Au.mirror.getId(e), r = n && Au.mirror.getNode(n), o = r && Au.mirror.getMeta(r), i = o && function(e) {
                return e.type === Yu.Element;
            }(o) ? o : null;
            return {
                message: t,
                data: i ? {
                    nodeId: n,
                    node: {
                        id: n,
                        tagName: i.tagName,
                        textContent: Array.from(i.childNodes).map((e => e.type === Yu.Text && e.textContent)).filter(Boolean).map((e => e.trim())).join(""),
                        attributes: Xu(i.attributes)
                    }
                } : {}
            };
        }
        const el = {
            resource: function(e) {
                const {entryType: t, initiatorType: n, name: r, responseEnd: o, startTime: i, decodedBodySize: s, encodedBodySize: a, responseStatus: c, transferSize: u} = e;
                return [ "fetch", "xmlhttprequest" ].includes(n) ? null : {
                    type: `${t}.${n}`,
                    start: nl(i),
                    end: nl(o),
                    name: r,
                    data: {
                        size: u,
                        statusCode: c,
                        decodedBodySize: s,
                        encodedBodySize: a
                    }
                };
            },
            paint: function(e) {
                const {duration: t, entryType: n, name: r, startTime: o} = e, i = nl(o);
                return {
                    type: n,
                    name: r,
                    start: i,
                    end: i + t,
                    data: void 0
                };
            },
            navigation: function(e) {
                const {entryType: t, name: n, decodedBodySize: r, duration: o, domComplete: i, encodedBodySize: s, domContentLoadedEventStart: a, domContentLoadedEventEnd: c, domInteractive: u, loadEventStart: l, loadEventEnd: d, redirectCount: p, startTime: h, transferSize: f, type: m} = e;
                return 0 === o ? null : {
                    type: `${t}.${m}`,
                    start: nl(h),
                    end: nl(i),
                    name: n,
                    data: {
                        size: f,
                        decodedBodySize: r,
                        encodedBodySize: s,
                        duration: o,
                        domInteractive: u,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: c,
                        loadEventStart: l,
                        loadEventEnd: d,
                        domComplete: i,
                        redirectCount: p
                    }
                };
            }
        };
        function tl(e) {
            return el[e.entryType] ? el[e.entryType](e) : null;
        }
        function nl(e) {
            return ((Ie || ka.performance.timeOrigin) + e) / 1e3;
        }
        const ol = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function sl(e, t) {
            ol && (E.info(e), t && cl(e));
        }
        function al(e, t) {
            ol && (E.info(e), t && setTimeout((() => {
                cl(e);
            }), 0));
        }
        function cl(e) {
            Nt({
                category: "console",
                data: {
                    logger: "replay"
                },
                level: "info",
                message: e
            }, {
                level: "info"
            });
        }
        class ul extends Error {
            constructor() {
                super("Event buffer exceeded maximum size of 20000000.");
            }
        }
        class ll {
            constructor() {
                this.events = [], this._totalSize = 0, this.hasCheckout = !1;
            }
            get hasEvents() {
                return this.events.length > 0;
            }
            get type() {
                return "sync";
            }
            destroy() {
                this.events = [];
            }
            async addEvent(e) {
                const t = JSON.stringify(e).length;
                if (this._totalSize += t, this._totalSize > 2e7) throw new ul;
                this.events.push(e);
            }
            finish() {
                return new Promise((e => {
                    const t = this.events;
                    this.clear(), e(JSON.stringify(t));
                }));
            }
            clear() {
                this.events = [], this._totalSize = 0, this.hasCheckout = !1;
            }
            getEarliestTimestamp() {
                const e = this.events.map((e => e.timestamp)).sort()[0];
                return e ? Du(e) : null;
            }
        }
        class dl {
            constructor(e) {
                this._worker = e, this._id = 0;
            }
            ensureReady() {
                return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise(((e, t) => {
                    this._worker.addEventListener("message", (({data: n}) => {
                        n.success ? e() : t();
                    }), {
                        once: !0
                    }), this._worker.addEventListener("error", (e => {
                        t(e);
                    }), {
                        once: !0
                    });
                }))), this._ensureReadyPromise;
            }
            destroy() {
                sl("[Replay] Destroying compression worker"), this._worker.terminate();
            }
            postMessage(e, t) {
                const n = this._getAndIncrementId();
                return new Promise(((r, o) => {
                    const i = ({data: t}) => {
                        const s = t;
                        if (s.method === e && s.id === n) {
                            if (this._worker.removeEventListener("message", i), !s.success) return ol && E.error("[Replay]", s.response), 
                            void o(new Error("Error in compression worker"));
                            r(s.response);
                        }
                    };
                    this._worker.addEventListener("message", i), this._worker.postMessage({
                        id: n,
                        method: e,
                        arg: t
                    });
                }));
            }
            _getAndIncrementId() {
                return this._id++;
            }
        }
        class pl {
            constructor(e) {
                this._worker = new dl(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1;
            }
            get hasEvents() {
                return !!this._earliestTimestamp;
            }
            get type() {
                return "worker";
            }
            ensureReady() {
                return this._worker.ensureReady();
            }
            destroy() {
                this._worker.destroy();
            }
            addEvent(e) {
                const t = Du(e.timestamp);
                (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                const n = JSON.stringify(e);
                return this._totalSize += n.length, this._totalSize > 2e7 ? Promise.reject(new ul) : this._sendEventToWorker(n);
            }
            finish() {
                return this._finishRequest();
            }
            clear() {
                this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (e => {
                    ol && E.warn('[Replay] Sending "clear" message to worker failed', e);
                }));
            }
            getEarliestTimestamp() {
                return this._earliestTimestamp;
            }
            _sendEventToWorker(e) {
                return this._worker.postMessage("addEvent", e);
            }
            async _finishRequest() {
                const e = await this._worker.postMessage("finish");
                return this._earliestTimestamp = null, this._totalSize = 0, e;
            }
        }
        class hl {
            constructor(e) {
                this._fallback = new ll, this._compression = new pl(e), this._used = this._fallback, 
                this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
            }
            get type() {
                return this._used.type;
            }
            get hasEvents() {
                return this._used.hasEvents;
            }
            get hasCheckout() {
                return this._used.hasCheckout;
            }
            set hasCheckout(e) {
                this._used.hasCheckout = e;
            }
            destroy() {
                this._fallback.destroy(), this._compression.destroy();
            }
            clear() {
                return this._used.clear();
            }
            getEarliestTimestamp() {
                return this._used.getEarliestTimestamp();
            }
            addEvent(e) {
                return this._used.addEvent(e);
            }
            async finish() {
                return await this.ensureWorkerIsLoaded(), this._used.finish();
            }
            ensureWorkerIsLoaded() {
                return this._ensureWorkerIsLoadedPromise;
            }
            async _ensureWorkerIsLoaded() {
                try {
                    await this._compression.ensureReady();
                } catch (e) {
                    return void sl("[Replay] Failed to load the compression worker, falling back to simple buffer");
                }
                await this._switchToCompressionWorker();
            }
            async _switchToCompressionWorker() {
                const {events: e, hasCheckout: t} = this._fallback, n = [];
                for (const t of e) n.push(this._compression.addEvent(t));
                this._compression.hasCheckout = t, this._used = this._compression;
                try {
                    await Promise.all(n);
                } catch (e) {
                    ol && E.warn("[Replay] Failed to add events when switching buffers.", e);
                }
            }
        }
        function ml() {
            try {
                return "sessionStorage" in ka && !!ka.sessionStorage;
            } catch (e) {
                return !1;
            }
        }
        function yl(e) {
            return void 0 !== e && Math.random() < e;
        }
        function vl(e) {
            const t = Date.now();
            return {
                id: e.id || ce(),
                started: e.started || t,
                lastActivity: e.lastActivity || t,
                segmentId: e.segmentId || 0,
                sampled: e.sampled,
                previousSessionId: e.previousSessionId
            };
        }
        function _l(e) {
            if (ml()) try {
                ka.sessionStorage.setItem(Ta, JSON.stringify(e));
            } catch (e) {}
        }
        function bl({sessionSampleRate: e, allowBuffering: t, stickySession: n = !1}, {previousSessionId: r} = {}) {
            const i = vl({
                sampled: function(e, t) {
                    return yl(e) ? "session" : !!t && "buffer";
                }(e, t),
                previousSessionId: r
            });
            return n && _l(i), i;
        }
        function Sl(e, t, n = +new Date) {
            return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= n;
        }
        function xl(e, {maxReplayDuration: t, sessionIdleExpire: n, targetTime: r = Date.now()}) {
            return Sl(e.started, t, r) || Sl(e.lastActivity, n, r);
        }
        function wl(e, {sessionIdleExpire: t, maxReplayDuration: n}) {
            return !!xl(e, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) && ("buffer" !== e.sampled || 0 !== e.segmentId);
        }
        function kl({traceInternals: e, sessionIdleExpire: t, maxReplayDuration: n, previousSessionId: r}, o) {
            const i = o.stickySession && function(e) {
                if (!ml()) return null;
                try {
                    const t = ka.sessionStorage.getItem(Ta);
                    if (!t) return null;
                    const n = JSON.parse(t);
                    return al("[Replay] Loading existing session", e), vl(n);
                } catch (e) {
                    return null;
                }
            }(e);
            return i ? wl(i, {
                sessionIdleExpire: t,
                maxReplayDuration: n
            }) ? (al("[Replay] Session in sessionStorage is expired, creating new one..."), 
            bl(o, {
                previousSessionId: i.id
            })) : i : (al("[Replay] Creating new session", e), bl(o, {
                previousSessionId: r
            }));
        }
        function Tl(e, t, n) {
            return !!Cl(e, t) && (El(e, t, n), !0);
        }
        async function El(e, t, n) {
            if (!e.eventBuffer) return null;
            try {
                n && "buffer" === e.recordingMode && e.eventBuffer.clear(), n && (e.eventBuffer.hasCheckout = !0);
                const r = function(e, t) {
                    try {
                        if ("function" == typeof t && function(e) {
                            return e.type === Hc.Custom;
                        }(e)) return t(e);
                    } catch (e) {
                        return ol && E.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", e), 
                        null;
                    }
                    return e;
                }(t, e.getOptions().beforeAddRecordingEvent);
                if (!r) return;
                return await e.eventBuffer.addEvent(r);
            } catch (t) {
                const n = t && t instanceof ul ? "addEventSizeExceeded" : "addEvent";
                ol && E.error(t), await e.stop({
                    reason: n
                });
                const r = Jt();
                r && r.recordDroppedEvent("internal_sdk_error", "replay");
            }
        }
        function Cl(e, t) {
            if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
            const n = Du(t.timestamp);
            return !(n + e.timeouts.sessionIdlePause < Date.now() || n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration && (sl(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`, e.getOptions()._experiments.traceInternals), 
            1));
        }
        function Il(e) {
            return !e.type;
        }
        function Rl(e) {
            return "transaction" === e.type;
        }
        function Ml(e) {
            return "feedback" === e.type;
        }
        function Ol(e) {
            const t = function() {
                const e = Jt();
                if (!e) return !1;
                const t = e.getTransport();
                return t && t.send.__sentry__baseTransport__ || !1;
            }();
            return (n, r) => {
                if (!e.isEnabled() || !Il(n) && !Rl(n)) return;
                const o = r && r.statusCode;
                t && (!o || o < 200 || o >= 300) || (Rl(n) ? function(e, t) {
                    const n = e.getContext();
                    t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id);
                }(e, n) : function(e, t) {
                    const n = e.getContext();
                    if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
                    const {beforeErrorSampling: r} = e.getOptions();
                    ("function" != typeof r || r(t)) && setTimeout((() => {
                        e.sendBufferedReplayOrFlush();
                    }));
                }(e, n));
            };
        }
        function Dl(e, t) {
            return t.map((({type: t, start: n, end: r, name: o, data: i}) => {
                const s = e.throttledAddEvent({
                    type: Hc.Custom,
                    timestamp: n,
                    data: {
                        tag: "performanceSpan",
                        payload: {
                            op: t,
                            description: o,
                            startTimestamp: n,
                            endTimestamp: r,
                            data: i
                        }
                    }
                });
                return "string" == typeof s ? Promise.resolve(null) : s;
            }));
        }
        function Pl(e, t) {
            e.isEnabled() && null !== t && (function(e, t) {
                return (!ol || !e.getOptions()._experiments.traceInternals) && Rs(t, Jt());
            }(e, t.name) || e.addUpdate((() => (Dl(e, [ t ]), !0))));
        }
        function jl(e, t) {
            if (e) try {
                if ("string" == typeof e) return t.encode(e).length;
                if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
                if (e instanceof FormData) {
                    const n = Gl(e);
                    return t.encode(n).length;
                }
                if (e instanceof Blob) return e.size;
                if (e instanceof ArrayBuffer) return e.byteLength;
            } catch (e) {}
        }
        function Fl(e) {
            if (!e) return;
            const t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t;
        }
        function Bl(e) {
            try {
                if ("string" == typeof e) return [ e ];
                if (e instanceof URLSearchParams) return [ e.toString() ];
                if (e instanceof FormData) return [ Gl(e) ];
                if (!e) return [ void 0 ];
            } catch (t) {
                return ol && E.warn("[Replay] Failed to serialize body", e), [ void 0, "BODY_PARSE_ERROR" ];
            }
            return ol && E.info("[Replay] Skipping network body because of body type", e), [ void 0, "UNPARSEABLE_BODY_TYPE" ];
        }
        function Hl(e, t) {
            if (!e) return {
                headers: {},
                size: void 0,
                _meta: {
                    warnings: [ t ]
                }
            };
            const n = {
                ...e._meta
            }, r = n.warnings || [];
            return n.warnings = [ ...r, t ], e._meta = n, e;
        }
        function ql(e, t) {
            if (!t) return null;
            const {startTimestamp: n, endTimestamp: r, url: o, method: i, statusCode: s, request: a, response: c} = t;
            return {
                type: e,
                start: n / 1e3,
                end: r / 1e3,
                name: o,
                data: se({
                    method: i,
                    statusCode: s,
                    request: a,
                    response: c
                })
            };
        }
        function Ul(e) {
            return {
                headers: {},
                size: e,
                _meta: {
                    warnings: [ "URL_SKIPPED" ]
                }
            };
        }
        function zl(e, t, n) {
            if (!t && 0 === Object.keys(e).length) return;
            if (!t) return {
                headers: e
            };
            if (!n) return {
                headers: e,
                size: t
            };
            const r = {
                headers: e,
                size: t
            }, {body: o, warnings: i} = function(e) {
                if (!e || "string" != typeof e) return {
                    body: e
                };
                const t = e.length > 15e4, n = function(e) {
                    const t = e[0], n = e[e.length - 1];
                    return "[" === t && "]" === n || "{" === t && "}" === n;
                }(e);
                if (t) {
                    const t = e.slice(0, 15e4);
                    return n ? {
                        body: t,
                        warnings: [ "MAYBE_JSON_TRUNCATED" ]
                    } : {
                        body: `${t}…`,
                        warnings: [ "TEXT_TRUNCATED" ]
                    };
                }
                if (n) try {
                    return {
                        body: JSON.parse(e)
                    };
                } catch (e) {}
                return {
                    body: e
                };
            }(n);
            return r.body = o, i && i.length > 0 && (r._meta = {
                warnings: i
            }), r;
        }
        function Wl(e, t) {
            return Object.keys(e).reduce(((n, r) => {
                const o = r.toLowerCase();
                return t.includes(o) && e[r] && (n[o] = e[r]), n;
            }), {});
        }
        function Gl(e) {
            return new URLSearchParams(e).toString();
        }
        function Vl(e, t) {
            return Q(function(e, t = ka.document.baseURI) {
                if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(ka.location.origin)) return e;
                const n = new URL(e, t);
                if (n.origin !== new URL(t).origin) return e;
                const r = n.href;
                return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
            }(e), t);
        }
        function Jl(e = []) {
            if (2 === e.length && "object" == typeof e[1]) return e[1].body;
        }
        function Xl(e, t) {
            const n = {};
            return t.forEach((t => {
                e.get(t) && (n[t] = e.get(t));
            })), n;
        }
        function Kl(e, t) {
            if (!e) return {};
            const n = e.headers;
            return n ? n instanceof Headers ? Xl(n, t) : Array.isArray(n) ? {} : Wl(n, t) : {};
        }
        function ed(e) {
            const t = Jt();
            try {
                const n = new TextEncoder, {networkDetailAllowUrls: r, networkDetailDenyUrls: o, networkCaptureBodies: i, networkRequestHeaders: s, networkResponseHeaders: a} = e.getOptions(), c = {
                    replay: e,
                    textEncoder: n,
                    networkDetailAllowUrls: r,
                    networkDetailDenyUrls: o,
                    networkCaptureBodies: i,
                    networkRequestHeaders: s,
                    networkResponseHeaders: a
                };
                t && t.on ? t.on("beforeAddBreadcrumb", ((e, t) => function(e, t, n) {
                    if (t.data) try {
                        (function(e) {
                            return "xhr" === e.category;
                        })(t) && function(e) {
                            return e && e.xhr;
                        }(n) && (function(e, t, n) {
                            const {xhr: r, input: o} = t;
                            if (!r) return;
                            const i = jl(o, n.textEncoder), s = r.getResponseHeader("content-length") ? Fl(r.getResponseHeader("content-length")) : function(e, t, n) {
                                try {
                                    return jl("json" === t && e && "object" == typeof e ? JSON.stringify(e) : e, n);
                                } catch (e) {
                                    return;
                                }
                            }(r.response, r.responseType, n.textEncoder);
                            void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s);
                        }(t, n, e), async function(e, t, n) {
                            try {
                                const o = ql("resource.xhr", function(e, t, n) {
                                    const r = Date.now(), {startTimestamp: o = r, endTimestamp: i = r, input: s, xhr: a} = t, {url: c, method: u, status_code: l = 0, request_body_size: d, response_body_size: p} = e.data;
                                    if (!c) return null;
                                    if (!a || !Vl(c, n.networkDetailAllowUrls) || Vl(c, n.networkDetailDenyUrls)) return {
                                        startTimestamp: o,
                                        endTimestamp: i,
                                        url: c,
                                        method: u,
                                        statusCode: l,
                                        request: Ul(d),
                                        response: Ul(p)
                                    };
                                    const h = a[Br], f = h ? Wl(h.request_headers, n.networkRequestHeaders) : {}, m = Wl(function(e) {
                                        const t = e.getAllResponseHeaders();
                                        return t ? t.split("\r\n").reduce(((e, t) => {
                                            const [n, r] = t.split(": ");
                                            return e[n.toLowerCase()] = r, e;
                                        }), {}) : {};
                                    }(a), n.networkResponseHeaders), [g, y] = n.networkCaptureBodies ? Bl(s) : [ void 0 ], [v, _] = n.networkCaptureBodies ? function(e) {
                                        const t = [];
                                        try {
                                            return [ e.responseText ];
                                        } catch (e) {
                                            t.push(e);
                                        }
                                        try {
                                            return function(e, t) {
                                                try {
                                                    if ("string" == typeof e) return [ e ];
                                                    if (e instanceof Document) return [ e.body.outerHTML ];
                                                    if ("json" === t && e && "object" == typeof e) return [ JSON.stringify(e) ];
                                                    if (!e) return [ void 0 ];
                                                } catch (t) {
                                                    return ol && E.warn("[Replay] Failed to serialize body", e), [ void 0, "BODY_PARSE_ERROR" ];
                                                }
                                                return ol && E.info("[Replay] Skipping network body because of body type", e), [ void 0, "UNPARSEABLE_BODY_TYPE" ];
                                            }(e.response, e.responseType);
                                        } catch (e) {
                                            t.push(e);
                                        }
                                        return ol && E.warn("[Replay] Failed to get xhr response body", ...t), [ void 0 ];
                                    }(a) : [ void 0 ], b = zl(f, d, g), S = zl(m, p, v);
                                    return {
                                        startTimestamp: o,
                                        endTimestamp: i,
                                        url: c,
                                        method: u,
                                        statusCode: l,
                                        request: y ? Hl(b, y) : b,
                                        response: _ ? Hl(S, _) : S
                                    };
                                }(e, t, n));
                                Pl(n.replay, o);
                            } catch (e) {
                                ol && E.error("[Replay] Failed to capture xhr breadcrumb", e);
                            }
                        }(t, n, e)), function(e) {
                            return "fetch" === e.category;
                        }(t) && function(e) {
                            return e && e.response;
                        }(n) && (function(e, t, n) {
                            const {input: r, response: o} = t, i = jl(r ? Jl(r) : void 0, n.textEncoder), s = o ? Fl(o.headers.get("content-length")) : void 0;
                            void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s);
                        }(t, n, e), async function(e, t, n) {
                            try {
                                const o = ql("resource.fetch", await async function(e, t, n) {
                                    const r = Date.now(), {startTimestamp: o = r, endTimestamp: i = r} = t, {url: s, method: a, status_code: c = 0, request_body_size: u, response_body_size: l} = e.data, d = Vl(s, n.networkDetailAllowUrls) && !Vl(s, n.networkDetailDenyUrls);
                                    return {
                                        startTimestamp: o,
                                        endTimestamp: i,
                                        url: s,
                                        method: a,
                                        statusCode: c,
                                        request: d ? function({networkCaptureBodies: e, networkRequestHeaders: t}, n, r) {
                                            const o = n ? function(e, t) {
                                                return 1 === e.length && "string" != typeof e[0] ? Kl(e[0], t) : 2 === e.length ? Kl(e[1], t) : {};
                                            }(n, t) : {};
                                            if (!e) return zl(o, r, void 0);
                                            const i = Jl(n), [s, a] = Bl(i), c = zl(o, r, s);
                                            return a ? Hl(c, a) : c;
                                        }(n, t.input, u) : Ul(u),
                                        response: await async function(e, {networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: r}, o, i) {
                                            if (!e && void 0 !== i) return Ul(i);
                                            const s = o ? Xl(o.headers, r) : {};
                                            if (!o || !t && void 0 !== i) return zl(s, i, void 0);
                                            const [a, c] = await async function(e) {
                                                const t = function(e) {
                                                    try {
                                                        return e.clone();
                                                    } catch (e) {
                                                        ol && E.warn("[Replay] Failed to clone response body", e);
                                                    }
                                                }(e);
                                                if (!t) return [ void 0, "BODY_PARSE_ERROR" ];
                                                try {
                                                    return [ await function(e) {
                                                        return new Promise(((t, n) => {
                                                            const r = setTimeout((() => n(new Error("Timeout while trying to read response body"))), 500);
                                                            (async function(e) {
                                                                return await e.text();
                                                            })(e).then((e => t(e)), (e => n(e))).finally((() => clearTimeout(r)));
                                                        }));
                                                    }(t) ];
                                                } catch (e) {
                                                    return ol && E.warn("[Replay] Failed to get text body from response", e), [ void 0, "BODY_PARSE_ERROR" ];
                                                }
                                            }(o), u = function(e, {networkCaptureBodies: t, textEncoder: n, responseBodySize: r, captureDetails: o, headers: i}) {
                                                try {
                                                    const s = e && e.length && void 0 === r ? jl(e, n) : r;
                                                    return o ? zl(i, s, t ? e : void 0) : Ul(s);
                                                } catch (e) {
                                                    return ol && E.warn("[Replay] Failed to serialize response body", e), zl(i, r, void 0);
                                                }
                                            }(a, {
                                                networkCaptureBodies: t,
                                                textEncoder: n,
                                                responseBodySize: i,
                                                captureDetails: e,
                                                headers: s
                                            });
                                            return c ? Hl(u, c) : u;
                                        }(d, n, t.response, l)
                                    };
                                }(e, t, n));
                                Pl(n.replay, o);
                            } catch (e) {
                                ol && E.error("[Replay] Failed to capture fetch breadcrumb", e);
                            }
                        }(t, n, e));
                    } catch (e) {
                        ol && E.warn("Error when enriching network breadcrumb");
                    }
                }(c, e, t))) : (Ur(function(e) {
                    return t => {
                        if (!e.isEnabled()) return;
                        const n = function(e) {
                            const {startTimestamp: t, endTimestamp: n, fetchData: r, response: o} = e;
                            if (!n) return null;
                            const {method: i, url: s} = r;
                            return {
                                type: "resource.fetch",
                                start: t / 1e3,
                                end: n / 1e3,
                                name: s,
                                data: {
                                    method: i,
                                    statusCode: o ? o.status : void 0
                                }
                            };
                        }(t);
                        Pl(e, n);
                    };
                }(e)), Hr(function(e) {
                    return t => {
                        if (!e.isEnabled()) return;
                        const n = function(e) {
                            const {startTimestamp: t, endTimestamp: n, xhr: r} = e, o = r[Br];
                            if (!t || !n || !o) return null;
                            const {method: i, url: s, status_code: a} = o;
                            return void 0 === s ? null : {
                                type: "resource.xhr",
                                name: s,
                                start: t / 1e3,
                                end: n / 1e3,
                                data: {
                                    method: i,
                                    statusCode: a
                                }
                            };
                        }(t);
                        Pl(e, n);
                    };
                }(e)));
            } catch (e) {}
        }
        let td = null;
        function rd(e) {
            return !(!e || !e.on);
        }
        function od(e) {
            const {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r} = e, o = Date.now() / 1e3;
            return {
                type: "memory",
                name: "memory",
                start: o,
                end: o,
                data: {
                    memory: {
                        jsHeapSizeLimit: t,
                        totalJSHeapSize: n,
                        usedJSHeapSize: r
                    }
                }
            };
        }
        function id(e) {
            let t = !1;
            return (n, r) => {
                if (!e.checkAndHandleExpiredSession()) return void (ol && E.warn("[Replay] Received replay event after session expired."));
                const o = r || !t;
                t = !0, e.clickDetector && function(e, t) {
                    try {
                        if (!function(e) {
                            return 3 === e.type;
                        }(t)) return;
                        const {source: n} = t.data;
                        if (n === qc.Mutation && e.registerMutation(t.timestamp), n === qc.Scroll && e.registerScroll(t.timestamp), 
                        function(e) {
                            return e.data.source === qc.MouseInteraction;
                        }(t)) {
                            const {type: n, id: r} = t.data, o = Au.mirror.getNode(r);
                            o instanceof HTMLElement && n === Uc.Click && e.registerClick(o);
                        }
                    } catch (e) {}
                }(e.clickDetector, n), e.addUpdate((() => {
                    if ("buffer" === e.recordingMode && o && e.setInitialState(), !Tl(e, n, o)) return !0;
                    if (!o) return !1;
                    if (function(e, t) {
                        t && e.session && 0 === e.session.segmentId && Tl(e, function(e) {
                            const t = e.getOptions();
                            return {
                                type: Hc.Custom,
                                timestamp: Date.now(),
                                data: {
                                    tag: "options",
                                    payload: {
                                        shouldRecordCanvas: e.isRecordingCanvas(),
                                        sessionSampleRate: t.sessionSampleRate,
                                        errorSampleRate: t.errorSampleRate,
                                        useCompressionOption: t.useCompression,
                                        blockAllMedia: t.blockAllMedia,
                                        maskAllText: t.maskAllText,
                                        maskAllInputs: t.maskAllInputs,
                                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                        networkCaptureBodies: t.networkCaptureBodies,
                                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                    }
                                }
                            };
                        }(e), !1);
                    }(e, o), e.session && e.session.previousSessionId) return !0;
                    if ("buffer" === e.recordingMode && e.session && e.eventBuffer) {
                        const t = e.eventBuffer.getEarliestTimestamp();
                        t && (sl(`[Replay] Updating session start time to earliest event in buffer to ${new Date(t)}`, e.getOptions()._experiments.traceInternals), 
                        e.session.started = t, e.getOptions().stickySession && _l(e.session));
                    }
                    return "session" === e.recordingMode && e.flush(), !0;
                }));
            };
        }
        class ad extends Error {
            constructor(e) {
                super(`Transport returned status code ${e}`);
            }
        }
        class cd extends Error {
            constructor(e) {
                super("Rate limit hit"), this.rateLimits = e;
            }
        }
        async function ud(e, t = {
            count: 0,
            interval: 5e3
        }) {
            const {recordingData: n, options: r} = e;
            if (n.length) try {
                return await async function({recordingData: e, replayId: t, segmentId: n, eventContext: r, timestamp: o, session: i}) {
                    const s = function({recordingData: e, headers: t}) {
                        let n;
                        const r = `${JSON.stringify(t)}\n`;
                        if ("string" == typeof e) n = `${r}${e}`; else {
                            const t = (new TextEncoder).encode(r);
                            n = new Uint8Array(t.length + e.length), n.set(t), n.set(e, t.length);
                        }
                        return n;
                    }({
                        recordingData: e,
                        headers: {
                            segment_id: n
                        }
                    }), {urls: a, errorIds: c, traceIds: u, initialTimestamp: l} = r, d = Jt(), p = Kt(), h = d && d.getTransport(), f = d && d.getDsn();
                    if (!(d && h && f && i.sampled)) return;
                    const m = {
                        type: "replay_event",
                        replay_start_timestamp: l / 1e3,
                        timestamp: o / 1e3,
                        error_ids: c,
                        trace_ids: u,
                        urls: a,
                        replay_id: t,
                        segment_id: n,
                        replay_type: i.sampled
                    }, g = await async function({client: e, scope: t, replayId: n, event: r}) {
                        const o = {
                            event_id: n,
                            integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
                        };
                        e.emit && e.emit("preprocessEvent", r, o);
                        const i = await Ct(e.getOptions(), r, o, t, e, pt());
                        if (!i) return null;
                        i.platform = i.platform || "javascript";
                        const s = e.getSdkMetadata && e.getSdkMetadata(), {name: a, version: c} = s && s.sdk || {};
                        return i.sdk = {
                            ...i.sdk,
                            name: a || "sentry.javascript.unknown",
                            version: c || "0.0.0"
                        }, i;
                    }({
                        scope: p,
                        client: d,
                        replayId: t,
                        event: m
                    });
                    if (!g) return d.recordDroppedEvent("event_processor", "replay", m), void sl("An event processor returned `null`, will not send event.");
                    delete g.sdkProcessingMetadata;
                    const y = function(e, t, n, r) {
                        return zn(Zn(e, Qn(e), r, n), [ [ {
                            type: "replay_event"
                        }, e ], [ {
                            type: "replay_recording",
                            length: "string" == typeof t ? (new TextEncoder).encode(t).length : t.length
                        }, t ] ]);
                    }(g, s, f, d.getOptions().tunnel);
                    let v;
                    try {
                        v = await h.send(y);
                    } catch (e) {
                        const t = new Error(Ca);
                        try {
                            t.cause = e;
                        } catch (e) {}
                        throw t;
                    }
                    if (!v) return v;
                    if ("number" == typeof v.statusCode && (v.statusCode < 200 || v.statusCode >= 300)) throw new ad(v.statusCode);
                    const _ = ii({}, v);
                    if (oi(_, "replay")) throw new cd(_);
                    return v;
                }(e), !0;
            } catch (n) {
                if (n instanceof ad || n instanceof cd) throw n;
                if (Pt("Replays", {
                    _retryCount: t.count
                }), ol && r._experiments && r._experiments.captureExceptions && Ot(n), t.count >= 3) {
                    const e = new Error(`${Ca} - max retries exceeded`);
                    try {
                        e.cause = n;
                    } catch (e) {}
                    throw e;
                }
                return t.interval *= ++t.count, new Promise(((n, r) => {
                    setTimeout((async () => {
                        try {
                            await ud(e, t), n(!0);
                        } catch (e) {
                            r(e);
                        }
                    }), t.interval);
                }));
            }
        }
        const ld = "__THROTTLED";
        class pd {
            constructor({options: e, recordingOptions: t}) {
                pd.prototype.__init.call(this), pd.prototype.__init2.call(this), pd.prototype.__init3.call(this), 
                pd.prototype.__init4.call(this), pd.prototype.__init5.call(this), pd.prototype.__init6.call(this), 
                this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], 
                this.recordingMode = "session", this.timeouts = {
                    sessionIdlePause: 3e5,
                    sessionIdleExpire: 9e5
                }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, 
                this._context = {
                    errorIds: new Set,
                    traceIds: new Set,
                    urls: [],
                    initialTimestamp: Date.now(),
                    initialUrl: ""
                }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, n) {
                    let r, o, i;
                    const s = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
                    function a() {
                        return c(), r = e(), r;
                    }
                    function c() {
                        void 0 !== o && clearTimeout(o), void 0 !== i && clearTimeout(i), o = i = void 0;
                    }
                    function u() {
                        return o && clearTimeout(o), o = setTimeout(a, t), s && void 0 === i && (i = setTimeout(a, s)), 
                        r;
                    }
                    return u.cancel = c, u.flush = function() {
                        return void 0 !== o || void 0 !== i ? a() : r;
                    }, u;
                }((() => this._flush()), this._options.flushMinDelay, {
                    maxWait: this._options.flushMaxDelay
                }), this._throttledAddEvent = function(e, t, n) {
                    const r = new Map;
                    let o = !1;
                    return (...i) => {
                        const s = Math.floor(Date.now() / 1e3);
                        if ((e => {
                            const t = e - n;
                            r.forEach(((e, n) => {
                                n < t && r.delete(n);
                            }));
                        })(s), [ ...r.values() ].reduce(((e, t) => e + t), 0) >= t) {
                            const e = o;
                            return o = !0, e ? "__SKIPPED" : ld;
                        }
                        o = !1;
                        const a = r.get(s) || 0;
                        return r.set(s, a + 1), e(...i);
                    };
                }(((e, t) => function(e, t, n) {
                    return Cl(e, t) ? El(e, t, n) : Promise.resolve(null);
                }(this, e, t)), 300, 5);
                const {slowClickTimeout: n, slowClickIgnoreSelectors: r} = this.getOptions(), o = n ? {
                    threshold: Math.min(3e3, n),
                    timeout: n,
                    scrollTimeout: 300,
                    ignoreSelector: r ? r.join(",") : ""
                } : void 0;
                o && (this.clickDetector = new Uu(this, o));
            }
            getContext() {
                return this._context;
            }
            isEnabled() {
                return this._isEnabled;
            }
            isPaused() {
                return this._isPaused;
            }
            isRecordingCanvas() {
                return Boolean(this._canvas);
            }
            getOptions() {
                return this._options;
            }
            initializeSampling(e) {
                const {errorSampleRate: t, sessionSampleRate: n} = this._options;
                t <= 0 && n <= 0 || (this._initializeSessionForSampling(e), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", 
                al(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), 
                this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")));
            }
            start() {
                if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
                if (this._isEnabled && "buffer" === this.recordingMode) throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
                al("[Replay] Starting replay in session mode", this._options._experiments.traceInternals), 
                this._updateUserActivity();
                const e = kl({
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    traceInternals: this._options._experiments.traceInternals
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 1,
                    allowBuffering: !1
                });
                this.session = e, this._initializeRecording();
            }
            startBuffering() {
                if (this._isEnabled) throw new Error("Replay recording is already in progress");
                al("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
                const e = kl({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 0,
                    allowBuffering: !0
                });
                this.session = e, this.recordingMode = "buffer", this._initializeRecording();
            }
            startRecording() {
                try {
                    const e = this._canvas;
                    this._stopRecording = Au({
                        ...this._recordingOptions,
                        ..."buffer" === this.recordingMode && {
                            checkoutEveryNms: 6e4
                        },
                        emit: id(this),
                        onMutation: this._onMutationHandler,
                        ...e ? {
                            recordCanvas: e.recordCanvas,
                            getCanvasManager: e.getCanvasManager,
                            sampling: e.sampling,
                            dataURLOptions: e.dataURLOptions
                        } : {}
                    });
                } catch (e) {
                    this._handleException(e);
                }
            }
            stopRecording() {
                try {
                    return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), 
                    !0;
                } catch (e) {
                    return this._handleException(e), !1;
                }
            }
            async stop({forceFlush: e = !1, reason: t} = {}) {
                if (this._isEnabled) {
                    this._isEnabled = !1;
                    try {
                        sl("[Replay] Stopping Replay" + (t ? ` triggered by ${t}` : ""), this._options._experiments.traceInternals), 
                        this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                            force: !0
                        }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, function(e) {
                            !function() {
                                if (ml()) try {
                                    ka.sessionStorage.removeItem(Ta);
                                } catch (e) {}
                            }(), e.session = void 0;
                        }(this);
                    } catch (e) {
                        this._handleException(e);
                    }
                }
            }
            pause() {
                this._isPaused || (this._isPaused = !0, this.stopRecording(), sl("[Replay] Pausing replay", this._options._experiments.traceInternals));
            }
            resume() {
                this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), 
                sl("[Replay] Resuming replay", this._options._experiments.traceInternals));
            }
            async sendBufferedReplayOrFlush({continueRecording: e = !0} = {}) {
                if ("session" === this.recordingMode) return this.flushImmediate();
                const t = Date.now();
                sl("[Replay] Converting buffer to session", this._options._experiments.traceInternals), 
                await this.flushImmediate();
                const n = this.stopRecording();
                e && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(t), 
                this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording());
            }
            addUpdate(e) {
                const t = e();
                "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush();
            }
            triggerUserActivity() {
                if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), 
                this._updateSessionActivity(); else {
                    if (!this._checkSession()) return;
                    this.resume();
                }
            }
            updateUserActivity() {
                this._updateUserActivity(), this._updateSessionActivity();
            }
            conditionalFlush() {
                return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate();
            }
            flush() {
                return this._debouncedFlush();
            }
            flushImmediate() {
                return this._debouncedFlush(), this._debouncedFlush.flush();
            }
            cancelFlush() {
                this._debouncedFlush.cancel();
            }
            getSessionId() {
                return this.session && this.session.id;
            }
            checkAndHandleExpiredSession() {
                if (!(this._lastActivity && Sl(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled)) return !!this._checkSession();
                this.pause();
            }
            setInitialState() {
                const e = `${ka.location.pathname}${ka.location.hash}${ka.location.search}`, t = `${ka.location.origin}${e}`;
                this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), 
                this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t);
            }
            throttledAddEvent(e, t) {
                const n = this._throttledAddEvent(e, t);
                if (n === ld) {
                    const e = Vu({
                        category: "replay.throttled"
                    });
                    this.addUpdate((() => !Tl(this, {
                        type: 5,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e,
                            metric: !0
                        }
                    })));
                }
                return n;
            }
            getCurrentRoute() {
                const e = this.lastTransaction || Kt().getTransaction(), t = (e && Je(e).data || {})[Ai];
                if (e && t && [ "route", "custom" ].includes(t)) return Je(e).description;
            }
            _initializeRecording() {
                this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({useCompression: e, workerUrl: t}) {
                    if (e && window.Worker) {
                        const e = function(e) {
                            try {
                                const t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                    const e = new Blob([ 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});' ]);
                                    return URL.createObjectURL(e);
                                }());
                                if (!t) return;
                                sl("[Replay] Using compression worker" + (e ? ` from ${e}` : ""));
                                const n = new Worker(t);
                                return new hl(n);
                            } catch (e) {
                                sl("[Replay] Failed to create compression worker");
                            }
                        }(t);
                        if (e) return e;
                    }
                    return sl("[Replay] Using simple buffer"), new ll;
                }({
                    useCompression: this._options.useCompression,
                    workerUrl: this._options.workerUrl
                }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, 
                this.startRecording();
            }
            _handleException(e) {
                ol && E.error("[Replay]", e), ol && this._options._experiments && this._options._experiments.captureExceptions && Ot(e);
            }
            _initializeSessionForSampling(e) {
                const t = this._options.errorSampleRate > 0, n = kl({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
                this.session = n;
            }
            _checkSession() {
                if (!this.session) return !1;
                const e = this.session;
                return !wl(e, {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }) || (this._refreshSession(e), !1);
            }
            async _refreshSession(e) {
                this._isEnabled && (await this.stop({
                    reason: "refresh session"
                }), this.initializeSampling(e.id));
            }
            _addListeners() {
                try {
                    ka.document.addEventListener("visibilitychange", this._handleVisibilityChange), 
                    ka.addEventListener("blur", this._handleWindowBlur), ka.addEventListener("focus", this._handleWindowFocus), 
                    ka.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), 
                    this._hasInitializedCoreListeners || (function(e) {
                        const t = Kt(), n = Jt();
                        t.addScopeListener((e => t => {
                            if (!e.isEnabled()) return;
                            const n = function(e) {
                                const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
                                return td !== t && t ? (td = t, !function(e) {
                                    return !!e.category;
                                }(t) || [ "fetch", "xhr", "sentry.event", "sentry.transaction" ].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function(e) {
                                    const t = e.data && e.data.arguments;
                                    if (!Array.isArray(t) || 0 === t.length) return Vu(e);
                                    let n = !1;
                                    const r = t.map((e => {
                                        if (!e) return e;
                                        if ("string" == typeof e) return e.length > 5e3 ? (n = !0, `${e.slice(0, 5e3)}…`) : e;
                                        if ("object" == typeof e) try {
                                            const t = kt(e, 7);
                                            return JSON.stringify(t).length > 5e3 ? (n = !0, `${JSON.stringify(t, null, 2).slice(0, 5e3)}…`) : t;
                                        } catch (e) {}
                                        return e;
                                    }));
                                    return Vu({
                                        ...e,
                                        data: {
                                            ...e.data,
                                            arguments: r,
                                            ...n ? {
                                                _meta: {
                                                    warnings: [ "CONSOLE_ARG_TRUNCATED" ]
                                                }
                                            } : {}
                                        }
                                    });
                                }(t) : Vu(t)) : null;
                            }(t);
                            n && Pu(e, n);
                        })(e)), Pr((e => t => {
                            if (!e.isEnabled()) return;
                            const n = function(e) {
                                const {target: t, message: n} = function(e) {
                                    const t = "click" === e.name;
                                    let n, r = null;
                                    try {
                                        r = t ? Fu(e.event) : Bu(e.event), n = U(r, {
                                            maxStringLength: 200
                                        }) || "<unknown>";
                                    } catch (e) {
                                        n = "<unknown>";
                                    }
                                    return {
                                        target: r,
                                        message: n
                                    };
                                }(e);
                                return Vu({
                                    category: `ui.${e.name}`,
                                    ...Qu(t, n)
                                });
                            }(t);
                            if (!n) return;
                            const r = "click" === t.name, o = r ? t.event : void 0;
                            !(r && e.clickDetector && o && o.target) || o.altKey || o.metaKey || o.ctrlKey || o.shiftKey || function(e, t, n) {
                                e.handleClick(t, n);
                            }(e.clickDetector, n, Fu(t.event)), Pu(e, n);
                        })(e)), qn(function(e) {
                            return t => {
                                if (!e.isEnabled()) return;
                                const n = function(e) {
                                    const {from: t, to: n} = e, r = Date.now() / 1e3;
                                    return {
                                        type: "navigation.push",
                                        start: r,
                                        end: r,
                                        name: n,
                                        data: {
                                            previous: t
                                        }
                                    };
                                }(t);
                                null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate((() => (Dl(e, [ n ]), 
                                !1))));
                            };
                        }(e)), ed(e);
                        const r = function(e, t = !1) {
                            const n = t ? Ol(e) : void 0;
                            return Object.assign(((t, r) => e.isEnabled() ? function(e) {
                                return "replay_event" === e.type;
                            }(t) ? (delete t.breadcrumbs, t) : (Il(t) || Rl(t) || Ml(t)) && e.checkAndHandleExpiredSession() ? Ml(t) ? (e.flush(), 
                            t.contexts.feedback.replay_id = e.getSessionId(), function(e, t) {
                                e.triggerUserActivity(), e.addUpdate((() => !t.timestamp || (e.throttledAddEvent({
                                    type: Hc.Custom,
                                    timestamp: 1e3 * t.timestamp,
                                    data: {
                                        tag: "breadcrumb",
                                        payload: {
                                            timestamp: t.timestamp,
                                            type: "default",
                                            category: "sentry.feedback",
                                            data: {
                                                feedbackId: t.event_id
                                            }
                                        }
                                    }
                                }), !1)));
                            }(e, t), t) : function(e, t) {
                                return !(e.type || !e.exception || !e.exception.values || !e.exception.values.length || !t.originalException || !t.originalException.__rrweb__);
                            }(t, r) && !e.getOptions()._experiments.captureExceptions ? (ol && E.log("[Replay] Ignoring error from rrweb internals", t), 
                            null) : ((function(e, t) {
                                return "buffer" === e.recordingMode && t.message !== Ca && !(!t.exception || t.type) && yl(e.getOptions().errorSampleRate);
                            }(e, t) || "session" === e.recordingMode) && (t.tags = {
                                ...t.tags,
                                replayId: e.getSessionId()
                            }), n && n(t, {
                                statusCode: 200
                            }), t) : t : t), {
                                id: "Replay"
                            });
                        }(e, !rd(n));
                        n && n.addEventProcessor ? n.addEventProcessor(r) : lr(r), rd(n) && (n.on("beforeSendEvent", function(e) {
                            return t => {
                                e.isEnabled() && Il(t) && function(e, t) {
                                    const n = t.exception && t.exception.values && t.exception.values[0].value;
                                    "string" == typeof n && (n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && Pu(e, Vu({
                                        category: "replay.hydrate-error"
                                    }));
                                }(e, t);
                            };
                        }(e)), n.on("afterSendEvent", Ol(e)), n.on("createDsc", (t => {
                            const n = e.getSessionId();
                            n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n);
                        })), n.on("startTransaction", (t => {
                            e.lastTransaction = t;
                        })), n.on("finishTransaction", (t => {
                            e.lastTransaction = t;
                        })), n.on("beforeSendFeedback", ((t, n) => {
                            const r = e.getSessionId();
                            n && n.includeReplay && e.isEnabled() && r && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = r);
                        })));
                    }(this), this._hasInitializedCoreListeners = !0);
                } catch (e) {
                    this._handleException(e);
                }
                this._performanceCleanupCallback = function(e) {
                    function t(t) {
                        e.performanceEntries.includes(t) || e.performanceEntries.push(t);
                    }
                    function n({entries: e}) {
                        e.forEach(t);
                    }
                    const r = [];
                    return [ "navigation", "paint", "resource" ].forEach((e => {
                        r.push(fa(e, n));
                    })), r.push(ha((({metric: t}) => {
                        e.replayPerformanceEntries.push(function(e) {
                            const t = e.entries, n = t[t.length - 1], r = n ? n.element : void 0, o = e.value, i = nl(o);
                            return {
                                type: "largest-contentful-paint",
                                name: "largest-contentful-paint",
                                start: i,
                                end: i,
                                data: {
                                    value: o,
                                    size: o,
                                    nodeId: r ? Au.mirror.getId(r) : void 0
                                }
                            };
                        }(t));
                    }))), () => {
                        r.forEach((e => e()));
                    };
                }(this);
            }
            _removeListeners() {
                try {
                    ka.document.removeEventListener("visibilitychange", this._handleVisibilityChange), 
                    ka.removeEventListener("blur", this._handleWindowBlur), ka.removeEventListener("focus", this._handleWindowFocus), 
                    ka.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), 
                    this._performanceCleanupCallback && this._performanceCleanupCallback();
                } catch (e) {
                    this._handleException(e);
                }
            }
            __init() {
                this._handleVisibilityChange = () => {
                    "visible" === ka.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
                };
            }
            __init2() {
                this._handleWindowBlur = () => {
                    const e = Vu({
                        category: "ui.blur"
                    });
                    this._doChangeToBackgroundTasks(e);
                };
            }
            __init3() {
                this._handleWindowFocus = () => {
                    const e = Vu({
                        category: "ui.focus"
                    });
                    this._doChangeToForegroundTasks(e);
                };
            }
            __init4() {
                this._handleKeyboardEvent = e => {
                    !function(e, t) {
                        if (!e.isEnabled()) return;
                        e.updateUserActivity();
                        const n = function(e) {
                            const {metaKey: t, shiftKey: n, ctrlKey: r, altKey: o, key: i, target: s} = e;
                            if (!s || function(e) {
                                return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable;
                            }(s) || !i) return null;
                            const a = t || r || o, c = 1 === i.length;
                            if (!a && c) return null;
                            const u = U(s, {
                                maxStringLength: 200
                            }) || "<unknown>";
                            return Vu({
                                category: "ui.keyDown",
                                message: u,
                                data: {
                                    ...Qu(s, u).data,
                                    metaKey: t,
                                    shiftKey: n,
                                    ctrlKey: r,
                                    altKey: o,
                                    key: i
                                }
                            });
                        }(t);
                        n && Pu(e, n);
                    }(this, e);
                };
            }
            _doChangeToBackgroundTasks(e) {
                this.session && (xl(this.session, {
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush()));
            }
            _doChangeToForegroundTasks(e) {
                this.session && (this.checkAndHandleExpiredSession() ? e && this._createCustomBreadcrumb(e) : sl("[Replay] Document has become active, but session has expired"));
            }
            _updateUserActivity(e = Date.now()) {
                this._lastActivity = e;
            }
            _updateSessionActivity(e = Date.now()) {
                this.session && (this.session.lastActivity = e, this._maybeSaveSession());
            }
            _createCustomBreadcrumb(e) {
                this.addUpdate((() => {
                    this.throttledAddEvent({
                        type: Hc.Custom,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e
                        }
                    });
                }));
            }
            _addPerformanceEntries() {
                const e = (t = this.performanceEntries, t.map(tl).filter(Boolean)).concat(this.replayPerformanceEntries);
                var t;
                return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all(Dl(this, e));
            }
            _clearContext() {
                this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = [];
            }
            _updateInitialTimestampFromEventBuffer() {
                const {session: e, eventBuffer: t} = this;
                if (!e || !t) return;
                if (e.segmentId) return;
                const n = t.getEarliestTimestamp();
                n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n);
            }
            _popEventContext() {
                const e = {
                    initialTimestamp: this._context.initialTimestamp,
                    initialUrl: this._context.initialUrl,
                    errorIds: Array.from(this._context.errorIds),
                    traceIds: Array.from(this._context.traceIds),
                    urls: this._context.urls
                };
                return this._clearContext(), e;
            }
            async _runFlush() {
                const e = this.getSessionId();
                if (this.session && this.eventBuffer && e) {
                    if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await async function(e) {
                        try {
                            return Promise.all(Dl(e, [ od(ka.performance.memory) ]));
                        } catch (e) {
                            return [];
                        }
                    }(this), this.eventBuffer && e === this.getSessionId())) try {
                        this._updateInitialTimestampFromEventBuffer();
                        const t = Date.now();
                        if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new Error("Session is too long, not sending replay");
                        const n = this._popEventContext(), r = this.session.segmentId++;
                        this._maybeSaveSession();
                        const o = await this.eventBuffer.finish();
                        await ud({
                            replayId: e,
                            recordingData: o,
                            segmentId: r,
                            eventContext: n,
                            session: this.session,
                            options: this.getOptions(),
                            timestamp: t
                        });
                    } catch (e) {
                        this._handleException(e), this.stop({
                            reason: "sendReplay"
                        });
                        const t = Jt();
                        t && t.recordDroppedEvent("send_error", "replay");
                    }
                } else ol && E.error("[Replay] No session or eventBuffer found to flush.");
            }
            __init5() {
                this._flush = async ({force: e = !1} = {}) => {
                    if (!this._isEnabled && !e) return;
                    if (!this.checkAndHandleExpiredSession()) return void (ol && E.error("[Replay] Attempting to finish replay event after session expired."));
                    if (!this.session) return;
                    const t = this.session.started, n = Date.now() - t;
                    this._debouncedFlush.cancel();
                    const r = n < this._options.minReplayDuration, o = n > this._options.maxReplayDuration + 5e3;
                    if (r || o) return sl(`[Replay] Session duration (${Math.floor(n / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`, this._options._experiments.traceInternals), 
                    void (r && this._debouncedFlush());
                    const i = this.eventBuffer;
                    if (i && 0 === this.session.segmentId && !i.hasCheckout && sl("[Replay] Flushing initial segment without checkout.", this._options._experiments.traceInternals), 
                    !this._flushLock) return this._flushLock = this._runFlush(), await this._flushLock, 
                    void (this._flushLock = void 0);
                    try {
                        await this._flushLock;
                    } catch (e) {
                        ol && E.error(e);
                    } finally {
                        this._debouncedFlush();
                    }
                };
            }
            _maybeSaveSession() {
                this.session && this._options.stickySession && _l(this.session);
            }
            __init6() {
                this._onMutationHandler = e => {
                    const t = e.length, n = this._options.mutationLimit, r = n && t > n;
                    if (t > this._options.mutationBreadcrumbLimit || r) {
                        const e = Vu({
                            category: "replay.mutations",
                            data: {
                                count: t,
                                limit: r
                            }
                        });
                        this._createCustomBreadcrumb(e);
                    }
                    return !r || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }), !1);
                };
            }
        }
        function hd(e, t, n, r) {
            const o = [ ...e, ..."string" == typeof r ? r.split(",") : [], ...t ];
            return void 0 !== n && ("string" == typeof n && o.push(`.${n}`), T((() => {}))), 
            o.join(",");
        }
        const fd = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]', md = [ "content-length", "content-type", "accept" ];
        let gd = !1;
        const yd = e => new vd(e);
        class vd {
            static __initStatic() {
                this.id = "Replay";
            }
            constructor({flushMinDelay: e = 5e3, flushMaxDelay: t = 5500, minReplayDuration: n = 4999, maxReplayDuration: r = 36e5, stickySession: o = !0, useCompression: i = !0, workerUrl: s, _experiments: a = {}, sessionSampleRate: c, errorSampleRate: u, maskAllText: l = !0, maskAllInputs: d = !0, blockAllMedia: p = !0, mutationBreadcrumbLimit: h = 750, mutationLimit: f = 1e4, slowClickTimeout: m = 7e3, slowClickIgnoreSelectors: g = [], networkDetailAllowUrls: y = [], networkDetailDenyUrls: v = [], networkCaptureBodies: _ = !0, networkRequestHeaders: b = [], networkResponseHeaders: S = [], mask: x = [], maskAttributes: w = [ "title", "placeholder" ], unmask: k = [], block: T = [], unblock: E = [], ignore: C = [], maskFn: I, beforeAddRecordingEvent: R, beforeErrorSampling: M, blockClass: O, blockSelector: A, maskInputOptions: L, maskTextClass: D, maskTextSelector: N, ignoreClass: P} = {}) {
                this.name = vd.id;
                const $ = function({mask: e, unmask: t, block: n, unblock: r, ignore: o, blockClass: i, blockSelector: s, maskTextClass: a, maskTextSelector: c, ignoreClass: u}) {
                    const l = {
                        maskTextSelector: hd(e, [ ".sentry-mask", "[data-sentry-mask]" ], a, c),
                        unmaskTextSelector: hd(t, [ ".sentry-unmask", "[data-sentry-unmask]" ]),
                        blockSelector: hd(n, [ ".sentry-block", "[data-sentry-block]", 'base[href="/"]' ], i, s),
                        unblockSelector: hd(r, [ ".sentry-unblock", "[data-sentry-unblock]" ]),
                        ignoreSelector: hd(o, [ ".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]' ], u)
                    };
                    return i instanceof RegExp && (l.blockClass = i), a instanceof RegExp && (l.maskTextClass = a), 
                    l;
                }({
                    mask: x,
                    unmask: k,
                    block: T,
                    unblock: E,
                    ignore: C,
                    blockClass: O,
                    blockSelector: A,
                    maskTextClass: D,
                    maskTextSelector: N,
                    ignoreClass: P
                });
                if (this._recordingOptions = {
                    maskAllInputs: d,
                    maskAllText: l,
                    maskInputOptions: {
                        ...L || {},
                        password: !0
                    },
                    maskTextFn: I,
                    maskInputFn: I,
                    maskAttributeFn: (e, t, n) => function({el: e, key: t, maskAttributes: n, maskAllText: r, privacyOptions: o, value: i}) {
                        return r ? o.unmaskTextSelector && e.matches(o.unmaskTextSelector) ? i : n.includes(t) || "value" === t && "INPUT" === e.tagName && [ "submit", "button" ].includes(e.getAttribute("type") || "") ? i.replace(/[\S]/g, "*") : i : i;
                    }({
                        maskAttributes: w,
                        maskAllText: l,
                        privacyOptions: $,
                        key: e,
                        value: t,
                        el: n
                    }),
                    ...$,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0;
                        } catch (e) {}
                    }
                }, this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(n, 15e3),
                    maxReplayDuration: Math.min(r, 36e5),
                    stickySession: o,
                    sessionSampleRate: c,
                    errorSampleRate: u,
                    useCompression: i,
                    workerUrl: s,
                    blockAllMedia: p,
                    maskAllInputs: d,
                    maskAllText: l,
                    mutationBreadcrumbLimit: h,
                    mutationLimit: f,
                    slowClickTimeout: m,
                    slowClickIgnoreSelectors: g,
                    networkDetailAllowUrls: y,
                    networkDetailDenyUrls: v,
                    networkCaptureBodies: _,
                    networkRequestHeaders: _d(b),
                    networkResponseHeaders: _d(S),
                    beforeAddRecordingEvent: R,
                    beforeErrorSampling: M,
                    _experiments: a
                }, "number" == typeof c && (this._initialOptions.sessionSampleRate = c), "number" == typeof u && (this._initialOptions.errorSampleRate = u), 
                this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${fd}` : fd), 
                this._isInitialized && As()) throw new Error("Multiple Sentry Session Replay instances are not supported");
                this._isInitialized = !0;
            }
            get _isInitialized() {
                return gd;
            }
            set _isInitialized(e) {
                gd = e;
            }
            setupOnce() {
                As() && (this._setup(), setTimeout((() => this._initialize())));
            }
            start() {
                this._replay && this._replay.start();
            }
            startBuffering() {
                this._replay && this._replay.startBuffering();
            }
            stop() {
                return this._replay ? this._replay.stop({
                    forceFlush: "session" === this._replay.recordingMode
                }) : Promise.resolve();
            }
            flush(e) {
                return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : Promise.resolve();
            }
            getReplayId() {
                if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId();
            }
            _initialize() {
                this._replay && (this._maybeLoadFromReplayCanvasIntegration(), this._replay.initializeSampling());
            }
            _setup() {
                const e = function(e) {
                    const t = Jt(), n = t && t.getOptions(), r = {
                        sessionSampleRate: 0,
                        errorSampleRate: 0,
                        ...se(e)
                    };
                    return n ? (null == e.sessionSampleRate && null == e.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && T((() => {})), 
                    "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), 
                    "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), 
                    r) : (T((() => {})), r);
                }(this._initialOptions);
                this._replay = new pd({
                    options: e,
                    recordingOptions: this._recordingOptions
                });
            }
            _maybeLoadFromReplayCanvasIntegration() {
                try {
                    const e = Jt().getIntegrationByName("ReplayCanvas");
                    if (!e) return;
                    this._replay._canvas = e.getOptions();
                } catch (e) {}
            }
        }
        function _d(e) {
            return [ ...md, ...e.map((e => e.toLowerCase())) ];
        }
        function bd() {
            const e = Jt();
            return e && e.getIntegrationByName && e.getIntegrationByName("Replay");
        }
        var Sd;
        function xd(e, t, n = 1 / 0, r = 0) {
            return e ? e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : xd(e.parentNode, t, n, r + 1) : -1;
        }
        function wd(e, t) {
            return n => {
                const r = n;
                if (null === r) return !1;
                try {
                    if (e) if ("string" == typeof e) {
                        if (r.matches(`.${e}`)) return !0;
                    } else if (function(e, t) {
                        for (let n = e.classList.length; n--; ) {
                            const r = e.classList[n];
                            if (t.test(r)) return !0;
                        }
                        return !1;
                    }(r, e)) return !0;
                    return !(!t || !r.matches(t));
                } catch (e) {
                    return !1;
                }
            };
        }
        vd.__initStatic(), function(e) {
            e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", 
            e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment";
        }(Sd || (Sd = {}));
        let kd = {
            map: {},
            getId: () => -1,
            getNode: () => null,
            removeNodeFromMap() {},
            has: () => !1,
            reset() {}
        };
        function Td(e, t, n, r, o = window) {
            const i = o.Object.getOwnPropertyDescriptor(e, t);
            return o.Object.defineProperty(e, t, r ? n : {
                set(e) {
                    Od((() => {
                        n.set.call(this, e);
                    }), 0), i && i.set && i.set.call(this, e);
                }
            }), () => Td(e, t, i || {}, !0);
        }
        function Ed(e, t, n) {
            try {
                if (!(t in e)) return () => {};
                const r = e[t], o = n(r);
                return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })), e[t] = o, () => {
                    e[t] = r;
                };
            } catch (e) {
                return () => {};
            }
        }
        function Cd(e, t, n, r, o) {
            if (!e) return !1;
            const i = function(e) {
                return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null;
            }(e);
            if (!i) return !1;
            const s = wd(t, n);
            if (!o) {
                const e = r && i.matches(r);
                return s(i) && !e;
            }
            const a = xd(i, s);
            let c = -1;
            return !(a < 0) && (r && (c = xd(i, wd(null, r))), a > -1 && c < 0 || a < c);
        }
        "undefined" != typeof window && window.Proxy && window.Reflect && (kd = new Proxy(kd, {
            get: (e, t, n) => Reflect.get(e, t, n)
        })), /[1-9][0-9]{12}/.test(Date.now().toString());
        const Id = {};
        function Rd(e) {
            const t = Id[e];
            if (t) return t;
            const n = window.document;
            let r = window[e];
            if (n && "function" == typeof n.createElement) try {
                const t = n.createElement("iframe");
                t.hidden = !0, n.head.appendChild(t);
                const o = t.contentWindow;
                o && o[e] && (r = o[e]), n.head.removeChild(t);
            } catch (e) {}
            return Id[e] = r.bind(window);
        }
        function Md(...e) {
            return Rd("requestAnimationFrame")(...e);
        }
        function Od(...e) {
            return Rd("setTimeout")(...e);
        }
        var Ad = (e => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", 
        e))(Ad || {});
        let Ld;
        const Dd = e => Ld ? (...t) => {
            try {
                return e(...t);
            } catch (e) {
                if (Ld && !0 === Ld(e)) return () => {};
                throw e;
            }
        } : e;
        for (var Nd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Pd = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), $d = 0; $d < 64; $d++) Pd[Nd.charCodeAt($d)] = $d;
        const jd = new Map, Fd = (e, t, n) => {
            if (!e || !qd(e, t) && "object" != typeof e) return;
            const r = function(e, t) {
                let n = jd.get(e);
                return n || (n = new Map, jd.set(e, n)), n.has(t) || n.set(t, []), n.get(t);
            }(n, e.constructor.name);
            let o = r.indexOf(e);
            return -1 === o && (o = r.length, r.push(e)), o;
        };
        function Bd(e, t, n) {
            if (e instanceof Array) return e.map((e => Bd(e, t, n)));
            if (null === e) return e;
            if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
                rr_type: e.constructor.name,
                args: [ Object.values(e) ]
            };
            if (e instanceof ArrayBuffer) {
                const t = e.constructor.name, n = function(e) {
                    var t, n = new Uint8Array(e), r = n.length, o = "";
                    for (t = 0; t < r; t += 3) o += Nd[n[t] >> 2], o += Nd[(3 & n[t]) << 4 | n[t + 1] >> 4], 
                    o += Nd[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], o += Nd[63 & n[t + 2]];
                    return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), 
                    o;
                }(e);
                return {
                    rr_type: t,
                    base64: n
                };
            }
            if (e instanceof DataView) return {
                rr_type: e.constructor.name,
                args: [ Bd(e.buffer, t, n), e.byteOffset, e.byteLength ]
            };
            if (e instanceof HTMLImageElement) {
                const t = e.constructor.name, {src: n} = e;
                return {
                    rr_type: t,
                    src: n
                };
            }
            return e instanceof HTMLCanvasElement ? {
                rr_type: "HTMLImageElement",
                src: e.toDataURL()
            } : e instanceof ImageData ? {
                rr_type: e.constructor.name,
                args: [ Bd(e.data, t, n), e.width, e.height ]
            } : qd(e, t) || "object" == typeof e ? {
                rr_type: e.constructor.name,
                index: Fd(e, t, n)
            } : e;
        }
        const Hd = (e, t, n) => e.map((e => Bd(e, t, n))), qd = (e, t) => {
            const n = [ "WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES" ].filter((e => "function" == typeof t[e]));
            return Boolean(n.find((n => e instanceof t[n])));
        };
        function Ud(e, t, n, r, o) {
            const i = [];
            try {
                const s = Ed(e.HTMLCanvasElement.prototype, "getContext", (function(e) {
                    return function(i, ...s) {
                        if (!Cd(this, t, n, r, !0)) {
                            const e = function(e) {
                                return "experimental-webgl" === e ? "webgl" : e;
                            }(i);
                            if ("__context" in this || (this.__context = e), o && [ "webgl", "webgl2" ].includes(e)) if (s[0] && "object" == typeof s[0]) {
                                const e = s[0];
                                e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0);
                            } else s.splice(0, 1, {
                                preserveDrawingBuffer: !0
                            });
                        }
                        return e.apply(this, [ i, ...s ]);
                    };
                }));
                i.push(s);
            } catch (e) {}
            return () => {
                i.forEach((e => e()));
            };
        }
        function zd(e, t, n, r, o, i, s, a) {
            const c = [], u = Object.getOwnPropertyNames(e);
            for (const s of u) if (![ "isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight" ].includes(s)) try {
                if ("function" != typeof e[s]) continue;
                const u = Ed(e, s, (function(e) {
                    return function(...c) {
                        const u = e.apply(this, c);
                        if (Fd(u, a, this), "tagName" in this.canvas && !Cd(this.canvas, r, o, i, !0)) {
                            const e = Hd(c, a, this), r = {
                                type: t,
                                property: s,
                                args: e
                            };
                            n(this.canvas, r);
                        }
                        return u;
                    };
                }));
                c.push(u);
            } catch (r) {
                const o = Td(e, s, {
                    set(e) {
                        n(this.canvas, {
                            type: t,
                            property: s,
                            args: [ e ],
                            setter: !0
                        });
                    }
                });
                c.push(o);
            }
            return c;
        }
        class Wd {
            reset() {
                this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
            }
            freeze() {
                this.frozen = !0;
            }
            unfreeze() {
                this.frozen = !1;
            }
            lock() {
                this.locked = !0;
            }
            unlock() {
                this.locked = !1;
            }
            constructor(e) {
                this.pendingCanvasMutations = new Map, this.rafStamps = {
                    latestId: 0,
                    invokeId: null
                }, this.frozen = !1, this.locked = !1, this.processMutation = (e, t) => {
                    !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), 
                    this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t);
                };
                const {sampling: t = "all", win: n, blockClass: r, blockSelector: o, unblockSelector: i, maxCanvasSize: s, recordCanvas: a, dataURLOptions: c, errorHandler: u} = e;
                this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, u && (Ld = u), 
                e.enableManualSnapshot || Dd((() => {
                    a && "all" === t && this.initCanvasMutationObserver(n, r, o, i), a && "number" == typeof t && this.initCanvasFPSObserver(t, n, r, o, i, s, {
                        dataURLOptions: c
                    });
                }))();
            }
            initCanvasFPSObserver(e, t, n, r, o, i, s) {
                const a = Ud(t, n, r, o, !0), c = this.takeSnapshot(!1, e, t, n, r, o, i, s.dataURLOptions);
                this.resetObservers = () => {
                    a(), cancelAnimationFrame(c);
                };
            }
            initCanvasMutationObserver(e, t, n, r) {
                this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                const o = Ud(e, t, n, r, !1), i = function(e, t, n, r, o) {
                    const i = [], s = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
                    for (const a of s) try {
                        if ("function" != typeof t.CanvasRenderingContext2D.prototype[a]) continue;
                        const s = Ed(t.CanvasRenderingContext2D.prototype, a, (function(i) {
                            return function(...s) {
                                return Cd(this.canvas, n, r, o, !0) || Od((() => {
                                    const n = Hd(s, t, this);
                                    e(this.canvas, {
                                        type: Ad["2D"],
                                        property: a,
                                        args: n
                                    });
                                }), 0), i.apply(this, s);
                            };
                        }));
                        i.push(s);
                    } catch (n) {
                        const r = Td(t.CanvasRenderingContext2D.prototype, a, {
                            set(t) {
                                e(this.canvas, {
                                    type: Ad["2D"],
                                    property: a,
                                    args: [ t ],
                                    setter: !0
                                });
                            }
                        });
                        i.push(r);
                    }
                    return () => {
                        i.forEach((e => e()));
                    };
                }(this.processMutation.bind(this), e, t, n, r), s = function(e, t, n, r, o, i) {
                    const s = [];
                    return s.push(...zd(t.WebGLRenderingContext.prototype, Ad.WebGL, e, n, r, o, 0, t)), 
                    void 0 !== t.WebGL2RenderingContext && s.push(...zd(t.WebGL2RenderingContext.prototype, Ad.WebGL2, e, n, r, o, 0, t)), 
                    () => {
                        s.forEach((e => e()));
                    };
                }(this.processMutation.bind(this), e, t, n, r, this.mirror);
                this.resetObservers = () => {
                    o(), i(), s();
                };
            }
            snapshot(e) {
                const {options: t} = this, n = this.takeSnapshot(!0, "all" === t.sampling ? 2 : t.sampling || 2, t.win, t.blockClass, t.blockSelector, t.unblockSelector, t.maxCanvasSize, t.dataURLOptions, e);
                this.resetObservers = () => {
                    cancelAnimationFrame(n);
                };
            }
            takeSnapshot(e, t, n, r, o, i, s, a, c) {
                const u = new Map, l = new Worker(function() {
                    const e = new Blob([ 'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};' ]);
                    return URL.createObjectURL(e);
                }());
                l.onmessage = e => {
                    const t = e.data, {id: n} = t;
                    if (u.set(n, !1), !("base64" in t)) return;
                    const {base64: r, type: o, width: i, height: s} = t;
                    this.mutationCb({
                        id: n,
                        type: Ad["2D"],
                        commands: [ {
                            property: "clearRect",
                            args: [ 0, 0, i, s ]
                        }, {
                            property: "drawImage",
                            args: [ {
                                rr_type: "ImageBitmap",
                                args: [ {
                                    rr_type: "Blob",
                                    data: [ {
                                        rr_type: "ArrayBuffer",
                                        base64: r
                                    } ],
                                    type: o
                                } ]
                            }, 0, 0, i, s ]
                        } ]
                    });
                };
                const d = 1e3 / t;
                let p, h = 0;
                const f = t => {
                    h && t - h < d || (h = t, (e => {
                        if (e) return [ e ];
                        const t = [];
                        return n.document.querySelectorAll("canvas").forEach((e => {
                            Cd(e, r, o, i, !0) || t.push(e);
                        })), t;
                    })(c).forEach((t => {
                        const n = this.mirror.getId(t);
                        if (!u.get(n) && t.width && t.height) {
                            if (u.set(n, !0), !e && [ "webgl", "webgl2" ].includes(t.__context)) {
                                const e = t.getContext(t.__context);
                                !1 === Is([ e, "optionalAccess", e => e.getContextAttributes, "call", e => e(), "optionalAccess", e => e.preserveDrawingBuffer ]) && e.clear(e.COLOR_BUFFER_BIT);
                            }
                            createImageBitmap(t).then((e => {
                                l.postMessage({
                                    id: n,
                                    bitmap: e,
                                    width: t.width,
                                    height: t.height,
                                    dataURLOptions: a,
                                    maxCanvasSize: s
                                }, [ e ]);
                            })).catch((e => {
                                Dd((() => {
                                    throw e;
                                }))();
                            }));
                        }
                    }))), p = Md(f);
                };
                return p = Md(f), p;
            }
            startPendingCanvasMutationFlusher() {
                Md((() => this.flushPendingCanvasMutations()));
            }
            startRAFTimestamping() {
                const e = t => {
                    this.rafStamps.latestId = t, Md(e);
                };
                Md(e);
            }
            flushPendingCanvasMutations() {
                this.pendingCanvasMutations.forEach(((e, t) => {
                    const n = this.mirror.getId(t);
                    this.flushPendingCanvasMutationFor(t, n);
                })), Md((() => this.flushPendingCanvasMutations()));
            }
            flushPendingCanvasMutationFor(e, t) {
                if (this.frozen || this.locked) return;
                const n = this.pendingCanvasMutations.get(e);
                if (!n || -1 === t) return;
                const r = n.map((e => {
                    const {type: t, ...n} = e;
                    return n;
                })), {type: o} = n[0];
                this.mutationCb({
                    id: t,
                    type: o,
                    commands: r
                }), this.pendingCanvasMutations.delete(e);
            }
        }
        const Gd = {
            low: {
                sampling: {
                    canvas: 1
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .25
                }
            },
            medium: {
                sampling: {
                    canvas: 2
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .4
                }
            },
            high: {
                sampling: {
                    canvas: 4
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .5
                }
            }
        }, Vd = "ReplayCanvas", Jd = (e = {}) => {
            const [t, n] = e.maxCanvasSize || [], r = {
                quality: e.quality || "medium",
                enableManualSnapshot: e.enableManualSnapshot,
                maxCanvasSize: [ t ? Math.min(t, 1280) : 1280, n ? Math.min(n, 1280) : 1280 ]
            };
            let o;
            const i = new Promise((e => o = e));
            return {
                name: Vd,
                setupOnce() {},
                getOptions() {
                    const {quality: e, enableManualSnapshot: t, maxCanvasSize: n} = r;
                    return {
                        enableManualSnapshot: t,
                        recordCanvas: !0,
                        getCanvasManager: e => {
                            const r = new Wd({
                                ...e,
                                enableManualSnapshot: t,
                                maxCanvasSize: n,
                                errorHandler: e => {
                                    try {
                                        "object" == typeof e && (e.__rrweb__ = !0);
                                    } catch (e) {}
                                }
                            });
                            return o(r), r;
                        },
                        ...Gd[e || "medium"] || Gd.medium
                    };
                },
                async snapshot(e) {
                    (await i).snapshot(e);
                }
            };
        }, Xd = cn(Vd, Jd), Kd = b, Qd = "#ffffff", Zd = "inherit", ep = "rgba(108, 95, 199, 1)", tp = {
            fontFamily: "system-ui, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "14px",
            background: Qd,
            backgroundHover: "#f6f6f7",
            foreground: "#2b2233",
            border: "1.5px solid rgba(41, 35, 47, 0.13)",
            borderRadius: "25px",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            success: "#268d75",
            error: "#df3338",
            submitBackground: "rgba(88, 74, 192, 1)",
            submitBackgroundHover: ep,
            submitBorder: ep,
            submitOutlineFocus: "#29232f",
            submitForeground: Qd,
            submitForegroundHover: Qd,
            cancelBackground: "transparent",
            cancelBackgroundHover: "var(--background-hover)",
            cancelBorder: "var(--border)",
            cancelOutlineFocus: "var(--input-outline-focus)",
            cancelForeground: "var(--foreground)",
            cancelForegroundHover: "var(--foreground)",
            inputBackground: Zd,
            inputForeground: Zd,
            inputBorder: "var(--border)",
            inputOutlineFocus: ep,
            formBorderRadius: "20px",
            formContentBorderRadius: "6px"
        }, np = tp, rp = {
            ...tp,
            background: "#29232f",
            backgroundHover: "#352f3b",
            foreground: "#ebe6ef",
            border: "1.5px solid rgba(235, 230, 239, 0.15)",
            success: "#2da98c",
            error: "#f55459"
        }, op = "widget", ip = "api";
        function ap({name: e, email: t, message: n, source: r = ip, url: o = W()}, i = {}) {
            if (!n) throw new Error("Unable to submit feedback with empty message");
            return async function({feedback: {message: e, email: t, name: n, source: r, url: o}}, {includeReplay: i = !0} = {}) {
                const s = Jt(), a = s && s.getTransport(), c = s && s.getDsn();
                if (!s || !a || !c) return;
                const u = {
                    contexts: {
                        feedback: {
                            contact_email: t,
                            name: n,
                            message: e,
                            url: o,
                            source: r
                        }
                    },
                    type: "feedback"
                };
                return qt((async e => {
                    e.clearBreadcrumbs(), [ ip, op ].includes(String(r)) && e.setLevel("info");
                    const t = await async function({client: e, scope: t, event: n}) {
                        const r = {};
                        e.emit && e.emit("preprocessEvent", n, r);
                        const o = await Ct(e.getOptions(), n, r, t, e, pt());
                        return null === o ? (e.recordDroppedEvent("event_processor", "feedback", n), null) : (o.platform = o.platform || "javascript", 
                        o);
                    }({
                        scope: e,
                        client: s,
                        event: u
                    });
                    if (!t) return;
                    s.emit && s.emit("beforeSendFeedback", t, {
                        includeReplay: Boolean(i)
                    });
                    const n = tr(t, c, s.getOptions()._metadata, s.getOptions().tunnel);
                    let o;
                    try {
                        o = await a.send(n);
                    } catch (e) {
                        const t = new Error("Unable to send Feedback");
                        try {
                            t.cause = e;
                        } catch (e) {}
                        throw t;
                    }
                    if (o) {
                        if ("number" == typeof o.statusCode && (o.statusCode < 200 || o.statusCode >= 300)) throw new Error("Unable to send Feedback");
                        return o;
                    }
                }));
            }({
                feedback: {
                    name: e,
                    email: t,
                    message: n,
                    url: o,
                    source: r
                }
            }, i);
        }
        const cp = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function up(e, t) {
            return {
                ...e,
                ...t,
                themeDark: {
                    ...e.themeDark,
                    ...t.themeDark
                },
                themeLight: {
                    ...e.themeLight,
                    ...t.themeLight
                }
            };
        }
        function lp(e) {
            return `\n  --background: ${e.background};\n  --background-hover: ${e.backgroundHover};\n  --foreground: ${e.foreground};\n  --error: ${e.error};\n  --success: ${e.success};\n  --border: ${e.border};\n  --border-radius: ${e.borderRadius};\n  --box-shadow: ${e.boxShadow};\n\n  --submit-background: ${e.submitBackground};\n  --submit-background-hover: ${e.submitBackgroundHover};\n  --submit-border: ${e.submitBorder};\n  --submit-outline-focus: ${e.submitOutlineFocus};\n  --submit-foreground: ${e.submitForeground};\n  --submit-foreground-hover: ${e.submitForegroundHover};\n\n  --cancel-background: ${e.cancelBackground};\n  --cancel-background-hover: ${e.cancelBackgroundHover};\n  --cancel-border: ${e.cancelBorder};\n  --cancel-outline-focus: ${e.cancelOutlineFocus};\n  --cancel-foreground: ${e.cancelForeground};\n  --cancel-foreground-hover: ${e.cancelForegroundHover};\n\n  --input-background: ${e.inputBackground};\n  --input-foreground: ${e.inputForeground};\n  --input-border: ${e.inputBorder};\n  --input-outline-focus: ${e.inputOutlineFocus};\n\n  --form-border-radius: ${e.formBorderRadius};\n  --form-content-border-radius: ${e.formContentBorderRadius};\n  `;
        }
        function hp(e, t) {
            return Object.entries(t).forEach((([t, n]) => {
                e.setAttributeNS(null, t, n);
            })), e;
        }
        function gp(e, t, ...n) {
            const r = Kd.document.createElement(e);
            t && Object.entries(t).forEach((([e, t]) => {
                "className" === e && "string" == typeof t ? r.setAttribute("class", t) : "boolean" == typeof t && t ? r.setAttribute(e, "") : "string" == typeof t ? r.setAttribute(e, t) : e.startsWith("on") && "function" == typeof t && r.addEventListener(e.substring(2).toLowerCase(), t);
            }));
            for (const e of n) yp(r, e);
            return r;
        }
        function yp(e, t) {
            const n = Kd.document;
            if (null != t) if (Array.isArray(t)) for (const n of t) yp(e, n); else !1 === t || ("string" == typeof t ? e.appendChild(n.createTextNode(t)) : t instanceof Node ? e.appendChild(t) : e.appendChild(n.createTextNode(String(t))));
        }
        function _p(e, t) {
            const n = e.get(t);
            return "string" == typeof n ? n.trim() : "";
        }
        function xp({formTitle: e, showBranding: t, showName: n, showEmail: r, isNameRequired: o, isEmailRequired: i, colorScheme: s, defaultName: a, defaultEmail: c, onClosed: u, onCancel: l, onSubmit: d, ...p}) {
            let h = null;
            function f() {
                h && (h.open = !1);
            }
            const {el: m, showError: g, hideError: y} = function({nameLabel: e, namePlaceholder: t, emailLabel: n, emailPlaceholder: r, messageLabel: o, messagePlaceholder: i, isRequiredLabel: s, cancelButtonLabel: a, submitButtonLabel: c, showName: u, showEmail: l, isNameRequired: d, isEmailRequired: p, defaultName: h, defaultEmail: f, onCancel: m, onSubmit: g}) {
                const {el: y} = function({label: e}) {
                    return {
                        el: gp("button", {
                            type: "submit",
                            className: "btn btn--primary",
                            "aria-label": e
                        }, e)
                    };
                }({
                    label: c
                }), v = gp("div", {
                    className: "form__error-container form__error-container--hidden",
                    "aria-hidden": "true"
                }), _ = gp("input", {
                    id: "name",
                    type: u ? "text" : "hidden",
                    "aria-hidden": u ? "false" : "true",
                    name: "name",
                    required: d,
                    className: "form__input",
                    placeholder: t,
                    value: h
                }), b = gp("input", {
                    id: "email",
                    type: l ? "text" : "hidden",
                    "aria-hidden": l ? "false" : "true",
                    name: "email",
                    required: p,
                    className: "form__input",
                    placeholder: r,
                    value: f
                }), S = gp("textarea", {
                    id: "message",
                    autoFocus: "true",
                    rows: "5",
                    name: "message",
                    required: !0,
                    className: "form__input form__input--textarea",
                    placeholder: i
                }), x = gp("button", {
                    type: "button",
                    className: "btn btn--default",
                    "aria-label": a,
                    onClick: e => {
                        m && m(e);
                    }
                }, a), w = gp("form", {
                    className: "form",
                    onSubmit: function(e) {
                        if (e.preventDefault(), e.target instanceof HTMLFormElement) try {
                            if (g) {
                                const t = new FormData(e.target), n = {
                                    name: _p(t, "name"),
                                    email: _p(t, "email"),
                                    message: _p(t, "message")
                                };
                                g(n);
                            }
                        } catch (e) {}
                    }
                }, [ v, u && gp("label", {
                    htmlFor: "name",
                    className: "form__label"
                }, [ gp("span", {
                    className: "form__label__text"
                }, e, d && gp("span", {
                    className: "form__label__text--required"
                }, ` ${s}`)), _ ]), !u && _, l && gp("label", {
                    htmlFor: "email",
                    className: "form__label"
                }, [ gp("span", {
                    className: "form__label__text"
                }, n, p && gp("span", {
                    className: "form__label__text--required"
                }, ` ${s}`)), b ]), !l && b, gp("label", {
                    htmlFor: "message",
                    className: "form__label"
                }, [ gp("span", {
                    className: "form__label__text"
                }, o, gp("span", {
                    className: "form__label__text--required"
                }, ` ${s}`)), S ]), gp("div", {
                    className: "btn-group"
                }, [ y, x ]) ]);
                return {
                    get el() {
                        return w;
                    },
                    showError: function(e) {
                        v.textContent = e, v.classList.remove("form__error-container--hidden"), v.setAttribute("aria-hidden", "false");
                    },
                    hideError: function() {
                        v.textContent = "", v.classList.add("form__error-container--hidden"), v.setAttribute("aria-hidden", "true");
                    }
                };
            }({
                showEmail: r,
                showName: n,
                isEmailRequired: i,
                isNameRequired: o,
                defaultName: a,
                defaultEmail: c,
                onSubmit: d,
                onCancel: l,
                ...p
            });
            return h = gp("dialog", {
                className: "dialog",
                open: !0,
                onClick: function() {
                    f(), u && u();
                }
            }, gp("div", {
                className: "dialog__content",
                onClick: e => {
                    e.stopPropagation();
                }
            }, gp("h2", {
                className: "dialog__header"
            }, e, t && gp("a", {
                className: "brand-link",
                target: "_blank",
                href: "https://sentry.io/welcome/",
                title: "Powered by Sentry",
                rel: "noopener noreferrer"
            }, function({colorScheme: e}) {
                const t = e => Kd.document.createElementNS("http://www.w3.org/2000/svg", e), n = hp(t("svg"), {
                    class: "sentry-logo",
                    width: "32",
                    height: "30",
                    viewBox: "0 0 72 66",
                    fill: "none"
                }), r = hp(t("path"), {
                    transform: "translate(11, 11)",
                    d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
                });
                n.append(r);
                const o = t("defs"), i = t("style");
                return i.textContent = `\n    path {\n      fill: ${"dark" === e ? "#fff" : "#362d59"};\n    }`, 
                "system" === e && (i.textContent += "\n    @media (prefers-color-scheme: dark) {\n      path: {\n        fill: '#fff';\n      }\n    }\n    "), 
                o.append(i), n.append(o), {
                    get el() {
                        return n;
                    }
                };
            }({
                colorScheme: s
            }).el)), m)), {
                get el() {
                    return h;
                },
                showError: g,
                hideError: y,
                open: function() {
                    h && (h.open = !0);
                },
                close: f,
                checkIsOpen: function() {
                    return h && !0 === h.open || !1;
                }
            };
        }
        function Cp({shadow: e, options: {shouldCreateActor: t = !0, ...n}, attachTo: r}) {
            let o, i, s = !1;
            async function a(t) {
                if (!i) return;
                const r = [];
                n.isNameRequired && !t.name && r.push(n.nameLabel), n.isEmailRequired && !t.email && r.push(n.emailLabel), 
                t.message || r.push(n.messageLabel), r.length > 0 ? i.showError(`Please enter in the following required fields: ${r.join(", ")}`) : await async function(e, t, n) {
                    if (e) {
                        e.hideError();
                        try {
                            return await ap({
                                ...t,
                                source: op
                            }, n);
                        } catch (t) {
                            cp && E.error(t), e && e.showError("There was a problem submitting feedback, please wait and try again.");
                        }
                    }
                }(i, t) ? (h(), function() {
                    if (e) try {
                        const t = function({message: e, onRemove: t}) {
                            function n() {
                                r && (r.remove(), t && t());
                            }
                            const r = gp("div", {
                                className: "success-message",
                                onClick: n
                            }, function() {
                                const e = e => Kd.document.createElementNS("http://www.w3.org/2000/svg", e), t = hp(e("svg"), {
                                    class: "success-icon",
                                    width: "16",
                                    height: "17",
                                    viewBox: "0 0 16 17",
                                    fill: "none"
                                }), n = hp(e("g"), {
                                    clipPath: "url(#clip0_57_156)"
                                }), r = hp(e("path"), {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                                }), o = hp(e("path"), {
                                    d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                                });
                                t.appendChild(n).append(o, r);
                                const i = e("defs"), s = hp(e("clipPath"), {
                                    id: "clip0_57_156"
                                }), a = hp(e("rect"), {
                                    width: "16",
                                    height: "16",
                                    fill: "white",
                                    transform: "translate(0 0.5)"
                                });
                                return s.appendChild(a), i.appendChild(s), t.appendChild(i).appendChild(s).appendChild(a), 
                                {
                                    get el() {
                                        return t;
                                    }
                                };
                            }().el, e);
                            return {
                                el: r,
                                remove: n
                            };
                        }({
                            message: n.successMessageText,
                            onRemove: () => {
                                r && clearTimeout(r), u();
                            }
                        });
                        if (!t.el) throw new Error("Unable to show success message");
                        e.appendChild(t.el);
                        const r = setTimeout((() => {
                            t && t.remove();
                        }), 5e3);
                    } catch (e) {
                        E.error(e);
                    }
                }(), n.onSubmitSuccess && n.onSubmitSuccess()) : n.onSubmitError && n.onSubmitError();
            }
            function c() {
                const e = Jt(), t = e && e.getIntegrationByName && e.getIntegrationByName("Replay");
                t && t.flush().catch((e => {
                    cp && E.error(e);
                }));
            }
            function u() {
                o && o.show();
            }
            function l() {
                o && o.hide();
            }
            function d() {
                try {
                    if (i) return i.open(), s = !0, n.onFormOpen && n.onFormOpen(), void c();
                    const t = n.useSentryUser, r = Kt(), o = r && r.getUser();
                    if (i = xp({
                        colorScheme: n.colorScheme,
                        showBranding: n.showBranding,
                        showName: n.showName || n.isNameRequired,
                        showEmail: n.showEmail || n.isEmailRequired,
                        isNameRequired: n.isNameRequired,
                        isEmailRequired: n.isEmailRequired,
                        formTitle: n.formTitle,
                        cancelButtonLabel: n.cancelButtonLabel,
                        submitButtonLabel: n.submitButtonLabel,
                        emailLabel: n.emailLabel,
                        emailPlaceholder: n.emailPlaceholder,
                        messageLabel: n.messageLabel,
                        messagePlaceholder: n.messagePlaceholder,
                        nameLabel: n.nameLabel,
                        namePlaceholder: n.namePlaceholder,
                        isRequiredLabel: n.isRequiredLabel,
                        defaultName: t && o && o[t.name] || "",
                        defaultEmail: t && o && o[t.email] || "",
                        onClosed: () => {
                            u(), s = !1, n.onFormClose && n.onFormClose();
                        },
                        onCancel: () => {
                            p(), u();
                        },
                        onSubmit: a
                    }), !i.el) throw new Error("Unable to open Feedback dialog");
                    e.appendChild(i.el), l(), n.onFormOpen && n.onFormOpen(), c();
                } catch (e) {
                    E.error(e);
                }
            }
            function p() {
                i && (i.close(), s = !1, n.onFormClose && n.onFormClose());
            }
            function h() {
                if (i) {
                    p();
                    const e = i.el;
                    e && e.remove(), i = void 0;
                }
            }
            function f() {
                s || d(), l();
            }
            return r ? r.addEventListener("click", f) : t && (o = function({buttonLabel: e, onClick: t}) {
                const n = gp("button", {
                    type: "button",
                    className: "widget__actor",
                    "aria-label": e,
                    "aria-hidden": "false"
                }, function() {
                    const e = e => Kd.document.createElementNS("http://www.w3.org/2000/svg", e), t = hp(e("svg"), {
                        class: "feedback-icon",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none"
                    }), n = hp(e("g"), {
                        clipPath: "url(#clip0_57_80)"
                    }), r = hp(e("path"), {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                    });
                    t.appendChild(n).appendChild(r);
                    const o = e("defs"), i = hp(e("clipPath"), {
                        id: "clip0_57_80"
                    }), s = hp(e("rect"), {
                        width: "20",
                        height: "20",
                        fill: "white"
                    });
                    return i.appendChild(s), o.appendChild(i), t.appendChild(o).appendChild(i).appendChild(s), 
                    {
                        get el() {
                            return t;
                        }
                    };
                }().el, e ? gp("span", {
                    className: "widget__actor__text"
                }, e) : null);
                return n.addEventListener("click", (function(e) {
                    t && t(e);
                })), {
                    get el() {
                        return n;
                    },
                    show: () => {
                        n.classList.remove("widget__actor--hidden"), n.setAttribute("aria-hidden", "false");
                    },
                    hide: () => {
                        n.classList.add("widget__actor--hidden"), n.setAttribute("aria-hidden", "true");
                    }
                };
            }({
                buttonLabel: n.buttonLabel,
                onClick: f
            }), o.el && e.appendChild(o.el)), {
                get actor() {
                    return o;
                },
                get dialog() {
                    return i;
                },
                showActor: u,
                hideActor: l,
                removeActor: function() {
                    o && o.el && o.el.remove();
                },
                openDialog: d,
                closeDialog: p,
                removeDialog: h
            };
        }
        const Ip = Kd.document, Rp = e => new Mp(e);
        class Mp {
            static __initStatic() {
                this.id = "Feedback";
            }
            constructor({autoInject: e = !0, id: t = "sentry-feedback", isEmailRequired: n = !1, isNameRequired: r = !1, showBranding: o = !0, showEmail: i = !0, showName: s = !0, useSentryUser: a = {
                email: "email",
                name: "username"
            }, themeDark: c, themeLight: u, colorScheme: l = "system", buttonLabel: d = "Report a Bug", cancelButtonLabel: p = "Cancel", submitButtonLabel: h = "Send Bug Report", formTitle: f = "Report a Bug", emailPlaceholder: m = "your.email@example.org", emailLabel: g = "Email", messagePlaceholder: y = "What's the bug? What did you expect?", messageLabel: v = "Description", namePlaceholder: _ = "Your Name", nameLabel: b = "Name", isRequiredLabel: S = "(required)", successMessageText: x = "Thank you for your report!", onFormClose: w, onFormOpen: k, onSubmitError: T, onSubmitSuccess: E} = {}) {
                this.name = Mp.id, this._host = null, this._shadow = null, this._widget = null, 
                this._widgets = new Set, this._hasInsertedActorStyles = !1, this.options = {
                    autoInject: e,
                    showBranding: o,
                    id: t,
                    isEmailRequired: n,
                    isNameRequired: r,
                    showEmail: i,
                    showName: s,
                    useSentryUser: a,
                    colorScheme: l,
                    themeDark: {
                        ...rp,
                        ...c
                    },
                    themeLight: {
                        ...np,
                        ...u
                    },
                    buttonLabel: d,
                    cancelButtonLabel: p,
                    submitButtonLabel: h,
                    formTitle: f,
                    emailLabel: g,
                    emailPlaceholder: m,
                    messageLabel: v,
                    messagePlaceholder: y,
                    nameLabel: b,
                    namePlaceholder: _,
                    isRequiredLabel: S,
                    successMessageText: x,
                    onFormClose: w,
                    onFormOpen: k,
                    onSubmitError: T,
                    onSubmitSuccess: E
                };
            }
            setupOnce() {
                if (As()) try {
                    this._cleanupWidgetIfExists();
                    const {autoInject: e} = this.options;
                    if (!e) return;
                    this._createWidget(this.options);
                } catch (e) {
                    cp && E.error(e);
                }
            }
            openDialog() {
                this._widget || this._createWidget({
                    ...this.options,
                    shouldCreateActor: !1
                }), this._widget && this._widget.openDialog();
            }
            closeDialog() {
                this._widget && this._widget.closeDialog();
            }
            attachTo(e, t) {
                try {
                    const n = up(this.options, t || {});
                    return this._ensureShadowHost(n, (({shadow: t}) => {
                        const r = "string" == typeof e ? Ip.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                        if (!r) return cp && E.error("[Feedback] Unable to attach to target element"), null;
                        const o = Cp({
                            shadow: t,
                            options: n,
                            attachTo: r
                        });
                        return this._widgets.add(o), this._widget || (this._widget = o), o;
                    }));
                } catch (e) {
                    return cp && E.error(e), null;
                }
            }
            createWidget(e) {
                try {
                    return this._createWidget(up(this.options, e || {}));
                } catch (e) {
                    return cp && E.error(e), null;
                }
            }
            removeWidget(e) {
                if (!e) return !1;
                try {
                    if (this._widgets.has(e)) return e.removeActor(), e.removeDialog(), this._widgets.delete(e), 
                    this._widget === e && (this._widget = null), !0;
                } catch (e) {
                    cp && E.error(e);
                }
                return !1;
            }
            getWidget() {
                return this._widget;
            }
            remove() {
                this._host && this._host.remove(), this._initialize();
            }
            _initialize() {
                this._host = null, this._shadow = null, this._widget = null, this._widgets = new Set, 
                this._hasInsertedActorStyles = !1;
            }
            _cleanupWidgetIfExists() {
                this._host && this.remove();
                const e = Ip.querySelector(`#${this.options.id}`);
                e && e.remove();
            }
            _createWidget(e) {
                return this._ensureShadowHost(e, (({shadow: t}) => {
                    const n = Cp({
                        shadow: t,
                        options: e
                    });
                    return !this._hasInsertedActorStyles && n.actor && (t.appendChild(function(e) {
                        const t = e.createElement("style");
                        return t.textContent = "\n.widget__actor {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  line-height: 16px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  padding: 16px;\n  text-decoration: none;\n  z-index: 9000;\n\n  color: var(--foreground);\n  background-color: var(--background);\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.widget__actor:hover {\n  background-color: var(--background-hover);\n}\n\n.widget__actor svg {\n  width: 16px;\n  height: 16px;\n}\n\n.widget__actor--hidden {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.widget__actor__text {\n}\n\n@media (max-width: 600px) {\n  .widget__actor__text {\n    display: none;\n  }\n}\n\n.feedback-icon path {\n  fill: var(--foreground);\n}\n", 
                        t;
                    }(Ip)), this._hasInsertedActorStyles = !0), this._widgets.add(n), this._widget || (this._widget = n), 
                    n;
                }));
            }
            _ensureShadowHost(e, t) {
                let n = !1;
                if (!this._shadow || !this._host) {
                    const {id: t, colorScheme: r, themeLight: o, themeDark: i} = e, {shadow: s, host: a} = function({id: e, colorScheme: t, themeDark: n, themeLight: r}) {
                        try {
                            const o = Kd.document, i = o.createElement("div");
                            i.id = e;
                            const s = i.attachShadow({
                                mode: "open"
                            });
                            return s.appendChild(function(e, t, n) {
                                const r = e.createElement("style");
                                return r.textContent = `\n:host {\n  --bottom: 1rem;\n  --right: 1rem;\n  --top: auto;\n  --left: auto;\n  --z-index: 100000;\n  --font-family: ${n.light.fontFamily};\n  --font-size: ${n.light.fontSize};\n\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${lp("dark" === t ? n.dark : n.light)}\n}\n\n${"system" === t ? `\n@media (prefers-color-scheme: dark) {\n  :host {\n    ${lp(n.dark)}\n  }\n}` : ""}\n}`, 
                                r;
                            }(o, t, {
                                dark: n,
                                light: r
                            })), s.appendChild(function(e) {
                                const t = e.createElement("style");
                                return t.textContent = "\n.dialog {\n  line-height: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n\n  border: var(--border);\n  border-radius: var(--form-border-radius);\n  background-color: var(--background);\n  color: var(--foreground);\n\n  width: 320px;\n  max-width: 100%;\n  max-height: calc(100% - 2rem);\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--box-shadow);\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n\n.dialog__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0 24px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.brand-link {\n  display: inline-flex;\n}\n\n.error {\n  color: var(--error);\n  margin-bottom: 16px;\n}\n\n.form {\n  display: grid;\n  overflow: auto;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 24px 24px;\n}\n\n.form__error-container {\n  color: var(--error);\n}\n\n.form__error-container--hidden {\n  display: none;\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: grid;\n  gap: 4px;\n  align-items: center;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  line-height: inherit;\n  background-color: var(--input-background);\n  box-sizing: border-box;\n  border: var(--input-border);\n  border-radius: var(--form-content-border-radius);\n  color: var(--input-foreground);\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  color: var(--input-foreground);\n  opacity: 0.65;\n}\n\n.form__input:focus-visible {\n  outline: 1px auto var(--input-outline-focus);\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--cancel-border);\n  border-radius: var(--form-content-border-radius);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  padding: 6px 16px;\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  background-color: var(--submit-background);\n  border-color: var(--submit-border);\n  color: var(--submit-foreground);\n}\n.btn--primary:hover {\n  background-color: var(--submit-background-hover);\n  color: var(--submit-foreground-hover);\n}\n.btn--primary:focus-visible {\n  outline: 1px auto var(--submit-outline-focus);\n}\n\n.btn--default {\n  background-color: var(--cancel-background);\n  color: var(--cancel-foreground);\n  font-weight: 500;\n}\n.btn--default:hover {\n  background-color: var(--cancel-background-hover);\n  color: var(--cancel-foreground-hover);\n}\n.btn--default:focus-visible {\n  outline: 1px auto var(--cancel-outline-focus);\n}\n\n.success-message {\n  background-color: var(--background);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  font-weight: 600;\n  color: var(--success);\n  padding: 12px 24px;\n  line-height: 25px;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success-icon path {\n  fill: var(--success);\n}\n", 
                                t;
                            }(o)), {
                                shadow: s,
                                host: i
                            };
                        } catch (e) {
                            throw E.warn("[Feedback] Browser does not support shadow DOM API"), new Error("Browser does not support shadow DOM API.");
                        }
                    }({
                        id: t,
                        colorScheme: r,
                        themeLight: o,
                        themeDark: i
                    });
                    this._shadow = s, this._host = a, n = !0;
                }
                this._host.dataset.sentryFeedbackColorscheme = e.colorScheme;
                const r = t({
                    shadow: this._shadow,
                    host: this._host
                });
                return n && Ip.body.appendChild(this._host), r;
            }
        }
        Mp.__initStatic();
        const Op = "CaptureConsole", Ap = (e = {}) => {
            const t = e.levels || w;
            return {
                name: Op,
                setupOnce() {},
                setup(e) {
                    "console" in b && Rr((({args: n, level: r}) => {
                        Jt() === e && t.includes(r) && function(e, t) {
                            const n = {
                                level: Yr(t),
                                extra: {
                                    arguments: e
                                }
                            };
                            qt((r => {
                                if (r.addEventProcessor((e => (e.logger = "console", pe(e, {
                                    handled: !1,
                                    type: "console"
                                }), e))), "assert" === t && !1 === e[0]) {
                                    const t = `Assertion failed: ${X(e.slice(1), " ") || "console.assert"}`;
                                    return r.setExtra("arguments", e.slice(1)), void At(t, n);
                                }
                                const o = e.find((e => e instanceof Error));
                                "error" === t && o ? Ot(o, n) : At(X(e, " "), n);
                            }));
                        }(n, r);
                    }));
                }
            };
        };
        cn(Op, Ap);
        const Lp = b, Dp = "ContextLines", Np = (e = {}) => {
            const t = null != e.frameContextLines ? e.frameContextLines : 7;
            return {
                name: Dp,
                setupOnce() {},
                processEvent: e => function(e, t) {
                    const n = Lp.document, r = Lp.location && Lp.location.href.split(/[\?#]/, 1)[0];
                    if (!n || !r) return e;
                    const i = e.exception && e.exception.values;
                    if (!i || !i.length) return e;
                    const s = n.documentElement.innerHTML;
                    if (!s) return e;
                    const a = [ "<!DOCTYPE html>", "<html>", ...s.split("\n"), "</html>" ];
                    return i.forEach((e => {
                        const n = e.stacktrace;
                        n && n.frames && (n.frames = n.frames.map((e => function(e, t, n, r) {
                            return e.filename === n && e.lineno && t.length ? (function(e, t, n = 5) {
                                if (void 0 === t.lineno) return;
                                const r = e.length, o = Math.max(Math.min(r - 1, t.lineno - 1), 0);
                                t.pre_context = e.slice(Math.max(0, o - n), o).map((e => J(e, 0))), t.context_line = J(e[Math.min(r - 1, o)], t.colno || 0), 
                                t.post_context = e.slice(Math.min(o + 1, r), o + 1 + n).map((e => J(e, 0)));
                            }(t, e, r), e) : e;
                        }(e, a, r, t))));
                    })), e;
                }(e, t)
            };
        };
        cn(Dp, Np);
        const $p = (e = {}) => {
            const t = {
                debugger: !1,
                stringify: !1,
                ...e
            };
            return {
                name: "Debug",
                setupOnce() {},
                setup(e) {
                    e.on && e.on("beforeSendEvent", ((e, n) => {
                        t.debugger, T((() => {
                            t.stringify, n && Object.keys(n).length;
                        }));
                    }));
                }
            };
        }, jp = (cn("Debug", $p), "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__), Bp = () => {
            let e;
            return {
                name: "Dedupe",
                setupOnce() {},
                processEvent(t) {
                    if (t.type) return t;
                    try {
                        if (function(e, t) {
                            return !!t && (!!function(e, t) {
                                const n = e.message, r = t.message;
                                return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!qp(e, t) && !!Hp(e, t))));
                            }(e, t) || !!function(e, t) {
                                const n = Up(t), r = Up(e);
                                return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!qp(e, t) && !!Hp(e, t)));
                            }(e, t));
                        }(t, e)) return jp && E.warn("Event dropped due to being a duplicate of previously captured event."), 
                        null;
                    } catch (e) {}
                    return e = t;
                }
            };
        };
        function Hp(e, t) {
            let n = zp(e), r = zp(t);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (let e = 0; e < r.length; e++) {
                const t = r[e], o = n[e];
                if (t.filename !== o.filename || t.lineno !== o.lineno || t.colno !== o.colno || t.function !== o.function) return !1;
            }
            return !0;
        }
        function qp(e, t) {
            let n = e.fingerprint, r = t.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""));
            } catch (e) {
                return !1;
            }
        }
        function Up(e) {
            return e.exception && e.exception.values && e.exception.values[0];
        }
        function zp(e) {
            const t = e.exception;
            if (t) try {
                return t.values[0].stacktrace.frames;
            } catch (e) {
                return;
            }
        }
        cn("Dedupe", Bp);
        const Wp = "ExtraErrorData", Gp = (e = {}) => {
            const t = e.depth || 3, n = e.captureErrorCause || !1;
            return {
                name: Wp,
                setupOnce() {},
                processEvent: (e, r) => function(e, t = {}, n, r) {
                    if (!t.originalException || !I(t.originalException)) return e;
                    const o = t.originalException.name || t.originalException.constructor.name, i = function(e, t) {
                        try {
                            const n = [ "name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON" ], r = {};
                            for (const t of Object.keys(e)) {
                                if (-1 !== n.indexOf(t)) continue;
                                const o = e[t];
                                r[t] = I(o) ? o.toString() : o;
                            }
                            if (t && void 0 !== e.cause && (r.cause = I(e.cause) ? e.cause.toString() : e.cause), 
                            "function" == typeof e.toJSON) {
                                const t = e.toJSON();
                                for (const e of Object.keys(t)) {
                                    const n = t[e];
                                    r[e] = I(n) ? n.toString() : n;
                                }
                            }
                            return r;
                        } catch (e) {
                            jp && E.error("Unable to extract extra data from the Error object:", e);
                        }
                        return null;
                    }(t.originalException, r);
                    if (i) {
                        const t = {
                            ...e.contexts
                        }, r = kt(i, n);
                        return N(r) && (ee(r, "__sentry_skip_normalization__", !0), t[o] = r), {
                            ...e,
                            contexts: t
                        };
                    }
                    return e;
                }(e, r, t, n)
            };
        };
        cn(Wp, Gp);
        const Vp = "HttpClient", Yp = (e = {}) => {
            const t = {
                failedRequestStatusCodes: [ [ 500, 599 ] ],
                failedRequestTargets: [ /.*/ ],
                ...e
            };
            return {
                name: Vp,
                setupOnce() {},
                setup(e) {
                    !function(e, t) {
                        Ln() && Ur((n => {
                            if (Jt() !== e) return;
                            const {response: r, args: o} = n, [i, s] = o;
                            r && function(e, t, n, r) {
                                if (Kp(e, n.status, n.url)) {
                                    const e = function(e, t) {
                                        return !t && e instanceof Request || e instanceof Request && e.bodyUsed ? e : new Request(e, t);
                                    }(t, r);
                                    let o, i, s, a;
                                    Zp() && ([{headers: o, cookies: s}, {headers: i, cookies: a}] = [ {
                                        cookieHeader: "Cookie",
                                        obj: e
                                    }, {
                                        cookieHeader: "Set-Cookie",
                                        obj: n
                                    } ].map((({cookieHeader: e, obj: t}) => {
                                        const n = function(e) {
                                            const t = {};
                                            return e.forEach(((e, n) => {
                                                t[n] = e;
                                            })), t;
                                        }(t.headers);
                                        let r;
                                        try {
                                            const t = n[e] || n[e.toLowerCase()] || void 0;
                                            t && (r = Xp(t));
                                        } catch (t) {
                                            jp && E.log(`Could not extract cookies from header ${e}`);
                                        }
                                        return {
                                            headers: n,
                                            cookies: r
                                        };
                                    }))), Lt(Qp({
                                        url: e.url,
                                        method: e.method,
                                        status: n.status,
                                        requestHeaders: o,
                                        responseHeaders: i,
                                        requestCookies: s,
                                        responseCookies: a
                                    }));
                                }
                            }(t, i, r, s);
                        }));
                    }(e, t), function(e, t) {
                        "XMLHttpRequest" in b && Hr((n => {
                            if (Jt() !== e) return;
                            const r = n.xhr, o = r[Br];
                            if (!o) return;
                            const {method: i, request_headers: s} = o;
                            try {
                                !function(e, t, n, r) {
                                    if (Kp(e, t.status, t.responseURL)) {
                                        let e, o, i;
                                        if (Zp()) {
                                            try {
                                                const e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                                                e && (o = Xp(e));
                                            } catch (e) {
                                                jp && E.log("Could not extract cookies from response headers");
                                            }
                                            try {
                                                i = function(e) {
                                                    const t = e.getAllResponseHeaders();
                                                    return t ? t.split("\r\n").reduce(((e, t) => {
                                                        const [n, r] = t.split(": ");
                                                        return e[n] = r, e;
                                                    }), {}) : {};
                                                }(t);
                                            } catch (e) {
                                                jp && E.log("Could not extract headers from response");
                                            }
                                            e = r;
                                        }
                                        Lt(Qp({
                                            url: t.responseURL,
                                            method: n,
                                            status: t.status,
                                            requestHeaders: e,
                                            responseHeaders: i,
                                            responseCookies: o
                                        }));
                                    }
                                }(t, r, i, s);
                            } catch (e) {
                                jp && E.warn("Error while extracting response event form XHR response", e);
                            }
                        }));
                    }(e, t);
                }
            };
        };
        function Jp(e) {
            if (e) {
                const t = e["Content-Length"] || e["content-length"];
                if (t) return parseInt(t, 10);
            }
        }
        function Xp(e) {
            return e.split("; ").reduce(((e, t) => {
                const [n, r] = t.split("=");
                return e[n] = r, e;
            }), {});
        }
        function Kp(e, t, n) {
            return function(e, t) {
                return e.some((e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]));
            }(e.failedRequestStatusCodes, t) && (r = e.failedRequestTargets, o = n, r.some((e => "string" == typeof e ? o.includes(e) : e.test(o)))) && !Rs(n, Jt());
            var r, o;
        }
        function Qp(e) {
            const t = `HTTP Client Error with status code: ${e.status}`, n = {
                message: t,
                exception: {
                    values: [ {
                        type: "Error",
                        value: t
                    } ]
                },
                request: {
                    url: e.url,
                    method: e.method,
                    headers: e.requestHeaders,
                    cookies: e.requestCookies
                },
                contexts: {
                    response: {
                        status_code: e.status,
                        headers: e.responseHeaders,
                        cookies: e.responseCookies,
                        body_size: Jp(e.responseHeaders)
                    }
                }
            };
            return pe(n, {
                type: "http.client",
                handled: !1
            }), n;
        }
        function Zp() {
            const e = Jt();
            return !!e && Boolean(e.getOptions().sendDefaultPii);
        }
        cn(Vp, Yp);
        const eh = b, th = "ReportingObserver", nh = new WeakMap, rh = (e = {}) => {
            const t = e.types || [ "crash", "deprecation", "intervention" ];
            function n(e) {
                if (nh.has(Jt())) for (const t of e) qt((e => {
                    e.setExtra("url", t.url);
                    const n = `ReportingObserver [${t.type}]`;
                    let r = "No details available";
                    if (t.body) {
                        const n = {};
                        for (const e in t.body) n[e] = t.body[e];
                        if (e.setExtra("body", n), "crash" === t.type) {
                            const e = t.body;
                            r = [ e.crashId || "", e.reason || "" ].join(" ").trim() || r;
                        } else r = t.body.message || r;
                    }
                    At(`${n}: ${r}`);
                }));
            }
            return {
                name: th,
                setupOnce() {
                    "ReportingObserver" in Mn && new eh.ReportingObserver(n, {
                        buffered: !0,
                        types: t
                    }).observe();
                },
                setup(e) {
                    nh.set(e, !0);
                }
            };
        };
        cn(th, rh);
        const ih = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
        function ah(...e) {
            let t = "", n = !1;
            for (let r = e.length - 1; r >= -1 && !n; r--) {
                const o = r >= 0 ? e[r] : "/";
                o && (t = `${o}/${t}`, n = "/" === o.charAt(0));
            }
            return t = function(e, t) {
                let n = 0;
                for (let t = e.length - 1; t >= 0; t--) {
                    const r = e[t];
                    "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), 
                    n--);
                }
                if (t) for (;n--; n) e.unshift("..");
                return e;
            }(t.split("/").filter((e => !!e)), !n).join("/"), (n ? "/" : "") + t || ".";
        }
        function ch(e) {
            let t = 0;
            for (;t < e.length && "" === e[t]; t++) ;
            let n = e.length - 1;
            for (;n >= 0 && "" === e[n]; n--) ;
            return t > n ? [] : e.slice(t, n - t + 1);
        }
        const uh = "RewriteFrames", lh = (e = {}) => {
            const t = e.root, n = e.prefix || "app:///", r = e.iteratee || (e => {
                if (!e.filename) return e;
                const r = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/"), o = /^\//.test(e.filename);
                if (r || o) {
                    const o = r ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename, i = t ? function(e, t) {
                        e = ah(e).slice(1), t = ah(t).slice(1);
                        const n = ch(e.split("/")), r = ch(t.split("/")), o = Math.min(n.length, r.length);
                        let i = o;
                        for (let e = 0; e < o; e++) if (n[e] !== r[e]) {
                            i = e;
                            break;
                        }
                        let s = [];
                        for (let e = i; e < n.length; e++) s.push("..");
                        return s = s.concat(r.slice(i)), s.join("/");
                    }(t, o) : function(e, t) {
                        let n = function(e) {
                            const t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e, n = ih.exec(t);
                            return n ? n.slice(1) : [];
                        }(e)[2];
                        return n;
                    }(o);
                    e.filename = `${n}${i}`;
                }
                return e;
            });
            return {
                name: uh,
                setupOnce() {},
                processEvent(e) {
                    let t = e;
                    return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                        try {
                            return {
                                ...e,
                                exception: {
                                    ...e.exception,
                                    values: e.exception.values.map((e => {
                                        return {
                                            ...e,
                                            ...e.stacktrace && {
                                                stacktrace: (t = e.stacktrace, {
                                                    ...t,
                                                    frames: t && t.frames && t.frames.map((e => r(e)))
                                                })
                                            }
                                        };
                                        var t;
                                    }))
                                }
                            };
                        } catch (t) {
                            return e;
                        }
                    }(t)), t;
                }
            };
        }, dh = (cn(uh, lh), "SessionTiming"), ph = () => {
            const e = Date.now();
            return {
                name: dh,
                setupOnce() {},
                processEvent(t) {
                    const n = Date.now();
                    return {
                        ...t,
                        extra: {
                            ...t.extra,
                            "session:start": e,
                            "session:duration": n - e,
                            "session:end": n
                        }
                    };
                }
            };
        };
        function hh() {
            Ns.document ? Ns.document.addEventListener("visibilitychange", (() => {
                const e = Pi();
                if (Ns.document.hidden && e) {
                    const t = "cancelled", {op: n, status: r} = Je(e);
                    Ls && E.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`), 
                    r || e.setStatus(t), e.setTag("visibilitychange", "document.hidden"), e.end();
                }
            })) : Ls && E.warn("[Tracing] Could not set up background tab detection due to lack of global document");
        }
        function fh(e) {
            return [ {
                type: "span"
            }, e ];
        }
        function mh(e) {
            return "number" == typeof e && isFinite(e);
        }
        function gh(e, {startTimestamp: t, ...n}) {
            return t && e.startTimestamp > t && (e.startTimestamp = t), e.startChild({
                startTimestamp: t,
                ...n
            });
        }
        cn(dh, ph);
        function vh(e) {
            return e / 1e3;
        }
        function _h() {
            return Ns && Ns.addEventListener && Ns.performance;
        }
        let bh, Sh, xh = 0, wh = {};
        function kh() {
            const e = _h();
            if (e && Ie) {
                e.mark && Ns.performance.mark("sentry-tracing-init");
                const t = Sa("fid", (({metric: e}) => {
                    const t = e.entries[e.entries.length - 1];
                    if (!t) return;
                    const n = vh(Ie), r = vh(t.startTime);
                    Ls && E.log("[Measurements] Adding FID"), wh.fid = {
                        value: e.value,
                        unit: "millisecond"
                    }, wh["mark.fid"] = {
                        value: n + r,
                        unit: "second"
                    };
                }), ya, ua), n = function(e, t = !1) {
                    return Sa("cls", e, ga, ca, t);
                }((({metric: e}) => {
                    const t = e.entries[e.entries.length - 1];
                    t && (Ls && E.log("[Measurements] Adding CLS"), wh.cls = {
                        value: e.value,
                        unit: ""
                    }, Sh = t);
                }), !0), r = ha((({metric: e}) => {
                    const t = e.entries[e.entries.length - 1];
                    t && (Ls && E.log("[Measurements] Adding LCP"), wh.lcp = {
                        value: e.value,
                        unit: "millisecond"
                    }, bh = t);
                }), !0), o = Sa("ttfb", (({metric: e}) => {
                    e.entries[e.entries.length - 1] && (Ls && E.log("[Measurements] Adding TTFB"), wh.ttfb = {
                        value: e.value,
                        unit: "millisecond"
                    });
                }), _a, da);
                return () => {
                    t(), n(), r(), o();
                };
            }
            return () => {};
        }
        function Th() {
            fa("longtask", (({entries: e}) => {
                for (const t of e) {
                    const e = Pi();
                    if (!e) return;
                    const n = vh(Ie + t.startTime), r = vh(t.duration);
                    e.startChild({
                        description: "Main UI thread blocked",
                        op: "ui.long-task",
                        origin: "auto.ui.browser.metrics",
                        startTimestamp: n,
                        endTimestamp: n + r
                    });
                }
            }));
        }
        function Eh() {
            fa("event", (({entries: e}) => {
                for (const t of e) {
                    const e = Pi();
                    if (!e) return;
                    if ("click" === t.name) {
                        const n = vh(Ie + t.startTime), r = vh(t.duration), o = {
                            description: U(t.target),
                            op: `ui.interaction.${t.name}`,
                            origin: "auto.ui.browser.metrics",
                            startTimestamp: n,
                            endTimestamp: n + r
                        }, i = V(t.target);
                        i && (o.attributes = {
                            "ui.component_name": i
                        }), e.startChild(o);
                    }
                }
            }));
        }
        function Ch(e, t) {
            if (_h() && Ie) {
                const n = function(e, t) {
                    return Sa("inp", (({metric: n}) => {
                        if (void 0 === n.value) return;
                        const r = n.entries.find((e => e.duration === n.value && void 0 !== Ih[e.name])), o = Jt();
                        if (!r || !o) return;
                        const i = Ih[r.name], s = o.getOptions(), a = vh(Ie + r.startTime), c = vh(n.value), u = void 0 !== r.interactionId ? e[r.interactionId] : void 0;
                        if (void 0 === u) return;
                        const {routeName: l, parentContext: d, activeTransaction: p, user: h, replayId: f} = u, m = void 0 !== h ? h.email || h.id || h.ip_address : void 0, g = void 0 !== p ? p.getProfileId() : void 0, y = new ss({
                            startTimestamp: a,
                            endTimestamp: a + c,
                            op: `ui.interaction.${i}`,
                            name: U(r.target),
                            attributes: {
                                release: s.release,
                                environment: s.environment,
                                transaction: l,
                                ...void 0 !== m && "" !== m ? {
                                    user: m
                                } : {},
                                ...void 0 !== g ? {
                                    profile_id: g
                                } : {},
                                ...void 0 !== f ? {
                                    replay_id: f
                                } : {}
                            },
                            exclusiveTime: n.value,
                            measurements: {
                                inp: {
                                    value: n.value,
                                    unit: "millisecond"
                                }
                            }
                        }), v = function(e, t, n) {
                            if (!Hi(t)) return !1;
                            let r;
                            return r = void 0 !== e && "function" == typeof t.tracesSampler ? t.tracesSampler({
                                transactionContext: e,
                                name: e.name,
                                parentSampled: e.parentSampled,
                                attributes: {
                                    ...e.data,
                                    ...e.attributes
                                },
                                location: Ns.location
                            }) : void 0 !== e && void 0 !== e.sampled ? e.sampled : void 0 !== t.tracesSampleRate ? t.tracesSampleRate : 1, 
                            hs(r) ? !0 === r ? n : !1 === r ? 0 : r * n : (Ls && E.warn("[Tracing] Discarding interaction span because of invalid sample rate."), 
                            !1);
                        }(d, s, t);
                        if (v && Math.random() < v) {
                            const e = y ? function(e, t) {
                                const n = {
                                    sent_at: (new Date).toISOString()
                                };
                                return t && (n.dsn = xn(t)), zn(n, e.map(fh));
                            }([ y ], o.getDsn()) : void 0, t = o && o.getTransport();
                            t && e && t.send(e).then(null, (e => {
                                Ls && E.error("Error while sending interaction:", e);
                            }));
                        }
                    }), ba, pa);
                }(e, t);
                return () => {
                    n();
                };
            }
            return () => {};
        }
        const Ih = {
            click: "click",
            pointerdown: "click",
            pointerup: "click",
            mousedown: "click",
            mouseup: "click",
            touchstart: "click",
            touchend: "click",
            mouseover: "hover",
            mouseout: "hover",
            mouseenter: "hover",
            mouseleave: "hover",
            pointerover: "hover",
            pointerout: "hover",
            pointerenter: "hover",
            pointerleave: "hover",
            dragstart: "drag",
            dragend: "drag",
            drag: "drag",
            dragenter: "drag",
            dragleave: "drag",
            dragover: "drag",
            drop: "drag",
            keydown: "press",
            keyup: "press",
            keypress: "press",
            input: "press"
        };
        function Rh(e) {
            const t = _h();
            if (!t || !Ns.performance.getEntries || !Ie) return;
            Ls && E.log("[Tracing] Adding & adjusting spans using Performance API");
            const n = vh(Ie), r = t.getEntries(), {op: o, start_timestamp: i} = Je(e);
            if (r.slice(xh).forEach((t => {
                const r = vh(t.startTime), o = vh(t.duration);
                if (!("navigation" === e.op && i && n + r < i)) switch (t.entryType) {
                  case "navigation":
                    !function(e, t, n) {
                        [ "unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect" ].forEach((r => {
                            Mh(e, t, r, n);
                        })), Mh(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"), Mh(e, t, "fetch", n, "cache", "domainLookupStart"), 
                        Mh(e, t, "domainLookup", n, "DNS"), function(e, t, n) {
                            t.responseEnd && (gh(e, {
                                op: "browser",
                                origin: "auto.browser.browser.metrics",
                                description: "request",
                                startTimestamp: n + vh(t.requestStart),
                                endTimestamp: n + vh(t.responseEnd)
                            }), gh(e, {
                                op: "browser",
                                origin: "auto.browser.browser.metrics",
                                description: "response",
                                startTimestamp: n + vh(t.responseStart),
                                endTimestamp: n + vh(t.responseEnd)
                            }));
                        }(e, t, n);
                    }(e, t, n);
                    break;

                  case "mark":
                  case "paint":
                  case "measure":
                    {
                        !function(e, t, n, r, o) {
                            const i = o + n, s = i + r;
                            gh(e, {
                                description: t.name,
                                endTimestamp: s,
                                op: t.entryType,
                                origin: "auto.resource.browser.metrics",
                                startTimestamp: i
                            });
                        }(e, t, r, o, n);
                        const i = Us(), s = t.startTime < i.firstHiddenTime;
                        "first-paint" === t.name && s && (Ls && E.log("[Measurements] Adding FP"), wh.fp = {
                            value: t.startTime,
                            unit: "millisecond"
                        }), "first-contentful-paint" === t.name && s && (Ls && E.log("[Measurements] Adding FCP"), 
                        wh.fcp = {
                            value: t.startTime,
                            unit: "millisecond"
                        });
                        break;
                    }

                  case "resource":
                    !function(e, t, n, r, o, i) {
                        if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                        const s = Jr(n), a = {};
                        Oh(a, t, "transferSize", "http.response_transfer_size"), Oh(a, t, "encodedBodySize", "http.response_content_length"), 
                        Oh(a, t, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in t && (a["resource.render_blocking_status"] = t.renderBlockingStatus), 
                        s.protocol && (a["url.scheme"] = s.protocol.split(":").pop()), s.host && (a["server.address"] = s.host), 
                        a["url.same_origin"] = n.includes(Ns.location.origin);
                        const c = i + r, u = c + o;
                        gh(e, {
                            description: n.replace(Ns.location.origin, ""),
                            endTimestamp: u,
                            op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                            origin: "auto.resource.browser.metrics",
                            startTimestamp: c,
                            data: a
                        });
                    }(e, t, t.name, r, o, n);
                }
            })), xh = Math.max(r.length - 1, 0), function(e) {
                const t = Ns.navigator;
                if (!t) return;
                const n = t.connection;
                n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType), n.type && e.setTag("connectionType", n.type), 
                mh(n.rtt) && (wh["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                })), mh(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`), mh(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
            }(e), "pageload" === o) {
                !function(e) {
                    const t = Ps();
                    if (!t) return;
                    const {responseStart: n, requestStart: r} = t;
                    r <= n && (Ls && E.log("[Measurements] Adding TTFB Request Time"), e["ttfb.requestTime"] = {
                        value: n - r,
                        unit: "millisecond"
                    });
                }(wh), [ "fcp", "fp", "lcp" ].forEach((e => {
                    if (!wh[e] || !i || n >= i) return;
                    const t = wh[e].value, r = n + vh(t), o = Math.abs(1e3 * (r - i)), s = o - t;
                    Ls && E.log(`[Measurements] Normalized ${e} from ${t} to ${o} (${s})`), wh[e].value = o;
                }));
                const t = wh["mark.fid"];
                t && wh.fid && (gh(e, {
                    description: "first input delay",
                    endTimestamp: t.value + vh(wh.fid.value),
                    op: "ui.action",
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: t.value
                }), delete wh["mark.fid"]), "fcp" in wh || delete wh.cls, Object.keys(wh).forEach((e => {
                    Cs(e, wh[e].value, wh[e].unit);
                })), function(e) {
                    bh && (Ls && E.log("[Measurements] Adding LCP Data"), bh.element && e.setTag("lcp.element", U(bh.element)), 
                    bh.id && e.setTag("lcp.id", bh.id), bh.url && e.setTag("lcp.url", bh.url.trim().slice(0, 200)), 
                    e.setTag("lcp.size", bh.size)), Sh && Sh.sources && (Ls && E.log("[Measurements] Adding CLS Data"), 
                    Sh.sources.forEach(((t, n) => e.setTag(`cls.source.${n + 1}`, U(t.node)))));
                }(e);
            }
            bh = void 0, Sh = void 0, wh = {};
        }
        function Mh(e, t, n, r, o, i) {
            const s = i ? t[i] : t[`${n}End`], a = t[`${n}Start`];
            a && s && gh(e, {
                op: "browser",
                origin: "auto.browser.browser.metrics",
                description: o || n,
                startTimestamp: r + vh(a),
                endTimestamp: r + vh(s)
            });
        }
        function Oh(e, t, n, r) {
            const o = t[n];
            null != o && o < 2147483647 && (e[r] = o);
        }
        const Lh = [ "localhost", /^\/(?!\/)/ ], Dh = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            tracingOrigins: Lh,
            tracePropagationTargets: Lh
        };
        function Nh(e) {
            const {traceFetch: t, traceXHR: n, tracePropagationTargets: r, tracingOrigins: o, shouldCreateSpanForRequest: i, enableHTTPTimings: s} = {
                traceFetch: Dh.traceFetch,
                traceXHR: Dh.traceXHR,
                ...e
            }, a = "function" == typeof i ? i : e => !0, c = e => function(e, t) {
                return Q(e, t || Lh);
            }(e, r || o), u = {};
            t && Ur((e => {
                const t = function(e, t, n, r, o = "auto.http.browser") {
                    if (!Hi() || !e.fetchData) return;
                    const i = t(e.fetchData.url);
                    if (e.endTimestamp && i) {
                        const t = e.fetchData.__span;
                        if (!t) return;
                        const n = r[t];
                        return void (n && (function(e, t) {
                            if (t.response) {
                                os(e, t.response.status);
                                const n = t.response && t.response.headers && t.response.headers.get("content-length");
                                if (n) {
                                    const t = parseInt(n);
                                    t > 0 && e.setAttribute("http.response_content_length", t);
                                }
                            } else t.error && e.setStatus("internal_error");
                            e.end();
                        }(n, e), delete r[t]));
                    }
                    const s = Kt(), a = Jt(), {method: c, url: u} = e.fetchData, l = function(e) {
                        try {
                            return new URL(e).href;
                        } catch (e) {
                            return;
                        }
                    }(u), d = l ? Jr(l).host : void 0, p = i ? Wi({
                        name: `${c} ${u}`,
                        onlyIfParent: !0,
                        attributes: {
                            url: u,
                            type: "fetch",
                            "http.method": c,
                            "http.url": l,
                            "server.address": d,
                            [Ni]: o
                        },
                        op: "http.client"
                    }) : void 0;
                    if (p && (e.fetchData.__span = p.spanContext().spanId, r[p.spanContext().spanId] = p), 
                    n(e.fetchData.url) && a) {
                        const t = e.args[0];
                        e.args[1] = e.args[1] || {};
                        const n = e.args[1];
                        n.headers = function(e, t, n, r, o) {
                            const i = o || n.getSpan(), s = pt(), {traceId: a, spanId: c, sampled: u, dsc: l} = {
                                ...s.getPropagationContext(),
                                ...n.getPropagationContext()
                            }, d = i ? Ge(i) : Ue(a, c, u), p = je(l || (i ? Qe(i) : Ke(a, t, n))), h = r.headers || ("undefined" != typeof Request && F(e, Request) ? e.headers : void 0);
                            if (h) {
                                if ("undefined" != typeof Headers && F(h, Headers)) {
                                    const e = new Headers(h);
                                    return e.append("sentry-trace", d), p && e.append(Le, p), e;
                                }
                                if (Array.isArray(h)) {
                                    const e = [ ...h, [ "sentry-trace", d ] ];
                                    return p && e.push([ Le, p ]), e;
                                }
                                {
                                    const e = "baggage" in h ? h.baggage : void 0, t = [];
                                    return Array.isArray(e) ? t.push(...e) : e && t.push(e), p && t.push(p), {
                                        ...h,
                                        "sentry-trace": d,
                                        baggage: t.length > 0 ? t.join(",") : void 0
                                    };
                                }
                            }
                            return {
                                "sentry-trace": d,
                                baggage: p
                            };
                        }(t, a, s, n, p);
                    }
                    return p;
                }(e, a, c, u);
                if (t) {
                    const n = jh(e.fetchData.url), r = n ? Jr(n).host : void 0;
                    t.setAttributes({
                        "http.url": n,
                        "server.address": r
                    });
                }
                s && t && Ph(t);
            })), n && Hr((e => {
                const t = function(e, t, n, r) {
                    const o = e.xhr, i = o && o[Br];
                    if (!Hi() || !o || o.__sentry_own_request__ || !i) return;
                    const s = t(i.url);
                    if (e.endTimestamp && s) {
                        const e = o.__sentry_xhr_span_id__;
                        if (!e) return;
                        const t = r[e];
                        return void (t && void 0 !== i.status_code && (os(t, i.status_code), t.end(), delete r[e]));
                    }
                    const a = Kt(), c = pt(), u = jh(i.url), l = u ? Jr(u).host : void 0, d = s ? Wi({
                        name: `${i.method} ${i.url}`,
                        onlyIfParent: !0,
                        attributes: {
                            type: "xhr",
                            "http.method": i.method,
                            "http.url": u,
                            url: i.url,
                            "server.address": l,
                            [Ni]: "auto.http.browser"
                        },
                        op: "http.client"
                    }) : void 0;
                    d && (o.__sentry_xhr_span_id__ = d.spanContext().spanId, r[o.__sentry_xhr_span_id__] = d);
                    const p = Jt();
                    if (o.setRequestHeader && n(i.url) && p) {
                        const {traceId: e, spanId: t, sampled: n, dsc: r} = {
                            ...c.getPropagationContext(),
                            ...a.getPropagationContext()
                        };
                        !function(e, t, n) {
                            try {
                                e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(Le, n);
                            } catch (e) {}
                        }(o, d ? Ge(d) : Ue(e, t, n), je(r || (d ? Qe(d) : Ke(e, p, a))));
                    }
                    return d;
                }(e, a, c, u);
                s && t && Ph(t);
            }));
        }
        function Ph(e) {
            const {url: t} = Je(e).data || {};
            if (!t || "string" != typeof t) return;
            const n = fa("resource", (({entries: r}) => {
                r.forEach((r => {
                    (function(e) {
                        return "resource" === e.entryType && "initiatorType" in e && "string" == typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType);
                    })(r) && r.name.endsWith(t) && (function(e) {
                        const {name: t, version: n} = function(e) {
                            let t = "unknown", n = "unknown", r = "";
                            for (const o of e) {
                                if ("/" === o) {
                                    [t, n] = e.split("/");
                                    break;
                                }
                                if (!isNaN(Number(o))) {
                                    t = "h" === r ? "http" : r, n = e.split(r)[1];
                                    break;
                                }
                                r += o;
                            }
                            return r === e && (t = r), {
                                name: t,
                                version: n
                            };
                        }(e.nextHopProtocol), r = [];
                        return r.push([ "network.protocol.version", n ], [ "network.protocol.name", t ]), 
                        Ie ? [ ...r, [ "http.request.redirect_start", $h(e.redirectStart) ], [ "http.request.fetch_start", $h(e.fetchStart) ], [ "http.request.domain_lookup_start", $h(e.domainLookupStart) ], [ "http.request.domain_lookup_end", $h(e.domainLookupEnd) ], [ "http.request.connect_start", $h(e.connectStart) ], [ "http.request.secure_connection_start", $h(e.secureConnectionStart) ], [ "http.request.connection_end", $h(e.connectEnd) ], [ "http.request.request_start", $h(e.requestStart) ], [ "http.request.response_start", $h(e.responseStart) ], [ "http.request.response_end", $h(e.responseEnd) ] ] : r;
                    }(r).forEach((t => e.setAttribute(...t))), setTimeout(n));
                }));
            }));
        }
        function $h(e = 0) {
            return ((Ie || performance.timeOrigin) + e) / 1e3;
        }
        function jh(e) {
            try {
                return new URL(e, Ns.location.origin).href;
            } catch (e) {
                return;
            }
        }
        const Fh = {
            ...cs,
            markBackgroundTransactions: !0,
            routingInstrumentation: function(e, t = !0, n = !0) {
                if (!Ns || !Ns.location) return void (Ls && E.warn("Could not initialize routing instrumentation due to invalid location"));
                let r, o = Ns.location.href;
                t && (r = e({
                    name: Ns.location.pathname,
                    startTimestamp: Ie ? Ie / 1e3 : void 0,
                    op: "pageload",
                    origin: "auto.pageload.browser",
                    metadata: {
                        source: "url"
                    }
                })), n && qn((({to: t, from: n}) => {
                    void 0 === n && o && -1 !== o.indexOf(t) ? o = void 0 : n !== t && (o = void 0, 
                    r && (Ls && E.log(`[Tracing] Finishing current transaction with op: ${r.op}`), r.end()), 
                    r = e({
                        name: Ns.location.pathname,
                        op: "navigation",
                        origin: "auto.navigation.browser",
                        metadata: {
                            source: "url"
                        }
                    }));
                }));
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            enableInp: !1,
            interactionsSampleRate: 1,
            _experiments: {},
            ...Dh
        };
        class Bh {
            constructor(e) {
                this.name = "BrowserTracing", this._hasSetTracePropagationTargets = !1, ys(), Ls && (this._hasSetTracePropagationTargets = !(!e || !e.tracePropagationTargets && !e.tracingOrigins)), 
                this.options = {
                    ...Fh,
                    ...e
                }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), 
                e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), 
                this._collectWebVitals = kh(), this._interactionIdToRouteNameMapping = {}, this.options.enableInp && Ch(this._interactionIdToRouteNameMapping, this.options.interactionsSampleRate), 
                this.options.enableLongTask && Th(), this.options._experiments.enableInteractions && Eh(), 
                this._latestRoute = {
                    name: void 0,
                    context: void 0
                };
            }
            setupOnce(e, t) {
                this._getCurrentHub = t;
                const n = t().getClient(), r = n && n.getOptions(), {routingInstrumentation: o, startTransactionOnLocationChange: i, startTransactionOnPageLoad: s, markBackgroundTransactions: a, traceFetch: c, traceXHR: u, shouldCreateSpanForRequest: l, enableHTTPTimings: d, _experiments: p} = this.options, h = r && r.tracePropagationTargets, f = h || this.options.tracePropagationTargets;
                Ls && this._hasSetTracePropagationTargets && h && E.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), 
                o((e => {
                    const n = this._createRouteTransaction(e);
                    return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t), 
                    n;
                }), s, i), a && hh(), p.enableInteractions && this._registerInteractionListener(), 
                this.options.enableInp && this._registerInpInteractionListener(), Nh({
                    traceFetch: c,
                    traceXHR: u,
                    tracePropagationTargets: f,
                    shouldCreateSpanForRequest: l,
                    enableHTTPTimings: d
                });
            }
            _createRouteTransaction(e) {
                if (!this._getCurrentHub) return void (Ls && E.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`));
                const t = this._getCurrentHub(), {beforeNavigate: n, idleTimeout: r, finalTimeout: o, heartbeatInterval: i} = this.options, s = "pageload" === e.op;
                let a;
                if (s) {
                    const t = s ? Hh("sentry-trace") : "", n = s ? Hh("baggage") : void 0, {traceId: r, dsc: o, parentSpanId: i, sampled: c} = qe(t, n);
                    a = {
                        traceId: r,
                        parentSpanId: i,
                        parentSampled: c,
                        ...e,
                        metadata: {
                            ...e.metadata,
                            dynamicSamplingContext: o
                        },
                        trimEnd: !0
                    };
                } else a = {
                    trimEnd: !0,
                    ...e
                };
                const c = "function" == typeof n ? n(a) : a, u = void 0 === c ? {
                    ...a,
                    sampled: !1
                } : c;
                u.metadata = u.name !== a.name ? {
                    ...u.metadata,
                    source: "custom"
                } : u.metadata, this._latestRoute.name = u.name, this._latestRoute.context = u, 
                !1 === u.sampled && Ls && E.log(`[Tracing] Will not send ${u.op} transaction because of beforeNavigate.`), 
                Ls && E.log(`[Tracing] Starting ${u.op} transaction on scope`);
                const {location: l} = Ns, d = gs(t, u, r, o, !0, {
                    location: l
                }, i, s);
                return s && Ns.document && (Ns.document.addEventListener("readystatechange", (() => {
                    [ "interactive", "complete" ].includes(Ns.document.readyState) && d.sendAutoFinishSignal();
                })), [ "interactive", "complete" ].includes(Ns.document.readyState) && d.sendAutoFinishSignal()), 
                d.registerBeforeFinishCallback((e => {
                    this._collectWebVitals(), Rh(e);
                })), d;
            }
            _registerInteractionListener() {
                let e;
                const t = () => {
                    const {idleTimeout: t, finalTimeout: n, heartbeatInterval: r} = this.options, o = "ui.action.click", i = Pi();
                    if (i && i.op && [ "navigation", "pageload" ].includes(i.op)) return void (Ls && E.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`));
                    if (e && (e.setFinishReason("interactionInterrupted"), e.end(), e = void 0), !this._getCurrentHub) return void (Ls && E.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`));
                    if (!this._latestRoute.name) return void (Ls && E.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`));
                    const s = this._getCurrentHub(), {location: a} = Ns, c = {
                        name: this._latestRoute.name,
                        op: o,
                        trimEnd: !0,
                        data: {
                            [Ai]: this._latestRoute.context ? qh(this._latestRoute.context) : "url"
                        }
                    };
                    e = gs(s, c, t, n, !0, {
                        location: a
                    }, r);
                };
                [ "click" ].forEach((e => {
                    Ns.document && addEventListener(e, t, {
                        once: !1,
                        capture: !0
                    });
                }));
            }
            _registerInpInteractionListener() {
                const e = ({entries: e}) => {
                    const t = Jt(), n = void 0 !== t && void 0 !== t.getIntegrationByName ? t.getIntegrationByName("Replay") : void 0, r = void 0 !== n ? n.getReplayId() : void 0, o = Pi(), i = Kt(), s = void 0 !== i ? i.getUser() : void 0;
                    e.forEach((e => {
                        if (function(e) {
                            return "duration" in e;
                        }(e)) {
                            const t = e.interactionId;
                            if (void 0 === t) return;
                            const n = this._interactionIdToRouteNameMapping[t], i = e.duration, a = e.startTime, c = Object.keys(this._interactionIdToRouteNameMapping), u = c.length > 0 ? c.reduce(((e, t) => this._interactionIdToRouteNameMapping[e].duration < this._interactionIdToRouteNameMapping[t].duration ? e : t)) : void 0;
                            if ("first-input" === e.entryType && c.map((e => this._interactionIdToRouteNameMapping[e])).some((e => e.duration === i && e.startTime === a))) return;
                            if (!t) return;
                            if (n) n.duration = Math.max(n.duration, i); else if (c.length < 10 || void 0 === u || i > this._interactionIdToRouteNameMapping[u].duration) {
                                const e = this._latestRoute.name, n = this._latestRoute.context;
                                e && n && (u && Object.keys(this._interactionIdToRouteNameMapping).length >= 10 && delete this._interactionIdToRouteNameMapping[u], 
                                this._interactionIdToRouteNameMapping[t] = {
                                    routeName: e,
                                    duration: i,
                                    parentContext: n,
                                    user: s,
                                    activeTransaction: o,
                                    replayId: r,
                                    startTime: a
                                });
                            }
                        }
                    }));
                };
                fa("event", e), fa("first-input", e);
            }
        }
        function Hh(e) {
            const t = G(`meta[name=${e}]`);
            return t ? t.getAttribute("content") : void 0;
        }
        function qh(e) {
            const t = e.attributes && e.attributes[Ai], n = e.data && e.data[Ai], r = e.metadata && e.metadata.source;
            return t || n || r;
        }
        const Uh = {
            ...cs,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableInp: !1,
            interactionsSampleRate: 1,
            _experiments: {},
            ...Dh
        }, zh = (e = {}) => {
            const t = !(!Ls || !e.tracePropagationTargets && !e.tracingOrigins);
            ys(), !e.tracePropagationTargets && e.tracingOrigins && (e.tracePropagationTargets = e.tracingOrigins);
            const n = {
                ...Uh,
                ...e
            }, r = kh(), o = {};
            n.enableInp && Ch(o, n.interactionsSampleRate), n.enableLongTask && Th(), n._experiments.enableInteractions && Eh();
            const i = {
                name: void 0,
                context: void 0
            };
            function s(e) {
                const t = dt(), {beforeStartSpan: o, idleTimeout: s, finalTimeout: a, heartbeatInterval: c} = n, u = "pageload" === e.op;
                let l;
                if (u) {
                    const t = u ? Vh("sentry-trace") : "", n = u ? Vh("baggage") : void 0, {traceId: r, dsc: o, parentSpanId: i, sampled: s} = qe(t, n);
                    l = {
                        traceId: r,
                        parentSpanId: i,
                        parentSampled: s,
                        ...e,
                        metadata: {
                            ...e.metadata,
                            dynamicSamplingContext: o
                        },
                        trimEnd: !0
                    };
                } else l = {
                    trimEnd: !0,
                    ...e
                };
                const d = o ? o(l) : l;
                d.metadata = d.name !== l.name ? {
                    ...d.metadata,
                    source: "custom"
                } : d.metadata, i.name = d.name, i.context = d, !1 === d.sampled && Ls && E.log(`[Tracing] Will not send ${d.op} transaction because of beforeNavigate.`), 
                Ls && E.log(`[Tracing] Starting ${d.op} transaction on scope`);
                const {location: p} = Ns, h = gs(t, d, s, a, !0, {
                    location: p
                }, c, u);
                return u && Ns.document && (Ns.document.addEventListener("readystatechange", (() => {
                    [ "interactive", "complete" ].includes(Ns.document.readyState) && h.sendAutoFinishSignal();
                })), [ "interactive", "complete" ].includes(Ns.document.readyState) && h.sendAutoFinishSignal()), 
                h.registerBeforeFinishCallback((e => {
                    r(), Rh(e);
                })), h;
            }
            return {
                name: "BrowserTracing",
                setupOnce: () => {},
                afterAllSetup(e) {
                    const r = e.getOptions(), {markBackgroundSpan: a, traceFetch: c, traceXHR: u, shouldCreateSpanForRequest: l, enableHTTPTimings: d, _experiments: p} = n, h = r && r.tracePropagationTargets, f = h || n.tracePropagationTargets;
                    let m;
                    Ls && t && h && E.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
                    let g = Ns.location && Ns.location.href;
                    if (e.on && (e.on("startNavigationSpan", (e => {
                        m && (Ls && E.log(`[Tracing] Finishing current transaction with op: ${Je(m).op}`), 
                        m.end()), m = s({
                            op: "navigation",
                            ...e
                        });
                    })), e.on("startPageLoadSpan", (e => {
                        m && (Ls && E.log(`[Tracing] Finishing current transaction with op: ${Je(m).op}`), 
                        m.end()), m = s({
                            op: "pageload",
                            ...e
                        });
                    }))), n.instrumentPageLoad && e.emit && Ns.location) {
                        const t = {
                            name: Ns.location.pathname,
                            startTimestamp: Ie ? Ie / 1e3 : void 0,
                            origin: "auto.pageload.browser",
                            attributes: {
                                [Ai]: "url"
                            }
                        };
                        Wh(e, t);
                    }
                    n.instrumentNavigation && e.emit && Ns.location && qn((({to: t, from: n}) => {
                        if (void 0 === n && g && -1 !== g.indexOf(t)) g = void 0; else if (n !== t) {
                            g = void 0;
                            const t = {
                                name: Ns.location.pathname,
                                origin: "auto.navigation.browser",
                                attributes: {
                                    [Ai]: "url"
                                }
                            };
                            Gh(e, t);
                        }
                    })), a && hh(), p.enableInteractions && function(e, t) {
                        let n;
                        const r = () => {
                            const {idleTimeout: r, finalTimeout: o, heartbeatInterval: i} = e, s = "ui.action.click", a = Pi();
                            if (a && a.op && [ "navigation", "pageload" ].includes(a.op)) return void (Ls && E.warn(`[Tracing] Did not create ${s} transaction because a pageload or navigation transaction is in progress.`));
                            if (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !t.name) return void (Ls && E.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`));
                            const {location: c} = Ns, u = {
                                name: t.name,
                                op: s,
                                trimEnd: !0,
                                data: {
                                    [Ai]: t.context ? Jh(t.context) : "url"
                                }
                            };
                            n = gs(dt(), u, r, o, !0, {
                                location: c
                            }, i);
                        };
                        [ "click" ].forEach((e => {
                            Ns.document && addEventListener(e, r, {
                                once: !1,
                                capture: !0
                            });
                        }));
                    }(n, i), n.enableInp && function(e, t) {
                        const n = ({entries: n}) => {
                            const r = Jt(), o = void 0 !== r && void 0 !== r.getIntegrationByName ? r.getIntegrationByName("Replay") : void 0, i = void 0 !== o ? o.getReplayId() : void 0, s = Pi(), a = Kt(), c = void 0 !== a ? a.getUser() : void 0;
                            n.forEach((n => {
                                if (function(e) {
                                    return "duration" in e;
                                }(n)) {
                                    const r = n.interactionId;
                                    if (void 0 === r) return;
                                    const o = e[r], a = n.duration, u = n.startTime, l = Object.keys(e), d = l.length > 0 ? l.reduce(((t, n) => e[t].duration < e[n].duration ? t : n)) : void 0;
                                    if ("first-input" === n.entryType && l.map((t => e[t])).some((e => e.duration === a && e.startTime === u))) return;
                                    if (!r) return;
                                    if (o) o.duration = Math.max(o.duration, a); else if (l.length < Yh || void 0 === d || a > e[d].duration) {
                                        const n = t.name, o = t.context;
                                        n && o && (d && Object.keys(e).length >= Yh && delete e[d], e[r] = {
                                            routeName: n,
                                            duration: a,
                                            parentContext: o,
                                            user: c,
                                            activeTransaction: s,
                                            replayId: i,
                                            startTime: u
                                        });
                                    }
                                }
                            }));
                        };
                        fa("event", n), fa("first-input", n);
                    }(o, i), Nh({
                        traceFetch: c,
                        traceXHR: u,
                        tracePropagationTargets: f,
                        shouldCreateSpanForRequest: l,
                        enableHTTPTimings: d
                    });
                },
                options: n
            };
        };
        function Wh(e, t) {
            if (!e.emit) return;
            e.emit("startPageLoadSpan", t);
            const n = Gi();
            return "pageload" === (n && Je(n).op) ? n : void 0;
        }
        function Gh(e, t) {
            if (!e.emit) return;
            e.emit("startNavigationSpan", t);
            const n = Gi();
            return "navigation" === (n && Je(n).op) ? n : void 0;
        }
        function Vh(e) {
            const t = G(`meta[name=${e}]`);
            return t ? t.getAttribute("content") : void 0;
        }
        const Yh = 10;
        function Jh(e) {
            const t = e.attributes && e.attributes[Ai], n = e.data && e.data[Ai], r = e.metadata && e.metadata.source;
            return t || n || r;
        }
        function Zh(e, t) {
            me && E.info(`[Offline]: ${e}`, t);
        }
        function ef(e) {
            return t => {
                const n = e(t), r = t.createStore ? t.createStore(t) : void 0;
                let o, i = 5e3;
                function s(e, n, r) {
                    return o = [ "replay_event", "replay_recording", "client_report" ], !Gn(e, ((e, t) => o.includes(t))) && (!t.shouldStore || t.shouldStore(e, n, r));
                    var o;
                }
                function a(e) {
                    r && (o && clearTimeout(o), o = setTimeout((async () => {
                        o = void 0;
                        const e = await r.pop();
                        e && (Zh("Attempting to send previously queued event"), u(e).catch((e => {
                            Zh("Failed to retry sending", e);
                        })));
                    }), e), "number" != typeof o && o.unref && o.unref());
                }
                function c() {
                    o || (a(i), i = Math.min(2 * i, 36e5));
                }
                async function u(e) {
                    try {
                        const t = await n.send(e);
                        let r = 100;
                        if (t) if (t.headers && t.headers["retry-after"]) r = ri(t.headers["retry-after"]); else if ((t.statusCode || 0) >= 400) return t;
                        return a(r), i = 5e3, t;
                    } catch (t) {
                        if (r && await s(e, t, i)) return await r.insert(e), c(), Zh("Error sending. Event queued", t), 
                        {};
                        throw t;
                    }
                }
                return t.flushAtStartup && c(), {
                    send: u,
                    flush: e => n.flush(e)
                };
            };
        }
        function tf(e) {
            return new Promise(((t, n) => {
                e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error);
            }));
        }
        function nf(e) {
            return tf(e.getAllKeys());
        }
        function rf(e) {
            let t;
            function n() {
                return null == t && (t = function(e, t) {
                    const n = indexedDB.open(e);
                    n.onupgradeneeded = () => n.result.createObjectStore(t);
                    const r = tf(n);
                    return e => r.then((n => e(n.transaction(t, "readwrite").objectStore(t))));
                }(e.dbName || "sentry-offline", e.storeName || "queue")), t;
            }
            return {
                insert: async t => {
                    try {
                        const r = await Yn(t, e.textEncoder);
                        await function(e, t, n) {
                            return e((e => nf(e).then((r => {
                                if (!(r.length >= n)) return e.put(t, Math.max(...r, 0) + 1), tf(e.transaction);
                            }))));
                        }(n(), r, e.maxQueueSize || 30);
                    } catch (e) {}
                },
                pop: async () => {
                    try {
                        const t = await function(e) {
                            return e((e => nf(e).then((t => {
                                if (0 !== t.length) return tf(e.get(t[0])).then((n => (e.delete(t[0]), tf(e.transaction).then((() => n)))));
                            }))));
                        }(n());
                        if (t) return function(e, t, n) {
                            let r = "string" == typeof e ? t.encode(e) : e;
                            function o(e) {
                                const t = r.subarray(0, e);
                                return r = r.subarray(e + 1), t;
                            }
                            function i() {
                                let e = r.indexOf(10);
                                return e < 0 && (e = r.length), JSON.parse(n.decode(o(e)));
                            }
                            const s = i(), a = [];
                            for (;r.length; ) {
                                const e = i(), t = "number" == typeof e.length ? e.length : void 0;
                                a.push([ e, t ? o(t) : i() ]);
                            }
                            return [ s, a ];
                        }(t, e.textEncoder || new TextEncoder, e.textDecoder || new TextDecoder);
                    } catch (e) {}
                }
            };
        }
        function of(e) {
            return function(e) {
                return t => e({
                    ...t,
                    createStore: rf
                });
            }(ef(e));
        }
        const af = String(0);
        let uf = "", lf = "", df = "", pf = wr.navigator && wr.navigator.userAgent || "", hf = "";
        const ff = wr.navigator && wr.navigator.language || wr.navigator && wr.navigator.languages && wr.navigator.languages[0] || "", mf = wr.navigator && wr.navigator.userAgentData;
        var gf;
        function vf(e, t, n, r) {
            if ("transaction" !== r.type) throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
            if (null == n) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
            const o = function(e) {
                const t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
                return "string" == typeof t && 32 !== t.length && pr && E.log(`[Profiling] Invalid traceId: ${t} on profiled event`), 
                "string" != typeof t ? "" : t;
            }(r), i = function(e) {
                return function(e) {
                    return !("thread_metadata" in e);
                }(e) ? function(e) {
                    let t, n = 0;
                    const r = {
                        samples: [],
                        stacks: [],
                        frames: [],
                        thread_metadata: {
                            [af]: {
                                name: "main"
                            }
                        }
                    };
                    if (!e.samples.length) return r;
                    const o = e.samples[0].timestamp, i = "number" == typeof performance.timeOrigin ? performance.timeOrigin : Ie || 0, s = i - (Ie || i);
                    for (let i = 0; i < e.samples.length; i++) {
                        const a = e.samples[i];
                        if (void 0 === a.stackId) {
                            void 0 === t && (t = n, r.stacks[t] = [], n++), r.samples[i] = {
                                elapsed_since_start_ns: (1e6 * (a.timestamp + s - o)).toFixed(0),
                                stack_id: t,
                                thread_id: af
                            };
                            continue;
                        }
                        let c = e.stacks[a.stackId];
                        const u = [];
                        for (;c; ) {
                            u.push(c.frameId);
                            const t = e.frames[c.frameId];
                            void 0 === r.frames[c.frameId] && (r.frames[c.frameId] = {
                                function: t.name,
                                abs_path: "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                lineno: t.line,
                                colno: t.column
                            }), c = void 0 === c.parentId ? void 0 : e.stacks[c.parentId];
                        }
                        const l = {
                            elapsed_since_start_ns: (1e6 * (a.timestamp + s - o)).toFixed(0),
                            stack_id: n,
                            thread_id: af
                        };
                        r.stacks[n] = u, r.samples[i] = l, n++;
                    }
                    return r;
                }(e) : e;
            }(n), s = t || ("number" == typeof r.start_timestamp ? 1e3 * r.start_timestamp : Date.now()), a = "number" == typeof r.timestamp ? 1e3 * r.timestamp : Date.now();
            return {
                event_id: e,
                timestamp: new Date(s).toISOString(),
                platform: "javascript",
                version: "1",
                release: r.release || "",
                environment: r.environment || we,
                runtime: {
                    name: "javascript",
                    version: wr.navigator.userAgent
                },
                os: {
                    name: uf,
                    version: lf,
                    build_number: pf
                },
                device: {
                    locale: ff,
                    model: hf,
                    manufacturer: pf,
                    architecture: df,
                    is_emulator: !1
                },
                debug_meta: {
                    images: Sf(n.resources)
                },
                profile: i,
                transactions: [ {
                    name: r.transaction || "",
                    id: r.event_id || ce(),
                    trace_id: o,
                    active_thread_id: af,
                    relative_start_ns: "0",
                    relative_end_ns: (1e6 * (a - s)).toFixed(0)
                } ]
            };
        }
        function _f(e) {
            return "pageload" === e.op;
        }
        "object" == typeof (gf = mf) && null !== gf && "getHighEntropyValues" in gf && mf.getHighEntropyValues([ "architecture", "model", "platform", "platformVersion", "fullVersionList" ]).then((e => {
            if (uf = e.platform || "", df = e.architecture || "", hf = e.model || "", lf = e.platformVersion || "", 
            e.fullVersionList && e.fullVersionList.length > 0) {
                const t = e.fullVersionList[e.fullVersionList.length - 1];
                pf = `${t.brand} ${t.version}`;
            }
        })).catch((e => {}));
        const bf = new WeakMap;
        function Sf(e) {
            const t = b._sentryDebugIds;
            if (!t) return [];
            const n = Jt(), r = n && n.getOptions(), o = r && r.stackParser;
            if (!o) return [];
            let i;
            const s = bf.get(o);
            s ? i = s : (i = new Map, bf.set(o, i));
            const a = Object.keys(t).reduce(((e, n) => {
                let r;
                const s = i.get(n);
                s ? r = s : (r = o(n), i.set(n, r));
                for (let o = r.length - 1; o >= 0; o--) {
                    const i = r[o], s = i && i.filename;
                    if (i && s) {
                        e[s] = t[n];
                        break;
                    }
                }
                return e;
            }), {}), c = [];
            for (const t of e) t && a[t] && c.push({
                type: "sourcemap",
                code_file: t,
                debug_id: a[t]
            });
            return c;
        }
        let xf = !1;
        function kf(e) {
            if (xf) return pr && E.log("[Profiling] Profiling has been disabled for the duration of the current user session."), 
            !1;
            if (!e.isRecording()) return pr && E.log("[Profiling] Discarding profile because transaction was not sampled."), 
            !1;
            const t = Jt(), n = t && t.getOptions();
            if (!n) return pr && E.log("[Profiling] Profiling disabled, no options found."), 
            !1;
            const r = n.profilesSampleRate;
            return ("number" != typeof (o = r) && "boolean" != typeof o || "number" == typeof o && isNaN(o) ? (pr && E.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), 
            0) : !0 === o || !1 === o || !(o < 0 || o > 1) || (pr && E.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${o}.`), 
            0)) ? r ? !!(!0 === r || Math.random() < r) || (pr && E.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), 
            !1) : (pr && E.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), 
            !1) : (pr && E.warn("[Profiling] Discarding profile because of invalid sample rate."), 
            !1);
            var o;
        }
        function Tf(e, t, n, r) {
            return function(e) {
                return e.samples.length < 2 ? (pr && E.log("[Profiling] Discarding profile because it contains less than 2 samples"), 
                !1) : !!e.frames.length || (pr && E.log("[Profiling] Discarding profile because it contains no frames"), 
                !1);
            }(n) ? vf(e, t, n, r) : null;
        }
        const Ef = new Map;
        function Cf(e) {
            const t = Ef.get(e);
            return t && Ef.delete(e), t;
        }
        function If(e) {
            return e ? kf(e) ? Rf(e) : e : (pr && E.log("[Profiling] Transaction is undefined, skipping profiling"), 
            e);
        }
        function Rf(e) {
            let t;
            _f(e) && (t = 1e3 * Ee());
            const n = function() {
                const e = wr.Profiler;
                if ("function" != typeof e) return void (pr && E.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."));
                const t = Math.floor(3e3);
                try {
                    return new e({
                        sampleInterval: 10,
                        maxBufferSize: t
                    });
                } catch (e) {
                    pr && (E.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), 
                    E.log("[Profiling] Disabling profiling for current user session.")), xf = !0;
                }
            }();
            if (!n) return e;
            pr && E.log(`[Profiling] started profiling transaction: ${Je(e).description}`);
            const r = ce();
            async function o() {
                return e && n ? n.stop().then((t => (i && (wr.clearTimeout(i), i = void 0), pr && E.log(`[Profiling] stopped profiling of transaction: ${Je(e).description}`), 
                t ? (function(e, t) {
                    if (Ef.set(e, t), Ef.size > 30) {
                        const e = Ef.keys().next().value;
                        Ef.delete(e);
                    }
                }(r, t), null) : (pr && E.log(`[Profiling] profiler returned null profile for: ${Je(e).description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), 
                null)))).catch((e => (pr && E.log("[Profiling] error while stopping profiler:", e), 
                null))) : null;
            }
            let i = wr.setTimeout((() => {
                pr && E.log("[Profiling] max profile duration elapsed, stopping profiling for:", Je(e).description), 
                o();
            }), 3e4);
            const s = e.end.bind(e);
            return e.end = function() {
                return e ? (o().then((() => {
                    e.setContext("profile", {
                        profile_id: r,
                        start_timestamp: t
                    }), s();
                }), (() => {
                    s();
                })), e) : s();
            }, e;
        }
        const Mf = "BrowserProfiling", Of = () => ({
            name: Mf,
            setupOnce() {},
            setup(e) {
                const t = Kt().getTransaction();
                t && _f(t) && kf(t) && Rf(t), "function" == typeof e.on ? (e.on("startTransaction", (e => {
                    kf(e) && Rf(e);
                })), e.on("beforeEnvelope", (e => {
                    if (!Ef.size) return;
                    const t = function(e) {
                        const t = [];
                        return Gn(e, ((e, n) => {
                            if ("transaction" === n) for (let n = 1; n < e.length; n++) {
                                const r = e[n];
                                r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && t.push(e[n]);
                            }
                        })), t;
                    }(e);
                    if (!t.length) return;
                    const n = [];
                    for (const e of t) {
                        const t = e && e.contexts, r = t && t.profile && t.profile.profile_id, o = t && t.profile && t.profile.start_timestamp;
                        if ("string" != typeof r) {
                            pr && E.log("[Profiling] cannot find profile for a transaction without a profile context");
                            continue;
                        }
                        if (!r) {
                            pr && E.log("[Profiling] cannot find profile for a transaction without a profile context");
                            continue;
                        }
                        t && t.profile && delete t.profile;
                        const i = Cf(r);
                        if (!i) {
                            pr && E.log(`[Profiling] Could not retrieve profile for transaction: ${r}`);
                            continue;
                        }
                        const s = Tf(r, o, i, e);
                        s && n.push(s);
                    }
                    !function(e, t) {
                        if (!t.length) return e;
                        for (const n of t) e[1].push([ {
                            type: "profile"
                        }, n ]);
                    }(e, n);
                }))) : E.warn("[Profiling] Client does not support hooks, profiling will be disabled");
            }
        }), Af = cn(Mf, Of);
        let Lf = {};
        wr.Sentry && wr.Sentry.Integrations && (Lf = wr.Sentry.Integrations);
        const Df = {
            ...Lf,
            ...Ti,
            ...t
        };
        function Nf(e) {
            return (Nf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
        }
        function Pf() {
            Pf = function() {
                return e;
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
                e[t] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t];
            }
            try {
                c({}, "");
            } catch (e) {
                c = function(e, t, n) {
                    return e[t] = n;
                };
            }
            function u(e, t, n, o) {
                var i = t && t.prototype instanceof p ? t : p, s = Object.create(i.prototype), a = new T(o || []);
                return r(s, "_invoke", {
                    value: S(e, n, a)
                }), s;
            }
            function l(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    };
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    };
                }
            }
            e.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(E([])));
            y && y !== t && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function _(e) {
                [ "next", "throw", "return" ].forEach((function(t) {
                    c(e, t, (function(e) {
                        return this._invoke(t, e);
                    }));
                }));
            }
            function b(e, t) {
                function o(r, i, s, a) {
                    var c = l(e[r], e, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == Nf(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            o("next", e, s, a);
                        }), (function(e) {
                            o("throw", e, s, a);
                        })) : t.resolve(d).then((function(e) {
                            u.value = e, s(u);
                        }), (function(e) {
                            return o("throw", e, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(e, n) {
                        function r() {
                            return new t((function(t, r) {
                                o(e, n, t, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function S(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = x(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(e, t, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function x(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", 
                t.arg = void 0, x(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", 
                t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", 
                t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), 
                t.delegate = null, d);
            }
            function w(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                this.tryEntries.push(t);
            }
            function k(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function T(e) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], e.forEach(w, this), this.reset(!0);
            }
            function E(e) {
                if (e) {
                    var t = e[i];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function t() {
                            for (;++r < e.length; ) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: C
                };
            }
            function C() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, c(e, a, "GeneratorFunction")), 
                e.prototype = Object.create(v), e;
            }, e.awrap = function(e) {
                return {
                    __await: e
                };
            }, _(b.prototype), c(b.prototype, s, (function() {
                return this;
            })), e.AsyncIterator = b, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new b(u(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                    return e.done ? e.value : s.next();
                }));
            }, _(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), e.keys = function(e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e;
                    }
                    return e.done = !0, e;
                };
            }, e.values = E, T.prototype = {
                constructor: T,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                    this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                    d;
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: E(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, e;
        }
        function $f(e, t, n, r, o, i, s) {
            try {
                var a = e[i](s), c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(r, o);
        }
        function jf(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, (void 0, i = function(e, t) {
                    if ("object" !== Nf(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t);
                        if ("object" !== Nf(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(r.key, "string"), "symbol" === Nf(i) ? i : String(i)), r);
            }
            var i;
        }
        mi({
            dsn: "https://6efc3248194043519dda09fb559a5c56@kent.adblox.org/48",
            release: chrome.runtime.getManifest().version,
            beforeBreadcrumb: function(e, t) {
                return null;
            },
            integrations: function(e) {
                return e.filter((function(e) {
                    return "Breadcrumbs" !== e.name && "Dedupe" !== e.name && "OfflineStore" !== e.name;
                }));
            },
            sampleRate: .1,
            beforeSend: function(e, t) {
                var n = t.originalException;
                return n && "The browser is shutting down" === n.message ? null : e;
            }
        }), r.setTag("context", "options-js");
        var Ff = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this, e), this.$menu_item = i()(".menu_item"), this.$auto_refresh = i()("#auto_refresh"), 
                this.$item_pointer = i()(".item_pointer"), this.$back_btn = i()("#back_btn"), this.$opt = i()("#opt"), 
                this.$comp = i()("#comp"), this.$advanced_tab = i()(".advanced_tab"), this.$about_us_tab = i()(".about_us_tab"), 
                this.$first_allowlist = i()(".first_allowlist"), this.$second_allowlist = i()(".second_allowlist"), 
                this.$import = i()(".import"), this.$export = i()(".export"), this.$save = i()(".save"), 
                this.$back_btn = i()(".back_btn p"), this.$user_rules_first = i()(".user_rules_first"), 
                this.$user_rules_second = i()(".user_rules_second"), this.$user_rules_head_text = i()(".user_rules_head_text"), 
                this.$add_user_rule = i()(".add_user_rule"), this.$user_rules_count_warning = i()(".user_rules_count_warning"), 
                this.$usl_modal_subtitle = i()(".usl_modal_subtitle"), this.$pp = i()(".pp"), this.$terms = i()(".terms"), 
                this.$offic_website = i()(".offic_website"), this.$textarea = i()(".user_rules_modal textarea")[0], 
                this.userSettings = {}, this.rulesetMap = new Map, this.initMessageListener(), this.getTheme(), 
                this.getLocalization(), this.initClickLitener();
            }
            var t, n, o, s;
            return t = e, (n = [ {
                key: "initMessageListener",
                value: function() {
                    var e = this;
                    d.runtime.sendMessage({
                        type: "iAmReady"
                    }, (function(t) {
                        "userrules" === t ? (i()(".general").css("display", "none"), i()(".user_rules").css("display", "block"), 
                        i()(".back_btn").css("display", "flex"), e.renderUserRules()) : "allowlist" === t && (i()(".general").css("display", "none"), 
                        i()(".allowlist").css("display", "block"), i()(".back_btn").css("display", "flex"), 
                        e.getAllowList());
                    }));
                }
            }, {
                key: "getTheme",
                value: function() {
                    var e = this;
                    f("darkTheme").then((function(t) {
                        e.applyTheme(t);
                    }));
                }
            }, {
                key: "getLocalization",
                value: function() {
                    this.$advanced_tab.text(chrome.i18n.getMessage("advanced_settings")), this.$about_us_tab.text(chrome.i18n.getMessage("about_us")), 
                    this.$first_allowlist.text(chrome.i18n.getMessage("allowlist")), this.$second_allowlist.text(chrome.i18n.getMessage("does_not_filter_from")), 
                    this.$import.text(chrome.i18n.getMessage("import")), this.$export.text(chrome.i18n.getMessage("export")), 
                    this.$save.text(chrome.i18n.getMessage("save")), this.$back_btn.text(chrome.i18n.getMessage("back")), 
                    this.$user_rules_first.text(chrome.i18n.getMessage("user_rules")), this.$user_rules_second.text(chrome.i18n.getMessage("add_custom_user_rules")), 
                    this.$user_rules_head_text.text(chrome.i18n.getMessage("user_rules")), this.$add_user_rule.text(chrome.i18n.getMessage("add_user_rule")), 
                    this.$user_rules_count_warning.text(chrome.i18n.getMessage("add_user_rule_warning")), 
                    this.$usl_modal_subtitle.text(chrome.i18n.getMessage("rule")), this.$pp.text(chrome.i18n.getMessage("pp")), 
                    this.$terms.text(chrome.i18n.getMessage("terms")), this.$offic_website.text(chrome.i18n.getMessage("offic_website")), 
                    this.$textarea.placeholder = chrome.i18n.getMessage("placeholder");
                }
            }, {
                key: "applyTheme",
                value: function(e) {
                    !0 === e ? i()("*").addClass("dark_mode") : i()("*").removeClass("dark_mode");
                }
            }, {
                key: "onFilteringModeChange",
                value: (o = Pf().mark((function e(t) {
                    var n;
                    return Pf().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            e.t0 = t, e.next = 3 === e.t0 ? 3 : 12;
                            break;

                          case 3:
                            return e.next = 5, d.permissions.request({
                                origins: [ "<all_urls>" ]
                            });

                          case 5:
                            if (!e.sent) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 9, h({
                                what: "setDefaultFilteringMode",
                                level: t
                            });

                          case 9:
                            n = e.sent, this.userSettings.defaultFilteringMode = n;

                          case 11:
                          case 12:
                            return e.abrupt("break", 13);

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }), e, this);
                })), s = function() {
                    var e = this, t = arguments;
                    return new Promise((function(n, r) {
                        var i = o.apply(e, t);
                        function s(e) {
                            $f(i, n, r, s, a, "next", e);
                        }
                        function a(e) {
                            $f(i, n, r, s, a, "throw", e);
                        }
                        s(void 0);
                    }));
                }, function(e) {
                    return s.apply(this, arguments);
                })
            }, {
                key: "initClickLitener",
                value: function() {
                    var e = this;
                    this.$menu_item.each((function(t, n) {
                        i()(n).on("click", (function(t) {
                            var n = i()(t.target), r = n.attr("name");
                            switch (e.$menu_item.removeClass("active"), n.addClass("active"), r) {
                              case "advanced":
                                i()("#about_us").css("display", "none"), i()("#rule_limits").css("display", "none"), 
                                i()("#advanced").css("display", "block");
                                break;

                              case "about_us":
                                i()("#advanced").css("display", "none"), i()("#rule_limits").css("display", "none"), 
                                i()("#about_us").css("display", "block");
                            }
                        }));
                    })), this.$item_pointer.on("click", (function(t) {
                        var n = i()(t.currentTarget).attr("data-id");
                        switch (e.hideOtherViews(), n) {
                          case "allowlist":
                            i()(".general").css("display", "none"), i()(".allowlist").css("display", "block"), 
                            i()(".back_btn").css("display", "flex"), e.getAllowList();
                            break;

                          case "user-rules":
                            i()(".general").css("display", "none"), i()(".user_rules").css("display", "block"), 
                            i()(".back_btn").css("display", "flex"), e.renderUserRules();
                        }
                    })), this.$back_btn.on("click", (function() {
                        e.hideOtherViews(), i()(".lang_list").empty(), i()(".back_btn").css("display", "none"), 
                        i()(".general").css("display", "block");
                    })), i()(".active-hover").on("mouseenter", (function(e) {
                        i()(e.currentTarget).css("background-color", "#50cba4");
                    })), i()(".active-hover").on("mouseleave", (function(e) {
                        i()(e.currentTarget).css("background-color", "#09B37D");
                    })), i()(".active-hover").on("mousedown", (function(e) {
                        0 === e.button && i()(e.currentTarget).css("background-color", "#6fe7c1");
                    })), i()(".active-hover").on("mouseup", (function(e) {
                        0 === e.button && i()(e.currentTarget).css("background-color", "#50cba4");
                    })), i()(".about_us_item .arrow").on("click", (function(e) {
                        var t = i()(e.currentTarget).attr("data-link");
                        d.tabs.create({
                            url: t
                        });
                    }));
                }
            }, {
                key: "hideOtherViews",
                value: function() {
                    i()(".allowlist").css("display", "none"), i()(".language").css("display", "none"), 
                    i()(".user_rules").css("display", "none"), i()(".various_filters").css("display", "none"), 
                    i()(".switch_input").off(), i()(".lang_item .switch input").off(), i()(".usl_item_header_btn.delete").off(), 
                    i()(".usl_item_header_btn.edit").off();
                }
            }, {
                key: "updateLineNumbers",
                value: function() {
                    var e = document.getElementById("editableDiv"), t = e.innerText.split("\n"), n = document.getElementById("lineNumbers");
                    n && n.parentNode.removeChild(n), (n = document.createElement("div")).id = "lineNumbers", 
                    n.className = "lineNumbers";
                    for (var r = 0; r < t.length; r++) {
                        var o = document.createElement("div");
                        o.textContent = r + 1, n.appendChild(o);
                    }
                    e.parentNode.insertBefore(n, e);
                }
            }, {
                key: "getAllowList",
                value: function() {
                    var e = this, t = document.getElementById("editableDiv");
                    f("allowlist").then((function(n) {
                        if (n.length > 0) {
                            var r = n.join("\n");
                            t.innerText = r, e.updateLineNumbers();
                        }
                    })), t.addEventListener("input", (function() {
                        e.updateLineNumbers();
                    })), i()(".allowlist_btns .save").on("click", (function() {
                        var e = /^\s*$/gm;
                        g("allowlist", t.innerText.split("\n").filter((function(t) {
                            if (!e.test(t)) return t;
                        }))).then((function() {
                            i()(".allowlist_btns .noti").css("opacity", "1"), i()(".allowlist_btns .noti").chrome.i18n.getMessage("saved"), 
                            setTimeout((function() {
                                var e, t = .9;
                                e = setInterval((function() {
                                    t <= .1 && (clearInterval(e), i()(".allowlist_btns .noti").text("")), i()(".allowlist_btns .noti").css("opacity", "".concat(t)), 
                                    t -= .1;
                                }), 100);
                            }), 500);
                        }));
                    })), i()(".allowlist_btns .import").on("click", (function() {
                        var n = document.createElement("input");
                        n.setAttribute("type", "file"), n.setAttribute("id", "fileInput"), n.setAttribute("style", "display: none"), 
                        document.body.appendChild(n), n.click(), document.getElementById("fileInput").addEventListener("change", (function(r) {
                            var o = r.target.files[0];
                            if (o) {
                                var i = new FileReader;
                                i.onload = function(e) {
                                    var r = e.target.result.split("\n").join("\n");
                                    t.innerText = r, document.body.removeChild(n);
                                }, i.readAsText(o), e.updateLineNumbers();
                            }
                        }));
                    })), i()(".allowlist_btns .export").on("click", (function() {
                        var e = t.innerText, n = new Blob([ e ], {
                            type: "text/plain;charset=utf-8"
                        }), r = document.createElement("a");
                        r.href = URL.createObjectURL(n), r.download = "allow_list.txt", document.body.appendChild(r), 
                        r.click(), document.body.removeChild(r);
                    }));
                }
            }, {
                key: "renderUserRules",
                value: function() {
                    var e = this;
                    f("userRules").then((function(t) {
                        i()(".user_rules_list").empty(), t && (t.forEach((function(t) {
                            i()(".user_rules_list").append(e.createUserRulesItemTemplate(t));
                        })), e.initUserRulesListener(t));
                    }));
                }
            }, {
                key: "createUserRulesItemTemplate",
                value: function(e) {
                    var t = e.id, n = e.active, r = e.ruleText;
                    return '<div class="usl_item">\n                <div class="usl_item_header">\n                  <label class="switch">\n                    <input type="checkbox" id="'.concat(t, '" checked=').concat(n, ' class="user_rules_switch_input"/>\n                    <span class="slider round"></span>\n                  </label>\n                  <div class="usl_item_header_btn edit" data-id="').concat(t, '"></div>\n                  <div class="usl_item_header_btn delete" data-id="').concat(t, '"></div>\n                </div>\n                <p class="usl_item_content">').concat(r, "</p>\n              </div>");
                }
            }, {
                key: "initUserRulesListener",
                value: function(e) {
                    var t = this;
                    function n() {
                        i()(".user_rules_modal").css("display", "none"), i()(".usl_modal_btn").off("click"), 
                        i()(".usl_modal_content textarea").val(""), i()(".usl_modal_btn").removeClass("edit"), 
                        i()(".usl_modal_btn").removeClass("add"), i()(".usl_modal_btn").removeAttr("style");
                    }
                    e.length <= 100 ? i()(".add_user_rule").on("click", (function() {
                        i()(".usl_modal_header_title").text(chrome.i18n.getMessage("add_user_rule")), i()(".usl_modal_btn").text(chrome.i18n.getMessage("add")), 
                        i()(".usl_modal_btn").addClass("add"), i()(".user_rules_modal").css("display", "flex"), 
                        i()(".usl_modal_btn.add").on("click", (function() {
                            "" !== i()(".usl_modal_content textarea").val() ? f("userRules").then((function(e) {
                                var r = e;
                                r.push({
                                    active: !0,
                                    ruleText: i()(".usl_modal_content textarea").val(),
                                    id: (new Date).getTime()
                                }), g("userRules", r).then((function() {
                                    t.renderUserRules(), n();
                                }));
                            })) : n();
                        }));
                    })) : (i()(".add_user_rule").css("display", "none"), i()(".user_rules_count_warning").css("display", "block")), 
                    i()(".user_rules_switch_input").on("change", (function(t) {
                        var n = t.target.id;
                        e.map((function(e) {
                            e.id === +n && (e.active = t.target.checked);
                        })), g("userRules", e);
                    })), i()(".usl_item_header_btn.delete").on("click", (function(n) {
                        var r = i()(n.target).attr("data-id");
                        g("userRules", e.filter((function(e) {
                            return e.id !== +r;
                        }))).then((function() {
                            t.renderUserRules();
                        }));
                    })), i()(".usl_item_header_btn.edit").on("click", (function(r) {
                        i()(".usl_modal_header_title").text(chrome.i18n.getMessage("edit_user_rule")), i()(".usl_modal_btn").text(chrome.i18n.getMessage("done")), 
                        i()(".usl_modal_btn").addClass("edit"), i()(".user_rules_modal").css("display", "flex");
                        var o = i()(r.target).attr("data-id");
                        e.forEach((function(e) {
                            e.id === +o && i()(".usl_modal_content textarea").val(e.ruleText);
                        })), i()(".usl_modal_btn.edit").on("click", (function() {
                            e.map((function(e) {
                                e.id === +o && (e.ruleText = i()(".usl_modal_content textarea").val());
                            })), g("userRules", e).then((function() {
                                t.renderUserRules(), n();
                            }));
                        }));
                    })), i()(".usl_modal_header_close").on("click", (function() {
                        n();
                    }));
                }
            } ]) && jf(t.prototype, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e;
        }();
        document.addEventListener("DOMContentLoaded", (function() {
            new Ff;
        }));
    })();
})();