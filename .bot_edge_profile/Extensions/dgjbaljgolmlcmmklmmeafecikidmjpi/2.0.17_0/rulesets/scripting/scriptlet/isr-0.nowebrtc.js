!function() {
    function n() {
        var n = window.RTCPeerConnection ? "RTCPeerConnection" : window.webkitRTCPeerConnection ? "webkitRTCPeerConnection" : "";
        if ("" === n) return;
        var e = function(n) {
            (void 0)("Document tried to create an RTCPeerConnection: %o", n);
        };
        const t = function() {};
        e.prototype = {
            close: t,
            createDataChannel: t,
            createOffer: t,
            setRemoteDescription: t,
            toString: function() {
                return "[object RTCPeerConnection]";
            }
        };
        var o = window[n];
        window[n] = e.bind(window), o.prototype && (o.prototype.createDataChannel = function() {
            return {
                close: function() {},
                send: function() {}
            };
        }.bind(null));
    }
    const e = [ [] ], t = new Map([ [ "walla.co.il", 0 ] ]), o = new Map([]), i = (n, e, t) => {
        let o = e.get(n);
        if (void 0 !== o) if ("number" != typeof o) for (const n of o) t.add(n); else t.add(o);
    }, c = (() => {
        const n = document.location, e = [ n.origin ];
        return n.ancestorOrigins && e.push(...n.ancestorOrigins), e.map(((n, e) => {
            const t = n.lastIndexOf("://");
            if (-1 === t) return;
            const o = n.slice(t + 3), i = o.indexOf(":");
            return {
                hn: -1 === i ? o : o.slice(0, i),
                i: e
            };
        })).filter((n => void 0 !== n));
    })();
    if (0 === c.length) return;
    const a = new Set, f = new Set;
    ((n, e = "") => {
        const r = n.split("."), c = r.length;
        if (0 !== c) for (let n = 0; n < c; n++) {
            const c = `${r.slice(n).join(".")}${e}`;
            i(c, t, a), i(c, o, f);
        }
    })(c[0].hn);
    for (const t of a) if (!f.has(t)) try {
        n(...e[t]);
    } catch {}
}();