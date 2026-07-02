!function() {
    function e(e = "", r = "", o = "") {
        const n = t(), s = n.makeLogPrefix("trusted-replace-xhr-response", e, r, o), i = new WeakMap;
        "*" === e && (e = ".*");
        const c = n.patternToRegex(e), a = function(e, r = "") {
            const o = t(), n = new Map;
            if (void 0 === e || "" === e) return n;
            const s = {
                canNegate: !0
            };
            for (const t of o.String_split.call(e, /\s+/)) {
                let [e, i] = o.String_split.call(t, ":");
                "" !== e && (void 0 !== i && /[^$\w -]/.test(e) && (e = `${e}:${i}`, i = void 0), 
                void 0 !== i ? n.set(e, o.initPattern(i, s)) : "" !== r && n.set(r, o.initPattern(e, s)));
            }
            return n;
        }(o, "url"), l = n.getExtraArgs(Array.from(arguments), 3), p = l.includes ? n.patternToRegex(l.includes) : null;
        self.XMLHttpRequest = class extends self.XMLHttpRequest {
            open(e, r, ...o) {
                const l = {
                    method: e,
                    url: r
                };
                let p = "match";
                return 0 !== a.size && void 0 === function(e, ...r) {
                    const o = t(), n = [];
                    for (const t of r) if (t instanceof Object != 0) for (const [r, s] of e) {
                        let e = t[r];
                        if (void 0 !== e) {
                            if ("string" != typeof e) {
                                try {
                                    e = o.JSON_stringify(e);
                                } catch {}
                                if ("string" != typeof e) continue;
                            }
                            if (!1 === o.testPattern(s, e)) return;
                            n.push(`${r}: ${e}`);
                        }
                    }
                    return n;
                }(a, l) && (p = "nomatch"), "match" === p && (n.logLevel > 1 && n.uboLog(s, 'Matched "propsToMatch"'), 
                i.set(this, l)), super.open(e, r, ...o);
            }
            get response() {
                const e = super.response, t = i.get(this);
                if (void 0 === t) return e;
                const o = "string" == typeof e ? e.length : void 0;
                if (t.lastResponseLength !== o && (t.response = void 0, t.lastResponseLength = o), 
                void 0 !== t.response) return t.response;
                if ("string" != typeof e) return t.response = e;
                if (p && !1 === p.test(e)) return t.response = e;
                const a = e, l = a.replace(c, r);
                return l !== a && n.uboLog(s, "Match"), t.response = l;
            }
            get responseText() {
                const e = this.response;
                return "string" != typeof e ? super.responseText : e;
            }
        };
    }
    function t() {
        if (r.safeSelf) return r.safeSelf;
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
        if (r.safeSelf = t, void 0 === r.bcSecret) return t;
        t.logLevel = r.logLevel || 1;
        let o = "", n = "", s = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const r = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return r === n && e === o && Date.now() - s < 5e3 ? void 0 : (o = e, n = r, s = Date.now(), 
            r);
        };
        try {
            const o = new e.BroadcastChannel(r.bcSecret);
            let n = [];
            t.sendToLogger = (e, ...r) => {
                const s = t.toLogText(e, ...r);
                if (void 0 !== s) return void 0 === n ? o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: s
                }) : void n.push({
                    type: e,
                    text: s
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
                    t.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    t.logLevel = 2;
                }
            }, o.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...r) => {
                const o = t.toLogText(e, ...r);
                void 0 !== o && t.log(`uBO ${o}`);
            };
        }
        return t;
    }
    const r = {}, o = [ [ '/,"category_sensitive"[^\\n]+?"follow_button":\\{"__typename":"CometFeedStoryFollowButtonStrategy"[^\\n]+"cursor":"[^"]+"\\}/g', "}", "/api/graphql" ], [ '/,"expanded_url":"([^"]+)","url":"[^"]+"/g', ',"expanded_url":"$1","url":"$1"', "/graphql" ], [ '/,"expanded_url":"([^"]+)","indices":([^"]+)"url":"[^"]+"/g', ',"expanded_url":"$1","indices":$2"url":"$1"', "/tweet-result" ], [ '/Timeout":\\d+/', 'Timeout":0', "/api/v" ] ], n = new Map([ [ "web.facebook.com", 0 ], [ "www.facebook.com", 0 ], [ "twitter.com", 1 ], [ "x.com", 1 ], [ "platform.twitter.com", 2 ], [ "lookmovie2.*", 3 ] ]), s = new Map([ [ "platform.twitter.com", [ 1 ] ] ]), i = (e, t, r) => {
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
    const l = new Set, p = new Set;
    ((e, t = "") => {
        const r = e.split("."), o = r.length;
        if (0 !== o) {
            for (let e = 0; e < o; e++) {
                const o = `${r.slice(e).join(".")}${t}`;
                i(o, n, l), i(o, s, p);
            }
            {
                const e = o - 1;
                for (let o = 0; o < e; o++) for (let c = e; c > o; c--) {
                    const e = `${r.slice(o, c).join(".")}.*${t}`;
                    i(e, n, l), i(e, s, p);
                }
            }
        }
    })(a[0].hn);
    for (const t of l) if (!p.has(t)) try {
        e(...o[t]);
    } catch {}
}();