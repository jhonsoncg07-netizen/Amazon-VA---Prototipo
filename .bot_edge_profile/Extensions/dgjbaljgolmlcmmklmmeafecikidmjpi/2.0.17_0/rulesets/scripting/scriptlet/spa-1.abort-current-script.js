!function() {
    function e(...e) {
        !function(e) {
            if (document.documentElement) return void e();
            const t = new MutationObserver((() => {
                t.disconnect(), e();
            }));
            t.observe(document, {
                childList: !0
            });
        }((() => {
            !function(e = "", n = "", r = "") {
                if ("string" != typeof e) return;
                if ("" === e) return;
                const i = t(), c = i.makeLogPrefix("abort-current-script", e, n, r), s = i.patternToRegex(n), a = i.patternToRegex(r), l = i.getExtraArgs(Array.from(arguments), 3), d = document.currentScript, g = i.String_split.call(e, ".");
                let u, p, f = window;
                for (;u = g.shift(), 0 !== g.length && u in f != 0; ) if (f = f[u], f instanceof Object == 0) return;
                let m = Object.getOwnPropertyDescriptor(f, u);
                m instanceof Object != 0 && m.get instanceof Function != 0 || (p = f[u], m = void 0), 
                function(e) {
                    if (e instanceof Object == 0) return !1;
                    o.canDebug && e.debug;
                }(l);
                const b = function() {
                    const e = function() {
                        const e = t();
                        return e.String_fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36);
                    }(), o = self.onerror;
                    return self.onerror = function(t, ...n) {
                        return !("string" != typeof t || !t.includes(e)) || (o instanceof Function ? o.call(this, t, ...n) : void 0);
                    }.bind(), e;
                }(), h = new WeakMap, v = e => {
                    let t = e.textContent;
                    if ("" !== t.trim()) return t;
                    if (h.has(e)) return h.get(e);
                    const [, o, n] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                    try {
                        t = !0 === o.endsWith(";base64") ? self.atob(n) : self.decodeURIComponent(n);
                    } catch {}
                    return h.set(e, t), t;
                }, y = () => {
                    const e = document.currentScript;
                    if (e instanceof HTMLScriptElement == 0) return;
                    if (e === d) return;
                    if ("" !== r && !1 === a.test(e.src)) return;
                    i.logLevel > 1 && "" !== r && i.uboLog(c, `Matched src\n${e.src}`);
                    const t = v(e);
                    if (!1 !== s.test(t)) throw i.logLevel > 1 && i.uboLog(c, `Matched text\n${t}`), 
                    i.uboLog(c, "Aborted"), new ReferenceError(b);
                };
                try {
                    Object.defineProperty(f, u, {
                        get: function() {
                            return y(), m instanceof Object ? m.get.call(f) : p;
                        },
                        set: function(e) {
                            y(), m instanceof Object ? m.set.call(f, e) : p = e;
                        }
                    });
                } catch (e) {
                    i.uboErr(c, `Error: ${e}`);
                }
            }(...e);
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
        let n = "", r = "", i = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return o === r && e === n && Date.now() - i < 5e3 ? void 0 : (n = e, r = o, i = Date.now(), 
            o);
        };
        try {
            const n = new e.BroadcastChannel(o.bcSecret);
            let r = [];
            t.sendToLogger = (e, ...o) => {
                const i = t.toLogText(e, ...o);
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
    const o = {}, n = [ [ "document.createElement", "adsbygoogle.js" ], [ "fetch", "/alert|bloqueador|\\.catch|\\.type/" ], [ "EventTarget.prototype.addEventListener", "adsbygoogle.js" ], [ "jQuery", "AdblockDetector" ], [ "addEventListener", "displayMessage" ], [ "document.getElementsByTagName", "adsbygoogle.js" ], [ "document.createElement", "adblock" ], [ "$", "blockWall" ], [ "document.addEventListener", ".innerHTML" ], [ "$", "!document.getElementById(" ], [ "jQuery", "/Adblock|dummy|detect/" ], [ "EventTarget.prototype.addEventListener", "adblock" ], [ "onload", "AdBlock" ], [ "EventTarget.prototype.addEventListener", "blocker_detector" ], [ "$", "Adblock" ], [ "document.addEventListener", "/;return \\{clear:function\\(\\)\\{/" ], [ "document.addEventListener", "window.open" ], [ "String.prototype.concat", "popup" ], [ "EventTarget.prototype.addEventListener", "window.open" ], [ "$", "window.open" ], [ "enlace", "document.write" ], [ "$", "notficationAd" ], [ "open", "document.getElementById" ], [ "document.addEventListener", "excludeDomains" ], [ "document.addEventListener", "create_" ], [ "document.getElementsByTagName", "onclick" ], [ "$", "ads_enabled" ], [ "host", "window.btoa" ], [ "$", '.one("click"' ], [ "Node.prototype.insertBefore", "popns" ], [ "EventTarget.prototype.addEventListener", "pop[_0x" ], [ "setInterval", "doTabUnder" ], [ "setTimeout", "_blank" ], [ "document.addEventListener", "showPopup" ], [ "document.addEventListener", "window.location;" ], [ "EventTarget.prototype.addEventListener", "/Popunder|Popup/" ] ], r = new Map([ [ "gamesperu2021.blogspot.com", [ 0, 16 ] ], [ "playertv.org", 0 ], [ "luratoons.com", 1 ], [ "lura-toons.com", 1 ], [ "gamesteelstudioplus.blogspot.com", 2 ], [ "gamesteelstudio.blogspot.com", 2 ], [ "infohojeonline.blogspot.com", 2 ], [ "dicasdevalor.net", 3 ], [ "canalnatelinhaonline.blogspot.com", 4 ], [ "hinatasoul.com", 5 ], [ "inuyashadowns.com.br", 6 ], [ "link.baixedetudo.net.br", 6 ], [ "oliberal.com", 7 ], [ "suaads.com", 8 ], [ "reidoplacar.com", 8 ], [ "suaurl.com", [ 8, 21, 22 ] ], [ "csrevo.com", 9 ], [ "guianoticiario.net", 10 ], [ "oceans14.com.br", 11 ], [ "illamadas.es", 12 ], [ "audiotools.in", 13 ], [ "ecartelera.com", 14 ], [ "animeshouse.net", 15 ], [ "packsmega.info", 17 ], [ "embedder.net", 18 ], [ "animeocs.com", 18 ], [ "hentaijl.com", 18 ], [ "playpaste.com", [ 19, 20 ] ], [ "zpaste.net", 19 ], [ "pasfox.com", [ 20, 26 ] ], [ "multipaste.org", 23 ], [ "tiohentai.xyz", 24 ], [ "movidy.*", 25 ], [ "seireshd.com", 27 ], [ "hentai-id.tv", 28 ], [ "animefire.plus", 29 ], [ "seriesflix.onl", 30 ], [ "tvserieslatino.com", 31 ], [ "seriesperu.com", 32 ], [ "peliculas8k.com", 32 ], [ "toonscrab.com", 33 ], [ "todo-anime.net", 34 ], [ "latinohentai.vip", 35 ], [ "latinohentai.com", 35 ] ]), i = new Map([]), c = (e, t, o) => {
        let n = t.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) o.add(e); else o.add(n);
    }, a = (() => {
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
    if (0 === a.length) return;
    const l = new Set, d = new Set;
    ((e, t = "") => {
        const o = e.split("."), n = o.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${o.slice(e).join(".")}${t}`;
                c(n, r, l), c(n, i, d);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let s = e; s > n; s--) {
                    const e = `${o.slice(n, s).join(".")}.*${t}`;
                    c(e, r, l), c(e, i, d);
                }
            }
        }
    })(a[0].hn);
    for (const t of l) if (!d.has(t)) try {
        e(...n[t]);
    } catch {}
}();