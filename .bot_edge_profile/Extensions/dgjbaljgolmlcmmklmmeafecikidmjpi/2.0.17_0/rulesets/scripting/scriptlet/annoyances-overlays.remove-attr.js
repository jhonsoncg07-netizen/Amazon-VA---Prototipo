!function() {
    function e(e = "", t = "", n = "") {
        if ("string" != typeof e) return;
        if ("" === e) return;
        const r = o(), c = r.makeLogPrefix("remove-attr", e, t, n), a = r.String_split.call(e, /\s*\|\s*/), s = a.map((e => `${t}[${CSS.escape(e)}]`)).join(",");
        r.logLevel > 1 && r.uboLog(c, `Target selector:\n\t${s}`);
        const l = /\basap\b/.test(n);
        let i;
        const m = () => {
            void 0 !== i && (r.offIdle(i), i = void 0);
            try {
                const e = document.querySelectorAll(s);
                for (const o of e) for (const e of a) !1 !== o.hasAttribute(e) && (o.removeAttribute(e), 
                r.uboLog(c, `Removed attribute '${e}'`));
            } catch {}
        }, u = e => {
            if (void 0 !== i) return;
            let o = !0;
            for (let t = 0; t < e.length && o; t++) {
                const {type: n, addedNodes: r, removedNodes: c} = e[t];
                "attributes" === n && (o = !1);
                for (let e = 0; e < r.length && o; e++) if (1 === r[e].nodeType) {
                    o = !1;
                    break;
                }
                for (let e = 0; e < c.length && o; e++) if (1 === c[e].nodeType) {
                    o = !1;
                    break;
                }
            }
            o || (l ? m() : void 0 === i && (i = r.onIdle((() => {
                i = void 0, m();
            }), {
                timeout: 17
            })));
        };
        !function(e, t) {
            const n = e => {
                const o = {
                    loading: 1,
                    asap: 1,
                    interactive: 2,
                    end: 2,
                    2: 2,
                    complete: 3,
                    idle: 3,
                    3: 3
                }, t = Array.isArray(e) ? e : [ e ];
                for (const e of t) {
                    const t = `${e}`;
                    if (!1 !== Object.hasOwn(o, t)) return o[t];
                }
                return 0;
            }, r = n(t);
            if (n(document.readyState) >= r) return void e();
            const a = o(), s = [ "readystatechange", () => {
                n(document.readyState) < r || (e(), a.removeEventListener.apply(document, s));
            }, {
                capture: !0
            } ];
            a.addEventListener.apply(document, s);
        }((() => {
            m(), !1 !== /\bstay\b/.test(n) && new MutationObserver(u).observe(document, {
                attributes: !0,
                attributeFilter: a,
                childList: !0,
                subtree: !0
            });
        }), r.String_split.call(n, /\s+/));
    }
    function o() {
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
            initPattern(e, o = {}) {
                if ("" === e) return {
                    matchAll: !0,
                    expect: !0
                };
                const t = !0 !== o.canNegate || !1 === e.startsWith("!");
                !1 === t && (e = e.slice(1));
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                return null !== n ? {
                    re: new this.RegExp(n[1], n[2] || o.flags),
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
                const n = /^\/(.+)\/([gimsu]*)$/.exec(e);
                if (null === n) {
                    const n = this.escapeRegexChars(e);
                    return new RegExp(t ? `^${n}$` : n, o);
                }
                try {
                    return new RegExp(n[1], n[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(e, o = 0) {
                const t = e.slice(o).reduce(((e, o, t, n) => {
                    if (0 == (1 & t)) {
                        const o = n[t + 1], r = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                        e.push([ n[t], r ]);
                    }
                    return e;
                }), []);
                return this.Object_fromEntries(t);
            },
            onIdle: (o, t) => e.requestIdleCallback ? e.requestIdleCallback(o, t) : e.requestAnimationFrame(o),
            offIdle: o => e.requestIdleCallback ? e.cancelIdleCallback(o) : e.cancelAnimationFrame(o)
        };
        if (t.safeSelf = o, void 0 === t.bcSecret) return o;
        o.logLevel = t.logLevel || 1;
        let n = "", r = "", c = 0;
        o.toLogText = (e, ...o) => {
            if (0 === o.length) return;
            const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
            return t === r && e === n && Date.now() - c < 5e3 ? void 0 : (n = e, r = t, c = Date.now(), 
            t);
        };
        try {
            const n = new e.BroadcastChannel(t.bcSecret);
            let r = [];
            o.sendToLogger = (e, ...t) => {
                const c = o.toLogText(e, ...t);
                if (void 0 !== c) return void 0 === r ? n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: c
                }) : void r.push({
                    type: e,
                    text: c
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: e, text: o}) => n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: o
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    o.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    o.logLevel = 2;
                }
            }, n.postMessage("areyouready?");
        } catch {
            o.sendToLogger = (e, ...t) => {
                const n = o.toLogText(e, ...t);
                void 0 !== n && o.log(`uBO ${n}`);
            };
        }
        return o;
    }
    const t = {}, n = [ [ "oncontextmenu" ], [ "onmousedown|onselectstart", "#kol_content", "complete" ], [ "oncopy" ], [ "onselectstart" ], [ "oncontextmenu|oncopy|ondragstart|onselect|onselectstart", "body", "complete" ], [ "oncontextmenu|ondragstart|onselectstart" ], [ "oncontextmenu|ondragstart|onselectstart|onkeydown" ], [ "oncontextmenu|onselectstart" ], [ "oncontextmenu|onselectstart|ondragstart" ], [ "oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart" ], [ "oncontextmenu|onselectstart|onselect|oncopy" ], [ "oncontextmenu|onkeydown|onmousedown" ], [ "oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy" ], [ "onselectstart|ondragstart" ], [ "oncontextmenu", "body", "complete" ], [ "oncontextmenu|onCopy" ], [ "oncontextmenu|onmousedown|onselectstart" ], [ "oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown" ], [ "oncontextmenu|onkeydown" ], [ "onkeydown" ], [ "ondragstart|onselectstart" ], [ "ondrop|ondragstart" ], [ "onselectstart|ondragstart|oncontextmenu", "div.story_text", "complete" ], [ "oncontextmenu|ondragstart" ], [ "onmousemove|ondragstart|onselectstart|oncontextmenu", "body" ], [ "oncontextmenu", "body" ], [ "onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu", "body" ], [ "oncontextmenu|onselectstart|ondragstart|onclick" ], [ "style", "div#novelBoby", "stay" ], [ "oncontextmenu|onMouseDown|style" ], [ "ondragstart|oncontextmenu" ], [ "onContextMenu", "body" ], [ "onkeydown|oncontextmenu", "body" ], [ "oncontextmenu|oncopy" ], [ "oncontextmenu|onselectstart|style", "#body_game" ], [ "oncontextmenu|onselectstart|onselect|ondragstart|ondrag", "body" ], [ "oncontextmenu|ondragstart|onselectstart", "body" ], [ "oncontextmenu|onselectstart|onmousedown", "body" ], [ "oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint", "body" ], [ "oncontextmenu|onselectstart", "body" ], [ "oncontextmenu|onDragStart|onSelectStart" ], [ "oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut" ], [ "oncopy|oncontextmenu", "body" ], [ "oncontextmenu|ondragstart|oncopy|oncut", ".select-none", "stay" ], [ "oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload" ], [ "oncontextmenu|onDragStart|onselectstart" ], [ "oncontextmenu|onkeydown|onselectstart", "body" ], [ "oncopy|oncontextmenu|oncut|onpaste", "input" ], [ "oncontextmenu|oncopy|onselectstart" ], [ "onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart" ], [ "oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|style", "body" ], [ "style", 'body[style="user-select: none;"]', "stay" ], [ "oncopy|oncut|onselectstart|style|unselectable", "body", "stay" ], [ "oncontextmenu|onselectstart|oncut|oncopy" ], [ "oncontextmenu|ondragstart|onselect" ], [ "onpaste", "#tr_mesaj > td > .text-input.validate\\[required\\]" ], [ "oncontextmenu|onkeydown|onselectstart" ], [ "oncontextmenu|ondragstart|ondrop|onselectstart", "[oncontextmenu]", "complete" ], [ "oncontextmenu", "#VdoPlayerDiv" ], [ "oncontextmenu", "a#download_link", "stay" ], [ "oncontextmenu", "html" ], [ "oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup" ], [ "onContextmenu|onMouseDown|onSelectStart" ], [ "oncontextmenu|onmousedown|onselectstart", ".all-lyrics" ], [ "oncontextmenu|ondragstart|onselectstart", "body", "complete" ], [ "oncontextmenu", 'img[oncontextmenu="return false;"]', "stay" ], [ "onselectstart", "body" ], [ "onclick", '[onclick="myFunction()"]' ], [ "oncontextmenu", '[oncontextmenu="return false;"]' ], [ "oncontextmenu|ondragstart", "", "complete" ], [ "oncontextmenu|ondragstart|onselectstart|onload|onblur" ], [ "oncopy|oncut" ], [ "onselectstart", "html[onselectstart]" ], [ "oncontextmenu|oncopy|oncut", '[id^="chapter"]', "complete" ], [ "oncontextmenu|oncopy|onselectstart", "body", "complete" ], [ "onselectstart|oncopy", "body", "complete" ], [ "onselectstart", "", "stay" ] ], r = new Map([ [ "pelispedia.*", 0 ], [ "nulled.life", 0 ], [ "liveonsat.com", 0 ], [ "ligowiec.net", 0 ], [ "radio5.com.pl", 0 ], [ "romet.pl", 0 ], [ "sat-charts.eu", 0 ], [ "trentino.pl", 0 ], [ "pcpobierz.pl", 0 ], [ "animeunity.it", 0 ], [ "megawypas.com", 0 ], [ "meteo.org.pl", 0 ], [ "banglainsider.com", 0 ], [ "listatv.pl", 0 ], [ "megatube.xxx", 0 ], [ "elektro-plast.com.pl", 0 ], [ "adnan-tech.com", 0 ], [ "nzbstars.com", 0 ], [ "nogizaka46.com", 0 ], [ "suedkurier.de", 0 ], [ "utamap.com", 0 ], [ "hienzo.com", 0 ], [ "debeste.de", 0 ], [ "courseware.cemc.uwaterloo.ca", 0 ], [ "sekai-kabuka.com", 0 ], [ "daum.net", 0 ], [ "fraudnavi.com", 0 ], [ "zdravenportal.eu", 0 ], [ "wasza-farma.pl", 0 ], [ "goalup.live", 0 ], [ "promotor-poz.kylos.pl", 0 ], [ "img999.com", 0 ], [ "wattpad.com", 0 ], [ "articlesmania.me", 0 ], [ "aepos.ap.gov.in", 0 ], [ "mocah.org", 0 ], [ "matzoo.pl", 0 ], [ "warning.or.kr", 0 ], [ "terramirabilis.ro", 0 ], [ "smartkhabrinews.com", 0 ], [ "sportsupa.com", 0 ], [ "hoca4u.com", 0 ], [ "4kwebplay.xyz", 0 ], [ "qqwebplay.xyz", 0 ], [ "lewblivehdplay.ru", 0 ], [ "claplivehdplay.ru", 0 ], [ "tutlehd4.com", 0 ], [ "viwlivehdplay.ru", 0 ], [ "kolnovel.org", 1 ], [ "ebc.com.br", 2 ], [ "pandurul.ro", 2 ], [ "livetennis.it", 3 ], [ "djelfa.info", 3 ], [ "virpe.com", 3 ], [ "seoul.cs.land.to", 3 ], [ "utorrentgamesps2.blogspot.com", 3 ], [ "book.zongheng.com", 3 ], [ "shumilou.com", 3 ], [ "virpe.cc", 3 ], [ "skionline.*", 4 ], [ "singingdalong.blogspot.com", 5 ], [ "neobux.com", 5 ], [ "dba-oracle.com", 5 ], [ "giromarilia.com.br", 5 ], [ "northumberland-walks.co.uk", 5 ], [ "foodviva.com", 5 ], [ "shushan.zhangyue.net", 5 ], [ "elahmad.com", 5 ], [ "epitesti.ro", 5 ], [ "uwayapply.com", 5 ], [ "apornstories.com", 6 ], [ "filmesonlinex.co", 6 ], [ "j-lyric.net", 7 ], [ "utaten.com", 7 ], [ "as-selection.net", 7 ], [ "tohkaishimpo.com", 7 ], [ "iwanichi.co.jp", 7 ], [ "runningnews.gr", 8 ], [ "mainframegurukul.com", 8 ], [ "clasicotas.org", 8 ], [ "nostracasa.com.br", 8 ], [ "enjoytaiwan.co.kr", 8 ], [ "tercihiniyap.net", 8 ], [ "gukjenews.com", 8 ], [ "ohli365.vip", 8 ], [ "insurance-corporate.blogspot.com", 9 ], [ "gezimanya.com", 10 ], [ "cepuluh.com", 11 ], [ "tekloggers.com", 11 ], [ "theitaliantimes.it", 12 ], [ "hebrew4christians.com", 13 ], [ "musixmatch.com", 14 ], [ "wouterplanet.com", 14 ], [ "hansa-online.de", 14 ], [ "wasserstoff-leitprojekte.de", 14 ], [ "ryuryuko.blog90.fc2.com", 15 ], [ "mdpr.jp", 16 ], [ "japan-academy-prize.jp", 16 ], [ "citpekalongan.com", 17 ], [ "atribuna.com.br", 18 ], [ "vinaurl.*", 19 ], [ "newsforbolly.org", 19 ], [ "coinurl.net", 19 ], [ "diariodoiguacu.com.br", 20 ], [ "metropoliaztm.pl", 21 ], [ "quotev.com", 22 ], [ "nekopoi.web.id", 23 ], [ "sopot.net", 24 ], [ "tv-asahi.co.jp", 25 ], [ "erovideoseek.com", 25 ], [ "kyonyuquest.com", 25 ], [ "katosatoshi.jp", 25 ], [ "kuroko-analyze.com", 25 ], [ "gats.io", 25 ], [ "promotor.pl", 25 ], [ "bikesell.co.kr", 25 ], [ "news.dwango.jp", 25 ], [ "urbharat.xyz", 25 ], [ "miraculous.to", 25 ], [ "cdn.gamemonetize.com", 25 ], [ "aztravels.net", 25 ], [ "downfile.site", 25 ], [ "memangbau.com", 25 ], [ "trangchu.news", 25 ], [ "umk.co.jp", 25 ], [ "streamservicehd.click", 25 ], [ "eplayer.click", 25 ], [ "olacast.live", 25 ], [ "kamerabudaya.com", 26 ], [ "visaonoticias.com", 27 ], [ "alphapolis.co.jp", 28 ], [ "money-sense.club", 29 ], [ "kanjukulive.com", 30 ], [ "radichubu.jp", 31 ], [ "texte.work", 32 ], [ "railf.jp", 33 ], [ "spectank.jp", 33 ], [ "mhwg.org", 34 ], [ "anauk.net", 35 ], [ "bonobono.com", 36 ], [ "rdsong.com", 36 ], [ "poplinks.idolmaster-official.jp", 37 ], [ "bdb.com.pl", 38 ], [ "kijyomatome-ch.com", 39 ], [ "globaledu.jp", 39 ], [ "loveplay123.com", 40 ], [ "th-world.com", 41 ], [ "korona.co.jp", 42 ], [ "novelism.jp", 43 ], [ "myhtebooks.com", 44 ], [ "pixnet.net", 45 ], [ "foxaholic.com", 46 ], [ "auth.alipay.com", 47 ], [ "30edu.com.cn", 48 ], [ "doc.mbalib.com", 49 ], [ "perangkatguruku.com", 50 ], [ "naaree.com", 51 ], [ "gardenia.net", 52 ], [ "c315.cn", 53 ], [ "uemeds.cn", 54 ], [ "pttws.ptt.gov.tr", 55 ], [ "leeyiding.com", 56 ], [ "novelpia.com", 57 ], [ "veblr.com", 58 ], [ "thememypc.net", 59 ], [ "ask4movie.*", 60 ], [ "gakki.me", 61 ], [ "tunegate.me", 62 ], [ "oricon.co.jp", 63 ], [ "lover93.net", 64 ], [ "fantasytagtree.com", 65 ], [ "selfstudys.com", 66 ], [ "myfreemp3juices.cc", 67 ], [ "welovemanga.one", 68 ], [ "animefire.plus", 69 ], [ "mrbenne.com", 70 ], [ "xossipy.com", 71 ], [ "esscctv.com", 72 ], [ "foxteller.com", 73 ], [ "blindhelp.net", 74 ], [ "smalley.com", 75 ], [ "ofertecatalog.ro", 76 ] ]), c = new Map([]), a = (e, o, t) => {
        let n = o.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) t.add(e); else t.add(n);
    }, l = (() => {
        const e = document.location, o = [ e.origin ];
        return e.ancestorOrigins && o.push(...e.ancestorOrigins), o.map(((e, o) => {
            const t = e.lastIndexOf("://");
            if (-1 === t) return;
            const n = e.slice(t + 3), r = n.indexOf(":");
            return {
                hn: -1 === r ? n : n.slice(0, r),
                i: o
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === l.length) return;
    const i = new Set, m = new Set;
    ((e, o = "") => {
        const t = e.split("."), n = t.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${t.slice(e).join(".")}${o}`;
                a(n, r, i), a(n, c, m);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let s = e; s > n; s--) {
                    const e = `${t.slice(n, s).join(".")}.*${o}`;
                    a(e, r, i), a(e, c, m);
                }
            }
        }
    })(l[0].hn);
    for (const o of i) if (!m.has(o)) try {
        e(...n[o]);
    } catch {}
}();