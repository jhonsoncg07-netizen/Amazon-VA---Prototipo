/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5558:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/@vue/compat/dist/vue.esm-bundler.js
var vue_esm_bundler = __webpack_require__(9347);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/settings/components/app.vue?vue&type=template&id=a128e82a

var _hoisted_1 = {
  key: 0,
  "class": "card"
};
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = {
  "class": "card__title"
};
var _hoisted_4 = {
  "class": "checkbox__description"
};
var _hoisted_5 = {
  "class": "muted-merchant"
};
var _hoisted_6 = {
  key: 0,
  "class": "muted-merchant__title"
};
var _hoisted_7 = {
  "class": "elements__element"
};
var _hoisted_8 = ["onClick"];
var _hoisted_9 = {
  "class": "card__footer"
};
var _hoisted_10 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */.Lk)("hr", null, null, -1);
var _hoisted_11 = ["href"];
var _hoisted_12 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Checkbox = (0,vue_esm_bundler/* resolveComponent */.g2)("Checkbox");
  return $data.dataReady ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", null, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "card__logo",
    "aria-label": _ctx.$i18next.t('general.logo_alt')
  }, null, 8, _hoisted_2), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('settings.components.app.setting_title')), 1), (0,vue_esm_bundler/* createVNode */.bF)(_component_Checkbox, {
    text: this.$i18next.t('settings.components.app.new_checkbox_text'),
    name: 'isAnalyticsEnabled',
    checked: $data.settings.isAnalyticsEnabled,
    onUpdate: $options.update
  }, null, 8, ["text", "checked", "onUpdate"]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, (0,vue_esm_bundler/* toDisplayString */.v_)(this.$i18next.t('settings.components.app.description_text')), 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [$data.mutedMerchants.length > 0 ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", _hoisted_6, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('settings.components.app.muted_merchants')), 1)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true), ((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($data.mutedMerchants, function (el, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
      "class": "elements",
      key: index
    }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_7, (0,vue_esm_bundler/* toDisplayString */.v_)(el.name), 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("span", {
      "class": "elements__remove",
      onClick: function onClick($event) {
        return $options.remove(index);
      }
    }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('settings.components.app.muted_merchants_remove')), 9, _hoisted_8)]);
  }), 128))])]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_9, [_hoisted_10, (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "footer-links",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.getAllClicks && $options.getAllClicks.apply($options, arguments);
    })
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("a", {
    href: $options.rate,
    target: "_blank",
    "class": "rate"
  }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('settings.components.app.rate')), 9, _hoisted_11), (0,vue_esm_bundler/* createElementVNode */.Lk)("span", {
    innerHTML: $options.terms
  }, null, 8, _hoisted_12)])])])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true);
}
;// CONCATENATED MODULE: ./source/settings/components/app.vue?vue&type=template&id=a128e82a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(436);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/dompurify/dist/purify.es.mjs
var purify_es = __webpack_require__(9418);
;// CONCATENATED MODULE: ./source/bg/core/utils.js



var getStorageData = function getStorageData(keys) {
  var promise = new Promise(function (resolve, reject) {
    chrome.storage.local.get(keys, function (items) {
      if (chrome.runtime.lastError) {
        reject(new Error("Error in storage.get: ".concat(chrome.runtime.lastError)));
      } else {
        resolve(items);
      }
    });
  });
  return promise;
};
var setStorageData = function setStorageData(items) {
  chrome.storage.local.set(items);
};
var sendContentMessage = function sendContentMessage(params) {
  var promise = new Promise(function (resolve) {
    chrome.runtime.sendMessage(params, function (response) {
      resolve(response);
    });
  });
  return promise;
};
var sendBackgroundMessage = function sendBackgroundMessage(tabId, params) {
  var promise = new Promise(function (resolve) {
    chrome.tabs.sendMessage(tabId, params, function (response) {
      resolve(response);
    });
  });
  return promise;
};
var sendBackgroundMessageWithRetries = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(tabId, params) {
    var retries,
      interval,
      merchantName,
      callback,
      response,
      retriesLeft,
      _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          retries = _args.length > 2 && _args[2] !== undefined ? _args[2] : 3;
          interval = _args.length > 3 && _args[3] !== undefined ? _args[3] : 100;
          merchantName = _args.length > 4 && _args[4] !== undefined ? _args[4] : '';
          callback = _args.length > 5 && _args[5] !== undefined ? _args[5] : function () {};
          try {
            callback({
              ec: 'Debug background message retry',
              ea: 'start',
              el: merchantName,
              retriesLeft: retries
            });
            // eslint-disable-next-line no-empty
          } catch (error) {}
          _context.next = 7;
          return sendBackgroundMessage(tabId, params);
        case 7:
          response = _context.sent;
          retriesLeft = retries;
        case 9:
          if (!(!response && retriesLeft > 0)) {
            _context.next = 19;
            break;
          }
          _context.next = 12;
          return new Promise(function (resolve) {
            return setTimeout(resolve, interval);
          });
        case 12:
          try {
            callback({
              ec: 'Debug background message retry',
              ea: 'again',
              el: merchantName,
              retriesLeft: retriesLeft
            });
            // eslint-disable-next-line no-empty
          } catch (error) {}
          // eslint-disable-next-line no-await-in-loop
          _context.next = 15;
          return sendBackgroundMessage(tabId, params);
        case 15:
          response = _context.sent;
          retriesLeft -= 1;
          _context.next = 9;
          break;
        case 19:
          try {
            callback({
              ec: 'Debug background message retry',
              ea: response ? 'success' : false,
              el: merchantName,
              retriesLeft: retriesLeft
            });
            // eslint-disable-next-line no-empty
          } catch (error) {}
          return _context.abrupt("return", response);
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendBackgroundMessageWithRetries(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
var getActiveTab = function getActiveTab() {
  var promise = new Promise(function (resolve) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        tab = _ref3[0];
      return resolve(tab);
    });
  });
  return promise;
};
var getAllTabs = function getAllTabs() {
  var promise = new Promise(function (resolve) {
    return chrome.tabs.query({}, function (tabs) {
      return resolve(tabs);
    });
  });
  return promise;
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/settings/components/checkbox.vue?vue&type=template&id=37e7382e


var checkboxvue_type_template_id_37e7382e_hoisted_1 = {
  "class": "checkbox"
};
var checkboxvue_type_template_id_37e7382e_hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
  "class": "checkbox__mark"
}, null, -1);
var checkboxvue_type_template_id_37e7382e_hoisted_3 = ["innerHTML"];
function checkboxvue_type_template_id_37e7382e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("label", checkboxvue_type_template_id_37e7382e_hoisted_1, [(0,vue_esm_bundler/* withDirectives */.bo)((0,vue_esm_bundler/* createElementVNode */.Lk)("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.isChecked = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update', (0,defineProperty/* default */.A)({}, $props.name, $data.isChecked));
    })
  }, null, 544), [[vue_esm_bundler/* vModelCheckbox */.lH, $data.isChecked]]), checkboxvue_type_template_id_37e7382e_hoisted_2, (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    innerHTML: $options.sanitizedText
  }, null, 8, checkboxvue_type_template_id_37e7382e_hoisted_3)]);
}
;// CONCATENATED MODULE: ./source/settings/components/checkbox.vue?vue&type=template&id=37e7382e

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/settings/components/checkbox.vue?vue&type=script&lang=js

/* harmony default export */ const checkboxvue_type_script_lang_js = ({
  props: {
    text: String,
    name: String,
    checked: Boolean,
    action: Function
  },
  data: function data() {
    return {
      isChecked: this.checked
    };
  },
  computed: {
    sanitizedText: function sanitizedText() {
      return purify_es/* default */.A.sanitize(this.text);
    }
  },
  methods: {
    setAction: function setAction() {
      var _this = this;
      var actionButton = this.$el.querySelector('a');
      if (actionButton && this.action) {
        this.$on('action', this.action);
        actionButton.addEventListener('click', function (e) {
          e.preventDefault();
          _this.$emit('action');
        });
      }
    }
  },
  mounted: function mounted() {
    this.setAction();
  }
});
;// CONCATENATED MODULE: ./source/settings/components/checkbox.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/settings/components/checkbox.vue?vue&type=style&index=0&id=37e7382e&lang=less
var checkboxvue_type_style_index_0_id_37e7382e_lang_less = __webpack_require__(265);
;// CONCATENATED MODULE: ./source/settings/components/checkbox.vue?vue&type=style&index=0&id=37e7382e&lang=less

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(6262);
;// CONCATENATED MODULE: ./source/settings/components/checkbox.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(checkboxvue_type_script_lang_js, [['render',checkboxvue_type_template_id_37e7382e_render]])

/* harmony default export */ const components_checkbox = (__exports__);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/rating.vue?vue&type=template&id=1a60eb82&scoped=true

var _withScopeId = function _withScopeId(n) {
  return _pushScopeId("data-v-1a60eb82"), n = n(), _popScopeId(), n;
};
var ratingvue_type_template_id_1a60eb82_scoped_true_hoisted_1 = {
  "class": "rating"
};
var ratingvue_type_template_id_1a60eb82_scoped_true_hoisted_2 = {
  "class": "rating__title"
};
var ratingvue_type_template_id_1a60eb82_scoped_true_hoisted_3 = {
  "class": "rating__stars"
};
function ratingvue_type_template_id_1a60eb82_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", ratingvue_type_template_id_1a60eb82_scoped_true_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", ratingvue_type_template_id_1a60eb82_scoped_true_hoisted_2, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('shared_components.rating.title')), 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", ratingvue_type_template_id_1a60eb82_scoped_true_hoisted_3, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($data.maxRating, function (rating) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
      "class": "rating__star",
      key: rating,
      onClick: _cache[0] || (_cache[0] = function ($event) {
        return $options.rate();
      })
    });
  }), 128))])]);
}
;// CONCATENATED MODULE: ./source/shared_components/rating.vue?vue&type=template&id=1a60eb82&scoped=true

;// CONCATENATED MODULE: ./source/constants/general.js
/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-cycle

var IS_TEST_VERSION = false;
var REGION = "us";
var IS_CONFIG_TESTING = false;
var general_BROWSER = "chrome";
var VERSION = chrome.runtime.getManifest().version;
var CAA_VERSION = '2.3.0';
if (general_BROWSER === 'safari') {
  VERSION = "".concat(VERSION, ".0");
}
var LANGUAGE = 'en-UK';
if (REGION === 'us') {
  LANGUAGE = 'en-US';
} else if (REGION === 'de') {
  LANGUAGE = 'de-DE';
} else if (REGION === 'au') {
  LANGUAGE = 'en-AU';
} else if (REGION === 'fr') {
  LANGUAGE = 'fr-FR';
}

// en-US shows datetime like american
// en-GB shows datetime like europeans
var EXPIRE_FORMAT = REGION === 'us' ? 'en-US' : 'en-GB';
var REMOVE_ACTIVATION_FROM_LIST_DELAY = (/* unused pure expression or super */ null && (60 * 1000));
var CLOSE_TAB_AFTER_ACTIVATION_TIMER = (/* unused pure expression or super */ null && (5 * 1000));
var REMOVE_AFTER_ACTIVATION_FROM_LIST_DELAY = (/* unused pure expression or super */ null && (10 * 1000));
var REMOVE_SUPPRESSION_FROM_LIST_DELAY = (/* unused pure expression or super */ null && (40 * 1000));
var REMOVE_COMPETITOR_ACTIVATION_FROM_LIST_DELAY = (/* unused pure expression or super */ null && (30 * 1000));
var CONFIRMATION_NOTIFICATION_DELAY_TIMESTAMP = (/* unused pure expression or super */ null && (15 * 1000));
var DELAY_NOTIFICATION_ACTIVATING_CASHBACK = (/* unused pure expression or super */ null && (90 * 1000));
var DELAY_SECOND_NOTIFIER_TIMESTAMP = (/* unused pure expression or super */ null && (10 * 60 * 1000));
var ICONS = {
  16: 'icon-32.png',
  32: 'icon-32.png'
};
var ICONS_ACTIVE = {
  16: 'icon-32-active.png',
  32: 'icon-32-active.png'
};
var NO_CODE_PATTERNS = (/* unused pure expression or super */ null && (['N/A', 'n/a', 'no code needed', 'No code required', 'No code required.', 'no code required', 'no code required.', 'NO_CODE_NEEDED']));
var INIT_CAA_EVENTS = {
  init: 'Show',
  success: 'Success',
  fail: 'Fail'
};
var CLOSE_CAA_EVENTS = {
  init: 'Close',
  process: 'Stop'
};
var COUPON_COPIED_ANIMATION_TIMER = 5000;
var DELAY_NOTIFICATION_ACIVATED_CASHBACK = (/* unused pure expression or super */ null && (4 * 1000));
var MAX_ZINDEXES = (/* unused pure expression or super */ null && ([2147483647, '2147483647', '2147483647 !important', '2147483647!important']));
var MERCHANTS_UPDATE_DELAY = (/* unused pure expression or super */ null && (10 * 60 * 1000));
var CONFIGS_UPDATE_DELAY = (/* unused pure expression or super */ null && (24 * 60 * 60 * 1000));
var FEATURE_FLAGS_UPDATE_DELAY = (/* unused pure expression or super */ null && (24 * 60 * 60 * 1000));
var CONQUEST_UPDATE_DELAY = (/* unused pure expression or super */ null && (24 * 60 * 60 * 1000));
var MERCHANT_EXCEPTIONS_UPDATE_DELAY = (/* unused pure expression or super */ null && (24 * 60 * 60 * 1000));
if (IS_CONFIG_TESTING) {
  MERCHANTS_UPDATE_DELAY = 10 * 1000;
  CONFIGS_UPDATE_DELAY = 10 * 1000;
}

