!function() {
    const n = [ 4040486, 1839954, 6867818, 9220559, 6381933 ], i = [ [ "apollo.lv", ".article-ad-placeholder\n.dfp-ad" ], [ "tvnet.lv", ".article-ad-placeholder\n.dfp-ad" ], [ "atverskapi.delfi.lv", ".adocean" ], [ "varianti.lv", "#ad_table\n.single_ad" ] ];
    if (n) {
        const e = self.genericExceptionSieve = self.genericExceptionSieve || new Set;
        if (0 !== e.size) for (const i of n) e.add(i); else self.genericExceptionSieve = new Set(n);
        n.length = 0;
    }
    if (i) {
        const e = self.genericExceptionMap = self.genericExceptionMap || new Map;
        if (0 !== e.size) for (const n of i) {
            const i = e.get(n[0]);
            void 0 === i ? e.set(n[0], n[1]) : e.set(n[0], `${i}\n${n[1]}`);
        } else self.genericExceptionMap = new Map(i);
        i.length = 0;
    }
}();