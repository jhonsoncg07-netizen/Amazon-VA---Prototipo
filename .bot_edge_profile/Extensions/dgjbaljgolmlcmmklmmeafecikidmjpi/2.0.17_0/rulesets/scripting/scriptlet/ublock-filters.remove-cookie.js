!function() {
    function e(e = "") {
        if ("string" != typeof e) return;
        const t = function() {
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
            if (o.safeSelf = t, void 0 === o.bcSecret) return t;
            t.logLevel = o.logLevel || 1;
            let n = "", r = "", c = 0;
            t.toLogText = (e, ...o) => {
                if (0 === o.length) return;
                const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                return t === r && e === n && Date.now() - c < 5e3 ? void 0 : (n = e, r = t, c = Date.now(), 
                t);
            };
            try {
                const n = new e.BroadcastChannel(o.bcSecret);
                let r = [];
                t.sendToLogger = (e, ...o) => {
                    const c = t.toLogText(e, ...o);
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
                        t.logLevel = 1;
                        break;

                      case "setScriptletLogLevelToTwo":
                        t.logLevel = 2;
                    }
                }, n.postMessage("areyouready?");
            } catch {
                t.sendToLogger = (e, ...o) => {
                    const n = t.toLogText(e, ...o);
                    void 0 !== n && t.log(`uBO ${n}`);
                };
            }
            return t;
        }(), n = t.patternToRegex(e), r = t.getExtraArgs(Array.from(arguments), 1), c = (e, o = 500) => {
            void 0 === c.timer && (c.timer = setTimeout((() => {
                c.timer = void 0, e();
            }), o));
        }, s = new URL(document.baseURI);
        let i = r.domain;
        if (i && /^\/.+\//.test(i)) {
            const e = new RegExp(i.slice(1, -1)).exec(s.hostname);
            i = e ? e[0] : void 0;
        }
        const a = () => {
            t.String_split.call(document.cookie, ";").forEach((e => {
                const o = e.indexOf("=");
                if (-1 === o) return;
                const t = e.slice(0, o).trim();
                if (!1 === n.test(t)) return;
                const r = t + "=", c = `; domain=${s.hostname}`, a = `; domain=.${s.hostname}`;
                let m, l;
                if (i) m = `; domain=${i}`, l = `; domain=.${i}`; else if (document.domain) {
                    const e = document.domain;
                    e !== s.hostname && (m = `; domain=.${e}`), e.startsWith("www.") && (l = `; domain=${e.replace("www", "")}`);
                }
                const d = "; path=/", h = "; Max-Age=-1000; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = r + h, document.cookie = r + c + h, document.cookie = r + a + h, 
                document.cookie = r + d + h, document.cookie = r + c + d + h, document.cookie = r + a + d + h, 
                void 0 !== m && (document.cookie = r + m + d + h), void 0 !== l && (document.cookie = r + l + d + h);
            }));
        };
        if (a(), window.addEventListener("beforeunload", a), "string" != typeof r.when) return;
        const m = [ "scroll", "keydown" ], l = t.String_split.call(r.when, /\s/);
        for (const e of l) !1 !== m.includes(e) && document.addEventListener(e, (() => {
            c(a);
        }), {
            passive: !0
        });
    }
    const o = {}, t = [ [ "didomi_token" ], [ "da325" ], [ "ref_cookie" ], [ "/^/" ], [ "PageCount" ], [ "__adblocker" ], [], [ "qusnyQusny" ], [ "/vs|to|vs_spon|tgpOut|current_click/" ], [ "ab" ], [ "video_view_count" ], [ "/__adblocker|ccuid/" ], [ "videoPlayedNumber" ], [ "realm.cookiesAndJavascript" ], [ "kt_qparams" ], [ "kt_referer" ], [ "blaize_tracking_id" ], [ "akaclientip" ], [ "hive_geoloc" ], [ "MicrosoftApplicationsTelemetryDeviceId" ], [ "MicrosoftApplicationsTelemetryFirstLaunchTime" ], [ "/optimizelyEndUserId|s_fid|sc_tcr|s_cc/" ], [ "_boundless_tracking_id" ], [ "/LithiumVisitor|ValueSurveyVisitorCount|VISITOR_BEACON/" ], [ "kt_ips" ], [ "/^(_pc|cX_)/", "when", "scroll keydown" ], [ "/^AMCVS?_/" ], [ "disqus_unique", "when", "scroll keydown" ], [ "/_shopify_(y|sa_)/", "when", "scroll keydown" ], [ "/ana_client_session_id|wshh_uid/" ], [ "fly_vid", "when", "scroll keydown" ], [ "/^(ev|vocuser)_/", "when", "scroll keydown" ], [ "gtagSessionId" ], [ "/^_pubcid|sbgtvNonce|SUID/" ], [ "ajs_anonymous_id", "when", "scroll keydown" ], [ "/_HFID|mosb/" ], [ "/ppid$/" ], [ "/ph_phc|remark_lead/", "when", "scroll keydown" ], [ "/incap_|s_fid/", "when", "scroll keydown" ], [ "/articlesRead|previousPage/" ], [ "ahoy_visitor" ], [ "ahoy_visit" ], [ "/_alooma/" ], [ "/_vf|mantisid|pbjs_/" ], [ "/^DEVICEFP/" ], [ "/^_pk_/" ], [ "_pc_private" ], [ "_vid_t" ], [ "/^(_tccl_|_scc_session|fpfid)/" ], [ "/^AMP_/" ], [ "/_shopify_y|yotpo_pixel/", "when", "scroll keydown" ] ], n = new Map([ [ "tv5mondeplus.com", 0 ], [ "zootube1.com", 1 ], [ "subdivx.com", 2 ], [ "adultasianporn.com", 3 ], [ "jetpunk.com", 4 ], [ "blick.ch", 5 ], [ "xxxxsx.com", 6 ], [ "seznam.cz", 7 ], [ "sexvideos.host", 8 ], [ "nexusmods.com", 9 ], [ "fullxh.com", 10 ], [ "galleryxh.site", 10 ], [ "megaxh.com", 10 ], [ "movingxh.world", 10 ], [ "seexh.com", 10 ], [ "unlockxh4.com", 10 ], [ "valuexh.life", 10 ], [ "xhaccess.com", 10 ], [ "xhadult2.com", 10 ], [ "xhadult3.com", 10 ], [ "xhadult4.com", 10 ], [ "xhadult5.com", 10 ], [ "xhamster.*", 10 ], [ "xhamster1.*", 10 ], [ "xhamster10.*", 10 ], [ "xhamster11.*", 10 ], [ "xhamster12.*", 10 ], [ "xhamster13.*", 10 ], [ "xhamster14.*", 10 ], [ "xhamster15.*", 10 ], [ "xhamster16.*", 10 ], [ "xhamster17.*", 10 ], [ "xhamster18.*", 10 ], [ "xhamster19.*", 10 ], [ "xhamster20.*", 10 ], [ "xhamster2.*", 10 ], [ "xhamster3.*", 10 ], [ "xhamster4.*", 10 ], [ "xhamster42.*", 10 ], [ "xhamster46.com", 10 ], [ "xhamster5.*", 10 ], [ "xhamster7.*", 10 ], [ "xhamster8.*", 10 ], [ "xhamsterporno.mx", 10 ], [ "xhbig.com", 10 ], [ "xhbranch5.com", 10 ], [ "xhchannel.com", 10 ], [ "xhdate.world", 10 ], [ "xhday.com", 10 ], [ "xhday1.com", 10 ], [ "xhlease.world", 10 ], [ "xhmoon5.com", 10 ], [ "xhofficial.com", 10 ], [ "xhopen.com", 10 ], [ "xhplanet1.com", 10 ], [ "xhplanet2.com", 10 ], [ "xhreal2.com", 10 ], [ "xhreal3.com", 10 ], [ "xhspot.com", 10 ], [ "xhtotal.com", 10 ], [ "xhtree.com", 10 ], [ "xhvictory.com", 10 ], [ "xhwebsite.com", 10 ], [ "xhwebsite2.com", 10 ], [ "xhwebsite5.com", 10 ], [ "xhwide1.com", 10 ], [ "xhwide2.com", 10 ], [ "xhwide5.com", 10 ], [ "laurelberninteriors.com", 11 ], [ "azmen.com", 12 ], [ "beaumontenterprise.com", 13 ], [ "chron.com", 13 ], [ "ctinsider.com", 13 ], [ "ctpost.com", 13 ], [ "expressnews.com", 13 ], [ "houstonchronicle.com", 13 ], [ "lmtonline.com", 13 ], [ "middletownpress.com", 13 ], [ "mrt.com", 13 ], [ "newstimes.com", 13 ], [ "nhregister.com", 13 ], [ "registercitizen.com", 13 ], [ "sfchronicle.com", 13 ], [ "stamfordadvocate.com", 13 ], [ "thehour.com", 13 ], [ "timesunion.com", 13 ], [ "heavyfetish.com", [ 14, 15, 24 ] ], [ "columbian.com", 16 ], [ "pagesix.com", 16 ], [ "factable.com", [ 17, 18 ] ], [ "bing.com", 19 ], [ "msn.com", 19 ], [ "web.skype.com", [ 19, 20 ] ], [ "1und1.de", 21 ], [ "boundless.com", 22 ], [ "community.fortinet.com", 23 ], [ "camhub.cc", 24 ], [ "kissjav.*", 24 ], [ "severeporn.com", 24 ], [ "shemale6.com", 24 ], [ "watchporn.to", 24 ], [ "bizjournals.com", [ 25, 26 ] ], [ "businessinsider.de", 25 ], [ "computerbild.de", 25 ], [ "disqus.com", 27 ], [ "ozlosleep.com", 28 ], [ "worldstar.com", 29 ], [ "cbsnews.com", 30 ], [ "diariovasco.com", 31 ], [ "lifehacker.com", 32 ], [ "katu.com", 33 ], [ "miro.com", 34 ], [ "popularmechanics.com", 35 ], [ "businessinsider.jp", 36 ], [ "darntough.com", 37 ], [ "swissotel.com", 38 ], [ "androidpolice.com", 39 ], [ "makeuseof.com", 39 ], [ "movieweb.com", 39 ], [ "xda-developers.com", 39 ], [ "dev.to", [ 40, 41 ] ], [ "vpnmentor.com", 42 ], [ "mirror.co.uk", 43 ], [ "www.hoyolab.com", 44 ], [ "www.hoyoverse.com", 44 ], [ "liquipedia.net", 45 ], [ "thehindu.com", 46 ], [ "farmersjournal.ie", 47 ], [ "souq-design.com", 48 ], [ "abs-cbn.com", 49 ], [ "edikted.com", 50 ] ]), r = new Map([]), c = (e, o, t) => {
        let n = o.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) t.add(e); else t.add(n);
    }, i = (() => {
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
    if (0 === i.length) return;
    const a = new Set, m = new Set;
    ((e, o = "") => {
        const t = e.split("."), s = t.length;
        if (0 !== s) {
            for (let e = 0; e < s; e++) {
                const s = `${t.slice(e).join(".")}${o}`;
                c(s, n, a), c(s, r, m);
            }
            {
                const e = s - 1;
                for (let s = 0; s < e; s++) for (let i = e; i > s; i--) {
                    const e = `${t.slice(s, i).join(".")}.*${o}`;
                    c(e, n, a), c(e, r, m);
                }
            }
        }
    })(i[0].hn);
    for (const o of a) if (!m.has(o)) try {
        e(...t[o]);
    } catch {}
}();