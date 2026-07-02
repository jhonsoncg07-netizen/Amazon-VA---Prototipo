!function() {
    function e(e = "", t = "") {
        !function(e = "local", t = !1, r = "", n = "") {
            if ("" === r) return;
            "emptyArr" === n ? n = "[]" : "emptyObj" === n && (n = "{}");
            const c = [ "", "undefined", "null", "{}", "[]", '""', "$remove$", "accept", "reject", "accepted", "rejected", "notaccepted", "allow", "disallow", "deny", "allowed", "denied", "approved", "disapproved", "checked", "unchecked", "dismiss", "dismissed", "enable", "disable", "enabled", "disabled", "essential", "nonessential", "forbidden", "forever", "hide", "hidden", "necessary", "required", "ok", "on", "off", "true", "t", "false", "f", "yes", "y", "no", "n", "all", "none", "functional", "granted", "done", "decline", "declined", "closed", "next", "mandatory", "disagree", "agree" ];
            if (t) n.includes("$now$") && (n = n.replaceAll("$now$", Date.now())), n.includes("$currentDate$") && (n = n.replaceAll("$currentDate$", `${Date()}`)), 
            n.includes("$currentISODate$") && (n = n.replaceAll("$currentISODate$", (new Date).toISOString())); else {
                const e = n.toLowerCase(), o = /^("?)(.+)\1$/.exec(e), t = o && o[2] || e;
                if (!1 === c.includes(t)) {
                    if (!1 === /^-?\d+$/.test(t)) return;
                    const e = parseInt(t, 10) || 0;
                    if (e < -32767 || e > 32767) return;
                }
            }
            try {
                const t = self[`${e}Storage`];
                if ("$remove$" === n) {
                    const n = function() {
                        if (o.safeSelf) return o.safeSelf;
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
                            initPattern(e, o = {}) {
                                if ("" === e) return {
                                    matchAll: !0,
                                    expect: !0
                                };
                                const t = !0 !== o.canNegate || !1 === e.startsWith("!");
                                !1 === t && (e = e.slice(1));
                                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                                return null !== r ? {
                                    re: new this.RegExp(r[1], r[2] || o.flags),
                                    expect: t
                                } : void 0 !== o.flags ? {
                                    re: new this.RegExp(this.escapeRegexChars(e), o.flags),
                                    expect: t
                                } : {
                                    pattern: e,
                                    expect: t
                                };
                            },
                            testPattern(e, o) {
                                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, o) === e.expect : o.includes(e.pattern) === e.expect);
                            },
                            patternToRegex(e, o, t = !1) {
                                if ("" === e) return /^/;
                                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                                if (null === r) {
                                    const r = this.escapeRegexChars(e);
                                    return new RegExp(t ? `^${r}$` : r, o);
                                }
                                try {
                                    return new RegExp(r[1], r[2] || void 0);
                                } catch {}
                                return /^/;
                            },
                            getExtraArgs(e, o = 0) {
                                const t = e.slice(o).reduce(((e, o, t, r) => {
                                    if (0 == (1 & t)) {
                                        const o = r[t + 1], n = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                                        e.push([ r[t], n ]);
                                    }
                                    return e;
                                }), []);
                                return this.Object_fromEntries(t);
                            },
                            onIdle: (o, t) => e.requestIdleCallback ? e.requestIdleCallback(o, t) : e.requestAnimationFrame(o),
                            offIdle: o => e.requestIdleCallback ? e.cancelIdleCallback(o) : e.cancelAnimationFrame(o)
                        };
                        if (o.safeSelf = t, void 0 === o.bcSecret) return t;
                        t.logLevel = o.logLevel || 1;
                        let r = "", n = "", c = 0;
                        t.toLogText = (e, ...o) => {
                            if (0 === o.length) return;
                            const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                            return t === n && e === r && Date.now() - c < 5e3 ? void 0 : (r = e, n = t, c = Date.now(), 
                            t);
                        };
                        try {
                            const r = new e.BroadcastChannel(o.bcSecret);
                            let n = [];
                            t.sendToLogger = (e, ...o) => {
                                const c = t.toLogText(e, ...o);
                                if (void 0 !== c) return void 0 === n ? r.postMessage({
                                    what: "messageToLogger",
                                    type: e,
                                    text: c
                                }) : void n.push({
                                    type: e,
                                    text: c
                                });
                            }, r.onmessage = e => {
                                switch (e.data) {
                                  case "iamready!":
                                    if (void 0 === n) break;
                                    n.forEach((({type: e, text: o}) => r.postMessage({
                                        what: "messageToLogger",
                                        type: e,
                                        text: o
                                    }))), n = void 0;
                                    break;

                                  case "setScriptletLogLevelToOne":
                                    t.logLevel = 1;
                                    break;

                                  case "setScriptletLogLevelToTwo":
                                    t.logLevel = 2;
                                }
                            }, r.postMessage("areyouready?");
                        } catch {
                            t.sendToLogger = (e, ...o) => {
                                const r = t.toLogText(e, ...o);
                                void 0 !== r && t.log(`uBO ${r}`);
                            };
                        }
                        return t;
                    }().patternToRegex(r, void 0, !0), c = [];
                    for (let e = 0, o = t.length; e < o; e++) {
                        const o = t.key(e);
                        n.test(o) && c.push(o);
                    }
                    for (const e of c) t.removeItem(e);
                } else t.setItem(r, `${n}`);
            } catch {}
        }("session", !1, e, t);
    }
    const o = {}, t = [ [ "realm.Oidc.3pc", "$remove$" ], [ "adViewed", "true" ], [ "_x_popped", "{}" ], [ "CBSNEWS.features.fms-params", "$remove$" ], [ "/^ph_phc/", "$remove$" ], [ "nxt_is_incognito", "false" ], [ "/previous/", "$remove$" ], [ "VR-INJECTOR-INSTANCES-MAP", "$remove$" ] ], r = new Map([ [ "expressnews.com", 0 ], [ "sfchronicle.com", 0 ], [ "moneycontrol.com", 1 ], [ "njavtv.com", 2 ], [ "cbsnews.com", 3 ], [ "darntough.com", 4 ], [ "advocate-news.com", 5 ], [ "akronnewsreporter.com", 5 ], [ "bocopreps.com", 5 ], [ "bostonherald.com", 5 ], [ "broomfieldenterprise.com", 5 ], [ "brushnewstribune.com", 5 ], [ "buffzone.com", 5 ], [ "burlington-record.com", 5 ], [ "canoncitydailyrecord.com", 5 ], [ "chicagotribune.com", 5 ], [ "chicoer.com", 5 ], [ "coloradodaily.com", 5 ], [ "coloradohometownweekly.com", 5 ], [ "courant.com", 5 ], [ "dailybreeze.com", 5 ], [ "dailybulletin.com", 5 ], [ "dailycamera.com", 5 ], [ "dailydemocrat.com", 5 ], [ "dailyfreeman.com", 5 ], [ "dailylocal.com", 5 ], [ "dailynews.com", 5 ], [ "dailypress.com", 5 ], [ "dailytribune.com", 5 ], [ "delcotimes.com", 5 ], [ "denverpost.com", 5 ], [ "eastbaytimes.com", 5 ], [ "eptrail.com", 5 ], [ "excelsiorcalifornia.com", 5 ], [ "fortmorgantimes.com", 5 ], [ "greeleytribune.com", 5 ], [ "journal-advocate.com", 5 ], [ "julesburgadvocate.com", 5 ], [ "lamarledger.com", 5 ], [ "lowellsun.com", 5 ], [ "macombdaily.com", 5 ], [ "mainlinemedianews.com", 5 ], [ "marinij.com", 5 ], [ "mcall.com", 5 ], [ "mendocinobeacon.com", 5 ], [ "mercurynews.com", 5 ], [ "montereyherald.com", 5 ], [ "morningjournal.com", 5 ], [ "nashobavalleyvoice.com", 5 ], [ "news-herald.com", 5 ], [ "nydailynews.com", 5 ], [ "ocregister.com", 5 ], [ "oneidadispatch.com", 5 ], [ "orlandosentinel.com", 5 ], [ "orovillemr.com", 5 ], [ "paradisepost.com", 5 ], [ "pasadenastarnews.com", 5 ], [ "pilotonline.com", 5 ], [ "pottsmerc.com", 5 ], [ "pressandguide.com", 5 ], [ "pressenterprise.com", 5 ], [ "presstelegram.com", 5 ], [ "readingeagle.com", 5 ], [ "record-bee.com", 5 ], [ "redbluffdailynews.com", 5 ], [ "redlandsdailyfacts.com", 5 ], [ "reporterherald.com", 5 ], [ "sandiegouniontribune.com", 5 ], [ "santacruzsentinel.com", 5 ], [ "saratogian.com", 5 ], [ "sbsun.com", 5 ], [ "sentinelandenterprise.com", 5 ], [ "sgvtribune.com", 5 ], [ "siliconvalley.com", 5 ], [ "southplattesentinel.com", 5 ], [ "sun-sentinel.com", 5 ], [ "themorningsun.com", 5 ], [ "thenewsherald.com", 5 ], [ "theoaklandpress.com", 5 ], [ "thereporter.com", 5 ], [ "thereporteronline.com", 5 ], [ "times-standard.com", 5 ], [ "timescall.com", 5 ], [ "timesherald.com", 5 ], [ "timesheraldonline.com", 5 ], [ "trentonian.com", 5 ], [ "troyrecord.com", 5 ], [ "twincities.com", 5 ], [ "ukiahdailyjournal.com", 5 ], [ "voicenews.com", 5 ], [ "whittierdailynews.com", 5 ], [ "willitsnews.com", 5 ], [ "laurelberninteriors.com", 6 ], [ "abs-cbn.com", 7 ] ]), n = new Map([]), c = (e, o, t) => {
        let r = o.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) t.add(e); else t.add(r);
    }, i = (() => {
        const e = document.location, o = [ e.origin ];
        return e.ancestorOrigins && o.push(...e.ancestorOrigins), o.map(((e, o) => {
            const t = e.lastIndexOf("://");
            if (-1 === t) return;
            const r = e.slice(t + 3), n = r.indexOf(":");
            return {
                hn: -1 === n ? r : r.slice(0, n),
                i: o
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === i.length) return;
    const a = new Set, l = new Set;
    ((e, o = "") => {
        const t = e.split("."), s = t.length;
        if (0 !== s) for (let e = 0; e < s; e++) {
            const s = `${t.slice(e).join(".")}${o}`;
            c(s, r, a), c(s, n, l);
        }
    })(i[0].hn);
    for (const o of a) if (!l.has(o)) try {
        e(...t[o]);
    } catch {}
}();