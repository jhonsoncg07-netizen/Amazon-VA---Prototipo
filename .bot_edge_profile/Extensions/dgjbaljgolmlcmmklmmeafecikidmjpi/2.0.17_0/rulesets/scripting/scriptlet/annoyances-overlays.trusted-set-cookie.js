!function() {
    function e(e = "", n = "", o = "", s = "") {
        if ("" === e) return;
        const i = t(), c = i.makeLogPrefix("set-cookie", e, n, s), a = new Date;
        n.includes("$now$") && (n = n.replaceAll("$now$", a.getTime())), n.includes("$currentDate$") && (n = n.replaceAll("$currentDate$", a.toUTCString())), 
        n.includes("$currentISODate$") && (n = n.replaceAll("$currentISODate$", a.toISOString()));
        let l = "";
        if ("" !== o) {
            if ("1day" === o) a.setDate(a.getDate() + 1); else if ("1year" === o) a.setFullYear(a.getFullYear() + 1); else {
                if (!1 === /^\d+$/.test(o)) return;
                a.setSeconds(a.getSeconds() + parseInt(o, 10));
            }
            l = a.toUTCString();
        }
        const g = function(e = !1, t = "", n = "", o = "", s = "", i = {}) {
            !1 === e && /[^!#$%&'*+\-.0-9A-Z[\]^_`a-z|~]/.test(t) && (t = encodeURIComponent(t)), 
            /[^ -:<-[\]-~]/.test(n) && (n = encodeURIComponent(n));
            const c = r(t);
            if (void 0 !== c && i.dontOverwrite) return;
            if (c === n && i.reload) return;
            const a = [ t, "=", n ];
            if ("" !== o && a.push("; expires=", o), "" === s ? s = "/" : "none" === s && (s = ""), 
            "" !== s && "/" !== s) return;
            if ("/" === s && a.push("; path=/"), e) {
                if (i.domain) {
                    let e = i.domain;
                    if (/^\/.+\//.test(e)) {
                        const t = new URL(document.baseURI), r = new RegExp(e.slice(1, -1)).exec(t.hostname);
                        e = r ? r[0] : void 0;
                    }
                    e && a.push(`; domain=${e}`);
                }
                a.push("; Secure");
            } else /^__(Host|Secure)-/.test(t) && a.push("; Secure");
            try {
                document.cookie = a.join("");
            } catch {}
            const l = r(t) === n;
            return l && i.reload && window.location.reload(), l;
        }(!0, e, n, l, s, t().getExtraArgs(Array.from(arguments), 4));
        g && i.uboLog(c, "Done");
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
        let r = "", o = "", s = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return n === o && e === r && Date.now() - s < 5e3 ? void 0 : (r = e, o = n, s = Date.now(), 
            n);
        };
        try {
            const r = new e.BroadcastChannel(n.bcSecret);
            let o = [];
            t.sendToLogger = (e, ...n) => {
                const s = t.toLogText(e, ...n);
                if (void 0 !== s) return void 0 === o ? r.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: s
                }) : void o.push({
                    type: e,
                    text: s
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
    function r(e = "") {
        const r = t();
        for (const t of r.String_split.call(document.cookie, /\s*;\s*/)) {
            const r = t.indexOf("=");
            if (-1 !== r && t.slice(0, r) === e) return t.slice(r + 1).trim();
        }
    }
    const n = {}, o = [ [ "intro_popup_last_hidden_at", "$currentDate$" ] ], s = new Map([ [ "entra.news", 0 ], [ "microsoftsecurityinsights.com", 0 ], [ "substack.com", 0 ] ]), i = new Map([]), c = (e, t, r) => {
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
    const g = new Set, p = new Set;
    ((e, t = "") => {
        const r = e.split("."), n = r.length;
        if (0 !== n) for (let e = 0; e < n; e++) {
            const n = `${r.slice(e).join(".")}${t}`;
            c(n, s, g), c(n, i, p);
        }
    })(l[0].hn);
    for (const t of g) if (!p.has(t)) try {
        e(...o[t]);
    } catch {}
}();