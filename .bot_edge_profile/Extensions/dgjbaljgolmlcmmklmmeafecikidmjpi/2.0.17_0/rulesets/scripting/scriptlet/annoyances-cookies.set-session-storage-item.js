!function() {
    function e(e = "", o = "") {
        !function(e = "local", o = !1, r = "", n = "") {
            if ("" === r) return;
            "emptyArr" === n ? n = "[]" : "emptyObj" === n && (n = "{}");
            const s = [ "", "undefined", "null", "{}", "[]", '""', "$remove$", "accept", "reject", "accepted", "rejected", "notaccepted", "allow", "disallow", "deny", "allowed", "denied", "approved", "disapproved", "checked", "unchecked", "dismiss", "dismissed", "enable", "disable", "enabled", "disabled", "essential", "nonessential", "forbidden", "forever", "hide", "hidden", "necessary", "required", "ok", "on", "off", "true", "t", "false", "f", "yes", "y", "no", "n", "all", "none", "functional", "granted", "done", "decline", "declined", "closed", "next", "mandatory", "disagree", "agree" ];
            if (o) n.includes("$now$") && (n = n.replaceAll("$now$", Date.now())), n.includes("$currentDate$") && (n = n.replaceAll("$currentDate$", `${Date()}`)), 
            n.includes("$currentISODate$") && (n = n.replaceAll("$currentISODate$", (new Date).toISOString())); else {
                const e = n.toLowerCase(), t = /^("?)(.+)\1$/.exec(e), o = t && t[2] || e;
                if (!1 === s.includes(o)) {
                    if (!1 === /^-?\d+$/.test(o)) return;
                    const e = parseInt(o, 10) || 0;
                    if (e < -32767 || e > 32767) return;
                }
            }
            try {
                const o = self[`${e}Storage`];
                if ("$remove$" === n) {
                    const n = function() {
                        if (t.safeSelf) return t.safeSelf;
                        const e = globalThis, o = {
                            Array_from: Array.from,
                            Error: e.Error,
                            Function_toStringFn: e.Function.prototype.toString,
                            Function_toString: e => o.Function_toStringFn.call(e),
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
                            JSON_parse: (...e) => o.JSON_parseFn.call(o.JSON, ...e),
                            JSON_stringify: (...e) => o.JSON_stringifyFn.call(o.JSON, ...e),
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
                        if (t.safeSelf = o, void 0 === t.bcSecret) return o;
                        o.logLevel = t.logLevel || 1;
                        let r = "", n = "", s = 0;
                        o.toLogText = (e, ...t) => {
                            if (0 === t.length) return;
                            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                            return o === n && e === r && Date.now() - s < 5e3 ? void 0 : (r = e, n = o, s = Date.now(), 
                            o);
                        };
                        try {
                            const r = new e.BroadcastChannel(t.bcSecret);
                            let n = [];
                            o.sendToLogger = (e, ...t) => {
                                const s = o.toLogText(e, ...t);
                                if (void 0 !== s) return void 0 === n ? r.postMessage({
                                    what: "messageToLogger",
                                    type: e,
                                    text: s
                                }) : void n.push({
                                    type: e,
                                    text: s
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
                                    o.logLevel = 1;
                                    break;

                                  case "setScriptletLogLevelToTwo":
                                    o.logLevel = 2;
                                }
                            }, r.postMessage("areyouready?");
                        } catch {
                            o.sendToLogger = (e, ...t) => {
                                const r = o.toLogText(e, ...t);
                                void 0 !== r && o.log(`uBO ${r}`);
                            };
                        }
                        return o;
                    }().patternToRegex(r, void 0, !0), s = [];
                    for (let e = 0, t = o.length; e < t; e++) {
                        const t = o.key(e);
                        n.test(t) && s.push(t);
                    }
                    for (const e of s) o.removeItem(e);
                } else o.setItem(r, `${n}`);
            } catch {}
        }("session", !1, e, o);
    }
    const t = {}, o = [ [ "cookieModal2", "1" ], [ "cookieMessageDisagree", "true" ], [ "disclaimerOpened", "1" ], [ "terms-and-policy-accepted", "true" ], [ "cookies_dismissed", "1" ], [ "fa-games-consent-given", "true" ], [ "sae-conversational-consent-msg-closed", "true" ], [ "privacyPopupShown", "true" ], [ "cookiesAccepted", "true" ], [ "DS_COOKIENOTIFY_CLOSED", "true" ], [ "dismissedTrackingBanner", "true" ], [ "CookieTerm18", "true" ], [ "cookie_reject", "true" ], [ "cookieConfirmed", "true" ], [ "hasConsent", "1" ], [ "hasDsg", "1" ], [ "griffinConsentIgnored", "1" ], [ "ACCEPT_LGPD", "true" ], [ "acceptCookies", "false" ], [ "terms-and-policy-accepted", "yes" ], [ "CookieBannerShown", "yes" ] ], r = new Map([ [ "workwide.de", 0 ], [ "erco.com", 1 ], [ "communitycrimemap.com", 2 ], [ "smartwielen.lu", 3 ], [ "remington-europe.com", 4 ], [ "html5games.com", 5 ], [ "shop-apotheke.com", 6 ], [ "redcare.it", 6 ], [ "shop-apotheke.at", 6 ], [ "farmaline.be", 6 ], [ "beenverified.com", 7 ], [ "adcock.com", 8 ], [ "prosciutteriasandaniele.it", 9 ], [ "blockchain.com", 10 ], [ "fatalmodel.com", 11 ], [ "brightonandhovealbion.com", 12 ], [ "ssga.com", 13 ], [ "cachecrawler.com", [ 14, 15 ] ], [ "griffin.com", 16 ], [ "c6bank.com.br", 17 ], [ "gedik.com", 18 ], [ "collato.com", [ 19, 20 ] ] ]), n = new Map([]), s = (e, t, o) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) o.add(e); else o.add(r);
    }, c = (() => {
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
    if (0 === c.length) return;
    const a = new Set, l = new Set;
    ((e, t = "") => {
        const o = e.split("."), i = o.length;
        if (0 !== i) for (let e = 0; e < i; e++) {
            const i = `${o.slice(e).join(".")}${t}`;
            s(i, r, a), s(i, n, l);
        }
    })(c[0].hn);
    for (const t of a) if (!l.has(t)) try {
        e(...o[t]);
    } catch {}
}();