(() => {
    var e = [];
    function n() {
        e.forEach((function(e) {
            var n = e.active, t = e.ruleText;
            if (!0 === n) {
                var o = t.split("##")[1];
                $(o).css("display", "none");
            }
        }));
    }
    window.onbeforeunload = function() {
        var e;
        null !== (e = chrome) && void 0 !== e && null !== (e = e.runtime) && void 0 !== e && e.id && chrome.runtime.sendMessage({
            type: "pageReload"
        });
    }, chrome.runtime.sendMessage({
        type: "getSiteStatusInRules",
        host: window.location.host
    }, (function(t) {
        var o;
        t && (Array.isArray(t) && (e = t), (o = new MutationObserver(n)).observe(window.document, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }), setTimeout((function() {
            o.disconnect();
        }), 1e4));
    }));
})();