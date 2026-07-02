!function() {
    const e = [ [ 11160899, ".cookie-screen" ], [ 6717121, ".friendly.notice" ], [ 8173925, "#eu-cookies-consent" ], [ 5196796, "#eu-okno" ] ], n = void 0;
    if (e) {
        const n = self.genericSelectorMap = self.genericSelectorMap || new Map;
        if (0 !== n.size) for (const o of e) {
            const e = n.get(o[0]);
            void 0 === e ? n.set(o[0], o[1]) : n.set(o[0], `${e},\n${o[1]}`);
        } else self.genericSelectorMap = new Map(e);
        e.length = 0;
    }
}();