// Delay in minutes
var ACTIVATION_RESET_TIMER = (/* unused pure expression or super */ null && (30 * 60 * 1000));
var RE_ACTIVATION_RESET_TIMER = (/* unused pure expression or super */ null && (30 * 60 * 1000));
var SUPRESSION_RESET_TIMER = (/* unused pure expression or super */ null && (30 * 60 * 1000));
var DISMISSAL_RESET_TIMER = (/* unused pure expression or super */ null && (30 * 60 * 1000));
var CONQUEST_RESET_TIMER = (/* unused pure expression or super */ null && (30 * 60 * 1000));
var UPDATE_SINGLE_MERCHANT_INTERVAL = (/* unused pure expression or super */ null && (10 * 60 * 1000));
var UPDATE_SINGLE_MERCHANT_TIMEOUT = (/* unused pure expression or super */ null && (30 * 1000));

;// CONCATENATED MODULE: ./source/constants/urls.js
/* eslint-disable import/no-mutable-exports */

var PROJECT = 'TOPUK';
var DOMAIN = 'www.topcashback.co.uk';
var TEST_DOMAIN = 'ukq-www.tcb.systems';
var CDN_DOMAIN = 'ukp.tcb-cdn.com';
var CDN_TEST_DOMAIN = 'ukq.tcb-cdn.com';
var EBAY_URL = 'ebay.co.uk';
var IGNORED_ULRS = (/* unused pure expression or super */ null && (['news.sky.com']));
var CONFIG_TOOL_URL = 'https://caa-tool.topcashback.com/api/configs/export?configType=caa&project=TOPUK';
var STORE_URLS = {
  chrome: 'https://chrome.google.com/webstore/detail/cashback-notifier-topcash/ekeeeebmbhkkjcaoicinbdjmklipppkj',
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/topcashback-browser-extension/',
  safari: 'https://apps.apple.com/gb/app/topcashback-browser-extension/id6446206868',
  edge: 'https://microsoftedge.microsoft.com/addons/detail/topcashback-uk-get-cashba/benodbbgadflkhbjfmmfemepmjekbjbf'
};
var GA_ID = 'G-DRB9MYYD1N';
var GA_API_SECRET = 'rpEBrsCdQo--7pYRjEXlHA';
var CURRENCY = 'GBP';
var ALLOW_GA = true;
var CAA_ANALYTICS_URL = 'https://caa-analytics.topcashback.com/api/v1/activity/TOPUK';
if (REGION === 'us') {
  PROJECT = 'top';
  DOMAIN = 'www.topcashback.com';
  TEST_DOMAIN = 'usq-www.tcb.systems';
  CDN_DOMAIN = 'usp.tcb-cdn.com';
  CDN_TEST_DOMAIN = 'usq.tcb-cdn.com';
  CONFIG_TOOL_URL = 'https://caa-tool.topcashback.com/api/configs/export?configType=caa&project=top';
  STORE_URLS = {
    chrome: 'https://chrome.google.com/webstore/detail/lkmpdpkkkeeoiodlnmlichcmfmdjbjic',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/topcashback-cashback-coupons/',
    safari: 'https://apps.apple.com/us/app/topcashback-browser-extension/id6446206796',
    edge: 'https://microsoftedge.microsoft.com/addons/detail/topcashback-usa-get-cash-/nceaphojbbjgmdcakkmkobpmhfkbjepi'
  };
  EBAY_URL = 'ebay.com';
  GA_ID = 'G-PSP7WDJ333';
  GA_API_SECRET = '-VlgZIaqQ0O0_thFqZVZCw ';
  CURRENCY = 'USD';
  CAA_ANALYTICS_URL = 'https://caa-analytics.topcashback.com/api/v1/activity/top';
}
if (REGION === 'de') {
  // PROJECT = 'TOPUK';
  PROJECT = 'TOPDE';
  DOMAIN = 'www.topcashback.de';
  TEST_DOMAIN = 'deq-www.tcb.systems';
  CDN_DOMAIN = 'dep.tcb-cdn.com';
  CDN_TEST_DOMAIN = 'deq.tcb-cdn.com';
  EBAY_URL = 'ebay.de';
  CONFIG_TOOL_URL = 'https://caa-tool.topcashback.com/api/configs/export?configType=caa&project=TOPDE';
  STORE_URLS = {
    chrome: 'https://chrome.google.com/webstore/detail/topcashback-de-erhalte-ca/jhkkakmmnkdjfgplbnbiiflbilijdmap',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/topcashback-de/',
    safari: 'https://apps.apple.com/de/app/topcashback-extension/id6446207113',
    edge: 'https://microsoftedge.microsoft.com/addons/detail/topcashback-de-erhalte-ca/jbidblpifeiflplikpebbjiocnfobncn'
  };
  GA_ID = 'G-0XTBPXNTHF';
  GA_API_SECRET = '4oxp9DwLT7-C5ZEHIXiMzA';
  CURRENCY = 'EUR';
  ALLOW_GA = false;
  CAA_ANALYTICS_URL = 'https://caa-analytics.topcashback.com/api/v1/activity/TOPDE';
}
if (REGION === 'au') {
  PROJECT = 'TOPAU';
  DOMAIN = 'www.topcashback.com.au';
  TEST_DOMAIN = 'auq-www.tcb.systems';
  CDN_DOMAIN = 'aup.tcb-cdn.com';
  CDN_TEST_DOMAIN = 'auq.tcb-cdn.com';
  CONFIG_TOOL_URL = 'https://caa-tool.topcashback.com/api/configs/export?configType=caa&project=TOPAU';
  STORE_URLS = {
    chrome: 'https://chromewebstore.google.com/detail/topcashback-browser-exten/opokhjaclibdclfeckdodnjmhblhdfnn',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/topcashback-australia/',
    safari: '',
    edge: 'https://microsoftedge.microsoft.com/addons/detail/topcashback-browser-exten/eakcmopghkilnkoelielcckjiidkhkee'
  };
  EBAY_URL = 'ebay.com.au';

  // Currently on a test GA platform, need to update in the future.

  GA_ID = '';
  GA_API_SECRET = '';
  ALLOW_GA = false;
  CAA_ANALYTICS_URL = 'https://caa-analytics.topcashback.com/api/v1/activity/TOPAU';
}
if (REGION === 'fr') {
  PROJECT = 'TOPFR';
  DOMAIN = 'www.topcashback.fr';
  TEST_DOMAIN = 'frq-www.tcb.systems';
  CDN_DOMAIN = 'frp.tcb-cdn.com';
  CDN_TEST_DOMAIN = 'frq.tcb-cdn.com';
  CONFIG_TOOL_URL = 'https://caa-tool.topcashback.com/api/configs/export?configType=caa&project=TOPFR';
  STORE_URLS = {
    chrome: 'https://chromewebstore.google.com/detail/extension-de-navigateur-t/pgkgjnjmbjbnhjeinemkfomhagmchcfg',
    firefox: 'https://addons.mozilla.org/fr/firefox/addon/extension-topcashback/',
    safari: '',
    edge: 'https://microsoftedge.microsoft.com/addons/detail/extension-de-navigateur-t/ikagofjkkffpcchihogchohdkkccgaao'
  };
  EBAY_URL = 'ebay.fr';

  // Currently on a test GA platform, need to update in the future.

  GA_ID = '';
  GA_API_SECRET = '';
  ALLOW_GA = false;
  CAA_ANALYTICS_URL = 'https://caa-analytics.topcashback.com/api/v1/activity/TOPFR';
}
var urls_HOME_PAGE = "https://".concat(IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN);
var CDN_HOME = "https://".concat(IS_TEST_VERSION ? CDN_TEST_DOMAIN : CDN_DOMAIN);
var APP_ACTIVATION_PATTERN = '=[^&=?]+TcbApp';
// const ACTIVATION_PATTERNS = [`${IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN}/redirect.aspx`, APP_ACTIVATION_PATTERN];
var ACTIVATION_PATTERNS = ["".concat(IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN, "/redirect.aspx"), "".concat(IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN, "/earncashback.aspx")];
var AFTER_INSTALL_URL = "".concat(urls_HOME_PAGE, "/toolbar/install/?ihr=browserextension");
var AFTER_INSTALL_URL_MOBILE = "".concat(urls_HOME_PAGE, "/toolbar/enabledmobile/?ihr=browserextension");
var AFTER_UNINSTALL_URL = "".concat(urls_HOME_PAGE, "/toolbar/uninstall/");
var LOGIN_PAGE_URL = "".concat(urls_HOME_PAGE, "/connect?action=login");
var JOIN_PAGE_URL = "".concat(urls_HOME_PAGE, "/nologin/");
var ACCOUNT_PAGE_URL = "".concat(urls_HOME_PAGE, "/account/overview/");
var TELL_A_FRIEND_PAGE_URL = "".concat(urls_HOME_PAGE, "/account/tell-a-friend");
var HELP_URL = "".concat(urls_HOME_PAGE, "/newhelp/");
var PRIVACY_POLICY = "".concat(urls_HOME_PAGE, "/dyn/browser-ex-privacy/");
var COOKIE_POLICY = "".concat(urls_HOME_PAGE, "/dyn/browser-ex-cookie-policy/");
var PERMISSIONS = "".concat(urls_HOME_PAGE, "/toolbar/permissions");
var PERMISSIONS_MOBILE = "".concat(urls_HOME_PAGE, "/toolbar/mobilepermissions");
var PAYMENT_DETAILS_URL = "".concat(urls_HOME_PAGE, "/account/paymentdetails");
var TOOLBARFEED = "toolbarfeed".concat(IS_TEST_VERSION ? '/qa' : '/production', "/slimmerchants");
var MERCHANTS_URL = "".concat(CDN_HOME, "/").concat(TOOLBARFEED, ".json");
var MERCHANTS_URL_PLUS = "".concat(CDN_HOME, "/").concat(TOOLBARFEED, ".json");
if (REGION === 'uk') {
  MERCHANTS_URL = "".concat(CDN_HOME, "/").concat(TOOLBARFEED, "/classic.json");
  MERCHANTS_URL_PLUS = "".concat(CDN_HOME, "/").concat(TOOLBARFEED, "/plus.json");
}
if (general_BROWSER === 'firefox') {
  PRIVACY_POLICY = 'https://addons.mozilla.org/en-GB/firefox/addon/topcashback-browser-extension/privacy/';
}
if (REGION === 'us') {
  COOKIE_POLICY = "".concat(urls_HOME_PAGE, "/cookie-policy/");
  PAYMENT_DETAILS_URL = 'not a valid url'; // because bacs isn't and us feature
  MERCHANTS_URL = "".concat(CDN_HOME, "/toolbarfeed/production-slimfeed.json");
}
if (REGION === 'de') {
  AFTER_INSTALL_URL = "".concat(urls_HOME_PAGE, "/toolbar/installieren/?ihr=browserextension");
  AFTER_UNINSTALL_URL = "".concat(urls_HOME_PAGE, "/toolbar/deinstallieren/");
  LOGIN_PAGE_URL = "".concat(urls_HOME_PAGE, "/keine-anmeldung/");
  JOIN_PAGE_URL = "".concat(urls_HOME_PAGE, "/keine-anmeldung/");
  ACCOUNT_PAGE_URL = "".concat(urls_HOME_PAGE, "/konto/uebersicht/");
  TELL_A_FRIEND_PAGE_URL = "".concat(urls_HOME_PAGE, "/konto/freunde-werben-freunde/");
  HELP_URL = "".concat(urls_HOME_PAGE, "/hilfe/");
  PRIVACY_POLICY = "".concat(urls_HOME_PAGE, "/dyn/browser-erweiterung-datenschutz/");
  COOKIE_POLICY = "".concat(urls_HOME_PAGE, "/cookie-richtlinie/");
  PAYMENT_DETAILS_URL = "".concat(urls_HOME_PAGE, "/konto/auszahlungsinformationen/"); // feature about bacs need to ask
}
if (REGION === 'au') {
  PAYMENT_DETAILS_URL = 'not a valid url'; // Need to see in the future what to use here.
}
if (REGION === 'fr') {
  AFTER_INSTALL_URL = "".concat(urls_HOME_PAGE, "/barre-doutils/installer/?ihr=browserextension");
  AFTER_UNINSTALL_URL = "".concat(urls_HOME_PAGE, "/barre-doutils/desinstaller");
  LOGIN_PAGE_URL = "".concat(urls_HOME_PAGE, "/se-connecter/");
  JOIN_PAGE_URL = "".concat(urls_HOME_PAGE, "/aucune-connexion/");
  PRIVACY_POLICY = "".concat(urls_HOME_PAGE, "/dyn/politique-confidentialite-extension/");
  COOKIE_POLICY = "".concat(urls_HOME_PAGE, "/dyn/politique-des-cookies-extension-navigateur/");
  ACCOUNT_PAGE_URL = "".concat(urls_HOME_PAGE, "/mon-compte/tableau-de-bord/");
  PAYMENT_DETAILS_URL = 'not a valid url'; // Need to see in the future what to use here.
}
var API_VERSION = 'v3.0';
if (general_BROWSER === 'safari') {
  API_VERSION = 'v4.0';
}
var TOOLBARFEED_DETAIL = "toolbarfeed".concat(IS_TEST_VERSION ? '/qa' : '/production', "/");
var MERCHANT_URL = "".concat(CDN_HOME, "/").concat(TOOLBARFEED_DETAIL);
var MERCHANT_URL_PLUS = "".concat(CDN_HOME, "/").concat(TOOLBARFEED_DETAIL);
if (REGION === 'uk') {
  MERCHANT_URL = "".concat(CDN_HOME, "/").concat(TOOLBARFEED_DETAIL, "detail/classic");
  MERCHANT_URL_PLUS = "".concat(CDN_HOME, "/").concat(TOOLBARFEED_DETAIL, "detail/plus");
}
var MERCHANT_EXCEPTIONS_URL = "".concat(CDN_HOME, "/toolbarfeed/merchantexceptions.json");
var TOP_OFFERS_URL = "".concat(urls_HOME_PAGE, "/toolbar/api/").concat(API_VERSION, "/feed/homepage/");
var USER_INFO_URL = "".concat(urls_HOME_PAGE, "/toolbar/api/v3.0/user");
var FEATURE_FLAGS_URL = "".concat(urls_HOME_PAGE, "/toolbar/api/v3.0/features");
var CONFIGS_URL = "".concat(urls_HOME_PAGE, "/toolbar/api/").concat(API_VERSION, "/couponautoapplier/config");
var CONQUEST_URL = "https://".concat(IS_TEST_VERSION ? CDN_TEST_DOMAIN : CDN_DOMAIN, "/toolbarfeed/conquest.json");
var MERCHANTS_URL_DETAIL = '';
if (IS_CONFIG_TESTING) {
  MERCHANTS_URL = 'http://0.0.0.0/merchants.json';
  // CONFIGS_URL = 'http://localhost/configs.json';
  // MERCHANTS_URL_DETAIL = 'http://localhost/merchant';
  // USER_INFO_URL = 'http://localhost/users.json';
  ALLOW_GA = false;
}
var TCB_WRAPPER = "tcb-extension-".concat(REGION, "-wrapper").concat(IS_TEST_VERSION ? '-qa' : '');

