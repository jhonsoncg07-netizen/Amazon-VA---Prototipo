(() => {
    "use strict";
    var t = {
        905: (t, e, n) => {
            function r() {
                return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__;
            }
            function o() {
                return "npm";
            }
            n.d(e, {
                S: () => o,
                n: () => r
            });
        },
        728: (t, e, n) => {
            n.d(e, {
                KV: () => o
            });
            var r = n(905);
            function o() {
                return !(0, r.n)() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
            }
            t = n.hmd(t);
        }
    }, e = {};
    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r](i, i.exports, n), i.loaded = !0, i.exports;
    }
    n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        });
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (t) {
            if ("object" == typeof window) return window;
        }
    }(), n.hmd = t => ((t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id);
        }
    }), t), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, (() => {
        var t = {};
        n.r(t), n.d(t, {
            FunctionToString: () => Ci,
            InboundFilters: () => Si,
            LinkedErrors: () => Ac
        });
        var e = {};
        n.r(e), n.d(e, {
            Breadcrumbs: () => ca,
            Dedupe: () => da,
            GlobalHandlers: () => ka,
            HttpContext: () => Oa,
            LinkedErrors: () => ja,
            TryCatch: () => Ua
        });
        var r = {};
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        n.r(r), n.d(r, {
            Breadcrumbs: () => ca,
            BrowserClient: () => js,
            BrowserProfilingIntegration: () => By,
            BrowserTracing: () => Jg,
            Dedupe: () => da,
            Feedback: () => $m,
            FunctionToString: () => Ci,
            GlobalHandlers: () => ka,
            HttpContext: () => Oa,
            Hub: () => vo,
            InboundFilters: () => Si,
            Integrations: () => Hy,
            LinkedErrors: () => ja,
            ModuleMetadata: () => $c,
            Replay: () => If,
            ReplayCanvas: () => im,
            SDK_VERSION: () => mo,
            SEMANTIC_ATTRIBUTE_SENTRY_OP: () => Hc,
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => qc,
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => Uc,
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => Bc,
            Scope: () => ho,
            TryCatch: () => Ua,
            WINDOW: () => As,
            addBreadcrumb: () => Wo,
            addEventProcessor: () => bs,
            addGlobalEventProcessor: () => Or,
            addIntegration: () => gi,
            addTracingExtensions: () => Eu,
            breadcrumbsIntegration: () => aa,
            browserApiErrorsIntegration: () => Ba,
            browserProfilingIntegration: () => $y,
            browserTracingIntegration: () => Zg,
            captureConsoleIntegration: () => Um,
            captureEvent: () => qo,
            captureException: () => Uo,
            captureMessage: () => Ho,
            captureSession: () => di,
            captureUserFeedback: () => Cc,
            chromeStackLineParser: () => Ka,
            close: () => ri,
            configureScope: () => zo,
            contextLinesIntegration: () => zm,
            continueTrace: () => eu,
            createTransport: () => mc,
            createUserFeedbackEnvelope: () => Ps,
            debugIntegration: () => Gm,
            dedupeIntegration: () => Jm,
            defaultIntegrations: () => wc,
            defaultRequestInstrumentationOptions: () => qg,
            defaultStackLineParsers: () => sc,
            defaultStackParser: () => ac,
            endSession: () => ui,
            eventFromException: () => Is,
            eventFromMessage: () => Cs,
            exceptionFromError: () => Ss,
            extraErrorDataIntegration: () => eg,
            extractTraceparentData: () => Wc,
            feedbackIntegration: () => Fm,
            flush: () => ni,
            forceLoad: () => Ec,
            functionToStringIntegration: () => Ii,
            geckoStackLineParser: () => Za,
            getActiveSpan: () => tu,
            getActiveTransaction: () => zc,
            getClient: () => ii,
            getCurrentHub: () => wo,
            getCurrentScope: () => ai,
            getDefaultIntegrations: () => Sc,
            getHubFromCarrier: () => To,
            getReplay: () => Rf,
            getSpanStatusFromHttpCode: () => lu,
            globalHandlersIntegration: () => xa,
            httpClientIntegration: () => rg,
            httpContextIntegration: () => Ra,
            inboundFiltersIntegration: () => wi,
            init: () => xc,
            instrumentOutgoingRequests: () => zg,
            isInitialized: () => si,
            lastEventId: () => oi,
            linkedErrorsIntegration: () => Pa,
            makeBrowserOfflineTransport: () => hy,
            makeFetchTransport: () => vc,
            makeMain: () => _o,
            makeMultiplexedTransport: () => Iu,
            makeXHRTransport: () => _c,
            metrics: () => Mu,
            moduleMetadataIntegration: () => Fc,
            onLoad: () => Tc,
            onProfilingStartRouteTransaction: () => Py,
            opera10StackLineParser: () => rc,
            opera11StackLineParser: () => ic,
            parameterize: () => Nu,
            replayCanvasIntegration: () => om,
            replayIntegration: () => Tf,
            reportingObserverIntegration: () => pg,
            rewriteFramesIntegration: () => bg,
            sendFeedback: () => gm,
            sessionTimingIntegration: () => wg,
            setContext: () => Go,
            setCurrentClient: () => Ri,
            setExtra: () => Vo,
            setExtras: () => Yo,
            setHttpStatus: () => pu,
            setMeasurement: () => Du,
            setTag: () => Ko,
            setTags: () => Jo,
            setUser: () => Xo,
            showReportDialog: () => kc,
            spanStatusfromHttpCode: () => du,
            startBrowserTracingNavigationSpan: () => ey,
            startBrowserTracingPageLoadSpan: () => ty,
            startInactiveSpan: () => Zc,
            startSession: () => ci,
            startSpan: () => Xc,
            startSpanManual: () => Qc,
            startTransaction: () => ei,
            trace: () => Kc,
            winjsStackLineParser: () => ec,
            withActiveSpan: () => ti,
            withIsolationScope: () => Zo,
            withScope: () => Qo,
            wrap: () => Ic
        });
        var i = self.browser instanceof Object && null !== self.browser && "object" === o(self.browser.runtime) ? self.browser : self.chrome;
        function s() {
            return new Promise((function(t, e) {
                i.tabs.query({}, (function(e) {
                    e.forEach((function(e) {
                        !0 === e.active && t(e);
                    }));
                }));
            }));
        }
        function a() {
            function t() {
                return !1;
            }
            return {
                lazyGet: function(t, e, n) {
                    var r = "_" + e;
                    if (r in t) return t[r];
                    var o = n.apply(t);
                    return t[r] = o, o;
                },
                lazyGetClear: function(t, e) {
                    delete t["_" + e];
                },
                hitStats: {
                    addRuleHit: t,
                    addDomainView: t,
                    cleanup: t
                },
                filteringLog: {
                    addHttpRequestEvent: t,
                    clearEventsByTabId: t,
                    isOpen: t
                },
                safebrowsing: {
                    checkSafebrowsingFilter: t
                },
                integration: {
                    isSupported: t,
                    isEnabled: t,
                    isIntegrationRequest: t,
                    shouldOverrideReferrer: t
                }
            };
        }
        i.declarativeNetRequest, i.i18n, i.runtime, a.userrules = {
            getAntiBannerService: function() {
                return a.antiBannerService;
            },
            userRules: [],
            getRules: function() {
                return userRules;
            },
            setRules: function(t) {
                userRules = t;
            },
            addRules: function(t) {
                for (var e = getAntiBannerService().addFilterRules(a.utils.filters.USER_FILTER_ID, t), n = 0; n < e.length; n++) userRules.push(e[n].ruleText);
                return e;
            },
            clearRules: function() {
                userRules = [], getAntiBannerService().clearFilterRules(a.utils.filters.USER_FILTER_ID);
            },
            removeRule: function(t) {
                a.utils.collections.removeAll(userRules, t), getAntiBannerService().removeFilterRule(a.utils.filters.USER_FILTER_ID, t);
            },
            unWhiteListFrame: function(t) {
                t.frameRule && (t.frameRule.filterId === a.utils.filters.WHITE_LIST_FILTER_ID ? a.whitelist.unWhiteListUrl(t.url) : removeRule(t.frameRule.ruleText));
            }
        }, a.ui = {
            getFiltersUpdateResultMessage: function(t, e) {
                var n = a.i18n.getMessage("options_popup_update_title"), r = [];
                if (t) if (0 === e.length) r.push(a.i18n.getMessage("options_popup_update_not_found")); else {
                    e.sort((function(t, e) {
                        return t.displayNumber - e.displayNumber;
                    }));
                    for (var o = 0; o < e.length; o++) {
                        var i = e[o];
                        r.push(a.i18n.getMessage("options_popup_update_updated", [ i.name, i.version ]).replace("$1", i.name).replace("$2", i.version));
                    }
                } else r.push(a.i18n.getMessage("options_popup_update_error"));
                return {
                    title: n,
                    text: r
                };
            },
            getFiltersEnabledResultMessage: function(t) {
                var e = a.i18n.getMessage("alert_popup_filter_enabled_title"), n = [];
                t.sort((function(t, e) {
                    return t.displayNumber - e.displayNumber;
                }));
                for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    n.push(a.i18n.getMessage("alert_popup_filter_enabled_text", [ o.name ]).replace("$1", o.name));
                }
                return {
                    title: e,
                    text: n
                };
            },
            whiteListTab: function(t) {
                var e = a.frames.getFrameInfo(t);
                if (a.whitelist.whiteListUrl(e.url), a.frames.isTabAdguardDetected(t)) {
                    var n = a.utils.url.getHost(t.url);
                    a.integration.addRuleToApp("@@//" + n + "^$document", (function() {
                        a.tabs.sendMessage(t.tabId, {
                            type: "no-cache-reload"
                        });
                    }));
                } else updateTabIconAndContextMenu(t, !0);
            },
            unWhiteListTab: function(t) {
                var e = a.frames.getFrameInfo(t);
                if (a.userrules.unWhiteListFrame(e), a.frames.isTabAdguardDetected(t)) {
                    var n = a.frames.getTabAdguardUserWhiteListRule(t);
                    n && a.integration.removeRuleFromApp(n.ruleText, (function() {
                        a.tabs.sendMessage(t.tabId, {
                            type: "no-cache-reload"
                        });
                    }));
                } else updateTabIconAndContextMenu(t, !0);
            },
            changeApplicationFilteringDisabled: function(t) {
                a.settings.changeFilteringDisabled(t), a.tabs.getActive((function(t) {
                    updateTabIconAndContextMenu(t, !0);
                }));
            },
            checkFiltersUpdates: function() {
                a.filters.checkFiltersUpdates((function(t) {
                    a.listeners.notifyListeners(a.listeners.UPDATE_FILTERS_SHOW_POPUP, !0, t);
                }), (function() {
                    a.listeners.notifyListeners(a.listeners.UPDATE_FILTERS_SHOW_POPUP, !1);
                }));
            },
            initAssistant: function(t) {
                var e = {
                    addRuleCallbackName: "addUserRule",
                    selectElement: t
                };
                s().then((function(t) {
                    i.tabs.sendMessage(t.id, {
                        type: "initAssistant",
                        options: e
                    });
                }));
            },
            openAssistant: function(t) {
                s().then((function(e) {
                    i.scripting.executeScript({
                        target: {
                            tabId: e.id
                        },
                        files: [ "./js/adblox/assistant.js" ]
                    }).then((function() {
                        a.ui.initAssistant(), t();
                    }));
                }));
            }
        };
        const c = a;
        function u(t, e, n) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" !== h(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e);
                        if ("object" !== h(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(t);
                }(t, "string");
                return "symbol" === h(e) ? e : String(e);
            }(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function l() {
            l = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof f ? e : f, s = Object.create(i.prototype), a = new I(o || []);
                return r(s, "_invoke", {
                    value: x(t, n, a)
                }), s;
            }
            function d(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var p = {};
            function f() {}
            function m() {}
            function g() {}
            var y = {};
            c(y, i, (function() {
                return this;
            }));
            var v = Object.getPrototypeOf, b = v && v(v(C([])));
            b && b !== e && n.call(b, i) && (y = b);
            var _ = g.prototype = f.prototype = Object.create(y);
            function w(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function S(t, e) {
                function o(r, i, s, a) {
                    var c = d(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, l = u.value;
                        return l && "object" == h(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(l).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function x(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = k(s, n);
                            if (a) {
                                if (a === p) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = d(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === p) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function k(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, k(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                var o = d(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                p;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, p) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, p);
            }
            function E(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function T(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function I(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(E, this), this.reset(!0);
            }
            function C(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: R
                };
            }
            function R() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return m.prototype = g, r(_, "constructor", {
                value: g,
                configurable: !0
            }), r(g, "constructor", {
                value: m,
                configurable: !0
            }), m.displayName = c(g, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(_), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, w(S.prototype), c(S.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = S, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new S(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, w(_), c(_, a, "Generator"), c(_, i, (function() {
                return this;
            })), c(_, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = C, I.prototype = {
                constructor: I,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    p) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    p;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), T(n), p;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                T(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: C(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), p;
                }
            }, t;
        }
        function d(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        function p(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        d(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        d(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            };
        }
        function h(t) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        var f = self.browser, m = f instanceof Object && null !== f && "object" === h(f.runtime) ? f : self.chrome, g = m.declarativeNetRequest, y = m.i18n, v = m.runtime, b = m.windows;
        function _(t) {
            return w.apply(this, arguments);
        }
        function w() {
            return (w = p(l().mark((function t(e) {
                var n, r;
                return l().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (m.storage instanceof Object != 0) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (m.storage.local instanceof Object != 0) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.prev = 4, t.next = 7, m.storage.local.get(e);

                      case 7:
                        if ((r = t.sent) instanceof Object != 0) {
                            t.next = 10;
                            break;
                        }
                        return t.abrupt("return");

                      case 10:
                        return t.abrupt("return", null !== (n = r[e]) && void 0 !== n ? n : void 0);

                      case 13:
                        t.prev = 13, t.t0 = t.catch(4);

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 4, 13 ] ]);
            })))).apply(this, arguments);
        }
        function S(t, e) {
            return x.apply(this, arguments);
        }
        function x() {
            return (x = p(l().mark((function t(e, n) {
                return l().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (m.storage instanceof Object != 0) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (m.storage.local instanceof Object != 0) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.abrupt("return", m.storage.local.set(u({}, e, n)));

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function k(t) {
            return E.apply(this, arguments);
        }
        function E() {
            return (E = p(l().mark((function t(e) {
                return l().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (m.storage instanceof Object != 0) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (m.storage.local instanceof Object != 0) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.abrupt("return", m.storage.local.remove(e));

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function T(t) {
            return I.apply(this, arguments);
        }
        function I() {
            return (I = p(l().mark((function t(e) {
                var n, r;
                return l().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (m.storage instanceof Object != 0) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (m.storage.session instanceof Object != 0) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.prev = 4, t.next = 7, m.storage.session.get(e);

                      case 7:
                        if ((r = t.sent) instanceof Object != 0) {
                            t.next = 10;
                            break;
                        }
                        return t.abrupt("return");

                      case 10:
                        return t.abrupt("return", null !== (n = r[e]) && void 0 !== n ? n : void 0);

                      case 13:
                        t.prev = 13, t.t0 = t.catch(4);

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 4, 13 ] ]);
            })))).apply(this, arguments);
        }
        function C(t, e) {
            return R.apply(this, arguments);
        }
        function R() {
            return (R = p(l().mark((function t(e, n) {
                return l().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (m.storage instanceof Object != 0) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (m.storage.session instanceof Object != 0) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.abrupt("return", m.storage.session.set(u({}, e, n)));

                      case 5:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function O(t) {
            return L.apply(this, arguments);
        }
        function L() {
            return (L = p(l().mark((function t(e) {
                var n, r;
                return l().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (m.storage instanceof Object != 0) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (m.storage.managed instanceof Object != 0) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.prev = 4, t.next = 7, m.storage.managed.get(e);

                      case 7:
                        if ((r = t.sent) instanceof Object != 0) {
                            t.next = 10;
                            break;
                        }
                        return t.abrupt("return");

                      case 10:
                        return t.abrupt("return", null !== (n = r[e]) && void 0 !== n ? n : void 0);

                      case 13:
                        t.prev = 13, t.t0 = t.catch(4);

                      case 15:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 4, 13 ] ]);
            })))).apply(this, arguments);
        }
        function A(t) {
            return fetch("".concat(t, ".json")).then((function(t) {
                return t.json();
            })).catch((function(t) {}));
        }
        function M(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return N(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(t, e) : void 0;
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            };
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, s = !0, a = !1;
            return {
                s: function() {
                    n = n.call(t);
                },
                n: function() {
                    var t = n.next();
                    return s = t.done, t;
                },
                e: function(t) {
                    a = !0, i = t;
                },
                f: function() {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function N(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        var D = function(t) {
            if ("*" === t) return "";
            var e = t.indexOf(".");
            return -1 !== e ? t.slice(e + 1) : "*";
        }, P = function(t, e) {
            var n = e instanceof Set ? e : new Set(e);
            if (n.has("all-urls") || n.has("*")) return !0;
            for (var r = t; r; ) {
                var o = r.indexOf(".");
                if (-1 === o) break;
                if (r = r.slice(o + 1), n.has(r)) return !0;
            }
            return !1;
        }, j = function(t, e) {
            var n = e instanceof Set ? e : new Set(e);
            if (n.has("all-urls") || n.has("*")) return Array.from(t);
            var r, o = [], i = M(t);
            try {
                for (i.s(); !(r = i.n()).done; ) {
                    var s = r.value;
                    (n.has(s) || P(s, n)) && o.push(s);
                }
            } catch (t) {
                i.e(t);
            } finally {
                i.f();
            }
            return o;
        }, F = function(t, e) {
            var n = e instanceof Set ? e : new Set(e);
            if (n.has("all-urls") || n.has("*")) return [];
            var r, o = [], i = M(t);
            try {
                for (i.s(); !(r = i.n()).done; ) {
                    var s = r.value;
                    n.has(s) || P(s, n) || o.push(s);
                }
            } catch (t) {
                i.e(t);
            } finally {
                i.f();
            }
            return o;
        }, $ = function(t) {
            return "*" === t || "all-urls" === t ? "<all_urls>" : "*://*.".concat(t, "/*");
        }, B = function(t) {
            var e, n = [], r = M(t);
            try {
                for (r.s(); !(e = r.n()).done; ) {
                    var o = e.value;
                    n.push($(o));
                }
            } catch (t) {
                r.e(t);
            } finally {
                r.f();
            }
            return n;
        }, U = function(t) {
            var e, n = [], r = M(t);
            try {
                for (r.s(); !(e = r.n()).done; ) {
                    var o = e.value;
                    if ("<all_urls>" !== o) {
                        var i = /^\*:\/\/(?:\*\.)?([^/]+)\/\*/.exec(o);
                        null !== i && n.push(i[1]);
                    } else n.push("all-urls");
                }
            } catch (t) {
                r.e(t);
            } finally {
                r.f();
            }
            return n;
        }, H = function(t) {
            new self.BroadcastChannel("uBOL").postMessage(t);
        }, q = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = t.length;
            if (r !== e.length) return !1;
            n && (t.sort(), e.sort());
            for (var o = 0; o < r; o++) if (t[o] !== e[o]) return !1;
            return !0;
        };
        function z(t) {
            return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function W() {
            W = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof p ? e : p, s = Object.create(i.prototype), a = new E(o || []);
                return r(s, "_invoke", {
                    value: w(t, n, a)
                }), s;
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(T([])));
            y && y !== e && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function b(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function _(t, e) {
                function o(r, i, s, a) {
                    var c = l(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == z(d) && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(d).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = S(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function S(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, d);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function E(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(x, this), this.reset(!0);
            }
            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(v), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, b(_.prototype), c(_.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new _(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, b(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    d;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, t;
        }
        function G(t) {
            return function(t) {
                if (Array.isArray(t)) return Y(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
            }(t) || function(t, e) {
                if (t) {
                    if ("string" == typeof t) return Y(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Y(t, e) : void 0;
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function Y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function V(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        var J = !1;
        function K(t) {
            var e = {
                path: {
                    16: "/img/icon_16_off.png",
                    32: "/img/icon_32_off.png",
                    64: "/img/icon_64_off.png",
                    128: "/img/icon_128_off.png"
                }
            };
            void 0 !== t && (e.tabId = t), m.action.setIcon(e);
        }
        function X(t) {
            var e = {
                path: {
                    16: "/img/icon_16.png",
                    32: "/img/icon_32.png",
                    64: "/img/icon_64.png",
                    128: "/img/icon_128.png"
                }
            };
            void 0 !== t && (e.tabId = t), m.action.setIcon(e);
        }
        function Q(t) {
            return Z.apply(this, arguments);
        }
        function Z() {
            var t;
            return t = W().mark((function t(e) {
                var n, r, o, i, s, a, c, u, l;
                return W().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (n = e.filteringModeDetails, r = n.none, o = n.basic, i = n.optimal, s = n.complete, 
                        a = r.delete("all-urls"), c = a ? new Set([].concat(G(o), G(i), G(s))) : r, a !== J && (a ? K() : X(), 
                        J = a), 0 !== c.size) {
                            t.next = 6;
                            break;
                        }
                        return t.abrupt("return");

                      case 6:
                        u = e.before.get("toolbar-icon"), e.before.delete("toolbar-icon"), l = {
                            id: "toolbar-icon",
                            js: [ "/js/scripting/toolbar-icon.js" ],
                            matches: B(c),
                            runAt: "document_start"
                        }, void 0 === u ? e.toAdd.push(l) : !1 === q(u.matches, l.matches) && (e.toRemove.push("toolbar-icon"), 
                        e.toAdd.push(l));

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })), (Z = function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        V(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        V(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            }).apply(this, arguments);
        }
        function tt(t) {
            return (tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function et() {
            et = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof p ? e : p, s = Object.create(i.prototype), a = new E(o || []);
                return r(s, "_invoke", {
                    value: w(t, n, a)
                }), s;
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(T([])));
            y && y !== e && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function b(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function _(t, e) {
                function o(r, i, s, a) {
                    var c = l(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == tt(d) && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(d).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = S(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function S(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, d);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function E(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(x, this), this.reset(!0);
            }
            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(v), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, b(_.prototype), c(_.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new _(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, b(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    d;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, t;
        }
        function nt(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = st(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            };
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, s = !0, a = !1;
            return {
                s: function() {
                    n = n.call(t);
                },
                n: function() {
                    var t = n.next();
                    return s = t.done, t;
                },
                e: function(t) {
                    a = !0, i = t;
                },
                f: function() {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function rt(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        function ot(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        rt(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        rt(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            };
        }
        function it(t) {
            return function(t) {
                if (Array.isArray(t)) return at(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
            }(t) || st(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function st(t, e) {
            if (t) {
                if ("string" == typeof t) return at(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? at(t, e) : void 0;
            }
        }
        function at(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        var ct = function() {
            if (g.onRuleMatchedDebug instanceof Object == 0) return !1;
            var t = m.runtime.id;
            return "uBOLite@raymondhill.net" !== t && "ddkjiahejlhfcafbddmgiahcphecmpfh" !== t && "cimighlppcgcoapaliogpjjdehbnofhn" !== t;
        }(), ut = function() {
            var t;
            if (!0 === ct) {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                (t = console).info.apply(t, [ "[uBOL]" ].concat(n));
            }
        }, lt = function() {
            var t = function() {
                return Promise.resolve([]);
            };
            if (!0 !== ct) return t;
            if (g.onRuleMatchedDebug instanceof Object == 0) return t;
            var e = new Map, n = 256, r = new Array(n);
            r.fill(null);
            var o = 0, i = function(t) {
                return t.length <= 21 ? t : [].concat(it(t.slice(0, 10)), [ "..." ], it(t.slice(-10)));
            }, s = function() {
                var t = ot(et().mark((function t(n) {
                    var r, o, s, a, c, u, l, d;
                    return et().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (!e.has(n)) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt("return", e.get(n));

                          case 2:
                            if (n !== g.DYNAMIC_RULESET_ID) {
                                t.next = 8;
                                break;
                            }
                            return t.next = 5, g.getDynamicRules().catch((function() {}));

                          case 5:
                            r = t.sent, t.next = 16;
                            break;

                          case 8:
                            return t.next = 10, fetch("/rulesets/main/".concat(n, ".json")).catch((function() {}));

                          case 10:
                            if (void 0 !== (o = t.sent)) {
                                t.next = 13;
                                break;
                            }
                            return t.abrupt("return");

                          case 13:
                            return t.next = 15, o.json().catch((function() {}));

                          case 15:
                            r = t.sent;

                          case 16:
                            if (!1 !== Array.isArray(r)) {
                                t.next = 18;
                                break;
                            }
                            return t.abrupt("return");

                          case 18:
                            s = new Map, a = nt(r);
                            try {
                                for (a.s(); !(c = a.n()).done; ) u = c.value, (l = u.condition) && (l.requestDomains && (l.requestDomains = i(l.requestDomains)), 
                                l.initiatorDomains && (l.initiatorDomains = i(l.initiatorDomains))), d = u.id, u.id = "".concat(n, "/").concat(d), 
                                s.set(d, u);
                            } catch (t) {
                                a.e(t);
                            } finally {
                                a.f();
                            }
                            return e.set(n, s), t.abrupt("return", s);

                          case 23:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }(), a = function() {
                var t = ot(et().mark((function t(e) {
                    var n, r, o, i;
                    return et().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return n = e.rule, r = n.rulesetId, o = n.ruleId, t.next = 3, s(r);

                          case 3:
                            if (void 0 !== (i = t.sent)) {
                                t.next = 6;
                                break;
                            }
                            return t.abrupt("return");

                          case 6:
                            return t.abrupt("return", {
                                request: e.request,
                                rule: i.get(o)
                            });

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }();
            return g.onRuleMatchedDebug.addListener((function(t) {
                r[o] = t, o = (o + 1) % n;
            })), function() {
                var t = ot(et().mark((function t(e) {
                    var i, s, c, u;
                    return et().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            i = [], s = 0;

                          case 2:
                            if (!(s < n)) {
                                t.next = 17;
                                break;
                            }
                            if (null !== (c = r[(o + s) % n])) {
                                t.next = 7;
                                break;
                            }
                            return t.abrupt("continue", 14);

                          case 7:
                            if (-1 === c.request.tabId) {
                                t.next = 10;
                                break;
                            }
                            if (c.request.tabId === e) {
                                t.next = 10;
                                break;
                            }
                            return t.abrupt("continue", 14);

                          case 10:
                            if (void 0 !== (u = a(c))) {
                                t.next = 13;
                                break;
                            }
                            return t.abrupt("continue", 14);

                          case 13:
                            i.unshift(u);

                          case 14:
                            s++, t.next = 2;
                            break;

                          case 17:
                            return t.abrupt("return", Promise.all(i));

                          case 18:
                          case "end":
                            return t.stop();
                        }
                    }), t);
                })));
                return function(e) {
                    return t.apply(this, arguments);
                };
            }();
        }();
        function dt(t) {
            return (dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function pt() {
            pt = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof p ? e : p, s = Object.create(i.prototype), a = new E(o || []);
                return r(s, "_invoke", {
                    value: w(t, n, a)
                }), s;
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(T([])));
            y && y !== e && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function b(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function _(t, e) {
                function o(r, i, s, a) {
                    var c = l(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == dt(d) && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(d).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = S(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function S(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, d);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function E(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(x, this), this.reset(!0);
            }
            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(v), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, b(_.prototype), c(_.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new _(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, b(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    d;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, t;
        }
        function ht(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        function ft(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, s, a = [], c = !0, u = !1;
                    try {
                        if (i = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            c = !1;
                        } else for (;!(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); c = !0) ;
                    } catch (t) {
                        u = !0, o = t;
                    } finally {
                        try {
                            if (!c && null != n.return && (s = n.return(), Object(s) !== s)) return;
                        } finally {
                            if (u) throw o;
                        }
                    }
                    return a;
                }
            }(t, e) || yt(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function mt(t) {
            return function(t) {
                if (Array.isArray(t)) return vt(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
            }(t) || yt(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function gt(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = yt(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            };
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, s = !0, a = !1;
            return {
                s: function() {
                    n = n.call(t);
                },
                n: function() {
                    var t = n.next();
                    return s = t.done, t;
                },
                e: function(t) {
                    a = !0, i = t;
                },
                f: function() {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function yt(t, e) {
            if (t) {
                if ("string" == typeof t) return vt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vt(t, e) : void 0;
            }
        }
        function vt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        var bt = new Map;
        function _t() {
            var t = bt.get("generic");
            return void 0 !== t || (t = A("/rulesets/generic-details").then((function(t) {
                return new Map(t);
            })), bt.set("generic", t)), t;
        }
        var wt = function(t) {
            t.length <= 1 || !1 === t.includes("<all_urls>") && !1 === t.includes("*://*/*") || (t.length = 0, 
            t.push("<all_urls>"));
        }, St = function(t) {
            var e, n = gt(t);
            try {
                for (n.s(); !(e = n.n()).done; ) {
                    for (var r = e.value, o = r.css, i = void 0 === o ? [] : o, s = r.js, a = void 0 === s ? [] : s, c = 0; c < i.length; c++) {
                        var u = i[c];
                        u.startsWith("/") || (i[c] = "/".concat(u));
                    }
                    for (var l = 0; l < a.length; l++) {
                        var d = a[l];
                        d.startsWith("/") || (a[l] = "/".concat(d));
                    }
                }
            } catch (t) {
                n.e(t);
            } finally {
                n.f();
            }
            return t;
        };
        function xt(t, e) {
            var n, r = t.before, o = t.filteringModeDetails, i = [], s = [], a = [], c = gt(t.rulesetsDetails);
            try {
                for (c.s(); !(n = c.n()).done; ) {
                    var u, l = n.value, d = e.get(l.id);
                    d && (d.unhide && i.push.apply(i, mt(d.unhide)), d.hide && s.push.apply(s, mt(d.hide))), 
                    0 !== ((null === (u = l.css) || void 0 === u ? void 0 : u.generichigh) || 0) && a.push("/rulesets/scripting/generichigh/".concat(l.id, ".css"));
                }
            } catch (t) {
                c.e(t);
            } finally {
                c.f();
            }
            if (0 !== a.length) {
                var p = o.none, h = o.basic, f = o.optimal, m = o.complete, g = [], y = [];
                if (m.has("all-urls") ? (y.push.apply(y, mt(B(p))), y.push.apply(y, mt(B(h))), y.push.apply(y, mt(B(f))), 
                y.push.apply(y, mt(B(i))), g.push("<all_urls>")) : g.push.apply(g, mt(B(F(Array.from(m), i)))), 
                0 !== g.length) {
                    var v = r.get("css-generichigh");
                    r.delete("css-generichigh");
                    var b = {
                        id: "css-generichigh",
                        css: a,
                        matches: g,
                        allFrames: !0,
                        runAt: "document_end"
                    };
                    0 !== y.length && (b.excludeMatches = y), void 0 !== v ? !1 !== q(v.css, a, !1) && !1 !== q(v.matches, g) && !1 !== q(v.excludeMatches, y) || (t.toRemove.push("css-generichigh"), 
                    t.toAdd.push(b)) : t.toAdd.push(b);
                }
            }
        }
        function kt(t, e) {
            var n, r = t.before, o = t.filteringModeDetails, i = [], s = [], a = [], c = gt(t.rulesetsDetails);
            try {
                for (c.s(); !(n = c.n()).done; ) {
                    var u, l = n.value, d = e.get(l.id);
                    d && (d.unhide && i.push.apply(i, mt(d.unhide)), d.hide && s.push.apply(s, mt(d.hide))), 
                    0 !== ((null === (u = l.css) || void 0 === u ? void 0 : u.generic) || 0) && a.push("/rulesets/scripting/generic/".concat(l.id, ".js"));
                }
            } catch (t) {
                c.e(t);
            } finally {
                c.f();
            }
            if (0 !== a.length) {
                a.unshift("/js/scripting/isolated-api.js"), a.push("/js/scripting/css-generic.js");
                var p = o.none, h = o.basic, f = o.optimal, m = o.complete, g = mt(m), y = [].concat(mt(p), mt(h), mt(f));
                if (!1 !== m.has("all-urls")) {
                    var v = [].concat(mt(B(y)), mt(B(i))), b = r.get("css-generic-all");
                    r.delete("css-generic-all");
                    var _ = {
                        id: "css-generic-all",
                        js: a,
                        allFrames: !0,
                        matches: [ "<all_urls>" ],
                        runAt: "document_idle"
                    };
                    0 !== v.length && (_.excludeMatches = v), void 0 === b ? t.toAdd.push(_) : !1 !== q(b.js, a, !1) && !1 !== q(b.excludeMatches, _.excludeMatches) || (t.toRemove.push("css-generic-all"), 
                    t.toAdd.push(_));
                    var w = mt(B(F(s, y)));
                    if (0 !== w.length) {
                        var S = r.get("css-generic-some");
                        r.delete("css-generic-some");
                        var x = {
                            id: "css-generic-some",
                            js: a,
                            allFrames: !0,
                            matches: w,
                            runAt: "document_idle"
                        };
                        void 0 === S ? t.toAdd.push(x) : !1 !== q(S.js, a, !1) && !1 !== q(S.matches, x.matches) || (t.toRemove.push("css-generic-some"), 
                        t.toAdd.push(x));
                    }
                } else {
                    var k = [].concat(mt(B(F(g, i))), mt(B(j(g, s))));
                    if (0 === k.length) return;
                    var E = r.get("css-generic-some");
                    r.delete("css-generic-some");
                    var T = {
                        id: "css-generic-some",
                        js: a,
                        allFrames: !0,
                        matches: k,
                        runAt: "document_idle"
                    };
                    void 0 === E ? t.toAdd.push(T) : !1 !== q(E.js, a, !1) && !1 !== q(E.matches, T.matches) || (t.toRemove.push("css-generic-some"), 
                    t.toAdd.push(T));
                }
            }
        }
        function Et(t) {
            var e, n = t.before, r = t.filteringModeDetails, o = [], i = gt(t.rulesetsDetails);
            try {
                for (i.s(); !(e = i.n()).done; ) {
                    var s, a = e.value;
                    0 !== ((null === (s = a.css) || void 0 === s ? void 0 : s.procedural) || 0) && o.push("/rulesets/scripting/procedural/".concat(a.id, ".js"));
                }
            } catch (t) {
                i.e(t);
            } finally {
                i.f();
            }
            if (0 !== o.length) {
                var c = r.none, u = r.basic, l = r.optimal, d = r.complete, p = [].concat(mt(B(l)), mt(B(d)));
                if (0 !== p.length) {
                    wt(p), o.unshift("/js/scripting/isolated-api.js"), o.push("/js/scripting/css-procedural.js");
                    var h = [];
                    !1 === c.has("all-urls") && h.push.apply(h, mt(B(c))), !1 === u.has("all-urls") && h.push.apply(h, mt(B(u)));
                    var f = n.get("css-procedural");
                    n.delete("css-procedural");
                    var m = {
                        id: "css-procedural",
                        js: o,
                        matches: p,
                        allFrames: !0,
                        runAt: "document_start"
                    };
                    0 !== h.length && (m.excludeMatches = h), void 0 !== f ? !1 !== q(f.js, o, !1) && !1 !== q(f.matches, p) && !1 !== q(f.excludeMatches, h) || (t.toRemove.push("css-procedural"), 
                    t.toAdd.push(m)) : t.toAdd.push(m);
                }
            }
        }
        function Tt(t) {
            var e, n = t.before, r = t.filteringModeDetails, o = [], i = gt(t.rulesetsDetails);
            try {
                for (i.s(); !(e = i.n()).done; ) {
                    var s, a = e.value;
                    0 !== ((null === (s = a.css) || void 0 === s ? void 0 : s.declarative) || 0) && o.push("/rulesets/scripting/declarative/".concat(a.id, ".js"));
                }
            } catch (t) {
                i.e(t);
            } finally {
                i.f();
            }
            if (0 !== o.length) {
                var c = r.none, u = r.basic, l = r.optimal, d = r.complete, p = [].concat(mt(B(l)), mt(B(d)));
                if (0 !== p.length) {
                    wt(p), o.unshift("/js/scripting/isolated-api.js"), o.push("/js/scripting/css-declarative.js");
                    var h = [];
                    !1 === c.has("all-urls") && h.push.apply(h, mt(B(c))), !1 === u.has("all-urls") && h.push.apply(h, mt(B(u)));
                    var f = n.get("css-declarative");
                    n.delete("css-declarative");
                    var m = {
                        id: "css-declarative",
                        js: o,
                        matches: p,
                        allFrames: !0,
                        runAt: "document_start"
                    };
                    0 !== h.length && (m.excludeMatches = h), void 0 !== f ? !1 !== q(f.js, o, !1) && !1 !== q(f.matches, p) && !1 !== q(f.excludeMatches, h) || (t.toRemove.push("css-declarative"), 
                    t.toAdd.push(m)) : t.toAdd.push(m);
                }
            }
        }
        function It(t) {
            var e, n = t.before, r = t.filteringModeDetails, o = [], i = gt(t.rulesetsDetails);
            try {
                for (i.s(); !(e = i.n()).done; ) {
                    var s, a = e.value;
                    0 !== ((null === (s = a.css) || void 0 === s ? void 0 : s.specific) || 0) && o.push("/rulesets/scripting/specific/".concat(a.id, ".js"));
                }
            } catch (t) {
                i.e(t);
            } finally {
                i.f();
            }
            if (0 !== o.length) {
                var c = r.none, u = r.basic, l = r.optimal, d = r.complete, p = [].concat(mt(B(l)), mt(B(d)));
                if (0 !== p.length) {
                    wt(p), o.unshift("/js/scripting/isolated-api.js"), o.push("/js/scripting/css-specific.js");
                    var h = [];
                    !1 === c.has("all-urls") && h.push.apply(h, mt(B(c))), !1 === u.has("all-urls") && h.push.apply(h, mt(B(u)));
                    var f = n.get("css-specific");
                    n.delete("css-specific");
                    var m = {
                        id: "css-specific",
                        js: o,
                        matches: p,
                        allFrames: !0,
                        runAt: "document_start"
                    };
                    0 !== h.length && (m.excludeMatches = h), void 0 !== f ? !1 !== q(f.js, o, !1) && !1 !== q(f.matches, p) && !1 !== q(f.excludeMatches, h) || (t.toRemove.push("css-specific"), 
                    t.toAdd.push(m)) : t.toAdd.push(m);
                }
            }
        }
        function Ct(t, e) {
            var n, r = t.before, o = t.filteringModeDetails, i = t.rulesetsDetails, s = o.optimal.has("all-urls") || o.complete.has("all-urls"), a = [].concat(mt(B(o.none)), mt(B(o.basic))), c = [].concat(mt(o.optimal), mt(o.complete)), u = gt(i.map((function(t) {
                return t.id;
            })));
            try {
                for (u.s(); !(n = u.n()).done; ) {
                    var l = n.value, d = e.get(l);
                    if (void 0 !== d) {
                        var p, h = gt(d);
                        try {
                            for (h.s(); !(p = h.n()).done; ) {
                                var f = ft(p.value, 2), m = f[0], g = f[1], y = "".concat(l, ".").concat(m), v = r.get(y), b = [], _ = [], w = [];
                                if (s ? (_.push.apply(_, mt(a)), w = g.hostnames.length > 100 ? [ "*" ] : g.hostnames) : 0 !== c.length && (w = g.hostnames.includes("*") ? c : j(g.hostnames, c)), 
                                0 !== w.length) {
                                    b.push.apply(b, mt(B(w))), wt(b), r.delete(y);
                                    var S = {
                                        id: y,
                                        js: [ "/rulesets/scripting/scriptlet/".concat(y, ".js") ],
                                        matches: b,
                                        allFrames: !0,
                                        matchOriginAsFallback: !0,
                                        runAt: "document_start",
                                        world: g.world
                                    };
                                    0 !== _.length && (S.excludeMatches = _), void 0 !== v ? !1 !== q(v.matches, b) && !1 !== q(v.excludeMatches, _) || (t.toRemove.push(y), 
                                    t.toAdd.push(S)) : t.toAdd.push(S);
                                }
                            }
                        } catch (t) {
                            h.e(t);
                        } finally {
                            h.f();
                        }
                    }
                }
            } catch (t) {
                u.e(t);
            } finally {
                u.f();
            }
        }
        function Rt() {
            return Ot.apply(this, arguments);
        }
        function Ot() {
            var t;
            return t = pt().mark((function t() {
                var e, n, r, o, i, s, a, c, u, l, d;
                return pt().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (void 0 !== m.scripting) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return", !1);

                      case 2:
                        if (!Rt.barrier) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return", !0);

                      case 4:
                        return Rt.barrier = !0, t.next = 7, Promise.all([ hn(), Fe(), (p = void 0, p = bt.get("scriptlet"), 
                        void 0 !== p || (p = A("/rulesets/scriptlet-details").then((function(t) {
                            return new Map(t);
                        })), bt.set("scriptlet", p)), p), _t(), m.scripting.getRegisteredContentScripts() ]);

                      case 7:
                        if (e = t.sent, n = ft(e, 5), r = n[0], o = n[1], i = n[2], s = n[3], a = n[4], 
                        c = new Map(St(a).map((function(t) {
                            return [ t.id, t ];
                        }))), Tt(d = {
                            filteringModeDetails: r,
                            rulesetsDetails: o,
                            before: c,
                            toAdd: u = [],
                            toRemove: l = []
                        }), Et(d), Ct(d, i), It(d), kt(d, s), xt(d, s), Q(d), l.push.apply(l, mt(Array.from(c.keys()))), 
                        0 === l.length) {
                            t.next = 37;
                            break;
                        }
                        return ut("Unregistered ".concat(l, " content (css/js)")), t.prev = 27, t.next = 30, 
                        m.scripting.unregisterContentScripts({
                            ids: l
                        });

                      case 30:
                        k("$scripting.unregisterContentScripts"), t.next = 37;
                        break;

                      case 33:
                        t.prev = 33, t.t0 = t.catch(27), S("$scripting.unregisterContentScripts", "".concat(t.t0));

                      case 37:
                        if (0 === u.length) {
                            t.next = 49;
                            break;
                        }
                        return ut("Registered ".concat(u.map((function(t) {
                            return t.id;
                        })), " content (css/js)")), t.prev = 39, t.next = 42, m.scripting.registerContentScripts(u);

                      case 42:
                        k("$scripting.registerContentScripts"), t.next = 49;
                        break;

                      case 45:
                        t.prev = 45, t.t1 = t.catch(39), S("$scripting.registerContentScripts", "".concat(t.t1));

                      case 49:
                        return Rt.barrier = !1, t.abrupt("return", !0);

                      case 51:
                      case "end":
                        return t.stop();
                    }
                    var p;
                }), t, null, [ [ 27, 33 ], [ 39, 45 ] ]);
            })), (Ot = function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        ht(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        ht(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            }).apply(this, arguments);
        }
        function Lt(t) {
            return (Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function At() {
            At = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof p ? e : p, s = Object.create(i.prototype), a = new E(o || []);
                return r(s, "_invoke", {
                    value: w(t, n, a)
                }), s;
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(T([])));
            y && y !== e && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function b(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function _(t, e) {
                function o(r, i, s, a) {
                    var c = l(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == Lt(d) && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(d).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = S(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function S(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, d);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function E(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(x, this), this.reset(!0);
            }
            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(v), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, b(_.prototype), c(_.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new _(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, b(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    d;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, t;
        }
        function Mt(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        function Nt(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        Mt(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        Mt(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            };
        }
        var Dt = {
            version: "",
            enabledRulesets: [ "default" ],
            autoReload: !0,
            showBlockedCount: !0
        }, Pt = {
            firstRun: !1,
            wakeupRun: !1
        };
        function jt() {
            var t, e = v.getManifest(), n = null == e || null === (t = e.declarative_net_request) || void 0 === t ? void 0 : t.rule_resources;
            return !1 === Array.isArray(n) ? [] : n.filter((function(t) {
                return t && !0 === t.enabled && "string" == typeof t.id;
            })).map((function(t) {
                return t.id;
            }));
        }
        function Ft(t) {
            if (!1 === Array.isArray(t) || 0 === t.length) {
                var e = jt();
                return Array.isArray(e) && 0 !== e.length ? e : t;
            }
            var n = jt(), r = new Set(n), o = t.filter((function(t) {
                return r.has(t);
            }));
            return 0 !== o.length && !1 !== o.includes("ublock-filters") || !Array.isArray(n) || 0 === n.length ? o : n;
        }
        function $t() {
            return Bt.apply(this, arguments);
        }
        function Bt() {
            return (Bt = Nt(At().mark((function t() {
                var e, n, r, o;
                return At().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, T("rulesetConfig");

                      case 2:
                        if (!(e = t.sent)) {
                            t.next = 16;
                            break;
                        }
                        if (n = e.enabledRulesets, Dt.version = e.version, Dt.enabledRulesets = Ft(n), Dt.autoReload = "boolean" != typeof e.autoReload || e.autoReload, 
                        Dt.showBlockedCount = "boolean" != typeof e.showBlockedCount || e.showBlockedCount, 
                        Pt.wakeupRun = !0, !1 !== Array.isArray(n) && 0 !== n.length && JSON.stringify(Dt.enabledRulesets) === JSON.stringify(n)) {
                            t.next = 15;
                            break;
                        }
                        return t.next = 13, C("rulesetConfig", Dt);

                      case 13:
                        return t.next = 15, S("rulesetConfig", Dt);

                      case 15:
                        return t.abrupt("return");

                      case 16:
                        return t.next = 18, _("rulesetConfig");

                      case 18:
                        if (!(r = t.sent)) {
                            t.next = 30;
                            break;
                        }
                        if (o = r.enabledRulesets, Dt.version = r.version, Dt.enabledRulesets = Ft(o), Dt.autoReload = "boolean" != typeof r.autoReload || r.autoReload, 
                        Dt.showBlockedCount = "boolean" != typeof r.showBlockedCount || r.showBlockedCount, 
                        C("rulesetConfig", Dt), !1 !== Array.isArray(o) && 0 !== o.length && JSON.stringify(Dt.enabledRulesets) === JSON.stringify(o)) {
                            t.next = 29;
                            break;
                        }
                        return t.next = 29, S("rulesetConfig", Dt);

                      case 29:
                        return t.abrupt("return");

                      case 30:
                        return t.t0 = Ft, t.next = 33, Ne();

                      case 33:
                        t.t1 = t.sent, Dt.enabledRulesets = (0, t.t0)(t.t1), C("rulesetConfig", Dt), S("rulesetConfig", Dt), 
                        Pt.firstRun = !0;

                      case 38:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function Ut() {
            return Ht.apply(this, arguments);
        }
        function Ht() {
            return (Ht = Nt(At().mark((function t() {
                return At().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return C("rulesetConfig", Dt), t.abrupt("return", S("rulesetConfig", Dt));

                      case 2:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function qt(t) {
            return (qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function zt(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = Yt(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            };
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, s = !0, a = !1;
            return {
                s: function() {
                    n = n.call(t);
                },
                n: function() {
                    var t = n.next();
                    return s = t.done, t;
                },
                e: function(t) {
                    a = !0, i = t;
                },
                f: function() {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function Wt() {
            Wt = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof p ? e : p, s = Object.create(i.prototype), a = new E(o || []);
                return r(s, "_invoke", {
                    value: w(t, n, a)
                }), s;
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(T([])));
            y && y !== e && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function b(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function _(t, e) {
                function o(r, i, s, a) {
                    var c = l(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == qt(d) && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(d).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = S(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function S(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, d);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function E(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(x, this), this.reset(!0);
            }
            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(v), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, b(_.prototype), c(_.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new _(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, b(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    d;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, t;
        }
        function Gt(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, s, a = [], c = !0, u = !1;
                    try {
                        if (i = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            c = !1;
                        } else for (;!(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); c = !0) ;
                    } catch (t) {
                        u = !0, o = t;
                    } finally {
                        try {
                            if (!c && null != n.return && (s = n.return(), Object(s) !== s)) return;
                        } finally {
                            if (u) throw o;
                        }
                    }
                    return a;
                }
            }(t, e) || Yt(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function Yt(t, e) {
            if (t) {
                if ("string" == typeof t) return Vt(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vt(t, e) : void 0;
            }
        }
        function Vt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function Jt(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        function Kt(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        Jt(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        Jt(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            };
        }
        var Xt = {
            keys: new Set,
            timer: void 0,
            change: function(t) {
                var e = this;
                this.keys.add(t), void 0 === this.timer && (this.timer = self.setTimeout((function() {
                    e.timer = void 0, e.process();
                }), 127));
            },
            process: function() {
                var t = this;
                return Kt(Wt().mark((function e() {
                    var n, r, o, i, s;
                    return Wt().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (!t.keys.has("rulesets")) {
                                e.next = 11;
                                break;
                            }
                            return ut('admin setting "rulesets" changed'), e.next = 4, Pe(Dt.enabledRulesets);

                          case 4:
                            return e.next = 6, Rt();

                          case 6:
                            return e.next = 8, Promise.all([ Qt(), g.getEnabledRulesets() ]);

                          case 8:
                            n = e.sent, r = Gt(n, 2), o = r[0], i = r[1], H({
                                adminRulesets: o,
                                enabledRulesets: i
                            });

                          case 11:
                            if (!t.keys.has("noFiltering")) {
                                e.next = 19;
                                break;
                            }
                            return ut('admin setting "noFiltering" changed'), e.next = 15, an(!0);

                          case 15:
                            return e.next = 17, wn();

                          case 17:
                            s = e.sent, H({
                                trustedSites: Array.from(s)
                            });

                          case 19:
                            t.keys.clear();

                          case 20:
                          case "end":
                            return e.stop();
                        }
                    }), e);
                })))();
            }
        };
        function Qt() {
            return Zt.apply(this, arguments);
        }
        function Zt() {
            return (Zt = Kt(Wt().mark((function t() {
                var e, n, r, o, i, s;
                return Wt().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, te("rulesets");

                      case 2:
                        if (e = t.sent, !(n = new Set(Array.isArray(e) && e || [])).has("-*")) {
                            t.next = 29;
                            break;
                        }
                        return n.delete("-*"), t.next = 8, _e();

                      case 8:
                        r = t.sent, o = zt(r.values()), t.prev = 10, o.s();

                      case 12:
                        if ((i = o.n()).done) {
                            t.next = 21;
                            break;
                        }
                        if (!(s = i.value).enabled) {
                            t.next = 16;
                            break;
                        }
                        return t.abrupt("continue", 19);

                      case 16:
                        if (!n.has("+".concat(s.id))) {
                            t.next = 18;
                            break;
                        }
                        return t.abrupt("continue", 19);

                      case 18:
                        n.add("-".concat(s.id));

                      case 19:
                        t.next = 12;
                        break;

                      case 21:
                        t.next = 26;
                        break;

                      case 23:
                        t.prev = 23, t.t0 = t.catch(10), o.e(t.t0);

                      case 26:
                        return t.prev = 26, o.f(), t.finish(26);

                      case 29:
                        return t.abrupt("return", Array.from(n));

                      case 30:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 10, 23, 26, 29 ] ]);
            })))).apply(this, arguments);
        }
        function te(t) {
            return ee.apply(this, arguments);
        }
        function ee() {
            return (ee = Kt(Wt().mark((function t(e) {
                var n, r, o;
                return Wt().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, T("admin_".concat(e));

                      case 2:
                        if (!(r = t.sent)) {
                            t.next = 7;
                            break;
                        }
                        n = r.data, t.next = 11;
                        break;

                      case 7:
                        return t.next = 9, _("admin_".concat(e));

                      case 9:
                        (o = t.sent) && (n = o.data);

                      case 11:
                        return O(e).then(function() {
                            var t = Kt(Wt().mark((function t(r) {
                                var o;
                                return Wt().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        return o = "admin_".concat(e), t.next = 3, Promise.all([ C(o, {
                                            data: r
                                        }), S(o, {
                                            data: r
                                        }) ]);

                                      case 3:
                                        if (JSON.stringify(r) !== JSON.stringify(n)) {
                                            t.next = 5;
                                            break;
                                        }
                                        return t.abrupt("return");

                                      case 5:
                                        Xt.change(e);

                                      case 6:
                                      case "end":
                                        return t.stop();
                                    }
                                }), t);
                            })));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }()), t.abrupt("return", n);

                      case 13:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function ne(t) {
            return (ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function re(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, s, a = [], c = !0, u = !1;
                    try {
                        if (i = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            c = !1;
                        } else for (;!(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); c = !0) ;
                    } catch (t) {
                        u = !0, o = t;
                    } finally {
                        try {
                            if (!c && null != n.return && (s = n.return(), Object(s) !== s)) return;
                        } finally {
                            if (u) throw o;
                        }
                    }
                    return a;
                }
            }(t, e) || se(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function oe() {
            oe = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof p ? e : p, s = Object.create(i.prototype), a = new E(o || []);
                return r(s, "_invoke", {
                    value: w(t, n, a)
                }), s;
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(T([])));
            y && y !== e && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function b(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function _(t, e) {
                function o(r, i, s, a) {
                    var c = l(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == ne(d) && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(d).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = S(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function S(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, d);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function E(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(x, this), this.reset(!0);
            }
            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(v), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, b(_.prototype), c(_.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new _(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, b(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    d;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, t;
        }
        function ie(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = se(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            };
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, s = !0, a = !1;
            return {
                s: function() {
                    n = n.call(t);
                },
                n: function() {
                    var t = n.next();
                    return s = t.done, t;
                },
                e: function(t) {
                    a = !0, i = t;
                },
                f: function() {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function se(t, e) {
            if (t) {
                if ("string" == typeof t) return ae(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ae(t, e) : void 0;
            }
        }
        function ae(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function ce(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        function ue(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        ce(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        ce(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            };
        }
        var le = 1e6, de = 1e6, pe = de + le, he = pe, fe = he + le, me = fe, ge = me + le, ye = ge, be = 8e6;
        function _e() {
            return void 0 !== _e.rulesetDetailsPromise || (_e.rulesetDetailsPromise = A("/rulesets/ruleset-details").then((function(t) {
                return new Map(t.map((function(t) {
                    return [ t.id, t ];
                })));
            }))), _e.rulesetDetailsPromise;
        }
        function we() {
            return void 0 !== we.dynamicRuleMapPromise || (we.dynamicRuleMapPromise = g.getDynamicRules().then((function(t) {
                var e = new Map(t.map((function(t) {
                    return [ t.id, t ];
                })));
                return ut("Dynamic rule count: ".concat(e.size)), ut("Available dynamic rule count: ".concat(g.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES - e.size)), 
                e;
            }))), we.dynamicRuleMapPromise;
        }
        function Se(t, e) {
            return xe.apply(this, arguments);
        }
        function xe() {
            return (xe = ue(oe().mark((function t(e, n) {
                var r, o, i, s, a, c, u, l;
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, g.getDynamicRules();

                      case 2:
                        r = t.sent, o = new Set(r.filter((function(t) {
                            var e;
                            return !!(null === (e = t.condition) || void 0 === e ? void 0 : e.regexFilter);
                        })).map((function(t) {
                            return t.condition.regexFilter;
                        }))), i = [], s = [], a = ie(n), t.prev = 7, u = oe().mark((function t() {
                            var e, n, r, a, u;
                            return oe().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = c.value, void 0 !== (null === (e = n.condition) || void 0 === e ? void 0 : e.regexFilter)) {
                                        t.next = 4;
                                        break;
                                    }
                                    return i.push(!0), t.abrupt("return", "continue");

                                  case 4:
                                    if (r = n.condition, a = r.regexFilter, u = r.isUrlFilterCaseSensitive, !o.has(a)) {
                                        t.next = 8;
                                        break;
                                    }
                                    return i.push(!0), t.abrupt("return", "continue");

                                  case 8:
                                    if (!Se.invalidRegexes.has(a)) {
                                        t.next = 11;
                                        break;
                                    }
                                    return i.push(!1), t.abrupt("return", "continue");

                                  case 11:
                                    i.push(g.isRegexSupported({
                                        regex: a,
                                        isCaseSensitive: u
                                    }).then((function(t) {
                                        return !!t.isSupported || (Se.invalidRegexes.add(a), s.push("\t".concat(a, "  ").concat(t.reason)), 
                                        !1);
                                    })));

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }), t);
                        })), a.s();

                      case 10:
                        if ((c = a.n()).done) {
                            t.next = 17;
                            break;
                        }
                        return t.delegateYield(u(), "t0", 12);

                      case 12:
                        if ("continue" !== t.t0) {
                            t.next = 15;
                            break;
                        }
                        return t.abrupt("continue", 15);

                      case 15:
                        t.next = 10;
                        break;

                      case 17:
                        t.next = 22;
                        break;

                      case 19:
                        t.prev = 19, t.t1 = t.catch(7), a.e(t.t1);

                      case 22:
                        return t.prev = 22, a.f(), t.finish(22);

                      case 25:
                        return t.next = 27, Promise.all(i);

                      case 27:
                        return l = t.sent, 0 !== s.length && ut("".concat(e, " realm: rejected regexes:\n"), s.join("\n")), 
                        t.abrupt("return", n.filter((function(t, e) {
                            return l[e];
                        })));

                      case 30:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 7, 19, 22, 25 ] ]);
            })))).apply(this, arguments);
        }
        function ke() {
            return Ee.apply(this, arguments);
        }
        function Ee() {
            return (Ee = ue(oe().mark((function t() {
                var e, n, r, o, i, s, a, c, u, l, d, p, h, f, m, y, v, b, _, w, S, x, k, E, T, I;
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Fe();

                      case 2:
                        e = t.sent, n = [], r = ie(e), t.prev = 5, r.s();

                      case 7:
                        if ((o = r.n()).done) {
                            t.next = 14;
                            break;
                        }
                        if (0 !== (i = o.value).rules.regex) {
                            t.next = 11;
                            break;
                        }
                        return t.abrupt("continue", 12);

                      case 11:
                        n.push(A("/rulesets/regex/".concat(i.id)));

                      case 12:
                        t.next = 7;
                        break;

                      case 14:
                        t.next = 19;
                        break;

                      case 16:
                        t.prev = 16, t.t0 = t.catch(5), r.e(t.t0);

                      case 19:
                        return t.prev = 19, r.f(), t.finish(19);

                      case 22:
                        return t.next = 24, Promise.all(n);

                      case 24:
                        s = t.sent, a = [], c = de, u = ie(s), t.prev = 28, u.s();

                      case 30:
                        if ((l = u.n()).done) {
                            t.next = 38;
                            break;
                        }
                        if (d = l.value, !1 !== Array.isArray(d)) {
                            t.next = 34;
                            break;
                        }
                        return t.abrupt("continue", 36);

                      case 34:
                        p = ie(d);
                        try {
                            for (p.s(); !(h = p.n()).done; ) (f = h.value).id = c++, a.push(f);
                        } catch (t) {
                            p.e(t);
                        } finally {
                            p.f();
                        }

                      case 36:
                        t.next = 30;
                        break;

                      case 38:
                        t.next = 43;
                        break;

                      case 40:
                        t.prev = 40, t.t1 = t.catch(28), u.e(t.t1);

                      case 43:
                        return t.prev = 43, u.f(), t.finish(43);

                      case 46:
                        return t.next = 48, Se("regexes", a);

                      case 48:
                        return m = t.sent, t.next = 51, we();

                      case 51:
                        y = t.sent, v = new Map(m.map((function(t) {
                            return [ t.id, t ];
                        }))), b = [], _ = [], w = ie(y.values()), t.prev = 56, w.s();

                      case 58:
                        if ((S = w.n()).done) {
                            t.next = 68;
                            break;
                        }
                        if (!((x = S.value).id < de)) {
                            t.next = 62;
                            break;
                        }
                        return t.abrupt("continue", 66);

                      case 62:
                        if (!(x.id >= pe)) {
                            t.next = 64;
                            break;
                        }
                        return t.abrupt("continue", 66);

                      case 64:
                        void 0 === (k = v.get(x.id)) ? (_.push(x.id), y.delete(x.id)) : JSON.stringify(x) !== JSON.stringify(k) && (_.push(x.id), 
                        b.push(k), y.set(x.id, k));

                      case 66:
                        t.next = 58;
                        break;

                      case 68:
                        t.next = 73;
                        break;

                      case 70:
                        t.prev = 70, t.t2 = t.catch(56), w.e(t.t2);

                      case 73:
                        return t.prev = 73, w.f(), t.finish(73);

                      case 76:
                        E = ie(v.values()), t.prev = 77, E.s();

                      case 79:
                        if ((T = E.n()).done) {
                            t.next = 87;
                            break;
                        }
                        if (I = T.value, !y.has(I.id)) {
                            t.next = 83;
                            break;
                        }
                        return t.abrupt("continue", 85);

                      case 83:
                        b.push(I), y.set(I.id, I);

                      case 85:
                        t.next = 79;
                        break;

                      case 87:
                        t.next = 92;
                        break;

                      case 89:
                        t.prev = 89, t.t3 = t.catch(77), E.e(t.t3);

                      case 92:
                        return t.prev = 92, E.f(), t.finish(92);

                      case 95:
                        if (0 !== b.length || 0 !== _.length) {
                            t.next = 97;
                            break;
                        }
                        return t.abrupt("return");

                      case 97:
                        return 0 !== _.length && ut("Remove ".concat(_.length, " DNR regex rules")), 0 !== b.length && ut("Add ".concat(b.length, " DNR regex rules")), 
                        t.abrupt("return", g.updateDynamicRules({
                            addRules: b,
                            removeRuleIds: _
                        }).catch((function(t) {})));

                      case 100:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 5, 16, 19, 22 ], [ 28, 40, 43, 46 ], [ 56, 70, 73, 76 ], [ 77, 89, 92, 95 ] ]);
            })))).apply(this, arguments);
        }
        function Te() {
            return Ie.apply(this, arguments);
        }
        function Ie() {
            return (Ie = ue(oe().mark((function t() {
                var e, n, r, o, i, s, a, c, u, l, d, p, h, f, y, v, b, _, w, S, x, k, E, T, I, C, R, O, L;
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Promise.all([ m.permissions.contains({
                            origins: [ "<all_urls>" ]
                        }), Fe(), we() ]);

                      case 2:
                        e = t.sent, n = re(e, 3), r = n[0], o = n[1], i = n[2], s = [], a = ie(o), t.prev = 9, 
                        a.s();

                      case 11:
                        if ((c = a.n()).done) {
                            t.next = 18;
                            break;
                        }
                        if (0 !== (u = c.value).rules.removeparam) {
                            t.next = 15;
                            break;
                        }
                        return t.abrupt("continue", 16);

                      case 15:
                        s.push(A("/rulesets/removeparam/".concat(u.id)));

                      case 16:
                        t.next = 11;
                        break;

                      case 18:
                        t.next = 23;
                        break;

                      case 20:
                        t.prev = 20, t.t0 = t.catch(9), a.e(t.t0);

                      case 23:
                        return t.prev = 23, a.f(), t.finish(23);

                      case 26:
                        return t.next = 28, Promise.all(s);

                      case 28:
                        if (l = t.sent, d = [], !r) {
                            t.next = 51;
                            break;
                        }
                        p = he, h = ie(l), t.prev = 33, h.s();

                      case 35:
                        if ((f = h.n()).done) {
                            t.next = 43;
                            break;
                        }
                        if (y = f.value, !1 !== Array.isArray(y)) {
                            t.next = 39;
                            break;
                        }
                        return t.abrupt("continue", 41);

                      case 39:
                        v = ie(y);
                        try {
                            for (v.s(); !(b = v.n()).done; ) (_ = b.value).id = p++, d.push(_);
                        } catch (t) {
                            v.e(t);
                        } finally {
                            v.f();
                        }

                      case 41:
                        t.next = 35;
                        break;

                      case 43:
                        t.next = 48;
                        break;

                      case 45:
                        t.prev = 45, t.t1 = t.catch(33), h.e(t.t1);

                      case 48:
                        return t.prev = 48, h.f(), t.finish(48);

                      case 51:
                        return t.next = 53, Se("removeparam", d);

                      case 53:
                        w = t.sent, S = new Map(w.map((function(t) {
                            return [ t.id, t ];
                        }))), x = [], k = [], E = ie(i.values()), t.prev = 58, E.s();

                      case 60:
                        if ((T = E.n()).done) {
                            t.next = 70;
                            break;
                        }
                        if (!((I = T.value).id < he)) {
                            t.next = 64;
                            break;
                        }
                        return t.abrupt("continue", 68);

                      case 64:
                        if (!(I.id >= fe)) {
                            t.next = 66;
                            break;
                        }
                        return t.abrupt("continue", 68);

                      case 66:
                        void 0 === (C = S.get(I.id)) ? (k.push(I.id), i.delete(I.id)) : JSON.stringify(I) !== JSON.stringify(C) && (k.push(I.id), 
                        x.push(C), i.set(I.id, C));

                      case 68:
                        t.next = 60;
                        break;

                      case 70:
                        t.next = 75;
                        break;

                      case 72:
                        t.prev = 72, t.t2 = t.catch(58), E.e(t.t2);

                      case 75:
                        return t.prev = 75, E.f(), t.finish(75);

                      case 78:
                        R = ie(S.values()), t.prev = 79, R.s();

                      case 81:
                        if ((O = R.n()).done) {
                            t.next = 89;
                            break;
                        }
                        if (L = O.value, !i.has(L.id)) {
                            t.next = 85;
                            break;
                        }
                        return t.abrupt("continue", 87);

                      case 85:
                        x.push(L), i.set(L.id, L);

                      case 87:
                        t.next = 81;
                        break;

                      case 89:
                        t.next = 94;
                        break;

                      case 91:
                        t.prev = 91, t.t3 = t.catch(79), R.e(t.t3);

                      case 94:
                        return t.prev = 94, R.f(), t.finish(94);

                      case 97:
                        if (0 !== x.length || 0 !== k.length) {
                            t.next = 99;
                            break;
                        }
                        return t.abrupt("return");

                      case 99:
                        return 0 !== k.length && ut("Remove ".concat(k.length, " DNR removeparam rules")), 
                        0 !== x.length && ut("Add ".concat(x.length, " DNR removeparam rules")), t.abrupt("return", g.updateDynamicRules({
                            addRules: x,
                            removeRuleIds: k
                        }).catch((function(t) {})));

                      case 102:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 9, 20, 23, 26 ], [ 33, 45, 48, 51 ], [ 58, 72, 75, 78 ], [ 79, 91, 94, 97 ] ]);
            })))).apply(this, arguments);
        }
        function Ce() {
            return Re.apply(this, arguments);
        }
        function Re() {
            return (Re = ue(oe().mark((function t() {
                var e, n, r, o, i, s, a, c, u, l, d, p, h, f, y, v, b, _, w, S, x, k, E, T, I, C, R, O, L;
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Promise.all([ m.permissions.contains({
                            origins: [ "<all_urls>" ]
                        }), Fe(), we() ]);

                      case 2:
                        e = t.sent, n = re(e, 3), r = n[0], o = n[1], i = n[2], s = [], a = ie(o), t.prev = 9, 
                        a.s();

                      case 11:
                        if ((c = a.n()).done) {
                            t.next = 18;
                            break;
                        }
                        if (0 !== (u = c.value).rules.redirect) {
                            t.next = 15;
                            break;
                        }
                        return t.abrupt("continue", 16);

                      case 15:
                        s.push(A("/rulesets/redirect/".concat(u.id)));

                      case 16:
                        t.next = 11;
                        break;

                      case 18:
                        t.next = 23;
                        break;

                      case 20:
                        t.prev = 20, t.t0 = t.catch(9), a.e(t.t0);

                      case 23:
                        return t.prev = 23, a.f(), t.finish(23);

                      case 26:
                        return t.next = 28, Promise.all(s);

                      case 28:
                        if (l = t.sent, d = [], !r) {
                            t.next = 51;
                            break;
                        }
                        p = me, h = ie(l), t.prev = 33, h.s();

                      case 35:
                        if ((f = h.n()).done) {
                            t.next = 43;
                            break;
                        }
                        if (y = f.value, !1 !== Array.isArray(y)) {
                            t.next = 39;
                            break;
                        }
                        return t.abrupt("continue", 41);

                      case 39:
                        v = ie(y);
                        try {
                            for (v.s(); !(b = v.n()).done; ) (_ = b.value).id = p++, d.push(_);
                        } catch (t) {
                            v.e(t);
                        } finally {
                            v.f();
                        }

                      case 41:
                        t.next = 35;
                        break;

                      case 43:
                        t.next = 48;
                        break;

                      case 45:
                        t.prev = 45, t.t1 = t.catch(33), h.e(t.t1);

                      case 48:
                        return t.prev = 48, h.f(), t.finish(48);

                      case 51:
                        return t.next = 53, Se("redirect", d);

                      case 53:
                        w = t.sent, S = new Map(w.map((function(t) {
                            return [ t.id, t ];
                        }))), x = [], k = [], E = ie(i.values()), t.prev = 58, E.s();

                      case 60:
                        if ((T = E.n()).done) {
                            t.next = 70;
                            break;
                        }
                        if (!((I = T.value).id < me)) {
                            t.next = 64;
                            break;
                        }
                        return t.abrupt("continue", 68);

                      case 64:
                        if (!(I.id >= ge)) {
                            t.next = 66;
                            break;
                        }
                        return t.abrupt("continue", 68);

                      case 66:
                        void 0 === (C = S.get(I.id)) ? (k.push(I.id), i.delete(I.id)) : JSON.stringify(I) !== JSON.stringify(C) && (k.push(I.id), 
                        x.push(C), i.set(I.id, C));

                      case 68:
                        t.next = 60;
                        break;

                      case 70:
                        t.next = 75;
                        break;

                      case 72:
                        t.prev = 72, t.t2 = t.catch(58), E.e(t.t2);

                      case 75:
                        return t.prev = 75, E.f(), t.finish(75);

                      case 78:
                        R = ie(S.values()), t.prev = 79, R.s();

                      case 81:
                        if ((O = R.n()).done) {
                            t.next = 89;
                            break;
                        }
                        if (L = O.value, !i.has(L.id)) {
                            t.next = 85;
                            break;
                        }
                        return t.abrupt("continue", 87);

                      case 85:
                        x.push(L), i.set(L.id, L);

                      case 87:
                        t.next = 81;
                        break;

                      case 89:
                        t.next = 94;
                        break;

                      case 91:
                        t.prev = 91, t.t3 = t.catch(79), R.e(t.t3);

                      case 94:
                        return t.prev = 94, R.f(), t.finish(94);

                      case 97:
                        if (0 !== x.length || 0 !== k.length) {
                            t.next = 99;
                            break;
                        }
                        return t.abrupt("return");

                      case 99:
                        return 0 !== k.length && ut("Remove ".concat(k.length, " DNR redirect rules")), 
                        0 !== x.length && ut("Add ".concat(x.length, " DNR redirect rules")), t.abrupt("return", g.updateDynamicRules({
                            addRules: x,
                            removeRuleIds: k
                        }).catch((function(t) {})));

                      case 102:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 9, 20, 23, 26 ], [ 33, 45, 48, 51 ], [ 58, 72, 75, 78 ], [ 79, 91, 94, 97 ] ]);
            })))).apply(this, arguments);
        }
        function Oe() {
            return Le.apply(this, arguments);
        }
        function Le() {
            return (Le = ue(oe().mark((function t() {
                var e, n, r, o, i, s, a, c, u, l, d, p, h, f, y, v, b, _, w, S, x, k, E, T, I, C, R, O, L;
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Promise.all([ m.permissions.contains({
                            origins: [ "<all_urls>" ]
                        }), Fe(), we() ]);

                      case 2:
                        e = t.sent, n = re(e, 3), r = n[0], o = n[1], i = n[2], s = [], a = ie(o), t.prev = 9, 
                        a.s();

                      case 11:
                        if ((c = a.n()).done) {
                            t.next = 18;
                            break;
                        }
                        if (0 !== (u = c.value).rules.modifyHeaders) {
                            t.next = 15;
                            break;
                        }
                        return t.abrupt("continue", 16);

                      case 15:
                        s.push(A("/rulesets/modify-headers/".concat(u.id)));

                      case 16:
                        t.next = 11;
                        break;

                      case 18:
                        t.next = 23;
                        break;

                      case 20:
                        t.prev = 20, t.t0 = t.catch(9), a.e(t.t0);

                      case 23:
                        return t.prev = 23, a.f(), t.finish(23);

                      case 26:
                        return t.next = 28, Promise.all(s);

                      case 28:
                        if (l = t.sent, d = [], !r) {
                            t.next = 51;
                            break;
                        }
                        p = ye, h = ie(l), t.prev = 33, h.s();

                      case 35:
                        if ((f = h.n()).done) {
                            t.next = 43;
                            break;
                        }
                        if (y = f.value, !1 !== Array.isArray(y)) {
                            t.next = 39;
                            break;
                        }
                        return t.abrupt("continue", 41);

                      case 39:
                        v = ie(y);
                        try {
                            for (v.s(); !(b = v.n()).done; ) (_ = b.value).id = p++, d.push(_);
                        } catch (t) {
                            v.e(t);
                        } finally {
                            v.f();
                        }

                      case 41:
                        t.next = 35;
                        break;

                      case 43:
                        t.next = 48;
                        break;

                      case 45:
                        t.prev = 45, t.t1 = t.catch(33), h.e(t.t1);

                      case 48:
                        return t.prev = 48, h.f(), t.finish(48);

                      case 51:
                        return t.next = 53, Se("modify-headers", d);

                      case 53:
                        w = t.sent, S = new Map(w.map((function(t) {
                            return [ t.id, t ];
                        }))), x = [], k = [], E = ie(i.values()), t.prev = 58, E.s();

                      case 60:
                        if ((T = E.n()).done) {
                            t.next = 70;
                            break;
                        }
                        if (!((I = T.value).id < ye)) {
                            t.next = 64;
                            break;
                        }
                        return t.abrupt("continue", 68);

                      case 64:
                        if (!(I.id >= 5e6)) {
                            t.next = 66;
                            break;
                        }
                        return t.abrupt("continue", 68);

                      case 66:
                        void 0 === (C = S.get(I.id)) ? (k.push(I.id), i.delete(I.id)) : JSON.stringify(I) !== JSON.stringify(C) && (k.push(I.id), 
                        x.push(C), i.set(I.id, C));

                      case 68:
                        t.next = 60;
                        break;

                      case 70:
                        t.next = 75;
                        break;

                      case 72:
                        t.prev = 72, t.t2 = t.catch(58), E.e(t.t2);

                      case 75:
                        return t.prev = 75, E.f(), t.finish(75);

                      case 78:
                        R = ie(S.values()), t.prev = 79, R.s();

                      case 81:
                        if ((O = R.n()).done) {
                            t.next = 89;
                            break;
                        }
                        if (L = O.value, !i.has(L.id)) {
                            t.next = 85;
                            break;
                        }
                        return t.abrupt("continue", 87);

                      case 85:
                        x.push(L), i.set(L.id, L);

                      case 87:
                        t.next = 81;
                        break;

                      case 89:
                        t.next = 94;
                        break;

                      case 91:
                        t.prev = 91, t.t3 = t.catch(79), R.e(t.t3);

                      case 94:
                        return t.prev = 94, R.f(), t.finish(94);

                      case 97:
                        if (0 !== x.length || 0 !== k.length) {
                            t.next = 99;
                            break;
                        }
                        return t.abrupt("return");

                      case 99:
                        return 0 !== k.length && ut("Remove ".concat(k.length, " DNR modifyHeaders rules")), 
                        0 !== x.length && ut("Add ".concat(x.length, " DNR modifyHeaders rules")), t.abrupt("return", g.updateDynamicRules({
                            addRules: x,
                            removeRuleIds: k
                        }).catch((function(t) {})));

                      case 102:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 9, 20, 23, 26 ], [ 33, 45, 48, 51 ], [ 58, 72, 75, 78 ], [ 79, 91, 94, 97 ] ]);
            })))).apply(this, arguments);
        }
        function Ae() {
            return Me.apply(this, arguments);
        }
        function Me() {
            return (Me = ue(oe().mark((function t() {
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.abrupt("return", Promise.all([ ke(), Te(), Ce(), Oe() ]));

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function Ne() {
            return De.apply(this, arguments);
        }
        function De() {
            return (De = ue(oe().mark((function t() {
                var e, n, r, o, i, s, a, c, u, l, d, p, h;
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, g.getEnabledRulesets();

                      case 2:
                        e = t.sent, n = function(t) {
                            var e = t.indexOf("-");
                            return -1 === e ? t : t.slice(0, e);
                        }, r = new Set, o = ie(navigator.languages.map(n));
                        try {
                            for (o.s(); !(i = o.n()).done; ) s = i.value, r.add(s);
                        } catch (t) {
                            o.e(t);
                        } finally {
                            o.f();
                        }
                        return r.add(n(y.getUILanguage())), a = new RegExp("\\b(".concat(Array.from(r).join("|"), ")\\b")), 
                        t.next = 11, _e();

                      case 11:
                        c = t.sent, u = ie(c), t.prev = 13, u.s();

                      case 15:
                        if ((l = u.n()).done) {
                            t.next = 22;
                            break;
                        }
                        if (d = re(l.value, 2), p = d[0], "string" != typeof (h = d[1]).lang || !1 !== a.test(h.lang)) {
                            t.next = 19;
                            break;
                        }
                        return t.abrupt("continue", 20);

                      case 19:
                        e.push(p);

                      case 20:
                        t.next = 15;
                        break;

                      case 22:
                        t.next = 27;
                        break;

                      case 24:
                        t.prev = 24, t.t0 = t.catch(13), u.e(t.t0);

                      case 27:
                        return t.prev = 27, u.f(), t.finish(27);

                      case 30:
                        return t.abrupt("return", e);

                      case 31:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 13, 24, 27, 30 ] ]);
            })))).apply(this, arguments);
        }
        function Pe(t) {
            return je.apply(this, arguments);
        }
        function je() {
            return (je = ue(oe().mark((function t(e) {
                var n, r, o, i, s, a, c, u, l, d, p, h, f, m, y, v, b, _, w, S, x, k, E, T, I, C, R;
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n = new Set(e), t.next = 3, Promise.all([ g.getEnabledRulesets().then((function(t) {
                            return new Set(t);
                        })), Qt(), _e() ]);

                      case 3:
                        r = t.sent, o = re(r, 3), i = o[0], s = o[1], a = o[2], c = ie(s);
                        try {
                            for (c.s(); !(u = c.n()).done; ) l = u.value, d = l.charAt(0), p = l.slice(1), "+" === d ? n.add(p) : "-" === d && n.delete(p);
                        } catch (t) {
                            c.e(t);
                        } finally {
                            c.f();
                        }
                        h = new Set, f = new Set, m = ie(n), t.prev = 13, m.s();

                      case 15:
                        if ((y = m.n()).done) {
                            t.next = 22;
                            break;
                        }
                        if (v = y.value, !i.has(v)) {
                            t.next = 19;
                            break;
                        }
                        return t.abrupt("continue", 20);

                      case 19:
                        h.add(v);

                      case 20:
                        t.next = 15;
                        break;

                      case 22:
                        t.next = 27;
                        break;

                      case 24:
                        t.prev = 24, t.t0 = t.catch(13), m.e(t.t0);

                      case 27:
                        return t.prev = 27, m.f(), t.finish(27);

                      case 30:
                        b = ie(i), t.prev = 31, b.s();

                      case 33:
                        if ((_ = b.n()).done) {
                            t.next = 40;
                            break;
                        }
                        if (w = _.value, !n.has(w)) {
                            t.next = 37;
                            break;
                        }
                        return t.abrupt("continue", 38);

                      case 37:
                        f.add(w);

                      case 38:
                        t.next = 33;
                        break;

                      case 40:
                        t.next = 45;
                        break;

                      case 42:
                        t.prev = 42, t.t1 = t.catch(31), b.e(t.t1);

                      case 45:
                        return t.prev = 45, b.f(), t.finish(45);

                      case 48:
                        S = ie(h), t.prev = 49, S.s();

                      case 51:
                        if ((x = S.n()).done) {
                            t.next = 58;
                            break;
                        }
                        if (k = x.value, !a.has(k)) {
                            t.next = 55;
                            break;
                        }
                        return t.abrupt("continue", 56);

                      case 55:
                        h.delete(k);

                      case 56:
                        t.next = 51;
                        break;

                      case 58:
                        t.next = 63;
                        break;

                      case 60:
                        t.prev = 60, t.t2 = t.catch(49), S.e(t.t2);

                      case 63:
                        return t.prev = 63, S.f(), t.finish(63);

                      case 66:
                        E = ie(f), t.prev = 67, E.s();

                      case 69:
                        if ((T = E.n()).done) {
                            t.next = 76;
                            break;
                        }
                        if (I = T.value, !a.has(I)) {
                            t.next = 73;
                            break;
                        }
                        return t.abrupt("continue", 74);

                      case 73:
                        f.delete(I);

                      case 74:
                        t.next = 69;
                        break;

                      case 76:
                        t.next = 81;
                        break;

                      case 78:
                        t.prev = 78, t.t3 = t.catch(67), E.e(t.t3);

                      case 81:
                        return t.prev = 81, E.f(), t.finish(81);

                      case 84:
                        if (0 !== h.size || 0 !== f.size) {
                            t.next = 86;
                            break;
                        }
                        return t.abrupt("return");

                      case 86:
                        return C = Array.from(h), R = Array.from(f), 0 !== C.length && ut("Enable rulesets: ".concat(C)), 
                        0 !== R.length && ut("Disable ruleset: ".concat(R)), t.next = 92, g.updateEnabledRulesets({
                            enableRulesetIds: C,
                            disableRulesetIds: R
                        });

                      case 92:
                        return t.abrupt("return", Ae());

                      case 93:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 13, 24, 27, 30 ], [ 31, 42, 45, 48 ], [ 49, 60, 63, 66 ], [ 67, 78, 81, 84 ] ]);
            })))).apply(this, arguments);
        }
        function Fe() {
            return $e.apply(this, arguments);
        }
        function $e() {
            return ($e = ue(oe().mark((function t() {
                var e, n, r, o, i, s, a, c, u;
                return oe().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Promise.all([ g.getEnabledRulesets(), _e() ]);

                      case 2:
                        e = t.sent, n = re(e, 2), r = n[0], o = n[1], i = [], s = ie(r), t.prev = 8, s.s();

                      case 10:
                        if ((a = s.n()).done) {
                            t.next = 18;
                            break;
                        }
                        if (c = a.value, void 0 !== (u = o.get(c))) {
                            t.next = 15;
                            break;
                        }
                        return t.abrupt("continue", 16);

                      case 15:
                        i.push(u);

                      case 16:
                        t.next = 10;
                        break;

                      case 18:
                        t.next = 23;
                        break;

                      case 20:
                        t.prev = 20, t.t0 = t.catch(8), s.e(t.t0);

                      case 23:
                        return t.prev = 23, s.f(), t.finish(23);

                      case 26:
                        return t.abrupt("return", i);

                      case 27:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 8, 20, 23, 26 ] ]);
            })))).apply(this, arguments);
        }
        function Be(t) {
            return (Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function Ue(t) {
            return function(t) {
                if (Array.isArray(t)) return Ve(t);
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
            }(t) || Ye(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function He() {
            He = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof p ? e : p, s = Object.create(i.prototype), a = new E(o || []);
                return r(s, "_invoke", {
                    value: w(t, n, a)
                }), s;
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(T([])));
            y && y !== e && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function b(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function _(t, e) {
                function o(r, i, s, a) {
                    var c = l(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == Be(d) && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(d).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = S(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function S(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, d);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function E(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(x, this), this.reset(!0);
            }
            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(v), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, b(_.prototype), c(_.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new _(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, b(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    d;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, t;
        }
        function qe(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, s, a = [], c = !0, u = !1;
                    try {
                        if (i = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            c = !1;
                        } else for (;!(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); c = !0) ;
                    } catch (t) {
                        u = !0, o = t;
                    } finally {
                        try {
                            if (!c && null != n.return && (s = n.return(), Object(s) !== s)) return;
                        } finally {
                            if (u) throw o;
                        }
                    }
                    return a;
                }
            }(t, e) || Ye(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function ze(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        function We(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        ze(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        ze(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            };
        }
        function Ge(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = Ye(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0, o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            };
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i, s = !0, a = !1;
            return {
                s: function() {
                    n = n.call(t);
                },
                n: function() {
                    var t = n.next();
                    return s = t.done, t;
                },
                e: function(t) {
                    a = !0, i = t;
                },
                f: function() {
                    try {
                        s || null == n.return || n.return();
                    } finally {
                        if (a) throw i;
                    }
                }
            };
        }
        function Ye(t, e) {
            if (t) {
                if ("string" == typeof t) return Ve(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ve(t, e) : void 0;
            }
        }
        function Ve(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        Se.invalidRegexes = new Set;
        var Ze = function(t, e) {
            var n, r = Ge(e);
            try {
                for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value;
                    !1 !== o.endsWith(t) && o !== t && "." === o.at(-t.length - 1) && e.delete(o);
                }
            } catch (t) {
                r.e(t);
            } finally {
                r.f();
            }
        }, tn = function(t, e) {
            for (var n = t; e.delete(n), "*" !== (n = D(n)); ) ;
        }, en = function(t, e) {
            if (t.size !== e.size) return !1;
            var n, r = Ge(e);
            try {
                for (r.s(); !(n = r.n()).done; ) {
                    var o = n.value;
                    if (!1 === t.has(o)) return !1;
                }
            } catch (t) {
                r.e(t);
            } finally {
                r.f();
            }
            var i, s = Ge(t);
            try {
                for (s.s(); !(i = s.n()).done; ) {
                    var a = i.value;
                    if (!1 === e.has(a)) return !1;
                }
            } catch (t) {
                s.e(t);
            } finally {
                s.f();
            }
            return !0;
        }, nn = function(t) {
            return {
                none: Array.from(t.none),
                basic: Array.from(t.basic),
                optimal: Array.from(t.optimal),
                complete: Array.from(t.complete)
            };
        }, rn = function(t) {
            var e, n, r;
            return {
                none: new Set(t.none),
                basic: new Set(null !== (e = t.basic) && void 0 !== e ? e : t.network),
                optimal: new Set(null !== (n = t.optimal) && void 0 !== n ? n : t.extendedSpecific),
                complete: new Set(null !== (r = t.complete) && void 0 !== r ? r : t.extendedGeneric)
            };
        };
        function on(t, e) {
            var n = t.none, r = t.basic, o = t.optimal, i = t.complete;
            return "all-urls" === e ? t.none.has("all-urls") ? 0 : t.basic.has("all-urls") ? 1 : t.optimal.has("all-urls") ? 2 : t.complete.has("all-urls") ? 3 : 1 : n.has(e) || !1 === n.has("all-urls") && P(e, n) ? 0 : r.has(e) || !1 === r.has("all-urls") && P(e, r) ? 1 : o.has(e) || !1 === o.has("all-urls") && P(e, o) ? 2 : i.has(e) || !1 === i.has("all-urls") && P(e, i) ? 3 : on(t, "all-urls");
        }
        function sn(t, e, n) {
            var r = on(t, "all-urls");
            if ("all-urls" === e) {
                if (n === r) return n;
                switch (n) {
                  case 0:
                    t.none.clear(), t.none.add("all-urls");
                    break;

                  case 1:
                    t.basic.clear(), t.basic.add("all-urls");
                    break;

                  case 2:
                    t.optimal.clear(), t.optimal.add("all-urls");
                    break;

                  case 3:
                    t.complete.clear(), t.complete.add("all-urls");
                }
                switch (r) {
                  case 0:
                    t.none.delete("all-urls");
                    break;

                  case 1:
                    t.basic.delete("all-urls");
                    break;

                  case 2:
                    t.optimal.delete("all-urls");
                    break;

                  case 3:
                    t.complete.delete("all-urls");
                }
                return on(t, "all-urls");
            }
            var o = on(t, e);
            if (n === o) return n;
            var i = t.none, s = t.basic, a = t.optimal, c = t.complete;
            switch (o) {
              case 0:
                tn(e, i);
                break;

              case 1:
                tn(e, s);
                break;

              case 2:
                tn(e, a);
                break;

              case 3:
                tn(e, c);
            }
            if (n !== r) switch (n) {
              case 0:
                !1 === P(e, i) && (t.none.add(e), Ze(e, i));
                break;

              case 1:
                !1 === P(e, s) && (t.basic.add(e), Ze(e, s));
                break;

              case 2:
                !1 === P(e, a) && (t.optimal.add(e), Ze(e, a));
                break;

              case 3:
                !1 === P(e, c) && (t.complete.add(e), Ze(e, c));
            }
            return on(t, e);
        }
        function an() {
            return cn.apply(this, arguments);
        }
        function cn() {
            return (cn = We(He().mark((function t() {
                var e, n, r, o, i, s, a, c, u = arguments;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (!1 !== (u.length > 0 && void 0 !== u[0] && u[0])) {
                            t.next = 10;
                            break;
                        }
                        if (!an.cache) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return", an.cache);

                      case 4:
                        return t.next = 6, T("filteringModeDetails");

                      case 6:
                        if (!((e = t.sent) instanceof Object)) {
                            t.next = 10;
                            break;
                        }
                        return an.cache = rn(e), t.abrupt("return", an.cache);

                      case 10:
                        return t.next = 12, Promise.all([ _("filteringModeDetails"), te("noFiltering") ]);

                      case 12:
                        if (n = t.sent, r = qe(n, 2), o = r[0], i = r[1], void 0 === o && (o = {
                            basic: [ "all-urls" ]
                        }), o = rn(o), Array.isArray(i)) {
                            i.includes("-*") && o.none.clear(), s = Ge(i);
                            try {
                                for (s.s(); !(a = s.n()).done; ) "-" === (c = a.value).charAt(0) ? o.none.delete(c.slice(1)) : sn(o, c, 0);
                            } catch (t) {
                                s.e(t);
                            } finally {
                                s.f();
                            }
                        }
                        return dn(o), C("filteringModeDetails", nn(o)), an.cache = o, t.abrupt("return", o);

                      case 23:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function un(t) {
            return ln.apply(this, arguments);
        }
        function ln() {
            return (ln = We(He().mark((function t(e) {
                var n;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, dn(e);

                      case 2:
                        S("filteringModeDetails", n = nn(e)), C("filteringModeDetails", n), an.cache = rn(n), 
                        Promise.all([ bn(), wn() ]).then((function(t) {
                            H({
                                defaultFilteringMode: t[0],
                                trustedSites: Array.from(t[1])
                            });
                        }));

                      case 7:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function dn(t) {
            return pn.apply(this, arguments);
        }
        function pn() {
            return (pn = We(He().mark((function t(e) {
                var n, r, o, i, s, a, c, u, l, d, p, h, f, m;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, we();

                      case 2:
                        if (n = t.sent, r = n.get(be + 0), o = new Set(null == r ? void 0 : r.condition.requestDomains), 
                        i = new Set(null == r ? void 0 : r.condition.excludedRequestDomains), void 0 !== r && 0 === o.size ? o.add("all-urls") : i.add("all-urls"), 
                        s = new Set(Ue(e.none)), a = new Set([].concat(Ue(e.basic), Ue(e.optimal), Ue(e.complete))), 
                        c = new Set, u = new Set, s.has("all-urls") ? (c = new Set([ "all-urls" ]), u = a) : (c = s, 
                        u = new Set([ "all-urls" ])), !en(o, c)) {
                            t.next = 15;
                            break;
                        }
                        if (!en(i, u)) {
                            t.next = 15;
                            break;
                        }
                        return t.abrupt("return");

                      case 15:
                        return l = [ be + 0, be + 1 ], n.delete(be + 0), n.delete(be + 1), d = c.delete("all-urls"), 
                        u.delete("all-urls"), p = [], (d || 0 !== c.size || 0 !== u.size) && (h = {
                            id: be + 0,
                            action: {
                                type: "allowAllRequests"
                            },
                            condition: {
                                resourceTypes: [ "main_frame" ]
                            },
                            priority: 100
                        }, 0 !== c.size ? h.condition.requestDomains = Array.from(c) : 0 !== u.size && (h.condition.excludedRequestDomains = Array.from(u)), 
                        p.push(h), n.set(be + 0, h), f = {
                            id: be + 1,
                            action: {
                                type: "allow"
                            },
                            condition: {
                                resourceTypes: [ "script" ]
                            },
                            priority: 100
                        }, h.condition.requestDomains ? f.condition.initiatorDomains = h.condition.requestDomains.slice() : h.condition.excludedRequestDomains && (f.condition.excludedInitiatorDomains = h.condition.excludedRequestDomains.slice()), 
                        p.push(f), n.set(be + 1, f)), m = {
                            removeRuleIds: l
                        }, p.length && (m.addRules = p), t.next = 26, g.updateDynamicRules(m);

                      case 26:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function hn() {
            return fn.apply(this, arguments);
        }
        function fn() {
            return (fn = We(He().mark((function t() {
                var e;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, an();

                      case 2:
                        return e = t.sent, t.abrupt("return", {
                            none: new Set(e.none),
                            basic: new Set(e.basic),
                            optimal: new Set(e.optimal),
                            complete: new Set(e.complete)
                        });

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function mn(t) {
            return gn.apply(this, arguments);
        }
        function gn() {
            return (gn = We(He().mark((function t(e) {
                var n;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, hn();

                      case 2:
                        return n = t.sent, t.abrupt("return", on(n, e));

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function yn(t, e) {
            return vn.apply(this, arguments);
        }
        function vn() {
            return (vn = We(He().mark((function t(e, n) {
                var r, o;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, hn();

                      case 2:
                        return r = t.sent, o = sn(r, e, n), t.next = 6, un(r);

                      case 6:
                        return t.abrupt("return", o);

                      case 7:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function bn() {
            return mn("all-urls");
        }
        function _n(t) {
            return yn("all-urls", t);
        }
        function wn() {
            return Sn.apply(this, arguments);
        }
        function Sn() {
            return (Sn = We(He().mark((function t() {
                var e;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, hn();

                      case 2:
                        return e = t.sent, t.abrupt("return", e.none);

                      case 4:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function xn(t) {
            return kn.apply(this, arguments);
        }
        function kn() {
            return (kn = We(He().mark((function t(e) {
                var n, r, o, i, s, a, c, u, l, d;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, hn();

                      case 2:
                        n = t.sent, r = n.none, o = new Set(e), i = !1, r.has("all-urls") && !1 === o.has("all-urls") && (sn(n, "all-urls", 1), 
                        i = !0), s = Ge(r);
                        try {
                            for (s.s(); !(a = s.n()).done; ) c = a.value, o.has(c) ? o.delete(c) : (r.delete(c), 
                            i = !0);
                        } catch (t) {
                            s.e(t);
                        } finally {
                            s.f();
                        }
                        u = Ge(o), t.prev = 10, u.s();

                      case 12:
                        if ((l = u.n()).done) {
                            t.next = 20;
                            break;
                        }
                        if (d = l.value, 0 === sn(n, d, 0)) {
                            t.next = 17;
                            break;
                        }
                        return t.abrupt("continue", 18);

                      case 17:
                        i = !0;

                      case 18:
                        t.next = 12;
                        break;

                      case 20:
                        t.next = 25;
                        break;

                      case 22:
                        t.prev = 22, t.t0 = t.catch(10), u.e(t.t0);

                      case 25:
                        return t.prev = 25, u.f(), t.finish(25);

                      case 28:
                        if (!1 !== i) {
                            t.next = 30;
                            break;
                        }
                        return t.abrupt("return");

                      case 30:
                        return t.abrupt("return", un(n));

                      case 31:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 10, 22, 25, 28 ] ]);
            })))).apply(this, arguments);
        }
        function En() {
            return Tn.apply(this, arguments);
        }
        function Tn() {
            return (Tn = We(He().mark((function t() {
                var e, n, r, o, i, s, a, c, u, l, d, p, h, f, g;
                return He().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, Promise.all([ m.permissions.getAll(), bn() ]);

                      case 2:
                        if (e = t.sent, n = qe(e, 2), r = n[0], o = n[1], i = new Set(U(r.origins || [])), 
                        s = !1, !(o > 0 && !1 === i.has("all-urls"))) {
                            t.next = 12;
                            break;
                        }
                        return t.next = 11, _n(3);

                      case 11:
                        s = !0;

                      case 12:
                        return t.next = 14, bn();

                      case 14:
                        if (!(t.sent > 1)) {
                            t.next = 17;
                            break;
                        }
                        return t.abrupt("return", !1);

                      case 17:
                        return t.next = 19, hn();

                      case 19:
                        a = t.sent, c = a.optimal, u = a.complete, l = Ge(c), t.prev = 22, l.s();

                      case 24:
                        if ((d = l.n()).done) {
                            t.next = 32;
                            break;
                        }
                        if (p = d.value, !i.has(p)) {
                            t.next = 28;
                            break;
                        }
                        return t.abrupt("continue", 30);

                      case 28:
                        c.delete(p), s = !0;

                      case 30:
                        t.next = 24;
                        break;

                      case 32:
                        t.next = 37;
                        break;

                      case 34:
                        t.prev = 34, t.t0 = t.catch(22), l.e(t.t0);

                      case 37:
                        return t.prev = 37, l.f(), t.finish(37);

                      case 40:
                        h = Ge(u), t.prev = 41, h.s();

                      case 43:
                        if ((f = h.n()).done) {
                            t.next = 51;
                            break;
                        }
                        if (g = f.value, !i.has(g)) {
                            t.next = 47;
                            break;
                        }
                        return t.abrupt("continue", 49);

                      case 47:
                        u.delete(g), s = !0;

                      case 49:
                        t.next = 43;
                        break;

                      case 51:
                        t.next = 56;
                        break;

                      case 53:
                        t.prev = 53, t.t1 = t.catch(41), h.e(t.t1);

                      case 56:
                        return t.prev = 56, h.f(), t.finish(56);

                      case 59:
                        return t.next = 61, un(a);

                      case 61:
                        return t.abrupt("return", s);

                      case 62:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 22, 34, 37, 40 ], [ 41, 53, 56, 59 ] ]);
            })))).apply(this, arguments);
        }
        const In = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function Cn(t) {
            return t && t.Math == Math ? t : void 0;
        }
        const Rn = "object" == typeof globalThis && Cn(globalThis) || "object" == typeof window && Cn(window) || "object" == typeof self && Cn(self) || "object" == typeof n.g && Cn(n.g) || function() {
            return this;
        }() || {};
        function On() {
            return Rn;
        }
        function Ln(t, e, n) {
            const r = n || Rn, o = r.__SENTRY__ = r.__SENTRY__ || {};
            return o[t] || (o[t] = e());
        }
        const An = [ "debug", "info", "warn", "error", "log", "assert", "trace" ], Mn = {};
        function Nn(t) {
            if (!("console" in Rn)) return t();
            const e = Rn.console, n = {}, r = Object.keys(Mn);
            r.forEach((t => {
                const r = Mn[t];
                n[t] = e[t], e[t] = r;
            }));
            try {
                return t();
            } finally {
                r.forEach((t => {
                    e[t] = n[t];
                }));
            }
        }
        const Dn = function() {
            let t = !1;
            const e = {
                enable: () => {
                    t = !0;
                },
                disable: () => {
                    t = !1;
                },
                isEnabled: () => t
            };
            return In ? An.forEach((n => {
                e[n] = (...e) => {
                    t && Nn((() => {
                        Rn.console[n](`Sentry Logger [${n}]:`, ...e);
                    }));
                };
            })) : An.forEach((t => {
                e[t] = () => {};
            })), e;
        }(), Pn = Object.prototype.toString;
        function jn(t) {
            switch (Pn.call(t)) {
              case "[object Error]":
              case "[object Exception]":
              case "[object DOMException]":
                return !0;

              default:
                return Vn(t, Error);
            }
        }
        function Fn(t, e) {
            return Pn.call(t) === `[object ${e}]`;
        }
        function $n(t) {
            return Fn(t, "ErrorEvent");
        }
        function Bn(t) {
            return Fn(t, "DOMError");
        }
        function Un(t) {
            return Fn(t, "String");
        }
        function Hn(t) {
            return "object" == typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t;
        }
        function qn(t) {
            return null === t || Hn(t) || "object" != typeof t && "function" != typeof t;
        }
        function zn(t) {
            return Fn(t, "Object");
        }
        function Wn(t) {
            return "undefined" != typeof Event && Vn(t, Event);
        }
        function Gn(t) {
            return Boolean(t && t.then && "function" == typeof t.then);
        }
        function Yn(t) {
            return "number" == typeof t && t != t;
        }
        function Vn(t, e) {
            try {
                return t instanceof e;
            } catch (t) {
                return !1;
            }
        }
        function Jn(t) {
            return !("object" != typeof t || null === t || !t.__isVue && !t._isVue);
        }
        const Kn = On();
        function Qn(t, e = {}) {
            if (!t) return "<unknown>";
            try {
                let n = t;
                const r = 5, o = [];
                let i = 0, s = 0;
                const a = " > ", c = a.length;
                let u;
                const l = Array.isArray(e) ? e : e.keyAttrs, d = !Array.isArray(e) && e.maxStringLength || 80;
                for (;n && i++ < r && (u = Zn(n, l), !("html" === u || i > 1 && s + o.length * c + u.length >= d)); ) o.push(u), 
                s += u.length, n = n.parentNode;
                return o.reverse().join(a);
            } catch (t) {
                return "<unknown>";
            }
        }
        function Zn(t, e) {
            const n = t, r = [];
            let o, i, s, a, c;
            if (!n || !n.tagName) return "";
            if (Kn.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent) return n.dataset.sentryComponent;
            r.push(n.tagName.toLowerCase());
            const u = e && e.length ? e.filter((t => n.getAttribute(t))).map((t => [ t, n.getAttribute(t) ])) : null;
            if (u && u.length) u.forEach((t => {
                r.push(`[${t[0]}="${t[1]}"]`);
            })); else if (n.id && r.push(`#${n.id}`), o = n.className, o && Un(o)) for (i = o.split(/\s+/), 
            c = 0; c < i.length; c++) r.push(`.${i[c]}`);
            const l = [ "aria-label", "type", "name", "title", "alt" ];
            for (c = 0; c < l.length; c++) s = l[c], a = n.getAttribute(s), a && r.push(`[${s}="${a}"]`);
            return r.join("");
        }
        function tr() {
            try {
                return Kn.document.location.href;
            } catch (t) {
                return "";
            }
        }
        function er(t) {
            return Kn.document && Kn.document.querySelector ? Kn.document.querySelector(t) : null;
        }
        function nr(t) {
            if (!Kn.HTMLElement) return null;
            let e = t;
            for (let t = 0; t < 5; t++) {
                if (!e) return null;
                if (e instanceof HTMLElement && e.dataset.sentryComponent) return e.dataset.sentryComponent;
                e = e.parentNode;
            }
            return null;
        }
        function rr(t, e = 0) {
            return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0, e)}...`;
        }
        function or(t, e) {
            let n = t;
            const r = n.length;
            if (r <= 150) return n;
            e > r && (e = r);
            let o = Math.max(e - 60, 0);
            o < 5 && (o = 0);
            let i = Math.min(o + 140, r);
            return i > r - 5 && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), 
            o > 0 && (n = `'{snip} ${n}`), i < r && (n += " {snip}"), n;
        }
        function ir(t, e) {
            if (!Array.isArray(t)) return "";
            const n = [];
            for (let e = 0; e < t.length; e++) {
                const r = t[e];
                try {
                    Jn(r) ? n.push("[VueViewModel]") : n.push(String(r));
                } catch (t) {
                    n.push("[value cannot be serialized]");
                }
            }
            return n.join(e);
        }
        function ar(t, e = [], n = !1) {
            return e.some((e => function(t, e, n = !1) {
                return !!Un(t) && (Fn(e, "RegExp") ? e.test(t) : !!Un(e) && (n ? t === e : t.includes(e)));
            }(t, e, n)));
        }
        function cr(t, e, n) {
            if (!(e in t)) return;
            const r = t[e], o = n(r);
            "function" == typeof o && lr(o, r), t[e] = o;
        }
        function ur(t, e, n) {
            try {
                Object.defineProperty(t, e, {
                    value: n,
                    writable: !0,
                    configurable: !0
                });
            } catch (n) {
                In && Dn.log(`Failed to add non-enumerable property "${e}" to object`, t);
            }
        }
        function lr(t, e) {
            try {
                const n = e.prototype || {};
                t.prototype = e.prototype = n, ur(t, "__sentry_original__", e);
            } catch (t) {}
        }
        function dr(t) {
            return t.__sentry_original__;
        }
        function pr(t) {
            if (jn(t)) return {
                message: t.message,
                name: t.name,
                stack: t.stack,
                ...fr(t)
            };
            if (Wn(t)) {
                const e = {
                    type: t.type,
                    target: hr(t.target),
                    currentTarget: hr(t.currentTarget),
                    ...fr(t)
                };
                return "undefined" != typeof CustomEvent && Vn(t, CustomEvent) && (e.detail = t.detail), 
                e;
            }
            return t;
        }
        function hr(t) {
            try {
                return "undefined" != typeof Element && Vn(t, Element) ? Qn(t) : Object.prototype.toString.call(t);
            } catch (t) {
                return "<unknown>";
            }
        }
        function fr(t) {
            if ("object" == typeof t && null !== t) {
                const e = {};
                for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
            }
            return {};
        }
        function mr(t) {
            return gr(t, new Map);
        }
        function gr(t, e) {
            if (function(t) {
                if (!zn(t)) return !1;
                try {
                    const e = Object.getPrototypeOf(t).constructor.name;
                    return !e || "Object" === e;
                } catch (t) {
                    return !0;
                }
            }(t)) {
                const n = e.get(t);
                if (void 0 !== n) return n;
                const r = {};
                e.set(t, r);
                for (const n of Object.keys(t)) void 0 !== t[n] && (r[n] = gr(t[n], e));
                return r;
            }
            if (Array.isArray(t)) {
                const n = e.get(t);
                if (void 0 !== n) return n;
                const r = [];
                return e.set(t, r), t.forEach((t => {
                    r.push(gr(t, e));
                })), r;
            }
            return t;
        }
        function yr() {
            const t = Rn, e = t.crypto || t.msCrypto;
            let n = () => 16 * Math.random();
            try {
                if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                e && e.getRandomValues && (n = () => {
                    const t = new Uint8Array(1);
                    return e.getRandomValues(t), t[0];
                });
            } catch (t) {}
            return ([ 1e7 ] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t => (t ^ (15 & n()) >> t / 4).toString(16)));
        }
        function vr(t) {
            return t.exception && t.exception.values ? t.exception.values[0] : void 0;
        }
        function br(t) {
            const {message: e, event_id: n} = t;
            if (e) return e;
            const r = vr(t);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
        }
        function _r(t, e, n) {
            const r = t.exception = t.exception || {}, o = r.values = r.values || [], i = o[0] = o[0] || {};
            i.value || (i.value = e || ""), i.type || (i.type = n || "Error");
        }
        function wr(t, e) {
            const n = vr(t);
            if (!n) return;
            const r = n.mechanism;
            if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...e
            }, e && "data" in e) {
                const t = {
                    ...r && r.data,
                    ...e.data
                };
                n.mechanism.data = t;
            }
        }
        function Sr(t) {
            if (t && t.__sentry_captured__) return !0;
            try {
                ur(t, "__sentry_captured__", !0);
            } catch (t) {}
            return !1;
        }
        function xr(t) {
            return Array.isArray(t) ? t : [ t ];
        }
        const kr = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        var Er;
        function Tr(t) {
            return new Cr((e => {
                e(t);
            }));
        }
        function Ir(t) {
            return new Cr(((e, n) => {
                n(t);
            }));
        }
        !function(t) {
            t[t.PENDING = 0] = "PENDING", t[t.RESOLVED = 1] = "RESOLVED", t[t.REJECTED = 2] = "REJECTED";
        }(Er || (Er = {}));
        class Cr {
            constructor(t) {
                Cr.prototype.__init.call(this), Cr.prototype.__init2.call(this), Cr.prototype.__init3.call(this), 
                Cr.prototype.__init4.call(this), this._state = Er.PENDING, this._handlers = [];
                try {
                    t(this._resolve, this._reject);
                } catch (t) {
                    this._reject(t);
                }
            }
            then(t, e) {
                return new Cr(((n, r) => {
                    this._handlers.push([ !1, e => {
                        if (t) try {
                            n(t(e));
                        } catch (t) {
                            r(t);
                        } else n(e);
                    }, t => {
                        if (e) try {
                            n(e(t));
                        } catch (t) {
                            r(t);
                        } else r(t);
                    } ]), this._executeHandlers();
                }));
            }
            catch(t) {
                return this.then((t => t), t);
            }
            finally(t) {
                return new Cr(((e, n) => {
                    let r, o;
                    return this.then((e => {
                        o = !1, r = e, t && t();
                    }), (e => {
                        o = !0, r = e, t && t();
                    })).then((() => {
                        o ? n(r) : e(r);
                    }));
                }));
            }
            __init() {
                this._resolve = t => {
                    this._setResult(Er.RESOLVED, t);
                };
            }
            __init2() {
                this._reject = t => {
                    this._setResult(Er.REJECTED, t);
                };
            }
            __init3() {
                this._setResult = (t, e) => {
                    this._state === Er.PENDING && (Gn(e) ? e.then(this._resolve, this._reject) : (this._state = t, 
                    this._value = e, this._executeHandlers()));
                };
            }
            __init4() {
                this._executeHandlers = () => {
                    if (this._state === Er.PENDING) return;
                    const t = this._handlers.slice();
                    this._handlers = [], t.forEach((t => {
                        t[0] || (this._state === Er.RESOLVED && t[1](this._value), this._state === Er.REJECTED && t[2](this._value), 
                        t[0] = !0);
                    }));
                };
            }
        }
        function Rr() {
            return Ln("globalEventProcessors", (() => []));
        }
        function Or(t) {
            Rr().push(t);
        }
        function Lr(t, e, n, r = 0) {
            return new Cr(((o, i) => {
                const s = t[r];
                if (null === e || "function" != typeof s) o(e); else {
                    const a = s({
                        ...e
                    }, n);
                    kr && s.id && null === a && Dn.log(`Event processor "${s.id}" dropped event`), Gn(a) ? a.then((e => Lr(t, e, n, r + 1).then(o))).then(null, i) : Lr(t, a, n, r + 1).then(o).then(null, i);
                }
            }));
        }
        const Ar = "production";
        function Nr() {
            return Date.now() / 1e3;
        }
        const Dr = function() {
            const {performance: t} = Rn;
            if (!t || !t.now) return Nr;
            const e = Date.now() - t.now(), n = null == t.timeOrigin ? e : t.timeOrigin;
            return () => (n + t.now()) / 1e3;
        }();
        let Pr;
        const jr = (() => {
            const {performance: t} = Rn;
            if (!t || !t.now) return void (Pr = "none");
            const e = 36e5, n = t.now(), r = Date.now(), o = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e, i = o < e, s = t.timing && t.timing.navigationStart, a = "number" == typeof s ? Math.abs(s + n - r) : e;
            return i || a < e ? o <= a ? (Pr = "timeOrigin", t.timeOrigin) : (Pr = "navigationStart", 
            s) : (Pr = "dateNow", r);
        })();
        function Fr(t) {
            const e = Dr(), n = {
                sid: yr(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => function(t) {
                    return mr({
                        sid: `${t.sid}`,
                        init: t.init,
                        started: new Date(1e3 * t.started).toISOString(),
                        timestamp: new Date(1e3 * t.timestamp).toISOString(),
                        status: t.status,
                        errors: t.errors,
                        did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                        duration: t.duration,
                        abnormal_mechanism: t.abnormal_mechanism,
                        attrs: {
                            release: t.release,
                            environment: t.environment,
                            ip_address: t.ipAddress,
                            user_agent: t.userAgent
                        }
                    });
                }(n)
            };
            return t && $r(n, t), n;
        }
        function $r(t, e = {}) {
            if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), 
            t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Dr(), 
            e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), 
            e.sid && (t.sid = 32 === e.sid.length ? e.sid : yr()), void 0 !== e.init && (t.init = e.init), 
            !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), 
            t.ignoreDuration) t.duration = void 0; else if ("number" == typeof e.duration) t.duration = e.duration; else {
                const e = t.timestamp - t.started;
                t.duration = e >= 0 ? e : 0;
            }
            e.release && (t.release = e.release), e.environment && (t.environment = e.environment), 
            !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), 
            "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status);
        }
        function Br(t, e) {
            let n = {};
            e ? n = {
                status: e
            } : "ok" === t.status && (n = {
                status: "exited"
            }), $r(t, n);
        }
        function Ur(t) {
            return t.transaction;
        }
        const Hr = "baggage", qr = "sentry-", zr = /^sentry-/;
        function Gr(t) {
            if (!Un(t) && !Array.isArray(t)) return;
            let e = {};
            if (Array.isArray(t)) e = t.reduce(((t, e) => {
                const n = Vr(e);
                for (const e of Object.keys(n)) t[e] = n[e];
                return t;
            }), {}); else {
                if (!t) return;
                e = Vr(t);
            }
            const n = Object.entries(e).reduce(((t, [e, n]) => (e.match(zr) && (t[e.slice(qr.length)] = n), 
            t)), {});
            return Object.keys(n).length > 0 ? n : void 0;
        }
        function Yr(t) {
            if (t) return function(t) {
                if (0 !== Object.keys(t).length) return Object.entries(t).reduce(((t, [e, n], r) => {
                    const o = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`, i = 0 === r ? o : `${t},${o}`;
                    return i.length > 8192 ? (In && Dn.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), 
                    t) : i;
                }), "");
            }(Object.entries(t).reduce(((t, [e, n]) => (n && (t[`${qr}${e}`] = n), t)), {}));
        }
        function Vr(t) {
            return t.split(",").map((t => t.split("=").map((t => decodeURIComponent(t.trim()))))).reduce(((t, [e, n]) => (t[e] = n, 
            t)), {});
        }
        const Jr = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
        function Kr(t) {
            if (!t) return;
            const e = t.match(Jr);
            if (!e) return;
            let n;
            return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
                traceId: e[1],
                parentSampled: n,
                parentSpanId: e[2]
            };
        }
        function Xr(t, e) {
            const n = Kr(t), r = Gr(e), {traceId: o, parentSpanId: i, parentSampled: s} = n || {};
            return n ? {
                traceId: o || yr(),
                parentSpanId: i || yr().substring(16),
                spanId: yr().substring(16),
                sampled: s,
                dsc: r || {}
            } : {
                traceId: o || yr(),
                spanId: yr().substring(16)
            };
        }
        function Qr(t = yr(), e = yr().substring(16), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`;
        }
        function to(t) {
            const {spanId: e, traceId: n} = t.spanContext(), {data: r, op: o, parent_span_id: i, status: s, tags: a, origin: c} = oo(t);
            return mr({
                data: r,
                op: o,
                parent_span_id: i,
                span_id: e,
                status: s,
                tags: a,
                trace_id: n,
                origin: c
            });
        }
        function eo(t) {
            const {traceId: e, spanId: n} = t.spanContext();
            return Qr(e, n, io(t));
        }
        function no(t) {
            return "number" == typeof t ? ro(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? ro(t.getTime()) : Dr();
        }
        function ro(t) {
            return t > 9999999999 ? t / 1e3 : t;
        }
        function oo(t) {
            return function(t) {
                return "function" == typeof t.getSpanJSON;
            }(t) ? t.getSpanJSON() : "function" == typeof t.toJSON ? t.toJSON() : {};
        }
        function io(t) {
            const {traceFlags: e} = t.spanContext();
            return Boolean(1 & e);
        }
        function so(t, e, n) {
            const r = e.getOptions(), {publicKey: o} = e.getDsn() || {}, {segment: i} = n && n.getUser() || {}, s = mr({
                environment: r.environment || Ar,
                release: r.release,
                user_segment: i,
                public_key: o,
                trace_id: t
            });
            return e.emit && e.emit("createDsc", s), s;
        }
        function ao(t) {
            const e = ii();
            if (!e) return {};
            const n = so(oo(t).trace_id || "", e, ai()), r = Ur(t);
            if (!r) return n;
            const o = r && r._frozenDynamicSamplingContext;
            if (o) return o;
            const {sampleRate: i, source: s} = r.metadata;
            null != i && (n.sample_rate = `${i}`);
            const a = oo(r);
            return s && "url" !== s && (n.transaction = a.description), n.sampled = String(io(r)), 
            e.emit && e.emit("createDsc", n), n;
        }
        function co(t, e) {
            const {fingerprint: n, span: r, breadcrumbs: o, sdkProcessingMetadata: i} = e;
            !function(t, e) {
                const {extra: n, tags: r, user: o, contexts: i, level: s, transactionName: a} = e, c = mr(n);
                c && Object.keys(c).length && (t.extra = {
                    ...c,
                    ...t.extra
                });
                const u = mr(r);
                u && Object.keys(u).length && (t.tags = {
                    ...u,
                    ...t.tags
                });
                const l = mr(o);
                l && Object.keys(l).length && (t.user = {
                    ...l,
                    ...t.user
                });
                const d = mr(i);
                d && Object.keys(d).length && (t.contexts = {
                    ...d,
                    ...t.contexts
                }), s && (t.level = s), a && (t.transaction = a);
            }(t, e), r && function(t, e) {
                t.contexts = {
                    trace: to(e),
                    ...t.contexts
                };
                const n = Ur(e);
                if (n) {
                    t.sdkProcessingMetadata = {
                        dynamicSamplingContext: ao(e),
                        ...t.sdkProcessingMetadata
                    };
                    const r = oo(n).description;
                    r && (t.tags = {
                        transaction: r,
                        ...t.tags
                    });
                }
            }(t, r), function(t, e) {
                t.fingerprint = t.fingerprint ? xr(t.fingerprint) : [], e && (t.fingerprint = t.fingerprint.concat(e)), 
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
            }(t, n), function(t, e) {
                const n = [ ...t.breadcrumbs || [], ...e ];
                t.breadcrumbs = n.length ? n : void 0;
            }(t, o), function(t, e) {
                t.sdkProcessingMetadata = {
                    ...t.sdkProcessingMetadata,
                    ...e
                };
            }(t, i);
        }
        function uo(t, e) {
            const {extra: n, tags: r, user: o, contexts: i, level: s, sdkProcessingMetadata: a, breadcrumbs: c, fingerprint: u, eventProcessors: l, attachments: d, propagationContext: p, transactionName: h, span: f} = e;
            lo(t, "extra", n), lo(t, "tags", r), lo(t, "user", o), lo(t, "contexts", i), lo(t, "sdkProcessingMetadata", a), 
            s && (t.level = s), h && (t.transactionName = h), f && (t.span = f), c.length && (t.breadcrumbs = [ ...t.breadcrumbs, ...c ]), 
            u.length && (t.fingerprint = [ ...t.fingerprint, ...u ]), l.length && (t.eventProcessors = [ ...t.eventProcessors, ...l ]), 
            d.length && (t.attachments = [ ...t.attachments, ...d ]), t.propagationContext = {
                ...t.propagationContext,
                ...p
            };
        }
        function lo(t, e, n) {
            if (n && Object.keys(n).length) {
                t[e] = {
                    ...t[e]
                };
                for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[e][r] = n[r]);
            }
        }
        let po;
        class ho {
            constructor() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], 
                this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, 
                this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = fo();
            }
            static clone(t) {
                return t ? t.clone() : new ho;
            }
            clone() {
                const t = new ho;
                return t._breadcrumbs = [ ...this._breadcrumbs ], t._tags = {
                    ...this._tags
                }, t._extra = {
                    ...this._extra
                }, t._contexts = {
                    ...this._contexts
                }, t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, 
                t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, 
                t._eventProcessors = [ ...this._eventProcessors ], t._requestSession = this._requestSession, 
                t._attachments = [ ...this._attachments ], t._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata
                }, t._propagationContext = {
                    ...this._propagationContext
                }, t._client = this._client, t;
            }
            setClient(t) {
                this._client = t;
            }
            getClient() {
                return this._client;
            }
            addScopeListener(t) {
                this._scopeListeners.push(t);
            }
            addEventProcessor(t) {
                return this._eventProcessors.push(t), this;
            }
            setUser(t) {
                return this._user = t || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    segment: void 0,
                    username: void 0
                }, this._session && $r(this._session, {
                    user: t
                }), this._notifyScopeListeners(), this;
            }
            getUser() {
                return this._user;
            }
            getRequestSession() {
                return this._requestSession;
            }
            setRequestSession(t) {
                return this._requestSession = t, this;
            }
            setTags(t) {
                return this._tags = {
                    ...this._tags,
                    ...t
                }, this._notifyScopeListeners(), this;
            }
            setTag(t, e) {
                return this._tags = {
                    ...this._tags,
                    [t]: e
                }, this._notifyScopeListeners(), this;
            }
            setExtras(t) {
                return this._extra = {
                    ...this._extra,
                    ...t
                }, this._notifyScopeListeners(), this;
            }
            setExtra(t, e) {
                return this._extra = {
                    ...this._extra,
                    [t]: e
                }, this._notifyScopeListeners(), this;
            }
            setFingerprint(t) {
                return this._fingerprint = t, this._notifyScopeListeners(), this;
            }
            setLevel(t) {
                return this._level = t, this._notifyScopeListeners(), this;
            }
            setTransactionName(t) {
                return this._transactionName = t, this._notifyScopeListeners(), this;
            }
            setContext(t, e) {
                return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), 
                this;
            }
            setSpan(t) {
                return this._span = t, this._notifyScopeListeners(), this;
            }
            getSpan() {
                return this._span;
            }
            getTransaction() {
                const t = this._span;
                return t && t.transaction;
            }
            setSession(t) {
                return t ? this._session = t : delete this._session, this._notifyScopeListeners(), 
                this;
            }
            getSession() {
                return this._session;
            }
            update(t) {
                if (!t) return this;
                const e = "function" == typeof t ? t(this) : t;
                if (e instanceof ho) {
                    const t = e.getScopeData();
                    this._tags = {
                        ...this._tags,
                        ...t.tags
                    }, this._extra = {
                        ...this._extra,
                        ...t.extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...t.contexts
                    }, t.user && Object.keys(t.user).length && (this._user = t.user), t.level && (this._level = t.level), 
                    t.fingerprint.length && (this._fingerprint = t.fingerprint), e.getRequestSession() && (this._requestSession = e.getRequestSession()), 
                    t.propagationContext && (this._propagationContext = t.propagationContext);
                } else if (zn(e)) {
                    const e = t;
                    this._tags = {
                        ...this._tags,
                        ...e.tags
                    }, this._extra = {
                        ...this._extra,
                        ...e.extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...e.contexts
                    }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), 
                    e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext);
                }
                return this;
            }
            clear() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, 
                this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, 
                this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), 
                this._attachments = [], this._propagationContext = fo(), this;
            }
            addBreadcrumb(t, e) {
                const n = "number" == typeof e ? e : 100;
                if (n <= 0) return this;
                const r = {
                    timestamp: Nr(),
                    ...t
                }, o = this._breadcrumbs;
                return o.push(r), this._breadcrumbs = o.length > n ? o.slice(-n) : o, this._notifyScopeListeners(), 
                this;
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1];
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this;
            }
            addAttachment(t) {
                return this._attachments.push(t), this;
            }
            getAttachments() {
                return this.getScopeData().attachments;
            }
            clearAttachments() {
                return this._attachments = [], this;
            }
            getScopeData() {
                const {_breadcrumbs: t, _attachments: e, _contexts: n, _tags: r, _extra: o, _user: i, _level: s, _fingerprint: a, _eventProcessors: c, _propagationContext: u, _sdkProcessingMetadata: l, _transactionName: d, _span: p} = this;
                return {
                    breadcrumbs: t,
                    attachments: e,
                    contexts: n,
                    tags: r,
                    extra: o,
                    user: i,
                    level: s,
                    fingerprint: a || [],
                    eventProcessors: c,
                    propagationContext: u,
                    sdkProcessingMetadata: l,
                    transactionName: d,
                    span: p
                };
            }
            applyToEvent(t, e = {}, n = []) {
                return co(t, this.getScopeData()), Lr([ ...n, ...Rr(), ...this._eventProcessors ], t, e);
            }
            setSDKProcessingMetadata(t) {
                return this._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata,
                    ...t
                }, this;
            }
            setPropagationContext(t) {
                return this._propagationContext = t, this;
            }
            getPropagationContext() {
                return this._propagationContext;
            }
            captureException(t, e) {
                const n = e && e.event_id ? e.event_id : yr();
                if (!this._client) return Dn.warn("No client configured on scope - will not capture exception!"), 
                n;
                const r = new Error("Sentry syntheticException");
                return this._client.captureException(t, {
                    originalException: t,
                    syntheticException: r,
                    ...e,
                    event_id: n
                }, this), n;
            }
            captureMessage(t, e, n) {
                const r = n && n.event_id ? n.event_id : yr();
                if (!this._client) return Dn.warn("No client configured on scope - will not capture message!"), 
                r;
                const o = new Error(t);
                return this._client.captureMessage(t, e, {
                    originalException: t,
                    syntheticException: o,
                    ...n,
                    event_id: r
                }, this), r;
            }
            captureEvent(t, e) {
                const n = e && e.event_id ? e.event_id : yr();
                return this._client ? (this._client.captureEvent(t, {
                    ...e,
                    event_id: n
                }, this), n) : (Dn.warn("No client configured on scope - will not capture event!"), 
                n);
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t => {
                    t(this);
                })), this._notifyingListeners = !1);
            }
        }
        function fo() {
            return {
                traceId: yr(),
                spanId: yr().substring(16)
            };
        }
        const mo = "7.120.3", go = parseFloat(mo), yo = 100;
        class vo {
            constructor(t, e, n, r = go) {
                let o, i;
                this._version = r, e ? o = e : (o = new ho, o.setClient(t)), n ? i = n : (i = new ho, 
                i.setClient(t)), this._stack = [ {
                    scope: o
                } ], t && this.bindClient(t), this._isolationScope = i;
            }
            isOlderThan(t) {
                return this._version < t;
            }
            bindClient(t) {
                const e = this.getStackTop();
                e.client = t, e.scope.setClient(t), t && t.setupIntegrations && t.setupIntegrations();
            }
            pushScope() {
                const t = this.getScope().clone();
                return this.getStack().push({
                    client: this.getClient(),
                    scope: t
                }), t;
            }
            popScope() {
                return !(this.getStack().length <= 1 || !this.getStack().pop());
            }
            withScope(t) {
                const e = this.pushScope();
                let n;
                try {
                    n = t(e);
                } catch (t) {
                    throw this.popScope(), t;
                }
                return Gn(n) ? n.then((t => (this.popScope(), t)), (t => {
                    throw this.popScope(), t;
                })) : (this.popScope(), n);
            }
            getClient() {
                return this.getStackTop().client;
            }
            getScope() {
                return this.getStackTop().scope;
            }
            getIsolationScope() {
                return this._isolationScope;
            }
            getStack() {
                return this._stack;
            }
            getStackTop() {
                return this._stack[this._stack.length - 1];
            }
            captureException(t, e) {
                const n = this._lastEventId = e && e.event_id ? e.event_id : yr(), r = new Error("Sentry syntheticException");
                return this.getScope().captureException(t, {
                    originalException: t,
                    syntheticException: r,
                    ...e,
                    event_id: n
                }), n;
            }
            captureMessage(t, e, n) {
                const r = this._lastEventId = n && n.event_id ? n.event_id : yr(), o = new Error(t);
                return this.getScope().captureMessage(t, e, {
                    originalException: t,
                    syntheticException: o,
                    ...n,
                    event_id: r
                }), r;
            }
            captureEvent(t, e) {
                const n = e && e.event_id ? e.event_id : yr();
                return t.type || (this._lastEventId = n), this.getScope().captureEvent(t, {
                    ...e,
                    event_id: n
                }), n;
            }
            lastEventId() {
                return this._lastEventId;
            }
            addBreadcrumb(t, e) {
                const {scope: n, client: r} = this.getStackTop();
                if (!r) return;
                const {beforeBreadcrumb: o = null, maxBreadcrumbs: i = yo} = r.getOptions && r.getOptions() || {};
                if (i <= 0) return;
                const s = {
                    timestamp: Nr(),
                    ...t
                }, a = o ? Nn((() => o(s, e))) : s;
                null !== a && (r.emit && r.emit("beforeAddBreadcrumb", a, e), n.addBreadcrumb(a, i));
            }
            setUser(t) {
                this.getScope().setUser(t), this.getIsolationScope().setUser(t);
            }
            setTags(t) {
                this.getScope().setTags(t), this.getIsolationScope().setTags(t);
            }
            setExtras(t) {
                this.getScope().setExtras(t), this.getIsolationScope().setExtras(t);
            }
            setTag(t, e) {
                this.getScope().setTag(t, e), this.getIsolationScope().setTag(t, e);
            }
            setExtra(t, e) {
                this.getScope().setExtra(t, e), this.getIsolationScope().setExtra(t, e);
            }
            setContext(t, e) {
                this.getScope().setContext(t, e), this.getIsolationScope().setContext(t, e);
            }
            configureScope(t) {
                const {scope: e, client: n} = this.getStackTop();
                n && t(e);
            }
            run(t) {
                const e = _o(this);
                try {
                    t(this);
                } finally {
                    _o(e);
                }
            }
            getIntegration(t) {
                const e = this.getClient();
                if (!e) return null;
                try {
                    return e.getIntegration(t);
                } catch (e) {
                    return kr && Dn.warn(`Cannot retrieve integration ${t.id} from the current Hub`), 
                    null;
                }
            }
            startTransaction(t, e) {
                const n = this._callExtensionMethod("startTransaction", t, e);
                return kr && !n && (this.getClient() ? Dn.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : Dn.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), 
                n;
            }
            traceHeaders() {
                return this._callExtensionMethod("traceHeaders");
            }
            captureSession(t = !1) {
                if (t) return this.endSession();
                this._sendSessionUpdate();
            }
            endSession() {
                const t = this.getStackTop().scope, e = t.getSession();
                e && Br(e), this._sendSessionUpdate(), t.setSession();
            }
            startSession(t) {
                const {scope: e, client: n} = this.getStackTop(), {release: r, environment: o = Ar} = n && n.getOptions() || {}, {userAgent: i} = Rn.navigator || {}, s = Fr({
                    release: r,
                    environment: o,
                    user: e.getUser(),
                    ...i && {
                        userAgent: i
                    },
                    ...t
                }), a = e.getSession && e.getSession();
                return a && "ok" === a.status && $r(a, {
                    status: "exited"
                }), this.endSession(), e.setSession(s), s;
            }
            shouldSendDefaultPii() {
                const t = this.getClient(), e = t && t.getOptions();
                return Boolean(e && e.sendDefaultPii);
            }
            _sendSessionUpdate() {
                const {scope: t, client: e} = this.getStackTop(), n = t.getSession();
                n && e && e.captureSession && e.captureSession(n);
            }
            _callExtensionMethod(t, ...e) {
                const n = bo().__SENTRY__;
                if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
                kr && Dn.warn(`Extension method ${t} couldn't be found, doing nothing.`);
            }
        }
        function bo() {
            return Rn.__SENTRY__ = Rn.__SENTRY__ || {
                extensions: {},
                hub: void 0
            }, Rn;
        }
        function _o(t) {
            const e = bo(), n = To(e);
            return Io(e, t), n;
        }
        function wo() {
            const t = bo();
            if (t.__SENTRY__ && t.__SENTRY__.acs) {
                const e = t.__SENTRY__.acs.getCurrentHub();
                if (e) return e;
            }
            return function(t = bo()) {
                return function(t) {
                    return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
                }(t) && !To(t).isOlderThan(go) || Io(t, new vo), To(t);
            }(t);
        }
        function So() {
            return wo().getIsolationScope();
        }
        function ko(t, e = {}) {
            const n = bo();
            return n.__SENTRY__ && n.__SENTRY__.acs ? n.__SENTRY__.acs.runWithAsyncContext(t, e) : t();
        }
        function To(t) {
            return Ln("hub", (() => new vo), t);
        }
        function Io(t, e) {
            return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0);
        }
        const Ro = /\(error: (.*)\)/, Oo = /captureMessage|captureException/;
        function Lo(...t) {
            const e = t.sort(((t, e) => t[0] - e[0])).map((t => t[1]));
            return (t, n = 0) => {
                const r = [], o = t.split("\n");
                for (let t = n; t < o.length; t++) {
                    const n = o[t];
                    if (n.length > 1024) continue;
                    const i = Ro.test(n) ? n.replace(Ro, "$1") : n;
                    if (!i.match(/\S*Error: /)) {
                        for (const t of e) {
                            const e = t(i);
                            if (e) {
                                r.push(e);
                                break;
                            }
                        }
                        if (r.length >= 50) break;
                    }
                }
                return function(t) {
                    if (!t.length) return [];
                    const e = Array.from(t);
                    return /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(), e.reverse(), 
                    Oo.test(e[e.length - 1].function || "") && (e.pop(), Oo.test(e[e.length - 1].function || "") && e.pop()), 
                    e.slice(0, 50).map((t => ({
                        ...t,
                        filename: t.filename || e[e.length - 1].filename,
                        function: t.function || "?"
                    })));
                }(r);
            };
        }
        const Ao = "<anonymous>";
        function Mo(t) {
            try {
                return t && "function" == typeof t && t.name || Ao;
            } catch (t) {
                return Ao;
            }
        }
        function No(t, e = 100, n = 1 / 0) {
            try {
                return Po("", t, e, n);
            } catch (t) {
                return {
                    ERROR: `**non-serializable** (${t})`
                };
            }
        }
        function Do(t, e = 3, n = 102400) {
            const r = No(t, e);
            return o = r, function(t) {
                return ~-encodeURI(t).split(/%..|./).length;
            }(JSON.stringify(o)) > n ? Do(t, e - 1, n) : r;
            var o;
        }
        function Po(t, e, r = 1 / 0, o = 1 / 0, i = function() {
            const t = "function" == typeof WeakSet, e = t ? new WeakSet : [];
            return [ function(n) {
                if (t) return !!e.has(n) || (e.add(n), !1);
                for (let t = 0; t < e.length; t++) if (e[t] === n) return !0;
                return e.push(n), !1;
            }, function(n) {
                if (t) e.delete(n); else for (let t = 0; t < e.length; t++) if (e[t] === n) {
                    e.splice(t, 1);
                    break;
                }
            } ];
        }()) {
            const [s, a] = i;
            if (null == e || [ "number", "boolean", "string" ].includes(typeof e) && !Yn(e)) return e;
            const c = function(t, e) {
                try {
                    if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
                    if ("domainEmitter" === t) return "[DomainEmitter]";
                    if (void 0 !== n.g && e === n.g) return "[Global]";
                    if ("undefined" != typeof window && e === window) return "[Window]";
                    if ("undefined" != typeof document && e === document) return "[Document]";
                    if (Jn(e)) return "[VueViewModel]";
                    if (zn(r = e) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r) return "[SyntheticEvent]";
                    if ("number" == typeof e && e != e) return "[NaN]";
                    if ("function" == typeof e) return `[Function: ${Mo(e)}]`;
                    if ("symbol" == typeof e) return `[${String(e)}]`;
                    if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
                    const o = function(t) {
                        const e = Object.getPrototypeOf(t);
                        return e ? e.constructor.name : "null prototype";
                    }(e);
                    return /^HTML(\w*)Element$/.test(o) ? `[HTMLElement: ${o}]` : `[object ${o}]`;
                } catch (t) {
                    return `**non-serializable** (${t})`;
                }
                var r;
            }(t, e);
            if (!c.startsWith("[object ")) return c;
            if (e.__sentry_skip_normalization__) return e;
            const u = "number" == typeof e.__sentry_override_normalization_depth__ ? e.__sentry_override_normalization_depth__ : r;
            if (0 === u) return c.replace("object ", "");
            if (s(e)) return "[Circular ~]";
            const l = e;
            if (l && "function" == typeof l.toJSON) try {
                return Po("", l.toJSON(), u - 1, o, i);
            } catch (t) {}
            const d = Array.isArray(e) ? [] : {};
            let p = 0;
            const h = pr(e);
            for (const t in h) {
                if (!Object.prototype.hasOwnProperty.call(h, t)) continue;
                if (p >= o) {
                    d[t] = "[MaxProperties ~]";
                    break;
                }
                const e = h[t];
                d[t] = Po(t, e, u - 1, o, i), p++;
            }
            return a(e), d;
        }
        function jo(t, e, n, r, o, i) {
            const {normalizeDepth: s = 3, normalizeMaxBreadth: a = 1e3} = t, c = {
                ...e,
                event_id: e.event_id || n.event_id || yr(),
                timestamp: e.timestamp || Nr()
            }, u = n.integrations || t.integrations.map((t => t.name));
            !function(t, e) {
                const {environment: n, release: r, dist: o, maxValueLength: i = 250} = e;
                "environment" in t || (t.environment = "environment" in e ? n : Ar), void 0 === t.release && void 0 !== r && (t.release = r), 
                void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = rr(t.message, i));
                const s = t.exception && t.exception.values && t.exception.values[0];
                s && s.value && (s.value = rr(s.value, i));
                const a = t.request;
                a && a.url && (a.url = rr(a.url, i));
            }(c, t), function(t, e) {
                e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [ ...t.sdk.integrations || [], ...e ]);
            }(c, u), void 0 === e.type && function(t, e) {
                const n = Rn._sentryDebugIds;
                if (!n) return;
                let r;
                const o = Fo.get(e);
                o ? r = o : (r = new Map, Fo.set(e, r));
                const i = Object.keys(n).reduce(((t, o) => {
                    let i;
                    const s = r.get(o);
                    s ? i = s : (i = e(o), r.set(o, i));
                    for (let e = i.length - 1; e >= 0; e--) {
                        const r = i[e];
                        if (r.filename) {
                            t[r.filename] = n[o];
                            break;
                        }
                    }
                    return t;
                }), {});
                try {
                    t.exception.values.forEach((t => {
                        t.stacktrace.frames.forEach((t => {
                            t.filename && (t.debug_id = i[t.filename]);
                        }));
                    }));
                } catch (t) {}
            }(c, t.stackParser);
            const l = function(t, e) {
                if (!e) return t;
                const n = t ? t.clone() : new ho;
                return n.update(e), n;
            }(r, n.captureContext);
            n.mechanism && wr(c, n.mechanism);
            const d = o && o.getEventProcessors ? o.getEventProcessors() : [], p = (po || (po = new ho), 
            po).getScopeData();
            i && uo(p, i.getScopeData()), l && uo(p, l.getScopeData());
            const h = [ ...n.attachments || [], ...p.attachments ];
            return h.length && (n.attachments = h), co(c, p), Lr([ ...d, ...Rr(), ...p.eventProcessors ], c, n).then((t => (t && function(t) {
                const e = {};
                try {
                    t.exception.values.forEach((t => {
                        t.stacktrace.frames.forEach((t => {
                            t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), 
                            delete t.debug_id);
                        }));
                    }));
                } catch (t) {}
                if (0 === Object.keys(e).length) return;
                t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
                const n = t.debug_meta.images;
                Object.keys(e).forEach((t => {
                    n.push({
                        type: "sourcemap",
                        code_file: t,
                        debug_id: e[t]
                    });
                }));
            }(t), "number" == typeof s && s > 0 ? function(t, e, n) {
                if (!t) return null;
                const r = {
                    ...t,
                    ...t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map((t => ({
                            ...t,
                            ...t.data && {
                                data: No(t.data, e, n)
                            }
                        })))
                    },
                    ...t.user && {
                        user: No(t.user, e, n)
                    },
                    ...t.contexts && {
                        contexts: No(t.contexts, e, n)
                    },
                    ...t.extra && {
                        extra: No(t.extra, e, n)
                    }
                };
                return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, 
                t.contexts.trace.data && (r.contexts.trace.data = No(t.contexts.trace.data, e, n))), 
                t.spans && (r.spans = t.spans.map((t => {
                    const r = oo(t).data;
                    return r && (t.data = No(r, e, n)), t;
                }))), r;
            }(t, s, a) : t)));
        }
        const Fo = new WeakMap;
        const Bo = [ "user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext" ];
        function Uo(t, e) {
            return wo().captureException(t, function(t) {
                if (t) return function(t) {
                    return t instanceof ho || "function" == typeof t;
                }(t) || function(t) {
                    return Object.keys(t).some((t => Bo.includes(t)));
                }(t) ? {
                    captureContext: t
                } : t;
            }(e));
        }
        function Ho(t, e) {
            const n = "string" == typeof e ? e : void 0, r = "string" != typeof e ? {
                captureContext: e
            } : void 0;
            return wo().captureMessage(t, n, r);
        }
        function qo(t, e) {
            return wo().captureEvent(t, e);
        }
        function zo(t) {
            wo().configureScope(t);
        }
        function Wo(t, e) {
            wo().addBreadcrumb(t, e);
        }
        function Go(t, e) {
            wo().setContext(t, e);
        }
        function Yo(t) {
            wo().setExtras(t);
        }
        function Vo(t, e) {
            wo().setExtra(t, e);
        }
        function Jo(t) {
            wo().setTags(t);
        }
        function Ko(t, e) {
            wo().setTag(t, e);
        }
        function Xo(t) {
            wo().setUser(t);
        }
        function Qo(...t) {
            const e = wo();
            if (2 === t.length) {
                const [n, r] = t;
                return n ? e.withScope((() => (e.getStackTop().scope = n, r(n)))) : e.withScope(r);
            }
            return e.withScope(t[0]);
        }
        function Zo(t) {
            return ko((() => t(So())));
        }
        function ti(t, e) {
            return Qo((n => (n.setSpan(t), e(n))));
        }
        function ei(t, e) {
            return wo().startTransaction({
                ...t
            }, e);
        }
        async function ni(t) {
            const e = ii();
            return e ? e.flush(t) : (kr && Dn.warn("Cannot flush events. No client defined."), 
            Promise.resolve(!1));
        }
        async function ri(t) {
            const e = ii();
            return e ? e.close(t) : (kr && Dn.warn("Cannot flush events and disable SDK. No client defined."), 
            Promise.resolve(!1));
        }
        function oi() {
            return wo().lastEventId();
        }
        function ii() {
            return wo().getClient();
        }
        function si() {
            return !!ii();
        }
        function ai() {
            return wo().getScope();
        }
        function ci(t) {
            const e = ii(), n = So(), r = ai(), {release: o, environment: i = Ar} = e && e.getOptions() || {}, {userAgent: s} = Rn.navigator || {}, a = Fr({
                release: o,
                environment: i,
                user: r.getUser() || n.getUser(),
                ...s && {
                    userAgent: s
                },
                ...t
            }), c = n.getSession();
            return c && "ok" === c.status && $r(c, {
                status: "exited"
            }), ui(), n.setSession(a), r.setSession(a), a;
        }
        function ui() {
            const t = So(), e = ai(), n = e.getSession() || t.getSession();
            n && Br(n), li(), t.setSession(), e.setSession();
        }
        function li() {
            const t = So(), e = ai(), n = ii(), r = e.getSession() || t.getSession();
            r && n && n.captureSession && n.captureSession(r);
        }
        function di(t = !1) {
            t ? ui() : li();
        }
        const pi = [];
        function hi(t) {
            const e = t.defaultIntegrations || [], n = t.integrations;
            let r;
            e.forEach((t => {
                t.isDefaultInstance = !0;
            })), r = Array.isArray(n) ? [ ...e, ...n ] : "function" == typeof n ? xr(n(e)) : e;
            const o = function(t) {
                const e = {};
                return t.forEach((t => {
                    const {name: n} = t, r = e[n];
                    r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t);
                })), Object.keys(e).map((t => e[t]));
            }(r), i = function(t, e) {
                for (let n = 0; n < t.length; n++) if (!0 === e(t[n])) return n;
                return -1;
            }(o, (t => "Debug" === t.name));
            if (-1 !== i) {
                const [t] = o.splice(i, 1);
                o.push(t);
            }
            return o;
        }
        function fi(t, e) {
            for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t);
        }
        function mi(t, e, n) {
            if (n[e.name]) kr && Dn.log(`Integration skipped because it was already installed: ${e.name}`); else {
                if (n[e.name] = e, -1 === pi.indexOf(e.name) && (e.setupOnce(Or, wo), pi.push(e.name)), 
                e.setup && "function" == typeof e.setup && e.setup(t), t.on && "function" == typeof e.preprocessEvent) {
                    const n = e.preprocessEvent.bind(e);
                    t.on("preprocessEvent", ((e, r) => n(e, r, t)));
                }
                if (t.addEventProcessor && "function" == typeof e.processEvent) {
                    const n = e.processEvent.bind(e), r = Object.assign(((e, r) => n(e, r, t)), {
                        id: e.name
                    });
                    t.addEventProcessor(r);
                }
                kr && Dn.log(`Integration installed: ${e.name}`);
            }
        }
        function gi(t) {
            const e = ii();
            e && e.addIntegration ? e.addIntegration(t) : kr && Dn.warn(`Cannot add integration "${t.name}" because no SDK Client is available.`);
        }
        function yi(t, e) {
            return Object.assign((function(...t) {
                return e(...t);
            }), {
                id: t
            });
        }
        const vi = [ /^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/ ], bi = [ /^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/ ], _i = "InboundFilters", wi = (t = {}) => ({
            name: _i,
            setupOnce() {},
            processEvent(e, n, r) {
                const o = r.getOptions();
                return function(t, e) {
                    return e.ignoreInternal && function(t) {
                        try {
                            return "SentryError" === t.exception.values[0].type;
                        } catch (t) {}
                        return !1;
                    }(t) ? (kr && Dn.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${br(t)}`), 
                    !0) : function(t, e) {
                        return !(t.type || !e || !e.length) && function(t) {
                            const e = [];
                            let n;
                            t.message && e.push(t.message);
                            try {
                                n = t.exception.values[t.exception.values.length - 1];
                            } catch (t) {}
                            return n && n.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`)), 
                            kr && 0 === e.length && Dn.error(`Could not extract message for event ${br(t)}`), 
                            e;
                        }(t).some((t => ar(t, e)));
                    }(t, e.ignoreErrors) ? (kr && Dn.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${br(t)}`), 
                    !0) : function(t, e) {
                        if ("transaction" !== t.type || !e || !e.length) return !1;
                        const n = t.transaction;
                        return !!n && ar(n, e);
                    }(t, e.ignoreTransactions) ? (kr && Dn.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${br(t)}`), 
                    !0) : function(t, e) {
                        if (!e || !e.length) return !1;
                        const n = xi(t);
                        return !!n && ar(n, e);
                    }(t, e.denyUrls) ? (kr && Dn.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${br(t)}.\nUrl: ${xi(t)}`), 
                    !0) : !function(t, e) {
                        if (!e || !e.length) return !0;
                        const n = xi(t);
                        return !n || ar(n, e);
                    }(t, e.allowUrls) && (kr && Dn.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${br(t)}.\nUrl: ${xi(t)}`), 
                    !0);
                }(e, function(t = {}, e = {}) {
                    return {
                        allowUrls: [ ...t.allowUrls || [], ...e.allowUrls || [] ],
                        denyUrls: [ ...t.denyUrls || [], ...e.denyUrls || [] ],
                        ignoreErrors: [ ...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : vi ],
                        ignoreTransactions: [ ...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : bi ],
                        ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                    };
                }(t, o)) ? null : e;
            }
        }), Si = yi(_i, wi);
        function xi(t) {
            try {
                let e;
                try {
                    e = t.exception.values[0].stacktrace.frames;
                } catch (t) {}
                return e ? function(t = []) {
                    for (let e = t.length - 1; e >= 0; e--) {
                        const n = t[e];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
                    }
                    return null;
                }(e) : null;
            } catch (e) {
                return kr && Dn.error(`Cannot extract url for event ${br(t)}`), null;
            }
        }
        let ki;
        const Ei = "FunctionToString", Ti = new WeakMap, Ii = () => ({
            name: Ei,
            setupOnce() {
                ki = Function.prototype.toString;
                try {
                    Function.prototype.toString = function(...t) {
                        const e = dr(this), n = Ti.has(ii()) && void 0 !== e ? e : this;
                        return ki.apply(n, t);
                    };
                } catch (t) {}
            },
            setup(t) {
                Ti.set(t, !0);
            }
        }), Ci = yi(Ei, Ii);
        function Ri(t) {
            const e = wo().getStackTop();
            e.client = t, e.scope.setClient(t);
        }
        const Oi = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function Li(t, e = !1) {
            const {host: n, path: r, pass: o, port: i, projectId: s, protocol: a, publicKey: c} = t;
            return `${a}://${c}${e && o ? `:${o}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${s}`;
        }
        function Ai(t) {
            const e = Oi.exec(t);
            if (!e) return void Nn((() => {}));
            const [n, r, o = "", i, s = "", a] = e.slice(1);
            let c = "", u = a;
            const l = u.split("/");
            if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
                const t = u.match(/^\d+/);
                t && (u = t[0]);
            }
            return Mi({
                host: i,
                pass: o,
                path: c,
                projectId: u,
                port: s,
                protocol: n,
                publicKey: r
            });
        }
        function Mi(t) {
            return {
                protocol: t.protocol,
                publicKey: t.publicKey || "",
                pass: t.pass || "",
                host: t.host,
                port: t.port || "",
                path: t.path || "",
                projectId: t.projectId
            };
        }
        function Ni(t) {
            const e = "string" == typeof t ? Ai(t) : Mi(t);
            if (e && function(t) {
                if (!In) return !0;
                const {port: e, projectId: n, protocol: r} = t;
                return !([ "protocol", "publicKey", "host", "projectId" ].find((e => !t[e] && (Dn.error(`Invalid Sentry Dsn: ${e} missing`), 
                !0))) || (n.match(/^\d+$/) ? function(t) {
                    return "http" === t || "https" === t;
                }(r) ? e && isNaN(parseInt(e, 10)) && (Dn.error(`Invalid Sentry Dsn: Invalid port ${e}`), 
                1) : (Dn.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), 1) : (Dn.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), 
                1)));
            }(e)) return e;
        }
        function Pi(t) {
            const e = t.protocol ? `${t.protocol}:` : "", n = t.port ? `:${t.port}` : "";
            return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
        }
        function Fi(t, e = {}) {
            const n = "string" == typeof e ? e : e.tunnel, r = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
            return n || `${function(t) {
                return `${Pi(t)}${t.projectId}/envelope/`;
            }(t)}?${function(t, e) {
                return n = {
                    sentry_key: t.publicKey,
                    sentry_version: "7",
                    ...e && {
                        sentry_client: `${e.name}/${e.version}`
                    }
                }, Object.keys(n).map((t => `${encodeURIComponent(t)}=${encodeURIComponent(n[t])}`)).join("&");
                var n;
            }(t, r)}`;
        }
        const $i = On();
        function Bi() {
            if (!("fetch" in $i)) return !1;
            try {
                return new Headers, new Request("http://www.example.com"), new Response, !0;
            } catch (t) {
                return !1;
            }
        }
        function Ui(t) {
            return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
        }
        function Hi() {
            if ("string" == typeof EdgeRuntime) return !0;
            if (!Bi()) return !1;
            if (Ui($i.fetch)) return !0;
            let t = !1;
            const e = $i.document;
            if (e && "function" == typeof e.createElement) try {
                const n = e.createElement("iframe");
                n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = Ui(n.contentWindow.fetch)), 
                e.head.removeChild(n);
            } catch (t) {
                In && Dn.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t);
            }
            return t;
        }
        const qi = On(), zi = {}, Wi = {};
        function Gi(t, e) {
            zi[t] = zi[t] || [], zi[t].push(e);
        }
        function Yi(t, e) {
            Wi[t] || (e(), Wi[t] = !0);
        }
        function Vi(t, e) {
            const n = t && zi[t];
            if (n) for (const r of n) try {
                r(e);
            } catch (e) {
                In && Dn.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${Mo(r)}\nError:`, e);
            }
        }
        const Ji = Rn;
        let Ki;
        function Xi(t) {
            const e = "history";
            Gi(e, t), Yi(e, Qi);
        }
        function Qi() {
            if (!function() {
                const t = qi.chrome, e = t && t.app && t.app.runtime, n = "history" in qi && !!qi.history.pushState && !!qi.history.replaceState;
                return !e && n;
            }()) return;
            const t = Ji.onpopstate;
            function e(t) {
                return function(...e) {
                    const n = e.length > 2 ? e[2] : void 0;
                    if (n) {
                        const t = Ki, e = String(n);
                        Ki = e, Vi("history", {
                            from: t,
                            to: e
                        });
                    }
                    return t.apply(this, e);
                };
            }
            Ji.onpopstate = function(...e) {
                const n = Ji.location.href, r = Ki;
                if (Ki = n, Vi("history", {
                    from: r,
                    to: n
                }), t) try {
                    return t.apply(this, e);
                } catch (t) {}
            }, cr(Ji.history, "pushState", e), cr(Ji.history, "replaceState", e);
        }
        function Zi(t, e = []) {
            return [ t, e ];
        }
        function ts(t, e) {
            const [n, r] = t;
            return [ n, [ ...r, e ] ];
        }
        function es(t, e) {
            const n = t[1];
            for (const t of n) if (e(t, t[0].type)) return !0;
            return !1;
        }
        function ns(t, e) {
            return (e || new TextEncoder).encode(t);
        }
        function rs(t, e) {
            const [n, r] = t;
            let o = JSON.stringify(n);
            function i(t) {
                "string" == typeof o ? o = "string" == typeof t ? o + t : [ ns(o, e), t ] : o.push("string" == typeof t ? ns(t, e) : t);
            }
            for (const t of r) {
                const [e, n] = t;
                if (i(`\n${JSON.stringify(e)}\n`), "string" == typeof n || n instanceof Uint8Array) i(n); else {
                    let t;
                    try {
                        t = JSON.stringify(n);
                    } catch (e) {
                        t = JSON.stringify(No(n));
                    }
                    i(t);
                }
            }
            return "string" == typeof o ? o : function(t) {
                const e = t.reduce(((t, e) => t + e.length), 0), n = new Uint8Array(e);
                let r = 0;
                for (const e of t) n.set(e, r), r += e.length;
                return n;
            }(o);
        }
        function os(t, e) {
            const n = "string" == typeof t.data ? ns(t.data, e) : t.data;
            return [ mr({
                type: "attachment",
                length: n.length,
                filename: t.filename,
                content_type: t.contentType,
                attachment_type: t.attachmentType
            }), n ];
        }
        const is = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            feedback: "feedback",
            span: "span",
            statsd: "metric_bucket"
        };
        function ss(t) {
            return is[t];
        }
        function as(t) {
            if (!t || !t.sdk) return;
            const {name: e, version: n} = t.sdk;
            return {
                name: e,
                version: n
            };
        }
        function cs(t, e, n, r) {
            const o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: t.event_id,
                sent_at: (new Date).toISOString(),
                ...e && {
                    sdk: e
                },
                ...!!n && r && {
                    dsn: Li(r)
                },
                ...o && {
                    trace: mr({
                        ...o
                    })
                }
            };
        }
        class us extends Error {
            constructor(t, e = "warn") {
                super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), 
                this.logLevel = e;
            }
        }
        function ls(t, e, n, r) {
            const o = as(n), i = t.type && "replay_event" !== t.type ? t.type : "event";
            !function(t, e) {
                e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, 
                t.sdk.integrations = [ ...t.sdk.integrations || [], ...e.integrations || [] ], t.sdk.packages = [ ...t.sdk.packages || [], ...e.packages || [] ]);
            }(t, n && n.sdk);
            const s = cs(t, o, r, e);
            return delete t.sdkProcessingMetadata, Zi(s, [ [ {
                type: i
            }, t ] ]);
        }
        function ds(t) {
            return t.replace(/[^\w\-./]+/gi, "");
        }
        const ps = [ [ "\n", "\\n" ], [ "\r", "\\r" ], [ "\t", "\\t" ], [ "\\", "\\\\" ], [ "|", "\\u{7c}" ], [ ",", "\\u{2c}" ] ];
        function hs(t) {
            return [ ...t ].reduce(((t, e) => t + function(t) {
                for (const [e, n] of ps) if (t === e) return n;
                return t;
            }(e)), "");
        }
        const ms = "Not capturing exception because it's already been captured.";
        function ys(t) {
            return void 0 === t.type;
        }
        function vs(t) {
            return "transaction" === t.type;
        }
        function bs(t) {
            const e = ii();
            e && e.addEventProcessor && e.addEventProcessor(t);
        }
        var _s = n(905);
        const ws = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function Ss(t, e) {
            const n = ks(t, e), r = {
                type: e && e.name,
                value: Ts(e)
            };
            return n.length && (r.stacktrace = {
                frames: n
            }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), 
            r;
        }
        function xs(t, e) {
            return {
                exception: {
                    values: [ Ss(t, e) ]
                }
            };
        }
        function ks(t, e) {
            const n = e.stacktrace || e.stack || "", r = function(t) {
                if (t) {
                    if ("number" == typeof t.framesToPop) return t.framesToPop;
                    if (Es.test(t.message)) return 1;
                }
                return 0;
            }(e);
            try {
                return t(n, r);
            } catch (t) {}
            return [];
        }
        const Es = /Minified React error #\d+;/i;
        function Ts(t) {
            const e = t && t.message;
            return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message";
        }
        function Is(t, e, n, r) {
            const o = Rs(t, e, n && n.syntheticException || void 0, r);
            return wr(o), o.level = "error", n && n.event_id && (o.event_id = n.event_id), Tr(o);
        }
        function Cs(t, e, n = "info", r, o) {
            const i = Os(t, e, r && r.syntheticException || void 0, o);
            return i.level = n, r && r.event_id && (i.event_id = r.event_id), Tr(i);
        }
        function Rs(t, e, n, r, o) {
            let i;
            if ($n(e) && e.error) return xs(t, e.error);
            if (Bn(e) || Fn(e, "DOMException")) {
                const o = e;
                if ("stack" in e) i = xs(t, e); else {
                    const e = o.name || (Bn(o) ? "DOMError" : "DOMException"), s = o.message ? `${e}: ${o.message}` : e;
                    i = Os(t, s, n, r), _r(i, s);
                }
                return "code" in o && (i.tags = {
                    ...i.tags,
                    "DOMException.code": `${o.code}`
                }), i;
            }
            return jn(e) ? xs(t, e) : zn(e) || Wn(e) ? (i = function(t, e, n, r) {
                const o = ii(), i = o && o.getOptions().normalizeDepth, s = {
                    exception: {
                        values: [ {
                            type: Wn(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: Ls(e, {
                                isUnhandledRejection: r
                            })
                        } ]
                    },
                    extra: {
                        __serialized__: Do(e, i)
                    }
                };
                if (n) {
                    const e = ks(t, n);
                    e.length && (s.exception.values[0].stacktrace = {
                        frames: e
                    });
                }
                return s;
            }(t, e, n, o), wr(i, {
                synthetic: !0
            }), i) : (i = Os(t, e, n, r), _r(i, `${e}`, void 0), wr(i, {
                synthetic: !0
            }), i);
        }
        function Os(t, e, n, r) {
            const o = {};
            if (r && n) {
                const r = ks(t, n);
                r.length && (o.exception = {
                    values: [ {
                        value: e,
                        stacktrace: {
                            frames: r
                        }
                    } ]
                });
            }
            if (Hn(e)) {
                const {__sentry_template_string__: t, __sentry_template_values__: n} = e;
                return o.logentry = {
                    message: t,
                    params: n
                }, o;
            }
            return o.message = e, o;
        }
        function Ls(t, {isUnhandledRejection: e}) {
            const n = function(t, e = 40) {
                const n = Object.keys(pr(t));
                if (n.sort(), !n.length) return "[object has no keys]";
                if (n[0].length >= e) return rr(n[0], e);
                for (let t = n.length; t > 0; t--) {
                    const r = n.slice(0, t).join(", ");
                    if (!(r.length > e)) return t === n.length ? r : rr(r, e);
                }
                return "";
            }(t), r = e ? "promise rejection" : "exception";
            return $n(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : Wn(t) ? `Event \`${function(t) {
                try {
                    const e = Object.getPrototypeOf(t);
                    return e ? e.constructor.name : void 0;
                } catch (t) {}
            }(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
        }
        const As = Rn;
        let Ms = 0;
        function Ns() {
            return Ms > 0;
        }
        function Ds(t, e = {}, n) {
            if ("function" != typeof t) return t;
            try {
                const e = t.__sentry_wrapped__;
                if (e) return "function" == typeof e ? e : t;
                if (dr(t)) return t;
            } catch (e) {
                return t;
            }
            const r = function() {
                const r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    const o = r.map((t => Ds(t, e)));
                    return t.apply(this, o);
                } catch (t) {
                    throw Ms++, setTimeout((() => {
                        Ms--;
                    })), Qo((n => {
                        n.addEventProcessor((t => (e.mechanism && (_r(t, void 0, void 0), wr(t, e.mechanism)), 
                        t.extra = {
                            ...t.extra,
                            arguments: r
                        }, t))), Uo(t);
                    })), t;
                }
            };
            try {
                for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
            } catch (t) {}
            lr(r, t), ur(t, "__sentry_wrapped__", r);
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: () => t.name
                });
            } catch (t) {}
            return r;
        }
        function Ps(t, {metadata: e, tunnel: n, dsn: r}) {
            return Zi({
                event_id: t.event_id,
                sent_at: (new Date).toISOString(),
                ...e && e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                },
                ...!!n && !!r && {
                    dsn: Li(r)
                }
            }, [ function(t) {
                return [ {
                    type: "user_report"
                }, t ];
            }(t) ]);
        }
        class js extends class {
            constructor(t) {
                if (this._options = t, this._integrations = {}, this._integrationsInitialized = !1, 
                this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], 
                t.dsn ? this._dsn = Ni(t.dsn) : kr && Dn.warn("No DSN provided, client will not send events."), 
                this._dsn) {
                    const e = Fi(this._dsn, t);
                    this._transport = t.transport({
                        tunnel: this._options.tunnel,
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...t.transportOptions,
                        url: e
                    });
                }
            }
            captureException(t, e, n) {
                if (Sr(t)) return void (kr && Dn.log(ms));
                let r = e && e.event_id;
                return this._process(this.eventFromException(t, e).then((t => this._captureEvent(t, e, n))).then((t => {
                    r = t;
                }))), r;
            }
            captureMessage(t, e, n, r) {
                let o = n && n.event_id;
                const i = Hn(t) ? t : String(t), s = qn(t) ? this.eventFromMessage(i, e, n) : this.eventFromException(t, n);
                return this._process(s.then((t => this._captureEvent(t, n, r))).then((t => {
                    o = t;
                }))), o;
            }
            captureEvent(t, e, n) {
                if (e && e.originalException && Sr(e.originalException)) return void (kr && Dn.log(ms));
                let r = e && e.event_id;
                const o = (t.sdkProcessingMetadata || {}).capturedSpanScope;
                return this._process(this._captureEvent(t, e, o || n).then((t => {
                    r = t;
                }))), r;
            }
            captureSession(t) {
                "string" != typeof t.release ? kr && Dn.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), 
                $r(t, {
                    init: !1
                }));
            }
            getDsn() {
                return this._dsn;
            }
            getOptions() {
                return this._options;
            }
            getSdkMetadata() {
                return this._options._metadata;
            }
            getTransport() {
                return this._transport;
            }
            flush(t) {
                const e = this._transport;
                return e ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(t).then((n => e.flush(t).then((t => n && t))))) : Tr(!0);
            }
            close(t) {
                return this.flush(t).then((t => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), 
                t)));
            }
            getEventProcessors() {
                return this._eventProcessors;
            }
            addEventProcessor(t) {
                this._eventProcessors.push(t);
            }
            setupIntegrations(t) {
                (t && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations();
            }
            init() {
                this._isEnabled() && this._setupIntegrations();
            }
            getIntegrationById(t) {
                return this.getIntegrationByName(t);
            }
            getIntegrationByName(t) {
                return this._integrations[t];
            }
            getIntegration(t) {
                try {
                    return this._integrations[t.id] || null;
                } catch (e) {
                    return kr && Dn.warn(`Cannot retrieve integration ${t.id} from the current Client`), 
                    null;
                }
            }
            addIntegration(t) {
                const e = this._integrations[t.name];
                mi(this, t, this._integrations), e || fi(this, [ t ]);
            }
            sendEvent(t, e = {}) {
                this.emit("beforeSendEvent", t, e);
                let n = ls(t, this._dsn, this._options._metadata, this._options.tunnel);
                for (const t of e.attachments || []) n = ts(n, os(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const r = this._sendEnvelope(n);
                r && r.then((e => this.emit("afterSendEvent", t, e)), null);
            }
            sendSession(t) {
                const e = function(t, e, n, r) {
                    const o = as(n);
                    return Zi({
                        sent_at: (new Date).toISOString(),
                        ...o && {
                            sdk: o
                        },
                        ...!!r && e && {
                            dsn: Li(e)
                        }
                    }, [ "aggregates" in t ? [ {
                        type: "sessions"
                    }, t ] : [ {
                        type: "session"
                    }, t.toJSON() ] ]);
                }(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(e);
            }
            recordDroppedEvent(t, e, n) {
                if (this._options.sendClientReports) {
                    const r = "number" == typeof n ? n : 1, o = `${t}:${e}`;
                    kr && Dn.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`), this._outcomes[o] = (this._outcomes[o] || 0) + r;
                }
            }
            captureAggregateMetrics(t) {
                kr && Dn.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
                const e = function(t, e, n, r) {
                    const o = {
                        sent_at: (new Date).toISOString()
                    };
                    return n && n.sdk && (o.sdk = {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }), r && e && (o.dsn = Li(e)), Zi(o, [ function(t) {
                        const e = function(t) {
                            let e = "";
                            for (const n of t) {
                                const t = Object.entries(n.tags), r = t.length > 0 ? `|#${t.map((([t, e]) => `${t}:${e}`)).join(",")}` : "";
                                e += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`;
                            }
                            return e;
                        }(t);
                        return [ {
                            type: "statsd",
                            length: e.length
                        }, e ];
                    }(t) ]);
                }(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(e);
            }
            on(t, e) {
                this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e);
            }
            emit(t, ...e) {
                this._hooks[t] && this._hooks[t].forEach((t => t(...e)));
            }
            _setupIntegrations() {
                const {integrations: t} = this._options;
                this._integrations = function(t, e) {
                    const n = {};
                    return e.forEach((e => {
                        e && mi(t, e, n);
                    })), n;
                }(this, t), fi(this, t), this._integrationsInitialized = !0;
            }
            _updateSessionFromEvent(t, e) {
                let n = !1, r = !1;
                const o = e.exception && e.exception.values;
                if (o) {
                    r = !0;
                    for (const t of o) {
                        const e = t.mechanism;
                        if (e && !1 === e.handled) {
                            n = !0;
                            break;
                        }
                    }
                }
                const i = "ok" === t.status;
                (i && 0 === t.errors || i && n) && ($r(t, {
                    ...n && {
                        status: "crashed"
                    },
                    errors: t.errors || Number(r || n)
                }), this.captureSession(t));
            }
            _isClientDoneProcessing(t) {
                return new Cr((e => {
                    let n = 0;
                    const r = setInterval((() => {
                        0 == this._numProcessing ? (clearInterval(r), e(!0)) : (n += 1, t && n >= t && (clearInterval(r), 
                        e(!1)));
                    }), 1);
                }));
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._transport;
            }
            _prepareEvent(t, e, n, r = So()) {
                const o = this.getOptions(), i = Object.keys(this._integrations);
                return !e.integrations && i.length > 0 && (e.integrations = i), this.emit("preprocessEvent", t, e), 
                jo(o, t, e, n, this, r).then((t => {
                    if (null === t) return t;
                    const e = {
                        ...r.getPropagationContext(),
                        ...n ? n.getPropagationContext() : void 0
                    };
                    if ((!t.contexts || !t.contexts.trace) && e) {
                        const {traceId: r, spanId: o, parentSpanId: i, dsc: s} = e;
                        t.contexts = {
                            trace: {
                                trace_id: r,
                                span_id: o,
                                parent_span_id: i
                            },
                            ...t.contexts
                        };
                        const a = s || so(r, this, n);
                        t.sdkProcessingMetadata = {
                            dynamicSamplingContext: a,
                            ...t.sdkProcessingMetadata
                        };
                    }
                    return t;
                }));
            }
            _captureEvent(t, e = {}, n) {
                return this._processEvent(t, e, n).then((t => t.event_id), (t => {
                    if (kr) {
                        const e = t;
                        "log" === e.logLevel ? Dn.log(e.message) : Dn.warn(e);
                    }
                }));
            }
            _processEvent(t, e, n) {
                const r = this.getOptions(), {sampleRate: o} = r, i = vs(t), s = ys(t), a = t.type || "error", c = `before send for type \`${a}\``;
                if (s && "number" == typeof o && Math.random() > o) return this.recordDroppedEvent("sample_rate", "error", t), 
                Ir(new us(`Discarding event because it's not included in the random sample (sampling rate = ${o})`, "log"));
                const u = "replay_event" === a ? "replay" : a, l = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(t, e, n, l).then((n => {
                    if (null === n) throw this.recordDroppedEvent("event_processor", u, t), new us("An event processor returned `null`, will not send event.", "log");
                    if (e.data && !0 === e.data.__sentry__) return n;
                    return function(t, e) {
                        const n = `${e} must return \`null\` or a valid event.`;
                        if (Gn(t)) return t.then((t => {
                            if (!zn(t) && null !== t) throw new us(n);
                            return t;
                        }), (t => {
                            throw new us(`${e} rejected with ${t}`);
                        }));
                        if (!zn(t) && null !== t) throw new us(n);
                        return t;
                    }(function(t, e, n) {
                        const {beforeSend: r, beforeSendTransaction: o} = t;
                        if (ys(e) && r) return r(e, n);
                        if (vs(e) && o) {
                            if (e.spans) {
                                const t = e.spans.length;
                                e.sdkProcessingMetadata = {
                                    ...e.sdkProcessingMetadata,
                                    spanCountBeforeProcessing: t
                                };
                            }
                            return o(e, n);
                        }
                        return e;
                    }(r, n, e), c);
                })).then((r => {
                    if (null === r) {
                        if (this.recordDroppedEvent("before_send", u, t), i) {
                            const e = 1 + (t.spans || []).length;
                            this.recordDroppedEvent("before_send", "span", e);
                        }
                        throw new us(`${c} returned \`null\`, will not send event.`, "log");
                    }
                    const o = n && n.getSession();
                    if (!i && o && this._updateSessionFromEvent(o, r), i) {
                        const t = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
                        t > 0 && this.recordDroppedEvent("before_send", "span", t);
                    }
                    const s = r.transaction_info;
                    if (i && s && r.transaction !== t.transaction) {
                        const t = "custom";
                        r.transaction_info = {
                            ...s,
                            source: t
                        };
                    }
                    return this.sendEvent(r, e), r;
                })).then(null, (t => {
                    if (t instanceof us) throw t;
                    throw this.captureException(t, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: t
                    }), new us(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`);
                }));
            }
            _process(t) {
                this._numProcessing++, t.then((t => (this._numProcessing--, t)), (t => (this._numProcessing--, 
                t)));
            }
            _sendEnvelope(t) {
                if (this.emit("beforeEnvelope", t), this._isEnabled() && this._transport) return this._transport.send(t).then(null, (t => {
                    kr && Dn.error("Error while sending event:", t);
                }));
                kr && Dn.error("Transport disabled");
            }
            _clearOutcomes() {
                const t = this._outcomes;
                return this._outcomes = {}, Object.keys(t).map((e => {
                    const [n, r] = e.split(":");
                    return {
                        reason: n,
                        category: r,
                        quantity: t[e]
                    };
                }));
            }
        } {
            constructor(t) {
                !function(t, e, n = [ e ], r = "npm") {
                    const o = t._metadata || {};
                    o.sdk || (o.sdk = {
                        name: `sentry.javascript.${e}`,
                        packages: n.map((t => ({
                            name: `${r}:@sentry/${t}`,
                            version: mo
                        }))),
                        version: mo
                    }), t._metadata = o;
                }(t, "browser", [ "browser" ], As.SENTRY_SDK_SOURCE || (0, _s.S)()), super(t), t.sendClientReports && As.document && As.document.addEventListener("visibilitychange", (() => {
                    "hidden" === As.document.visibilityState && this._flushOutcomes();
                }));
            }
            eventFromException(t, e) {
                return Is(this._options.stackParser, t, e, this._options.attachStacktrace);
            }
            eventFromMessage(t, e = "info", n) {
                return Cs(this._options.stackParser, t, e, n, this._options.attachStacktrace);
            }
            captureUserFeedback(t) {
                if (!this._isEnabled()) return void (ws && Dn.warn("SDK not enabled, will not capture user feedback."));
                const e = Ps(t, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this._sendEnvelope(e);
            }
            _prepareEvent(t, e, n) {
                return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n);
            }
            _flushOutcomes() {
                const t = this._clearOutcomes();
                if (0 === t.length) return void (ws && Dn.log("No outcomes to send"));
                if (!this._dsn) return void (ws && Dn.log("No dsn provided, will not send outcomes"));
                ws && Dn.log("Sending outcomes:", t);
                const e = (n = t, Zi((r = this._options.tunnel && Li(this._dsn)) ? {
                    dsn: r
                } : {}, [ [ {
                    type: "client_report"
                }, {
                    timestamp: Nr(),
                    discarded_events: n
                } ] ]));
                var n, r;
                this._sendEnvelope(e);
            }
        }
        function Fs(t) {
            const e = "console";
            Gi(e, t), Yi(e, $s);
        }
        function $s() {
            "console" in Rn && An.forEach((function(t) {
                t in Rn.console && cr(Rn.console, t, (function(e) {
                    return Mn[t] = e, function(...e) {
                        Vi("console", {
                            args: e,
                            level: t
                        });
                        const n = Mn[t];
                        n && n.apply(Rn.console, e);
                    };
                }));
            }));
        }
        const Bs = Rn;
        let Hs, qs, zs;
        function Ws(t) {
            Gi("dom", t), Yi("dom", Gs);
        }
        function Gs() {
            if (!Bs.document) return;
            const t = Vi.bind(null, "dom"), e = Ys(t, !0);
            Bs.document.addEventListener("click", e, !1), Bs.document.addEventListener("keypress", e, !1), 
            [ "EventTarget", "Node" ].forEach((e => {
                const n = Bs[e] && Bs[e].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (cr(n, "addEventListener", (function(e) {
                    return function(n, r, o) {
                        if ("click" === n || "keypress" == n) try {
                            const r = this, i = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}, s = i[n] = i[n] || {
                                refCount: 0
                            };
                            if (!s.handler) {
                                const r = Ys(t);
                                s.handler = r, e.call(this, n, r, o);
                            }
                            s.refCount++;
                        } catch (t) {}
                        return e.call(this, n, r, o);
                    };
                })), cr(n, "removeEventListener", (function(t) {
                    return function(e, n, r) {
                        if ("click" === e || "keypress" == e) try {
                            const n = this, o = n.__sentry_instrumentation_handlers__ || {}, i = o[e];
                            i && (i.refCount--, i.refCount <= 0 && (t.call(this, e, i.handler, r), i.handler = void 0, 
                            delete o[e]), 0 === Object.keys(o).length && delete n.__sentry_instrumentation_handlers__);
                        } catch (t) {}
                        return t.call(this, e, n, r);
                    };
                })));
            }));
        }
        function Ys(t, e = !1) {
            return n => {
                if (!n || n._sentryCaptured) return;
                const r = function(t) {
                    try {
                        return t.target;
                    } catch (t) {
                        return null;
                    }
                }(n);
                if (function(t, e) {
                    return "keypress" === t && (!e || !e.tagName || "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName && !e.isContentEditable);
                }(n.type, r)) return;
                ur(n, "_sentryCaptured", !0), r && !r._sentryId && ur(r, "_sentryId", yr());
                const o = "keypress" === n.type ? "input" : n.type;
                (function(t) {
                    if (t.type !== qs) return !1;
                    try {
                        if (!t.target || t.target._sentryId !== zs) return !1;
                    } catch (t) {}
                    return !0;
                })(n) || (t({
                    event: n,
                    name: o,
                    global: e
                }), qs = n.type, zs = r ? r._sentryId : void 0), clearTimeout(Hs), Hs = Bs.setTimeout((() => {
                    zs = void 0, qs = void 0;
                }), 1e3);
            };
        }
        const Vs = Rn, Js = "__sentry_xhr_v3__";
        function Ks(t) {
            Gi("xhr", t), Yi("xhr", Xs);
        }
        function Xs() {
            if (!Vs.XMLHttpRequest) return;
            const t = XMLHttpRequest.prototype;
            cr(t, "open", (function(t) {
                return function(...e) {
                    const n = Date.now(), r = Un(e[0]) ? e[0].toUpperCase() : void 0, o = function(t) {
                        if (Un(t)) return t;
                        try {
                            return t.toString();
                        } catch (t) {}
                    }(e[1]);
                    if (!r || !o) return t.apply(this, e);
                    this[Js] = {
                        method: r,
                        url: o,
                        request_headers: {}
                    }, "POST" === r && o.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                    const i = () => {
                        const t = this[Js];
                        if (t && 4 === this.readyState) {
                            try {
                                t.status_code = this.status;
                            } catch (t) {}
                            Vi("xhr", {
                                args: [ r, o ],
                                endTimestamp: Date.now(),
                                startTimestamp: n,
                                xhr: this
                            });
                        }
                    };
                    return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? cr(this, "onreadystatechange", (function(t) {
                        return function(...e) {
                            return i(), t.apply(this, e);
                        };
                    })) : this.addEventListener("readystatechange", i), cr(this, "setRequestHeader", (function(t) {
                        return function(...e) {
                            const [n, r] = e, o = this[Js];
                            return o && Un(n) && Un(r) && (o.request_headers[n.toLowerCase()] = r), t.apply(this, e);
                        };
                    })), t.apply(this, e);
                };
            })), cr(t, "send", (function(t) {
                return function(...e) {
                    const n = this[Js];
                    return n ? (void 0 !== e[0] && (n.body = e[0]), Vi("xhr", {
                        args: [ n.method, n.url ],
                        startTimestamp: Date.now(),
                        xhr: this
                    }), t.apply(this, e)) : t.apply(this, e);
                };
            }));
        }
        function Qs(t) {
            const e = "fetch";
            Gi(e, t), Yi(e, Zs);
        }
        function Zs() {
            Hi() && cr(Rn, "fetch", (function(t) {
                return function(...e) {
                    const {method: n, url: r} = function(t) {
                        if (0 === t.length) return {
                            method: "GET",
                            url: ""
                        };
                        if (2 === t.length) {
                            const [e, n] = t;
                            return {
                                url: ea(e),
                                method: ta(n, "method") ? String(n.method).toUpperCase() : "GET"
                            };
                        }
                        const e = t[0];
                        return {
                            url: ea(e),
                            method: ta(e, "method") ? String(e.method).toUpperCase() : "GET"
                        };
                    }(e), o = {
                        args: e,
                        fetchData: {
                            method: n,
                            url: r
                        },
                        startTimestamp: Date.now()
                    };
                    return Vi("fetch", {
                        ...o
                    }), t.apply(Rn, e).then((t => (Vi("fetch", {
                        ...o,
                        endTimestamp: Date.now(),
                        response: t
                    }), t)), (t => {
                        throw Vi("fetch", {
                            ...o,
                            endTimestamp: Date.now(),
                            error: t
                        }), t;
                    }));
                };
            }));
        }
        function ta(t, e) {
            return !!t && "object" == typeof t && !!t[e];
        }
        function ea(t) {
            return "string" == typeof t ? t : t ? ta(t, "url") ? t.url : t.toString ? t.toString() : "" : "";
        }
        const na = [ "fatal", "error", "warning", "log", "info", "debug" ];
        function ra(t) {
            return "warn" === t ? "warning" : na.includes(t) ? t : "log";
        }
        function oa(t) {
            if (!t) return {};
            const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e) return {};
            const n = e[6] || "", r = e[8] || "";
            return {
                host: e[4],
                path: e[5],
                protocol: e[2],
                search: n,
                hash: r,
                relative: e[5] + n + r
            };
        }
        const sa = "Breadcrumbs", aa = (t = {}) => {
            const e = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...t
            };
            return {
                name: sa,
                setupOnce() {},
                setup(t) {
                    e.console && Fs(function(t) {
                        return function(e) {
                            if (ii() !== t) return;
                            const n = {
                                category: "console",
                                data: {
                                    arguments: e.args,
                                    logger: "console"
                                },
                                level: ra(e.level),
                                message: ir(e.args, " ")
                            };
                            if ("assert" === e.level) {
                                if (!1 !== e.args[0]) return;
                                n.message = `Assertion failed: ${ir(e.args.slice(1), " ") || "console.assert"}`, 
                                n.data.arguments = e.args.slice(1);
                            }
                            Wo(n, {
                                input: e.args,
                                level: e.level
                            });
                        };
                    }(t)), e.dom && Ws(function(t, e) {
                        return function(n) {
                            if (ii() !== t) return;
                            let r, o, i = "object" == typeof e ? e.serializeAttribute : void 0, s = "object" == typeof e && "number" == typeof e.maxStringLength ? e.maxStringLength : void 0;
                            s && s > 1024 && (ws && Dn.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${s} was configured. Sentry will use 1024 instead.`), 
                            s = 1024), "string" == typeof i && (i = [ i ]);
                            try {
                                const t = n.event, e = function(t) {
                                    return !!t && !!t.target;
                                }(t) ? t.target : t;
                                r = Qn(e, {
                                    keyAttrs: i,
                                    maxStringLength: s
                                }), o = nr(e);
                            } catch (t) {
                                r = "<unknown>";
                            }
                            if (0 === r.length) return;
                            const a = {
                                category: `ui.${n.name}`,
                                message: r
                            };
                            o && (a.data = {
                                "ui.component_name": o
                            }), Wo(a, {
                                event: n.event,
                                name: n.name,
                                global: n.global
                            });
                        };
                    }(t, e.dom)), e.xhr && Ks(function(t) {
                        return function(e) {
                            if (ii() !== t) return;
                            const {startTimestamp: n, endTimestamp: r} = e, o = e.xhr[Js];
                            if (!n || !r || !o) return;
                            const {method: i, url: s, status_code: a, body: c} = o;
                            Wo({
                                category: "xhr",
                                data: {
                                    method: i,
                                    url: s,
                                    status_code: a
                                },
                                type: "http"
                            }, {
                                xhr: e.xhr,
                                input: c,
                                startTimestamp: n,
                                endTimestamp: r
                            });
                        };
                    }(t)), e.fetch && Qs(function(t) {
                        return function(e) {
                            if (ii() !== t) return;
                            const {startTimestamp: n, endTimestamp: r} = e;
                            if (r && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method)) if (e.error) Wo({
                                category: "fetch",
                                data: e.fetchData,
                                level: "error",
                                type: "http"
                            }, {
                                data: e.error,
                                input: e.args,
                                startTimestamp: n,
                                endTimestamp: r
                            }); else {
                                const t = e.response;
                                Wo({
                                    category: "fetch",
                                    data: {
                                        ...e.fetchData,
                                        status_code: t && t.status
                                    },
                                    type: "http"
                                }, {
                                    input: e.args,
                                    response: t,
                                    startTimestamp: n,
                                    endTimestamp: r
                                });
                            }
                        };
                    }(t)), e.history && Xi(function(t) {
                        return function(e) {
                            if (ii() !== t) return;
                            let n = e.from, r = e.to;
                            const o = oa(As.location.href);
                            let i = n ? oa(n) : void 0;
                            const s = oa(r);
                            i && i.path || (i = o), o.protocol === s.protocol && o.host === s.host && (r = s.relative), 
                            o.protocol === i.protocol && o.host === i.host && (n = i.relative), Wo({
                                category: "navigation",
                                data: {
                                    from: n,
                                    to: r
                                }
                            });
                        };
                    }(t)), e.sentry && t.on && t.on("beforeSendEvent", function(t) {
                        return function(e) {
                            ii() === t && Wo({
                                category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                                event_id: e.event_id,
                                level: e.level,
                                message: br(e)
                            }, {
                                event: e
                            });
                        };
                    }(t));
                }
            };
        }, ca = yi(sa, aa), la = () => {
            let t;
            return {
                name: "Dedupe",
                setupOnce() {},
                processEvent(e) {
                    if (e.type) return e;
                    try {
                        if (function(t, e) {
                            return !!e && (!!function(t, e) {
                                const n = t.message, r = e.message;
                                return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!ha(t, e) && !!pa(t, e))));
                            }(t, e) || !!function(t, e) {
                                const n = fa(e), r = fa(t);
                                return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!ha(t, e) && !!pa(t, e)));
                            }(t, e));
                        }(e, t)) return ws && Dn.warn("Event dropped due to being a duplicate of previously captured event."), 
                        null;
                    } catch (t) {}
                    return t = e;
                }
            };
        }, da = yi("Dedupe", la);
        function pa(t, e) {
            let n = ma(t), r = ma(e);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (let t = 0; t < r.length; t++) {
                const e = r[t], o = n[t];
                if (e.filename !== o.filename || e.lineno !== o.lineno || e.colno !== o.colno || e.function !== o.function) return !1;
            }
            return !0;
        }
        function ha(t, e) {
            let n = t.fingerprint, r = e.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""));
            } catch (t) {
                return !1;
            }
        }
        function fa(t) {
            return t.exception && t.exception.values && t.exception.values[0];
        }
        function ma(t) {
            const e = t.exception;
            if (e) try {
                return e.values[0].stacktrace.frames;
            } catch (t) {
                return;
            }
        }
        let ga = null;
        function ya(t) {
            const e = "error";
            Gi(e, t), Yi(e, va);
        }
        function va() {
            ga = Rn.onerror, Rn.onerror = function(t, e, n, r, o) {
                return Vi("error", {
                    column: r,
                    error: o,
                    line: n,
                    msg: t,
                    url: e
                }), !(!ga || ga.__SENTRY_LOADER__) && ga.apply(this, arguments);
            }, Rn.onerror.__SENTRY_INSTRUMENTED__ = !0;
        }
        let ba = null;
        function _a(t) {
            const e = "unhandledrejection";
            Gi(e, t), Yi(e, wa);
        }
        function wa() {
            ba = Rn.onunhandledrejection, Rn.onunhandledrejection = function(t) {
                return Vi("unhandledrejection", t), !(ba && !ba.__SENTRY_LOADER__) || ba.apply(this, arguments);
            }, Rn.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
        }
        const Sa = "GlobalHandlers", xa = (t = {}) => {
            const e = {
                onerror: !0,
                onunhandledrejection: !0,
                ...t
            };
            return {
                name: Sa,
                setupOnce() {
                    Error.stackTraceLimit = 50;
                },
                setup(t) {
                    e.onerror && (function(t) {
                        ya((e => {
                            const {stackParser: n, attachStacktrace: r} = Ia();
                            if (ii() !== t || Ns()) return;
                            const {msg: o, url: i, line: s, column: a, error: c} = e, u = void 0 === c && Un(o) ? function(t, e, n, r) {
                                let i = $n(t) ? t.message : t, s = "Error";
                                const a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                                a && (s = a[1], i = a[2]);
                                return Ea({
                                    exception: {
                                        values: [ {
                                            type: s,
                                            value: i
                                        } ]
                                    }
                                }, e, n, r);
                            }(o, i, s, a) : Ea(Rs(n, c || o, void 0, r, !1), i, s, a);
                            u.level = "error", qo(u, {
                                originalException: c,
                                mechanism: {
                                    handled: !1,
                                    type: "onerror"
                                }
                            });
                        }));
                    }(t), Ta("onerror")), e.onunhandledrejection && (function(t) {
                        _a((e => {
                            const {stackParser: n, attachStacktrace: r} = Ia();
                            if (ii() !== t || Ns()) return;
                            const o = function(t) {
                                if (qn(t)) return t;
                                const e = t;
                                try {
                                    if ("reason" in e) return e.reason;
                                    if ("detail" in e && "reason" in e.detail) return e.detail.reason;
                                } catch (t) {}
                                return t;
                            }(e), i = qn(o) ? {
                                exception: {
                                    values: [ {
                                        type: "UnhandledRejection",
                                        value: `Non-Error promise rejection captured with value: ${String(o)}`
                                    } ]
                                }
                            } : Rs(n, o, void 0, r, !0);
                            i.level = "error", qo(i, {
                                originalException: o,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }
                            });
                        }));
                    }(t), Ta("onunhandledrejection"));
                }
            };
        }, ka = yi(Sa, xa);
        function Ea(t, e, n, r) {
            const o = t.exception = t.exception || {}, i = o.values = o.values || [], s = i[0] = i[0] || {}, a = s.stacktrace = s.stacktrace || {}, c = a.frames = a.frames || [], u = isNaN(parseInt(r, 10)) ? void 0 : r, l = isNaN(parseInt(n, 10)) ? void 0 : n, d = Un(e) && e.length > 0 ? e : tr();
            return 0 === c.length && c.push({
                colno: u,
                filename: d,
                function: "?",
                in_app: !0,
                lineno: l
            }), t;
        }
        function Ta(t) {
            ws && Dn.log(`Global Handler attached: ${t}`);
        }
        function Ia() {
            const t = ii();
            return t && t.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        }
        const Ca = "HttpContext", Ra = () => ({
            name: Ca,
            setupOnce() {},
            preprocessEvent(t) {
                if (!As.navigator && !As.location && !As.document) return;
                const e = t.request && t.request.url || As.location && As.location.href, {referrer: n} = As.document || {}, {userAgent: r} = As.navigator || {}, o = {
                    ...t.request && t.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                }, i = {
                    ...t.request,
                    ...e && {
                        url: e
                    },
                    headers: o
                };
                t.request = i;
            }
        }), Oa = yi(Ca, Ra);
        function La(t, e, n = 250, r, o, i, s) {
            if (!(i.exception && i.exception.values && s && Vn(s.originalException, Error))) return;
            const a = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
            var c, u;
            a && (i.exception.values = (c = Aa(t, e, o, s.originalException, r, i.exception.values, a, 0), 
            u = n, c.map((t => (t.value && (t.value = rr(t.value, u)), t)))));
        }
        function Aa(t, e, n, r, o, i, s, a) {
            if (i.length >= n + 1) return i;
            let c = [ ...i ];
            if (Vn(r[o], Error)) {
                Ma(s, a);
                const i = t(e, r[o]), u = c.length;
                Na(i, o, u, a), c = Aa(t, e, n, r[o], o, [ i, ...c ], i, u);
            }
            return Array.isArray(r.errors) && r.errors.forEach(((r, i) => {
                if (Vn(r, Error)) {
                    Ma(s, a);
                    const u = t(e, r), l = c.length;
                    Na(u, `errors[${i}]`, l, a), c = Aa(t, e, n, r, o, [ u, ...c ], u, l);
                }
            })), c;
        }
        function Ma(t, e) {
            t.mechanism = t.mechanism || {
                type: "generic",
                handled: !0
            }, t.mechanism = {
                ...t.mechanism,
                ..."AggregateError" === t.type && {
                    is_exception_group: !0
                },
                exception_id: e
            };
        }
        function Na(t, e, n, r) {
            t.mechanism = t.mechanism || {
                type: "generic",
                handled: !0
            }, t.mechanism = {
                ...t.mechanism,
                type: "chained",
                source: e,
                exception_id: n,
                parent_id: r
            };
        }
        const Da = "LinkedErrors", Pa = (t = {}) => {
            const e = t.limit || 5, n = t.key || "cause";
            return {
                name: Da,
                setupOnce() {},
                preprocessEvent(t, r, o) {
                    const i = o.getOptions();
                    La(Ss, i.stackParser, i.maxValueLength, n, e, t, r);
                }
            };
        }, ja = yi(Da, Pa), Fa = [ "EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload" ], $a = "TryCatch", Ba = (t = {}) => {
            const e = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t
            };
            return {
                name: $a,
                setupOnce() {
                    e.setTimeout && cr(As, "setTimeout", Ha), e.setInterval && cr(As, "setInterval", Ha), 
                    e.requestAnimationFrame && cr(As, "requestAnimationFrame", qa), e.XMLHttpRequest && "XMLHttpRequest" in As && cr(XMLHttpRequest.prototype, "send", za);
                    const t = e.eventTarget;
                    t && (Array.isArray(t) ? t : Fa).forEach(Wa);
                }
            };
        }, Ua = yi($a, Ba);
        function Ha(t) {
            return function(...e) {
                const n = e[0];
                return e[0] = Ds(n, {
                    mechanism: {
                        data: {
                            function: Mo(t)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }), t.apply(this, e);
            };
        }
        function qa(t) {
            return function(e) {
                return t.apply(this, [ Ds(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: Mo(t)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }) ]);
            };
        }
        function za(t) {
            return function(...e) {
                const n = this;
                return [ "onload", "onerror", "onprogress", "onreadystatechange" ].forEach((t => {
                    t in n && "function" == typeof n[t] && cr(n, t, (function(e) {
                        const n = {
                            mechanism: {
                                data: {
                                    function: t,
                                    handler: Mo(e)
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }, r = dr(e);
                        return r && (n.mechanism.data.handler = Mo(r)), Ds(e, n);
                    }));
                })), t.apply(this, e);
            };
        }
        function Wa(t) {
            const e = As, n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (cr(n, "addEventListener", (function(e) {
                return function(n, r, o) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = Ds(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: Mo(r),
                                    target: t
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }));
                    } catch (t) {}
                    return e.apply(this, [ n, Ds(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: Mo(r),
                                target: t
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }), o ]);
                };
            })), cr(n, "removeEventListener", (function(t) {
                return function(e, n, r) {
                    const o = n;
                    try {
                        const n = o && o.__sentry_wrapped__;
                        n && t.call(this, e, n, r);
                    } catch (t) {}
                    return t.call(this, e, o, r);
                };
            })));
        }
        function Ya(t, e, n, r) {
            const o = {
                filename: t,
                function: e,
                in_app: !0
            };
            return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o;
        }
        const Va = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Ja = /\((\S*)(?::(\d+))(?::(\d+))\)/, Ka = [ 30, t => {
            const e = Va.exec(t);
            if (e) {
                if (e[2] && 0 === e[2].indexOf("eval")) {
                    const t = Ja.exec(e[2]);
                    t && (e[2] = t[1], e[3] = t[2], e[4] = t[3]);
                }
                const [t, n] = cc(e[1] || "?", e[2]);
                return Ya(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
            }
        } ], Xa = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Qa = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Za = [ 50, t => {
            const e = Xa.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const t = Qa.exec(e[3]);
                    t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "");
                }
                let t = e[3], n = e[1] || "?";
                return [n, t] = cc(n, t), Ya(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
            }
        } ], tc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, ec = [ 40, t => {
            const e = tc.exec(t);
            return e ? Ya(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0;
        } ], nc = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, rc = [ 10, t => {
            const e = nc.exec(t);
            return e ? Ya(e[2], e[3] || "?", +e[1]) : void 0;
        } ], oc = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i, ic = [ 20, t => {
            const e = oc.exec(t);
            return e ? Ya(e[5], e[3] || e[4] || "?", +e[1], +e[2]) : void 0;
        } ], sc = [ Ka, Za, ec ], ac = Lo(...sc), cc = (t, e) => {
            const n = -1 !== t.indexOf("safari-extension"), r = -1 !== t.indexOf("safari-web-extension");
            return n || r ? [ -1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? `safari-extension:${e}` : `safari-web-extension:${e}` ] : [ t, e ];
        };
        function dc(t, e = Date.now()) {
            const n = parseInt(`${t}`, 10);
            if (!isNaN(n)) return 1e3 * n;
            const r = Date.parse(`${t}`);
            return isNaN(r) ? 6e4 : r - e;
        }
        function pc(t, e, n = Date.now()) {
            return function(t, e) {
                return t[e] || t.all || 0;
            }(t, e) > n;
        }
        function hc(t, {statusCode: e, headers: n}, r = Date.now()) {
            const o = {
                ...t
            }, i = n && n["x-sentry-rate-limits"], s = n && n["retry-after"];
            if (i) for (const t of i.trim().split(",")) {
                const [e, n, , , i] = t.split(":", 5), s = parseInt(e, 10), a = 1e3 * (isNaN(s) ? 60 : s);
                if (n) for (const t of n.split(";")) "metric_bucket" === t && i && !i.split(";").includes("custom") || (o[t] = r + a); else o.all = r + a;
            } else s ? o.all = r + dc(s, r) : 429 === e && (o.all = r + 6e4);
            return o;
        }
        function mc(t, e, n = function(t) {
            const e = [];
            function n(t) {
                return e.splice(e.indexOf(t), 1)[0];
            }
            return {
                $: e,
                add: function(r) {
                    if (!(void 0 === t || e.length < t)) return Ir(new us("Not adding Promise because buffer limit was reached."));
                    const o = r();
                    return -1 === e.indexOf(o) && e.push(o), o.then((() => n(o))).then(null, (() => n(o).then(null, (() => {})))), 
                    o;
                },
                drain: function(t) {
                    return new Cr(((n, r) => {
                        let o = e.length;
                        if (!o) return n(!0);
                        const i = setTimeout((() => {
                            t && t > 0 && n(!1);
                        }), t);
                        e.forEach((t => {
                            Tr(t).then((() => {
                                --o || (clearTimeout(i), n(!0));
                            }), r);
                        }));
                    }));
                }
            };
        }(t.bufferSize || 30)) {
            let r = {};
            function o(o) {
                const i = [];
                if (es(o, ((e, n) => {
                    const o = ss(n);
                    if (pc(r, o)) {
                        const r = gc(e, n);
                        t.recordDroppedEvent("ratelimit_backoff", o, r);
                    } else i.push(e);
                })), 0 === i.length) return Tr();
                const s = Zi(o[0], i), a = e => {
                    es(s, ((n, r) => {
                        const o = gc(n, r);
                        t.recordDroppedEvent(e, ss(r), o);
                    }));
                };
                return n.add((() => e({
                    body: rs(s, t.textEncoder)
                }).then((t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && kr && Dn.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), 
                r = hc(r, t), t)), (t => {
                    throw a("network_error"), t;
                })))).then((t => t), (t => {
                    if (t instanceof us) return kr && Dn.error("Skipped sending event because buffer is full."), 
                    a("queue_overflow"), Tr();
                    throw t;
                }));
            }
            return o.__sentry__baseTransport__ = !0, {
                send: o,
                flush: t => n.drain(t)
            };
        }
        function gc(t, e) {
            if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0;
        }
        let yc;
        function vc(t, e = function() {
            if (yc) return yc;
            if (Ui(As.fetch)) return yc = As.fetch.bind(As);
            const t = As.document;
            let e = As.fetch;
            if (t && "function" == typeof t.createElement) try {
                const n = t.createElement("iframe");
                n.hidden = !0, t.head.appendChild(n);
                const r = n.contentWindow;
                r && r.fetch && (e = r.fetch), t.head.removeChild(n);
            } catch (t) {
                ws && Dn.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t);
            }
            return yc = e.bind(As);
        }()) {
            let n = 0, r = 0;
            return mc(t, (function(o) {
                const i = o.body.length;
                n += i, r++;
                const s = {
                    body: o.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: t.headers,
                    keepalive: n <= 6e4 && r < 15,
                    ...t.fetchOptions
                };
                try {
                    return e(t.url, s).then((t => (n -= i, r--, {
                        statusCode: t.status,
                        headers: {
                            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": t.headers.get("Retry-After")
                        }
                    })));
                } catch (t) {
                    return yc = void 0, n -= i, r--, Ir(t);
                }
            }));
        }
        function _c(t) {
            return mc(t, (function(e) {
                return new Cr(((n, r) => {
                    const o = new XMLHttpRequest;
                    o.onerror = r, o.onreadystatechange = () => {
                        4 === o.readyState && n({
                            statusCode: o.status,
                            headers: {
                                "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": o.getResponseHeader("Retry-After")
                            }
                        });
                    }, o.open("POST", t.url);
                    for (const e in t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && o.setRequestHeader(e, t.headers[e]);
                    o.send(e.body);
                }));
            }));
        }
        const wc = [ wi(), Ii(), Ba(), aa(), xa(), Pa(), la(), Ra() ];
        function Sc(t) {
            return [ ...wc ];
        }
        function xc(t = {}) {
            void 0 === t.defaultIntegrations && (t.defaultIntegrations = Sc()), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), 
            As.SENTRY_RELEASE && As.SENTRY_RELEASE.id && (t.release = As.SENTRY_RELEASE.id)), 
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
            const e = {
                ...t,
                stackParser: (n = t.stackParser || ac, Array.isArray(n) ? Lo(...n) : n),
                integrations: hi(t),
                transport: t.transport || (Bi() ? vc : _c)
            };
            var n;
            !function(t, e) {
                !0 === e.debug && (kr ? Dn.enable() : Nn((() => {}))), ai().update(e.initialScope);
                const n = new t(e);
                Ri(n), function(t) {
                    t.init ? t.init() : t.setupIntegrations && t.setupIntegrations();
                }(n);
            }(js, e), t.autoSessionTracking && (void 0 !== As.document ? (ci({
                ignoreDuration: !0
            }), di(), Xi((({from: t, to: e}) => {
                void 0 !== t && t !== e && (ci({
                    ignoreDuration: !0
                }), di());
            }))) : ws && Dn.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
        }
        const kc = (t = {}, e = wo()) => {
            if (!As.document) return void (ws && Dn.error("Global document not defined in showReportDialog call"));
            const {client: n, scope: r} = e.getStackTop(), o = t.dsn || n && n.getDsn();
            if (!o) return void (ws && Dn.error("DSN not configured for showReportDialog call"));
            r && (t.user = {
                ...r.getUser(),
                ...t.user
            }), t.eventId || (t.eventId = e.lastEventId());
            const i = As.document.createElement("script");
            i.async = !0, i.crossOrigin = "anonymous", i.src = function(t, e) {
                const n = Ni(t);
                if (!n) return "";
                const r = `${Pi(n)}embed/error-page/`;
                let o = `dsn=${Li(n)}`;
                for (const t in e) if ("dsn" !== t && "onClose" !== t) if ("user" === t) {
                    const t = e.user;
                    if (!t) continue;
                    t.name && (o += `&name=${encodeURIComponent(t.name)}`), t.email && (o += `&email=${encodeURIComponent(t.email)}`);
                } else o += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
                return `${r}?${o}`;
            }(o, t), t.onLoad && (i.onload = t.onLoad);
            const {onClose: s} = t;
            if (s) {
                const t = e => {
                    if ("__sentry_reportdialog_closed__" === e.data) try {
                        s();
                    } finally {
                        As.removeEventListener("message", t);
                    }
                };
                As.addEventListener("message", t);
            }
            const a = As.document.head || As.document.body;
            a ? a.appendChild(i) : ws && Dn.error("Not injecting report dialog. No injection point found in HTML");
        };
        function Ec() {}
        function Tc(t) {
            t();
        }
        function Ic(t) {
            return Ds(t)();
        }
        function Cc(t) {
            const e = ii();
            e && e.captureUserFeedback(t);
        }
        function Oc(t, e) {
            const n = {
                type: e.name || e.constructor.name,
                value: e.message
            }, r = function(t, e) {
                return t(e.stack || "", 1);
            }(t, e);
            return r.length && (n.stacktrace = {
                frames: r
            }), n;
        }
        const Lc = "LinkedErrors", Ac = yi(Lc, ((t = {}) => {
            const e = t.limit || 5, n = t.key || "cause";
            return {
                name: Lc,
                setupOnce() {},
                preprocessEvent(t, r, o) {
                    const i = o.getOptions();
                    La(Oc, i.stackParser, i.maxValueLength, n, e, t, r);
                }
            };
        })), Mc = t, Nc = new Map, Dc = new Set;
        function Pc(t, e) {
            return function(t) {
                if (Rn._sentryModuleMetadata) for (const e of Object.keys(Rn._sentryModuleMetadata)) {
                    const n = Rn._sentryModuleMetadata[e];
                    if (Dc.has(e)) continue;
                    Dc.add(e);
                    const r = t(e);
                    for (const t of r.reverse()) if (t.filename) {
                        Nc.set(t.filename, n);
                        break;
                    }
                }
            }(t), Nc.get(e);
        }
        const jc = "ModuleMetadata", Fc = () => ({
            name: jc,
            setupOnce() {},
            setup(t) {
                "function" == typeof t.on && t.on("beforeEnvelope", (t => {
                    es(t, ((t, e) => {
                        if ("event" === e) {
                            const e = Array.isArray(t) ? t[1] : void 0;
                            e && (function(t) {
                                try {
                                    t.exception.values.forEach((t => {
                                        if (t.stacktrace) for (const e of t.stacktrace.frames || []) delete e.module_metadata;
                                    }));
                                } catch (t) {}
                            }(e), t[1] = e);
                        }
                    }));
                }));
            },
            processEvent: (t, e, n) => (function(t, e) {
                try {
                    e.exception.values.forEach((e => {
                        if (e.stacktrace) for (const n of e.stacktrace.frames || []) {
                            if (!n.filename) continue;
                            const e = Pc(t, n.filename);
                            e && (n.module_metadata = e);
                        }
                    }));
                } catch (t) {}
            }(n.getOptions().stackParser, t), t)
        }), $c = yi(jc, Fc), Bc = "sentry.source", Uc = "sentry.sample_rate", Hc = "sentry.op", qc = "sentry.origin";
        function zc(t) {
            return (t || wo()).getScope().getTransaction();
        }
        const Wc = Kr;
        let Gc = !1;
        function Yc() {
            const t = zc();
            if (t) {
                const e = "internal_error";
                kr && Dn.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e);
            }
        }
        function Vc(t, e, n = (() => {})) {
            let r;
            try {
                r = t();
            } catch (t) {
                throw e(t), n(), t;
            }
            return function(t, e, n) {
                return Gn(t) ? t.then((t => (n(), t)), (t => {
                    throw e(t), n(), t;
                })) : (n(), t);
            }(r, e, n);
        }
        function Jc(t) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
            const e = ii(), n = t || e && e.getOptions();
            return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n);
        }
        function Kc(t, e, n = (() => {}), r = (() => {})) {
            const o = wo(), i = ai(), s = i.getSpan(), a = ru(t), c = nu(o, {
                parentSpan: s,
                spanContext: a,
                forceTransaction: !1,
                scope: i
            });
            return i.setSpan(c), Vc((() => e(c)), (t => {
                c && c.setStatus("internal_error"), n(t, c);
            }), (() => {
                c && c.end(), i.setSpan(s), r();
            }));
        }
        function Xc(t, e) {
            const n = ru(t);
            return ko((() => Qo(t.scope, (r => {
                const o = wo(), i = r.getSpan(), s = t.onlyIfParent && !i ? void 0 : nu(o, {
                    parentSpan: i,
                    spanContext: n,
                    forceTransaction: t.forceTransaction,
                    scope: r
                });
                return Vc((() => e(s)), (() => {
                    if (s) {
                        const {status: t} = oo(s);
                        t && "ok" !== t || s.setStatus("internal_error");
                    }
                }), (() => s && s.end()));
            }))));
        }
        function Qc(t, e) {
            const n = ru(t);
            return ko((() => Qo(t.scope, (r => {
                const o = wo(), i = r.getSpan(), s = t.onlyIfParent && !i ? void 0 : nu(o, {
                    parentSpan: i,
                    spanContext: n,
                    forceTransaction: t.forceTransaction,
                    scope: r
                });
                function a() {
                    s && s.end();
                }
                return Vc((() => e(s, a)), (() => {
                    if (s && s.isRecording()) {
                        const {status: t} = oo(s);
                        t && "ok" !== t || s.setStatus("internal_error");
                    }
                }));
            }))));
        }
        function Zc(t) {
            if (!Jc()) return;
            const e = ru(t), n = wo(), r = t.scope ? t.scope.getSpan() : tu();
            if (t.onlyIfParent && !r) return;
            const o = (t.scope || ai()).clone();
            return nu(n, {
                parentSpan: r,
                spanContext: e,
                forceTransaction: t.forceTransaction,
                scope: o
            });
        }
        function tu() {
            return ai().getSpan();
        }
        Yc.tag = "sentry_tracingErrorCallback";
        const eu = ({sentryTrace: t, baggage: e}, n) => {
            const r = ai(), {traceparentData: o, dynamicSamplingContext: i, propagationContext: s} = function(t, e) {
                const n = Kr(t), r = Gr(e), {traceId: o, parentSpanId: i, parentSampled: s} = n || {};
                return n ? {
                    traceparentData: n,
                    dynamicSamplingContext: r || {},
                    propagationContext: {
                        traceId: o || yr(),
                        parentSpanId: i || yr().substring(16),
                        spanId: yr().substring(16),
                        sampled: s,
                        dsc: r || {}
                    }
                } : {
                    traceparentData: n,
                    dynamicSamplingContext: void 0,
                    propagationContext: {
                        traceId: o || yr(),
                        spanId: yr().substring(16)
                    }
                };
            }(t, e);
            r.setPropagationContext(s), kr && o && Dn.log(`[Tracing] Continuing trace ${o.traceId}.`);
            const a = {
                ...o,
                metadata: mr({
                    dynamicSamplingContext: i
                })
            };
            return n ? ko((() => n(a))) : a;
        };
        function nu(t, {parentSpan: e, spanContext: n, forceTransaction: r, scope: o}) {
            if (!Jc()) return;
            const i = So();
            let s;
            if (e && !r) s = e.startChild(n); else if (e) {
                const r = ao(e), {traceId: o, spanId: i} = e.spanContext(), a = io(e);
                s = t.startTransaction({
                    traceId: o,
                    parentSpanId: i,
                    parentSampled: a,
                    ...n,
                    metadata: {
                        dynamicSamplingContext: r,
                        ...n.metadata
                    }
                });
            } else {
                const {traceId: e, dsc: r, parentSpanId: a, sampled: c} = {
                    ...i.getPropagationContext(),
                    ...o.getPropagationContext()
                };
                s = t.startTransaction({
                    traceId: e,
                    parentSpanId: a,
                    parentSampled: c,
                    ...n,
                    metadata: {
                        dynamicSamplingContext: r,
                        ...n.metadata
                    }
                });
            }
            return o.setSpan(s), function(t, e, n) {
                t && (ur(t, iu, n), ur(t, ou, e));
            }(s, o, i), s;
        }
        function ru(t) {
            if (t.startTime) {
                const e = {
                    ...t
                };
                return e.startTimestamp = no(t.startTime), delete e.startTime, e;
            }
            return t;
        }
        const ou = "_sentryScope", iu = "_sentryIsolationScope";
        let su;
        function au(t) {
            return su ? su.get(t) : void 0;
        }
        function cu(t) {
            const e = au(t);
            if (!e) return;
            const n = {};
            for (const [, [t, r]] of e) n[t] || (n[t] = []), n[t].push(mr(r));
            return n;
        }
        var uu;
        function lu(t) {
            if (t < 400 && t >= 100) return "ok";
            if (t >= 400 && t < 500) switch (t) {
              case 401:
                return "unauthenticated";

              case 403:
                return "permission_denied";

              case 404:
                return "not_found";

              case 409:
                return "already_exists";

              case 413:
                return "failed_precondition";

              case 429:
                return "resource_exhausted";

              default:
                return "invalid_argument";
            }
            if (t >= 500 && t < 600) switch (t) {
              case 501:
                return "unimplemented";

              case 503:
                return "unavailable";

              case 504:
                return "deadline_exceeded";

              default:
                return "internal_error";
            }
            return "unknown_error";
        }
        !function(t) {
            t.Ok = "ok", t.DeadlineExceeded = "deadline_exceeded", t.Unauthenticated = "unauthenticated", 
            t.PermissionDenied = "permission_denied", t.NotFound = "not_found", t.ResourceExhausted = "resource_exhausted", 
            t.InvalidArgument = "invalid_argument", t.Unimplemented = "unimplemented", t.Unavailable = "unavailable", 
            t.InternalError = "internal_error", t.UnknownError = "unknown_error", t.Cancelled = "cancelled", 
            t.AlreadyExists = "already_exists", t.FailedPrecondition = "failed_precondition", 
            t.Aborted = "aborted", t.OutOfRange = "out_of_range", t.DataLoss = "data_loss";
        }(uu || (uu = {}));
        const du = lu;
        function pu(t, e) {
            t.setTag("http.status_code", String(e)), t.setData("http.response.status_code", e);
            const n = lu(e);
            "unknown_error" !== n && t.setStatus(n);
        }
        class hu {
            constructor(t = 1e3) {
                this._maxlen = t, this.spans = [];
            }
            add(t) {
                this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t);
            }
        }
        class fu {
            constructor(t = {}) {
                this._traceId = t.traceId || yr(), this._spanId = t.spanId || yr().substring(16), 
                this._startTime = t.startTimestamp || Dr(), this.tags = t.tags ? {
                    ...t.tags
                } : {}, this.data = t.data ? {
                    ...t.data
                } : {}, this.instrumenter = t.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
                    [qc]: t.origin || "manual",
                    [Hc]: t.op,
                    ...t.attributes
                }), this._name = t.name || t.description, t.parentSpanId && (this._parentSpanId = t.parentSpanId), 
                "sampled" in t && (this._sampled = t.sampled), t.status && (this._status = t.status), 
                t.endTimestamp && (this._endTime = t.endTimestamp), void 0 !== t.exclusiveTime && (this._exclusiveTime = t.exclusiveTime), 
                this._measurements = t.measurements ? {
                    ...t.measurements
                } : {};
            }
            get name() {
                return this._name || "";
            }
            set name(t) {
                this.updateName(t);
            }
            get description() {
                return this._name;
            }
            set description(t) {
                this._name = t;
            }
            get traceId() {
                return this._traceId;
            }
            set traceId(t) {
                this._traceId = t;
            }
            get spanId() {
                return this._spanId;
            }
            set spanId(t) {
                this._spanId = t;
            }
            set parentSpanId(t) {
                this._parentSpanId = t;
            }
            get parentSpanId() {
                return this._parentSpanId;
            }
            get sampled() {
                return this._sampled;
            }
            set sampled(t) {
                this._sampled = t;
            }
            get attributes() {
                return this._attributes;
            }
            set attributes(t) {
                this._attributes = t;
            }
            get startTimestamp() {
                return this._startTime;
            }
            set startTimestamp(t) {
                this._startTime = t;
            }
            get endTimestamp() {
                return this._endTime;
            }
            set endTimestamp(t) {
                this._endTime = t;
            }
            get status() {
                return this._status;
            }
            set status(t) {
                this._status = t;
            }
            get op() {
                return this._attributes[Hc];
            }
            set op(t) {
                this.setAttribute(Hc, t);
            }
            get origin() {
                return this._attributes[qc];
            }
            set origin(t) {
                this.setAttribute(qc, t);
            }
            spanContext() {
                const {_spanId: t, _traceId: e, _sampled: n} = this;
                return {
                    spanId: t,
                    traceId: e,
                    traceFlags: n ? 1 : 0
                };
            }
            startChild(t) {
                const e = new fu({
                    ...t,
                    parentSpanId: this._spanId,
                    sampled: this._sampled,
                    traceId: this._traceId
                });
                e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e);
                const n = Ur(this);
                if (e.transaction = n, kr && n) {
                    const r = `[Tracing] Starting '${t && t.op || "< unknown op >"}' span on transaction '${oo(e).description || "< unknown name >"}' (${n.spanContext().spanId}).`;
                    Dn.log(r), this._logMessage = r;
                }
                return e;
            }
            setTag(t, e) {
                return this.tags = {
                    ...this.tags,
                    [t]: e
                }, this;
            }
            setData(t, e) {
                return this.data = {
                    ...this.data,
                    [t]: e
                }, this;
            }
            setAttribute(t, e) {
                void 0 === e ? delete this._attributes[t] : this._attributes[t] = e;
            }
            setAttributes(t) {
                Object.keys(t).forEach((e => this.setAttribute(e, t[e])));
            }
            setStatus(t) {
                return this._status = t, this;
            }
            setHttpStatus(t) {
                return pu(this, t), this;
            }
            setName(t) {
                this.updateName(t);
            }
            updateName(t) {
                return this._name = t, this;
            }
            isSuccess() {
                return "ok" === this._status;
            }
            finish(t) {
                return this.end(t);
            }
            end(t) {
                if (this._endTime) return;
                const e = Ur(this);
                if (kr && e && e.spanContext().spanId !== this._spanId) {
                    const t = this._logMessage;
                    t && Dn.log(t.replace("Starting", "Finishing"));
                }
                this._endTime = no(t);
            }
            toTraceparent() {
                return eo(this);
            }
            toContext() {
                return mr({
                    data: this._getData(),
                    description: this._name,
                    endTimestamp: this._endTime,
                    op: this.op,
                    parentSpanId: this._parentSpanId,
                    sampled: this._sampled,
                    spanId: this._spanId,
                    startTimestamp: this._startTime,
                    status: this._status,
                    tags: this.tags,
                    traceId: this._traceId
                });
            }
            updateWithContext(t) {
                return this.data = t.data || {}, this._name = t.name || t.description, this._endTime = t.endTimestamp, 
                this.op = t.op, this._parentSpanId = t.parentSpanId, this._sampled = t.sampled, 
                this._spanId = t.spanId || this._spanId, this._startTime = t.startTimestamp || this._startTime, 
                this._status = t.status, this.tags = t.tags || {}, this._traceId = t.traceId || this._traceId, 
                this;
            }
            getTraceContext() {
                return to(this);
            }
            getSpanJSON() {
                return mr({
                    data: this._getData(),
                    description: this._name,
                    op: this._attributes[Hc],
                    parent_span_id: this._parentSpanId,
                    span_id: this._spanId,
                    start_timestamp: this._startTime,
                    status: this._status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this._endTime,
                    trace_id: this._traceId,
                    origin: this._attributes[qc],
                    _metrics_summary: cu(this),
                    profile_id: this._attributes.profile_id,
                    exclusive_time: this._exclusiveTime,
                    measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
                });
            }
            isRecording() {
                return !this._endTime && !!this._sampled;
            }
            toJSON() {
                return this.getSpanJSON();
            }
            _getData() {
                const {data: t, _attributes: e} = this, n = Object.keys(t).length > 0, r = Object.keys(e).length > 0;
                if (n || r) return n && r ? {
                    ...t,
                    ...e
                } : n ? t : e;
            }
        }
        class mu extends fu {
            constructor(t, e) {
                super(t), this._contexts = {}, this._hub = e || wo(), this._name = t.name || "", 
                this._metadata = {
                    ...t.metadata
                }, this._trimEnd = t.trimEnd, this.transaction = this;
                const n = this._metadata.dynamicSamplingContext;
                n && (this._frozenDynamicSamplingContext = {
                    ...n
                });
            }
            get name() {
                return this._name;
            }
            set name(t) {
                this.setName(t);
            }
            get metadata() {
                return {
                    source: "custom",
                    spanMetadata: {},
                    ...this._metadata,
                    ...this._attributes[Bc] && {
                        source: this._attributes[Bc]
                    },
                    ...this._attributes[Uc] && {
                        sampleRate: this._attributes[Uc]
                    }
                };
            }
            set metadata(t) {
                this._metadata = t;
            }
            setName(t, e = "custom") {
                this._name = t, this.setAttribute(Bc, e);
            }
            updateName(t) {
                return this._name = t, this;
            }
            initSpanRecorder(t = 1e3) {
                this.spanRecorder || (this.spanRecorder = new hu(t)), this.spanRecorder.add(this);
            }
            setContext(t, e) {
                null === e ? delete this._contexts[t] : this._contexts[t] = e;
            }
            setMeasurement(t, e, n = "") {
                this._measurements[t] = {
                    value: e,
                    unit: n
                };
            }
            setMetadata(t) {
                this._metadata = {
                    ...this._metadata,
                    ...t
                };
            }
            end(t) {
                const e = no(t), n = this._finishTransaction(e);
                if (n) return this._hub.captureEvent(n);
            }
            toContext() {
                return mr({
                    ...super.toContext(),
                    name: this._name,
                    trimEnd: this._trimEnd
                });
            }
            updateWithContext(t) {
                return super.updateWithContext(t), this._name = t.name || "", this._trimEnd = t.trimEnd, 
                this;
            }
            getDynamicSamplingContext() {
                return ao(this);
            }
            setHub(t) {
                this._hub = t;
            }
            getProfileId() {
                if (void 0 !== this._contexts && void 0 !== this._contexts.profile) return this._contexts.profile.profile_id;
            }
            _finishTransaction(t) {
                if (void 0 !== this._endTime) return;
                this._name || (kr && Dn.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), 
                this._name = "<unlabeled transaction>"), super.end(t);
                const e = this._hub.getClient();
                if (e && e.emit && e.emit("finishTransaction", this), !0 !== this._sampled) return kr && Dn.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), 
                void (e && e.recordDroppedEvent("sample_rate", "transaction"));
                const n = this.spanRecorder ? this.spanRecorder.spans.filter((t => t !== this && oo(t).timestamp)) : [];
                if (this._trimEnd && n.length > 0) {
                    const t = n.map((t => oo(t).timestamp)).filter(Boolean);
                    this._endTime = t.reduce(((t, e) => t > e ? t : e));
                }
                const {scope: r, isolationScope: o} = {
                    scope: this[ou],
                    isolationScope: this[iu]
                };
                const {metadata: s} = this, {source: a} = s, c = {
                    contexts: {
                        ...this._contexts,
                        trace: to(this)
                    },
                    spans: n,
                    start_timestamp: this._startTime,
                    tags: this.tags,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        ...s,
                        capturedSpanScope: r,
                        capturedSpanIsolationScope: o,
                        ...mr({
                            dynamicSamplingContext: ao(this)
                        })
                    },
                    _metrics_summary: cu(this),
                    ...a && {
                        transaction_info: {
                            source: a
                        }
                    }
                };
                return Object.keys(this._measurements).length > 0 && (kr && Dn.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), 
                c.measurements = this._measurements), kr && Dn.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), 
                c;
            }
        }
        const gu = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            heartbeatInterval: 5e3
        }, yu = [ "heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled" ];
        class vu extends hu {
            constructor(t, e, n, r) {
                super(r), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n;
            }
            add(t) {
                if (t.spanContext().spanId !== this.transactionSpanId) {
                    const e = t.end;
                    t.end = (...n) => (this._popActivity(t.spanContext().spanId), e.apply(t, n)), void 0 === oo(t).timestamp && this._pushActivity(t.spanContext().spanId);
                }
                super.add(t);
            }
        }
        class bu extends mu {
            constructor(t, e, n = gu.idleTimeout, r = gu.finalTimeout, o = gu.heartbeatInterval, i = !1, s = !1) {
                super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = r, this._heartbeatInterval = o, 
                this._onScope = i, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, 
                this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = yu[4], 
                this._autoFinishAllowed = !s, i && (kr && Dn.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), 
                e.getScope().setSpan(this)), s || this._restartIdleTimeout(), setTimeout((() => {
                    this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = yu[3], 
                    this.end());
                }), this._finalTimeout);
            }
            end(t) {
                const e = no(t);
                if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setAttribute("finishReason", this._finishReason), 
                this.spanRecorder) {
                    kr && Dn.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
                    for (const t of this._beforeFinishCallbacks) t(this, e);
                    this.spanRecorder.spans = this.spanRecorder.spans.filter((t => {
                        if (t.spanContext().spanId === this.spanContext().spanId) return !0;
                        oo(t).timestamp || (t.setStatus("cancelled"), t.end(e), kr && Dn.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, void 0, 2)));
                        const {start_timestamp: n, timestamp: r} = oo(t), o = n && n < e, i = (this._finalTimeout + this._idleTimeout) / 1e3, s = r && n && r - n < i;
                        if (kr) {
                            const e = JSON.stringify(t, void 0, 2);
                            o ? s || Dn.log("[Tracing] discarding Span since it finished after Transaction final timeout", e) : Dn.log("[Tracing] discarding Span since it happened after Transaction was finished", e);
                        }
                        return o && s;
                    })), kr && Dn.log("[Tracing] flushing IdleTransaction");
                } else kr && Dn.log("[Tracing] No active IdleTransaction");
                if (this._onScope) {
                    const t = this._idleHub.getScope();
                    t.getTransaction() === this && t.setSpan(void 0);
                }
                return super.end(t);
            }
            registerBeforeFinishCallback(t) {
                this._beforeFinishCallbacks.push(t);
            }
            initSpanRecorder(t) {
                if (!this.spanRecorder) {
                    const e = t => {
                        this._finished || this._pushActivity(t);
                    }, n = t => {
                        this._finished || this._popActivity(t);
                    };
                    this.spanRecorder = new vu(e, n, this.spanContext().spanId, t), kr && Dn.log("Starting heartbeat"), 
                    this._pingHeartbeat();
                }
                this.spanRecorder.add(this);
            }
            cancelIdleTimeout(t, {restartOnChildSpanChange: e} = {
                restartOnChildSpanChange: !0
            }) {
                this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), 
                this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = yu[5], 
                this.end(t)));
            }
            setFinishReason(t) {
                this._finishReason = t;
            }
            sendAutoFinishSignal() {
                this._autoFinishAllowed || (kr && Dn.log("[Tracing] Received finish signal for idle transaction."), 
                this._restartIdleTimeout(), this._autoFinishAllowed = !0);
            }
            _restartIdleTimeout(t) {
                this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout((() => {
                    this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = yu[1], 
                    this.end(t));
                }), this._idleTimeout);
            }
            _pushActivity(t) {
                this.cancelIdleTimeout(void 0, {
                    restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                }), kr && Dn.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, kr && Dn.log("[Tracing] new activities count", Object.keys(this.activities).length);
            }
            _popActivity(t) {
                if (this.activities[t] && (kr && Dn.log(`[Tracing] popActivity ${t}`), delete this.activities[t], 
                kr && Dn.log("[Tracing] new activities count", Object.keys(this.activities).length)), 
                0 === Object.keys(this.activities).length) {
                    const t = Dr();
                    this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = yu[5], 
                    this.end(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3);
                }
            }
            _beat() {
                if (this._finished) return;
                const t = Object.keys(this.activities).join("");
                t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, 
                this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (kr && Dn.log("[Tracing] Transaction finished because of no change for 3 heart beats"), 
                this.setStatus("deadline_exceeded"), this._finishReason = yu[0], this.end()) : this._pingHeartbeat();
            }
            _pingHeartbeat() {
                kr && Dn.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), 
                setTimeout((() => {
                    this._beat();
                }), this._heartbeatInterval);
            }
        }
        function _u(t, e, n) {
            if (!Jc(e)) return t.sampled = !1, t;
            if (void 0 !== t.sampled) return t.setAttribute(Uc, Number(t.sampled)), t;
            let r;
            return "function" == typeof e.tracesSampler ? (r = e.tracesSampler(n), t.setAttribute(Uc, Number(r))) : void 0 !== n.parentSampled ? r = n.parentSampled : void 0 !== e.tracesSampleRate ? (r = e.tracesSampleRate, 
            t.setAttribute(Uc, Number(r))) : (r = 1, t.setAttribute(Uc, r)), wu(r) ? r ? (t.sampled = Math.random() < r, 
            t.sampled ? (kr && Dn.log(`[Tracing] starting ${t.op} transaction - ${oo(t).description}`), 
            t) : (kr && Dn.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), 
            t)) : (kr && Dn.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), 
            t.sampled = !1, t) : (kr && Dn.warn("[Tracing] Discarding transaction because of invalid sample rate."), 
            t.sampled = !1, t);
        }
        function wu(t) {
            return Yn(t) || "number" != typeof t && "boolean" != typeof t ? (kr && Dn.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), 
            !1) : !(t < 0 || t > 1) || (kr && Dn.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), 
            !1);
        }
        function Su() {
            const t = this.getScope().getSpan();
            return t ? {
                "sentry-trace": eo(t)
            } : {};
        }
        function xu(t, e) {
            const n = this.getClient(), r = n && n.getOptions() || {}, o = r.instrumenter || "sentry", i = t.instrumenter || "sentry";
            o !== i && (kr && Dn.error(`A transaction was started with instrumenter=\`${i}\`, but the SDK is configured with the \`${o}\` instrumenter.\nThe transaction will not be sampled. Please use the ${o} instrumentation to start transactions.`), 
            t.sampled = !1);
            let s = new mu(t, this);
            return s = _u(s, r, {
                name: t.name,
                parentSampled: t.parentSampled,
                transactionContext: t,
                attributes: {
                    ...t.data,
                    ...t.attributes
                },
                ...e
            }), s.isRecording() && s.initSpanRecorder(r._experiments && r._experiments.maxSpans), 
            n && n.emit && n.emit("startTransaction", s), s;
        }
        function ku(t, e, n, r, o, i, s, a = !1) {
            const c = t.getClient(), u = c && c.getOptions() || {};
            let l = new bu(e, t, n, r, s, o, a);
            return l = _u(l, u, {
                name: e.name,
                parentSampled: e.parentSampled,
                transactionContext: e,
                attributes: {
                    ...e.data,
                    ...e.attributes
                },
                ...i
            }), l.isRecording() && l.initSpanRecorder(u._experiments && u._experiments.maxSpans), 
            c && c.emit && c.emit("startTransaction", l), l;
        }
        function Eu() {
            const t = bo();
            t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = xu), 
            t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = Su), 
            Gc || (Gc = !0, ya(Yc), _a(Yc)));
        }
        function Tu(t, e) {
            let n;
            return es(t, ((t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), 
            !!n))), n;
        }
        function Iu(t, e) {
            return n => {
                const r = t(n), o = new Map;
                function i(e, r) {
                    const i = r ? `${e}:${r}` : e;
                    let s = o.get(i);
                    if (!s) {
                        const a = Ai(e);
                        if (!a) return;
                        const c = Fi(a, n.tunnel);
                        s = r ? function(t, e) {
                            return n => {
                                const r = t(n);
                                return {
                                    ...r,
                                    send: async t => {
                                        const n = Tu(t, [ "event", "transaction", "profile", "replay_event" ]);
                                        return n && (n.release = e), r.send(t);
                                    }
                                };
                            };
                        }(t, r)({
                            ...n,
                            url: c
                        }) : t({
                            ...n,
                            url: c
                        }), o.set(i, s);
                    }
                    return [ e, s ];
                }
                return {
                    send: async function(t) {
                        const n = e({
                            envelope: t,
                            getEvent: function(e) {
                                const n = e && e.length ? e : [ "event" ];
                                return Tu(t, n);
                            }
                        }).map((t => "string" == typeof t ? i(t, void 0) : i(t.dsn, t.release))).filter((t => !!t));
                        return 0 === n.length && n.push([ "", r ]), (await Promise.all(n.map((([e, n]) => n.send(function(t, e) {
                            return Zi(e ? {
                                ...t[0],
                                dsn: e
                            } : t[0], t[1]);
                        }(t, e))))))[0];
                    },
                    flush: async function(t) {
                        const e = [ await r.flush(t) ];
                        for (const [, n] of o) e.push(await n.flush(t));
                        return e.every((t => t));
                    }
                };
            };
        }
        const Cu = {
            c: class {
                constructor(t) {
                    this._value = t;
                }
                get weight() {
                    return 1;
                }
                add(t) {
                    this._value += t;
                }
                toString() {
                    return `${this._value}`;
                }
            },
            g: class {
                constructor(t) {
                    this._last = t, this._min = t, this._max = t, this._sum = t, this._count = 1;
                }
                get weight() {
                    return 5;
                }
                add(t) {
                    this._last = t, t < this._min && (this._min = t), t > this._max && (this._max = t), 
                    this._sum += t, this._count++;
                }
                toString() {
                    return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
                }
            },
            d: class {
                constructor(t) {
                    this._value = [ t ];
                }
                get weight() {
                    return this._value.length;
                }
                add(t) {
                    this._value.push(t);
                }
                toString() {
                    return this._value.join(":");
                }
            },
            s: class {
                constructor(t) {
                    this.first = t, this._value = new Set([ t ]);
                }
                get weight() {
                    return this._value.size;
                }
                add(t) {
                    this._value.add(t);
                }
                toString() {
                    return Array.from(this._value).map((t => "string" == typeof t ? function(t) {
                        let e = 0;
                        for (let n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e &= e;
                        return e >>> 0;
                    }(t) : t)).join(":");
                }
            }
        };
        class Ru {
            constructor(t) {
                this._client = t, this._buckets = new Map, this._interval = setInterval((() => this.flush()), 5e3);
            }
            add(t, e, n, r = "none", o = {}, i = Dr()) {
                const s = Math.floor(i), a = e.replace(/[^\w\-.]+/gi, "_"), c = function(t) {
                    const e = {};
                    for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[ds(n)] = hs(String(t[n])));
                    return e;
                }(o), u = function(t) {
                    return t.replace(/[^\w]+/gi, "_");
                }(r), l = function(t, e, n, r) {
                    return `${t}${e}${n}${Object.entries(mr(r)).sort(((t, e) => t[0].localeCompare(e[0])))}`;
                }(t, a, u, c);
                let d = this._buckets.get(l);
                const p = d && "s" === t ? d.metric.weight : 0;
                d ? (d.metric.add(n), d.timestamp < s && (d.timestamp = s)) : (d = {
                    metric: new Cu[t](n),
                    timestamp: s,
                    metricType: t,
                    name: a,
                    unit: u,
                    tags: c
                }, this._buckets.set(l, d)), function(t, e, n, r, o, i) {
                    const s = tu();
                    if (s) {
                        const a = au(s) || new Map, c = `${t}:${e}@${r}`, u = a.get(i);
                        if (u) {
                            const [, t] = u;
                            a.set(i, [ c, {
                                min: Math.min(t.min, n),
                                max: Math.max(t.max, n),
                                count: t.count += 1,
                                sum: t.sum += n,
                                tags: t.tags
                            } ]);
                        } else a.set(i, [ c, {
                            min: n,
                            max: n,
                            count: 1,
                            sum: n,
                            tags: o
                        } ]);
                        su || (su = new WeakMap), su.set(s, a);
                    }
                }(t, a, "string" == typeof n ? d.metric.weight - p : n, u, o, l);
            }
            flush() {
                if (0 !== this._buckets.size) {
                    if (this._client.captureAggregateMetrics) {
                        const t = Array.from(this._buckets).map((([, t]) => t));
                        this._client.captureAggregateMetrics(t);
                    }
                    this._buckets.clear();
                }
            }
            close() {
                clearInterval(this._interval), this.flush();
            }
        }
        const Ou = "MetricsAggregator", Lu = () => ({
            name: Ou,
            setupOnce() {},
            setup(t) {
                t.metricsAggregator = new Ru(t);
            }
        });
        function Au(t, e, n, r = {}) {
            const o = ii(), i = ai();
            if (o) {
                if (!o.metricsAggregator) return void (kr && Dn.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs"));
                const {unit: s, tags: a, timestamp: c} = r, {release: u, environment: l} = o.getOptions(), d = i.getTransaction(), p = {};
                u && (p.release = u), l && (p.environment = l), d && (p.transaction = oo(d).description || ""), 
                kr && Dn.log(`Adding value of ${n} to ${t} metric ${e}`), o.metricsAggregator.add(t, e, n, s, {
                    ...p,
                    ...a
                }, c);
            }
        }
        const Mu = {
            increment: function(t, e = 1, n) {
                Au("c", t, e, n);
            },
            distribution: function(t, e, n) {
                Au("d", t, e, n);
            },
            set: function(t, e, n) {
                Au("s", t, e, n);
            },
            gauge: function(t, e, n) {
                Au("g", t, e, n);
            },
            MetricsAggregator: yi(Ou, Lu),
            metricsAggregatorIntegration: Lu
        };
        function Nu(t, ...e) {
            const n = new String(String.raw(t, ...e));
            return n.__sentry_template_string__ = t.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), 
            n.__sentry_template_values__ = e, n;
        }
        function Du(t, e, n) {
            const r = zc();
            r && r.setMeasurement(t, e, n);
        }
        function Pu(t) {
            let e, n = t[0], r = 1;
            for (;r < t.length; ) {
                const o = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (e = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...t) => n.call(e, ...t))), 
                e = void 0);
            }
            return n;
        }
        function ju(t, e) {
            const n = e && function(t) {
                return void 0 !== t.getClient;
            }(e) ? e.getClient() : e, r = n && n.getDsn(), o = n && n.getOptions().tunnel;
            return function(t, e) {
                return !!e && t.includes(e.host);
            }(t, r) || function(t, e) {
                return !!e && Fu(t) === Fu(e);
            }(t, o);
        }
        function Fu(t) {
            return "/" === t[t.length - 1] ? t.slice(0, -1) : t;
        }
        var $u = n(728);
        function Bu() {
            return "undefined" != typeof window && (!(0, $u.KV)() || void 0 !== Rn.process && "renderer" === Rn.process.type);
        }
        const Uu = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, Hu = (t, e, n) => {
            let r, o;
            return i => {
                e.value >= 0 && (i || n) && (o = e.value - (r || 0), (o || void 0 === r) && (r = e.value, 
                e.delta = o, t(e)));
            };
        }, qu = Rn, zu = () => qu.__WEB_VITALS_POLYFILL__ ? qu.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
            const t = qu.performance.timing, e = qu.performance.navigation.type, n = {
                entryType: "navigation",
                startTime: 0,
                type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
            };
            for (const e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
            return n;
        })()) : qu.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0], Wu = () => {
            const t = zu();
            return t && t.activationStart || 0;
        }, Gu = (t, e) => {
            const n = zu();
            let r = "navigate";
            return n && (r = qu.document && qu.document.prerendering || Wu() > 0 ? "prerender" : n.type.replace(/_/g, "-")), 
            {
                name: t,
                value: void 0 === e ? -1 : e,
                rating: "good",
                delta: 0,
                entries: [],
                id: `v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
                navigationType: r
            };
        }, Yu = (t, e, n) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    const r = new PerformanceObserver((t => {
                        e(t.getEntries());
                    }));
                    return r.observe(Object.assign({
                        type: t,
                        buffered: !0
                    }, n || {})), r;
                }
            } catch (t) {}
        }, Vu = (t, e) => {
            const n = r => {
                "pagehide" !== r.type && "hidden" !== qu.document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", n, !0), 
                removeEventListener("pagehide", n, !0)));
            };
            qu.document && (addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0));
        };
        let Ku = -1;
        const Xu = () => (Ku < 0 && (qu.document && qu.document.visibilityState && (Ku = "hidden" !== qu.document.visibilityState || qu.document.prerendering ? 1 / 0 : 0), 
        Vu((({timeStamp: t}) => {
            Ku = t;
        }), !0)), {
            get firstHiddenTime() {
                return Ku;
            }
        });
        let Zu = 0, tl = 1 / 0, el = 0;
        const nl = t => {
            t.forEach((t => {
                t.interactionId && (tl = Math.min(tl, t.interactionId), el = Math.max(el, t.interactionId), 
                Zu = el ? (el - tl) / 7 + 1 : 0);
            }));
        };
        let rl;
        const il = () => rl ? Zu : performance.interactionCount || 0, sl = [], al = {}, cl = t => {
            const e = sl[sl.length - 1], n = al[t.interactionId];
            if (n || sl.length < 10 || t.duration > e.latency) {
                if (n) n.entries.push(t), n.latency = Math.max(n.latency, t.duration); else {
                    const e = {
                        id: t.interactionId,
                        latency: t.duration,
                        entries: [ t ]
                    };
                    al[e.id] = e, sl.push(e);
                }
                sl.sort(((t, e) => e.latency - t.latency)), sl.splice(10).forEach((t => {
                    delete al[t.id];
                }));
            }
        }, ul = (t, e) => {
            e = e || {}, "interactionCount" in performance || rl || (rl = Yu("event", nl, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }));
            const n = Gu("INP");
            let r;
            const o = t => {
                t.forEach((t => {
                    t.interactionId && cl(t), "first-input" === t.entryType && !sl.some((e => e.entries.some((e => t.duration === e.duration && t.startTime === e.startTime)))) && cl(t);
                }));
                const e = (() => {
                    const t = Math.min(sl.length - 1, Math.floor(il() / 50));
                    return sl[t];
                })();
                e && e.latency !== n.value && (n.value = e.latency, n.entries = e.entries, r());
            }, i = Yu("event", o, {
                durationThreshold: e.durationThreshold || 40
            });
            r = Hu(t, n, e.reportAllChanges), i && (i.observe({
                type: "first-input",
                buffered: !0
            }), Vu((() => {
                o(i.takeRecords()), n.value < 0 && il() > 0 && (n.value = 0, n.entries = []), r(!0);
            })));
        }, ll = {}, pl = t => {
            qu.document && (qu.document.prerendering ? addEventListener("prerenderingchange", (() => pl(t)), !0) : "complete" !== qu.document.readyState ? addEventListener("load", (() => pl(t)), !0) : setTimeout(t, 0));
        }, fl = {}, ml = {};
        let gl, yl, vl, bl, _l;
        function wl(t, e = !1) {
            return Rl("lcp", t, Tl, vl, e);
        }
        function Sl(t, e) {
            return Ol(t, e), ml[t] || (function(t) {
                const e = {};
                "event" === t && (e.durationThreshold = 0), Yu(t, (e => {
                    xl(t, {
                        entries: e
                    });
                }), e);
            }(t), ml[t] = !0), Ll(t, e);
        }
        function xl(t, e) {
            const n = fl[t];
            if (n && n.length) for (const r of n) try {
                r(e);
            } catch (e) {
                Uu && Dn.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${Mo(r)}\nError:`, e);
            }
        }
        function kl() {
            return ((t, e = {}) => {
                const n = Gu("CLS", 0);
                let r, o = 0, i = [];
                const s = t => {
                    t.forEach((t => {
                        if (!t.hadRecentInput) {
                            const e = i[0], s = i[i.length - 1];
                            o && 0 !== i.length && t.startTime - s.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (o += t.value, 
                            i.push(t)) : (o = t.value, i = [ t ]), o > n.value && (n.value = o, n.entries = i, 
                            r && r());
                        }
                    }));
                }, a = Yu("layout-shift", s);
                if (a) {
                    r = Hu(t, n, e.reportAllChanges);
                    const o = () => {
                        s(a.takeRecords()), r(!0);
                    };
                    return Vu(o), o;
                }
            })((t => {
                xl("cls", {
                    metric: t
                }), gl = t;
            }), {
                reportAllChanges: !0
            });
        }
        function El() {
            return (t => {
                const e = Xu(), n = Gu("FID");
                let r;
                const o = t => {
                    t.startTime < e.firstHiddenTime && (n.value = t.processingStart - t.startTime, n.entries.push(t), 
                    r(!0));
                }, i = t => {
                    t.forEach(o);
                }, s = Yu("first-input", i);
                r = Hu(t, n), s && Vu((() => {
                    i(s.takeRecords()), s.disconnect();
                }), !0);
            })((t => {
                xl("fid", {
                    metric: t
                }), yl = t;
            }));
        }
        function Tl() {
            return (t => {
                const e = Xu(), n = Gu("LCP");
                let r;
                const o = t => {
                    const o = t[t.length - 1];
                    if (o) {
                        const t = Math.max(o.startTime - Wu(), 0);
                        t < e.firstHiddenTime && (n.value = t, n.entries = [ o ], r());
                    }
                }, i = Yu("largest-contentful-paint", o);
                if (i) {
                    r = Hu(t, n);
                    const e = () => {
                        ll[n.id] || (o(i.takeRecords()), i.disconnect(), ll[n.id] = !0, r(!0));
                    };
                    return [ "keydown", "click" ].forEach((t => {
                        qu.document && addEventListener(t, e, {
                            once: !0,
                            capture: !0
                        });
                    })), Vu(e, !0), e;
                }
            })((t => {
                xl("lcp", {
                    metric: t
                }), vl = t;
            }));
        }
        function Il() {
            return ((t, e) => {
                e = e || {};
                const n = Gu("TTFB"), r = Hu(t, n, e.reportAllChanges);
                pl((() => {
                    const t = zu();
                    if (t) {
                        if (n.value = Math.max(t.responseStart - Wu(), 0), n.value < 0 || n.value > performance.now()) return;
                        n.entries = [ t ], r(!0);
                    }
                }));
            })((t => {
                xl("ttfb", {
                    metric: t
                }), bl = t;
            }));
        }
        function Cl() {
            return ul((t => {
                xl("inp", {
                    metric: t
                }), _l = t;
            }));
        }
        function Rl(t, e, n, r, o = !1) {
            let i;
            return Ol(t, e), ml[t] || (i = n(), ml[t] = !0), r && e({
                metric: r
            }), Ll(t, e, o ? i : void 0);
        }
        function Ol(t, e) {
            fl[t] = fl[t] || [], fl[t].push(e);
        }
        function Ll(t, e, n) {
            return () => {
                n && n();
                const r = fl[t];
                if (!r) return;
                const o = r.indexOf(e);
                -1 !== o && r.splice(o, 1);
            };
        }
        const Al = Rn, Ml = "sentryReplaySession", Dl = "Unable to send Replay";
        function Bl(t) {
            let e, n = t[0], r = 1;
            for (;r < t.length; ) {
                const o = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (e = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...t) => n.call(e, ...t))), 
                e = void 0);
            }
            return n;
        }
        var Ul;
        function Hl(t) {
            const e = Bl([ t, "optionalAccess", t => t.host ]);
            return Boolean(Bl([ e, "optionalAccess", t => t.shadowRoot ]) === t);
        }
        function ql(t) {
            return "[object ShadowRoot]" === Object.prototype.toString.call(t);
        }
        function zl(t) {
            try {
                const n = t.rules || t.cssRules;
                return n ? ((e = Array.from(n, Wl).join("")).includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), 
                e) : null;
            } catch (t) {
                return null;
            }
            var e;
        }
        function Wl(t) {
            let e;
            if (function(t) {
                return "styleSheet" in t;
            }(t)) try {
                e = zl(t.styleSheet) || function(t) {
                    const {cssText: e} = t;
                    if (e.split('"').length < 3) return e;
                    const n = [ "@import", `url(${JSON.stringify(t.href)})` ];
                    return "" === t.layerName ? n.push("layer") : t.layerName && n.push(`layer(${t.layerName})`), 
                    t.supportsText && n.push(`supports(${t.supportsText})`), t.media.length && n.push(t.media.mediaText), 
                    n.join(" ") + ";";
                }(t);
            } catch (t) {} else if (function(t) {
                return "selectorText" in t;
            }(t) && t.selectorText.includes(":")) return function(t) {
                return t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
            }(t.cssText);
            return e || t.cssText;
        }
        !function(t) {
            t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", 
            t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
        }(Ul || (Ul = {}));
        class Gl {
            constructor() {
                this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap;
            }
            getId(t) {
                if (!t) return -1;
                return () => -1, null != (n = Bl([ this, "access", t => t.getMeta, "call", e => e(t), "optionalAccess", t => t.id ])) ? n : -1;
                var n;
            }
            getNode(t) {
                return this.idNodeMap.get(t) || null;
            }
            getIds() {
                return Array.from(this.idNodeMap.keys());
            }
            getMeta(t) {
                return this.nodeMetaMap.get(t) || null;
            }
            removeNodeFromMap(t) {
                const e = this.getId(t);
                this.idNodeMap.delete(e), t.childNodes && t.childNodes.forEach((t => this.removeNodeFromMap(t)));
            }
            has(t) {
                return this.idNodeMap.has(t);
            }
            hasNode(t) {
                return this.nodeMetaMap.has(t);
            }
            add(t, e) {
                const n = e.id;
                this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, e);
            }
            replace(t, e) {
                const n = this.getNode(t);
                if (n) {
                    const t = this.nodeMetaMap.get(n);
                    t && this.nodeMetaMap.set(e, t);
                }
                this.idNodeMap.set(t, e);
            }
            reset() {
                this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap;
            }
        }
        function Yl({maskInputOptions: t, tagName: e, type: n}) {
            return "OPTION" === e && (e = "SELECT"), Boolean(t[e.toLowerCase()] || n && t[n] || "password" === n || "INPUT" === e && !n && t.text);
        }
        function Vl({isMasked: t, element: e, value: n, maskInputFn: r}) {
            let o = n || "";
            return t ? (r && (o = r(o, e)), "*".repeat(o.length)) : o;
        }
        function Jl(t) {
            return t.toLowerCase();
        }
        function Kl(t) {
            return t.toUpperCase();
        }
        const Xl = "__rrweb_original__";
        function Ql(t) {
            const e = t.type;
            return t.hasAttribute("data-rr-is-password") ? "password" : e ? Jl(e) : null;
        }
        function Zl(t, e, n) {
            return "INPUT" !== e || "radio" !== n && "checkbox" !== n ? t.value : t.getAttribute("value") || "";
        }
        let td = 1;
        const ed = new RegExp("[^a-z0-9-_:]");
        function rd() {
            return td++;
        }
        let od, id;
        const sd = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, ad = /^(?:[a-z+]+:)?\/\//i, cd = /^www\..*/i, ud = /^(data:)([^,]*),(.*)/i;
        function ld(t, e) {
            return (t || "").replace(sd, ((t, n, r, o, i, s) => {
                const a = r || i || s, c = n || o || "";
                if (!a) return t;
                if (ad.test(a) || cd.test(a)) return `url(${c}${a}${c})`;
                if (ud.test(a)) return `url(${c}${a}${c})`;
                if ("/" === a[0]) return `url(${c}${function(t) {
                    let e = "";
                    return e = t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0], 
                    e = e.split("?")[0], e;
                }(e) + a}${c})`;
                const u = e.split("/"), l = a.split("/");
                u.pop();
                for (const t of l) "." !== t && (".." === t ? u.pop() : u.push(t));
                return `url(${c}${u.join("/")}${c})`;
            }));
        }
        const dd = /^[^ \t\n\r\u000c]+/, pd = /^[, \t\n\r\u000c]+/;
        function hd(t, e) {
            if (!e || "" === e.trim()) return e;
            const n = t.createElement("a");
            return n.href = e, n.href;
        }
        function fd(t) {
            return Boolean("svg" === t.tagName || t.ownerSVGElement);
        }
        function md() {
            const t = document.createElement("a");
            return t.href = "", t.href;
        }
        function gd(t, e, n, r, o, i) {
            return r ? "src" === n || "href" === n && ("use" !== e || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] ? hd(t, r) : "background" !== n || "table" !== e && "td" !== e && "th" !== e ? "srcset" === n ? function(t, e) {
                if ("" === e.trim()) return e;
                let n = 0;
                function r(t) {
                    let r;
                    const o = t.exec(e.substring(n));
                    return o ? (r = o[0], n += r.length, r) : "";
                }
                const o = [];
                for (;r(pd), !(n >= e.length); ) {
                    let i = r(dd);
                    if ("," === i.slice(-1)) i = hd(t, i.substring(0, i.length - 1)), o.push(i); else {
                        let r = "";
                        i = hd(t, i);
                        let s = !1;
                        for (;;) {
                            const t = e.charAt(n);
                            if ("" === t) {
                                o.push((i + r).trim());
                                break;
                            }
                            if (s) ")" === t && (s = !1); else {
                                if ("," === t) {
                                    n += 1, o.push((i + r).trim());
                                    break;
                                }
                                "(" === t && (s = !0);
                            }
                            r += t, n += 1;
                        }
                    }
                }
                return o.join(", ");
            }(t, r) : "style" === n ? ld(r, md()) : "object" === e && "data" === n ? hd(t, r) : "function" == typeof i ? i(n, r, o) : r : hd(t, r) : r;
        }
        function yd(t, e, n) {
            return ("video" === t || "audio" === t) && "autoplay" === e;
        }
        function vd(t, e, n = 1 / 0, r = 0) {
            return t ? t.nodeType !== t.ELEMENT_NODE || r > n ? -1 : e(t) ? r : vd(t.parentNode, e, n, r + 1) : -1;
        }
        function bd(t, e) {
            return n => {
                const r = n;
                if (null === r) return !1;
                try {
                    if (t) if ("string" == typeof t) {
                        if (r.matches(`.${t}`)) return !0;
                    } else if (function(t, e) {
                        for (let n = t.classList.length; n--; ) {
                            const r = t.classList[n];
                            if (e.test(r)) return !0;
                        }
                        return !1;
                    }(r, t)) return !0;
                    return !(!e || !r.matches(e));
                } catch (t) {
                    return !1;
                }
            };
        }
        function _d(t, e, n, r, o, i) {
            try {
                const s = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
                if (null === s) return !1;
                if ("INPUT" === s.tagName) {
                    const t = s.getAttribute("autocomplete");
                    if ([ "current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc" ].includes(t)) return !0;
                }
                let a = -1, c = -1;
                if (i) {
                    if (c = vd(s, bd(r, o)), c < 0) return !0;
                    a = vd(s, bd(e, n), c >= 0 ? c : 1 / 0);
                } else {
                    if (a = vd(s, bd(e, n)), a < 0) return !1;
                    c = vd(s, bd(r, o), a >= 0 ? a : 1 / 0);
                }
                return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0 || !i);
            } catch (t) {}
            return !!i;
        }
        function Sd(t) {
            return null == t ? "" : t.toLowerCase();
        }
        function xd(t, e) {
            const {doc: n, mirror: r, blockClass: o, blockSelector: i, unblockSelector: s, maskAllText: a, maskTextClass: c, unmaskTextClass: u, maskTextSelector: l, unmaskTextSelector: d, skipChild: p = !1, inlineStylesheet: h = !0, maskInputOptions: f = {}, maskAttributeFn: m, maskTextFn: g, maskInputFn: y, slimDOMOptions: v, dataURLOptions: b = {}, inlineImages: _ = !1, recordCanvas: w = !1, onSerialize: S, onIframeLoad: x, iframeLoadTimeout: k = 5e3, onStylesheetLoad: E, stylesheetLoadTimeout: T = 5e3, keepIframeSrcFn: I = (() => !1), newlyAddedElement: C = !1} = e;
            let {preserveWhiteSpace: R = !0} = e;
            const O = function(t, e) {
                const {doc: n, mirror: r, blockClass: o, blockSelector: i, unblockSelector: s, maskAllText: a, maskAttributeFn: c, maskTextClass: u, unmaskTextClass: l, maskTextSelector: d, unmaskTextSelector: p, inlineStylesheet: h, maskInputOptions: f = {}, maskTextFn: m, maskInputFn: g, dataURLOptions: y = {}, inlineImages: v, recordCanvas: b, keepIframeSrcFn: _, newlyAddedElement: w = !1} = e, S = function(t, e) {
                    if (!e.hasNode(t)) return;
                    const n = e.getId(t);
                    return 1 === n ? void 0 : n;
                }(n, r);
                switch (t.nodeType) {
                  case t.DOCUMENT_NODE:
                    return "CSS1Compat" !== t.compatMode ? {
                        type: Ul.Document,
                        childNodes: [],
                        compatMode: t.compatMode
                    } : {
                        type: Ul.Document,
                        childNodes: []
                    };

                  case t.DOCUMENT_TYPE_NODE:
                    return {
                        type: Ul.DocumentType,
                        name: t.name,
                        publicId: t.publicId,
                        systemId: t.systemId,
                        rootId: S
                    };

                  case t.ELEMENT_NODE:
                    return function(t, e) {
                        const {doc: n, blockClass: r, blockSelector: o, unblockSelector: i, inlineStylesheet: s, maskInputOptions: a = {}, maskAttributeFn: c, maskInputFn: u, dataURLOptions: l = {}, inlineImages: d, recordCanvas: p, keepIframeSrcFn: h, newlyAddedElement: f = !1, rootId: m, maskAllText: g, maskTextClass: y, unmaskTextClass: v, maskTextSelector: b, unmaskTextSelector: _} = e, w = function(t, e, n, r) {
                            try {
                                if (r && t.matches(r)) return !1;
                                if ("string" == typeof e) {
                                    if (t.classList.contains(e)) return !0;
                                } else for (let n = t.classList.length; n--; ) {
                                    const r = t.classList[n];
                                    if (e.test(r)) return !0;
                                }
                                if (n) return t.matches(n);
                            } catch (t) {}
                            return !1;
                        }(t, r, o, i), S = function(t) {
                            if (t instanceof HTMLFormElement) return "form";
                            const e = Jl(t.tagName);
                            return ed.test(e) ? "div" : e;
                        }(t);
                        let x = {};
                        const k = t.attributes.length;
                        for (let e = 0; e < k; e++) {
                            const r = t.attributes[e];
                            r.name && !yd(S, r.name, r.value) && (x[r.name] = gd(n, S, Jl(r.name), r.value, t, c));
                        }
                        if ("link" === S && s) {
                            const e = Array.from(n.styleSheets).find((e => e.href === t.href));
                            let r = null;
                            e && (r = zl(e)), r && (delete x.rel, delete x.href, x._cssText = ld(r, e.href));
                        }
                        if ("style" === S && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                            const e = zl(t.sheet);
                            e && (x._cssText = ld(e, md()));
                        }
                        if ("input" === S || "textarea" === S || "select" === S || "option" === S) {
                            const e = t, n = Ql(e), r = Zl(e, Kl(S), n), o = e.checked;
                            if ("submit" !== n && "button" !== n && r) {
                                const t = _d(e, y, b, v, _, Yl({
                                    type: n,
                                    tagName: Kl(S),
                                    maskInputOptions: a
                                }));
                                x.value = Vl({
                                    isMasked: t,
                                    element: e,
                                    value: r,
                                    maskInputFn: u
                                });
                            }
                            o && (x.checked = o);
                        }
                        if ("option" === S && (t.selected && !a.select ? x.selected = !0 : delete x.selected), 
                        "canvas" === S && p) if ("2d" === t.__context) (function(t) {
                            const e = t.getContext("2d");
                            if (!e) return !0;
                            for (let n = 0; n < t.width; n += 50) for (let r = 0; r < t.height; r += 50) {
                                const o = e.getImageData, i = Xl in o ? o[Xl] : o;
                                if (new Uint32Array(i.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some((t => 0 !== t))) return !1;
                            }
                            return !0;
                        })(t) || (x.rr_dataURL = t.toDataURL(l.type, l.quality)); else if (!("__context" in t)) {
                            const e = t.toDataURL(l.type, l.quality), n = document.createElement("canvas");
                            n.width = t.width, n.height = t.height, e !== n.toDataURL(l.type, l.quality) && (x.rr_dataURL = e);
                        }
                        if ("img" === S && d) {
                            od || (od = n.createElement("canvas"), id = od.getContext("2d"));
                            const e = t, r = e.crossOrigin;
                            e.crossOrigin = "anonymous";
                            const o = () => {
                                e.removeEventListener("load", o);
                                try {
                                    od.width = e.naturalWidth, od.height = e.naturalHeight, id.drawImage(e, 0, 0), x.rr_dataURL = od.toDataURL(l.type, l.quality);
                                } catch (t) {}
                                r ? x.crossOrigin = r : e.removeAttribute("crossorigin");
                            };
                            e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o);
                        }
                        if ("audio" !== S && "video" !== S || (x.rr_mediaState = t.paused ? "paused" : "played", 
                        x.rr_mediaCurrentTime = t.currentTime), f || (t.scrollLeft && (x.rr_scrollLeft = t.scrollLeft), 
                        t.scrollTop && (x.rr_scrollTop = t.scrollTop)), w) {
                            const {width: e, height: n} = t.getBoundingClientRect();
                            x = {
                                class: x.class,
                                rr_width: `${e}px`,
                                rr_height: `${n}px`
                            };
                        }
                        let E;
                        "iframe" !== S || h(x.src) || (t.contentDocument || (x.rr_src = x.src), delete x.src);
                        try {
                            customElements.get(S) && (E = !0);
                        } catch (t) {}
                        return {
                            type: Ul.Element,
                            tagName: S,
                            attributes: x,
                            childNodes: [],
                            isSVG: fd(t) || void 0,
                            needBlock: w,
                            rootId: m,
                            isCustom: E
                        };
                    }(t, {
                        doc: n,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: s,
                        inlineStylesheet: h,
                        maskAttributeFn: c,
                        maskInputOptions: f,
                        maskInputFn: g,
                        dataURLOptions: y,
                        inlineImages: v,
                        recordCanvas: b,
                        keepIframeSrcFn: _,
                        newlyAddedElement: w,
                        rootId: S,
                        maskAllText: a,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: p
                    });

                  case t.TEXT_NODE:
                    return function(t, e) {
                        const {maskAllText: n, maskTextClass: r, unmaskTextClass: o, maskTextSelector: i, unmaskTextSelector: s, maskTextFn: a, maskInputOptions: c, maskInputFn: u, rootId: l} = e, d = t.parentNode && t.parentNode.tagName;
                        let p = t.textContent;
                        const h = "STYLE" === d || void 0, f = "SCRIPT" === d || void 0, m = "TEXTAREA" === d || void 0;
                        if (h && p) {
                            try {
                                t.nextSibling || t.previousSibling || Bl([ t, "access", t => t.parentNode, "access", t => t.sheet, "optionalAccess", t => t.cssRules ]) && (p = zl(t.parentNode.sheet));
                            } catch (t) {}
                            p = ld(p, md());
                        }
                        f && (p = "SCRIPT_PLACEHOLDER");
                        const g = _d(t, r, i, o, s, n);
                        return h || f || m || !p || !g || (p = a ? a(p, t.parentElement) : p.replace(/[\S]/g, "*")), 
                        m && p && (c.textarea || g) && (p = u ? u(p, t.parentNode) : p.replace(/[\S]/g, "*")), 
                        "OPTION" === d && p && (p = Vl({
                            isMasked: _d(t, r, i, o, s, Yl({
                                type: null,
                                tagName: d,
                                maskInputOptions: c
                            })),
                            element: t,
                            value: p,
                            maskInputFn: u
                        })), {
                            type: Ul.Text,
                            textContent: p || "",
                            isStyle: h,
                            rootId: l
                        };
                    }(t, {
                        maskAllText: a,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        maskTextFn: m,
                        maskInputOptions: f,
                        maskInputFn: g,
                        rootId: S
                    });

                  case t.CDATA_SECTION_NODE:
                    return {
                        type: Ul.CDATA,
                        textContent: "",
                        rootId: S
                    };

                  case t.COMMENT_NODE:
                    return {
                        type: Ul.Comment,
                        textContent: t.textContent || "",
                        rootId: S
                    };

                  default:
                    return !1;
                }
            }(t, {
                doc: n,
                mirror: r,
                blockClass: o,
                blockSelector: i,
                maskAllText: a,
                unblockSelector: s,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: l,
                unmaskTextSelector: d,
                inlineStylesheet: h,
                maskInputOptions: f,
                maskAttributeFn: m,
                maskTextFn: g,
                maskInputFn: y,
                dataURLOptions: b,
                inlineImages: _,
                recordCanvas: w,
                keepIframeSrcFn: I,
                newlyAddedElement: C
            });
            if (!O) return null;
            let L;
            L = r.hasNode(t) ? r.getId(t) : !function(t, e) {
                if (e.comment && t.type === Ul.Comment) return !0;
                if (t.type === Ul.Element) {
                    if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                    if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (Sd(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Sd(t.attributes.name) || "icon" === Sd(t.attributes.rel) || "apple-touch-icon" === Sd(t.attributes.rel) || "shortcut icon" === Sd(t.attributes.rel)))) return !0;
                    if ("meta" === t.tagName) {
                        if (e.headMetaDescKeywords && Sd(t.attributes.name).match(/^description|keywords$/)) return !0;
                        if (e.headMetaSocial && (Sd(t.attributes.property).match(/^(og|twitter|fb):/) || Sd(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === Sd(t.attributes.name))) return !0;
                        if (e.headMetaRobots && ("robots" === Sd(t.attributes.name) || "googlebot" === Sd(t.attributes.name) || "bingbot" === Sd(t.attributes.name))) return !0;
                        if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                        if (e.headMetaAuthorship && ("author" === Sd(t.attributes.name) || "generator" === Sd(t.attributes.name) || "framework" === Sd(t.attributes.name) || "publisher" === Sd(t.attributes.name) || "progid" === Sd(t.attributes.name) || Sd(t.attributes.property).match(/^article:/) || Sd(t.attributes.property).match(/^product:/))) return !0;
                        if (e.headMetaVerification && ("google-site-verification" === Sd(t.attributes.name) || "yandex-verification" === Sd(t.attributes.name) || "csrf-token" === Sd(t.attributes.name) || "p:domain_verify" === Sd(t.attributes.name) || "verify-v1" === Sd(t.attributes.name) || "verification" === Sd(t.attributes.name) || "shopify-checkout-api-token" === Sd(t.attributes.name))) return !0;
                    }
                }
                return !1;
            }(O, v) && (R || O.type !== Ul.Text || O.isStyle || O.textContent.replace(/^\s+|\s+$/gm, "").length) ? rd() : -2;
            const A = Object.assign(O, {
                id: L
            });
            if (r.add(t, A), -2 === L) return null;
            S && S(t);
            let M = !p;
            if (A.type === Ul.Element) {
                M = M && !A.needBlock, delete A.needBlock;
                const e = t.shadowRoot;
                e && ql(e) && (A.isShadowHost = !0);
            }
            if ((A.type === Ul.Document || A.type === Ul.Element) && M) {
                v.headWhitespace && A.type === Ul.Element && "head" === A.tagName && (R = !1);
                const e = {
                    doc: n,
                    mirror: r,
                    blockClass: o,
                    blockSelector: i,
                    maskAllText: a,
                    unblockSelector: s,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: l,
                    unmaskTextSelector: d,
                    skipChild: p,
                    inlineStylesheet: h,
                    maskInputOptions: f,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: y,
                    slimDOMOptions: v,
                    dataURLOptions: b,
                    inlineImages: _,
                    recordCanvas: w,
                    preserveWhiteSpace: R,
                    onSerialize: S,
                    onIframeLoad: x,
                    iframeLoadTimeout: k,
                    onStylesheetLoad: E,
                    stylesheetLoadTimeout: T,
                    keepIframeSrcFn: I
                };
                for (const n of Array.from(t.childNodes)) {
                    const t = xd(n, e);
                    t && A.childNodes.push(t);
                }
                if (function(t) {
                    return t.nodeType === t.ELEMENT_NODE;
                }(t) && t.shadowRoot) for (const n of Array.from(t.shadowRoot.childNodes)) {
                    const r = xd(n, e);
                    r && (ql(t.shadowRoot) && (r.isShadow = !0), A.childNodes.push(r));
                }
            }
            return t.parentNode && Hl(t.parentNode) && ql(t.parentNode) && (A.isShadow = !0), 
            A.type === Ul.Element && "iframe" === A.tagName && function(t, e, n) {
                const r = t.contentWindow;
                if (!r) return;
                let o, i = !1;
                try {
                    o = r.document.readyState;
                } catch (t) {
                    return;
                }
                if ("complete" !== o) {
                    const r = setTimeout((() => {
                        i || (e(), i = !0);
                    }), n);
                    return void t.addEventListener("load", (() => {
                        clearTimeout(r), i = !0, e();
                    }));
                }
                const s = "about:blank";
                if (r.location.href !== s || t.src === s || "" === t.src) return setTimeout(e, 0), 
                t.addEventListener("load", e);
                t.addEventListener("load", e);
            }(t, (() => {
                const e = t.contentDocument;
                if (e && x) {
                    const n = xd(e, {
                        doc: e,
                        mirror: r,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: s,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: l,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: v,
                        dataURLOptions: b,
                        inlineImages: _,
                        recordCanvas: w,
                        preserveWhiteSpace: R,
                        onSerialize: S,
                        onIframeLoad: x,
                        iframeLoadTimeout: k,
                        onStylesheetLoad: E,
                        stylesheetLoadTimeout: T,
                        keepIframeSrcFn: I
                    });
                    n && x(t, n);
                }
            }), k), A.type === Ul.Element && "link" === A.tagName && "stylesheet" === A.attributes.rel && function(t, e, n) {
                let r, o = !1;
                try {
                    r = t.sheet;
                } catch (t) {
                    return;
                }
                if (r) return;
                const i = setTimeout((() => {
                    o || (e(), o = !0);
                }), n);
                t.addEventListener("load", (() => {
                    clearTimeout(i), o = !0, e();
                }));
            }(t, (() => {
                if (E) {
                    const e = xd(t, {
                        doc: n,
                        mirror: r,
                        blockClass: o,
                        blockSelector: i,
                        unblockSelector: s,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: l,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: v,
                        dataURLOptions: b,
                        inlineImages: _,
                        recordCanvas: w,
                        preserveWhiteSpace: R,
                        onSerialize: S,
                        onIframeLoad: x,
                        iframeLoadTimeout: k,
                        onStylesheetLoad: E,
                        stylesheetLoadTimeout: T,
                        keepIframeSrcFn: I
                    });
                    e && E(t, e);
                }
            }), T), A;
        }
        function kd(t) {
            let e, n = t[0], r = 1;
            for (;r < t.length; ) {
                const o = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (e = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...t) => n.call(e, ...t))), 
                e = void 0);
            }
            return n;
        }
        function Ed(t, e, n = document) {
            const r = {
                capture: !0,
                passive: !0
            };
            return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
        }
        let Td = {
            map: {},
            getId: () => -1,
            getNode: () => null,
            removeNodeFromMap() {},
            has: () => !1,
            reset() {}
        };
        function Id(t, e, n = {}) {
            let r = null, o = 0;
            return function(...i) {
                const s = Date.now();
                o || !1 !== n.leading || (o = s);
                const a = e - (s - o), c = this;
                a <= 0 || a > e ? (r && (function(...t) {
                    Yd("clearTimeout")(...t);
                }(r), r = null), o = s, t.apply(c, i)) : r || !1 === n.trailing || (r = Vd((() => {
                    o = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(c, i);
                }), a));
            };
        }
        function Cd(t, e, n, r, o = window) {
            const i = o.Object.getOwnPropertyDescriptor(t, e);
            return o.Object.defineProperty(t, e, r ? n : {
                set(t) {
                    Vd((() => {
                        n.set.call(this, t);
                    }), 0), i && i.set && i.set.call(this, t);
                }
            }), () => Cd(t, e, i || {}, !0);
        }
        function Rd(t, e, n) {
            try {
                if (!(e in t)) return () => {};
                const r = t[e], o = n(r);
                return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })), t[e] = o, () => {
                    t[e] = r;
                };
            } catch (t) {
                return () => {};
            }
        }
        "undefined" != typeof window && window.Proxy && window.Reflect && (Td = new Proxy(Td, {
            get: (t, e, n) => Reflect.get(t, e, n)
        }));
        let Od = Date.now;
        function Ld(t) {
            const e = t.document;
            return {
                left: e.scrollingElement ? e.scrollingElement.scrollLeft : void 0 !== t.pageXOffset ? t.pageXOffset : kd([ e, "optionalAccess", t => t.documentElement, "access", t => t.scrollLeft ]) || kd([ e, "optionalAccess", t => t.body, "optionalAccess", t => t.parentElement, "optionalAccess", t => t.scrollLeft ]) || kd([ e, "optionalAccess", t => t.body, "optionalAccess", t => t.scrollLeft ]) || 0,
                top: e.scrollingElement ? e.scrollingElement.scrollTop : void 0 !== t.pageYOffset ? t.pageYOffset : kd([ e, "optionalAccess", t => t.documentElement, "access", t => t.scrollTop ]) || kd([ e, "optionalAccess", t => t.body, "optionalAccess", t => t.parentElement, "optionalAccess", t => t.scrollTop ]) || kd([ e, "optionalAccess", t => t.body, "optionalAccess", t => t.scrollTop ]) || 0
            };
        }
        function Ad() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
        }
        function Md() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
        }
        function Nd(t) {
            return t ? t.nodeType === t.ELEMENT_NODE ? t : t.parentElement : null;
        }
        function Dd(t, e, n, r, o) {
            if (!t) return !1;
            const i = Nd(t);
            if (!i) return !1;
            const s = bd(e, n);
            if (!o) {
                const t = r && i.matches(r);
                return s(i) && !t;
            }
            const a = vd(i, s);
            let c = -1;
            return !(a < 0) && (r && (c = vd(i, bd(null, r))), a > -1 && c < 0 || a < c);
        }
        function Pd(t, e) {
            return -2 === e.getId(t);
        }
        function jd(t, e) {
            if (Hl(t)) return !1;
            const n = e.getId(t);
            return !e.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || jd(t.parentNode, e));
        }
        function Fd(t) {
            return Boolean(t.changedTouches);
        }
        function $d(t, e) {
            return Boolean("IFRAME" === t.nodeName && e.getMeta(t));
        }
        function Bd(t, e) {
            return Boolean("LINK" === t.nodeName && t.nodeType === t.ELEMENT_NODE && t.getAttribute && "stylesheet" === t.getAttribute("rel") && e.getMeta(t));
        }
        function Ud(t) {
            return Boolean(kd([ t, "optionalAccess", t => t.shadowRoot ]));
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) || (Od = () => (new Date).getTime());
        class Hd {
            constructor() {
                this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map;
            }
            getId(t) {
                return () => -1, null != (e = this.styleIDMap.get(t)) ? e : -1;
                var e;
            }
            has(t) {
                return this.styleIDMap.has(t);
            }
            add(t, e) {
                if (this.has(t)) return this.getId(t);
                let n;
                return n = void 0 === e ? this.id++ : e, this.styleIDMap.set(t, n), this.idStyleMap.set(n, t), 
                n;
            }
            getStyle(t) {
                return this.idStyleMap.get(t) || null;
            }
            reset() {
                this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1;
            }
            generateId() {
                return this.id++;
            }
        }
        function qd(t) {
            let e = null;
            return kd([ t, "access", t => t.getRootNode, "optionalCall", t => t(), "optionalAccess", t => t.nodeType ]) === Node.DOCUMENT_FRAGMENT_NODE && t.getRootNode().host && (e = t.getRootNode().host), 
            e;
        }
        function Wd(t) {
            const e = t.ownerDocument;
            return !!e && (e.contains(t) || function(t) {
                const e = t.ownerDocument;
                if (!e) return !1;
                const n = function(t) {
                    let e, n = t;
                    for (;e = qd(n); ) n = e;
                    return n;
                }(t);
                return e.contains(n);
            }(t));
        }
        const Gd = {};
        function Yd(t) {
            const e = Gd[t];
            if (e) return e;
            const n = window.document;
            let r = window[t];
            if (n && "function" == typeof n.createElement) try {
                const e = n.createElement("iframe");
                e.hidden = !0, n.head.appendChild(e);
                const o = e.contentWindow;
                o && o[t] && (r = o[t]), n.head.removeChild(e);
            } catch (t) {}
            return Gd[t] = r.bind(window);
        }
        function Vd(...t) {
            return Yd("setTimeout")(...t);
        }
        var Jd = (t => (t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", 
        t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", 
        t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", 
        t))(Jd || {}), Kd = (t => (t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", 
        t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", 
        t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", 
        t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", 
        t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", 
        t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", 
        t[t.CustomElement = 16] = "CustomElement", t))(Kd || {}), Xd = (t => (t[t.MouseUp = 0] = "MouseUp", 
        t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", 
        t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", 
        t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", 
        t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t))(Xd || {}), Qd = (t => (t[t.Mouse = 0] = "Mouse", 
        t[t.Pen = 1] = "Pen", t[t.Touch = 2] = "Touch", t))(Qd || {});
        function Zd(t) {
            let e, n = t[0], r = 1;
            for (;r < t.length; ) {
                const o = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (e = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...t) => n.call(e, ...t))), 
                e = void 0);
            }
            return n;
        }
        function tp(t) {
            return "__ln" in t;
        }
        class ep {
            constructor() {
                this.length = 0, this.head = null, this.tail = null;
            }
            get(t) {
                if (t >= this.length) throw new Error("Position outside of list range");
                let e = this.head;
                for (let n = 0; n < t; n++) e = Zd([ e, "optionalAccess", t => t.next ]) || null;
                return e;
            }
            addNode(t) {
                const e = {
                    value: t,
                    previous: null,
                    next: null
                };
                if (t.__ln = e, t.previousSibling && tp(t.previousSibling)) {
                    const n = t.previousSibling.__ln.next;
                    e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, 
                    n && (n.previous = e);
                } else if (t.nextSibling && tp(t.nextSibling) && t.nextSibling.__ln.previous) {
                    const n = t.nextSibling.__ln.previous;
                    e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e);
                } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
                null === e.next && (this.tail = e), this.length++;
            }
            removeNode(t) {
                const e = t.__ln;
                this.head && (e.previous ? (e.previous.next = e.next, e.next ? e.next.previous = e.previous : this.tail = e.previous) : (this.head = e.next, 
                this.head ? this.head.previous = null : this.tail = null), t.__ln && delete t.__ln, 
                this.length--);
            }
        }
        const np = (t, e) => `${t}@${e}`;
        class rp {
            constructor() {
                this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, 
                this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, 
                this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
                    t.forEach(this.processMutation), this.emit();
                }, this.emit = () => {
                    if (this.frozen || this.locked) return;
                    const t = [], e = new Set, n = new ep, r = t => {
                        let e = t, n = -2;
                        for (;-2 === n; ) e = e && e.nextSibling, n = e && this.mirror.getId(e);
                        return n;
                    }, o = o => {
                        if (!o.parentNode || !Wd(o)) return;
                        const i = Hl(o.parentNode) ? this.mirror.getId(qd(o)) : this.mirror.getId(o.parentNode), s = r(o);
                        if (-1 === i || -1 === s) return n.addNode(o);
                        const a = xd(o, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: t => {
                                $d(t, this.mirror) && this.iframeManager.addIframe(t), Bd(t, this.mirror) && this.stylesheetManager.trackLinkElement(t), 
                                Ud(o) && this.shadowDomManager.addShadowRoot(o.shadowRoot, this.doc);
                            },
                            onIframeLoad: (t, e) => {
                                this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t);
                            },
                            onStylesheetLoad: (t, e) => {
                                this.stylesheetManager.attachLinkElement(t, e);
                            }
                        });
                        a && (t.push({
                            parentId: i,
                            nextId: s,
                            node: a
                        }), e.add(a.id));
                    };
                    for (;this.mapRemoves.length; ) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (const t of this.movedSet) ip(this.removes, t, this.mirror) && !this.movedSet.has(t.parentNode) || o(t);
                    for (const t of this.addedSet) ap(this.droppedSet, t) || ip(this.removes, t, this.mirror) ? ap(this.movedSet, t) ? o(t) : this.droppedSet.add(t) : o(t);
                    let i = null;
                    for (;n.length; ) {
                        let t = null;
                        if (i) {
                            const e = this.mirror.getId(i.value.parentNode), n = r(i.value);
                            -1 !== e && -1 !== n && (t = i);
                        }
                        if (!t) {
                            let e = n.tail;
                            for (;e; ) {
                                const n = e;
                                if (e = e.previous, n) {
                                    const e = this.mirror.getId(n.value.parentNode);
                                    if (-1 === r(n.value)) continue;
                                    if (-1 !== e) {
                                        t = n;
                                        break;
                                    }
                                    {
                                        const e = n.value;
                                        if (e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            const r = e.parentNode.host;
                                            if (-1 !== this.mirror.getId(r)) {
                                                t = n;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!t) {
                            for (;n.head; ) n.removeNode(n.head.value);
                            break;
                        }
                        i = t.previous, n.removeNode(t.value), o(t.value);
                    }
                    const s = {
                        texts: this.texts.map((t => ({
                            id: this.mirror.getId(t.node),
                            value: t.value
                        }))).filter((t => !e.has(t.id))).filter((t => this.mirror.has(t.id))),
                        attributes: this.attributes.map((t => {
                            const {attributes: e} = t;
                            if ("string" == typeof e.style) {
                                const n = JSON.stringify(t.styleDiff), r = JSON.stringify(t._unchangedStyles);
                                n.length < e.style.length && (n + r).split("var(").length === e.style.split("var(").length && (e.style = t.styleDiff);
                            }
                            return {
                                id: this.mirror.getId(t.node),
                                attributes: e
                            };
                        })).filter((t => !e.has(t.id))).filter((t => this.mirror.has(t.id))),
                        removes: this.removes,
                        adds: t
                    };
                    (s.texts.length || s.attributes.length || s.removes.length || s.adds.length) && (this.texts = [], 
                    this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, 
                    this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(s));
                }, this.processMutation = t => {
                    if (!Pd(t.target, this.mirror)) switch (t.type) {
                      case "characterData":
                        {
                            const e = t.target.textContent;
                            Dd(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || e === t.oldValue || this.texts.push({
                                value: _d(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e, Nd(t.target)) : e.replace(/[\S]/g, "*") : e,
                                node: t.target
                            });
                            break;
                        }

                      case "attributes":
                        {
                            const e = t.target;
                            let n = t.attributeName, r = t.target.getAttribute(n);
                            if ("value" === n) {
                                const n = Ql(e), o = e.tagName;
                                r = Zl(e, o, n);
                                const i = Yl({
                                    maskInputOptions: this.maskInputOptions,
                                    tagName: o,
                                    type: n
                                });
                                r = Vl({
                                    isMasked: _d(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, i),
                                    element: e,
                                    value: r,
                                    maskInputFn: this.maskInputFn
                                });
                            }
                            if (Dd(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === t.oldValue) return;
                            let o = this.attributeMap.get(t.target);
                            if ("IFRAME" === e.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                if (e.contentDocument) return;
                                n = "rr_src";
                            }
                            if (o || (o = {
                                node: t.target,
                                attributes: {},
                                styleDiff: {},
                                _unchangedStyles: {}
                            }, this.attributes.push(o), this.attributeMap.set(t.target, o)), "type" === n && "INPUT" === e.tagName && "password" === (t.oldValue || "").toLowerCase() && e.setAttribute("data-rr-is-password", "true"), 
                            !yd(e.tagName, n) && (o.attributes[n] = gd(this.doc, Jl(e.tagName), Jl(n), r, e, this.maskAttributeFn), 
                            "style" === n)) {
                                if (!this.unattachedDoc) try {
                                    this.unattachedDoc = document.implementation.createHTMLDocument();
                                } catch (t) {
                                    this.unattachedDoc = this.doc;
                                }
                                const n = this.unattachedDoc.createElement("span");
                                t.oldValue && n.setAttribute("style", t.oldValue);
                                for (const t of Array.from(e.style)) {
                                    const r = e.style.getPropertyValue(t), i = e.style.getPropertyPriority(t);
                                    r !== n.style.getPropertyValue(t) || i !== n.style.getPropertyPriority(t) ? o.styleDiff[t] = "" === i ? r : [ r, i ] : o._unchangedStyles[t] = [ r, i ];
                                }
                                for (const t of Array.from(n.style)) "" === e.style.getPropertyValue(t) && (o.styleDiff[t] = !1);
                            }
                            break;
                        }

                      case "childList":
                        if (Dd(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                        t.addedNodes.forEach((e => this.genAdds(e, t.target))), t.removedNodes.forEach((e => {
                            const n = this.mirror.getId(e), r = Hl(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                            Dd(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Pd(e, this.mirror) || !function(t, e) {
                                return -1 !== e.getId(t);
                            }(e, this.mirror) || (this.addedSet.has(e) ? (op(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || jd(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[np(n, r)] ? op(this.movedSet, e) : this.removes.push({
                                parentId: r,
                                id: n,
                                isShadow: !(!Hl(t.target) || !ql(t.target)) || void 0
                            })), this.mapRemoves.push(e));
                        }));
                    }
                }, this.genAdds = (t, e) => {
                    if (!this.processedNodeManager.inOtherBuffer(t, this) && !this.addedSet.has(t) && !this.movedSet.has(t)) {
                        if (this.mirror.hasNode(t)) {
                            if (Pd(t, this.mirror)) return;
                            this.movedSet.add(t);
                            let n = null;
                            e && this.mirror.hasNode(e) && (n = this.mirror.getId(e)), n && -1 !== n && (this.movedMap[np(this.mirror.getId(t), n)] = !0);
                        } else this.addedSet.add(t), this.droppedSet.delete(t);
                        Dd(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (t.childNodes.forEach((t => this.genAdds(t))), 
                        Ud(t) && t.shadowRoot.childNodes.forEach((e => {
                            this.processedNodeManager.add(e, this), this.genAdds(e, t);
                        })));
                    }
                };
            }
            init(t) {
                [ "mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager" ].forEach((e => {
                    this[e] = t[e];
                }));
            }
            freeze() {
                this.frozen = !0, this.canvasManager.freeze();
            }
            unfreeze() {
                this.frozen = !1, this.canvasManager.unfreeze(), this.emit();
            }
            isFrozen() {
                return this.frozen;
            }
            lock() {
                this.locked = !0, this.canvasManager.lock();
            }
            unlock() {
                this.locked = !1, this.canvasManager.unlock(), this.emit();
            }
            reset() {
                this.shadowDomManager.reset(), this.canvasManager.reset();
            }
        }
        function op(t, e) {
            t.delete(e), e.childNodes.forEach((e => op(t, e)));
        }
        function ip(t, e, n) {
            return 0 !== t.length && sp(t, e, n);
        }
        function sp(t, e, n) {
            const {parentNode: r} = e;
            if (!r) return !1;
            const o = n.getId(r);
            return !!t.some((t => t.id === o)) || sp(t, r, n);
        }
        function ap(t, e) {
            return 0 !== t.size && cp(t, e);
        }
        function cp(t, e) {
            const {parentNode: n} = e;
            return !!n && (!!t.has(n) || cp(t, n));
        }
        let up;
        const pp = t => up ? (...e) => {
            try {
                return t(...e);
            } catch (t) {
                if (up && !0 === up(t)) return () => {};
                throw t;
            }
        } : t;
        function hp(t) {
            let e, n = t[0], r = 1;
            for (;r < t.length; ) {
                const o = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (e = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...t) => n.call(e, ...t))), 
                e = void 0);
            }
            return n;
        }
        const fp = [];
        function mp(t) {
            try {
                if ("composedPath" in t) {
                    const e = t.composedPath();
                    if (e.length) return e[0];
                } else if ("path" in t && t.path.length) return t.path[0];
            } catch (t) {}
            return t && t.target;
        }
        function gp(t, e) {
            const n = new rp;
            fp.push(n), n.init(t);
            let r = window.MutationObserver || window.__rrMutationObserver;
            const o = hp([ window, "optionalAccess", t => t.Zone, "optionalAccess", t => t.__symbol__, "optionalCall", t => t("MutationObserver") ]);
            o && window[o] && (r = window[o]);
            const i = new r(pp((e => {
                t.onMutation && !1 === t.onMutation(e) || n.processMutations.bind(n)(e);
            })));
            return i.observe(e, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }), i;
        }
        function vp({scrollCb: t, doc: e, mirror: n, blockClass: r, blockSelector: o, unblockSelector: i, sampling: s}) {
            return Ed("scroll", pp(Id(pp((s => {
                const a = mp(s);
                if (!a || Dd(a, r, o, i, !0)) return;
                const c = n.getId(a);
                if (a === e && e.defaultView) {
                    const n = Ld(e.defaultView);
                    t({
                        id: c,
                        x: n.left,
                        y: n.top
                    });
                } else t({
                    id: c,
                    x: a.scrollLeft,
                    y: a.scrollTop
                });
            })), s.scroll || 100)), e);
        }
        const bp = [ "INPUT", "TEXTAREA", "SELECT" ], _p = new WeakMap;
        function wp({inputCb: t, doc: e, mirror: n, blockClass: r, blockSelector: o, unblockSelector: i, ignoreClass: s, ignoreSelector: a, maskInputOptions: c, maskInputFn: u, sampling: l, userTriggeredOnInput: d, maskTextClass: p, unmaskTextClass: h, maskTextSelector: f, unmaskTextSelector: m}) {
            function g(t) {
                let n = mp(t);
                const l = t.isTrusted, g = n && Kl(n.tagName);
                if ("OPTION" === g && (n = n.parentElement), !n || !g || bp.indexOf(g) < 0 || Dd(n, r, o, i, !0)) return;
                const v = n;
                if (v.classList.contains(s) || a && v.matches(a)) return;
                const b = Ql(n);
                let _ = Zl(v, g, b), w = !1;
                const S = Yl({
                    maskInputOptions: c,
                    tagName: g,
                    type: b
                }), x = _d(n, p, f, h, m, S);
                "radio" !== b && "checkbox" !== b || (w = n.checked), _ = Vl({
                    isMasked: x,
                    element: n,
                    value: _,
                    maskInputFn: u
                }), y(n, d ? {
                    text: _,
                    isChecked: w,
                    userTriggered: l
                } : {
                    text: _,
                    isChecked: w
                });
                const k = n.name;
                "radio" === b && k && w && e.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach((t => {
                    if (t !== n) {
                        const e = Vl({
                            isMasked: x,
                            element: t,
                            value: Zl(t, g, b),
                            maskInputFn: u
                        });
                        y(t, d ? {
                            text: e,
                            isChecked: !w,
                            userTriggered: !1
                        } : {
                            text: e,
                            isChecked: !w
                        });
                    }
                }));
            }
            function y(e, r) {
                const o = _p.get(e);
                if (!o || o.text !== r.text || o.isChecked !== r.isChecked) {
                    _p.set(e, r);
                    const o = n.getId(e);
                    pp(t)({
                        ...r,
                        id: o
                    });
                }
            }
            const v = ("last" === l.input ? [ "change" ] : [ "input", "change" ]).map((t => Ed(t, pp(g), e))), b = e.defaultView;
            if (!b) return () => {
                v.forEach((t => t()));
            };
            const _ = b.Object.getOwnPropertyDescriptor(b.HTMLInputElement.prototype, "value"), w = [ [ b.HTMLInputElement.prototype, "value" ], [ b.HTMLInputElement.prototype, "checked" ], [ b.HTMLSelectElement.prototype, "value" ], [ b.HTMLTextAreaElement.prototype, "value" ], [ b.HTMLSelectElement.prototype, "selectedIndex" ], [ b.HTMLOptionElement.prototype, "selected" ] ];
            return _ && _.set && v.push(...w.map((t => Cd(t[0], t[1], {
                set() {
                    pp(g)({
                        target: this,
                        isTrusted: !1
                    });
                }
            }, !1, b)))), pp((() => {
                v.forEach((t => t()));
            }));
        }
        function Sp(t) {
            return function(t, e) {
                if (Tp("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || Tp("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || Tp("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || Tp("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                    const n = Array.from(t.parentRule.cssRules).indexOf(t);
                    e.unshift(n);
                } else if (t.parentStyleSheet) {
                    const n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
                    e.unshift(n);
                }
                return e;
            }(t, []);
        }
        function xp(t, e, n) {
            let r, o;
            return t ? (t.ownerNode ? r = e.getId(t.ownerNode) : o = n.getId(t), {
                styleId: o,
                id: r
            }) : {};
        }
        function kp({mirror: t, stylesheetManager: e}, n) {
            let r = null;
            r = "#document" === n.nodeName ? t.getId(n) : t.getId(n.host);
            const o = "#document" === n.nodeName ? hp([ n, "access", t => t.defaultView, "optionalAccess", t => t.Document ]) : hp([ n, "access", t => t.ownerDocument, "optionalAccess", t => t.defaultView, "optionalAccess", t => t.ShadowRoot ]), i = hp([ o, "optionalAccess", t => t.prototype ]) ? Object.getOwnPropertyDescriptor(hp([ o, "optionalAccess", t => t.prototype ]), "adoptedStyleSheets") : void 0;
            return null !== r && -1 !== r && o && i ? (Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: i.configurable,
                enumerable: i.enumerable,
                get() {
                    return hp([ i, "access", t => t.get, "optionalAccess", t => t.call, "call", t => t(this) ]);
                },
                set(t) {
                    const n = hp([ i, "access", t => t.set, "optionalAccess", t => t.call, "call", e => e(this, t) ]);
                    if (null !== r && -1 !== r) try {
                        e.adoptStyleSheets(t, r);
                    } catch (t) {}
                    return n;
                }
            }), pp((() => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: i.configurable,
                    enumerable: i.enumerable,
                    get: i.get,
                    set: i.set
                });
            }))) : () => {};
        }
        function Ep(t, e = {}) {
            const n = t.doc.defaultView;
            if (!n) return () => {};
            const r = gp(t, t.doc), o = function({mousemoveCb: t, sampling: e, doc: n, mirror: r}) {
                if (!1 === e.mousemove) return () => {};
                const o = "number" == typeof e.mousemove ? e.mousemove : 50, i = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500;
                let s, a = [];
                const c = Id(pp((e => {
                    const n = Date.now() - s;
                    t(a.map((t => (t.timeOffset -= n, t))), e), a = [], s = null;
                })), i), u = pp(Id(pp((t => {
                    const e = mp(t), {clientX: n, clientY: o} = Fd(t) ? t.changedTouches[0] : t;
                    s || (s = Od()), a.push({
                        x: n,
                        y: o,
                        id: r.getId(e),
                        timeOffset: Od() - s
                    }), c("undefined" != typeof DragEvent && t instanceof DragEvent ? Kd.Drag : t instanceof MouseEvent ? Kd.MouseMove : Kd.TouchMove);
                })), o, {
                    trailing: !1
                })), l = [ Ed("mousemove", u, n), Ed("touchmove", u, n), Ed("drag", u, n) ];
                return pp((() => {
                    l.forEach((t => t()));
                }));
            }(t), i = function({mouseInteractionCb: t, doc: e, mirror: n, blockClass: r, blockSelector: o, unblockSelector: i, sampling: s}) {
                if (!1 === s.mouseInteraction) return () => {};
                const a = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction, c = [];
                let u = null;
                return Object.keys(Xd).filter((t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== a[t])).forEach((s => {
                    let a = Jl(s);
                    const l = (e => s => {
                        const a = mp(s);
                        if (Dd(a, r, o, i, !0)) return;
                        let c = null, l = e;
                        if ("pointerType" in s) {
                            switch (s.pointerType) {
                              case "mouse":
                                c = Qd.Mouse;
                                break;

                              case "touch":
                                c = Qd.Touch;
                                break;

                              case "pen":
                                c = Qd.Pen;
                            }
                            c === Qd.Touch ? Xd[e] === Xd.MouseDown ? l = "TouchStart" : Xd[e] === Xd.MouseUp && (l = "TouchEnd") : Qd.Pen;
                        } else Fd(s) && (c = Qd.Touch);
                        null !== c ? (u = c, (l.startsWith("Touch") && c === Qd.Touch || l.startsWith("Mouse") && c === Qd.Mouse) && (c = null)) : Xd[e] === Xd.Click && (c = u, 
                        u = null);
                        const d = Fd(s) ? s.changedTouches[0] : s;
                        if (!d) return;
                        const p = n.getId(a), {clientX: h, clientY: f} = d;
                        pp(t)({
                            type: Xd[l],
                            id: p,
                            x: h,
                            y: f,
                            ...null !== c && {
                                pointerType: c
                            }
                        });
                    })(s);
                    if (window.PointerEvent) switch (Xd[s]) {
                      case Xd.MouseDown:
                      case Xd.MouseUp:
                        a = a.replace("mouse", "pointer");
                        break;

                      case Xd.TouchStart:
                      case Xd.TouchEnd:
                        return;
                    }
                    c.push(Ed(a, l, e));
                })), pp((() => {
                    c.forEach((t => t()));
                }));
            }(t), s = vp(t), a = function({viewportResizeCb: t}, {win: e}) {
                let n = -1, r = -1;
                return Ed("resize", pp(Id(pp((() => {
                    const e = Ad(), o = Md();
                    n === e && r === o || (t({
                        width: Number(o),
                        height: Number(e)
                    }), n = e, r = o);
                })), 200)), e);
            }(t, {
                win: n
            }), c = wp(t), u = function({mediaInteractionCb: t, blockClass: e, blockSelector: n, unblockSelector: r, mirror: o, sampling: i, doc: s}) {
                const a = pp((s => Id(pp((i => {
                    const a = mp(i);
                    if (!a || Dd(a, e, n, r, !0)) return;
                    const {currentTime: c, volume: u, muted: l, playbackRate: d} = a;
                    t({
                        type: s,
                        id: o.getId(a),
                        currentTime: c,
                        volume: u,
                        muted: l,
                        playbackRate: d
                    });
                })), i.media || 500))), c = [ Ed("play", a(0), s), Ed("pause", a(1), s), Ed("seeked", a(2), s), Ed("volumechange", a(3), s), Ed("ratechange", a(4), s) ];
                return pp((() => {
                    c.forEach((t => t()));
                }));
            }(t), l = function({styleSheetRuleCb: t, mirror: e, stylesheetManager: n}, {win: r}) {
                if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
                const o = r.CSSStyleSheet.prototype.insertRule;
                r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                    apply: pp(((r, o, i) => {
                        const [s, a] = i, {id: c, styleId: u} = xp(o, e, n.styleMirror);
                        return (c && -1 !== c || u && -1 !== u) && t({
                            id: c,
                            styleId: u,
                            adds: [ {
                                rule: s,
                                index: a
                            } ]
                        }), r.apply(o, i);
                    }))
                });
                const i = r.CSSStyleSheet.prototype.deleteRule;
                let s, a;
                r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                    apply: pp(((r, o, i) => {
                        const [s] = i, {id: a, styleId: c} = xp(o, e, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && t({
                            id: a,
                            styleId: c,
                            removes: [ {
                                index: s
                            } ]
                        }), r.apply(o, i);
                    }))
                }), r.CSSStyleSheet.prototype.replace && (s = r.CSSStyleSheet.prototype.replace, 
                r.CSSStyleSheet.prototype.replace = new Proxy(s, {
                    apply: pp(((r, o, i) => {
                        const [s] = i, {id: a, styleId: c} = xp(o, e, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && t({
                            id: a,
                            styleId: c,
                            replace: s
                        }), r.apply(o, i);
                    }))
                })), r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, 
                r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
                    apply: pp(((r, o, i) => {
                        const [s] = i, {id: a, styleId: c} = xp(o, e, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && t({
                            id: a,
                            styleId: c,
                            replaceSync: s
                        }), r.apply(o, i);
                    }))
                }));
                const c = {};
                Ip("CSSGroupingRule") ? c.CSSGroupingRule = r.CSSGroupingRule : (Ip("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule), 
                Ip("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule), Ip("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
                const u = {};
                return Object.entries(c).forEach((([r, o]) => {
                    u[r] = {
                        insertRule: o.prototype.insertRule,
                        deleteRule: o.prototype.deleteRule
                    }, o.prototype.insertRule = new Proxy(u[r].insertRule, {
                        apply: pp(((r, o, i) => {
                            const [s, a] = i, {id: c, styleId: u} = xp(o.parentStyleSheet, e, n.styleMirror);
                            return (c && -1 !== c || u && -1 !== u) && t({
                                id: c,
                                styleId: u,
                                adds: [ {
                                    rule: s,
                                    index: [ ...Sp(o), a || 0 ]
                                } ]
                            }), r.apply(o, i);
                        }))
                    }), o.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                        apply: pp(((r, o, i) => {
                            const [s] = i, {id: a, styleId: c} = xp(o.parentStyleSheet, e, n.styleMirror);
                            return (a && -1 !== a || c && -1 !== c) && t({
                                id: a,
                                styleId: c,
                                removes: [ {
                                    index: [ ...Sp(o), s ]
                                } ]
                            }), r.apply(o, i);
                        }))
                    });
                })), pp((() => {
                    r.CSSStyleSheet.prototype.insertRule = o, r.CSSStyleSheet.prototype.deleteRule = i, 
                    s && (r.CSSStyleSheet.prototype.replace = s), a && (r.CSSStyleSheet.prototype.replaceSync = a), 
                    Object.entries(c).forEach((([t, e]) => {
                        e.prototype.insertRule = u[t].insertRule, e.prototype.deleteRule = u[t].deleteRule;
                    }));
                }));
            }(t, {
                win: n
            }), d = kp(t, t.doc), p = function({styleDeclarationCb: t, mirror: e, ignoreCSSAttributes: n, stylesheetManager: r}, {win: o}) {
                const i = o.CSSStyleDeclaration.prototype.setProperty;
                o.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
                    apply: pp(((o, s, a) => {
                        const [c, u, l] = a;
                        if (n.has(c)) return i.apply(s, [ c, u, l ]);
                        const {id: d, styleId: p} = xp(hp([ s, "access", t => t.parentRule, "optionalAccess", t => t.parentStyleSheet ]), e, r.styleMirror);
                        return (d && -1 !== d || p && -1 !== p) && t({
                            id: d,
                            styleId: p,
                            set: {
                                property: c,
                                value: u,
                                priority: l
                            },
                            index: Sp(s.parentRule)
                        }), o.apply(s, a);
                    }))
                });
                const s = o.CSSStyleDeclaration.prototype.removeProperty;
                return o.CSSStyleDeclaration.prototype.removeProperty = new Proxy(s, {
                    apply: pp(((o, i, a) => {
                        const [c] = a;
                        if (n.has(c)) return s.apply(i, [ c ]);
                        const {id: u, styleId: l} = xp(hp([ i, "access", t => t.parentRule, "optionalAccess", t => t.parentStyleSheet ]), e, r.styleMirror);
                        return (u && -1 !== u || l && -1 !== l) && t({
                            id: u,
                            styleId: l,
                            remove: {
                                property: c
                            },
                            index: Sp(i.parentRule)
                        }), o.apply(i, a);
                    }))
                }), pp((() => {
                    o.CSSStyleDeclaration.prototype.setProperty = i, o.CSSStyleDeclaration.prototype.removeProperty = s;
                }));
            }(t, {
                win: n
            }), h = t.collectFonts ? function({fontCb: t, doc: e}) {
                const n = e.defaultView;
                if (!n) return () => {};
                const r = [], o = new WeakMap, i = n.FontFace;
                n.FontFace = function(t, e, n) {
                    const r = new i(t, e, n);
                    return o.set(r, {
                        family: t,
                        buffer: "string" != typeof e,
                        descriptors: n,
                        fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                    }), r;
                };
                const s = Rd(e.fonts, "add", (function(e) {
                    return function(n) {
                        return Vd(pp((() => {
                            const e = o.get(n);
                            e && (t(e), o.delete(n));
                        })), 0), e.apply(this, [ n ]);
                    };
                }));
                return r.push((() => {
                    n.FontFace = i;
                })), r.push(s), pp((() => {
                    r.forEach((t => t()));
                }));
            }(t) : () => {}, f = function(t) {
                const {doc: e, mirror: n, blockClass: r, blockSelector: o, unblockSelector: i, selectionCb: s} = t;
                let a = !0;
                const c = pp((() => {
                    const t = e.getSelection();
                    if (!t || a && hp([ t, "optionalAccess", t => t.isCollapsed ])) return;
                    a = t.isCollapsed || !1;
                    const c = [], u = t.rangeCount || 0;
                    for (let e = 0; e < u; e++) {
                        const s = t.getRangeAt(e), {startContainer: a, startOffset: u, endContainer: l, endOffset: d} = s;
                        Dd(a, r, o, i, !0) || Dd(l, r, o, i, !0) || c.push({
                            start: n.getId(a),
                            startOffset: u,
                            end: n.getId(l),
                            endOffset: d
                        });
                    }
                    s({
                        ranges: c
                    });
                }));
                return c(), Ed("selectionchange", c);
            }(t), m = function({doc: t, customElementCb: e}) {
                const n = t.defaultView;
                return n && n.customElements ? Rd(n.customElements, "define", (function(t) {
                    return function(n, r, o) {
                        try {
                            e({
                                define: {
                                    name: n
                                }
                            });
                        } catch (t) {}
                        return t.apply(this, [ n, r, o ]);
                    };
                })) : () => {};
            }(t), g = [];
            for (const e of t.plugins) g.push(e.observer(e.callback, n, e.options));
            return pp((() => {
                fp.forEach((t => t.reset())), r.disconnect(), o(), i(), s(), a(), c(), u(), l(), 
                d(), p(), h(), f(), m(), g.forEach((t => t()));
            }));
        }
        function Tp(t) {
            return void 0 !== window[t];
        }
        function Ip(t) {
            return Boolean(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype);
        }
        class Cp {
            constructor(t) {
                this.generateIdFn = t, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
            }
            getId(t, e, n, r) {
                const o = n || this.getIdToRemoteIdMap(t), i = r || this.getRemoteIdToIdMap(t);
                let s = o.get(e);
                return s || (s = this.generateIdFn(), o.set(e, s), i.set(s, e)), s;
            }
            getIds(t, e) {
                const n = this.getIdToRemoteIdMap(t), r = this.getRemoteIdToIdMap(t);
                return e.map((e => this.getId(t, e, n, r)));
            }
            getRemoteId(t, e, n) {
                const r = n || this.getRemoteIdToIdMap(t);
                if ("number" != typeof e) return e;
                return r.get(e) || -1;
            }
            getRemoteIds(t, e) {
                const n = this.getRemoteIdToIdMap(t);
                return e.map((e => this.getRemoteId(t, e, n)));
            }
            reset(t) {
                if (!t) return this.iframeIdToRemoteIdMap = new WeakMap, void (this.iframeRemoteIdToIdMap = new WeakMap);
                this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t);
            }
            getIdToRemoteIdMap(t) {
                let e = this.iframeIdToRemoteIdMap.get(t);
                return e || (e = new Map, this.iframeIdToRemoteIdMap.set(t, e)), e;
            }
            getRemoteIdToIdMap(t) {
                let e = this.iframeRemoteIdToIdMap.get(t);
                return e || (e = new Map, this.iframeRemoteIdToIdMap.set(t, e)), e;
            }
        }
        function Rp(t) {
            let e, n = t[0], r = 1;
            for (;r < t.length; ) {
                const o = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === o || "optionalCall" === o) && null == n) return;
                "access" === o || "optionalAccess" === o ? (e = n, n = i(n)) : "call" !== o && "optionalCall" !== o || (n = i(((...t) => n.call(e, ...t))), 
                e = void 0);
            }
            return n;
        }
        class Op {
            constructor() {
                this.crossOriginIframeMirror = new Cp(rd), this.crossOriginIframeRootIdMap = new WeakMap;
            }
            addIframe() {}
            addLoadListener() {}
            attachIframe() {}
        }
        class Lp {
            constructor(t) {
                this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new Cp(rd), 
                this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = t.mutationCb, this.wrappedEmit = t.wrappedEmit, 
                this.stylesheetManager = t.stylesheetManager, this.recordCrossOriginIframes = t.recordCrossOriginIframes, 
                this.crossOriginIframeStyleMirror = new Cp(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), 
                this.mirror = t.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this));
            }
            addIframe(t) {
                this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t);
            }
            addLoadListener(t) {
                this.loadListener = t;
            }
            attachIframe(t, e) {
                this.mutationCb({
                    adds: [ {
                        parentId: this.mirror.getId(t),
                        nextId: null,
                        node: e
                    } ],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }), Rp([ this, "access", t => t.loadListener, "optionalCall", e => e(t) ]), t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument));
            }
            handleMessage(t) {
                const e = t;
                if ("rrweb" !== e.data.type || e.origin !== e.data.origin) return;
                if (!t.source) return;
                const n = this.crossOriginIframeMap.get(t.source);
                if (!n) return;
                const r = this.transformCrossOriginEvent(n, e.data.event);
                r && this.wrappedEmit(r, e.data.isCheckout);
            }
            transformCrossOriginEvent(t, e) {
                switch (e.type) {
                  case Jd.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(t), this.crossOriginIframeStyleMirror.reset(t), 
                        this.replaceIdOnNode(e.data.node, t);
                        const n = e.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(t, n), this.patchRootIdOnNode(e.data.node, n), 
                        {
                            timestamp: e.timestamp,
                            type: Jd.IncrementalSnapshot,
                            data: {
                                source: Kd.Mutation,
                                adds: [ {
                                    parentId: this.mirror.getId(t),
                                    nextId: null,
                                    node: e.data.node
                                } ],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        };
                    }

                  case Jd.Meta:
                  case Jd.Load:
                  case Jd.DomContentLoaded:
                    return !1;

                  case Jd.Plugin:
                    return e;

                  case Jd.Custom:
                    return this.replaceIds(e.data.payload, t, [ "id", "parentId", "previousId", "nextId" ]), 
                    e;

                  case Jd.IncrementalSnapshot:
                    switch (e.data.source) {
                      case Kd.Mutation:
                        return e.data.adds.forEach((e => {
                            this.replaceIds(e, t, [ "parentId", "nextId", "previousId" ]), this.replaceIdOnNode(e.node, t);
                            const n = this.crossOriginIframeRootIdMap.get(t);
                            n && this.patchRootIdOnNode(e.node, n);
                        })), e.data.removes.forEach((e => {
                            this.replaceIds(e, t, [ "parentId", "id" ]);
                        })), e.data.attributes.forEach((e => {
                            this.replaceIds(e, t, [ "id" ]);
                        })), e.data.texts.forEach((e => {
                            this.replaceIds(e, t, [ "id" ]);
                        })), e;

                      case Kd.Drag:
                      case Kd.TouchMove:
                      case Kd.MouseMove:
                        return e.data.positions.forEach((e => {
                            this.replaceIds(e, t, [ "id" ]);
                        })), e;

                      case Kd.ViewportResize:
                        return !1;

                      case Kd.MediaInteraction:
                      case Kd.MouseInteraction:
                      case Kd.Scroll:
                      case Kd.CanvasMutation:
                      case Kd.Input:
                        return this.replaceIds(e.data, t, [ "id" ]), e;

                      case Kd.StyleSheetRule:
                      case Kd.StyleDeclaration:
                        return this.replaceIds(e.data, t, [ "id" ]), this.replaceStyleIds(e.data, t, [ "styleId" ]), 
                        e;

                      case Kd.Font:
                        return e;

                      case Kd.Selection:
                        return e.data.ranges.forEach((e => {
                            this.replaceIds(e, t, [ "start", "end" ]);
                        })), e;

                      case Kd.AdoptedStyleSheet:
                        return this.replaceIds(e.data, t, [ "id" ]), this.replaceStyleIds(e.data, t, [ "styleIds" ]), 
                        Rp([ e, "access", t => t.data, "access", t => t.styles, "optionalAccess", t => t.forEach, "call", e => e((e => {
                            this.replaceStyleIds(e, t, [ "styleId" ]);
                        })) ]), e;
                    }
                }
                return !1;
            }
            replace(t, e, n, r) {
                for (const o of r) (Array.isArray(e[o]) || "number" == typeof e[o]) && (Array.isArray(e[o]) ? e[o] = t.getIds(n, e[o]) : e[o] = t.getId(n, e[o]));
                return e;
            }
            replaceIds(t, e, n) {
                return this.replace(this.crossOriginIframeMirror, t, e, n);
            }
            replaceStyleIds(t, e, n) {
                return this.replace(this.crossOriginIframeStyleMirror, t, e, n);
            }
            replaceIdOnNode(t, e) {
                this.replaceIds(t, e, [ "id", "rootId" ]), "childNodes" in t && t.childNodes.forEach((t => {
                    this.replaceIdOnNode(t, e);
                }));
            }
            patchRootIdOnNode(t, e) {
                t.type === Ul.Document || t.rootId || (t.rootId = e), "childNodes" in t && t.childNodes.forEach((t => {
                    this.patchRootIdOnNode(t, e);
                }));
            }
        }
        class Ap {
            init() {}
            addShadowRoot() {}
            observeAttachShadow() {}
            reset() {}
        }
        class Mp {
            constructor(t) {
                this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = t.mutationCb, 
                this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror, 
                this.init();
            }
            init() {
                this.reset(), this.patchAttachShadow(Element, document);
            }
            addShadowRoot(t, e) {
                if (!ql(t)) return;
                if (this.shadowDoms.has(t)) return;
                this.shadowDoms.add(t);
                const n = gp({
                    ...this.bypassOptions,
                    doc: e,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, t);
                this.restoreHandlers.push((() => n.disconnect())), this.restoreHandlers.push(vp({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: t,
                    mirror: this.mirror
                })), Vd((() => {
                    t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)), 
                    this.restoreHandlers.push(kp({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, t));
                }), 0);
            }
            observeAttachShadow(t) {
                t.contentWindow && t.contentDocument && this.patchAttachShadow(t.contentWindow.Element, t.contentDocument);
            }
            patchAttachShadow(t, e) {
                const n = this;
                this.restoreHandlers.push(Rd(t.prototype, "attachShadow", (function(t) {
                    return function(r) {
                        const o = t.call(this, r);
                        return this.shadowRoot && Wd(this) && n.addShadowRoot(this.shadowRoot, e), o;
                    };
                })));
            }
            reset() {
                this.restoreHandlers.forEach((t => {
                    try {
                        t();
                    } catch (t) {}
                })), this.restoreHandlers = [], this.shadowDoms = new WeakSet;
            }
        }
        class Np {
            reset() {}
            freeze() {}
            unfreeze() {}
            lock() {}
            unlock() {}
            snapshot() {}
        }
        class Dp {
            constructor(t) {
                this.trackedLinkElements = new WeakSet, this.styleMirror = new Hd, this.mutationCb = t.mutationCb, 
                this.adoptedStyleSheetCb = t.adoptedStyleSheetCb;
            }
            attachLinkElement(t, e) {
                "_cssText" in e.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [ {
                        id: e.id,
                        attributes: e.attributes
                    } ]
                }), this.trackLinkElement(t);
            }
            trackLinkElement(t) {
                this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
            }
            adoptStyleSheets(t, e) {
                if (0 === t.length) return;
                const n = {
                    id: e,
                    styleIds: []
                }, r = [];
                for (const e of t) {
                    let t;
                    this.styleMirror.has(e) ? t = this.styleMirror.getId(e) : (t = this.styleMirror.add(e), 
                    r.push({
                        styleId: t,
                        rules: Array.from(e.rules || CSSRule, ((t, e) => ({
                            rule: Wl(t),
                            index: e
                        })))
                    })), n.styleIds.push(t);
                }
                r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
            }
            reset() {
                this.styleMirror.reset(), this.trackedLinkElements = new WeakSet;
            }
            trackStylesheetInLinkElement(t) {}
        }
        class Pp {
            constructor() {
                this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear();
            }
            periodicallyClear() {
                !function(...t) {
                    Yd("requestAnimationFrame")(...t);
                }((() => {
                    this.clear(), this.loop && this.periodicallyClear();
                }));
            }
            inOtherBuffer(t, e) {
                const n = this.nodeMap.get(t);
                return n && Array.from(n).some((t => t !== e));
            }
            add(t, e) {
                this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(e));
            }
            clear() {
                this.nodeMap = new WeakMap;
            }
            destroy() {
                this.loop = !1;
            }
        }
        let jp, Fp;
        const $p = new Gl;
        function Bp(t = {}) {
            const {emit: e, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: o = "rr-block", blockSelector: i = null, unblockSelector: s = null, ignoreClass: a = "rr-ignore", ignoreSelector: c = null, maskAllText: u = !1, maskTextClass: l = "rr-mask", unmaskTextClass: d = null, maskTextSelector: p = null, unmaskTextSelector: h = null, inlineStylesheet: f = !0, maskAllInputs: m, maskInputOptions: g, slimDOMOptions: y, maskAttributeFn: v, maskInputFn: b, maskTextFn: _, maxCanvasSize: w = null, packFn: S, sampling: x = {}, dataURLOptions: k = {}, mousemoveWait: E, recordCanvas: T = !1, recordCrossOriginIframes: I = !1, recordAfter: C = ("DOMContentLoaded" === t.recordAfter ? t.recordAfter : "load"), userTriggeredOnInput: R = !1, collectFonts: O = !1, inlineImages: L = !1, plugins: A, keepIframeSrcFn: M = (() => !1), ignoreCSSAttributes: N = new Set([]), errorHandler: D, onMutation: P, getCanvasManager: j} = t;
            !function(t) {
                up = t;
            }(D);
            const F = !I || window.parent === window;
            let $ = !1;
            if (!F) try {
                window.parent.document && ($ = !1);
            } catch (t) {
                $ = !0;
            }
            if (F && !e) throw new Error("emit function is required");
            void 0 !== E && void 0 === x.mousemove && (x.mousemove = E), $p.reset();
            const B = !0 === m ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== g ? g : {}, U = !0 === y || "all" === y ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === y,
                headMetaDescKeywords: "all" === y
            } : y || {};
            let H;
            !function(t = window) {
                "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), 
                "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), 
                Node.prototype.contains || (Node.prototype.contains = (...t) => {
                    let e = t[0];
                    if (!(0 in t)) throw new TypeError("1 argument is required");
                    do {
                        if (this === e) return !0;
                    } while (e = e && e.parentNode);
                    return !1;
                });
            }();
            let q = 0;
            const z = t => {
                for (const e of A || []) e.eventProcessor && (t = e.eventProcessor(t));
                return S && !$ && (t = S(t)), t;
            };
            jp = (t, o) => {
                const i = t;
                if (i.timestamp = Od(), !Pu([ fp, "access", t => t[0], "optionalAccess", t => t.isFrozen, "call", t => t() ]) || i.type === Jd.FullSnapshot || i.type === Jd.IncrementalSnapshot && i.data.source === Kd.Mutation || fp.forEach((t => t.unfreeze())), 
                F) Pu([ e, "optionalCall", t => t(z(i), o) ]); else if ($) {
                    const t = {
                        type: "rrweb",
                        event: z(i),
                        origin: window.location.origin,
                        isCheckout: o
                    };
                    window.parent.postMessage(t, "*");
                }
                if (i.type === Jd.FullSnapshot) H = i, q = 0; else if (i.type === Jd.IncrementalSnapshot) {
                    if (i.data.source === Kd.Mutation && i.data.isAttachIframe) return;
                    q++;
                    const t = r && q >= r, e = n && H && i.timestamp - H.timestamp > n;
                    (t || e) && Z(!0);
                }
            };
            const W = t => {
                jp({
                    type: Jd.IncrementalSnapshot,
                    data: {
                        source: Kd.Mutation,
                        ...t
                    }
                });
            }, G = t => jp({
                type: Jd.IncrementalSnapshot,
                data: {
                    source: Kd.Scroll,
                    ...t
                }
            }), Y = t => jp({
                type: Jd.IncrementalSnapshot,
                data: {
                    source: Kd.CanvasMutation,
                    ...t
                }
            }), V = new Dp({
                mutationCb: W,
                adoptedStyleSheetCb: t => jp({
                    type: Jd.IncrementalSnapshot,
                    data: {
                        source: Kd.AdoptedStyleSheet,
                        ...t
                    }
                })
            }), J = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new Op : new Lp({
                mirror: $p,
                mutationCb: W,
                stylesheetManager: V,
                recordCrossOriginIframes: I,
                wrappedEmit: jp
            });
            for (const t of A || []) t.getMirror && t.getMirror({
                nodeMirror: $p,
                crossOriginIframeMirror: J.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: J.crossOriginIframeStyleMirror
            });
            const K = new Pp, X = function(t, e) {
                try {
                    return t ? t(e) : new Np;
                } catch (t) {
                    return new Np;
                }
            }(j, {
                mirror: $p,
                win: window,
                mutationCb: t => jp({
                    type: Jd.IncrementalSnapshot,
                    data: {
                        source: Kd.CanvasMutation,
                        ...t
                    }
                }),
                recordCanvas: T,
                blockClass: o,
                blockSelector: i,
                unblockSelector: s,
                maxCanvasSize: w,
                sampling: x.canvas,
                dataURLOptions: k,
                errorHandler: D
            }), Q = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new Ap : new Mp({
                mutationCb: W,
                scrollCb: G,
                bypassOptions: {
                    onMutation: P,
                    blockClass: o,
                    blockSelector: i,
                    unblockSelector: s,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    inlineStylesheet: f,
                    maskInputOptions: B,
                    dataURLOptions: k,
                    maskAttributeFn: v,
                    maskTextFn: _,
                    maskInputFn: b,
                    recordCanvas: T,
                    inlineImages: L,
                    sampling: x,
                    slimDOMOptions: U,
                    iframeManager: J,
                    stylesheetManager: V,
                    canvasManager: X,
                    keepIframeSrcFn: M,
                    processedNodeManager: K
                },
                mirror: $p
            }), Z = (t = !1) => {
                jp({
                    type: Jd.Meta,
                    data: {
                        href: window.location.href,
                        width: Md(),
                        height: Ad()
                    }
                }, t), V.reset(), Q.init(), fp.forEach((t => t.lock()));
                const e = function(t, e) {
                    const {mirror: n = new Gl, blockClass: r = "rr-block", blockSelector: o = null, unblockSelector: i = null, maskAllText: s = !1, maskTextClass: a = "rr-mask", unmaskTextClass: c = null, maskTextSelector: u = null, unmaskTextSelector: l = null, inlineStylesheet: d = !0, inlineImages: p = !1, recordCanvas: h = !1, maskAllInputs: f = !1, maskAttributeFn: m, maskTextFn: g, maskInputFn: y, slimDOM: v = !1, dataURLOptions: b, preserveWhiteSpace: _, onSerialize: w, onIframeLoad: S, iframeLoadTimeout: x, onStylesheetLoad: k, stylesheetLoadTimeout: E, keepIframeSrcFn: T = (() => !1)} = e || {};
                    return xd(t, {
                        doc: t,
                        mirror: n,
                        blockClass: r,
                        blockSelector: o,
                        unblockSelector: i,
                        maskAllText: s,
                        maskTextClass: a,
                        unmaskTextClass: c,
                        maskTextSelector: u,
                        unmaskTextSelector: l,
                        skipChild: !1,
                        inlineStylesheet: d,
                        maskInputOptions: !0 === f ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0
                        } : !1 === f ? {} : f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: !0 === v || "all" === v ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === v,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === v ? {} : v,
                        dataURLOptions: b,
                        inlineImages: p,
                        recordCanvas: h,
                        preserveWhiteSpace: _,
                        onSerialize: w,
                        onIframeLoad: S,
                        iframeLoadTimeout: x,
                        onStylesheetLoad: k,
                        stylesheetLoadTimeout: E,
                        keepIframeSrcFn: T,
                        newlyAddedElement: !1
                    });
                }(document, {
                    mirror: $p,
                    blockClass: o,
                    blockSelector: i,
                    unblockSelector: s,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    inlineStylesheet: f,
                    maskAllInputs: B,
                    maskAttributeFn: v,
                    maskInputFn: b,
                    maskTextFn: _,
                    slimDOM: U,
                    dataURLOptions: k,
                    recordCanvas: T,
                    inlineImages: L,
                    onSerialize: t => {
                        $d(t, $p) && J.addIframe(t), Bd(t, $p) && V.trackLinkElement(t), Ud(t) && Q.addShadowRoot(t.shadowRoot, document);
                    },
                    onIframeLoad: (t, e) => {
                        J.attachIframe(t, e), Q.observeAttachShadow(t);
                    },
                    onStylesheetLoad: (t, e) => {
                        V.attachLinkElement(t, e);
                    },
                    keepIframeSrcFn: M
                });
                e && (jp({
                    type: Jd.FullSnapshot,
                    data: {
                        node: e,
                        initialOffset: Ld(window)
                    }
                }), fp.forEach((t => t.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && V.adoptStyleSheets(document.adoptedStyleSheets, $p.getId(document)));
            };
            Fp = Z;
            try {
                const t = [], e = t => pp(Ep)({
                    onMutation: P,
                    mutationCb: W,
                    mousemoveCb: (t, e) => jp({
                        type: Jd.IncrementalSnapshot,
                        data: {
                            source: e,
                            positions: t
                        }
                    }),
                    mouseInteractionCb: t => jp({
                        type: Jd.IncrementalSnapshot,
                        data: {
                            source: Kd.MouseInteraction,
                            ...t
                        }
                    }),
                    scrollCb: G,
                    viewportResizeCb: t => jp({
                        type: Jd.IncrementalSnapshot,
                        data: {
                            source: Kd.ViewportResize,
                            ...t
                        }
                    }),
                    inputCb: t => jp({
                        type: Jd.IncrementalSnapshot,
                        data: {
                            source: Kd.Input,
                            ...t
                        }
                    }),
                    mediaInteractionCb: t => jp({
                        type: Jd.IncrementalSnapshot,
                        data: {
                            source: Kd.MediaInteraction,
                            ...t
                        }
                    }),
                    styleSheetRuleCb: t => jp({
                        type: Jd.IncrementalSnapshot,
                        data: {
                            source: Kd.StyleSheetRule,
                            ...t
                        }
                    }),
                    styleDeclarationCb: t => jp({
                        type: Jd.IncrementalSnapshot,
                        data: {
                            source: Kd.StyleDeclaration,
                            ...t
                        }
                    }),
                    canvasMutationCb: Y,
                    fontCb: t => jp({
                        type: Jd.IncrementalSnapshot,
                        data: {
                            source: Kd.Font,
                            ...t
                        }
                    }),
                    selectionCb: t => {
                        jp({
                            type: Jd.IncrementalSnapshot,
                            data: {
                                source: Kd.Selection,
                                ...t
                            }
                        });
                    },
                    customElementCb: t => {
                        jp({
                            type: Jd.IncrementalSnapshot,
                            data: {
                                source: Kd.CustomElement,
                                ...t
                            }
                        });
                    },
                    blockClass: o,
                    ignoreClass: a,
                    ignoreSelector: c,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    maskInputOptions: B,
                    inlineStylesheet: f,
                    sampling: x,
                    recordCanvas: T,
                    inlineImages: L,
                    userTriggeredOnInput: R,
                    collectFonts: O,
                    doc: t,
                    maskAttributeFn: v,
                    maskInputFn: b,
                    maskTextFn: _,
                    keepIframeSrcFn: M,
                    blockSelector: i,
                    unblockSelector: s,
                    slimDOMOptions: U,
                    dataURLOptions: k,
                    mirror: $p,
                    iframeManager: J,
                    stylesheetManager: V,
                    shadowDomManager: Q,
                    processedNodeManager: K,
                    canvasManager: X,
                    ignoreCSSAttributes: N,
                    plugins: Pu([ A, "optionalAccess", t => t.filter, "call", t => t((t => t.observer)), "optionalAccess", t => t.map, "call", t => t((t => ({
                        observer: t.observer,
                        options: t.options,
                        callback: e => jp({
                            type: Jd.Plugin,
                            data: {
                                plugin: t.name,
                                payload: e
                            }
                        })
                    }))) ]) || []
                }, {});
                J.addLoadListener((n => {
                    try {
                        t.push(e(n.contentDocument));
                    } catch (t) {}
                }));
                const n = () => {
                    Z(), t.push(e(document));
                };
                return "interactive" === document.readyState || "complete" === document.readyState ? n() : (t.push(Ed("DOMContentLoaded", (() => {
                    jp({
                        type: Jd.DomContentLoaded,
                        data: {}
                    }), "DOMContentLoaded" === C && n();
                }))), t.push(Ed("load", (() => {
                    jp({
                        type: Jd.Load,
                        data: {}
                    }), "load" === C && n();
                }), window))), () => {
                    t.forEach((t => t())), K.destroy(), Fp = void 0, up = void 0;
                };
            } catch (t) {}
        }
        Bp.mirror = $p, Bp.takeFullSnapshot = function(t) {
            if (!Fp) throw new Error("please take full snapshot after start recording");
            Fp(t);
        };
        function Hp(t) {
            return t > 9999999999 ? t : 1e3 * t;
        }
        function qp(t) {
            return t > 9999999999 ? t / 1e3 : t;
        }
        function zp(t, e) {
            "sentry.transaction" !== e.category && ([ "ui.click", "ui.input" ].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), 
            t.addUpdate((() => (t.throttledAddEvent({
                type: Jd.Custom,
                timestamp: 1e3 * (e.timestamp || 0),
                data: {
                    tag: "breadcrumb",
                    payload: No(e, 10, 1e3)
                }
            }), "console" === e.category))));
        }
        function Gp(t) {
            return t.closest("button,a") || t;
        }
        function Yp(t) {
            const e = Vp(t);
            return e && e instanceof Element ? Gp(e) : e;
        }
        function Vp(t) {
            return function(t) {
                return "object" == typeof t && !!t && "target" in t;
            }(t) ? t.target : t;
        }
        let Jp;
        class Xp {
            constructor(t, e, n = zp) {
                this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = e.timeout / 1e3, 
                this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, 
                this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n;
            }
            addListeners() {
                const t = function(t) {
                    return Jp || (Jp = [], cr(Al, "open", (function(t) {
                        return function(...e) {
                            if (Jp) try {
                                Jp.forEach((t => t()));
                            } catch (t) {}
                            return t.apply(Al, e);
                        };
                    }))), Jp.push(t), () => {
                        const e = Jp ? Jp.indexOf(t) : -1;
                        e > -1 && Jp.splice(e, 1);
                    };
                }((() => {
                    this._lastMutation = Zp();
                }));
                this._teardown = () => {
                    t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0;
                };
            }
            removeListeners() {
                this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
            }
            handleClick(t, e) {
                if (function(t, e) {
                    return !Qp.includes(t.tagName) || ("INPUT" === t.tagName && ![ "submit", "button" ].includes(t.getAttribute("type") || "") || (!("A" !== t.tagName || !(t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target"))) || !(!e || !t.matches(e))));
                }(e, this._ignoreSelector) || !function(t) {
                    return !(!t.data || "number" != typeof t.data.nodeId || !t.timestamp);
                }(t)) return;
                const n = {
                    timestamp: qp(t.timestamp),
                    clickBreadcrumb: t,
                    clickCount: 0,
                    node: e
                };
                this._clicks.some((t => t.node === n.node && Math.abs(t.timestamp - n.timestamp) < 1)) || (this._clicks.push(n), 
                1 === this._clicks.length && this._scheduleCheckClicks());
            }
            registerMutation(t = Date.now()) {
                this._lastMutation = qp(t);
            }
            registerScroll(t = Date.now()) {
                this._lastScroll = qp(t);
            }
            registerClick(t) {
                const e = Gp(t);
                this._handleMultiClick(e);
            }
            _handleMultiClick(t) {
                this._getClicks(t).forEach((t => {
                    t.clickCount++;
                }));
            }
            _getClicks(t) {
                return this._clicks.filter((e => e.node === t));
            }
            _checkClicks() {
                const t = [], e = Zp();
                this._clicks.forEach((n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), 
                    !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), 
                    n.timestamp + this._timeout <= e && t.push(n);
                }));
                for (const e of t) {
                    const t = this._clicks.indexOf(e);
                    t > -1 && (this._generateBreadcrumbs(e), this._clicks.splice(t, 1));
                }
                this._clicks.length && this._scheduleCheckClicks();
            }
            _generateBreadcrumbs(t) {
                const e = this._replay, n = t.scrollAfter && t.scrollAfter <= this._scollTimeout, r = t.mutationAfter && t.mutationAfter <= this._threshold, o = !n && !r, {clickCount: i, clickBreadcrumb: s} = t;
                if (o) {
                    const n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout), r = n < 1e3 * this._timeout ? "mutation" : "timeout", o = {
                        type: "default",
                        message: s.message,
                        timestamp: s.timestamp,
                        category: "ui.slowClickDetected",
                        data: {
                            ...s.data,
                            url: Al.location.href,
                            route: e.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: r,
                            clickCount: i || 1
                        }
                    };
                    this._addBreadcrumbEvent(e, o);
                } else if (i > 1) {
                    const t = {
                        type: "default",
                        message: s.message,
                        timestamp: s.timestamp,
                        category: "ui.multiClick",
                        data: {
                            ...s.data,
                            url: Al.location.href,
                            route: e.getCurrentRoute(),
                            clickCount: i,
                            metric: !0
                        }
                    };
                    this._addBreadcrumbEvent(e, t);
                }
            }
            _scheduleCheckClicks() {
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout((() => this._checkClicks()), 1e3);
            }
        }
        const Qp = [ "A", "BUTTON", "INPUT" ];
        function Zp() {
            return Date.now() / 1e3;
        }
        function eh(t) {
            return {
                timestamp: Date.now() / 1e3,
                type: "default",
                ...t
            };
        }
        var nh;
        !function(t) {
            t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", 
            t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
        }(nh || (nh = {}));
        const rh = new Set([ "id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component" ]);
        function oh(t) {
            const e = {};
            for (const n in t) if (rh.has(n)) {
                let r = n;
                "data-testid" !== n && "data-test-id" !== n || (r = "testId"), e[r] = t[n];
            }
            return e;
        }
        function sh(t, e) {
            const n = Bp.mirror.getId(t), r = n && Bp.mirror.getNode(n), o = r && Bp.mirror.getMeta(r), i = o && function(t) {
                return t.type === nh.Element;
            }(o) ? o : null;
            return {
                message: e,
                data: i ? {
                    nodeId: n,
                    node: {
                        id: n,
                        tagName: i.tagName,
                        textContent: Array.from(i.childNodes).map((t => t.type === nh.Text && t.textContent)).filter(Boolean).map((t => t.trim())).join(""),
                        attributes: oh(i.attributes)
                    }
                } : {}
            };
        }
        const ch = {
            resource: function(t) {
                const {entryType: e, initiatorType: n, name: r, responseEnd: o, startTime: i, decodedBodySize: s, encodedBodySize: a, responseStatus: c, transferSize: u} = t;
                return [ "fetch", "xmlhttprequest" ].includes(n) ? null : {
                    type: `${e}.${n}`,
                    start: lh(i),
                    end: lh(o),
                    name: r,
                    data: {
                        size: u,
                        statusCode: c,
                        decodedBodySize: s,
                        encodedBodySize: a
                    }
                };
            },
            paint: function(t) {
                const {duration: e, entryType: n, name: r, startTime: o} = t, i = lh(o);
                return {
                    type: n,
                    name: r,
                    start: i,
                    end: i + e,
                    data: void 0
                };
            },
            navigation: function(t) {
                const {entryType: e, name: n, decodedBodySize: r, duration: o, domComplete: i, encodedBodySize: s, domContentLoadedEventStart: a, domContentLoadedEventEnd: c, domInteractive: u, loadEventStart: l, loadEventEnd: d, redirectCount: p, startTime: h, transferSize: f, type: m} = t;
                return 0 === o ? null : {
                    type: `${e}.${m}`,
                    start: lh(h),
                    end: lh(i),
                    name: n,
                    data: {
                        size: f,
                        decodedBodySize: r,
                        encodedBodySize: s,
                        duration: o,
                        domInteractive: u,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: c,
                        loadEventStart: l,
                        loadEventEnd: d,
                        domComplete: i,
                        redirectCount: p
                    }
                };
            }
        };
        function uh(t) {
            return ch[t.entryType] ? ch[t.entryType](t) : null;
        }
        function lh(t) {
            return ((jr || Al.performance.timeOrigin) + t) / 1e3;
        }
        const ph = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function fh(t, e) {
            ph && (Dn.info(t), e && gh(t));
        }
        function mh(t, e) {
            ph && (Dn.info(t), e && setTimeout((() => {
                gh(t);
            }), 0));
        }
        function gh(t) {
            Wo({
                category: "console",
                data: {
                    logger: "replay"
                },
                level: "info",
                message: t
            }, {
                level: "info"
            });
        }
        class yh extends Error {
            constructor() {
                super("Event buffer exceeded maximum size of 20000000.");
            }
        }
        class vh {
            constructor() {
                this.events = [], this._totalSize = 0, this.hasCheckout = !1;
            }
            get hasEvents() {
                return this.events.length > 0;
            }
            get type() {
                return "sync";
            }
            destroy() {
                this.events = [];
            }
            async addEvent(t) {
                const e = JSON.stringify(t).length;
                if (this._totalSize += e, this._totalSize > 2e7) throw new yh;
                this.events.push(t);
            }
            finish() {
                return new Promise((t => {
                    const e = this.events;
                    this.clear(), t(JSON.stringify(e));
                }));
            }
            clear() {
                this.events = [], this._totalSize = 0, this.hasCheckout = !1;
            }
            getEarliestTimestamp() {
                const t = this.events.map((t => t.timestamp)).sort()[0];
                return t ? Hp(t) : null;
            }
        }
        class bh {
            constructor(t) {
                this._worker = t, this._id = 0;
            }
            ensureReady() {
                return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise(((t, e) => {
                    this._worker.addEventListener("message", (({data: n}) => {
                        n.success ? t() : e();
                    }), {
                        once: !0
                    }), this._worker.addEventListener("error", (t => {
                        e(t);
                    }), {
                        once: !0
                    });
                }))), this._ensureReadyPromise;
            }
            destroy() {
                fh("[Replay] Destroying compression worker"), this._worker.terminate();
            }
            postMessage(t, e) {
                const n = this._getAndIncrementId();
                return new Promise(((r, o) => {
                    const i = ({data: e}) => {
                        const s = e;
                        if (s.method === t && s.id === n) {
                            if (this._worker.removeEventListener("message", i), !s.success) return ph && Dn.error("[Replay]", s.response), 
                            void o(new Error("Error in compression worker"));
                            r(s.response);
                        }
                    };
                    this._worker.addEventListener("message", i), this._worker.postMessage({
                        id: n,
                        method: t,
                        arg: e
                    });
                }));
            }
            _getAndIncrementId() {
                return this._id++;
            }
        }
        class _h {
            constructor(t) {
                this._worker = new bh(t), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1;
            }
            get hasEvents() {
                return !!this._earliestTimestamp;
            }
            get type() {
                return "worker";
            }
            ensureReady() {
                return this._worker.ensureReady();
            }
            destroy() {
                this._worker.destroy();
            }
            addEvent(t) {
                const e = Hp(t.timestamp);
                (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
                const n = JSON.stringify(t);
                return this._totalSize += n.length, this._totalSize > 2e7 ? Promise.reject(new yh) : this._sendEventToWorker(n);
            }
            finish() {
                return this._finishRequest();
            }
            clear() {
                this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (t => {
                    ph && Dn.warn('[Replay] Sending "clear" message to worker failed', t);
                }));
            }
            getEarliestTimestamp() {
                return this._earliestTimestamp;
            }
            _sendEventToWorker(t) {
                return this._worker.postMessage("addEvent", t);
            }
            async _finishRequest() {
                const t = await this._worker.postMessage("finish");
                return this._earliestTimestamp = null, this._totalSize = 0, t;
            }
        }
        class wh {
            constructor(t) {
                this._fallback = new vh, this._compression = new _h(t), this._used = this._fallback, 
                this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded();
            }
            get type() {
                return this._used.type;
            }
            get hasEvents() {
                return this._used.hasEvents;
            }
            get hasCheckout() {
                return this._used.hasCheckout;
            }
            set hasCheckout(t) {
                this._used.hasCheckout = t;
            }
            destroy() {
                this._fallback.destroy(), this._compression.destroy();
            }
            clear() {
                return this._used.clear();
            }
            getEarliestTimestamp() {
                return this._used.getEarliestTimestamp();
            }
            addEvent(t) {
                return this._used.addEvent(t);
            }
            async finish() {
                return await this.ensureWorkerIsLoaded(), this._used.finish();
            }
            ensureWorkerIsLoaded() {
                return this._ensureWorkerIsLoadedPromise;
            }
            async _ensureWorkerIsLoaded() {
                try {
                    await this._compression.ensureReady();
                } catch (t) {
                    return void fh("[Replay] Failed to load the compression worker, falling back to simple buffer");
                }
                await this._switchToCompressionWorker();
            }
            async _switchToCompressionWorker() {
                const {events: t, hasCheckout: e} = this._fallback, n = [];
                for (const e of t) n.push(this._compression.addEvent(e));
                this._compression.hasCheckout = e, this._used = this._compression;
                try {
                    await Promise.all(n);
                } catch (t) {
                    ph && Dn.warn("[Replay] Failed to add events when switching buffers.", t);
                }
            }
        }
        function xh() {
            try {
                return "sessionStorage" in Al && !!Al.sessionStorage;
            } catch (t) {
                return !1;
            }
        }
        function Eh(t) {
            return void 0 !== t && Math.random() < t;
        }
        function Th(t) {
            const e = Date.now();
            return {
                id: t.id || yr(),
                started: t.started || e,
                lastActivity: t.lastActivity || e,
                segmentId: t.segmentId || 0,
                sampled: t.sampled,
                previousSessionId: t.previousSessionId
            };
        }
        function Ih(t) {
            if (xh()) try {
                Al.sessionStorage.setItem(Ml, JSON.stringify(t));
            } catch (t) {}
        }
        function Ch({sessionSampleRate: t, allowBuffering: e, stickySession: n = !1}, {previousSessionId: r} = {}) {
            const i = Th({
                sampled: function(t, e) {
                    return Eh(t) ? "session" : !!e && "buffer";
                }(t, e),
                previousSessionId: r
            });
            return n && Ih(i), i;
        }
        function Rh(t, e, n = +new Date) {
            return null === t || void 0 === e || e < 0 || 0 !== e && t + e <= n;
        }
        function Oh(t, {maxReplayDuration: e, sessionIdleExpire: n, targetTime: r = Date.now()}) {
            return Rh(t.started, e, r) || Rh(t.lastActivity, n, r);
        }
        function Lh(t, {sessionIdleExpire: e, maxReplayDuration: n}) {
            return !!Oh(t, {
                sessionIdleExpire: e,
                maxReplayDuration: n
            }) && ("buffer" !== t.sampled || 0 !== t.segmentId);
        }
        function Ah({traceInternals: t, sessionIdleExpire: e, maxReplayDuration: n, previousSessionId: r}, o) {
            const i = o.stickySession && function(t) {
                if (!xh()) return null;
                try {
                    const e = Al.sessionStorage.getItem(Ml);
                    if (!e) return null;
                    const n = JSON.parse(e);
                    return mh("[Replay] Loading existing session", t), Th(n);
                } catch (t) {
                    return null;
                }
            }(t);
            return i ? Lh(i, {
                sessionIdleExpire: e,
                maxReplayDuration: n
            }) ? (mh("[Replay] Session in sessionStorage is expired, creating new one..."), 
            Ch(o, {
                previousSessionId: i.id
            })) : i : (mh("[Replay] Creating new session", t), Ch(o, {
                previousSessionId: r
            }));
        }
        function Mh(t, e, n) {
            return !!Dh(t, e) && (Nh(t, e, n), !0);
        }
        async function Nh(t, e, n) {
            if (!t.eventBuffer) return null;
            try {
                n && "buffer" === t.recordingMode && t.eventBuffer.clear(), n && (t.eventBuffer.hasCheckout = !0);
                const r = function(t, e) {
                    try {
                        if ("function" == typeof e && function(t) {
                            return t.type === Jd.Custom;
                        }(t)) return e(t);
                    } catch (t) {
                        return ph && Dn.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), 
                        null;
                    }
                    return t;
                }(e, t.getOptions().beforeAddRecordingEvent);
                if (!r) return;
                return await t.eventBuffer.addEvent(r);
            } catch (e) {
                const n = e && e instanceof yh ? "addEventSizeExceeded" : "addEvent";
                ph && Dn.error(e), await t.stop({
                    reason: n
                });
                const r = ii();
                r && r.recordDroppedEvent("internal_sdk_error", "replay");
            }
        }
        function Dh(t, e) {
            if (!t.eventBuffer || t.isPaused() || !t.isEnabled()) return !1;
            const n = Hp(e.timestamp);
            return !(n + t.timeouts.sessionIdlePause < Date.now() || n > t.getContext().initialTimestamp + t.getOptions().maxReplayDuration && (fh(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`, t.getOptions()._experiments.traceInternals), 
            1));
        }
        function Ph(t) {
            return !t.type;
        }
        function jh(t) {
            return "transaction" === t.type;
        }
        function Fh(t) {
            return "feedback" === t.type;
        }
        function $h(t) {
            const e = function() {
                const t = ii();
                if (!t) return !1;
                const e = t.getTransport();
                return e && e.send.__sentry__baseTransport__ || !1;
            }();
            return (n, r) => {
                if (!t.isEnabled() || !Ph(n) && !jh(n)) return;
                const o = r && r.statusCode;
                e && (!o || o < 200 || o >= 300) || (jh(n) ? function(t, e) {
                    const n = t.getContext();
                    e.contexts && e.contexts.trace && e.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(e.contexts.trace.trace_id);
                }(t, n) : function(t, e) {
                    const n = t.getContext();
                    if (e.event_id && n.errorIds.size < 100 && n.errorIds.add(e.event_id), "buffer" !== t.recordingMode || !e.tags || !e.tags.replayId) return;
                    const {beforeErrorSampling: r} = t.getOptions();
                    ("function" != typeof r || r(e)) && setTimeout((() => {
                        t.sendBufferedReplayOrFlush();
                    }));
                }(t, n));
            };
        }
        function Hh(t, e) {
            return e.map((({type: e, start: n, end: r, name: o, data: i}) => {
                const s = t.throttledAddEvent({
                    type: Jd.Custom,
                    timestamp: n,
                    data: {
                        tag: "performanceSpan",
                        payload: {
                            op: e,
                            description: o,
                            startTimestamp: n,
                            endTimestamp: r,
                            data: i
                        }
                    }
                });
                return "string" == typeof s ? Promise.resolve(null) : s;
            }));
        }
        function zh(t, e) {
            t.isEnabled() && null !== e && (function(t, e) {
                return (!ph || !t.getOptions()._experiments.traceInternals) && ju(e, ii());
            }(t, e.name) || t.addUpdate((() => (Hh(t, [ e ]), !0))));
        }
        function Gh(t, e) {
            if (t) try {
                if ("string" == typeof t) return e.encode(t).length;
                if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
                if (t instanceof FormData) {
                    const n = tf(t);
                    return e.encode(n).length;
                }
                if (t instanceof Blob) return t.size;
                if (t instanceof ArrayBuffer) return t.byteLength;
            } catch (t) {}
        }
        function Yh(t) {
            if (!t) return;
            const e = parseInt(t, 10);
            return isNaN(e) ? void 0 : e;
        }
        function Vh(t) {
            try {
                if ("string" == typeof t) return [ t ];
                if (t instanceof URLSearchParams) return [ t.toString() ];
                if (t instanceof FormData) return [ tf(t) ];
                if (!t) return [ void 0 ];
            } catch (e) {
                return ph && Dn.warn("[Replay] Failed to serialize body", t), [ void 0, "BODY_PARSE_ERROR" ];
            }
            return ph && Dn.info("[Replay] Skipping network body because of body type", t), 
            [ void 0, "UNPARSEABLE_BODY_TYPE" ];
        }
        function Jh(t, e) {
            if (!t) return {
                headers: {},
                size: void 0,
                _meta: {
                    warnings: [ e ]
                }
            };
            const n = {
                ...t._meta
            }, r = n.warnings || [];
            return n.warnings = [ ...r, e ], t._meta = n, t;
        }
        function Kh(t, e) {
            if (!e) return null;
            const {startTimestamp: n, endTimestamp: r, url: o, method: i, statusCode: s, request: a, response: c} = e;
            return {
                type: t,
                start: n / 1e3,
                end: r / 1e3,
                name: o,
                data: mr({
                    method: i,
                    statusCode: s,
                    request: a,
                    response: c
                })
            };
        }
        function Xh(t) {
            return {
                headers: {},
                size: t,
                _meta: {
                    warnings: [ "URL_SKIPPED" ]
                }
            };
        }
        function Qh(t, e, n) {
            if (!e && 0 === Object.keys(t).length) return;
            if (!e) return {
                headers: t
            };
            if (!n) return {
                headers: t,
                size: e
            };
            const r = {
                headers: t,
                size: e
            }, {body: o, warnings: i} = function(t) {
                if (!t || "string" != typeof t) return {
                    body: t
                };
                const e = t.length > 15e4, n = function(t) {
                    const e = t[0], n = t[t.length - 1];
                    return "[" === e && "]" === n || "{" === e && "}" === n;
                }(t);
                if (e) {
                    const e = t.slice(0, 15e4);
                    return n ? {
                        body: e,
                        warnings: [ "MAYBE_JSON_TRUNCATED" ]
                    } : {
                        body: `${e}…`,
                        warnings: [ "TEXT_TRUNCATED" ]
                    };
                }
                if (n) try {
                    return {
                        body: JSON.parse(t)
                    };
                } catch (t) {}
                return {
                    body: t
                };
            }(n);
            return r.body = o, i && i.length > 0 && (r._meta = {
                warnings: i
            }), r;
        }
        function Zh(t, e) {
            return Object.keys(t).reduce(((n, r) => {
                const o = r.toLowerCase();
                return e.includes(o) && t[r] && (n[o] = t[r]), n;
            }), {});
        }
        function tf(t) {
            return new URLSearchParams(t).toString();
        }
        function ef(t, e) {
            return ar(function(t, e = Al.document.baseURI) {
                if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(Al.location.origin)) return t;
                const n = new URL(t, e);
                if (n.origin !== new URL(e).origin) return t;
                const r = n.href;
                return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
            }(t), e);
        }
        function rf(t = []) {
            if (2 === t.length && "object" == typeof t[1]) return t[1].body;
        }
        function of(t, e) {
            const n = {};
            return e.forEach((e => {
                t.get(e) && (n[e] = t.get(e));
            })), n;
        }
        function sf(t, e) {
            if (!t) return {};
            const n = t.headers;
            return n ? n instanceof Headers ? of(n, e) : Array.isArray(n) ? {} : Zh(n, e) : {};
        }
        function uf(t) {
            const e = ii();
            try {
                const n = new TextEncoder, {networkDetailAllowUrls: r, networkDetailDenyUrls: o, networkCaptureBodies: i, networkRequestHeaders: s, networkResponseHeaders: a} = t.getOptions(), c = {
                    replay: t,
                    textEncoder: n,
                    networkDetailAllowUrls: r,
                    networkDetailDenyUrls: o,
                    networkCaptureBodies: i,
                    networkRequestHeaders: s,
                    networkResponseHeaders: a
                };
                e && e.on ? e.on("beforeAddBreadcrumb", ((t, e) => function(t, e, n) {
                    if (e.data) try {
                        (function(t) {
                            return "xhr" === t.category;
                        })(e) && function(t) {
                            return t && t.xhr;
                        }(n) && (function(t, e, n) {
                            const {xhr: r, input: o} = e;
                            if (!r) return;
                            const i = Gh(o, n.textEncoder), s = r.getResponseHeader("content-length") ? Yh(r.getResponseHeader("content-length")) : function(t, e, n) {
                                try {
                                    return Gh("json" === e && t && "object" == typeof t ? JSON.stringify(t) : t, n);
                                } catch (t) {
                                    return;
                                }
                            }(r.response, r.responseType, n.textEncoder);
                            void 0 !== i && (t.data.request_body_size = i), void 0 !== s && (t.data.response_body_size = s);
                        }(e, n, t), async function(t, e, n) {
                            try {
                                const o = Kh("resource.xhr", function(t, e, n) {
                                    const r = Date.now(), {startTimestamp: o = r, endTimestamp: i = r, input: s, xhr: a} = e, {url: c, method: u, status_code: l = 0, request_body_size: d, response_body_size: p} = t.data;
                                    if (!c) return null;
                                    if (!a || !ef(c, n.networkDetailAllowUrls) || ef(c, n.networkDetailDenyUrls)) return {
                                        startTimestamp: o,
                                        endTimestamp: i,
                                        url: c,
                                        method: u,
                                        statusCode: l,
                                        request: Xh(d),
                                        response: Xh(p)
                                    };
                                    const h = a[Js], f = h ? Zh(h.request_headers, n.networkRequestHeaders) : {}, m = Zh(function(t) {
                                        const e = t.getAllResponseHeaders();
                                        return e ? e.split("\r\n").reduce(((t, e) => {
                                            const [n, r] = e.split(": ");
                                            return t[n.toLowerCase()] = r, t;
                                        }), {}) : {};
                                    }(a), n.networkResponseHeaders), [g, y] = n.networkCaptureBodies ? Vh(s) : [ void 0 ], [v, b] = n.networkCaptureBodies ? function(t) {
                                        const e = [];
                                        try {
                                            return [ t.responseText ];
                                        } catch (t) {
                                            e.push(t);
                                        }
                                        try {
                                            return function(t, e) {
                                                try {
                                                    if ("string" == typeof t) return [ t ];
                                                    if (t instanceof Document) return [ t.body.outerHTML ];
                                                    if ("json" === e && t && "object" == typeof t) return [ JSON.stringify(t) ];
                                                    if (!t) return [ void 0 ];
                                                } catch (e) {
                                                    return ph && Dn.warn("[Replay] Failed to serialize body", t), [ void 0, "BODY_PARSE_ERROR" ];
                                                }
                                                return ph && Dn.info("[Replay] Skipping network body because of body type", t), 
                                                [ void 0, "UNPARSEABLE_BODY_TYPE" ];
                                            }(t.response, t.responseType);
                                        } catch (t) {
                                            e.push(t);
                                        }
                                        return ph && Dn.warn("[Replay] Failed to get xhr response body", ...e), [ void 0 ];
                                    }(a) : [ void 0 ], _ = Qh(f, d, g), w = Qh(m, p, v);
                                    return {
                                        startTimestamp: o,
                                        endTimestamp: i,
                                        url: c,
                                        method: u,
                                        statusCode: l,
                                        request: y ? Jh(_, y) : _,
                                        response: b ? Jh(w, b) : w
                                    };
                                }(t, e, n));
                                zh(n.replay, o);
                            } catch (t) {
                                ph && Dn.error("[Replay] Failed to capture xhr breadcrumb", t);
                            }
                        }(e, n, t)), function(t) {
                            return "fetch" === t.category;
                        }(e) && function(t) {
                            return t && t.response;
                        }(n) && (function(t, e, n) {
                            const {input: r, response: o} = e, i = Gh(r ? rf(r) : void 0, n.textEncoder), s = o ? Yh(o.headers.get("content-length")) : void 0;
                            void 0 !== i && (t.data.request_body_size = i), void 0 !== s && (t.data.response_body_size = s);
                        }(e, n, t), async function(t, e, n) {
                            try {
                                const o = Kh("resource.fetch", await async function(t, e, n) {
                                    const r = Date.now(), {startTimestamp: o = r, endTimestamp: i = r} = e, {url: s, method: a, status_code: c = 0, request_body_size: u, response_body_size: l} = t.data, d = ef(s, n.networkDetailAllowUrls) && !ef(s, n.networkDetailDenyUrls);
                                    return {
                                        startTimestamp: o,
                                        endTimestamp: i,
                                        url: s,
                                        method: a,
                                        statusCode: c,
                                        request: d ? function({networkCaptureBodies: t, networkRequestHeaders: e}, n, r) {
                                            const o = n ? function(t, e) {
                                                return 1 === t.length && "string" != typeof t[0] ? sf(t[0], e) : 2 === t.length ? sf(t[1], e) : {};
                                            }(n, e) : {};
                                            if (!t) return Qh(o, r, void 0);
                                            const i = rf(n), [s, a] = Vh(i), c = Qh(o, r, s);
                                            return a ? Jh(c, a) : c;
                                        }(n, e.input, u) : Xh(u),
                                        response: await async function(t, {networkCaptureBodies: e, textEncoder: n, networkResponseHeaders: r}, o, i) {
                                            if (!t && void 0 !== i) return Xh(i);
                                            const s = o ? of(o.headers, r) : {};
                                            if (!o || !e && void 0 !== i) return Qh(s, i, void 0);
                                            const [a, c] = await async function(t) {
                                                const e = function(t) {
                                                    try {
                                                        return t.clone();
                                                    } catch (t) {
                                                        ph && Dn.warn("[Replay] Failed to clone response body", t);
                                                    }
                                                }(t);
                                                if (!e) return [ void 0, "BODY_PARSE_ERROR" ];
                                                try {
                                                    return [ await function(t) {
                                                        return new Promise(((e, n) => {
                                                            const r = setTimeout((() => n(new Error("Timeout while trying to read response body"))), 500);
                                                            (async function(t) {
                                                                return await t.text();
                                                            })(t).then((t => e(t)), (t => n(t))).finally((() => clearTimeout(r)));
                                                        }));
                                                    }(e) ];
                                                } catch (t) {
                                                    return ph && Dn.warn("[Replay] Failed to get text body from response", t), [ void 0, "BODY_PARSE_ERROR" ];
                                                }
                                            }(o), u = function(t, {networkCaptureBodies: e, textEncoder: n, responseBodySize: r, captureDetails: o, headers: i}) {
                                                try {
                                                    const s = t && t.length && void 0 === r ? Gh(t, n) : r;
                                                    return o ? Qh(i, s, e ? t : void 0) : Xh(s);
                                                } catch (t) {
                                                    return ph && Dn.warn("[Replay] Failed to serialize response body", t), Qh(i, r, void 0);
                                                }
                                            }(a, {
                                                networkCaptureBodies: e,
                                                textEncoder: n,
                                                responseBodySize: i,
                                                captureDetails: t,
                                                headers: s
                                            });
                                            return c ? Jh(u, c) : u;
                                        }(d, n, e.response, l)
                                    };
                                }(t, e, n));
                                zh(n.replay, o);
                            } catch (t) {
                                ph && Dn.error("[Replay] Failed to capture fetch breadcrumb", t);
                            }
                        }(e, n, t));
                    } catch (t) {
                        ph && Dn.warn("Error when enriching network breadcrumb");
                    }
                }(c, t, e))) : (Qs(function(t) {
                    return e => {
                        if (!t.isEnabled()) return;
                        const n = function(t) {
                            const {startTimestamp: e, endTimestamp: n, fetchData: r, response: o} = t;
                            if (!n) return null;
                            const {method: i, url: s} = r;
                            return {
                                type: "resource.fetch",
                                start: e / 1e3,
                                end: n / 1e3,
                                name: s,
                                data: {
                                    method: i,
                                    statusCode: o ? o.status : void 0
                                }
                            };
                        }(e);
                        zh(t, n);
                    };
                }(t)), Ks(function(t) {
                    return e => {
                        if (!t.isEnabled()) return;
                        const n = function(t) {
                            const {startTimestamp: e, endTimestamp: n, xhr: r} = t, o = r[Js];
                            if (!e || !n || !o) return null;
                            const {method: i, url: s, status_code: a} = o;
                            return void 0 === s ? null : {
                                type: "resource.xhr",
                                name: s,
                                start: e / 1e3,
                                end: n / 1e3,
                                data: {
                                    method: i,
                                    statusCode: a
                                }
                            };
                        }(e);
                        zh(t, n);
                    };
                }(t)));
            } catch (t) {}
        }
        let lf = null;
        function pf(t) {
            return !(!t || !t.on);
        }
        function hf(t) {
            const {jsHeapSizeLimit: e, totalJSHeapSize: n, usedJSHeapSize: r} = t, o = Date.now() / 1e3;
            return {
                type: "memory",
                name: "memory",
                start: o,
                end: o,
                data: {
                    memory: {
                        jsHeapSizeLimit: e,
                        totalJSHeapSize: n,
                        usedJSHeapSize: r
                    }
                }
            };
        }
        function ff(t) {
            let e = !1;
            return (n, r) => {
                if (!t.checkAndHandleExpiredSession()) return void (ph && Dn.warn("[Replay] Received replay event after session expired."));
                const o = r || !e;
                e = !0, t.clickDetector && function(t, e) {
                    try {
                        if (!function(t) {
                            return 3 === t.type;
                        }(e)) return;
                        const {source: n} = e.data;
                        if (n === Kd.Mutation && t.registerMutation(e.timestamp), n === Kd.Scroll && t.registerScroll(e.timestamp), 
                        function(t) {
                            return t.data.source === Kd.MouseInteraction;
                        }(e)) {
                            const {type: n, id: r} = e.data, o = Bp.mirror.getNode(r);
                            o instanceof HTMLElement && n === Xd.Click && t.registerClick(o);
                        }
                    } catch (t) {}
                }(t.clickDetector, n), t.addUpdate((() => {
                    if ("buffer" === t.recordingMode && o && t.setInitialState(), !Mh(t, n, o)) return !0;
                    if (!o) return !1;
                    if (function(t, e) {
                        e && t.session && 0 === t.session.segmentId && Mh(t, function(t) {
                            const e = t.getOptions();
                            return {
                                type: Jd.Custom,
                                timestamp: Date.now(),
                                data: {
                                    tag: "options",
                                    payload: {
                                        shouldRecordCanvas: t.isRecordingCanvas(),
                                        sessionSampleRate: e.sessionSampleRate,
                                        errorSampleRate: e.errorSampleRate,
                                        useCompressionOption: e.useCompression,
                                        blockAllMedia: e.blockAllMedia,
                                        maskAllText: e.maskAllText,
                                        maskAllInputs: e.maskAllInputs,
                                        useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                                        networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                                        networkCaptureBodies: e.networkCaptureBodies,
                                        networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                                        networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                                    }
                                }
                            };
                        }(t), !1);
                    }(t, o), t.session && t.session.previousSessionId) return !0;
                    if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
                        const e = t.eventBuffer.getEarliestTimestamp();
                        e && (fh(`[Replay] Updating session start time to earliest event in buffer to ${new Date(e)}`, t.getOptions()._experiments.traceInternals), 
                        t.session.started = e, t.getOptions().stickySession && Ih(t.session));
                    }
                    return "session" === t.recordingMode && t.flush(), !0;
                }));
            };
        }
        class gf extends Error {
            constructor(t) {
                super(`Transport returned status code ${t}`);
            }
        }
        class yf extends Error {
            constructor(t) {
                super("Rate limit hit"), this.rateLimits = t;
            }
        }
        async function vf(t, e = {
            count: 0,
            interval: 5e3
        }) {
            const {recordingData: n, options: r} = t;
            if (n.length) try {
                return await async function({recordingData: t, replayId: e, segmentId: n, eventContext: r, timestamp: o, session: i}) {
                    const s = function({recordingData: t, headers: e}) {
                        let n;
                        const r = `${JSON.stringify(e)}\n`;
                        if ("string" == typeof t) n = `${r}${t}`; else {
                            const e = (new TextEncoder).encode(r);
                            n = new Uint8Array(e.length + t.length), n.set(e), n.set(t, e.length);
                        }
                        return n;
                    }({
                        recordingData: t,
                        headers: {
                            segment_id: n
                        }
                    }), {urls: a, errorIds: c, traceIds: u, initialTimestamp: l} = r, d = ii(), p = ai(), h = d && d.getTransport(), f = d && d.getDsn();
                    if (!(d && h && f && i.sampled)) return;
                    const m = {
                        type: "replay_event",
                        replay_start_timestamp: l / 1e3,
                        timestamp: o / 1e3,
                        error_ids: c,
                        trace_ids: u,
                        urls: a,
                        replay_id: e,
                        segment_id: n,
                        replay_type: i.sampled
                    }, g = await async function({client: t, scope: e, replayId: n, event: r}) {
                        const o = {
                            event_id: n,
                            integrations: "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations)
                        };
                        t.emit && t.emit("preprocessEvent", r, o);
                        const i = await jo(t.getOptions(), r, o, e, t, So());
                        if (!i) return null;
                        i.platform = i.platform || "javascript";
                        const s = t.getSdkMetadata && t.getSdkMetadata(), {name: a, version: c} = s && s.sdk || {};
                        return i.sdk = {
                            ...i.sdk,
                            name: a || "sentry.javascript.unknown",
                            version: c || "0.0.0"
                        }, i;
                    }({
                        scope: p,
                        client: d,
                        replayId: e,
                        event: m
                    });
                    if (!g) return d.recordDroppedEvent("event_processor", "replay", m), void fh("An event processor returned `null`, will not send event.");
                    delete g.sdkProcessingMetadata;
                    const y = function(t, e, n, r) {
                        return Zi(cs(t, as(t), r, n), [ [ {
                            type: "replay_event"
                        }, t ], [ {
                            type: "replay_recording",
                            length: "string" == typeof e ? (new TextEncoder).encode(e).length : e.length
                        }, e ] ]);
                    }(g, s, f, d.getOptions().tunnel);
                    let v;
                    try {
                        v = await h.send(y);
                    } catch (t) {
                        const e = new Error(Dl);
                        try {
                            e.cause = t;
                        } catch (t) {}
                        throw e;
                    }
                    if (!v) return v;
                    if ("number" == typeof v.statusCode && (v.statusCode < 200 || v.statusCode >= 300)) throw new gf(v.statusCode);
                    const b = hc({}, v);
                    if (pc(b, "replay")) throw new yf(b);
                    return v;
                }(t), !0;
            } catch (n) {
                if (n instanceof gf || n instanceof yf) throw n;
                if (Go("Replays", {
                    _retryCount: e.count
                }), ph && r._experiments && r._experiments.captureExceptions && Uo(n), e.count >= 3) {
                    const t = new Error(`${Dl} - max retries exceeded`);
                    try {
                        t.cause = n;
                    } catch (t) {}
                    throw t;
                }
                return e.interval *= ++e.count, new Promise(((n, r) => {
                    setTimeout((async () => {
                        try {
                            await vf(t, e), n(!0);
                        } catch (t) {
                            r(t);
                        }
                    }), e.interval);
                }));
            }
        }
        const bf = "__THROTTLED";
        class wf {
            constructor({options: t, recordingOptions: e}) {
                wf.prototype.__init.call(this), wf.prototype.__init2.call(this), wf.prototype.__init3.call(this), 
                wf.prototype.__init4.call(this), wf.prototype.__init5.call(this), wf.prototype.__init6.call(this), 
                this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], 
                this.recordingMode = "session", this.timeouts = {
                    sessionIdlePause: 3e5,
                    sessionIdleExpire: 9e5
                }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, 
                this._context = {
                    errorIds: new Set,
                    traceIds: new Set,
                    urls: [],
                    initialTimestamp: Date.now(),
                    initialUrl: ""
                }, this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
                    let r, o, i;
                    const s = n && n.maxWait ? Math.max(n.maxWait, e) : 0;
                    function a() {
                        return c(), r = t(), r;
                    }
                    function c() {
                        void 0 !== o && clearTimeout(o), void 0 !== i && clearTimeout(i), o = i = void 0;
                    }
                    function u() {
                        return o && clearTimeout(o), o = setTimeout(a, e), s && void 0 === i && (i = setTimeout(a, s)), 
                        r;
                    }
                    return u.cancel = c, u.flush = function() {
                        return void 0 !== o || void 0 !== i ? a() : r;
                    }, u;
                }((() => this._flush()), this._options.flushMinDelay, {
                    maxWait: this._options.flushMaxDelay
                }), this._throttledAddEvent = function(t, e, n) {
                    const r = new Map;
                    let o = !1;
                    return (...i) => {
                        const s = Math.floor(Date.now() / 1e3);
                        if ((t => {
                            const e = t - n;
                            r.forEach(((t, n) => {
                                n < e && r.delete(n);
                            }));
                        })(s), [ ...r.values() ].reduce(((t, e) => t + e), 0) >= e) {
                            const t = o;
                            return o = !0, t ? "__SKIPPED" : bf;
                        }
                        o = !1;
                        const a = r.get(s) || 0;
                        return r.set(s, a + 1), t(...i);
                    };
                }(((t, e) => function(t, e, n) {
                    return Dh(t, e) ? Nh(t, e, n) : Promise.resolve(null);
                }(this, t, e)), 300, 5);
                const {slowClickTimeout: n, slowClickIgnoreSelectors: r} = this.getOptions(), o = n ? {
                    threshold: Math.min(3e3, n),
                    timeout: n,
                    scrollTimeout: 300,
                    ignoreSelector: r ? r.join(",") : ""
                } : void 0;
                o && (this.clickDetector = new Xp(this, o));
            }
            getContext() {
                return this._context;
            }
            isEnabled() {
                return this._isEnabled;
            }
            isPaused() {
                return this._isPaused;
            }
            isRecordingCanvas() {
                return Boolean(this._canvas);
            }
            getOptions() {
                return this._options;
            }
            initializeSampling(t) {
                const {errorSampleRate: e, sessionSampleRate: n} = this._options;
                e <= 0 && n <= 0 || (this._initializeSessionForSampling(t), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", 
                mh(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), 
                this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")));
            }
            start() {
                if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
                if (this._isEnabled && "buffer" === this.recordingMode) throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
                mh("[Replay] Starting replay in session mode", this._options._experiments.traceInternals), 
                this._updateUserActivity();
                const t = Ah({
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    traceInternals: this._options._experiments.traceInternals
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 1,
                    allowBuffering: !1
                });
                this.session = t, this._initializeRecording();
            }
            startBuffering() {
                if (this._isEnabled) throw new Error("Replay recording is already in progress");
                mh("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
                const t = Ah({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 0,
                    allowBuffering: !0
                });
                this.session = t, this.recordingMode = "buffer", this._initializeRecording();
            }
            startRecording() {
                try {
                    const t = this._canvas;
                    this._stopRecording = Bp({
                        ...this._recordingOptions,
                        ..."buffer" === this.recordingMode && {
                            checkoutEveryNms: 6e4
                        },
                        emit: ff(this),
                        onMutation: this._onMutationHandler,
                        ...t ? {
                            recordCanvas: t.recordCanvas,
                            getCanvasManager: t.getCanvasManager,
                            sampling: t.sampling,
                            dataURLOptions: t.dataURLOptions
                        } : {}
                    });
                } catch (t) {
                    this._handleException(t);
                }
            }
            stopRecording() {
                try {
                    return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), 
                    !0;
                } catch (t) {
                    return this._handleException(t), !1;
                }
            }
            async stop({forceFlush: t = !1, reason: e} = {}) {
                if (this._isEnabled) {
                    this._isEnabled = !1;
                    try {
                        fh("[Replay] Stopping Replay" + (e ? ` triggered by ${e}` : ""), this._options._experiments.traceInternals), 
                        this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), t && await this._flush({
                            force: !0
                        }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, function(t) {
                            !function() {
                                if (xh()) try {
                                    Al.sessionStorage.removeItem(Ml);
                                } catch (t) {}
                            }(), t.session = void 0;
                        }(this);
                    } catch (t) {
                        this._handleException(t);
                    }
                }
            }
            pause() {
                this._isPaused || (this._isPaused = !0, this.stopRecording(), fh("[Replay] Pausing replay", this._options._experiments.traceInternals));
            }
            resume() {
                this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), 
                fh("[Replay] Resuming replay", this._options._experiments.traceInternals));
            }
            async sendBufferedReplayOrFlush({continueRecording: t = !0} = {}) {
                if ("session" === this.recordingMode) return this.flushImmediate();
                const e = Date.now();
                fh("[Replay] Converting buffer to session", this._options._experiments.traceInternals), 
                await this.flushImmediate();
                const n = this.stopRecording();
                t && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(e), 
                this._updateSessionActivity(e), this._maybeSaveSession()), this.startRecording());
            }
            addUpdate(t) {
                const e = t();
                "buffer" !== this.recordingMode && !0 !== e && this._debouncedFlush();
            }
            triggerUserActivity() {
                if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), 
                this._updateSessionActivity(); else {
                    if (!this._checkSession()) return;
                    this.resume();
                }
            }
            updateUserActivity() {
                this._updateUserActivity(), this._updateSessionActivity();
            }
            conditionalFlush() {
                return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate();
            }
            flush() {
                return this._debouncedFlush();
            }
            flushImmediate() {
                return this._debouncedFlush(), this._debouncedFlush.flush();
            }
            cancelFlush() {
                this._debouncedFlush.cancel();
            }
            getSessionId() {
                return this.session && this.session.id;
            }
            checkAndHandleExpiredSession() {
                if (!(this._lastActivity && Rh(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled)) return !!this._checkSession();
                this.pause();
            }
            setInitialState() {
                const t = `${Al.location.pathname}${Al.location.hash}${Al.location.search}`, e = `${Al.location.origin}${t}`;
                this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), 
                this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e);
            }
            throttledAddEvent(t, e) {
                const n = this._throttledAddEvent(t, e);
                if (n === bf) {
                    const t = eh({
                        category: "replay.throttled"
                    });
                    this.addUpdate((() => !Mh(this, {
                        type: 5,
                        timestamp: t.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: t,
                            metric: !0
                        }
                    })));
                }
                return n;
            }
            getCurrentRoute() {
                const t = this.lastTransaction || ai().getTransaction(), e = (t && oo(t).data || {})[Bc];
                if (t && e && [ "route", "custom" ].includes(e)) return oo(t).description;
            }
            _initializeRecording() {
                this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({useCompression: t, workerUrl: e}) {
                    if (t && window.Worker) {
                        const t = function(t) {
                            try {
                                const e = t || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                    const t = new Blob([ 'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});' ]);
                                    return URL.createObjectURL(t);
                                }());
                                if (!e) return;
                                fh("[Replay] Using compression worker" + (t ? ` from ${t}` : ""));
                                const n = new Worker(e);
                                return new wh(n);
                            } catch (t) {
                                fh("[Replay] Failed to create compression worker");
                            }
                        }(e);
                        if (t) return t;
                    }
                    return fh("[Replay] Using simple buffer"), new vh;
                }({
                    useCompression: this._options.useCompression,
                    workerUrl: this._options.workerUrl
                }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, 
                this.startRecording();
            }
            _handleException(t) {
                ph && Dn.error("[Replay]", t), ph && this._options._experiments && this._options._experiments.captureExceptions && Uo(t);
            }
            _initializeSessionForSampling(t) {
                const e = this._options.errorSampleRate > 0, n = Ah({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: t
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: e
                });
                this.session = n;
            }
            _checkSession() {
                if (!this.session) return !1;
                const t = this.session;
                return !Lh(t, {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }) || (this._refreshSession(t), !1);
            }
            async _refreshSession(t) {
                this._isEnabled && (await this.stop({
                    reason: "refresh session"
                }), this.initializeSampling(t.id));
            }
            _addListeners() {
                try {
                    Al.document.addEventListener("visibilitychange", this._handleVisibilityChange), 
                    Al.addEventListener("blur", this._handleWindowBlur), Al.addEventListener("focus", this._handleWindowFocus), 
                    Al.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), 
                    this._hasInitializedCoreListeners || (function(t) {
                        const e = ai(), n = ii();
                        e.addScopeListener((t => e => {
                            if (!t.isEnabled()) return;
                            const n = function(t) {
                                const e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                                return lf !== e && e ? (lf = e, !function(t) {
                                    return !!t.category;
                                }(e) || [ "fetch", "xhr", "sentry.event", "sentry.transaction" ].includes(e.category) || e.category.startsWith("ui.") ? null : "console" === e.category ? function(t) {
                                    const e = t.data && t.data.arguments;
                                    if (!Array.isArray(e) || 0 === e.length) return eh(t);
                                    let n = !1;
                                    const r = e.map((t => {
                                        if (!t) return t;
                                        if ("string" == typeof t) return t.length > 5e3 ? (n = !0, `${t.slice(0, 5e3)}…`) : t;
                                        if ("object" == typeof t) try {
                                            const e = No(t, 7);
                                            return JSON.stringify(e).length > 5e3 ? (n = !0, `${JSON.stringify(e, null, 2).slice(0, 5e3)}…`) : e;
                                        } catch (t) {}
                                        return t;
                                    }));
                                    return eh({
                                        ...t,
                                        data: {
                                            ...t.data,
                                            arguments: r,
                                            ...n ? {
                                                _meta: {
                                                    warnings: [ "CONSOLE_ARG_TRUNCATED" ]
                                                }
                                            } : {}
                                        }
                                    });
                                }(e) : eh(e)) : null;
                            }(e);
                            n && zp(t, n);
                        })(t)), Ws((t => e => {
                            if (!t.isEnabled()) return;
                            const n = function(t) {
                                const {target: e, message: n} = function(t) {
                                    const e = "click" === t.name;
                                    let n, r = null;
                                    try {
                                        r = e ? Yp(t.event) : Vp(t.event), n = Qn(r, {
                                            maxStringLength: 200
                                        }) || "<unknown>";
                                    } catch (t) {
                                        n = "<unknown>";
                                    }
                                    return {
                                        target: r,
                                        message: n
                                    };
                                }(t);
                                return eh({
                                    category: `ui.${t.name}`,
                                    ...sh(e, n)
                                });
                            }(e);
                            if (!n) return;
                            const r = "click" === e.name, o = r ? e.event : void 0;
                            !(r && t.clickDetector && o && o.target) || o.altKey || o.metaKey || o.ctrlKey || o.shiftKey || function(t, e, n) {
                                t.handleClick(e, n);
                            }(t.clickDetector, n, Yp(e.event)), zp(t, n);
                        })(t)), Xi(function(t) {
                            return e => {
                                if (!t.isEnabled()) return;
                                const n = function(t) {
                                    const {from: e, to: n} = t, r = Date.now() / 1e3;
                                    return {
                                        type: "navigation.push",
                                        start: r,
                                        end: r,
                                        name: n,
                                        data: {
                                            previous: e
                                        }
                                    };
                                }(e);
                                null !== n && (t.getContext().urls.push(n.name), t.triggerUserActivity(), t.addUpdate((() => (Hh(t, [ n ]), 
                                !1))));
                            };
                        }(t)), uf(t);
                        const r = function(t, e = !1) {
                            const n = e ? $h(t) : void 0;
                            return Object.assign(((e, r) => t.isEnabled() ? function(t) {
                                return "replay_event" === t.type;
                            }(e) ? (delete e.breadcrumbs, e) : (Ph(e) || jh(e) || Fh(e)) && t.checkAndHandleExpiredSession() ? Fh(e) ? (t.flush(), 
                            e.contexts.feedback.replay_id = t.getSessionId(), function(t, e) {
                                t.triggerUserActivity(), t.addUpdate((() => !e.timestamp || (t.throttledAddEvent({
                                    type: Jd.Custom,
                                    timestamp: 1e3 * e.timestamp,
                                    data: {
                                        tag: "breadcrumb",
                                        payload: {
                                            timestamp: e.timestamp,
                                            type: "default",
                                            category: "sentry.feedback",
                                            data: {
                                                feedbackId: e.event_id
                                            }
                                        }
                                    }
                                }), !1)));
                            }(t, e), e) : function(t, e) {
                                return !(t.type || !t.exception || !t.exception.values || !t.exception.values.length || !e.originalException || !e.originalException.__rrweb__);
                            }(e, r) && !t.getOptions()._experiments.captureExceptions ? (ph && Dn.log("[Replay] Ignoring error from rrweb internals", e), 
                            null) : ((function(t, e) {
                                return "buffer" === t.recordingMode && e.message !== Dl && !(!e.exception || e.type) && Eh(t.getOptions().errorSampleRate);
                            }(t, e) || "session" === t.recordingMode) && (e.tags = {
                                ...e.tags,
                                replayId: t.getSessionId()
                            }), n && n(e, {
                                statusCode: 200
                            }), e) : e : e), {
                                id: "Replay"
                            });
                        }(t, !pf(n));
                        n && n.addEventProcessor ? n.addEventProcessor(r) : bs(r), pf(n) && (n.on("beforeSendEvent", function(t) {
                            return e => {
                                t.isEnabled() && Ph(e) && function(t, e) {
                                    const n = e.exception && e.exception.values && e.exception.values[0].value;
                                    "string" == typeof n && (n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && zp(t, eh({
                                        category: "replay.hydrate-error"
                                    }));
                                }(t, e);
                            };
                        }(t)), n.on("afterSendEvent", $h(t)), n.on("createDsc", (e => {
                            const n = t.getSessionId();
                            n && t.isEnabled() && "session" === t.recordingMode && t.checkAndHandleExpiredSession() && (e.replay_id = n);
                        })), n.on("startTransaction", (e => {
                            t.lastTransaction = e;
                        })), n.on("finishTransaction", (e => {
                            t.lastTransaction = e;
                        })), n.on("beforeSendFeedback", ((e, n) => {
                            const r = t.getSessionId();
                            n && n.includeReplay && t.isEnabled() && r && e.contexts && e.contexts.feedback && (e.contexts.feedback.replay_id = r);
                        })));
                    }(this), this._hasInitializedCoreListeners = !0);
                } catch (t) {
                    this._handleException(t);
                }
                this._performanceCleanupCallback = function(t) {
                    function e(e) {
                        t.performanceEntries.includes(e) || t.performanceEntries.push(e);
                    }
                    function n({entries: t}) {
                        t.forEach(e);
                    }
                    const r = [];
                    return [ "navigation", "paint", "resource" ].forEach((t => {
                        r.push(Sl(t, n));
                    })), r.push(wl((({metric: e}) => {
                        t.replayPerformanceEntries.push(function(t) {
                            const e = t.entries, n = e[e.length - 1], r = n ? n.element : void 0, o = t.value, i = lh(o);
                            return {
                                type: "largest-contentful-paint",
                                name: "largest-contentful-paint",
                                start: i,
                                end: i,
                                data: {
                                    value: o,
                                    size: o,
                                    nodeId: r ? Bp.mirror.getId(r) : void 0
                                }
                            };
                        }(e));
                    }))), () => {
                        r.forEach((t => t()));
                    };
                }(this);
            }
            _removeListeners() {
                try {
                    Al.document.removeEventListener("visibilitychange", this._handleVisibilityChange), 
                    Al.removeEventListener("blur", this._handleWindowBlur), Al.removeEventListener("focus", this._handleWindowFocus), 
                    Al.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), 
                    this._performanceCleanupCallback && this._performanceCleanupCallback();
                } catch (t) {
                    this._handleException(t);
                }
            }
            __init() {
                this._handleVisibilityChange = () => {
                    "visible" === Al.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks();
                };
            }
            __init2() {
                this._handleWindowBlur = () => {
                    const t = eh({
                        category: "ui.blur"
                    });
                    this._doChangeToBackgroundTasks(t);
                };
            }
            __init3() {
                this._handleWindowFocus = () => {
                    const t = eh({
                        category: "ui.focus"
                    });
                    this._doChangeToForegroundTasks(t);
                };
            }
            __init4() {
                this._handleKeyboardEvent = t => {
                    !function(t, e) {
                        if (!t.isEnabled()) return;
                        t.updateUserActivity();
                        const n = function(t) {
                            const {metaKey: e, shiftKey: n, ctrlKey: r, altKey: o, key: i, target: s} = t;
                            if (!s || function(t) {
                                return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable;
                            }(s) || !i) return null;
                            const a = e || r || o, c = 1 === i.length;
                            if (!a && c) return null;
                            const u = Qn(s, {
                                maxStringLength: 200
                            }) || "<unknown>";
                            return eh({
                                category: "ui.keyDown",
                                message: u,
                                data: {
                                    ...sh(s, u).data,
                                    metaKey: e,
                                    shiftKey: n,
                                    ctrlKey: r,
                                    altKey: o,
                                    key: i
                                }
                            });
                        }(e);
                        n && zp(t, n);
                    }(this, t);
                };
            }
            _doChangeToBackgroundTasks(t) {
                this.session && (Oh(this.session, {
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }) || (t && this._createCustomBreadcrumb(t), this.conditionalFlush()));
            }
            _doChangeToForegroundTasks(t) {
                this.session && (this.checkAndHandleExpiredSession() ? t && this._createCustomBreadcrumb(t) : fh("[Replay] Document has become active, but session has expired"));
            }
            _updateUserActivity(t = Date.now()) {
                this._lastActivity = t;
            }
            _updateSessionActivity(t = Date.now()) {
                this.session && (this.session.lastActivity = t, this._maybeSaveSession());
            }
            _createCustomBreadcrumb(t) {
                this.addUpdate((() => {
                    this.throttledAddEvent({
                        type: Jd.Custom,
                        timestamp: t.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: t
                        }
                    });
                }));
            }
            _addPerformanceEntries() {
                const t = (e = this.performanceEntries, e.map(uh).filter(Boolean)).concat(this.replayPerformanceEntries);
                var e;
                return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all(Hh(this, t));
            }
            _clearContext() {
                this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = [];
            }
            _updateInitialTimestampFromEventBuffer() {
                const {session: t, eventBuffer: e} = this;
                if (!t || !e) return;
                if (t.segmentId) return;
                const n = e.getEarliestTimestamp();
                n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n);
            }
            _popEventContext() {
                const t = {
                    initialTimestamp: this._context.initialTimestamp,
                    initialUrl: this._context.initialUrl,
                    errorIds: Array.from(this._context.errorIds),
                    traceIds: Array.from(this._context.traceIds),
                    urls: this._context.urls
                };
                return this._clearContext(), t;
            }
            async _runFlush() {
                const t = this.getSessionId();
                if (this.session && this.eventBuffer && t) {
                    if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await async function(t) {
                        try {
                            return Promise.all(Hh(t, [ hf(Al.performance.memory) ]));
                        } catch (t) {
                            return [];
                        }
                    }(this), this.eventBuffer && t === this.getSessionId())) try {
                        this._updateInitialTimestampFromEventBuffer();
                        const e = Date.now();
                        if (e - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new Error("Session is too long, not sending replay");
                        const n = this._popEventContext(), r = this.session.segmentId++;
                        this._maybeSaveSession();
                        const o = await this.eventBuffer.finish();
                        await vf({
                            replayId: t,
                            recordingData: o,
                            segmentId: r,
                            eventContext: n,
                            session: this.session,
                            options: this.getOptions(),
                            timestamp: e
                        });
                    } catch (t) {
                        this._handleException(t), this.stop({
                            reason: "sendReplay"
                        });
                        const e = ii();
                        e && e.recordDroppedEvent("send_error", "replay");
                    }
                } else ph && Dn.error("[Replay] No session or eventBuffer found to flush.");
            }
            __init5() {
                this._flush = async ({force: t = !1} = {}) => {
                    if (!this._isEnabled && !t) return;
                    if (!this.checkAndHandleExpiredSession()) return void (ph && Dn.error("[Replay] Attempting to finish replay event after session expired."));
                    if (!this.session) return;
                    const e = this.session.started, n = Date.now() - e;
                    this._debouncedFlush.cancel();
                    const r = n < this._options.minReplayDuration, o = n > this._options.maxReplayDuration + 5e3;
                    if (r || o) return fh(`[Replay] Session duration (${Math.floor(n / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`, this._options._experiments.traceInternals), 
                    void (r && this._debouncedFlush());
                    const i = this.eventBuffer;
                    if (i && 0 === this.session.segmentId && !i.hasCheckout && fh("[Replay] Flushing initial segment without checkout.", this._options._experiments.traceInternals), 
                    !this._flushLock) return this._flushLock = this._runFlush(), await this._flushLock, 
                    void (this._flushLock = void 0);
                    try {
                        await this._flushLock;
                    } catch (t) {
                        ph && Dn.error(t);
                    } finally {
                        this._debouncedFlush();
                    }
                };
            }
            _maybeSaveSession() {
                this.session && this._options.stickySession && Ih(this.session);
            }
            __init6() {
                this._onMutationHandler = t => {
                    const e = t.length, n = this._options.mutationLimit, r = n && e > n;
                    if (e > this._options.mutationBreadcrumbLimit || r) {
                        const t = eh({
                            category: "replay.mutations",
                            data: {
                                count: e,
                                limit: r
                            }
                        });
                        this._createCustomBreadcrumb(t);
                    }
                    return !r || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }), !1);
                };
            }
        }
        function Sf(t, e, n, r) {
            const o = [ ...t, ..."string" == typeof r ? r.split(",") : [], ...e ];
            return void 0 !== n && ("string" == typeof n && o.push(`.${n}`), Nn((() => {}))), 
            o.join(",");
        }
        const xf = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]', kf = [ "content-length", "content-type", "accept" ];
        let Ef = !1;
        const Tf = t => new If(t);
        class If {
            static __initStatic() {
                this.id = "Replay";
            }
            constructor({flushMinDelay: t = 5e3, flushMaxDelay: e = 5500, minReplayDuration: n = 4999, maxReplayDuration: r = 36e5, stickySession: o = !0, useCompression: i = !0, workerUrl: s, _experiments: a = {}, sessionSampleRate: c, errorSampleRate: u, maskAllText: l = !0, maskAllInputs: d = !0, blockAllMedia: p = !0, mutationBreadcrumbLimit: h = 750, mutationLimit: f = 1e4, slowClickTimeout: m = 7e3, slowClickIgnoreSelectors: g = [], networkDetailAllowUrls: y = [], networkDetailDenyUrls: v = [], networkCaptureBodies: b = !0, networkRequestHeaders: _ = [], networkResponseHeaders: w = [], mask: S = [], maskAttributes: x = [ "title", "placeholder" ], unmask: k = [], block: E = [], unblock: T = [], ignore: I = [], maskFn: C, beforeAddRecordingEvent: R, beforeErrorSampling: O, blockClass: L, blockSelector: A, maskInputOptions: M, maskTextClass: N, maskTextSelector: D, ignoreClass: P} = {}) {
                this.name = If.id;
                const j = function({mask: t, unmask: e, block: n, unblock: r, ignore: o, blockClass: i, blockSelector: s, maskTextClass: a, maskTextSelector: c, ignoreClass: u}) {
                    const l = {
                        maskTextSelector: Sf(t, [ ".sentry-mask", "[data-sentry-mask]" ], a, c),
                        unmaskTextSelector: Sf(e, [ ".sentry-unmask", "[data-sentry-unmask]" ]),
                        blockSelector: Sf(n, [ ".sentry-block", "[data-sentry-block]", 'base[href="/"]' ], i, s),
                        unblockSelector: Sf(r, [ ".sentry-unblock", "[data-sentry-unblock]" ]),
                        ignoreSelector: Sf(o, [ ".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]' ], u)
                    };
                    return i instanceof RegExp && (l.blockClass = i), a instanceof RegExp && (l.maskTextClass = a), 
                    l;
                }({
                    mask: S,
                    unmask: k,
                    block: E,
                    unblock: T,
                    ignore: I,
                    blockClass: L,
                    blockSelector: A,
                    maskTextClass: N,
                    maskTextSelector: D,
                    ignoreClass: P
                });
                if (this._recordingOptions = {
                    maskAllInputs: d,
                    maskAllText: l,
                    maskInputOptions: {
                        ...M || {},
                        password: !0
                    },
                    maskTextFn: C,
                    maskInputFn: C,
                    maskAttributeFn: (t, e, n) => function({el: t, key: e, maskAttributes: n, maskAllText: r, privacyOptions: o, value: i}) {
                        return r ? o.unmaskTextSelector && t.matches(o.unmaskTextSelector) ? i : n.includes(e) || "value" === e && "INPUT" === t.tagName && [ "submit", "button" ].includes(t.getAttribute("type") || "") ? i.replace(/[\S]/g, "*") : i : i;
                    }({
                        maskAttributes: x,
                        maskAllText: l,
                        privacyOptions: j,
                        key: t,
                        value: e,
                        el: n
                    }),
                    ...j,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: t => {
                        try {
                            t.__rrweb__ = !0;
                        } catch (t) {}
                    }
                }, this._initialOptions = {
                    flushMinDelay: t,
                    flushMaxDelay: e,
                    minReplayDuration: Math.min(n, 15e3),
                    maxReplayDuration: Math.min(r, 36e5),
                    stickySession: o,
                    sessionSampleRate: c,
                    errorSampleRate: u,
                    useCompression: i,
                    workerUrl: s,
                    blockAllMedia: p,
                    maskAllInputs: d,
                    maskAllText: l,
                    mutationBreadcrumbLimit: h,
                    mutationLimit: f,
                    slowClickTimeout: m,
                    slowClickIgnoreSelectors: g,
                    networkDetailAllowUrls: y,
                    networkDetailDenyUrls: v,
                    networkCaptureBodies: b,
                    networkRequestHeaders: Cf(_),
                    networkResponseHeaders: Cf(w),
                    beforeAddRecordingEvent: R,
                    beforeErrorSampling: O,
                    _experiments: a
                }, "number" == typeof c && (this._initialOptions.sessionSampleRate = c), "number" == typeof u && (this._initialOptions.errorSampleRate = u), 
                this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${xf}` : xf), 
                this._isInitialized && Bu()) throw new Error("Multiple Sentry Session Replay instances are not supported");
                this._isInitialized = !0;
            }
            get _isInitialized() {
                return Ef;
            }
            set _isInitialized(t) {
                Ef = t;
            }
            setupOnce() {
                Bu() && (this._setup(), setTimeout((() => this._initialize())));
            }
            start() {
                this._replay && this._replay.start();
            }
            startBuffering() {
                this._replay && this._replay.startBuffering();
            }
            stop() {
                return this._replay ? this._replay.stop({
                    forceFlush: "session" === this._replay.recordingMode
                }) : Promise.resolve();
            }
            flush(t) {
                return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve();
            }
            getReplayId() {
                if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId();
            }
            _initialize() {
                this._replay && (this._maybeLoadFromReplayCanvasIntegration(), this._replay.initializeSampling());
            }
            _setup() {
                const t = function(t) {
                    const e = ii(), n = e && e.getOptions(), r = {
                        sessionSampleRate: 0,
                        errorSampleRate: 0,
                        ...mr(t)
                    };
                    return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && Nn((() => {})), 
                    "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), 
                    "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), 
                    r) : (Nn((() => {})), r);
                }(this._initialOptions);
                this._replay = new wf({
                    options: t,
                    recordingOptions: this._recordingOptions
                });
            }
            _maybeLoadFromReplayCanvasIntegration() {
                try {
                    const t = ii().getIntegrationByName("ReplayCanvas");
                    if (!t) return;
                    this._replay._canvas = t.getOptions();
                } catch (t) {}
            }
        }
        function Cf(t) {
            return [ ...kf, ...t.map((t => t.toLowerCase())) ];
        }
        function Rf() {
            const t = ii();
            return t && t.getIntegrationByName && t.getIntegrationByName("Replay");
        }
        var Of;
        function Lf(t, e, n = 1 / 0, r = 0) {
            return t ? t.nodeType !== t.ELEMENT_NODE || r > n ? -1 : e(t) ? r : Lf(t.parentNode, e, n, r + 1) : -1;
        }
        function Af(t, e) {
            return n => {
                const r = n;
                if (null === r) return !1;
                try {
                    if (t) if ("string" == typeof t) {
                        if (r.matches(`.${t}`)) return !0;
                    } else if (function(t, e) {
                        for (let n = t.classList.length; n--; ) {
                            const r = t.classList[n];
                            if (e.test(r)) return !0;
                        }
                        return !1;
                    }(r, t)) return !0;
                    return !(!e || !r.matches(e));
                } catch (t) {
                    return !1;
                }
            };
        }
        If.__initStatic(), function(t) {
            t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", 
            t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment";
        }(Of || (Of = {}));
        let Mf = {
            map: {},
            getId: () => -1,
            getNode: () => null,
            removeNodeFromMap() {},
            has: () => !1,
            reset() {}
        };
        function Nf(t, e, n, r, o = window) {
            const i = o.Object.getOwnPropertyDescriptor(t, e);
            return o.Object.defineProperty(t, e, r ? n : {
                set(t) {
                    Bf((() => {
                        n.set.call(this, t);
                    }), 0), i && i.set && i.set.call(this, t);
                }
            }), () => Nf(t, e, i || {}, !0);
        }
        function Df(t, e, n) {
            try {
                if (!(e in t)) return () => {};
                const r = t[e], o = n(r);
                return "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })), t[e] = o, () => {
                    t[e] = r;
                };
            } catch (t) {
                return () => {};
            }
        }
        function Pf(t, e, n, r, o) {
            if (!t) return !1;
            const i = function(t) {
                return t ? t.nodeType === t.ELEMENT_NODE ? t : t.parentElement : null;
            }(t);
            if (!i) return !1;
            const s = Af(e, n);
            if (!o) {
                const t = r && i.matches(r);
                return s(i) && !t;
            }
            const a = Lf(i, s);
            let c = -1;
            return !(a < 0) && (r && (c = Lf(i, Af(null, r))), a > -1 && c < 0 || a < c);
        }
        "undefined" != typeof window && window.Proxy && window.Reflect && (Mf = new Proxy(Mf, {
            get: (t, e, n) => Reflect.get(t, e, n)
        })), /[1-9][0-9]{12}/.test(Date.now().toString());
        const jf = {};
        function Ff(t) {
            const e = jf[t];
            if (e) return e;
            const n = window.document;
            let r = window[t];
            if (n && "function" == typeof n.createElement) try {
                const e = n.createElement("iframe");
                e.hidden = !0, n.head.appendChild(e);
                const o = e.contentWindow;
                o && o[t] && (r = o[t]), n.head.removeChild(e);
            } catch (t) {}
            return jf[t] = r.bind(window);
        }
        function $f(...t) {
            return Ff("requestAnimationFrame")(...t);
        }
        function Bf(...t) {
            return Ff("setTimeout")(...t);
        }
        var Uf = (t => (t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2", 
        t))(Uf || {});
        let Hf;
        const qf = t => Hf ? (...e) => {
            try {
                return t(...e);
            } catch (t) {
                if (Hf && !0 === Hf(t)) return () => {};
                throw t;
            }
        } : t;
        for (var zf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Wf = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Gf = 0; Gf < 64; Gf++) Wf[zf.charCodeAt(Gf)] = Gf;
        const Yf = new Map, Vf = (t, e, n) => {
            if (!t || !Xf(t, e) && "object" != typeof t) return;
            const r = function(t, e) {
                let n = Yf.get(t);
                return n || (n = new Map, Yf.set(t, n)), n.has(e) || n.set(e, []), n.get(e);
            }(n, t.constructor.name);
            let o = r.indexOf(t);
            return -1 === o && (o = r.length, r.push(t)), o;
        };
        function Jf(t, e, n) {
            if (t instanceof Array) return t.map((t => Jf(t, e, n)));
            if (null === t) return t;
            if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) return {
                rr_type: t.constructor.name,
                args: [ Object.values(t) ]
            };
            if (t instanceof ArrayBuffer) {
                const e = t.constructor.name, n = function(t) {
                    var e, n = new Uint8Array(t), r = n.length, o = "";
                    for (e = 0; e < r; e += 3) o += zf[n[e] >> 2], o += zf[(3 & n[e]) << 4 | n[e + 1] >> 4], 
                    o += zf[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], o += zf[63 & n[e + 2]];
                    return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), 
                    o;
                }(t);
                return {
                    rr_type: e,
                    base64: n
                };
            }
            if (t instanceof DataView) return {
                rr_type: t.constructor.name,
                args: [ Jf(t.buffer, e, n), t.byteOffset, t.byteLength ]
            };
            if (t instanceof HTMLImageElement) {
                const e = t.constructor.name, {src: n} = t;
                return {
                    rr_type: e,
                    src: n
                };
            }
            return t instanceof HTMLCanvasElement ? {
                rr_type: "HTMLImageElement",
                src: t.toDataURL()
            } : t instanceof ImageData ? {
                rr_type: t.constructor.name,
                args: [ Jf(t.data, e, n), t.width, t.height ]
            } : Xf(t, e) || "object" == typeof t ? {
                rr_type: t.constructor.name,
                index: Vf(t, e, n)
            } : t;
        }
        const Kf = (t, e, n) => t.map((t => Jf(t, e, n))), Xf = (t, e) => {
            const n = [ "WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES" ].filter((t => "function" == typeof e[t]));
            return Boolean(n.find((n => t instanceof e[n])));
        };
        function Qf(t, e, n, r, o) {
            const i = [];
            try {
                const s = Df(t.HTMLCanvasElement.prototype, "getContext", (function(t) {
                    return function(i, ...s) {
                        if (!Pf(this, e, n, r, !0)) {
                            const t = function(t) {
                                return "experimental-webgl" === t ? "webgl" : t;
                            }(i);
                            if ("__context" in this || (this.__context = t), o && [ "webgl", "webgl2" ].includes(t)) if (s[0] && "object" == typeof s[0]) {
                                const t = s[0];
                                t.preserveDrawingBuffer || (t.preserveDrawingBuffer = !0);
                            } else s.splice(0, 1, {
                                preserveDrawingBuffer: !0
                            });
                        }
                        return t.apply(this, [ i, ...s ]);
                    };
                }));
                i.push(s);
            } catch (t) {}
            return () => {
                i.forEach((t => t()));
            };
        }
        function Zf(t, e, n, r, o, i, s, a) {
            const c = [], u = Object.getOwnPropertyNames(t);
            for (const s of u) if (![ "isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight" ].includes(s)) try {
                if ("function" != typeof t[s]) continue;
                const u = Df(t, s, (function(t) {
                    return function(...c) {
                        const u = t.apply(this, c);
                        if (Vf(u, a, this), "tagName" in this.canvas && !Pf(this.canvas, r, o, i, !0)) {
                            const t = Kf(c, a, this), r = {
                                type: e,
                                property: s,
                                args: t
                            };
                            n(this.canvas, r);
                        }
                        return u;
                    };
                }));
                c.push(u);
            } catch (r) {
                const o = Nf(t, s, {
                    set(t) {
                        n(this.canvas, {
                            type: e,
                            property: s,
                            args: [ t ],
                            setter: !0
                        });
                    }
                });
                c.push(o);
            }
            return c;
        }
        class tm {
            reset() {
                this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers();
            }
            freeze() {
                this.frozen = !0;
            }
            unfreeze() {
                this.frozen = !1;
            }
            lock() {
                this.locked = !0;
            }
            unlock() {
                this.locked = !1;
            }
            constructor(t) {
                this.pendingCanvasMutations = new Map, this.rafStamps = {
                    latestId: 0,
                    invokeId: null
                }, this.frozen = !1, this.locked = !1, this.processMutation = (t, e) => {
                    !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), 
                    this.pendingCanvasMutations.has(t) || this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e);
                };
                const {sampling: e = "all", win: n, blockClass: r, blockSelector: o, unblockSelector: i, maxCanvasSize: s, recordCanvas: a, dataURLOptions: c, errorHandler: u} = t;
                this.mutationCb = t.mutationCb, this.mirror = t.mirror, this.options = t, u && (Hf = u), 
                t.enableManualSnapshot || qf((() => {
                    a && "all" === e && this.initCanvasMutationObserver(n, r, o, i), a && "number" == typeof e && this.initCanvasFPSObserver(e, n, r, o, i, s, {
                        dataURLOptions: c
                    });
                }))();
            }
            initCanvasFPSObserver(t, e, n, r, o, i, s) {
                const a = Qf(e, n, r, o, !0), c = this.takeSnapshot(!1, t, e, n, r, o, i, s.dataURLOptions);
                this.resetObservers = () => {
                    a(), cancelAnimationFrame(c);
                };
            }
            initCanvasMutationObserver(t, e, n, r) {
                this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                const o = Qf(t, e, n, r, !1), i = function(t, e, n, r, o) {
                    const i = [], s = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
                    for (const a of s) try {
                        if ("function" != typeof e.CanvasRenderingContext2D.prototype[a]) continue;
                        const s = Df(e.CanvasRenderingContext2D.prototype, a, (function(i) {
                            return function(...s) {
                                return Pf(this.canvas, n, r, o, !0) || Bf((() => {
                                    const n = Kf(s, e, this);
                                    t(this.canvas, {
                                        type: Uf["2D"],
                                        property: a,
                                        args: n
                                    });
                                }), 0), i.apply(this, s);
                            };
                        }));
                        i.push(s);
                    } catch (n) {
                        const r = Nf(e.CanvasRenderingContext2D.prototype, a, {
                            set(e) {
                                t(this.canvas, {
                                    type: Uf["2D"],
                                    property: a,
                                    args: [ e ],
                                    setter: !0
                                });
                            }
                        });
                        i.push(r);
                    }
                    return () => {
                        i.forEach((t => t()));
                    };
                }(this.processMutation.bind(this), t, e, n, r), s = function(t, e, n, r, o, i) {
                    const s = [];
                    return s.push(...Zf(e.WebGLRenderingContext.prototype, Uf.WebGL, t, n, r, o, 0, e)), 
                    void 0 !== e.WebGL2RenderingContext && s.push(...Zf(e.WebGL2RenderingContext.prototype, Uf.WebGL2, t, n, r, o, 0, e)), 
                    () => {
                        s.forEach((t => t()));
                    };
                }(this.processMutation.bind(this), t, e, n, r, this.mirror);
                this.resetObservers = () => {
                    o(), i(), s();
                };
            }
            snapshot(t) {
                const {options: e} = this, n = this.takeSnapshot(!0, "all" === e.sampling ? 2 : e.sampling || 2, e.win, e.blockClass, e.blockSelector, e.unblockSelector, e.maxCanvasSize, e.dataURLOptions, t);
                this.resetObservers = () => {
                    cancelAnimationFrame(n);
                };
            }
            takeSnapshot(t, e, n, r, o, i, s, a, c) {
                const u = new Map, l = new Worker(function() {
                    const t = new Blob([ 'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};' ]);
                    return URL.createObjectURL(t);
                }());
                l.onmessage = t => {
                    const e = t.data, {id: n} = e;
                    if (u.set(n, !1), !("base64" in e)) return;
                    const {base64: r, type: o, width: i, height: s} = e;
                    this.mutationCb({
                        id: n,
                        type: Uf["2D"],
                        commands: [ {
                            property: "clearRect",
                            args: [ 0, 0, i, s ]
                        }, {
                            property: "drawImage",
                            args: [ {
                                rr_type: "ImageBitmap",
                                args: [ {
                                    rr_type: "Blob",
                                    data: [ {
                                        rr_type: "ArrayBuffer",
                                        base64: r
                                    } ],
                                    type: o
                                } ]
                            }, 0, 0, i, s ]
                        } ]
                    });
                };
                const d = 1e3 / e;
                let p, h = 0;
                const f = e => {
                    h && e - h < d || (h = e, (t => {
                        if (t) return [ t ];
                        const e = [];
                        return n.document.querySelectorAll("canvas").forEach((t => {
                            Pf(t, r, o, i, !0) || e.push(t);
                        })), e;
                    })(c).forEach((e => {
                        const n = this.mirror.getId(e);
                        if (!u.get(n) && e.width && e.height) {
                            if (u.set(n, !0), !t && [ "webgl", "webgl2" ].includes(e.__context)) {
                                const t = e.getContext(e.__context);
                                !1 === Pu([ t, "optionalAccess", t => t.getContextAttributes, "call", t => t(), "optionalAccess", t => t.preserveDrawingBuffer ]) && t.clear(t.COLOR_BUFFER_BIT);
                            }
                            createImageBitmap(e).then((t => {
                                l.postMessage({
                                    id: n,
                                    bitmap: t,
                                    width: e.width,
                                    height: e.height,
                                    dataURLOptions: a,
                                    maxCanvasSize: s
                                }, [ t ]);
                            })).catch((t => {
                                qf((() => {
                                    throw t;
                                }))();
                            }));
                        }
                    }))), p = $f(f);
                };
                return p = $f(f), p;
            }
            startPendingCanvasMutationFlusher() {
                $f((() => this.flushPendingCanvasMutations()));
            }
            startRAFTimestamping() {
                const t = e => {
                    this.rafStamps.latestId = e, $f(t);
                };
                $f(t);
            }
            flushPendingCanvasMutations() {
                this.pendingCanvasMutations.forEach(((t, e) => {
                    const n = this.mirror.getId(e);
                    this.flushPendingCanvasMutationFor(e, n);
                })), $f((() => this.flushPendingCanvasMutations()));
            }
            flushPendingCanvasMutationFor(t, e) {
                if (this.frozen || this.locked) return;
                const n = this.pendingCanvasMutations.get(t);
                if (!n || -1 === e) return;
                const r = n.map((t => {
                    const {type: e, ...n} = t;
                    return n;
                })), {type: o} = n[0];
                this.mutationCb({
                    id: e,
                    type: o,
                    commands: r
                }), this.pendingCanvasMutations.delete(t);
            }
        }
        const em = {
            low: {
                sampling: {
                    canvas: 1
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .25
                }
            },
            medium: {
                sampling: {
                    canvas: 2
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .4
                }
            },
            high: {
                sampling: {
                    canvas: 4
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .5
                }
            }
        }, nm = "ReplayCanvas", om = (t = {}) => {
            const [e, n] = t.maxCanvasSize || [], r = {
                quality: t.quality || "medium",
                enableManualSnapshot: t.enableManualSnapshot,
                maxCanvasSize: [ e ? Math.min(e, 1280) : 1280, n ? Math.min(n, 1280) : 1280 ]
            };
            let o;
            const i = new Promise((t => o = t));
            return {
                name: nm,
                setupOnce() {},
                getOptions() {
                    const {quality: t, enableManualSnapshot: e, maxCanvasSize: n} = r;
                    return {
                        enableManualSnapshot: e,
                        recordCanvas: !0,
                        getCanvasManager: t => {
                            const r = new tm({
                                ...t,
                                enableManualSnapshot: e,
                                maxCanvasSize: n,
                                errorHandler: t => {
                                    try {
                                        "object" == typeof t && (t.__rrweb__ = !0);
                                    } catch (t) {}
                                }
                            });
                            return o(r), r;
                        },
                        ...em[t || "medium"] || em.medium
                    };
                },
                async snapshot(t) {
                    (await i).snapshot(t);
                }
            };
        }, im = yi(nm, om), sm = Rn, am = "#ffffff", cm = "inherit", um = "rgba(108, 95, 199, 1)", lm = {
            fontFamily: "system-ui, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "14px",
            background: am,
            backgroundHover: "#f6f6f7",
            foreground: "#2b2233",
            border: "1.5px solid rgba(41, 35, 47, 0.13)",
            borderRadius: "25px",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            success: "#268d75",
            error: "#df3338",
            submitBackground: "rgba(88, 74, 192, 1)",
            submitBackgroundHover: um,
            submitBorder: um,
            submitOutlineFocus: "#29232f",
            submitForeground: am,
            submitForegroundHover: am,
            cancelBackground: "transparent",
            cancelBackgroundHover: "var(--background-hover)",
            cancelBorder: "var(--border)",
            cancelOutlineFocus: "var(--input-outline-focus)",
            cancelForeground: "var(--foreground)",
            cancelForegroundHover: "var(--foreground)",
            inputBackground: cm,
            inputForeground: cm,
            inputBorder: "var(--border)",
            inputOutlineFocus: um,
            formBorderRadius: "20px",
            formContentBorderRadius: "6px"
        }, dm = lm, pm = {
            ...lm,
            background: "#29232f",
            backgroundHover: "#352f3b",
            foreground: "#ebe6ef",
            border: "1.5px solid rgba(235, 230, 239, 0.15)",
            success: "#2da98c",
            error: "#f55459"
        }, hm = "widget", fm = "api";
        function gm({name: t, email: e, message: n, source: r = fm, url: o = tr()}, i = {}) {
            if (!n) throw new Error("Unable to submit feedback with empty message");
            return async function({feedback: {message: t, email: e, name: n, source: r, url: o}}, {includeReplay: i = !0} = {}) {
                const s = ii(), a = s && s.getTransport(), c = s && s.getDsn();
                if (!s || !a || !c) return;
                const u = {
                    contexts: {
                        feedback: {
                            contact_email: e,
                            name: n,
                            message: t,
                            url: o,
                            source: r
                        }
                    },
                    type: "feedback"
                };
                return Qo((async t => {
                    t.clearBreadcrumbs(), [ fm, hm ].includes(String(r)) && t.setLevel("info");
                    const e = await async function({client: t, scope: e, event: n}) {
                        const r = {};
                        t.emit && t.emit("preprocessEvent", n, r);
                        const o = await jo(t.getOptions(), n, r, e, t, So());
                        return null === o ? (t.recordDroppedEvent("event_processor", "feedback", n), null) : (o.platform = o.platform || "javascript", 
                        o);
                    }({
                        scope: t,
                        client: s,
                        event: u
                    });
                    if (!e) return;
                    s.emit && s.emit("beforeSendFeedback", e, {
                        includeReplay: Boolean(i)
                    });
                    const n = ls(e, c, s.getOptions()._metadata, s.getOptions().tunnel);
                    let o;
                    try {
                        o = await a.send(n);
                    } catch (t) {
                        const e = new Error("Unable to send Feedback");
                        try {
                            e.cause = t;
                        } catch (t) {}
                        throw e;
                    }
                    if (o) {
                        if ("number" == typeof o.statusCode && (o.statusCode < 200 || o.statusCode >= 300)) throw new Error("Unable to send Feedback");
                        return o;
                    }
                }));
            }({
                feedback: {
                    name: t,
                    email: e,
                    message: n,
                    url: o,
                    source: r
                }
            }, i);
        }
        const ym = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function vm(t, e) {
            return {
                ...t,
                ...e,
                themeDark: {
                    ...t.themeDark,
                    ...e.themeDark
                },
                themeLight: {
                    ...t.themeLight,
                    ...e.themeLight
                }
            };
        }
        function bm(t) {
            return `\n  --background: ${t.background};\n  --background-hover: ${t.backgroundHover};\n  --foreground: ${t.foreground};\n  --error: ${t.error};\n  --success: ${t.success};\n  --border: ${t.border};\n  --border-radius: ${t.borderRadius};\n  --box-shadow: ${t.boxShadow};\n\n  --submit-background: ${t.submitBackground};\n  --submit-background-hover: ${t.submitBackgroundHover};\n  --submit-border: ${t.submitBorder};\n  --submit-outline-focus: ${t.submitOutlineFocus};\n  --submit-foreground: ${t.submitForeground};\n  --submit-foreground-hover: ${t.submitForegroundHover};\n\n  --cancel-background: ${t.cancelBackground};\n  --cancel-background-hover: ${t.cancelBackgroundHover};\n  --cancel-border: ${t.cancelBorder};\n  --cancel-outline-focus: ${t.cancelOutlineFocus};\n  --cancel-foreground: ${t.cancelForeground};\n  --cancel-foreground-hover: ${t.cancelForegroundHover};\n\n  --input-background: ${t.inputBackground};\n  --input-foreground: ${t.inputForeground};\n  --input-border: ${t.inputBorder};\n  --input-outline-focus: ${t.inputOutlineFocus};\n\n  --form-border-radius: ${t.formBorderRadius};\n  --form-content-border-radius: ${t.formContentBorderRadius};\n  `;
        }
        function Sm(t, e) {
            return Object.entries(e).forEach((([e, n]) => {
                t.setAttributeNS(null, e, n);
            })), t;
        }
        function Em(t, e, ...n) {
            const r = sm.document.createElement(t);
            e && Object.entries(e).forEach((([t, e]) => {
                "className" === t && "string" == typeof e ? r.setAttribute("class", e) : "boolean" == typeof e && e ? r.setAttribute(t, "") : "string" == typeof e ? r.setAttribute(t, e) : t.startsWith("on") && "function" == typeof e && r.addEventListener(t.substring(2).toLowerCase(), e);
            }));
            for (const t of n) Tm(r, t);
            return r;
        }
        function Tm(t, e) {
            const n = sm.document;
            if (null != e) if (Array.isArray(e)) for (const n of e) Tm(t, n); else !1 === e || ("string" == typeof e ? t.appendChild(n.createTextNode(e)) : e instanceof Node ? t.appendChild(e) : t.appendChild(n.createTextNode(String(e))));
        }
        function Cm(t, e) {
            const n = t.get(e);
            return "string" == typeof n ? n.trim() : "";
        }
        function Lm({formTitle: t, showBranding: e, showName: n, showEmail: r, isNameRequired: o, isEmailRequired: i, colorScheme: s, defaultName: a, defaultEmail: c, onClosed: u, onCancel: l, onSubmit: d, ...p}) {
            let h = null;
            function f() {
                h && (h.open = !1);
            }
            const {el: m, showError: g, hideError: y} = function({nameLabel: t, namePlaceholder: e, emailLabel: n, emailPlaceholder: r, messageLabel: o, messagePlaceholder: i, isRequiredLabel: s, cancelButtonLabel: a, submitButtonLabel: c, showName: u, showEmail: l, isNameRequired: d, isEmailRequired: p, defaultName: h, defaultEmail: f, onCancel: m, onSubmit: g}) {
                const {el: y} = function({label: t}) {
                    return {
                        el: Em("button", {
                            type: "submit",
                            className: "btn btn--primary",
                            "aria-label": t
                        }, t)
                    };
                }({
                    label: c
                }), v = Em("div", {
                    className: "form__error-container form__error-container--hidden",
                    "aria-hidden": "true"
                }), b = Em("input", {
                    id: "name",
                    type: u ? "text" : "hidden",
                    "aria-hidden": u ? "false" : "true",
                    name: "name",
                    required: d,
                    className: "form__input",
                    placeholder: e,
                    value: h
                }), _ = Em("input", {
                    id: "email",
                    type: l ? "text" : "hidden",
                    "aria-hidden": l ? "false" : "true",
                    name: "email",
                    required: p,
                    className: "form__input",
                    placeholder: r,
                    value: f
                }), w = Em("textarea", {
                    id: "message",
                    autoFocus: "true",
                    rows: "5",
                    name: "message",
                    required: !0,
                    className: "form__input form__input--textarea",
                    placeholder: i
                }), S = Em("button", {
                    type: "button",
                    className: "btn btn--default",
                    "aria-label": a,
                    onClick: t => {
                        m && m(t);
                    }
                }, a), x = Em("form", {
                    className: "form",
                    onSubmit: function(t) {
                        if (t.preventDefault(), t.target instanceof HTMLFormElement) try {
                            if (g) {
                                const e = new FormData(t.target), n = {
                                    name: Cm(e, "name"),
                                    email: Cm(e, "email"),
                                    message: Cm(e, "message")
                                };
                                g(n);
                            }
                        } catch (t) {}
                    }
                }, [ v, u && Em("label", {
                    htmlFor: "name",
                    className: "form__label"
                }, [ Em("span", {
                    className: "form__label__text"
                }, t, d && Em("span", {
                    className: "form__label__text--required"
                }, ` ${s}`)), b ]), !u && b, l && Em("label", {
                    htmlFor: "email",
                    className: "form__label"
                }, [ Em("span", {
                    className: "form__label__text"
                }, n, p && Em("span", {
                    className: "form__label__text--required"
                }, ` ${s}`)), _ ]), !l && _, Em("label", {
                    htmlFor: "message",
                    className: "form__label"
                }, [ Em("span", {
                    className: "form__label__text"
                }, o, Em("span", {
                    className: "form__label__text--required"
                }, ` ${s}`)), w ]), Em("div", {
                    className: "btn-group"
                }, [ y, S ]) ]);
                return {
                    get el() {
                        return x;
                    },
                    showError: function(t) {
                        v.textContent = t, v.classList.remove("form__error-container--hidden"), v.setAttribute("aria-hidden", "false");
                    },
                    hideError: function() {
                        v.textContent = "", v.classList.add("form__error-container--hidden"), v.setAttribute("aria-hidden", "true");
                    }
                };
            }({
                showEmail: r,
                showName: n,
                isEmailRequired: i,
                isNameRequired: o,
                defaultName: a,
                defaultEmail: c,
                onSubmit: d,
                onCancel: l,
                ...p
            });
            return h = Em("dialog", {
                className: "dialog",
                open: !0,
                onClick: function() {
                    f(), u && u();
                }
            }, Em("div", {
                className: "dialog__content",
                onClick: t => {
                    t.stopPropagation();
                }
            }, Em("h2", {
                className: "dialog__header"
            }, t, e && Em("a", {
                className: "brand-link",
                target: "_blank",
                href: "https://sentry.io/welcome/",
                title: "Powered by Sentry",
                rel: "noopener noreferrer"
            }, function({colorScheme: t}) {
                const e = t => sm.document.createElementNS("http://www.w3.org/2000/svg", t), n = Sm(e("svg"), {
                    class: "sentry-logo",
                    width: "32",
                    height: "30",
                    viewBox: "0 0 72 66",
                    fill: "none"
                }), r = Sm(e("path"), {
                    transform: "translate(11, 11)",
                    d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
                });
                n.append(r);
                const o = e("defs"), i = e("style");
                return i.textContent = `\n    path {\n      fill: ${"dark" === t ? "#fff" : "#362d59"};\n    }`, 
                "system" === t && (i.textContent += "\n    @media (prefers-color-scheme: dark) {\n      path: {\n        fill: '#fff';\n      }\n    }\n    "), 
                o.append(i), n.append(o), {
                    get el() {
                        return n;
                    }
                };
            }({
                colorScheme: s
            }).el)), m)), {
                get el() {
                    return h;
                },
                showError: g,
                hideError: y,
                open: function() {
                    h && (h.open = !0);
                },
                close: f,
                checkIsOpen: function() {
                    return h && !0 === h.open || !1;
                }
            };
        }
        function Pm({shadow: t, options: {shouldCreateActor: e = !0, ...n}, attachTo: r}) {
            let o, i, s = !1;
            async function a(e) {
                if (!i) return;
                const r = [];
                n.isNameRequired && !e.name && r.push(n.nameLabel), n.isEmailRequired && !e.email && r.push(n.emailLabel), 
                e.message || r.push(n.messageLabel), r.length > 0 ? i.showError(`Please enter in the following required fields: ${r.join(", ")}`) : await async function(t, e, n) {
                    if (t) {
                        t.hideError();
                        try {
                            return await gm({
                                ...e,
                                source: hm
                            }, n);
                        } catch (e) {
                            ym && Dn.error(e), t && t.showError("There was a problem submitting feedback, please wait and try again.");
                        }
                    }
                }(i, e) ? (h(), function() {
                    if (t) try {
                        const e = function({message: t, onRemove: e}) {
                            function n() {
                                r && (r.remove(), e && e());
                            }
                            const r = Em("div", {
                                className: "success-message",
                                onClick: n
                            }, function() {
                                const t = t => sm.document.createElementNS("http://www.w3.org/2000/svg", t), e = Sm(t("svg"), {
                                    class: "success-icon",
                                    width: "16",
                                    height: "17",
                                    viewBox: "0 0 16 17",
                                    fill: "none"
                                }), n = Sm(t("g"), {
                                    clipPath: "url(#clip0_57_156)"
                                }), r = Sm(t("path"), {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                                }), o = Sm(t("path"), {
                                    d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                                });
                                e.appendChild(n).append(o, r);
                                const i = t("defs"), s = Sm(t("clipPath"), {
                                    id: "clip0_57_156"
                                }), a = Sm(t("rect"), {
                                    width: "16",
                                    height: "16",
                                    fill: "white",
                                    transform: "translate(0 0.5)"
                                });
                                return s.appendChild(a), i.appendChild(s), e.appendChild(i).appendChild(s).appendChild(a), 
                                {
                                    get el() {
                                        return e;
                                    }
                                };
                            }().el, t);
                            return {
                                el: r,
                                remove: n
                            };
                        }({
                            message: n.successMessageText,
                            onRemove: () => {
                                r && clearTimeout(r), u();
                            }
                        });
                        if (!e.el) throw new Error("Unable to show success message");
                        t.appendChild(e.el);
                        const r = setTimeout((() => {
                            e && e.remove();
                        }), 5e3);
                    } catch (t) {
                        Dn.error(t);
                    }
                }(), n.onSubmitSuccess && n.onSubmitSuccess()) : n.onSubmitError && n.onSubmitError();
            }
            function c() {
                const t = ii(), e = t && t.getIntegrationByName && t.getIntegrationByName("Replay");
                e && e.flush().catch((t => {
                    ym && Dn.error(t);
                }));
            }
            function u() {
                o && o.show();
            }
            function l() {
                o && o.hide();
            }
            function d() {
                try {
                    if (i) return i.open(), s = !0, n.onFormOpen && n.onFormOpen(), void c();
                    const e = n.useSentryUser, r = ai(), o = r && r.getUser();
                    if (i = Lm({
                        colorScheme: n.colorScheme,
                        showBranding: n.showBranding,
                        showName: n.showName || n.isNameRequired,
                        showEmail: n.showEmail || n.isEmailRequired,
                        isNameRequired: n.isNameRequired,
                        isEmailRequired: n.isEmailRequired,
                        formTitle: n.formTitle,
                        cancelButtonLabel: n.cancelButtonLabel,
                        submitButtonLabel: n.submitButtonLabel,
                        emailLabel: n.emailLabel,
                        emailPlaceholder: n.emailPlaceholder,
                        messageLabel: n.messageLabel,
                        messagePlaceholder: n.messagePlaceholder,
                        nameLabel: n.nameLabel,
                        namePlaceholder: n.namePlaceholder,
                        isRequiredLabel: n.isRequiredLabel,
                        defaultName: e && o && o[e.name] || "",
                        defaultEmail: e && o && o[e.email] || "",
                        onClosed: () => {
                            u(), s = !1, n.onFormClose && n.onFormClose();
                        },
                        onCancel: () => {
                            p(), u();
                        },
                        onSubmit: a
                    }), !i.el) throw new Error("Unable to open Feedback dialog");
                    t.appendChild(i.el), l(), n.onFormOpen && n.onFormOpen(), c();
                } catch (t) {
                    Dn.error(t);
                }
            }
            function p() {
                i && (i.close(), s = !1, n.onFormClose && n.onFormClose());
            }
            function h() {
                if (i) {
                    p();
                    const t = i.el;
                    t && t.remove(), i = void 0;
                }
            }
            function f() {
                s || d(), l();
            }
            return r ? r.addEventListener("click", f) : e && (o = function({buttonLabel: t, onClick: e}) {
                const n = Em("button", {
                    type: "button",
                    className: "widget__actor",
                    "aria-label": t,
                    "aria-hidden": "false"
                }, function() {
                    const t = t => sm.document.createElementNS("http://www.w3.org/2000/svg", t), e = Sm(t("svg"), {
                        class: "feedback-icon",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none"
                    }), n = Sm(t("g"), {
                        clipPath: "url(#clip0_57_80)"
                    }), r = Sm(t("path"), {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                    });
                    e.appendChild(n).appendChild(r);
                    const o = t("defs"), i = Sm(t("clipPath"), {
                        id: "clip0_57_80"
                    }), s = Sm(t("rect"), {
                        width: "20",
                        height: "20",
                        fill: "white"
                    });
                    return i.appendChild(s), o.appendChild(i), e.appendChild(o).appendChild(i).appendChild(s), 
                    {
                        get el() {
                            return e;
                        }
                    };
                }().el, t ? Em("span", {
                    className: "widget__actor__text"
                }, t) : null);
                return n.addEventListener("click", (function(t) {
                    e && e(t);
                })), {
                    get el() {
                        return n;
                    },
                    show: () => {
                        n.classList.remove("widget__actor--hidden"), n.setAttribute("aria-hidden", "false");
                    },
                    hide: () => {
                        n.classList.add("widget__actor--hidden"), n.setAttribute("aria-hidden", "true");
                    }
                };
            }({
                buttonLabel: n.buttonLabel,
                onClick: f
            }), o.el && t.appendChild(o.el)), {
                get actor() {
                    return o;
                },
                get dialog() {
                    return i;
                },
                showActor: u,
                hideActor: l,
                removeActor: function() {
                    o && o.el && o.el.remove();
                },
                openDialog: d,
                closeDialog: p,
                removeDialog: h
            };
        }
        const jm = sm.document, Fm = t => new $m(t);
        class $m {
            static __initStatic() {
                this.id = "Feedback";
            }
            constructor({autoInject: t = !0, id: e = "sentry-feedback", isEmailRequired: n = !1, isNameRequired: r = !1, showBranding: o = !0, showEmail: i = !0, showName: s = !0, useSentryUser: a = {
                email: "email",
                name: "username"
            }, themeDark: c, themeLight: u, colorScheme: l = "system", buttonLabel: d = "Report a Bug", cancelButtonLabel: p = "Cancel", submitButtonLabel: h = "Send Bug Report", formTitle: f = "Report a Bug", emailPlaceholder: m = "your.email@example.org", emailLabel: g = "Email", messagePlaceholder: y = "What's the bug? What did you expect?", messageLabel: v = "Description", namePlaceholder: b = "Your Name", nameLabel: _ = "Name", isRequiredLabel: w = "(required)", successMessageText: S = "Thank you for your report!", onFormClose: x, onFormOpen: k, onSubmitError: E, onSubmitSuccess: T} = {}) {
                this.name = $m.id, this._host = null, this._shadow = null, this._widget = null, 
                this._widgets = new Set, this._hasInsertedActorStyles = !1, this.options = {
                    autoInject: t,
                    showBranding: o,
                    id: e,
                    isEmailRequired: n,
                    isNameRequired: r,
                    showEmail: i,
                    showName: s,
                    useSentryUser: a,
                    colorScheme: l,
                    themeDark: {
                        ...pm,
                        ...c
                    },
                    themeLight: {
                        ...dm,
                        ...u
                    },
                    buttonLabel: d,
                    cancelButtonLabel: p,
                    submitButtonLabel: h,
                    formTitle: f,
                    emailLabel: g,
                    emailPlaceholder: m,
                    messageLabel: v,
                    messagePlaceholder: y,
                    nameLabel: _,
                    namePlaceholder: b,
                    isRequiredLabel: w,
                    successMessageText: S,
                    onFormClose: x,
                    onFormOpen: k,
                    onSubmitError: E,
                    onSubmitSuccess: T
                };
            }
            setupOnce() {
                if (Bu()) try {
                    this._cleanupWidgetIfExists();
                    const {autoInject: t} = this.options;
                    if (!t) return;
                    this._createWidget(this.options);
                } catch (t) {
                    ym && Dn.error(t);
                }
            }
            openDialog() {
                this._widget || this._createWidget({
                    ...this.options,
                    shouldCreateActor: !1
                }), this._widget && this._widget.openDialog();
            }
            closeDialog() {
                this._widget && this._widget.closeDialog();
            }
            attachTo(t, e) {
                try {
                    const n = vm(this.options, e || {});
                    return this._ensureShadowHost(n, (({shadow: e}) => {
                        const r = "string" == typeof t ? jm.querySelector(t) : "function" == typeof t.addEventListener ? t : null;
                        if (!r) return ym && Dn.error("[Feedback] Unable to attach to target element"), 
                        null;
                        const o = Pm({
                            shadow: e,
                            options: n,
                            attachTo: r
                        });
                        return this._widgets.add(o), this._widget || (this._widget = o), o;
                    }));
                } catch (t) {
                    return ym && Dn.error(t), null;
                }
            }
            createWidget(t) {
                try {
                    return this._createWidget(vm(this.options, t || {}));
                } catch (t) {
                    return ym && Dn.error(t), null;
                }
            }
            removeWidget(t) {
                if (!t) return !1;
                try {
                    if (this._widgets.has(t)) return t.removeActor(), t.removeDialog(), this._widgets.delete(t), 
                    this._widget === t && (this._widget = null), !0;
                } catch (t) {
                    ym && Dn.error(t);
                }
                return !1;
            }
            getWidget() {
                return this._widget;
            }
            remove() {
                this._host && this._host.remove(), this._initialize();
            }
            _initialize() {
                this._host = null, this._shadow = null, this._widget = null, this._widgets = new Set, 
                this._hasInsertedActorStyles = !1;
            }
            _cleanupWidgetIfExists() {
                this._host && this.remove();
                const t = jm.querySelector(`#${this.options.id}`);
                t && t.remove();
            }
            _createWidget(t) {
                return this._ensureShadowHost(t, (({shadow: e}) => {
                    const n = Pm({
                        shadow: e,
                        options: t
                    });
                    return !this._hasInsertedActorStyles && n.actor && (e.appendChild(function(t) {
                        const e = t.createElement("style");
                        return e.textContent = "\n.widget__actor {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  line-height: 16px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  padding: 16px;\n  text-decoration: none;\n  z-index: 9000;\n\n  color: var(--foreground);\n  background-color: var(--background);\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.widget__actor:hover {\n  background-color: var(--background-hover);\n}\n\n.widget__actor svg {\n  width: 16px;\n  height: 16px;\n}\n\n.widget__actor--hidden {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.widget__actor__text {\n}\n\n@media (max-width: 600px) {\n  .widget__actor__text {\n    display: none;\n  }\n}\n\n.feedback-icon path {\n  fill: var(--foreground);\n}\n", 
                        e;
                    }(jm)), this._hasInsertedActorStyles = !0), this._widgets.add(n), this._widget || (this._widget = n), 
                    n;
                }));
            }
            _ensureShadowHost(t, e) {
                let n = !1;
                if (!this._shadow || !this._host) {
                    const {id: e, colorScheme: r, themeLight: o, themeDark: i} = t, {shadow: s, host: a} = function({id: t, colorScheme: e, themeDark: n, themeLight: r}) {
                        try {
                            const o = sm.document, i = o.createElement("div");
                            i.id = t;
                            const s = i.attachShadow({
                                mode: "open"
                            });
                            return s.appendChild(function(t, e, n) {
                                const r = t.createElement("style");
                                return r.textContent = `\n:host {\n  --bottom: 1rem;\n  --right: 1rem;\n  --top: auto;\n  --left: auto;\n  --z-index: 100000;\n  --font-family: ${n.light.fontFamily};\n  --font-size: ${n.light.fontSize};\n\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${bm("dark" === e ? n.dark : n.light)}\n}\n\n${"system" === e ? `\n@media (prefers-color-scheme: dark) {\n  :host {\n    ${bm(n.dark)}\n  }\n}` : ""}\n}`, 
                                r;
                            }(o, e, {
                                dark: n,
                                light: r
                            })), s.appendChild(function(t) {
                                const e = t.createElement("style");
                                return e.textContent = "\n.dialog {\n  line-height: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n\n  border: var(--border);\n  border-radius: var(--form-border-radius);\n  background-color: var(--background);\n  color: var(--foreground);\n\n  width: 320px;\n  max-width: 100%;\n  max-height: calc(100% - 2rem);\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--box-shadow);\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n\n.dialog__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0 24px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.brand-link {\n  display: inline-flex;\n}\n\n.error {\n  color: var(--error);\n  margin-bottom: 16px;\n}\n\n.form {\n  display: grid;\n  overflow: auto;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 24px 24px;\n}\n\n.form__error-container {\n  color: var(--error);\n}\n\n.form__error-container--hidden {\n  display: none;\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: grid;\n  gap: 4px;\n  align-items: center;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  line-height: inherit;\n  background-color: var(--input-background);\n  box-sizing: border-box;\n  border: var(--input-border);\n  border-radius: var(--form-content-border-radius);\n  color: var(--input-foreground);\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  color: var(--input-foreground);\n  opacity: 0.65;\n}\n\n.form__input:focus-visible {\n  outline: 1px auto var(--input-outline-focus);\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--cancel-border);\n  border-radius: var(--form-content-border-radius);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  padding: 6px 16px;\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  background-color: var(--submit-background);\n  border-color: var(--submit-border);\n  color: var(--submit-foreground);\n}\n.btn--primary:hover {\n  background-color: var(--submit-background-hover);\n  color: var(--submit-foreground-hover);\n}\n.btn--primary:focus-visible {\n  outline: 1px auto var(--submit-outline-focus);\n}\n\n.btn--default {\n  background-color: var(--cancel-background);\n  color: var(--cancel-foreground);\n  font-weight: 500;\n}\n.btn--default:hover {\n  background-color: var(--cancel-background-hover);\n  color: var(--cancel-foreground-hover);\n}\n.btn--default:focus-visible {\n  outline: 1px auto var(--cancel-outline-focus);\n}\n\n.success-message {\n  background-color: var(--background);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  font-weight: 600;\n  color: var(--success);\n  padding: 12px 24px;\n  line-height: 25px;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success-icon path {\n  fill: var(--success);\n}\n", 
                                e;
                            }(o)), {
                                shadow: s,
                                host: i
                            };
                        } catch (t) {
                            throw Dn.warn("[Feedback] Browser does not support shadow DOM API"), new Error("Browser does not support shadow DOM API.");
                        }
                    }({
                        id: e,
                        colorScheme: r,
                        themeLight: o,
                        themeDark: i
                    });
                    this._shadow = s, this._host = a, n = !0;
                }
                this._host.dataset.sentryFeedbackColorscheme = t.colorScheme;
                const r = e({
                    shadow: this._shadow,
                    host: this._host
                });
                return n && jm.body.appendChild(this._host), r;
            }
        }
        $m.__initStatic();
        const Bm = "CaptureConsole", Um = (t = {}) => {
            const e = t.levels || An;
            return {
                name: Bm,
                setupOnce() {},
                setup(t) {
                    "console" in Rn && Fs((({args: n, level: r}) => {
                        ii() === t && e.includes(r) && function(t, e) {
                            const n = {
                                level: ra(e),
                                extra: {
                                    arguments: t
                                }
                            };
                            Qo((r => {
                                if (r.addEventProcessor((t => (t.logger = "console", wr(t, {
                                    handled: !1,
                                    type: "console"
                                }), t))), "assert" === e && !1 === t[0]) {
                                    const e = `Assertion failed: ${ir(t.slice(1), " ") || "console.assert"}`;
                                    return r.setExtra("arguments", t.slice(1)), void Ho(e, n);
                                }
                                const o = t.find((t => t instanceof Error));
                                "error" === e && o ? Uo(o, n) : Ho(ir(t, " "), n);
                            }));
                        }(n, r);
                    }));
                }
            };
        };
        yi(Bm, Um);
        const Hm = Rn, qm = "ContextLines", zm = (t = {}) => {
            const e = null != t.frameContextLines ? t.frameContextLines : 7;
            return {
                name: qm,
                setupOnce() {},
                processEvent: t => function(t, e) {
                    const n = Hm.document, r = Hm.location && Hm.location.href.split(/[\?#]/, 1)[0];
                    if (!n || !r) return t;
                    const i = t.exception && t.exception.values;
                    if (!i || !i.length) return t;
                    const s = n.documentElement.innerHTML;
                    if (!s) return t;
                    const a = [ "<!DOCTYPE html>", "<html>", ...s.split("\n"), "</html>" ];
                    return i.forEach((t => {
                        const n = t.stacktrace;
                        n && n.frames && (n.frames = n.frames.map((t => function(t, e, n, r) {
                            return t.filename === n && t.lineno && e.length ? (function(t, e, n = 5) {
                                if (void 0 === e.lineno) return;
                                const r = t.length, o = Math.max(Math.min(r - 1, e.lineno - 1), 0);
                                e.pre_context = t.slice(Math.max(0, o - n), o).map((t => or(t, 0))), e.context_line = or(t[Math.min(r - 1, o)], e.colno || 0), 
                                e.post_context = t.slice(Math.min(o + 1, r), o + 1 + n).map((t => or(t, 0)));
                            }(e, t, r), t) : t;
                        }(t, a, r, e))));
                    })), t;
                }(t, e)
            };
        };
        yi(qm, zm);
        const Gm = (t = {}) => {
            const e = {
                debugger: !1,
                stringify: !1,
                ...t
            };
            return {
                name: "Debug",
                setupOnce() {},
                setup(t) {
                    t.on && t.on("beforeSendEvent", ((t, n) => {
                        e.debugger, Nn((() => {
                            e.stringify, n && Object.keys(n).length;
                        }));
                    }));
                }
            };
        }, Ym = (yi("Debug", Gm), "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__), Jm = () => {
            let t;
            return {
                name: "Dedupe",
                setupOnce() {},
                processEvent(e) {
                    if (e.type) return e;
                    try {
                        if (function(t, e) {
                            return !!e && (!!function(t, e) {
                                const n = t.message, r = e.message;
                                return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!Xm(t, e) && !!Km(t, e))));
                            }(t, e) || !!function(t, e) {
                                const n = Qm(e), r = Qm(t);
                                return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!Xm(t, e) && !!Km(t, e)));
                            }(t, e));
                        }(e, t)) return Ym && Dn.warn("Event dropped due to being a duplicate of previously captured event."), 
                        null;
                    } catch (t) {}
                    return t = e;
                }
            };
        };
        function Km(t, e) {
            let n = Zm(t), r = Zm(e);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (let t = 0; t < r.length; t++) {
                const e = r[t], o = n[t];
                if (e.filename !== o.filename || e.lineno !== o.lineno || e.colno !== o.colno || e.function !== o.function) return !1;
            }
            return !0;
        }
        function Xm(t, e) {
            let n = t.fingerprint, r = e.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""));
            } catch (t) {
                return !1;
            }
        }
        function Qm(t) {
            return t.exception && t.exception.values && t.exception.values[0];
        }
        function Zm(t) {
            const e = t.exception;
            if (e) try {
                return e.values[0].stacktrace.frames;
            } catch (t) {
                return;
            }
        }
        yi("Dedupe", Jm);
        const tg = "ExtraErrorData", eg = (t = {}) => {
            const e = t.depth || 3, n = t.captureErrorCause || !1;
            return {
                name: tg,
                setupOnce() {},
                processEvent: (t, r) => function(t, e = {}, n, r) {
                    if (!e.originalException || !jn(e.originalException)) return t;
                    const o = e.originalException.name || e.originalException.constructor.name, i = function(t, e) {
                        try {
                            const n = [ "name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON" ], r = {};
                            for (const e of Object.keys(t)) {
                                if (-1 !== n.indexOf(e)) continue;
                                const o = t[e];
                                r[e] = jn(o) ? o.toString() : o;
                            }
                            if (e && void 0 !== t.cause && (r.cause = jn(t.cause) ? t.cause.toString() : t.cause), 
                            "function" == typeof t.toJSON) {
                                const e = t.toJSON();
                                for (const t of Object.keys(e)) {
                                    const n = e[t];
                                    r[t] = jn(n) ? n.toString() : n;
                                }
                            }
                            return r;
                        } catch (t) {
                            Ym && Dn.error("Unable to extract extra data from the Error object:", t);
                        }
                        return null;
                    }(e.originalException, r);
                    if (i) {
                        const e = {
                            ...t.contexts
                        }, r = No(i, n);
                        return zn(r) && (ur(r, "__sentry_skip_normalization__", !0), e[o] = r), {
                            ...t,
                            contexts: e
                        };
                    }
                    return t;
                }(t, r, e, n)
            };
        };
        yi(tg, eg);
        const ng = "HttpClient", rg = (t = {}) => {
            const e = {
                failedRequestStatusCodes: [ [ 500, 599 ] ],
                failedRequestTargets: [ /.*/ ],
                ...t
            };
            return {
                name: ng,
                setupOnce() {},
                setup(t) {
                    !function(t, e) {
                        Hi() && Qs((n => {
                            if (ii() !== t) return;
                            const {response: r, args: o} = n, [i, s] = o;
                            r && function(t, e, n, r) {
                                if (sg(t, n.status, n.url)) {
                                    const t = function(t, e) {
                                        return !e && t instanceof Request || t instanceof Request && t.bodyUsed ? t : new Request(t, e);
                                    }(e, r);
                                    let o, i, s, a;
                                    cg() && ([{headers: o, cookies: s}, {headers: i, cookies: a}] = [ {
                                        cookieHeader: "Cookie",
                                        obj: t
                                    }, {
                                        cookieHeader: "Set-Cookie",
                                        obj: n
                                    } ].map((({cookieHeader: t, obj: e}) => {
                                        const n = function(t) {
                                            const e = {};
                                            return t.forEach(((t, n) => {
                                                e[n] = t;
                                            })), e;
                                        }(e.headers);
                                        let r;
                                        try {
                                            const e = n[t] || n[t.toLowerCase()] || void 0;
                                            e && (r = ig(e));
                                        } catch (e) {
                                            Ym && Dn.log(`Could not extract cookies from header ${t}`);
                                        }
                                        return {
                                            headers: n,
                                            cookies: r
                                        };
                                    }))), qo(ag({
                                        url: t.url,
                                        method: t.method,
                                        status: n.status,
                                        requestHeaders: o,
                                        responseHeaders: i,
                                        requestCookies: s,
                                        responseCookies: a
                                    }));
                                }
                            }(e, i, r, s);
                        }));
                    }(t, e), function(t, e) {
                        "XMLHttpRequest" in Rn && Ks((n => {
                            if (ii() !== t) return;
                            const r = n.xhr, o = r[Js];
                            if (!o) return;
                            const {method: i, request_headers: s} = o;
                            try {
                                !function(t, e, n, r) {
                                    if (sg(t, e.status, e.responseURL)) {
                                        let t, o, i;
                                        if (cg()) {
                                            try {
                                                const t = e.getResponseHeader("Set-Cookie") || e.getResponseHeader("set-cookie") || void 0;
                                                t && (o = ig(t));
                                            } catch (t) {
                                                Ym && Dn.log("Could not extract cookies from response headers");
                                            }
                                            try {
                                                i = function(t) {
                                                    const e = t.getAllResponseHeaders();
                                                    return e ? e.split("\r\n").reduce(((t, e) => {
                                                        const [n, r] = e.split(": ");
                                                        return t[n] = r, t;
                                                    }), {}) : {};
                                                }(e);
                                            } catch (t) {
                                                Ym && Dn.log("Could not extract headers from response");
                                            }
                                            t = r;
                                        }
                                        qo(ag({
                                            url: e.responseURL,
                                            method: n,
                                            status: e.status,
                                            requestHeaders: t,
                                            responseHeaders: i,
                                            responseCookies: o
                                        }));
                                    }
                                }(e, r, i, s);
                            } catch (t) {
                                Ym && Dn.warn("Error while extracting response event form XHR response", t);
                            }
                        }));
                    }(t, e);
                }
            };
        };
        function og(t) {
            if (t) {
                const e = t["Content-Length"] || t["content-length"];
                if (e) return parseInt(e, 10);
            }
        }
        function ig(t) {
            return t.split("; ").reduce(((t, e) => {
                const [n, r] = e.split("=");
                return t[n] = r, t;
            }), {});
        }
        function sg(t, e, n) {
            return function(t, e) {
                return t.some((t => "number" == typeof t ? t === e : e >= t[0] && e <= t[1]));
            }(t.failedRequestStatusCodes, e) && (r = t.failedRequestTargets, o = n, r.some((t => "string" == typeof t ? o.includes(t) : t.test(o)))) && !ju(n, ii());
            var r, o;
        }
        function ag(t) {
            const e = `HTTP Client Error with status code: ${t.status}`, n = {
                message: e,
                exception: {
                    values: [ {
                        type: "Error",
                        value: e
                    } ]
                },
                request: {
                    url: t.url,
                    method: t.method,
                    headers: t.requestHeaders,
                    cookies: t.requestCookies
                },
                contexts: {
                    response: {
                        status_code: t.status,
                        headers: t.responseHeaders,
                        cookies: t.responseCookies,
                        body_size: og(t.responseHeaders)
                    }
                }
            };
            return wr(n, {
                type: "http.client",
                handled: !1
            }), n;
        }
        function cg() {
            const t = ii();
            return !!t && Boolean(t.getOptions().sendDefaultPii);
        }
        yi(ng, rg);
        const ug = Rn, lg = "ReportingObserver", dg = new WeakMap, pg = (t = {}) => {
            const e = t.types || [ "crash", "deprecation", "intervention" ];
            function n(t) {
                if (dg.has(ii())) for (const e of t) Qo((t => {
                    t.setExtra("url", e.url);
                    const n = `ReportingObserver [${e.type}]`;
                    let r = "No details available";
                    if (e.body) {
                        const n = {};
                        for (const t in e.body) n[t] = e.body[t];
                        if (t.setExtra("body", n), "crash" === e.type) {
                            const t = e.body;
                            r = [ t.crashId || "", t.reason || "" ].join(" ").trim() || r;
                        } else r = e.body.message || r;
                    }
                    Ho(`${n}: ${r}`);
                }));
            }
            return {
                name: lg,
                setupOnce() {
                    "ReportingObserver" in $i && new ug.ReportingObserver(n, {
                        buffered: !0,
                        types: e
                    }).observe();
                },
                setup(t) {
                    dg.set(t, !0);
                }
            };
        };
        yi(lg, pg);
        const fg = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
        function gg(...t) {
            let e = "", n = !1;
            for (let r = t.length - 1; r >= -1 && !n; r--) {
                const o = r >= 0 ? t[r] : "/";
                o && (e = `${o}/${e}`, n = "/" === o.charAt(0));
            }
            return e = function(t, e) {
                let n = 0;
                for (let e = t.length - 1; e >= 0; e--) {
                    const r = t[e];
                    "." === r ? t.splice(e, 1) : ".." === r ? (t.splice(e, 1), n++) : n && (t.splice(e, 1), 
                    n--);
                }
                if (e) for (;n--; n) t.unshift("..");
                return t;
            }(e.split("/").filter((t => !!t)), !n).join("/"), (n ? "/" : "") + e || ".";
        }
        function yg(t) {
            let e = 0;
            for (;e < t.length && "" === t[e]; e++) ;
            let n = t.length - 1;
            for (;n >= 0 && "" === t[n]; n--) ;
            return e > n ? [] : t.slice(e, n - e + 1);
        }
        const vg = "RewriteFrames", bg = (t = {}) => {
            const e = t.root, n = t.prefix || "app:///", r = t.iteratee || (t => {
                if (!t.filename) return t;
                const r = /^[a-zA-Z]:\\/.test(t.filename) || t.filename.includes("\\") && !t.filename.includes("/"), o = /^\//.test(t.filename);
                if (r || o) {
                    const o = r ? t.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : t.filename, i = e ? function(t, e) {
                        t = gg(t).slice(1), e = gg(e).slice(1);
                        const n = yg(t.split("/")), r = yg(e.split("/")), o = Math.min(n.length, r.length);
                        let i = o;
                        for (let t = 0; t < o; t++) if (n[t] !== r[t]) {
                            i = t;
                            break;
                        }
                        let s = [];
                        for (let t = i; t < n.length; t++) s.push("..");
                        return s = s.concat(r.slice(i)), s.join("/");
                    }(e, o) : function(t, e) {
                        let n = function(t) {
                            const e = t.length > 1024 ? `<truncated>${t.slice(-1024)}` : t, n = fg.exec(e);
                            return n ? n.slice(1) : [];
                        }(t)[2];
                        return n;
                    }(o);
                    t.filename = `${n}${i}`;
                }
                return t;
            });
            return {
                name: vg,
                setupOnce() {},
                processEvent(t) {
                    let e = t;
                    return t.exception && Array.isArray(t.exception.values) && (e = function(t) {
                        try {
                            return {
                                ...t,
                                exception: {
                                    ...t.exception,
                                    values: t.exception.values.map((t => {
                                        return {
                                            ...t,
                                            ...t.stacktrace && {
                                                stacktrace: (e = t.stacktrace, {
                                                    ...e,
                                                    frames: e && e.frames && e.frames.map((t => r(t)))
                                                })
                                            }
                                        };
                                        var e;
                                    }))
                                }
                            };
                        } catch (e) {
                            return t;
                        }
                    }(e)), e;
                }
            };
        }, _g = (yi(vg, bg), "SessionTiming"), wg = () => {
            const t = Date.now();
            return {
                name: _g,
                setupOnce() {},
                processEvent(e) {
                    const n = Date.now();
                    return {
                        ...e,
                        extra: {
                            ...e.extra,
                            "session:start": t,
                            "session:duration": n - t,
                            "session:end": n
                        }
                    };
                }
            };
        };
        function Sg() {
            qu.document ? qu.document.addEventListener("visibilitychange", (() => {
                const t = zc();
                if (qu.document.hidden && t) {
                    const e = "cancelled", {op: n, status: r} = oo(t);
                    Uu && Dn.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), 
                    r || t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.end();
                }
            })) : Uu && Dn.warn("[Tracing] Could not set up background tab detection due to lack of global document");
        }
        function xg(t) {
            return [ {
                type: "span"
            }, t ];
        }
        function kg(t) {
            return "number" == typeof t && isFinite(t);
        }
        function Eg(t, {startTimestamp: e, ...n}) {
            return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
                startTimestamp: e,
                ...n
            });
        }
        yi(_g, wg);
        function Ig(t) {
            return t / 1e3;
        }
        function Cg() {
            return qu && qu.addEventListener && qu.performance;
        }
        let Rg, Og, Lg = 0, Ag = {};
        function Mg() {
            const t = Cg();
            if (t && jr) {
                t.mark && qu.performance.mark("sentry-tracing-init");
                const e = Rl("fid", (({metric: t}) => {
                    const e = t.entries[t.entries.length - 1];
                    if (!e) return;
                    const n = Ig(jr), r = Ig(e.startTime);
                    Uu && Dn.log("[Measurements] Adding FID"), Ag.fid = {
                        value: t.value,
                        unit: "millisecond"
                    }, Ag["mark.fid"] = {
                        value: n + r,
                        unit: "second"
                    };
                }), El, yl), n = function(t, e = !1) {
                    return Rl("cls", t, kl, gl, e);
                }((({metric: t}) => {
                    const e = t.entries[t.entries.length - 1];
                    e && (Uu && Dn.log("[Measurements] Adding CLS"), Ag.cls = {
                        value: t.value,
                        unit: ""
                    }, Og = e);
                }), !0), r = wl((({metric: t}) => {
                    const e = t.entries[t.entries.length - 1];
                    e && (Uu && Dn.log("[Measurements] Adding LCP"), Ag.lcp = {
                        value: t.value,
                        unit: "millisecond"
                    }, Rg = e);
                }), !0), o = Rl("ttfb", (({metric: t}) => {
                    t.entries[t.entries.length - 1] && (Uu && Dn.log("[Measurements] Adding TTFB"), 
                    Ag.ttfb = {
                        value: t.value,
                        unit: "millisecond"
                    });
                }), Il, bl);
                return () => {
                    e(), n(), r(), o();
                };
            }
            return () => {};
        }
        function Ng() {
            Sl("longtask", (({entries: t}) => {
                for (const e of t) {
                    const t = zc();
                    if (!t) return;
                    const n = Ig(jr + e.startTime), r = Ig(e.duration);
                    t.startChild({
                        description: "Main UI thread blocked",
                        op: "ui.long-task",
                        origin: "auto.ui.browser.metrics",
                        startTimestamp: n,
                        endTimestamp: n + r
                    });
                }
            }));
        }
        function Dg() {
            Sl("event", (({entries: t}) => {
                for (const e of t) {
                    const t = zc();
                    if (!t) return;
                    if ("click" === e.name) {
                        const n = Ig(jr + e.startTime), r = Ig(e.duration), o = {
                            description: Qn(e.target),
                            op: `ui.interaction.${e.name}`,
                            origin: "auto.ui.browser.metrics",
                            startTimestamp: n,
                            endTimestamp: n + r
                        }, i = nr(e.target);
                        i && (o.attributes = {
                            "ui.component_name": i
                        }), t.startChild(o);
                    }
                }
            }));
        }
        function Pg(t, e) {
            if (Cg() && jr) {
                const n = function(t, e) {
                    return Rl("inp", (({metric: n}) => {
                        if (void 0 === n.value) return;
                        const r = n.entries.find((t => t.duration === n.value && void 0 !== jg[t.name])), o = ii();
                        if (!r || !o) return;
                        const i = jg[r.name], s = o.getOptions(), a = Ig(jr + r.startTime), c = Ig(n.value), u = void 0 !== r.interactionId ? t[r.interactionId] : void 0;
                        if (void 0 === u) return;
                        const {routeName: l, parentContext: d, activeTransaction: p, user: h, replayId: f} = u, m = void 0 !== h ? h.email || h.id || h.ip_address : void 0, g = void 0 !== p ? p.getProfileId() : void 0, y = new fu({
                            startTimestamp: a,
                            endTimestamp: a + c,
                            op: `ui.interaction.${i}`,
                            name: Qn(r.target),
                            attributes: {
                                release: s.release,
                                environment: s.environment,
                                transaction: l,
                                ...void 0 !== m && "" !== m ? {
                                    user: m
                                } : {},
                                ...void 0 !== g ? {
                                    profile_id: g
                                } : {},
                                ...void 0 !== f ? {
                                    replay_id: f
                                } : {}
                            },
                            exclusiveTime: n.value,
                            measurements: {
                                inp: {
                                    value: n.value,
                                    unit: "millisecond"
                                }
                            }
                        }), v = function(t, e, n) {
                            if (!Jc(e)) return !1;
                            let r;
                            return r = void 0 !== t && "function" == typeof e.tracesSampler ? e.tracesSampler({
                                transactionContext: t,
                                name: t.name,
                                parentSampled: t.parentSampled,
                                attributes: {
                                    ...t.data,
                                    ...t.attributes
                                },
                                location: qu.location
                            }) : void 0 !== t && void 0 !== t.sampled ? t.sampled : void 0 !== e.tracesSampleRate ? e.tracesSampleRate : 1, 
                            wu(r) ? !0 === r ? n : !1 === r ? 0 : r * n : (Uu && Dn.warn("[Tracing] Discarding interaction span because of invalid sample rate."), 
                            !1);
                        }(d, s, e);
                        if (v && Math.random() < v) {
                            const t = y ? function(t, e) {
                                const n = {
                                    sent_at: (new Date).toISOString()
                                };
                                return e && (n.dsn = Li(e)), Zi(n, t.map(xg));
                            }([ y ], o.getDsn()) : void 0, e = o && o.getTransport();
                            e && t && e.send(t).then(null, (t => {
                                Uu && Dn.error("Error while sending interaction:", t);
                            }));
                        }
                    }), Cl, _l);
                }(t, e);
                return () => {
                    n();
                };
            }
            return () => {};
        }
        const jg = {
            click: "click",
            pointerdown: "click",
            pointerup: "click",
            mousedown: "click",
            mouseup: "click",
            touchstart: "click",
            touchend: "click",
            mouseover: "hover",
            mouseout: "hover",
            mouseenter: "hover",
            mouseleave: "hover",
            pointerover: "hover",
            pointerout: "hover",
            pointerenter: "hover",
            pointerleave: "hover",
            dragstart: "drag",
            dragend: "drag",
            drag: "drag",
            dragenter: "drag",
            dragleave: "drag",
            dragover: "drag",
            drop: "drag",
            keydown: "press",
            keyup: "press",
            keypress: "press",
            input: "press"
        };
        function Fg(t) {
            const e = Cg();
            if (!e || !qu.performance.getEntries || !jr) return;
            Uu && Dn.log("[Tracing] Adding & adjusting spans using Performance API");
            const n = Ig(jr), r = e.getEntries(), {op: o, start_timestamp: i} = oo(t);
            if (r.slice(Lg).forEach((e => {
                const r = Ig(e.startTime), o = Ig(e.duration);
                if (!("navigation" === t.op && i && n + r < i)) switch (e.entryType) {
                  case "navigation":
                    !function(t, e, n) {
                        [ "unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect" ].forEach((r => {
                            $g(t, e, r, n);
                        })), $g(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), $g(t, e, "fetch", n, "cache", "domainLookupStart"), 
                        $g(t, e, "domainLookup", n, "DNS"), function(t, e, n) {
                            e.responseEnd && (Eg(t, {
                                op: "browser",
                                origin: "auto.browser.browser.metrics",
                                description: "request",
                                startTimestamp: n + Ig(e.requestStart),
                                endTimestamp: n + Ig(e.responseEnd)
                            }), Eg(t, {
                                op: "browser",
                                origin: "auto.browser.browser.metrics",
                                description: "response",
                                startTimestamp: n + Ig(e.responseStart),
                                endTimestamp: n + Ig(e.responseEnd)
                            }));
                        }(t, e, n);
                    }(t, e, n);
                    break;

                  case "mark":
                  case "paint":
                  case "measure":
                    {
                        !function(t, e, n, r, o) {
                            const i = o + n, s = i + r;
                            Eg(t, {
                                description: e.name,
                                endTimestamp: s,
                                op: e.entryType,
                                origin: "auto.resource.browser.metrics",
                                startTimestamp: i
                            });
                        }(t, e, r, o, n);
                        const i = Xu(), s = e.startTime < i.firstHiddenTime;
                        "first-paint" === e.name && s && (Uu && Dn.log("[Measurements] Adding FP"), Ag.fp = {
                            value: e.startTime,
                            unit: "millisecond"
                        }), "first-contentful-paint" === e.name && s && (Uu && Dn.log("[Measurements] Adding FCP"), 
                        Ag.fcp = {
                            value: e.startTime,
                            unit: "millisecond"
                        });
                        break;
                    }

                  case "resource":
                    !function(t, e, n, r, o, i) {
                        if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                        const s = oa(n), a = {};
                        Bg(a, e, "transferSize", "http.response_transfer_size"), Bg(a, e, "encodedBodySize", "http.response_content_length"), 
                        Bg(a, e, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in e && (a["resource.render_blocking_status"] = e.renderBlockingStatus), 
                        s.protocol && (a["url.scheme"] = s.protocol.split(":").pop()), s.host && (a["server.address"] = s.host), 
                        a["url.same_origin"] = n.includes(qu.location.origin);
                        const c = i + r, u = c + o;
                        Eg(t, {
                            description: n.replace(qu.location.origin, ""),
                            endTimestamp: u,
                            op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                            origin: "auto.resource.browser.metrics",
                            startTimestamp: c,
                            data: a
                        });
                    }(t, e, e.name, r, o, n);
                }
            })), Lg = Math.max(r.length - 1, 0), function(t) {
                const e = qu.navigator;
                if (!e) return;
                const n = e.connection;
                n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), 
                kg(n.rtt) && (Ag["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                })), kg(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), kg(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency));
            }(t), "pageload" === o) {
                !function(t) {
                    const e = zu();
                    if (!e) return;
                    const {responseStart: n, requestStart: r} = e;
                    r <= n && (Uu && Dn.log("[Measurements] Adding TTFB Request Time"), t["ttfb.requestTime"] = {
                        value: n - r,
                        unit: "millisecond"
                    });
                }(Ag), [ "fcp", "fp", "lcp" ].forEach((t => {
                    if (!Ag[t] || !i || n >= i) return;
                    const e = Ag[t].value, r = n + Ig(e), o = Math.abs(1e3 * (r - i)), s = o - e;
                    Uu && Dn.log(`[Measurements] Normalized ${t} from ${e} to ${o} (${s})`), Ag[t].value = o;
                }));
                const e = Ag["mark.fid"];
                e && Ag.fid && (Eg(t, {
                    description: "first input delay",
                    endTimestamp: e.value + Ig(Ag.fid.value),
                    op: "ui.action",
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: e.value
                }), delete Ag["mark.fid"]), "fcp" in Ag || delete Ag.cls, Object.keys(Ag).forEach((t => {
                    Du(t, Ag[t].value, Ag[t].unit);
                })), function(t) {
                    Rg && (Uu && Dn.log("[Measurements] Adding LCP Data"), Rg.element && t.setTag("lcp.element", Qn(Rg.element)), 
                    Rg.id && t.setTag("lcp.id", Rg.id), Rg.url && t.setTag("lcp.url", Rg.url.trim().slice(0, 200)), 
                    t.setTag("lcp.size", Rg.size)), Og && Og.sources && (Uu && Dn.log("[Measurements] Adding CLS Data"), 
                    Og.sources.forEach(((e, n) => t.setTag(`cls.source.${n + 1}`, Qn(e.node)))));
                }(t);
            }
            Rg = void 0, Og = void 0, Ag = {};
        }
        function $g(t, e, n, r, o, i) {
            const s = i ? e[i] : e[`${n}End`], a = e[`${n}Start`];
            a && s && Eg(t, {
                op: "browser",
                origin: "auto.browser.browser.metrics",
                description: o || n,
                startTimestamp: r + Ig(a),
                endTimestamp: r + Ig(s)
            });
        }
        function Bg(t, e, n, r) {
            const o = e[n];
            null != o && o < 2147483647 && (t[r] = o);
        }
        const Hg = [ "localhost", /^\/(?!\/)/ ], qg = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            tracingOrigins: Hg,
            tracePropagationTargets: Hg
        };
        function zg(t) {
            const {traceFetch: e, traceXHR: n, tracePropagationTargets: r, tracingOrigins: o, shouldCreateSpanForRequest: i, enableHTTPTimings: s} = {
                traceFetch: qg.traceFetch,
                traceXHR: qg.traceXHR,
                ...t
            }, a = "function" == typeof i ? i : t => !0, c = t => function(t, e) {
                return ar(t, e || Hg);
            }(t, r || o), u = {};
            e && Qs((t => {
                const e = function(t, e, n, r, o = "auto.http.browser") {
                    if (!Jc() || !t.fetchData) return;
                    const i = e(t.fetchData.url);
                    if (t.endTimestamp && i) {
                        const e = t.fetchData.__span;
                        if (!e) return;
                        const n = r[e];
                        return void (n && (function(t, e) {
                            if (e.response) {
                                pu(t, e.response.status);
                                const n = e.response && e.response.headers && e.response.headers.get("content-length");
                                if (n) {
                                    const e = parseInt(n);
                                    e > 0 && t.setAttribute("http.response_content_length", e);
                                }
                            } else e.error && t.setStatus("internal_error");
                            t.end();
                        }(n, t), delete r[e]));
                    }
                    const s = ai(), a = ii(), {method: c, url: u} = t.fetchData, l = function(t) {
                        try {
                            return new URL(t).href;
                        } catch (t) {
                            return;
                        }
                    }(u), d = l ? oa(l).host : void 0, p = i ? Zc({
                        name: `${c} ${u}`,
                        onlyIfParent: !0,
                        attributes: {
                            url: u,
                            type: "fetch",
                            "http.method": c,
                            "http.url": l,
                            "server.address": d,
                            [qc]: o
                        },
                        op: "http.client"
                    }) : void 0;
                    if (p && (t.fetchData.__span = p.spanContext().spanId, r[p.spanContext().spanId] = p), 
                    n(t.fetchData.url) && a) {
                        const e = t.args[0];
                        t.args[1] = t.args[1] || {};
                        const n = t.args[1];
                        n.headers = function(t, e, n, r, o) {
                            const i = o || n.getSpan(), s = So(), {traceId: a, spanId: c, sampled: u, dsc: l} = {
                                ...s.getPropagationContext(),
                                ...n.getPropagationContext()
                            }, d = i ? eo(i) : Qr(a, c, u), p = Yr(l || (i ? ao(i) : so(a, e, n))), h = r.headers || ("undefined" != typeof Request && Vn(t, Request) ? t.headers : void 0);
                            if (h) {
                                if ("undefined" != typeof Headers && Vn(h, Headers)) {
                                    const t = new Headers(h);
                                    return t.append("sentry-trace", d), p && t.append(Hr, p), t;
                                }
                                if (Array.isArray(h)) {
                                    const t = [ ...h, [ "sentry-trace", d ] ];
                                    return p && t.push([ Hr, p ]), t;
                                }
                                {
                                    const t = "baggage" in h ? h.baggage : void 0, e = [];
                                    return Array.isArray(t) ? e.push(...t) : t && e.push(t), p && e.push(p), {
                                        ...h,
                                        "sentry-trace": d,
                                        baggage: e.length > 0 ? e.join(",") : void 0
                                    };
                                }
                            }
                            return {
                                "sentry-trace": d,
                                baggage: p
                            };
                        }(e, a, s, n, p);
                    }
                    return p;
                }(t, a, c, u);
                if (e) {
                    const n = Yg(t.fetchData.url), r = n ? oa(n).host : void 0;
                    e.setAttributes({
                        "http.url": n,
                        "server.address": r
                    });
                }
                s && e && Wg(e);
            })), n && Ks((t => {
                const e = function(t, e, n, r) {
                    const o = t.xhr, i = o && o[Js];
                    if (!Jc() || !o || o.__sentry_own_request__ || !i) return;
                    const s = e(i.url);
                    if (t.endTimestamp && s) {
                        const t = o.__sentry_xhr_span_id__;
                        if (!t) return;
                        const e = r[t];
                        return void (e && void 0 !== i.status_code && (pu(e, i.status_code), e.end(), delete r[t]));
                    }
                    const a = ai(), c = So(), u = Yg(i.url), l = u ? oa(u).host : void 0, d = s ? Zc({
                        name: `${i.method} ${i.url}`,
                        onlyIfParent: !0,
                        attributes: {
                            type: "xhr",
                            "http.method": i.method,
                            "http.url": u,
                            url: i.url,
                            "server.address": l,
                            [qc]: "auto.http.browser"
                        },
                        op: "http.client"
                    }) : void 0;
                    d && (o.__sentry_xhr_span_id__ = d.spanContext().spanId, r[o.__sentry_xhr_span_id__] = d);
                    const p = ii();
                    if (o.setRequestHeader && n(i.url) && p) {
                        const {traceId: t, spanId: e, sampled: n, dsc: r} = {
                            ...c.getPropagationContext(),
                            ...a.getPropagationContext()
                        };
                        !function(t, e, n) {
                            try {
                                t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(Hr, n);
                            } catch (t) {}
                        }(o, d ? eo(d) : Qr(t, e, n), Yr(r || (d ? ao(d) : so(t, p, a))));
                    }
                    return d;
                }(t, a, c, u);
                s && e && Wg(e);
            }));
        }
        function Wg(t) {
            const {url: e} = oo(t).data || {};
            if (!e || "string" != typeof e) return;
            const n = Sl("resource", (({entries: r}) => {
                r.forEach((r => {
                    (function(t) {
                        return "resource" === t.entryType && "initiatorType" in t && "string" == typeof t.nextHopProtocol && ("fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType);
                    })(r) && r.name.endsWith(e) && (function(t) {
                        const {name: e, version: n} = function(t) {
                            let e = "unknown", n = "unknown", r = "";
                            for (const o of t) {
                                if ("/" === o) {
                                    [e, n] = t.split("/");
                                    break;
                                }
                                if (!isNaN(Number(o))) {
                                    e = "h" === r ? "http" : r, n = t.split(r)[1];
                                    break;
                                }
                                r += o;
                            }
                            return r === t && (e = r), {
                                name: e,
                                version: n
                            };
                        }(t.nextHopProtocol), r = [];
                        return r.push([ "network.protocol.version", n ], [ "network.protocol.name", e ]), 
                        jr ? [ ...r, [ "http.request.redirect_start", Gg(t.redirectStart) ], [ "http.request.fetch_start", Gg(t.fetchStart) ], [ "http.request.domain_lookup_start", Gg(t.domainLookupStart) ], [ "http.request.domain_lookup_end", Gg(t.domainLookupEnd) ], [ "http.request.connect_start", Gg(t.connectStart) ], [ "http.request.secure_connection_start", Gg(t.secureConnectionStart) ], [ "http.request.connection_end", Gg(t.connectEnd) ], [ "http.request.request_start", Gg(t.requestStart) ], [ "http.request.response_start", Gg(t.responseStart) ], [ "http.request.response_end", Gg(t.responseEnd) ] ] : r;
                    }(r).forEach((e => t.setAttribute(...e))), setTimeout(n));
                }));
            }));
        }
        function Gg(t = 0) {
            return ((jr || performance.timeOrigin) + t) / 1e3;
        }
        function Yg(t) {
            try {
                return new URL(t, qu.location.origin).href;
            } catch (t) {
                return;
            }
        }
        const Vg = {
            ...gu,
            markBackgroundTransactions: !0,
            routingInstrumentation: function(t, e = !0, n = !0) {
                if (!qu || !qu.location) return void (Uu && Dn.warn("Could not initialize routing instrumentation due to invalid location"));
                let r, o = qu.location.href;
                e && (r = t({
                    name: qu.location.pathname,
                    startTimestamp: jr ? jr / 1e3 : void 0,
                    op: "pageload",
                    origin: "auto.pageload.browser",
                    metadata: {
                        source: "url"
                    }
                })), n && Xi((({to: e, from: n}) => {
                    void 0 === n && o && -1 !== o.indexOf(e) ? o = void 0 : n !== e && (o = void 0, 
                    r && (Uu && Dn.log(`[Tracing] Finishing current transaction with op: ${r.op}`), 
                    r.end()), r = t({
                        name: qu.location.pathname,
                        op: "navigation",
                        origin: "auto.navigation.browser",
                        metadata: {
                            source: "url"
                        }
                    }));
                }));
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            enableInp: !1,
            interactionsSampleRate: 1,
            _experiments: {},
            ...qg
        };
        class Jg {
            constructor(t) {
                this.name = "BrowserTracing", this._hasSetTracePropagationTargets = !1, Eu(), Uu && (this._hasSetTracePropagationTargets = !(!t || !t.tracePropagationTargets && !t.tracingOrigins)), 
                this.options = {
                    ...Vg,
                    ...t
                }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), 
                t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), 
                this._collectWebVitals = Mg(), this._interactionIdToRouteNameMapping = {}, this.options.enableInp && Pg(this._interactionIdToRouteNameMapping, this.options.interactionsSampleRate), 
                this.options.enableLongTask && Ng(), this.options._experiments.enableInteractions && Dg(), 
                this._latestRoute = {
                    name: void 0,
                    context: void 0
                };
            }
            setupOnce(t, e) {
                this._getCurrentHub = e;
                const n = e().getClient(), r = n && n.getOptions(), {routingInstrumentation: o, startTransactionOnLocationChange: i, startTransactionOnPageLoad: s, markBackgroundTransactions: a, traceFetch: c, traceXHR: u, shouldCreateSpanForRequest: l, enableHTTPTimings: d, _experiments: p} = this.options, h = r && r.tracePropagationTargets, f = h || this.options.tracePropagationTargets;
                Uu && this._hasSetTracePropagationTargets && h && Dn.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), 
                o((t => {
                    const n = this._createRouteTransaction(t);
                    return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), 
                    n;
                }), s, i), a && Sg(), p.enableInteractions && this._registerInteractionListener(), 
                this.options.enableInp && this._registerInpInteractionListener(), zg({
                    traceFetch: c,
                    traceXHR: u,
                    tracePropagationTargets: f,
                    shouldCreateSpanForRequest: l,
                    enableHTTPTimings: d
                });
            }
            _createRouteTransaction(t) {
                if (!this._getCurrentHub) return void (Uu && Dn.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`));
                const e = this._getCurrentHub(), {beforeNavigate: n, idleTimeout: r, finalTimeout: o, heartbeatInterval: i} = this.options, s = "pageload" === t.op;
                let a;
                if (s) {
                    const e = s ? Kg("sentry-trace") : "", n = s ? Kg("baggage") : void 0, {traceId: r, dsc: o, parentSpanId: i, sampled: c} = Xr(e, n);
                    a = {
                        traceId: r,
                        parentSpanId: i,
                        parentSampled: c,
                        ...t,
                        metadata: {
                            ...t.metadata,
                            dynamicSamplingContext: o
                        },
                        trimEnd: !0
                    };
                } else a = {
                    trimEnd: !0,
                    ...t
                };
                const c = "function" == typeof n ? n(a) : a, u = void 0 === c ? {
                    ...a,
                    sampled: !1
                } : c;
                u.metadata = u.name !== a.name ? {
                    ...u.metadata,
                    source: "custom"
                } : u.metadata, this._latestRoute.name = u.name, this._latestRoute.context = u, 
                !1 === u.sampled && Uu && Dn.log(`[Tracing] Will not send ${u.op} transaction because of beforeNavigate.`), 
                Uu && Dn.log(`[Tracing] Starting ${u.op} transaction on scope`);
                const {location: l} = qu, d = ku(e, u, r, o, !0, {
                    location: l
                }, i, s);
                return s && qu.document && (qu.document.addEventListener("readystatechange", (() => {
                    [ "interactive", "complete" ].includes(qu.document.readyState) && d.sendAutoFinishSignal();
                })), [ "interactive", "complete" ].includes(qu.document.readyState) && d.sendAutoFinishSignal()), 
                d.registerBeforeFinishCallback((t => {
                    this._collectWebVitals(), Fg(t);
                })), d;
            }
            _registerInteractionListener() {
                let t;
                const e = () => {
                    const {idleTimeout: e, finalTimeout: n, heartbeatInterval: r} = this.options, o = "ui.action.click", i = zc();
                    if (i && i.op && [ "navigation", "pageload" ].includes(i.op)) return void (Uu && Dn.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`));
                    if (t && (t.setFinishReason("interactionInterrupted"), t.end(), t = void 0), !this._getCurrentHub) return void (Uu && Dn.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`));
                    if (!this._latestRoute.name) return void (Uu && Dn.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`));
                    const s = this._getCurrentHub(), {location: a} = qu, c = {
                        name: this._latestRoute.name,
                        op: o,
                        trimEnd: !0,
                        data: {
                            [Bc]: this._latestRoute.context ? Xg(this._latestRoute.context) : "url"
                        }
                    };
                    t = ku(s, c, e, n, !0, {
                        location: a
                    }, r);
                };
                [ "click" ].forEach((t => {
                    qu.document && addEventListener(t, e, {
                        once: !1,
                        capture: !0
                    });
                }));
            }
            _registerInpInteractionListener() {
                const t = ({entries: t}) => {
                    const e = ii(), n = void 0 !== e && void 0 !== e.getIntegrationByName ? e.getIntegrationByName("Replay") : void 0, r = void 0 !== n ? n.getReplayId() : void 0, o = zc(), i = ai(), s = void 0 !== i ? i.getUser() : void 0;
                    t.forEach((t => {
                        if (function(t) {
                            return "duration" in t;
                        }(t)) {
                            const e = t.interactionId;
                            if (void 0 === e) return;
                            const n = this._interactionIdToRouteNameMapping[e], i = t.duration, a = t.startTime, c = Object.keys(this._interactionIdToRouteNameMapping), u = c.length > 0 ? c.reduce(((t, e) => this._interactionIdToRouteNameMapping[t].duration < this._interactionIdToRouteNameMapping[e].duration ? t : e)) : void 0;
                            if ("first-input" === t.entryType && c.map((t => this._interactionIdToRouteNameMapping[t])).some((t => t.duration === i && t.startTime === a))) return;
                            if (!e) return;
                            if (n) n.duration = Math.max(n.duration, i); else if (c.length < 10 || void 0 === u || i > this._interactionIdToRouteNameMapping[u].duration) {
                                const t = this._latestRoute.name, n = this._latestRoute.context;
                                t && n && (u && Object.keys(this._interactionIdToRouteNameMapping).length >= 10 && delete this._interactionIdToRouteNameMapping[u], 
                                this._interactionIdToRouteNameMapping[e] = {
                                    routeName: t,
                                    duration: i,
                                    parentContext: n,
                                    user: s,
                                    activeTransaction: o,
                                    replayId: r,
                                    startTime: a
                                });
                            }
                        }
                    }));
                };
                Sl("event", t), Sl("first-input", t);
            }
        }
        function Kg(t) {
            const e = er(`meta[name=${t}]`);
            return e ? e.getAttribute("content") : void 0;
        }
        function Xg(t) {
            const e = t.attributes && t.attributes[Bc], n = t.data && t.data[Bc], r = t.metadata && t.metadata.source;
            return e || n || r;
        }
        const Qg = {
            ...gu,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableInp: !1,
            interactionsSampleRate: 1,
            _experiments: {},
            ...qg
        }, Zg = (t = {}) => {
            const e = !(!Uu || !t.tracePropagationTargets && !t.tracingOrigins);
            Eu(), !t.tracePropagationTargets && t.tracingOrigins && (t.tracePropagationTargets = t.tracingOrigins);
            const n = {
                ...Qg,
                ...t
            }, r = Mg(), o = {};
            n.enableInp && Pg(o, n.interactionsSampleRate), n.enableLongTask && Ng(), n._experiments.enableInteractions && Dg();
            const i = {
                name: void 0,
                context: void 0
            };
            function s(t) {
                const e = wo(), {beforeStartSpan: o, idleTimeout: s, finalTimeout: a, heartbeatInterval: c} = n, u = "pageload" === t.op;
                let l;
                if (u) {
                    const e = u ? ny("sentry-trace") : "", n = u ? ny("baggage") : void 0, {traceId: r, dsc: o, parentSpanId: i, sampled: s} = Xr(e, n);
                    l = {
                        traceId: r,
                        parentSpanId: i,
                        parentSampled: s,
                        ...t,
                        metadata: {
                            ...t.metadata,
                            dynamicSamplingContext: o
                        },
                        trimEnd: !0
                    };
                } else l = {
                    trimEnd: !0,
                    ...t
                };
                const d = o ? o(l) : l;
                d.metadata = d.name !== l.name ? {
                    ...d.metadata,
                    source: "custom"
                } : d.metadata, i.name = d.name, i.context = d, !1 === d.sampled && Uu && Dn.log(`[Tracing] Will not send ${d.op} transaction because of beforeNavigate.`), 
                Uu && Dn.log(`[Tracing] Starting ${d.op} transaction on scope`);
                const {location: p} = qu, h = ku(e, d, s, a, !0, {
                    location: p
                }, c, u);
                return u && qu.document && (qu.document.addEventListener("readystatechange", (() => {
                    [ "interactive", "complete" ].includes(qu.document.readyState) && h.sendAutoFinishSignal();
                })), [ "interactive", "complete" ].includes(qu.document.readyState) && h.sendAutoFinishSignal()), 
                h.registerBeforeFinishCallback((t => {
                    r(), Fg(t);
                })), h;
            }
            return {
                name: "BrowserTracing",
                setupOnce: () => {},
                afterAllSetup(t) {
                    const r = t.getOptions(), {markBackgroundSpan: a, traceFetch: c, traceXHR: u, shouldCreateSpanForRequest: l, enableHTTPTimings: d, _experiments: p} = n, h = r && r.tracePropagationTargets, f = h || n.tracePropagationTargets;
                    let m;
                    Uu && e && h && Dn.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
                    let g = qu.location && qu.location.href;
                    if (t.on && (t.on("startNavigationSpan", (t => {
                        m && (Uu && Dn.log(`[Tracing] Finishing current transaction with op: ${oo(m).op}`), 
                        m.end()), m = s({
                            op: "navigation",
                            ...t
                        });
                    })), t.on("startPageLoadSpan", (t => {
                        m && (Uu && Dn.log(`[Tracing] Finishing current transaction with op: ${oo(m).op}`), 
                        m.end()), m = s({
                            op: "pageload",
                            ...t
                        });
                    }))), n.instrumentPageLoad && t.emit && qu.location) {
                        const e = {
                            name: qu.location.pathname,
                            startTimestamp: jr ? jr / 1e3 : void 0,
                            origin: "auto.pageload.browser",
                            attributes: {
                                [Bc]: "url"
                            }
                        };
                        ty(t, e);
                    }
                    n.instrumentNavigation && t.emit && qu.location && Xi((({to: e, from: n}) => {
                        if (void 0 === n && g && -1 !== g.indexOf(e)) g = void 0; else if (n !== e) {
                            g = void 0;
                            const e = {
                                name: qu.location.pathname,
                                origin: "auto.navigation.browser",
                                attributes: {
                                    [Bc]: "url"
                                }
                            };
                            ey(t, e);
                        }
                    })), a && Sg(), p.enableInteractions && function(t, e) {
                        let n;
                        const r = () => {
                            const {idleTimeout: r, finalTimeout: o, heartbeatInterval: i} = t, s = "ui.action.click", a = zc();
                            if (a && a.op && [ "navigation", "pageload" ].includes(a.op)) return void (Uu && Dn.warn(`[Tracing] Did not create ${s} transaction because a pageload or navigation transaction is in progress.`));
                            if (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !e.name) return void (Uu && Dn.warn(`[Tracing] Did not create ${s} transaction because _latestRouteName is missing.`));
                            const {location: c} = qu, u = {
                                name: e.name,
                                op: s,
                                trimEnd: !0,
                                data: {
                                    [Bc]: e.context ? oy(e.context) : "url"
                                }
                            };
                            n = ku(wo(), u, r, o, !0, {
                                location: c
                            }, i);
                        };
                        [ "click" ].forEach((t => {
                            qu.document && addEventListener(t, r, {
                                once: !1,
                                capture: !0
                            });
                        }));
                    }(n, i), n.enableInp && function(t, e) {
                        const n = ({entries: n}) => {
                            const r = ii(), o = void 0 !== r && void 0 !== r.getIntegrationByName ? r.getIntegrationByName("Replay") : void 0, i = void 0 !== o ? o.getReplayId() : void 0, s = zc(), a = ai(), c = void 0 !== a ? a.getUser() : void 0;
                            n.forEach((n => {
                                if (function(t) {
                                    return "duration" in t;
                                }(n)) {
                                    const r = n.interactionId;
                                    if (void 0 === r) return;
                                    const o = t[r], a = n.duration, u = n.startTime, l = Object.keys(t), d = l.length > 0 ? l.reduce(((e, n) => t[e].duration < t[n].duration ? e : n)) : void 0;
                                    if ("first-input" === n.entryType && l.map((e => t[e])).some((t => t.duration === a && t.startTime === u))) return;
                                    if (!r) return;
                                    if (o) o.duration = Math.max(o.duration, a); else if (l.length < ry || void 0 === d || a > t[d].duration) {
                                        const n = e.name, o = e.context;
                                        n && o && (d && Object.keys(t).length >= ry && delete t[d], t[r] = {
                                            routeName: n,
                                            duration: a,
                                            parentContext: o,
                                            user: c,
                                            activeTransaction: s,
                                            replayId: i,
                                            startTime: u
                                        });
                                    }
                                }
                            }));
                        };
                        Sl("event", n), Sl("first-input", n);
                    }(o, i), zg({
                        traceFetch: c,
                        traceXHR: u,
                        tracePropagationTargets: f,
                        shouldCreateSpanForRequest: l,
                        enableHTTPTimings: d
                    });
                },
                options: n
            };
        };
        function ty(t, e) {
            if (!t.emit) return;
            t.emit("startPageLoadSpan", e);
            const n = tu();
            return "pageload" === (n && oo(n).op) ? n : void 0;
        }
        function ey(t, e) {
            if (!t.emit) return;
            t.emit("startNavigationSpan", e);
            const n = tu();
            return "navigation" === (n && oo(n).op) ? n : void 0;
        }
        function ny(t) {
            const e = er(`meta[name=${t}]`);
            return e ? e.getAttribute("content") : void 0;
        }
        const ry = 10;
        function oy(t) {
            const e = t.attributes && t.attributes[Bc], n = t.data && t.data[Bc], r = t.metadata && t.metadata.source;
            return e || n || r;
        }
        function cy(t, e) {
            kr && Dn.info(`[Offline]: ${t}`, e);
        }
        function uy(t) {
            return e => {
                const n = t(e), r = e.createStore ? e.createStore(e) : void 0;
                let o, i = 5e3;
                function s(t, n, r) {
                    return o = [ "replay_event", "replay_recording", "client_report" ], !es(t, ((t, e) => o.includes(e))) && (!e.shouldStore || e.shouldStore(t, n, r));
                    var o;
                }
                function a(t) {
                    r && (o && clearTimeout(o), o = setTimeout((async () => {
                        o = void 0;
                        const t = await r.pop();
                        t && (cy("Attempting to send previously queued event"), u(t).catch((t => {
                            cy("Failed to retry sending", t);
                        })));
                    }), t), "number" != typeof o && o.unref && o.unref());
                }
                function c() {
                    o || (a(i), i = Math.min(2 * i, 36e5));
                }
                async function u(t) {
                    try {
                        const e = await n.send(t);
                        let r = 100;
                        if (e) if (e.headers && e.headers["retry-after"]) r = dc(e.headers["retry-after"]); else if ((e.statusCode || 0) >= 400) return e;
                        return a(r), i = 5e3, e;
                    } catch (e) {
                        if (r && await s(t, e, i)) return await r.insert(t), c(), cy("Error sending. Event queued", e), 
                        {};
                        throw e;
                    }
                }
                return e.flushAtStartup && c(), {
                    send: u,
                    flush: t => n.flush(t)
                };
            };
        }
        function ly(t) {
            return new Promise(((e, n) => {
                t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => n(t.error);
            }));
        }
        function dy(t) {
            return ly(t.getAllKeys());
        }
        function py(t) {
            let e;
            function n() {
                return null == e && (e = function(t, e) {
                    const n = indexedDB.open(t);
                    n.onupgradeneeded = () => n.result.createObjectStore(e);
                    const r = ly(n);
                    return t => r.then((n => t(n.transaction(e, "readwrite").objectStore(e))));
                }(t.dbName || "sentry-offline", t.storeName || "queue")), e;
            }
            return {
                insert: async e => {
                    try {
                        const r = await rs(e, t.textEncoder);
                        await function(t, e, n) {
                            return t((t => dy(t).then((r => {
                                if (!(r.length >= n)) return t.put(e, Math.max(...r, 0) + 1), ly(t.transaction);
                            }))));
                        }(n(), r, t.maxQueueSize || 30);
                    } catch (t) {}
                },
                pop: async () => {
                    try {
                        const e = await function(t) {
                            return t((t => dy(t).then((e => {
                                if (0 !== e.length) return ly(t.get(e[0])).then((n => (t.delete(e[0]), ly(t.transaction).then((() => n)))));
                            }))));
                        }(n());
                        if (e) return function(t, e, n) {
                            let r = "string" == typeof t ? e.encode(t) : t;
                            function o(t) {
                                const e = r.subarray(0, t);
                                return r = r.subarray(t + 1), e;
                            }
                            function i() {
                                let t = r.indexOf(10);
                                return t < 0 && (t = r.length), JSON.parse(n.decode(o(t)));
                            }
                            const s = i(), a = [];
                            for (;r.length; ) {
                                const t = i(), e = "number" == typeof t.length ? t.length : void 0;
                                a.push([ t, e ? o(e) : i() ]);
                            }
                            return [ s, a ];
                        }(e, t.textEncoder || new TextEncoder, t.textDecoder || new TextDecoder);
                    } catch (t) {}
                }
            };
        }
        function hy(t) {
            return function(t) {
                return e => t({
                    ...e,
                    createStore: py
                });
            }(uy(t));
        }
        const my = String(0);
        let yy = "", vy = "", by = "", _y = As.navigator && As.navigator.userAgent || "", wy = "";
        const Sy = As.navigator && As.navigator.language || As.navigator && As.navigator.languages && As.navigator.languages[0] || "", xy = As.navigator && As.navigator.userAgentData;
        var ky;
        function Ty(t, e, n, r) {
            if ("transaction" !== r.type) throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
            if (null == n) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
            const o = function(t) {
                const e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
                return "string" == typeof e && 32 !== e.length && ws && Dn.log(`[Profiling] Invalid traceId: ${e} on profiled event`), 
                "string" != typeof e ? "" : e;
            }(r), i = function(t) {
                return function(t) {
                    return !("thread_metadata" in t);
                }(t) ? function(t) {
                    let e, n = 0;
                    const r = {
                        samples: [],
                        stacks: [],
                        frames: [],
                        thread_metadata: {
                            [my]: {
                                name: "main"
                            }
                        }
                    };
                    if (!t.samples.length) return r;
                    const o = t.samples[0].timestamp, i = "number" == typeof performance.timeOrigin ? performance.timeOrigin : jr || 0, s = i - (jr || i);
                    for (let i = 0; i < t.samples.length; i++) {
                        const a = t.samples[i];
                        if (void 0 === a.stackId) {
                            void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[i] = {
                                elapsed_since_start_ns: (1e6 * (a.timestamp + s - o)).toFixed(0),
                                stack_id: e,
                                thread_id: my
                            };
                            continue;
                        }
                        let c = t.stacks[a.stackId];
                        const u = [];
                        for (;c; ) {
                            u.push(c.frameId);
                            const e = t.frames[c.frameId];
                            void 0 === r.frames[c.frameId] && (r.frames[c.frameId] = {
                                function: e.name,
                                abs_path: "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                lineno: e.line,
                                colno: e.column
                            }), c = void 0 === c.parentId ? void 0 : t.stacks[c.parentId];
                        }
                        const l = {
                            elapsed_since_start_ns: (1e6 * (a.timestamp + s - o)).toFixed(0),
                            stack_id: n,
                            thread_id: my
                        };
                        r.stacks[n] = u, r.samples[i] = l, n++;
                    }
                    return r;
                }(t) : t;
            }(n), s = e || ("number" == typeof r.start_timestamp ? 1e3 * r.start_timestamp : Date.now()), a = "number" == typeof r.timestamp ? 1e3 * r.timestamp : Date.now();
            return {
                event_id: t,
                timestamp: new Date(s).toISOString(),
                platform: "javascript",
                version: "1",
                release: r.release || "",
                environment: r.environment || Ar,
                runtime: {
                    name: "javascript",
                    version: As.navigator.userAgent
                },
                os: {
                    name: yy,
                    version: vy,
                    build_number: _y
                },
                device: {
                    locale: Sy,
                    model: wy,
                    manufacturer: _y,
                    architecture: by,
                    is_emulator: !1
                },
                debug_meta: {
                    images: Ry(n.resources)
                },
                profile: i,
                transactions: [ {
                    name: r.transaction || "",
                    id: r.event_id || yr(),
                    trace_id: o,
                    active_thread_id: my,
                    relative_start_ns: "0",
                    relative_end_ns: (1e6 * (a - s)).toFixed(0)
                } ]
            };
        }
        function Iy(t) {
            return "pageload" === t.op;
        }
        "object" == typeof (ky = xy) && null !== ky && "getHighEntropyValues" in ky && xy.getHighEntropyValues([ "architecture", "model", "platform", "platformVersion", "fullVersionList" ]).then((t => {
            if (yy = t.platform || "", by = t.architecture || "", wy = t.model || "", vy = t.platformVersion || "", 
            t.fullVersionList && t.fullVersionList.length > 0) {
                const e = t.fullVersionList[t.fullVersionList.length - 1];
                _y = `${e.brand} ${e.version}`;
            }
        })).catch((t => {}));
        const Cy = new WeakMap;
        function Ry(t) {
            const e = Rn._sentryDebugIds;
            if (!e) return [];
            const n = ii(), r = n && n.getOptions(), o = r && r.stackParser;
            if (!o) return [];
            let i;
            const s = Cy.get(o);
            s ? i = s : (i = new Map, Cy.set(o, i));
            const a = Object.keys(e).reduce(((t, n) => {
                let r;
                const s = i.get(n);
                s ? r = s : (r = o(n), i.set(n, r));
                for (let o = r.length - 1; o >= 0; o--) {
                    const i = r[o], s = i && i.filename;
                    if (i && s) {
                        t[s] = e[n];
                        break;
                    }
                }
                return t;
            }), {}), c = [];
            for (const e of t) e && a[e] && c.push({
                type: "sourcemap",
                code_file: e,
                debug_id: a[e]
            });
            return c;
        }
        let Oy = !1;
        function Ay(t) {
            if (Oy) return ws && Dn.log("[Profiling] Profiling has been disabled for the duration of the current user session."), 
            !1;
            if (!t.isRecording()) return ws && Dn.log("[Profiling] Discarding profile because transaction was not sampled."), 
            !1;
            const e = ii(), n = e && e.getOptions();
            if (!n) return ws && Dn.log("[Profiling] Profiling disabled, no options found."), 
            !1;
            const r = n.profilesSampleRate;
            return ("number" != typeof (o = r) && "boolean" != typeof o || "number" == typeof o && isNaN(o) ? (ws && Dn.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`), 
            0) : !0 === o || !1 === o || !(o < 0 || o > 1) || (ws && Dn.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${o}.`), 
            0)) ? r ? !!(!0 === r || Math.random() < r) || (ws && Dn.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), 
            !1) : (ws && Dn.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), 
            !1) : (ws && Dn.warn("[Profiling] Discarding profile because of invalid sample rate."), 
            !1);
            var o;
        }
        function My(t, e, n, r) {
            return function(t) {
                return t.samples.length < 2 ? (ws && Dn.log("[Profiling] Discarding profile because it contains less than 2 samples"), 
                !1) : !!t.frames.length || (ws && Dn.log("[Profiling] Discarding profile because it contains no frames"), 
                !1);
            }(n) ? Ty(t, e, n, r) : null;
        }
        const Ny = new Map;
        function Dy(t) {
            const e = Ny.get(t);
            return e && Ny.delete(t), e;
        }
        function Py(t) {
            return t ? Ay(t) ? jy(t) : t : (ws && Dn.log("[Profiling] Transaction is undefined, skipping profiling"), 
            t);
        }
        function jy(t) {
            let e;
            Iy(t) && (e = 1e3 * Dr());
            const n = function() {
                const t = As.Profiler;
                if ("function" != typeof t) return void (ws && Dn.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."));
                const e = Math.floor(3e3);
                try {
                    return new t({
                        sampleInterval: 10,
                        maxBufferSize: e
                    });
                } catch (t) {
                    ws && (Dn.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), 
                    Dn.log("[Profiling] Disabling profiling for current user session.")), Oy = !0;
                }
            }();
            if (!n) return t;
            ws && Dn.log(`[Profiling] started profiling transaction: ${oo(t).description}`);
            const r = yr();
            async function o() {
                return t && n ? n.stop().then((e => (i && (As.clearTimeout(i), i = void 0), ws && Dn.log(`[Profiling] stopped profiling of transaction: ${oo(t).description}`), 
                e ? (function(t, e) {
                    if (Ny.set(t, e), Ny.size > 30) {
                        const t = Ny.keys().next().value;
                        Ny.delete(t);
                    }
                }(r, e), null) : (ws && Dn.log(`[Profiling] profiler returned null profile for: ${oo(t).description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), 
                null)))).catch((t => (ws && Dn.log("[Profiling] error while stopping profiler:", t), 
                null))) : null;
            }
            let i = As.setTimeout((() => {
                ws && Dn.log("[Profiling] max profile duration elapsed, stopping profiling for:", oo(t).description), 
                o();
            }), 3e4);
            const s = t.end.bind(t);
            return t.end = function() {
                return t ? (o().then((() => {
                    t.setContext("profile", {
                        profile_id: r,
                        start_timestamp: e
                    }), s();
                }), (() => {
                    s();
                })), t) : s();
            }, t;
        }
        const Fy = "BrowserProfiling", $y = () => ({
            name: Fy,
            setupOnce() {},
            setup(t) {
                const e = ai().getTransaction();
                e && Iy(e) && Ay(e) && jy(e), "function" == typeof t.on ? (t.on("startTransaction", (t => {
                    Ay(t) && jy(t);
                })), t.on("beforeEnvelope", (t => {
                    if (!Ny.size) return;
                    const e = function(t) {
                        const e = [];
                        return es(t, ((t, n) => {
                            if ("transaction" === n) for (let n = 1; n < t.length; n++) {
                                const r = t[n];
                                r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[n]);
                            }
                        })), e;
                    }(t);
                    if (!e.length) return;
                    const n = [];
                    for (const t of e) {
                        const e = t && t.contexts, r = e && e.profile && e.profile.profile_id, o = e && e.profile && e.profile.start_timestamp;
                        if ("string" != typeof r) {
                            ws && Dn.log("[Profiling] cannot find profile for a transaction without a profile context");
                            continue;
                        }
                        if (!r) {
                            ws && Dn.log("[Profiling] cannot find profile for a transaction without a profile context");
                            continue;
                        }
                        e && e.profile && delete e.profile;
                        const i = Dy(r);
                        if (!i) {
                            ws && Dn.log(`[Profiling] Could not retrieve profile for transaction: ${r}`);
                            continue;
                        }
                        const s = My(r, o, i, t);
                        s && n.push(s);
                    }
                    !function(t, e) {
                        if (!e.length) return t;
                        for (const n of e) t[1].push([ {
                            type: "profile"
                        }, n ]);
                    }(t, n);
                }))) : Dn.warn("[Profiling] Client does not support hooks, profiling will be disabled");
            }
        }), By = yi(Fy, $y);
        let Uy = {};
        As.Sentry && As.Sentry.Integrations && (Uy = As.Sentry.Integrations);
        const Hy = {
            ...Uy,
            ...Mc,
            ...e
        };
        xc({
            dsn: "https://6efc3248194043519dda09fb559a5c56@kent.adblox.org/48",
            release: chrome.runtime.getManifest().version,
            beforeBreadcrumb: function(t, e) {
                return null;
            },
            integrations: function(t) {
                return t.filter((function(t) {
                    return "Breadcrumbs" !== t.name && "Dedupe" !== t.name && "OfflineStore" !== t.name;
                }));
            },
            sampleRate: .1,
            beforeSend: function(t, e) {
                var n = e.originalException;
                return n && "The browser is shutting down" === n.message ? null : t;
            }
        });
        const qy = r;
        function zy(t) {
            return (zy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }
        function Wy(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, s, a = [], c = !0, u = !1;
                    try {
                        if (i = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            c = !1;
                        } else for (;!(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); c = !0) ;
                    } catch (t) {
                        u = !0, o = t;
                    } finally {
                        try {
                            if (!c && null != n.return && (s = n.return(), Object(s) !== s)) return;
                        } finally {
                            if (u) throw o;
                        }
                    }
                    return a;
                }
            }(t, e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t) return Gy(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gy(t, e) : void 0;
                }
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
        }
        function Gy(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function Yy(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, Xy(r.key), r);
            }
        }
        function Vy() {
            Vy = function() {
                return t;
            };
            var t = {}, e = Object.prototype, n = e.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value;
            }, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                c({}, "");
            } catch (t) {
                c = function(t, e, n) {
                    return t[e] = n;
                };
            }
            function u(t, e, n, o) {
                var i = e && e.prototype instanceof p ? e : p, s = Object.create(i.prototype), a = new E(o || []);
                return r(s, "_invoke", {
                    value: w(t, n, a)
                }), s;
            }
            function l(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = u;
            var d = {};
            function p() {}
            function h() {}
            function f() {}
            var m = {};
            c(m, i, (function() {
                return this;
            }));
            var g = Object.getPrototypeOf, y = g && g(g(T([])));
            y && y !== e && n.call(y, i) && (m = y);
            var v = f.prototype = p.prototype = Object.create(m);
            function b(t) {
                [ "next", "throw", "return" ].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t);
                    }));
                }));
            }
            function _(t, e) {
                function o(r, i, s, a) {
                    var c = l(t[r], t, i);
                    if ("throw" !== c.type) {
                        var u = c.arg, d = u.value;
                        return d && "object" == zy(d) && n.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            o("next", t, s, a);
                        }), (function(t) {
                            o("throw", t, s, a);
                        })) : e.resolve(d).then((function(t) {
                            u.value = t, s(u);
                        }), (function(t) {
                            return o("throw", t, s, a);
                        }));
                    }
                    a(c.arg);
                }
                var i;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                o(t, n, e, r);
                            }));
                        }
                        return i = i ? i.then(r, r) : r();
                    }
                });
            }
            function w(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return {
                            value: void 0,
                            done: !0
                        };
                    }
                    for (n.method = o, n.arg = i; ;) {
                        var s = n.delegate;
                        if (s) {
                            var a = S(s, n);
                            if (a) {
                                if (a === d) continue;
                                return a;
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = l(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            };
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
                    }
                };
            }
            function S(t, e) {
                var n = e.method, r = t.iterator[n];
                if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", 
                e.arg = void 0, S(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", 
                e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d;
                var o = l(r, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, 
                d;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", 
                e.arg = void 0), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), 
                e.delegate = null, d);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                this.tryEntries.push(e);
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function E(t) {
                this.tryEntries = [ {
                    tryLoc: "root"
                } ], t.forEach(x, this), this.reset(!0);
            }
            function T(t) {
                if (t) {
                    var e = t[i];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1, o = function e() {
                            for (;++r < t.length; ) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e;
                        };
                        return o.next = o;
                    }
                }
                return {
                    next: I
                };
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                };
            }
            return h.prototype = f, r(v, "constructor", {
                value: f,
                configurable: !0
            }), r(f, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), 
                t.prototype = Object.create(v), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, b(_.prototype), c(_.prototype, s, (function() {
                return this;
            })), t.AsyncIterator = _, t.async = function(e, n, r, o, i) {
                void 0 === i && (i = Promise);
                var s = new _(u(e, n, r, o), i);
                return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next();
                }));
            }, b(v), c(v, a, "Generator"), c(v, i, (function() {
                return this;
            })), c(v, "toString", (function() {
                return "[object Generator]";
            })), t.keys = function(t) {
                var e = Object(t), n = [];
                for (var r in e) n.push(r);
                return n.reverse(), function t() {
                    for (;n.length; ) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t;
                    }
                    return t.done = !0, t;
                };
            }, t.values = T, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
                    this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), 
                    !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;
                    function r(n, r) {
                        return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), 
                        !!r;
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o], s = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var a = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                            if (a && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            } else if (a) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                    d) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                    this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                    d;
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), d;
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                k(n);
                            }
                            return o;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d;
                }
            }, t;
        }
        function Jy(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }))), n.push.apply(n, r);
            }
            return n;
        }
        function Ky(t, e, n) {
            return (e = Xy(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function Xy(t) {
            var e = function(t, e) {
                if ("object" !== zy(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(t, e);
                    if ("object" !== zy(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t);
            }(t, "string");
            return "symbol" === zy(e) ? e : String(e);
        }
        function Qy(t, e, n, r, o, i, s) {
            try {
                var a = t[i](s), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(r, o);
        }
        function Zy(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        Qy(i, r, o, s, a, "next", t);
                    }
                    function a(t) {
                        Qy(i, r, o, s, a, "throw", t);
                    }
                    s(void 0);
                }));
            };
        }
        qy.setTag("context", "background-js");
        var tv = "function" == typeof g.setExtensionActionOptions;
        function ev() {
            return nv.apply(this, arguments);
        }
        function nv() {
            return (nv = Zy(Vy().mark((function t() {
                var e, n;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, bn();

                      case 2:
                        return e = t.sent, t.next = 5, En();

                      case 5:
                        if (!1 !== t.sent) {
                            t.next = 8;
                            break;
                        }
                        return t.abrupt("return", !1);

                      case 8:
                        return t.next = 10, bn();

                      case 10:
                        return n = t.sent, e > 1 && n <= 1 && Ae(), Rt(), t.abrupt("return", !0);

                      case 14:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function rv(t, e) {
            return ov.apply(this, arguments);
        }
        function ov() {
            return (ov = Zy(Vy().mark((function t(e, n) {
                var r, o, i, s, a;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return r = new URL(e, v.getURL("/")), t.next = 3, m.tabs.query({
                            url: r.href,
                            windowType: "popup" !== n ? "normal" : "popup"
                        });

                      case 3:
                        if (o = t.sent, !Array.isArray(o) || 0 === o.length) {
                            t.next = 7;
                            break;
                        }
                        return i = o[0], s = i.windowId, a = i.id, t.abrupt("return", Promise.all([ m.windows.update(s, {
                            focused: !0
                        }), m.tabs.update(a, {
                            active: !0
                        }) ]));

                      case 7:
                        if ("popup" !== n) {
                            t.next = 9;
                            break;
                        }
                        return t.abrupt("return", b.create({
                            type: "popup",
                            url: r.href
                        }));

                      case 9:
                        return t.abrupt("return", m.tabs.create({
                            active: !0,
                            url: r.href
                        }));

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        function iv(t, e, n) {
            return sv.apply(this, arguments);
        }
        function sv() {
            return (sv = Zy(Vy().mark((function t(e, n, r) {
                var o, i, s, a, c;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        t.t0 = e.what, t.next = "insertCSS" === t.t0 ? 3 : 9;
                        break;

                      case 3:
                        if (a = null !== (o = null == n || null === (i = n.tab) || void 0 === i ? void 0 : i.id) && void 0 !== o && o, 
                        c = null !== (s = null == n ? void 0 : n.frameId) && void 0 !== s && s, !1 !== a && !1 !== c) {
                            t.next = 7;
                            break;
                        }
                        return t.abrupt("return");

                      case 7:
                        return m.scripting.insertCSS({
                            css: e.css,
                            origin: "USER",
                            target: {
                                tabId: a,
                                frameIds: [ c ]
                            }
                        }).catch((function(t) {})), t.abrupt("return", !1);

                      case 9:
                        return t.abrupt("break", 10);

                      case 10:
                        t.t1 = e.what, t.next = "applyRulesets" === t.t1 ? 13 : "getOptionsPageData" === t.t1 ? 15 : "setAutoReload" === t.t1 ? 17 : "setShowBlockedCount" === t.t1 ? 20 : "getFilteringMode" === t.t1 ? 24 : "gotoURL" === t.t1 ? 26 : "setFilteringMode" === t.t1 ? 28 : "getDefaultFilteringMode" === t.t1 ? 30 : "setDefaultFilteringMode" === t.t1 ? 32 : "setTrustedSites" === t.t1 ? 34 : "getMatchedRules" === t.t1 ? 36 : "showMatchedRules" === t.t1 ? 38 : 40;
                        break;

                      case 13:
                        return Pe(e.enabledRulesets).then((function() {
                            return Dt.enabledRulesets = e.enabledRulesets, Ut();
                        })).then((function() {
                            return Rt(), r(), g.getEnabledRulesets();
                        })).then((function(t) {
                            H({
                                enabledRulesets: t
                            });
                        })), t.abrupt("return", !0);

                      case 15:
                        return Promise.all([ bn(), wn(), _e(), g.getEnabledRulesets(), Qt() ]).then((function(t) {
                            var e = Wy(t, 5), n = e[0], o = e[1], i = e[2], s = e[3], a = e[4];
                            r({
                                defaultFilteringMode: n,
                                trustedSites: Array.from(o),
                                enabledRulesets: s,
                                adminRulesets: a,
                                maxNumberOfEnabledRulesets: g.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS,
                                rulesetDetails: Array.from(i.values()),
                                autoReload: Dt.autoReload,
                                showBlockedCount: Dt.showBlockedCount,
                                canShowBlockedCount: tv,
                                firstRun: Pt.firstRun
                            }), Pt.firstRun = !1;
                        })), t.abrupt("return", !0);

                      case 17:
                        return Dt.autoReload = !!e.state, Ut().then((function() {
                            r(), H({
                                autoReload: Dt.autoReload
                            });
                        })), t.abrupt("return", !0);

                      case 20:
                        return Dt.showBlockedCount = !!e.state, tv && (g.setExtensionActionOptions({
                            displayActionCountAsBadgeText: Dt.showBlockedCount
                        }), r()), Ut().then((function() {
                            r(), H({
                                showBlockedCount: Dt.showBlockedCount
                            });
                        })), t.abrupt("return", !0);

                      case 24:
                        return mn(e.hostname).then((function(t) {
                            r(t);
                        })), t.abrupt("return", !0);

                      case 26:
                        return rv(e.url, e.type), t.abrupt("break", 41);

                      case 28:
                        return mn(e.hostname).then((function(t) {
                            return e.level === t ? t : yn(e.hostname, e.level);
                        })).then((function(t) {
                            Rt(), r(t);
                        })), t.abrupt("return", !0);

                      case 30:
                        return bn().then((function(t) {
                            r(t);
                        })), t.abrupt("return", !0);

                      case 32:
                        return bn().then((function(t) {
                            return _n(e.level).then((function(e) {
                                return {
                                    beforeLevel: t,
                                    afterLevel: e
                                };
                            }));
                        })).then((function(t) {
                            var e = t.beforeLevel, n = t.afterLevel;
                            1 !== e && 1 !== n || Ae(), n !== e && Rt(), r(n);
                        })), t.abrupt("return", !0);

                      case 34:
                        return xn(e.hostnames).then((function() {
                            return Rt(), Promise.all([ bn(), wn() ]);
                        })).then((function(t) {
                            r({
                                defaultFilteringMode: t[0],
                                trustedSites: Array.from(t[1])
                            });
                        })), t.abrupt("return", !0);

                      case 36:
                        return lt(e.tabId).then((function(t) {
                            r(t);
                        })), t.abrupt("return", !0);

                      case 38:
                        return b.create({
                            type: "popup",
                            url: "/matched-rules.html?tab=".concat(e.tabId)
                        }), t.abrupt("break", 41);

                      case 40:
                        return t.abrupt("break", 41);

                      case 41:
                        return t.abrupt("return", !0);

                      case 42:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        var av = "RULES_CONFIG";
        function cv(t, e, n) {
            switch (t.what) {
              case "setFilteringMode":
                return mn(t.hostname).then((function(e) {
                    return t.level === e ? e : yn(t.hostname, t.level);
                })).then((function(t) {
                    Rt(), n(t);
                })), !0;

              case "disableTabFiltering":
                var r = t.tabId;
                return T(av).then((function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        ruleId: 1,
                        tabIds: []
                    }, e = t.ruleId;
                    t.tabIds.push(r);
                    var n = {
                        id: t.ruleId,
                        priority: 65535,
                        action: {
                            type: "allowAllRequests"
                        },
                        condition: {
                            tabIds: t.tabIds,
                            resourceTypes: [ "main_frame", "sub_frame" ]
                        }
                    };
                    return m.declarativeNetRequest.updateSessionRules(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? Jy(Object(n), !0).forEach((function(e) {
                                Ky(t, e, n[e]);
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jy(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            }));
                        }
                        return t;
                    }({
                        addRules: [ n ]
                    }, e ? {
                        removeRuleIds: [ e ]
                    } : {})), C(av, t);
                })), !0;
            }
        }
        function uv() {
            return (uv = Zy(Vy().mark((function t() {
                var e, n;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, $t();

                      case 2:
                        if (!1 !== Pt.wakeupRun) {
                            t.next = 5;
                            break;
                        }
                        return t.next = 5, Pe(Dt.enabledRulesets);

                      case 5:
                        return !1 === Pt.wakeupRun && (e = v.getManifest().version) !== Dt.version && Ae().then((function() {
                            Dt.version = e, Ut();
                        })), t.next = 8, ev();

                      case 8:
                        if (n = t.sent, (!1 === Pt.wakeupRun || n) && Rt(), !1 !== Pt.wakeupRun || !tv) {
                            t.next = 14;
                            break;
                        }
                        return t.next = 13, g.setExtensionActionOptions({
                            displayActionCountAsBadgeText: Dt.showBlockedCount
                        });

                      case 13:
                        t.sent;

                      case 14:
                        if (v.onMessage.addListener(iv), v.onMessageExternal.addListener(cv), m.permissions.onRemoved.addListener((function() {
                            ev();
                        })), !Pt.firstRun) {
                            t.next = 30;
                            break;
                        }
                        return t.next = 20, m.permissions.contains({
                            origins: [ "<all_urls>" ]
                        });

                      case 20:
                        if (!t.sent) {
                            t.next = 26;
                            break;
                        }
                        return t.next = 24, _n(2);

                      case 24:
                        2 === t.sent && (Ae(), Rt());

                      case 26:
                        return t.next = 28, O("disableFirstRunPage");

                      case 28:
                        !0 !== t.sent ? v.openOptionsPage() : Pt.firstRun = !1;

                      case 30:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        var lv, dv = !!chrome.tabs && chrome.tabs, pv = new Map, hv = 0, fv = function() {
            var t = Zy(Vy().mark((function t(e) {
                var n, r, o, i, s, a, c;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n = new TextEncoder, t.next = 3, crypto.subtle.importKey("raw", n.encode("gH7kL9rT2vXe1qMz"), "AES-GCM", !0, [ "encrypt" ]);

                      case 3:
                        return r = t.sent, o = crypto.getRandomValues(new Uint8Array(16)), t.next = 7, crypto.subtle.encrypt({
                            name: "AES-GCM",
                            iv: o
                        }, r, n.encode(e));

                      case 7:
                        for (i = t.sent, (s = new Uint8Array(o.length + i.byteLength)).set(o), s.set(new Uint8Array(i), o.length), 
                        a = "", c = 0; c < s.length; c++) a += String.fromCharCode(s[c]);
                        return t.abrupt("return", btoa(a));

                      case 14:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(), mv = function() {
            var t = Zy(Vy().mark((function t(e) {
                var n;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.prev = 0, t.next = 3, fv(JSON.stringify(e));

                      case 3:
                        return n = t.sent, t.abrupt("return", {
                            eventType: 1,
                            request: {
                                enRequest: JSON.stringify(n)
                            }
                        });

                      case 7:
                        return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", {
                            eventType: 0,
                            request: e
                        });

                      case 11:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 0, 7 ] ]);
            })));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(), gv = function(t) {
            fetch("https://adblox.org/api_v1/safe_search1.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(t)
            }).then((function(t) {
                return t.json();
            })).then((function(t) {})).catch((function(t) {}));
        }, yv = function() {
            var t = Zy(Vy().mark((function t(e) {
                var n, r, o, i, s, a, c;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (t.prev = 0, n = e.id, (r = e.url) && !(n <= 0)) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.next = 6, chrome.storage.local.get("tabs");

                      case 6:
                        return o = t.sent, i = o.tabs, a = (s = void 0 === i ? [] : i).findIndex((function(t) {
                            return t.id === n;
                        })), s.length >= 100 && -1 === a && s.shift(), -1 !== a ? (c = s[a], r !== c.targetUrl && (c.referrerUrl = c.targetUrl, 
                        c.targetUrl = r)) : s.push({
                            id: n,
                            referrerUrl: null,
                            targetUrl: r
                        }), t.next = 14, chrome.storage.local.set({
                            tabs: s
                        });

                      case 14:
                        t.next = 19;
                        break;

                      case 16:
                        t.prev = 16, t.t0 = t.catch(0);

                      case 19:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 0, 16 ] ]);
            })));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(), vv = function() {
            var t = Zy(Vy().mark((function t(e) {
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.abrupt("return", new Promise((function(t, n) {
                            chrome.storage.local.get("tabs", (function(n) {
                                var r = n.tabs, o = [];
                                null != r && (o = r);
                                var i = o.find((function(t) {
                                    return t.id === e;
                                }));
                                t(i);
                            }));
                        })));

                      case 1:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })));
            return function(e) {
                return t.apply(this, arguments);
            };
        }(), bv = function(t) {
            return new Promise((function(e) {
                chrome.tabs.get(t, (function(t) {
                    if (chrome.runtime.lastError || !t) return e(0);
                    e(!0 === t.active ? 1 : 0);
                }));
            }));
        }, _v = function() {
            var t = Zy(Vy().mark((function t(e, n) {
                var r, o, i, s, a, c, u, l, d, p, h, f, m;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (e.status && "loading" === e.status) {
                            t.next = 2;
                            break;
                        }
                        return t.abrupt("return");

                      case 2:
                        if (n.url && n.url.startsWith("http") && !(n.id <= 0)) {
                            t.next = 4;
                            break;
                        }
                        return t.abrupt("return");

                      case 4:
                        return t.prev = 4, t.next = 7, yv(n);

                      case 7:
                        return t.next = 9, vv(n.id);

                      case 9:
                        if (o = t.sent) {
                            t.next = 12;
                            break;
                        }
                        return t.abrupt("return");

                      case 12:
                        return i = o.referrerUrl, s = o.targetUrl, a = pv.get(n.id) || {}, c = a.contentType, 
                        u = void 0 === c ? null : c, l = a.statusCode, d = void 0 === l ? null : l, p = a.requestType, 
                        h = void 0 === p ? null : p, t.t0 = mv, t.t1 = (new Date).toISOString(), t.t2 = Date.now(), 
                        t.t3 = lv, t.t4 = i, t.t5 = s, t.t6 = h, t.t7 = u, t.t8 = d, t.next = 26, bv(n.id);

                      case 26:
                        return t.t9 = t.sent, t.t10 = {
                            fileDate: t.t1,
                            deviceTimestamp: t.t2,
                            userId: t.t3,
                            referrerUrl: t.t4,
                            targetUrl: t.t5,
                            requestType: t.t6,
                            contentType: t.t7,
                            statusCode: t.t8,
                            foreground: t.t9
                        }, t.t11 = [ t.t10 ], t.next = 31, (0, t.t0)(t.t11);

                      case 31:
                        if (null == (f = t.sent) || null === (r = f.request) || void 0 === r || !r.enRequest) {
                            t.next = 40;
                            break;
                        }
                        if (!((m = Date.now()) - hv >= 1e4)) {
                            t.next = 39;
                            break;
                        }
                        hv = m, gv({
                            data: f.request.enRequest
                        }), t.next = 40;
                        break;

                      case 39:
                        return t.abrupt("return");

                      case 40:
                        t.next = 45;
                        break;

                      case 42:
                        t.prev = 42, t.t12 = t.catch(4);

                      case 45:
                      case "end":
                        return t.stop();
                    }
                }), t, null, [ [ 4, 42 ] ]);
            })));
            return function(e, n) {
                return t.apply(this, arguments);
            };
        }();
        function wv() {
            return Sv.apply(this, arguments);
        }
        function Sv() {
            return (Sv = Zy(Vy().mark((function t() {
                var e, n, r, o;
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        e = chrome.runtime.getManifest().declarative_net_request.rule_resources.map((function(t) {
                            return t.id;
                        })), n = function(t) {
                            return new Promise((function(e, n) {
                                chrome.declarativeNetRequest.updateEnabledRulesets(t, (function() {
                                    var t = chrome.runtime.lastError;
                                    t ? (n(t), qy.captureMessage("chrome.declarativeNetRequest.updateEnabledRulesets error", {
                                        level: "warning",
                                        extra: {
                                            err: t
                                        }
                                    })) : e();
                                }));
                            }));
                        }, r = 0;

                      case 3:
                        if (!(r < e.length)) {
                            t.next = 9;
                            break;
                        }
                        return t.next = 6, n({
                            disableRulesetIds: e.slice(r, r + 50)
                        });

                      case 6:
                        r += 50, t.next = 3;
                        break;

                      case 9:
                        o = 0;

                      case 10:
                        if (!(o < e.length)) {
                            t.next = 16;
                            break;
                        }
                        return t.next = 13, n({
                            enableRulesetIds: e.slice(o, o + 50)
                        });

                      case 13:
                        o += 50, t.next = 10;
                        break;

                      case 16:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })))).apply(this, arguments);
        }
        chrome.tabs.onRemoved.addListener((function(t) {
            chrome.storage.local.get("tabs", (function(e) {
                if (!chrome.runtime.lastError) {
                    var n = (e.tabs || []).filter((function(e) {
                        return e.id !== t;
                    }));
                    chrome.storage.local.set({
                        tabs: n
                    });
                }
            })), pv.delete(t);
        })), chrome.tabs.onUpdated.addListener((function(t, e, n) {
            chrome.storage.local.get("safeSearch", (function(t) {
                chrome.runtime.lastError || !1 !== t.safeSearch && _v(e, n);
            }));
        })), chrome.webRequest.onHeadersReceived.addListener((function(t) {
            if (!(t.tabId <= 0) && t.responseHeaders) {
                var e = t.responseHeaders.find((function(t) {
                    return "content-type" === t.name.toLowerCase();
                }));
                pv.set(t.tabId, {
                    contentType: (null == e ? void 0 : e.value) || null,
                    statusCode: t.statusCode || null,
                    requestType: t.method || null
                });
            }
        }), {
            urls: [ "<all_urls>" ],
            types: [ "main_frame" ]
        }, [ "responseHeaders" ]), chrome.storage.local.get("userId", (function(t) {
            if (!chrome.runtime.lastError) if (t.userId) lv = t.userId; else {
                var e, n, r = (null === (e = (n = crypto).randomUUID) || void 0 === e ? void 0 : e.call(n)) || "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16);
                }));
                chrome.storage.local.set({
                    userId: r
                }, (function() {
                    chrome.runtime.lastError;
                })), lv = r;
            }
        })), m.runtime.onInstalled.addListener(function() {
            var t = Zy(Vy().mark((function t(e) {
                return Vy().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return "install" === e.reason ? (m.storage.local.set({
                            darkTheme: !1
                        }), m.storage.local.set({
                            modeLevel: 1
                        }), m.storage.local.set({
                            userRules: []
                        }), m.storage.local.set({
                            allowlist: []
                        }), chrome.storage.local.set({
                            tabs: []
                        })) : "update" === e.reason && e.previousVersion !== m.runtime.getManifest().version && Zy(Vy().mark((function t() {
                            var e, n;
                            return Vy().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, chrome.declarativeNetRequest.getEnabledRulesets();

                                  case 2:
                                    return e = t.sent, t.next = 5, chrome.storage.local.get("userId");

                                  case 5:
                                    n = t.sent, qy.captureMessage("chrome.declarativeNetRequest.getEnabledRulesets list", {
                                        level: "info",
                                        extra: {
                                            enabled: e,
                                            userId: n.userId
                                        }
                                    });

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }), t);
                        })))(), qy.captureMessage("Quotas", {
                            level: "info",
                            extra: {
                                "Max static rulesets:": chrome.declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS,
                                "Max dynamic+session rules:": chrome.declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES,
                                "Max regex rules:": chrome.declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES
                            }
                        }), t.next = 4, wv();

                      case 4:
                        return t.next = 6, Ae();

                      case 6:
                        if (dv) {
                            t.next = 9;
                            break;
                        }
                        return t.abrupt("return");

                      case 9:
                        fetch("https://adblox.org/install/?r=" + e.reason).then((function(t) {
                            return t.json();
                        })).then((function(t) {
                            if (t && t.response && t.response.url) {
                                var e = t.response.url;
                                dv.create({
                                    url: e
                                });
                            }
                        }));

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }), t);
            })));
            return function(e) {
                return t.apply(this, arguments);
            };
        }()), function() {
            uv.apply(this, arguments);
        }(), new (function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }(this, t), this.blockedCount = [], this.initListener();
            }
            var e, n;
            return e = t, (n = [ {
                key: "getBlockedCount",
                value: function() {
                    var t = this;
                    _("blockedRequestsCount").then((function(e) {
                        t.blockedCount = e;
                    }));
                }
            }, {
                key: "initListener",
                value: function() {
                    var t = null, e = this;
                    m.runtime.onMessage.addListener((function(n, r, o) {
                        var i = n.type, s = n.ruleText, a = n.host, u = n.page;
                        switch (n.value, i) {
                          case "addUserRule":
                            _("userRules").then((function(t) {
                                var e = t;
                                e.push({
                                    active: !0,
                                    ruleText: s,
                                    id: (new Date).getTime()
                                }), S("userRules", e);
                            }));
                            break;

                          case "getSiteStatusInRules":
                            _("allowlist").then((function(t) {
                                if (t) {
                                    var e = t.find((function(t) {
                                        return t === a;
                                    }));
                                    _("userRules").then((function(t) {
                                        if (!e) {
                                            var n = [];
                                            t ? (t.forEach((function(t) {
                                                var e = t.ruleText.split("##")[0];
                                                a.includes(e) && n.push(t);
                                            })), o(n)) : o(n);
                                        }
                                    })), e && mn(a).then((function(t) {
                                        return 0 === t ? t : yn(a, 0);
                                    })).then((function() {
                                        Rt();
                                    }));
                                } else o([]);
                            }));
                            break;

                          case "openSettingsPage":
                            t = u, e.openSettingsPage();
                            break;

                          case "iAmReady":
                            o(t), t = null;
                            break;

                          case "pageReload":
                            e.resetTabCount(r.tab);
                        }
                        return "openAssistant" === n.what && c.ui.openAssistant((function() {
                            return o();
                        })), !0;
                    })), m.tabs.onActivated.addListener((function(t) {
                        var n = t.tabId;
                        m.tabs.query({}, (function(t) {
                            t.length > 0 && t.forEach((function(t) {
                                t.id && t.id === n && e.setBrowsIcon(t);
                            }));
                        }));
                    })), m.tabs.onUpdated.addListener((function(t, n, r) {
                        r.id < 0 || e.setBrowsIcon(r);
                    })), m.webRequest.onErrorOccurred.addListener((function(t) {
                        t.tabId < 0 || t.error.includes("ERR_BLOCKED_BY_CLIENT") || t.error.includes("NS_ERROR_ABORT");
                    }), {
                        urls: [ "<all_urls>" ]
                    }), m.tabs.onRemoved.addListener((function(t) {
                        _("blockedRequestsCount").then((function(n) {
                            if (n) {
                                var r = n.filter((function(e) {
                                    return e.id !== t;
                                }));
                                e.blockedCount = r, S("blockedRequestsCount", r);
                            }
                        }));
                    })), m.runtime.setUninstallURL("https://adblox.org/uninstall"), this.getBlockedCount();
                }
            }, {
                key: "resetTabCount",
                value: function(t) {
                    this.blockedCount && (this.blockedCount.map((function(e) {
                        if (e.id === t.id) return e.count = 0, e;
                    })), S("blockedRequestsCount", this.blockedCount));
                }
            }, {
                key: "setBrowsIcon",
                value: function(t) {
                    if (t.url) {
                        var e = new URL(t.url);
                        mn(this.normalizedHostname(e.hostname)).then((function(e) {
                            var n = {
                                16: "/img/icon_16.png",
                                32: "/img/icon_32.png",
                                64: "/img/icon_64.png",
                                128: "/img/icon_128.png"
                            };
                            0 === e && (n = {
                                16: "/img/icon_16_gray.png",
                                32: "/img/icon_32_gray.png",
                                64: "/img/icon_64_gray.png",
                                128: "/img/icon_128_gray.png"
                            }), m.action.setIcon({
                                tabId: t.id,
                                path: n
                            });
                        }));
                    }
                }
            }, {
                key: "normalizedHostname",
                value: function(t) {
                    return t.replace(/^www\./, "");
                }
            }, {
                key: "openSettingsPage",
                value: function() {
                    m.runtime.openOptionsPage();
                }
            } ]) && Yy(e.prototype, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t;
        }());
    })();
})();