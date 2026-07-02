!function() {
    function e() {
        var e = window.RTCPeerConnection ? "RTCPeerConnection" : window.webkitRTCPeerConnection ? "webkitRTCPeerConnection" : "";
        if ("" === e) return;
        var o = function(e) {
            (void 0)("Document tried to create an RTCPeerConnection: %o", e);
        };
        const t = function() {};
        o.prototype = {
            close: t,
            createDataChannel: t,
            createOffer: t,
            setRemoteDescription: t,
            toString: function() {
                return "[object RTCPeerConnection]";
            }
        };
        var n = window[e];
        window[e] = o.bind(window), n.prototype && (n.prototype.createDataChannel = function() {
            return {
                close: function() {},
                send: function() {}
            };
        }.bind(null));
    }
    const o = [ [] ], t = new Map([ [ "2ddl.*", 0 ], [ "allitebooks.*", 0 ], [ "bonstreams.net", 0 ], [ "convertinmp4.com", 0 ], [ "ddlvalley.me", 0 ], [ "dramamate.*", 0 ], [ "eztv.*", 0 ], [ "fluvore.com", 0 ], [ "kiss-anime.*", 0 ], [ "letmewatchthis.*", 0 ], [ "mkvcage.*", 0 ], [ "oceanoffgames.com", 0 ], [ "skidrowcrack.com", 0 ], [ "uptobox.com", 0 ], [ "yts.*", 0 ], [ "zooqle.*", 0 ], [ "streanplay.*", 0 ], [ "torlock.*", 0 ], [ "torlock2.*", 0 ], [ "srt.am", 0 ], [ "watchseries.unblocked.*", 0 ], [ "ouo.*", 0 ], [ "watch-series.*", 0 ], [ "watchseries.*", 0 ], [ "1fichier.com", 0 ], [ "planetfools.com", 0 ], [ "cpmlink.net", 0 ], [ "short.pe", 0 ], [ "mejortorrent.*", 0 ], [ "mejortorrento.*", 0 ], [ "mejortorrents.*", 0 ], [ "mejortorrents1.*", 0 ], [ "mejortorrentt.*", 0 ], [ "wizhdsports.fi", 0 ], [ "peliculasmx.net", 0 ], [ "animeid.tv", 0 ], [ "m4ufree.*", 0 ], [ "streamm4u.*", 0 ], [ "coinfaucet.io", 0 ], [ "freecardano.com", 0 ], [ "freenem.com", 0 ], [ "ganool.*", 0 ], [ "gtaall.com", 0 ], [ "subtorrents.*", 0 ], [ "subtorrents1.*", 0 ], [ "uii.io", 0 ], [ "mimaletamusical.blogspot.com", 0 ], [ "xrivonet.info", 0 ], [ "pirateproxy.*", 0 ], [ "onhockey.tv", 0 ], [ "web.livecricket.is", 0 ], [ "hdvid.*", 0 ], [ "onvid.*", 0 ], [ "ovid.*", 0 ], [ "vidhd.*", 0 ], [ "starmusiq.*", 0 ], [ "tamilmv.*", 0 ], [ "mywatchseries.*", 0 ], [ "mycoolmoviez.*", 0 ], [ "watchtvseries.*", 0 ], [ "startseite.to", 0 ], [ "kinoger.to", 0 ], [ "animekb.*", 0 ], [ "kstreaming.*", 0 ], [ "blizzboygames.net", 0 ], [ "software-on.com", 0 ], [ "sharemods.com", 0 ], [ "modsbase.com", 0 ], [ "streameast.*", 0 ], [ "thestreameast.*", 0 ], [ "glodls.*", 0 ], [ "thevidhd.*", 0 ], [ "okanime.*", 0 ], [ "shrink.*", 0 ], [ "f1livegp.net", 0 ], [ "zimabdko.com", 0 ], [ "kinoz.*", 0 ], [ "aii.sh", 0 ], [ "buffstreamz.com", 0 ], [ "topstreams.*", 0 ], [ "ex-foary.com", 0 ], [ "yesmovies.*", 0 ], [ "hentaisaturn.com", 0 ], [ "italydownload.com", 0 ], [ "leggenditalia.com", 0 ], [ "oasidownload.com", 0 ], [ "semprehawk.com", 0 ], [ "sms-anonyme.net", 0 ], [ "racaty.*", 0 ], [ "iulive.blogspot.com", 0 ], [ "livehere.*", 0 ], [ "eroticmoviesonline.me", 0 ], [ "1337x.*", 0 ], [ "x1337x.*", 0 ], [ "1337x.ninjaproxy1.com", 0 ], [ "torrentdownloads.*", 0 ], [ "mangaku.*", 0 ], [ "daddylive.*", 0 ], [ "bilibili.com", 0 ], [ "dandanzan.top", 0 ], [ "v.qq.com", 0 ] ]), n = new Map([ [ "mangaku.win", [ 0 ] ] ]), i = (e, o, t) => {
        let n = o.get(e);
        if (void 0 !== n) if ("number" != typeof n) for (const e of n) t.add(e); else t.add(n);
    }, a = (() => {
        const e = document.location, o = [ e.origin ];
        return e.ancestorOrigins && o.push(...e.ancestorOrigins), o.map(((e, o) => {
            const t = e.lastIndexOf("://");
            if (-1 === t) return;
            const n = e.slice(t + 3), i = n.indexOf(":");
            return {
                hn: -1 === i ? n : n.slice(0, i),
                i: o
            };
        })).filter((e => void 0 !== e));
    })();
    if (0 === a.length) return;
    const c = new Set, s = new Set;
    ((e, o = "") => {
        const r = e.split("."), a = r.length;
        if (0 !== a) {
            for (let e = 0; e < a; e++) {
                const a = `${r.slice(e).join(".")}${o}`;
                i(a, t, c), i(a, n, s);
            }
            {
                const e = a - 1;
                for (let a = 0; a < e; a++) for (let m = e; m > a; m--) {
                    const e = `${r.slice(a, m).join(".")}.*${o}`;
                    i(e, t, c), i(e, n, s);
                }
            }
        }
    })(a[0].hn);
    for (const t of c) if (!s.has(t)) try {
        e(...o[t]);
    } catch {}
}();