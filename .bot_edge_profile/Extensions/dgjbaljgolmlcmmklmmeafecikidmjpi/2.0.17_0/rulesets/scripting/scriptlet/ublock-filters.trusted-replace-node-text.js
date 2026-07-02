!function() {
    function e(e, o, n, ...i) {
        !function(e = "", o = "", n = "") {
            const i = t(), r = i.makeLogPrefix("replace-node-text.fn", ...Array.from(arguments)), a = i.patternToRegex(e, "i", !0), c = i.patternToRegex(o, "gms"), s = i.getExtraArgs(Array.from(arguments), 3), l = s.includes || s.condition ? i.patternToRegex(s.includes || s.condition, "ms") : null, d = s.excludes ? i.patternToRegex(s.excludes, "ms") : null, p = (e = !0) => {
                e && f(h.takeRecords()), h.disconnect(), i.logLevel > 1 && i.uboLog(r, "Quitting");
            }, m = (() => {
                const e = {
                    createScript: e => e
                }, {trustedTypes: o} = self;
                return o instanceof Object && "function" == typeof o.getPropertyType && "TrustedScript" === o.getPropertyType("script", "textContent") ? o.createPolicy(function() {
                    const e = t();
                    return e.String_fromCharCode(Date.now() % 26 + 97) + e.Math_floor(982451653 * e.Math_random() + 982451653).toString(36);
                }(), e) : e;
            })();
            let u = s.sedCount || 0;
            const g = e => {
                const t = e.textContent;
                if (l && (l.lastIndex = 0, !1 === i.RegExp_test.call(l, t))) return !0;
                if (d && (d.lastIndex = 0, i.RegExp_test.call(d, t))) return !0;
                if (c.lastIndex = 0, !1 === i.RegExp_test.call(c, t)) return !0;
                c.lastIndex = 0;
                const a = "" !== o ? t.replace(c, n) : n;
                return e.textContent = "SCRIPT" === e.nodeName ? m.createScript(a) : a, i.logLevel > 1 && i.uboLog(r, `Text before:\n${t.trim()}`), 
                i.uboLog(r, `Text after:\n${a.trim()}`), 0 === u || 0 != (u -= 1);
            }, f = e => {
                for (const t of e) for (const e of t.addedNodes) if (!1 !== a.test(e.nodeName) && !g(e)) return void p(!1);
            }, h = new MutationObserver(f);
            if (h.observe(document, {
                childList: !0,
                subtree: !0
            }), document.documentElement) {
                const e = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
                let t = 0;
                for (;;) {
                    const o = e.nextNode();
                    if (t += 1, null === o) break;
                    if (!1 !== a.test(o.nodeName) && o !== document.currentScript && !g(o)) {
                        p();
                        break;
                    }
                }
                i.uboLog(r, `${t} nodes present before installing mutation observer`);
            }
            s.stay || function(e, o) {
                const n = e => {
                    const t = {
                        loading: 1,
                        asap: 1,
                        interactive: 2,
                        end: 2,
                        2: 2,
                        complete: 3,
                        idle: 3,
                        3: 3
                    }, o = Array.isArray(e) ? e : [ e ];
                    for (const e of o) {
                        const o = `${e}`;
                        if (!1 !== Object.hasOwn(t, o)) return t[o];
                    }
                    return 0;
                }, i = n("interactive");
                if (n(document.readyState) >= i) return void e();
                const a = t(), c = [ "readystatechange", () => {
                    n(document.readyState) < i || (e(), a.removeEventListener.apply(document, c));
                }, {
                    capture: !0
                } ];
                a.addEventListener.apply(document, c);
            }((() => {
                const e = s.quitAfter || 0;
                0 !== e ? setTimeout((() => {
                    p();
                }), e) : p();
            }));
        }(e, o, n, ...i);
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
                        const t = n[o + 1], i = /^\d+$/.test(t) ? parseInt(t, 10) : t;
                        e.push([ n[o], i ]);
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
        let n = "", i = "", r = 0;
        t.toLogText = (e, ...t) => {
            if (0 === t.length) return;
            const o = `[${document.location.hostname || document.location.href}]${t.join(" ")}`;
            return o === i && e === n && Date.now() - r < 5e3 ? void 0 : (n = e, i = o, r = Date.now(), 
            o);
        };
        try {
            const n = new e.BroadcastChannel(o.bcSecret);
            let i = [];
            t.sendToLogger = (e, ...o) => {
                const r = t.toLogText(e, ...o);
                if (void 0 !== r) return void 0 === i ? n.postMessage({
                    what: "messageToLogger",
                    type: e,
                    text: r
                }) : void i.push({
                    type: e,
                    text: r
                });
            }, n.onmessage = e => {
                switch (e.data) {
                  case "iamready!":
                    if (void 0 === i) break;
                    i.forEach((({type: e, text: t}) => n.postMessage({
                        what: "messageToLogger",
                        type: e,
                        text: t
                    }))), i = void 0;
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
    }
    const o = {}, n = [ [ "script", "(function serverContract()", '/*START*/"YOUTUBE_PREMIUM_LOGO"!==ytInitialData?.topbar?.desktopTopbarRenderer?.logo?.topbarLogoRenderer?.iconImage?.iconType&&(location.href.startsWith("https://www.youtube.com/tv#/")||location.href.startsWith("https://www.youtube.com/embed/")||document.addEventListener("DOMContentLoaded",(function(){const t=()=>{const t=document.getElementById("movie_player");if(!t)return;if(!t.getStatsForNerds?.()?.debug_info?.startsWith?.("SSAP, AD"))return;const e=t.getProgressState?.();e&&e.duration>0&&(e.loaded<e.duration||e.duration-e.current>1)&&t.seekTo?.(e.duration)};t(),new MutationObserver((()=>{t()})).observe(document,{childList:!0,subtree:!0})})));(()=>{const t={apply:(t,o,n)=>{const e=n[0];return"function"==typeof e&&e.toString().includes("onAbnormalityDetected")&&(n[0]=function(){}),Reflect.apply(t,o,n)}};window.Promise.prototype.then=new Proxy(window.Promise.prototype.then,t)})();(()=>{const e={construct:(e,c,n)=>{const t=c[0],o=c[1]?.body;return t?.includes("youtubei")&&o?.includes(\'"clientScreen":"WATCH"\')&&(c[1].body=o.replace(\'"clientScreen":"WATCH"\',\'"clientScreen":"ADUNIT"\')),Reflect.construct(e,c,n)}};window.Request=new Proxy(window.Request,e)})();(function serverContract()', "sedCount", "1" ], [ "script", "'G-1B4LC0KT6C');", '\'G-1B4LC0KT6C\'); localStorage.setItem("tuna", "dW5kZWZpbmVk"); localStorage.setItem("sausage", "ZmFsc2U="); window.setTimeout(function(){fuckYouUblockAndJobcenterTycoon(false)},200);' ], [ "script", "_w.keyMap=", '(()=>{const e={apply:(e,t,n)=>{let o=Reflect.apply(e,t,n);return o instanceof HTMLIFrameElement&&!o.src&&o.contentWindow&&(o.contentWindow.document.body.getElementsByTagName=window.document.body.getElementsByTagName,o.contentWindow.MutationObserver=void 0),o}};HTMLBodyElement.prototype.appendChild=new Proxy(HTMLBodyElement.prototype.appendChild,e);const t={apply:(e,t,n)=>(t instanceof HTMLLIElement&&"b_algo"===t?.classList?.value&&"a"===n?.[0]&&setTimeout((()=>{t.style.display="none"}),100),Reflect.apply(e,t,n))};HTMLBodyElement.prototype.getElementsByTagName=new Proxy(HTMLBodyElement.prototype.getElementsByTagName,t)})();_w.keyMap=' ], [ "script", "var menuSlideProtection", "if(!PrePl){PrePl=true};localStorage.setItem('google_tg_rep','[\"n\",16000]');localStorage.setItem('google_tg_rep_date','2030-03-18T02:00:00');localStorage.setItem('google_tg_rep_attr7','[1,\"user1\",1900000000000,3131]');var menuSlideProtection" ], [ "script", "//tele();", "telek6();" ], [ "script", "(function($)", '(function(){const a=document.createElement("div");document.documentElement.appendChild(a),setTimeout(()=>{a&&a.remove()},100)})(); (function($)' ], [ "script", "/window\\.dataLayer.+?(location\\.replace\\(\\S+?\\)).*/", "$1" ], [ "script", "WB.defer", 'window.wbads={public:{getDailymotionAdsParamsForScript:function(a,b){b("")},setTargetingOnPosition:function(a,b){return}}};WB.defer', "condition", "wbads.public.setTargetingOnPosition" ], [ "script", "var ISMLIB", '!function(){const o={apply:(o,n,r)=>(new Error).stack.includes("refreshad")?0:Reflect.apply(o,n,r)};window.Math.floor=new Proxy(window.Math.floor,o)}();var ISMLIB' ], [ "script", '"adBlockWallEnabled":true', '"adBlockWallEnabled":false' ], [ "script", "/vastURL:.*?',/", "vastURL: ''," ], [ "script", "/url:.*?',/", "url: ''," ], [ "script", "a.onerror", "xxx" ], [ "script", "/\\$.*embed.*.appendTo.*;/", "", "condition", "appendTo" ], [ "script", "setInterval" ], [ "script", "/'globalConfig':.*?\",\\s};var exportz/s", "};var exportz" ], [ "script", '/\\"homad\\",/' ], [ "script", '/\\"homad\\":\\{\\"state\\":\\"enabled\\"\\}/', '"homad":{"state":"disabled"}' ], [ "script", "useAdBlockDefend: true", "useAdBlockDefend: false" ], [ "script", "/if \\([a-z0-9]{10} === [a-z0-9]{10}/", "if(true" ], [ "script", "/5000|100/gm", "10", "condition", "set" ], [ "script", "/^([^{])/", "document.addEventListener('DOMContentLoaded',()=>{const i=document.createElement('iframe');i.style='height:0;width:0;border:0';i.id='aswift_0';document.body.appendChild(i);i.focus();const f=document.createElement('div');f.id='9JJFp';document.body.appendChild(f);});$1", "sedCount", "2" ], [ "script", "/false;/gm", "true;", "condition", "isSubscribed" ], [ "script", "('t_modal')", "('go_d2')" ], [ "script", "Android/", "false/", "stay", "1" ], [ "script", "alert", "false" ], [ "script", "2000", "10" ], [ "script", "/1000|100|6|30/gm", "1", "condition", "link" ], [ "script", "/^window\\.location\\.href.*\\'$/gms" ], [ "script", "getlink.removeClass('hidden');", "gotolink.removeClass('hidden');" ], [ "script", "/initialTimeSeconds = \\d+/", "initialTimeSeconds = 7" ], [ "script", "/10|20/", "0", "condition", "/countdownSeconds|wpsafelinkCount/" ], [ "script", "/1000|1700|5000/gm", "10", "condition", "/countdownSeconds|wpsafelinkCount/" ], [ "script", '/window\\.location\\.href\\s*=\\s*"intent:\\/\\/([^#]+)#Intent;[^"]*"/gm', 'window.location.href = "https://$1"' ], [ "script", "/window\\.location.*?;/" ], [ "script", "typeof cdo == 'undefined' || document.querySelector('div.textads.banner-ads.banner_ads.ad-unit.ad-zone.ad-space.adsbox') == undefined", "false" ], [ "script", "/window\\.location\\.href='.*';/", "", "condition", "openLink" ], [ "script", "'IFRAME'", "'BODY'" ], [ "script", "timeLeft = duration", "timeLeft = 1" ], [ "script", ";return;", "", "condition", "_0x" ], [ "script", "/return Array[^;]+/", "return true" ], [ "script", "return!![]", "return![]" ], [ "script", "/\\d{4}/gm", "10", "condition", "count" ], [ "script", "/getElementById\\('.*'\\).*'block';/gm", "getElementById('btn6').style.display = 'block';", "condition", "count" ], [ "script", "3000)", "10)" ], [ "script", "isadblock = 1;", "isadblock = 0;" ], [ "script", '"#sdl"', '"#dln"' ], [ "script", "event.message);", 'event.message); /*start*/ !function(){"use strict";let t={log:window.console.log.bind(console),getPropertyValue:CSSStyleDeclaration.prototype.getPropertyValue,setAttribute:Element.prototype.setAttribute,getAttribute:Element.prototype.getAttribute,appendChild:Element.prototype.appendChild,remove:Element.prototype.remove,cloneNode:Element.prototype.cloneNode,Element_attributes:Object.getOwnPropertyDescriptor(Element.prototype,"attributes").get,Array_splice:Array.prototype.splice,Array_join:Array.prototype.join,createElement:document.createElement,getComputedStyle:window.getComputedStyle,Reflect:Reflect,Proxy:Proxy,crypto:window.crypto,Uint8Array:Uint8Array,Object_defineProperty:Object.defineProperty.bind(Object),Object_getOwnPropertyDescriptor:Object.getOwnPropertyDescriptor.bind(Object),String_replace:String.prototype.replace},e=t.crypto.getRandomValues.bind(t.crypto),r=function(e,r,l){return"toString"===r?e.toString.bind(e):t.Reflect.get(e,r,l)},l=function(r){let o=function(t){return t.toString(16).padStart(2,"0")},p=new t.Uint8Array((r||40)/2);e(p);let n=t.String_replace.call(t.Array_join.call(Array.from(p,o),""),/^\\d+/g,"");return n.length<3?l(r):n},o=l(15);window.MutationObserver=new t.Proxy(window.MutationObserver,{construct:function(e,r){let l=r[0],p=function(e,r){for(let p=e.length,n=p-1;n>=0;--n){let c=e[n];if("childList"===c.type&&c.addedNodes.length>0){let i=c.addedNodes;for(let a=0,y=i.length;a<y;++a){let u=i[a];if(u.localName===o){t.Array_splice.call(e,n,1);break}}}}0!==e.length&&l(e,r)};r[0]=p;let n=t.Reflect.construct(e,r);return n},get:r}),window.getComputedStyle=new t.Proxy(window.getComputedStyle,{apply(e,l,p){let n=t.Reflect.apply(e,l,p);if("none"===t.getPropertyValue.call(n,"clip-path"))return n;let c=p[0],i=t.createElement.call(document,o);t.setAttribute.call(i,"class",t.getAttribute.call(c,"class")),t.setAttribute.call(i,"id",t.getAttribute.call(c,"id")),t.setAttribute.call(i,"style",t.getAttribute.call(c,"style")),t.appendChild.call(document.body,i);let a=t.getPropertyValue.call(t.getComputedStyle.call(window,i),"clip-path");return t.remove.call(i),t.Object_defineProperty(n,"clipPath",{get:(()=>a).bind(null)}),n.getPropertyValue=new t.Proxy(n.getPropertyValue,{apply:(e,r,l)=>"clip-path"!==l[0]?t.Reflect.apply(e,r,l):a,get:r}),n},get:r})}(); document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,"");/*end*/' ], [ "script", "/\\.cloudfront\\.net|window\\.open/g", "false" ], [ "script", "/element\\.contains\\(document\\.activeElement\\)|document\\.hidden && !timeCounted/g", "true" ], [ "script", "!seen && ad", "false" ], [ "script", "window.location.href", "temp", "includes", "startDownloads" ], [ "script", "window.location.href", "temp", "includes", "linkToOpen" ], [ "script", "(isAdsenseBlocked)", "(false)" ], [ "script", "!isAdTriggered", "false" ], [ "script", "900", "100" ], [ "script", "/.*adConfig.*frequency_period.*/", '(async () => {const a=location.href;if(!a.includes("/download?link="))return;const b=new URL(a),c=b.searchParams.get("link");try{location.assign(`${location.protocol}//${c}`)}catch(a){}} )();' ], [ "script", "break;case $." ], [ "script", "/^/", '(()=>{window.admiral=function(d,a,b){if("function"==typeof b)try{b({})}catch(a){}}})();', "sedCount", "1" ], [ "script", "window.googletag =", '/*start*/(function(){let link=document.createElement("link");link.rel="stylesheet";link.href="/common/css/etoday.css";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,"");/*end*/window.googletag =' ], [ "script", "window.dataLayer =", '/*start*/(function(){let link=document.createElement("link");link.rel="stylesheet";link.href="/css_renew/pc/common.css";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,"");/*end*/window.dataLayer =' ], [ "script", "_paq.push", '/*start*/(function(){let link=document.createElement("link");link.rel="stylesheet";link.href="/css/pc/ecn_common.min.css";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,"");/*end*/_paq.push' ], [ "script", "window.dataLayer =", '/*start*/(function(){let link=document.createElement("link");link.rel="stylesheet";link.href="/wp-content/themes/hts_v2/style.css";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,"");/*end*/window.dataLayer =' ], [ "script", "window.dataLayer =", '/*start*/(function(){let link=document.createElement("link");link.rel="stylesheet";link.href="/_css/css.css";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,"");/*end*/window.dataLayer =' ], [ "script", "var _paq =", '/*start*/(function(){let link=document.createElement("link");link.rel="stylesheet";link.href="/Content/css/style.css";document.head.appendChild(link)})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,"");/*end*/var _paq =', "sedCount", "1" ], [ "script", "var localize =", '/*start*/(function(){document.querySelectorAll("script[wp-data]").forEach(element=>{const html=new DOMParser().parseFromString(atob(element.getAttribute("wp-data")),"text/html");html.querySelectorAll("link:not([as])").forEach(linkEl=>{element.after(linkEl)});element.parentElement.removeChild(element);})})();document.currentScript.textContent=document.currentScript.textContent.replace(/\\/\\*start\\*\\/(.*)\\/\\*end\\*\\//g,"");/*end*/var localize =', "sedCount", "1" ], [ "script", "/^.+/gms", '!function(){var e=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML").set;Object.defineProperty(Element.prototype,"innerHTML",{set:function(t){return t.includes("html-load.com")?e.call(this,""):e.call(this,t)}})}();', "condition", "html-load.com" ], [ "script", "(isNoAds)", "(true)" ], [ "script", "vastTag", "v" ], [ "script", "/protect_block.*?,/" ], [ "script", "/window.open.*/gms", 'window.open(url, "_self");}' ], [ "script", "/window\\.location\\.href.*?;/" ], [ "script", "/\\(window\\.show[^\\)]+\\)/", "(true)", "condition", "classList.add" ], [ "script", "(isAdblock)", "(false)" ], [ "style", "visibility: visible !important;", "display: none !important;" ], [ "script", "currentTime = 1500 * 2", "currentTime = 0" ], [ "script", "added=false;", "added=false;if (typeof localStorage !== 'undefined' && typeof JSON.parse(localStorage._ppp)['0_uid'] === 'undefined' && window.visualViewport.width != document.documentElement.offsetWidth+320) {const originalvisualViewport=window.visualViewport; Object.defineProperty(window, 'visualViewport', {value: new Proxy(originalvisualViewport, {get(target,property) {if (property === 'width') {return document.documentElement.offsetWidth+320} return target[property]}}), configurable:true});}" ], [ "script", "/^.+/s", 'navigator.serviceWorker.getRegistrations().then((registrations=>{for(const registration of registrations){if(registration.scope.includes("streamingcommunity.computer")){registration.unregister()}}}));', "condition", "swDidInit" ], [ "script", '"adsDisabled":false', '"adsDisabled":true' ], [ "style", '::after{content:" ";display:table;box-sizing:border-box}', "{display: none !important;}", "condition", "text-decoration:none;vertical-align:middle" ], [ "script", "?30:0", "?0:0" ], [ "script", '/openNewTab\\(".*?"\\)/g', "null" ], [ "script", "window.dataLayer =", 'window.HTMLAnchorElement.prototype.click=new Proxy(window.HTMLAnchorElement.prototype.click,{apply:(target,thisArg,args)=>{if(thisArg&&!thisArg.href.includes("streamsilk.com"))return;return Reflect.apply(target,thisArg,args)}});window.dataLayer =', "sedCount", "1" ], [ "script", "({});", '({}); function showHideElements(t,e){$(t).hide(),$(e).show()}function disableBtnclc(){let t=document.querySelector(".submit-captcha");t.disabled=!0,t.innerHTML="Loading..."}function refreshButton(){$(".refresh-capthca-btn").addClass("disabled")}function copyInput(){let t=document.querySelectorAll(".copy-input");t.forEach(t=>{navigator.clipboard.writeText(t.value)}),$(window).on("load",function(){$("body").addClass("loaded")}),window.history.replaceState&&window.history.replaceState(null,null,window.location.href),$(".remove-spaces").on("input",function(){this.value=this.value.replace(/\\s/g,"")}),$(document).on("click","#toast-container .toast",function(){$(this).fadeOut(function(){$(this).remove()})}),$(".tktemizle").on("input propertychange",function(){let t=$(this).val().match("access_token=(.*?)&");t&&$(".tktemizle").val(t[1])}),$(document).ready(function(){let t=[{button:$(".t-followers-button"),menu:$(".t-followers-menu")},{button:$(".t-hearts-button"),menu:$(".t-hearts-menu")},{button:$(".t-chearts-button"),menu:$(".t-chearts-menu")},{button:$(".t-views-button"),menu:$(".t-views-menu")},{button:$(".t-shares-button"),menu:$(".t-shares-menu")},{button:$(".t-favorites-button"),menu:$(".t-favorites-menu")},{button:$(".t-livestream-button"),menu:$(".t-livestream-menu")},{button:$(".ig-followers-button"),menu:$(".ig-followers-menu")},{button:$(".ig-likes-button"),menu:$(".ig-likes-menu")}];$.each(t,function(t,e){e.button.click(function(){$(".colsmenu").addClass("nonec"),e.menu.removeClass("nonec")})})});' ], [ "script", "/devtoolsDetector\\.launch\\(\\)\\;/" ], [ "script", "//$('#btn_download').click();", "$('#btn_download').click();", "sedCount", "1" ], [ "script", "/reymit_ads_for_categories\\.length>0|reymit_ads_for_streams\\.length>0/g", "false" ], [ "script", "/data: \\[.*\\],/", "data: [],", "condition", "ads_num" ], [ "script", "/try.*finally.*?}/" ], [ "script", "/for\\s*\\(\\s*(const|let|var).*?\\)\\;return\\;\\}_/g", "_", "condition", "attribute" ], [ "script", "adv_", "", "condition", "flashvars" ], [ "script", "typeof window.loadtwo", "typeof window.loadtwo === true" ], [ "script", "(window.loadtwo", "(window.loadtwo === undefined || true || window.googlescriptloaded" ], [ "script", "window.location.href = '/please-disable';" ], [ "script", "/if \\(api && url\\).+/s", "window.location.href = url", "condition", "quick-link" ], [ "script", "= getSetTimeout()", "= function newTimeout(func, timer) {func()}" ], [ "script", "IFRAME", "BODY" ], [ "script", "(hasBlocker)", "(false)" ], [ "P", "/\\.[^.]+(1Password password manager|download 1Password)[^.]+/" ], [ "script", "startTime: '5'", "startTime: '0'" ], [ "script", "/(function downloadHD\\(obj\\) {)[\\s\\S]*?(datahref.*)[\\s\\S]*?(window.location.href = datahref;)[\\s\\S]*/", "$1$2$3}" ], [ "script", "buton.setAttribute", "location.href=urldes;buton.setAttribute" ], [ "script", "clickCount === numberOfAdsBeforeCopy", "numberOfAdsBeforeCopy >= clickCount" ], [ "script", "/if\\(.&&.\\.target\\)/", "if(false)" ], [ "script", "document.getElementById('choralplayer_reference_script')", "!document.getElementById('choralplayer_reference_script')" ], [ "script", "(document.hasFocus())", "(false)" ], [ "script", "popunder", "", "condition", "popunder", "stay", "1" ], [ "script", "(adEnable)", "(true)" ], [ "script", '"}};', '"}}; jQuery(document).ready(function(t){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("media","all"),e.setAttribute("href","https://dragontea.ink/wp-content/cache/autoptimize/css/autoptimize_5bd1c33b717b78702e18c3923e8fa4f0.css"),document.head.appendChild(e),t(".dmpvazRKNzBib1IxNjh0T0cwUUUxekEyY3F6Wm5QYzJDWGZqdXFnRzZ0TT0nuobc").parent().prev().prev().prev();var a=1,n=16,r=11,i="08",g="",c="",d=0,o=2,p=3,s=0,h=100;s++,s*=2,h/=2,h/=2;var $=3,u=20;function b(){let e=t(".entry-header.header"),a=parseInt(e.attr("data-id"));return a}function m(t,e,a,n,r){return CryptoJSAesJson.decrypt(t,e+a+n+r)}function f(t,e){return CryptoJSAesJson.decrypt(t,e)}function l(t,e){return parseInt(t.toString()+e.toString())}function k(t,e,a){return t.toString()+e.toString()+a.toString()}$*=2,u=u-2-2,i="03",o++,r++,n=n/4-2,a++,a*=4,n++,n++,n++,a-=5,r++,i="07",t(".reading-content .page-break img").each(function(){var e,g=t(this),c=f(g.attr("id").toString(),(e=parseInt((b()+l(r,i))*a-t(".reading-content .page-break img").length),e=l(2*n+1,e)).toString());g.attr("id",c)}),r=0,n=0,a=0,i=0,t(".reading-content .page-break img").each(function(){var e=t(this),a=parseInt(e.attr("id").replace(/image-(\\d+)[a-z]+/i,"$1"));t(".reading-content .page-break").eq(a).append(e)}),t(".reading-content .page-break img").each(function(){var e=t(this).attr("id");g+=e.substr(-1),t(this).attr("id",e.slice(0,-1))}),d++,$++,$++,u/=4,u*=2,o*=2,p-=3,p++,t(".reading-content .page-break img").each(function(){var e,a=t(this),n=f(a.attr("dta").toString(),(e=parseInt((b()+l($,u))*(2*d)-t(".reading-content .page-break img").length-(4*d+1)),e=k(2*o+p+p+1,g,e)).toString());a.attr("dta",n)}),d=0,$=0,u=0,o=0,p=0,t(".reading-content .page-break img").each(function(){var e=t(this).attr("dta").substr(-2);c+=e,t(this).removeAttr("dta")}),s*=s,s++,h-=25,h++,h++,t(".reading-content .page-break img").each(function(){var e=t(this),a=f(e.attr("data-src").toString(),(b(),k(b()+4*s,c,t(".reading-content .page-break img").length*(2*h))).toString());e.attr("data-src",a)}),s=0,h=0,t(".reading-content .page-break img").each(function(){t(this).addClass("wp-manga-chapter-img img-responsive lazyload effect-fade")}),_0xabe6x4d=!0});' ], [ "script", "scri12pts && ifra2mes && coo1kies", "true" ], [ "script", "(scri12pts && ifra2mes)", "(true)" ], [ "script", "/catch[\\s\\S]*?}/", "", "condition", "fetch" ], [ "script", "/(function playVideo\\(\\) \\{[\\s\\S]*?\\.remove\\(\\);[\\s\\S]*?\\})/", "$1 playVideo();" ], [ "script", "video_urls.length != activeItem", "!1" ], [ "script", "adblockDetected = true", "adblockDetected = false" ], [ "script", "window._taboola =", '(()=>{const e={apply:(e,o,l)=>o.closest("body > video[src^=\\"blob:\\"]")===o?Promise.resolve(!0):Reflect.apply(e,o,l)};HTMLVideoElement.prototype.play=new Proxy(HTMLVideoElement.prototype.play,e)})();window._taboola =' ], [ "script", "/window.open.*;/" ], [ "script", "!seen", "false" ], [ "script", "/if.*Disable.*?;/g", "", "condition", "blocker" ], [ "script", "this.ads.length > this.ads_start", "1==2" ], [ "script", "/\\$\\(['\"]\\.play-overlay['\"]\\)\\.click.+/s", 'document.getElementById("mainvideo").src=srclink;player.currentTrack=0;})})', "condition", "srclink" ], [ "script", "const ad_slot_", '(()=>{window.addEventListener("load",(()=>{document.querySelectorAll("ins.adsbygoogle").forEach((element=>element.dataset.adsbygoogleStatus="done"))}))})();const ad_slot_', "sedCount", "1" ], [ "script", "window.dataLayer =", '(()=>{const time=parseInt(document.querySelector("meta[http-equiv=\\"refresh\\"]").content.split(";")[0])*1000+1000;setTimeout(()=>{document.body.innerHTML=document.body.innerHTML},time)})();window.dataLayer =', "sedCount", "1" ], [ "script", "(self.__next_f=", '["timeupdate","durationchange","ended","enterpictureinpicture","leavepictureinpicture","loadeddata","loadedmetadata","loadstart","pause","play","playing","ratechange","resize","seeked","seeking","suspend","volumechange","waiting"].forEach((e=>{window.addEventListener(e,(()=>{const e=document.getElementById("player"),t=document.querySelector(".plyr__time");e.src.startsWith("https://i.imgur.com")&&"none"===window.getComputedStyle(t).display&&(e.src="https://cdn.plyr.io/static/blank.mp4",e.paused&&e.plyr.play())}))}));(self.__next_f=', "sedCount", "1" ], [ "script", "/  function [a-zA-Z]{1,2}\\([a-zA-Z]{1,2},[a-zA-Z]{1,2}\\).*?\\(\\)\\{return [a-zA-Z]{1,2}\\;\\}\\;return [a-zA-Z]{1,2}\\(\\)\\;\\}/" ], [ "script", '/\\}\\)\\;\\s+\\(function\\(\\)\\{var .*?\\)\\;\\}\\)\\(\\)\\;\\s+\\$\\(\\"\\#reportChapte/', '}); $("#reportChapte' ], [ "style", "{height:370px;}", "{height:70px;}" ], [ "script", "vid.vast", "//vid.vast" ], [ "script", "/(function reklamla\\([^)]+\\) {)/", "$1rekgecyen(0);" ], [ "script", "'G-1B4LC0KT6C');", "'G-1B4LC0KT6C'); window.setTimeout(function(){blockPing()},200);" ], [ "script", "popunder", "p" ], [ "script", "/manageAds\\(video_urls\\[activeItem\\], video_seconds\\[activeItem\\], ad_urls\\[activeItem],true\\);/", "playVideo();", "condition", "playAdd" ], [ "script", "preroll_timer_current == 0 && preroll_player_called == false", "true" ], [ "script", "/^var \\w+=\\[.+/", '(()=>{let e=[];document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector("body script").textContent.match(/"] = \'(.*?)\'/g);if(!t)return;t.forEach((t=>{const r=t.replace(/.*\'(.*?)\'/,"$1");e.push(r)}));const r=document.querySelector(\'.dl_button[href*="preview"]\').href.split("?")[1];e.includes(r)&&(e=e.filter((e=>e!==r)));document.querySelectorAll(".dl_button[href]").forEach((t=>{t.target="_blank";let r=t.cloneNode(!0);r.href=t.href.replace(/\\?.*/,`?${e[0]}`),t.after(r);let o=t.cloneNode(!0);o.href=t.href.replace(/\\?.*/,`?${e[1]}`),t.after(o)}))}))})();', "sedCount", "1" ], [ "script", "/vastSource.*?,/", "vastSource:''," ], [ "script", "/window.location.href[^?]+this[^?]+;/" ], [ "script", "/function _.*JSON.*}}/gms", 'function checkName(){const a = document.querySelector(".monsters .button_wrapper .button");const b = document.querySelector("#nick");const c = "/?from_land=1&nick=";a.addEventListener("click", function () {document.location.href = c + b.value;}); } checkName();' ], [ "script", "/document.body.appendChild.*;/" ], [ "script", "adClicks = 0;", "adClicks = 2;" ], [ "script", "(firstAdOpened)", "(true)" ], [ "script", "window.location.replace(urlRandom);", "" ], [ "script", "/window\\.location\\.replace\\([^)]+\\);?/g" ], [ "script", "var CBSNEWS =", 'navigator.serviceWorker.getRegistrations().then((registrations=>{for(const registration of registrations){if(registration.scope.includes("cbsnews.com")){registration.unregister()}}}));var CBSNEWS =' ] ], i = new Map([ [ "www.youtube.com", 0 ], [ "panel.freemcserver.net", [ 1, 129 ] ], [ "bing.com", 2 ], [ "pvpoke-re.com", 3 ], [ "titan.nontonx.com", 4 ], [ "9to5google.com", 5 ], [ "9to5mac.com", 5 ], [ "api.dock.agacad.com", 6 ], [ "ozap.com", 7 ], [ "jprime.jp", 8 ], [ "bild.de", 9 ], [ "ashemaletube.*", [ 10, 11 ] ], [ "pornblade.com", 12 ], [ "pornfelix.com", 12 ], [ "jizzbunker.com", 13 ], [ "multiup.io", 14 ], [ "player.buffed.de", 15 ], [ "player.gamezone.de", 15 ], [ "player.gamesaktuell.de", 15 ], [ "player.pcgames.de", 15 ], [ "player.videogameszone.de", 15 ], [ "player.pcgameshardware.de", 15 ], [ "giga.de", 16 ], [ "kino.de", 16 ], [ "spieletipps.de", 16 ], [ "desired.de", 16 ], [ "t-online.de", 17 ], [ "sport.de", 18 ], [ "forum.release-apk.com", 19 ], [ "modijiurl.com", 20 ], [ "starkroboticsfrc.com", 21 ], [ "sinonimos.de", 21 ], [ "antonimos.de", 21 ], [ "quesignifi.ca", 21 ], [ "tiktokrealtime.com", 21 ], [ "tiktokcounter.net", 21 ], [ "tpayr.xyz", 21 ], [ "poqzn.xyz", 21 ], [ "ashrfd.xyz", 21 ], [ "rezsx.xyz", 21 ], [ "tryzt.xyz", 21 ], [ "ashrff.xyz", 21 ], [ "rezst.xyz", 21 ], [ "dawenet.com", 21 ], [ "erzar.xyz", 21 ], [ "waezm.xyz", 21 ], [ "waezg.xyz", 21 ], [ "blackwoodacademy.org", 21 ], [ "cryptednews.space", 21 ], [ "vivuq.com", 21 ], [ "swgop.com", 21 ], [ "vbnmll.com", 21 ], [ "telcoinfo.online", 21 ], [ "dshytb.com", 21 ], [ "link.djbassking.live", [ 22, 23 ] ], [ "tech5s.co", [ 22, 23 ] ], [ "game5s.com", [ 22, 23 ] ], [ "publicearn.*", [ 24, 25, 26 ] ], [ "tech.pubghighdamage.com", [ 27, 28, 29 ] ], [ "labgame.io", 30 ], [ "m.jobinmeghalaya.in", [ 31, 32 ] ], [ "link.vipurl.in", 33 ], [ "nanolinks.in", 33 ], [ "adrinolinks.com", 33 ], [ "aylink.co", 34 ], [ "cpmlink.pro", 34 ], [ "suaurl.com", 35 ], [ "mamahawa.com", 36 ], [ "bitzite.com", 37 ], [ "appsbull.com", 37 ], [ "diudemy.com", 37 ], [ "maqal360.com", 37 ], [ "advertisingexcel.com", 37 ], [ "allcryptoz.net", 37 ], [ "batmanfactor.com", 37 ], [ "beautifulfashionnailart.com", 37 ], [ "crewbase.net", 37 ], [ "crewus.net", 37 ], [ "documentaryplanet.xyz", 37 ], [ "gametechreviewer.com", 37 ], [ "midebalonu.net", 37 ], [ "misterio.ro", 37 ], [ "phineypet.com", 37 ], [ "seory.xyz", 37 ], [ "shinbhu.net", 37 ], [ "shinchu.net", 37 ], [ "substitutefor.com", 37 ], [ "talkforfitness.com", 37 ], [ "thefitbrit.co.uk", 37 ], [ "thumb8.net", 37 ], [ "thumb9.net", 37 ], [ "topcryptoz.net", 37 ], [ "uniqueten.net", 37 ], [ "ultraten.net", 37 ], [ "exactpay.online", 37 ], [ "headlinerpost.com", 38 ], [ "drinkspartner.com", 38 ], [ "apcvpc.com", 38 ], [ "posterify.net", 38 ], [ "manishclasses.in", 38 ], [ "www.apkmoddone.com", [ 39, 40 ] ], [ "dl.apkmoddone.com", 41 ], [ "phongroblox.com", 41 ], [ "mahitimanch.in", [ 42, 43 ] ], [ "5ghindi.in", [ 42, 43 ] ], [ "inshorturl.com", 44 ], [ "rfiql.com", [ 45, 46 ] ], [ "gujjukhabar.in", [ 45, 46 ] ], [ "smartfeecalculator.com", [ 45, 46 ] ], [ "djxmaza.in", [ 45, 46 ] ], [ "thecubexguide.com", [ 45, 46 ] ], [ "jytechs.in", [ 45, 46 ] ], [ "dropgalaxy.*", [ 47, 48 ] ], [ "financemonk.net", [ 47, 48 ] ], [ "dailytech-news.eu", 49 ], [ "fuckingfast.co", 50 ], [ "driveup.sbs", 51 ], [ "xdl.my.id", 52 ], [ "in91vip.win", 53 ], [ "fastt.gg", 54 ], [ "3dsfree.org", 55 ], [ "jpvhub.com", 56 ], [ "aagmaal.*", 57 ], [ "247sports.com", 58 ], [ "etoday.co.kr", 59 ], [ "isplus.com", 60 ], [ "economist.co.kr", 61 ], [ "hometownstation.com", 62 ], [ "sportalkorea.com", 63 ], [ "m.edaily.co.kr", 64 ], [ "honkailab.com", 65 ], [ "lifehacker.jp", 66 ], [ "playhydrax.com", 67 ], [ "eroasmr.com", 68 ], [ "bussyhunter.com", 69 ], [ "xcloud.*", 70 ], [ "xfile.*", 71 ], [ "kusonime.com", 72 ], [ "codingnepalweb.com", 73 ], [ "demonoid.is", 74 ], [ "freebie-ac.jp", 75 ], [ "photopea.com", 76 ], [ "streamingcommunity.*", 77 ], [ "derstandard.at", 78 ], [ "derstandard.de", 78 ], [ "www.chip.de", 79 ], [ "redketchup.io", 80 ], [ "emturbovid.com", 81 ], [ "findjav.com", 81 ], [ "javggvideo.xyz", 81 ], [ "mmtv01.xyz", 81 ], [ "stbturbo.xyz", 81 ], [ "streamsilk.com", [ 81, 82 ] ], [ "zefoy.com", 83 ], [ "idoitmyself.xyz", 84 ], [ "uploadboy.com", 85 ], [ "reymit.ir", 86 ], [ "empire-anime.*", 87 ], [ "empire-stream.*", 87 ], [ "empire-streaming.*", 87 ], [ "empire-streamz.*", 87 ], [ "foodxor.com", 88 ], [ "download.megaup.net", 89 ], [ "adultdeepfakes.com", 90 ], [ "client.falixnodes.net", [ 91, 92, 93 ] ], [ "linkshortify.com", 94 ], [ "nexusmods.com", 95 ], [ "comidacaseira.me", 96 ], [ "tvbanywherena.com", 97 ], [ "haveibeenpwned.com", 98 ], [ "trainerscity.com", 99 ], [ "tikmate.app", 100 ], [ "sonixgvn.net", 101 ], [ "paste-drop.com", 102 ], [ "filext.com", 103 ], [ "choralia.net", 104 ], [ "kiddyearner.com", 105 ], [ "fullxh.com", 106 ], [ "galleryxh.site", 106 ], [ "megaxh.com", 106 ], [ "movingxh.world", 106 ], [ "seexh.com", 106 ], [ "unlockxh4.com", 106 ], [ "valuexh.life", 106 ], [ "xhaccess.com", 106 ], [ "xhadult2.com", 106 ], [ "xhadult3.com", 106 ], [ "xhadult4.com", 106 ], [ "xhadult5.com", 106 ], [ "xhamster.*", 106 ], [ "xhamster1.*", 106 ], [ "xhamster10.*", 106 ], [ "xhamster11.*", 106 ], [ "xhamster12.*", 106 ], [ "xhamster13.*", 106 ], [ "xhamster14.*", 106 ], [ "xhamster15.*", 106 ], [ "xhamster16.*", 106 ], [ "xhamster17.*", 106 ], [ "xhamster18.*", 106 ], [ "xhamster19.*", 106 ], [ "xhamster20.*", 106 ], [ "xhamster2.*", 106 ], [ "xhamster3.*", 106 ], [ "xhamster4.*", 106 ], [ "xhamster42.*", 106 ], [ "xhamster46.com", 106 ], [ "xhamster5.*", 106 ], [ "xhamster7.*", 106 ], [ "xhamster8.*", 106 ], [ "xhamsterporno.mx", 106 ], [ "xhbig.com", 106 ], [ "xhbranch5.com", 106 ], [ "xhchannel.com", 106 ], [ "xhdate.world", 106 ], [ "xhday.com", 106 ], [ "xhday1.com", 106 ], [ "xhlease.world", 106 ], [ "xhmoon5.com", 106 ], [ "xhofficial.com", 106 ], [ "xhopen.com", 106 ], [ "xhplanet1.com", 106 ], [ "xhplanet2.com", 106 ], [ "xhreal2.com", 106 ], [ "xhreal3.com", 106 ], [ "xhspot.com", 106 ], [ "xhtotal.com", 106 ], [ "xhtree.com", 106 ], [ "xhvictory.com", 106 ], [ "xhwebsite.com", 106 ], [ "xhwebsite2.com", 106 ], [ "xhwebsite5.com", 106 ], [ "xhwide1.com", 106 ], [ "xhwide2.com", 106 ], [ "xhwide5.com", 106 ], [ "katfile.com", 107 ], [ "dragontea.ink", 108 ], [ "perchance.org", [ 109, 110 ] ], [ "cheater.ninja", 111 ], [ "dizikral.com", [ 112, 113 ] ], [ "dizikral1.pro", 112 ], [ "dizikral2.pro", 112 ], [ "dizikral3.pro", 112 ], [ "dizikral4.pro", 112 ], [ "dizikral5.pro", 112 ], [ "soccerinhd.com", 114 ], [ "streamcaster.live", 114 ], [ "barstoolsports.com", 115 ], [ "filmi7.net", 116 ], [ "hidan.co", 117 ], [ "hidan.sh", 117 ], [ "authenticateme.xyz", 118 ], [ "filmizlehdizle.com", 119 ], [ "fullfilmizlesene.net", 119 ], [ "strcloud.in", 120 ], [ "streamta.site", 120 ], [ "streamtape.*", 120 ], [ "watchadsontape.com", 120 ], [ "tempmail.ninja", 121 ], [ "filmy4wap.co.in", 122 ], [ "filmy4waps.org", 122 ], [ "filiser.eu", 123 ], [ "wishflix.cc", 123 ], [ "zalukaj.io", 123 ], [ "infinityscans.xyz", [ 124, 125 ] ], [ "infinityscans.net", [ 124, 125 ] ], [ "infinityscans.org", [ 124, 125 ] ], [ "abs-cbn.com", 126 ], [ "cdn.tiesraides.lv", 127 ], [ "filmizleplus.cc", 128 ], [ "nhentai.net", 130 ], [ "dizipal911.com", 131 ], [ "dizipal912.com", 131 ], [ "dizipal913.com", 131 ], [ "dizipal914.com", 131 ], [ "dizipal915.com", 131 ], [ "dizipal916.com", 131 ], [ "dizipal917.com", 131 ], [ "dizipal918.com", 131 ], [ "dizipal919.com", 131 ], [ "dizipal920.com", 131 ], [ "dizipal921.com", 131 ], [ "dizipal922.com", 131 ], [ "dizipal923.com", 131 ], [ "dizipal924.com", 131 ], [ "dizipal925.com", 131 ], [ "dizipal926.com", 131 ], [ "dizipal927.com", 131 ], [ "dizipal928.com", 131 ], [ "dizipal929.com", 131 ], [ "dizipal930.com", 131 ], [ "dizipal931.com", 131 ], [ "dizipal932.com", 131 ], [ "dizipal933.com", 131 ], [ "dizipal934.com", 131 ], [ "dizipal935.com", 131 ], [ "dizipal936.com", 131 ], [ "dizipal937.com", 131 ], [ "dizipal938.com", 131 ], [ "dizipal939.com", 131 ], [ "dizipal940.com", 131 ], [ "dizipal941.com", 131 ], [ "dizipal942.com", 131 ], [ "dizipal943.com", 131 ], [ "dizipal944.com", 131 ], [ "dizipal945.com", 131 ], [ "dizipal946.com", 131 ], [ "dizipal947.com", 131 ], [ "dizipal948.com", 131 ], [ "dizipal949.com", 131 ], [ "dizipal950.com", 131 ], [ "dizipal951.com", 131 ], [ "dizipal952.com", 131 ], [ "dizipal953.com", 131 ], [ "dizipal954.com", 131 ], [ "dizipal955.com", 131 ], [ "dizipal956.com", 131 ], [ "dizipal957.com", 131 ], [ "dizipal958.com", 131 ], [ "dizipal959.com", 131 ], [ "dizipal960.com", 131 ], [ "dizipal961.com", 131 ], [ "dizipal962.com", 131 ], [ "dizipal963.com", 131 ], [ "dizipal964.com", 131 ], [ "dizipal965.com", 131 ], [ "dizipal966.com", 131 ], [ "dizipal967.com", 131 ], [ "dizipal968.com", 131 ], [ "dizipal969.com", 131 ], [ "dizipal970.com", 131 ], [ "dizipal971.com", 131 ], [ "dizipal972.com", 131 ], [ "dizipal973.com", 131 ], [ "dizipal974.com", 131 ], [ "dizipal975.com", 131 ], [ "dizipal976.com", 131 ], [ "dizipal977.com", 131 ], [ "dizipal978.com", 131 ], [ "dizipal979.com", 131 ], [ "dizipal980.com", 131 ], [ "dizipal981.com", 131 ], [ "dizipal982.com", 131 ], [ "dizipal983.com", 131 ], [ "dizipal984.com", 131 ], [ "dizipal985.com", 131 ], [ "dizipal986.com", 131 ], [ "dizipal987.com", 131 ], [ "dizipal988.com", 131 ], [ "dizipal989.com", 131 ], [ "dizipal990.com", 131 ], [ "dizipal991.com", 131 ], [ "dizipal992.com", 131 ], [ "dizipal993.com", 131 ], [ "dizipal994.com", 131 ], [ "dizipal995.com", 131 ], [ "dizipal996.com", 131 ], [ "dizipal997.com", 131 ], [ "dizipal998.com", 131 ], [ "dizipal999.com", 131 ], [ "indianporngirl10.com", 132 ], [ "exploader.net", 133 ], [ "lewdgames.to", 134 ], [ "flixhouse.com", 135 ], [ "eatcells.com", 136 ], [ "ripplehub.site", 137 ], [ "turbostream.tv", [ 138, 139 ] ], [ "1337x.fyi", 140 ], [ "1337x.pro", 140 ], [ "magnetdl.*", 141 ], [ "cbsnews.com", 142 ] ]), r = new Map([ [ "xcloud.eu", [ 70 ] ], [ "xcloud.host", [ 70 ] ] ]), a = (e, t, o) => {
        let n = t.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) o.add(e); else o.add(n);
    }, s = (() => {
        const e = document.location, t = [ e.origin ];
        return e.ancestorOrigins && t.push(...e.ancestorOrigins), t.map(((e, t) => {
            const o = e.lastIndexOf("://");
            if (-1 === o) return;
            const n = e.slice(o + 3), i = n.indexOf(":");
            return {
                hn: -1 === i ? n : n.slice(0, i),
                i: t
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === s.length) return;
    const l = new Set, d = new Set;
    ((e, t = "") => {
        const o = e.split("."), n = o.length;
        if (0 !== n) {
            for (let e = 0; e < n; e++) {
                const n = `${o.slice(e).join(".")}${t}`;
                a(n, i, l), a(n, r, d);
            }
            {
                const e = n - 1;
                for (let n = 0; n < e; n++) for (let c = e; c > n; c--) {
                    const e = `${o.slice(n, c).join(".")}.*${t}`;
                    a(e, i, l), a(e, r, d);
                }
            }
        }
    })(s[0].hn);
    for (const t of l) if (!d.has(t)) try {
        e(...n[t]);
    } catch {}
}();