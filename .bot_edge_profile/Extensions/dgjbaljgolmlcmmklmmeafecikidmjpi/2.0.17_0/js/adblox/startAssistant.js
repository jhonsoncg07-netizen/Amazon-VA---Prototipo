!function() {
    var e, t = null;
    document.addEventListener("mousedown", (function(e) {
        2 === e.button && (t = e.target);
    })), chrome.runtime.onMessage.addListener((function(n) {
        if ("initAssistant" === n.type) {
            var s = n.options, a = s.addRuleCallbackName, i = null;
            t && s.selectElement && (i = t), e ? e.close() : e = adguardAssistant(), e.start(i, (function(e) {
                chrome.runtime.sendMessage({
                    type: a,
                    ruleText: e
                });
            }));
        }
    }));
}();