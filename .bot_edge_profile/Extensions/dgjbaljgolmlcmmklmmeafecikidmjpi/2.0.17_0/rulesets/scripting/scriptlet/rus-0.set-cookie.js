!function() {
    function e(e = "", r = "", n = "") {
        if ("" === e) return;
        const i = t(), s = i.makeLogPrefix("set-cookie", e, r, n), c = r.toLowerCase(), a = /^("?)(.+)\1$/.exec(c), l = a && a[2] || c;
        if (!1 === [ "accept", "reject", "accepted", "rejected", "notaccepted", "allow", "disallow", "deny", "allowed", "denied", "approved", "disapproved", "checked", "unchecked", "dismiss", "dismissed", "enable", "disable", "enabled", "disabled", "essential", "nonessential", "forbidden", "forever", "hide", "hidden", "necessary", "required", "ok", "on", "off", "true", "t", "false", "f", "yes", "y", "no", "n", "all", "none", "functional", "granted", "done", "decline", "declined", "closed", "next", "mandatory", "disagree", "agree" ].includes(l)) {
            if (!1 === /^-?\d+$/.test(l)) return;
            const e = parseInt(r, 10) || 0;
            if (e < -32767 || e > 32767) return;
        }
        const d = function(e = !1, t = "", r = "", n = "", i = "", s = {}) {
            !1 === e && /[^!#$%&'*+\-.0-9A-Z[\]^_`a-z|~]/.test(t) && (t = encodeURIComponent(t)), 
            /[^ -:<-[\]-~]/.test(r) && (r = encodeURIComponent(r));
            const c = o(t);
            if (void 0 !== c && s.dontOverwrite) return;
            if (c === r && s.reload) return;
            const a = [ t, "=", r ];
            if ("" !== n && a.push("; expires=", n), "" === i ? i = "/" : "none" === i && (i = ""), 
            "" !== i && "/" !== i) return;
            if ("/" === i && a.push("; path=/"), e) {
                if (s.domain) {
                    let e = s.domain;
                    if (/^\/.+\//.test(e)) {
                        const t = new URL(document.baseURI), o = new RegExp(e.slice(1, -1)).exec(t.hostname);
                        e = o ? o[0] : void 0;
                    }
                    e && a.push(`; domain=${e}`);
                }
                a.push("; Secure");
            } else /^__(Host|Secure)-/.test(t) && a.push("; Secure");
            try {
                document.cookie = a.join("");
            } catch {}
            const l = o(t) === r;
            return l && s.reload && window.location.reload(), l;
        }(!1, e, r, "", n, i.getExtraArgs(Array.from(arguments), 3));
        d && i.uboLog(s, "Done");
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
                const o = !0 !== t.canNegate || !1 === e.startsWith("!");
                !1 === o && (e = e.slice(1));
                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== r ? {
                    re: new this.RegExp(r[1], r[2] || t.flags),
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
                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === r) {
                    const r = this.escapeRegexChars(e);
                    return new RegExp(o ? `^${r}$` : r, t);
                }
                try {
                    return new RegExp(r[1], r[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const o = e.slice(t).reduce(((e, t, o, r) => {
                    if (0 == (1 & o)) {
                        const t = r[o + 1], n = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ r[o], n ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(o);
            },
            onIdle: (t, o) => e.requestIdleCallback ? e.requestIdleCallback(t, o) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (r.safeSelf = t, void 0 === r.bcSecret) return t;
        t.logLevel = r.logLevel || 1;
        let o = "", n = "", i = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const r = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return r === n && e === o && Date.now() - i < 5e3 ? void 0 : (o = e, n = r, i = Date.now(), 
            r);
        };
        try {
            const o = new e.BroadcastChannel(r.bcSecret);
            let n = [];
            t.sendToLogger = (e, ...r) => {
                const i = t.toLogText(e, ...r);
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
                    t.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    t.logLevel = 2;
                }
            }, o.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...o) => {
                const r = t.toLogText(e, ...o);
                void 0 !== r && t.log(`uBO ${r}`);
            };
        }
        return t;
    }
    function o(e = "") {
        const o = t();
        for (const t of o.String_split.call(document.cookie, /\s*;\s*/)) {
            const o = t.indexOf("=");
            if (-1 !== o && t.slice(0, o) === e) return t.slice(o + 1).trim();
        }
    }
    const r = {}, n = [ [ "KUF_SUGGESTER_SHOW_2_ITERATION", "1" ], [ "adBlockModal", "true" ], [ "callToRegisterClosed", "true" ], [ "cookieAccepted", "true" ], [ "cookie_accept", "1" ], [ "cookie_consent_shown", "1" ], [ "ha", "1" ], [ "kdetect", "true" ], [ "kuf_agr", "true" ], [ "pg_SuggestGameFollow", "true" ], [ "telegram_popup", "Y" ], [ "yandexFull", "true" ] ], i = new Map([ [ "kufar.by", [ 0, 8 ] ], [ "myshows.me", 1 ], [ "direct.farm", 2 ], [ "liga.net", 3 ], [ "ixbt.com", 4 ], [ "avito.ru", 5 ], [ "forum.ixbt.com", 6 ], [ "hd.kinopoisk.ru", 7 ], [ "www.kinopoisk.ru", 7 ], [ "playground.ru", 9 ], [ "kinotv.ru", 10 ], [ "mp3party.net", 11 ] ]), s = new Map([]), c = (e, t, o) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) o.add(e); else o.add(r);
    }, l = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const o = e.lastIndexOf("://");
            if (-1 === o) return;
            const r = e.slice(o + 3), n = r.indexOf(":");
            return {
                hn: -1 === n ? r : r.slice(0, n),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === l.length) return;
    const d = new Set, g = new Set;
    ((e, t = "") => {
        const o = e.split("."), r = o.length;
        if (0 !== r) for (let e = 0; e < r; e++) {
            const r = `${o.slice(e).join(".")}${t}`;
            c(r, i, d), c(r, s, g);
        }
    })(l[0].hn);
    for (const t of d) if (!g.has(t)) try {
        e(...n[t]);
    } catch {}
}();