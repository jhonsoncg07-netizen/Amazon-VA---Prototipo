!function() {
    const e = [ [ 1233234, "#cxense-recs-in-article" ], [ 15506548, ".embed-responsive-trendmd" ] ], n = void 0;
    if (e) {
        const n = self.genericSelectorMap = self.genericSelectorMap || new Map;
        if (0 !== n.size) for (const i of e) {
            const e = n.get(i[0]);
            void 0 === e ? n.set(i[0], i[1]) : n.set(i[0], `${e},\n${i[1]}`);
        } else self.genericSelectorMap = new Map(e);
        e.length = 0;
    }
}();