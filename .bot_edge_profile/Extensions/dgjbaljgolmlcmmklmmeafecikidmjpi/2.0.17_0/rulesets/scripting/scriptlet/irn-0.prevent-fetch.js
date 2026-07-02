!function() {
    function t(...t) {
        !function(t = !1, o = "", s = "", i = "") {
            const c = r(), a = (t ? "trusted-" : "") + "prevent-fetch", l = c.makeLogPrefix(a, o, s, i), p = [];
            for (const t of c.String_split.call(o, /\s+/)) {
                if ("" === t) continue;
                const e = t.indexOf(":");
                let r, n;
                -1 !== e ? (r = t.slice(0, e), n = t.slice(e + 1)) : (r = "url", n = t), p.push({
                    key: r,
                    pattern: c.initPattern(n, {
                        canNegate: !0
                    })
                });
            }
            const g = {
                ok: [ !1, !0 ],
                statusText: [ "", "Not Found" ],
                type: [ "basic", "cors", "default", "error", "opaque" ]
            }, f = {
                statusText: {
                    value: "OK"
                }
            };
            if (/^\{.*\}$/.test(i)) try {
                Object.entries(JSON.parse(i)).forEach((([t, e]) => {
                    void 0 !== g[t] && !1 !== g[t].includes(e) && (f[t] = {
                        value: e
                    });
                }));
            } catch {} else "" !== i && g.type.includes(i) && (f.type = {
                value: i
            });
            e("fetch", (function(e) {
                const {callArgs: i} = e, a = i[0] instanceof self.Request ? i[0] : Object.assign({
                    url: i[0]
                }, i[1]);
                let g = !0;
                try {
                    const t = new Map;
                    for (const e in a) {
                        let r = a[e];
                        if ("string" != typeof r) try {
                            r = c.JSON_stringify(r);
                        } catch {}
                        "string" == typeof r && t.set(e, r);
                    }
                    if (c.logLevel > 1 || "" === o && "" === s) {
                        const e = Array.from(t).map((t => `${t[0]}:${t[1]}`));
                        c.uboLog(l, `Called: ${e.join("\n")}`);
                    }
                    if ("" === o && "" === s) return e.reflect();
                    g = 0 === p.length;
                    for (const {key: e, pattern: r} of p) if (r.expect && !1 === t.has(e) || !1 === c.testPattern(r, t.get(e))) {
                        g = !0;
                        break;
                    }
                } catch {}
                return g ? e.reflect() : Promise.resolve(function(t, e) {
                    const o = r(), s = t => {
                        const e = [];
                        let r = 0;
                        do {
                            const t = o.Math_random().toString(36).slice(2);
                            e.push(t), r += t.length;
                        } while (r < t);
                        return e.join(" ").slice(0, t);
                    };
                    if ("true" === e) return s(10);
                    if ("emptyObj" === e) return "{}";
                    if ("emptyArr" === e) return "[]";
                    if ("emptyStr" === e) return "";
                    if (e.startsWith("length:")) {
                        const t = /^length:(\d+)(?:-(\d+))?$/.exec(e);
                        if (null === t) return "";
                        const r = parseInt(t[1], 10), n = o.Math_max(parseInt(t[2], 10) || 0, r) - r;
                        return s(0 | o.Math_min(r + n * o.Math_random(), 5e5));
                    }
                    return e.startsWith("war:") ? void 0 === n.warOrigin ? "" : new Promise((t => {
                        const r = [ n.warOrigin, "/", e.slice(4) ], s = n.warSecret;
                        void 0 !== s && r.push("?secret=", s);
                        const i = new o.XMLHttpRequest;
                        i.responseType = "text", i.onloadend = e => {
                            t(e.target.responseText || "");
                        }, i.open("GET", r.join("")), i.send();
                    })).catch((() => "")) : t ? e : "";
                }(t, s)).then((t => {
                    c.uboLog(l, `Prevented with response "${t}"`);
                    const e = new Response(t, {
                        headers: {
                            "Content-Length": t.length
                        }
                    }), r = Object.assign({
                        url: {
                            value: a.url
                        }
                    }, f);
                    return c.Object_defineProperties(e, r), e;
                }));
            }));
        }(!1, ...t);
    }
    function e(t = "", r = "") {
        let n = globalThis, o = t;
        for (;;) {
            const t = o.indexOf(".");
            if (-1 === t) break;
            if (n = n[o.slice(0, t)], n instanceof Object == 0) return;
            o = o.slice(t + 1);
        }
        const s = n[o];
        if ("function" != typeof s) return;
        void 0 === e.CtorContext && (e.ctorContexts = [], e.CtorContext = class {
            constructor(...t) {
                this.init(...t);
            }
            init(t, e) {
                return this.callFn = t, this.callArgs = e, this;
            }
            reflect() {
                const t = Reflect.construct(this.callFn, this.callArgs);
                return this.callFn = this.callArgs = this.private = void 0, e.ctorContexts.push(this), 
                t;
            }
            static factory(...t) {
                return 0 !== e.ctorContexts.length ? e.ctorContexts.pop().init(...t) : new e.CtorContext(...t);
            }
        }, e.applyContexts = [], e.ApplyContext = class {
            constructor(...t) {
                this.init(...t);
            }
            init(t, e, r) {
                return this.callFn = t, this.thisArg = e, this.callArgs = r, this;
            }
            reflect() {
                const t = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                return this.callFn = this.thisArg = this.callArgs = this.private = void 0, e.applyContexts.push(this), 
                t;
            }
            static factory(...t) {
                return 0 !== e.applyContexts.length ? e.applyContexts.pop().init(...t) : new e.ApplyContext(...t);
            }
        });
        const i = s.toString(), c = function() {
            return i;
        }.bind(null), a = {
            apply: (t, n, o) => r(e.ApplyContext.factory(t, n, o)),
            get: (t, e) => "toString" === e ? c : Reflect.get(t, e)
        };
        s.prototype?.constructor === s && (a.construct = function(t, n) {
            return r(e.CtorContext.factory(t, n));
        }), n[o] = new Proxy(s, a);
    }
    function r() {
        if (n.safeSelf) return n.safeSelf;
        const t = globalThis, e = {
            Array_from: Array.from,
            Error: t.Error,
            Function_toStringFn: t.Function.prototype.toString,
            Function_toString: t => e.Function_toStringFn.call(t),
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
            RegExp: t.RegExp,
            RegExp_test: t.RegExp.prototype.test,
            RegExp_exec: t.RegExp.prototype.exec,
            Request_clone: t.Request.prototype.clone,
            String: t.String,
            String_fromCharCode: String.fromCharCode,
            String_split: String.prototype.split,
            XMLHttpRequest: t.XMLHttpRequest,
            addEventListener: t.EventTarget.prototype.addEventListener,
            removeEventListener: t.EventTarget.prototype.removeEventListener,
            fetch: t.fetch,
            JSON: t.JSON,
            JSON_parseFn: t.JSON.parse,
            JSON_stringifyFn: t.JSON.stringify,
            JSON_parse: (...t) => e.JSON_parseFn.call(e.JSON, ...t),
            JSON_stringify: (...t) => e.JSON_stringifyFn.call(e.JSON, ...t),
            log: void 0,
            logLevel: 0,
            makeLogPrefix(...t) {
                return this.sendToLogger && `[${t.join(" ⁝ ")}]` || "";
            },
            uboLog(...t) {
                if (void 0 !== this.sendToLogger && void 0 !== t && "" !== t[0]) return this.sendToLogger("info", ...t);
            },
            uboErr(...t) {
                if (void 0 !== this.sendToLogger && void 0 !== t && "" !== t[0]) return this.sendToLogger("error", ...t);
            },
            escapeRegexChars: t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            initPattern(t, e = {}) {
                if ("" === t) return {
                    matchAll: !0,
                    expect: !0
                };
                const r = !0 !== e.canNegate || !1 === t.startsWith("!");
                !1 === r && (t = t.slice(1));
                const n = /^\/(.+)\/([gimsu]*)$/.exec(t);
                return null !== n ? {
                    re: new this.RegExp(n[1], n[2] || e.flags),
                    expect: r
                } : void 0 !== e.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(t), e.flags),
                    expect: r
                } : {
                    pattern: t,
                    expect: r
                };
            },
            testPattern(t, e) {
                return !!t.matchAll || (t.re ? this.RegExp_test.call(t.re, e) === t.expect : e.includes(t.pattern) === t.expect);
            },
            patternToRegex(t, e, r = !1) {
                if ("" === t) return /^/;
                const n = /^\/(.+)\/([gimsu]*)$/.exec(t);
                if (null === n) {
                    const n = this.escapeRegexChars(t);
                    return new RegExp(r ? `^${n}$` : n, e);
                }
                try {
                    return new RegExp(n[1], n[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(t, e = 0) {
                const r = t.slice(e).reduce(((t, e, r, n) => {
                    if (0 == (1 & r)) {
                        const e = n[r + 1], o = /^\d+$/.test(e) ? parseInt(e, 10) : e;
                        t.push([ n[r], o ]);
                    }
                    return t;
                }), []);
                return this.Object_fromEntries(r);
            },
            onIdle: (e, r) => t.requestIdleCallback ? t.requestIdleCallback(e, r) : t.requestAnimationFrame(e),
            offIdle: e => t.requestIdleCallback ? t.cancelIdleCallback(e) : t.cancelAnimationFrame(e)
        };
        if (n.safeSelf = e, void 0 === n.bcSecret) return e;
        e.logLevel = n.logLevel || 1;
        let r = "", o = "", s = 0;
        e.toLogText = (t, ...e) => {
            if (0 === e.length) return;
            const n = `[${document.location.hostname || document.location.href}]${e.join(" ")}`;
            return n === o && t === r && Date.now() - s < 5e3 ? void 0 : (r = t, o = n, s = Date.now(), 
            n);
        };
        try {
            const r = new t.BroadcastChannel(n.bcSecret);
            let o = [];
            e.sendToLogger = (t, ...n) => {
                const s = e.toLogText(t, ...n);
                if (void 0 !== s) return void 0 === o ? r.postMessage({
                    what: "messageToLogger",
                    type: t,
                    text: s
                }) : void o.push({
                    type: t,
                    text: s
                });
            }, r.onmessage = t => {
                switch (t.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: t, text: e}) => r.postMessage({
                        what: "messageToLogger",
                        type: t,
                        text: e
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    e.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    e.logLevel = 2;
                }
            }, r.postMessage("areyouready?");
        } catch {
            e.sendToLogger = (t, ...r) => {
                const n = e.toLogText(t, ...r);
                void 0 !== n && e.log(`uBO ${n}`);
            };
        }
        return e;
    }
    const n = {}, o = [ [ "SearchiaClick" ] ], s = new Map([ [ "karbord.io", 0 ] ]), i = new Map([]), c = (t, e, r) => {
        let n = e.get(t);
        if (void 0 !== n) if ("number" != typeof n) for (const t of n) r.add(t); else r.add(n);
    }, l = (() => {
        const t = document.location, e = [ t.origin ];
        return t.ancestorOrigins && e.push(...t.ancestorOrigins), e.map(((t, e) => {
            const r = t.lastIndexOf("://");
            if (-1 === r) return;
            const n = t.slice(r + 3), o = n.indexOf(":");
            return {
                hn: -1 === o ? n : n.slice(0, o),
                i: e
            };
        })).filter((t => void 0 !== t));
    })();
    if (0 === l.length) return;
    const p = new Set, g = new Set;
    ((t, e = "") => {
        const r = t.split("."), n = r.length;
        if (0 !== n) for (let t = 0; t < n; t++) {
            const n = `${r.slice(t).join(".")}${e}`;
            c(n, s, p), c(n, i, g);
        }
    })(l[0].hn);
    for (const e of p) if (!g.has(e)) try {
        t(...o[e]);
    } catch {}
}();