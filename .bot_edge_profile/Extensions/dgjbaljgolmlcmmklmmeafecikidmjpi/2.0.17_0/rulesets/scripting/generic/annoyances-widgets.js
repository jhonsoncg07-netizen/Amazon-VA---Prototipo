!function() {
    const e = [ [ 16431973, "#WACLauncher__Button" ], [ 16120016, "#popin-salescontact" ], [ 14414991, ".b24-widget-button-wrapper" ], [ 13433282, ".chat_hammerbot-iframe-wrapper__outer" ], [ 7725274, ".drift-facade" ], [ 10548027, ".intercom-launcher" ], [ 4324221, ".intercom-lightweight-app" ], [ 14063673, ".joinchat--chatbox" ], [ 8491567, ".m-chat-toggler" ], [ 12739565, ".sticky-button--whatsapp" ], [ 13004488, ".wix-blog-hide-in-print.SITE_FOOTER_WRAPPER" ] ], t = void 0;
    if (e) {
        const t = self.genericSelectorMap = self.genericSelectorMap || new Map;
        if (0 !== t.size) for (const n of e) {
            const e = t.get(n[0]);
            void 0 === e ? t.set(n[0], n[1]) : t.set(n[0], `${e},\n${n[1]}`);
        } else self.genericSelectorMap = new Map(e);
        e.length = 0;
    }
}();