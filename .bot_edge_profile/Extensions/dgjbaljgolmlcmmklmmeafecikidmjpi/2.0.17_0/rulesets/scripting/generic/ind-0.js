!function() {
    const a = [ 10589953, 1900095, 11278966, 11450765, 6050898, 674161, 674156, 2899287 ], n = [ [ "chirantannews.in", ".header-ads" ], [ "divyalive.com", ".header-ads" ], [ "chamaktabharat.com", ".navbar-ad-section" ], [ "prabhatvaibhav.com", ".navbar-area-2 ~ div[style]" ], [ "abnewslive.in", ".np-ads-wrapper\n.np-header-ads-area" ], [ "nepalimato.com", ".np-ads-wrapper" ], [ "onlinejalandhar.com", ".np-ads-wrapper\n.np-header-ads-area" ], [ "dainikbharatbhaskar.com", ".td-ad-m\n.td-ad-p\n.td-ad-tp" ], [ "dainikdawa.com", ".td-ad-m\n.td-ad-p\n.td-ad-tp" ] ];
    if (a) {
        const e = self.genericExceptionSieve = self.genericExceptionSieve || new Set;
        if (0 !== e.size) for (const n of a) e.add(n); else self.genericExceptionSieve = new Set(a);
        a.length = 0;
    }
    if (n) {
        const e = self.genericExceptionMap = self.genericExceptionMap || new Map;
        if (0 !== e.size) for (const a of n) {
            const n = e.get(a[0]);
            void 0 === n ? e.set(a[0], a[1]) : e.set(a[0], `${n}\n${a[1]}`);
        } else self.genericExceptionMap = new Map(n);
        n.length = 0;
    }
}();