!function() {
    function e(...e) {
        !function(e = !1, i = "", n = "") {
            if ("" === i) return;
            const o = t(), l = o.makeLogPrefix("set-constant", i, n), r = o.getExtraArgs(Array.from(arguments), 3);
            function a(i, n) {
                const a = (() => {
                    const e = i.lastIndexOf(".");
                    return -1 === e ? i : i.slice(e + 1);
                })();
                if ("" === a) return;
                const s = document.currentScript;
                let z = function(e, i, n = {}) {
                    const o = t();
                    let l;
                    if ("undefined" === i) l = void 0; else if ("false" === i) l = !1; else if ("true" === i) l = !0; else if ("null" === i) l = null; else if ("''" === i || "" === i) l = ""; else if ("[]" === i || "emptyArr" === i) l = []; else if ("{}" === i || "emptyObj" === i) l = {}; else if ("noopFunc" === i) l = function() {}; else if ("trueFunc" === i) l = function() {
                        return !0;
                    }; else if ("falseFunc" === i) l = function() {
                        return !1;
                    }; else if ("throwFunc" === i) l = function() {
                        throw "";
                    }; else if (/^-?\d+$/.test(i)) {
                        if (l = parseInt(i), isNaN(i)) return;
                        if (Math.abs(i) > 32767) return;
                    } else {
                        if (!e) return;
                        if (i.startsWith("json:")) try {
                            l = o.JSON_parse(i.slice(5));
                        } catch {
                            return;
                        } else if (i.startsWith("{") && i.endsWith("}")) try {
                            l = o.JSON_parse(i).value;
                        } catch {
                            return;
                        }
                    }
                    if (void 0 !== n.as) {
                        if ("function" === n.as) return () => l;
                        if ("callback" === n.as) return () => () => l;
                        if ("resolved" === n.as) return Promise.resolve(l);
                        if ("rejected" === n.as) return Promise.reject(l);
                    }
                    return l;
                }(e, n, r);
                "noopFunc" !== n && "trueFunc" !== n && "falseFunc" !== n || (z = (e => (o.Object_defineProperty(e, "name", {
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
                })))(z));
                let m = !1;
                const d = function(t) {
                    return !e && (!!m || (m = null != t && null != z && typeof t != typeof z, m && o.uboLog(l, `Aborted because value set to ${t}`), 
                    m));
                }, f = function(e, t, i, n) {
                    if (!1 === n.init(i ? e[t] : z)) return;
                    const r = o.Object_getOwnPropertyDescriptor(e, t);
                    let a, c;
                    r instanceof o.Object && (e[t] = z, r.get instanceof Function && (a = r.get), r.set instanceof Function && (c = r.set));
                    try {
                        o.Object_defineProperty(e, t, {
                            configurable: i,
                            get: () => (void 0 !== a && a(), n.getter()),
                            set(e) {
                                void 0 !== c && c(e), n.setter(e);
                            }
                        }), o.uboLog(l, "Trap installed");
                    } catch (e) {
                        o.uboErr(l, e);
                    }
                }, u = function(e, t) {
                    const i = t.indexOf(".");
                    if (-1 === i) return void f(e, t, !1, {
                        v: void 0,
                        init: function(e) {
                            return !d(e) && (this.v = e, !0);
                        },
                        getter: function() {
                            return document.currentScript === s ? this.v : (o.uboLog(l, "Property read"), z);
                        },
                        setter: function(e) {
                            !1 !== d(e) && (z = e);
                        }
                    });
                    const n = t.slice(0, i), r = e[n];
                    t = t.slice(i + 1), r instanceof o.Object || "object" == typeof r && null !== r ? u(r, t) : f(e, n, !0, {
                        v: void 0,
                        init: function(e) {
                            return this.v = e, !0;
                        },
                        getter: function() {
                            return this.v;
                        },
                        setter: function(e) {
                            this.v = e, e instanceof o.Object && u(e, t);
                        }
                    });
                };
                u(window, i);
            }
            !function(e, i) {
                const n = e => {
                    const t = {
                        loading: 1,
                        asap: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, i = Array.isArray(e) ? e : [ e ];
                    for (const e of i) {
                        const i = `${e}`;
                        if (!1 !== Object.hasOwn(t, i)) return t[i];
                    }
                    return 0;
                }, o = n(i);
                if (n(document.readyState) >= o) return void e();
                const r = t(), a = [ "readystatechange", () => {
                    n(document.readyState) < o || (e(), r.removeEventListener.apply(document, a));
                }, {
                    capture: !0
                } ];
                r.addEventListener.apply(document, a);
            }((() => {
                a(i, n);
            }), r.runAt);
        }(!1, ...e);
    }
    function t() {
        if (i.safeSelf) return i.safeSelf;
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
                const i = !0 !== t.canNegate || !1 === e.startsWith("!");
                !1 === i && (e = e.slice(1));
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== n ? {
                    re: new this.RegExp(n[1], n[2] || t.flags),
                    expect: i
                } : void 0 !== t.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                    expect: i
                } : {
                    pattern: e,
                    expect: i
                };
            },
            testPattern(e, t) {
                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
            },
            patternToRegex(e, t, i = !1) {
                if ("" === e) return /^/;
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === n) {
                    const n = this.escapeRegexChars(e);
                    return new RegExp(i ? `^${n}$` : n, t);
                }
                try {
                    return new RegExp(n[1], n[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const i = e.slice(t).reduce(((e, t, i, n) => {
                    if (0 == (1 & i)) {
                        const t = n[i + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ n[i], o ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(i);
            },
            onIdle: (t, i) => e.requestIdleCallback ? e.requestIdleCallback(t, i) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (i.safeSelf = t, void 0 === i.bcSecret) return t;
        t.logLevel = i.logLevel || 1;
        let n = "", o = "", l = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const i = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return i === o && e === n && Date.now() - l < 5e3 ? void 0 : (n = e, o = i, l = Date.now(), 
            i);
        };
        try {
            const n = new e.BroadcastChannel(i.bcSecret);
            let o = [];
            t.sendToLogger = (e, ...i) => {
                const l = t.toLogText(e, ...i);
                if (void 0 !== l) return void 0 === o ? n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: l
                }) : void o.push({
                    type: e,
                    text: l
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => n.postMessage({
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
            }, n.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...i) => {
                const n = t.toLogText(e, ...i);
                void 0 !== n && t.log(`uBO ${n}`);
            };
        }
        return t;
    }
    const i = {}, n = [ [ "adblock.check", "noopFunc" ], [ "adBlockDetected", "noopFunc" ], [ "App.detectAdBlock", "noopFunc" ], [ "canRunAds", "true" ], [ "eyeOfErstream.detectedBloke", "falseFunc" ], [ "tie.ad_blocker_disallow_images_placeholder", "undefined" ], [ "eazy_ad_unblocker_msg_var", "" ], [ "detector_active", "true" ], [ "adblock_active", "false" ], [ "adBlockRunning", "false" ], [ "adb", "false" ], [ "maari", "noopFunc" ], [ "adBlockEnabled", "false" ], [ "kan_vars.adblock", "undefined" ], [ "hasAdblock", "false" ], [ "AdblockDetector", "undefined" ], [ "adblockCheckUrl", "" ], [ "adservice", "{}" ], [ "jQuery.adblock", "false" ], [ "koddostu_com_adblock_yok", "null" ], [ "adblock", "false" ], [ "puShown", "true" ], [ "isShow", "true" ], [ "app.ads", "{}" ], [ "wpsaData", "undefined" ], [ "AdmostClient", "noopFunc" ], [ "S_Popup", "2" ], [ "loadPlayerAds", "trueFunc" ], [ "reklamsayisi", "0" ], [ "volumeClearInterval", "0" ], [ "clicked", "true" ], [ "adSearchTitle", "undefined" ], [ "HBiddings.vastUrl", "" ], [ "initOpen", "undefined" ], [ "rg", "noopFunc" ], [ "Object.prototype.video_ads", "noopFunc" ], [ "Object.prototype.ads_enable", "false" ], [ "td_ad_background_click_link", "" ], [ "start", "1" ], [ "popup", "noopFunc" ], [ "downloadAds", "noopFunc" ], [ "window.config.adv.enabled", "0" ], [ "manset_adv_imp", "noopFunc" ], [ "popupShown", "true" ], [ "adsConfig", "{}" ], [ "PopBanner", "undefined" ], [ "config.adv", "{}" ], [ "ads", "{}" ], [ "config.advertisement.enabled", "false" ], [ "reklamsayisi", "1" ], [ "window.config.advertisement.0.enabled", "0" ], [ "reklam_1", "" ] ], o = new Map([ [ "teknop.net", 0 ], [ "ozgunbilgi.com", 0 ], [ "beceriksizler.net", 0 ], [ "merlinscans.com", 1 ], [ "haber3.com", 2 ], [ "promy.pro", 3 ], [ "iddaaorantahmin.com", 3 ], [ "exxen.com", 4 ], [ "tgyama.com", 5 ], [ "uzaymanga.com", [ 6, 21 ] ], [ "wheel-size.com.tr", 7 ], [ "karnaval.com", 8 ], [ "mangaship.net", 9 ], [ "mangaship.com", 9 ], [ "miuitr.info", 10 ], [ "puhutv.com", [ 11, 12 ] ], [ "coinotag.com", 13 ], [ "cnnturk.com", [ 14, 15 ] ], [ "kanald.com.tr", [ 16, 17 ] ], [ "oyungibi.com", 18 ], [ "veterinerhekimleri.com", 18 ], [ "turkdenizcileri.com", 19 ], [ "bilgalem.blogspot.com", 19 ], [ "klavyeanaliz.org", 20 ], [ "erotikfimm.com", 21 ], [ "erotikgo.com", 21 ], [ "fullhdfilmcenneti.pro", 21 ], [ "filmgo1.com", 21 ], [ "dizikral.nl", 21 ], [ "puffytr.com", 21 ], [ "anizle.com", 21 ], [ "anizm.net", 21 ], [ "dizimore.com", 21 ], [ "dizirex.com", 21 ], [ "maxfilmizle.pro", 21 ], [ "turkifsa.xyz", 21 ], [ "fullhdfilmizlesene.*", 21 ], [ "royalfilmizle.com", 21 ], [ "sinetiktok.com", 21 ], [ "onlinedizi.xyz", 21 ], [ "filmzirvesi.to", 21 ], [ "filmifullizle.online", 21 ], [ "sinemakolik.org", 21 ], [ "filmerotixxx.com", 21 ], [ "filmfc.com", 21 ], [ "filmizletv18.com", [ 21, 51 ] ], [ "onlinefilmizle.site", 21 ], [ "playerzz.xyz", 21 ], [ "filmjr.org", 21 ], [ "asfilmizle.com", 21 ], [ "filmhe.com", 21 ], [ "tranimaci.*", 21 ], [ "hdfilmizle.org", 21 ], [ "siyahfilmizle.*", 21 ], [ "tafdi4.com", 21 ], [ "elzemfilm.org", 21 ], [ "tafdi3.com", 21 ], [ "hdfilmizle.in", 21 ], [ "dizicaps.*", 21 ], [ "filmizletv1.*", 21 ], [ "diziyou.co", 21 ], [ "fullhdfilmizle.*", [ 21, 28, 49 ] ], [ "fullfilmizle.*", [ 21, 49 ] ], [ "sinepal.*", 21 ], [ "dizimag.eu", 21 ], [ "bumfilmizle1.com", 21 ], [ "yabancidizilertv.*", 21 ], [ "1080hdfilmizle.com", 21 ], [ "hdfilmcehennemi.*", [ 21, 49 ] ], [ "yabancidizibax.com", 21 ], [ "sinemangoo.org", 21 ], [ "sexfilmleriizle.com", 21 ], [ "fullhdfilm.*", [ 21, 28 ] ], [ "geziforumu.com", 21 ], [ "efendim.xyz", 21 ], [ "dizipaltv.net", 21 ], [ "fluffcore.com", 21 ], [ "hdfilmcehennemizle.com", 21 ], [ "netfullfilmizle3.com", 21 ], [ "filmmodu.info", 21 ], [ "izlekolik.*", 21 ], [ "arrowizle.com", 21 ], [ "filmcus.com", 21 ], [ "sinemakolik.net", 21 ], [ "zarize.com", 21 ], [ "burdenfly.com", 21 ], [ "zzerotik.com", 21 ], [ "filmgo.org", 21 ], [ "sinemafilmizle.net", 21 ], [ "filmkuzusu1.com", 21 ], [ "hdfilmcix.*", [ 21, 49 ] ], [ "sinemadelisi.com", 21 ], [ "erotikfilmtube.com", 21 ], [ "dizipal.*", 21 ], [ "filmizletv.*", [ 21, 49, 51 ] ], [ "tekparthdfilmizle.*", 21 ], [ "pornoanne.com", 21 ], [ "dizikorea.*", 21 ], [ "diziyo.*", 21 ], [ "diziboxx.com", 21 ], [ "dafflix.*", 21 ], [ "turkaliz.com", 21 ], [ "vkfilmizle.net", 21 ], [ "dizimov.*", 21 ], [ "shirl.club", 21 ], [ "turkcealtyazilipornom.com", 21 ], [ "fullhdfilmmodu2.*", 21 ], [ "hdfilmizletv.net", 21 ], [ "pembetv18.*", 21 ], [ "sinemaizle.co", 21 ], [ "hdfilmcehennem.live", 21 ], [ "efullizle.com", 21 ], [ "asyafanatiklerim.com", 21 ], [ "dizilost.com", 21 ], [ "tranimeizle.*", 21 ], [ "volsex.com", 21 ], [ "divx720pfilmizle.org", 21 ], [ "justintvgiris.blogspot.com", 21 ], [ "sportboss-macizlesbs.blogspot.com", 21 ], [ "taraftarium402.blogspot.com", 21 ], [ "macicanliizle.sbs", 21 ], [ "taraftarium24canli-macizlesene.blogspot.com", 21 ], [ "taraftarium24hdgiris1.blogspot.com", 21 ], [ "selcukspor-taraftarium24canliizle1.blogspot.com", 21 ], [ "taraftariumxx.cfd", 21 ], [ "inattvhd188.xyz", 21 ], [ "inattvhd189.xyz", 21 ], [ "inattvhd190.xyz", 21 ], [ "inattvhd191.xyz", 21 ], [ "inattvhd192.xyz", 21 ], [ "inattvhd193.xyz", 21 ], [ "inattvhd194.xyz", 21 ], [ "inattvhd195.xyz", 21 ], [ "inattvhd196.xyz", 21 ], [ "inattvhd197.xyz", 21 ], [ "inattvhd198.xyz", 21 ], [ "inattvhd199.xyz", 21 ], [ "inattvhd200.xyz", 21 ], [ "inattvhd201.xyz", 21 ], [ "inattvhd202.xyz", 21 ], [ "inattvhd203.xyz", 21 ], [ "inattvhd204.xyz", 21 ], [ "inattvhd205.xyz", 21 ], [ "inattvhd206.xyz", 21 ], [ "inattvhd207.xyz", 21 ], [ "inattvhd208.xyz", 21 ], [ "inattvhd209.xyz", 21 ], [ "inattvhd210.xyz", 21 ], [ "inattvhd211.xyz", 21 ], [ "inattvhd212.xyz", 21 ], [ "inattvhd213.xyz", 21 ], [ "inattvhd214.xyz", 21 ], [ "inattvhd215.xyz", 21 ], [ "inattvhd216.xyz", 21 ], [ "inattvhd217.xyz", 21 ], [ "inattvhd218.xyz", 21 ], [ "inattvhd219.xyz", 21 ], [ "inattvhd220.xyz", 21 ], [ "inattvhd221.xyz", 21 ], [ "tekfullfilmizle5.com", 22 ], [ "webteizle.xyz", 22 ], [ "webteizle1.xyz", 22 ], [ "webteizle2.xyz", 22 ], [ "webteizle3.xyz", 22 ], [ "webteizle4.xyz", 22 ], [ "webteizle5.xyz", 22 ], [ "webteizle6.xyz", 22 ], [ "webteizle7.xyz", 22 ], [ "webteizle8.xyz", 22 ], [ "webteizle9.xyz", 22 ], [ "webteizle10.xyz", 22 ], [ "webteizle.click", 22 ], [ "webteizle1.click", 22 ], [ "webteizle2.click", 22 ], [ "webteizle3.click", 22 ], [ "webteizle4.click", 22 ], [ "webteizle5.click", 22 ], [ "webteizle6.click", 22 ], [ "webteizle7.click", 22 ], [ "webteizle8.click", 22 ], [ "webteizle9.click", 22 ], [ "webteizle10.click", 22 ], [ "webteizle3.com", 22 ], [ "webteizle4.com", 22 ], [ "webteizle5.com", 22 ], [ "webteizle6.com", 22 ], [ "webteizle7.com", 22 ], [ "webteizle8.com", 22 ], [ "webteizle9.com", 22 ], [ "webteizle10.com", 22 ], [ "webteizle.info", 22 ], [ "webteizle1.info", 22 ], [ "webteizle2.info", 22 ], [ "webteizle3.info", 22 ], [ "webteizle4.info", 22 ], [ "webteizle5.info", 22 ], [ "webteizle6.info", 22 ], [ "webteizle7.info", 22 ], [ "webteizle8.info", 22 ], [ "webteizle9.info", 22 ], [ "webteizle10.info", 22 ], [ "filmizlehdizle.com", 23 ], [ "fullfilmizlesene.net", 23 ], [ "filmmodu.co", 24 ], [ "diziroll.*", 24 ], [ "dizilla.*", 24 ], [ "dizipal12.site", 24 ], [ "dizipal13.site", 24 ], [ "dizipal14.site", 24 ], [ "dizipal15.site", 24 ], [ "dizipal16.site", 24 ], [ "dizipal17.site", 24 ], [ "dizipal19.site", 24 ], [ "dizipal21.site", 24 ], [ "dizipal22.site", 24 ], [ "dizipal23.site", 24 ], [ "dizipal24.site", 24 ], [ "dizipal25.site", 24 ], [ "dizipal26.site", 24 ], [ "dizipal27.site", 24 ], [ "dizipal28.site", 24 ], [ "arsiv.mackolik.com", 25 ], [ "jetfilmizle.*", 26 ], [ "nefisyemektarifleri.com", 27 ], [ "izlesene.com", 27 ], [ "tranimeci.com", 29 ], [ "turkanime.co", 30 ], [ "forum.donanimhaber.com", 31 ], [ "atv.com.tr", 32 ], [ "contentx.me", 33 ], [ "edebiyatdefteri.com", 34 ], [ "belgeselizlesene.com", [ 35, 36 ] ], [ "technopat.net", 37 ], [ "pchocasi.com.tr", 37 ], [ "aydindenge.com.tr", 38 ], [ "diziall.com", 39 ], [ "tamindir.com", 40 ], [ "hudsonlegalblog.com", 41 ], [ "taraftarium.*", 41 ], [ "selcuksports.*", 41 ], [ "selcuk-sports.com", 41 ], [ "justintvsh.baby", 41 ], [ "dmlstechnology.com", 41 ], [ "justintvde.com", 41 ], [ "justin-tv.org", 41 ], [ "inattvgiris.pro", 41 ], [ "justintv.*", 41 ], [ "hayrirsds24.cfd", 41 ], [ "sondakika.com", 42 ], [ "guzelfilm.com", 43 ], [ "tranimaci.com", 43 ], [ "da95848c82c933d2.click", 44 ], [ "yeniasya.com.tr", 45 ], [ "buenosairesideal.com", 46 ], [ "pllsfored.co", 46 ], [ "inattv454.xyz", 46 ], [ "inattv455.xyz", 46 ], [ "inattv456.xyz", 46 ], [ "inattv457.xyz", 46 ], [ "inattv458.xyz", 46 ], [ "inattv459.xyz", 46 ], [ "inattv460.xyz", 46 ], [ "inattv461.xyz", 46 ], [ "inattv462.xyz", 46 ], [ "inattv463.xyz", 46 ], [ "inattv464.xyz", 46 ], [ "inattv465.xyz", 46 ], [ "inattv466.xyz", 46 ], [ "inattv467.xyz", 46 ], [ "inattv468.xyz", 46 ], [ "inattv469.xyz", 46 ], [ "inattv470.xyz", 46 ], [ "inattv471.xyz", 46 ], [ "inattv472.xyz", 46 ], [ "inattv473.xyz", 46 ], [ "inattv474.xyz", 46 ], [ "inattv475.xyz", 46 ], [ "inattv476.xyz", 46 ], [ "inattv477.xyz", 46 ], [ "inattv478.xyz", 46 ], [ "inattv479.xyz", 46 ], [ "inattv480.xyz", 46 ], [ "inattv481.xyz", 46 ], [ "inattv482.xyz", 46 ], [ "inattv483.xyz", 46 ], [ "inattv484.xyz", 46 ], [ "inattv485.xyz", 46 ], [ "inattv486.xyz", 46 ], [ "inattv487.xyz", 46 ], [ "inattv488.xyz", 46 ], [ "inattv489.xyz", 46 ], [ "inattv490.xyz", 46 ], [ "inattv491.xyz", 46 ], [ "inattv492.xyz", 46 ], [ "inattv493.xyz", 46 ], [ "inattv494.xyz", 46 ], [ "inattv495.xyz", 46 ], [ "inattv496.xyz", 46 ], [ "inattv497.xyz", 46 ], [ "inattv498.xyz", 46 ], [ "inattv499.xyz", 46 ], [ "inattv500.xyz", 46 ], [ "domplayer.org", 47 ], [ "cinque.668a396e58bcbc27.click", 48 ], [ "fullhdizle.*", 49 ], [ "filmizlehdfilm.com", 49 ], [ "fullhdfilmizletv.*", 49 ], [ "hdfilmizlesene.org", 49 ], [ "sinema.cx", 49 ], [ "xyzsports173.xyz", 50 ], [ "xyzsports174.xyz", 50 ], [ "xyzsports175.xyz", 50 ], [ "xyzsports176.xyz", 50 ], [ "xyzsports177.xyz", 50 ], [ "xyzsports178.xyz", 50 ], [ "xyzsports179.xyz", 50 ], [ "xyzsports180.xyz", 50 ], [ "xyzsports181.xyz", 50 ], [ "xyzsports182.xyz", 50 ], [ "xyzsports183.xyz", 50 ], [ "xyzsports184.xyz", 50 ], [ "xyzsports185.xyz", 50 ], [ "xyzsports186.xyz", 50 ], [ "xyzsports187.xyz", 50 ], [ "xyzsports188.xyz", 50 ], [ "xyzsports189.xyz", 50 ], [ "xyzsports190.xyz", 50 ], [ "xyzsports191.xyz", 50 ], [ "xyzsports192.xyz", 50 ], [ "xyzsports193.xyz", 50 ], [ "xyzsports194.xyz", 50 ], [ "xyzsports195.xyz", 50 ], [ "xyzsports197.xyz", 50 ], [ "xyzsports198.xyz", 50 ], [ "xyzsports199.xyz", 50 ], [ "xyzsports200.xyz", 50 ], [ "filmizletv3.com", 51 ], [ "filmizletv4.com", 51 ], [ "filmizletv5.com", 51 ], [ "filmizletv6.com", 51 ], [ "filmizletv7.com", 51 ], [ "filmizletv8.com", 51 ], [ "filmizletv9.com", 51 ], [ "filmizletv10.com", 51 ], [ "filmizletv11.com", 51 ], [ "filmizletv12.com", 51 ], [ "filmizletv13.com", 51 ], [ "filmizletv14.com", 51 ], [ "filmizletv15.com", 51 ], [ "filmizletv16.com", 51 ], [ "filmizletv17.com", 51 ], [ "filmizletv19.com", 51 ], [ "filmizletv20.com", 51 ] ]), l = new Map([]), r = (e, t, i) => {
        let n = t.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) i.add(e); else i.add(n);
    }, c = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const i = e.lastIndexOf("://");
            if (-1 === i) return;
            const n = e.slice(i + 3), o = n.indexOf(":");
            return {
                hn: -1 === o ? n : n.slice(0, o),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === c.length) return;
    const s = new Set, z = new Set;
    ((e, t = "") => {
        const i = e.split("."), n = i.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${i.slice(e).join(".")}${t}`;
                r(n, o, s), r(n, l, z);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let a = e; a > n; a--) {
                    const e = `${i.slice(n, a).join(".")}.*${t}`;
                    r(e, o, s), r(e, l, z);
                }
            }
        }
    })(c[0].hn);
    for (const t of s) if (!z.has(t)) try {
        e(...n[t]);
    } catch {}
}();