// For testing purposes
if (false) {}

;// CONCATENATED MODULE: ./source/constants/serp.js
var SERP_PATTERNS = (/* unused pure expression or super */ null && (['ebay.com', 'ebay.de']));
var SERP_CONFIG = [{
  name: 'yahoo',
  domain: 'search.yahoo.com',
  rx: '^https?://((?:[a-z]{2}|www|encrypted)\\.)?search\\.yahoo\\.[a-z.]{2,6}',
  links: 'h3 a, .tad-title a, div a',
  blocks: 'div#web li > .dd:not(.bingrelqa), section#main-algo .dd:not(.bingrelqa)',
  secondaryLinks: '.compList a.td-n'
}, {
  name: 'bing',
  domain: 'bing.com',
  rx: '^https?://(?:www.|encrypted.)?bing\\.[a-z.]{2,6}',
  links: 'h2 a, div[class=\'sb_tlst\'] * a, div[class=\'b_algoheader\'] a',
  secondaryUrl: 'div > cite',
  // fix edge problem when opening new tab
  blocks: '#b_results>.b_algo, #b_topw>.b_ans',
  secondaryLinks: '.b_vlist2col h3 a' // sublink of main link
}, {
  name: 'google',
  domain: 'google.',
  rx: '^https?://(?:www.|encrypted.)?google\\.[a-z.]{2,6}',
  links: 'a',
  blocks: 'div.MjjYud:has(div.tF2Cxc)',
  secondaryLinks: '.nrgt a.l'
}, {
  domain: 'yandex',
  rx: '^https?://(?:www.|encrypted.)?yandex\\.[a-z.]{2,6}',
  blocks: 'li.serp-item h2',
  links: 'li.serp-item h2>a'
}, {
  domain: 'rambler',
  rx: '^https?://(?:www.|nova.)?rambler\\.[a-z.]{2,6}',
  blocks: 'div.b-serp-item h2',
  links: 'div.b-serp-item h2>a'
}];
var SERP_REACTION_THRESHOLD = 100;

;// CONCATENATED MODULE: ./source/constants/merchants.js
/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-cycle


var CAMPAIGN_ID_RX = /(ebay\/.*)(campid=[\d]+)/;
var CAMPAIGN_ID_EBAY = 5337714585;

// rakuten uses htto:// to activation

var TAB_COMPETITORS_ACTIVATION = (/* unused pure expression or super */ null && ([
  // {
  //   network: 'befrugal',
  //   regex: 'https://r.befrugal.com/?',
  //   competitor: true,
  // },
  // {
  //   network: 'quidco',
  //   regex: /www\.quidco\.com\/visit\/.*\/.*\/cashback/,
  //   competitor: true,
  // },
  // {
  //   network: 'coupert',
  //   regex: 'https://www.coupert.com/api/v2/out/',
  //   competitor: true,
  // },
  // {
  //   network: 'coupert',
  //   regex: 'https://www.coupertsh.com/api/v2/out/',
  //   competitor: true,
  // },
  // {
  //   network: 'coupert',
  //   regex: 'https://r.coupert.com/?',
  //   competitor: true,
  // },
  // {
  //   network: 'capital_one',
  //   regex: 'https://capitaloneshopping.com/api/v1/redirectV2',
  //   competitor: true,
  // },
  // {
  //   network: 'honey',
  //   regex: /o\.honey\.io\/store\/.*\/(offer_claim|extension_links)?/,
  //   competitor: true,
  // },
  // {
  //   network: 'KickBack',
  //   regex: 'kickback.com.au/conversion/merchants/',
  //   competitor: true,

  // },
  // {
  //   network: 'CashRewards',
  //   regex: 'cashrewards.com.au/go',
  //   competitor: true,
  // },
  // {
  //   network: 'ShopBack',
  //   regex: 'shopback.com.au/redirect',
  //   competitor: true,
  // },
]));
var WINDOW_COMPETITORS_ACTIVATION = [{
  network: 'ascend',
  regex: 'c.pepperjamnetwork.com/click?',
  required_params: ['action', 'sid']
}, {
  network: 'avantlink',
  regex: 'www.avantlink.com/click.php?',
  required_params: ['ctc']
}, {
  network: 'avantlink',
  regex: 'classic.avantlink.com/click.php?',
  required_params: ['ctc']
}, {
  network: 'awin',
  regex: 'www.awin1.com/cread.php',
  required_params: ['affid']
}, {
  network: 'awin',
  regex: 'www.awin1.com/awclick.php',
  required_params: ['affid']
}, {
  network: 'awin',
  regex: 'awin1.com'
}, {
  network: 'optimise',
  regex: 'track.omguk.com/'
}, {
  network: 'optimise',
  regex: 'clk.omgt1.com/'
}, {
  network: 'partnerize',
  regex: 'prf.hn/click/camref'
}, {
  network: 'shareasale',
  regex: 'shareasale.com/r.cfm?',
  required_params: ['afftrack']
}, {
  network: 'shareasale',
  regex: 'shareasale-analytics.com/r.cfm?',
  required_params: ['afftrack']
}, {
  network: 'tradedoubler',
  regex: 'clkuk.tradedoubler.com/click?'
}, {
  network: 'tradedoubler',
  regex: 'clk.tradedoubler.com/click?'
}, {
  network: 'webgains',
  regex: 'track.webgains.com/click.html?',
  required_params: ['wgcampaignid', 'wgprogramid']
}, {
  network: 'cj',
  regex: 'cj.dotomi.com/'
}, {
  network: 'cj',
  regex: 'www.jdoqocy.com/'
}, {
  network: 'cj',
  regex: 'www.emjcd.com/'
}, {
  network: 'rakuten',
  regex: 'click.linksynergy.com/deeplink?',
  required_params: ['id']
}, {
  network: 'rakuten',
  regex: 'click.linksynergy.com/fs-bin/click?',
  required_params: ['id']
}, {
  network: 'rakuten',
  regex: 'www.kqzyfj.com/'
}, {
  network: 'rakuten campid for ebay.com',
  regex: 'https://www.rakuten.com/ebay_3993',
  competitor: true
}, {
  network: 'impact',
  regex: 'bbgqo9.net'
}, {
  network: 'impact',
  regex: 'svj.io'
}, {
  network: 'impact',
  regex: 'tm7559.net'
}, {
  network: 'impact',
  regex: 'ojrq.net'
}, {
  network: 'impact',
  regex: 'pxf.io'
}, {
  network: 'impact',
  regex: '7cnq.net'
}, {
  network: 'impact',
  regex: 'rrmo.net'
}, {
  network: 'impact',
  regex: 'oaccss.net'
}, {
  network: 'impact',
  regex: 'clarity.ms'
}, {
  network: 'impact',
  regex: 'akstat.io'
}, {
  network: 'impact',
  regex: 'ngi2ba.net'
}, {
  network: 'Ebay',
  regex: /.*ebay\..*\/?(mkevt|mkcid|campid).*/
}, {
  network: 'TradeTracker',
  regex: 'tc.tradetracker.net'
}, {
  network: 'TradeTracker',
  regex: 'sc.tradetracker.net/tracker'
}, {
  network: 'Adtraction',
  regex: 'track.adtraction.com'
}, {
  network: 'Adtraction',
  regex: /\/t\/t\?epi=/
}, {
  network: 'Adtraction',
  regex: 'at_gd='
}, {
  network: 'Affiliate Gateway',
  regex: 'tagserve.com'
}, {
  network: 'Affiliate Gateway',
  regex: 'tagrid='
}, {
  network: 'Paid On Results',
  regex: 'paidonresults.net/c/'
}, {
  network: 'Paid On Results',
  regex: 'portgk.com/c/'
}, {
  network: 'Three Mobile',
  regex: /three\.co\.uk\/?.*affCode=/
}, {
  network: 'Pepperjam',
  regex: 'c.pepperjamnetwork.com'
}, {
  network: 'kwanko',
  regex: 'kwkuniv='
}, {
  network: 'Affiliate Future',
  regex: 'scripts.affiliatefuture.com/AFClick.asp'
}, {
  network: 'Communication Ads',
  regex: 'www.communicationads.net/tc.php'
}, {
  network: 'Douglas',
  regex: 'pvn.douglas.de/trck'
}, {
  network: 'MediaMarkt',
  regex: 'pvn.mediamarkt.de/trck'
}, {
  network: 'Saturn',
  regex: 'pvn.saturn.de/trck'
}, {
  network: 'RetailAds',
  regex: 'cdn.retailads.net/tc.php'
}, {
  network: 'Effinity',
  regex: 'track.effiliation.com/servlet/effi.redir'
}, {
  network: 'amazon',
  regex: /\.amazon\.[a-z.]+\/.*tag\b(?!=topcashback)/
}, {
  network: 'amazon',
  regex: /\.amazon\.[a-z.]+\/.*afsrc=1/
}, {
  network: 'Commission Factory',
  regex: 't.cfjump.com'
}, {
  network: 'Commission Factory',
  regex: 'cfjump.com'
}];
if (REGION === 'de') {
  var DE_WINDOW_COMPETITORS_ACTIVATION = [{
    network: 'RetailAds',
    regex: 'ra_id='
  },
  // {
  //   network: 'Uppr',
  //   regex: 'netzwerk.uppr.de/trck/eclick',
  // },
  {
    network: 'Uppr',
    regex: /\/trck\/eclick\/.*subid=/
  }, {
    network: 'Uppr',
    regex: 'upbafr='
  }];
  WINDOW_COMPETITORS_ACTIVATION.push.apply(WINDOW_COMPETITORS_ACTIVATION, DE_WINDOW_COMPETITORS_ACTIVATION);
}
if (general_BROWSER === 'safari') {
  var PARAMETERS_WINDOW_COMPETITORS_ACTIVATION = [{
    network: 'Affiliate Future',
    regex: 'affc='
  }, {
    network: 'awin',
    regex: 'awc='
  }, {
    network: 'cj',
    regex: 'cjevent='
  }, {
    network: 'optimise',
    regex: 'sskey='
  }, {
    network: 'Paid On Results',
    regex: 'porc='
  }, {
    network: 'rakuten',
    regex: 'ranSiteID='
  }, {
    network: 'rakuten',
    regex: 'ranEAID='
  }, {
    network: 'Affiliate Gateway',
    regex: 'tagrid='
  }, {
    network: 'tradedoubler',
    regex: 'tduid='
  }, {
    network: 'webgains',
    regex: 'wgexpiry='
  }, {
    network: 'avantlink',
    regex: 'avad='
  }, {
    network: 'Commission Factory',
    regex: 'cfclick='
  }, {
    network: 'Effinity',
    regex: 'eff_cpt='
  }, {
    network: 'general',
    regex: 'clickId='
  }, {
    network: 'general',
    regex: 'clickref='
  }, {
    network: 'general',
    regex: 'afsrc=1'
  }];
  WINDOW_COMPETITORS_ACTIVATION.push.apply(WINDOW_COMPETITORS_ACTIVATION, PARAMETERS_WINDOW_COMPETITORS_ACTIVATION);
}
var DISABLE_PATTERNS = ["compare-(.+).".concat((IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN).replace('www.', ''), "/goto"), "compare-(.+).".concat((IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN).replace('www.', ''), "/.*clickIn\\.php")];
var SUPPRESSION_PATTERNS = (/* unused pure expression or super */ null && (['www.expedia.com/amex', 'px.owneriq.net', /(?<!login\.)dotomi\.com/, 'eden-park.fr/fr_fr/?utm_campaign=', 'www.1-2-3.fr', 'cm_mmc=Linkshare', 'PartnerID=LINKSHARE', 'action.metaffiliation.com', 'track.webgains.com', 'track.effiliation.com', 'clk.tradedoubler.com', 'www.jacadi.fr/?utm_source=', 'ftjcfx.com', 'commission-junction.com', 'rover.ebay.com', 'partners.hotwire.com', 'www.pjtra.com', '.7eer.', 'clickserver.com', '.r.bat.bing.com', 'www.pntrs.com', 'partners.wantable.co', 'cc-dt.com', '.ojrq.net', 'goto.orientaltrading.com', 'www.dpbolvw.net', 'goto.target.com', 'www.pntra.com', '.evyy.net', 'www.anrdoezrs.net', 'www.tkqlhce.com', 'linksynergy.walmart.com', 'www.anrdoezrs.net', 'emjcd.com', 'partners.jawbone.com', 'shareasale.com', 'www.awin1.com', 'linksynergy.walmart.com', 'gan.doubleclick.net', 'tracking.groupon.com', 'www.pepperjamnetwork.com', 'rcm-ca.amazon.ca', 'www.shareasale.com', 'www.jdoqocy.com', 'alitems.com', 'www.kqzyfj.com', 'goto.orientaltrading.com', 'affiliates.babiesrus.com', 'lduhtrp.net', 'ad.admitad.com', 'prf.hn', '.r.msn.com', 'apmebf.com', 'goto.target.com', 'www.intactearnings.com', 'click.linksynergy.com', 'partners.hostgator.com', '.avantlink.com', 'tqlkg.com', 'partners.wantable.co', 'go.redirectingat.com', 'www.pntrac.com', /(?<!tags\.rd\.)linksynergy.com/, 'www.qksrv.net', 'www.gopjn.com', 'affiliates.abebooks.com', 'www.pjatr.com', 'afsrc=1', 'affsrc=1', 'riffrid=mdp.hcom.US', 'riffrid=sem.hcom.us', 'rffrid=aff.hcom.us', 'riffrid=eml.hcom.US', 'riffrid=eml.hcom.CA', 'riffrid=eml.hcom.CF', 'riffrid=eml.hcom.U2', 'ranEAID', 'ranSiteID', 'magicfreebiesuk.co.uk', 'itsadoddle.co.uk', /shepherdsfriendly\.co\.uk.*utm_medium=km/, '/lp/b/amex', 'www.vrbo.com/amex/']));
var OVERRIDE_SUPPRESSION_PATTERNS = (/* unused pure expression or super */ null && ([
  // 'cj.dotomi.com/',
  // 'www.jdoqocy.com/',
  // 'www.emjcd.com/',
]));
var GOOGLE_SUPPRESSION_PATTERNS = (/* unused pure expression or super */ null && ([/aclk\?sa=/, 'ohost=www.google.com', /(?<!td\.)(?<!fls\.)(?<!securepubads\.g\.)(?<!googleads\.g\.)doubleclick\.net/
// 'cp=\\d+-[\\w-]+',
// 'gclid=[\\w-]+',
// 'gclsrc=aw\\.ds',
// 'kwd=\\d+-\\d+',
]));
var merchants_AVIOS_MERCHANTS = (/* unused pure expression or super */ null && (['tkmaxx.com']));
var REQUIRED_BACS_ACTIVE = true;
var OVERIMPOSED_MERCHANT_CONSENTS = [{
  domains: ['asos.com', 'sephora.co.uk', 'currys.co.uk', 'sephora.com', 'sephora.com.au'],
  elementSelector: '[id="onetrust-banner-sdk"]'
}, {
  domains: ['nike.com'],
  elementSelector: '[data-testid="dialog-backdrop"]'
}, {
  domains: ['sephora.de'],
  elementSelector: '[id="footer_tc_privacy"]'
}];
if (REGION === 'us') {
  CAMPAIGN_ID_EBAY = 5337592760;
  merchants_AVIOS_MERCHANTS = [];
  REQUIRED_BACS_ACTIVE = false;
}
if (REGION === 'de') {
  CAMPAIGN_ID_EBAY = 5338621410;
  merchants_AVIOS_MERCHANTS = [];
}

