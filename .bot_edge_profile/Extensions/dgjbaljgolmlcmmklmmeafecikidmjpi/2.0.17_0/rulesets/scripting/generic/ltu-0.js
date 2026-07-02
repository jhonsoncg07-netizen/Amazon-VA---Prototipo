!function() {
    const e = [ [ 14552029, ".baneriai" ], [ 11006813, ".reklamos_nuorodos" ], [ 5359179, ".reklamos_tarpas" ], [ 14351896, ".top_reklama" ] ], n = void 0;
    if (e) {
        const n = self.genericSelectorMap = self.genericSelectorMap || new Map;
        if (0 !== n.size) for (const o of e) {
            const e = n.get(o[0]);
            void 0 === e ? n.set(o[0], o[1]) : n.set(o[0], `${e},\n${o[1]}`);
        } else self.genericSelectorMap = new Map(e);
        e.length = 0;
    }
}();