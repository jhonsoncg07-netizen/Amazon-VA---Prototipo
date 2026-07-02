!function() {
    function n() {
        window.alert = new Proxy(window.alert, {
            apply: function(n) {},
            get: (n, t) => "toString" === t ? n.toString.bind(n) : Reflect.get(n, t)
        });
    }
    const t = [ [] ], e = new Map([ [ "ritsatv.ru", 0 ] ]), i = new Map([]), o = (n, t, e) => {
        let i = t.get(n);
        if (void 0 !== i) if ("number" != typeof i) for (const n of i) e.add(n); else e.add(i);
    }, s = (() => {
        const n = document.location, t = [ n.origin ];
        return n.ancestorOrigins && t.push(...n.ancestorOrigins), t.map(((n, t) => {
            const e = n.lastIndexOf("://");
            if (-1 === e) return;
            const i = n.slice(e + 3), o = i.indexOf(":");
            return {
                hn: -1 === o ? i : i.slice(0, o),
                i: t
            };
        })).filter((n => void 0 !== n));
    })();
    if (0 === s.length) return;
    const c = new Set, f = new Set;
    ((n, t = "") => {
        const r = n.split("."), s = r.length;
        if (0 !== s) for (let n = 0; n < s; n++) {
            const s = `${r.slice(n).join(".")}${t}`;
            o(s, e, c), o(s, i, f);
        }
    })(s[0].hn);
    for (const e of c) if (!f.has(e)) try {
        n(...t[e]);
    } catch {}
}();