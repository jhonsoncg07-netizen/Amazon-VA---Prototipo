!function() {
    function e(e = "", n = "") {
        const r = function() {
            if (c.safeSelf) return c.safeSelf;
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
                    const c = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    return null !== c ? {
                        re: new this.RegExp(c[1], c[2] || o.flags),
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
                    const c = /^\/(.+)\/([gimsu]*)$/.exec(e);
                    if (null === c) {
                        const c = this.escapeRegexChars(e);
                        return new RegExp(t ? `^${c}$` : c, o);
                    }
                    try {
                        return new RegExp(c[1], c[2] || void 0);
                    } catch {}
                    return /^/;
                },
                getExtraArgs(e, o = 0) {
                    const t = e.slice(o).reduce(((e, o, t, c) => {
                        if (0 == (1 & t)) {
                            const o = c[t + 1], n = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                            e.push([ c[t], n ]);
                        }
                        return e;
                    }), []);
                    return this.Object_fromEntries(t);
                },
                onIdle: (o, t) => e.requestIdleCallback ? e.requestIdleCallback(o, t) : e.requestAnimationFrame(o),
                offIdle: o => e.requestIdleCallback ? e.cancelIdleCallback(o) : e.cancelAnimationFrame(o)
            };
            if (c.safeSelf = o, void 0 === c.bcSecret) return o;
            o.logLevel = c.logLevel || 1;
            let t = "", n = "", r = 0;
            o.toLogText = (e, ...o) => {
                if (0 === o.length) return;
                const c = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                return c === n && e === t && Date.now() - r < 5e3 ? void 0 : (t = e, n = c, r = Date.now(), 
                c);
            };
            try {
                const t = new e.BroadcastChannel(c.bcSecret);
                let n = [];
                o.sendToLogger = (e, ...c) => {
                    const r = o.toLogText(e, ...c);
                    if (void 0 !== r) return void 0 === n ? t.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: r
                    }) : void n.push({
                        type: e,
                        text: r
                    });
                }, t.onmessage = e => {
                    switch (e.data) {
                      case "iamready!":
                        if (void 0 === n) break;
                        n.forEach((({type: e, text: o}) => t.postMessage({
                            what: "messageToLogger",
                            type: e,
                            text: o
                        }))), n = void 0;
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
                    const c = o.toLogText(e, ...t);
                    void 0 !== c && o.log(`uBO ${c}`);
                };
            }
            return o;
        }(), i = r.makeLogPrefix("prevent-setTimeout", e, n), s = "!" === e.charAt(0), a = r.patternToRegex(s ? e.slice(1) : e), m = new t(n);
        o("setTimeout", (function(o) {
            const {callArgs: t} = o, c = t[0] instanceof Function ? r.String(r.Function_toString(t[0])) : r.String(t[0]), n = t[1];
            return "" === e && m.unbound() ? (r.uboLog(i, `Called:\n${c}\n${n}`), o.reflect()) : (a.test(c) !== s && m.test(n) && (t[0] = function() {}, 
            r.uboLog(i, `Prevented:\n${c}\n${n}`)), o.reflect());
        }));
    }
    function o(e = "", t = "") {
        let c = globalThis, n = e;
        for (;;) {
            const e = n.indexOf(".");
            if (-1 === e) break;
            if (c = c[n.slice(0, e)], c instanceof Object == 0) return;
            n = n.slice(e + 1);
        }
        const r = c[n];
        if ("function" != typeof r) return;
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
        const i = r.toString(), s = function() {
            return i;
        }.bind(null), a = {
            apply: (e, c, n) => t(o.ApplyContext.factory(e, c, n)),
            get: (e, o) => "toString" === o ? s : Reflect.get(e, o)
        };
        r.prototype?.constructor === r && (a.construct = function(e, c) {
            return t(o.CtorContext.factory(e, c));
        }), c[n] = new Proxy(r, a);
    }
    class t {
        constructor(e) {
            if (this.not = "!" === e.charAt(0), this.not && (e = e.slice(1)), "" === e) return;
            const o = e.indexOf("-");
            0 !== o && (this.min = this.max = parseInt(e, 10) || 0), -1 !== o && (this.max = parseInt(e.slice(o + 1), 10) || Number.MAX_SAFE_INTEGER);
        }
        unbound() {
            return void 0 === this.min && void 0 === this.max;
        }
        test(e) {
            const o = Math.min(Math.max(Number(e) || 0, 0), Number.MAX_SAFE_INTEGER);
            return this.min === this.max ? (void 0 === this.min || o === this.min) !== this.not : void 0 === this.min ? o <= this.max !== this.not : void 0 === this.max ? o >= this.min !== this.not : (o >= this.min && o <= this.max) !== this.not;
        }
    }
    const c = {}, n = [ [ "show-login-layer-article" ], [ "||!!" ], [ "adsbygoogle" ], [ "ThriveGlobal" ], [ "check", "100" ], [ "ads", "2000" ], [ "scan", "500" ], [ "onload_popup", "8000" ], [ "Adblocker", "10000" ], [ "()", "2000" ], [ "()", "4000" ], [ "#advert-tracker", "500" ], [ "()", "3000" ], [ "()", "1000" ], [ "w3ad" ], [ "()", "1500" ], [ "bioEp.showPopup" ], [ "innerHTML" ], [ "adsBlocked" ], [ "showOverlay" ], [ "NoAd", "8000" ], [ "loginModal", "500" ], [ "()", "700" ], [ "warning" ], [ "__ext_loaded" ], [ "slideout" ], [ "AdBlocker" ], [ "modal" ], [ "offsetHeight" ], [ "adblock" ], [ "body" ], [ "null" ], [ "appendMessage" ], [ "()", "5000" ], [ "popup" ], [ "adblocker" ], [ "exit_popup", "10000" ], [ "show" ], [ "test.remove" ], [ "noscroll", "3000" ], [ "adsbygoogle", "5000" ], [ "google_jobrunner" ], [ "bait" ], [ "steady-adblock" ], [ "checkFeed", "1000" ], [ "samOverlay" ], [ "adStillHere" ], [ "adb" ], [ "offsetHeight", "100" ], [ "adBlockDetected" ], [ "premium" ], [ "blocked", "1000" ], [ "blocker" ], [ "SignUPPopup_load", "5000" ], [ ".modal", "1000" ], [ "Zord.analytics.registerBeforeLeaveEvent", "3000" ], [ "myModal", "3000" ], [ "an_message", "500" ], [ "_0x" ], [ "pipaId", "0" ], [ "pgblck" ], [ "forceRefresh" ], [ "pop" ], [ "ads" ], [ "head" ], [ "&adslot" ], [ "debugger" ], [ "ai_" ], [ "donation-modal" ], [ "Delay" ], [ "$" ], [ "onscroll", "5500" ], [ "login", "5000" ], [ "広告" ], [ "devtoolIsOpening", "100" ], [ "abp" ], [ "gnt_mol_oy" ], [ "adsok" ], [ "length", "3000" ], [ "devtools" ], [ "popupScreen" ], [ "ad" ], [ "_detectLoop" ], [ "concertAds" ], [ "whetherdo" ], [ "Premium" ], [ "||null" ], [ "pleaseSupportUs" ], [ "nn_mpu1", "5000" ], [ "devtool" ], [ "adsbygoogle", "2000" ], [ "adb-enabled" ], [ ".LoginSection" ], [ "detect_modal" ], [ "(!0)", "8000" ] ], r = new Map([ [ "telecom.economictimes.indiatimes.com", 0 ], [ "animekai.*", 1 ], [ "yflix.to", 1 ], [ "tides.net", 2 ], [ "9xbuddy.com", 2 ], [ "zerogpt.net", 2 ], [ "99bitcoins.com", 3 ], [ "hqq.tv", 4 ], [ "columbiaspectator.com", 5 ], [ "mediafire.com", 6 ], [ "webcodegeeks.com", 7 ], [ "books-world.net", 8 ], [ "pc3mag.com", 8 ], [ "opedge.com", 9 ], [ "bronze-bravery.com", 9 ], [ "ultimate-bravery.net", 9 ], [ "htmlreference.io", 9 ], [ "short-story.net", 9 ], [ "sbenny.com", 9 ], [ "fabricjs.com", 10 ], [ "bucketpages.com", 11 ], [ "steptalk.org", 12 ], [ "boerse-express.com", 13 ], [ "numberempire.com", 14 ], [ "howjsay.com", 15 ], [ "cagesideseats.com", 15 ], [ "vpnmentor.com", 16 ], [ "tomshw.it", 16 ], [ "wizcase.com", 16 ], [ "portableapps.com", 17 ], [ "reviewmeta.com", 17 ], [ "heroesneverdie.com", 18 ], [ "curbed.com", 18 ], [ "eater.com", 18 ], [ "funnyordie.com", 18 ], [ "mmafighting.com", 18 ], [ "mmamania.com", 18 ], [ "polygon.com", 18 ], [ "racked.com", 18 ], [ "riftherald.com", 18 ], [ "sbnation.com", 18 ], [ "theverge.com", 18 ], [ "vox.com", 18 ], [ "twinkietown.com", 18 ], [ "addons.opera.com", 19 ], [ "ruwix.com", 20 ], [ "zulily.com", 21 ], [ "rp5.by", 22 ], [ "turbolab.it", 23 ], [ "lookmovie.ag", 24 ], [ "lifo.gr", 25 ], [ "watson.de", 26 ], [ "watson.ch", 26 ], [ "xe.gr", 27 ], [ "jsfiddle.net", 27 ], [ "liverpool.no", 28 ], [ "fotor.com", 28 ], [ "playbill.com", 28 ], [ "xxxonlinegames.com", 28 ], [ "olarila.com", 28 ], [ "fairyabc.com", 29 ], [ "asheville.com", 29 ], [ "ajanstv.com.tr", 29 ], [ "minecraftforge.net", 30 ], [ "theherald-news.com", 31 ], [ "libgen.*", 32 ], [ "keybr.com", 33 ], [ "searchenginejournal.com", 34 ], [ "mocospace.com", 35 ], [ "karamellstore.com.br", 36 ], [ "mdlinx.com", 37 ], [ "infoplease.com", 37 ], [ "htforum.net", 37 ], [ "underconsideration.com", 38 ], [ "foreignaffairs.com", 39 ], [ "dxmaps.com", 40 ], [ "photoshop-online.biz", 41 ], [ "ukworkshop.co.uk", 41 ], [ "endorfinese.com.br", 41 ], [ "segnidalcielo.it", 41 ], [ "2iptv.com", 41 ], [ "deezer.com", 42 ], [ "handball-world.news", 43 ], [ "mobiflip.de", 43 ], [ "titanic-magazin.de", 43 ], [ "mimikama.org", 43 ], [ "langweiledich.net", 43 ], [ "der-postillon.com", 43 ], [ "perlentaucher.de", 43 ], [ "lwlies.com", 43 ], [ "serieslyawesome.tv", 43 ], [ "critic.de", 43 ], [ "mediotejo.net", 43 ], [ "nahrungsmittel-intoleranz.com", 43 ], [ "madeinbocholt.de", 43 ], [ "goodnews-magazin.de", 43 ], [ "wallauonline.de", 43 ], [ "cleanthinking.de", 43 ], [ "affiliate.fc2.com", 44 ], [ "4x4earth.com", 45 ], [ "diffchecker.com", 46 ], [ "malekal.com", 47 ], [ "audiostereo.pl", 47 ], [ "guides4gamers.com", 48 ], [ "polyflore.net", 49 ], [ "icy-veins.com", 50 ], [ "cpuid.com", 51 ], [ "webcamtaxi.com", 52 ], [ "dreamstime.com", 53 ], [ "megapixl.com", 54 ], [ "cissamagazine.com.br", 55 ], [ "utour.me", 56 ], [ "fosspost.org", 57 ], [ "123movies.*", 58 ], [ "theepochtimes.com", 59 ], [ "xtv.cz", 60 ], [ "drawasaurus.org", 61 ], [ "katholisches.info", 62 ], [ "hollywoodmask.com", 62 ], [ "streaminglearningcenter.com", 63 ], [ "prepostseo.com", 64 ], [ "tiermaker.com", 65 ], [ "hqq.to", 66 ], [ "zefoy.com", 66 ], [ "tuborstb.co", 66 ], [ "emturbovid.com", 66 ], [ "pawastreams.pro", 66 ], [ "shopomo.co.uk", 67 ], [ "techus.website", 67 ], [ "criticalthinking.org", 68 ], [ "zwei-euro.com", 69 ], [ "elitepvpers.com", 70 ], [ "geeksforgeeks.org", [ 71, 72 ] ], [ "fnbrjp.com", 73 ], [ "moviepl.xyz", 74 ], [ "leekduck.com", 75 ], [ "aberdeennews.com", 76 ], [ "alamogordonews.com", 76 ], [ "amarillo.com", 76 ], [ "amestrib.com", 76 ], [ "app.com", 76 ], [ "argusleader.com", 76 ], [ "augustachronicle.com", 76 ], [ "azcentral.com", 76 ], [ "battlecreekenquirer.com", 76 ], [ "beaconjournal.com", 76 ], [ "blueridgenow.com", 76 ], [ "buckscountycouriertimes.com", 76 ], [ "bucyrustelegraphforum.com", 76 ], [ "burlingtoncountytimes.com", 76 ], [ "burlingtonfreepress.com", 76 ], [ "caller.com", 76 ], [ "cantondailyledger.com", 76 ], [ "cantonrep.com", 76 ], [ "capecodtimes.com", 76 ], [ "cheboygannews.com", 76 ], [ "chieftain.com", 76 ], [ "chillicothegazette.com", 76 ], [ "cincinnati.com", 76 ], [ "citizen-times.com", 76 ], [ "cjonline.com", 76 ], [ "clarionledger.com", 76 ], [ "coloradoan.com", 76 ], [ "columbiadailyherald.com", 76 ], [ "columbiatribune.com", 76 ], [ "commercialappeal.com", 76 ], [ "coshoctontribune.com", 76 ], [ "courier-journal.com", 76 ], [ "courier-tribune.com", 76 ], [ "courierpostonline.com", 76 ], [ "courierpress.com", 76 ], [ "currentargus.com", 76 ], [ "daily-jeff.com", 76 ], [ "daily-times.com", 76 ], [ "dailyamerican.com", 76 ], [ "dailycomet.com", 76 ], [ "dailycommercial.com", 76 ], [ "dailyrecord.com", 76 ], [ "dailyworld.com", 76 ], [ "delawareonline.com", 76 ], [ "delmarvanow.com", 76 ], [ "demingheadlight.com", 76 ], [ "democratandchronicle.com", 76 ], [ "desertsun.com", 76 ], [ "desmoinesregister.com", 76 ], [ "devilslakejournal.com", 76 ], [ "dispatch.com", 76 ], [ "dnj.com", 76 ], [ "ellwoodcityledger.com", 76 ], [ "elpasotimes.com", 76 ], [ "enterprisenews.com", 76 ], [ "eveningsun.com", 76 ], [ "eveningtribune.com", 76 ], [ "examiner-enterprise.com", 76 ], [ "fayobserver.com", 76 ], [ "fdlreporter.com", 76 ], [ "floridatoday.com", 76 ], [ "fosters.com", 76 ], [ "freep.com", 76 ], [ "gadsdentimes.com", 76 ], [ "gainesville.com", 76 ], [ "galesburg.com", 76 ], [ "gastongazette.com", 76 ], [ "goerie.com", 76 ], [ "gosanangelo.com", 76 ], [ "goupstate.com", 76 ], [ "greatfallstribune.com", 76 ], [ "greenbaypressgazette.com", 76 ], [ "greenvilleonline.com", 76 ], [ "hattiesburgamerican.com", 76 ], [ "heraldmailmedia.com", 76 ], [ "heraldnews.com", 76 ], [ "heraldtribune.com", 76 ], [ "hillsdale.net", 76 ], [ "hollandsentinel.com", 76 ], [ "hoosiertimes.com", 76 ], [ "houmatoday.com", 76 ], [ "htrnews.com", 76 ], [ "hutchnews.com", 76 ], [ "indeonline.com", 76 ], [ "independentmail.com", 76 ], [ "indystar.com", 76 ], [ "ithacajournal.com", 76 ], [ "jacksonsun.com", 76 ], [ "jacksonville.com", 76 ], [ "jconline.com", 76 ], [ "jdnews.com", 76 ], [ "journalstandard.com", 76 ], [ "jsonline.com", 76 ], [ "kinston.com", 76 ], [ "kitsapsun.com", 76 ], [ "knoxnews.com", 76 ], [ "lancastereaglegazette.com", 76 ], [ "lansingstatejournal.com", 76 ], [ "lcsun-news.com", 76 ], [ "ldnews.com", 76 ], [ "lenconnect.com", 76 ], [ "lincolncourier.com", 76 ], [ "livingstondaily.com", 76 ], [ "lohud.com", 76 ], [ "lubbockonline.com", 76 ], [ "mansfieldnewsjournal.com", 76 ], [ "marionstar.com", 76 ], [ "marshfieldnewsherald.com", 76 ], [ "mcdonoughvoice.com", 76 ], [ "metrowestdailynews.com", 76 ], [ "milforddailynews.com", 76 ], [ "monroenews.com", 76 ], [ "montgomeryadvertiser.com", 76 ], [ "mpnnow.com", 76 ], [ "mycentraljersey.com", 76 ], [ "naplesnews.com", 76 ], [ "newarkadvocate.com", 76 ], [ "newbernsj.com", 76 ], [ "newportri.com", 76 ], [ "news-journalonline.com", 76 ], [ "news-leader.com", 76 ], [ "news-press.com", 76 ], [ "newschief.com", 76 ], [ "newsherald.com", 76 ], [ "newsleader.com", 76 ], [ "njherald.com", 76 ], [ "northjersey.com", 76 ], [ "norwichbulletin.com", 76 ], [ "nwfdailynews.com", 76 ], [ "oakridger.com", 76 ], [ "ocala.com", 76 ], [ "oklahoman.com", 76 ], [ "onlineathens.com", 76 ], [ "pal-item.com", 76 ], [ "palmbeachdailynews.com", 76 ], [ "palmbeachpost.com", 76 ], [ "patriotledger.com", 76 ], [ "pekintimes.com", 76 ], [ "petoskeynews.com", 76 ], [ "pjstar.com", 76 ], [ "pnj.com", 76 ], [ "poconorecord.com", 76 ], [ "pontiacdailyleader.com", 76 ], [ "portclintonnewsherald.com", 76 ], [ "postcrescent.com", 76 ], [ "poughkeepsiejournal.com", 76 ], [ "press-citizen.com", 76 ], [ "pressconnects.com", 76 ], [ "progress-index.com", 76 ], [ "providencejournal.com", 76 ], [ "publicopiniononline.com", 76 ], [ "record-courier.com", 76 ], [ "recordnet.com", 76 ], [ "recordonline.com", 76 ], [ "redding.com", 76 ], [ "registerguard.com", 76 ], [ "reporter-times.com", 76 ], [ "reporternews.com", 76 ], [ "rgj.com", 76 ], [ "rrstar.com", 76 ], [ "ruidosonews.com", 76 ], [ "salina.com", 76 ], [ "savannahnow.com", 76 ], [ "scsun-news.com", 76 ], [ "sctimes.com", 76 ], [ "seacoastonline.com", 76 ], [ "sheboyganpress.com", 76 ], [ "shelbystar.com", 76 ], [ "shreveporttimes.com", 76 ], [ "sj-r.com", 76 ], [ "sooeveningnews.com", 76 ], [ "southbendtribune.com", 76 ], [ "southcoasttoday.com", 76 ], [ "starcourier.com", 76 ], [ "stargazette.com", 76 ], [ "starnewsonline.com", 76 ], [ "statesman.com", 76 ], [ "statesmanjournal.com", 76 ], [ "staugustine.com", 76 ], [ "stevenspointjournal.com", 76 ], [ "sturgisjournal.com", 76 ], [ "swtimes.com", 76 ], [ "tallahassee.com", 76 ], [ "tauntongazette.com", 76 ], [ "tcpalm.com", 76 ], [ "telegram.com", 76 ], [ "tennessean.com", 76 ], [ "the-daily-record.com", 76 ], [ "the-dispatch.com", 76 ], [ "the-leader.com", 76 ], [ "the-review.com", 76 ], [ "theadvertiser.com", 76 ], [ "thecalifornian.com", 76 ], [ "thedailyjournal.com", 76 ], [ "thedailyreporter.com", 76 ], [ "thegardnernews.com", 76 ], [ "thegleaner.com", 76 ], [ "thehawkeye.com", 76 ], [ "theintell.com", 76 ], [ "theleafchronicle.com", 76 ], [ "theledger.com", 76 ], [ "thenews-messenger.com", 76 ], [ "thenewsstar.com", 76 ], [ "thenorthwestern.com", 76 ], [ "thepublicopinion.com", 76 ], [ "therecordherald.com", 76 ], [ "thespectrum.com", 76 ], [ "thestarpress.com", 76 ], [ "thetimesherald.com", 76 ], [ "thetimesnews.com", 76 ], [ "thetowntalk.com", 76 ], [ "times-gazette.com", 76 ], [ "timesonline.com", 76 ], [ "timesrecordnews.com", 76 ], [ "timesreporter.com", 76 ], [ "timestelegram.com", 76 ], [ "tmnews.com", 76 ], [ "tricountyindependent.com", 76 ], [ "tuscaloosanews.com", 76 ], [ "usatoday.com", 76 ], [ "uticaod.com", 76 ], [ "vcstar.com", 76 ], [ "visaliatimesdelta.com", 76 ], [ "vvdailypress.com", 76 ], [ "wausaudailyherald.com", 76 ], [ "wisconsinrapidstribune.com", 76 ], [ "ydr.com", 76 ], [ "zanesvilletimesrecorder.com", 76 ], [ "craftpip.github.io", 77 ], [ "pixwox.com", 78 ], [ "sflix.to", 79 ], [ "thizissam.in", 80 ], [ "ikorektor.pl", 81 ], [ "telenovelas-turcas.com.es", 82 ], [ "solarmovie.*", 82 ], [ "phimfit.com", 82 ], [ "goldenstateofmind.com", 83 ], [ "neoseeker.com", 84 ], [ "tumblr.com", 85 ], [ "aniwave.*", 86 ], [ "anix.*", 86 ], [ "flixhq.*", 86 ], [ "flixrave.to", 86 ], [ "hdtoday.so", 86 ], [ "hurawatch.bz", 86 ], [ "vidplay.site", 86 ], [ "vid2faf.site", 86 ], [ "galinos.gr", 87 ], [ "bluesnews.com", 88 ], [ "oceanplay.org", 89 ], [ "bembed.net", 89 ], [ "embedv.net", 89 ], [ "fslinks.org", 89 ], [ "listeamed.net", 89 ], [ "v6embed.xyz", 89 ], [ "vembed.*", 89 ], [ "vgplayer.xyz", 89 ], [ "vid-guard.com", 89 ], [ "notificationsounds.com", 90 ], [ "tweaking4all.com", 90 ], [ "zonatmo.com", 91 ], [ "openanesthesia.org", 92 ], [ "manhwa18.cc", 93 ], [ "filiser.eu", 94 ], [ "wishflix.cc", 94 ], [ "zalukaj.io", 94 ] ]), i = new Map([]), s = (e, o, t) => {
        let c = o.get(e);
        if (void 0 !== c) if ("number" != typeof c) for (const e of c) t.add(e); else t.add(c);
    }, m = (() => {
        const e = document.location, o = [ e.origin ];
        return e.ancestorOrigins && o.push(...e.ancestorOrigins), o.map(((e, o) => {
            const t = e.lastIndexOf("://");
            if (-1 === t) return;
            const c = e.slice(t + 3), n = c.indexOf(":");
            return {
                hn: -1 === n ? c : c.slice(0, n),
                i: o
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === m.length) return;
    const l = new Set, d = new Set;
    ((e, o = "") => {
        const t = e.split("."), c = t.length;
        if (0 !== c) {
            for (let e = 0; e < c; e++) {
                const c = `${t.slice(e).join(".")}${o}`;
                s(c, r, l), s(c, i, d);
            }
            {
                const e = c - 1;
                for (let c = 0; c < e; c++) for (let n = e; n > c; n--) {
                    const e = `${t.slice(c, n).join(".")}.*${o}`;
                    s(e, r, l), s(e, i, d);
                }
            }
        }
    })(m[0].hn);
    for (const o of l) if (!d.has(o)) try {
        e(...n[o]);
    } catch {}
}();