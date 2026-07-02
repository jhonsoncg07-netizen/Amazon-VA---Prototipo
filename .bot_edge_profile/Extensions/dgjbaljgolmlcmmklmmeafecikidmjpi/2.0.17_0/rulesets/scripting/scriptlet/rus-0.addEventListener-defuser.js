!function() {
    function e(e = "", o = "") {
        const i = r(), a = i.getExtraArgs(Array.from(arguments), 2), s = i.makeLogPrefix("prevent-addEventListener", e, o), c = i.patternToRegex(e, void 0, !0), l = i.patternToRegex(o), u = (function(e) {
            if (e instanceof Object == 0) return !1;
            n.canDebug && e.debug;
        }(a), a.elements || void 0), d = e => {
            if (e instanceof Window) return "window";
            if (e instanceof Document) return "document";
            if (e instanceof Element == 0) return "?";
            const t = [], r = String(e.id);
            "" !== r && t.push(`#${CSS.escape(r)}`);
            for (let r = 0; r < e.classList.length; r++) t.push(`.${CSS.escape(e.classList.item(r))}`);
            for (let r = 0; r < e.attributes.length; r++) {
                const n = e.attributes.item(r);
                "id" !== n.name && "class" !== n.name && t.push(`[${CSS.escape(n.name)}="${n.value}"]`);
            }
            return t.join("");
        }, p = (e, t, r) => {
            const n = i.RegExp_test.call(c, t), o = i.RegExp_test.call(l, r), a = n && o;
            return (!a || void 0 === u || !1 !== (s = e, "window" === u ? s === window : "document" === u ? s === document : !!(s && s.matches && s.matches(u)) || Array.from(document.querySelectorAll(u)).includes(s))) && a;
            var s;
        }, g = function(t) {
            const {callArgs: r, thisArg: n} = t;
            let a, c;
            try {
                a = String(r[0]), "function" == typeof r[1] ? c = String(i.Function_toString(r[1])) : "object" == typeof r[1] && null !== r[1] ? "function" == typeof r[1].handleEvent && (c = String(i.Function_toString(r[1].handleEvent))) : c = String(r[1]);
            } catch {}
            if ("" === e && "" === o) i.uboLog(s, `Called: ${a}\n${c}\n${d(n)}`); else if (p(n, a, c)) return i.uboLog(s, `Prevented: ${a}\n${c}\n${d(n)}`);
            return t.reflect();
        };
        !function(e, t) {
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
                }, r = Array.isArray(e) ? e : [ e ];
                for (const e of r) {
                    const r = `${e}`;
                    if (!1 !== Object.hasOwn(t, r)) return t[r];
                }
                return 0;
            }, o = n(t);
            if (n(document.readyState) >= o) return void e();
            const a = r(), s = [ "readystatechange", () => {
                n(document.readyState) < o || (e(), a.removeEventListener.apply(document, s));
            }, {
                capture: !0
            } ];
            a.addEventListener.apply(document, s);
        }((() => {
            t("EventTarget.prototype.addEventListener", g), t("document.addEventListener", g);
        }), a.runAt);
    }
    function t(e = "", r = "") {
        let n = globalThis, o = e;
        for (;;) {
            const e = o.indexOf(".");
            if (-1 === e) break;
            if (n = n[o.slice(0, e)], n instanceof Object == 0) return;
            o = o.slice(e + 1);
        }
        const i = n[o];
        if ("function" != typeof i) return;
        void 0 === t.CtorContext && (t.ctorContexts = [], t.CtorContext = class {
            constructor(...e) {
                this.init(...e);
            }
            init(e, t) {
                return this.callFn = e, this.callArgs = t, this;
            }
            reflect() {
                const e = Reflect.construct(this.callFn, this.callArgs);
                return this.callFn = this.callArgs = this.private = void 0, t.ctorContexts.push(this), 
                e;
            }
            static factory(...e) {
                return 0 !== t.ctorContexts.length ? t.ctorContexts.pop().init(...e) : new t.CtorContext(...e);
            }
        }, t.applyContexts = [], t.ApplyContext = class {
            constructor(...e) {
                this.init(...e);
            }
            init(e, t, r) {
                return this.callFn = e, this.thisArg = t, this.callArgs = r, this;
            }
            reflect() {
                const e = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                return this.callFn = this.thisArg = this.callArgs = this.private = void 0, t.applyContexts.push(this), 
                e;
            }
            static factory(...e) {
                return 0 !== t.applyContexts.length ? t.applyContexts.pop().init(...e) : new t.ApplyContext(...e);
            }
        });
        const a = i.toString(), s = function() {
            return a;
        }.bind(null), c = {
            apply: (e, n, o) => r(t.ApplyContext.factory(e, n, o)),
            get: (e, t) => "toString" === t ? s : Reflect.get(e, t)
        };
        i.prototype?.constructor === i && (c.construct = function(e, n) {
            return r(t.CtorContext.factory(e, n));
        }), n[o] = new Proxy(i, c);
    }
    function r() {
        if (n.safeSelf) return n.safeSelf;
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
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== n ? {
                    re: new this.RegExp(n[1], n[2] || t.flags),
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
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === n) {
                    const n = this.escapeRegexChars(e);
                    return new RegExp(r ? `^${n}$` : n, t);
                }
                try {
                    return new RegExp(n[1], n[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const r = e.slice(t).reduce(((e, t, r, n) => {
                    if (0 == (1 & r)) {
                        const t = n[r + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ n[r], o ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(r);
            },
            onIdle: (t, r) => e.requestIdleCallback ? e.requestIdleCallback(t, r) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (n.safeSelf = t, void 0 === n.bcSecret) return t;
        t.logLevel = n.logLevel || 1;
        let r = "", o = "", i = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return n === o && e === r && Date.now() - i < 5e3 ? void 0 : (r = e, o = n, i = Date.now(), 
            n);
        };
        try {
            const r = new e.BroadcastChannel(n.bcSecret);
            let o = [];
            t.sendToLogger = (e, ...n) => {
                const i = t.toLogText(e, ...n);
                if (void 0 !== i) return void 0 === o ? r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: i
                }) : void o.push({
                    type: e,
                    text: i
                });
            }, r.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: e, text: t}) => r.postMessage({
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
            }, r.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...r) => {
                const n = t.toLogText(e, ...r);
                void 0 !== n && t.log(`uBO ${n}`);
            };
        }
        return t;
    }
    const n = {}, o = [ [ "/^(?:contextmenu|keydown)$/" ], [ "/beforeunload|pagehide/", "0x" ], [ "/click|load/", "popMagic" ], [ "/click|mousedown/", "popunder" ], [ "/mouse/", "cursorVisible" ], [ "DOMContentLoaded", "fullscreen-ad" ], [ "DOMContentLoaded", ".j-mini-player__video" ], [ "DOMContentLoaded", "/EventTracker|utm_campaign/" ], [ "DOMContentLoaded", "0x" ], [ "DOMContentLoaded", "StrategyHandler" ], [ "DOMContentLoaded", "_Modal" ], [ "DOMContentLoaded", "encodedUrl" ], [ "DOMContentLoaded", "exo_tracker" ], [ "DOMContentLoaded", "feedback" ], [ "click", "", "elements", 'a[href*="utm_campaign"]' ], [ "click", "[native code]" ], [ "click", "matches" ], [ "copy", "extra" ], [ "copy", "getSelection" ], [ "copy", "pagelink" ], [ "error", "", "elements", '[data-status="loading"]' ], [ "getexoloader" ], [ "load", "AdBlock" ], [ "load", "detect-modal" ], [ "load", "mamydirect" ], [ "loadstart", "isImmediatePropagationStopped" ], [ "mousedown", "pop.doEvent" ], [ "new", "window.location" ], [ "scroll", "getBoundingClientRect" ], [ "scroll", "players" ], [ "scroll", "window.history.pushState" ], [ "userpause", "Math.random" ], [ "visibilitychange", "document.hidden" ], [ "/contextmenu|copy|keydown|selectstart/" ], [ "DOMContentLoaded", "click_time" ], [ "/click|destroy|mousedown/", "", "elements", ".html-fishing" ], [ "visibilitychange", "captureContext" ] ], i = new Map([ [ "7days.ru", [ 0, 36 ] ], [ "drive2.ru", 1 ], [ "shedevrum.ai", 1 ], [ "fastpic.org", [ 2, 21 ] ], [ "biqle.org", 3 ], [ "biqle.ru", 3 ], [ "fm-app.ru", 4 ], [ "tvapp.su", 4 ], [ "yootv.ru", 4 ], [ "cq.ru", 5 ], [ "rambler.ru", [ 6, 17 ] ], [ "sibnet.ru", 7 ], [ "sports.ru", 8 ], [ "buhplatforma.com.ua", 9 ], [ "dzplatforma.com.ua", 9 ], [ "medplatforma.com.ua", 9 ], [ "oblikbudget.com.ua", 9 ], [ "oplatforma.com.ua", 9 ], [ "pro-op.com.ua", 9 ], [ "prokadry.com.ua", 9 ], [ "doramaland.plus", 10 ], [ "1progs.me", 11 ], [ "xv-ru.com", 12 ], [ "litnet.com", 13 ], [ "regnum.news", 14 ], [ "regnum.ru", 14 ], [ "tproger.ru", 14 ], [ "softonic.ru", 15 ], [ "smotrim.ru", 16 ], [ "kp.kg", [ 18, 36 ] ], [ "kp.kz", [ 18, 36 ] ], [ "kp.md", [ 18, 36 ] ], [ "kp.ru", [ 18, 36 ] ], [ "rbc.ru", 18 ], [ "sportrbc.ru", 18 ], [ "carservic.ru", 19 ], [ "iptv.org.ua", 19 ], [ "tva.org.ua", 19 ], [ "ufchgu.ru", 19 ], [ "trychatgpt.ru", 20 ], [ "romakatya.ru", 22 ], [ "blackwot.ru", 23 ], [ "overclockers.ru", 24 ], [ "bonus-tv.ru", 25 ], [ "kinoblin.ru", 26 ], [ "pornoakt.info", 26 ], [ "serialai.ru", 26 ], [ "bzrus.pro", [ 27, 31 ] ], [ "m.lenta.ru", 28 ], [ "www.vesti.ru", 29 ], [ "lenta.ru", 30 ], [ "rutube.ru", 32 ], [ "autonews.co.ua", 33 ], [ "in-poland.com", 33 ], [ "liveball.*", 33 ], [ "ukrainianwall.com", 33 ], [ "fap-guru.*", 34 ], [ "seks-studentki.*", 34 ], [ "sex-studentki.*", 34 ], [ "e.mail.ru", 35 ], [ "octavius.mail.ru", 35 ], [ "cdn.viqeo.tv", 36 ], [ "kinonews.ru", 36 ], [ "mk.ru", 36 ], [ "ohotniki.ru", 36 ], [ "portalvirtualreality.ru", 36 ], [ "radiokp.ru", 36 ], [ "sportkp.ru", 36 ], [ "the-day.ru", 36 ], [ "woman.ru", 36 ], [ "www.fontanka.ru", 36 ] ]), a = new Map([ [ "new.fastpic.org", [ 2, 21 ] ], [ "id.rambler.ru", [ 6, 17 ] ], [ "vp.rambler.ru", [ 6, 17 ] ], [ "player.smotrim.ru", [ 16 ] ], [ "mail.rambler.ru", [ 17 ] ] ]), s = (e, t, r) => {
        let n = t.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) r.add(e); else r.add(n);
    }, l = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const r = e.lastIndexOf("://");
            if (-1 === r) return;
            const n = e.slice(r + 3), o = n.indexOf(":");
            return {
                hn: -1 === o ? n : n.slice(0, o),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === l.length) return;
    const u = new Set, d = new Set;
    ((e, t = "") => {
        const r = e.split("."), n = r.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${r.slice(e).join(".")}${t}`;
                s(n, i, u), s(n, a, d);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let o = e; o > n; o--) {
                    const e = `${r.slice(n, o).join(".")}.*${t}`;
                    s(e, i, u), s(e, a, d);
                }
            }
        }
    })(l[0].hn);
    for (const t of u) if (!d.has(t)) try {
        e(...o[t]);
    } catch {}
}();