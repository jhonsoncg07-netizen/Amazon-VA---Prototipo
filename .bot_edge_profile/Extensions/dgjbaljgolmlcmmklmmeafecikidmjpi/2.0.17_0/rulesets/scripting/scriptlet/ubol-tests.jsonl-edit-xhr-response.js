!function() {
    function t(t = "", ...s) {
        !function(t, s = "") {
            const o = r(), n = o.makeLogPrefix((t ? "trusted-" : "") + "jsonl-edit-xhr-response", s), i = new WeakMap, a = e.create(s);
            if (!1 === a.valid || void 0 !== a.value && !0 !== t) return o.uboLog(n, "Bad JSONPath query");
            const c = o.getExtraArgs(Array.from(arguments), 2), l = function(t, e = "") {
                const s = r(), o = new Map;
                if (void 0 === t || "" === t) return o;
                const n = {
                    canNegate: !0
                };
                for (const r of s.String_split.call(t, /\s+/)) {
                    let [t, i] = s.String_split.call(r, ":");
                    "" !== t && (void 0 !== i && /[^$\w -]/.test(t) && (t = `${t}:${i}`, i = void 0), 
                    void 0 !== i ? o.set(t, s.initPattern(i, n)) : "" !== e && o.set(e, s.initPattern(t, n)));
                }
                return o;
            }(c.propsToMatch, "url");
            self.XMLHttpRequest = class extends self.XMLHttpRequest {
                open(t, e, ...s) {
                    const a = {
                        method: t,
                        url: e
                    }, c = 0 === l.size || function(t, ...e) {
                        const s = r(), o = [];
                        for (const r of e) if (r instanceof Object != 0) for (const [e, n] of t) {
                            let t = r[e];
                            if (void 0 !== t) {
                                if ("string" != typeof t) {
                                    try {
                                        t = s.JSON_stringify(t);
                                    } catch {}
                                    if ("string" != typeof t) continue;
                                }
                                if (!1 === s.testPattern(n, t)) return;
                                o.push(`${e}: ${t}`);
                            }
                        }
                        return o;
                    }(l, a);
                    return c && (o.logLevel > 1 && Array.isArray(c) && o.uboLog(n, `Matched "propsToMatch":\n\t${c.join("\n\t")}`), 
                    i.set(this, a)), super.open(t, e, ...s);
                }
                get response() {
                    const t = super.response, e = i.get(this);
                    if (void 0 === e) return t;
                    const s = "string" == typeof t ? t.length : void 0;
                    if (e.lastResponseLength !== s && (e.response = void 0, e.lastResponseLength = s), 
                    void 0 !== e.response) return e.response;
                    if ("string" != typeof t) return e.response = t;
                    const c = function(t, e = "") {
                        const s = r(), o = /\r?\n/.exec(e)?.[0] || "\n", n = e.split("\n"), i = [];
                        for (const e of n) {
                            let r;
                            try {
                                r = s.JSON_parse(e);
                            } catch {}
                            if ("object" != typeof r || null === r) {
                                i.push(e);
                                continue;
                            }
                            if (0 === t.apply(r)) {
                                i.push(e);
                                continue;
                            }
                            const o = s.JSON_stringify(r);
                            i.push(o);
                        }
                        return i.join(o);
                    }(a, t);
                    return c !== t && o.uboLog(n, "Pruned"), e.response = c;
                }
                get responseText() {
                    const t = this.response;
                    return "string" != typeof t ? super.responseText : t;
                }
            };
        }(!1, t, ...s);
    }
    class e {
        static create(t) {
            const r = new e;
            return r.compile(t), r;
        }
        static toJSON(t, e, ...r) {
            return (e || JSON.stringify)(t, ...r).replace(/\//g, "\\/");
        }
        get value() {
            return this.#t && this.#t.rval;
        }
        set value(t) {
            void 0 !== this.#t && (this.#t.rval = t);
        }
        get valid() {
            return void 0 !== this.#t;
        }
        compile(t) {
            this.#t = void 0;
            const e = this.#e(t, 0);
            if (void 0 !== e) {
                if (e.i !== t.length) {
                    if (t.startsWith("+=", e.i) && (e.modify = "+", e.i += 1), !1 === t.startsWith("=", e.i)) return;
                    try {
                        e.rval = JSON.parse(t.slice(e.i + 1));
                    } catch {
                        return;
                    }
                }
                this.#t = e;
            }
        }
        evaluate(t) {
            if (!1 === this.valid) return [];
            this.#r = t;
            const e = this.#s(this.#t.steps, []);
            return this.#r = null, e;
        }
        apply(t) {
            if (!1 === this.valid) return 0;
            const {modify: e, rval: r} = this.#t;
            this.#r = t;
            const s = this.#s(this.#t.steps, []), o = s.length;
            let n = o;
            for (;n--; ) {
                const {obj: t, key: o} = this.#o(s[n]);
                void 0 !== r ? "+" === e ? this.#n(t, o, r) : t[o] = r : Array.isArray(t) && "number" == typeof o ? t.splice(o, 1) : delete t[o];
            }
            return this.#r = null, o;
        }
        dump() {
            return JSON.stringify(this.#t);
        }
        toJSON(t, ...r) {
            return e.toJSON(t, null, ...r);
        }
        get [Symbol.toStringTag]() {
            return "JSONPath";
        }
        #i=0;
        #a=1;
        #c=2;
        #l=3;
        #h=4;
        #u=/^[A-Za-z_][\w]*|^\*/;
        #p=/^([!=^$*]=|[<>]=?)(.+?)\]/;
        #f=/^-?\d+/;
        #r;
        #t;
        #e(t, e) {
            if (0 === t.length) return;
            const r = [];
            let s = t.charCodeAt(e);
            r.push({
                mv: 36 === s ? this.#a : this.#c
            }), 36 !== s && 64 !== s || (e += 1);
            let o = this.#i;
            for (;e !== t.length; ) {
                if (s = t.charCodeAt(e), 32 === s) {
                    e += 1;
                    continue;
                }
                if (46 === s) {
                    if (o !== this.#i) return;
                    t.startsWith("..", e) ? (o = this.#h, e += 2) : (o = this.#l, e += 1);
                    continue;
                }
                if (91 !== s) {
                    if (o === this.#i) {
                        const s = r.at(-1);
                        if (void 0 === s) return;
                        e = this.#d(t, s, e);
                        break;
                    }
                    const s = this.#g(t, e);
                    if (void 0 === s) return;
                    r.push({
                        mv: o,
                        k: s
                    }), e += s.length, o = this.#i;
                    continue;
                }
                if (t.startsWith("[?", e)) {
                    const s = 33 === t.charCodeAt(e + 2), n = e + 2 + (s ? 1 : 0), i = this.#e(t, n);
                    if (void 0 === i) return;
                    if (!1 === t.startsWith("]", i.i)) return;
                    s && (i.steps.at(-1).not = !0), r.push({
                        mv: o || this.#l,
                        steps: i.steps
                    }), e = i.i + 1, o = this.#i;
                    continue;
                }
                if (t.startsWith("[*]", e)) {
                    o ||= this.#l, r.push({
                        mv: o,
                        k: "*"
                    }), e += 3, o = this.#i;
                    continue;
                }
                const n = this.#v(t, e + 1);
                if (void 0 === n) return;
                o ||= this.#l, r.push({
                    mv: o,
                    k: n.s
                }), e = n.i + 1, o = this.#i;
            }
            return r.length <= 1 ? void 0 : {
                steps: r,
                i: e
            };
        }
        #s(t, e) {
            let r = [];
            if (!1 === Array.isArray(t)) return r;
            for (const s of t) switch (s.mv) {
              case this.#a:
                r = [ [] ];
                break;

              case this.#c:
                r = [ e ];
                break;

              case this.#l:
              case this.#h:
                r = this.#y(r, s);
            }
            return r;
        }
        #y(t, e) {
            const r = [];
            for (const s of t) {
                const {value: t} = this.#o(s);
                "*" === e.k ? this.#m(s, e, t, r) : void 0 !== e.k ? this.#b(s, e, t, r) : e.steps && this.#E(s, e, t, r);
            }
            return r;
        }
        #m(t, e, r, s) {
            const o = e.mv === this.#h;
            for (const {path: e} of this.#O(r, o)) s.push([ ...t, ...e ]);
        }
        #b(t, e, r, s) {
            const o = Array.isArray(e.k) ? e.k : [ e.k ];
            for (const n of o) {
                const o = this.#N(e, r, n);
                void 0 !== o && s.push([ ...t, o ]);
            }
            if (e.mv === this.#h) for (const {obj: n, key: i, path: a} of this.#O(r, !0)) for (const r of o) {
                const o = this.#N(e, n[i], r);
                void 0 !== o && s.push([ ...t, ...a, o ]);
            }
        }
        #E(t, e, r, s) {
            const o = e.mv === this.#h;
            if (!1 !== Array.isArray(r) || (0 !== this.#s(e.steps, t).length && s.push(t), !0 === o)) for (const {obj: n, key: i, path: a} of this.#O(r, o)) {
                if (Array.isArray(n[i])) continue;
                const r = [ ...t, ...a ];
                0 !== this.#s(e.steps, r).length && s.push(r);
            }
        }
        #x(t, e) {
            return "number" == typeof e && Array.isArray(t) ? e >= 0 ? e : t.length + e : e;
        }
        #O(t, e) {
            const r = {
                next() {
                    const t = this.stack.length;
                    if (0 === t) return this.value = void 0, this.done = !0, this;
                    const r = this.stack[t - 1], s = r.keys.next();
                    if (s.done) return this.stack.pop(), this.path.pop(), this.next();
                    this.path[t - 1] = s.value, this.value = {
                        obj: r.obj,
                        key: s.value,
                        path: this.path.slice()
                    };
                    const o = this.value.obj[this.value.key];
                    return e && (Array.isArray(o) ? this.stack.push({
                        obj: o,
                        keys: o.keys()
                    }) : "object" == typeof o && null !== o && this.stack.push({
                        obj: o,
                        keys: Object.keys(o).values()
                    })), this;
                },
                path: [],
                value: void 0,
                done: !1,
                stack: [],
                [Symbol.iterator]() {
                    return this;
                }
            };
            return Array.isArray(t) ? r.stack.push({
                obj: t,
                keys: t.keys()
            }) : "object" == typeof t && null !== t && r.stack.push({
                obj: t,
                keys: Object.keys(t).values()
            }), r;
        }
        #v(t, e) {
            const r = [];
            for (;;) {
                const s = t.charCodeAt(e);
                if (93 === s) break;
                if (44 === s) {
                    e += 1;
                    continue;
                }
                if (39 === s) {
                    const s = this.#S(t, e + 1);
                    if (void 0 === s) return;
                    r.push(s.s), e = s.i;
                    continue;
                }
                if (45 === s || s >= 48 && s <= 57) {
                    const s = this.#f.exec(t.slice(e));
                    if (null === s) return;
                    const o = parseInt(t.slice(e), 10);
                    r.push(o), e += s[0].length;
                    continue;
                }
                const o = this.#g(t, e);
                if (void 0 === o) return;
                r.push(o), e += o.length;
            }
            return {
                s: 1 === r.length ? r[0] : r,
                i: e
            };
        }
        #S(t, e) {
            const r = t.length, s = [];
            let o = e, n = e;
            for (;;) {
                if (n === r) return;
                const e = t.charCodeAt(n);
                if (39 === e) {
                    s.push(t.slice(o, n)), n += 1;
                    break;
                }
                if (92 === e && n + 1 < r) {
                    s.push(t.slice(o, n));
                    const e = t.chatCodeAt(n + 1);
                    39 !== e && 92 !== e || (n += 1, o = n);
                }
                n += 1;
            }
            return {
                s: s.join(""),
                i: n
            };
        }
        #g(t, e) {
            const r = this.#u.exec(t.slice(e));
            if (null !== r) return r[0];
        }
        #d(t, e, r) {
            const s = this.#p.exec(t.slice(r));
            if (null === s) return r;
            try {
                e.rval = JSON.parse(s[2]), e.op = s[1];
            } catch {}
            return r + s[1].length + s[2].length;
        }
        #o(t) {
            if (0 === t.length) return {
                value: this.#r
            };
            const e = t.at(-1);
            let r = this.#r;
            for (let e = 0, s = t.length - 1; e < s; e++) r = r[t[e]];
            return {
                obj: r,
                key: e,
                value: r[e]
            };
        }
        #N(t, e, r) {
            if (null == e) return;
            if ("number" == typeof r && !1 === Array.isArray(e)) return;
            const s = this.#x(e, r), o = Object.hasOwn(e, s);
            if (void 0 !== t.op && !1 === o) return;
            const n = !0 !== t.not, i = e[s];
            let a = !1;
            switch (t.op) {
              case "==":
                a = i === t.rval === n;
                break;

              case "!=":
                a = i !== t.rval === n;
                break;

              case "<":
                a = i < t.rval === n;
                break;

              case "<=":
                a = i <= t.rval === n;
                break;

              case ">":
                a = i > t.rval === n;
                break;

              case ">=":
                a = i >= t.rval === n;
                break;

              case "^=":
                a = `${i}`.startsWith(t.rval) === n;
                break;

              case "$=":
                a = `${i}`.endsWith(t.rval) === n;
                break;

              case "*=":
                a = `${i}`.includes(t.rval) === n;
                break;

              default:
                a = o === n;
            }
            return a ? s : void 0;
        }
        #n(t, e, r) {
            const s = t[e];
            if (r instanceof Object != 0 && s instanceof Object != 0 && !Array.isArray(s)) for (const [t, e] of Object.entries(r)) s[t] = e;
        }
    }
    function r() {
        if (s.safeSelf) return s.safeSelf;
        const t = globalThis, e = {
            Array_from: Array.from,
            Error: t.Error,
            Function_toStringFn: t.Function.prototype.toString,
            Function_toString: t => e.Function_toStringFn.call(t),
            Math_floor: Math.floor,
            Math_max: Math.max,
            Math_min: Math.min,
            Math_random: Math.random,
            Object: Object,
            Object_defineProperty: Object.defineProperty.bind(Object),
            Object_defineProperties: Object.defineProperties.bind(Object),
            Object_fromEntries: Object.fromEntries.bind(Object),
            Object_getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor.bind(Object),
            Object_hasOwn: Object.hasOwn.bind(Object),
            RegExp: t.RegExp,
            RegExp_test: t.RegExp.prototype.test,
            RegExp_exec: t.RegExp.prototype.exec,
            Request_clone: t.Request.prototype.clone,
            String: t.String,
            String_fromCharCode: String.fromCharCode,
            String_split: String.prototype.split,
            XMLHttpRequest: t.XMLHttpRequest,
            addEventListener: t.EventTarget.prototype.addEventListener,
            removeEventListener: t.EventTarget.prototype.removeEventListener,
            fetch: t.fetch,
            JSON: t.JSON,
            JSON_parseFn: t.JSON.parse,
            JSON_stringifyFn: t.JSON.stringify,
            JSON_parse: (...t) => e.JSON_parseFn.call(e.JSON, ...t),
            JSON_stringify: (...t) => e.JSON_stringifyFn.call(e.JSON, ...t),
            log: void 0,
            logLevel: 0,
            makeLogPrefix(...t) {
                return this.sendToLogger && `[${t.join(" ⁝ ")}]` || "";
            },
            uboLog(...t) {
                if (void 0 !== this.sendToLogger && void 0 !== t && "" !== t[0]) return this.sendToLogger("info", ...t);
            },
            uboErr(...t) {
                if (void 0 !== this.sendToLogger && void 0 !== t && "" !== t[0]) return this.sendToLogger("error", ...t);
            },
            escapeRegexChars: t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            initPattern(t, e = {}) {
                if ("" === t) return {
                    matchAll: !0,
                    expect: !0
                };
                const r = !0 !== e.canNegate || !1 === t.startsWith("!");
                !1 === r && (t = t.slice(1));
                const s = /^\/(.+)\/([gimsu]*)$/.exec(t);
                return null !== s ? {
                    re: new this.RegExp(s[1], s[2] || e.flags),
                    expect: r
                } : void 0 !== e.flags ? {
                    re: new this.RegExp(this.escapeRegexChars(t), e.flags),
                    expect: r
                } : {
                    pattern: t,
                    expect: r
                };
            },
            testPattern(t, e) {
                return !!t.matchAll || (t.re ? this.RegExp_test.call(t.re, e) === t.expect : e.includes(t.pattern) === t.expect);
            },
            patternToRegex(t, e, r = !1) {
                if ("" === t) return /^/;
                const s = /^\/(.+)\/([gimsu]*)$/.exec(t);
                if (null === s) {
                    const s = this.escapeRegexChars(t);
                    return new RegExp(r ? `^${s}$` : s, e);
                }
                try {
                    return new RegExp(s[1], s[2] || void 0);
                } catch {}
                return /^/;
            },
            getExtraArgs(t, e = 0) {
                const r = t.slice(e).reduce(((t, e, r, s) => {
                    if (0 == (1 & r)) {
                        const e = s[r + 1], o = /^\d+$/.test(e) ? parseInt(e, 10) : e;
                        t.push([ s[r], o ]);
                    }
                    return t;
                }), []);
                return this.Object_fromEntries(r);
            },
            onIdle: (e, r) => t.requestIdleCallback ? t.requestIdleCallback(e, r) : t.requestAnimationFrame(e),
            offIdle: e => t.requestIdleCallback ? t.cancelIdleCallback(e) : t.cancelAnimationFrame(e)
        };
        if (s.safeSelf = e, void 0 === s.bcSecret) return e;
        e.logLevel = s.logLevel || 1;
        let r = "", o = "", n = 0;
        e.toLogText = (t, ...e) => {
            if (0 === e.length) return;
            const s = `[${document.location.hostname || document.location.href}]${e.join(" ")}`;
            return s === o && t === r && Date.now() - n < 5e3 ? void 0 : (r = t, o = s, n = Date.now(), 
            s);
        };
        try {
            const r = new t.BroadcastChannel(s.bcSecret);
            let o = [];
            e.sendToLogger = (t, ...s) => {
                const n = e.toLogText(t, ...s);
                if (void 0 !== n) return void 0 === o ? r.postMessage({
                    what: "messageToLogger",
                    type: t,
                    text: n
                }) : void o.push({
                    type: t,
                    text: n
                });
            }, r.onmessage = t => {
                switch (t.data) {
                  case "iamready!":
                    if (void 0 === o) break;
                    o.forEach((({type: t, text: e}) => r.postMessage({
                        what: "messageToLogger",
                        type: t,
                        text: e
                    }))), o = void 0;
                    break;

                  case "setScriptletLogLevelToOne":
                    e.logLevel = 1;
                    break;

                  case "setScriptletLogLevelToTwo":
                    e.logLevel = 2;
                }
            }, r.postMessage("areyouready?");
        } catch {
            e.sendToLogger = (t, ...r) => {
                const s = e.toLogText(t, ...r);
                void 0 !== s && e.log(`uBO ${s}`);
            };
        }
        return e;
    }
    const s = {}, o = [ [ ".b", "propsToMatch", "/sample.jsonl" ] ], n = new Map([ [ "ublockorigin.github.io", 0 ], [ "localhost", 0 ] ]), i = new Map([]), a = (t, e, r) => {
        let s = e.get(t);
        if (void 0 !== s) if ("number" != typeof s) for (const t of s) r.add(t); else r.add(s);
    }, l = (() => {
        const t = document.location, e = [ t.origin ];
        return t.ancestorOrigins && e.push(...t.ancestorOrigins), e.map(((t, e) => {
            const r = t.lastIndexOf("://");
            if (-1 === r) return;
            const s = t.slice(r + 3), o = s.indexOf(":");
            return {
                hn: -1 === o ? s : s.slice(0, o),
                i: e
            };
        })).filter((t => void 0 !== t));
    })();
    if (0 === l.length) return;
    const h = new Set, u = new Set;
    ((t, e = "") => {
        const r = t.split("."), s = r.length;
        if (0 !== s) for (let t = 0; t < s; t++) {
            const s = `${r.slice(t).join(".")}${e}`;
            a(s, n, h), a(s, i, u);
        }
    })(l[0].hn);
    for (const e of h) if (!u.has(e)) try {
        t(...o[e]);
    } catch {}
}();