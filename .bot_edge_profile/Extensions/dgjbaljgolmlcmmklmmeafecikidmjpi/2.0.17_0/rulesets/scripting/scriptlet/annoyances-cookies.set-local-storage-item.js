!function() {
    function e(e = "", t = "") {
        !function(e = "local", t = !1, c = "", r = "") {
            if ("" === c) return;
            "emptyArr" === r ? r = "[]" : "emptyObj" === r && (r = "{}");
            const a = [ "", "undefined", "null", "{}", "[]", '""', "$remove$", "accept", "reject", "accepted", "rejected", "notaccepted", "allow", "disallow", "deny", "allowed", "denied", "approved", "disapproved", "checked", "unchecked", "dismiss", "dismissed", "enable", "disable", "enabled", "disabled", "essential", "nonessential", "forbidden", "forever", "hide", "hidden", "necessary", "required", "ok", "on", "off", "true", "t", "false", "f", "yes", "y", "no", "n", "all", "none", "functional", "granted", "done", "decline", "declined", "closed", "next", "mandatory", "disagree", "agree" ];
            if (t) r.includes("$now$") && (r = r.replaceAll("$now$", Date.now())), r.includes("$currentDate$") && (r = r.replaceAll("$currentDate$", `${Date()}`)), 
            r.includes("$currentISODate$") && (r = r.replaceAll("$currentISODate$", (new Date).toISOString())); else {
                const e = r.toLowerCase(), o = /^("?)(.+)\1$/.exec(e), t = o && o[2] || e;
                if (!1 === a.includes(t)) {
                    if (!1 === /^-?\d+$/.test(t)) return;
                    const e = parseInt(t, 10) || 0;
                    if (e < -32767 || e > 32767) return;
                }
            }
            try {
                const t = self[`${e}Storage`];
                if ("$remove$" === r) {
                    const r = function() {
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
                                const c = /^\/(.+)\/([gimsu]*)$/.exec(e);
                                return null !== c ? {
                                    re: new this.RegExp(c[1], c[2] || o.flags),
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
                                const c = /^\/(.+)\/([gimsu]*)$/.exec(e);
                                if (null === c) {
                                    const c = this.escapeRegexChars(e);
                                    return new RegExp(t ? `^${c}$` : c, o);
                                }
                                try {
                                    return new RegExp(c[1], c[2] || void 0);
                                } catch {}
                                return /^/;
                            },
                            getExtraArgs(e, o = 0) {
                                const t = e.slice(o).reduce(((e, o, t, c) => {
                                    if (0 == (1 & t)) {
                                        const o = c[t + 1], r = /^\d+$/.test(o) ? parseInt(o, 10) : o;
                                        e.push([ c[t], r ]);
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
                        let c = "", r = "", a = 0;
                        t.toLogText = (e, ...o) => {
                            if (0 === o.length) return;
                            const t = `[${document.location.hostname || document.location.href}]${o.join(" ")}`;
                            return t === r && e === c && Date.now() - a < 5e3 ? void 0 : (c = e, r = t, a = Date.now(), 
                            t);
                        };
                        try {
                            const c = new e.BroadcastChannel(o.bcSecret);
                            let r = [];
                            t.sendToLogger = (e, ...o) => {
                                const a = t.toLogText(e, ...o);
                                if (void 0 !== a) return void 0 === r ? c.postMessage({
                                    what: "messageToLogger",
                                    type: e,
                                    text: a
                                }) : void r.push({
                                    type: e,
                                    text: a
                                });
                            }, c.onmessage = e => {
                                switch (e.data) {
                                  case "iamready!":
                                    if (void 0 === r) break;
                                    r.forEach((({type: e, text: o}) => c.postMessage({
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
                            }, c.postMessage("areyouready?");
                        } catch {
                            t.sendToLogger = (e, ...o) => {
                                const c = t.toLogText(e, ...o);
                                void 0 !== c && t.log(`uBO ${c}`);
                            };
                        }
                        return t;
                    }().patternToRegex(c, void 0, !0), a = [];
                    for (let e = 0, o = t.length; e < o; e++) {
                        const o = t.key(e);
                        r.test(o) && a.push(o);
                    }
                    for (const e of a) t.removeItem(e);
                } else t.setItem(c, `${r}`);
            } catch {}
        }("local", !1, e, t);
    }
    const o = {}, t = [ [ "CookieConsent--hideCookieConsent", "true" ], [ "cookieConsent", "granted" ], [ "COOKIE_CONSENT", "no" ], [ "cookie_consent", "no" ], [ "psh:cookies-other", "false" ], [ "no-cookie-notice-dismissed", "true" ], [ "psh:cookies-seen", "true" ], [ "psh:cookies-social", "true" ], [ "cookiesAccepted", "true" ], [ "isAcceptedCookie", "1" ], [ "cookiePolicy", "true" ], [ "cookiesAccepted", "yes" ], [ "cookies_enabled", "true" ], [ "acceptedAllCookies", "false" ], [ "cookiePreference", "essential" ], [ "cookie-consent-banner", "declined" ], [ "allowed_cookies", "true" ], [ "cookie-consent", "false" ], [ "consents-analytics", "false" ], [ "vdk-required-enabled", "true" ], [ "vdk-iframe-enabled", "true" ], [ "vdk-status", "accept" ], [ "cookie_consent", "granted" ], [ "cookieBarVisible", "false" ], [ "HAS_AGREE_POLICY", "true" ], [ "cookie-accepted", "1" ], [ "CustomCookieBannerAcceptIntent", "true" ], [ "pc-cookie-accepted", "true" ], [ "pc-cookie-technical-accepted", "true" ], [ "cookie-consent", "rejected" ], [ "owf_agree_cookie_policy", "true" ], [ "cookieConsent", "accepted" ], [ "allowFunctionalCookies", "false" ], [ "cookieClosed", "true" ], [ "explicitCookieAccept-24149", "true" ], [ "keeper_cookie_consent", "true" ], [ "cookie_accepted", "true" ], [ "consentLevel", "1" ], [ "cookies-val", "accepted" ], [ "201805-policy|accepted", "1" ], [ "GDPR-fingerprint:accepted", "true" ], [ "CPCCookies", "true" ], [ "privacyModalSeen", "true" ], [ "LGPDconsent", "1" ], [ "isCookiePoliceAccepted", "1" ], [ "HAS_ACCEPTED_PRIVACY_POLICY", "true" ], [ "cookiesAceptadas", "true" ], [ "privacy.com.br", "accepted" ], [ "supabase-consent-ph", "false" ], [ "cookieConsent", "essential" ], [ "has-seen-ccpa-notice", "true" ], [ "wbx__cookieAccepted", "true" ], [ "show_cookies_popup", "false" ], [ "modal_cookies", "1" ], [ "trainingDataConsent", "true" ], [ "cookieConsent", "false" ], [ "zglobal_Acookie_optOut", "3" ], [ "cookie", "true" ], [ "cookies_view", "true" ], [ "gdprConsent", "false" ], [ "framerCookiesDismissed", "true" ], [ "vue-cookie-accept-decline-cookiePanel", "accept" ], [ "cookies-consent-accepted", "true" ], [ "user-cookies-setting", "1" ], [ "COOKIE_AUTHORITY_QUERY_V2", "1" ], [ "ignore_cookie_warn", "true" ], [ "CerezUyariGosterildi", "true" ], [ "cookies-product", "NO" ], [ "showCookies", "NO" ], [ "localConsent", "true" ], [ "acceptedCookies", "true" ], [ "isNotificationDisplayed", "true" ], [ "COOKIE_BANNER_CLICKED", "true" ], [ "cookies-eu-statistics", "false" ], [ "cookies-eu-necessary", "true" ], [ "cookieStatus", "rejected" ], [ "consent", "true" ], [ "cookiePreference", "required" ], [ "technikmuseum-required-enabled", "true" ], [ "ctu-cm-n", "1" ], [ "ctu-cm-a", "0" ], [ "ctu-cm-m", "0" ], [ "cookieAndRecommendsAgreement", "true" ], [ "cookiebanner-active", "false" ], [ "tracking-state-v2", "deny" ], [ "cookieConsent", "true" ], [ "202306151200.shown.production", "true" ], [ "consent", "[]" ], [ "cookiebanner:extMedia", "false" ], [ "cookiebanner:statistic", "false" ], [ "consentAccepted", "true" ], [ "marketingConsentAccepted", "false" ], [ "consentMode", "1" ], [ "uninavIsAgreeCookie", "true" ], [ "cookieConsent", "denied" ], [ "cookieChoice", "rejected" ], [ "adsAccepted", "false" ], [ "analyticsAccepted", "false" ], [ "analytics_gdpr_accept", "yes" ], [ "youtube_gdpr_accept", "yes" ], [ "Analytics:accepted", "false" ], [ "GDPR:accepted", "true" ], [ "cookie_usage_acknowledged_2", "1" ], [ "a_c", "true" ], [ "iag-targeting-consent", "no" ], [ "iag-performance-consent", "no" ], [ "userDeniedCookies", "1" ], [ "hasConsent", "false" ], [ "viewedCookieConsent", "true" ], [ "dnt_message_shown", "1" ], [ "necessaryConsent", "true" ], [ "marketingConsent", "false" ], [ "personalisationConsent", "false" ], [ "open_modal_update_policy", "1" ], [ "cookieinfo", "1" ], [ "cookies", "1" ], [ "cookieAccepted", "true" ], [ "necessary_cookie_confirmed", "true" ], [ "ccb_contao_token_1", "1" ], [ "cookies", "0" ], [ "cookies_accepted_6pzworitz8", "true" ], [ "rgpd.consent", "1" ], [ "_lukCookieAgree", "2" ], [ "cookiesAllowed", "false" ], [ "cookiePreference", "1" ], [ "artisan_acceptCookie", "true" ], [ "cookies_policy_acceptance", "denied" ], [ "SAFE__analyticsPreference", "false" ], [ "termsOfUseAccepted", "true" ], [ "agreeCookie", "true" ], [ "lgpd-agree", "1" ], [ "cookieIsAccepted", "true" ], [ "cookieAllowed", "false" ], [ "cookie_usage_accepted", "1" ], [ "cookieBannerShown", "true" ], [ "cookiesConsent", "1" ], [ "cookie_acceptance", "true" ], [ "analytics_cookies_acceptance", "true" ], [ "ns_cookies", "1" ], [ "gdpr", "deny" ], [ "c", "false" ], [ "cookies-preference", "1" ], [ "cookiesAcknowledged", "1" ], [ "hasConsentedPH", "no" ], [ "cookie_consent", "accepted" ], [ "gtag.consent.option", "1" ], [ "cps28", "1" ], [ "PrivacyPolicy[][core]", "forbidden" ], [ "PrivacyPolicy[][maps]", "forbidden" ], [ "PrivacyPolicy[][videos]", "forever" ], [ "PrivacyPolicy[][readSpeaker]", "forbidden" ], [ "PrivacyPolicy[][tracking]", "forbidden" ], [ "showCookieUse", "false" ], [ "terms", "accepted" ], [ "z_cookie_consent", "true" ], [ "StorageMartCookiesPolicySeen", "true" ], [ "bunq:CookieConsentStore:isBannerVisible", "false" ], [ "accepted-cookies", "[]" ], [ "ngx-webstorage|cookies", "false" ], [ "app_gdpr_consent", "1" ], [ "alreadyAcceptCookie", "true" ], [ "isCookiesAccepted", "true" ], [ "cookies", "no" ], [ "cookies-policy-accepted", "true" ], [ "cookie_prompt_times", "1" ], [ "last_prompt_time", "1" ], [ "sup_gdpr_cookie", "accepted" ], [ "gdpr_cookie", "accepted" ], [ "cn", "true" ], [ "consent_popup", "1" ], [ "COOKIE_CONSENT", "false" ], [ "cookie-consent-declined-version", "1" ], [ "Do-not-share", "true" ], [ "allow-cookies", "false" ], [ "__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7", "0" ], [ "should_display_cookie_banner_v2", "false" ], [ "zora-discover-14-03-23", "false" ], [ "connect-wallet-legal-consent", "true" ], [ "cookiesMin", "1" ], [ "cb-accept-cookie", "true" ], [ "cookie-permission", "false" ], [ "cookies", "true" ], [ "ROCUMENTS.cookieConsent", "true" ], [ "bcCookieAccepted", "true" ], [ "CMP:personalisation", "1" ], [ "pcClosedOnce", "true" ], [ "textshuttle_cookie", "false" ], [ "cookies-notification-message-is-hidden", "true" ], [ "cookieBanner", "false" ], [ "cookieBanner", "true" ], [ "banner", "true" ], [ "isAllowCookies", "true" ], [ "gtag_enabled", "1" ], [ "cvcConsentGiven", "true" ], [ "terms", "true" ], [ "cookie_accept", "true" ], [ "Pechinchou:CookiesModal", "true" ], [ "hub-cp", "true" ], [ "cookiePolicyAccepted", "yes" ], [ "cookie_usage_acknowledged_2", "true" ], [ "cookies_necessary_consent", "true" ], [ "cookies_marketing_consent", "false" ], [ "cookies_statistics_consent", "false" ], [ "wu.ccpa-toast-viewed", "true" ], [ "closed", "true" ], [ "dnt", "1" ], [ "dnt_a", "1" ], [ "makerz_allow_consentmgr", "0" ], [ "SHOW_COOKIE_BANNER", "no" ], [ "CookiesConsent", "1" ], [ "hasAnalyticalCookies", "false" ], [ "hasStrictlyNecessaryCookies", "true" ], [ "amCookieBarFirstShow", "1" ], [ "acceptedCookies", "false" ], [ "viewedCookieBanner", "true" ], [ "accept_all_cookies", "false" ], [ "isCookies", "1" ], [ "isCookie", "Yes" ], [ "cookieconsent_status", "false" ], [ "user_cookie", "1" ], [ "ka:4:legal-updates", "true" ], [ "cok", "true" ], [ "cookieMessage", "true" ], [ "soCookiesPolicy", "1" ], [ "GDPR:RBI:accepted", "false" ], [ "contao-privacy-center.hidden", "1" ], [ "cookie_consent", "false" ], [ "cookiesAgree", "true" ], [ "ytsc_accepted_cookies", "true" ], [ "safe-storage/v1/tracking-consent/trackingConsentMarketingKey", "false" ], [ "safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey", "false" ], [ "safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey", "false" ], [ "agreeToCookie", "false" ], [ "AI Alliance_ReactCookieAcceptance_hasSetCookies", "true" ], [ "firstVisit", "false" ], [ "2020-04-05", "1" ], [ "dismissed", "true" ], [ "SET_COOKIES_APPROVED", "true" ], [ "hasAcceptedCookies", "true" ], [ "isCookiesNotificationHidden", "true" ], [ "agreed-cookies", "true" ], [ "consentCookie", "true" ], [ "SWCOOKIESACC", "1" ], [ "hasAcceptedCookieNotice", "true" ], [ "fb-cookies-accepted", "false" ], [ "is_accept_cookie", "true" ], [ "accept-jove-cookie", "1" ], [ "cookie_consent_bar_value", "true" ], [ "pxdn_cookie_consent", "true" ], [ "akasha__cookiePolicy", "true" ], [ "QMOptIn", "false" ], [ "safe.global", "false" ], [ "cookie_banner:hidden", "true" ], [ "cookiesAccepted", "false" ], [ "accept_cookie_policy", "true" ], [ "cookies_accepted", "true" ], [ "cookies-selected", "true" ], [ "cookie-notice-dismissed", "true" ], [ "accepts-cookie-notice", "true" ], [ "dismissedPrivacyCookieMessage", "1" ], [ "allowCookies", "allowed" ], [ "cookie_consent", "true" ], [ "cookies_policy_status", "true" ], [ "cookies-accepted", "true" ], [ "allowCookies", "true" ], [ "cookie_consent", "1" ], [ "accepted-cookies", "true" ], [ "cookies-consent", "0" ], [ "cookieBannerRead", "true" ], [ "acceptCookie", "0" ], [ "cookieBannerReadDate", "1" ], [ "privacy-policy-accepted", "true" ], [ "accepted_cookies", "true" ], [ "accepted_cookie", "true" ], [ "cookie-consent", "true" ], [ "consentManager_shown", "true" ], [ "consent_necessary", "true" ], [ "consent_performance", "false" ], [ "cookie-closed", "true" ], [ "cookie-accepted", "false" ], [ "cookieConsent", "1" ], [ "enableCookieBanner", "false" ], [ "byFoodCookiePolicyRequire", "false" ], [ "ascookie--decision", "true" ], [ "isAcceptCookiesNew", "true" ], [ "isAcceptCookie", "true" ], [ "isAcceptCookie", "false" ], [ "marketing", "false" ], [ "technical", "true", "", "reload", "1" ], [ "analytics", "false" ], [ "otherCookie", "true" ], [ "saveCookie", "true" ], [ "userAcceptsCookies", "1" ], [ "grnk-cookies-accepted", "true" ], [ "acceptCookies", "no" ], [ "acceptCookies", "true" ], [ "has-dismissed", "1" ], [ "hasAcceptedGdpr", "true" ], [ "lw-accepts-cookies", "true" ], [ "cookies-accept", "true" ], [ "load-scripts-v2", "2" ], [ "acceptsAnalyticsCookies", "false" ], [ "acceptsNecessaryCookies", "true" ], [ "display_cookie_modal", "false" ], [ "pg-accept-cookies", "true" ], [ "__EOBUWIE__consents_accepted", "true", "", "reload", "1" ], [ "canada-cookie-acknowledge", "1" ], [ "FP_cookiesAccepted", "true" ], [ "VISITED_0", "true" ], [ "OPTIONAL_COOKIES_ACCEPTED_0", "true" ], [ "storagePermission", "true" ], [ "set_cookie_stat", "false" ], [ "set_cookie_tracking", "false" ], [ "UMP_CONSENT_NOTIFICATION", "true" ], [ "df-cookies-allowed", "true" ], [ "cookie-consent", "1" ], [ "userConsented", "false" ], [ "cookieConsent", "necessary" ], [ "gdpr-done", "true" ], [ "isTrackingAllowed", "false" ], [ "legalsAccepted", "true" ], [ "COOKIE_CONSENT_STATUS_4124", '"dismissed"' ], [ "cookie-policy", "approve" ], [ "spaseekers:cookie-decision", "accepted" ], [ "policyAccepted", "true" ], [ "consentBannerLastShown", "1" ], [ "flipdish-cookies-preferences", "necessary" ], [ "consentInteraction", "true" ], [ "cookie-notice-accepted-version", "1" ], [ "cookieConsentGiven", "1" ] ], c = new Map([ [ "teamtailor.com", 0 ], [ "notthebee.com", 1 ], [ "manuals.annafreud.org", 2 ], [ "granola.ai", 3 ], [ "polar.sh", 3 ], [ "posthog.com", 3 ], [ "hatchet.run", 3 ], [ "nhnieuws.nl", [ 4, 6, 7 ] ], [ "omroepbrabant.nl", [ 4, 6, 7 ] ], [ "cape.co", 5 ], [ "asianet.co.id", 8 ], [ "p2p.land", 8 ], [ "netbank.avida.no", 8 ], [ "bo3.gg", 8 ], [ "gs1.se", [ 8, 32 ] ], [ "puregoldprotein.com", [ 8, 96, 97 ] ], [ "spectrumtherapeutics.com", 8 ], [ "thingtesting.com", 8 ], [ "streamclipsgermany.de", 8 ], [ "kundenportal.harzenergie.de", 8 ], [ "giselles.ai", 9 ], [ "i-fundusze.pl", 10 ], [ "improvethenews.org", 10 ], [ "plente.com", 10 ], [ "movies4us.*", 10 ], [ "popcornmovies.to", 10 ], [ "arkanium.serveminecraft.net", 11 ], [ "bananacraft.serveminecraft.net", 11 ], [ "myoffers.smartbuy.hdfcbank.com", 12 ], [ "grass.io", [ 13, 14 ] ], [ "lustery.com", 15 ], [ "ecoints.com", 16 ], [ "emergetools.com", 17 ], [ "receptagemini.pl", 18 ], [ "bw.vdk.de", [ 19, 20, 21 ] ], [ "search.odin.io", 22 ], [ "gdh.digital", 23 ], [ "popmart.com", 24 ], [ "rozklady.bielsko.pl", 25 ], [ "typeform.com", 26 ], [ "erlus.com", [ 27, 28 ] ], [ "bettrfinancing.com", 29 ], [ "sf-express.com", 30 ], [ "min.io", 31 ], [ "lemwarm.com", 33 ], [ "form.fillout.com", 34 ], [ "keepersecurity.com", 35 ], [ "esto.eu", 36 ], [ "ctol.digital", 36 ], [ "beterbed.nl", 37 ], [ "crt.hr", 38 ], [ "code.likeagirl.io", 39 ], [ "engineering.mixpanel.com", 39 ], [ "betterprogramming.pub", 39 ], [ "medium.com", 39 ], [ "500ish.com", 39 ], [ "gitconnected.com", 39 ], [ "bettermarketing.pub", 39 ], [ "diylifetech.com", 39 ], [ "thebolditalic.com", 39 ], [ "writingcooperative.com", 39 ], [ "fanfare.pub", 39 ], [ "betterhumans.pub", 39 ], [ "fvd.nl", 40 ], [ "cpc2r.ch", 41 ], [ "metamask.io", 42 ], [ "chavesnamao.com.br", 43 ], [ "anhanguera.com", 44 ], [ "bhaskar.com", 45 ], [ "novaventa.com", 46 ], [ "privacy.com.br", 47 ], [ "supabase.com", 48 ], [ "app.getgrass.io", 49 ], [ "sanluisgarbage.com", 50 ], [ "wildberries.ru", 51 ], [ "cryptorank.io", 52 ], [ "springmerchant.com", 53 ], [ "veed.io", 54 ], [ "deribit.com", 55 ], [ "dorkgpt.com", 55 ], [ "kyutai.org", 55 ], [ "varusteleka.com", 55 ], [ "lazyrecords.app", 55 ], [ "unmute.sh", 55 ], [ "zoho.com", 56 ], [ "femibion.rs", 57 ], [ "nove.fr", 57 ], [ "metro1.com.br", 57 ], [ "villagrancanaria.com", 58 ], [ "baic.cz", 59 ], [ "bunq.com", 60 ], [ "framer.com", 60 ], [ "inceptionlabs.ai", 60 ], [ "zave.it", 60 ], [ "tower.dev", 60 ], [ "fleksberegner.dk", 61 ], [ "duty.travel.cl", 62 ], [ "solscan.io", 63 ], [ "connorduffy.abundancerei.com", 64 ], [ "bc.gamem", 65 ], [ "akkushop-turkiye.com.tr", 66 ], [ "k33.com", [ 67, 68 ] ], [ "komdigi.go.id", 69 ], [ "fijiairways.com", 70 ], [ "planner.kaboodle.co.nz", 71 ], [ "pedalcommander.*", 72 ], [ "sekisuialveo.com", [ 73, 74 ] ], [ "rightsize.dk", 75 ], [ "random-group.olafneumann.org", 76 ], [ "espadrij.com", 77 ], [ "hygiene-shop.eu", 77 ], [ "gesundheitsmanufaktur.de", [ 77, 314 ] ], [ "technikmuseum.berlin", 78 ], [ "cvut.cz", [ 79, 80, 81 ] ], [ "r-ulybka.ru", 82 ], [ "voltadol.at", 83 ], [ "evium.de", 84 ], [ "hiring.amazon.com", 85 ], [ "comnet.com.tr", 85 ], [ "gpuscout.nl", 85 ], [ "remanga.org", 85 ], [ "parrotsec.org", 85 ], [ "estrelabet.bet.br", 85 ], [ "shonenjumpplus.com", 86 ], [ "engeldirekt.de", 87 ], [ "haleon-gebro.at", [ 88, 89 ] ], [ "happyplates.com", [ 90, 91 ] ], [ "ickonic.com", 92 ], [ "abs-cbn.com", 93 ], [ "news.abs-cbn.com", 93 ], [ "opmaatzagen.nl", 94 ], [ "mundwerk-rottweil.de", 94 ], [ "sqlook.com", 95 ], [ "adef-emploi.fr", [ 98, 99 ] ], [ "lumieresdelaville.net", [ 98, 99 ] ], [ "ccaf.io", [ 100, 101 ] ], [ "dbschenkerarkas.com.tr", 102 ], [ "dbschenker-seino.jp", 102 ], [ "dbschenker.com", [ 102, 199 ] ], [ "scinapse.io", 103 ], [ "shop.ba.com", [ 104, 105 ] ], [ "uc.pt", 106 ], [ "bennettrogers.mysight.uk", 107 ], [ "snipp.gg", 107 ], [ "leafly.com", 108 ], [ "geizhals.at", 109 ], [ "geizhals.de", 109 ], [ "geizhals.eu", 109 ], [ "cenowarka.pl", 109 ], [ "skinflint.co.uk", 109 ], [ "webhallen.com", [ 110, 111, 112 ] ], [ "olx.com.br", 113 ], [ "unobike.com", 114 ], [ "mod.io", 115 ], [ "passport-photo.online", 116 ], [ "mojmaxtv.hrvatskitelekom.hr", 116 ], [ "rodrigue-app.ct.ws", 116 ], [ "tme.eu", 117 ], [ "mein-osttirol.rocks", 118 ], [ "tennessine.co.uk", 119 ], [ "ultraleds.co.uk", 120 ], [ "greubelforsey.com", 121 ], [ "lukify.app", 122 ], [ "studiobookr.com", 123 ], [ "getgrass.io", 124 ], [ "artisan.co", 125 ], [ "mobilefuse.com", 126 ], [ "safe.global", [ 127, 251 ] ], [ "data.carbonmapper.org", 128 ], [ "avica.link", 129 ], [ "madeiramadeira.com.br", 130 ], [ "sberdisk.ru", 131 ], [ "column.com", 132 ], [ "iqoption.com", 133 ], [ "dopesnow.com", 134 ], [ "montecwear.com", 134 ], [ "romeo.com", 135 ], [ "sonyliv.com", [ 136, 137 ] ], [ "cwallet.com", 138 ], [ "oneskin.co", 139 ], [ "telemetr.io", 140 ], [ "near.org", 141 ], [ "near.ai", 141 ], [ "dev.near.org", 142 ], [ "jito.network", 143 ], [ "jito.wtf", 143 ], [ "goodpods.com", 144 ], [ "pngtree.com", [ 145, 146 ] ], [ "rhein-pfalz-kreis.de", [ 147, 148, 149, 150, 151 ] ], [ "idar-oberstein.de", [ 147, 148, 149, 150 ] ], [ "vogelsbergkreis.de", [ 147, 148, 149, 150 ] ], [ "v2.xmeye.net", 152 ], [ "venom.foundation", 153 ], [ "canonvannederland.nl", 154 ], [ "my-account.storage-mart.com", 155 ], [ "web.bunq.com", 156 ], [ "lifesum.com", 157 ], [ "home.shortcutssoftware.com", 158 ], [ "klimwinkel.nl", 159 ], [ "markimicrowave.com", 160 ], [ "aerolineas.com.ar", 161 ], [ "5sim.net", 161 ], [ "fold.dev", 162 ], [ "mojposao.hr", 163 ], [ "temu.com", [ 164, 165 ] ], [ "supreme.com", [ 166, 167 ] ], [ "g-star.com", 168 ], [ "sawren.pl", 169 ], [ "ultrahuman.com", 170 ], [ "optionsgroup.com", 171 ], [ "withpersona.com", [ 172, 173 ] ], [ "trigger.dev", 174 ], [ "core.app", [ 175, 177 ] ], [ "zora.co", 176 ], [ "kokku-online.de", 178 ], [ "cuba-buddy.de", 179 ], [ "datamask.app", 180 ], [ "humandataincome.com", 180 ], [ "crealitycloud.com", 181 ], [ "triumphtechnicalinformation.com", 182 ], [ "businessclass.com", 183 ], [ "livsstil.se", 184 ], [ "schneidewind-immobilien.de", 185 ], [ "textshuttle.com", 186 ], [ "simpleswap.io", 187 ], [ "wales.nhs.attendanywhere.com", 188 ], [ "sacal.it", 189 ], [ "astondevs.ru", 190 ], [ "gonxt.com", 191 ], [ "geomiq.com", 192 ], [ "bbc.com", 193 ], [ "galaxy.com", 194 ], [ "ticketmelon.com", 195 ], [ "pechinchou.com.br", 196 ], [ "thehub21.com", 197 ], [ "archiup.com", 198 ], [ "autoride.cz", [ 200, 201, 202 ] ], [ "autoride.es", [ 200, 201, 202 ] ], [ "autoride.io", [ 200, 201, 202 ] ], [ "autoride.sk", [ 200, 201, 202 ] ], [ "wunderground.com", 203 ], [ "baselime.io", 204 ], [ "eversports.de", [ 205, 206 ] ], [ "makerz.me", 207 ], [ "reebok.eu", 208 ], [ "alfa.com.ec", 209 ], [ "rts.com.ec", 209 ], [ "tropicalida.com.ec", 209 ], [ "owgr.com", [ 210, 211 ] ], [ "beermerchants.com", 212 ], [ "saamexe.com", [ 213, 214 ] ], [ "helium.com", 213 ], [ "blommerscoffee.shipping-portal.com", 213 ], [ "app.bionic-reading.com", 215 ], [ "nloto.ru", 216 ], [ "swisstours.com", 217 ], [ "librinova.com", 218 ], [ "format.bike", 219 ], [ "khanacademy.org", 220 ], [ "etelecinema.hu", 221 ], [ "konicaminolta.com", 222 ], [ "soquest.xyz", 223 ], [ "region-bayreuth.de", 224 ], [ "bahnland-bayern.de", 225 ], [ "eezy.nrw", 225 ], [ "nationalexpress.de", 225 ], [ "chipcitycookies.com", 226 ], [ "6amgroup.com", 226 ], [ "go.bkk.hu", 226 ], [ "worldlibertyfinancial.com", 226 ], [ "happiful.com", 226 ], [ "bazaartracker.com", 227 ], [ "subscribercounter.com", 228 ], [ "app.klarna.com", [ 229, 230, 231 ] ], [ "instantspoursoi.fr", 232 ], [ "thealliance.ai", 233 ], [ "librumreader.com", 234 ], [ "visnos.com", 235 ], [ "polypane.app", 236 ], [ "changelly.com", 237 ], [ "glose.com", 238 ], [ "yellow.systems", 239 ], [ "renebieder.com", 240 ], [ "goodram.com", 241 ], [ "starwalk.space", 242 ], [ "vitotechnology.com", 242 ], [ "codedead.com", 243 ], [ "studiofabiobiesel.com", 244 ], [ "fydeos.com", 245 ], [ "fydeos.io", 245 ], [ "jove.com", 246 ], [ "argent.xyz", 247 ], [ "pixeden.com", 248 ], [ "akasha.org", 249 ], [ "ashleyfurniture.com", 250 ], [ "jibjab.com", 252 ], [ "filmzie.com", 253 ], [ "vietjetair.com", 254 ], [ "kick.com", 255 ], [ "cora-broodjes.nl", 256 ], [ "jimdosite.com", 256 ], [ "worstbassist.com", 256 ], [ "evernote.com", [ 257, 258, 328 ] ], [ "octopusenergy.co.jp", 259 ], [ "findmcserver.com", 260 ], [ "schneideranwaelte.de", 261 ], [ "traefik.io", 261 ], [ "cityfalcon.ai", 262 ], [ "digitalparking.city", 263 ], [ "mediathekviewweb.de", 264 ], [ "solana.com", 265 ], [ "ef.co.id", 266 ], [ "alohafromdeer.com", 267 ], [ "fwd.com", [ 268, 270 ] ], [ "everywhere.game", 269 ], [ "geotastic.net", 271 ], [ "garageproject.co.nz", 272 ], [ "tattoodo.com", [ 272, 273 ] ], [ "jmonline.com.br", 274 ], [ "atlas.workland.com", 274 ], [ "virginexperiencedays.co.uk", 274 ], [ "emag.berliner-woche.de", [ 275, 276, 277 ] ], [ "nordkurier.de", [ 275, 276, 277 ] ], [ "everest-24.pl", [ 278, 279 ] ], [ "sneakerfreaker.com", 280 ], [ "cryptofalka.hu", 280 ], [ "walmart.ca", 281 ], [ "byfood.com", 282 ], [ "andsafe.de", 283 ], [ "edostavka.by", 284 ], [ "emall.by", 284 ], [ "ishoppurium.com", 285 ], [ "baseblocks.tenereteam.com", 286 ], [ "onexstore.pl", [ 287, 288, 289 ] ], [ "revanced.app", 289 ], [ "evropochta.by", [ 290, 291 ] ], [ "inselberlin.de", 292 ], [ "gronkh.tv", 293 ], [ "adfilteringdevsummit.com", 294 ], [ "dailyrevs.com", 295 ], [ "dsworks.ru", 295 ], [ "daraz.com", 296 ], [ "learngerman.dw.com", 297 ], [ "leeway.tech", 298 ], [ "gostanford.com", 299 ], [ "namensetiketten.de", 300 ], [ "drafthound.com", [ 301, 302 ] ], [ "wokularach.pl", 303 ], [ "bidup.amtrak.com", 304 ], [ "eschuhe.de", 305 ], [ "zeglins.com", 306 ], [ "flyingpapers.com", 307 ], [ "beta.character.ai", [ 308, 309 ] ], [ "bittimittari.fi", 310 ], [ "aida64.co.uk", [ 311, 312 ] ], [ "aida64.com.ua", [ 311, 312 ] ], [ "aida64.de", [ 311, 312 ] ], [ "aida64.hu", [ 311, 312 ] ], [ "aida64.it", [ 311, 312 ] ], [ "aida64russia.com", [ 311, 312 ] ], [ "116.ru", 313 ], [ "14.ru", 313 ], [ "161.ru", 313 ], [ "164.ru", 313 ], [ "173.ru", 313 ], [ "178.ru", 313 ], [ "26.ru", 313 ], [ "29.ru", 313 ], [ "35.ru", 313 ], [ "43.ru", 313 ], [ "45.ru", 313 ], [ "48.ru", 313 ], [ "51.ru", 313 ], [ "53.ru", 313 ], [ "56.ru", 313 ], [ "59.ru", 313 ], [ "60.ru", 313 ], [ "63.ru", 313 ], [ "68.ru", 313 ], [ "71.ru", 313 ], [ "72.ru", 313 ], [ "74.ru", 313 ], [ "76.ru", 313 ], [ "86.ru", 313 ], [ "89.ru", 313 ], [ "93.ru", 313 ], [ "chita.ru", 313 ], [ "e1.ru", 313 ], [ "fontanka.ru", 313 ], [ "ircity.ru", 313 ], [ "izh1.ru", 313 ], [ "mgorsk.ru", 313 ], [ "msk1.ru", 313 ], [ "ngs.ru", 313 ], [ "ngs22.ru", 313 ], [ "ngs24.ru", 313 ], [ "ngs42.ru", 313 ], [ "ngs55.ru", 313 ], [ "ngs70.ru", 313 ], [ "nn.ru", 313 ], [ "sochi1.ru", 313 ], [ "sterlitamak1.ru", 313 ], [ "tolyatty.ru", 313 ], [ "ufa1.ru", 313 ], [ "v1.ru", 313 ], [ "vladivostok1.ru", 313 ], [ "voronezh1.ru", 313 ], [ "ya62.ru", 313 ], [ "open24.ee", 314 ], [ "116117.fi", 315 ], [ "pjspub.com", 316 ], [ "autodude.dk", 317 ], [ "autodude.fi", 317 ], [ "autodude.no", 317 ], [ "autodude.se", 317 ], [ "valostore.fi", 317 ], [ "valostore.no", 317 ], [ "valostore.se", 317 ], [ "vivantis.*", 318 ], [ "vivantis-shop.at", 318 ], [ "krasa.cz", 318 ], [ "auf1.tv", 319 ], [ "wesendit.com", 320 ], [ "hatch.co", 321 ], [ "haberturk.com", 322 ], [ "spaseekers.com", 323 ], [ "incomeshares.com", 324 ], [ "surnamedb.com", 325 ], [ "pizzadelight-menu.co.uk", 326 ], [ "ioplus.nl", 327 ], [ "lahella.fi", 329 ] ]), r = new Map([]), a = (e, o, t) => {
        let c = o.get(e);
        if (void 0 !== c) if ("number" != typeof c) for (const e of c) t.add(e); else t.add(c);
    }, s = (() => {
        const e = document.location, o = [ e.origin ];
        return e.ancestorOrigins && o.push(...e.ancestorOrigins), o.map(((e, o) => {
            const t = e.lastIndexOf("://");
            if (-1 === t) return;
            const c = e.slice(t + 3), r = c.indexOf(":");
            return {
                hn: -1 === r ? c : c.slice(0, r),
                i: o
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === s.length) return;
    const n = new Set, l = new Set;
    ((e, o = "") => {
        const t = e.split("."), i = t.length;
        if (0 !== i) {
            for (let e = 0; e < i; e++) {
                const i = `${t.slice(e).join(".")}${o}`;
                a(i, c, n), a(i, r, l);
            }
            {
                const e = i - 1;
                for (let i = 0; i < e; i++) for (let s = e; s > i; s--) {
                    const e = `${t.slice(i, s).join(".")}.*${o}`;
                    a(e, c, n), a(e, r, l);
                }
            }
        }
    })(s[0].hn);
    for (const o of n) if (!l.has(o)) try {
        e(...t[o]);
    } catch {}
}();