;// CONCATENATED MODULE: ./source/constants.js
// eslint-disable-next-line import/no-cycle





// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var esm_i18next = __webpack_require__(2635);
;// CONCATENATED MODULE: ./source/locales/en-UK.js
var localeEnUk = {
  general: {
    multiple_type: 'All Other {{merchantName}} <span style="font-weight: normal;">Cashback </span>',
    single_type: '{{merchantName}} <span style="font-weight: normal;">Cashback </span>',
    category_type: '{{ category }} <span style="font-weight: normal;">Cashback</span>',
    cashback: 'Cashback',
    coupon_one: 'Voucher',
    coupon_other: 'Vouchers',
    lowcase: {
      coupon_one: 'voucher',
      coupon_other: 'vouchers'
    },
    replace_up_to: 'Up to ',
    close: 'Close',
    logo_alt: 'TopCashback Logo',
    logo_badge_alt: 'Open the Topcashback Browser Extension',
    loading: 'Loading',
    copy: 'Copy',
    settings: 'Settings',
    account: 'Account'
  },
  content: {
    components: {
      secondNotifier: {
        description: 'Don\'t miss out on {{ reward }} cashback,<br> activate below.',
        button_title: 'Activate cashback'
      },
      caa: {
        description_with_vouchers: 'Don\'t miss out on {{ reward }} cashback, and<br>apply vouchers.',
        button_title_with_vouchers: 'Activate cashback & vouchers',
        button_title_with_vouchers_mobile: 'Get cashback & vouchers',
        notification_title: 'We found {{ n_coupons }} {{ coupons }}',
        apply_button: 'Apply {{ coupons }}',
        title: 'We are automatically testing {{ n_coupons }} {{ coupons }}',
        progress_info: 'Testing code {{ process_index }} of {{ n_coupons }}',
        success: 'Success',
        success_text: 'We have successfully applied <b>{{ best_coupon }}</b> to your cart. ',
        saved: 'You have saved',
        savings: '£{{ amount }}',
        also_get: 'You will also receive {{ cashback_reward }} {{ cashback }}.',
        reward: '{{ cashback_reward }} {{ cashback }}',
        continue_shopping: 'Continue',
        fail: 'Sorry!',
        fail_text: 'No working codes at the moment',
        fail_text_with_cashback: "We couldn't find any working codes, but you will still receive <b>{{ cashback_reward }} {{ cashback }}</b>.",
        leave_review: 'Like using TopCashback? <a href="{{ url }}" target="_blank" style="color: inherit;">Leave us a review</a>'
      },
      consentsNotification: {
        title: 'Opt-in required to use the TopCashback Browser Extension',
        checkbox_mandatory: {
          title: 'By enabling our extension you\'re accepting that we collect and store the following personal data:',
          description: ['Unique personal identifiers, a list of visited websites (URLs) which are eligible for cashback, first and last date/time the browser extension was used, IP Address, device type and browser type.', 'This data is required for the extension to function and to provide cashback to you, if you do not want this data to be collected please uninstall our browser extension.']
        },
        checkbox_analytical: {
          title: 'Please select if we can collect additional performance / analytical data:',
          description: ['This includes data such as interactions and performance metrics, which allows us to understand how users interact with our browser extension and help us develop and improve it.']
        },
        privacy_text: 'Read more about our',
        privacy_link: 'Privacy Policy',
        change_settings: 'You can change settings anytime via the Settings within the extension.',
        accept: 'Agree',
        uninstall: 'Uninstall'
      },
      ga_slider: {
        title: 'TopCashback Browser Extension consent to analytical cookies',
        description: ['To help us improve our extension we would like to set', 'cookies which allows us to recognise and count the number', 'of users and to see how users interact with our extension whilst they are using it.'],
        description2: 'The cookies collect information anonymously so that it does not directly identify anyone.',
        privacy: 'TopCashback Browser Extension Privacy Policy',
        accept: 'Accept',
        decline: 'Decline'
      },
      notification: {
        promoted_text: 'Cashback',
        title_activated: '{{ promotedText }} Activated',
        button_title: 'Get {{ reward }} {{ promotedText }}',
        badge_title: '{{ reward }} {{ promotedText }}',
        title_not_logged_in: 'Get {{ reward }} {{ promotedText }}',
        button_title_not_logged_in: 'Join / Login',
        button_title_activating: 'Activating',
        more_details: 'What can you get cashback on?',
        dont_show_again1: 'Don‘t show on this retailer again. You can change this in the ',
        dont_show_again2: 'settings',
        dont_show_again3: '.',
        bacs_required: 'BACS details required',
        activate_now: 'Activate Now',
        see_all_selected_deals: "See all <a href='{{ url }}' target='_blank'>selected deals</a> from {{ name }}"
      },
      reactivation: {
        button_title: 'Re-activate',
        title: 'Re-activate Cashback',
        description: 'We have detected that you have visited a site recently, which may disable your cashback.'
      },
      store_terms: {
        expanded_sections: {
          title: 'Exclusions & Terms',
          terms: 'Terms',
          exclusions: 'Exclusions'
        },
        text: {
          part1: 'Exclusions may apply. Please always check the ',
          link: 'TopCashback site',
          part2: ' for the latest terms and cashback rates.'
        },
        more_details: 'View website for more details'
      },
      serp: {
        cashback: 'Cashback'
      },
      tooltip: {
        "new": 'New',
        scroll_me: 'Scroll to minimise!'
      }
    }
  },
  shared_components: {
    rating: {
      title: 'How are you liking Topcashback?'
    },
    tiers: {
      category_title: 'All purchases',
      show_more: 'Show more'
    },
    offer: {
      get_deal: 'Get Deal',
      use: 'Use {{ coupon }}',
      copied: 'Copied'
    }
  },
  popup: {
    app: {
      store_title: 'Store Deals',
      offers_title: 'Best Deals',
      recent_title: 'Recently Visited',
      timer: 'Closes in {{ time }}s'
    },
    components: {
      store_tab: {
        cashback_terms: '{{ cashback }} Terms',
        best_deals: 'Best Deals',
        no_deals: 'No available deals',
        best_deals_vouchers_one: '& {{ count }} voucher',
        best_deals_vouchers_other: '& {{ count }} vouchers'
      },
      store_terms: {
        expanded_sections: {
          title: 'Exclusions & Terms',
          terms: 'Terms',
          exclusions: 'Exclusions'
        },
        text: {
          part1: 'Exclusions may apply. Please always check the ',
          link: 'TopCashback site',
          part2: ' for the latest terms and cashback rates.'
        },
        more_details_simple: 'More Details',
        important: 'Important Note: ',
        exclusions: 'Exclusions: '
      },
      account: {
        title: 'Account'
      },
      recent_tab: {
        no_recently_visited: 'No recently visited stores to display'
      },
      footer: {
        my_account: 'My Account',
        settings: 'Settings'
      },
      header: {
        cashback: 'Cashback',
        title: '{{ promotedText }} activated',
        bacs_required: 'BACS details required',
        activate: 'Get {{ reward }} {{ promotedText }}'
      },
      offerTab: {
        best_deals: 'Best Deals'
      },
      refer: {
        title: 'Copy this link and send it to your friends',
        link: 'www.example.com',
        copy: 'Copy',
        or: 'or'
      },
      search: {
        search: 'Search Merchant / Store Name',
        cashback: 'Cashback',
        no_matches: 'No matching stores'
      },
      welcome: {
        button: 'Join / Login',
        private_mode: 'Please try again on a non private window',
        text: 'To use the TopCashback Browser Extension, join or login to your account.'
      },
      see_all_selected_deals: "See all <a href='{{ url }}' target='_blank'>selected deals</a> from {{ name }}",
      consents: {
        text: 'To use the TopCashback Browser Extension, please review our data collection policy.',
        button: 'Continue'
      }
    }
  },
  settings: {
    components: {
      app: {
        setting_title: 'TopCashback Extension Settings',
        checkbox_text: 'Allow data collection. Sharing your usage data with TopCashback Extension helps us improve our products and services.',
        muted_merchants: 'Muted Merchants',
        muted_merchants_remove: 'remove',
        rate: 'Rate Topcashback Extension',
        privacy_cookie_policy: 'See our <a href="{{ privacyPolicy }}" target="_blank" class="privacy_policy">Privacy Policy</a> & <a href="{{ cookiePolicy }}" target="_blank" class="cookie_policy">Cookie Policy</a>',
        new_checkbox_text: 'Please select if we can collect additional performance / analytical data:',
        description_text: 'This includes data such as interaction and performance metrics, which allow us to understand how users interact with our browser extension and help us develop and improve it.'
      }
    }
  },
  filters: {
    expire: {
      today: 'Expires Today',
      tomorrow: 'Expires Tomorrow',
      days_left: '{{ number_days }} days left',
      no_date: 'No Expiry Date',
      msg: 'Exp. {{-date }}'
    }
  }
};
/* harmony default export */ const en_UK = (localeEnUk);
;// CONCATENATED MODULE: ./source/locales/en-US.js
var localeEnUs = {
  general: {
    multiple_type: 'All Other {{merchantName}} <span style="font-weight: normal;">Cash Back </span>',
    single_type: '{{merchantName}} <span style="font-weight: normal;">Cash Back </span>',
    category_type: '{{ category }} <span style="font-weight: normal;">Cash Back</span>',
    cashback: 'Cash Back',
    coupon_one: 'Coupon',
    coupon_other: 'Coupons',
    lowcase: {
      coupon_one: 'coupon',
      coupon_other: 'coupons'
    },
    replace_up_to: 'Up to ',
    close: 'Close',
    logo_alt: 'TopCashback Logo',
    logo_badge_alt: 'Open the Topcashback Browser Extension',
    loading: 'Loading',
    copy: 'Copy',
    settings: 'Settings',
    account: 'Account'
  },
  content: {
    components: {
      secondNotifier: {
        description: 'Don\'t miss out on {{ reward }} cash back,<br> activate below.',
        button_title: 'Activate cash back'
      },
      caa: {
        description_with_vouchers: 'Don\'t miss out on {{ reward }} cash back, and<br>apply coupons.',
        button_title_with_vouchers: 'Activate cash back & coupons',
        button_title_with_vouchers_mobile: 'Get cash back & coupons',
        notification_title: 'We found {{ n_coupons }} {{ coupons }}',
        apply_button: 'Apply {{ coupons }}',
        title: 'We are automatically testing {{ n_coupons }} {{ coupons }}',
        progress_info: 'Testing code {{ process_index }} of {{ n_coupons }}',
        success: 'Success',
        success_text: 'We have successfully applied <b>{{ best_coupon }}</b> to your cart. ',
        saved: 'You have saved',
        savings: '$ {{ amount }}',
        also_get: 'You will also receive {{ cashback_reward }} {{ cashback }}.',
        reward: '{{ cashback_reward }} {{ cashback }}',
        continue_shopping: 'Continue',
        fail: 'Sorry!',
        fail_text: 'No applicable codes at the moment',
        fail_text_with_cashback: "We couldn't find any codes that apply to this purchase, but you will still receive <b>{{ cashback_reward }} {{ cashback }}</b>.",
        leave_review: 'Like using TopCashback? <a href="{{ url }}" target="_blank" style="color: inherit;">Leave us a review</a>'
      },
      consentsNotification: {
        title: 'Opt-in required to use the TopCashback Browser Extension',
        checkbox_mandatory: {
          title: 'By enabling our extension you\'re accepting that we collect and store the following personal data:',
          description: ['Unique personal identifiers, a list of visited websites (URLs) which are eligible for cashback, first and last date/time the browser extension was used, IP Address, device type and browser type.', 'This data is required for the extension to function and to provide cashback to you, if you do not want this data to be collected please uninstall our browser extension.']
        },
        checkbox_analytical: {
          title: 'Please select if we can collect additional performance / analytical data:',
          description: ['This includes data such as interactions and performance metrics, which allows us to understand how users interact with our browser extension and help us develop and improve it.']
        },
        privacy_text: 'Read more about our',
        privacy_link: 'Privacy Policy',
        change_settings: 'You can change settings anytime via the Settings within the extension.',
        accept: 'Agree',
        uninstall: 'Uninstall'
      },
      ga_slider: {
        title: 'Navigation options',
        description: ['Help improve our extension by allowing to receive diagnostic and usage data.', 'Personal information will remain confidential.'],
        description2: '',
        privacy: 'Privacy Policy',
        accept: 'Accept',
        decline: 'Decline'
      },
      notification: {
        promoted_text: 'Cash Back',
        title_activated: '{{ promotedText }} Activated',
        button_title: 'Get {{ reward }} {{ promotedText }}',
        badge_title: '{{ reward }} {{ promotedText }}',
        title_not_logged_in: 'Get {{ reward }} {{ promotedText }}',
        button_title_not_logged_in: 'Join/Log In',
        button_title_activating: 'Activating',
        more_details: 'What can you get Cash Back on?',
        dont_show_again1: 'Don‘t show on this retailer again. You can change this in the ',
        dont_show_again2: 'settings',
        dont_show_again3: '.',
        bacs_required: 'BACS details required',
        activate_now: 'Activate Now'
      },
      reactivation: {
        button_title: 'Reactivate',
        title: 'Reactivate Cash Back',
        description: 'It looks like you may have clicked through another deal or rewards site, which can affect your Cash Back eligibility.'
      },
      conquest: {
        promoted_text: 'Cash Back',
        get: 'Get',
        subtitle: '{{ reward }} {{ promoted_text }}',
        button_title: 'Shop now',
        description: "This retailer doesn't have Cash Back, but here's a great alternative!",
        more_details: 'More details and terms'
      },
      store_terms: {
        expanded_sections: {
          title: 'Exclusions & Terms',
          terms: 'Terms',
          exclusions: 'Exclusions'
        },
        text: {
          part1: 'Exclusions may apply. Please always check the ',
          link: 'TopCashback site',
          part2: ' for the latest terms and cash back rates.'
        },
        more_details: 'View website for more details'
      },
      serp: {
        cashback: 'Cash Back'
      },
      tooltip: {
        "new": 'New',
        scroll_me: 'Scroll to minimize!'
      }
    }
  },
  shared_components: {
    rating: {
      title: 'How are you liking Topcashback?'
    },
    tiers: {
      category_title: 'All purchases',
      show_more: 'Show more'
    },
    offer: {
      get_deal: 'Get Deal',
      use: 'Use {{ coupon }}',
      copied: 'Copied'
    }
  },
  popup: {
    app: {
      store_title: 'Store Deals',
      offers_title: 'Best Deals',
      recent_title: 'Recently Visited',
      timer: 'Closes in {{ time }}s'
    },
    components: {
      store_tab: {
        cashback_terms: '{{ cashback }} Terms',
        best_deals: 'Best Deals',
        best_deals_vouchers_one: '& {{ count }} coupon',
        best_deals_vouchers_other: '& {{ count }} coupons',
        no_deals: 'No available deals'
      },
      store_terms: {
        expanded_sections: {
          title: 'Exclusions & Terms',
          terms: 'Terms',
          exclusions: 'Exclusions'
        },
        text: {
          part1: 'Exclusions may apply. Please always check the ',
          link: 'TopCashback site',
          part2: ' for the latest terms and cash back rates.'
        },
        more_details_simple: 'More Details',
        important: 'Important Note: ',
        exclusions: 'Exclusions: '
      },
      account: {
        title: 'Account'
      },
      recent_tab: {
        no_recently_visited: 'No recently visited stores to display'
      },
      footer: {
        my_account: 'My Account',
        settings: 'Settings'
      },
      header: {
        cashback: 'Cash Back',
        title: '{{ promotedText }} activated',
        bacs_required: 'BACS details required',
        activate: 'Get {{ reward }} {{ promotedText }}'
      },
      offerTab: {
        best_deals: 'Best Deals'
      },
      refer: {
        title: 'Copy this link and send it to your friends',
        link: 'www.example.com',
        copy: 'Copy',
        or: 'or'
      },
      search: {
        search: 'Search Retailer/Store Name',
        cashback: 'Cash Back',
        no_matches: 'No matching stores'
      },
      welcome: {
        button: 'Join/Log In',
        private_mode: 'Please try again on a non private window',
        text: 'To use the TopCashback Browser Extension, join or log in to your account.'
      },
      consents: {
        text: 'To use the TopCashback Browser Extension, please review our data collection policy.',
        button: 'Continue'
      }
    }
  },
  settings: {
    components: {
      app: {
        setting_title: 'TopCashback Extension Settings',
        checkbox_text: 'Allow data collection. Sharing your usage data with TopCashback Extension helps us improve our products and services.',
        muted_merchants: 'Muted Merchants',
        muted_merchants_remove: 'remove',
        rate: 'Rate Topcashback Extension',
        privacy_cookie_policy: 'See our <a href="{{ privacyPolicy }}" target="_blank" class="privacy_policy">Privacy Policy</a> & <a href="{{ cookiePolicy }}" target="_blank" class="cookie_policy">Cookie Policy</a>',
        new_checkbox_text: 'Please select if we can collect additional performance / analytical data:',
        description_text: 'This includes data such as interaction and performance metrics, which allow us to understand how users interact with our browser extension and help us develop and improve it.'
      }
    }
  },
  filters: {
    expire: {
      today: 'Expires Today',
      tomorrow: 'Expires Tomorrow',
      days_left: '{{ number_days }} days left',
      no_date: 'No Expiry Date',
      msg: 'Exp. {{-date }}'
    }
  }
};
/* harmony default export */ const en_US = (localeEnUs);
;// CONCATENATED MODULE: ./source/locales/de-DE.js
var localedeDe = {
  general: {
    multiple_type: '<span style="font-weight: normal;">Mehr Cashback von </span>{{ merchantName }}',
    single_type: '{{ merchantName }} <span style="font-weight: normal;">Cashback</span>',
    category_type: '{{ category }} <span style="font-weight: normal;">Cashack</span>',
    cashback: 'Cashback',
    coupon_one: 'Gutschein',
    coupon_other: 'Gutscheine',
    lowcase: {
      coupon_one: 'gutschein',
      coupon_other: 'gutscheine'
    },
    replace_up_to: 'Bis zu ',
    close: 'Schließen',
    logo_alt: 'TopCashback-Logo',
    logo_badge_alt: 'TopCashback-Browser-Erweiterung öffnen',
    loading: 'Lädt',
    copy: 'Kopieren',
    settings: 'Einstellungen',
    account: 'Konto'
  },
  content: {
    components: {
      secondNotifier: {
        description: 'Verpasse nicht die Chance auf {{ reward }} Cashback. Jetzt unten aktivieren.',
        button_title: 'Cashback aktivieren'
      },
      caa: {
        description_with_vouchers: 'Verpasse nicht die Chance auf {{ reward }} Cashback und füge die Gutscheincodes hinzu.',
        button_title_with_vouchers: 'Cashback und Gutscheincodes aktivieren',
        button_title_with_vouchers_mobile: 'Cashback und Gutscheincodes aktivieren',
        notification_title: 'Wir haben einen {{ n_coupons }} {{ coupons }} gefunden',
        apply_button: '{{ coupons }} anwenden',
        title: 'Wir testen derzeit automatisch {{ n_coupons }} {{ coupons }}verwenden',
        progress_info: 'Prüfung des Codes {{ process_index }} von {{ n_coupons }}',
        success: 'Hurra- Es hat geklappt',
        success_text: 'Der Code <b>{{ best_coupon }}</b> wurde erfolgreich aktiviert. ',
        saved: 'Du hast gespart',
        savings: '€{{ amount }}',
        also_get: 'Du kannst außerdem {{ cashback_reward }} {{ cashback }}.',
        reward: '{{ cashback_reward }} {{ cashback }}',
        continue_shopping: 'Weiter',
        fail: 'Sorry!',
        fail_text: 'Derzeit sind keine Codes verfügbar',
        fail_text_with_cashback: 'Wir konnten keine Codes finden, die sich auf Deinen Einkauf anwenden lassen, aber Du kannst trotzdem <b>{{ cashback_reward }} {{ cashback }}</b>.',
        leave_review: 'Gefällt Dir TopCashback? <a href="{{ url }}" target="_blank" style="color: inherit;">Dann hinterlasse uns eine Bewertung</a>'
      },
      consentsNotification: {
        title: 'Die Zustimmung ist für die Nutzung der TopCashback-App erforderlich.',
        checkbox_mandatory: {
          title: 'Durch das Aktivieren der Erweiterung erklärst Du Dich damit einverstanden, dass wir die folgenden obligatorischen Daten erfassen und speichern:',
          description: ['Eindeutige Kennungen (ID der Browser-Erweiterung und zugehörige TopCashback-Mitglieder-IDs), eine Liste der besuchten Websites (URLs), die für Cashback in Frage kommen, erstes und letztes Datum/Uhrzeit der Verwendung der Browser-Erweiterung, IP-Adresse, Gerätetyp und Browsertyp.', 'Diese Daten sind für das Funktionieren der Erweiterung und das Sammeln von Cashback erforderlich. Wenn Du nicht willst, dass diese Daten erfasst werden, deinstalliere bitte die Browser-Erweiterung.']
        },
        checkbox_analytical: {
          title: 'Bitte gib an, ob wir zusätzliche leistungsbezogene/analytische Daten erheben dürfen:',
          description: ['Dazu gehören Daten des Nutzungsverhaltens und performative Metriken, die uns helfen, zu verstehen, wie Nutzer mit unserer Browser-Erweiterung interagieren, damit wir sie weiterentwickeln und verbessern können.']
        },
        privacy_text: 'Waitrose',
        privacy_link: 'Datenschutzerklärung',
        change_settings: 'Die Einstellungen können jederzeit in der Erweiterung geändert werden.',
        accept: 'Zustimmen',
        uninstall: 'Deinstallieren'
      },
      ga_slider: {
        title: 'TopCashback Browser Erweiterung - Einwiligung zu analytischen Cookies',
        description: ['Um uns dabei zu helfen unsere Browser-Erweiterung zu verbessern, würden wir gerne Cookies aktivieren.', 'Diese erlauben uns einzusehen, wie viele Mitglieder die Erweiterung benutzen und wie diese mit der Anwendung interagieren.'],
        description2: 'Die Informationen, welche die Cookies sammeln sind vollständig anonymisiert und können nicht auf bestimmte Nutzer zurückgeführt werden.',
        privacy: 'TopCashback Browser Erweiterung Datenschutzbestimmungen',
        accept: 'Akzeptieren',
        decline: 'Ablehnen'
      },
      notification: {
        promoted_text: 'Cashback',
        title_activated: '{{ promotedText }} wurde aktiviert',
        button_title: 'Sammle {{ reward }} {{ promotedText }}',
        badge_title: '{{ reward }} {{ promotedText }}',
        title_not_logged_in: 'Sammle {{ reward }} {{ promotedText }}',
        button_title_not_logged_in: 'Registrieren / Anmelden',
        button_title_activating: 'Aktivieren',
        more_details: 'Worauf kannst Du Cashback erhalten?',
        dont_show_again1: 'Nicht mehr bei diesem Händler anzeigen. Du kannst Deine Auswahl jederzeit in den ',
        dont_show_again2: 'Einstellungen',
        dont_show_again3: ' ändern.',
        bacs_required: 'SEPA-Angaben erforderlich',
        activate_now: 'Jetzt aktivieren'
      },
      reactivation: {
        button_title: 'Reaktivieren',
        title: 'Cashback reaktivieren',
        description: 'Wir haben festgestellt, dass Du vor Kurzem eine Website besucht hast, die eventuell Dein Cashback deaktiviert haben könnte.'
      },
      store_terms: {
        expanded_sections: {
          title: 'Ausschlüsse & Bedingungen',
          terms: 'Bedingungen',
          exclusions: 'Ausschlüsse'
        },
        text: {
          part1: 'Ausnahmen können gelten. Bitte informiere Dich stets auf der ',
          link: 'TopCashback Seite',
          part2: ' über die aktuellen Bedingungen und Cashbackraten.'
        },
        more_details: 'Weitere Informationen findest Du auf der Webseite'
      },
      serp: {
        cashback: 'Cashback'
      },
      tooltip: {
        "new": 'Neu',
        scroll_me: 'Scrollen zum Minimieren'
      }
    }
  },
  shared_components: {
    rating: {
      title: 'Wie gefällt Dir TopCashback?'
    },
    tiers: {
      category_title: 'Alle Einkäufe',
      show_more: 'Mehr anzeigen'
    },
    offer: {
      get_deal: 'Angebot nutzen',
      use: '{{ coupon }} benutzen',
      copied: 'Kopiert'
    }
  },
  popup: {
    app: {
      store_title: 'Händler Angebote',
      offers_title: 'Beste Angebote',
      recent_title: 'Kürzlich besucht',
      timer: 'Schließt in {{ time }} Sekunden'
    },
    components: {
      store_tab: {
        cashback_terms: '{{ cashback }} Bedingungen',
        best_deals: 'Die besten Angebote',
        no_deals: 'Keine verfügbaren Angebote',
        best_deals_vouchers_one: '& {{ count }} Gutscheine',
        best_deals_vouchers_other: '& {{ count }} Gutscheine'
      },
      store_terms: {
        expanded_sections: {
          title: 'Ausschlüsse & Bedingungen',
          terms: 'Bedingungen',
          exclusions: 'Ausschlüsse'
        },
        text: {
          part1: 'Ausnahmen können gelten. Bitte informiere Dich stets auf der ',
          link: 'TopCashback Seite',
          part2: ' über die aktuellen Bedingungen und Cashbackraten.'
        },
        more_details_simple: 'Mehr Details',
        important: 'Wichtiger Hinweis: ',
        exclusions: 'Ausnahmen: '
      },
      account: {
        title: 'Konto'
      },
      recent_tab: {
        no_recently_visited: 'Es gibt keine kürzlich besuchten Shops, die angezeigt werden können'
      },
      footer: {
        my_account: 'Mein Konto',
        settings: 'Einstellungen'
      },
      header: {
        cashback: 'Cashback',
        title: '{{ promotedText }} wurde aktiviert',
        bacs_required: 'SEPA Informationen werden benötigt',
        activate: 'Sammle {{ reward }} {{ promotedText }}'
      },
      offerTab: {
        best_deals: 'Beste Angebote'
      },
      refer: {
        title: 'Kopiere diesen Link und sende ihn zu Deinen Freunden',
        link: 'www.beispiel.de',
        copy: 'Kopieren',
        or: 'oder'
      },
      search: {
        search: 'Händler/Markennamen suchen',
        cashback: 'Cashback',
        no_matches: 'Keine passenden Geschäfte gefunden'
      },
      welcome: {
        button: 'Registrieren / Anmelden',
        private_mode: 'Bitte versuche es erneut in einem nicht-privaten Fenster',
        text: 'Melde Dich an oder Regisriere Dich, um die TopCashback-Browser-Erweiterung zu nutzen.'
      },
      consents: {
        text: 'Bitte lies Dir für die Nutzung der TopCashback-Browser-Erweiterung unsere Richtlinien zur Datenerfassung durch.',
        button: 'Weiter'
      }
    }
  },
  settings: {
    components: {
      app: {
        setting_title: 'Einstellungen für die TopCashback Browser Erweiterung',
        checkbox_text: 'Datenermittlung erlauben. Das Teilen Deiner Nutzungsdaten der TopCashback Browser Erweiterung hilft uns dabei, unsere Produkte und unseren Service zu verbessern.',
        muted_merchants: 'Stummgeschaltene Händler',
        muted_merchants_remove: 'entfernen',
        rate: 'TopCashback Browser Extension bewerten',
        privacy_cookie_policy: 'Lese unsere <a href="{{ privacyPolicy }}" target="_blank" class="privacy_policy">Datenschutzerklärung</a> & <a href="{{ cookiePolicy }}" target="_blank" class="cookie_policy">Cookie-Richtlinie</a>',
        new_checkbox_text: 'Bitte gib an, ob wir zusätzliche leistungsbezogene/analytische Daten erheben dürfen:',
        description_text: 'Dazu gehören Daten des Nutzungsverhaltens und performative Metriken, die uns helfen, zu verstehen, wie Nutzer mit unserer Browser-Erweiterung interagieren, damit wir sie weiterentwickeln und verbessern können.'
      }
    }
  },
  filters: {
    expire: {
      today: 'Läuft heute ab',
      tomorrow: 'Läuft morgen ab',
      days_left: 'Noch {{ number_days }} Tage gültig',
      no_date: 'Zeitlich unbegrenztes Angebot',
      msg: 'Bis {{-date }} gültig'
    }
  }
};
/* harmony default export */ const de_DE = (localedeDe);
;// CONCATENATED MODULE: ./source/locales/fr-FR.js
var localeFrFR = {
  general: {
    multiple_type: 'Tous les autres {{merchantName}} <span style=""font-weight: normal;"">Cashback</span>',
    single_type: '{{merchantName}} <span style=""font-weight: normal;"">Cashback</span>',
    category_type: '{{ category }} <span style=""font-weight: normal;"">Cashback</span>',
    cashback: 'Cashback',
    coupon_one: 'Coupon',
    coupon_other: 'Coupons',
    lowcase: {
      coupon_one: 'coupon',
      coupon_other: 'coupons'
    },
    replace_up_to: 'Jusqu\'à ',
    close: 'Fermer',
    logo_alt: 'Logo TopCashback',
    logo_badge_alt: 'Ouvrir l\'extension de navigateur TopCashback',
    loading: 'Chargement',
    copy: 'Copier',
    settings: 'Paramètres',
    account: 'Compte'
  },
  content: {
    components: {
      secondNotifier: {
        description: 'Ne manquez pas le cashback de {{ reward }} , activez ci-dessous.',
        button_title: 'Activer le cashback'
      },
      caa: {
        description_with_vouchers: 'Ne manquez pas le cashback de {{ reward }} et appliquez les bons.',
        button_title_with_vouchers: 'Activer cashback & coupons',
        button_title_with_vouchers_mobile: 'Gagner du cashback & des réductions',
        notification_title: 'Nous avons trouvé {{ n_coupons }} {{ coupons }}',
        apply_button: 'Appliquer {{ coupons }}',
        title: 'Nous testons automatiquement {{ n_coupons }} {{ coupons }}',
        progress_info: 'Test du code {{ process_index }} sur {{ n_coupons }}',
        success: 'Succès',
        success_text: 'Nous avons appliqué avec succès le code <b>{{ best_coupon }}</b> à votre panier. ',
        saved: 'Vous avez économisé',
        savings: '€{{ amount }}',
        also_get: 'Vous recevrez également {{ cashback_reward }} {{ cashback }}.',
        reward: '{{ cashback_reward }} {{ cashback }}',
        continue_shopping: 'Continuer',
        fail: 'Désolé !',
        fail_text: 'Aucun code valide pour le moment',
        fail_text_with_cashback: 'Nous n’avons trouvé aucun code valide, mais vous recevrez tout de même <b>{{ cashback_reward }} {{ cashback }}</b>.',
        leave_review: 'Vous aimez utiliser TopCashback ? <a href="{{ url }}" target="_blank" style="color: inherit;">Laissez-nous un avis.</a>'
      },
      consentsNotification: {
        title: 'Consentement requis pour utiliser l\'extension de navigateur TopCashback',
        checkbox_mandatory: {
          title: 'En activant notre extension, vous acceptez que nous puissions collecter et stocker les données obligatoires suivantes :',
          description: ['Identifiants uniques (ID de l\'extension de navigateur et identifiants de membres TopCashback associés), liste des sites web visités (URL) éligibles au cashback, date/heure de première et dernière utilisation de l\'extension, adresse IP, type d\'appareil et type de navigateur. Ces données sont nécessaires au bon fonctionnement de l\'extension et à l\'attribution du cashback.', 'Si vous ne souhaitez pas que ces données soient collectées, veuillez désinstaller notre extension de navigateur.']
        },
        checkbox_analytical: {
          title: 'Veuillez indiquer si nous pouvons collecter des données supplémentaires à des fins de performance / d\'analyse :',
          description: ['Cela inclut des données telles que les interactions et les mesures de performance, qui nous permettent de comprendre comment les utilisateurs interagissent avec notre extension et nous aident à la développer et l\'améliorer.']
        },
        privacy_text: 'En savoir plus sur notre',
        privacy_link: 'Politique de confidentialité',
        change_settings: 'Vous pouvez modifier les paramètres à tout moment via les Paramètres de l\'extension.',
        accept: 'Accepter',
        uninstall: 'Désinstaller'
      },
      ga_slider: {
        title: 'Consentement de l\'extension TopCashback Browser à l\'utilisation des cookies analytiques',
        description: ['Pour nous aider à améliorer notre extension, nous souhaiterions installer', 'des cookies nous permettant de reconnaître et de compter le nombre', 'd\'utilisateurs et de voir comment les utilisateurs interagissent avec notre extension lorsqu\'ils l\'utilisent.'],
        description2: 'Les cookies recueillent des informations de manière anonyme afin de ne pas identifier directement quiconque.',
        privacy: 'Politique de confidentialité de l\'extension TopCashback Browser',
        accept: 'Accepter',
        decline: 'Refuser'
      },
      notification: {
        promoted_text: 'Cashback',
        title_activated: '{{ reward }} {{ promotedText }} activé',
        button_title: 'Obtenez {{ reward }} {{ promotedText }}',
        badge_title: '{{ reward }} {{ promotedText }}',
        title_not_logged_in: 'Obtenez {{ reward }} {{ promotedText }}',
        button_title_not_logged_in: 'Inscription / Connexion',
        button_title_activating: 'Activer',
        more_details: 'Sur quoi pouvez-vous obtenir du cashback ?',
        dont_show_again1: 'Ne plus afficher ce marchand. Vous pouvez modifier ce paramètre dans les ',
        dont_show_again2: 'réglages',
        dont_show_again3: '.',
        becs_required: 'Détails SEPA requis',
        activate_now: 'Activer maintenant'
      },
      reactivation: {
        button_title: 'Ré-activer',
        title: 'Ré-activer le Cashback',
        description: 'Nous avons détecté que vous avez récemment visité un site qui pourrait désactiver votre cashback.'
      },
      store_terms: {
        expanded_sections: {
          title: 'Exclusions et conditions',
          terms: 'Conditions',
          exclusions: 'Exclusions'
        },
        text: {
          part1: 'Des exclusions peuvent s\'appliquer. Veuillez toujours vérifier le ',
          link: 'site TopCashback',
          part2: ' pour les derniers termes et taux de cashback.'
        },
        more_details: 'Voir le site pour plus de détails'
      },
      serp: {
        cashback: 'Cashback'
      },
      tooltip: {
        "new": 'Nouveau',
        scroll_me: 'Faire défiler pour réduire le popup de l\'extension'
      }
    }
  },
  shared_components: {
    rating: {
      title: 'Que pensez-vous de Topcashback ?'
    },
    tiers: {
      category_title: 'Tous les achats',
      show_more: 'Afficher plus'
    },
    offer: {
      get_deal: 'Profiter de l\'offre',
      use: 'Utiliser {{ coupon }}',
      copied: 'Copié'
    }
  },
  popup: {
    app: {
      store_title: 'Offres Magasin',
      offers_title: 'Meilleures Offres',
      recent_title: 'Récemment consultés',
      timer: 'Fermeture dans {{ time }}s'
    },
    components: {
      store_tab: {
        cashback_terms: 'Conditions du {{ cashback }}',
        best_deals: 'Meilleures Offres',
        best_deals_vouchers_one: '& {{ count }} code promo',
        best_deals_vouchers_other: '& {{ count }} codes promo',
        no_deals: 'Aucune offre disponible'
      },
      store_terms: {
        expanded_sections: {
          title: 'Exclusions et conditions',
          terms: 'Conditions',
          exclusions: 'Exclusions'
        },
        text: {
          part1: 'Des exclusions peuvent s\'appliquer. Veuillez toujours vérifier le ',
          link: 'site TopCashback',
          part2: ' pour les dernières conditions et taux de cashback.'
        },
        more_details_simple: 'Plus de Détails',
        important: 'Note Importante : ',
        exclusions: 'Exclusions : '
      },
      account: {
        title: 'Compte'
      },
      recent_tab: {
        no_recently_visited: 'Aucun magasin visité récemment'
      },
      footer: {
        my_account: 'Mon Compte',
        tell_friend: 'Parrainage',
        settings: 'Paramètres'
      },
      header: {
        cashback: 'Cashback',
        title: '{{ promotedText }} activé',
        becs_required: 'Détails SEPA requis',
        activate: 'Obtenez {{ reward }} {{ promotedText }}'
      },
      offerTab: {
        best_deals: 'Meilleures Offres'
      },
      refer: {
        title: 'Copiez ce lien et envoyez-le à vos amis',
        link: 'www.example.com',
        copy: 'Copier',
        or: 'ou'
      },
      search: {
        search: 'Rechercher marchand / nom de boutique',
        cashback: 'Cashback',
        no_matches: 'Aucun magasin correspondant'
      },
      welcome: {
        button: 'Inscription / Connexion',
        private_mode: 'Veuillez réessayer dans une fenêtre non privée',
        text: 'Pour utiliser l’extension de navigateur TopCashback, inscrivez-vous ou connectez-vous à votre compte.'
      },
      consents: {
        text: 'Pour utiliser l’extension de navigateur TopCashback, veuillez consulter notre politique de collecte de données.',
        button: 'Continuer'
      }
    }
  },
  settings: {
    components: {
      app: {
        muted_merchants: 'Marchands maqués',
        muted_merchants_remove: 'Enlever',
        rate: 'Notez l\'extension TopCashBack',
        privacy_cookie_policy: 'Voir notre <a href="{{ privacyPolicy }}" target="_blank" class="privacy_policy">politique de confidentialité</a> et <a href="{{ cookiePolicy }}" target="_blank" class="cookie_policy">politique en matière de cookies</a>',
        setting_title: 'Paramètres de l\'extension TopCashback',
        checkbox_text: 'Autoriser la collecte de données. Partager vos données d\'utilisation avec extension TopCashback nous aide à améliorer nos produits et services.',
        new_checkbox_text: 'Veuillez indiquer si nous pouvons collecter des données supplémentaires à des fins de performance / d\'analyse :',
        description_text: 'Cela inclut des données telles que les interactions et les mesures de performance, qui nous permettent de comprendre comment les utilisateurs interagissent avec notre extension et nous aident à la développer et l\'améliorer.'
      }
    }
  },
  filters: {
    expire: {
      today: 'Expire Aujourd\'hui',
      tomorrow: 'Expire Demain',
      days_left: '{{ number_days }} jours restants',
      no_date: 'Pas de Date d\'Expiration',
      msg: 'Exp. {{-date }}'
    }
  }
};
/* harmony default export */ const fr_FR = (localeFrFR);
;// CONCATENATED MODULE: ./source/locales/en-AU.js
var localeEnAu = {
  general: {
    multiple_type: 'All Other {{merchantName}} <span style="font-weight: normal;">Cashback </span>',
    single_type: '{{merchantName}} <span style="font-weight: normal;">Cashback </span>',
    category_type: '{{ category }} <span style="font-weight: normal;">Cashback</span>',
    cashback: 'Cashback',
    coupon_one: 'Coupon',
    coupon_other: 'Coupons',
    lowcase: {
      coupon_one: 'coupon',
      coupon_other: 'coupons'
    },
    replace_up_to: 'Up to ',
    close: 'Close',
    logo_alt: 'TopCashback Logo',
    logo_badge_alt: 'Open the Topcashback Browser Extension',
    loading: 'Loading',
    copy: 'Copy',
    settings: 'Settings',
    account: 'Account'
  },
  content: {
    components: {
      secondNotifier: {
        description: 'Don\'t miss out on {{ reward }} cashback, activate below.',
        button_title: 'Activate cashback'
      },
      caa: {
        description_with_vouchers: 'Don\'t miss out on {{ reward }} cashback, and apply coupons.',
        button_title_with_vouchers: 'Activate cashback & coupons',
        button_title_with_vouchers_mobile: 'Get cashback & coupons',
        notification_title: 'We found {{ n_coupons }} {{ coupons }}',
        apply_button: 'Apply {{ coupons }}',
        title: 'We are automatically testing {{ n_coupons }} {{ coupons }}',
        progress_info: 'Testing code {{ process_index }} of {{ n_coupons }}',
        success: 'Success',
        success_text: 'Success! We’ve applied <b>{{ best_coupon }}</b> to your cart. ',
        saved: 'You have saved',
        savings: '$ {{ amount }}',
        also_get: 'You will also receive {{ cashback_reward }} {{ cashback }}.',
        reward: '{{ cashback_reward }} {{ cashback }}',
        continue_shopping: 'Continue',
        fail: 'Sorry!',
        fail_text: 'No applicable codes right now',
        fail_text_with_cashback: 'We couldn’t find any applicable codes, but you’ll still receive <b>{{ cashback_reward }} {{ cashback }}</b>.',
        leave_review: 'Like using TopCashback? <a href="{{ url }}" target="_blank" style="color: inherit;">Leave us a review</a>'
      },
      consentsNotification: {
        title: 'Opt-in required to use the TopCashback Browser Extension',
        checkbox_mandatory: {
          title: 'By enabling our extension you\'re accepting that we collect and store the following personal data:',
          description: ['Unique personal identifiers, a list of visited websites (URLs) which are eligible for cashback, first and last date/time the browser extension was used, IP Address, device type and browser type.', 'This data is required for the extension to function and to provide cashback to you, if you do not want this data to be collected please uninstall our browser extension.']
        },
        checkbox_analytical: {
          title: 'Please select if we can collect additional performance / analytical data:',
          description: ['This includes data such as interactions and performance metrics, which allows us to understand how users interact with our browser extension and help us develop and improve it.']
        },
        privacy_text: 'Read more about our',
        privacy_link: 'Privacy Policy',
        change_settings: 'You can change settings anytime via the Settings within the extension.',
        accept: 'Agree',
        uninstall: 'Uninstall'
      },
      ga_slider: {
        title: 'TopCashback Browser Extension consent to analytical cookies',
        description: ['To help us improve our extension we would like to set', 'cookies which allows us to recognise and count the number', 'of users and to see how users interact with our extension whilst they are using it.'],
        description2: 'The cookies collect information anonymously so that it does not directly identify anyone.',
        privacy: 'TopCashback Browser Extension Privacy Policy',
        accept: 'Accept',
        decline: 'Decline'
      },
      notification: {
        promoted_text: 'Cashback',
        title_activated: '{{ reward }} {{ promotedText }} active',
        button_title: 'Get {{ reward }} {{ promotedText }}',
        badge_title: '{{ reward }} {{ promotedText }}',
        title_not_logged_in: 'Get {{ reward }} {{ promotedText }}',
        button_title_not_logged_in: 'Join/ Log in',
        button_title_activating: 'Activating',
        more_details: 'What can you earn cashback on?',
        dont_show_again1: 'Don‘t show on this retailer again. You can change this in the ',
        dont_show_again2: 'settings',
        dont_show_again3: '.',
        bacs_required: 'BECS details required',
        activate_now: 'Activate Now'
      },
      reactivation: {
        button_title: 'Re-activate',
        title: 'Re-activate Cashback',
        description: 'We have detected that you have visited a site recently, which may disable your cashback.'
      },
      store_terms: {
        expanded_sections: {
          title: 'Exclusions & Terms',
          terms: 'Terms',
          exclusions: 'Exclusions'
        },
        text: {
          part1: 'Exclusions may apply. Please always check the ',
          link: 'TopCashback site',
          part2: ' for the latest terms and cashback rates.'
        },
        more_details: 'View website for more details'
      },
      serp: {
        cashback: 'Cashback'
      },
      tooltip: {
        "new": 'New',
        scroll_me: 'Scroll to minimise!'
      }
    }
  },
  shared_components: {
    rating: {
      title: 'How are you liking Topcashback?'
    },
    tiers: {
      category_title: 'All purchases',
      show_more: 'Show more'
    },
    offer: {
      get_deal: 'Get Deal',
      use: 'Use {{ coupon }}',
      copied: 'Copied'
    }
  },
  popup: {
    app: {
      store_title: 'Store Deals',
      offers_title: 'Best Deals',
      recent_title: 'Recently Viewed',
      timer: 'Closes in {{ time }}s'
    },
    components: {
      store_tab: {
        cashback_terms: '{{ cashback }} Terms',
        best_deals: 'Best Deals',
        best_deals_vouchers_one: '& {{ count }} coupon',
        best_deals_vouchers_other: '& {{ count }} coupons',
        no_deals: 'No available deals'
      },
      store_terms: {
        expanded_sections: {
          title: 'Exclusions & Terms',
          terms: 'Terms',
          exclusions: 'Exclusions'
        },
        text: {
          part1: 'Exclusions may apply. Please always check the ',
          link: 'TopCashback site',
          part2: ' for the latest terms and cashback rates.'
        },
        more_details_simple: 'More Details',
        important: 'Important Note: ',
        exclusions: 'Exclusions: '
      },
      account: {
        title: 'Account'
      },
      recent_tab: {
        no_recently_visited: 'No recently visited stores to display'
      },
      footer: {
        my_account: 'My Account',
        settings: 'Settings'
      },
      header: {
        cashback: 'Cashback',
        title: '{{ promotedText }} activated',
        bacs_required: 'BECS details required',
        activate: 'Get {{ reward }} {{ promotedText }}'
      },
      offerTab: {
        best_deals: 'Best Deals'
      },
      refer: {
        title: 'Copy this link and send it to your friends',
        link: 'www.example.com',
        copy: 'Copy',
        or: 'or'
      },
      search: {
        search: 'Search for Retailer/ Store Name',
        cashback: 'Cashback',
        no_matches: 'No matching stores'
      },
      welcome: {
        button: 'Join/ Log in',
        private_mode: 'Please try again on a non private window',
        text: 'To use the TopCashback Browser Extension, simply join or log in to your account.'
      },
      consents: {
        text: 'To use the TopCashback Browser Extension, please review our data collection policy.',
        button: 'Continue'
      }
    }
  },
  settings: {
    components: {
      app: {
        muted_merchants: 'Muted Merchants',
        muted_merchants_remove: 'remove',
        rate: 'Rate Topcashback Extension',
        privacy_cookie_policy: 'See our <a href="{{ privacyPolicy }}" target="_blank" class="privacy_policy">Privacy Policy</a> & <a href="{{ cookiePolicy }}" target="_blank" class="cookie_policy">Cookie Policy</a>',
        setting_title: 'Settings for the TopCashback Extension',
        checkbox_text: 'Allow data collection. Sharing your usage data with TopCashback Extension helps us improve our products and services.',
        new_checkbox_text: 'Please select if we can collect additional performance / analytical data:',
        description_text: 'This includes data such as interaction and performance metrics, which allow us to understand how users interact with our browser extension and help us develop and improve it.'
      }
    }
  },
  filters: {
    expire: {
      today: 'Expires Today',
      tomorrow: 'Expires Tomorrow',
      days_left: '{{ number_days }} days left',
      no_date: 'No Expiry Date',
      msg: 'Exp. {{-date }}'
    }
  }
};
/* harmony default export */ const en_AU = (localeEnAu);
;// CONCATENATED MODULE: ./source/i18n.js







