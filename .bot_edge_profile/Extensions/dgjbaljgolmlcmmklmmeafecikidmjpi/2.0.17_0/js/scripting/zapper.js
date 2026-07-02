(async () => {
    const e = self.uBOLZapper = self.uBOLZapper || {};
    if (e.injected) return;
    e.injected = !0;
    const t = "object" == typeof browser ? browser : chrome, n = e => {
        try {
            t.runtime.sendMessage(e).catch((() => {}));
        } catch {}
    }, o = (() => {
        let e = String.fromCharCode(26 * Math.random() + 97);
        do {
            e += (Math.floor(2147483647 * Math.random()) + 2147483647).toString(36).slice(2);
        } while (e.length < 8);
        return e;
    })(), i = [ "background: transparent", "border: 0", "border-radius: 0", "box-shadow: none", "color-scheme: light dark", "display: block", "filter: none", "height: 100vh", "    height: 100svh", "left: 0", "margin: 0", "max-height: none", "max-width: none", "min-height: unset", "min-width: unset", "opacity: 1", "outline: 0", "padding: 0", "pointer-events: auto", "position: fixed", "top: 0", "transform: none", "visibility: hidden", "width: 100%", "z-index: 2147483647", "" ].join(" !important;\n"), r = `\n:root > [${o}] {\n    ${i}\n}\n:root > [${o}-loaded] {\n    visibility: visible !important;\n}\n:root [${o}-click] {\n    pointer-events: none !important;\n}\n`;
    n({
        what: "insertCSS",
        css: r
    });
    const s = function(e) {
        let t = "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            height: 0,
            left: 0,
            top: 0,
            width: 0
        };
        if (0 !== t.width && 0 !== t.height) return t;
        if (e.shadowRoot instanceof DocumentFragment) return s(e.shadowRoot);
        let n = t.left, o = n + t.width, i = t.top, r = i + t.height;
        for (const a of e.children) t = s(a), 0 !== t.width && 0 !== t.height && (t.left < n && (n = t.left), 
        t.right > o && (o = t.right), t.top < i && (i = t.top), t.bottom > r && (r = t.bottom));
        return {
            bottom: r,
            height: r - i,
            left: n,
            right: o,
            top: i,
            width: o - n
        };
    }, a = function(e) {
        if (!0 !== e && void 0 !== e) {
            if (e === a.current) return;
            e !== f && (a.current = e);
        }
        e = a.current;
        const t = self.innerWidth, n = self.innerHeight, o = [];
        if (null !== e) {
            const i = s(e);
            i.left <= t && i.top <= n && i.left + i.width >= 0 && i.top + i.height >= 0 && o.push(`M${i.left} ${i.top}h${i.width}v${i.height}h-${i.width}z`);
        }
        g.postMessage({
            what: "svgPaths",
            ocean: `M0 0h${t}v${n}h-${t}z`,
            islands: o.join("")
        });
    };
    a.current = null;
    const l = (() => {
        let e, t;
        return (n, i) => {
            if (void 0 !== n) e = n, t = i; else {
                if (void 0 === e) return null;
                n = e, i = t;
            }
            if (!f) return null;
            const r = `${o}-click`;
            f.setAttribute(r, "");
            let s = document.elementFromPoint(n, i);
            return s !== document.body && s !== document.documentElement || (s = null), f.removeAttribute(r), 
            s;
        };
    })(), c = function(e, t) {
        const n = l(e, t);
        a(n);
    }, d = function(e, t, n) {
        if (n.highlight) {
            const n = l(e, t);
            return void (n && a(n));
        }
        let o = a.current;
        if (null === o && void 0 !== e && (o = l(e, t)), o instanceof Element == 0) return;
        const i = (e, t) => {
            const n = window.getComputedStyle(e);
            return n ? n[t] : "";
        };
        let r = o.shadowRoot instanceof DocumentFragment;
        if (!1 === r) {
            let e = o;
            do {
                r = parseInt(i(e, "zIndex"), 10) >= 1e3 || "fixed" === i(e, "position"), e = e.parentElement;
            } while (null !== e && !1 === r);
        }
        if (r) {
            const e = document;
            "hidden" === i(e.body, "overflowY") && e.body.style.setProperty("overflow", "auto", "important"), 
            "fixed" === i(e.body, "position") && e.body.style.setProperty("position", "initial", "important"), 
            "fixed" === i(e.documentElement, "position") && e.documentElement.style.setProperty("position", "initial", "important"), 
            "hidden" === i(e.documentElement, "overflowY") && e.documentElement.style.setProperty("overflow", "auto", "important");
        }
        o.remove(), c(e, t);
    }, h = function(e) {
        return "Delete" === e.key || "Backspace" === e.key ? (e.stopPropagation(), e.preventDefault(), 
        void d()) : "Escape" === e.key || 27 === e.which ? (e.stopPropagation(), e.preventDefault(), 
        void p()) : void 0;
    }, u = function() {
        a(!0);
    }, p = function() {
        self.removeEventListener("scroll", u, {
            passive: !0
        }), self.removeEventListener("resize", u, {
            passive: !0
        }), self.removeEventListener("keydown", h, !0), g && (g.close(), g.onmessage = null, 
        g.onmessageerror = null, g = null), f && (f.remove(), f = null), n({
            what: "removeCSS",
            css: r
        }), e.injected = !1;
    }, m = function(e) {
        switch (e.what) {
          case "start":
            if (f.focus(), self.addEventListener("scroll", u, {
                passive: !0
            }), self.addEventListener("resize", u, {
                passive: !0
            }), self.addEventListener("keydown", h, !0), !1 === Boolean(g)) break;
            a(!0);
            break;

          case "quitZapper":
            p();
            break;

          case "highlightElementAtPoint":
            c(e.mx, e.my);
            break;

          case "unhighlight":
            a(null);
            break;

          case "zapElementAtPoint":
            d(e.mx, e.my, e.options), !0 !== e.options.highlight && !0 !== e.options.stay && p();
        }
    };
    let {zapperFrame: f, zapperFramePort: g} = await (async () => {
        const e = new URL(t.runtime.getURL("/zapper-ui.html"));
        return new Promise((n => {
            const i = document.createElement("iframe");
            i.setAttribute(o, "");
            const r = () => {
                i.onload = null, i.setAttribute(`${o}-loaded`, "");
                const r = new MessageChannel, s = r.port1;
                s.onmessage = e => {
                    m(e.data || {});
                }, s.onmessageerror = () => {
                    p();
                };
                const a = new URL(e);
                a.hostname = t.i18n.getMessage("@@extension_id"), i.contentWindow.postMessage({
                    what: "zapperStart"
                }, a.origin, [ r.port2 ]), i.contentWindow.focus(), n({
                    zapperFrame: i,
                    zapperFramePort: s
                });
            };
            "safari-web-extension:" !== e.protocol ? i.onload = () => {
                i.onload = r, i.contentWindow.location = e.href;
            } : (i.onload = r, i.setAttribute("src", e.href)), document.documentElement.append(i);
        }));
    })();
    f && g || p();
})();