!function() {
    function e(...e) {
        !function(e = !1, n = "", o = "") {
            if ("" === n) return;
            const r = t(), i = r.makeLogPrefix("set-constant", n, o), c = r.getExtraArgs(Array.from(arguments), 3);
            function a(n, o) {
                const a = (() => {
                    const e = n.lastIndexOf(".");
                    return -1 === e ? n : n.slice(e + 1);
                })();
                if ("" === a) return;
                const l = document.currentScript;
                let u = function(e, n, o = {}) {
                    const r = t();
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
                            i = r.JSON_parse(n.slice(5));
                        } catch {
                            return;
                        } else if (n.startsWith("{") && n.endsWith("}")) try {
                            i = r.JSON_parse(n).value;
                        } catch {
                            return;
                        }
                    }
                    if (void 0 !== o.as) {
                        if ("function" === o.as) return () => i;
                        if ("callback" === o.as) return () => () => i;
                        if ("resolved" === o.as) return Promise.resolve(i);
                        if ("rejected" === o.as) return Promise.reject(i);
                    }
                    return i;
                }(e, o, c);
                "noopFunc" !== o && "trueFunc" !== o && "falseFunc" !== o || (u = (e => (r.Object_defineProperty(e, "name", {
                    value: a
                }), new Proxy(e, {
                    defineProperty(e, t) {
                        return "toString" === t || Reflect.defineProperty(...arguments);
                    },
                    deleteProperty(e, t) {
                        return "toString" === t || Reflect.deleteProperty(...arguments);
                    },
                    get(e, t) {
                        return "toString" === t ? function() {
                            return `function ${a}() { [native code] }`;
                        }.bind(null) : Reflect.get(...arguments);
                    }
                })))(u));
                let d = !1;
                const p = function(t) {
                    return !e && (!!d || (d = null != t && null != u && typeof t != typeof u, d && r.uboLog(i, `Aborted because value set to ${t}`), 
                    d));
                }, f = function(e, t, n, o) {
                    if (!1 === o.init(n ? e[t] : u)) return;
                    const c = r.Object_getOwnPropertyDescriptor(e, t);
                    let a, s;
                    c instanceof r.Object && (e[t] = u, c.get instanceof Function && (a = c.get), c.set instanceof Function && (s = c.set));
                    try {
                        r.Object_defineProperty(e, t, {
                            configurable: n,
                            get: () => (void 0 !== a && a(), o.getter()),
                            set(e) {
                                void 0 !== s && s(e), o.setter(e);
                            }
                        }), r.uboLog(i, "Trap installed");
                    } catch (e) {
                        r.uboErr(i, e);
                    }
                }, g = function(e, t) {
                    const n = t.indexOf(".");
                    if (-1 === n) return void f(e, t, !1, {
                        v: void 0,
                        init: function(e) {
                            return !p(e) && (this.v = e, !0);
                        },
                        getter: function() {
                            return document.currentScript === l ? this.v : (r.uboLog(i, "Property read"), u);
                        },
                        setter: function(e) {
                            !1 !== p(e) && (u = e);
                        }
                    });
                    const o = t.slice(0, n), c = e[o];
                    t = t.slice(n + 1), c instanceof r.Object || "object" == typeof c && null !== c ? g(c, t) : f(e, o, !0, {
                        v: void 0,
                        init: function(e) {
                            return this.v = e, !0;
                        },
                        getter: function() {
                            return this.v;
                        },
                        setter: function(e) {
                            this.v = e, e instanceof r.Object && g(e, t);
                        }
                    });
                };
                g(window, n);
            }
            !function(e, n) {
                const o = e => {
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
                }, r = o(n);
                if (o(document.readyState) >= r) return void e();
                const c = t(), a = [ "readystatechange", () => {
                    o(document.readyState) < r || (e(), c.removeEventListener.apply(document, a));
                }, {
                    capture: !0
                } ];
                c.addEventListener.apply(document, a);
            }((() => {
                a(n, o);
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
                const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== o ? {
                    re: new this.RegExp(o[1], o[2] || t.flags),
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
                const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === o) {
                    const o = this.escapeRegexChars(e);
                    return new RegExp(n ? `^${o}$` : o, t);
                }
                try {
                    return new RegExp(o[1], o[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const n = e.slice(t).reduce(((e, t, n, o) => {
                    if (0 == (1 & n)) {
                        const t = o[n + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ o[n], r ]);
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
        let o = "", r = "", i = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return n === r && e === o && Date.now() - i < 5e3 ? void 0 : (o = e, r = n, i = Date.now(), 
            n);
        };
        try {
            const o = new e.BroadcastChannel(n.bcSecret);
            let r = [];
            t.sendToLogger = (e, ...n) => {
                const i = t.toLogText(e, ...n);
                if (void 0 !== i) return void 0 === r ? o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: i
                }) : void r.push({
                    type: e,
                    text: i
                });
            }, o.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: t}) => o.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    t.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    t.logLevel = 2;
                }
            }, o.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...n) => {
                const o = t.toLogText(e, ...n);
                void 0 !== o && t.log(`uBO ${o}`);
            };
        }
        return t;
    }
    const n = {}, o = [ [ "ad_id_for_555", "" ], [ "all520dddaaa2022ccc", "true" ], [ "_AdBlockInit", "noopFunc" ], [ "checkAndHandleAdBlock", "undefined" ], [ "adsbygoogle", "{}" ], [ "AD_SURVEY_Add_AdPos", "noopFunc" ], [ "AD_SURVEY_Add_AdPos_Simple", "noopFunc" ], [ "killads", "true" ], [ "isAdsDisplayed", "true" ], [ "fuzqingAdPlus", "{}" ], [ "all520dddaaa2022aaa", "undefined" ], [ "canRunAds", "true" ], [ "adblock", "0" ], [ "can_run_ads", "true" ], [ "google_tag_manager", "{}" ], [ "google.ima.AdError", "noopFunc" ], [ "ga", "noopFunc" ], [ "google_empty_script_included", "true" ], [ "adsbygoogle", "noopFunc" ], [ "Object.prototype.cnobpreroll_", "true" ], [ "Object.prototype.canobpreroll_", "true" ], [ "ads", "" ], [ "NativeAd", "noopFunc" ], [ "__jsadsuccess", "true" ], [ "onload", "null" ], [ "adbk", "false" ], [ "config.group", "" ], [ "preBid", "{}" ], [ "preBid.displayAd", "noopFunc" ], [ "preBid.getPrerollVASTUrl", "noopFunc" ], [ "player.VastADPlugin", "noopFunc" ], [ "ADSOBJET", "{}" ], [ "myPlayer.adDisplay", "undefined" ], [ "NEWS_FEED", "noopFunc" ], [ "conone_lmg", "noopFunc" ], [ "Object.prototype.ad_switch", "0" ], [ "dy_card_dyrun", "undefined" ], [ "poped", "true" ], [ "Object.prototype.adData", "{}" ], [ "Object.prototype._adData", "{}" ], [ "adsbygoogle.loaded", "true" ], [ "MM_openBrWindow", "noopFunc" ], [ "lists", "undefined" ], [ "is_show", "false" ], [ "appData", "[]" ], [ "topData", "[]" ], [ "midData", "[]" ], [ "btmData", "[]" ], [ "coupletData", "[]" ], [ "ConFig.config.ads", "{}" ], [ "adInfo", "{}" ], [ "isAdLoaded", "true" ], [ "Object.prototype.noAD", "true" ], [ "CreativePlayerwebPlugin.AD_EVENT.AD_DESTROY", "" ], [ "CreativePlayerwebPlugin.AD_EVENT.AD_LOAD_START", "" ], [ "pageData.__banners.0.commercial.mediaUrl", "" ], [ "pageData.__banners.0.commercial.jumpUrl", "" ], [ "pageData.__banners.0.commercial.title", "" ], [ "pageData.__banners.1.commercial.mediaUrl", "" ], [ "pageData.__banners.1.commercial.jumpUrl", "" ], [ "pageData.__banners.1.commercial.title", "" ], [ "detailParams.is_ad_play", "false" ] ], r = new Map([ [ "surirt.com", [ 0, 1 ] ], [ "520cc.cc", 1 ], [ "520call.me", [ 1, 10 ] ], [ "baomidou.com", 2 ], [ "nodejs.cn", [ 2, 4 ] ], [ "docsmall.com", 2 ], [ "bilinovel.com", 3 ], [ "huanqiu.com", [ 5, 6 ] ], [ "itbaoku.cn", 7 ], [ "yaociyuan.bid", 7 ], [ "bigpixel.cn", 7 ], [ "jkpan.cc", 7 ], [ "ekamus.info", 8 ], [ "koyi.pub", 9 ], [ "bde4.icu", 11 ], [ "tingfm.com", [ 11, 13 ] ], [ "slashlook.com", 11 ], [ "linovelib.com", 12 ], [ "linetv.tw", [ 14, 15 ] ], [ "ebb.io", [ 16, 17 ] ], [ "wenxuecity.com", 18 ], [ "ddys.*", [ 19, 20 ] ], [ "ddrk.me", [ 19, 20 ] ], [ "sssam.com", 21 ], [ "cocomanga.com", [ 22, 23 ] ], [ "ohmanhua.com", [ 22, 23 ] ], [ "onemanhua.com", [ 22, 23 ] ], [ "hboav.com", [ 24, 25 ] ], [ "cnys.tv", 26 ], [ "now.com", [ 27, 28, 29 ] ], [ "player.hboav.com", 30 ], [ "x99av.com", 31 ], [ "hamivideo.hinet.net", 32 ], [ "jianshu.com", 33 ], [ "xkyn.com", 34 ], [ "tangdoucdn.com", 35 ], [ "dianyingim.com", 36 ], [ "xvideo.cc", 37 ], [ "v-wb.youku.com", 38 ], [ "m.youku.com", 39 ], [ "v.youku.com", 39 ], [ "myptt.cc", 40 ], [ "edc1014070.pixnet.net", 41 ], [ "m.biqiugege8.com", 42 ], [ "theav.xyz", 43 ], [ "69xx.one", 43 ], [ "theporn.cc", 43 ], [ "445nan.com", [ 44, 45, 46, 47, 48 ] ], [ "huaren.live", 49 ], [ "huya.com", 50 ], [ "le.com", [ 51, 52 ] ], [ "sports.qq.com", [ 53, 54 ] ], [ "lpl.qq.com", [ 53, 54 ] ], [ "v.qq.com", [ 53, 54 ] ], [ "nivod2.com", [ 55, 56, 57, 58, 59, 60, 61 ] ], [ "nivod2.tv", [ 55, 56, 57, 58, 59, 60, 61 ] ], [ "nivod4.com", [ 55, 56, 57, 58, 59, 60, 61 ] ], [ "nivod4.tv", [ 55, 56, 57, 58, 59, 60, 61 ] ], [ "nivod5.com", [ 55, 56, 57, 58, 59, 60, 61 ] ], [ "nivod5.tv", [ 55, 56, 57, 58, 59, 60, 61 ] ], [ "nivod7.tv", [ 55, 56, 57, 58, 59, 60, 61 ] ], [ "nivod8.tv", [ 55, 56, 57, 58, 59, 60, 61 ] ], [ "nivod9.tv", [ 55, 56, 57, 58, 59, 60, 61 ] ] ]), i = new Map([]), c = (e, t, n) => {
        let o = t.get(e);
        if (void 0 !== o) if ("number" != typeof o) for (const e of o) n.add(e); else n.add(o);
    }, s = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const n = e.lastIndexOf("://");
            if (-1 === n) return;
            const o = e.slice(n + 3), r = o.indexOf(":");
            return {
                hn: -1 === r ? o : o.slice(0, r),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === s.length) return;
    const l = new Set, u = new Set;
    ((e, t = "") => {
        const n = e.split("."), o = n.length;
        if (0 !== o) {
            for (let e = 0; e < o; e++) {
                const o = `${n.slice(e).join(".")}${t}`;
                c(o, r, l), c(o, i, u);
            }
            {
                const e = o - 1;
                for (let o = 0; o < e; o++) for (let a = e; a > o; a--) {
                    const e = `${n.slice(o, a).join(".")}.*${t}`;
                    c(e, r, l), c(e, i, u);
                }
            }
        }
    })(s[0].hn);
    for (const t of l) if (!u.has(t)) try {
        e(...o[t]);
    } catch {}
}();