esm_i18next/* default.init */.Ay.init({
  // debug: true,
  fallbackLng: 'en-UK',
  resources: {
    'en-UK': {
      translation: en_UK
    },
    'en-US': {
      translation: en_US
    },
    'de-DE': {
      translation: de_DE
    },
    'fr-FR': {
      translation: fr_FR
    },
    'en-AU': {
      translation: en_AU
    }
  }
});
esm_i18next/* default.changeLanguage */.Ay.changeLanguage(LANGUAGE);
/* harmony default export */ const i18n = (esm_i18next/* default */.Ay);
;// CONCATENATED MODULE: ./source/utils.js


function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

/* eslint-disable */


var promiseWrapper = function promiseWrapper(parent, method) {
  return function () {
    var newArguments = Array.prototype.slice.call(arguments);
    return new Promise(function (resolve) {
      newArguments.push(function () {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        }
        return resolve.apply(void 0, arguments);
      });
      parent[method].apply(parent, newArguments);
    });
  };
};
/* eslint-enable */

var getTabs = promiseWrapper(chrome.tabs, 'query');
var removeTabs = promiseWrapper(chrome.tabs, 'remove');
var getCurrentWindow = promiseWrapper(chrome.windows, 'getCurrent');
var getCookies = promiseWrapper(chrome.cookies, 'getAll');
var utils_getStorageData = promiseWrapper(chrome.storage.local, 'get');
var utils_setStorageData = promiseWrapper(chrome.storage.local, 'set');
var createTab = promiseWrapper(chrome.tabs, 'create');
var updateTab = promiseWrapper(chrome.tabs, 'update');
var asyncTimeout = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(t) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (r) {
            return setTimeout(function () {
              return r(true);
            }, t);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function asyncTimeout(_x) {
    return _ref.apply(this, arguments);
  };
}()));

