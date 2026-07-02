!function() {
    function e(e = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const o = t(), r = o.makeLogPrefix("abort-on-property-read", e), n = function() {
            const e = function() {
                const e = t();
                return e.String_fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36);
            }(), o = self.onerror;
            return self.onerror = function(t, ...r) {
                return !("string" != typeof t || !t.includes(e)) || (o instanceof Function ? o.call(this, t, ...r) : void 0);
            }.bind(), e;
        }(), i = function() {
            throw o.uboLog(r, "Aborted"), new ReferenceError(n);
        }, c = function(e, t) {
            const o = t.indexOf(".");
            if (-1 === o) {
                const o = Object.getOwnPropertyDescriptor(e, t);
                return void (o && o.get === i || Object.defineProperty(e, t, {
                    get: i,
                    set: function() {}
                }));
            }
            const r = t.slice(0, o);
            let n = e[r];
            if (t = t.slice(o + 1), n) return void c(n, t);
            const s = Object.getOwnPropertyDescriptor(e, r);
            s && void 0 !== s.set || Object.defineProperty(e, r, {
                get: function() {
                    return n;
                },
                set: function(e) {
                    n = e, e instanceof Object && c(e, t);
                }
            });
        }, s = window;
        c(s, e);
    }
    function t() {
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
        if (o.safeSelf = t, void 0 === o.bcSecret) return t;
        t.logLevel = o.logLevel || 1;
        let r = "", n = "", i = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return o === n && e === r && Date.now() - i < 5e3 ? void 0 : (r = e, n = o, i = Date.now(), 
            o);
        };
        try {
            const r = new e.BroadcastChannel(o.bcSecret);
            let n = [];
            t.sendToLogger = (e, ...o) => {
                const i = t.toLogText(e, ...o);
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
    }
    const o = {}, r = [ [ "blockAdBlock" ], [ "isAdBlocked" ], [ "block_ads" ], [ "setNptTechAdblockerCookie" ], [ "possivelAdblockDetectado" ], [ "eazyAdUnBlockerHttp" ], [ "antiAdBlockerStyle" ], [ "adBlockFunction" ], [ "Object.prototype.autoRecov" ], [ "ad_nodes" ], [ "hb_now" ], [ "adblock" ], [ "adblockDetected" ], [ "gothamBatAdblock" ], [ "Bl0ckAdBl0ckCo" ], [ "ppAdblocks" ], [ "mMCheckAgainBlock" ], [ "popunder" ], [ "userout" ], [ "initPu" ], [ "cJsEdge" ], [ "lolaop" ], [ "adk_pdisp" ], [ "popurl" ], [ "the_crakien" ], [ "allclick_Public" ], [ "checkCookieClick" ], [ "Redirecionar" ], [ "scriptwz_url" ], [ "smrtSB" ], [ "asgPopScript" ], [ "smrtSP" ], [ "_cpp" ], [ "adbClick" ], [ "pub" ], [ "Pub2" ], [ "area51" ] ], n = new Map([ [ "cinemastervip.com", 0 ], [ "autotop.net", 1 ], [ "luratoons.com", 2 ], [ "lura-toons.com", 2 ], [ "elespanol.com", 3 ], [ "mundodevalor.me", 4 ], [ "aquiyahorajuegos.net", 5 ], [ "toonscrab.com", 6 ], [ "httpmangacrab2.com", 6 ], [ "manga-crab.com", 6 ], [ "mangacrab.com", 6 ], [ "hinatasoul.com", 7 ], [ "pcworld.es", 8 ], [ "tunovelaligera.com", 9 ], [ "20minutos.es", 10 ], [ "comando.to", 11 ], [ "tvplusgratis.com", 12 ], [ "seriesretro.com", 13 ], [ "cozinha.minhasdelicias.com", 14 ], [ "diariodegoias.com.br", 15 ], [ "outerspace.com.br", 15 ], [ "1i1.in", 16 ], [ "brjogostorrents.com", 17 ], [ "packsmega.info", 18 ], [ "embedder.net", 19 ], [ "pelispedia.life", 20 ], [ "cuevana3.*", 20 ], [ "gnula.*", 20 ], [ "poseidonhd2.co", 20 ], [ "cuevana2espanol.*", 20 ], [ "cuevana.*", 20 ], [ "fiuxy2.com", 21 ], [ "pelispop.me", 22 ], [ "allfeeds.live", 23 ], [ "cinecalidad2.*", 24 ], [ "cine-calidad.*", 25 ], [ "hentaistube.com", 26 ], [ "mrpiracy.top", 27 ], [ "seireshd.com", 28 ], [ "cinetux.to", [ 29, 30 ] ], [ "pirlotv.es", 31 ], [ "aquariumgays.com", 32 ], [ "repelisplus.vip", 33 ], [ "descargaranimehentai.com", 34 ], [ "tuhentaionline.com", 35 ], [ "animeonline.ninja", 36 ] ]), i = new Map([]), c = (e, t, o) => {
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
    const l = new Set, p = new Set;
    ((e, t = "") => {
        const o = e.split("."), r = o.length;
        if (0 !== r) {
            for (let e = 0; e < r; e++) {
                const r = `${o.slice(e).join(".")}${t}`;
                c(r, n, l), c(r, i, p);
            }
            {
                const e = r - 1;
                for (let r = 0; r < e; r++) for (let s = e; s > r; s--) {
                    const e = `${o.slice(r, s).join(".")}.*${t}`;
                    c(e, n, l), c(e, i, p);
                }
            }
        }
    })(a[0].hn);
    for (const t of l) if (!p.has(t)) try {
        e(...r[t]);
    } catch {}
}();