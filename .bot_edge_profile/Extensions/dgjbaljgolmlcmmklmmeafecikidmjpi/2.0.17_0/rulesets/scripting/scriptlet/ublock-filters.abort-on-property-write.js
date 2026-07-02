!function() {
    function o(o = "") {
        if ("string" != typeof o) return;
        if ("" === o) return;
        const t = e(), a = t.makeLogPrefix("abort-on-property-write", o), r = function() {
            const o = function() {
                const o = e();
                return o.String_fromCharCode(Date.now() % 26 + 97) + o.Math_floor(982451653 * o.Math_random() + 982451653).toString(36);
            }(), t = self.onerror;
            return self.onerror = function(e, ...a) {
                return !("string" != typeof e || !e.includes(o)) || (t instanceof Function ? t.call(this, e, ...a) : void 0);
            }.bind(), o;
        }();
        let c = window;
        for (;;) {
            const e = o.indexOf(".");
            if (-1 === e) break;
            if (c = c[o.slice(0, e)], c instanceof Object == 0) return;
            o = o.slice(e + 1);
        }
        delete c[o], Object.defineProperty(c, o, {
            set: function() {
                throw t.uboLog(a, "Aborted"), new ReferenceError(r);
            }
        });
    }
    function e() {
        if (t.safeSelf) return t.safeSelf;
        const o = globalThis, e = {
            Array_from: Array.from,
            Error: o.Error,
            Function_toStringFn: o.Function.prototype.toString,
            Function_toString: o => e.Function_toStringFn.call(o),
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
            RegExp: o.RegExp,
            RegExp_test: o.RegExp.prototype.test,
            RegExp_exec: o.RegExp.prototype.exec,
            Request_clone: o.Request.prototype.clone,
            String: o.String,
            String_fromCharCode: String.fromCharCode,
            String_split: String.prototype.split,
            XMLHttpRequest: o.XMLHttpRequest,
            addEventListener: o.EventTarget.prototype.addEventListener,
            removeEventListener: o.EventTarget.prototype.removeEventListener,
            fetch: o.fetch,
            JSON: o.JSON,
            JSON_parseFn: o.JSON.parse,
            JSON_stringifyFn: o.JSON.stringify,
            JSON_parse: (...o) => e.JSON_parseFn.call(e.JSON, ...o),
            JSON_stringify: (...o) => e.JSON_stringifyFn.call(e.JSON, ...o),
            log: void 0,
            logLevel: 0,
            makeLogPrefix(...o) {
                return this.sendToLogger && `[${o.join(" ⁝ ")}]` || "";
            },
            uboLog(...o) {
                if (void 0 !== this.sendToLogger && void 0 !== o && "" !== o[0]) return this.sendToLogger("info", ...o);
            },
            uboErr(...o) {
                if (void 0 !== this.sendToLogger && void 0 !== o && "" !== o[0]) return this.sendToLogger("error", ...o);
            },
            escapeRegexChars: o => o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            initPattern(o, e = {}) {
                if ("" === o) return {
                    matchAll: !0,
                    expect: !0
                };
                const t = !0 !== e.canNegate || !1 === o.startsWith("!");
                !1 === t && (o = o.slice(1));
                const a = /^\/(.+)\/([gimsu]*)$/.exec(o);
                return null !== a ? {
                    re: new this.RegExp(a[1], a[2] || e.flags),
                    expect: t
                } : void 0 !== e.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(o), e.flags),
                    expect: t
                } : {
                    pattern: o,
                    expect: t
                };
            },
            testPattern(o, e) {
                return !!o.matchAll || (o.re ? this.RegExp_test.call(o.re, e) === o.expect : e.includes(o.pattern) === o.expect);
            },
            patternToRegex(o, e, t = !1) {
                if ("" === o) return /^/;
                const a = /^\/(.+)\/([gimsu]*)$/.exec(o);
                if (null === a) {
                    const a = this.escapeRegexChars(o);
                    return new RegExp(t ? `^${a}$` : a, e);
                }
                try {
                    return new RegExp(a[1], a[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(o, e = 0) {
                const t = o.slice(e).reduce(((o, e, t, a) => {
                    if (0 == (1 & t)) {
                        const e = a[t + 1], r = /^\d+$/.test(e) ? parseInt(e, 10) : e;
                        o.push([ a[t], r ]);
                    }
                    return o;
                }), []);
                return this.Object_fromEntries(t);
            },
            onIdle: (e, t) => o.requestIdleCallback ? o.requestIdleCallback(e, t) : o.requestAnimationFrame(e),
            offIdle: e => o.requestIdleCallback ? o.cancelIdleCallback(e) : o.cancelAnimationFrame(e)
        };
        if (t.safeSelf = e, void 0 === t.bcSecret) return e;
        e.logLevel = t.logLevel || 1;
        let a = "", r = "", c = 0;
        e.toLogText = (o, ...e) => {
            if (0 === e.length) return;
            const t = `[${document.location.hostname || document.location.href}]${e.join(" ")}`;
            return t === r && o === a && Date.now() - c < 5e3 ? void 0 : (a = o, r = t, c = Date.now(), 
            t);
        };
        try {
            const a = new o.BroadcastChannel(t.bcSecret);
            let r = [];
            e.sendToLogger = (o, ...t) => {
                const c = e.toLogText(o, ...t);
                if (void 0 !== c) return void 0 === r ? a.postMessage({
                    what: "messageToLogger",
                    type: o,
                    text: c
                }) : void r.push({
                    type: o,
                    text: c
                });
            }, a.onmessage = o => {
                switch (o.data) {
                  case "iamready!":
                    if (void 0 === r) break;
                    r.forEach((({type: o, text: e}) => a.postMessage({
                        what: "messageToLogger",
                        type: o,
                        text: e
                    }))), r = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    e.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    e.logLevel = 2;
                }
            }, a.postMessage("areyouready?");
        } catch {
            e.sendToLogger = (o, ...t) => {
                const a = e.toLogText(o, ...t);
                void 0 !== a && e.log(`uBO ${a}`);
            };
        }
        return e;
    }
    const t = {}, a = [ [ "SZAdBlockDetection" ], [ "_sp_" ], [ "yafaIt" ], [ "Fingerprint2" ], [ "Fingerprent2" ], [ "adcashMacros" ], [ "open" ], [ "openLity" ], [ "ad_abblock_ad" ], [ "Adcash" ], [ "cticodes" ], [ "imgadbpops" ], [ "__aaZoneid" ], [ "IS_ADBLOCK" ], [ "__NA" ], [ "ads_priv" ], [ "ab_detected" ], [ "t4PP" ], [ "sc_adv_out" ], [ "pURL" ], [ "AdBlockDetectorWorkaround" ], [ "__htapop" ], [ "atOptions" ], [ "popzone" ], [ "encodeURIComponent" ], [ "stagedPopUnder" ], [ "closeMyAd" ], [ "smrtSP" ], [ "tiPopAction" ], [ "ExoLoader" ], [ "adv_pre_duration" ], [ "adv_post_duration" ], [ "hidekeep" ], [ "ShowAdbblock" ], [ "lifeOnwer" ], [ "smrtSB" ], [ "EPeventFire" ], [ "adBlockDetected" ], [ "segs_pop" ], [ "$getWin" ], [ "xhr.prototype.realSend" ], [ "popUpUrl" ], [ "btoa" ], [ "decodeURIComponent" ], [ "adsHeight" ], [ "adsBlocked" ], [ "SubmitDownload1" ], [ "getIfc" ], [ "adBlockRunning" ], [ "I833" ], [ "Aloader" ], [ "bindall" ], [ "KillAdBlock" ], [ "checkAdBlocker" ], [ "deployads" ], [ "close_screen" ], [ "mockingbird" ], [ "checkAds" ], [ "check" ], [ "decodeURI" ], [ "downloadJSAtOnload" ], [ "ReactAds" ], [ "phtData" ], [ "killAdBlock" ], [ "adBlocker" ], [ "Ha" ], [ "spot" ], [ "block_detected" ], [ "document.getElementsByClassName" ], [ "ABD" ], [ "mfbDetect" ], [ "ab_cl" ], [ "ai_adb_overlay" ], [ "showMsgAb" ], [ "wutimeBotPattern" ], [ "popup_ads" ], [ "adblockerpopup" ], [ "adblockCheck" ], [ "cancelAdBlocker" ], [ "adblock" ], [ "ExoSupport" ], [ "mobilePop" ], [ "base64_decode" ], [ "mdp_deblocker" ], [ "showModal" ], [ "daCheckManager" ], [ "backgroundBanner" ], [ "AdBDetected" ], [ "onScriptError" ], [ "AdbModel" ], [ "window.onload" ], [ "displayCache" ], [ "SpecialUp" ], [ "ai_front" ], [ "tmnramp" ], [ "onpopstate" ], [ "__C" ], [ "HTMLElement.prototype.insertAdjacentHTML" ], [ "app_advert" ], [ "puShown" ], [ "ospen" ], [ "afScript" ], [ "b2a" ], [ "_chjeuHenj" ], [ "bullads" ], [ "detector_launch" ], [ "afStorage" ], [ "adBlocked" ], [ "u_cfg" ], [ "p$00a" ], [ "c325" ], [ "akadb" ], [ "BetterJsPop" ], [ "DOMAssistant" ], [ "rotator" ], [ "Script_Manager" ], [ "NREUM" ], [ "pbjs" ], [ "detectAdblocker" ], [ "document.ready" ], [ "auto_safelink" ], [ "counter" ], [ "adBlckActive" ], [ "infoey" ], [ "popName" ], [ "checkAdsStatus" ], [ "protection" ], [ "uBlockActive" ], [ "HTMLScriptElement.prototype.onerror" ], [ "canRunAds" ], [ "DoodPop" ], [ "detectedAdblock" ], [ "_pop" ], [ "showADBOverlay" ], [ "adbEnableForPage" ], [ "ADMITAD" ], [ "ftr__startScriptLoad" ], [ "CoinNebula" ] ], r = new Map([ [ "sueddeutsche.de", 0 ], [ "autobytel.com", 1 ], [ "cesoirtv.com", 1 ], [ "huffingtonpost.co.uk", 1 ], [ "huffingtonpost.com", 1 ], [ "moviefone.com", 1 ], [ "playboy.de", 1 ], [ "car.com", 1 ], [ "codeproject.com", 1 ], [ "familyhandyman.com", 1 ], [ "goldderby.com", 1 ], [ "headlinepolitics.com", 1 ], [ "html.net", 1 ], [ "indiewire.com", 1 ], [ "marmiton.org", 1 ], [ "mymotherlode.com", 1 ], [ "nypost.com", 1 ], [ "realgm.com", 1 ], [ "tvline.com", 1 ], [ "wwd.com", 1 ], [ "bordertelegraph.com", 1 ], [ "bournemouthecho.co.uk", 1 ], [ "dailyecho.co.uk", 1 ], [ "dorsetecho.co.uk", 1 ], [ "eveningtimes.co.uk", 1 ], [ "guardian-series.co.uk", 1 ], [ "heraldscotland.com", 1 ], [ "iwcp.co.uk", 1 ], [ "lancashiretelegraph.co.uk", 1 ], [ "oxfordmail.co.uk", 1 ], [ "salisburyjournal.co.uk", 1 ], [ "theargus.co.uk", 1 ], [ "thetelegraphandargus.co.uk", 1 ], [ "yorkpress.co.uk", 1 ], [ "wunderground.com", 1 ], [ "lapresse.ca", 1 ], [ "eurogamer.net", 2 ], [ "rockpapershotgun.com", 2 ], [ "vg247.com", 2 ], [ "dfiles.eu", 3 ], [ "downsub.com", 3 ], [ "j.gs", 3 ], [ "macserial.com", 3 ], [ "microify.com", 3 ], [ "minecraft-forum.net", 3 ], [ "onmovies.*", 3 ], [ "pirateproxy.*", 3 ], [ "psarips.*", 3 ], [ "solidfiles.com", 3 ], [ "thepiratebay.org", 3 ], [ "uptobox.com", 3 ], [ "steamplay.*", [ 3, 5, 137 ] ], [ "streamp1ay.*", [ 3, 4, 5 ] ], [ "adshort.*", 3 ], [ "pic-upload.de", 3 ], [ "oke.io", 3 ], [ "dz4link.com", 3 ], [ "imgdew.*", 3 ], [ "imgmaze.*", 3 ], [ "imgoutlet.*", 3 ], [ "imgtown.*", 3 ], [ "imgview.*", 3 ], [ "imgclick.net", 3 ], [ "adsrt.*", 3 ], [ "mp3guild.*", 3 ], [ "mp3clan.*", 3 ], [ "pouvideo.*", [ 3, 4, 5 ] ], [ "povvideo.*", [ 3, 4, 5 ] ], [ "povvldeo.*", 3 ], [ "povw1deo.*", [ 3, 4, 5 ] ], [ "povwideo.*", [ 3, 4, 5 ] ], [ "powv1deo.*", [ 3, 4, 5 ] ], [ "powvibeo.*", [ 3, 4, 5 ] ], [ "powvideo.*", [ 3, 4, 5 ] ], [ "powvldeo.*", [ 3, 4, 5 ] ], [ "downloadpirate.com", 3 ], [ "grantorrent.*", 3 ], [ "grantorrent1.*", 3 ], [ "ddlvalley.*", 3 ], [ "inkapelis.*", [ 3, 27, 35 ] ], [ "pnd.*", 3 ], [ "spycock.com", 3 ], [ "ausfile.com", [ 3, 46 ] ], [ "xrivonet.info", 3 ], [ "imgrock.*", 3 ], [ "hdvid.*", [ 3, 22, 35 ] ], [ "onvid.*", [ 3, 35 ] ], [ "ovid.*", [ 3, 35 ] ], [ "vidhd.*", [ 3, 35 ] ], [ "crohasit.*", 3 ], [ "streamingworld.*", 3 ], [ "putlocker9.*", 3 ], [ "kstreaming.*", 3 ], [ "pingit.*", 3 ], [ "tusfiles.com", 3 ], [ "hexupload.net", 3 ], [ "yggtorrent.*", 3 ], [ "iir.ai", 3 ], [ "souqsky.net", 3 ], [ "racaty.*", 3 ], [ "miraculous.to", 3 ], [ "movie123.*", 3 ], [ "file-upload.*", 3 ], [ "putlocker.*", [ 5, 6 ] ], [ "mp4upload.com", 5 ], [ "mitly.us", [ 5, 22 ] ], [ "pelisplus.*", [ 5, 27, 35 ] ], [ "pelisplushd.*", 5 ], [ "shrt10.com", 5 ], [ "pelix.*", [ 5, 27, 35 ] ], [ "atomixhq.*", 5 ], [ "pctfenix.*", 5 ], [ "pctnew.*", 5 ], [ "fembed.*", 5 ], [ "mavplay.*", 5 ], [ "videobb.*", 5 ], [ "ebook3000.com", 5 ], [ "longfiles.com", 5 ], [ "shorttey.*", 5 ], [ "elitetorrent.*", 5 ], [ "estrenosflix.*", 5 ], [ "estrenosflux.*", 5 ], [ "estrenosgo.*", 5 ], [ "tormalayalam.*", 5 ], [ "ytanime.tv", 5 ], [ "cine-calidad.*", 5 ], [ "extratorrents.*", 5 ], [ "glotorrents.fr-proxy.com", [ 5, 59 ] ], [ "rmdown.com", 6 ], [ "xopenload.me", 6 ], [ "at.wetter.com", 7 ], [ "powerthesaurus.org", 8 ], [ "yts.*", 9 ], [ "embedstreams.top", 9 ], [ "gogoanime.co.in", 9 ], [ "icelz.to", 9 ], [ "streamtp1.com", 9 ], [ "1qwebplay.xyz", 9 ], [ "dlhd.so", 9 ], [ "flstv.online", 9 ], [ "mmastreams.me", 9 ], [ "mylivestream.pro", 9 ], [ "streambtw.com", 9 ], [ "tennisonline.me", 9 ], [ "voodc.com", 9 ], [ "closedjelly.net", 9 ], [ "sportsonline.so", 9 ], [ "onloop.pro", 9 ], [ "anarchy-stream.com", 9 ], [ "olalivehdplay.ru", 9 ], [ "pawastreams.info", 9 ], [ "vidlink.pro", 9 ], [ "wooflix.tv", 9 ], [ "imgadult.com", [ 10, 11 ] ], [ "imgdrive.net", [ 10, 11 ] ], [ "imgtaxi.com", [ 10, 11 ] ], [ "imgwallet.com", [ 10, 11 ] ], [ "sxyprn.*", 12 ], [ "streamhub.*", 12 ], [ "nozomi.la", 12 ], [ "nudostar.com", 12 ], [ "slutmesh.net", 12 ], [ "azel.info", 12 ], [ "clip-sex.biz", 12 ], [ "justpicsplease.com", 12 ], [ "klmanga.*", 12 ], [ "lucagrassetti.com", 12 ], [ "manga1001.*", 12 ], [ "mangaraw.*", 12 ], [ "mangarawjp.*", 12 ], [ "mangarow.org", 12 ], [ "mihand.ir", 12 ], [ "nudecelebsimages.com", 12 ], [ "overwatchporn.xxx", 12 ], [ "pornium.net", 12 ], [ "syosetu.me", 12 ], [ "xnxxw.net", 12 ], [ "xxxymovies.com", 12 ], [ "yurineko.net", 12 ], [ "tokyomotion.com", 12 ], [ "tube8.*", 13 ], [ "hdpornt.com", 14 ], [ "4tube.com", 15 ], [ "pornerbros.com", 15 ], [ "perfectgirls.*", 15 ], [ "perfektdamen.*", 15 ], [ "uflash.tv", 15 ], [ "mp3cut.net", 16 ], [ "mcfucker.com", 17 ], [ "taroot-rangi.com", 18 ], [ "mangoporn.net", 19 ], [ "xiaopan.co", 20 ], [ "parents.at", 20 ], [ "realgfporn.com", 21 ], [ "linkrex.net", 21 ], [ "alotporn.com", 21 ], [ "payskip.org", 22 ], [ "imgdawgknuttz.com", 22 ], [ "shorterall.com", 22 ], [ "supergoku.com", 22 ], [ "descarga.xyz", [ 22, 35 ] ], [ "adcorto.*", 22 ], [ "ukrainesmodels.com", 22 ], [ "sexuhot.com", 22 ], [ "messitv.net", 22 ], [ "empflix.com", 23 ], [ "freeviewmovies.com", 24 ], [ "badjojo.com", 24 ], [ "boysfood.com", 24 ], [ "pornhost.com", 24 ], [ "sextingforum.net", 25 ], [ "rojadirecta.*", [ 26, 27 ] ], [ "tarjetarojatvonline.*", [ 26, 27 ] ], [ "rojadirectatv.*", 27 ], [ "aquipelis.*", [ 27, 35 ] ], [ "newpelis.*", [ 27, 35 ] ], [ "legionprogramas.org", [ 27, 35 ] ], [ "befap.com", 28 ], [ "erome.com", 28 ], [ "pictoa.com", 28 ], [ "cumlouder.com", 29 ], [ "chyoa.com", 29 ], [ "cnnamador.com", [ 30, 31 ] ], [ "arlinadzgn.com", 32 ], [ "idntheme.com", 32 ], [ "problogbooster.com", 32 ], [ "pronpic.org", 33 ], [ "op.gg", 34 ], [ "ciberdvd.*", 35 ], [ "pelisgratis.*", 35 ], [ "peliculas24.*", 35 ], [ "voirfilms.*", 35 ], [ "pastepvp.org", 35 ], [ "programasvirtualespc.net", 35 ], [ "cinetux.*", 35 ], [ "thevidhd.*", 35 ], [ "allcalidad.*", 35 ], [ "awdescargas.com", 35 ], [ "megawarez.org", 35 ], [ "eporner.com", 36 ], [ "theralphretort.com", 37 ], [ "yoututosjeff.*", 37 ], [ "androidaba.*", 37 ], [ "vidcloud.*", 37 ], [ "seselah.com", 37 ], [ "descarga-animex.*", 37 ], [ "bollywoodshaadis.com", 37 ], [ "practicequiz.com", 37 ], [ "wapkiz.com", 37 ], [ "pianokafe.com", 37 ], [ "apritos.com", 37 ], [ "bsierad.com", 37 ], [ "diminimalis.com", 37 ], [ "eksporimpor.com", 37 ], [ "jadijuara.com", 37 ], [ "kicaunews.com", 37 ], [ "palapanews.com", 37 ], [ "ridvanmau.com", 37 ], [ "yeutienganh.com", 37 ], [ "telecharger-igli4.*", 37 ], [ "aalah.me", 37 ], [ "academiadelmotor.es", 37 ], [ "aiailah.com", 37 ], [ "almursi.com", 37 ], [ "altebwsneno.blogspot.com", 37 ], [ "ambonkita.com", 37 ], [ "androidspill.com", 37 ], [ "aplus.my.id", 37 ], [ "arrisalah-jakarta.com", 37 ], [ "babyjimaditya.com", 37 ], [ "bbyhaber.com", 37 ], [ "beritabangka.com", 37 ], [ "beritasulteng.com", 37 ], [ "bestsellerforaday.com", 37 ], [ "bintangplus.com", 37 ], [ "bitco.world", 37 ], [ "br.nacaodamusica.com", 37 ], [ "bracontece.com.br", 37 ], [ "dicariguru.com", 37 ], [ "fairforexbrokers.com", 37 ], [ "foguinhogames.net", 37 ], [ "formasyonhaber.net", 37 ], [ "fullvoyeur.com", 37 ], [ "healbot.dpm15.net", 37 ], [ "indofirmware.site", 37 ], [ "hagalil.com", 37 ], [ "latribunadelpaisvasco.com", 37 ], [ "line-stickers.com", 37 ], [ "luxurydreamhomes.net", 37 ], [ "m5g.it", 37 ], [ "miltonfriedmancores.org", 37 ], [ "minutolivre.com", 37 ], [ "oportaln10.com.br", 37 ], [ "pedroinnecco.com", 37 ], [ "philippinenmagazin.de", 37 ], [ "piazzagallura.org", 37 ], [ "pornflixhd.com", 37 ], [ "safehomefarm.com", 37 ], [ "synoniemboek.com", 37 ], [ "techacrobat.com", 37 ], [ "elizabeth-mitchell.org", 37 ], [ "mongri.net", 37 ], [ "svapo.it", 37 ], [ "papalah.com", 37 ], [ "pipocamoderna.com.br", 37 ], [ "space.tribuntekno.com", 37 ], [ "lampungway.com", 37 ], [ "notiziemusica.it", 37 ], [ "peliculasmx.net", 38 ], [ "geo.fr", 39 ], [ "cbc.ca", 40 ], [ "cuevana3.*", 41 ], [ "igg-games.com", 42 ], [ "foumovies.*", 43 ], [ "holavid.com", 43 ], [ "downloadming.*", 43 ], [ "tasma.ru", 43 ], [ "vinaurl.*", 44 ], [ "zigforums.com", 45 ], [ "medeberiyas.com", 45 ], [ "hotpornfile.org", 47 ], [ "donnaglamour.it", 48 ], [ "elixx.*", 49 ], [ "pornvideospass.com", [ 50, 51 ] ], [ "svipvids.com", 52 ], [ "jnovels.com", 52 ], [ "chd4.com", 53 ], [ "forum.cstalking.tv", 53 ], [ "namemc.com", 54 ], [ "hawtcelebs.com", 55 ], [ "canadianunderwriter.ca", 56 ], [ "creativebusybee.com", 57 ], [ "ohorse.com", 58 ], [ "myegy.*", 59 ], [ "freepornhdonlinegay.com", 59 ], [ "gsm1x.xyz", 60 ], [ "softwarecrackguru.com", 60 ], [ "hotgameplus.com", 60 ], [ "mrdeepfakes.com", [ 61, 62 ] ], [ "donk69.com", 62 ], [ "hotdreamsxxx.com", 62 ], [ "puzzlefry.com", 63 ], [ "theglobeandmail.com", 64 ], [ "mtlblog.com", 65 ], [ "narcity.com", 65 ], [ "thepiratebay.*", 66 ], [ "thepiratebay10.org", 66 ], [ "jizzbunker.com", 66 ], [ "xxxdan.com", 66 ], [ "mtsproducoes.*", 67 ], [ "moonquill.com", 68 ], [ "macrotrends.net", 69 ], [ "investmentwatchblog.com", 69 ], [ "myfreeblack.com", 70 ], [ "notebookcheck.*", 71 ], [ "mysostech.com", 72 ], [ "medihelp.life", 72 ], [ "camchickscaps.com", 72 ], [ "filesharing.io", 73 ], [ "dreamdth.com", 74 ], [ "acefile.co", 75 ], [ "beautypackaging.com", 76 ], [ "puhutv.com", 77 ], [ "oranhightech.com", 78 ], [ "mad4wheels.com", 79 ], [ "allporncomic.com", 80 ], [ "m.viptube.com", 81 ], [ "kingsofteens.com", 82 ], [ "godmods.com", 83 ], [ "winit.heatworld.com", 84 ], [ "shop123.com.tw", 85 ], [ "boyfriendtv.com", 86 ], [ "catcare.store", 87 ], [ "bitzite.com", 88 ], [ "aiimgvlog.fun", 89 ], [ "laweducationinfo.com", 90 ], [ "savemoneyinfo.com", 90 ], [ "worldaffairinfo.com", 90 ], [ "godstoryinfo.com", 90 ], [ "successstoryinfo.com", 90 ], [ "cxissuegk.com", 90 ], [ "learnmarketinfo.com", 90 ], [ "bhugolinfo.com", 90 ], [ "armypowerinfo.com", 90 ], [ "rsgamer.app", 90 ], [ "phonereviewinfo.com", 90 ], [ "makeincomeinfo.com", 90 ], [ "gknutshell.com", 90 ], [ "vichitrainfo.com", 90 ], [ "workproductivityinfo.com", 90 ], [ "dopomininfo.com", 90 ], [ "hostingdetailer.com", 90 ], [ "fitnesssguide.com", 90 ], [ "tradingfact4u.com", 90 ], [ "cryptofactss.com", 90 ], [ "softwaredetail.com", 90 ], [ "artoffocas.com", 90 ], [ "insurancesfact.com", 90 ], [ "travellingdetail.com", 90 ], [ "pngitem.com", 90 ], [ "tubev.sex", 91 ], [ "xnxx-sexfilme.com", 92 ], [ "mc-hacks.net", 93 ], [ "wristreview.com", 93 ], [ "tomshardware.*", 94 ], [ "hentaifreak.org", 95 ], [ "moviesnation.*", 95 ], [ "animepahe.*", 96 ], [ "th-cam.com", 97 ], [ "jocooks.com", 97 ], [ "kusonime.com", 98 ], [ "movies4u.*", 98 ], [ "anime7.download", 98 ], [ "hotscopes.*", 99 ], [ "kat.*", 100 ], [ "katbay.*", 100 ], [ "kickass.*", 100 ], [ "kickasshydra.*", 100 ], [ "kickasskat.*", 100 ], [ "kickass2.*", 100 ], [ "kickasstorrents.*", 100 ], [ "kat2.*", 100 ], [ "kattracker.*", 100 ], [ "thekat.*", 100 ], [ "thekickass.*", 100 ], [ "kickassz.*", 100 ], [ "kickasstorrents2.*", 100 ], [ "topkickass.*", 100 ], [ "kickassgo.*", 100 ], [ "kkickass.*", 100 ], [ "kkat.*", 100 ], [ "kickasst.*", 100 ], [ "kick4ss.*", 100 ], [ "akwam.*", 101 ], [ "eg-akw.com", 101 ], [ "khsm.io", 101 ], [ "xn--mgba7fjn.cc", 101 ], [ "ubuntudde.com", 102 ], [ "depvailon.com", 103 ], [ "gload.to", 104 ], [ "agrarwetter.net", 105 ], [ "extratorrent.*", 106 ], [ "torrentstatus.*", 106 ], [ "yts2.*", 106 ], [ "y2mate.*", 106 ], [ "leaknud.com", 106 ], [ "daddylive.*", 106 ], [ "archpaper.com", 107 ], [ "livetvon.*", 108 ], [ "daddylivehd.*", 108 ], [ "worldstreams.click", 108 ], [ "dlhd.sx", 108 ], [ "hdmoviesflix.*", 109 ], [ "pornkai.com", 110 ], [ "tubesafari.com", 110 ], [ "writedroid.*", 111 ], [ "zedporn.com", 112 ], [ "diendancauduong.com", [ 113, 114 ] ], [ "hanime.xxx", 115 ], [ "hentaihaven.xxx", 115 ], [ "thetimes.co.uk", 116 ], [ "newscon.org", 117 ], [ "true-gaming.net", 118 ], [ "manga1000.*", 119 ], [ "batchkun.com", 120 ], [ "yify-subtitles.org", 121 ], [ "chat.tchatche.com", 122 ], [ "cryptoearns.com", 123 ], [ "pureleaks.net", 124 ], [ "starzunion.com", 125 ], [ "androidecuatoriano.xyz", 125 ], [ "satdl.com", 126 ], [ "osuskinner.com", 127 ], [ "osuskins.net", 127 ], [ "tekkenmods.com", 128 ], [ "kiddyearner.com", 129 ], [ "dood.*", 130 ], [ "doods.*", 130 ], [ "dooodster.com", 130 ], [ "dooood.*", 130 ], [ "ds2play.com", 130 ], [ "popcdn.day", 131 ], [ "pak-mcqs.net", 132 ], [ "rubystm.com", 133 ], [ "rubyvid.com", 133 ], [ "rubyvidhub.com", 133 ], [ "stmruby.com", 133 ], [ "streamruby.com", 133 ], [ "savefiles.com", 133 ], [ "ragnarokscanlation.opchapters.com", 134 ], [ "frogogo.ru", 135 ], [ "mediamarkt.de", 136 ] ]), c = new Map([ [ "pingit.com", [ 3 ] ] ]), n = (o, e, t) => {
        let a = e.get(o);
        if (void 0 !== a) if ("number" != typeof a) for (const o of a) t.add(o); else t.add(a);
    }, s = (() => {
        const o = document.location, e = [ o.origin ];
        return o.ancestorOrigins && e.push(...o.ancestorOrigins), e.map(((o, e) => {
            const t = o.lastIndexOf("://");
            if (-1 === t) return;
            const a = o.slice(t + 3), r = a.indexOf(":");
            return {
                hn: -1 === r ? a : a.slice(0, r),
                i: e
            };
        })).filter((o => void 0 !== o));
    })();
    if (0 === s.length) return;
    const m = new Set, l = new Set;
    ((o, e = "") => {
        const t = o.split("."), a = t.length;
        if (0 !== a) {
            for (let o = 0; o < a; o++) {
                const a = `${t.slice(o).join(".")}${e}`;
                n(a, r, m), n(a, c, l);
            }
            {
                const o = a - 1;
                for (let a = 0; a < o; a++) for (let i = o; i > a; i--) {
                    const o = `${t.slice(a, i).join(".")}.*${e}`;
                    n(o, r, m), n(o, c, l);
                }
            }
        }
    })(s[0].hn);
    for (const e of m) if (!l.has(e)) try {
        o(...a[e]);
    } catch {}
}();