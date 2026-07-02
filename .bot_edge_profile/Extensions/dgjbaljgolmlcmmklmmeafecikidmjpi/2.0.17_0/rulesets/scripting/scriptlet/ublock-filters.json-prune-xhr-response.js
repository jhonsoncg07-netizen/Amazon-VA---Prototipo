!function() {
    function e(e = "", r = "") {
        const o = n(), s = o.makeLogPrefix("json-prune-xhr-response", e, r), i = new WeakMap, a = o.getExtraArgs(Array.from(arguments), 2), c = function(e, t = "") {
            const r = n(), o = new Map;
            if (void 0 === e || "" === e) return o;
            const s = {
                canNegate: !0
            };
            for (const n of r.String_split.call(e, /\s+/)) {
                let [e, i] = r.String_split.call(n, ":");
                "" !== e && (void 0 !== i && /[^$\w -]/.test(e) && (e = `${e}:${i}`, i = void 0), 
                void 0 !== i ? o.set(e, r.initPattern(i, s)) : "" !== t && o.set(t, r.initPattern(e, s)));
            }
            return o;
        }(a.propsToMatch, "url"), l = o.initPattern(a.stackToMatch || "", {
            canNegate: !0
        });
        self.XMLHttpRequest = class extends self.XMLHttpRequest {
            open(e, t, ...r) {
                const l = {
                    method: e,
                    url: t
                };
                let p = "match";
                return 0 !== c.size && void 0 === function(e, ...t) {
                    const r = n(), o = [];
                    for (const n of t) if (n instanceof Object != 0) for (const [t, s] of e) {
                        let e = n[t];
                        if (void 0 !== e) {
                            if ("string" != typeof e) {
                                try {
                                    e = r.JSON_stringify(e);
                                } catch {}
                                if ("string" != typeof e) continue;
                            }
                            if (!1 === r.testPattern(s, e)) return;
                            o.push(`${t}: ${e}`);
                        }
                    }
                    return o;
                }(c, l) && (p = "nomatch"), "match" === p && (o.logLevel > 1 && o.uboLog(s, `Matched optional "propsToMatch", "${a.propsToMatch}"`), 
                i.set(this, l)), super.open(e, t, ...r);
            }
            get response() {
                const n = super.response, c = i.get(this);
                if (void 0 === c) return n;
                const p = "string" == typeof n ? n.length : void 0;
                if (c.lastResponseLength !== p && (c.response = void 0, c.lastResponseLength = p), 
                void 0 !== c.response) return c.response;
                let f;
                if ("object" == typeof n) f = n; else if ("string" == typeof n) try {
                    f = o.JSON_parse(n);
                } catch {}
                if ("object" != typeof f) return c.response = n;
                const d = t(f, e, r, l, a);
                let u;
                return "object" == typeof d ? (u = "string" == typeof n ? o.JSON_stringify(d) : d, 
                o.uboLog(s, "Pruned")) : u = n, c.response = u;
            }
            get responseText() {
                const e = this.response;
                return "string" != typeof e ? super.responseText : e;
            }
        };
    }
    function t(e, o, s, i = {
        matchAll: !0
    }, a = {}) {
        if ("string" != typeof o) return;
        const c = n(), l = "" !== o ? c.String_split.call(o, / +/) : [], p = 0 !== l.length && "" !== s ? c.String_split.call(s, / +/) : [];
        if (!0 !== i.matchAll && !1 === function(e, t = "") {
            const r = n(), o = function() {
                const e = function() {
                    const e = n();
                    return e.String_fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36);
                }(), t = self.onerror;
                return self.onerror = function(n, ...r) {
                    return !("string" != typeof n || !n.includes(e)) || (t instanceof Function ? t.call(this, n, ...r) : void 0);
                }.bind(), e;
            }(), s = new r.Error(o), i = new URL(self.location.href);
            i.hash = "";
            const a = /(.*?@)?(\S+)(:\d+):\d+\)?$/, c = [];
            for (let e of r.String_split.call(s.stack, /[\n\r]+/)) {
                if (e.includes(o)) continue;
                e = e.trim();
                const t = r.RegExp_exec.call(a, e);
                if (null === t) continue;
                let n = t[2];
                n.startsWith("(") && (n = n.slice(1)), n === i.href ? n = "inlineScript" : n.startsWith("<anonymous>") && (n = "injectedScript");
                let s = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                s.startsWith("at") && (s = s.slice(2).trim());
                let l = t[3];
                c.push(" " + `${s} ${n}${l}:1`.trim());
            }
            c[0] = "stackDepth:" + (c.length - 1);
            const l = c.join("\t"), p = !0 !== e.matchAll && r.testPattern(e, l);
            return ("all" === t || "match" === t && p || "nomatch" === t && !p) && r.uboLog(l.replace(/\t/g, "\n")), 
            p;
        }(i, a.logstack)) return;
        if (void 0 === t.mustProcess && (t.mustProcess = (e, t) => {
            for (const n of t) if (!1 === r(e, n)) return !1;
            return !0;
        }), 0 === l.length) return;
        let f = "nomatch";
        if (t.mustProcess(e, p)) for (const t of l) r(e, t, !0) && (f = "match");
        return "match" === f ? e : void 0;
    }
    function n() {
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
            initPattern(e, t = {}) {
                if ("" === e) return {
                    matchAll: !0,
                    expect: !0
                };
                const n = !0 !== t.canNegate || !1 === e.startsWith("!");
                !1 === n && (e = e.slice(1));
                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== r ? {
                    re: new this.RegExp(r[1], r[2] || t.flags),
                    expect: n
                } : void 0 !== t.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(e), t.flags),
                    expect: n
                } : {
                    pattern: e,
                    expect: n
                };
            },
            testPattern(e, t) {
                return !!e.matchAll || (e.re ? this.RegExp_test.call(e.re, t) === e.expect : t.includes(e.pattern) === e.expect);
            },
            patternToRegex(e, t, n = !1) {
                if ("" === e) return /^/;
                const r = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === r) {
                    const r = this.escapeRegexChars(e);
                    return new RegExp(n ? `^${r}$` : r, t);
                }
                try {
                    return new RegExp(r[1], r[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const n = e.slice(t).reduce(((e, t, n, r) => {
                    if (0 == (1 & n)) {
                        const t = r[n + 1], o = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ r[n], o ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(n);
            },
            onIdle: (t, n) => e.requestIdleCallback ? e.requestIdleCallback(t, n) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (o.safeSelf = t, void 0 === o.bcSecret) return t;
        t.logLevel = o.logLevel || 1;
        let n = "", r = "", s = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return o === r && e === n && Date.now() - s < 5e3 ? void 0 : (n = e, r = o, s = Date.now(), 
            o);
        };
        try {
            const n = new e.BroadcastChannel(o.bcSecret);
            let r = [];
            t.sendToLogger = (e, ...o) => {
                const s = t.toLogText(e, ...o);
                if (void 0 !== s) return void 0 === r ? n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: s
                }) : void r.push({
                    type: e,
                    text: s
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: t}) => n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    t.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    t.logLevel = 2;
                }
            }, n.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...n) => {
                const r = t.toLogText(e, ...n);
                void 0 !== r && t.log(`uBO ${r}`);
            };
        }
        return t;
    }
    function r(e, t, o = !1) {
        const s = n();
        let i = e, a = t;
        for (;;) {
            if ("object" != typeof i || null === i) return !1;
            const e = a.indexOf(".");
            if (-1 === e) {
                if (!1 === o) return s.Object_hasOwn(i, a);
                let e = !1;
                if ("*" === a) for (const t in i) !1 !== s.Object_hasOwn(i, t) && (delete i[t], 
                e = !0); else s.Object_hasOwn(i, a) && (delete i[a], e = !0);
                return e;
            }
            const t = a.slice(0, e), n = a.slice(e + 1);
            let c = !1;
            if ("[-]" === t && Array.isArray(i)) {
                let e = i.length;
                for (;e--; ) !1 !== r(i[e], n) && (i.splice(e, 1), c = !0);
                return c;
            }
            if ("{-}" === t && i instanceof Object) {
                for (const e of Object.keys(i)) !1 !== r(i[e], n) && (delete i[e], c = !0);
                return c;
            }
            if ("[]" === t && Array.isArray(i) || "{}" === t && i instanceof Object || "*" === t && i instanceof Object) {
                for (const e of Object.keys(i)) !1 !== r(i[e], n, o) && (c = !0);
                return c;
            }
            if (!1 === s.Object_hasOwn(i, t)) return !1;
            i = i[t], a = a.slice(e + 1);
        }
    }
    const o = {}, s = [ [ "playerAds adPlacements adSlots no_ads playerResponse.playerAds playerResponse.adPlacements playerResponse.adSlots playerResponse.no_ads [].playerResponse.adPlacements [].playerResponse.playerAds [].playerResponse.adSlots [].playerResponse.no_ads", "", "propsToMatch", "/\\/player(?:\\?.+)?$/" ], [ "data.viewer.sideFeedUnit.nodes.[].new_adverts.nodes.[-].sponsored_data" ], [ "stream.insertion", "", "propsToMatch", "/video/auth/media" ], [ "data.viewer.instream_video_ads data.scrubber", "", "propsToMatch", "/api/graphql" ], [ "data.home.home_timeline_urt.instructions.[].entries.[-].content.itemContent.promotedMetadata", "", "propsToMatch", "url:/Home" ], [ "data.search_by_raw_query.search_timeline.timeline.instructions.[].entries.[-].content.itemContent.promotedMetadata", "", "propsToMatch", "url:/SearchTimeline" ], [ "data.threaded_conversation_with_injections_v2.instructions.[].entries.[-].content.items.[].item.itemContent.promotedMetadata", "", "propsToMatch", "url:/TweetDetail" ], [ "data.user.result.timeline_v2.timeline.instructions.[].entries.[-].content.itemContent.promotedMetadata", "", "propsToMatch", "url:/UserTweets" ], [ "data.immersiveMedia.timeline.instructions.[].entries.[-].content.itemContent.promotedMetadata", "", "propsToMatch", "url:/ImmersiveMedia" ] ], i = new Map([ [ "www.youtube.com", 0 ], [ "web.facebook.com", [ 1, 3 ] ], [ "www.facebook.com", [ 1, 3 ] ], [ "espn.com", 2 ], [ "twitter.com", [ 4, 5, 6, 7, 8 ] ], [ "x.com", [ 4, 5, 6, 7, 8 ] ] ]), a = new Map([ [ "platform.twitter.com", [ 4, 5, 6, 7, 8 ] ] ]), c = (e, t, n) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) n.add(e); else n.add(r);
    }, p = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const n = e.lastIndexOf("://");
            if (-1 === n) return;
            const r = e.slice(n + 3), o = r.indexOf(":");
            return {
                hn: -1 === o ? r : r.slice(0, o),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === p.length) return;
    const f = new Set, d = new Set;
    ((e, t = "") => {
        const n = e.split("."), r = n.length;
        if (0 !== r) for (let e = 0; e < r; e++) {
            const r = `${n.slice(e).join(".")}${t}`;
            c(r, i, f), c(r, a, d);
        }
    })(p[0].hn);
    for (const t of f) if (!d.has(t)) try {
        e(...s[t]);
    } catch {}
}();