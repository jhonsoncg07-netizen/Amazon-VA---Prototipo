!function() {
    function e(e = "") {
        if ("string" != typeof e) return;
        const o = function() {
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
            let r = "", n = "", i = 0;
            o.toLogText = (e, ...t) => {
                if (0 === t.length) return;
                const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                return o === n && e === r && Date.now() - i < 5e3 ? void 0 : (r = e, n = o, i = Date.now(), 
                o);
            };
            try {
                const r = new e.BroadcastChannel(t.bcSecret);
                let n = [];
                o.sendToLogger = (e, ...t) => {
                    const i = o.toLogText(e, ...t);
                    if (void 0 !== i) return void 0 === n ? r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: i
                    }) : void n.push({
                        type: e,
                        text: i
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
        }(), r = o.patternToRegex(e), n = o.getExtraArgs(Array.from(arguments), 1), i = (e, t = 500) => {
            void 0 === i.timer && (i.timer = setTimeout((() => {
                i.timer = void 0, e();
            }), t));
        }, c = new URL(document.baseURI);
        let s = n.domain;
        if (s && /^\/.+\//.test(s)) {
            const e = new RegExp(s.slice(1, -1)).exec(c.hostname);
            s = e ? e[0] : void 0;
        }
        const a = () => {
            o.String_split.call(document.cookie, ";").forEach((e => {
                const t = e.indexOf("=");
                if (-1 === t) return;
                const o = e.slice(0, t).trim();
                if (!1 === r.test(o)) return;
                const n = o + "=", i = `; domain=${c.hostname}`, a = `; domain=.${c.hostname}`;
                let l, m;
                if (s) l = `; domain=${s}`, m = `; domain=.${s}`; else if (document.domain) {
                    const e = document.domain;
                    e !== c.hostname && (l = `; domain=.${e}`), e.startsWith("www.") && (m = `; domain=${e.replace("www", "")}`);
                }
                const d = "; path=/", g = "; Max-Age=-1000; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = n + g, document.cookie = n + i + g, document.cookie = n + a + g, 
                document.cookie = n + d + g, document.cookie = n + i + d + g, document.cookie = n + a + d + g, 
                void 0 !== l && (document.cookie = n + l + d + g), void 0 !== m && (document.cookie = n + m + d + g);
            }));
        };
        if (a(), window.addEventListener("beforeunload", a), "string" != typeof n.when) return;
        const l = [ "scroll", "keydown" ], m = o.String_split.call(n.when, /\s/);
        for (const e of m) !1 !== l.includes(e) && document.addEventListener(e, (() => {
            i(a);
        }), {
            passive: !0
        });
    }
    const t = {}, o = [ [ "br_mc" ], [ "articlesRead" ], [ "_zippia-popup-s_t" ], [ "tce", "when", "scroll" ], [ "arc" ], [ "current-pageviews" ], [ "product-previews" ], [ "tpm_article_views" ], [ "tpm_page_views" ], [ "sbj_archiveStatus" ], [ "arts" ], [ "issuem_lp" ], [ "ArticlePaywallList" ], [ "xbc" ], [ "/^tncms:meter:/" ], [ "meter_haystack" ], [ "lifetime_page_view_count" ], [ "page_view_count" ], [ "Drupal_visitor_paywall" ], [ "client_id" ], [ "AAJPaywall" ], [ "MAID" ] ], r = new Map([ [ "bestrecipes.com.au", 0 ], [ "screenrant.com", 1 ], [ "androidpolice.com", 1 ], [ "cbr.com", 1 ], [ "collider.com", 1 ], [ "dualshockers.com", 1 ], [ "gamerant.com", 1 ], [ "howtogeek.com", 1 ], [ "makeuseof.com", 1 ], [ "movieweb.com", 1 ], [ "pocketnow.com", 1 ], [ "thegamer.com", 1 ], [ "thetravel.com", 1 ], [ "xda-developers.com", 1 ], [ "zippia.com", 2 ], [ "lawinsider.com", 3 ], [ "nautil.us", 4 ], [ "rtings.com", [ 5, 6 ] ], [ "talkingpointsmemo.com", [ 7, 8 ] ], [ "sportsbusinessjournal.com", 9 ], [ "techinasia.com", 10 ], [ "theolivepress.es", 11 ], [ "plough.com", 12 ], [ "politico.com", 13 ], [ "politico.eu", 13 ], [ "bbc.com", 13 ], [ "climbing.com", 13 ], [ "themonthly.com.au", 13 ], [ "thesaturdaypaper.com.au", 13 ], [ "nypost.com", 13 ], [ "triathlete.com", 13 ], [ "niagarafallsreview.ca", 14 ], [ "stcatharinesstandard.ca", 14 ], [ "therecord.com", 14 ], [ "thespec.com", 14 ], [ "thestar.com", 14 ], [ "wellandtribune.ca", 14 ], [ "hartfordbusiness.com", 15 ], [ "investing.com", [ 16, 17 ] ], [ "commonwealmagazine.org", 18 ], [ "startribune.com", 19 ], [ "americanaffairsjournal.org", 20 ], [ "science.org", 21 ] ]), n = new Map([]), i = (e, t, o) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) o.add(e); else o.add(r);
    }, s = (() => {
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
    if (0 === s.length) return;
    const a = new Set, l = new Set;
    ((e, t = "") => {
        const o = e.split("."), c = o.length;
        if (0 !== c) for (let e = 0; e < c; e++) {
            const c = `${o.slice(e).join(".")}${t}`;
            i(c, r, a), i(c, n, l);
        }
    })(s[0].hn);
    for (const t of a) if (!l.has(t)) try {
        e(...o[t]);
    } catch {}
}();