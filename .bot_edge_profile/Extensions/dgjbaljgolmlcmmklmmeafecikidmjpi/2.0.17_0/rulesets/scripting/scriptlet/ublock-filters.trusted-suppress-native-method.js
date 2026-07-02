!function() {
    function e(e = "", n = "", r = "", i = "") {
        if ("" === e) return;
        const c = o(), a = c.makeLogPrefix("trusted-suppress-native-method", e, n, r, i), s = c.String_split.call(n, /\s*\|\s*/).map((e => /^".*"$/.test(e) ? {
            type: "pattern",
            re: c.patternToRegex(e.slice(1, -1))
        } : /^\/.+\/$/.test(e) ? {
            type: "pattern",
            re: c.patternToRegex(e)
        } : "false" === e ? {
            type: "exact",
            value: !1
        } : "true" === e ? {
            type: "exact",
            value: !0
        } : "null" === e ? {
            type: "exact",
            value: null
        } : "undefined" === e ? {
            type: "exact",
            value: void 0
        } : void 0)), l = c.initPattern(i, {
            canNegate: !0
        });
        t(e, (function(e) {
            const {callArgs: t} = e;
            if ("" === n) return c.uboLog(a, `Arguments:\n${t.join("\n")}`), e.reflect();
            for (let o = 0; o < s.length; o++) {
                const n = s[o];
                if (void 0 === n) continue;
                const r = o < t.length ? t[o] : void 0;
                if ("exact" === n.type && r !== n.value) return e.reflect();
                if ("pattern" === n.type && !1 === c.RegExp_test.call(n.re, r)) return e.reflect();
            }
            if (!0 !== l.matchAll) {
                const t = c.logLevel > 1 ? "all" : "";
                if (!1 === function(e, t = "") {
                    const n = o(), r = function() {
                        const e = function() {
                            const e = o();
                            return e.String_fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36);
                        }(), t = self.onerror;
                        return self.onerror = function(o, ...n) {
                            return !("string" != typeof o || !o.includes(e)) || (t instanceof Function ? t.call(this, o, ...n) : void 0);
                        }.bind(), e;
                    }(), i = new n.Error(r), c = new URL(self.location.href);
                    c.hash = "";
                    const a = /(.*?@)?(\S+)(:\d+):\d+\)?$/, s = [];
                    for (let e of n.String_split.call(i.stack, /[\n\r]+/)) {
                        if (e.includes(r)) continue;
                        e = e.trim();
                        const t = n.RegExp_exec.call(a, e);
                        if (null === t) continue;
                        let o = t[2];
                        o.startsWith("(") && (o = o.slice(1)), o === c.href ? o = "inlineScript" : o.startsWith("<anonymous>") && (o = "injectedScript");
                        let i = void 0 !== t[1] ? t[1].slice(0, -1) : e.slice(0, t.index).trim();
                        i.startsWith("at") && (i = i.slice(2).trim());
                        let l = t[3];
                        s.push(" " + `${i} ${o}${l}:1`.trim());
                    }
                    s[0] = "stackDepth:" + (s.length - 1);
                    const l = s.join("\t"), p = !0 !== e.matchAll && n.testPattern(e, l);
                    return ("all" === t || "match" === t && p || "nomatch" === t && !p) && n.uboLog(l.replace(/\t/g, "\n")), 
                    p;
                }(l, t)) return e.reflect();
            }
            if ("debug" === r) return e.reflect();
            if (c.uboLog(a, `Suppressed:\n${t.join("\n")}`), "abort" === r) throw new ReferenceError;
        }));
    }
    function t(e = "", o = "") {
        let n = globalThis, r = e;
        for (;;) {
            const e = r.indexOf(".");
            if (-1 === e) break;
            if (n = n[r.slice(0, e)], n instanceof Object == 0) return;
            r = r.slice(e + 1);
        }
        const i = n[r];
        if ("function" != typeof i) return;
        void 0 === t.CtorContext && (t.ctorContexts = [], t.CtorContext = class {
            constructor(...e) {
                this.init(...e);
            }
            init(e, t) {
                return this.callFn = e, this.callArgs = t, this;
            }
            reflect() {
                const e = Reflect.construct(this.callFn, this.callArgs);
                return this.callFn = this.callArgs = this.private = void 0, t.ctorContexts.push(this), 
                e;
            }
            static factory(...e) {
                return 0 !== t.ctorContexts.length ? t.ctorContexts.pop().init(...e) : new t.CtorContext(...e);
            }
        }, t.applyContexts = [], t.ApplyContext = class {
            constructor(...e) {
                this.init(...e);
            }
            init(e, t, o) {
                return this.callFn = e, this.thisArg = t, this.callArgs = o, this;
            }
            reflect() {
                const e = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                return this.callFn = this.thisArg = this.callArgs = this.private = void 0, t.applyContexts.push(this), 
                e;
            }
            static factory(...e) {
                return 0 !== t.applyContexts.length ? t.applyContexts.pop().init(...e) : new t.ApplyContext(...e);
            }
        });
        const c = i.toString(), a = function() {
            return c;
        }.bind(null), s = {
            apply: (e, n, r) => o(t.ApplyContext.factory(e, n, r)),
            get: (e, t) => "toString" === t ? a : Reflect.get(e, t)
        };
        i.prototype?.constructor === i && (s.construct = function(e, n) {
            return o(t.CtorContext.factory(e, n));
        }), n[r] = new Proxy(i, s);
    }
    function o() {
        if (n.safeSelf) return n.safeSelf;
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
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== n ? {
                    re: new this.RegExp(n[1], n[2] || t.flags),
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
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === n) {
                    const n = this.escapeRegexChars(e);
                    return new RegExp(o ? `^${n}$` : n, t);
                }
                try {
                    return new RegExp(n[1], n[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, t = 0) {
                const o = e.slice(t).reduce(((e, t, o, n) => {
                    if (0 == (1 & o)) {
                        const t = n[o + 1], r = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ n[o], r ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(o);
            },
            onIdle: (t, o) => e.requestIdleCallback ? e.requestIdleCallback(t, o) : e.requestAnimationFrame(t),
            offIdle: t => e.requestIdleCallback ? e.cancelIdleCallback(t) : e.cancelAnimationFrame(t)
        };
        if (n.safeSelf = t, void 0 === n.bcSecret) return t;
        t.logLevel = n.logLevel || 1;
        let o = "", r = "", i = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const n = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return n === r && e === o && Date.now() - i < 5e3 ? void 0 : (o = e, r = n, i = Date.now(), 
            n);
        };
        try {
            const o = new e.BroadcastChannel(n.bcSecret);
            let r = [];
            t.sendToLogger = (e, ...n) => {
                const i = t.toLogText(e, ...n);
                if (void 0 !== i) return void 0 === r ? o.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: i
                }) : void r.push({
                    type: e,
                    text: i
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
                const n = t.toLogText(e, ...o);
                void 0 !== n && t.log(`uBO ${n}`);
            };
        }
        return t;
    }
    const n = {}, r = [ [ "Document.prototype.querySelectorAll", '"/^#/"', "prevent", "/stackDepth:4.+nawNA/" ], [ "Document.prototype.querySelector", '"/^#/"', "prevent", "/stackDepth:4.+ inlineScript:2/" ], [ "Element.prototype.insertAdjacentHTML", '"afterbegin"', "prevent", "/\\/[A-Za-z]+\\.min\\.js\\?/" ], [ "eval", '"/chp_?ad/"' ], [ "eval", '"/chp_?ad/"', "prevent" ], [ "HTMLScriptElement.prototype.setAttribute", '"data-sdk"', "abort" ], [ "eval", '"adsBlocked"' ], [ "Storage.prototype.setItem", "searchCount" ], [ "fetch", '"flashtalking"' ], [ "DOMTokenList.prototype.add", '"-"' ], [ "HTMLScriptElement.prototype.setAttribute", '"data-cfasync"', "abort" ], [ "DOMTokenList.prototype.add", '"-"', "prevent", "stack", "/wp-content\\/uploads\\/[a-z]+\\/[a-z]+\\.js/" ], [ "navigator.sendBeacon", '"data.bilibili.com/log/"', "prevent" ] ], i = new Map([ [ "japscan.lol", [ 0, 1 ] ], [ "pvpoke-re.com", 2 ], [ "zegtrends.com", 3 ], [ "tea-coffee.net", 3 ], [ "spatsify.com", 3 ], [ "newedutopics.com", 3 ], [ "getviralreach.in", 3 ], [ "edukaroo.com", 3 ], [ "funkeypagali.com", 3 ], [ "careersides.com", 3 ], [ "nayisahara.com", 3 ], [ "wikifilmia.com", 3 ], [ "infinityskull.com", 3 ], [ "viewmyknowledge.com", 3 ], [ "iisfvirtual.in", 3 ], [ "starxinvestor.com", 3 ], [ "jkssbalerts.com", 3 ], [ "redfea.com", 3 ], [ "pranarevitalize.com", 3 ], [ "techyinfo.in", 3 ], [ "fitnessholic.net", 3 ], [ "moderngyan.com", 3 ], [ "sattakingcharts.in", 3 ], [ "bgmi32bitapk.in", 3 ], [ "bankshiksha.in", 3 ], [ "earn.mpscstudyhub.com", 3 ], [ "earn.quotesopia.com", 3 ], [ "money.quotesopia.com", 3 ], [ "best-mobilegames.com", 3 ], [ "learn.moderngyan.com", 3 ], [ "bharatsarkarijobalert.com", 3 ], [ "quotesopia.com", 3 ], [ "creditsgoal.com", 3 ], [ "ikramlar.online", 3 ], [ "headlinerpost.com", 3 ], [ "posterify.net", 3 ], [ "whatgame.xyz", 3 ], [ "mooonten.com", 3 ], [ "msic.site", 3 ], [ "fx-22.com", 3 ], [ "gold-24.net", 3 ], [ "forexrw7.com", 3 ], [ "mtcremix.com", 3 ], [ "advicefunda.com", 3 ], [ "bestloanoffer.net", 3 ], [ "computerpedia.in", 3 ], [ "techconnection.in", 3 ], [ "bollywoodchamp.in", 3 ], [ "texw.online", 3 ], [ "kiemlua.com", 3 ], [ "link1s.com", 3 ], [ "bloggingguidance.com", 3 ], [ "onroid.com", 3 ], [ "mathcrave.com", 3 ], [ "intro-hd.net", 3 ], [ "richtoscan.com", 3 ], [ "tainguyenmienphi.com", 3 ], [ "questloops.com", 3 ], [ "wvt.free.nf", 3 ], [ "appnee.com", 3 ], [ "nxbrew.net", 4 ], [ "tresdaos.com", 4 ], [ "cinema.com.my", 5 ], [ "allcelebspics.com", 6 ], [ "alttyab.net", 6 ], [ "an1me.*", 6 ], [ "androjungle.com", 6 ], [ "arkadmin.fr", 6 ], [ "azoranov.com", 6 ], [ "barranquillaestereo.com", 6 ], [ "brasilsimulatormods.com", 6 ], [ "cambrevenements.com", 6 ], [ "cartoonstvonline.com", 6 ], [ "comparili.net", 6 ], [ "diaobe.net", 6 ], [ "filegajah.com", 6 ], [ "filmestorrent.tv", 6 ], [ "franceprefecture.fr", 6 ], [ "freecricket.net", 6 ], [ "gcpainters.com", 6 ], [ "germanvibes.org", 6 ], [ "getmaths.co.uk", 6 ], [ "gewinnspiele-markt.com", 6 ], [ "hamzag.com", 6 ], [ "hannibalfm.net", 6 ], [ "hornyconfessions.com", 6 ], [ "ilcamminodiluce.it", 6 ], [ "joguinhosgratis.com", 6 ], [ "joziporn.com", 6 ], [ "justpaste.top", 6 ], [ "mctechsolutions.in", 6 ], [ "medibok.se", 6 ], [ "megafire.net", 6 ], [ "mirrorpoi.my.id", 6 ], [ "mockuphunts.com", 6 ], [ "mortaltech.com", 6 ], [ "multivideodownloader.com", 6 ], [ "nauci-engleski.com", 6 ], [ "nauci-njemacki.com", 6 ], [ "nekopoi.my.id", 6 ], [ "nuketree.com", 6 ], [ "pa1n.xyz", 6 ], [ "papafoot.*", 6 ], [ "playertv.net", 6 ], [ "programsolve.com", 6 ], [ "radio-deejay.com", 6 ], [ "ranaaclanhungary.com", 6 ], [ "rasoi.me", 6 ], [ "riprendiamocicatania.com", 6 ], [ "rsrlink.in", 6 ], [ "seriesperu.com", 6 ], [ "shmapp.ca", 6 ], [ "sub2unlocker.com", 6 ], [ "romviet.com", 6 ], [ "skillmineopportunities.com", 6 ], [ "teczpert.com", 6 ], [ "totalsportek.app", 6 ], [ "tromcap.com", 6 ], [ "tv0800.com", 6 ], [ "tv3monde.com", 6 ], [ "ustrendynews.com", 6 ], [ "watchnow.fun", 6 ], [ "weashare.com", 6 ], [ "yelitzonpc.com", 6 ], [ "ymknow.xyz", 6 ], [ "shomareh-yab.ir", 7 ], [ "cimanow.cc", 8 ], [ "freex2line.online", 8 ], [ "evaki.fun", 9 ], [ "sportshub.to", 9 ], [ "sportnews.to", 9 ], [ "bebasbokep.online", 10 ], [ "asianboy.fans", 11 ], [ "bilibili.com", 12 ] ]), c = new Map([]), a = (e, t, o) => {
        let n = t.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) o.add(e); else o.add(n);
    }, l = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const o = e.lastIndexOf("://");
            if (-1 === o) return;
            const n = e.slice(o + 3), r = n.indexOf(":");
            return {
                hn: -1 === r ? n : n.slice(0, r),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === l.length) return;
    const p = new Set, m = new Set;
    ((e, t = "") => {
        const o = e.split("."), n = o.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${o.slice(e).join(".")}${t}`;
                a(n, i, p), a(n, c, m);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let r = e; r > n; r--) {
                    const e = `${o.slice(n, r).join(".")}.*${t}`;
                    a(e, i, p), a(e, c, m);
                }
            }
        }
    })(l[0].hn);
    for (const t of p) if (!m.has(t)) try {
        e(...r[t]);
    } catch {}
}();