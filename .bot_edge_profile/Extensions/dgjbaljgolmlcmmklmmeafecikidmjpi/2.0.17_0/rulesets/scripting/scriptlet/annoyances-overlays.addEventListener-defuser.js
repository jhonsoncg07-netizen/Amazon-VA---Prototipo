!function() {
    function e(e = "", c = "") {
        const a = t(), r = a.getExtraArgs(Array.from(arguments), 2), i = a.makeLogPrefix("prevent-addEventListener", e, c), s = a.patternToRegex(e, void 0, !0), l = a.patternToRegex(c), m = (function(e) {
            if (e instanceof Object == 0) return !1;
            n.canDebug && e.debug;
        }(r), r.elements || void 0), u = e => {
            if (e instanceof Window) return "window";
            if (e instanceof Document) return "document";
            if (e instanceof Element == 0) return "?";
            const o = [], t = String(e.id);
            "" !== t && o.push(`#${CSS.escape(t)}`);
            for (let t = 0; t < e.classList.length; t++) o.push(`.${CSS.escape(e.classList.item(t))}`);
            for (let t = 0; t < e.attributes.length; t++) {
                const n = e.attributes.item(t);
                "id" !== n.name && "class" !== n.name && o.push(`[${CSS.escape(n.name)}="${n.value}"]`);
            }
            return o.join("");
        }, p = (e, o, t) => {
            const n = a.RegExp_test.call(s, o), c = a.RegExp_test.call(l, t), r = n && c;
            return (!r || void 0 === m || !1 !== (i = e, "window" === m ? i === window : "document" === m ? i === document : !!(i && i.matches && i.matches(m)) || Array.from(document.querySelectorAll(m)).includes(i))) && r;
            var i;
        }, d = function(o) {
            const {callArgs: t, thisArg: n} = o;
            let r, s;
            try {
                r = String(t[0]), "function" == typeof t[1] ? s = String(a.Function_toString(t[1])) : "object" == typeof t[1] && null !== t[1] ? "function" == typeof t[1].handleEvent && (s = String(a.Function_toString(t[1].handleEvent))) : s = String(t[1]);
            } catch {}
            if ("" === e && "" === c) a.uboLog(i, `Called: ${r}\n${s}\n${u(n)}`); else if (p(n, r, s)) return a.uboLog(i, `Prevented: ${r}\n${s}\n${u(n)}`);
            return o.reflect();
        };
        !function(e, o) {
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
            }, c = n(o);
            if (n(document.readyState) >= c) return void e();
            const r = t(), i = [ "readystatechange", () => {
                n(document.readyState) < c || (e(), r.removeEventListener.apply(document, i));
            }, {
                capture: !0
            } ];
            r.addEventListener.apply(document, i);
        }((() => {
            o("EventTarget.prototype.addEventListener", d), o("document.addEventListener", d);
        }), r.runAt);
    }
    function o(e = "", t = "") {
        let n = globalThis, c = e;
        for (;;) {
            const e = c.indexOf(".");
            if (-1 === e) break;
            if (n = n[c.slice(0, e)], n instanceof Object == 0) return;
            c = c.slice(e + 1);
        }
        const a = n[c];
        if ("function" != typeof a) return;
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
        const r = a.toString(), i = function() {
            return r;
        }.bind(null), s = {
            apply: (e, n, c) => t(o.ApplyContext.factory(e, n, c)),
            get: (e, o) => "toString" === o ? i : Reflect.get(e, o)
        };
        a.prototype?.constructor === a && (s.construct = function(e, n) {
            return t(o.CtorContext.factory(e, n));
        }), n[c] = new Proxy(a, s);
    }
    function t() {
        if (n.safeSelf) return n.safeSelf;
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
        if (n.safeSelf = o, void 0 === n.bcSecret) return o;
        o.logLevel = n.logLevel || 1;
        let t = "", c = "", a = 0;
        o.toLogText = (e, ...o) => {
            if (0 === o.length) return;
            const n = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
            return n === c && e === t && Date.now() - a < 5e3 ? void 0 : (t = e, c = n, a = Date.now(), 
            n);
        };
        try {
            const t = new e.BroadcastChannel(n.bcSecret);
            let c = [];
            o.sendToLogger = (e, ...n) => {
                const a = o.toLogText(e, ...n);
                if (void 0 !== a) return void 0 === c ? t.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: a
                }) : void c.push({
                    type: e,
                    text: a
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
                const n = o.toLogText(e, ...t);
                void 0 !== n && o.log(`uBO ${n}`);
            };
        }
        return o;
    }
    const n = {}, c = [ [ "scroll" ], [ "/^(mouseout|mouseleave)$/" ], [ "/^(contextmenu|copy)$/" ], [ "blur" ], [ "copy" ], [ "contextmenu" ], [ "/^(?:contextmenu|copy|selectstart)$/" ], [ "/^(?:contextmenu|copy)$/", "preventDefault" ], [ "/^(?:contextmenu|keydown)$/" ], [ "/^(?:contextmenu|copy|keydown)$/" ], [ "mouseout", "pop" ], [ "/^(?:keyup|keydown)$/" ], [ "keydown" ], [ "keydown", "disable_in_input" ], [ "keydown", "preventDefault" ], [ "/contextmenu|keydown|keyup|copy/" ], [ "visibilitychange", "/bgmobile|\\{\\w\\.\\w+\\(\\)\\}/" ], [ "copy", "getSelection" ], [ "", "t.preventDefault" ], [ "copy", "replaceCopiedText" ], [ "/^(contextmenu|copy|dragstart|selectstart)$/" ], [ "", "ads" ], [ "/contextmenu|selectstart|copy/" ], [ "/contextmenu|copy|keydown/" ], [ "/contextmenu|select|copy/" ], [ "/^(contextmenu|keydown)$/" ], [ "contextmenu", "a" ], [ "mouseleave" ], [ "/contextmenu|selectstart/" ], [ "dragstart|keydown/" ], [ "/contextmenu|keydown|dragstart/" ], [ "", "_0x" ], [ "contextmenu", "preventDefault" ], [ "copy", "preventDefault" ], [ "", "adtoniq" ], [ "/^(?:contextmenu|copy|keydown|mousedown)$/" ], [ "/contextmenu|keydown/" ], [ "devtoolschange" ], [ "/contextmenu|copy/" ], [ "", "mdp" ], [ "/contextmenu|cut|copy|paste/" ], [ "/contextmenu|mousedown/" ], [ "mouseout" ], [ "/contextmenu|copy|selectstart/" ], [ "", "0x" ], [ "/^(?:contextmenu|dragstart|selectstart)$/" ], [ "/^(?:contextmenu|copy)$/" ], [ "/dragstart|keyup|keydown/" ], [ "/keyup|keydown/", "wpcc" ], [ "/contextmenu|cut|copy|keydown/" ], [ "", "undefined" ], [ "/contextmenu|selectstart|copy|dragstart/" ], [ "/copy|dragstart/" ], [ "/copy|contextmenu/" ], [ "error" ], [ "dragstart" ], [ "", "AdB" ], [ "selectionchange", "quill.emitter" ], [ "/contextmenu|selectstart|select|copy|dragstart/" ], [ "load", "adLazy" ], [ "copy", 'jQuery!=="undefined"' ], [ "selectstart" ], [ "/^(?:copy|paste)$/", "undefined" ], [ "/copy|keydown/" ], [ "/copy|cut|selectstart/" ], [ "/keydown|keyup/", "keyCode" ], [ "keydown", "disabledEvent" ], [ "/copy|cut|paste|selectstart/" ], [ "/contextmenu|dragstart|keydown/", "event.dispatch.apply" ], [ "beforepaste" ], [ "", "keyCode" ], [ "DOMContentLoaded", "rprw" ], [ "", "key" ], [ "", "ctrlKey" ], [ "copy", "pagelink" ], [ "/keydown|mousedown/" ], [ "copy", "Source" ], [ "mouseleave", "scribd_ad" ], [ "/contextmenu|copy|drag|dragstart/" ], [ "mousedown", "", "elements", ".entry-content" ], [ "/contextmenu|keydown|keypress|copy/" ], [ "", "blockFuckingEverything" ], [ "mouseout", "openLayer" ], [ "/contextmenu|keydown/", "preventDefault" ], [ "mousedown", "dispatch" ], [ "/contextmenu|mousedown/", 'return"undefined"' ], [ "DOMContentLoaded", "ready" ], [ "keydown", "disabledKeys" ], [ "DOMContentLoaded", "load" ], [ "contextmenu", "_0x" ], [ "keydown", "keyCode" ], [ "contextmenu", "undefined" ], [ "contextmenu", "[native code]" ], [ "/contextmenu|keyup|keydown/" ], [ "mouseout", "cookie" ], [ "DOMContentLoaded", "ads" ], [ "rocket-DOMContentLoaded", "bind(document)" ], [ "mouseout", "innerHeight" ], [ "/^(contextmenu|mousedown|keydown)$/", "preventDefault" ], [ "error", "browser-plugin" ], [ "/select|copy|contextmenu/" ], [ "/cut|copy|paste|contextmenu/" ], [ "keydown", "123" ], [ "mousedown", "undefined", "elements", "body" ], [ "afterKeydown" ], [ "keydown", "void" ], [ "copy", "void" ], [ "load", "ad-wrap" ], [ "/contextmenu|selectstart|dragstart/" ], [ "copy", "", "elements", "#__next" ], [ "DOMContentLoaded", "style.display" ], [ "copy", "clipboardData" ], [ "visibilitychange", "dispatch" ], [ "copy", "linkPrefixMessage" ], [ "selectionchange", ".html" ], [ "contextmenu", 'return"undefined"' ], [ "keydown", "||" ] ], a = new Map([ [ "nationalgeographic.com", [ 0, 5 ] ], [ "medium.com", 0 ], [ "artsy.net", 0 ], [ "boards.net", 0 ], [ "freeforums.net", 0 ], [ "proboards.com", 0 ], [ "todaysparent.com", 1 ], [ "straitstimes.com", 1 ], [ "dlnews.com", 1 ], [ "zaui.com", 1 ], [ "worldpopulationreview.com", 1 ], [ "scribd.com", 1 ], [ "s0urce.io", 2 ], [ "filefox.cc", 3 ], [ "uol.com.br", 4 ], [ "gazetadopovo.com.br", 4 ], [ "indiatimes.com", 4 ], [ "odiario.com", 4 ], [ "otempo.com.br", 4 ], [ "estadao.com.br", 4 ], [ "ofuxico.com.br", 4 ], [ "pentruea.com", 4 ], [ "ciberduvidas.iscte-iul.pt", 4 ], [ "globo.com", 4 ], [ "citas.in", 4 ], [ "blitzrechner.de", 4 ], [ "emailfake.com", 4 ], [ "lyrical-nonsense.com", 4 ], [ "mediafax.ro", 4 ], [ "economica.net", 4 ], [ "polsatnews.pl", 4 ], [ "novagente.pt", 4 ], [ "arlinadzgn.com", 4 ], [ "bilibili.com", [ 4, 57 ] ], [ "nowcoder.com", 4 ], [ "libertatea.ro", 4 ], [ "erinsakura.com", 4 ], [ "yuque.com", 4 ], [ "deepl.com", 4 ], [ "digi24.ro", 4 ], [ "onna.kr", 4 ], [ "ziare.com", 4 ], [ "agrointel.ro", 4 ], [ "skyozora.com", 4 ], [ "milenio.com", 4 ], [ "veneto.info", 4 ], [ "edurev.in", 4 ], [ "transinfo.pl", 4 ], [ "news.17173.com", 4 ], [ "chowhound.com", 4 ], [ "explore.com", 4 ], [ "foodie.com", 4 ], [ "foodrepublic.com", 4 ], [ "glam.com", 4 ], [ "grunge.com", 4 ], [ "healthdigest.com", 4 ], [ "housedigest.com", 4 ], [ "looper.com", 4 ], [ "mashed.com", 4 ], [ "moneydigest.com", 4 ], [ "nickiswift.com", 4 ], [ "outdoorguide.com", 4 ], [ "slashfilm.com", 4 ], [ "slashgear.com", 4 ], [ "tastingtable.com", 4 ], [ "thedailymeal.com", 4 ], [ "thelist.com", 4 ], [ "women.com", 4 ], [ "wrestlinginc.com", 4 ], [ "abril.com.br", 4 ], [ "sarthaks.com", 4 ], [ "delfi.lt", 4 ], [ "pendulumedu.com", 4 ], [ "bloomberglinea.com", 4 ], [ "bloomberglinea.com.br", 4 ], [ "peliculas24.me", 5 ], [ "roztoczanskipn.pl", 5 ], [ "economictimes.indiatimes.com", 5 ], [ "dzwignice.info", 5 ], [ "script-stack.com", [ 5, 39 ] ], [ "mio.to", 5 ], [ "husseinezzat.com", [ 5, 12 ] ], [ "taxo-acc.pl", 5 ], [ "portalwrc.pl", 5 ], [ "lublin.eu", 5 ], [ "mangaku.*", 5 ], [ "dddance.party", 5 ], [ "kapiert.de", 5 ], [ "hitcena.pl", 5 ], [ "tv-asahi.co.jp", 5 ], [ "digitalfernsehen.de", 5 ], [ "suzylu.co.uk", 5 ], [ "music.apple.com", 5 ], [ "skidrowcodex.net", 5 ], [ "dood.*", 5 ], [ "ds2play.com", 5 ], [ "ds2video.com", 5 ], [ "d0o0d.com", 5 ], [ "vsco.co", 5 ], [ "festival-cannes.com", 5 ], [ "strcloud.in", 5 ], [ "streamtape.*", 5 ], [ "ufret.jp", 5 ], [ "thenekodark.com", 5 ], [ "artesacro.org", 5 ], [ "poli-vsp.ru", 5 ], [ "polyvsp.ru", 5 ], [ "ananweb.jp", 5 ], [ "daimangajiten.com", 5 ], [ "digital.lasegunda.com", 5 ], [ "hibiki-radio.jp", 5 ], [ "garyfeinbergphotography.com", 5 ], [ "clubulbebelusilor.ro", 5 ], [ "gplinks.co", 5 ], [ "ifdreamscametrue.com", 5 ], [ "marksandspencer.com", 5 ], [ "asiatv.*", 5 ], [ "stowarzyszenie-impuls.eu", 5 ], [ "viveretenerife.com", 5 ], [ "oferty.dsautomobiles.pl", 5 ], [ "wzamrani.com", 5 ], [ "citroen.pl", 5 ], [ "peugeot.pl", 5 ], [ "wirtualnyspac3r.pl", 5 ], [ "antena3.com", 5 ], [ "lasexta.com", 5 ], [ "pashplus.jp", 5 ], [ "upvideo.to", 5 ], [ "kpopsea.com", 5 ], [ "cnki.net", 5 ], [ "wpchen.net", 5 ], [ "hongxiu.com", 5 ], [ "readnovel.com", 5 ], [ "uihtm.com", 5 ], [ "uslsoftware.com", 5 ], [ "rule34hentai.net", 5 ], [ "cloudemb.com", 5 ], [ "news24.jp", 5 ], [ "gaminplay.com", 5 ], [ "njjzxl.net", 5 ], [ "voe.sx", [ 5, 65 ] ], [ "voe-unblock.com", [ 5, 65 ] ], [ "scrolller.com", 5 ], [ "cocomanga.com", 5 ], [ "nusantararom.org", [ 5, 70 ] ], [ "virpe.cc", 5 ], [ "pobre.tv", [ 5, 70 ] ], [ "ukrainashop.com", 5 ], [ "celtadigital.com", 5 ], [ "matzoo.pl", 5 ], [ "asia2tv.com", 5 ], [ "labs.j-novel.club", 5 ], [ "turbo1.co", 5 ], [ "futbollatam.com", 5 ], [ "read.amazon.com", 5 ], [ "box-manga.com", 5 ], [ "the-masters-voice.com", 5 ], [ "hemas.pl", 5 ], [ "accgroup.vn", 5 ], [ "btvnovinite.bg", 5 ], [ "allcryptoz.net", 5 ], [ "crewbase.net", 5 ], [ "crewus.net", 5 ], [ "shinbhu.net", 5 ], [ "shinchu.net", 5 ], [ "topcryptoz.net", 5 ], [ "uniqueten.net", 5 ], [ "ultraten.net", 5 ], [ "cloudcomputingtopics.net", 5 ], [ "bianity.net", 5 ], [ "coinsparty.com", 5 ], [ "postype.com", 5 ], [ "lofter.com", 5 ], [ "hentaihaven.xxx", 5 ], [ "espn.com", 5 ], [ "4media.com", 5 ], [ "przegladpiaseczynski.pl", 5 ], [ "freewaysintl.com", 5 ], [ "cool-etv.net", 5 ], [ "j91.asia", 5 ], [ "sgd.de", 5 ], [ "bg-gledai.*", 5 ], [ "dicasfinanceirasbr.com", 5 ], [ "dicasdevalor.net", 5 ], [ "dicasdefinancas.net", 5 ], [ "guiasaude.info", 5 ], [ "felizemforma.com", 5 ], [ "financasdeouro.com", 5 ], [ "mangaschan.net", 5 ], [ "sssscanlator.com", 5 ], [ "nightscans.net", 5 ], [ "cypherscans.xyz", 5 ], [ "twitchemotes.com", 5 ], [ "smartkhabrinews.com", 5 ], [ "streamvid.net", 5 ], [ "mkv-pastes.com", 5 ], [ "ipphone-warehouse.com", [ 5, 104, 105, 106 ] ], [ "freewatchtv.top", 5 ], [ "gdplayertv.*", 5 ], [ "mixstreams.top", 5 ], [ "tvfreemium.top", 5 ], [ "duracell.de", 5 ], [ "all4pets.com.pl", 5 ], [ "knshow.com", 6 ], [ "jusbrasil.com.br", 7 ], [ "descarga-animex.*", 8 ], [ "techsupportall.com", 9 ], [ "lugarcerto.com.br", 10 ], [ "satcesc.com", 11 ], [ "miraculous.to", [ 11, 32 ] ], [ "jootc.com", 12 ], [ "operatorsekolahdbn.com", 12 ], [ "wawlist.com", 12 ], [ "teachoo.com", 12 ], [ "statelibrary.us", 13 ], [ "tabonitobrasil.*", 14 ], [ "anisubindo.*", 14 ], [ "bigulnews.tv", 15 ], [ "m.youtube.com", 16 ], [ "news.chosun.com", 17 ], [ "androidweblog.com", 18 ], [ "cronista.com", 19 ], [ "fcportables.com", 20 ], [ "venea.net", 21 ], [ "uta-net.com", 22 ], [ "downloadtutorials.net", [ 22, 39 ] ], [ "blog.naver.com", 22 ], [ "myschool-eng.com", 23 ], [ "orangespotlight.com", 24 ], [ "th-world.com", [ 24, 44 ] ], [ "tepat.id", 25 ], [ "itvn.pl", 26 ], [ "itvnextra.pl", 26 ], [ "kuchniaplus.pl", 26 ], [ "miniminiplus.pl", 26 ], [ "player.pl", 26 ], [ "ttv.pl", 26 ], [ "tvn.pl", 26 ], [ "tvn24.pl", 26 ], [ "tvn24bis.pl", 26 ], [ "tvn7.pl", 26 ], [ "tvnfabula.pl", 26 ], [ "tvnstyle.pl", 26 ], [ "tvnturbo.pl", 26 ], [ "x-link.pl", 26 ], [ "x-news.pl", 26 ], [ "kickante.com.br", 27 ], [ "thestar.com.my", 27 ], [ "corriereadriatico.it", 27 ], [ "ilsole24ore.com", 27 ], [ "thehouseofportable.com", 28 ], [ "ntvspor.net", 28 ], [ "book.zhulang.com", 28 ], [ "tadu.com", 28 ], [ "selfstudyhistory.com", 29 ], [ "lokercirebon.com", 30 ], [ "avdelphi.com", 31 ], [ "maxstream.video", 32 ], [ "wstream.*", 32 ], [ "wpb.shueisha.co.jp", 32 ], [ "tiktok.com", 32 ], [ "vedantu.com", 32 ], [ "zsti.zsti.civ.pl", 32 ], [ "kathleenmemberhistory.com", [ 32, 66 ] ], [ "nonesnanking.com", [ 32, 66 ] ], [ "prefulfilloverdoor.com", [ 32, 66 ] ], [ "phenomenalityuniform.com", [ 32, 66 ] ], [ "nectareousoverelate.com", [ 32, 66 ] ], [ "timberwoodanotia.com", [ 32, 66 ] ], [ "strawberriesporail.com", [ 32, 66 ] ], [ "valeronevijao.com", [ 32, 66 ] ], [ "cigarlessarefy.com", [ 32, 66 ] ], [ "figeterpiazine.com", [ 32, 66 ] ], [ "yodelswartlike.com", [ 32, 66 ] ], [ "generatesnitrosate.com", [ 32, 66 ] ], [ "crownmakermacaronicism.com", [ 32, 66 ] ], [ "chromotypic.com", [ 32, 66 ] ], [ "gamoneinterrupted.com", [ 32, 66 ] ], [ "metagnathtuggers.com", [ 32, 66 ] ], [ "wolfdyslectic.com", [ 32, 66 ] ], [ "rationalityaloelike.com", [ 32, 66 ] ], [ "sizyreelingly.com", [ 32, 66 ] ], [ "simpulumlamerop.com", [ 32, 66 ] ], [ "urochsunloath.com", [ 32, 66 ] ], [ "monorhinouscassaba.com", [ 32, 66 ] ], [ "counterclockwisejacky.com", [ 32, 66 ] ], [ "scatch176duplicities.com", [ 32, 66 ] ], [ "boonlessbestselling244.com", [ 32, 66 ] ], [ "cyamidpulverulence530.com", [ 32, 66 ] ], [ "guidon40hyporadius9.com", [ 32, 66 ] ], [ "19turanosephantasia.com", [ 32, 66 ] ], [ "30sensualizeexpression.com", [ 32, 66 ] ], [ "321naturelikefurfuroid.com", [ 32, 66 ] ], [ "745mingiestblissfully.com", [ 32, 66 ] ], [ "availedsmallest.com", [ 32, 66 ] ], [ "greaseball6eventual20.com", [ 32, 66 ] ], [ "toxitabellaeatrebates306.com", [ 32, 66 ] ], [ "20demidistance9elongations.com", [ 32, 66 ] ], [ "audaciousdefaulthouse.com", [ 32, 66 ] ], [ "fittingcentermondaysunday.com", [ 32, 66 ] ], [ "fraudclatterflyingcar.com", [ 32, 66 ] ], [ "launchreliantcleaverriver.com", [ 32, 66 ] ], [ "matriculant401merited.com", [ 32, 66 ] ], [ "realfinanceblogcenter.com", [ 32, 66 ] ], [ "reputationsheriffkennethsand.com", [ 32, 66 ] ], [ "telyn610zoanthropy.com", [ 32, 66 ] ], [ "tubelessceliolymph.com", [ 32, 66 ] ], [ "tummulerviolableness.com", [ 32, 66 ] ], [ "un-block-voe.net", [ 32, 66 ] ], [ "v-o-e-unblock.com", [ 32, 66 ] ], [ "voe-un-block.com", [ 32, 66 ] ], [ "voe-unblock.*", [ 32, 66 ] ], [ "voeun-block.net", [ 32, 66 ] ], [ "voeunbl0ck.com", [ 32, 66 ] ], [ "voeunblck.com", [ 32, 66 ] ], [ "voeunblk.com", [ 32, 66 ] ], [ "voeunblock3.com", [ 32, 66 ] ], [ "audiotools.pro", 32 ], [ "magesy.blog", 32 ], [ "www.ntv.co.jp", 32 ], [ "faptiti.com", 32 ], [ "wormate.io", 32 ], [ "pobre.*", [ 32, 81 ] ], [ "selfstudys.com", 32 ], [ "adslink.pw", 32 ], [ "jpopsingles.eu", 32 ], [ "vinstartheme.com", [ 32, 87 ] ], [ "leakedzone.com", [ 32, 90 ] ], [ "fjordd.com", 32 ], [ "seriesperu.com", 32 ], [ "zippyupload.com", 32 ], [ "3xyaoi.com", 32 ], [ "hotleak.vip", [ 32, 102 ] ], [ "hotleaks.tv", [ 32, 102 ] ], [ "topfaps.com", [ 32, 102 ] ], [ "foxteller.com", [ 32, 114 ] ], [ "alphapolis.co.jp", 33 ], [ "blog.csdn.net", 33 ], [ "juejin.cn", 33 ], [ "sweetslyrics.com", 33 ], [ "thegatewaypundit.com", 34 ], [ "thegearhunt.com", 35 ], [ "jfdb.jp", 36 ], [ "loginhit.com.ng", 36 ], [ "charbelnemnom.com", 36 ], [ "bphimmoi.net", 36 ], [ "goodhub.xyz", 36 ], [ "thotsbay.tv", 36 ], [ "topperlearning.com", 36 ], [ "bmovies.*", 37 ], [ "edailybuzz.com", 38 ], [ "zhihu.com", 38 ], [ "qidian.com", 38 ], [ "invado.pl", 38 ], [ "webnovel.com", 38 ], [ "skuola.net", 38 ], [ "marriedbiography.com", 38 ], [ "lunas.pro", 39 ], [ "onlinefreecourse.net", 39 ], [ "pisr.org", 39 ], [ "uplod.net", 39 ], [ "thewpclub.net", 39 ], [ "thememazing.com", 39 ], [ "themebanks.com", 39 ], [ "mesquitaonline.com", 39 ], [ "skandynawiainfo.pl", 39 ], [ "onlinecoursebay.com", 39 ], [ "dreamsfriend.com", 40 ], [ "trakteer.id", 41 ], [ "699pic.com", 41 ], [ "promobit.com.br", 42 ], [ "techjunkie.com", 42 ], [ "zerohedge.com", 42 ], [ "1mg.com", 42 ], [ "khou.com", 42 ], [ "10tv.com", 42 ], [ "kutub3lpdf.com", 43 ], [ "sklep-agroland.pl", 45 ], [ "polagriparts.pl", 46 ], [ "nordkorea-info.de", 47 ], [ "geotips.net", 48 ], [ "hardcoregames.ca", 49 ], [ "lataifas.ro", 50 ], [ "daotranslate.*", 50 ], [ "toppremiumpro.com", 51 ], [ "wattpad.com", 52 ], [ "starbene.it", 53 ], [ "fauxid.com", 54 ], [ "androidtvbox.eu", 55 ], [ "nicematin.com", 56 ], [ "yamibo.com", 58 ], [ "fimfiction.net", 59 ], [ "moegirl.org.cn", 60 ], [ "peekme.cc", 61 ], [ "ihbarweb.org.tr", 62 ], [ "baixedetudo.net.br", 63 ], [ "gardenia.net", 64 ], [ "hollywoodmask.com", 67 ], [ "mbalib.com", 67 ], [ "wenku.baidu.com", 68 ], [ "mooc.chaoxing.com", 69 ], [ "www-daftarharga.blogspot.com", 70 ], [ "realpython.com", 71 ], [ "linkmate.xyz", 72 ], [ "cristelageorgescu.ro", 73 ], [ "privivkainfo.ru", 74 ], [ "frameboxxindore.com", 74 ], [ "descargatepelis.com", 75 ], [ "vercalendario.info", 76 ], [ "zipcode.com.ng", 76 ], [ "slideshare.net", 77 ], [ "poipiku.com", 78 ], [ "jnews5.com", 79 ], [ "postcourier.com.pg", 80 ], [ "gmx.co.uk", 82 ], [ "gmx.com", 82 ], [ "likey.me", 83 ], [ "broflix.cc", 83 ], [ "bestcam.tv", 83 ], [ "wallpaperaccess.com", 84 ], [ "shortform.com", 85 ], [ "joysound.com", 86 ], [ "colors.sonicthehedgehog.com", 88 ], [ "senpa.io", 89 ], [ "txori.com", 89 ], [ "mangareader.to", 89 ], [ "comikey.com", 91 ], [ "saikaiscans.net", 92 ], [ "translate.goog", 93 ], [ "oreilly.com", 94 ], [ "alfred.camera", 95 ], [ "wrosinski.pl", 96 ], [ "wtsp.com", 97 ], [ "starzunion.com", 98 ], [ "lowcygier.pl", 99 ], [ "studiestoday.com", 100 ], [ "studyrankers.com", 101 ], [ "bharatavani.in", 101 ], [ "vidsrc.*", 102 ], [ "embed.su", 102 ], [ "bitcine.app", 102 ], [ "cineby.app", 102 ], [ "tv.verizon.com", 102 ], [ "sussytoons.*", 102 ], [ "bongdaplus.vn", 103 ], [ "timeanddate.com", 107 ], [ "naver.com", 108 ], [ "leetcode.cn", 109 ], [ "unknowncheats.me", 110 ], [ "cnblogs.com", 111 ], [ "cnn.com", 112 ], [ "kentucky.com", 113 ], [ "francis-bacon.com", 115 ], [ "animekai.*", 116 ], [ "anigo.to", 116 ] ]), r = new Map([]), i = (e, o, t) => {
        let n = o.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) t.add(e); else t.add(n);
    }, l = (() => {
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
    if (0 === l.length) return;
    const m = new Set, u = new Set;
    ((e, o = "") => {
        const t = e.split("."), n = t.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${t.slice(e).join(".")}${o}`;
                i(n, a, m), i(n, r, u);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let c = e; c > n; c--) {
                    const e = `${t.slice(n, c).join(".")}.*${o}`;
                    i(e, a, m), i(e, r, u);
                }
            }
        }
    })(l[0].hn);
    for (const o of m) if (!u.has(o)) try {
        e(...c[o]);
    } catch {}
}();