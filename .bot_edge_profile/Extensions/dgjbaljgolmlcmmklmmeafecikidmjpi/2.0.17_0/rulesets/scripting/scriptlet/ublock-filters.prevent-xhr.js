!function() {
    function e(...e) {
        return function(e = !1, n = "", r = "") {
            if ("string" != typeof n) return;
            const i = o(), a = e ? "trusted-prevent-xhr" : "prevent-xhr", s = i.makeLogPrefix(a, n, r), c = new WeakMap, m = function(e, t = "") {
                const n = o(), r = new Map;
                if (void 0 === e || "" === e) return r;
                const i = {
                    canNegate: !0
                };
                for (const o of n.String_split.call(e, /\s+/)) {
                    let [e, a] = n.String_split.call(o, ":");
                    "" !== e && (void 0 !== a && /[^$\w -]/.test(e) && (e = `${e}:${a}`, a = void 0), 
                    void 0 !== a ? r.set(e, n.initPattern(a, i)) : "" !== t && r.set(t, n.initPattern(e, i)));
                }
                return r;
            }(n, "url"), l = t.warOrigin, p = (e, o) => {
                try {
                    e.dispatchEvent(new Event(o));
                } catch {}
            }, d = XMLHttpRequest.prototype;
            self.XMLHttpRequest = class extends self.XMLHttpRequest {
                open(e, t, ...a) {
                    if (c.delete(this), void 0 !== l && t.startsWith(l)) return super.open(e, t, ...a);
                    const p = {
                        method: e,
                        url: t
                    };
                    if ("" === n && "" === r) return i.uboLog(s, `Called: ${i.JSON_stringify(p, null, 2)}`), 
                    super.open(e, t, ...a);
                    if (function(e, ...t) {
                        const n = o(), r = [];
                        for (const o of t) if (o instanceof Object != 0) for (const [t, i] of e) {
                            let e = o[t];
                            if (void 0 !== e) {
                                if ("string" != typeof e) {
                                    try {
                                        e = n.JSON_stringify(e);
                                    } catch {}
                                    if ("string" != typeof e) continue;
                                }
                                if (!1 === n.testPattern(i, e)) return;
                                r.push(`${t}: ${e}`);
                            }
                        }
                        return r;
                    }(m, p)) {
                        const e = Object.assign(p, {
                            xhr: this,
                            defer: 0 === a.length || !!a[0],
                            directive: r,
                            headers: {
                                date: "",
                                "content-type": "",
                                "content-length": ""
                            },
                            url: p.url,
                            props: {
                                response: {
                                    value: ""
                                },
                                responseText: {
                                    value: ""
                                },
                                responseXML: {
                                    value: null
                                }
                            }
                        });
                        c.set(this, e);
                    }
                    return super.open(e, t, ...a);
                }
                send(...n) {
                    const a = c.get(this);
                    if (void 0 === a) return super.send(...n);
                    a.headers.date = (new Date).toUTCString();
                    let m = "";
                    switch (this.responseType) {
                      case "arraybuffer":
                        a.props.response.value = new ArrayBuffer(0), a.headers["content-type"] = "application/octet-stream";
                        break;

                      case "blob":
                        a.props.response.value = new Blob([]), a.headers["content-type"] = "application/octet-stream";
                        break;

                      case "document":
                        {
                            const e = (new DOMParser).parseFromString("", "text/html");
                            a.props.response.value = e, a.props.responseXML.value = e, a.headers["content-type"] = "text/html";
                            break;
                        }

                      case "json":
                        a.props.response.value = {}, a.props.responseText.value = "{}", a.headers["content-type"] = "application/json";
                        break;

                      default:
                        if ("" === r) break;
                        m = function(e, n) {
                            const r = o(), i = e => {
                                const o = [];
                                let t = 0;
                                do {
                                    const e = r.Math_random().toString(36).slice(2);
                                    o.push(e), t += e.length;
                                } while (t < e);
                                return o.join(" ").slice(0, e);
                            };
                            if ("true" === n) return i(10);
                            if ("emptyObj" === n) return "{}";
                            if ("emptyArr" === n) return "[]";
                            if ("emptyStr" === n) return "";
                            if (n.startsWith("length:")) {
                                const e = /^length:(\d+)(?:-(\d+))?$/.exec(n);
                                if (null === e) return "";
                                const o = parseInt(e[1], 10), t = r.Math_max(parseInt(e[2], 10) || 0, o) - o;
                                return i(0 | r.Math_min(o + t * r.Math_random(), 5e5));
                            }
                            return n.startsWith("war:") ? void 0 === t.warOrigin ? "" : new Promise((e => {
                                const o = [ t.warOrigin, "/", n.slice(4) ], i = t.warSecret;
                                void 0 !== i && o.push("?secret=", i);
                                const a = new r.XMLHttpRequest;
                                a.responseType = "text", a.onloadend = o => {
                                    e(o.target.responseText || "");
                                }, a.open("GET", o.join("")), a.send();
                            })).catch((() => "")) : e ? n : "";
                        }(e, a.directive), m instanceof Promise ? m = m.then((e => {
                            a.props.response.value = e, a.props.responseText.value = e;
                        })) : (a.props.response.value = m, a.props.responseText.value = m), a.headers["content-type"] = "text/plain";
                    }
                    if (!1 === a.defer) return a.headers["content-length"] = `${a.props.response.value}`.length, 
                    Object.defineProperties(a.xhr, {
                        readyState: {
                            value: 4
                        },
                        responseURL: {
                            value: a.url
                        },
                        status: {
                            value: 200
                        },
                        statusText: {
                            value: "OK"
                        }
                    }), void Object.defineProperties(a.xhr, a.props);
                    Promise.resolve(m).then((() => a)).then((e => (Object.defineProperties(e.xhr, {
                        readyState: {
                            value: 1,
                            configurable: !0
                        },
                        responseURL: {
                            value: a.url
                        }
                    }), p(e.xhr, "readystatechange"), e))).then((e => (a.headers["content-length"] = `${e.props.response.value}`.length, 
                    Object.defineProperties(e.xhr, {
                        readyState: {
                            value: 2,
                            configurable: !0
                        },
                        status: {
                            value: 200
                        },
                        statusText: {
                            value: "OK"
                        }
                    }), p(e.xhr, "readystatechange"), e))).then((e => (Object.defineProperties(e.xhr, {
                        readyState: {
                            value: 3,
                            configurable: !0
                        }
                    }), Object.defineProperties(e.xhr, e.props), p(e.xhr, "readystatechange"), e))).then((e => {
                        Object.defineProperties(e.xhr, {
                            readyState: {
                                value: 4
                            }
                        }), p(e.xhr, "readystatechange"), p(e.xhr, "load"), p(e.xhr, "loadend"), i.uboLog(s, `Prevented with response:\n${e.xhr.response}`);
                    }));
                }
                getResponseHeader(e) {
                    const o = c.get(this);
                    if (void 0 === o || this.readyState < this.HEADERS_RECEIVED) return super.getResponseHeader(e);
                    const t = o.headers[e.toLowerCase()];
                    return void 0 !== t && "" !== t ? t : null;
                }
                getAllResponseHeaders() {
                    const e = c.get(this);
                    if (void 0 === e || this.readyState < this.HEADERS_RECEIVED) return super.getAllResponseHeaders();
                    const o = [];
                    for (const [t, n] of Object.entries(e.headers)) n && o.push(`${t}: ${n}`);
                    return 0 !== o.length && o.push(""), o.join("\r\n");
                }
            }, self.XMLHttpRequest.prototype.open.toString = function() {
                return d.open.toString();
            }, self.XMLHttpRequest.prototype.send.toString = function() {
                return d.send.toString();
            }, self.XMLHttpRequest.prototype.getResponseHeader.toString = function() {
                return d.getResponseHeader.toString();
            }, self.XMLHttpRequest.prototype.getAllResponseHeaders.toString = function() {
                return d.getAllResponseHeaders.toString();
            };
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
        let n = "", r = "", i = 0;
        o.toLogText = (e, ...o) => {
            if (0 === o.length) return;
            const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
            return t === r && e === n && Date.now() - i < 5e3 ? void 0 : (n = e, r = t, i = Date.now(), 
            t);
        };
        try {
            const n = new e.BroadcastChannel(t.bcSecret);
            let r = [];
            o.sendToLogger = (e, ...t) => {
                const i = o.toLogText(e, ...t);
                if (void 0 !== i) return void 0 === r ? n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: i
                }) : void r.push({
                    type: e,
                    text: i
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
    const t = {}, n = [ [ "/vast.php?" ], [ "/click\\.com|preroll|native_render\\.js|acscdn/", "length:10001" ], [ "162.252.214.4", "true" ], [ "c.adsco.re" ], [ "adsco.re:2087" ], [ "/fd/ls/lsp.aspx" ], [ "mobileanalytics" ], [ "cloudflare.com/cdn-cgi/trace" ], [ "doubleclick" ], [ "/recommendations." ], [ "/api/analytics" ], [ "api" ], [ "lr-ingest.io" ], [ "/gtm.js" ], [ "ip-api" ], [ "/froloa.js" ], [ "1.1.1.1/cdn-cgi/trace" ], [ "live.streamtheworld.com/partnerIds" ], [ "ads.viralize.tv" ], [ "request=adb" ], [ "googlesyndication" ], [ "/adsbygoogle|doubleclick/" ], [ "/enthusiastgaming|googleoptimize|googletagmanager/" ], [ "/doubleclick|googlesyndication/" ], [ "/^(?!.*(einthusan\\.io|yahoo|rtnotif|ajax|quantcast|bugsnag))/" ], [ "/adnxs.com|onetag-sys.com|teads.tv|google-analytics.com|rubiconproject.com|casalemedia.com/" ], [ "ad_" ], [ "/googlesyndication|outbrain/" ], [ "method:HEAD" ], [ "ads" ], [ "svonm" ], [ "/\\/VisitorAPI\\.js|\\/AppMeasurement\\.js/" ], [ "inklinkor.com" ], [ "damoh" ], [ "homad-global-configs" ], [ "/youboranqs01|spotx|springserve/" ], [ "adsbygoogle" ], [ "popunder" ], [ "/pagead2\\.googlesyndication\\.com|inklinkor\\.com/" ], [ "czilladx" ], [ "outbrain" ], [ "/googlesyndication|doubleclick/", "length:10" ], [ "/ad" ], [ "wp-json/rsm-adutil", "true" ], [ "prebid" ], [ "/ads" ], [ "pub.network" ], [ "googlesyndication", "length:10" ], [ "pagead2.googlesyndication.com" ], [ "url:googlesyndication" ], [ "/^/" ], [ "/analytics|livestats/" ], [ "mahimeta" ], [ "ad" ], [ "notifier" ], [ "/ad-" ], [ "/coinzillatag|czilladx/" ], [ "/thaudray\\.com|putchumt\\.com/" ], [ "php" ], [ "/googlesyndication|doubleclick/" ], [ "bmcdn6" ], [ "adx" ], [ "cls_report?" ], [ "adswizz.com" ], [ "googletagmanager" ], [ "/googlesyndication|ads/" ], [ "time-events" ], [ "criteo" ], [ "/googlesyndication|nitropay/" ], [ "method:GET url:!/idlix|jwpcdn/" ], [ "/doubleclick|googlesyndication/", "length:10" ], [ "/googlesyndication|googima\\.js/" ], [ "/adskeeper|bidgear|googlesyndication|mgid/" ], [ "fwmrm.net" ], [ "/\\/ad\\/g\\/1/" ], [ "adsbygoogle", "length:10" ], [ "adinplay.com" ], [ "springserve.com" ], [ "taboola" ], [ "/redirector\\.googlevideo\\.com\\/videoplayback[\\s\\S]*?dclk_video_ads/" ], [ "ad.plus" ], [ "pubfuture", "length:10" ], [ "secure.adnxs.com/ptv?cb=", "war:noop-vast2.xml" ], [ "googlesyndication", "war:googlesyndication_adsbygoogle.js" ], [ "url:ad/banner.gif" ], [ "method:POST url:/logImpressions" ], [ "method:POST" ], [ "utreon.com/pl/api/event method:POST" ], [ "log-sdk.ksapisrv.com/rest/wd/common/log/collect method:POST" ], [ "/VisitorAPI|AppMeasurement/" ], [ "analytics/bulk-pixel" ], [ "cmp.inmobi.com/geoip" ], [ "method:POST url:pfanalytics.bentasker.co.uk" ], [ "discord.com/api/v9/science" ], [ "/(trace|beacon)\\.qq\\.com/" ], [ "excess.duolingo.com/batch" ], [ "/eventLog.ajax" ], [ "t.wayfair.com/b.php?" ], [ "ceros.com/a?data" ], [ "/eventhub\\.\\w+\\.miro\\.com\\/api\\/stream/" ] ], r = new Map([ [ "poophq.com", [ 0, 1, 2, 3, 4 ] ], [ "veev.to", [ 0, 1, 2, 3, 4 ] ], [ "doods.to", [ 0, 1, 2, 3, 4 ] ], [ "bing.com", 5 ], [ "viu.com", 6 ], [ "myair2.resmed.com", 7 ], [ "travelerdoor.com", 7 ], [ "meteoetradar.com", 8 ], [ "gala.fr", 8 ], [ "geo.fr", 8 ], [ "voici.fr", 8 ], [ "moviepilot.de", 8 ], [ "3dzip.org", 8 ], [ "asiaon.*", [ 8, 47 ] ], [ "asiaontop.com", [ 8, 47 ] ], [ "journaldemontreal.com", 8 ], [ "minhaconexao.com.br", 8 ], [ "videolyrics.in", 8 ], [ "sportshub.to", [ 8, 20 ] ], [ "topsporter.net", 8 ], [ "azby.fmworld.net", 9 ], [ "unrealengine.com", 10 ], [ "wco.tv", 11 ], [ "dark-gaming.com", 12 ], [ "securegames.iwin.com", 13 ], [ "neilpatel.com", 14 ], [ "virginmediatelevision.ie", 15 ], [ "myair.resmed.com", 16 ], [ "player.amperwave.net", 17 ], [ "abs-cbn.com", 18 ], [ "handelsblatt.com", 19 ], [ "sankaku.app", 20 ], [ "ge-map-overlays.appspot.com", 20 ], [ "freegogpcgames.com", 20 ], [ "postazap.com", 20 ], [ "laweducationinfo.com", 20 ], [ "savemoneyinfo.com", 20 ], [ "worldaffairinfo.com", 20 ], [ "godstoryinfo.com", 20 ], [ "successstoryinfo.com", 20 ], [ "cxissuegk.com", 20 ], [ "learnmarketinfo.com", 20 ], [ "bhugolinfo.com", 20 ], [ "armypowerinfo.com", 20 ], [ "rsgamer.app", 20 ], [ "phonereviewinfo.com", 20 ], [ "makeincomeinfo.com", 20 ], [ "gknutshell.com", 20 ], [ "vichitrainfo.com", 20 ], [ "workproductivityinfo.com", 20 ], [ "dopomininfo.com", 20 ], [ "hostingdetailer.com", 20 ], [ "fitnesssguide.com", 20 ], [ "tradingfact4u.com", 20 ], [ "cryptofactss.com", 20 ], [ "softwaredetail.com", 20 ], [ "artoffocas.com", 20 ], [ "insurancesfact.com", 20 ], [ "travellingdetail.com", 20 ], [ "mitaku.net", 20 ], [ "38.242.194.12", 20 ], [ "bi-girl.net", 20 ], [ "blurayufr.*", 20 ], [ "idealfollow.in", 20 ], [ "medeberiyaa.com", 20 ], [ "samuraiscan.org", 20 ], [ "shinobijawi.id", 20 ], [ "snbc13.com", 20 ], [ "teluguflix.*", 20 ], [ "adelsfun.com", 20 ], [ "advantien.com", 20 ], [ "bailbondsfinder.com", 20 ], [ "bg-gledai.*", 20 ], [ "bigpiecreative.com", 20 ], [ "childrenslibrarylady.com", 20 ], [ "classifarms.com", 20 ], [ "comtasq.ca", 20 ], [ "crone.es", 20 ], [ "ctrmarketingsolutions.com", 20 ], [ "dropnudes.com", 20 ], [ "ftuapps.dev", 20 ], [ "gendatabase.com", 20 ], [ "genzsport.com", 20 ], [ "gledaitv.*", 20 ], [ "grsprotection.com", 20 ], [ "gruporafa.com.br", 20 ], [ "inmatefindcalifornia.com", 20 ], [ "inmatesearchidaho.com", 20 ], [ "itsonsitetv.com", 20 ], [ "mfmfinancials.com", 20 ], [ "myproplugins.com", 20 ], [ "nurulislam.org", 20 ], [ "onehack.us", 20 ], [ "ovester.com", 20 ], [ "paste.bin.sx", 20 ], [ "privatenudes.com", 20 ], [ "renoconcrete.ca", 20 ], [ "richieashbeck.com", 20 ], [ "short1ink.com", 20 ], [ "stpm.co.uk", 20 ], [ "wegotcookies.co", 20 ], [ "rangerboard.com", 20 ], [ "informaxonline.com", [ 20, 42 ] ], [ "nsw2u.*", 20 ], [ "cambb.xxx", 20 ], [ "nudecams.xxx", 20 ], [ "cinemakottaga.*", 20 ], [ "routech.ro", 20 ], [ "edealinfo.com", 20 ], [ "homeairquality.org", 20 ], [ "techtrim.tech", 20 ], [ "pigeonburger.xyz", 20 ], [ "askpaccosi.com", [ 20, 53 ] ], [ "fusedgt.com", 20 ], [ "apkowner.org", 20 ], [ "appsmodz.com", 20 ], [ "bingotingo.com", 20 ], [ "superpsx.com", 20 ], [ "stringreveals.com", 20 ], [ "fox.com", 20 ], [ "obutecodanet.ig.com.br", 20 ], [ "firmwarex.net", 20 ], [ "softwaretotal.net", 20 ], [ "freecodezilla.net", 20 ], [ "apkmaven.*", 20 ], [ "iconmonstr.com", 20 ], [ "rbxscripts.net", 20 ], [ "rimworldbase.com", 20 ], [ "ewrc-results.com", 20 ], [ "adslink.pw", 20 ], [ "comentariodetexto.com", 20 ], [ "wordpredia.com", 20 ], [ "hilites.today", 20 ], [ "sportnews.to", 20 ], [ "gsmhamza.com", 20 ], [ "h-game18.xyz", 20 ], [ "webmatrices.com", 20 ], [ "fordownloader.com", 20 ], [ "intro-hd.net", 20 ], [ "animehub.ac", 20 ], [ "kissanime.*", 20 ], [ "yottachess.com", 20 ], [ "infidrive.net", 20 ], [ "animefreak.to", 20 ], [ "9animes.ru", 20 ], [ "couponscorpion.com", 20 ], [ "hollaforums.com", 20 ], [ "powforums.com", 20 ], [ "supforums.com", 20 ], [ "fxmag.pl", 20 ], [ "meteopool.org", 20 ], [ "ssstik.io", 20 ], [ "animefever.cc", 20 ], [ "digipuzzle.net", 20 ], [ "crn.com", 20 ], [ "btv.bg", 20 ], [ "btvsport.bg", 20 ], [ "btvnovinite.bg", 20 ], [ "animedao.com.ru", 20 ], [ "bitchute.com", 20 ], [ "hunterscomics.com", [ 20, 81 ] ], [ "animepahe.*", 20 ], [ "cupra.forum", 20 ], [ "latinluchas.com", 20 ], [ "smartworld.it", 20 ], [ "condorsoft.co", 20 ], [ "buickforums.com", 20 ], [ "pinsystem.co.uk", 21 ], [ "thesimsresource.com", 22 ], [ "gnomio.com", 23 ], [ "techacode.com", 23 ], [ "trangchu.news", 23 ], [ "freemagazines.top", 23 ], [ "cybermania.ws", 23 ], [ "techhelpbd.com", 23 ], [ "dogsexporn.net", 23 ], [ "yomucomics.com", 23 ], [ "souq-design.com", 23 ], [ "gaypornhot.com", 23 ], [ "einthusan.*", 24 ], [ "youmath.it", 25 ], [ "frkn64modding.com", 26 ], [ "zigforums.com", 27 ], [ "animeheaven.*", 28 ], [ "gearingcommander.com", 29 ], [ "stfly.biz", 29 ], [ "airevue.net", 29 ], [ "atravan.net", 29 ], [ "khatrimaza.*", 29 ], [ "novelmultiverse.com", 29 ], [ "taming.io", 29 ], [ "cekip.site", 29 ], [ "snlookup.com", 29 ], [ "globfone.com", 29 ], [ "chimicamo.org", 29 ], [ "webforefront.com", 29 ], [ "apkmagic.com.ar", 29 ], [ "reaperscans.id", 29 ], [ "moviegan.*", 29 ], [ "writedroid.*", 29 ], [ "filmisub.cc", 29 ], [ "play-games.com", 29 ], [ "gameszap.com", 29 ], [ "differenceprimitive85p.shop", 29 ], [ "vox.de", 30 ], [ "vip.de", 30 ], [ "rtl.de", 30 ], [ "cinema.de", 30 ], [ "nationalgeographic.fr", 31 ], [ "oko.sh", 32 ], [ "golem.de", 33 ], [ "tek.no", 33 ], [ "wetter.de", 34 ], [ "rakuten.tv", 35 ], [ "hausbau-forum.de", 36 ], [ "khaddavi.net", 36 ], [ "lokerwfh.net", 36 ], [ "emoji.gg", 36 ], [ "texture-packs.com", 36 ], [ "manyakan.com", 36 ], [ "persianhive.com", 36 ], [ "boainformacao.com.br", 36 ], [ "gcertificationcourse.com", 36 ], [ "tech-story.net", 36 ], [ "visalist.io", 36 ], [ "hacksnation.com", 36 ], [ "litecoin.host", 36 ], [ "blackhatworld.com", 36 ], [ "ainonline.com", 36 ], [ "dailyrevs.com", 36 ], [ "uptime4.com", 36 ], [ "swdw.net", 36 ], [ "cmtracker.net", 36 ], [ "icegame.ro", 36 ], [ "cookni.net", 36 ], [ "stickers.gg", 36 ], [ "aiimgvlog.fun", 37 ], [ "bestclaimtrx.xyz", 37 ], [ "tpi.li", 38 ], [ "oii.la", 38 ], [ "exactpay.online", 39 ], [ "faucetcrypto.net", 39 ], [ "file4go.net", 40 ], [ "ariversegl.com", 41 ], [ "boyfuck.me", 41 ], [ "cgtips.org", 41 ], [ "dvdgayporn.com", 41 ], [ "dx-tv.com", 41 ], [ "filmyzones.com", 41 ], [ "freereadnovel.online", 41 ], [ "idlixvip.*", 41 ], [ "javboys.tv", 41 ], [ "netfuck.net", 41 ], [ "tojimangas.com", 41 ], [ "tuktukcinma.com", 41 ], [ "vercanalesdominicanos.com", 41 ], [ "citytv.com", 43 ], [ "jetpunk.com", 44 ], [ "simplebits.io", 45 ], [ "flightsim.to", 46 ], [ "1cloudfile.com", 48 ], [ "empire-anime.*", 48 ], [ "empire-streaming.*", 48 ], [ "empire-anime.com", 48 ], [ "empire-streamz.fr", 48 ], [ "empire-stream.*", 48 ], [ "koramaup.com", 48 ], [ "stardeos.com", 49 ], [ "freewp.io", 50 ], [ "goduke.com", 51 ], [ "1apple.xyz", 52 ], [ "lavanguardia.com", 54 ], [ "foodsdictionary.co.il", 55 ], [ "freesolana.top", 56 ], [ "streamingcommunity.*", 57 ], [ "farescd.com", 58 ], [ "getintoway.com", 59 ], [ "bitcotasks.com", 60 ], [ "freetron.top", 61 ], [ "earncrypto.co.in", 61 ], [ "citi.com", 62 ], [ "hotfm.audio", 63 ], [ "maxt.church", 64 ], [ "srvy.ninja", 65 ], [ "history.com", 66 ], [ "cimanow.cc", 67 ], [ "freex2line.online", 67 ], [ "osuskinner.com", 68 ], [ "osuskins.net", 68 ], [ "idlix.asia", 69 ], [ "alliptvlinks.com", 70 ], [ "play.nova.bg", 71 ], [ "readcomiconline.*", 72 ], [ "u.co.uk", 73 ], [ "uktvplay.co.uk", 73 ], [ "uktvplay.uktv.co.uk", 73 ], [ "channel4.com", 74 ], [ "pomofocus.io", 75 ], [ "royaledudes.io", 76 ], [ "tptvencore.co.uk", 77 ], [ "anitube.vip", 78 ], [ "sbs.com.au", 79 ], [ "opentunnel.net", 80 ], [ "teleboy.ch", [ 82, 83 ] ], [ "kijk.nl", 84 ], [ "docs.google.com", 85 ], [ "endbasic.dev", 86 ], [ "jmmv.dev", 86 ], [ "fingerprint.com", 86 ], [ "utreon.com", 87 ], [ "zhihu.com", 88 ], [ "natgeotv.com", 89 ], [ "airtel.in", 90 ], [ "dailystar.co.uk", 91 ], [ "mirror.co.uk", 91 ], [ "bentasker.co.uk", 92 ], [ "discord.com", 93 ], [ "meeting.tencent.com", 94 ], [ "duolingo.com", 95 ], [ "study.com", 96 ], [ "wayfair.com", 97 ], [ "view.ceros.com", 98 ], [ "miro.com", 99 ] ]), i = new Map([ [ "dev.fingerprint.com", [ 86 ] ] ]), a = (e, o, t) => {
        let n = o.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) t.add(e); else t.add(n);
    }, c = (() => {
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
    if (0 === c.length) return;
    const m = new Set, l = new Set;
    ((e, o = "") => {
        const t = e.split("."), n = t.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${t.slice(e).join(".")}${o}`;
                a(n, r, m), a(n, i, l);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let s = e; s > n; s--) {
                    const e = `${t.slice(n, s).join(".")}.*${o}`;
                    a(e, r, m), a(e, i, l);
                }
            }
        }
    })(c[0].hn);
    for (const o of m) if (!l.has(o)) try {
        e(...n[o]);
    } catch {}
}();