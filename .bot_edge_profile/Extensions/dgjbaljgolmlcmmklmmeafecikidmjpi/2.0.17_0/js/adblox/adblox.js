import { getActiveTab, browser } from "../services.js";

function adguard() {
    function e() {
        return !1;
    }
    return {
        lazyGet: function(e, t, a) {
            var r = "_" + t;
            if (r in e) return e[r];
            var n = a.apply(e);
            return e[r] = n, n;
        },
        lazyGetClear: function(e, t) {
            delete e["_" + t];
        },
        hitStats: {
            addRuleHit: e,
            addDomainView: e,
            cleanup: e
        },
        filteringLog: {
            addHttpRequestEvent: e,
            clearEventsByTabId: e,
            isOpen: e
        },
        safebrowsing: {
            checkSafebrowsingFilter: e
        },
        integration: {
            isSupported: e,
            isEnabled: e,
            isIntegrationRequest: e,
            shouldOverrideReferrer: e
        }
    };
}

adguard.userrules = {
    getAntiBannerService: function() {
        return adguard.antiBannerService;
    },
    userRules: [],
    getRules: function() {
        return userRules;
    },
    setRules: function(e) {
        userRules = e;
    },
    addRules: function(e) {
        for (var t = getAntiBannerService().addFilterRules(adguard.utils.filters.USER_FILTER_ID, e), a = 0; a < t.length; a++) userRules.push(t[a].ruleText);
        return t;
    },
    clearRules: function() {
        userRules = [], getAntiBannerService().clearFilterRules(adguard.utils.filters.USER_FILTER_ID);
    },
    removeRule: function(e) {
        adguard.utils.collections.removeAll(userRules, e), getAntiBannerService().removeFilterRule(adguard.utils.filters.USER_FILTER_ID, e);
    },
    unWhiteListFrame: function(e) {
        e.frameRule && (e.frameRule.filterId === adguard.utils.filters.WHITE_LIST_FILTER_ID ? adguard.whitelist.unWhiteListUrl(e.url) : removeRule(e.frameRule.ruleText));
    }
}, adguard.ui = {
    getFiltersUpdateResultMessage: function(e, t) {
        var a = adguard.i18n.getMessage("options_popup_update_title"), r = [];
        if (e) if (0 === t.length) r.push(adguard.i18n.getMessage("options_popup_update_not_found")); else {
            t.sort((function(e, t) {
                return e.displayNumber - t.displayNumber;
            }));
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                r.push(adguard.i18n.getMessage("options_popup_update_updated", [ i.name, i.version ]).replace("$1", i.name).replace("$2", i.version));
            }
        } else r.push(adguard.i18n.getMessage("options_popup_update_error"));
        return {
            title: a,
            text: r
        };
    },
    getFiltersEnabledResultMessage: function(e) {
        var t = adguard.i18n.getMessage("alert_popup_filter_enabled_title"), a = [];
        e.sort((function(e, t) {
            return e.displayNumber - t.displayNumber;
        }));
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            a.push(adguard.i18n.getMessage("alert_popup_filter_enabled_text", [ n.name ]).replace("$1", n.name));
        }
        return {
            title: t,
            text: a
        };
    },
    whiteListTab: function(e) {
        var t = adguard.frames.getFrameInfo(e);
        if (adguard.whitelist.whiteListUrl(t.url), adguard.frames.isTabAdguardDetected(e)) {
            var a = adguard.utils.url.getHost(e.url);
            adguard.integration.addRuleToApp("@@//" + a + "^$document", (function() {
                adguard.tabs.sendMessage(e.tabId, {
                    type: "no-cache-reload"
                });
            }));
        } else updateTabIconAndContextMenu(e, !0);
    },
    unWhiteListTab: function(e) {
        var t = adguard.frames.getFrameInfo(e);
        if (adguard.userrules.unWhiteListFrame(t), adguard.frames.isTabAdguardDetected(e)) {
            var a = adguard.frames.getTabAdguardUserWhiteListRule(e);
            a && adguard.integration.removeRuleFromApp(a.ruleText, (function() {
                adguard.tabs.sendMessage(e.tabId, {
                    type: "no-cache-reload"
                });
            }));
        } else updateTabIconAndContextMenu(e, !0);
    },
    changeApplicationFilteringDisabled: function(e) {
        adguard.settings.changeFilteringDisabled(e), adguard.tabs.getActive((function(e) {
            updateTabIconAndContextMenu(e, !0);
        }));
    },
    checkFiltersUpdates: function() {
        adguard.filters.checkFiltersUpdates((function(e) {
            adguard.listeners.notifyListeners(adguard.listeners.UPDATE_FILTERS_SHOW_POPUP, !0, e);
        }), (function() {
            adguard.listeners.notifyListeners(adguard.listeners.UPDATE_FILTERS_SHOW_POPUP, !1);
        }));
    },
    initAssistant: function(e) {
        var t = {
            addRuleCallbackName: "addUserRule",
            selectElement: e
        };
        getActiveTab().then((e => {
            browser.tabs.sendMessage(e.id, {
                type: "initAssistant",
                options: t
            });
        }));
    },
    openAssistant: function(e) {
        getActiveTab().then((t => {
            browser.scripting.executeScript({
                target: {
                    tabId: t.id
                },
                files: [ "./js/adblox/assistant.js" ]
            }).then((() => {
                adguard.ui.initAssistant(), e();
            }));
        }));
    }
};

export default adguard;