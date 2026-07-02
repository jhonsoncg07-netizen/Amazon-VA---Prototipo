!function() {
    function e(e = "", r = "") {
        !function(e = "local", r = !1, o = "", n = "") {
            if ("" === o) return;
            "emptyArr" === n ? n = "[]" : "emptyObj" === n && (n = "{}");
            const i = [ "", "undefined", "null", "{}", "[]", '""', "$remove$", "accept", "reject", "accepted", "rejected", "notaccepted", "allow", "disallow", "deny", "allowed", "denied", "approved", "disapproved", "checked", "unchecked", "dismiss", "dismissed", "enable", "disable", "enabled", "disabled", "essential", "nonessential", "forbidden", "forever", "hide", "hidden", "necessary", "required", "ok", "on", "off", "true", "t", "false", "f", "yes", "y", "no", "n", "all", "none", "functional", "granted", "done", "decline", "declined", "closed", "next", "mandatory", "disagree", "agree" ];
            if (r) n.includes("$now$") && (n = n.replaceAll("$now$", Date.now())), n.includes("$currentDate$") && (n = n.replaceAll("$currentDate$", `${Date()}`)), 
            n.includes("$currentISODate$") && (n = n.replaceAll("$currentISODate$", (new Date).toISOString())); else {
                const e = n.toLowerCase(), t = /^("?)(.+)\1$/.exec(e), r = t && t[2] || e;
                if (!1 === i.includes(r)) {
                    if (!1 === /^-?\d+$/.test(r)) return;
                    const e = parseInt(r, 10) || 0;
                    if (e < -32767 || e > 32767) return;
                }
            }
            try {
                const r = self[`${e}Storage`];
                if ("$remove$" === n) {
                    const n = function() {
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
                    }().patternToRegex(o, void 0, !0), i = [];
                    for (let e = 0, t = r.length; e < t; e++) {
                        const t = r.key(e);
                        n.test(t) && i.push(t);
                    }
                    for (const e of i) r.removeItem(e);
                } else r.setItem(o, `${n}`);
            } catch {}
        }("local", !1, e, r);
    }
    const t = {}, r = [ [ "gatedSignupTimerCounter", "$remove$" ], [ "gu.history.weeklyArticleCount", "$remove$" ], [ "gu.history.dailyArticleCount", "$remove$" ], [ "statistics-appOpenedCount", "1" ], [ "vox_article_readcount", "$remove$" ], [ "vox_article_readcount_count", "$remove$" ], [ "total_page_views", "2" ], [ "history", "$remove$" ], [ "wp_dark_mode_active", "1" ], [ "perm_cnn_regwall_v1", "$remove$" ], [ "REG_WALL_METER", "$remove$" ], [ "ArcP", "$remove$" ], [ "kiosq_article_reset", "$remove$" ], [ "kiosq_article_url_ack", "$remove$" ], [ "__tp-gaAccount", "disabled" ], [ "newYeradlariWebsiteHidden", "true" ], [ "countChapterNum", "$remove$" ], [ "hasVisitedBefore", "true" ], [ "donationPopupShown", "true" ], [ "mode-quills", "$remove$" ], [ "csm_unique_stories", "$remove$" ], [ "LMT_freeUserUsageBlock", "$remove$" ], [ "onboardingData", "$remove$" ] ], o = new Map([ [ "zippia.com", 0 ], [ "theguardian.com", [ 1, 2 ] ], [ "r34.app", 3 ], [ "vox.com", [ 4, 5 ] ], [ "thejournal.ie", 6 ], [ "bloomberg.com", 7 ], [ "dailynewshungary.com", 8 ], [ "cnn.com", [ 9, 10 ] ], [ "irishnews.com", 11 ], [ "reuters.com", 11 ], [ "theweek.com", [ 12, 13 ] ], [ "seekingalpha.com", 14 ], [ "nisanyansozluk.com", 15 ], [ "pawread.com", 16 ], [ "inscribed.app", 17 ], [ "novafork.com", 18 ], [ "quillbot.com", 19 ], [ "csmonitor.com", 20 ], [ "deepl.com", [ 21, 22 ] ] ]), n = new Map([]), i = (e, t, r) => {
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
    const c = new Set, l = new Set;
    ((e, t = "") => {
        const r = e.split("."), s = r.length;
        if (0 !== s) for (let e = 0; e < s; e++) {
            const s = `${r.slice(e).join(".")}${t}`;
            i(s, o, c), i(s, n, l);
        }
    })(a[0].hn);
    for (const t of c) if (!l.has(t)) try {
        e(...r[t]);
    } catch {}
}();