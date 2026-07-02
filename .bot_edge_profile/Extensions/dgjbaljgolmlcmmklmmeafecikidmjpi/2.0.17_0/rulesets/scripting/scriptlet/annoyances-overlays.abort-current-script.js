!function() {
    function e(...e) {
        !function(e) {
            if (document.documentElement) return void e();
            const o = new MutationObserver((() => {
                o.disconnect(), e();
            }));
            o.observe(document, {
                childList: !0
            });
        }((() => {
            !function(e = "", n = "", c = "") {
                if ("string" != typeof e) return;
                if ("" === e) return;
                const r = o(), a = r.makeLogPrefix("abort-current-script", e, n, c), i = r.patternToRegex(n), s = r.patternToRegex(c), m = r.getExtraArgs(Array.from(arguments), 3), l = document.currentScript, d = r.String_split.call(e, ".");
                let u, g, p = window;
                for (;u = d.shift(), 0 !== d.length && u in p != 0; ) if (p = p[u], p instanceof Object == 0) return;
                let f = Object.getOwnPropertyDescriptor(p, u);
                f instanceof Object != 0 && f.get instanceof Function != 0 || (g = p[u], f = void 0), 
                function(e) {
                    if (e instanceof Object == 0) return !1;
                    t.canDebug && e.debug;
                }(m);
                const b = function() {
                    const e = function() {
                        const e = o();
                        return e.String_fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36);
                    }(), t = self.onerror;
                    return self.onerror = function(o, ...n) {
                        return !("string" != typeof o || !o.includes(e)) || (t instanceof Function ? t.call(this, o, ...n) : void 0);
                    }.bind(), e;
                }(), h = new WeakMap, y = e => {
                    let o = e.textContent;
                    if ("" !== o.trim()) return o;
                    if (h.has(e)) return h.get(e);
                    const [, t, n] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                    try {
                        o = !0 === t.endsWith(";base64") ? self.atob(n) : self.decodeURIComponent(n);
                    } catch {}
                    return h.set(e, o), o;
                }, v = () => {
                    const e = document.currentScript;
                    if (e instanceof HTMLScriptElement == 0) return;
                    if (e === l) return;
                    if ("" !== c && !1 === s.test(e.src)) return;
                    r.logLevel > 1 && "" !== c && r.uboLog(a, `Matched src\n${e.src}`);
                    const o = y(e);
                    if (!1 !== i.test(o)) throw r.logLevel > 1 && r.uboLog(a, `Matched text\n${o}`), 
                    r.uboLog(a, "Aborted"), new ReferenceError(b);
                };
                try {
                    Object.defineProperty(p, u, {
                        get: function() {
                            return v(), f instanceof Object ? f.get.call(p) : g;
                        },
                        set: function(e) {
                            v(), f instanceof Object ? f.set.call(p, e) : g = e;
                        }
                    });
                } catch (e) {
                    r.uboErr(a, `Error: ${e}`);
                }
            }(...e);
        }));
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
                        const o = n[t + 1], c = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                        e.push([ n[t], c ]);
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
        let n = "", c = "", r = 0;
        o.toLogText = (e, ...o) => {
            if (0 === o.length) return;
            const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
            return t === c && e === n && Date.now() - r < 5e3 ? void 0 : (n = e, c = t, r = Date.now(), 
            t);
        };
        try {
            const n = new e.BroadcastChannel(t.bcSecret);
            let c = [];
            o.sendToLogger = (e, ...t) => {
                const r = o.toLogText(e, ...t);
                if (void 0 !== r) return void 0 === c ? n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: r
                }) : void c.push({
                    type: e,
                    text: r
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === c) break;
                    c.forEach((({type: e, text: o}) => n.postMessage({
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
            }, n.postMessage("areyouready?");
        } catch {
            o.sendToLogger = (e, ...t) => {
                const n = o.toLogText(e, ...t);
                void 0 !== n && o.log(`uBO ${n}`);
            };
        }
        return o;
    }
    const t = {}, n = [ [ "document.onselectstart" ], [ "$", "contextmenu" ], [ "disableselect", "reEnable" ], [ "addEventListener", "/disable_|wccp/" ], [ "document.onkeydown" ], [ "document.addEventListener", "contextmenu" ], [ "jQuery", "ADBLOCK" ], [ "document.oncontextmenu" ], [ "document.getElementById", "advert-tester" ], [ "document.oncopy" ], [ "jQuery", "AdBlock" ], [ "jQuery", "#sign-up-popup" ], [ "jQuery", "overlay" ], [ "document.getElementById", "ad-blocker" ], [ "document.getElementById", ".ab_detected" ], [ "jQuery", "tweaker" ], [ "jQuery", "undefined" ], [ "jQuery", "ads" ], [ "document.getElementById", "block" ], [ "document.addEventListener", "alert" ], [ "document.ondragstart", "document.oncontextmenu" ], [ "jQuery", "document" ], [ "document.getElementById", "undefined" ], [ "jQuery", "restriction" ], [ "document.oncontextmenu", "document.onselectstart" ], [ "message", "clickIE" ], [ "preventSelection" ], [ "jQuery", "contextmenu" ], [ "jQuery", "Drupal" ], [ "$", "blur" ], [ "reEnable", "killcopy" ], [ "$", "load" ], [ "document.getElementsByTagName", "null" ], [ "eval", "abd" ], [ "jQuery", "ai_adb" ], [ "document.getElementById", "none" ], [ "$", "undefined" ], [ "document.addEventListener" ], [ "document.oncontextmenu", "key" ], [ "addEventListener", "which" ], [ "window.addEventListener", "ctrlKey" ], [ "document.createElement", "adblock" ], [ "document.getElementById", "banner" ], [ "jQuery", "disable_hot_keys" ], [ "onload" ], [ "$", "offsetHeight" ], [ "disableSelection" ], [ "jQuery", "ai_check" ], [ "document.getElementById", "adblock" ], [ "onload", "contextmenu" ], [ "document.ondragstart" ], [ "$", "copy" ], [ "document.getElementById", "adblockerdetected" ], [ "$", "juicyads" ], [ "$", "showEmailNewsletterModal" ], [ "$", "btoa" ], [ "disableSelection", "reEnable" ], [ "$", ".height" ], [ "$", "Adblock" ], [ "eval", "isNaN" ], [ "document.addEventListener", "contribute" ], [ "addEventListener", "ctrlKey" ], [ "setTimeout", "newsletterPopup" ], [ "document.onmousedown" ], [ "event", "stopPropagation" ], [ "soclInit" ], [ "document.addEventListener", "preventDefault" ], [ "disable_copy" ], [ "disable_hot_keys" ], [ "jQuery", "copy" ], [ "addEventListener", "adsbygoogle.length" ], [ "check", "debugger" ], [ "document.addEventListener", "document.onselectstart" ], [ "matchMedia" ], [ "$", "AdBlock" ], [ "$", "adBlock" ], [ "jQuery", "keydown" ], [ "jQuery", "oncontextmenu" ], [ "String.prototype.charCodeAt", "ai_" ], [ "jQuery", "preventDefault" ], [ "$", "/getScript|error:/" ], [ "addEventListener", "keydown" ], [ "nocontextmenu" ], [ "document.getElementById", "cookie" ], [ "document.getElementById", "isMoz" ], [ "console.clear" ], [ "oncontextmenu", "keydown" ], [ "document.oncontextmenu", "nocontextmenu" ], [ "document.onselectstart", "disableselect" ], [ "document.querySelector", "adblock" ], [ "$", '"input"' ], [ "jQuery", "stopPropagation" ], [ "update_visit_count" ], [ "eval", "replace" ], [ "$", "test" ], [ "$", "Promise" ], [ "showAdblockerModal" ], [ "stopPrntScr" ], [ "console.clear", "contextmenu" ], [ "shortcut" ], [ "console.log", "document.referer" ], [ "document.addEventListener", "onkeydown" ], [ "disableEnterKey" ], [ "document.getElementsByTagName", "unselectable" ], [ "document.onkeypress" ], [ "wccp_pro_iscontenteditable" ], [ "document.body.oncontextmenu" ], [ "attachToDom", "ad-fallback" ], [ "nocontext" ], [ "runPageBugger" ], [ "eval", "contextmenu" ], [ "ab_tests" ], [ "jQuery", "userAgent" ], [ "reEnable" ], [ "jQuery", "wccp_pro" ], [ "clear_body_at_all_for_extentions" ], [ "RegExp", "googlebot" ], [ "document.querySelectorAll", "adblock" ], [ "document.addEventListener", "copy" ], [ "checkAdblockBait" ], [ "document.addEventListener", "keydown" ], [ "RegExp", "debugger" ], [ "oncontextmenu" ], [ "navigator", "devtools" ], [ "setInterval", "stateObject" ], [ "setTimeout", "debugger" ], [ "jQuery", "keyCode" ], [ "$", "debugger" ], [ "jQuery", "devtool" ], [ "RegExp", "contextmenu" ], [ "AudiosL10n" ], [ "document.createElement", "admiral" ], [ "document.getElementsByTagName", "admiral" ], [ "jQuery", "hmwp_is_devtool" ], [ "RegExp.prototype.toString", '.join("")' ], [ "document.onmousedown", "disableclick" ], [ "RegExp", "disableRightClick" ], [ "RegExp", "console" ], [ "addEventListener", "ays_tooltip" ], [ "document.onkeydown", "disableCTRL" ], [ "document.oncontextmenu", "preventDefault" ] ], c = new Map([ [ "mimaletadepeliculas.blogspot.com", 0 ], [ "clk.sh", [ 0, 7 ] ], [ "shrinkearn.com", [ 0, 7 ] ], [ "luoghidavedere.it", 0 ], [ "practicetestgeeks.com", [ 0, 7 ] ], [ "gagetmatome.com", 0 ], [ "verdadeiroolhar.pt", 0 ], [ "librospreuniversitariospdf.blogspot.com", [ 0, 1, 4, 44 ] ], [ "mt-milcom.blogspot.com", [ 0, 7 ] ], [ "interviewgig.com", 0 ], [ "artesacro.org", 0 ], [ "dailynewsview.com", 0 ], [ "dailynews.us.com", 0 ], [ "e-sushi.fr", 0 ], [ "evasion-online.com", 0 ], [ "exclusifvoyages.com", 0 ], [ "naukridisha.in", 0 ], [ "nydailyquote.com", 0 ], [ "ouasafat.com", 0 ], [ "reflectim.fr", [ 0, 7 ] ], [ "top.howfn.com", 0 ], [ "kangmartho.com", 0 ], [ "gnt24365.net", [ 0, 7 ] ], [ "tvstreampf.xyz", [ 0, 50 ] ], [ "pvstreams.com", [ 0, 4, 7, 27 ] ], [ "7misr4day.com", [ 0, 7 ] ], [ "evz.ro", 1 ], [ "visionias.net", 1 ], [ "mangaku.*", 1 ], [ "dramaqu.*", 1 ], [ "safetxt.net", 1 ], [ "javbest.xyz", 1 ], [ "javbix.com", 1 ], [ "javgrab.com", 1 ], [ "goalup.live", 1 ], [ "47news.jp", 1 ], [ "japanxxxmovie.com", 1 ], [ "sexpox.com", 1 ], [ "ibomma.pw", 1 ], [ "aepos.ap.gov.in", 1 ], [ "ssphim.net", [ 1, 4 ] ], [ "10000recipe.com", 1 ], [ "edurev.in", 1 ], [ "javjavhd.com", 1 ], [ "mcocguideblog.com", 2 ], [ "singingdalong.blogspot.com", 2 ], [ "runningnews.gr", [ 2, 7 ] ], [ "tecnotutoshd.net", 2 ], [ "psychologiazycia.com", [ 2, 7 ] ], [ "kolnovel.org", 3 ], [ "up4stream.com", 4 ], [ "ups2up.fun", 4 ], [ "abstream.to", 4 ], [ "sabishiidesu.com", 4 ], [ "europixhd.*", [ 4, 7 ] ], [ "topeuropix.*", [ 4, 7 ] ], [ "banglainsider.com", [ 4, 30 ] ], [ "kusonime.com", [ 4, 7, 39 ] ], [ "animesanka.com", 4 ], [ "lendagames.com", 4 ], [ "vinaurl.blogspot.com", [ 4, 73 ] ], [ "utorrentgamesps2.blogspot.com", 4 ], [ "articlesmania.me", 4 ], [ "wawlist.com", [ 4, 7 ] ], [ "koszalincity.pl", [ 4, 7 ] ], [ "allcryptoz.net", 4 ], [ "crewbase.net", 4 ], [ "crewus.net", 4 ], [ "shinbhu.net", 4 ], [ "shinchu.net", 4 ], [ "topcryptoz.net", 4 ], [ "uniqueten.net", 4 ], [ "ultraten.net", 4 ], [ "indianhealthyrecipes.com", [ 4, 7 ] ], [ "krunkercentral.com", 4 ], [ "desijugar.net", 4 ], [ "adslink.pw", 4 ], [ "jpopsingles.eu", [ 4, 7, 27, 120 ] ], [ "genesistls.com", [ 4, 50 ] ], [ "senpaiediciones.com", [ 4, 50 ] ], [ "guiasaude.info", 4 ], [ "felizemforma.com", 4 ], [ "icourse163.org", 4 ], [ "kursnacukrzyce.pl", 5 ], [ "fucktube4k.com", 5 ], [ "knightnoscanlation.com", 5 ], [ "cyanlabs.net", 6 ], [ "fmhikayeleri.com", 7 ], [ "tinyppt.com", 7 ], [ "hindi-gk.com", 7 ], [ "androidmtk.com", 7 ], [ "badayak.com", 7 ], [ "kirannewsagency.com", 7 ], [ "starsunfolded.com", 7 ], [ "satcesc.com", 7 ], [ "them4ufree.info", 7 ], [ "yeane.org", 7 ], [ "mtbtutoriales.com", 7 ], [ "answersafrica.com", 7 ], [ "felico.pl", 7 ], [ "legionprogramas.org", 7 ], [ "serwis-zamkow.com", 7 ], [ "hebrew4christians.com", 7 ], [ "otakudesu.org", [ 7, 40 ] ], [ "androidmakale.com", 7 ], [ "mongri.net", 7 ], [ "download.ipeenk.com", 7 ], [ "doranobi-fansub.id", [ 7, 43 ] ], [ "oparana.com.br", 7 ], [ "lolle21.com", 7 ], [ "mangaid.click", 7 ], [ "manianomikata.com", 7 ], [ "tfp.is", 7 ], [ "dassen-azara4.com", 7 ], [ "dramacute.*", [ 7, 46 ] ], [ "pentruea.com", 7 ], [ "depedlps.*", 7 ], [ "neyrologos.gr", 7 ], [ "freerapidleechlist.blogspot.com", 7 ], [ "ggeguide.com", 7 ], [ "mangatoon.*", 7 ], [ "lalawin.com", 7 ], [ "audioreview.m1001.coreserver.jp", [ 7, 56 ] ], [ "seikatsu-hyakka.com", 7 ], [ "elizabeth-mitchell.org", [ 7, 61 ] ], [ "blasianluvforever.com", 7 ], [ "movieston.com", [ 7, 27 ] ], [ "eduardo-monica.com", 7 ], [ "msubplix.com", 7 ], [ "upstream.to", 7 ], [ "ilclubdellericette.it", 7 ], [ "daum.net", 7 ], [ "123movies.*", [ 7, 56 ] ], [ "newsforbolly.org", 7 ], [ "gomovies.*", 7 ], [ "dztechphone.com", 7 ], [ "funivie.org", 7 ], [ "goodbakery.ru", [ 7, 27 ] ], [ "ifdreamscametrue.com", [ 7, 69 ] ], [ "juegosdetiempolibre.org", 7 ], [ "musicindustryhowto.com", [ 7, 37, 50 ] ], [ "sdelatotoplenie.ru", [ 7, 9 ] ], [ "sachonthi.com", 7 ], [ "zdravenportal.eu", [ 7, 72 ] ], [ "thezealots.org", 7 ], [ "deportealdia.live", 7 ], [ "fmovies.*", [ 7, 56 ] ], [ "hulnews.top", 7 ], [ "otakudesu.*", 7 ], [ "truyenbanquyen.com", [ 7, 113, 114, 115 ] ], [ "globaledu.jp", 7 ], [ "lataifas.ro", [ 7, 77 ] ], [ "openfinanza.it", [ 7, 50 ] ], [ "followmikewynn.com", 7 ], [ "starbene.it", 7 ], [ "bimiacg.net", 7 ], [ "diaforetiko.gr", 7 ], [ "tchadcarriere.com", 7 ], [ "info-beihilfe.de", 7 ], [ "zgywyd.cn", 7 ], [ "mercenaryenrollment.com", 7 ], [ "cristelageorgescu.ro", 7 ], [ "crunchyscan.fr", 7 ], [ "www-daftarharga.blogspot.com", 7 ], [ "theghostinmymachine.com", 7 ], [ "ilovevaldinon.it", 7 ], [ "aileen-novel.online", [ 7, 68 ] ], [ "bumigemilang.com", [ 7, 68 ] ], [ "bingotingo.com", 7 ], [ "stream.bunkr.is", 7 ], [ "blueraindrops.com", 7 ], [ "sekaikomik.live", 7 ], [ "privivkainfo.ru", 7 ], [ "bestjavporn.com", 7 ], [ "mm9841.cc", 7 ], [ "myoplay.club", 7 ], [ "bpcj.or.jp", 7 ], [ "cdramalove.com", 7 ], [ "outidesigoto.com", 7 ], [ "gourmetscans.net", [ 7, 105 ] ], [ "awebstories.com", 7 ], [ "zgbk.com", 7 ], [ "clujust.ro", [ 7, 50 ] ], [ "stockpokeronline.com", 7 ], [ "stiridinromania.ro", 7 ], [ "kooora4lives.net", 7 ], [ "kooora4livs.com", 7 ], [ "freereadnovel.online", [ 7, 113, 114, 115 ] ], [ "piklodz.pl", [ 7, 113, 114, 115 ] ], [ "secondlifetranslations.com", [ 7, 113, 114, 115 ] ], [ "ferroviando.com.br", [ 7, 113, 114, 115 ] ], [ "counciloflove.com", [ 7, 113, 114, 115 ] ], [ "infokik.com", [ 7, 113, 114, 115 ] ], [ "kulinarnastronamocy.pl", [ 7, 113, 114, 115 ] ], [ "jafekri.com", [ 7, 113, 114, 115 ] ], [ "ezmanga.net", [ 7, 113, 114, 115 ] ], [ "reborntrans.com", [ 7, 113, 114, 115 ] ], [ "paidiatreio.gr", [ 7, 118 ] ], [ "workhouses.org.uk", 7 ], [ "dollarvr.com", [ 7, 50 ] ], [ "newsme.gr", [ 7, 50 ] ], [ "daily-tohoku.news", [ 7, 46 ] ], [ "descopera.ro", 7 ], [ "velicu.eu", 7 ], [ "arenavalceana.ro", [ 7, 27 ] ], [ "firmwarefile.com", 7 ], [ "asianexpress.co.uk", 7 ], [ "certificationexamanswers.890m.com", 7 ], [ "cookhero.gr", 7 ], [ "creative-chemistry.org.uk", 7 ], [ "deutschaj.com", 7 ], [ "divineyogaschool.blogspot.com", 7 ], [ "fabioambrosi.it", 7 ], [ "flory4all.com", 7 ], [ "fv2freegifts.org", 7 ], [ "geniusjw.com", 7 ], [ "ideas0419.com", 7 ], [ "jeyran.net", 7 ], [ "ktm2day.com", 7 ], [ "letsdownloads.com", 7 ], [ "limametti.com", 7 ], [ "luyenthithukhoa.vn", 7 ], [ "otakukan.com", 7 ], [ "ribbelmonster.de", 7 ], [ "untitle.org", 7 ], [ "uptimeside.webnode.gr", 7 ], [ "usmleexperiences.review", 7 ], [ "yoyofilmeys.*", 7 ], [ "zoommastory.com", 7 ], [ "urbanbrush.net", 7 ], [ "audiotools.in", 7 ], [ "raindropteamfan.com", 7 ], [ "manhwahentai.me", 7 ], [ "ontools.net", 7 ], [ "scarysymptoms.com", [ 7, 105 ] ], [ "musicallyvideos.com", 7 ], [ "geeksoncoffee.com", 7 ], [ "guidingliterature.com", [ 7, 50 ] ], [ "mostrodifirenze.com", 7 ], [ "3xyaoi.com", 7 ], [ "tinyhouse-baluchon.fr", 7 ], [ "whoisnovel.com", 7 ], [ "eca-anime.net", 8 ], [ "braziljournal.com", 9 ], [ "nekopoi.web.id", 9 ], [ "world4.eu", [ 9, 67, 68 ] ], [ "flyertalk.com", 10 ], [ "searchenginewatch.com", 11 ], [ "oggiscuola.com", 12 ], [ "kashmirobserver.net", 13 ], [ "cathouseonthekings.com", 14 ], [ "winaero.com", 15 ], [ "centrumher.eu", 16 ], [ "japancamerahunter.com", 17 ], [ "airlinercafe.com", 17 ], [ "thegraillords.net", 18 ], [ "worldscientific.com", 18 ], [ "videohelp.com", 18 ], [ "upsrtconline.co.in", 19 ], [ "qualityfilehosting.com", 20 ], [ "booksmedicos.org", 21 ], [ "siliconinvestor.com", 22 ], [ "space-engineers.de", 22 ], [ "coffeeforums.co.uk", 22 ], [ "anime2you.de", 22 ], [ "majorgeeks.com", 22 ], [ "jobsbotswana.info", 23 ], [ "npnews24.com", 24 ], [ "fordogtrainers.pl", [ 25, 26 ] ], [ "polskacanada.com", 27 ], [ "fantricks.com", 27 ], [ "blog.kwick.de", 27 ], [ "selfstudyhistory.com", [ 27, 50 ] ], [ "yeuphimmoik.com", 27 ], [ "repack-games.com", 27 ], [ "delicateseliterare.ro", 27 ], [ "wpplugins.tips", 27 ], [ "verselemzes.hu", [ 27, 126 ] ], [ "sqlserveregitimleri.com", 27 ], [ "gezimanya.com", 28 ], [ "athletic.net", 29 ], [ "playonlinux.com", 31 ], [ "bitblokes.de", 32 ], [ "bold.dk", 33 ], [ "pureinfotech.com", 34 ], [ "casertace.net", 34 ], [ "civildigital.com", 34 ], [ "lesmoutonsenrages.fr", 34 ], [ "venusarchives.com", 34 ], [ "verpornocomic.com", 34 ], [ "balticlivecam.com", 35 ], [ "molineuxmix.co.uk", 36 ], [ "yaledailynews.com", 36 ], [ "canondrivers.org", [ 37, 38 ] ], [ "forum.nlmod.net", 41 ], [ "includehelp.com", 42 ], [ "routenote.com", 44 ], [ "themosvagas.com.br", [ 44, 81 ] ], [ "mt07-forum.de", 45 ], [ "auto-treff.com", 45 ], [ "telefon-treff.de", 45 ], [ "dodge-forum.eu", 45 ], [ "altranotizia.it", 46 ], [ "hearthstone-decks.net", 47 ], [ "full-anime.fr", 48 ], [ "klsescreener.com", 48 ], [ "nonton78.com", 49 ], [ "tvzingvn.*", 49 ], [ "zingtvhd.*", 49 ], [ "zingvntv.*", 49 ], [ "sbfast.com", 49 ], [ "sbflix.*", 49 ], [ "vupload.com", 49 ], [ "opportunitydesk.org", 50 ], [ "selfstudyanthro.com", 50 ], [ "renditepassive.net", 50 ], [ "androidtvbox.eu", 50 ], [ "flinsetyadi.com", [ 50, 56 ] ], [ "rawneix.in", [ 50, 102, 103 ] ], [ "the-masters-voice.com", [ 50, 56 ] ], [ "pandurul.ro", 51 ], [ "masrawy.com", 52 ], [ "milfzr.com", 53 ], [ "phrasemix.com", 54 ], [ "smokingmeatforums.com", 55 ], [ "broncoshq.com", 55 ], [ "jnews5.com", 56 ], [ "tvshowstars.com", 56 ], [ "eurooptyk.com.pl", 56 ], [ "celebzcircle.com", 56 ], [ "sertracen.com.pa", 56 ], [ "pitesti24.ro", 56 ], [ "samsungtechwin.com", 56 ], [ "cours-de-droit.net", 56 ], [ "iptv4best.com", 56 ], [ "blogvisaodemercado.pt", 56 ], [ "kapitalis.com", 56 ], [ "tiempo.hn", 56 ], [ "winmeen.com", 56 ], [ "ibps.in", 56 ], [ "visse.com.br", 56 ], [ "javsubtitle.co", 56 ], [ "learninsta.com", 56 ], [ "licensekeys.org", 56 ], [ "mediahiburan.my", 56 ], [ "tipssehatcantik.com", 56 ], [ "anime-drama.jp", 56 ], [ "jbjbgame.com", 56 ], [ "viatasisanatate.com", 56 ], [ "ziarulargesul.ro", 56 ], [ "globaldefensecorp.com", 56 ], [ "gossipnextdoor.com", 56 ], [ "coffeeapps.ir", 56 ], [ "media.framu.world", 56 ], [ "immobiliaremia.com", 56 ], [ "colegiosconcertados.info", 56 ], [ "bigdatauni.com", 56 ], [ "riwyat.com", 56 ], [ "rukim.id", 56 ], [ "visefierbinti.ro", 56 ], [ "cyberkrafttraining.com", 56 ], [ "theaircurrent.com", 56 ], [ "ncert-solutions.com", 56 ], [ "ncertsolutions.guru", 56 ], [ "nocturnetls.net", 56 ], [ "clockks.com", 56 ], [ "ananda-yoga.ro", 56 ], [ "poolpiscina.com", 56 ], [ "infodifesa.it", 56 ], [ "getective.com", 56 ], [ "flashdumpfiles.com", 56 ], [ "formatatmak.com", 56 ], [ "drkrok.com", 56 ], [ "alphagirlreviews.com", 56 ], [ "kitchennovel.com", 56 ], [ "voxvalachorum.ro", 56 ], [ "cracksone.com", 56 ], [ "day-hoc.org", 56 ], [ "onlineonderdelenshop.nl", 56 ], [ "primicia.com.ve", 56 ], [ "tech-recipes.com", 56 ], [ "postcourier.com.pg", 56 ], [ "afrikmag.com", 56 ], [ "maduras.vip", 56 ], [ "aprendeinglessila.com", 56 ], [ "kicknews.today", 56 ], [ "koalasplayground.com", 56 ], [ "hellokpop.com", 56 ], [ "hayatbilgileri.com", 56 ], [ "moneyexcel.com", 56 ], [ "placementstore.com", 56 ], [ "neuroteam-metz.de", 56 ], [ "codedosa.com", 56 ], [ "liveyourmaths.com", 56 ], [ "newspao.gr", 56 ], [ "ieltsliz.com", 56 ], [ "programasvirtualespc.net", 56 ], [ "tempatwisataseru.com", 56 ], [ "wikiofcelebs.com", 56 ], [ "jornaljoca.com.br", 56 ], [ "arcanescans.com", 56 ], [ "filmzone.com", 56 ], [ "hiraethtranslation.com", 56 ], [ "kaystls.site", 56 ], [ "home.novel-gate.com", 56 ], [ "plural.jor.br", 56 ], [ "evreporter.com", 56 ], [ "sinhasannews.com", 56 ], [ "viewsofgreece.gr", 56 ], [ "rozbor-dila.cz", 56 ], [ "kritichno.bg", 56 ], [ "csiplearninghub.com", 56 ], [ "medeberiya.site", 56 ], [ "sharree.com", 57 ], [ "moneyguru.co", 57 ], [ "abola.pt", 58 ], [ "unixhow.com", 59 ], [ "wikihow.com", 60 ], [ "analizy.pl", 62 ], [ "zeeebatch.blogspot.com", 63 ], [ "sokolow-mlp.pl", 63 ], [ "japan-fans.com", 63 ], [ "ohmygirl.ml", 64 ], [ "cissamagazine.com.br", 65 ], [ "observatoriodocinema.uol.com.br", 66 ], [ "portalcriatividade.com.br", [ 67, 108 ] ], [ "kitguru.net", 70 ], [ "lvturbo.com", 71 ], [ "sbbrisk.com", 71 ], [ "sbface.com", 71 ], [ "sbspeed.com", 71 ], [ "streamsb.net", 71 ], [ "itscybertech.com", 71 ], [ "lcpdfr.com", 74 ], [ "whatfontis.com", 75 ], [ "tritinia.com", 76 ], [ "sportnews.to", [ 76, 84 ] ], [ "psihologiadeazi.ro", 76 ], [ "dubznetwork.com", [ 76, 104 ] ], [ "lowkeytech.com", 78 ], [ "ubuntudde.com", 78 ], [ "techsini.com", 79 ], [ "allmovie.com", 80 ], [ "sidereel.com", 80 ], [ "appofmirror.com", 82 ], [ "samurai.wordoco.com", 82 ], [ "developpez.com", 83 ], [ "scatch176duplicities.com", 85 ], [ "voe-unblock.com", 85 ], [ "phimdinhcao.com", 86 ], [ "picallow.com", 87 ], [ "brooklyneagle.com", 87 ], [ "techgyd.com", 87 ], [ "karsaz-law.com", 87 ], [ "links.extralinks.casa", 88 ], [ "theasianparent.com", 88 ], [ "ssuathletics.com", 89 ], [ "titulky.com", 90 ], [ "dongphimmoiz.com", 91 ], [ "investorvillage.com", 92 ], [ "grandoldteam.com", 93 ], [ "gamingsinners.com", 94 ], [ "elitepvpers.com", 95 ], [ "geeksforgeeks.org", 96 ], [ "acupoffrench.com", 97 ], [ "novelza.com", 97 ], [ "viewsb.com", 98 ], [ "nsfwzone.xyz", 98 ], [ "dlmovies.link", 98 ], [ "top1iq.com", 99 ], [ "unlimitedfiles.xyz", 100 ], [ "aztravels.net", 101 ], [ "downfile.site", 101 ], [ "memangbau.com", 101 ], [ "trangchu.news", 101 ], [ "revenue.land", 102 ], [ "eplayer.click", 104 ], [ "olacast.live", 104 ], [ "ntuplay.xyz", 104 ], [ "maxstream.video", 106 ], [ "esologs.com", 107 ], [ "fflogs.com", 107 ], [ "swtorlogs.com", 107 ], [ "warcraftlogs.com", 107 ], [ "wildstarlogs.com", 107 ], [ "smokelearned.net", 109 ], [ "nhentaihaven.org", 110 ], [ "slideshare.net", 111 ], [ "hidemywp.co", 112 ], [ "memoryhackers.org", 116 ], [ "steamcollector.com", 117 ], [ "mgsm.pl", 119 ], [ "camcaps.to", 121 ], [ "vtplayer.net", 121 ], [ "phimlongtieng.net", [ 122, 123, 124, 125 ] ], [ "weakstream.org", 127 ], [ "jk-market.com", 128 ], [ "vtbe.to", 129 ], [ "vtube.network", 129 ], [ "film4e.com", 130 ], [ "boston.com", 131 ], [ "britannica.com", 131 ], [ "cattime.com", 131 ], [ "dogtime.com", 131 ], [ "download.mokeedev.com", 131 ], [ "freep.com", 131 ], [ "ijr.com", 131 ], [ "inquirer.net", 131 ], [ "knowyourmeme.com", 131 ], [ "nationalreview.com", 131 ], [ "nofilmschool.com", 131 ], [ "order-order.com", 131 ], [ "savvytime.com", 131 ], [ "techlicious.com", 131 ], [ "technicpack.net", 131 ], [ "thedraftnetwork.com", 131 ], [ "wrestlezone.com", 131 ], [ "xda-developers.com", 131 ], [ "legacy.com", 132 ], [ "firescans.xyz", 133 ], [ "vidsrc.*", 134 ], [ "radartest.com", 135 ], [ "daya-jewelry.com", 136 ], [ "veev.to", 137 ], [ "japonhentai.com", 138 ], [ "cyberalert.gr", 139 ], [ "torontosom.ca", 140 ] ]), r = new Map([]), a = (e, o, t) => {
        let n = o.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) t.add(e); else t.add(n);
    }, s = (() => {
        const e = document.location, o = [ e.origin ];
        return e.ancestorOrigins && o.push(...e.ancestorOrigins), o.map(((e, o) => {
            const t = e.lastIndexOf("://");
            if (-1 === t) return;
            const n = e.slice(t + 3), c = n.indexOf(":");
            return {
                hn: -1 === c ? n : n.slice(0, c),
                i: o
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === s.length) return;
    const m = new Set, l = new Set;
    ((e, o = "") => {
        const t = e.split("."), n = t.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${t.slice(e).join(".")}${o}`;
                a(n, c, m), a(n, r, l);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let i = e; i > n; i--) {
                    const e = `${t.slice(n, i).join(".")}.*${o}`;
                    a(e, c, m), a(e, r, l);
                }
            }
        }
    })(s[0].hn);
    for (const o of m) if (!l.has(o)) try {
        e(...n[o]);
    } catch {}
}();