!function() {
    function e(...e) {
        !function(e = !1, t = "", n = "") {
            if ("" === t) return;
            const r = o(), c = r.makeLogPrefix("set-constant", t, n), a = r.getExtraArgs(Array.from(arguments), 3);
            function i(t, n) {
                const i = (() => {
                    const e = t.lastIndexOf(".");
                    return -1 === e ? t : t.slice(e + 1);
                })();
                if ("" === i) return;
                const l = document.currentScript;
                let u = function(e, t, n = {}) {
                    const r = o();
                    let c;
                    if ("undefined" === t) c = void 0; else if ("false" === t) c = !1; else if ("true" === t) c = !0; else if ("null" === t) c = null; else if ("''" === t || "" === t) c = ""; else if ("[]" === t || "emptyArr" === t) c = []; else if ("{}" === t || "emptyObj" === t) c = {}; else if ("noopFunc" === t) c = function() {}; else if ("trueFunc" === t) c = function() {
                        return !0;
                    }; else if ("falseFunc" === t) c = function() {
                        return !1;
                    }; else if ("throwFunc" === t) c = function() {
                        throw "";
                    }; else if (/^-?\d+$/.test(t)) {
                        if (c = parseInt(t), isNaN(t)) return;
                        if (Math.abs(t) > 32767) return;
                    } else {
                        if (!e) return;
                        if (t.startsWith("json:")) try {
                            c = r.JSON_parse(t.slice(5));
                        } catch {
                            return;
                        } else if (t.startsWith("{") && t.endsWith("}")) try {
                            c = r.JSON_parse(t).value;
                        } catch {
                            return;
                        }
                    }
                    if (void 0 !== n.as) {
                        if ("function" === n.as) return () => c;
                        if ("callback" === n.as) return () => () => c;
                        if ("resolved" === n.as) return Promise.resolve(c);
                        if ("rejected" === n.as) return Promise.reject(c);
                    }
                    return c;
                }(e, n, a);
                "noopFunc" !== n && "trueFunc" !== n && "falseFunc" !== n || (u = (e => (r.Object_defineProperty(e, "name", {
                    value: i
                }), new Proxy(e, {
                    defineProperty(e, o) {
                        return "toString" === o || Reflect.defineProperty(...arguments);
                    },
                    deleteProperty(e, o) {
                        return "toString" === o || Reflect.deleteProperty(...arguments);
                    },
                    get(e, o) {
                        return "toString" === o ? function() {
                            return `function ${i}() { [native code] }`;
                        }.bind(null) : Reflect.get(...arguments);
                    }
                })))(u));
                let d = !1;
                const m = function(o) {
                    return !e && (!!d || (d = null != o && null != u && typeof o != typeof u, d && r.uboLog(c, `Aborted because value set to ${o}`), 
                    d));
                }, p = function(e, o, t, n) {
                    if (!1 === n.init(t ? e[o] : u)) return;
                    const a = r.Object_getOwnPropertyDescriptor(e, o);
                    let i, s;
                    a instanceof r.Object && (e[o] = u, a.get instanceof Function && (i = a.get), a.set instanceof Function && (s = a.set));
                    try {
                        r.Object_defineProperty(e, o, {
                            configurable: t,
                            get: () => (void 0 !== i && i(), n.getter()),
                            set(e) {
                                void 0 !== s && s(e), n.setter(e);
                            }
                        }), r.uboLog(c, "Trap installed");
                    } catch (e) {
                        r.uboErr(c, e);
                    }
                }, f = function(e, o) {
                    const t = o.indexOf(".");
                    if (-1 === t) return void p(e, o, !1, {
                        v: void 0,
                        init: function(e) {
                            return !m(e) && (this.v = e, !0);
                        },
                        getter: function() {
                            return document.currentScript === l ? this.v : (r.uboLog(c, "Property read"), u);
                        },
                        setter: function(e) {
                            !1 !== m(e) && (u = e);
                        }
                    });
                    const n = o.slice(0, t), a = e[n];
                    o = o.slice(t + 1), a instanceof r.Object || "object" == typeof a && null !== a ? f(a, o) : p(e, n, !0, {
                        v: void 0,
                        init: function(e) {
                            return this.v = e, !0;
                        },
                        getter: function() {
                            return this.v;
                        },
                        setter: function(e) {
                            this.v = e, e instanceof r.Object && f(e, o);
                        }
                    });
                };
                f(window, t);
            }
            !function(e, t) {
                const n = e => {
                    const o = {
                        loading: 1,
                        asap: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, t = Array.isArray(e) ? e : [ e ];
                    for (const e of t) {
                        const t = `${e}`;
                        if (!1 !== Object.hasOwn(o, t)) return o[t];
                    }
                    return 0;
                }, r = n(t);
                if (n(document.readyState) >= r) return void e();
                const a = o(), i = [ "readystatechange", () => {
                    n(document.readyState) < r || (e(), a.removeEventListener.apply(document, i));
                }, {
                    capture: !0
                } ];
                a.addEventListener.apply(document, i);
            }((() => {
                i(t, n);
            }), a.runAt);
        }(!1, ...e);
    }
    function o() {
        if (t.safeSelf) return t.safeSelf;
        const e = globalThis, o = {
            Array_from: Array.from,
            Error: e.Error,
            Function_toStringFn: e.Function.prototype.toString,
            Function_toString: e => o.Function_toStringFn.call(e),
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
            JSON_parse: (...e) => o.JSON_parseFn.call(o.JSON, ...e),
            JSON_stringify: (...e) => o.JSON_stringifyFn.call(o.JSON, ...e),
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
            initPattern(e, o = {}) {
                if ("" === e) return {
                    matchAll: !0,
                    expect: !0
                };
                const t = !0 !== o.canNegate || !1 === e.startsWith("!");
                !1 === t && (e = e.slice(1));
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== n ? {
                    re: new this.RegExp(n[1], n[2] || o.flags),
                    expect: t
                } : void 0 !== o.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(e), o.flags),
                    expect: t
                } : {
                    pattern: e,
                    expect: t
                };
            },
            testPattern(e, o) {
                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, o) === e.expect : o.includes(e.pattern) === e.expect);
            },
            patternToRegex(e, o, t = !1) {
                if ("" === e) return /^/;
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === n) {
                    const n = this.escapeRegexChars(e);
                    return new RegExp(t ? `^${n}$` : n, o);
                }
                try {
                    return new RegExp(n[1], n[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, o = 0) {
                const t = e.slice(o).reduce(((e, o, t, n) => {
                    if (0 == (1 & t)) {
                        const o = n[t + 1], r = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                        e.push([ n[t], r ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(t);
            },
            onIdle: (o, t) => e.requestIdleCallback ? e.requestIdleCallback(o, t) : e.requestAnimationFrame(o),
            offIdle: o => e.requestIdleCallback ? e.cancelIdleCallback(o) : e.cancelAnimationFrame(o)
        };
        if (t.safeSelf = o, void 0 === t.bcSecret) return o;
        o.logLevel = t.logLevel || 1;
        let n = "", r = "", c = 0;
        o.toLogText = (e, ...o) => {
            if (0 === o.length) return;
            const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
            return t === r && e === n && Date.now() - c < 5e3 ? void 0 : (n = e, r = t, c = Date.now(), 
            t);
        };
        try {
            const n = new e.BroadcastChannel(t.bcSecret);
            let r = [];
            o.sendToLogger = (e, ...t) => {
                const c = o.toLogText(e, ...t);
                if (void 0 !== c) return void 0 === r ? n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: c
                }) : void r.push({
                    type: e,
                    text: c
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: o}) => n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: o
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    o.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    o.logLevel = 2;
                }
            }, n.postMessage("areyouready?");
        } catch {
            o.sendToLogger = (e, ...t) => {
                const n = o.toLogText(e, ...t);
                void 0 !== n && o.log(`uBO ${n}`);
            };
        }
        return o;
    }
    const t = {}, n = [ [ "ConsoleBan.init", "noopFunc" ], [ "devtoolsDetector", "{}" ], [ "killads", "true" ], [ "PASSER_videoPAS_apres", "0" ], [ "ads_enabled", "true" ], [ "nebula.session.flags.adblock", "undefined" ], [ "_adBlockCheck", "true" ], [ "navigator.storage.estimate", "undefined" ], [ "valid_user", "true" ], [ "Drupal.behaviors.detectAdblockers", "noopFunc" ], [ "disableSelection", "noopFunc" ], [ "ADBdetected", "noopFunc" ], [ "adblock", "false" ], [ "BIA.ADBLOCKER", "false" ], [ "samDetected", "true" ], [ "adBlockFunction", "trueFunc" ], [ "checkAds", "trueFunc" ], [ "google_jobrunner", "true" ], [ "isAdblockDisabled", "true" ], [ "checkPrivacyWall", "noopFunc" ], [ "document.oncontextmenu", "null" ], [ "nocontext", "noopFunc" ], [ "adsAreShown", "true" ], [ "abd", "false" ], [ "detector_active", "true" ], [ "aoezone_adchecker", "true" ], [ "pageService.initDownloadProtection", "noopFunc" ], [ "detectPrivateMode", "noopFunc" ], [ "webkitRequestFileSystem", "undefined" ], [ "adsbygoogle", "null" ], [ "_sharedData.is_whitelisted_crawl_bot", "true" ], [ "ads_not_blocked", "true" ], [ "ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer", "undefined" ], [ "hideBannerBlockedMessage", "true" ], [ "blurred", "false" ], [ "better_ads_adblock", "0" ], [ "console.debug", "trueFunc" ], [ "console.clear", "trueFunc" ], [ "adBlock", "false" ], [ "document.oncontextmenu", "undefined" ], [ "adsEnabled", "true" ], [ "better_ads_adblock", "null" ], [ "f12lock", "false" ], [ "document.onselectstart", "null" ], [ "console.clear", "undefined" ], [ "adBlockDetected", "false" ], [ "document.onkeyup", "null" ], [ "document.ondragstart", "null" ], [ "commonUtil.openToast", "null" ], [ "NS_TVER_EQ.checkEndEQ", "trueFunc" ], [ "mps._queue.abdetect", "null" ], [ "fuckAdBlock", "trueFunc" ], [ "abp", "false" ], [ "document.onkeydown", "noopFunc" ], [ "getSelection", "undefined" ], [ "document.onkeydown", "null" ], [ "console.clear", "noopFunc" ], [ "document.oncontextmenu", "noopFunc" ], [ "x5engine.utils.imCodeProtection", "null" ], [ "ansFrontendGlobals.settings.signupWallType", "undefined" ], [ "onload", "null" ], [ "document.documentElement.AdBlockDetection", "noopFunc" ], [ "document.ondragstart", "noopFunc" ], [ "document.onmousedown", "noopFunc" ], [ "document.onselectstart", "noopFunc" ], [ "disableselect", "trueFunc" ], [ "document.oncontextmenu", "" ], [ "document.onselectstart", "" ], [ "document.onkeydown", "" ], [ "document.onmousedown", "" ], [ "document.onclick", "" ], [ "document.body.onmouseup", "null" ], [ "document.oncopy", "null" ], [ "SD_BLOCKTHROUGH", "true" ], [ "document.onkeydown", "trueFunc" ], [ "ab", "false" ], [ "canRunAds", "true" ], [ "document.body.oncut", "null" ], [ "document.body.oncopy", "null" ], [ "console.log", "noopFunc" ], [ "document.onkeypress", "null" ], [ "mb.advertisingShouldBeEnabled", "false" ], [ "document.ondragstart", "trueFunc" ], [ "document.onselectstart", "trueFunc" ], [ "jsData.hasVideoMeteringUnlogEnabled", "undefined" ], [ "lepopup_abd_enabled", "" ], [ "Object.prototype.preroll", "[]" ], [ "document.oncontextmenu", "trueFunc" ], [ "devtoolsDetector", "undefined" ], [ "Object.prototype.bgOverlay", "noopFunc" ], [ "Object.prototype.fixedContentPos", "noopFunc" ], [ "console.dir", "noopFunc" ], [ "navigator.userAgent", "" ], [ "devtoolIsOpening", "noopFunc" ], [ "devtoolIsOpening", "undefined" ], [ "securityTool.disableRightClick", "noopFunc" ], [ "securityTool.disableF12", "noopFunc" ], [ "securityTool.disableCtrlP", "noopFunc" ], [ "securityTool.disableCtrlS", "noopFunc" ], [ "securityTool.disablePrintScreen", "noopFunc" ], [ "securityTool.disablePrintThisPage", "noopFunc" ], [ "securityTool.disableElementForPrintThisPage", "noopFunc" ], [ "checkAds", "noopFunc" ], [ "stopPrntScr", "noopFunc" ], [ "disableSelection", "undefined" ], [ "traffective", "true" ], [ "nocontext", "undefined" ], [ "disable_hot_keys", "undefined" ], [ "flashvars.autoplay", "" ], [ "document.body.oncopy", "null", "3" ], [ "document.body.onselectstart", "null", "3" ], [ "document.body.oncontextmenu", "null", "3" ], [ "Time_Start", "0" ], [ "DD", "trueFunc" ], [ "document.oncontextmenu", "null", "3" ], [ "Object.prototype._detectLoop", "noopFunc" ], [ "forbiddenList", "[]" ], [ "document.onkeypress", "trueFunc" ], [ "document.oncontextmenu", "true" ], [ "Object.prototype._detectLoop", "undefined" ], [ "SteadyWidgetSettings.adblockActive", "false" ], [ "devtoolsOpen", "false" ], [ "devtoolsDetector", "noopFunc" ], [ "DisDevTool", "undefined" ], [ "admiral", "noopFunc" ], [ "document.oncopy", "noopFunc" ], [ "initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage", "false" ], [ "mtGlobal.disabledAds", "true" ], [ "devtoolsDetector.launch", "noopFunc" ], [ "console.clear", "throwFunc" ], [ "ANN.ads.adblocked", "false" ], [ "maxUnauthenicatedArticleViews", "null" ], [ "placeAdsHandler", "noopFunc" ], [ "ramp.addUnits", "noopFunc" ], [ "pqdxwidthqt", "false" ], [ "nitroAds.loaded", "true" ], [ "jh_disabled_options_data", "null" ], [ "topMessage", "noopFunc" ], [ "document.onmousedown", "null" ], [ "forbidDebug", "noopFunc" ], [ "adblock", "2" ], [ "DisableDevtool", "noopFunc" ], [ "__NEXT_DATA__.props.pageProps.adPlacements", "undefined" ], [ "login_completed", "true" ], [ "console.table", "trueFunc" ], [ "console.log", "trueFunc" ], [ "Object.prototype.disableMenu", "false" ], [ "confirm", "noopFunc" ], [ "HTMLImageElement.prototype.onerror", "undefined" ] ], r = new Map([ [ "xn-----0b4asja8cbew2b4b0gd0edbjm2jpa1b1e9zva7a0347s4da2797e7qri.xn--1ck2e1b", 0 ], [ "up4stream.com", 1 ], [ "ups2up.fun", 1 ], [ "9tsu.vip", 1 ], [ "moviesapi.club", [ 1, 128 ] ], [ "watchx.top", 1 ], [ "xclient.info", 2 ], [ "bejson.com", 2 ], [ "impots.gouv.fr", 3 ], [ "airnavradar.com", 4 ], [ "radarbox.com", 4 ], [ "gearside.com", 5 ], [ "nytimes.com", [ 6, 7 ] ], [ "tvtropes.org", 8 ], [ "justtrucks.com.au", 9 ], [ "cittadinanza.biz", 10 ], [ "glistranieri.it", 10 ], [ "ideapod.com", [ 10, 21 ] ], [ "privivkainfo.ru", 10 ], [ "awebstories.com", [ 10, 103 ] ], [ "ancient.eu", 11 ], [ "intramed.net", 12 ], [ "protest.eu", 13 ], [ "northwestfirearms.com", 14 ], [ "techkings.org", 14 ], [ "spookshow.net", 15 ], [ "fosshub.com", 16 ], [ "pokemonforever.com", 17 ], [ "carsguide.com.au", 18 ], [ "humo.be", 19 ], [ "apksecured.com", 20 ], [ "intergate.info", 20 ], [ "alphapolis.co.jp", [ 20, 43 ] ], [ "chronologia.pl", [ 20, 43 ] ], [ "reportergazeta.pl", [ 20, 43, 47 ] ], [ "odiarioonline.com.br", [ 20, 55 ] ], [ "nordkorea-info.de", 20 ], [ "geotips.net", [ 20, 60 ] ], [ "noweconomy.live", 20 ], [ "naaree.com", [ 20, 55 ] ], [ "cda-hd.cc", 20 ], [ "hqq.to", [ 20, 56, 74 ] ], [ "tv-tokyo.co.jp", 20 ], [ "arti-definisi-pengertian.info", 20 ], [ "studyadda.com", [ 20, 138 ] ], [ "webwereld.nl", 22 ], [ "palemoon.org", 23 ], [ "wheel-size.com", 24 ], [ "aoezone.net", 25 ], [ "radioony.fm", 26 ], [ "mexiconewsdaily.com", 27 ], [ "technologyreview.com", 28 ], [ "bdcraft.net", 29 ], [ "instagram.com", 30 ], [ "wired.co.uk", 31 ], [ "gq-magazine.co.uk", 31 ], [ "glamourmagazine.co.uk", 31 ], [ "m.youtube.com", 32 ], [ "music.youtube.com", 32 ], [ "tv.youtube.com", 32 ], [ "www.youtube.com", 32 ], [ "youtubekids.com", 32 ], [ "buienradar.nl", 33 ], [ "clk.ink", 34 ], [ "earnload.*", 34 ], [ "windows101tricks.com", 35 ], [ "hindipix.*", [ 36, 37 ] ], [ "vidsrc.*", [ 37, 128, 141 ] ], [ "bitcine.app", [ 37, 144, 145 ] ], [ "cineby.app", [ 37, 144, 145 ] ], [ "moflix-stream.day", [ 37, 144, 145 ] ], [ "tv.verizon.com", [ 37, 144, 145 ] ], [ "fontsfree.pro", 38 ], [ "oceanof-games.com", 39 ], [ "strangermeetup.com", 40 ], [ "adslayuda.com", 41 ], [ "avdelphi.com", 42 ], [ "doods.*", 44 ], [ "ds2play.com", 44 ], [ "ds2video.com", 44 ], [ "d0o0d.com", 44 ], [ "vidembed.me", 44 ], [ "mzzcloud.life", 44 ], [ "videobot.stream", 44 ], [ "videovard.*", 44 ], [ "justswallows.net", 44 ], [ "onscreensvideo.com", 44 ], [ "katerionews.com", 44 ], [ "telenovelas-turcas.com.es", 44 ], [ "kmo.to", 44 ], [ "jeniusplay.com", [ 44, 119 ] ], [ "southcloud.tv", 44 ], [ "d0000d.com", 44 ], [ "4x4earth.com", 45 ], [ "jootc.com", [ 46, 47 ] ], [ "photobank.mainichi.co.jp", 48 ], [ "tbs.co.jp", 49 ], [ "rottentomatoes.com", 50 ], [ "sovetromantica.com", 51 ], [ "longecity.org", 52 ], [ "fruit01.xyz", 53 ], [ "foxteller.com", 53 ], [ "lyricstranslate.com", 54 ], [ "hardcoregames.ca", 55 ], [ "allsmo.com", 55 ], [ "themosvagas.com.br", 55 ], [ "urbharat.xyz", 55 ], [ "sportnews.to", [ 55, 80 ] ], [ "123movies.*", 56 ], [ "sbasian.pro", 56 ], [ "miraculous.to", [ 56, 79 ] ], [ "vtplayer.net", 56 ], [ "webnovel.com", 56 ], [ "pepperlive.info", 56 ], [ "unbiasedsenseevent.com", 56 ], [ "maxt.church", 56 ], [ "cool-etv.net", 56 ], [ "vgembed.com", [ 56, 113 ] ], [ "photopea.com", 56 ], [ "szkolawohyn.pl", 57 ], [ "torrentlawyer.com", [ 57, 62, 63, 64 ] ], [ "virpe.cc", 57 ], [ "gmarket.co.kr", [ 57, 63 ] ], [ "paesifantasma.it", 58 ], [ "talpo.it", 58 ], [ "quora.com", 59 ], [ "gmx.net", 61 ], [ "hoca4u.com", 63 ], [ "youmath.it", 65 ], [ "renditepassive.net", [ 66, 67, 68, 69, 70 ] ], [ "360doc.com", 71 ], [ "logonews.cn", 72 ], [ "spanishdict.com", 73 ], [ "cloudcomputingtopics.net", 74 ], [ "0123movies.ch", [ 74, 83, 87, 117 ] ], [ "epn.bz", 75 ], [ "affbank.com", 76 ], [ "gardenia.net", [ 77, 78 ] ], [ "meteoblue.com", 81 ], [ "novelpia.com", [ 82, 83 ] ], [ "brainly.*", 84 ], [ "blueraindrops.com", 85 ], [ "animecruzers.com", 86 ], [ "descargatepelis.com", 87 ], [ "news.ntv.co.jp", 87 ], [ "bongdaplus.vn", 87 ], [ "bestjavporn.com", 88 ], [ "mm9841.cc", 88 ], [ "ggwash.org", [ 89, 90 ] ], [ "ask4movie.*", [ 91, 92 ] ], [ "watch.lonelil.com", 92 ], [ "cinegrabber.com", 93 ], [ "layarkacaxxi.icu", 94 ], [ "readawrite.com", [ 95, 96, 97, 98, 99, 100, 101 ] ], [ "morosedog.gitlab.io", 102 ], [ "indianhealthyrecipes.com", 104 ], [ "tarnkappe.info", 105 ], [ "freereadnovel.online", [ 106, 107 ] ], [ "reborntrans.com", [ 106, 107 ] ], [ "secondlifetranslations.com", [ 106, 107 ] ], [ "heavyfetish.com", 108 ], [ "joysound.com", [ 109, 110, 111 ] ], [ "colors.sonicthehedgehog.com", [ 111, 114 ] ], [ "bluemediafile.*", 112 ], [ "leakedzone.com", 115 ], [ "mehoathinh2.com", 116 ], [ "brutal.io", 118 ], [ "powerline.io", 118 ], [ "enduro-mtb.com", 120 ], [ "kukaj.io", 121 ], [ "animesaga.in", 122 ], [ "aniwave.*", 123 ], [ "anix.*", 123 ], [ "flixrave.to", 123 ], [ "hdtoday.so", 123 ], [ "hurawatch.bz", 123 ], [ "vidplay.*", 123 ], [ "vid2faf.site", 123 ], [ "lazyadmin.nl", 124 ], [ "thejakartapost.com", 125 ], [ "fullxh.com", 126 ], [ "galleryxh.site", 126 ], [ "megaxh.com", 126 ], [ "movingxh.world", 126 ], [ "seexh.com", 126 ], [ "unlockxh4.com", 126 ], [ "valuexh.life", 126 ], [ "xhaccess.com", 126 ], [ "xhadult4.com", 126 ], [ "xhamster.*", 126 ], [ "xhamster1.*", 126 ], [ "xhamster10.*", 126 ], [ "xhamster11.*", 126 ], [ "xhamster12.*", 126 ], [ "xhamster13.*", 126 ], [ "xhamster14.*", 126 ], [ "xhamster15.*", 126 ], [ "xhamster16.*", 126 ], [ "xhamster17.*", 126 ], [ "xhamster18.*", 126 ], [ "xhamster19.*", 126 ], [ "xhamster20.*", 126 ], [ "xhamster2.*", 126 ], [ "xhamster3.*", 126 ], [ "xhamster4.*", 126 ], [ "xhamster42.*", 126 ], [ "xhamster46.com", 126 ], [ "xhamster5.*", 126 ], [ "xhamster7.*", 126 ], [ "xhamster8.*", 126 ], [ "xhbig.com", 126 ], [ "xhbranch5.com", 126 ], [ "xhchannel.com", 126 ], [ "xhdate.world", 126 ], [ "xhday.com", 126 ], [ "xhday1.com", 126 ], [ "xhmoon5.com", 126 ], [ "xhofficial.com", 126 ], [ "xhopen.com", 126 ], [ "xhplanet1.com", 126 ], [ "xhplanet2.com", 126 ], [ "xhreal2.com", 126 ], [ "xhspot.com", 126 ], [ "xhtotal.com", 126 ], [ "xhvictory.com", 126 ], [ "xhwebsite5.com", 126 ], [ "xhwide5.com", 126 ], [ "marinetraffic.com", 127 ], [ "ymovies.vip", 128 ], [ "aniwatch.to", 128 ], [ "aniwatchtv.to", 128 ], [ "megacloud.tv", 128 ], [ "hianime.*", 128 ], [ "hianimez.to", 128 ], [ "putlocker.vip", 128 ], [ "rapid-cloud.co", 128 ], [ "rabbitstream.net", 128 ], [ "pupupul.site", 128 ], [ "netu.*", 128 ], [ "netuplayer.top", 128 ], [ "stbnetu.xyz", 128 ], [ "thotsbay.tv", 128 ], [ "vipstreams.in", 128 ], [ "freewatchtv.top", 128 ], [ "gdplayertv.*", 128 ], [ "mixstreams.top", 128 ], [ "tvfreemium.top", 128 ], [ "abysscdn.com", 128 ], [ "grostembed.online", 129 ], [ "premiumembeding.cloud", 129 ], [ "venusembed.site", 129 ], [ "animekai.*", 129 ], [ "anigo.to", 129 ], [ "megaup.cc", 129 ], [ "animenewsnetwork.com", 130 ], [ "androidpolice.com", 131 ], [ "makeuseof.com", 131 ], [ "movieweb.com", 131 ], [ "xda-developers.com", 131 ], [ "thegamer.com", 131 ], [ "cbr.com", 131 ], [ "gamerant.com", 131 ], [ "screenrant.com", 131 ], [ "howtogeek.com", 131 ], [ "thethings.com", 131 ], [ "simpleflying.com", 131 ], [ "dualshockers.com", 131 ], [ "digminecraft.com", 132 ], [ "arras.io", 133 ], [ "arras.netlify.app", 133 ], [ "arrax.io", 133 ], [ "how-to-pc.info", 134 ], [ "programming-link.info", 134 ], [ "maxroll.gg", 135 ], [ "tv.bdix.app", 136 ], [ "hitokageproduction.com", 137 ], [ "dngz.net", 139 ], [ "vnexpress.net", 140 ], [ "archon.gg", 142 ], [ "einthusan.tv", 143 ], [ "sussytoons.*", 146 ], [ "astro-cric.pages.dev", 147 ], [ "crichype.*", 147 ], [ "jio.pftv.ws", 147 ], [ "shz.al", 147 ], [ "tnt2-cricstreaming.pages.dev", 147 ], [ "wlo-cricstreamiing.pages.dev", 147 ], [ "sporttotal.tv", 148 ] ]), c = new Map([]), a = (e, o, t) => {
        let n = o.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) t.add(e); else t.add(n);
    }, s = (() => {
        const e = document.location, o = [ e.origin ];
        return e.ancestorOrigins && o.push(...e.ancestorOrigins), o.map(((e, o) => {
            const t = e.lastIndexOf("://");
            if (-1 === t) return;
            const n = e.slice(t + 3), r = n.indexOf(":");
            return {
                hn: -1 === r ? n : n.slice(0, r),
                i: o
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === s.length) return;
    const l = new Set, u = new Set;
    ((e, o = "") => {
        const t = e.split("."), n = t.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${t.slice(e).join(".")}${o}`;
                a(n, r, l), a(n, c, u);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let i = e; i > n; i--) {
                    const e = `${t.slice(n, i).join(".")}.*${o}`;
                    a(e, r, l), a(e, c, u);
                }
            }
        }
    })(s[0].hn);
    for (const o of l) if (!u.has(o)) try {
        e(...n[o]);
    } catch {}
}();