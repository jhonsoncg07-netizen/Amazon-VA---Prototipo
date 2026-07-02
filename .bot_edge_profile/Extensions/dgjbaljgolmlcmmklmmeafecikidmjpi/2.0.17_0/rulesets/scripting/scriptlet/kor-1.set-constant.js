!function() {
    function e(...e) {
        !function(e = !1, n = "", r = "") {
            if ("" === n) return;
            const o = t(), i = o.makeLogPrefix("set-constant", n, r), c = o.getExtraArgs(Array.from(arguments), 3);
            function s(n, r) {
                const s = (() => {
                    const e = n.lastIndexOf(".");
                    return -1 === e ? n : n.slice(e + 1);
                })();
                if ("" === s) return;
                const u = document.currentScript;
                let l = function(e, n, r = {}) {
                    const o = t();
                    let i;
                    if ("undefined" === n) i = void 0; else if ("false" === n) i = !1; else if ("true" === n) i = !0; else if ("null" === n) i = null; else if ("''" === n || "" === n) i = ""; else if ("[]" === n || "emptyArr" === n) i = []; else if ("{}" === n || "emptyObj" === n) i = {}; else if ("noopFunc" === n) i = function() {}; else if ("trueFunc" === n) i = function() {
                        return !0;
                    }; else if ("falseFunc" === n) i = function() {
                        return !1;
                    }; else if ("throwFunc" === n) i = function() {
                        throw "";
                    }; else if (/^-?\d+$/.test(n)) {
                        if (i = parseInt(n), isNaN(n)) return;
                        if (Math.abs(n) > 32767) return;
                    } else {
                        if (!e) return;
                        if (n.startsWith("json:")) try {
                            i = o.JSON_parse(n.slice(5));
                        } catch {
                            return;
                        } else if (n.startsWith("{") && n.endsWith("}")) try {
                            i = o.JSON_parse(n).value;
                        } catch {
                            return;
                        }
                    }
                    if (void 0 !== r.as) {
                        if ("function" === r.as) return () => i;
                        if ("callback" === r.as) return () => () => i;
                        if ("resolved" === r.as) return Promise.resolve(i);
                        if ("rejected" === r.as) return Promise.reject(i);
                    }
                    return i;
                }(e, r, c);
                "noopFunc" !== r && "trueFunc" !== r && "falseFunc" !== r || (l = (e => (o.Object_defineProperty(e, "name", {
                    value: s
                }), new Proxy(e, {
                    defineProperty(e, t) {
                        return "toString" === t || Reflect.defineProperty(...arguments);
                    },
                    deleteProperty(e, t) {
                        return "toString" === t || Reflect.deleteProperty(...arguments);
                    },
                    get(e, t) {
                        return "toString" === t ? function() {
                            return `function ${s}() { [native code] }`;
                        }.bind(null) : Reflect.get(...arguments);
                    }
                })))(l));
                let d = !1;
                const f = function(t) {
                    return !e && (!!d || (d = null != t && null != l && typeof t != typeof l, d && o.uboLog(i, `Aborted because value set to ${t}`), 
                    d));
                }, p = function(e, t, n, r) {
                    if (!1 === r.init(n ? e[t] : l)) return;
                    const c = o.Object_getOwnPropertyDescriptor(e, t);
                    let s, a;
                    c instanceof o.Object && (e[t] = l, c.get instanceof Function && (s = c.get), c.set instanceof Function && (a = c.set));
                    try {
                        o.Object_defineProperty(e, t, {
                            configurable: n,
                            get: () => (void 0 !== s && s(), r.getter()),
                            set(e) {
                                void 0 !== a && a(e), r.setter(e);
                            }
                        }), o.uboLog(i, "Trap installed");
                    } catch (e) {
                        o.uboErr(i, e);
                    }
                }, g = function(e, t) {
                    const n = t.indexOf(".");
                    if (-1 === n) return void p(e, t, !1, {
                        v: void 0,
                        init: function(e) {
                            return !f(e) && (this.v = e, !0);
                        },
                        getter: function() {
                            return document.currentScript === u ? this.v : (o.uboLog(i, "Property read"), l);
                        },
                        setter: function(e) {
                            !1 !== f(e) && (l = e);
                        }
                    });
                    const r = t.slice(0, n), c = e[r];
                    t = t.slice(n + 1), c instanceof o.Object || "object" == typeof c && null !== c ? g(c, t) : p(e, r, !0, {
                        v: void 0,
                        init: function(e) {
                            return this.v = e, !0;
                        },
                        getter: function() {
                            return this.v;
                        },
                        setter: function(e) {
                            this.v = e, e instanceof o.Object && g(e, t);
                        }
                    });
                };
                g(window, n);
            }
            !function(e, n) {
                const r = e => {
                    const t = {
                        loading: 1,
                        asap: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, n = Array.isArray(e) ? e : [ e ];
                    for (const e of n) {
                        const n = `${e}`;
                        if (!1 !== Object.hasOwn(t, n)) return t[n];
                    }
                    return 0;
                }, o = r(n);
                if (r(document.readyState) >= o) return void e();
                const c = t(), s = [ "readystatechange", () => {
                    r(document.readyState) < o || (e(), c.removeEventListener.apply(document, s));
                }, {
                    capture: !0
                } ];
                c.addEventListener.apply(document, s);
            }((() => {
                s(n, r);
            }), c.runAt);
        }(!1, ...e);
    }
    function t() {
        if (n.safeSelf) return n.safeSelf;
        const e = globalThis, t = {
            Array_from: Array.from,
            Error: e.Error,
            Function_toStringFn: e.Function.prototype.toString,
            Function_toString: e => t.Function_toStringFn.call(e),
            Math_floor: Math.floor,
            Math_max: Math.max,
            Math_min: Math.min,
            Math_random: Math.random,
            Object: Object,
            Object_defineProperty: Object.defineProperty.bind(Object),
            Object_defineProperties: Object.defineProperties.bind(Object),
            Object_fromEntries: Object.fromEntries.bind(Object),
            Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
            Object_hasOwn: Object.hasOwn.bind(Object),
            RegExp: e.RegExp,
            RegExp_test: e.RegExp.prototype.test,
            RegExp_exec: e.RegExp.prototype.exec,
            Request_clone: e.Request.prototype.clone,
            String: e.String,
            String_fromCharCode: String.fromCharCode,
            String_split: String.prototype.split,
            XMLHttpRequest: e.XMLHttpRequest,
            addEventListener: e.EventTarget.prototype.addEventListener,
            removeEventListener: e.EventTarget.prototype.removeEventListener,
            fetch: e.fetch,
            JSON: e.JSON,
            JSON_parseFn: e.JSON.parse,
            JSON_stringifyFn: e.JSON.stringify,
            JSON_parse: (...e) => t.JSON_parseFn.call(t.JSON, ...e),
            JSON_stringify: (...e) => t.JSON_stringifyFn.call(t.JSON, ...e),
            log: void 0,
            logLevel: 0,
            makeLogPrefix(...e) {
                return this.sendToLogger && `[${e.join(" ⁝ ")}]` || "";
            },
            uboLog(...e) {
                if (void 0 !== this.sendToLogger && void 0 !== e && "" !== e[0]) return this.sendToLogger("info", ...e);
            },
            uboErr(...e) {
                if (void 0 !== this.sendToLogger && void 0 !== e && "" !== e[0]) return this.sendToLogger("error", ...e);
            },
            escapeRegexChars: e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            initPattern(e, t = {}) {
                if ("" === e) return {
                    matchAll: !0,
                    expect: !0
                };
                const n = !0 !== t.canNegate || !1 === e.startsWith("!");
                !1 === n && (e = e.slice(1));
                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== r ? {
                    re: new this.RegExp(r[1], r[2] || t.flags),
                    expect: n
                } : void 0 !== t.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                    expect: n
                } : {
                    pattern: e,
                    expect: n
                };
            },
            testPattern(e, t) {
                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
            },
            patternToRegex(e, t, n = !1) {
                if ("" === e) return /^/;
                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === r) {
                    const r = this.escapeRegexChars(e);
                    return new RegExp(n ? `^${r}$` : r, t);
                }
                try {
                    return new RegExp(r[1], r[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const n = e.slice(t).reduce(((e, t, n, r) => {
                    if (0 == (1 & n)) {
                        const t = r[n + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ r[n], o ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(n);
            },
            onIdle: (t, n) => e.requestIdleCallback ? e.requestIdleCallback(t, n) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (n.safeSelf = t, void 0 === n.bcSecret) return t;
        t.logLevel = n.logLevel || 1;
        let r = "", o = "", i = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return n === o && e === r && Date.now() - i < 5e3 ? void 0 : (r = e, o = n, i = Date.now(), 
            n);
        };
        try {
            const r = new e.BroadcastChannel(n.bcSecret);
            let o = [];
            t.sendToLogger = (e, ...n) => {
                const i = t.toLogText(e, ...n);
                if (void 0 !== i) return void 0 === o ? r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: i
                }) : void o.push({
                    type: e,
                    text: i
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    t.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    t.logLevel = 2;
                }
            }, r.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...n) => {
                const r = t.toLogText(e, ...n);
                void 0 !== r && t.log(`uBO ${r}`);
            };
        }
        return t;
    }
    const n = {}, r = [ [ "_ads_zum_main_initbanner_750_zum_main_br_widget_336", "true" ], [ "list_end_run_read_top_boom", "noopFunc" ], [ "list_end_run_pds_notice_boom", "noopFunc" ], [ "list_end_run_comment_bottom_boom", "noopFunc" ], [ "list_end_run_center_boom", "noopFunc" ], [ "list_end_run_list_bottom_boom", "noopFunc" ], [ "list_end_run", "noopFunc" ], [ "commonTrailer", "undefined" ], [ "Math.uuid", "", "", "asFunction" ], [ "jQuery.fn.getUrlParameter", "", "asFunction" ], [ "window.__NEXT_DATA__.props.pageProps.initialState.post.adhistory", "{}" ], [ "$is.powerLink.loadPowerLink", "noopFunc" ], [ "SbsHtml5PlayerContainer.prototype.renderAdSequence", "noopFunc" ], [ "pum_vars", "undefined" ], [ "player.renderAdSequence", "undefined" ], [ "bannerpop.popup", "noopFunc" ], [ "admode", "0" ], [ "player.advertisement_finished", "true" ], [ "getAdcrUrl", "" ], [ "random_imglink", "noopFunc" ], [ "vrixadsdk", "undefined" ], [ "hahaha", "noopFunc" ], [ "adsBlocked", "noopFunc" ], [ "adblockChecker", "noopFunc" ], [ "checkAdBlock", "undefined" ], [ "googletag.getVersion", "trueFunc" ], [ "linkPass", "true" ], [ "DHAntiAdBlocker", "true" ], [ "checkAds", "noopFunc" ], [ "NAVER_ADPOST_V2", "noopFunc" ] ], o = new Map([ [ "zum.com", 0 ], [ "m.humoruniv.com", [ 1, 2, 3, 4, 5, 6 ] ], [ "platformgreat.kr", 7 ], [ "hub.zum.com", 8 ], [ "mememedia.co.kr", 9 ], [ "humors.zigcou.com", 10 ], [ "shopping.interpark.com", 11 ], [ "sbs.co.kr", [ 12, 14 ] ], [ "fun-iyagi.co.kr", 13 ], [ "timecoffee.co.kr", 13 ], [ "333aaa.site", 13 ], [ "domin.co.kr", 15 ], [ "uwayapply.com", 16 ], [ "tvchosun.com", 17 ], [ "naver.com", 18 ], [ "koreapas.com", 19 ], [ "imbc.com", 20 ], [ "kilho.net", 21 ], [ "meeco.kr", 22 ], [ "checkwhoiam.tistory.com", 23 ], [ "minipol.tistory.com", 24 ], [ "start.klauncher.kr", 25 ], [ "dinfo.3dpchip.com", 26 ], [ "sogirl.so", 27 ], [ "tistory.com", 28 ], [ "sajuplus.net", 28 ], [ "auto.danawa.com", 29 ] ]), i = new Map([]), c = (e, t, n) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) n.add(e); else n.add(r);
    }, a = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const n = e.lastIndexOf("://");
            if (-1 === n) return;
            const r = e.slice(n + 3), o = r.indexOf(":");
            return {
                hn: -1 === o ? r : r.slice(0, o),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === a.length) return;
    const u = new Set, l = new Set;
    ((e, t = "") => {
        const n = e.split("."), r = n.length;
        if (0 !== r) for (let e = 0; e < r; e++) {
            const r = `${n.slice(e).join(".")}${t}`;
            c(r, o, u), c(r, i, l);
        }
    })(a[0].hn);
    for (const t of u) if (!l.has(t)) try {
        e(...r[t]);
    } catch {}
}();