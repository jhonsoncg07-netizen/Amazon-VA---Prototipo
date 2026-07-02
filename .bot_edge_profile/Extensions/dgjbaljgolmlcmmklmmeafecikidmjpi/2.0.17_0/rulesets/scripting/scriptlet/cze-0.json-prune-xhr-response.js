!function() {
    function t(t = "", r = "") {
        const o = n(), s = o.makeLogPrefix("json-prune-xhr-response", t, r), i = new WeakMap, c = o.getExtraArgs(Array.from(arguments), 2), a = function(t, e = "") {
            const r = n(), o = new Map;
            if (void 0 === t || "" === t) return o;
            const s = {
                canNegate: !0
            };
            for (const n of r.String_split.call(t, /\s+/)) {
                let [t, i] = r.String_split.call(n, ":");
                "" !== t && (void 0 !== i && /[^$\w -]/.test(t) && (t = `${t}:${i}`, i = void 0), 
                void 0 !== i ? o.set(t, r.initPattern(i, s)) : "" !== e && o.set(e, r.initPattern(t, s)));
            }
            return o;
        }(c.propsToMatch, "url"), l = o.initPattern(c.stackToMatch || "", {
            canNegate: !0
        });
        self.XMLHttpRequest = class extends self.XMLHttpRequest {
            open(t, e, ...r) {
                const l = {
                    method: t,
                    url: e
                };
                let f = "match";
                return 0 !== a.size && void 0 === function(t, ...e) {
                    const r = n(), o = [];
                    for (const n of e) if (n instanceof Object != 0) for (const [e, s] of t) {
                        let t = n[e];
                        if (void 0 !== t) {
                            if ("string" != typeof t) {
                                try {
                                    t = r.JSON_stringify(t);
                                } catch {}
                                if ("string" != typeof t) continue;
                            }
                            if (!1 === r.testPattern(s, t)) return;
                            o.push(`${e}: ${t}`);
                        }
                    }
                    return o;
                }(a, l) && (f = "nomatch"), "match" === f && (o.logLevel > 1 && o.uboLog(s, `Matched optional "propsToMatch", "${c.propsToMatch}"`), 
                i.set(this, l)), super.open(t, e, ...r);
            }
            get response() {
                const n = super.response, a = i.get(this);
                if (void 0 === a) return n;
                const f = "string" == typeof n ? n.length : void 0;
                if (a.lastResponseLength !== f && (a.response = void 0, a.lastResponseLength = f), 
                void 0 !== a.response) return a.response;
                let p;
                if ("object" == typeof n) p = n; else if ("string" == typeof n) try {
                    p = o.JSON_parse(n);
                } catch {}
                if ("object" != typeof p) return a.response = n;
                const g = e(p, t, r, l, c);
                let u;
                return "object" == typeof g ? (u = "string" == typeof n ? o.JSON_stringify(g) : g, 
                o.uboLog(s, "Pruned")) : u = n, a.response = u;
            }
            get responseText() {
                const t = this.response;
                return "string" != typeof t ? super.responseText : t;
            }
        };
    }
    function e(t, o, s, i = {
        matchAll: !0
    }, c = {}) {
        if ("string" != typeof o) return;
        const a = n(), l = "" !== o ? a.String_split.call(o, / +/) : [], f = 0 !== l.length && "" !== s ? a.String_split.call(s, / +/) : [];
        if (!0 !== i.matchAll && !1 === function(t, e = "") {
            const r = n(), o = function() {
                const t = function() {
                    const t = n();
                    return t.String_fromCharCode(Date.now() % 26 + 97) + t.Math_floor(982451653 * t.Math_random() + 982451653).toString(36);
                }(), e = self.onerror;
                return self.onerror = function(n, ...r) {
                    return !("string" != typeof n || !n.includes(t)) || (e instanceof Function ? e.call(this, n, ...r) : void 0);
                }.bind(), t;
            }(), s = new r.Error(o), i = new URL(self.location.href);
            i.hash = "";
            const c = /(.*?@)?(\S+)(:\d+):\d+\)?$/, a = [];
            for (let t of r.String_split.call(s.stack, /[\n\r]+/)) {
                if (t.includes(o)) continue;
                t = t.trim();
                const e = r.RegExp_exec.call(c, t);
                if (null === e) continue;
                let n = e[2];
                n.startsWith("(") && (n = n.slice(1)), n === i.href ? n = "inlineScript" : n.startsWith("<anonymous>") && (n = "injectedScript");
                let s = void 0 !== e[1] ? e[1].slice(0, -1) : t.slice(0, e.index).trim();
                s.startsWith("at") && (s = s.slice(2).trim());
                let l = e[3];
                a.push(" " + `${s} ${n}${l}:1`.trim());
            }
            a[0] = "stackDepth:" + (a.length - 1);
            const l = a.join("\t"), f = !0 !== t.matchAll && r.testPattern(t, l);
            return ("all" === e || "match" === e && f || "nomatch" === e && !f) && r.uboLog(l.replace(/\t/g, "\n")), 
            f;
        }(i, c.logstack)) return;
        if (void 0 === e.mustProcess && (e.mustProcess = (t, e) => {
            for (const n of e) if (!1 === r(t, n)) return !1;
            return !0;
        }), 0 === l.length) return;
        let p = "nomatch";
        if (e.mustProcess(t, f)) for (const e of l) r(t, e, !0) && (p = "match");
        return "match" === p ? t : void 0;
    }
    function n() {
        if (o.safeSelf) return o.safeSelf;
        const t = globalThis, e = {
            Array_from: Array.from,
            Error: t.Error,
            Function_toStringFn: t.Function.prototype.toString,
            Function_toString: t => e.Function_toStringFn.call(t),
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
            RegExp: t.RegExp,
            RegExp_test: t.RegExp.prototype.test,
            RegExp_exec: t.RegExp.prototype.exec,
            Request_clone: t.Request.prototype.clone,
            String: t.String,
            String_fromCharCode: String.fromCharCode,
            String_split: String.prototype.split,
            XMLHttpRequest: t.XMLHttpRequest,
            addEventListener: t.EventTarget.prototype.addEventListener,
            removeEventListener: t.EventTarget.prototype.removeEventListener,
            fetch: t.fetch,
            JSON: t.JSON,
            JSON_parseFn: t.JSON.parse,
            JSON_stringifyFn: t.JSON.stringify,
            JSON_parse: (...t) => e.JSON_parseFn.call(e.JSON, ...t),
            JSON_stringify: (...t) => e.JSON_stringifyFn.call(e.JSON, ...t),
            log: void 0,
            logLevel: 0,
            makeLogPrefix(...t) {
                return this.sendToLogger && `[${t.join(" ⁝ ")}]` || "";
            },
            uboLog(...t) {
                if (void 0 !== this.sendToLogger && void 0 !== t && "" !== t[0]) return this.sendToLogger("info", ...t);
            },
            uboErr(...t) {
                if (void 0 !== this.sendToLogger && void 0 !== t && "" !== t[0]) return this.sendToLogger("error", ...t);
            },
            escapeRegexChars: t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            initPattern(t, e = {}) {
                if ("" === t) return {
                    matchAll: !0,
                    expect: !0
                };
                const n = !0 !== e.canNegate || !1 === t.startsWith("!");
                !1 === n && (t = t.slice(1));
                const r = /^\/(.+)\/([gimsu]*)$/.exec(t);
                return null !== r ? {
                    re: new this.RegExp(r[1], r[2] || e.flags),
                    expect: n
                } : void 0 !== e.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(t), e.flags),
                    expect: n
                } : {
                    pattern: t,
                    expect: n
                };
            },
            testPattern(t, e) {
                return !!t.matchAll || (t.re ? this.RegExp_test.call(t.re, e) === t.expect : e.includes(t.pattern) === t.expect);
            },
            patternToRegex(t, e, n = !1) {
                if ("" === t) return /^/;
                const r = /^\/(.+)\/([gimsu]*)$/.exec(t);
                if (null === r) {
                    const r = this.escapeRegexChars(t);
                    return new RegExp(n ? `^${r}$` : r, e);
                }
                try {
                    return new RegExp(r[1], r[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(t, e = 0) {
                const n = t.slice(e).reduce(((t, e, n, r) => {
                    if (0 == (1 & n)) {
                        const e = r[n + 1], o = /^\d+$/.test(e) ? parseInt(e, 10) : e;
                        t.push([ r[n], o ]);
                    }
                    return t;
                }), []);
                return this.Object_fromEntries(n);
            },
            onIdle: (e, n) => t.requestIdleCallback ? t.requestIdleCallback(e, n) : t.requestAnimationFrame(e),
            offIdle: e => t.requestIdleCallback ? t.cancelIdleCallback(e) : t.cancelAnimationFrame(e)
        };
        if (o.safeSelf = e, void 0 === o.bcSecret) return e;
        e.logLevel = o.logLevel || 1;
        let n = "", r = "", s = 0;
        e.toLogText = (t, ...e) => {
            if (0 === e.length) return;
            const o = `[${document.location.hostname || document.location.href}]${e.join(" ")}`;
            return o === r && t === n && Date.now() - s < 5e3 ? void 0 : (n = t, r = o, s = Date.now(), 
            o);
        };
        try {
            const n = new t.BroadcastChannel(o.bcSecret);
            let r = [];
            e.sendToLogger = (t, ...o) => {
                const s = e.toLogText(t, ...o);
                if (void 0 !== s) return void 0 === r ? n.postMessage({
                    what: "messageToLogger",
                    type: t,
                    text: s
                }) : void r.push({
                    type: t,
                    text: s
                });
            }, n.onmessage = t => {
                switch (t.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: t, text: e}) => n.postMessage({
                        what: "messageToLogger",
                        type: t,
                        text: e
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    e.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    e.logLevel = 2;
                }
            }, n.postMessage("areyouready?");
        } catch {
            e.sendToLogger = (t, ...n) => {
                const r = e.toLogText(t, ...n);
                void 0 !== r && e.log(`uBO ${r}`);
            };
        }
        return e;
    }
    function r(t, e, o = !1) {
        const s = n();
        let i = t, c = e;
        for (;;) {
            if ("object" != typeof i || null === i) return !1;
            const t = c.indexOf(".");
            if (-1 === t) {
                if (!1 === o) return s.Object_hasOwn(i, c);
                let t = !1;
                if ("*" === c) for (const e in i) !1 !== s.Object_hasOwn(i, e) && (delete i[e], 
                t = !0); else s.Object_hasOwn(i, c) && (delete i[c], t = !0);
                return t;
            }
            const e = c.slice(0, t), n = c.slice(t + 1);
            let a = !1;
            if ("[-]" === e && Array.isArray(i)) {
                let t = i.length;
                for (;t--; ) !1 !== r(i[t], n) && (i.splice(t, 1), a = !0);
                return a;
            }
            if ("{-}" === e && i instanceof Object) {
                for (const t of Object.keys(i)) !1 !== r(i[t], n) && (delete i[t], a = !0);
                return a;
            }
            if ("[]" === e && Array.isArray(i) || "{}" === e && i instanceof Object || "*" === e && i instanceof Object) {
                for (const t of Object.keys(i)) !1 !== r(i[t], n, o) && (a = !0);
                return a;
            }
            if (!1 === s.Object_hasOwn(i, e)) return !1;
            i = i[e], c = c.slice(t + 1);
        }
    }
    const o = {}, s = [ [ "ad_blocks.[-].id_program", "", "propsToMatch", "/api/advertisement/getAllStreamAdBlocks/" ], [ "adBlocks.[-].id", "", "propsToMatch", "/schedules/ads" ] ], i = new Map([ [ "chip.4net.tv", 0 ], [ "doubrava.4net.tv", 0 ], [ "gemnet.4net.tvhtn.4net.tv", 0 ], [ "itv.satt.cz", 0 ], [ "jon.4net.tv", 0 ], [ "libli.tv", 0 ], [ "live-new.4net.tv", 0 ], [ "live-rete.4net.tv", 0 ], [ "live.4net.tv", 0 ], [ "live.artos.4net.tv", 0 ], [ "live.chiptv.cz", 0 ], [ "live.kabelko.sk", 0 ], [ "live.martico.sk", 0 ], [ "live.metrotv.sk", 0 ], [ "live.rapidnet.tv", 0 ], [ "live.rete.cz", 0 ], [ "live.swan.4net.tv", 0 ], [ "martico.4net.tv", 0 ], [ "muj.internethned.cz", 0 ], [ "online.pecka.tv", 0 ], [ "pamico.4net.tv", 0 ], [ "pegas.4net.tv", 0 ], [ "prestonet.4net.tv", 0 ], [ "prime.4net.tv", 0 ], [ "profinet.4net.tv", 0 ], [ "rapidnet.4net.tv", 0 ], [ "sleduj.interaktivni.tv", 0 ], [ "sprintel.tv", 0 ], [ "tv.e-max.sk", 0 ], [ "tv.giganet.sk", 0 ], [ "tv.htn.cz", 0 ], [ "tv.itcity.sk", 0 ], [ "tv.maxicom.cz", 0 ], [ "tv.nejpripojeni.cz", 0 ], [ "tv.nuo.sk", 0 ], [ "tv.rainside.sk", 0 ], [ "tv.sauron.cz", 0 ], [ "tv.selfnet.cz", 0 ], [ "tv.tes-media.sk", 0 ], [ "tv.tv2go.eu", 0 ], [ "tvadmin.pamico-czech.cz", 0 ], [ "winet.4net.tv", 0 ], [ "zona.telly.cz", 0 ], [ "magio.tv", 1 ] ]), c = new Map([]), a = (t, e, n) => {
        let r = e.get(t);
        if (void 0 !== r) if ("number" != typeof r) for (const t of r) n.add(t); else n.add(r);
    }, f = (() => {
        const t = document.location, e = [ t.origin ];
        return t.ancestorOrigins && e.push(...t.ancestorOrigins), e.map(((t, e) => {
            const n = t.lastIndexOf("://");
            if (-1 === n) return;
            const r = t.slice(n + 3), o = r.indexOf(":");
            return {
                hn: -1 === o ? r : r.slice(0, o),
                i: e
            };
        })).filter((t => void 0 !== t));
    })();
    if (0 === f.length) return;
    const p = new Set, g = new Set;
    ((t, e = "") => {
        const n = t.split("."), r = n.length;
        if (0 !== r) for (let t = 0; t < r; t++) {
            const r = `${n.slice(t).join(".")}${e}`;
            a(r, i, p), a(r, c, g);
        }
    })(f[0].hn);
    for (const e of p) if (!g.has(e)) try {
        t(...s[e]);
    } catch {}
}();