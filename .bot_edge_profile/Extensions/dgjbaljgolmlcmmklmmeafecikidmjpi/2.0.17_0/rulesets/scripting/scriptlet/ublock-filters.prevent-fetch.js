!function() {
    function e(...e) {
        !function(e = !1, c = "", n = "", a = "") {
            const s = t(), r = (e ? "trusted-" : "") + "prevent-fetch", l = s.makeLogPrefix(r, c, n, a), m = [];
            for (const e of s.String_split.call(c, /\s+/)) {
                if ("" === e) continue;
                const o = e.indexOf(":");
                let t, i;
                -1 !== o ? (t = e.slice(0, o), i = e.slice(o + 1)) : (t = "url", i = e), m.push({
                    key: t,
                    pattern: s.initPattern(i, {
                        canNegate: !0
                    })
                });
            }
            const d = {
                ok: [ !1, !0 ],
                statusText: [ "", "Not Found" ],
                type: [ "basic", "cors", "default", "error", "opaque" ]
            }, g = {
                statusText: {
                    value: "OK"
                }
            };
            if (/^\{.*\}$/.test(a)) try {
                Object.entries(JSON.parse(a)).forEach((([e, o]) => {
                    void 0 !== d[e] && !1 !== d[e].includes(o) && (g[e] = {
                        value: o
                    });
                }));
            } catch {} else "" !== a && d.type.includes(a) && (g.type = {
                value: a
            });
            o("fetch", (function(o) {
                const {callArgs: a} = o, r = a[0] instanceof self.Request ? a[0] : Object.assign({
                    url: a[0]
                }, a[1]);
                let d = !0;
                try {
                    const e = new Map;
                    for (const o in r) {
                        let t = r[o];
                        if ("string" != typeof t) try {
                            t = s.JSON_stringify(t);
                        } catch {}
                        "string" == typeof t && e.set(o, t);
                    }
                    if (s.logLevel > 1 || "" === c && "" === n) {
                        const o = Array.from(e).map((e => `${e[0]}:${e[1]}`));
                        s.uboLog(l, `Called: ${o.join("\n")}`);
                    }
                    if ("" === c && "" === n) return o.reflect();
                    d = 0 === m.length;
                    for (const {key: o, pattern: t} of m) if (t.expect && !1 === e.has(o) || !1 === s.testPattern(t, e.get(o))) {
                        d = !0;
                        break;
                    }
                } catch {}
                return d ? o.reflect() : Promise.resolve(function(e, o) {
                    const c = t(), n = e => {
                        const o = [];
                        let t = 0;
                        do {
                            const e = c.Math_random().toString(36).slice(2);
                            o.push(e), t += e.length;
                        } while (t < e);
                        return o.join(" ").slice(0, e);
                    };
                    if ("true" === o) return n(10);
                    if ("emptyObj" === o) return "{}";
                    if ("emptyArr" === o) return "[]";
                    if ("emptyStr" === o) return "";
                    if (o.startsWith("length:")) {
                        const e = /^length:(\d+)(?:-(\d+))?$/.exec(o);
                        if (null === e) return "";
                        const t = parseInt(e[1], 10), i = c.Math_max(parseInt(e[2], 10) || 0, t) - t;
                        return n(0 | c.Math_min(t + i * c.Math_random(), 5e5));
                    }
                    return o.startsWith("war:") ? void 0 === i.warOrigin ? "" : new Promise((e => {
                        const t = [ i.warOrigin, "/", o.slice(4) ], n = i.warSecret;
                        void 0 !== n && t.push("?secret=", n);
                        const a = new c.XMLHttpRequest;
                        a.responseType = "text", a.onloadend = o => {
                            e(o.target.responseText || "");
                        }, a.open("GET", t.join("")), a.send();
                    })).catch((() => "")) : e ? o : "";
                }(e, n)).then((e => {
                    s.uboLog(l, `Prevented with response "${e}"`);
                    const o = new Response(e, {
                        headers: {
                            "Content-Length": e.length
                        }
                    }), t = Object.assign({
                        url: {
                            value: r.url
                        }
                    }, g);
                    return s.Object_defineProperties(o, t), o;
                }));
            }));
        }(!1, ...e);
    }
    function o(e = "", t = "") {
        let i = globalThis, c = e;
        for (;;) {
            const e = c.indexOf(".");
            if (-1 === e) break;
            if (i = i[c.slice(0, e)], i instanceof Object == 0) return;
            c = c.slice(e + 1);
        }
        const n = i[c];
        if ("function" != typeof n) return;
        void 0 === o.CtorContext && (o.ctorContexts = [], o.CtorContext = class {
            constructor(...e) {
                this.init(...e);
            }
            init(e, o) {
                return this.callFn = e, this.callArgs = o, this;
            }
            reflect() {
                const e = Reflect.construct(this.callFn, this.callArgs);
                return this.callFn = this.callArgs = this.private = void 0, o.ctorContexts.push(this), 
                e;
            }
            static factory(...e) {
                return 0 !== o.ctorContexts.length ? o.ctorContexts.pop().init(...e) : new o.CtorContext(...e);
            }
        }, o.applyContexts = [], o.ApplyContext = class {
            constructor(...e) {
                this.init(...e);
            }
            init(e, o, t) {
                return this.callFn = e, this.thisArg = o, this.callArgs = t, this;
            }
            reflect() {
                const e = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                return this.callFn = this.thisArg = this.callArgs = this.private = void 0, o.applyContexts.push(this), 
                e;
            }
            static factory(...e) {
                return 0 !== o.applyContexts.length ? o.applyContexts.pop().init(...e) : new o.ApplyContext(...e);
            }
        });
        const a = n.toString(), s = function() {
            return a;
        }.bind(null), r = {
            apply: (e, i, c) => t(o.ApplyContext.factory(e, i, c)),
            get: (e, o) => "toString" === o ? s : Reflect.get(e, o)
        };
        n.prototype?.constructor === n && (r.construct = function(e, i) {
            return t(o.CtorContext.factory(e, i));
        }), i[c] = new Proxy(n, r);
    }
    function t() {
        if (i.safeSelf) return i.safeSelf;
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
                const i = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== i ? {
                    re: new this.RegExp(i[1], i[2] || o.flags),
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
                const i = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === i) {
                    const i = this.escapeRegexChars(e);
                    return new RegExp(t ? `^${i}$` : i, o);
                }
                try {
                    return new RegExp(i[1], i[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, o = 0) {
                const t = e.slice(o).reduce(((e, o, t, i) => {
                    if (0 == (1 & t)) {
                        const o = i[t + 1], c = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                        e.push([ i[t], c ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(t);
            },
            onIdle: (o, t) => e.requestIdleCallback ? e.requestIdleCallback(o, t) : e.requestAnimationFrame(o),
            offIdle: o => e.requestIdleCallback ? e.cancelIdleCallback(o) : e.cancelAnimationFrame(o)
        };
        if (i.safeSelf = o, void 0 === i.bcSecret) return o;
        o.logLevel = i.logLevel || 1;
        let t = "", c = "", n = 0;
        o.toLogText = (e, ...o) => {
            if (0 === o.length) return;
            const i = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
            return i === c && e === t && Date.now() - n < 5e3 ? void 0 : (t = e, c = i, n = Date.now(), 
            i);
        };
        try {
            const t = new e.BroadcastChannel(i.bcSecret);
            let c = [];
            o.sendToLogger = (e, ...i) => {
                const n = o.toLogText(e, ...i);
                if (void 0 !== n) return void 0 === c ? t.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                }) : void c.push({
                    type: e,
                    text: n
                });
            }, t.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === c) break;
                    c.forEach((({type: e, text: o}) => t.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: o
                    }))), c = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    o.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    o.logLevel = 2;
                }
            }, t.postMessage("areyouready?");
        } catch {
            o.sendToLogger = (e, ...t) => {
                const i = o.toLogText(e, ...t);
                void 0 !== i && o.log(`uBO ${i}`);
            };
        }
        return o;
    }
    const i = {}, c = [ [ "/\\/\\/ansuksar\\.com\\/[0-9a-zA-Z]{3,26}\\/\\d{4,6}\\b/", "length:125746" ], [ "-load.com/script/", "length:101" ], [ "method:HEAD" ], [ "googlesyndication" ], [ "marmalade" ], [ "url:ipapi.co" ], [ "doubleclick" ], [ "api" ], [ "cloudflare.com/cdn-cgi/trace" ], [ "/piwik-" ], [ "adsbygoogle" ], [ "toiads" ], [ "/^/" ], [ "player-feedback" ], [ "openx" ], [ "ads" ], [ "googlesyndication", "method:HEAD" ], [ "doubleclick", "length:10", '{"type":"cors"}' ], [ "damoh.ani-stream.com" ], [ "ujsmediatags method:HEAD" ], [ "/googlesyndication|inklinkor|ads\\/load/" ], [ "googlesyndication", "length:2001" ], [ "zomap.de" ], [ "adsafeprotected" ], [ "google" ], [ "url:!luscious.net" ], [ "doubleclick", "", '{"type": "opaque"}' ], [ "bmcdn6" ], [ "/adoto|\\/ads\\/js/" ], [ "googletagmanager" ], [ "adsby" ], [ "/veepteero|tag\\.min\\.js/" ], [ "surfe.pro" ], [ "adsbygoogle.js" ], [ "/adsbygoogle|googletagservices/" ], [ "/doubleclick|googlesyndication/" ], [ "/googlesyndication|doubleclick/", "length:10", '{"type": "cors"}' ], [ "/ad\\.doubleclick\\.net|static\\.dable\\.io/" ], [ "/gaid=", "war:noop-vast2.xml" ], [ "popunder" ], [ "doubleclick.net/instream/ad_status.js", "war:doubleclick_instream_ad_status.js" ], [ "manager" ], [ "moonicorn.network" ], [ "doubleclick.com", "", "opaque" ], [ "/ads" ], [ "method:HEAD url:doubleclick.net" ], [ "tvid.in/log" ], [ "/ads|imasdk/" ], [ "cloudfront.net/?" ], [ "/nerveheels/" ], [ "ad" ], [ "analytics" ], [ "wtg-ads" ], [ "googlesyndication", "length:10", '{"type": "cors"}' ], [ "googlesyndication", "length:10", '{"type":"cors"}' ], [ "/ads|doubleclick/" ], [ "dqst.pl" ], [ "uniconsent.com", "length:2300" ], [ "vlitag" ], [ "adsbygoogle", "length:11000" ], [ "imasdk" ], [ "tpc.googlesyndication.com" ], [ "gloacmug.net" ], [ "/cloudfront|thaudray\\.com/" ], [ "adskeeper" ], [ "/freychang|passback|popunder|tag|banquetunarmedgrater/" ], [ "google-analytics" ], [ "ima" ], [ "imasdk.googleapis.com" ], [ "/adoto|googlesyndication/" ], [ "ad-delivery" ], [ "ima3_dai" ], [ "dai_iframe" ], [ "method:GET" ], [ "/ads|googletagmanager/" ], [ "/adsbygoogle|doubleclick/" ], [ "/doubleclick|googlesyndication/", "length:10", '{"type":"cors"}' ], [ "/doubleclick|googlesyndication|vlitag/", "length:10", '{"type": "cors"}' ], [ "/api/v1/events" ], [ "cloudfront" ], [ "/outbrain|criteo|thisiswaldo|media\\.net|ohbayersbur|adligature|quantserve|srvtrck|\\.css|\\.js/" ], [ "/googlesyndication|googima\\.js/" ], [ "fwmrm.net" ], [ "ads", "length:10", '{"type": "cors"}' ], [ "ads-twitter.com" ], [ "secure.adnxs.com/ptv", "war:noop-vast4.xml" ], [ "googlesyndication", "war:google-ima.js" ], [ "googlesyndication", "", '{"type":"cors"}' ], [ "pogo" ], [ "doubleclick.net" ], [ "jssdks.mparticle.com" ], [ "/adinplay|googlesyndication/" ], [ "/outbrain|adligature|quantserve|adligature|srvtrck/" ], [ "youradexchange" ], [ "/clarity|googlesyndication/" ], [ "thanksgivingdelights" ], [ "snigelweb.com" ], [ "cdnpk.net/Rest/Media/", "war:noop.json" ], [ "/gampad/ads?" ], [ "googletagmanager", "length:10" ], [ "fundingchoicesmessages" ], [ "/googlesyndication|googletagservices/" ], [ "/doubleclick|google-analytics/" ], [ "/ip-acl-all.php" ], [ "/doubleclick|googlesyndication/", "length:10", '{"type": "cors"}' ], [ "mode:no-cors" ], [ "googlesyndication", "length:40000-60000" ], [ "googlesyndication", "method:HEAD mode:no-cors" ], [ "/rekaa" ], [ "=" ], [ "body:browser" ], [ "eventing" ], [ "api.theathletic.com/graphql body:/PostEvent|PostImpressions/" ], [ "method:POST body:zaraz" ], [ "url:/api/statsig/log_event method:POST" ], [ "data.bilibili.com" ], [ "splunkcloud.com/services/collector" ], [ "event-router.olympics.com" ], [ "hostingcloud.racing" ], [ "tvid.in/log/" ], [ "segment.io" ], [ "mparticle.com" ], [ "pluto.smallpdf.com" ], [ "method:/post/i url:/^https?:\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/" ], [ "method:/post/i url:ab.chatgpt.com/v1/rgstr" ] ], n = new Map([ [ "japscan.lol", 0 ], [ "dogdrip.net", [ 1, 37 ] ], [ "infinityfree.com", 1 ], [ "smsonline.cloud", 1 ], [ "bg-gledai.*", [ 2, 68 ] ], [ "gledaitv.*", [ 2, 68 ] ], [ "mac2sell.net", 2 ], [ "gamebrew.org", 2 ], [ "game3rb.com", 2 ], [ "sixsave.com", 2 ], [ "asiaon.top", 2 ], [ "asiaontop.com", 2 ], [ "bowfile.com", [ 2, 48 ] ], [ "dealsfinders.blog", 2 ], [ "iphonechecker.herokuapp.com", 2 ], [ "coloringpage.eu", 2 ], [ "conocimientoshackers.com", 2 ], [ "juegosdetiempolibre.org", 2 ], [ "karaokegratis.com.ar", 2 ], [ "mammaebambini.it", 2 ], [ "riazor.org", 2 ], [ "rinconpsicologia.com", 2 ], [ "sempredirebanzai.it", 2 ], [ "vectogravic.com", 2 ], [ "androidacy.com", 2 ], [ "lifestyle.bg", [ 2, 73 ] ], [ "news.bg", [ 2, 6, 73 ] ], [ "topsport.bg", [ 2, 73 ] ], [ "webcafe.bg", [ 2, 73 ] ], [ "barstoolsports.com", 2 ], [ "los40.com", 3 ], [ "faucetcrypto.com", 3 ], [ "tea-coffee.net", 3 ], [ "spatsify.com", 3 ], [ "newedutopics.com", 3 ], [ "getviralreach.in", 3 ], [ "edukaroo.com", 3 ], [ "funkeypagali.com", 3 ], [ "careersides.com", 3 ], [ "nayisahara.com", 3 ], [ "wikifilmia.com", 3 ], [ "infinityskull.com", 3 ], [ "viewmyknowledge.com", 3 ], [ "iisfvirtual.in", 3 ], [ "starxinvestor.com", 3 ], [ "jkssbalerts.com", 3 ], [ "m.jobinmeghalaya.in", 3 ], [ "mynewsmedia.co", 3 ], [ "overgal.com", 3 ], [ "howtoconcepts.com", 3 ], [ "ikramlar.online", 3 ], [ "tpi.li", 3 ], [ "oii.la", 3 ], [ "choiceappstore.xyz", 3 ], [ "djpunjab2.in", 3 ], [ "djqunjab.in", 3 ], [ "foodxor.com", 3 ], [ "geniussolutions.co", 3 ], [ "mealcold.com", 3 ], [ "mixrootmods.com", 3 ], [ "fartechy.com", 3 ], [ "investcrust.com", 3 ], [ "bantenexis.com", 3 ], [ "litonmods.com", 3 ], [ "universitiesonline.xyz", 3 ], [ "worldmak.com", 3 ], [ "updown.fun", 3 ], [ "ghscanner.com", 3 ], [ "sat.technology", 3 ], [ "minorpatch.com", 3 ], [ "wenxuecity.com", 3 ], [ "kiwiexploits.com", 3 ], [ "disheye.com", 3 ], [ "homeairquality.org", [ 3, 29 ] ], [ "techtrim.tech", 3 ], [ "arhplyrics.in", 3 ], [ "askpaccosi.com", 3 ], [ "quizack.com", 3 ], [ "apkandroidhub.in", 3 ], [ "studyis.xyz", 3 ], [ "prepostseo.com", 3 ], [ "dulichkhanhhoa.net", 3 ], [ "noithatmyphu.vn", 3 ], [ "iptvjournal.com", 3 ], [ "inbbotlist.com", 3 ], [ "getintoway.com", 3 ], [ "crdroid.net", 3 ], [ "beelink.pro", 3 ], [ "hax.co.id", 3 ], [ "woiden.id", 3 ], [ "theusaposts.com", 3 ], [ "hackr.io", 3 ], [ "rendimentibtp.it", 3 ], [ "sportshub.to", 3 ], [ "sportnews.to", 3 ], [ "esopress.com", 3 ], [ "paketmu.com", 3 ], [ "watchx.top", 3 ], [ "bitcosite.com", 3 ], [ "bitzite.com", 3 ], [ "coinsrev.com", 3 ], [ "globlenews.in", 3 ], [ "programmingeeksclub.com", 3 ], [ "archivebate.com", 3 ], [ "doctoraux.com", 3 ], [ "educationbluesky.com", 3 ], [ "hotkitchenbag.com", 3 ], [ "maths.media", 3 ], [ "maths.news", 3 ], [ "mathsspot.com", 3 ], [ "mathsstudio.com", 3 ], [ "mathstutor.life", 3 ], [ "now.gg", 3 ], [ "now.us", 3 ], [ "nowgg.lol", 3 ], [ "selfstudybrain.com", 3 ], [ "skibiditoilet.yourmom.eu.org", 3 ], [ "thewebsitesbridge.com", 3 ], [ "universityequality.com", 3 ], [ "virtualstudybrain.com", 3 ], [ "websitesball.com", 3 ], [ "websitesbridge.com", 3 ], [ "xn--31byd1i.net", 3 ], [ "unitystr.com", 3 ], [ "moto.it", 3 ], [ "wellness4live.com", 3 ], [ "forplayx.ink", 3 ], [ "moviesapi.club", 3 ], [ "bestx.stream", 3 ], [ "boosterx.stream", 3 ], [ "automoto.it", 3 ], [ "olarila.com", 3 ], [ "techedubyte.com", 3 ], [ "snapwordz.com", 3 ], [ "toolxox.com", 3 ], [ "go2share.net", 3 ], [ "flixscans.com", 3 ], [ "animefire.plus", 3 ], [ "freewsad.com", 3 ], [ "yt-downloaderz.com", 3 ], [ "hostmath.com", 3 ], [ "urlcut.ninja", 3 ], [ "fplstatistics.co.uk", 3 ], [ "fivemdev.org", 3 ], [ "winlator.com", 3 ], [ "sabornutritivo.com", 3 ], [ "metrolagu.cam", 3 ], [ "megane.com.pl", 3 ], [ "flixscans.org", 3 ], [ "civitai.com", 3 ], [ "civitai.green", 3 ], [ "streamer4u.site", 3 ], [ "imagetranslator.io", 3 ], [ "visnalize.com", 3 ], [ "tekken8combo.kagewebsite.com", 3 ], [ "custommapposter.com", 3 ], [ "scenexe2.io", 3 ], [ "ncaa.com", 3 ], [ "gurusiana.id", 3 ], [ "dichvureviewmap.com", 3 ], [ "technofino.in", 3 ], [ "vinstartheme.com", 3 ], [ "downev.com", 3 ], [ "vectorx.top", 3 ], [ "bong.ink", 3 ], [ "zippyshare.day", 3 ], [ "modescanlator.net", 3 ], [ "livexscores.com", 3 ], [ "btv.bg", 3 ], [ "btvsport.bg", 3 ], [ "btvnovinite.bg", 3 ], [ "101soundboards.com", 3 ], [ "freedrivemovie.com", 3 ], [ "leakshaven.com", 3 ], [ "dfbplay.tv", 3 ], [ "sheepesports.com", 3 ], [ "ytapi.cc", 3 ], [ "evaki.fun", 3 ], [ "bypass.link", 3 ], [ "tmail.sys64738.at", 3 ], [ "laser-pics.com", 3 ], [ "fsicomics.com", 3 ], [ "darts-scoring.com", 3 ], [ "seelen.io", 3 ], [ "videq.cloud", 3 ], [ "play.starsites.fun", 3 ], [ "pimylifeup.com", 4 ], [ "seazon.fr", 5 ], [ "independent.co.uk", 6 ], [ "wunderground.com", 6 ], [ "ctrlv.*", 6 ], [ "scrolller.com", 6 ], [ "journaldemontreal.com", 6 ], [ "tvanouvelles.ca", 6 ], [ "vods.tv", 6 ], [ "atresplayer.com", 6 ], [ "assettoworld.com", 6 ], [ "vtmgo.be", 6 ], [ "zerioncc.pl", 6 ], [ "tradingview.com", 6 ], [ "estudyme.com", 6 ], [ "jobfound.org", 6 ], [ "abs-cbn.com", 6 ], [ "sussytoons.*", 6 ], [ "moovitapp.com", 6 ], [ "servustv.com", 6 ], [ "missavtv.com", 6 ], [ "flixbaba.com", 6 ], [ "formatlibrary.com", 6 ], [ "business-standard.com", 6 ], [ "html5.gamedistribution.com", 7 ], [ "premio.io", 8 ], [ "flygbussarna.se", 9 ], [ "allmusic.com", 10 ], [ "wowescape.com", 10 ], [ "leechpremium.link", 10 ], [ "camcam.cc", 10 ], [ "nohat.cc", 10 ], [ "hindinews360.in", 10 ], [ "weshare.is", 10 ], [ "cyberlynews.com", 10 ], [ "djremixganna.com", 10 ], [ "hypicmodapk.org", 10 ], [ "keedabankingnews.com", 10 ], [ "rokni.xyz", 10 ], [ "technicalline.store", 10 ], [ "quizrent.com", 10 ], [ "isi7.net", 10 ], [ "pinloker.com", 10 ], [ "okiemrolnika.pl", 10 ], [ "pandadevelopment.net", 10 ], [ "decrypt.day", 10 ], [ "anakteknik.co.id", 10 ], [ "javball.com", 10 ], [ "visalist.io", 10 ], [ "moviesshub.*", 10 ], [ "zeenews.india.com", 10 ], [ "gadgetbond.com", 10 ], [ "updateroj24.com", 10 ], [ "cosplay-xxx.com", 10 ], [ "remotejobzone.online", 10 ], [ "cosmicapp.co", 10 ], [ "hentaicovid.org", 10 ], [ "sexwebvideo.com", 10 ], [ "gofile.download", 10 ], [ "discover-sharm.com", 10 ], [ "timesofindia.indiatimes.com", [ 11, 119 ] ], [ "skidrowreloaded.com", 12 ], [ "pinoyfaucet.com", 12 ], [ "zone-telechargement.*", 12 ], [ "topsporter.net", 12 ], [ "player.glomex.com", 13 ], [ "htmlgames.com", 14 ], [ "investing.com", 15 ], [ "mylivewallpapers.com", 15 ], [ "softfully.com", 15 ], [ "reminimod.co", 15 ], [ "highkeyfinance.com", 15 ], [ "amanguides.com", 15 ], [ "adcrypto.net", 15 ], [ "admediaflex.com", 15 ], [ "aduzz.com", 15 ], [ "bitcrypto.info", 15 ], [ "cdrab.com", 15 ], [ "datacheap.io", 15 ], [ "hbz.us", 15 ], [ "savego.org", 15 ], [ "owsafe.com", 15 ], [ "sportweb.info", 15 ], [ "apkupload.in", 15 ], [ "ezeviral.com", 15 ], [ "pngreal.com", 15 ], [ "ytpng.net", 15 ], [ "travel.vebma.com", 15 ], [ "cloud.majalahhewan.com", 15 ], [ "crm.cekresi.me", 15 ], [ "ai.tempatwisata.pro", 15 ], [ "cinedesi.in", 15 ], [ "thevouz.in", 15 ], [ "tejtime24.com", 15 ], [ "techishant.in", 15 ], [ "mtcremix.com", 15 ], [ "advicefunda.com", 15 ], [ "bestloanoffer.net", 15 ], [ "computerpedia.in", 15 ], [ "techconnection.in", 15 ], [ "key-hub.eu", 15 ], [ "discoveryplus.in", 15 ], [ "calculator-online.net", 15 ], [ "tutorial.siberuang.com", 15 ], [ "dotabuff.com", 15 ], [ "forum.cstalking.tv", 15 ], [ "mcqmall.com", 15 ], [ "witcherhour.com", 15 ], [ "clamor.pl", 15 ], [ "ozulscans.com", 15 ], [ "noor-book.com", 15 ], [ "wrzesnia.info.pl", 15 ], [ "pobre.*", 15 ], [ "compromath.com", 15 ], [ "sumoweb.to", 15 ], [ "haloursynow.pl", 15 ], [ "satkurier.pl", 15 ], [ "mtg-print.com", 15 ], [ "heavy.com", 15 ], [ "creators.nafezly.com", 15 ], [ "downloadfilm.website", 15 ], [ "uploadsea.com", 15 ], [ "bombuj.*", 15 ], [ "pornovka.cz", 15 ], [ "fplstatistics.com", 15 ], [ "cheater.ninja", 15 ], [ "govtportal.org", 15 ], [ "vide-greniers.org", 15 ], [ "muyinteresante.es", 16 ], [ "3dzip.org", 17 ], [ "ani-stream.com", 18 ], [ "uflash.tv", 19 ], [ "oko.sh", 20 ], [ "duden.de", 21 ], [ "joyn.de", 22 ], [ "joyn.at", 22 ], [ "joyn.ch", 22 ], [ "tf1.fr", 23 ], [ "exe.app", 24 ], [ "eio.io", 24 ], [ "ufacw.com", 24 ], [ "figurehunter.net", 24 ], [ "luscious.net", 25 ], [ "starkroboticsfrc.com", 26 ], [ "sinonimos.de", 26 ], [ "antonimos.de", 26 ], [ "quesignifi.ca", 26 ], [ "tiktokrealtime.com", 26 ], [ "tiktokcounter.net", 26 ], [ "tpayr.xyz", 26 ], [ "poqzn.xyz", 26 ], [ "ashrfd.xyz", 26 ], [ "rezsx.xyz", 26 ], [ "tryzt.xyz", 26 ], [ "ashrff.xyz", 26 ], [ "rezst.xyz", 26 ], [ "dawenet.com", 26 ], [ "erzar.xyz", 26 ], [ "waezm.xyz", 26 ], [ "waezg.xyz", 26 ], [ "blackwoodacademy.org", 26 ], [ "cryptednews.space", 26 ], [ "vivuq.com", 26 ], [ "swgop.com", 26 ], [ "vbnmll.com", 26 ], [ "telcoinfo.online", 26 ], [ "dshytb.com", 26 ], [ "quins.us", 26 ], [ "mdn.lol", 27 ], [ "bitcotasks.com", 27 ], [ "btcbitco.in", 28 ], [ "btcsatoshi.net", 28 ], [ "cempakajaya.com", 28 ], [ "crypto4yu.com", 28 ], [ "readbitcoin.org", 28 ], [ "wiour.com", 28 ], [ "senda.pl", 29 ], [ "dsmusic.in", 30 ], [ "www.apkmoddone.com", 31 ], [ "tutorialsaya.com", 10 ], [ "exactpay.online", 32 ], [ "filesupload.in", 33 ], [ "hindustantimes.com", 33 ], [ "indiainfo4u.in", 34 ], [ "canalobra.com", 35 ], [ "tulink.org", 35 ], [ "soccerinhd.com", 35 ], [ "ariversegl.com", 36 ], [ "boyfuck.me", 36 ], [ "cgtips.org", 36 ], [ "dvdgayporn.com", 36 ], [ "dx-tv.com", 36 ], [ "filmyzones.com", 36 ], [ "freereadnovel.online", 36 ], [ "idlixvip.*", 36 ], [ "javboys.tv", 36 ], [ "netfuck.net", 36 ], [ "tojimangas.com", 36 ], [ "tuktukcinma.com", 36 ], [ "vercanalesdominicanos.com", 36 ], [ "superpsx.com", 36 ], [ "hunterscomics.com", 36 ], [ "player.pl", 38 ], [ "camarchive.tv", 39 ], [ "cybermania.ws", 40 ], [ "fapdrop.com", 40 ], [ "linkpoi.me", 41 ], [ "platform.adex.network", 42 ], [ "watch.plex.tv", 43 ], [ "simplebits.io", 44 ], [ "tvnz.co.nz", 45 ], [ "timesnowhindi.com", 46 ], [ "timesnowmarathi.com", 46 ], [ "timesofindia.com", 46 ], [ "elahmad.com", 47 ], [ "1cloudfile.com", 49 ], [ "weszlo.com", 50 ], [ "wyze.com", 51 ], [ "mmorpg.org.pl", 52 ], [ "crunchyscan.fr", 53 ], [ "firmwarex.net", 54 ], [ "dongknows.com", 55 ], [ "forsal.pl", 56 ], [ "photopea.com", 57 ], [ "freeshib.biz", 58 ], [ "theappstore.org", 59 ], [ "deutschekanale.com", 60 ], [ "soranews24.com", 61 ], [ "ipalibrary.me", 62 ], [ "ipacrack.com", 63 ], [ "bravedown.com", 64 ], [ "smartkhabrinews.com", 65 ], [ "freepik-downloader.com", 66 ], [ "freepic-downloader.com", 66 ], [ "envato-downloader.com", 66 ], [ "ortograf.pl", 67 ], [ "mixrootmod.com", 69 ], [ "explorecams.com", 70 ], [ "southpark.*", [ 71, 72 ] ], [ "southparkstudios.*", [ 71, 72 ] ], [ "southpark.cc.com", 72 ], [ "money.bg", 73 ], [ "realmadryt.pl", 73 ], [ "ruidrive.com", 73 ], [ "poophd.video-src.com", 73 ], [ "myesports.gg", 73 ], [ "getthit.com", 74 ], [ "sshkit.com", 75 ], [ "fastssh.com", 75 ], [ "howdy.id", 75 ], [ "intro-hd.net", 76 ], [ "souq-design.com", 76 ], [ "gaypornhot.com", 76 ], [ "sonixgvn.net", 77 ], [ "everand.com", 78 ], [ "workink.click", 79 ], [ "work.ink", 80 ], [ "play.nova.bg", 81 ], [ "u.co.uk", 82 ], [ "uktvplay.co.uk", 82 ], [ "uktvplay.uktv.co.uk", 82 ], [ "jpopsingles.eu", 83 ], [ "hentaihaven.xxx", 84 ], [ "imasdk.googleapis.com", 85 ], [ "botrix.live", 86 ], [ "gunauc.net", 87 ], [ "buffsports.me", 88 ], [ "lemino.docomo.ne.jp", 89 ], [ "kfc.com", 90 ], [ "crazygames.com", 91 ], [ "freeshot.live", 92 ], [ "plustream.com", 93 ], [ "hancinema.net", 94 ], [ "javfc2.xyz", 95 ], [ "textreverse.com", 96 ], [ "flaticon.com", 97 ], [ "shahid.mbc.net", [ 98, 121 ] ], [ "tab-maker.com", 99 ], [ "faceittracker.net", 100 ], [ "fmovies0.cc", 101 ], [ "nikke.win", 102 ], [ "stream.offidocs.com", 103 ], [ "dogsexporn.net", 104 ], [ "yomucomics.com", 104 ], [ "sport.es", 105 ], [ "tubtic.com", 105 ], [ "kio.ac", 105 ], [ "zone.msn.com", 106 ], [ "www.msn.com", 107 ], [ "letemsvetemapplem.eu", 108 ], [ "flixrave.me", 109 ], [ "search.brave.com", 110 ], [ "coursera.org", 111 ], [ "nytimes.com", 112 ], [ "blog.cloudflare.com", 113 ], [ "www.cloudflare.com", 113 ], [ "grok.com", 114 ], [ "bilibili.com", 115 ], [ "notion.so", 116 ], [ "olympics.com", 117 ], [ "ceramic.or.kr", 118 ], [ "pandadoc.com", 120 ], [ "smallpdf.com", 122 ], [ "chatgpt.com", [ 123, 124 ] ] ]), a = new Map([]), s = (e, o, t) => {
        let i = o.get(e);
        if (void 0 !== i) if ("number" != typeof i) for (const e of i) t.add(e); else t.add(i);
    }, l = (() => {
        const e = document.location, o = [ e.origin ];
        return e.ancestorOrigins && o.push(...e.ancestorOrigins), o.map(((e, o) => {
            const t = e.lastIndexOf("://");
            if (-1 === t) return;
            const i = e.slice(t + 3), c = i.indexOf(":");
            return {
                hn: -1 === c ? i : i.slice(0, c),
                i: o
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === l.length) return;
    const m = new Set, d = new Set;
    ((e, o = "") => {
        const t = e.split("."), i = t.length;
        if (0 !== i) {
            for (let e = 0; e < i; e++) {
                const i = `${t.slice(e).join(".")}${o}`;
                s(i, n, m), s(i, a, d);
            }
            {
                const e = i - 1;
                for (let i = 0; i < e; i++) for (let c = e; c > i; c--) {
                    const e = `${t.slice(i, c).join(".")}.*${o}`;
                    s(e, n, m), s(e, a, d);
                }
            }
        }
    })(l[0].hn);
    for (const o of m) if (!d.has(o)) try {
        e(...c[o]);
    } catch {}
}();