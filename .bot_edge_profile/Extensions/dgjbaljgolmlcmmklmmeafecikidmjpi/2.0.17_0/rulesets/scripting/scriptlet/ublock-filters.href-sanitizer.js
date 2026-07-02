!function() {
    function e(e = "", o = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const n = t(), i = n.makeLogPrefix("href-sanitizer", e, o);
        "" === o && (o = "text");
        const c = (e, t) => {
            let r = [];
            try {
                r = document.querySelectorAll(`a[href="${e}"`);
            } catch {}
            for (const e of r) e.setAttribute("href", t);
            return r.length;
        }, s = e => {
            if ("string" != typeof e) return "";
            if ("" === e) return "";
            if (/[\x00-\x20\x7f]/.test(e)) return "";
            try {
                return new URL(e, document.location).href;
            } catch {}
            return "";
        }, a = (e, t) => {
            if (!1 === Boolean(t)) return e;
            const r = t.includes("?", 1), o = r ? t.indexOf("?", 1) : t.length;
            try {
                let n = new URL(e, document.location).searchParams.get(t.slice(1, o));
                return null === n ? e : r ? a(n, t.slice(o)) : n;
            } catch {}
            return e;
        }, h = (e, t) => {
            if (/^\[.*\]$/.test(t)) return e.getAttribute(t.slice(1, -1).trim()) || "";
            if ("text" === t) return e.textContent.replace(/^[^\x21-\x7e]+/, "").replace(/[^\x21-\x7e]+$/, "");
            if (!1 === t.startsWith("?")) return "";
            const o = t.replace(/(\S)\?/g, "\\1?").split(/\s+/), n = 1 === o.length ? a(e.href, t) : r(e.href, !1, o);
            return void 0 !== n ? n.replace(/ /g, "%20") : void 0;
        }, l = () => {
            let t = [];
            try {
                t = document.querySelectorAll(e);
            } catch {
                return !1;
            }
            for (const e of t) {
                if ("a" !== e.localName) continue;
                if (!1 === e.hasAttribute("href")) continue;
                const t = e.getAttribute("href"), r = h(e, o), a = s(r);
                if ("" === a) continue;
                if (a === t) continue;
                e.setAttribute("href", a);
                const l = c(t, a);
                n.uboLog(i, `Sanitized ${l + 1} links to\n${a}`);
            }
            return !0;
        };
        let p, f;
        const u = e => {
            if (void 0 !== f) return;
            let t = !1;
            for (const r of e) if (0 !== r.addedNodes.length) {
                for (const e of r.addedNodes) if (1 === e.nodeType) {
                    t = !0;
                    break;
                }
                if (t) break;
            }
            !1 !== t && (f = n.onIdle((() => {
                f = void 0, l();
            })));
        };
        !function(e, r) {
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
                }, r = Array.isArray(e) ? e : [ e ];
                for (const e of r) {
                    const r = `${e}`;
                    if (!1 !== Object.hasOwn(t, r)) return t[r];
                }
                return 0;
            }, n = o("interactive");
            if (o(document.readyState) >= n) return void e();
            const c = t(), s = [ "readystatechange", () => {
                o(document.readyState) < n || (e(), c.removeEventListener.apply(document, s));
            }, {
                capture: !0
            } ];
            c.addEventListener.apply(document, s);
        }((() => {
            !1 !== l() && (p = new MutationObserver(u), p.observe(document.body, {
                subtree: !0,
                childList: !0
            }));
        }));
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
                const r = !0 !== t.canNegate || !1 === e.startsWith("!");
                !1 === r && (e = e.slice(1));
                const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== o ? {
                    re: new this.RegExp(o[1], o[2] || t.flags),
                    expect: r
                } : void 0 !== t.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                    expect: r
                } : {
                    pattern: e,
                    expect: r
                };
            },
            testPattern(e, t) {
                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
            },
            patternToRegex(e, t, r = !1) {
                if ("" === e) return /^/;
                const o = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === o) {
                    const o = this.escapeRegexChars(e);
                    return new RegExp(r ? `^${o}$` : o, t);
                }
                try {
                    return new RegExp(o[1], o[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const r = e.slice(t).reduce(((e, t, r, o) => {
                    if (0 == (1 & r)) {
                        const t = o[r + 1], n = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ o[r], n ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(r);
            },
            onIdle: (t, r) => e.requestIdleCallback ? e.requestIdleCallback(t, r) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (o.safeSelf = t, void 0 === o.bcSecret) return t;
        t.logLevel = o.logLevel || 1;
        let r = "", n = "", i = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return o === n && e === r && Date.now() - i < 5e3 ? void 0 : (r = e, n = o, i = Date.now(), 
            o);
        };
        try {
            const r = new e.BroadcastChannel(o.bcSecret);
            let n = [];
            t.sendToLogger = (e, ...o) => {
                const i = t.toLogText(e, ...o);
                if (void 0 !== i) return void 0 === n ? r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: i
                }) : void n.push({
                    type: e,
                    text: i
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === n) break;
                    n.forEach((({type: e, text: t}) => r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), n = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    t.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    t.logLevel = 2;
                }
            }, r.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...r) => {
                const o = t.toLogText(e, ...r);
                void 0 !== o && t.log(`uBO ${o}`);
            };
        }
        return t;
    }
    function r(e, t, o, n = {}) {
        try {
            let i = !1, c = e;
            for (const e of o) {
                const t = c, o = e.charCodeAt(0);
                if (35 !== o || "#" !== e) if (38 !== o) if (43 !== o || "+https" !== e) {
                    if (45 === o) {
                        if ("-base64" === e) {
                            c = self.atob(t);
                            continue;
                        }
                        if ("-safebase64" === e) {
                            void 0 === r.safeBase64Replacer && (r.safeBase64Map = {
                                "-": "+",
                                _: "/"
                            }, r.safeBase64Replacer = e => r.safeBase64Map[e]), c = t.replace(/[-_]/g, r.safeBase64Replacer), 
                            c = self.atob(c);
                            continue;
                        }
                        if ("-uricomponent" === e) {
                            c = decodeURIComponent(t);
                            continue;
                        }
                        if ("-blocked" === e) {
                            i = !0;
                            continue;
                        }
                    }
                    if (47 !== o) {
                        if (63 !== o) return;
                        if (c = new URL(t).searchParams.get(e.slice(1)), null === c) return;
                        c.includes(" ") && (c = c.replace(/ /g, "%20"));
                    } else {
                        const r = n.cache ?? new RegExp(e.slice(1, -1));
                        null === n.cache && (n.cache = r);
                        const o = r.exec(t);
                        if (null === o) return;
                        if (o.length <= 1) return;
                        c = o[1];
                    }
                } else {
                    const e = t.replace(/^https?:\/\//, "");
                    if (/^[\w-]:\/\//.test(e)) return;
                    c = `https://${e}`;
                } else {
                    const r = (parseInt(e.slice(1)) || 0) - 1;
                    if (r < 0) return;
                    const o = new URL(t);
                    if (r >= o.searchParams.size) return;
                    const n = Array.from(o.searchParams.keys());
                    c = decodeURIComponent(n[r]);
                } else {
                    const e = t.indexOf("#");
                    c = -1 !== e ? t.slice(e + 1) : "";
                }
            }
            const s = new URL(c);
            if ("https:" !== s.protocol && "http:" !== s.protocol) return;
            if (t && !0 !== i) return;
            return c;
        } catch {}
    }
    const o = {}, n = [ [ 'a[href^="https://cdns.6hiidude.gold/file.php?link=http"]', "?link" ], [ 'a[href^="https://azrom.net/"][href*="?url="]', "?url" ], [ 'a[href^="/p/download.html?ntlruby="]', "?ntlruby" ], [ 'a[href^="https://www.adtival.network/"][href*="&url="]', "?url" ], [ 'a[href^="https://linkshortify.com/"][href*="url=http"]', "?url" ], [ 'a[href^="https://www.linkedin.com/redir/redirect?url=http"]', "?url" ], [ 'a[href^="/rebates/welcome?url=http"]', "?url" ], [ 'a[href^="https://deeplink.musescore.com/redirect?to=http"]', "?to" ], [ 'a[href^="//duckduckgo.com/l/?uddg="]', "?uddg" ], [ 'a[href^="https://go.skimresources.com/"][href*="&url=http"]', "?url" ], [ 'a[href^="https://click.linksynergy.com/"][href*="link?id="][href*="&murl=http"]', "?murl" ], [ 'a[href^="/vp/player/to/?u=http"], a[href^="/vp/download/goto/?u=http"]', "?u" ], [ 'a[href^="https://drivevideo.xyz/link?link=http"]', "?link" ], [ 'a[href^="https://click.linksynergy.com/deeplink?id="][href*="&murl="]', "?murl" ], [ 'a[href*="?"][href*="&url=http"]', "?url" ], [ 'a[href*="?"][href*="&u=http"]', "?u" ], [ 'a[href^="https://app.adjust.com/"][href*="?fallback=http"]', "?fallback" ], [ 'a[href^="https://go.redirectingat.com?url=http"]', "?url" ], [ 'a[href^="/check.php?"][href*="&url=http"]', "?url" ], [ 'a[href^="https://click.linksynergy.com/deeplink?id="][href*="&murl=http"]', "?murl" ], [ 'a[href^="https://disq.us/url?url="][title^="http"]', "[title]" ], [ 'a[href^="https://disq.us/?url=http"]', "?url" ], [ 'a[href^="https://steamcommunity.com/linkfilter/?url=http"]', "?url" ], [ 'a[href^="https://steamcommunity.com/linkfilter/?u=http"]', "?u" ], [ 'a[href^="https://colab.research.google.com/corgiredirector?site=http"]', "?site" ], [ 'a[href^="https://shop-links.co/link/?"][href*="&url=http"]', "?url" ], [ 'a[href^="https://redirect.viglink.com/?"][href*="ourl=http"]', "?ourl" ], [ 'a[href^="http://www.jdoqocy.com/click-"][href*="?URL=http"]', "?URL" ], [ 'a[href^="https://track.adtraction.com/t/t?"][href*="&url=http"]', "?url" ], [ 'a[href^="https://metager.org/partner/r?link=http"]', "?link" ], [ 'a[href*="go.redirectingat.com"][href*="url=http"]', "?url" ], [ 'a[href^="https://slickdeals.net/?"][href*="u2=http"]', "?u2" ], [ 'a[href^="https://online.adservicemedia.dk/"][href*="deeplink=http"]', "?deeplink" ], [ 'a[href*=".justwatch.com/a?"][href*="&r=http"]', "?r" ], [ 'a[href^="https://clicks.trx-hub.com/"][href*="bn5x.net"]', "?q?u" ], [ 'a[href^="https://shopping.yahoo.com/rdlw?"][href*="gcReferrer=http"]', "?gcReferrer" ], [ 'a[href*="?"][href*="u=http"]:is([href*=".com/c/"],[href*=".io/c/"],[href*=".net/c/"],[href*="?subId1="],[href^="https://affportal.bhphoto.com/dl/redventures/?"])', "?u" ], [ 'a[href*="?"][href*="url=http"]:is([href^="https://cc."][href*=".com/v1/otc/"],[href^="https://go.skimresources.com"],[href^="https://go.redirectingat.com"],[href^="https://invol.co/aff_m?"],[href^="https://shop-links.co/link"],[href^="https://track.effiliation.com/servlet/effi.redir?"],[href*=".com/a.ashx?"],[href^="https://www."][href*=".com/t/"],[href*=".prsm1.com/r?"],[href*=".com/click-"],[href*=".net/click-"],a[href*=".com/t/t?a="],a[href*=".dk/t/t?a="])', "?url" ], [ 'a[href*="/Proxy.ashx?"][href*="GR_URL=http"]', "?GR_URL" ], [ 'a[href^="https://go.redirectingat.com/"][href*="&url=http"]', "?url" ], [ 'a[href*="awin1.com/"][href*=".php?"][href*="ued=http"]', "?ued" ], [ 'a[href*="awin1.com/"][href*=".php?"][href*="p=http"]', "?p" ], [ 'a.autolinker_link[href*=".com/t/"][href*="url=http"]', "?url" ], [ 'a[rel="sponsored nofollow"][href^="https://fsx.i-run.fr/?"][href*="redir=http"]', "?redir" ], [ 'a[rel="sponsored nofollow"][href*=".tradeinn.com/ts/"][href*="trg=http"]', "?trg" ], [ 'a[href*=".com/r.cfm?"][href*="urllink=http"]', "?urllink" ], [ 'a[href^="https://gate.sc"][href*="?url=http"]', "?url" ], [ 'a[href^="https://spreaker.onelink.me/"][href*="&af_web_dp=http"]', "?af_web_dp" ], [ 'a[href*="https://www.chollometro.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.dealabs.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.hotukdeals.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.mydealz.de/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://nl.pepper.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.pepper.it/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.pepper.pl/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.pepper.ru/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.preisjaeger.at/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.promodescuentos.com/visit/"][title^="https://"]', "[title]" ], [ 'a[href*="https://www.pelando.com.br/api/redirect?url="]', "?url" ], [ 'a[href^="https://cna.st/"][data-offer-url^="https://"]', "[data-offer-url]" ], [ 'a.btn[href^="https://zxro.com/u/?url=http"]', "?url" ] ], i = new Map([ [ "6hiidude.gold", 0 ], [ "azrom.net", 1 ], [ "taisachonthi.com", 2 ], [ "kazefuri.net", 3 ], [ "movies4u.*", 4 ], [ "linkedin.com", 5 ], [ "bing.com", 6 ], [ "musescore.com", 7 ], [ "html.duckduckgo.com", 8 ], [ "lite.duckduckgo.com", 8 ], [ "starstyle.com", 9 ], [ "insidehook.com", [ 10, 36, 37, 40, 41, 45 ] ], [ "nbcnews.com", [ 10, 36, 37, 40, 41 ] ], [ "pcpartpicker.com", [ 10, 36, 37 ] ], [ "space.com", [ 10, 36, 37, 38, 40, 41 ] ], [ "tomshardware.com", [ 10, 19, 36, 37, 38 ] ], [ "fap18.net", 11 ], [ "xxxmom.net", 11 ], [ "fuck55.net", 11 ], [ "gofucker.com", 11 ], [ "sexu.tv", 11 ], [ "vid123.net", 11 ], [ "babe8.net", 11 ], [ "beeg.porn", 11 ], [ "losporn.org", 12 ], [ "streamporn.li", 12 ], [ "pandamovies.org", 12 ], [ "bananamovies.org", 12 ], [ "xopenload.net", 12 ], [ "adultdvdparadise.com", 12 ], [ "speedporn.net", 12 ], [ "mangoporn.net", 12 ], [ "pandamovie.info", 12 ], [ "mangoporn.co", 12 ], [ "mangoparody.com", 12 ], [ "xxxscenes.net", 12 ], [ "pornkino.cc", 12 ], [ "watchxxxfree.pw", 12 ], [ "pandamovie.in", 12 ], [ "speedporn.pw", 12 ], [ "watchfreexxx.net", 12 ], [ "youwatchporn.com", 12 ], [ "watchpornfree.info", 12 ], [ "pandamovies.me", 12 ], [ "xtapes.me", 12 ], [ "netflixporno.net", 12 ], [ "pornwish.org", 12 ], [ "freeomovie.info", 12 ], [ "fullxxxmovies.me", 12 ], [ "watchpornx.com", 12 ], [ "xxxparodyhd.net", 12 ], [ "xxxstream.me", 12 ], [ "pornwatch.ws", 12 ], [ "xopenload.pw", 12 ], [ "pandamovies.pw", 12 ], [ "streamporn.pw", 12 ], [ "xopenload.me", 12 ], [ "nowinstock.net", [ 13, 14, 15 ] ], [ "paypal.com", 16 ], [ "elotrolado.net", 17 ], [ "tube188.com", 18 ], [ "disqus.com", [ 20, 21 ] ], [ "steamcommunity.com", [ 22, 23 ] ], [ "colab.research.google.com", 24 ], [ "xda-developers.com", [ 25, 26, 40, 41 ] ], [ "isthereanydeal.com", [ 27, 28 ] ], [ "metager.org", 29 ], [ "slickdeals.net", [ 30, 31 ] ], [ "dk.pcpartpicker.com", 32 ], [ "justwatch.com", 33 ], [ "variety.com", 34 ], [ "engadget.com", 35 ], [ "cnet.com", [ 36, 37 ] ], [ "dogfoodadvisor.com", 36 ], [ "hunker.com", [ 36, 37 ] ], [ "notebookcheck.net", 36 ], [ "pcgamingwiki.com", [ 36, 37 ] ], [ "popularmechanics.com", [ 36, 37 ] ], [ "purewow.com", [ 36, 37 ] ], [ "sheknows.com", 36 ], [ "streetinsider.com", 36 ], [ "zdnet.com", [ 36, 37, 38 ] ], [ "androidauthority.com", 37 ], [ "jljbacktoclassic.com", [ 37, 45 ] ], [ "otherweb.com", 37 ], [ "sport-passion.fr", [ 37, 43, 44 ] ], [ "windowscentral.com", 39 ], [ "shutupandtakemyyen.com", [ 40, 41 ] ], [ "thisiswhyimbroke.com", [ 40, 41 ] ], [ "forums.redflagdeals.com", 42 ], [ "soundcloud.com", 46 ], [ "spreaker.com", 47 ], [ "chollometro.com", 48 ], [ "dealabs.com", 49 ], [ "hotukdeals.com", 50 ], [ "mydealz.de", 51 ], [ "nl.pepper.com", 52 ], [ "pepper.it", 53 ], [ "pepper.pl", 54 ], [ "pepper.ru", 55 ], [ "preisjaeger.at", 56 ], [ "promodescuentos.com", 57 ], [ "pelando.com.br", 58 ], [ "pitchfork.com", 59 ], [ "onual.com", 60 ] ]), c = new Map([]), s = (e, t, r) => {
        let o = t.get(e);
        if (void 0 !== o) if ("number" != typeof o) for (const e of o) r.add(e); else r.add(o);
    }, h = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const r = e.lastIndexOf("://");
            if (-1 === r) return;
            const o = e.slice(r + 3), n = o.indexOf(":");
            return {
                hn: -1 === n ? o : o.slice(0, n),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === h.length) return;
    const l = new Set, p = new Set;
    ((e, t = "") => {
        const r = e.split("."), o = r.length;
        if (0 !== o) {
            for (let e = 0; e < o; e++) {
                const o = `${r.slice(e).join(".")}${t}`;
                s(o, i, l), s(o, c, p);
            }
            {
                const e = o - 1;
                for (let o = 0; o < e; o++) for (let n = e; n > o; n--) {
                    const e = `${r.slice(o, n).join(".")}.*${t}`;
                    s(e, i, l), s(e, c, p);
                }
            }
        }
    })(h[0].hn);
    for (const t of l) if (!p.has(t)) try {
        e(...n[t]);
    } catch {}
}();