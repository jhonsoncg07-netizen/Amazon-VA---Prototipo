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
        }("local", !1, e, o);
    }
    const t = {}, o = [ [ "useExitIntent", "true" ], [ "tls_newsletter_visibility", "true" ], [ "emailLightBox", "true" ], [ "hide-cookbook-modal-0", "true" ], [ "newsletterPopupCount", "1" ], [ "nbaSIBWidgetSeen", "true" ], [ "BRANCH_BANNER_PAGE_LOAD", "1" ], [ "EMAIL_CAPTURE_MODAL_STOP", "1" ], [ "show-email-intake-form", "false" ], [ "hasShownPopup", "true" ], [ "modalViewed", "1" ], [ "signUpModalClosed_slot-paulaschoice_us-global-signUpModal-sfmcModal", "1" ], [ "user_closed_pop_up", "true" ], [ "DWEB_PIN_IMAGE_CLICK_COUNT", "$remove$" ], [ "unauthDownloadCount", "$remove$" ], [ "rprw", "$remove$" ], [ "social-qa/machineId", "$remove$" ], [ "simple-funnel-name", "$remove$" ], [ "WkdGcGJIbEpiV0ZuWlVSaGRHRT0=", "$remove$" ], [ "ad_blocker", "false" ], [ "adblockNoticePermaDismiss", "true" ], [ "/^freeVideoFriendly/", "$remove$" ] ], r = new Map([ [ "timesnownews.com", 0 ], [ "the-tls.co.uk", 1 ], [ "duluthtrading.com", 2 ], [ "tastemade.com", 3 ], [ "action.com", 4 ], [ "clutchpoints.com", 5 ], [ "magnolia.com", [ 6, 7 ] ], [ "core.app", 8 ], [ "interestingengineering.com", 9 ], [ "urbanoutfitters.com", 10 ], [ "paulaschoice.com", 11 ], [ "audialab.com", 12 ], [ "pinterest.*", [ 13, 14 ] ], [ "realpython.com", 15 ], [ "brainly.*", [ 16, 17 ] ], [ "eodev.com", 17 ], [ "nosdevoirs.fr", 17 ], [ "www.watermarkremover.io", 18 ], [ "scenexe.io", 19 ], [ "camspider.com", 20 ], [ "nebula.tv", 21 ] ]), n = new Map([]), s = (e, t, o) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) o.add(e); else o.add(r);
    }, a = (() => {
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
    if (0 === a.length) return;
    const c = new Set, l = new Set;
    ((e, t = "") => {
        const o = e.split("."), i = o.length;
        if (0 !== i) {
            for (let e = 0; e < i; e++) {
                const i = `${o.slice(e).join(".")}${t}`;
                s(i, r, c), s(i, n, l);
            }
            {
                const e = i - 1;
                for (let i = 0; i < e; i++) for (let a = e; a > i; a--) {
                    const e = `${o.slice(i, a).join(".")}.*${t}`;
                    s(e, r, c), s(e, n, l);
                }
            }
        }
    })(a[0].hn);
    for (const t of c) if (!l.has(t)) try {
        e(...o[t]);
    } catch {}
}();