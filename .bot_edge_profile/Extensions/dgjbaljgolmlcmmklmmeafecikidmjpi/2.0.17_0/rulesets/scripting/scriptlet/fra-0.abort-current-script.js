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
            !function(e = "", r = "", o = "") {
                if ("string" != typeof e) return;
                if ("" === e) return;
                const c = t(), i = c.makeLogPrefix("abort-current-script", e, r, o), s = c.patternToRegex(r), a = c.patternToRegex(o), l = c.getExtraArgs(Array.from(arguments), 3), u = document.currentScript, g = c.String_split.call(e, ".");
                let d, f, p = window;
                for (;d = g.shift(), 0 !== g.length && d in p != 0; ) if (p = p[d], p instanceof Object == 0) return;
                let m = Object.getOwnPropertyDescriptor(p, d);
                m instanceof Object != 0 && m.get instanceof Function != 0 || (f = p[d], m = void 0), 
                function(e) {
                    if (e instanceof Object == 0) return !1;
                    n.canDebug && e.debug;
                }(l);
                const h = function() {
                    const e = function() {
                        const e = t();
                        return e.String_fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36);
                    }(), n = self.onerror;
                    return self.onerror = function(t, ...r) {
                        return !("string" != typeof t || !t.includes(e)) || (n instanceof Function ? n.call(this, t, ...r) : void 0);
                    }.bind(), e;
                }(), b = new WeakMap, O = e => {
                    let t = e.textContent;
                    if ("" !== t.trim()) return t;
                    if (b.has(e)) return b.get(e);
                    const [, n, r] = /^data:([^,]*),(.+)$/.exec(e.src.trim()) || [ "", "", "" ];
                    try {
                        t = !0 === n.endsWith(";base64") ? self.atob(r) : self.decodeURIComponent(r);
                    } catch {}
                    return b.set(e, t), t;
                }, x = () => {
                    const e = document.currentScript;
                    if (e instanceof HTMLScriptElement == 0) return;
                    if (e === u) return;
                    if ("" !== o && !1 === a.test(e.src)) return;
                    c.logLevel > 1 && "" !== o && c.uboLog(i, `Matched src\n${e.src}`);
                    const t = O(e);
                    if (!1 !== s.test(t)) throw c.logLevel > 1 && c.uboLog(i, `Matched text\n${t}`), 
                    c.uboLog(i, "Aborted"), new ReferenceError(h);
                };
                try {
                    Object.defineProperty(p, d, {
                        get: function() {
                            return x(), m instanceof Object ? m.get.call(p) : f;
                        },
                        set: function(e) {
                            x(), m instanceof Object ? m.set.call(p, e) : f = e;
                        }
                    });
                } catch (e) {
                    c.uboErr(i, `Error: ${e}`);
                }
            }(...e);
        }));
    }
    function t() {
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
                const n = !0 !== t.canNegate || !1 === e.startsWith("!");
                !1 === n && (e = e.slice(1));
                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== r ? {
                    re: new this.RegExp(r[1], r[2] || t.flags),
                    expect: n
                } : void 0 !== t.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                    expect: n
                } : {
                    pattern: e,
                    expect: n
                };
            },
            testPattern(e, t) {
                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
            },
            patternToRegex(e, t, n = !1) {
                if ("" === e) return /^/;
                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === r) {
                    const r = this.escapeRegexChars(e);
                    return new RegExp(n ? `^${r}$` : r, t);
                }
                try {
                    return new RegExp(r[1], r[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const n = e.slice(t).reduce(((e, t, n, r) => {
                    if (0 == (1 & n)) {
                        const t = r[n + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ r[n], o ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(n);
            },
            onIdle: (t, n) => e.requestIdleCallback ? e.requestIdleCallback(t, n) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (n.safeSelf = t, void 0 === n.bcSecret) return t;
        t.logLevel = n.logLevel || 1;
        let r = "", o = "", c = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return n === o && e === r && Date.now() - c < 5e3 ? void 0 : (r = e, o = n, c = Date.now(), 
            n);
        };
        try {
            const r = new e.BroadcastChannel(n.bcSecret);
            let o = [];
            t.sendToLogger = (e, ...n) => {
                const c = t.toLogText(e, ...n);
                if (void 0 !== c) return void 0 === o ? r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: c
                }) : void o.push({
                    type: e,
                    text: c
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
            t.sendToLogger = (e, ...n) => {
                const r = t.toLogText(e, ...n);
                void 0 !== r && t.log(`uBO ${r}`);
            };
        }
        return t;
    }
    const n = {}, r = [ [ "jQuery", "adblocker" ], [ "chp_ads_blocker_detector" ], [ "document.getElementById", "Blocking Ads" ], [ "document.createElement", "adblock" ], [ "document.write", "alert" ], [ "setTimeout", "bloqueur" ], [ "Promise", "alert" ], [ "document.getElementById", "msg_ab" ], [ "document.querySelector", "oadbActive" ], [ "$", "checkAds" ], [ "document.getElementById", "adback" ], [ "JSON.parse", "document.createElement('script')" ], [ "document.createElement", "document.documentElement).appendChild" ], [ "fetch", "Uint8Array" ] ], o = new Map([ [ "equinoxmagazine.fr", 0 ], [ "adala-news.fr", 0 ], [ "super-ethanol.com", 1 ], [ "monumentum.fr", 2 ], [ "lemanip.com", 3 ], [ "crunchyscan.fr", [ 4, 5, 6 ] ], [ "abcbourse.com", 7 ], [ "cliqueduplateau.com", 8 ], [ "monacomatin.mc", 9 ], [ "recreatisse.com", 10 ], [ "ultimate-catch.eu", 10 ], [ "japscan.me", [ 11, 12 ] ], [ "observalgerie.com", 13 ] ]), c = new Map([]), i = (e, t, n) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) n.add(e); else n.add(r);
    }, a = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const n = e.lastIndexOf("://");
            if (-1 === n) return;
            const r = e.slice(n + 3), o = r.indexOf(":");
            return {
                hn: -1 === o ? r : r.slice(0, o),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === a.length) return;
    const l = new Set, u = new Set;
    ((e, t = "") => {
        const n = e.split("."), r = n.length;
        if (0 !== r) for (let e = 0; e < r; e++) {
            const r = `${n.slice(e).join(".")}${t}`;
            i(r, o, l), i(r, c, u);
        }
    })(a[0].hn);
    for (const t of l) if (!u.has(t)) try {
        e(...r[t]);
    } catch {}
}();