!function() {
    function e(e = "", n = "", r = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const o = function() {
            if (t.safeSelf) return t.safeSelf;
            const e = globalThis, n = {
                Array_from: Array.from,
                Error: e.Error,
                Function_toStringFn: e.Function.prototype.toString,
                Function_toString: e => n.Function_toStringFn.call(e),
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
                JSON_parse: (...e) => n.JSON_parseFn.call(n.JSON, ...e),
                JSON_stringify: (...e) => n.JSON_stringifyFn.call(n.JSON, ...e),
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
            if (t.safeSelf = n, void 0 === t.bcSecret) return n;
            n.logLevel = t.logLevel || 1;
            let r = "", o = "", a = 0;
            n.toLogText = (e, ...t) => {
                if (0 === t.length) return;
                const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
                return n === o && e === r && Date.now() - a < 5e3 ? void 0 : (r = e, o = n, a = Date.now(), 
                n);
            };
            try {
                const r = new e.BroadcastChannel(t.bcSecret);
                let o = [];
                n.sendToLogger = (e, ...t) => {
                    const a = n.toLogText(e, ...t);
                    if (void 0 !== a) return void 0 === o ? r.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: a
                    }) : void o.push({
                        type: e,
                        text: a
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
                        n.logLevel = 1;
                        break;

                      case "setScriptletLogLevelToTwo":
                        n.logLevel = 2;
                    }
                }, r.postMessage("areyouready?");
            } catch {
                n.sendToLogger = (e, ...t) => {
                    const r = n.toLogText(e, ...t);
                    void 0 !== r && n.log(`uBO ${r}`);
                };
            }
            return n;
        }(), a = o.makeLogPrefix("xml-prune", e, n, r), s = o.patternToRegex(r), i = o.getExtraArgs(Array.from(arguments), 3), c = t => {
            try {
                if ("" !== n && null === t.querySelector(n)) return t;
                if (i.logdoc) {
                    const e = new XMLSerializer;
                    o.uboLog(a, `Document is\n\t${e.serializeToString(t)}`);
                }
                const r = ((e, t) => {
                    if (!1 === /^xpath\(.+\)$/.test(t)) return Array.from(e.querySelectorAll(t));
                    const n = e.evaluate(t.slice(6, -1), e, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null), r = [];
                    for (let e = 0; e < n.snapshotLength; e++) {
                        const t = n.snapshotItem(e);
                        r.push(t);
                    }
                    return r;
                })(t, e);
                if (0 === r.length) return t;
                o.uboLog(a, `Removing ${r.length} items`);
                for (const e of r) 1 === e.nodeType ? e.remove() : 2 === e.nodeType && e.ownerElement.removeAttribute(e.nodeName), 
                o.uboLog(a, `${e.constructor.name}.${e.nodeName} removed`);
            } catch (e) {
                o.uboErr(a, `Error: ${e}`);
            }
            return t;
        }, l = e => {
            if (!1 === (/^\s*</.test(e) && />\s*$/.test(e))) return e;
            try {
                const t = (new DOMParser).parseFromString(e, "text/xml");
                c(t), e = (new XMLSerializer).serializeToString(t);
            } catch {}
            return e;
        }, d = e => "string" == typeof e ? e : e instanceof Request ? e.url : String(e);
        self.fetch = new Proxy(self.fetch, {
            apply: function(e, t, n) {
                const r = Reflect.apply(e, t, n);
                return !1 === s.test(d(n[0])) ? r : r.then((e => e.clone().text().then((t => {
                    const n = new Response(l(t), {
                        status: e.status,
                        statusText: e.statusText,
                        headers: e.headers
                    });
                    return Object.defineProperties(n, {
                        ok: {
                            value: e.ok
                        },
                        redirected: {
                            value: e.redirected
                        },
                        type: {
                            value: e.type
                        },
                        url: {
                            value: e.url
                        }
                    }), n;
                })).catch((() => e))));
            }
        }), self.XMLHttpRequest.prototype.open = new Proxy(self.XMLHttpRequest.prototype.open, {
            apply: async (e, t, n) => (!1 === s.test(d(n[1])) || t.addEventListener("readystatechange", (function() {
                if (4 !== t.readyState) return;
                const e = t.responseType;
                if ("document" === e || "" === e && t.responseXML instanceof XMLDocument) {
                    c(t.responseXML);
                    const e = (new XMLSerializer).serializeToString(t.responseXML);
                    return Object.defineProperty(t, "responseText", {
                        value: e
                    }), void ("string" == typeof t.response && Object.defineProperty(t, "response", {
                        value: e
                    }));
                }
                if ("text" === e || "" === e && "string" == typeof t.responseText) {
                    const e = t.responseText, n = l(e);
                    if (n === e) return;
                    return Object.defineProperty(t, "response", {
                        value: n
                    }), void Object.defineProperty(t, "responseText", {
                        value: n
                    });
                }
            })), Reflect.apply(e, t, n))
        });
    }
    const t = {}, n = [ [ 'xpath(//*[name()="MPD"]/@mediaPresentationDuration | //*[name()="Period"][.//*[name()="BaseURL" and contains(text(),"/ads-")]] | //*[name()="Period"][starts-with(@id,"ad")] | //*[name()="Period"][starts-with(@id,"Ad")] | //*[name()="Period"]/@start)', 'MPD Period[id^="Ad"i]', ".mpd" ], [ 'xpath(//*[name()="Period"][.//*[@value="Ad"]] | //*[name()="Period"]/@start)', '[value="Ad"]', ".mpd" ], [ 'xpath(//*[name()="Period"][.//*[name()="AdaptationSet"][@contentType="video"][not(@bitstreamSwitching="true")]])', "", ".mpd" ], [ "xpath(//*[name()=\"MPD\"][.//*[name()=\"BaseURL\" and contains(text(),'dash_clear_fmp4') and contains(text(),'/a/')]]/@mediaPresentationDuration | //*[name()=\"Period\"][./*[name()=\"BaseURL\" and contains(text(),'dash_clear_fmp4') and contains(text(),'/a/')]])", "", ".mpd" ], [ 'Period[id*="-roll-"][id*="-ad-"]', "", "pubads.g.doubleclick.net/ondemand" ], [ 'xpath(//*[name()="MPD"]/@mediaPresentationDuration | //*[name()="Period"]/@start | //*[name()="Period"][not(.//*[name()="SegmentTimeline"])][not(.//*[name()="ContentProtection"])] | //*[name()="Period"][./*[name()="BaseURL"]][not(.//*[name()="ContentProtection"])])', "", ".mpd" ], [ 'xpath(//*[name()="MPD"]/@mediaPresentationDuration | //*[name()="Period"]/@start | //*[name()="Period"][.//*[name()="BaseURL" and contains(text(),\'adease\')]])', '[media^="A_D/"]', ".mpd" ], [ 'xpath(//*[name()="Period"][.//*[name()="BaseURL" and contains(text(),\'/ad/\')]])', "", ".mpd" ], [ "VAST > Ad", "", "/tserver" ], [ '[breakId*="Roll"]', "", "/content.vmap" ] ], r = new Map([ [ "hulu.com", 0 ], [ "www.amazon.co.jp", 1 ], [ "www.amazon.co.uk", 1 ], [ "www.amazon.com", 1 ], [ "www.amazon.de", 1 ], [ "www.primevideo.com", 1 ], [ "vix.com", 2 ], [ "discoveryplus.*", 3 ], [ "go.discovery.com", 3 ], [ "investigationdiscovery.com", 3 ], [ "go.tlc.com", 3 ], [ "sciencechannel.com", 3 ], [ "watch.foodnetwork.com", 3 ], [ "10.com.au", 4 ], [ "10play.com.au", 4 ], [ "cbs.com", 4 ], [ "paramountplus.com", 4 ], [ "play.max.com", 5 ], [ "foxtel.com.au", 6 ], [ "serially.it", 7 ], [ "itv.com", 8 ], [ "canela.tv", 9 ] ]), o = new Map([]), a = (e, t, n) => {
        let r = t.get(e);
        if (void 0 !== r) if ("number" != typeof r) for (const e of r) n.add(e); else n.add(r);
    }, i = (() => {
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
    if (0 === i.length) return;
    const c = new Set, l = new Set;
    ((e, t = "") => {
        const n = e.split("."), s = n.length;
        if (0 !== s) {
            for (let e = 0; e < s; e++) {
                const s = `${n.slice(e).join(".")}${t}`;
                a(s, r, c), a(s, o, l);
            }
            {
                const e = s - 1;
                for (let s = 0; s < e; s++) for (let i = e; i > s; i--) {
                    const e = `${n.slice(s, i).join(".")}.*${t}`;
                    a(e, r, c), a(e, o, l);
                }
            }
        }
    })(i[0].hn);
    for (const t of c) if (!l.has(t)) try {
        e(...n[t]);
    } catch {}
}();