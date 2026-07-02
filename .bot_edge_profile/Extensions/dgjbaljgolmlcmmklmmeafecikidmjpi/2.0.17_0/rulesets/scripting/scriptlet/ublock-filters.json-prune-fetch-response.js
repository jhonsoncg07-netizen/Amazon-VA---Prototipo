!function() {
    function e(e = "", r = "") {
        const s = o(), n = s.makeLogPrefix("json-prune-fetch-response", e, r), a = s.getExtraArgs(Array.from(arguments), 2), i = function(e, t = "") {
            const r = o(), s = new Map;
            if (void 0 === e || "" === e) return s;
            const n = {
                canNegate: !0
            };
            for (const o of r.String_split.call(e, /\s+/)) {
                let [e, a] = r.String_split.call(o, ":");
                "" !== e && (void 0 !== a && /[^$\w -]/.test(e) && (e = `${e}:${a}`, a = void 0), 
                void 0 !== a ? s.set(e, r.initPattern(a, n)) : "" !== t && s.set(t, r.initPattern(e, n)));
            }
            return s;
        }(a.propsToMatch, "url"), c = s.initPattern(a.stackToMatch || "", {
            canNegate: !0
        }), l = "" === e;
        self.fetch = new Proxy(self.fetch, {
            apply: function(p, d, u) {
                const f = Reflect.apply(p, d, u);
                if (0 !== i.size) {
                    const e = [ u[0] instanceof Object ? u[0] : {
                        url: u[0]
                    } ];
                    if (e[0] instanceof Request) try {
                        e[0] = s.Request_clone.call(e[0]);
                    } catch (e) {
                        s.uboErr(n, "Error:", e);
                    }
                    u[1] instanceof Object && e.push(u[1]);
                    const t = function(e, ...t) {
                        const r = o(), s = [];
                        for (const o of t) if (o instanceof Object != 0) for (const [t, n] of e) {
                            let e = o[t];
                            if (void 0 !== e) {
                                if ("string" != typeof e) {
                                    try {
                                        e = r.JSON_stringify(e);
                                    } catch {}
                                    if ("string" != typeof e) continue;
                                }
                                if (!1 === r.testPattern(n, e)) return;
                                s.push(`${t}: ${e}`);
                            }
                        }
                        return s;
                    }(i, ...e);
                    if (void 0 === t) return f;
                    s.logLevel > 1 && s.uboLog(n, `Matched "propsToMatch":\n\t${t.join("\n\t")}`);
                }
                return f.then((o => o.clone().json().then((i => {
                    if ("object" != typeof i) return o;
                    if (l) return s.uboLog(n, s.JSON_stringify(i, null, 2)), o;
                    const p = t(i, e, r, c, a);
                    if ("object" != typeof p) return o;
                    s.uboLog(n, "Pruned");
                    const d = Response.json(p, {
                        status: o.status,
                        statusText: o.statusText,
                        headers: o.headers
                    });
                    return Object.defineProperties(d, {
                        ok: {
                            value: o.ok
                        },
                        redirected: {
                            value: o.redirected
                        },
                        type: {
                            value: o.type
                        },
                        url: {
                            value: o.url
                        }
                    }), d;
                })).catch((e => (s.uboErr(n, "Error:", e), o))))).catch((e => (s.uboErr(n, "Error:", e), 
                f)));
            }
        });
    }
    function t(e, s, n, a = {
        matchAll: !0
    }, i = {}) {
        if ("string" != typeof s) return;
        const c = o(), l = "" !== s ? c.String_split.call(s, / +/) : [], p = 0 !== l.length && "" !== n ? c.String_split.call(n, / +/) : [];
        if (!0 !== a.matchAll && !1 === function(e, t = "") {
            const r = o(), s = function() {
                const e = function() {
                    const e = o();
                    return e.String_fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36);
                }(), t = self.onerror;
                return self.onerror = function(o, ...r) {
                    return !("string" != typeof o || !o.includes(e)) || (t instanceof Function ? t.call(this, o, ...r) : void 0);
                }.bind(), e;
            }(), n = new r.Error(s), a = new URL(self.location.href);
            a.hash = "";
            const i = /(.*?@)?(\S+)(:\d+):\d+\)?$/, c = [];
            for (let e of r.String_split.call(n.stack, /[\n\r]+/)) {
                if (e.includes(s)) continue;
                e = e.trim();
                const t = r.RegExp_exec.call(i, e);
                if (null === t) continue;
                let o = t[2];
                o.startsWith("(") && (o = o.slice(1)), o === a.href ? o = "inlineScript" : o.startsWith("<anonymous>") && (o = "injectedScript");
                let n = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                n.startsWith("at") && (n = n.slice(2).trim());
                let l = t[3];
                c.push(" " + `${n} ${o}${l}:1`.trim());
            }
            c[0] = "stackDepth:" + (c.length - 1);
            const l = c.join("\t"), p = !0 !== e.matchAll && r.testPattern(e, l);
            return ("all" === t || "match" === t && p || "nomatch" === t && !p) && r.uboLog(l.replace(/\t/g, "\n")), 
            p;
        }(a, i.logstack)) return;
        if (void 0 === t.mustProcess && (t.mustProcess = (e, t) => {
            for (const o of t) if (!1 === r(e, o)) return !1;
            return !0;
        }), 0 === l.length) return;
        let d = "nomatch";
        if (t.mustProcess(e, p)) for (const t of l) r(e, t, !0) && (d = "match");
        return "match" === d ? e : void 0;
    }
    function o() {
        if (s.safeSelf) return s.safeSelf;
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
                        const t = r[o + 1], s = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ r[o], s ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(o);
            },
            onIdle: (t, o) => e.requestIdleCallback ? e.requestIdleCallback(t, o) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (s.safeSelf = t, void 0 === s.bcSecret) return t;
        t.logLevel = s.logLevel || 1;
        let o = "", r = "", n = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const s = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return s === r && e === o && Date.now() - n < 5e3 ? void 0 : (o = e, r = s, n = Date.now(), 
            s);
        };
        try {
            const o = new e.BroadcastChannel(s.bcSecret);
            let r = [];
            t.sendToLogger = (e, ...s) => {
                const n = t.toLogText(e, ...s);
                if (void 0 !== n) return void 0 === r ? o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: n
                }) : void r.push({
                    type: e,
                    text: n
                });
            }, o.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: t}) => o.postMessage({
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
            }, o.postMessage("areyouready?");
        } catch {
            t.sendToLogger = (e, ...o) => {
                const r = t.toLogText(e, ...o);
                void 0 !== r && t.log(`uBO ${r}`);
            };
        }
        return t;
    }
    function r(e, t, s = !1) {
        const n = o();
        let a = e, i = t;
        for (;;) {
            if ("object" != typeof a || null === a) return !1;
            const e = i.indexOf(".");
            if (-1 === e) {
                if (!1 === s) return n.Object_hasOwn(a, i);
                let e = !1;
                if ("*" === i) for (const t in a) !1 !== n.Object_hasOwn(a, t) && (delete a[t], 
                e = !0); else n.Object_hasOwn(a, i) && (delete a[i], e = !0);
                return e;
            }
            const t = i.slice(0, e), o = i.slice(e + 1);
            let c = !1;
            if ("[-]" === t && Array.isArray(a)) {
                let e = a.length;
                for (;e--; ) !1 !== r(a[e], o) && (a.splice(e, 1), c = !0);
                return c;
            }
            if ("{-}" === t && a instanceof Object) {
                for (const e of Object.keys(a)) !1 !== r(a[e], o) && (delete a[e], c = !0);
                return c;
            }
            if ("[]" === t && Array.isArray(a) || "{}" === t && a instanceof Object || "*" === t && a instanceof Object) {
                for (const e of Object.keys(a)) !1 !== r(a[e], o, s) && (c = !0);
                return c;
            }
            if (!1 === n.Object_hasOwn(a, t)) return !1;
            a = a[t], i = i.slice(e + 1);
        }
    }
    const s = {}, n = [ [ "playerAds adPlacements adSlots no_ads playerResponse.playerAds playerResponse.adPlacements playerResponse.adSlots playerResponse.no_ads [].playerResponse.adPlacements [].playerResponse.playerAds [].playerResponse.adSlots [].playerResponse.no_ads", "", "propsToMatch", "/player\\?|get_watch|^\\W+$/" ], [ "playerAds adPlacements adSlots no_ads playerResponse.playerAds playerResponse.adPlacements playerResponse.adSlots playerResponse.no_ads", "", "propsToMatch", "/playlist?" ], [ "breaks custom_breaks_data pause_ads video_metadata.end_credits_time", "pause_ads", "propsToMatch", "/playlist" ], [ "breaks custom_breaks_data pause_ads video_metadata.end_credits_time", "breaks", "propsToMatch", "/playlist" ], [ "breaks custom_breaks_data pause_ads", "", "propsToMatch", "/playlist" ], [ "reelWatchSequenceResponse.entries.[-].command.reelWatchEndpoint.adClientParams.isAd entries.[-].command.reelWatchEndpoint.adClientParams.isAd", "", "propsToMatch", "url:/reel_watch_sequence?" ], [ "response.timeline.elements.[-].advertiserId", "", "propsToMatch", "url:/api/v2/tabs/for_you" ], [ "avails", "", "propsToMatch", "amazonaws.com" ], [ "imasdk", "", "propsToMatch", "topaz.viacomcbs.digital" ], [ "response.ads", "", "propsToMatch", "/api" ], [ "plugins.adService" ], [ "adBreaks.[].startingOffset adBreaks.[].adBreakDuration adBreaks.[].ads adBreaks.[].startTime adBreak adBreakLocations", "", "propsToMatch", "/session.json" ], [ "data.device.adsParams data.device.adSponsorshipTemplate", "", "propsToMatch", "url:/appconfig" ], [ "response.ads", "", "propsToMatch", "/streams" ], [ "ads.[].imageUrl", "", "propsToMatch", "url:api/meta" ], [ "adDetails", "", "propsToMatch", "/secure?" ], [ "data.search.products.[-].sponsored_ad.ad_source", "", "propsToMatch", "url:/plp_search_v2?" ], [ "session.sessionAds session.sessionAdsRequired", "", "propsToMatch", "/session" ], [ "itemList.[-].ad_info.ad_id", "", "propsToMatch", "url:api/recommend/item_list/" ], [ "assets.preroll assets.prerollDebug", "", "propsToMatch", "/stream-link" ], [ "adsConfiguration", "", "propsToMatch", "/vod" ], [ "layout.sections.mainContentCollection.components.[].data.productTiles.[-].sponsoredCreative.adGroupId", "", "propsToMatch", "/search" ], [ "data.[].affiliate_url", "", "propsToMatch", "cdnpk.net/v2/images/search?" ], [ "data.[-].inner.ctaCopy", "", "propsToMatch", "?page=" ], [ "configs.*.properties.componentConfigs.slideshowConfigs.*.interstitialNativeAds", "", "propsToMatch", "url:/config" ], [ "*", "list.[].link.kicker", "propsToMatch", "/content/v1/cms/api/amp/Document" ], [ "properties.tiles.[-].isAd", "", "propsToMatch", "/mestripewc/default/config" ], [ "*", "0.aurl", "propsToMatch", "/cs?id=" ] ], a = new Map([ [ "www.youtube.com", [ 0, 1, 5 ] ], [ "hulu.com", [ 2, 3, 4 ] ], [ "m.youtube.com", 5 ], [ "music.youtube.com", 5 ], [ "tv.youtube.com", 5 ], [ "youtubekids.com", 5 ], [ "youtube-nocookie.com", 5 ], [ "tumblr.com", 6 ], [ "nbc.com", 7 ], [ "southpark.*", 8 ], [ "southparkstudios.*", 8 ], [ "player.pop.co.uk", 9 ], [ "player.popfun.co.uk", 9 ], [ "iprima.cz", 10 ], [ "pluto.tv", 11 ], [ "crackle.com", 12 ], [ "play.virginmediatelevision.ie", 13 ], [ "misskey.io", 14 ], [ "misskey.oga.ninja", 14 ], [ "mk.yopo.work", 14 ], [ "sushi.ski", 14 ], [ "trpger.us", 14 ], [ "warpday.net", 14 ], [ "zadankai.club", 14 ], [ "zee5.com", 15 ], [ "target.com", 16 ], [ "play.geforcenow.com", 17 ], [ "www.tiktok.com", 18 ], [ "npo.nl", 19 ], [ "watch.shout-tv.com", 20 ], [ "realcanadiansuperstore.ca", 21 ], [ "flaticon.com", 22 ], [ "fomo.id", 23 ], [ "www.msn.com", [ 24, 25, 26 ] ], [ "mega.nz", 27 ] ]), i = new Map([]), c = (e, t, o) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) o.add(e); else o.add(r);
    }, p = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const o = e.lastIndexOf("://");
            if (-1 === o) return;
            const r = e.slice(o + 3), s = r.indexOf(":");
            return {
                hn: -1 === s ? r : r.slice(0, s),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === p.length) return;
    const d = new Set, u = new Set;
    ((e, t = "") => {
        const o = e.split("."), r = o.length;
        if (0 !== r) {
            for (let e = 0; e < r; e++) {
                const r = `${o.slice(e).join(".")}${t}`;
                c(r, a, d), c(r, i, u);
            }
            {
                const e = r - 1;
                for (let r = 0; r < e; r++) for (let s = e; s > r; s--) {
                    const e = `${o.slice(r, s).join(".")}.*${t}`;
                    c(e, a, d), c(e, i, u);
                }
            }
        }
    })(p[0].hn);
    for (const t of d) if (!u.has(t)) try {
        e(...n[t]);
    } catch {}
}();