/* eslint-disable */
var uuidv4 = function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
/* eslint-enable */

var copyToClipBoard = function copyToClipBoard(string) {
  var clipboardData = window.clipboardData || navigator.clipboard;
  clipboardData.writeText(string);
};
var getBrowser = function getBrowser() {
  if (navigator.userAgent.indexOf('Chrome') !== -1) {
    if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) !== -1) {
      return 'opera';
    }
    if (navigator.userAgent.indexOf('Edg') !== -1) {
      return 'edge';
    }
    return 'chrome';
  }
  if (navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'firefox';
  }
  if (navigator.userAgent.indexOf('Safari') !== -1) {
    return 'safari';
  }
  return null;
};
var utils_getActiveTab = function getActiveTab() {
  return getTabs({
    active: true,
    currentWindow: true
  }).then(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
      tab = _ref3[0];
    return tab;
  });
};
var getActiveTabServiceWorker = function getActiveTabServiceWorker() {
  return getTabs({
    active: true
  }).then(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 1),
      tab = _ref5[0];
    return tab;
  });
};
var getDevice = function getDevice() {
  var regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  if (regex.test(navigator.userAgent)) {
    return 'mobile';
  }
  return 'desktop';
};
var getUserTCBTBAuth = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
    var cookies, tcbtbauth, previousTcbtbauth;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getCookies({
            url: HOME_PAGE
          });
        case 2:
          cookies = _context2.sent;
          tcbtbauth = cookies.find(function (_ref7) {
            var name = _ref7.name;
            return name === 'TCBTBAuth';
          });
          if (!(BROWSER === 'safari' && !(tcbtbauth !== null && tcbtbauth !== void 0 && tcbtbauth.value))) {
            _context2.next = 9;
            break;
          }
          _context2.next = 7;
          return utils_getStorageData('tcbtbauth');
        case 7:
          previousTcbtbauth = _context2.sent;
          return _context2.abrupt("return", previousTcbtbauth === null || previousTcbtbauth === void 0 ? void 0 : previousTcbtbauth.tcbtbauth);
        case 9:
          return _context2.abrupt("return", tcbtbauth === null || tcbtbauth === void 0 ? void 0 : tcbtbauth.value);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getUserTCBTBAuth() {
    return _ref6.apply(this, arguments);
  };
}()));
var checkUserLogin = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
    var loginCookie;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getUserTCBTBAuth();
        case 2:
          loginCookie = _context3.sent;
          return _context3.abrupt("return", !!loginCookie);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function checkUserLogin() {
    return _ref8.apply(this, arguments);
  };
}()));
var checkYahoo = function checkYahoo(href) {
  var url = href;
  if (/^(https?:\/\/)?(r|(..))search\.yahoo\.com\//i.test(href)) {
    // hack for YAHOO
    url = decodeURIComponent(decodeURIComponent(href));
    if (href.indexOf('[^_]url=http') > 0) {
      url = encodeURI(href.match(/[^_]url=([^&]+)/).pop());
    } else if (href.indexOf('?q=http') > 0) {
      url = encodeURI(href.match(/\?q=([^&]+)/).pop());
    }
  }
  return url;
};
var checkPrivateMode = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
    var browser, tab;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          browser = getBrowser();
          if (!(browser === 'safari')) {
            _context4.next = 6;
            break;
          }
          _context4.next = 4;
          return utils_getActiveTab();
        case 4:
          tab = _context4.sent;
          return _context4.abrupt("return", tab.incognito);
        case 6:
          return _context4.abrupt("return", false);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function checkPrivateMode() {
    return _ref9.apply(this, arguments);
  };
}()));
function sliceByValues(arr, count) {
  var result = [];
  var collected = 0;

  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  var _iterator = _createForOfIteratorHelper(arr),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if (collected >= count) break;
      if (collected + item.rates.length <= count) {
        collected += item.rates.length;
        result.push({
          name: item.name,
          rates: item.rates
        });
      } else {
        result.push({
          name: item.name,
          rates: item.rates.slice(0, count - collected)
        });
        collected = count;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
// this function is used to decompressed a gzip response that has been previously compressed on the server
// compressedResponse -> is the response from fetch
// new Response(decompressedStream).blob() -> returns the decompressed blob
// JSON.parse(await blob.text() -> converts the blob to json that is the required data type for this scenarion
function decompressGzipBody(_x2) {
  return _decompressGzipBody.apply(this, arguments);
}
function _decompressGzipBody() {
  _decompressGzipBody = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee5(compressedResponse) {
    var ds, decompressedStream, blob, data;
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          // eslint-disable-next-line no-undef
          ds = new DecompressionStream('gzip');
          decompressedStream = compressedResponse.body.pipeThrough(ds);
          _context5.next = 4;
          return new Response(decompressedStream).blob();
        case 4:
          blob = _context5.sent;
          _context5.t0 = JSON;
          _context5.next = 8;
          return blob.text();
        case 8:
          _context5.t1 = _context5.sent;
          data = _context5.t0.parse.call(_context5.t0, _context5.t1);
          return _context5.abrupt("return", data);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _decompressGzipBody.apply(this, arguments);
}
function openNewTabCashback(flagRedirect, isRequiresBacs, userBacs) {
  if (!flagRedirect) {
    return false;
  }
  if (isRequiresBacs && !userBacs) {
    return false;
  }
  return true;
}
function consoleLog() {
  return _consoleLog.apply(this, arguments);
}
function _consoleLog() {
  _consoleLog = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
    var debug,
      _len,
      args,
      _key,
      body,
      _args6 = arguments;
    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return utils_getStorageData('debug');
        case 2:
          debug = _context6.sent;
          if ( false || debug !== null && debug !== void 0 && debug.debug) {
            for (_len = _args6.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args6[_key];
            }
            body = [new Date().toUTCString()].concat(args); // eslint-disable-next-line no-console
            console.log.apply(this, body);
          }
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6, this);
  }));
  return _consoleLog.apply(this, arguments);
}
function promotedText(merchant) {
  var result = i18next.t('content.components.notification.promoted_text');
  if (!AVIOS_MERCHANTS.length) {
    return result;
  }
  return AVIOS_MERCHANTS.some(function (m) {
    return merchant.domain.includes(m);
  }) ? 'avios' : result;
}

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/rating.vue?vue&type=script&lang=js


