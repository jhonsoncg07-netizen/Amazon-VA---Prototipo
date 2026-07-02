!function() {
    const e = [ [ 9121034, ".grecaptcha-badge" ], [ 911183, "#gdpr-banner" ], [ 10215140, ".gdpr-popup" ], [ 878155, ".td-more-articles-box" ], [ 14687007, ".cc-type-info" ], [ 2386694, "#iframe_cookie" ] ], n = void 0;
    if (e) {
        const n = self.genericSelectorMap = self.genericSelectorMap || new Map;
        if (0 !== n.size) for (const i of e) {
            const e = n.get(i[0]);
            void 0 === e ? n.set(i[0], i[1]) : n.set(i[0], `${e},\n${i[1]}`);
        } else self.genericSelectorMap = new Map(e);
        e.length = 0;
    }
}();