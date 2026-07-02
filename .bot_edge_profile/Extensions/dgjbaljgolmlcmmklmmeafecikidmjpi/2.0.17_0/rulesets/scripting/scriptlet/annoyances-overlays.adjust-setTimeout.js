!function() {
    function e(e = "", r = "", o = "") {
        if ("string" != typeof e) return;
        const i = function() {
            if (t.safeSelf) return t.safeSelf;
            const e = globalThis, r = {
                Array_from: Array.from,
                Error: e.Error,
                Function_toStringFn: e.Function.prototype.toString,
                Function_toString: e => r.Function_toStringFn.call(e),
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
                JSON_parse: (...e) => r.JSON_parseFn.call(r.JSON, ...e),
                JSON_stringify: (...e) => r.JSON_stringifyFn.call(r.JSON, ...e),
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
            if (t.safeSelf = r, void 0 === t.bcSecret) return r;
            r.logLevel = t.logLevel || 1;
            let o = "", n = "", i = 0;
            r.toLogText = (e, ...t) => {
                if (0 === t.length) return;
                const r = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                return r === n && e === o && Date.now() - i < 5e3 ? void 0 : (o = e, n = r, i = Date.now(), 
                r);
            };
            try {
                const o = new e.BroadcastChannel(t.bcSecret);
                let n = [];
                r.sendToLogger = (e, ...t) => {
                    const i = r.toLogText(e, ...t);
                    if (void 0 !== i) return void 0 === n ? o.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: i
                    }) : void n.push({
                        type: e,
                        text: i
                    });
                }, o.onmessage = e => {
                    switch (e.data) {
                      case "iamready!":
                        if (void 0 === n) break;
                        n.forEach((({type: e, text: t}) => o.postMessage({
                            what: "messageToLogger",
                            type: e,
                            text: t
                        }))), n = void 0;
                        break;

                      case "setScriptletLogLevelToOne":
                        r.logLevel = 1;
                        break;

                      case "setScriptletLogLevelToTwo":
                        r.logLevel = 2;
                    }
                }, o.postMessage("areyouready?");
            } catch {
                r.sendToLogger = (e, ...t) => {
                    const o = r.toLogText(e, ...t);
                    void 0 !== o && r.log(`uBO ${o}`);
                };
            }
            return r;
        }().patternToRegex(e);
        let s = "*" !== r ? parseInt(r, 10) : -1;
        (isNaN(s) || !1 === isFinite(s)) && (s = 1e3);
        let a = parseFloat(o);
        a = !1 === isNaN(a) && isFinite(a) ? Math.min(Math.max(a, .001), 50) : .05, self.setTimeout = new Proxy(self.setTimeout, {
            apply: function(e, t, r) {
                const [o, n] = r;
                return -1 !== s && n !== s || !i.test(o.toString()) || (r[1] = n * a), e.apply(t, r);
            }
        });
    }
    const t = {}, r = [ [ "count" ], [ "viewClickAttributeId" ] ], o = new Map([ [ "appimagehub.com", 0 ], [ "gnome-look.org", 0 ], [ "store.kde.org", 0 ], [ "linux-apps.com", 0 ], [ "opendesktop.org", 0 ], [ "pling.com", 0 ], [ "xfce-look.org", 0 ], [ "bbc.com", 1 ] ]), n = new Map([]), i = (e, t, r) => {
        let o = t.get(e);
        if (void 0 !== o) if ("number" != typeof o) for (const e of o) r.add(e); else r.add(o);
    }, a = (() => {
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
    if (0 === a.length) return;
    const c = new Set, g = new Set;
    ((e, t = "") => {
        const r = e.split("."), s = r.length;
        if (0 !== s) for (let e = 0; e < s; e++) {
            const s = `${r.slice(e).join(".")}${t}`;
            i(s, o, c), i(s, n, g);
        }
    })(a[0].hn);
    for (const t of c) if (!g.has(t)) try {
        e(...r[t]);
    } catch {}
}();