/* harmony default export */ const ratingvue_type_script_lang_js = ({
  data: function data() {
    return {
      maxRating: 5,
      finalRating: 0,
      currentRating: 0
    };
  },
  methods: {
    rate: function rate() {
      window.open(STORE_URLS[getBrowser()], '_blank');
    }
  }
});
;// CONCATENATED MODULE: ./source/shared_components/rating.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/rating.vue?vue&type=style&index=0&id=1a60eb82&lang=less&scoped=true
var ratingvue_type_style_index_0_id_1a60eb82_lang_less_scoped_true = __webpack_require__(2941);
;// CONCATENATED MODULE: ./source/shared_components/rating.vue?vue&type=style&index=0&id=1a60eb82&lang=less&scoped=true

;// CONCATENATED MODULE: ./source/shared_components/rating.vue




;


const rating_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(ratingvue_type_script_lang_js, [['render',ratingvue_type_template_id_1a60eb82_scoped_true_render],['__scopeId',"data-v-1a60eb82"]])

/* harmony default export */ const rating = (rating_exports_);
;// CONCATENATED MODULE: ./source/brodcastChannel.js
/* eslint-disable import/no-mutable-exports */
// import { BROWSER } from './constants';

var broadcastChannel = new BroadcastChannel('service_popup_channel');

