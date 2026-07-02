!function() {
    const e = [ [ 1401633, "html[lang] > body.ishome > div.adult + main.main" ], [ 5305805, ".buttonautocl" ], [ 15121070, "html[lang] > body:not([class]):not([id]):not([style]) > div.background-container > div.container > div.captcha-box" ], [ 7244200, "html[lang] > body.startnew > div#sections > section#section_uname" ], [ 15121154, "html[lang] > body:not([style]) > div.captchaBody" ], [ 1119424, "html[lang] > body#body > * > div.cv-xwrapper > div.cvc > div.cv-inner" ], [ 11542656, "html[lang] > body#body > * > div.cvh.BlockClicksActivityBusy" ], [ 12270650, "html#html[sti][vic][lang] > body#allbody" ], [ 4186807, 'html > body > div.container.m-p > #checkbox-window.checkbox-window,\nhtml > body > div.container > form#unsubscribe-form[onsubmit="submitUnsubscribeForm(event)"]' ], [ 10657530, "html[lang] > body:not([class]):not([id]):not([style]) > div.container > div.recaptcha-box" ], [ 2452375, 'body > .security-container[style="opacity: 1; transform: translateY(0px);"]' ], [ 10348986, 'html > body.hold-transition.theme-primary.bg-img[style^="background-image"][style*="wallpaperaccess.com"][style*="background-repeat"][style*="background-size"]' ], [ 5732160, 'html > body > div.content > dl > dd.dd1 > div.min_sider > form#form1[action="unsubscribe.php"]' ], [ 1367482, "html > body.body > div.container > div.content > form > table.optoutForm" ] ], t = void 0;
    if (e) {
        const t = self.genericSelectorMap = self.genericSelectorMap || new Map;
        if (0 !== t.size) for (const n of e) {
            const e = t.get(n[0]);
            void 0 === e ? t.set(n[0], n[1]) : t.set(n[0], `${e},\n${n[1]}`);
        } else self.genericSelectorMap = new Map(e);
        e.length = 0;
    }
}();