!function() {
    function e(...e) {
        !function(e = !1, o = "", n = "") {
            if ("" === o) return;
            const r = t(), c = r.makeLogPrefix("set-constant", o, n), i = r.getExtraArgs(Array.from(arguments), 3);
            function a(o, n) {
                const a = (() => {
                    const e = o.lastIndexOf(".");
                    return -1 === e ? o : o.slice(e + 1);
                })();
                if ("" === a) return;
                const l = document.currentScript;
                let d = function(e, o, n = {}) {
                    const r = t();
                    let c;
                    if ("undefined" === o) c = void 0; else if ("false" === o) c = !1; else if ("true" === o) c = !0; else if ("null" === o) c = null; else if ("''" === o || "" === o) c = ""; else if ("[]" === o || "emptyArr" === o) c = []; else if ("{}" === o || "emptyObj" === o) c = {}; else if ("noopFunc" === o) c = function() {}; else if ("trueFunc" === o) c = function() {
                        return !0;
                    }; else if ("falseFunc" === o) c = function() {
                        return !1;
                    }; else if ("throwFunc" === o) c = function() {
                        throw "";
                    }; else if (/^-?\d+$/.test(o)) {
                        if (c = parseInt(o), isNaN(o)) return;
                        if (Math.abs(o) > 32767) return;
                    } else {
                        if (!e) return;
                        if (o.startsWith("json:")) try {
                            c = r.JSON_parse(o.slice(5));
                        } catch {
                            return;
                        } else if (o.startsWith("{") && o.endsWith("}")) try {
                            c = r.JSON_parse(o).value;
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
                }(e, n, i);
                "noopFunc" !== n && "trueFunc" !== n && "falseFunc" !== n || (d = (e => (r.Object_defineProperty(e, "name", {
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
                })))(d));
                let u = !1;
                const m = function(t) {
                    return !e && (!!u || (u = null != t && null != d && typeof t != typeof d, u && r.uboLog(c, `Aborted because value set to ${t}`), 
                    u));
                }, p = function(e, t, o, n) {
                    if (!1 === n.init(o ? e[t] : d)) return;
                    const i = r.Object_getOwnPropertyDescriptor(e, t);
                    let a, s;
                    i instanceof r.Object && (e[t] = d, i.get instanceof Function && (a = i.get), i.set instanceof Function && (s = i.set));
                    try {
                        r.Object_defineProperty(e, t, {
                            configurable: o,
                            get: () => (void 0 !== a && a(), n.getter()),
                            set(e) {
                                void 0 !== s && s(e), n.setter(e);
                            }
                        }), r.uboLog(c, "Trap installed");
                    } catch (e) {
                        r.uboErr(c, e);
                    }
                }, f = function(e, t) {
                    const o = t.indexOf(".");
                    if (-1 === o) return void p(e, t, !1, {
                        v: void 0,
                        init: function(e) {
                            return !m(e) && (this.v = e, !0);
                        },
                        getter: function() {
                            return document.currentScript === l ? this.v : (r.uboLog(c, "Property read"), d);
                        },
                        setter: function(e) {
                            !1 !== m(e) && (d = e);
                        }
                    });
                    const n = t.slice(0, o), i = e[n];
                    t = t.slice(o + 1), i instanceof r.Object || "object" == typeof i && null !== i ? f(i, t) : p(e, n, !0, {
                        v: void 0,
                        init: function(e) {
                            return this.v = e, !0;
                        },
                        getter: function() {
                            return this.v;
                        },
                        setter: function(e) {
                            this.v = e, e instanceof r.Object && f(e, t);
                        }
                    });
                };
                f(window, o);
            }
            !function(e, o) {
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
                    }, o = Array.isArray(e) ? e : [ e ];
                    for (const e of o) {
                        const o = `${e}`;
                        if (!1 !== Object.hasOwn(t, o)) return t[o];
                    }
                    return 0;
                }, r = n(o);
                if (n(document.readyState) >= r) return void e();
                const i = t(), a = [ "readystatechange", () => {
                    n(document.readyState) < r || (e(), i.removeEventListener.apply(document, a));
                }, {
                    capture: !0
                } ];
                i.addEventListener.apply(document, a);
            }((() => {
                a(o, n);
            }), i.runAt);
        }(!1, ...e);
    }
    function t() {
        if (o.safeSelf) return o.safeSelf;
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
                const o = !0 !== t.canNegate || !1 === e.startsWith("!");
                !1 === o && (e = e.slice(1));
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== n ? {
                    re: new this.RegExp(n[1], n[2] || t.flags),
                    expect: o
                } : void 0 !== t.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                    expect: o
                } : {
                    pattern: e,
                    expect: o
                };
            },
            testPattern(e, t) {
                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
            },
            patternToRegex(e, t, o = !1) {
                if ("" === e) return /^/;
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === n) {
                    const n = this.escapeRegexChars(e);
                    return new RegExp(o ? `^${n}$` : n, t);
                }
                try {
                    return new RegExp(n[1], n[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const o = e.slice(t).reduce(((e, t, o, n) => {
                    if (0 == (1 & o)) {
                        const t = n[o + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ n[o], r ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(o);
            },
            onIdle: (t, o) => e.requestIdleCallback ? e.requestIdleCallback(t, o) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (o.safeSelf = t, void 0 === o.bcSecret) return t;
        t.logLevel = o.logLevel || 1;
        let n = "", r = "", c = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return o === r && e === n && Date.now() - c < 5e3 ? void 0 : (n = e, r = o, c = Date.now(), 
            o);
        };
        try {
            const n = new e.BroadcastChannel(o.bcSecret);
            let r = [];
            t.sendToLogger = (e, ...o) => {
                const c = t.toLogText(e, ...o);
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
                    r.forEach((({type: e, text: t}) => n.postMessage({
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
            }, n.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...o) => {
                const n = t.toLogText(e, ...o);
                void 0 !== n && t.log(`uBO ${n}`);
            };
        }
        return t;
    }
    const o = {}, n = [ [ "_an.ABMode", "undefined" ], [ "adClickCount", "0" ], [ "close", "undefined" ], [ "DHAntiAdBlocker", "true" ], [ "checkAdBlock", "noopFunc" ], [ "detectedAdblock", "noopFunc" ], [ "hasAdblocker", "false" ], [ "googletag", "{}" ], [ "googletag._loaded_", "true" ], [ "AdblockDetector", "{}" ], [ "canRunAds", "true" ], [ "blockAdBlock._options", "noopFunc" ], [ "adManagerBlocked", "undefined" ], [ "$MICROSITE_INFO.blockAdBlock", "false" ], [ "adblock.check", "noopFunc" ], [ "adBlockerActive", "false" ], [ "cdo", "0" ], [ "DeRunAds", "true" ], [ "Object.prototype.adblockerEnabled", "false" ], [ "adsbygoogle.loaded", "true" ], [ "adBlockCheck", "true" ], [ "pp_show_popupmessage", "noopFunc" ], [ "easySettings.adblock", "0" ], [ "onload", "null" ], [ "adsbygoogle.length", "undefined" ], [ "WSL2.config.enableAdblockEcommerce", "0" ], [ "ads_unblocked", "true" ], [ "adblock", "true" ], [ "better_ads_adblock", "true" ], [ "adBlockDetected", "false" ], [ "isAdsDisplayed", "true" ], [ "ATESTADO", "1" ], [ "Lata", "1" ], [ "loadingAds", "true" ], [ "dclm_ajax_var.disclaimer_redirect_url", "" ], [ "ShowRewards", "noopFunc" ], [ "initPopunder", "noopFunc" ], [ "URL_VAST_YOUTUBE", "{}" ], [ "__configuredDFPTags", "{}" ], [ "contadorClics", "1" ], [ "Object.prototype.adSlot", "" ], [ "google.ima.OmidVerificationVendor", "{}" ], [ "ads", "false" ], [ "acdl", "noopFunc" ], [ "global.noobMaxTry", "0" ], [ "player.preroll", "noopFunc" ], [ "anunciotag", "noopFunc" ], [ "loadingAds", "undefined" ], [ "click", "1" ], [ "clickd", "1" ], [ "xxxStore", "undefined" ], [ "vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads", "" ], [ "a_consola", "noopFunc" ], [ "VASTVideoPlayer", "noopFunc" ], [ "go_to_playerVast", "noopFunc" ], [ "cnt1max", "0" ], [ "ifrconta", "0" ], [ "clickmax", "0" ], [ "redirigido", "true" ], [ "redirigir", "noopFunc" ] ], r = new Map([ [ "elcorreogallego.es", 0 ], [ "redecanaistv.*", [ 1, 2 ] ], [ "redecanais.*", [ 1, 2 ] ], [ "latinpornhd.com", 3 ], [ "cinelatino.net", 4 ], [ "descargaseriestv.com", 5 ], [ "coempregos.com.br", 5 ], [ "anitube.us", 5 ], [ "anitube.vip", 5 ], [ "hinatasoul.com", 5 ], [ "3djuegos.com", 6 ], [ "3djuegosguias.com", 6 ], [ "3djuegospc.com", 6 ], [ "applesfera.com", 6 ], [ "compradiccion.com", 6 ], [ "directoalpaladar.com", [ 6, 25 ] ], [ "elblogsalmon.com", [ 6, 25 ] ], [ "espinof.com", 6 ], [ "genbeta.com", 6 ], [ "mundoxiaomi.com", 6 ], [ "trendencias.com", 6 ], [ "trendenciashombre.com", 6 ], [ "vidaextra.com", 6 ], [ "vitonica.com", 6 ], [ "xataka.com", 6 ], [ "xatakaciencia.com", 6 ], [ "xatakafoto.com", 6 ], [ "xatakahome.com", 6 ], [ "xatakamovil.com", 6 ], [ "xatakandroid.com", 6 ], [ "xatakawindows.com", 6 ], [ "atv.pe", [ 7, 8 ] ], [ "monumental.co.cr", [ 7, 8 ] ], [ "elcomercio.com", [ 7, 8 ] ], [ "antena7.com.do", [ 7, 8 ] ], [ "rqp.com.bo", [ 7, 8 ] ], [ "canal12.com.sv", [ 7, 8 ] ], [ "chapintv.com", [ 7, 8 ] ], [ "vtv.com.hn", [ 7, 8 ] ], [ "tn23.tv", [ 7, 8 ] ], [ "canal13mexico.com", [ 7, 8 ] ], [ "c9n.com.py", [ 7, 8 ] ], [ "repretel.com", [ 7, 8 ] ], [ "redbolivision.tv.bo", [ 7, 8 ] ], [ "animesonline.nz", 9 ], [ "mdr.ar", 10 ], [ "impactoespananoticias.com", 10 ], [ "skynovels.net", 10 ], [ "botinnifit.com", 10 ], [ "minhasdelicias.com", 10 ], [ "luchaonline.com", 10 ], [ "minhaconexao.com.br", 10 ], [ "meocloud.pt", 11 ], [ "fichajes.com", 12 ], [ "niusdiario.es", [ 13, 41 ] ], [ "xerifetech.com", 14 ], [ "pobre.wtf", [ 15, 42 ] ], [ "suaads.com", 16 ], [ "reidoplacar.com", [ 16, 43 ] ], [ "suaurl.com", [ 16, 43 ] ], [ "documaniatv.com", 17 ], [ "cadenaser.com", 18 ], [ "texto.kom.gt", 19 ], [ "infojobs.com.br", 20 ], [ "maringapost.com.br", 21 ], [ "bandab.com.br", 21 ], [ "ouniversodatv.com", 22 ], [ "tribunaavila.com", 23 ], [ "empregoestagios.com", 24 ], [ "satcesc.com", 24 ], [ "bebesymas.com", 25 ], [ "diariodelviajero.com", 25 ], [ "motorpasion.com", 25 ], [ "motorpasionmoto.com", 25 ], [ "pymesyautonomos.com", 25 ], [ "docer.com.ar", 26 ], [ "doceru.com", 26 ], [ "docero.com.br", 26 ], [ "comandotorrents.org", 27 ], [ "adslayuda.com", 28 ], [ "outerspace.com.br", 29 ], [ "doramasmp4.com", 30 ], [ "anitube.*", 31 ], [ "file4go.net", 32 ], [ "seriesdonghua.com", 33 ], [ "mundodonghua.com", 33 ], [ "ricoysuave.com", 34 ], [ "clickjogos.com.br", 35 ], [ "3xyaoi.com", 36 ], [ "uol.com.br", [ 37, 38 ] ], [ "megafire.net", 39 ], [ "elmundo.es", 40 ], [ "payad.lat", 44 ], [ "uberxviral.com", 44 ], [ "eldiario24hrs.com", 44 ], [ "constanteonline.com", 44 ], [ "acortaz.es", 44 ], [ "myfirstdollar.org", 44 ], [ "gourlpro.com", 44 ], [ "mundopolo.net", 44 ], [ "adclicker.io", 44 ], [ "solopc.net", 44 ], [ "player.hentaistube.com", 45 ], [ "playnewserie.xyz", 46 ], [ "tiohentai.xyz", 47 ], [ "otakustv.com", [ 48, 49 ] ], [ "pornolandia.xxx", 50 ], [ "hentaiporno.xxx", 51 ], [ "fakings.com", 52 ], [ "embed69.org", [ 53, 54 ] ], [ "peliseries.xyz", [ 55, 56, 57 ] ], [ "seriesperu.com", 58 ], [ "peliculas8k.com", 59 ] ]), c = new Map([]), i = (e, t, o) => {
        let n = t.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) o.add(e); else o.add(n);
    }, s = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const o = e.lastIndexOf("://");
            if (-1 === o) return;
            const n = e.slice(o + 3), r = n.indexOf(":");
            return {
                hn: -1 === r ? n : n.slice(0, r),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === s.length) return;
    const l = new Set, d = new Set;
    ((e, t = "") => {
        const o = e.split("."), n = o.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${o.slice(e).join(".")}${t}`;
                i(n, r, l), i(n, c, d);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let a = e; a > n; a--) {
                    const e = `${o.slice(n, a).join(".")}.*${t}`;
                    i(e, r, l), i(e, c, d);
                }
            }
        }
    })(s[0].hn);
    for (const t of l) if (!d.has(t)) try {
        e(...n[t]);
    } catch {}
}();