// if (BROWSER === 'safari') {
//   broadcastChannel = new BroadcastChannel('service_popup_channel');
// } else {
//   // chrome firefox edge
//   broadcastChannel = new BroadcastChannel('service_popup_channel');
// }

/* harmony default export */ const brodcastChannel = (broadcastChannel);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/settings/components/app.vue?vue&type=script&lang=js











/* harmony default export */ const appvue_type_script_lang_js = ({
  components: {
    Checkbox: components_checkbox,
    Rating: rating
  },
  data: function data() {
    return {
      name: chrome.runtime.getManifest().name,
      mutedMerchants: [],
      settings: null,
      merchants: null,
      dataReady: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
      var _yield$getStorageData, _yield$getStorageData2, mutedMerchants, _yield$getStorageData3, settings, merchantsData;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return utils_getStorageData('mutedMerchants');
          case 2:
            _yield$getStorageData = _context.sent;
            _yield$getStorageData2 = _yield$getStorageData.mutedMerchants;
            mutedMerchants = _yield$getStorageData2 === void 0 ? [] : _yield$getStorageData2;
            _context.next = 7;
            return utils_getStorageData('settings');
          case 7:
            _yield$getStorageData3 = _context.sent;
            settings = _yield$getStorageData3.settings;
            _this.settings = settings;
            _context.next = 12;
            return utils_getStorageData('merchants.data');
          case 12:
            merchantsData = _context.sent;
            _this.merchants = merchantsData['merchants.data'];
            _this.setMutedMerchantsByIds(mutedMerchants);
            _this.dataReady = true;
            _this.setDebug();
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    rate: function rate() {
      return STORE_URLS[getBrowser()];
    },
    cookiePolicy: function cookiePolicy() {
      return COOKIE_POLICY;
    },
    privacyPolicy: function privacyPolicy() {
      return PRIVACY_POLICY;
    },
    terms: function terms() {
      return purify_es/* default */.A.sanitize(i18n.t('settings.components.app.privacy_cookie_policy', {
        privacyPolicy: PRIVACY_POLICY,
        cookiePolicy: COOKIE_POLICY
      }));
    }
  },
  methods: {
    setDebug: function setDebug() {
      if (window.location.href.includes('DEBUG=true')) {
        utils_setStorageData({
          debug: true
        });
      }
      if (window.location.href.includes('DEBUG=false')) {
        utils_setStorageData({
          debug: false
        });
      }
    },
    update: function update(data) {
      // const { app } = chrome.extension.getBackgroundPage();
      // app.saveSettings(data);
      sendContentMessage({
        action: 'saveSettings',
        data: {
          data: data
        }
      });
    },
    setMutedMerchantsByIds: function setMutedMerchantsByIds(ids) {
      var _this2 = this;
      this.mutedMerchants = ids.map(function (muted) {
        return _this2.merchants.find(function (el) {
          return el.id === muted;
        });
      });
    },
    remove: function remove(index) {
      brodcastChannel.postMessage({
        type: 'analytics',
        dataGA: {
          ec: 'Settings',
          ea: 'Show Again',
          el: this.mutedMerchants[index].name
        }
      });
      sendContentMessage({
        action: 'updateMerchantState',
        data: {
          id: this.mutedMerchants[index].id,
          state: {
            showNotification: true
          }
        }
      });
      this.mutedMerchants.splice(index, 1);
      utils_setStorageData({
        mutedMerchants: (0,toConsumableArray/* default */.A)(this.mutedMerchants.map(function (el) {
          return el.id;
        }))
      });
    },
    getAllClicks: function getAllClicks(event) {
      var _this3 = this;
      var gaClassList = ['rate', 'privacy_policy', 'cookie_policy'];
      if (event.target.tagName === 'A') {
        gaClassList.forEach(function (className) {
          if (event.target.classList.contains(className)) {
            _this3.sendToAnalytics(className);
          }
        });
      }
    },
    sendToAnalytics: function sendToAnalytics(eventName) {
      brodcastChannel.postMessage({
        type: 'analytics',
        dataGA: {
          ec: 'Settings',
          ea: eventName
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./source/settings/components/app.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/settings/components/app.vue?vue&type=style&index=0&id=a128e82a&lang=less
var appvue_type_style_index_0_id_a128e82a_lang_less = __webpack_require__(7851);
;// CONCATENATED MODULE: ./source/settings/components/app.vue?vue&type=style&index=0&id=a128e82a&lang=less

;// CONCATENATED MODULE: ./source/settings/components/app.vue




;


const app_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const app = (app_exports_);
;// CONCATENATED MODULE: ./source/settings/app.js
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved





// eslint-disable-next-line no-underscore-dangle
var app_app = (0,vue_esm_bundler/* createApp */.Ef)(app);
app_app.config.globalProperties.$i18next = i18n;
app_app.mount('#app');
window.settings = app_app;

/***/ }),

/***/ 6082:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8973:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 366:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7851:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6082);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("c9347fcc", content, true, {});

/***/ }),

/***/ 265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8973);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("219a3280", content, true, {});

/***/ }),

/***/ 2941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("6739e67e", content, true, {});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 472;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			472: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkTopCashback"] = self["webpackChunkTopCashback"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(5558)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map