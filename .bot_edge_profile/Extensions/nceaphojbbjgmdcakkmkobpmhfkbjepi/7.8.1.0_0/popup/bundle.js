/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9914:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/@vue/compat/dist/vue.esm-bundler.js
var vue_esm_bundler = __webpack_require__(9347);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var slicedToArray = __webpack_require__(3453);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
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
      var _ref3 = (0,slicedToArray/* default */.A)(_ref2, 1),
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js + 1 modules
var vuex_esm_bundler = __webpack_require__(9305);
;// CONCATENATED MODULE: ./source/constants/general.js
/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-cycle

var IS_TEST_VERSION = false;
var REGION = "us";
var IS_CONFIG_TESTING = false;
var BROWSER = "chrome";
var VERSION = chrome.runtime.getManifest().version;
var CAA_VERSION = '2.3.0';
if (BROWSER === 'safari') {
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
var NO_CODE_PATTERNS = ['N/A', 'n/a', 'no code needed', 'No code required', 'No code required.', 'no code required', 'no code required.', 'NO_CODE_NEEDED'];
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
var HOME_PAGE = "https://".concat(IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN);
var CDN_HOME = "https://".concat(IS_TEST_VERSION ? CDN_TEST_DOMAIN : CDN_DOMAIN);
var APP_ACTIVATION_PATTERN = '=[^&=?]+TcbApp';
// const ACTIVATION_PATTERNS = [`${IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN}/redirect.aspx`, APP_ACTIVATION_PATTERN];
var ACTIVATION_PATTERNS = ["".concat(IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN, "/redirect.aspx"), "".concat(IS_TEST_VERSION ? TEST_DOMAIN : DOMAIN, "/earncashback.aspx")];
var AFTER_INSTALL_URL = "".concat(HOME_PAGE, "/toolbar/install/?ihr=browserextension");
var AFTER_INSTALL_URL_MOBILE = "".concat(HOME_PAGE, "/toolbar/enabledmobile/?ihr=browserextension");
var AFTER_UNINSTALL_URL = "".concat(HOME_PAGE, "/toolbar/uninstall/");
var LOGIN_PAGE_URL = "".concat(HOME_PAGE, "/connect?action=login");
var JOIN_PAGE_URL = "".concat(HOME_PAGE, "/nologin/");
var ACCOUNT_PAGE_URL = "".concat(HOME_PAGE, "/account/overview/");
var TELL_A_FRIEND_PAGE_URL = "".concat(HOME_PAGE, "/account/tell-a-friend");
var HELP_URL = "".concat(HOME_PAGE, "/newhelp/");
var PRIVACY_POLICY = "".concat(HOME_PAGE, "/dyn/browser-ex-privacy/");
var COOKIE_POLICY = "".concat(HOME_PAGE, "/dyn/browser-ex-cookie-policy/");
var PERMISSIONS = "".concat(HOME_PAGE, "/toolbar/permissions");
var PERMISSIONS_MOBILE = "".concat(HOME_PAGE, "/toolbar/mobilepermissions");
var PAYMENT_DETAILS_URL = "".concat(HOME_PAGE, "/account/paymentdetails");
var TOOLBARFEED = "toolbarfeed".concat(IS_TEST_VERSION ? '/qa' : '/production', "/slimmerchants");
var MERCHANTS_URL = "".concat(CDN_HOME, "/").concat(TOOLBARFEED, ".json");
var MERCHANTS_URL_PLUS = "".concat(CDN_HOME, "/").concat(TOOLBARFEED, ".json");
if (REGION === 'uk') {
  MERCHANTS_URL = "".concat(CDN_HOME, "/").concat(TOOLBARFEED, "/classic.json");
  MERCHANTS_URL_PLUS = "".concat(CDN_HOME, "/").concat(TOOLBARFEED, "/plus.json");
}
if (BROWSER === 'firefox') {
  PRIVACY_POLICY = 'https://addons.mozilla.org/en-GB/firefox/addon/topcashback-browser-extension/privacy/';
}
if (REGION === 'us') {
  COOKIE_POLICY = "".concat(HOME_PAGE, "/cookie-policy/");
  PAYMENT_DETAILS_URL = 'not a valid url'; // because bacs isn't and us feature
  MERCHANTS_URL = "".concat(CDN_HOME, "/toolbarfeed/production-slimfeed.json");
}
if (REGION === 'de') {
  AFTER_INSTALL_URL = "".concat(HOME_PAGE, "/toolbar/installieren/?ihr=browserextension");
  AFTER_UNINSTALL_URL = "".concat(HOME_PAGE, "/toolbar/deinstallieren/");
  LOGIN_PAGE_URL = "".concat(HOME_PAGE, "/keine-anmeldung/");
  JOIN_PAGE_URL = "".concat(HOME_PAGE, "/keine-anmeldung/");
  ACCOUNT_PAGE_URL = "".concat(HOME_PAGE, "/konto/uebersicht/");
  TELL_A_FRIEND_PAGE_URL = "".concat(HOME_PAGE, "/konto/freunde-werben-freunde/");
  HELP_URL = "".concat(HOME_PAGE, "/hilfe/");
  PRIVACY_POLICY = "".concat(HOME_PAGE, "/dyn/browser-erweiterung-datenschutz/");
  COOKIE_POLICY = "".concat(HOME_PAGE, "/cookie-richtlinie/");
  PAYMENT_DETAILS_URL = "".concat(HOME_PAGE, "/konto/auszahlungsinformationen/"); // feature about bacs need to ask
}
if (REGION === 'au') {
  PAYMENT_DETAILS_URL = 'not a valid url'; // Need to see in the future what to use here.
}
if (REGION === 'fr') {
  AFTER_INSTALL_URL = "".concat(HOME_PAGE, "/barre-doutils/installer/?ihr=browserextension");
  AFTER_UNINSTALL_URL = "".concat(HOME_PAGE, "/barre-doutils/desinstaller");
  LOGIN_PAGE_URL = "".concat(HOME_PAGE, "/se-connecter/");
  JOIN_PAGE_URL = "".concat(HOME_PAGE, "/aucune-connexion/");
  PRIVACY_POLICY = "".concat(HOME_PAGE, "/dyn/politique-confidentialite-extension/");
  COOKIE_POLICY = "".concat(HOME_PAGE, "/dyn/politique-des-cookies-extension-navigateur/");
  ACCOUNT_PAGE_URL = "".concat(HOME_PAGE, "/mon-compte/tableau-de-bord/");
  PAYMENT_DETAILS_URL = 'not a valid url'; // Need to see in the future what to use here.
}
var API_VERSION = 'v3.0';
if (BROWSER === 'safari') {
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
var TOP_OFFERS_URL = "".concat(HOME_PAGE, "/toolbar/api/").concat(API_VERSION, "/feed/homepage/");
var USER_INFO_URL = "".concat(HOME_PAGE, "/toolbar/api/v3.0/user");
var FEATURE_FLAGS_URL = "".concat(HOME_PAGE, "/toolbar/api/v3.0/features");
var CONFIGS_URL = "".concat(HOME_PAGE, "/toolbar/api/").concat(API_VERSION, "/couponautoapplier/config");
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
if (BROWSER === 'safari') {
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
var merchants_AVIOS_MERCHANTS = ['tkmaxx.com'];
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
    var _ref3 = (0,slicedToArray/* default */.A)(_ref2, 1),
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
var getUserTCBTBAuth = /*#__PURE__*/function () {
  var _ref6 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
    var cookies, tcbtbauth, previousTcbtbauth;
    return regenerator_default().wrap(function _callee2$(_context2) {
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
}();
var checkUserLogin = /*#__PURE__*/function () {
  var _ref8 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3() {
    var loginCookie;
    return regenerator_default().wrap(function _callee3$(_context3) {
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
}();
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
var checkPrivateMode = /*#__PURE__*/function () {
  var _ref9 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4() {
    var browser, tab;
    return regenerator_default().wrap(function _callee4$(_context4) {
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
}();
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

;// CONCATENATED MODULE: ./source/popup/store.js






// eslint-disable-next-line import/prefer-default-export
var store = (0,vuex_esm_bundler/* createStore */.y$)({
  state: {
    status: null,
    privateMode: false,
    user: null,
    merchant: null,
    merchants: null,
    currentTab: null,
    settings: null,
    offers: null,
    flagRedirect: false,
    recentStores: [],
    topOffers: [],
    banners: [],
    device: null,
    showConsents: false
  },
  mutations: {
    set: function set(state, data) {
      Object.assign(state, data);
    }
  },
  actions: {
    init: function init(_ref) {
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var commit, privateMode, _yield$getActiveTab, url, _yield$sendContentMes, device, deviceModel, _yield$sendContentMes2, user, merchants, banners, topOffers, merchant, recentStores, flagRedirect, showConsents, flagTermsAndExclusions, currentTab, loggedIn;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return checkPrivateMode();
            case 3:
              privateMode = _context.sent;
              _context.next = 6;
              return getActiveTab();
            case 6:
              _yield$getActiveTab = _context.sent;
              url = _yield$getActiveTab.url;
              _context.next = 10;
              return sendContentMessage({
                action: 'getDeviceInfo'
              });
            case 10:
              _yield$sendContentMes = _context.sent;
              device = _yield$sendContentMes.device;
              deviceModel = _yield$sendContentMes.deviceModel;
              commit('set', {
                device: device,
                deviceModel: deviceModel
              });
              _context.next = 16;
              return sendContentMessage({
                action: 'getStorePopupInfo',
                data: {
                  device: device,
                  url: url
                }
              });
            case 16:
              _yield$sendContentMes2 = _context.sent;
              user = _yield$sendContentMes2.user;
              merchants = _yield$sendContentMes2.merchants;
              banners = _yield$sendContentMes2.banners;
              topOffers = _yield$sendContentMes2.topOffers;
              merchant = _yield$sendContentMes2.merchant;
              recentStores = _yield$sendContentMes2.recentStores;
              flagRedirect = _yield$sendContentMes2.flagRedirect;
              showConsents = _yield$sendContentMes2.showConsents;
              flagTermsAndExclusions = _yield$sendContentMes2.flagTermsAndExclusions;
              currentTab = merchant ? 'store' : 'offers';
              _context.next = 29;
              return checkUserLogin();
            case 29:
              loggedIn = _context.sent;
              commit('set', {
                privateMode: privateMode,
                topOffers: topOffers,
                banners: banners,
                merchants: merchants,
                merchant: merchant,
                user: user,
                currentTab: currentTab,
                loggedIn: loggedIn,
                recentStores: recentStores,
                flagRedirect: flagRedirect,
                flagTermsAndExclusions: flagTermsAndExclusions,
                showConsents: showConsents
              });
              commit('set', {
                status: 'ready'
              });
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/app.vue?vue&type=template&id=93f98cfa

var _hoisted_1 = {
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)(['tcb-extension'])
};
var _hoisted_2 = {
  "class": "popup"
};
var _hoisted_3 = {
  key: 0,
  "class": "popup__content"
};
var _hoisted_4 = {
  "class": "popup__header"
};
var _hoisted_5 = ["aria-label"];
var _hoisted_6 = ["aria-label"];
var _hoisted_7 = {
  key: 2,
  "class": "popup__content"
};
var _hoisted_8 = {
  "class": "popup__header"
};
var _hoisted_9 = ["aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Welcome = (0,vue_esm_bundler/* resolveComponent */.g2)("Welcome");
  var _component_HeaderMenu = (0,vue_esm_bundler/* resolveComponent */.g2)("HeaderMenu");
  var _component_Consents = (0,vue_esm_bundler/* resolveComponent */.g2)("Consents");
  var _component_Navigation = (0,vue_esm_bundler/* resolveComponent */.g2)("Navigation");
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [(0,vue_esm_bundler/* createVNode */.bF)(vue_esm_bundler/* Transition */.eB, {
    name: "fade-transition"
  }, {
    "default": (0,vue_esm_bundler/* withCtx */.k6)(function () {
      return [_ctx.privateMode ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", _hoisted_3, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
        "class": "popup__logo",
        "aria-label": _ctx.$i18next.t('general.logo_alt')
      }, null, 8, _hoisted_5)]), (0,vue_esm_bundler/* createVNode */.bF)(_component_Welcome, {
        privateMode: _ctx.privateMode
      }, null, 8, ["privateMode"])])) : _ctx.status !== 'ready' ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
        key: 1,
        "class": "loader",
        "aria-label": _ctx.$i18next.t('general.loading')
      }, null, 8, _hoisted_6)) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", _hoisted_7, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
        "class": "popup__logo",
        "aria-label": _ctx.$i18next.t('general.logo_alt'),
        tabindex: "0",
        role: "link",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $options.openPage($data.homePage);
        }),
        onKeydown: _cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
          return $options.openPage($data.homePage);
        }, ["enter"]))
      }, null, 40, _hoisted_9), _ctx.status === 'ready' ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_HeaderMenu, {
        key: 0,
        loggedIn: _ctx.loggedIn
      }, null, 8, ["loggedIn"])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)]), _ctx.status === 'ready' && _ctx.showConsents ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_Consents, {
        key: 0
      })) : _ctx.status === 'ready' && _ctx.loggedIn ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, {
        key: 1
      }, [(0,vue_esm_bundler/* createVNode */.bF)(_component_Navigation, {
        tabs: $options.tabs
      }, null, 8, ["tabs"]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
        ref: "container",
        "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["container", $options.scrollbarClass])
      }, [(0,vue_esm_bundler/* createVNode */.bF)(vue_esm_bundler/* Transition */.eB, {
        name: "tab-slide--transition-".concat($data.transitionSide),
        mode: "out-in"
      }, {
        "default": (0,vue_esm_bundler/* withCtx */.k6)(function () {
          return [_ctx.status === 'ready' ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)((0,vue_esm_bundler/* resolveDynamicComponent */.$y)("".concat(_ctx.currentTab, "Tab")), {
            key: _ctx.currentTab,
            id: "tab-".concat(_ctx.currentTab),
            role: "tabpanel"
          }, null, 8, ["id"])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)];
        }),
        _: 1
      }, 8, ["name"])], 2)], 64)) : _ctx.status === 'ready' ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_Welcome, {
        key: 2
      })) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)]))];
    }),
    _: 1
  })])]);
}
;// CONCATENATED MODULE: ./source/popup/app.vue?vue&type=template&id=93f98cfa

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/simplebar-vue/dist/simplebar.min.css
var simplebar_min = __webpack_require__(7133);
// EXTERNAL MODULE: ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css
var perfect_scrollbar = __webpack_require__(7697);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/headerMenu.vue?vue&type=template&id=a438d888

var headerMenuvue_type_template_id_a438d888_hoisted_1 = ["aria-label"];
var headerMenuvue_type_template_id_a438d888_hoisted_2 = ["aria-label"];
function headerMenuvue_type_template_id_a438d888_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(['header-menu', !$props.loggedIn && 'header-menu--notLoggedIn'])
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "header__item",
    "data-icon": "settings",
    tabindex: "0",
    role: "link",
    onKeydown: _cache[0] || (_cache[0] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.openOptions();
    }, ["enter"])),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.openOptions();
    }),
    "aria-label": _ctx.$i18next.t('general.settings')
  }, null, 40, headerMenuvue_type_template_id_a438d888_hoisted_1), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "header__item",
    "data-icon": "account",
    tabindex: "0",
    role: "link",
    onKeydown: _cache[2] || (_cache[2] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.openPage('account');
    }, ["enter"])),
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.openPage('account');
    }),
    "aria-label": _ctx.$i18next.t('general.account')
  }, null, 40, headerMenuvue_type_template_id_a438d888_hoisted_2)], 2);
}
;// CONCATENATED MODULE: ./source/popup/components/headerMenu.vue?vue&type=template&id=a438d888

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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/headerMenu.vue?vue&type=script&lang=js


/* harmony default export */ const headerMenuvue_type_script_lang_js = ({
  props: {
    loggedIn: Boolean
  },
  data: function data() {
    return {
      ACCOUNT_PAGE_URL: ACCOUNT_PAGE_URL,
      TELL_A_FRIEND_PAGE_URL: TELL_A_FRIEND_PAGE_URL
    };
  },
  methods: {
    openPage: function openPage(name) {
      var urls = {
        account: ACCOUNT_PAGE_URL
      };
      brodcastChannel.postMessage({
        type: 'analytics',
        dataGA: {
          ec: 'Popup',
          ea: 'Open URL',
          el: urls[name]
        }
      });
      chrome.tabs.create({
        url: urls[name]
      });
      if (!this.isAutomationTest()) window.close();
    },
    isAutomationTest: function isAutomationTest() {
      return window.location.href.includes('automation_testing=true') && IS_TEST_VERSION;
    },
    openOptions: function openOptions() {
      chrome.runtime.openOptionsPage();
      brodcastChannel.postMessage({
        type: 'analytics',
        dataGA: {
          ec: 'Popup',
          ea: 'Open Settings'
        }
      });
      if (!this.isAutomationTest()) window.close();
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/headerMenu.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/headerMenu.vue?vue&type=style&index=0&id=a438d888&lang=less
var headerMenuvue_type_style_index_0_id_a438d888_lang_less = __webpack_require__(8553);
;// CONCATENATED MODULE: ./source/popup/components/headerMenu.vue?vue&type=style&index=0&id=a438d888&lang=less

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(6262);
;// CONCATENATED MODULE: ./source/popup/components/headerMenu.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(headerMenuvue_type_script_lang_js, [['render',headerMenuvue_type_template_id_a438d888_render]])

/* harmony default export */ const headerMenu = (__exports__);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/welcome.vue?vue&type=template&id=8a9feee0

var welcomevue_type_template_id_8a9feee0_hoisted_1 = {
  "class": "welcome"
};
var welcomevue_type_template_id_8a9feee0_hoisted_2 = {
  "class": "welcome__text"
};
var welcomevue_type_template_id_8a9feee0_hoisted_3 = {
  key: 0,
  "class": "welcome__button--private"
};
function welcomevue_type_template_id_8a9feee0_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", welcomevue_type_template_id_8a9feee0_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", welcomevue_type_template_id_8a9feee0_hoisted_2, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.welcome.text')), 1), $props.privateMode ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", welcomevue_type_template_id_8a9feee0_hoisted_3, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.welcome.private_mode')), 1)) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    key: 1,
    "class": "cta welcome__button",
    tabindex: "0",
    role: "button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.openPage();
    }),
    onKeydown: [_cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.openPage();
    }, ["enter"])), _cache[2] || (_cache[2] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function ($event) {
      return $options.openPage();
    }, ["prevent"]), ["space"]))]
  }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.welcome.button')), 33))]);
}
;// CONCATENATED MODULE: ./source/popup/components/welcome.vue?vue&type=template&id=8a9feee0

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/welcome.vue?vue&type=script&lang=js


/* harmony default export */ const welcomevue_type_script_lang_js = ({
  props: ['privateMode'],
  data: function data() {
    return {
      joinUrl: JOIN_PAGE_URL
    };
  },
  methods: {
    openPage: function openPage() {
      brodcastChannel.postMessage({
        type: 'analytics',
        dataGA: {
          ec: 'Popup',
          ea: 'Open URL',
          el: this.joinUrl
        }
      });
      chrome.tabs.create({
        url: this.joinUrl
      });
      if (!this.isAutomationTest()) window.close();
    },
    isAutomationTest: function isAutomationTest() {
      return window.location.href.includes('automation_testing=true') && IS_TEST_VERSION;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/welcome.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./source/popup/components/welcome.vue




;
const welcome_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(welcomevue_type_script_lang_js, [['render',welcomevue_type_template_id_8a9feee0_render]])

/* harmony default export */ const welcome = (welcome_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/navigation.vue?vue&type=template&id=4ba04c9a

var navigationvue_type_template_id_4ba04c9a_hoisted_1 = {
  "class": "navigation",
  role: "tablist"
};
var navigationvue_type_template_id_4ba04c9a_hoisted_2 = ["onClick", "onKeydown", "aria-selected", "aria-controls", "id"];
function navigationvue_type_template_id_4ba04c9a_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", navigationvue_type_template_id_4ba04c9a_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "tab-highlight",
    style: (0,vue_esm_bundler/* normalizeStyle */.Tr)($options.highlightStyle)
  }, null, 4), ((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($props.tabs, function (text, name) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
      key: name,
      "class": (0,vue_esm_bundler/* normalizeClass */.C4)(['navigation__item', "navigation__item_".concat(name), name === $options.currentTab && 'navigation__item_active']),
      tabindex: "0",
      role: "tab",
      onClick: function onClick($event) {
        return $options.openTab(name);
      },
      onKeydown: [(0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
        return $options.openTab(name);
      }, ["enter"]), (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function ($event) {
        return $options.openTab(name);
      }, ["prevent"]), ["space"])],
      "aria-selected": name === $options.currentTab ? 'true' : 'false',
      "aria-controls": "tab-".concat(name),
      id: "tab-nav-".concat(name)
    }, (0,vue_esm_bundler/* toDisplayString */.v_)(text), 43, navigationvue_type_template_id_4ba04c9a_hoisted_2);
  }), 128))]);
}
;// CONCATENATED MODULE: ./source/popup/components/navigation.vue?vue&type=template&id=4ba04c9a

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/navigation.vue?vue&type=script&lang=js

/* harmony default export */ const navigationvue_type_script_lang_js = ({
  props: ['tabs'],
  data: function data() {
    return {
      icons: {}
    };
  },
  computed: {
    storeStatus: function storeStatus() {
      return this.$store.state.status;
    },
    currentTab: function currentTab() {
      return this.$store.state.currentTab;
    },
    currentTabIndex: function currentTabIndex() {
      return Object.keys(this.tabs).indexOf(this.currentTab);
    },
    highlightStyle: function highlightStyle() {
      // width is fraction of container
      var width = 100 / Object.keys(this.tabs).length;
      // to move N slots, translate by N * 100% of the highlight's own width
      // (translateX() % is relative to the element's width)
      return {
        width: "calc(".concat(width, "% - 8px)"),
        transform: "translateX(calc(".concat(this.currentTabIndex * 100, "% + 4px + (").concat(this.currentTabIndex, " * 8px)))")
      };
    }
  },
  methods: {
    openTab: function openTab(name) {
      if (name === this.currentTab) return;
      brodcastChannel.postMessage({
        type: 'analytics',
        dataGA: {
          ec: 'Popup',
          ea: 'Open Tab',
          el: name
        }
      });
      this.$store.commit('set', {
        currentTab: name
      });
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/navigation.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/navigation.vue?vue&type=style&index=0&id=4ba04c9a&lang=less
var navigationvue_type_style_index_0_id_4ba04c9a_lang_less = __webpack_require__(6507);
;// CONCATENATED MODULE: ./source/popup/components/navigation.vue?vue&type=style&index=0&id=4ba04c9a&lang=less

;// CONCATENATED MODULE: ./source/popup/components/navigation.vue




;


const navigation_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(navigationvue_type_script_lang_js, [['render',navigationvue_type_template_id_4ba04c9a_render]])

/* harmony default export */ const navigation = (navigation_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/consents.vue?vue&type=template&id=02c0ab99

var consentsvue_type_template_id_02c0ab99_hoisted_1 = {
  "class": "welcome"
};
var consentsvue_type_template_id_02c0ab99_hoisted_2 = {
  "class": "welcome__header"
};
var consentsvue_type_template_id_02c0ab99_hoisted_3 = ["aria-label"];
var consentsvue_type_template_id_02c0ab99_hoisted_4 = {
  "class": "welcome__text"
};
function consentsvue_type_template_id_02c0ab99_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", consentsvue_type_template_id_02c0ab99_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", consentsvue_type_template_id_02c0ab99_hoisted_2, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "welcome__tcb-logo",
    "aria-label": _ctx.$i18next.t('general.logo_alt')
  }, null, 8, consentsvue_type_template_id_02c0ab99_hoisted_3), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", consentsvue_type_template_id_02c0ab99_hoisted_4, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.consents.text')), 1)]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "cta welcome__button",
    tabindex: "0",
    role: "button",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.reloadPage();
    }),
    onKeydown: [_cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.reloadPage();
    }, ["enter"])), _cache[2] || (_cache[2] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function ($event) {
      return $options.reloadPage();
    }, ["prevent"]), ["space"]))]
  }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.consents.button')), 33)]);
}
;// CONCATENATED MODULE: ./source/popup/components/consents.vue?vue&type=template&id=02c0ab99

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/consents.vue?vue&type=script&lang=js




/* harmony default export */ const consentsvue_type_script_lang_js = ({
  data: function data() {
    return {
      joinUrl: JOIN_PAGE_URL
    };
  },
  methods: {
    reloadPage: function reloadPage() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var queryOptions, _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              queryOptions = {
                active: true,
                lastFocusedWindow: true
              };
              _context.next = 3;
              return chrome.tabs.query(queryOptions);
            case 3:
              _yield$chrome$tabs$qu = _context.sent;
              _yield$chrome$tabs$qu2 = (0,slicedToArray/* default */.A)(_yield$chrome$tabs$qu, 1);
              tab = _yield$chrome$tabs$qu2[0];
              chrome.tabs.reload(tab.id);
              if (!_this.isAutomationTest()) window.close();
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    isAutomationTest: function isAutomationTest() {
      return window.location.href.includes('automation_testing=true') && IS_TEST_VERSION;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/consents.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./source/popup/components/consents.vue




;
const consents_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(consentsvue_type_script_lang_js, [['render',consentsvue_type_template_id_02c0ab99_render]])

/* harmony default export */ const consents = (consents_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/offersTab/offersTab.vue?vue&type=template&id=141b49d3

var offersTabvue_type_template_id_141b49d3_hoisted_1 = {
  "class": "tab"
};
var offersTabvue_type_template_id_141b49d3_hoisted_2 = {
  "class": "offers-wrapper"
};
var offersTabvue_type_template_id_141b49d3_hoisted_3 = {
  ref: "bannerSlide",
  "class": "offers-slider",
  "slides-per-view": 1,
  autoplay: {
    delay: 5000
  },
  "space-between": 10,
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  }
};
var offersTabvue_type_template_id_141b49d3_hoisted_4 = {
  "class": "offer-slide"
};
var offersTabvue_type_template_id_141b49d3_hoisted_5 = {
  key: 0,
  "class": "slide-description"
};
var offersTabvue_type_template_id_141b49d3_hoisted_6 = {
  key: 0,
  "class": "stores-list"
};
function offersTabvue_type_template_id_141b49d3_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Search = (0,vue_esm_bundler/* resolveComponent */.g2)("Search");
  var _component_offer_banner = (0,vue_esm_bundler/* resolveComponent */.g2)("offer-banner");
  var _component_storeListItem = (0,vue_esm_bundler/* resolveComponent */.g2)("storeListItem");
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", offersTabvue_type_template_id_141b49d3_hoisted_1, [(0,vue_esm_bundler/* createVNode */.bF)(_component_Search, {
    merchants: $options.merchants
  }, null, 8, ["merchants"]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", offersTabvue_type_template_id_141b49d3_hoisted_2, [(0,vue_esm_bundler/* createElementVNode */.Lk)("swiper-container", offersTabvue_type_template_id_141b49d3_hoisted_3, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($options.banners, function (offer, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("swiper-slide", {
      key: index
    }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", offersTabvue_type_template_id_141b49d3_hoisted_4, [(0,vue_esm_bundler/* createVNode */.bF)(_component_offer_banner, {
      offer: offer
    }, null, 8, ["offer"]), offer.dynamicText ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", offersTabvue_type_template_id_141b49d3_hoisted_5, (0,vue_esm_bundler/* toDisplayString */.v_)(offer.dynamicText), 1)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)])]);
  }), 128))], 512)]), $options.topOffers.length ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", offersTabvue_type_template_id_141b49d3_hoisted_6, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($options.topOffers, function (offer, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_storeListItem, {
      key: index,
      merchant: offer,
      infoType: 'offer'
    }, null, 8, ["merchant"]);
  }), 128))])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)]);
}
;// CONCATENATED MODULE: ./source/popup/components/offersTab/offersTab.vue?vue&type=template&id=141b49d3

// EXTERNAL MODULE: ./node_modules/swiper/swiper-element-bundle.mjs + 32 modules
var swiper_element_bundle = __webpack_require__(4246);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeListItem.vue?vue&type=template&id=758be884

var storeListItemvue_type_template_id_758be884_hoisted_1 = {
  "class": "store__info"
};
var storeListItemvue_type_template_id_758be884_hoisted_2 = {
  "class": "store__name"
};
var storeListItemvue_type_template_id_758be884_hoisted_3 = {
  "class": "store__reward"
};
var storeListItemvue_type_template_id_758be884_hoisted_4 = ["innerHTML"];
var storeListItemvue_type_template_id_758be884_hoisted_5 = ["src"];
function storeListItemvue_type_template_id_758be884_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(['store']),
    tabindex: "0",
    role: "link",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.activate && $options.activate.apply($options, arguments);
    }),
    onKeydown: _cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)(function () {
      return $options.activate && $options.activate.apply($options, arguments);
    }, ["enter"])),
    onMouseover: _cache[2] || (_cache[2] = function ($event) {
      return $data.hover = true;
    }),
    onMouseleave: _cache[3] || (_cache[3] = function ($event) {
      return $data.hover = false;
    })
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", storeListItemvue_type_template_id_758be884_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", storeListItemvue_type_template_id_758be884_hoisted_2, (0,vue_esm_bundler/* toDisplayString */.v_)(!$props.merchant.name ? $options.getMerchant.name : $props.merchant.name), 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("p", storeListItemvue_type_template_id_758be884_hoisted_3, [(0,vue_esm_bundler/* createTextVNode */.eW)((0,vue_esm_bundler/* toDisplayString */.v_)($props.merchant.reward) + " " + (0,vue_esm_bundler/* toDisplayString */.v_)(this.infoType != 'offer' ? _ctx.$i18next.t('general.cashback') : '') + " ", 1), $options.getMerchant.couponsAmount > 0 ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("span", {
    key: 0,
    innerHTML: $options.topDealsCoupons
  }, null, 8, storeListItemvue_type_template_id_758be884_hoisted_4)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)])]), (0,vue_esm_bundler/* createElementVNode */.Lk)("img", {
    "class": "store__img",
    src: $props.merchant.logo,
    alt: ""
  }, null, 8, storeListItemvue_type_template_id_758be884_hoisted_5)], 32);
}
;// CONCATENATED MODULE: ./source/popup/components/storeListItem.vue?vue&type=template&id=758be884

// EXTERNAL MODULE: ./node_modules/dompurify/dist/purify.es.mjs
var purify_es = __webpack_require__(9418);
;// CONCATENATED MODULE: ./source/filters/reward.js


// eslint-disable-next-line func-names
/* harmony default export */ function reward(str) {
  var includesDecimals = /\d/.test(str);
  return includesDecimals ? "".concat(str, " ").concat(i18n.t('general.cashback')) : str;
}
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeListItem.vue?vue&type=script&lang=js








/* harmony default export */ const storeListItemvue_type_script_lang_js = ({
  props: ['merchant', 'infoType'],
  filters: {
    reward: reward
  },
  data: function data() {
    return {
      hover: false
    };
  },
  computed: {
    getMerchant: function getMerchant() {
      var id = new URLSearchParams(this.merchant.activationUrl).get('mpid');
      var merchant = this.$store.state.merchants.find(function (s) {
        return "".concat(s.id) === id;
      });
      return merchant;
    },
    topDealsCoupons: function topDealsCoupons() {
      return purify_es/* default */.A.sanitize(i18n.t('popup.components.store_tab.best_deals_vouchers', {
        count: this.getMerchant.couponsAmount
      }));
    }
  },
  methods: {
    activate: function activate() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var activationUrl, tab;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              activationUrl = _this.merchant.activationUrl;
              _context.next = 3;
              return getActiveTab();
            case 3:
              tab = _context.sent;
              brodcastChannel.postMessage({
                type: 'analytics',
                dataGA: {
                  ec: 'Popup',
                  ea: _this.infoType === 'offer' ? 'Best Deal Activation' : 'Recently Visited Store Activation',
                  el: _this.merchant.name
                }
              });
              brodcastChannel.postMessage({
                type: 'activate',
                dataActivate: {
                  activationUrl: activationUrl
                },
                sender: {
                  tab: tab
                }
              });
              if (!_this.isAutomationTest()) window.close();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    isAutomationTest: function isAutomationTest() {
      return window.location.href.includes('automation_testing=true') && IS_TEST_VERSION;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/storeListItem.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeListItem.vue?vue&type=style&index=0&id=758be884&lang=less
var storeListItemvue_type_style_index_0_id_758be884_lang_less = __webpack_require__(552);
;// CONCATENATED MODULE: ./source/popup/components/storeListItem.vue?vue&type=style&index=0&id=758be884&lang=less

;// CONCATENATED MODULE: ./source/popup/components/storeListItem.vue




;


const storeListItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(storeListItemvue_type_script_lang_js, [['render',storeListItemvue_type_template_id_758be884_render]])

/* harmony default export */ const storeListItem = (storeListItem_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/search.vue?vue&type=template&id=03743d98

var searchvue_type_template_id_03743d98_hoisted_1 = ["placeholder"];
var searchvue_type_template_id_03743d98_hoisted_2 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)("search__icon"),
  alt: ""
}, null, -1);
var searchvue_type_template_id_03743d98_hoisted_3 = {
  key: 0,
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)("search__results")
};
var searchvue_type_template_id_03743d98_hoisted_4 = ["onMouseenter", "onFocus"];
var searchvue_type_template_id_03743d98_hoisted_5 = ["innerHTML"];
var searchvue_type_template_id_03743d98_hoisted_6 = {
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)("search__cashback")
};
var searchvue_type_template_id_03743d98_hoisted_7 = {
  key: 1,
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)("search__results")
};
var searchvue_type_template_id_03743d98_hoisted_8 = {
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)("search__result")
};
var searchvue_type_template_id_03743d98_hoisted_9 = {
  "class": "bold"
};
function searchvue_type_template_id_03743d98_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(['search', $data.query && 'search_with-results'])
  }, [(0,vue_esm_bundler/* withDirectives */.bo)((0,vue_esm_bundler/* createElementVNode */.Lk)("input", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["search__input", $data.query && 'search_with-results', $data.isMouseFocus && 'search--mouse-focus']),
    type: "text",
    placeholder: $data.placeholder,
    tabindex: "0",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.query = $event;
    }),
    onKeydown: [_cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function () {
      return $options.select && $options.select.apply($options, arguments);
    }, ["prevent"]), ["arrow-up"])), _cache[2] || (_cache[2] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function () {
      return $options.select && $options.select.apply($options, arguments);
    }, ["prevent"]), ["arrow-down"])), _cache[3] || (_cache[3] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.openResult($data.results[$data.selectIndex]);
    }, ["enter"])), _cache[4] || (_cache[4] = (0,vue_esm_bundler/* withKeys */.jR)(function () {
      return $options.handleKeyboardFocus && $options.handleKeyboardFocus.apply($options, arguments);
    }, ["tab"]))],
    onKeyup: _cache[5] || (_cache[5] = (0,vue_esm_bundler/* withKeys */.jR)(function () {
      return $options.handleKeyboardFocus && $options.handleKeyboardFocus.apply($options, arguments);
    }, ["tab"])),
    onFocus: _cache[6] || (_cache[6] = function () {
      return $options.handleMouseFocus && $options.handleMouseFocus.apply($options, arguments);
    }),
    onMousedown: _cache[7] || (_cache[7] = function () {
      return $options.handleMouseFocus && $options.handleMouseFocus.apply($options, arguments);
    }),
    onInput: _cache[8] || (_cache[8] = function ($event) {
      return $data.query && $options.find($data.query.toLowerCase());
    })
  }, null, 42, searchvue_type_template_id_03743d98_hoisted_1), [[vue_esm_bundler/* vModelText */.Jo, $data.query]]), searchvue_type_template_id_03743d98_hoisted_2, (0,vue_esm_bundler/* createVNode */.bF)(vue_esm_bundler/* Transition */.eB, {
    name: "fade-results"
  }, {
    "default": (0,vue_esm_bundler/* withCtx */.k6)(function () {
      return [$data.query && $data.results.length ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", searchvue_type_template_id_03743d98_hoisted_3, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($data.results, function (merchant, index) {
        return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
          tabindex: "0",
          role: "link",
          onMouseenter: function onMouseenter($event) {
            return $data.selectIndex = index;
          },
          onMouseleave: _cache[9] || (_cache[9] = function ($event) {
            return $data.selectIndex = null;
          }),
          onClick: _cache[10] || (_cache[10] = function ($event) {
            return $options.openResult($data.results[$data.selectIndex]);
          }),
          onFocus: function onFocus($event) {
            return $data.selectIndex = index;
          },
          onBlur: _cache[11] || (_cache[11] = function ($event) {
            return $data.selectIndex = null;
          }),
          onKeydown: _cache[12] || (_cache[12] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
            return $options.openResult($data.results[$data.selectIndex]);
          }, ["enter"])),
          key: index,
          "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["search__result", index === $data.selectIndex && "search__result_selected"])
        }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("span", {
          innerHTML: $options.bold(merchant.name)
        }, null, 8, searchvue_type_template_id_03743d98_hoisted_5), (0,vue_esm_bundler/* createElementVNode */.Lk)("span", searchvue_type_template_id_03743d98_hoisted_6, (0,vue_esm_bundler/* toDisplayString */.v_)($options.promotedText(merchant)), 1)], 42, searchvue_type_template_id_03743d98_hoisted_4);
      }), 128))])) : $data.query && !$data.results.length ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", searchvue_type_template_id_03743d98_hoisted_7, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", searchvue_type_template_id_03743d98_hoisted_8, [(0,vue_esm_bundler/* createElementVNode */.Lk)("span", searchvue_type_template_id_03743d98_hoisted_9, "– " + (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.search.no_matches')) + " –", 1)])])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)];
    }),
    _: 1
  }), (0,vue_esm_bundler/* createVNode */.bF)(vue_esm_bundler/* TransitionGroup */.F, {
    name: "fade",
    tag: "span"
  }, {
    "default": (0,vue_esm_bundler/* withCtx */.k6)(function () {
      return [$data.query ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
        key: 0,
        "class": (0,vue_esm_bundler/* normalizeClass */.C4)("search__background"),
        onClick: _cache[13] || (_cache[13] = function ($event) {
          return $data.query = '';
        })
      })) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)];
    }),
    _: 1
  })], 2);
}
;// CONCATENATED MODULE: ./source/popup/components/search.vue?vue&type=template&id=03743d98

// EXTERNAL MODULE: ./node_modules/lodash/slice.js
var slice = __webpack_require__(7530);
var slice_default = /*#__PURE__*/__webpack_require__.n(slice);
// EXTERNAL MODULE: ./node_modules/lodash/filter.js
var filter = __webpack_require__(7612);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/search.vue?vue&type=script&lang=js






// import reward from '../../filters/reward';



/* harmony default export */ const searchvue_type_script_lang_js = ({
  props: ['merchants'],
  data: function data() {
    return {
      query: '',
      results: [],
      selectIndex: -1,
      placeholder: this.$i18next.t('popup.components.search.search'),
      isMouseFocus: true
    };
  },
  // filters: {
  //   reward,
  // },
  methods: {
    bold: function bold(value) {
      var rx = new RegExp("(.+|)(".concat(this.query, ")(.+|)"), 'i');
      return purify_es/* default */.A.sanitize(value.replace(rx, '$1<span class="bold">$2</span>$3'));
    },
    select: function select(_ref) {
      var key = _ref.key;
      var index = this.selectIndex;
      var length = this.results.length;
      if (key === 'ArrowUp') {
        this.selectIndex = index <= 0 ? length - 1 : index - 1;
      } else {
        this.selectIndex = index === length - 1 ? 0 : index + 1;
      }
      this.query = this.results[this.selectIndex].name;
    },
    find: function find(query) {
      var filtered = filter_default()(this.merchants, function (merchant) {
        var name = merchant.name.toLowerCase();
        return name.indexOf(query) > -1;
      });
      filtered.sort(function (a, b) {
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase();
        var high = (bName.indexOf(query) === 0) - (aName.indexOf(query) === 0);
        var low = (bName.indexOf(query) > -1) - (aName.indexOf(query) > -1);
        return high || low;
      });
      this.results = slice_default()(filtered, 0, 10);
    },
    openResult: function openResult() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this$results$_this$s, activationUrl, name, tab;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this$results$_this$s = _this.results[_this.selectIndex], activationUrl = _this$results$_this$s.activationUrl, name = _this$results$_this$s.name;
              _context.next = 3;
              return getActiveTab();
            case 3:
              tab = _context.sent;
              brodcastChannel.postMessage({
                type: 'analytics',
                dataGA: {
                  ec: 'Popup',
                  ea: 'Search Result',
                  el: name
                }
              });
              brodcastChannel.postMessage({
                type: 'activate',
                dataActivate: {
                  activationUrl: activationUrl
                },
                sender: {
                  tab: tab
                }
              });
              if (_this.isAutomationTest() === false) window.close();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    promotedText: function promotedText(merchant) {
      var includesDecimals = /\d/.test(merchant.reward);
      if (!includesDecimals) return merchant.reward;
      var text = "".concat(i18n.t('popup.components.search.cashback'));
      if (REGION === 'de') {
        if (merchant.reward.includes('Bis zu')) text = text.toLowerCase();
      }
      if (!merchants_AVIOS_MERCHANTS.length) return "".concat(merchant.reward, " ").concat(text);
      merchants_AVIOS_MERCHANTS.forEach(function (avMerchant) {
        if (merchant.domain.includes(avMerchant)) {
          text = 'Avios';
        }
      });
      return "".concat(merchant.reward, " ").concat(text);
    },
    isAutomationTest: function isAutomationTest() {
      return window.location.href.includes('automation_testing=true') && IS_TEST_VERSION;
    },
    handleKeyboardFocus: function handleKeyboardFocus() {
      this.isMouseFocus = false;
    },
    handleMouseFocus: function handleMouseFocus() {
      this.isMouseFocus = true;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/search.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/search.vue?vue&type=style&index=0&id=03743d98&lang=less
var searchvue_type_style_index_0_id_03743d98_lang_less = __webpack_require__(8425);
;// CONCATENATED MODULE: ./source/popup/components/search.vue?vue&type=style&index=0&id=03743d98&lang=less

;// CONCATENATED MODULE: ./source/popup/components/search.vue




;


const search_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(searchvue_type_script_lang_js, [['render',searchvue_type_template_id_03743d98_render]])

/* harmony default export */ const search = (search_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/offerBanner.vue?vue&type=template&id=09ed9793

var offerBannervue_type_template_id_09ed9793_hoisted_1 = ["aria-label"];
function offerBannervue_type_template_id_09ed9793_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    "class": "offer-banner",
    style: (0,vue_esm_bundler/* normalizeStyle */.Tr)({
      backgroundImage: "url(".concat($props.offer.banner, ")"),
      borderRadius: $props.offer.dynamicText ? '8px 8px 0 0' : '8px'
    }),
    tabindex: "0",
    role: "link",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.activate && $options.activate.apply($options, arguments);
    }),
    onKeydown: _cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)(function () {
      return $options.activate && $options.activate.apply($options, arguments);
    }, ["enter"])),
    "aria-label": $props.offer.dynamicText || ''
  }, null, 44, offerBannervue_type_template_id_09ed9793_hoisted_1);
}
;// CONCATENATED MODULE: ./source/popup/components/offerBanner.vue?vue&type=template&id=09ed9793

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/offerBanner.vue?vue&type=script&lang=js





/* harmony default export */ const offerBannervue_type_script_lang_js = ({
  props: ['offer'],
  methods: {
    activate: function activate() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var activationUrl, tab;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              activationUrl = _this.offer.activationUrl;
              _context.next = 3;
              return getActiveTab();
            case 3:
              tab = _context.sent;
              brodcastChannel.postMessage({
                type: 'analytics',
                dataGA: {
                  ec: 'Popup',
                  ea: 'Carousel Activation',
                  el: activationUrl
                }
              });
              brodcastChannel.postMessage({
                type: 'activate',
                dataActivate: {
                  activationUrl: activationUrl
                },
                sender: {
                  tab: tab
                }
              });
              if (!_this.isAutomationTest()) window.close();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    isAutomationTest: function isAutomationTest() {
      return window.location.href.includes('automation_testing=true') && IS_TEST_VERSION;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/offerBanner.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/offerBanner.vue?vue&type=style&index=0&id=09ed9793&lang=less
var offerBannervue_type_style_index_0_id_09ed9793_lang_less = __webpack_require__(4969);
;// CONCATENATED MODULE: ./source/popup/components/offerBanner.vue?vue&type=style&index=0&id=09ed9793&lang=less

;// CONCATENATED MODULE: ./source/popup/components/offerBanner.vue




;


const offerBanner_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(offerBannervue_type_script_lang_js, [['render',offerBannervue_type_template_id_09ed9793_render]])

/* harmony default export */ const offerBanner = (offerBanner_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/offersTab/offersTab.vue?vue&type=script&lang=js
// eslint-disable-next-line import/no-unresolved




(0,swiper_element_bundle/* register */.kz)();
/* harmony default export */ const offersTabvue_type_script_lang_js = ({
  components: {
    storeListItem: storeListItem,
    Search: search,
    OfferBanner: offerBanner
  },
  computed: {
    recentlyVisited: function recentlyVisited() {
      return this.$store.getters.recentlyVisited;
    },
    merchants: function merchants() {
      return this.$store.state.merchants;
    },
    topOffers: function topOffers() {
      return this.$store.state.topOffers;
    },
    banners: function banners() {
      return this.$store.state.banners;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/offersTab/offersTab.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/offersTab/offersTab.vue?vue&type=style&index=0&id=141b49d3&lang=less
var offersTabvue_type_style_index_0_id_141b49d3_lang_less = __webpack_require__(9656);
;// CONCATENATED MODULE: ./source/popup/components/offersTab/offersTab.vue?vue&type=style&index=0&id=141b49d3&lang=less

;// CONCATENATED MODULE: ./source/popup/components/offersTab/offersTab.vue




;


const offersTab_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(offersTabvue_type_script_lang_js, [['render',offersTabvue_type_template_id_141b49d3_render]])

/* harmony default export */ const offersTab = (offersTab_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/recentTab/recentTab.vue?vue&type=template&id=26d4bc45

var recentTabvue_type_template_id_26d4bc45_hoisted_1 = {
  "class": "tab"
};
var recentTabvue_type_template_id_26d4bc45_hoisted_2 = {
  key: 0,
  "class": "stores-list"
};
var recentTabvue_type_template_id_26d4bc45_hoisted_3 = {
  key: 1,
  "class": "no-recently-visited"
};
function recentTabvue_type_template_id_26d4bc45_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Search = (0,vue_esm_bundler/* resolveComponent */.g2)("Search");
  var _component_storeListItem = (0,vue_esm_bundler/* resolveComponent */.g2)("storeListItem");
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", recentTabvue_type_template_id_26d4bc45_hoisted_1, [(0,vue_esm_bundler/* createVNode */.bF)(_component_Search, {
    merchants: $options.merchants
  }, null, 8, ["merchants"]), $options.recentlyVisited.length ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", recentTabvue_type_template_id_26d4bc45_hoisted_2, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($options.recentlyVisited, function (merchant, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_storeListItem, {
      key: index,
      merchant: merchant
    }, null, 8, ["merchant"]);
  }), 128))])) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("p", recentTabvue_type_template_id_26d4bc45_hoisted_3, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.recent_tab.no_recently_visited')), 1))]);
}
;// CONCATENATED MODULE: ./source/popup/components/recentTab/recentTab.vue?vue&type=template&id=26d4bc45

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/recentTab/recentTab.vue?vue&type=script&lang=js


/* harmony default export */ const recentTabvue_type_script_lang_js = ({
  components: {
    StoreListItem: storeListItem,
    Search: search
  },
  computed: {
    recentlyVisited: function recentlyVisited() {
      return this.$store.state.recentStores;
    },
    merchants: function merchants() {
      return this.$store.state.merchants;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/recentTab/recentTab.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/recentTab/recentTab.vue?vue&type=style&index=0&id=26d4bc45&lang=less
var recentTabvue_type_style_index_0_id_26d4bc45_lang_less = __webpack_require__(5112);
;// CONCATENATED MODULE: ./source/popup/components/recentTab/recentTab.vue?vue&type=style&index=0&id=26d4bc45&lang=less

;// CONCATENATED MODULE: ./source/popup/components/recentTab/recentTab.vue




;


const recentTab_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(recentTabvue_type_script_lang_js, [['render',recentTabvue_type_template_id_26d4bc45_render]])

/* harmony default export */ const recentTab = (recentTab_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeTab/storeTab.vue?vue&type=template&id=055307c0

var storeTabvue_type_template_id_055307c0_hoisted_1 = {
  "class": "tab tab--store"
};
var storeTabvue_type_template_id_055307c0_hoisted_2 = {
  key: 0,
  "class": "tcb-notification__warning"
};
function storeTabvue_type_template_id_055307c0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VHeader = (0,vue_esm_bundler/* resolveComponent */.g2)("VHeader");
  var _component_StoreSection = (0,vue_esm_bundler/* resolveComponent */.g2)("StoreSection");
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTabvue_type_template_id_055307c0_hoisted_1, [(0,vue_esm_bundler/* createVNode */.bF)(_component_VHeader, {
    merchant: $options.merchant,
    cashback: {
      available: '$0.00',
      pending: '$0.00'
    },
    user: $options.user
  }, null, 8, ["merchant", "user"]), $options.highAlert ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTabvue_type_template_id_055307c0_hoisted_2, (0,vue_esm_bundler/* toDisplayString */.v_)($options.highAlert), 1)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true), (0,vue_esm_bundler/* createVNode */.bF)(_component_StoreSection, {
    parentComponent: "Popup"
  })]);
}
;// CONCATENATED MODULE: ./source/popup/components/storeTab/storeTab.vue?vue&type=template&id=055307c0

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/storeInfo.vue?vue&type=template&id=a3c02272&scoped=true

var _withScopeId = function _withScopeId(n) {
  return _pushScopeId("data-v-a3c02272"), n = n(), _popScopeId(), n;
};
var storeInfovue_type_template_id_a3c02272_scoped_true_hoisted_1 = {
  "class": "store-info"
};
function storeInfovue_type_template_id_a3c02272_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Tiers = (0,vue_esm_bundler/* resolveComponent */.g2)("Tiers");
  var _component_OffersList = (0,vue_esm_bundler/* resolveComponent */.g2)("OffersList");
  var _component_StoreTerms = (0,vue_esm_bundler/* resolveComponent */.g2)("StoreTerms");
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeInfovue_type_template_id_a3c02272_scoped_true_hoisted_1, [$props.merchant.offers_length > 0 ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_Tiers, {
    key: 0,
    tiers: $options.merchantTiers,
    numberTiers: $props.merchant.offers_length,
    merchantName: $props.merchant.name,
    parentComponent: $props.parentComponent
  }, null, 8, ["tiers", "numberTiers", "merchantName", "parentComponent"])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true), $props.merchantOffers.length ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_OffersList, {
    key: 1,
    merchant: $props.merchant,
    merchantOffers: $props.merchantOffers,
    parentComponent: $props.parentComponent
  }, null, 8, ["merchant", "merchantOffers", "parentComponent"])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true), $props.flagTermsAndExclusions ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_StoreTerms, {
    key: 2,
    flagTermsAndExclusions: $props.flagTermsAndExclusions,
    topCashbackUrl: $props.merchant.topCashbackUrl,
    merchantName: $props.merchant.name,
    merchant: $props.merchant,
    parentComponent: $props.parentComponent
  }, null, 8, ["flagTermsAndExclusions", "topCashbackUrl", "merchantName", "merchant", "parentComponent"])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)]);
}
;// CONCATENATED MODULE: ./source/shared_components/storeInfo.vue?vue&type=template&id=a3c02272&scoped=true

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/tiers.vue?vue&type=template&id=4ce4d8d6&scoped=true

var tiersvue_type_template_id_4ce4d8d6_scoped_true_withScopeId = function _withScopeId(n) {
  return (0,vue_esm_bundler/* pushScopeId */.Qi)("data-v-4ce4d8d6"), n = n(), (0,vue_esm_bundler/* popScopeId */.jt)(), n;
};
var tiersvue_type_template_id_4ce4d8d6_scoped_true_hoisted_1 = {
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)(["tiers"])
};
var tiersvue_type_template_id_4ce4d8d6_scoped_true_hoisted_2 = {
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)(["tiers__list"])
};
var tiersvue_type_template_id_4ce4d8d6_scoped_true_hoisted_3 = /*#__PURE__*/tiersvue_type_template_id_4ce4d8d6_scoped_true_withScopeId(function () {
  return /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */.Lk)("p", null, null, -1);
});
var tiersvue_type_template_id_4ce4d8d6_scoped_true_hoisted_4 = ["innerHTML"];
function tiersvue_type_template_id_4ce4d8d6_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_tier = (0,vue_esm_bundler/* resolveComponent */.g2)("tier");
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", tiersvue_type_template_id_4ce4d8d6_scoped_true_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", tiersvue_type_template_id_4ce4d8d6_scoped_true_hoisted_2, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($options.showedTiers, function (items) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
      key: items['name']
    }, [tiersvue_type_template_id_4ce4d8d6_scoped_true_hoisted_3, (0,vue_esm_bundler/* createElementVNode */.Lk)("p", {
      "class": "tiers__category",
      innerHTML: $options.showCategory(items)
    }, null, 8, tiersvue_type_template_id_4ce4d8d6_scoped_true_hoisted_4), ((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)(items['rates'], function (tier, index) {
      return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_tier, {
        key: index,
        tier: tier
      }, null, 8, ["tier"]);
    }), 128))]);
  }), 128))]), $props.tiers && $props.numberTiers > 5 ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    key: 0,
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["tiers__show-more", $data.showAll && "tiers__show-more_hidden"]),
    tabindex: "0",
    role: "link",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.showMore && $options.showMore.apply($options, arguments);
    }),
    onKeydown: _cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)(function () {
      return $options.showMore && $options.showMore.apply($options, arguments);
    }, ["enter"]))
  }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('shared_components.tiers.show_more')), 35)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)]);
}
;// CONCATENATED MODULE: ./source/shared_components/tiers.vue?vue&type=template&id=4ce4d8d6&scoped=true

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/tier.vue?vue&type=template&id=0b9b0be2&scoped=true

var tiervue_type_template_id_0b9b0be2_scoped_true_withScopeId = function _withScopeId(n) {
  return _pushScopeId("data-v-0b9b0be2"), n = n(), _popScopeId(), n;
};
var tiervue_type_template_id_0b9b0be2_scoped_true_hoisted_1 = {
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)(["tier"])
};
var tiervue_type_template_id_0b9b0be2_scoped_true_hoisted_2 = {
  "class": /*#__PURE__*/(0,vue_esm_bundler/* normalizeClass */.C4)(["tier__reward"])
};
function tiervue_type_template_id_0b9b0be2_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", tiervue_type_template_id_0b9b0be2_scoped_true_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    ref: "tierName",
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["tier__name", {
      'tier__name_matched': _ctx.matchHeight
    }])
  }, (0,vue_esm_bundler/* toDisplayString */.v_)($props.tier.name), 3), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", tiervue_type_template_id_0b9b0be2_scoped_true_hoisted_2, (0,vue_esm_bundler/* toDisplayString */.v_)($props.tier.reward), 1)]);
}
;// CONCATENATED MODULE: ./source/shared_components/tier.vue?vue&type=template&id=0b9b0be2&scoped=true

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/tier.vue?vue&type=script&lang=js
/* harmony default export */ const tiervue_type_script_lang_js = ({
  props: {
    tier: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      matchHeight: false
    };
  },
  mounted: function mounted() {
    this.checkHeight();
  },
  methods: {
    checkHeight: function checkHeight() {
      if (!this.$refs.tierName) {
        return;
      }
      var height = this.$refs.tierName.clientHeight;
      this.matchHeight = height > 49;
    }
  }
});
;// CONCATENATED MODULE: ./source/shared_components/tier.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/tier.vue?vue&type=style&index=0&id=0b9b0be2&lang=less&scoped=true
var tiervue_type_style_index_0_id_0b9b0be2_lang_less_scoped_true = __webpack_require__(591);
;// CONCATENATED MODULE: ./source/shared_components/tier.vue?vue&type=style&index=0&id=0b9b0be2&lang=less&scoped=true

;// CONCATENATED MODULE: ./source/shared_components/tier.vue




;


const tier_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(tiervue_type_script_lang_js, [['render',tiervue_type_template_id_0b9b0be2_scoped_true_render],['__scopeId',"data-v-0b9b0be2"]])

/* harmony default export */ const tier = (tier_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/tiers.vue?vue&type=script&lang=js




/* harmony default export */ const tiersvue_type_script_lang_js = ({
  props: {
    tiers: Array,
    merchantName: String,
    numberTiers: Number,
    parentComponent: String
  },
  components: {
    Tier: tier
  },
  data: function data() {
    return {
      showAll: false,
      paintedTiers: []
    };
  },
  computed: {
    limitedTiers: function limitedTiers() {
      return sliceByValues(this.tiers, 5);
    },
    showedTiers: function showedTiers() {
      return this.showAll ? this.tiers : this.limitedTiers;
    }
  },
  methods: {
    showMore: function showMore() {
      this.showAll = true;
      this.sendToAnalytics('Open Show More Tiers');
    },
    showCategory: function showCategory(items) {
      return purify_es/* default */.A.sanitize(i18n.t("general.".concat(items.rates['0'].labelType), {
        merchantName: this.merchantName,
        category: items.name
      }));
    },
    sendToAnalytics: function sendToAnalytics(eventName) {
      this.$store.dispatch('sendGA', {
        ec: this.parentComponent,
        ea: eventName,
        el: this.merchantName
      });
    }
  }
});
;// CONCATENATED MODULE: ./source/shared_components/tiers.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/tiers.vue?vue&type=style&index=0&id=4ce4d8d6&lang=less&scoped=true
var tiersvue_type_style_index_0_id_4ce4d8d6_lang_less_scoped_true = __webpack_require__(8400);
;// CONCATENATED MODULE: ./source/shared_components/tiers.vue?vue&type=style&index=0&id=4ce4d8d6&lang=less&scoped=true

;// CONCATENATED MODULE: ./source/shared_components/tiers.vue




;


const tiers_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(tiersvue_type_script_lang_js, [['render',tiersvue_type_template_id_4ce4d8d6_scoped_true_render],['__scopeId',"data-v-4ce4d8d6"]])

/* harmony default export */ const tiers = (tiers_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/offersList.vue?vue&type=template&id=4cfed43e&scoped=true

var offersListvue_type_template_id_4cfed43e_scoped_true_withScopeId = function _withScopeId(n) {
  return _pushScopeId("data-v-4cfed43e"), n = n(), _popScopeId(), n;
};
var offersListvue_type_template_id_4cfed43e_scoped_true_hoisted_1 = {
  "class": "offers-list"
};
var offersListvue_type_template_id_4cfed43e_scoped_true_hoisted_2 = {
  "class": "offers-list__title"
};
var offersListvue_type_template_id_4cfed43e_scoped_true_hoisted_3 = {
  "class": "offers-list__offers"
};
function offersListvue_type_template_id_4cfed43e_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Offer = (0,vue_esm_bundler/* resolveComponent */.g2)("Offer");
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", offersListvue_type_template_id_4cfed43e_scoped_true_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", offersListvue_type_template_id_4cfed43e_scoped_true_hoisted_2, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('general.coupon', {
    count: 0
  })), 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", offersListvue_type_template_id_4cfed43e_scoped_true_hoisted_3, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($props.merchantOffers, function (offer, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_Offer, {
      key: index,
      offer: offer,
      merchant: $props.merchant,
      parentComponent: $props.parentComponent
    }, null, 8, ["offer", "merchant", "parentComponent"]);
  }), 128))])]);
}
;// CONCATENATED MODULE: ./source/shared_components/offersList.vue?vue&type=template&id=4cfed43e&scoped=true

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/offer.vue?vue&type=template&id=e0a6a032

var offervue_type_template_id_e0a6a032_hoisted_1 = {
  "class": "offer"
};
var offervue_type_template_id_e0a6a032_hoisted_2 = {
  "class": "offer__description"
};
var offervue_type_template_id_e0a6a032_hoisted_3 = /*#__PURE__*/(0,vue_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1);
var offervue_type_template_id_e0a6a032_hoisted_4 = {
  "class": "offer__merchant-reward"
};
var offervue_type_template_id_e0a6a032_hoisted_5 = {
  key: 0,
  "class": "offer__coupon"
};
var offervue_type_template_id_e0a6a032_hoisted_6 = ["aria-label"];
var offervue_type_template_id_e0a6a032_hoisted_7 = {
  key: 0,
  "class": "coupon__feedback"
};
function offervue_type_template_id_e0a6a032_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", offervue_type_template_id_e0a6a032_hoisted_1, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", offervue_type_template_id_e0a6a032_hoisted_2, [(0,vue_esm_bundler/* createTextVNode */.eW)((0,vue_esm_bundler/* toDisplayString */.v_)($props.offer.description) + " ", 1), offervue_type_template_id_e0a6a032_hoisted_3, (0,vue_esm_bundler/* createElementVNode */.Lk)("span", offervue_type_template_id_e0a6a032_hoisted_4, (0,vue_esm_bundler/* toDisplayString */.v_)(this.merchant.reward) + " " + (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('general.cashback')), 1)]), $options.isValidCode ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", offervue_type_template_id_e0a6a032_hoisted_5, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", {
    "class": "coupon__btn",
    tabindex: "0",
    role: "link",
    onKeydown: _cache[0] || (_cache[0] = (0,vue_esm_bundler/* withKeys */.jR)(function () {
      return $options.activate && $options.activate.apply($options, arguments);
    }, ["enter"])),
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.activate && $options.activate.apply($options, arguments);
    })
  }, [(0,vue_esm_bundler/* createTextVNode */.eW)((0,vue_esm_bundler/* toDisplayString */.v_)($props.offer.code) + " ", 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("span", {
    "class": "clipboard-icon",
    "aria-label": _ctx.$i18next.t('general.copy')
  }, null, 8, offervue_type_template_id_e0a6a032_hoisted_6)], 32), _ctx.showAnimation ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("p", offervue_type_template_id_e0a6a032_hoisted_7, (0,vue_esm_bundler/* toDisplayString */.v_)($options.ctaText), 1)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)]);
}
;// CONCATENATED MODULE: ./source/shared_components/offer.vue?vue&type=template&id=e0a6a032

;// CONCATENATED MODULE: ./source/filters/expire.js



// eslint-disable-next-line func-names
/* harmony default export */ function expire(date) {
  var now = Date.now();
  var expire = new Date(date);
  var days = Math.floor(Math.ceil(expire - now) / 86400000);
  /* eslint-disable */
  if (days > 0 && days < 1) {
    return i18n.t('filters.expire.today');
  } else if (days >= 1 && days < 2) {
    return i18n.t('filters.expire.tomorrow');
  } else if (days >= 2 && days <= 5) {
    return i18n.t('filters.expire.days_left', {
      number_days: days
    });
  } else if (days > 365) {
    return i18n.t('filters.expire.no_date');
  }
  return i18n.t('filters.expire.msg', {
    date: new Date(date).toLocaleDateString(EXPIRE_FORMAT)
  });
  /* eslint-enable */
}
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/offer.vue?vue&type=script&lang=js







/* harmony default export */ const offervue_type_script_lang_js = ({
  props: ['offer', 'merchant', 'parentComponent'],
  data: function data() {
    return {
      copied: false,
      showAnimation: false
    };
  },
  computed: {
    device: function device() {
      return this.$store.state.device;
    },
    isValidCode: function isValidCode() {
      var code = this.offer.code;
      return code && !NO_CODE_PATTERNS.find(function (pattern) {
        return code.includes(pattern);
      });
    },
    ctaText: function ctaText() {
      if (!this.isValidCode) {
        return this.$i18next.t('shared_components.offer.get_deal');
      }
      return !this.copied ? '' : this.$i18next.t('shared_components.offer.copied', {
        coupon: this.$i18next.t('general.coupon', {
          count: 1
        })
      });
    },
    user: function user() {
      return this.$store.state.user;
    },
    flagRedirect: function flagRedirect() {
      return this.$store.state.flagRedirect;
    }
  },
  filters: {
    expire: expire
  },
  methods: {
    hideAnimationAfterDuration: function hideAnimationAfterDuration(duration) {
      var _this = this;
      setTimeout(function () {
        _this.showAnimation = false;
      }, duration);
    },
    activate: function activate() {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var activationUrl, hasBacs, isRequiresBacs, dataGA;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this2.isValidCode) {
                copyToClipBoard(_this2.offer.code);
                _this2.copied = true;
                _this2.showAnimation = true;
                _this2.hideAnimationAfterDuration(COUPON_COPIED_ANIMATION_TIMER);
              }
              activationUrl = _this2.offer.activationUrl;
              hasBacs = _this2.user.hasBacs;
              isRequiresBacs = _this2.merchant.isRequiresBacs;
              if (!_this2.merchant.activated) {
                sendContentMessage({
                  action: 'activate',
                  data: {
                    activationUrl: activationUrl,
                    deeplink: __webpack_require__.g.location.href,
                    newTab: openNewTabCashback(_this2.flagRedirect, isRequiresBacs, hasBacs),
                    merchantId: _this2.merchant.id
                  }
                });
                dataGA = {
                  ec: _this2.parentComponent,
                  ea: 'Coupon Activation',
                  el: _this2.merchant.name
                };
                if (_this2.parentComponent === 'Popup') {
                  brodcastChannel.postMessage({
                    type: 'analytics',
                    dataGA: dataGA
                  });
                } else {
                  _this2.$store.dispatch('sendGA', dataGA);
                }
              }
              // if (this.device === 'desktop') {
              //   await asyncTimeout(1000);
              //   window.close();
              // }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./source/shared_components/offer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/offer.vue?vue&type=style&index=0&id=e0a6a032&lang=less
var offervue_type_style_index_0_id_e0a6a032_lang_less = __webpack_require__(9568);
;// CONCATENATED MODULE: ./source/shared_components/offer.vue?vue&type=style&index=0&id=e0a6a032&lang=less

;// CONCATENATED MODULE: ./source/shared_components/offer.vue




;


const offer_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(offervue_type_script_lang_js, [['render',offervue_type_template_id_e0a6a032_render]])

/* harmony default export */ const offer = (offer_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/offersList.vue?vue&type=script&lang=js

/* harmony default export */ const offersListvue_type_script_lang_js = ({
  props: ['merchant', 'merchantOffers', 'parentComponent'],
  components: {
    Offer: offer
  }
});
;// CONCATENATED MODULE: ./source/shared_components/offersList.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/offersList.vue?vue&type=style&index=0&id=4cfed43e&lang=less&scoped=true
var offersListvue_type_style_index_0_id_4cfed43e_lang_less_scoped_true = __webpack_require__(5216);
;// CONCATENATED MODULE: ./source/shared_components/offersList.vue?vue&type=style&index=0&id=4cfed43e&lang=less&scoped=true

;// CONCATENATED MODULE: ./source/shared_components/offersList.vue




;


const offersList_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(offersListvue_type_script_lang_js, [['render',offersListvue_type_template_id_4cfed43e_scoped_true_render],['__scopeId',"data-v-4cfed43e"]])

/* harmony default export */ const offersList = (offersList_exports_);
;// CONCATENATED MODULE: ./source/assets/arrow.svg
const arrow_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ljg1MTc1IDEuNTM1NzVDMTAuMDUwOCAxLjM0Njc1IDEwLjA1MDggMS4wMzk3NSA5Ljg1MTc1IDAuODUxNzVMOS4xMzQ3NSAwLjE2ODc1QzguOTM3NzUgLTAuMDIxMjUgOC42MTY3NSAtMC4wMjEyNSA4LjQxOTc1IDAuMTY4NzVMNS4wMTU3NSAzLjQ2Mzc1TDEuNTgxNzUgMC4xNDE3NUMxLjM4Mjc1IC0wLjA0NzI1IDEuMDYxNzUgLTAuMDQ3MjUgMC44NjQ3NSAwLjE0MTc1TDAuMTQ3NzUgMC44MjQ3NUMtMC4wNDkyNSAxLjAxMjc1IC0wLjA0OTI1IDEuMzE4NzUgMC4xNDc3NSAxLjUwODc1TDQuNjU1NzUgNS44NTg3NUM0Ljg1NDc1IDYuMDQ2NzUgNS4xNzU3NSA2LjA0Njc1IDUuMzcyNzUgNS44NTg3NUw5Ljg1MTc1IDEuNTM1NzVaIiBmaWxsPSIjQTBBMEEwIi8+Cjwvc3ZnPgo=";
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/content/components/storeTerms.vue?vue&type=template&id=7d7b8bbb


var storeTermsvue_type_template_id_7d7b8bbb_hoisted_1 = {
  "class": "store-terms"
};
var storeTermsvue_type_template_id_7d7b8bbb_hoisted_2 = {
  key: 0,
  "class": "exclusions_terms"
};
var storeTermsvue_type_template_id_7d7b8bbb_hoisted_3 = {
  "class": "exclusions_terms__title"
};
var storeTermsvue_type_template_id_7d7b8bbb_hoisted_4 = {
  "class": "exclusions_terms__terms"
};
var storeTermsvue_type_template_id_7d7b8bbb_hoisted_5 = {
  "class": "term__description"
};
var storeTermsvue_type_template_id_7d7b8bbb_hoisted_6 = {
  "class": "term__description"
};
var storeTermsvue_type_template_id_7d7b8bbb_hoisted_7 = {
  key: 1,
  "class": "terms"
};
var storeTermsvue_type_template_id_7d7b8bbb_hoisted_8 = {
  "class": "terms__text"
};
var storeTermsvue_type_template_id_7d7b8bbb_hoisted_9 = {
  key: 1
};
function storeTermsvue_type_template_id_7d7b8bbb_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTermsvue_type_template_id_7d7b8bbb_hoisted_1, [$props.flagTermsAndExclusions ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTermsvue_type_template_id_7d7b8bbb_hoisted_2, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", storeTermsvue_type_template_id_7d7b8bbb_hoisted_3, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.expanded_sections.title')), 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", storeTermsvue_type_template_id_7d7b8bbb_hoisted_4, [$options.getExclusions.length > 0 ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    key: 0,
    "class": "term",
    tabindex: "0",
    role: "button",
    onKeydown: [_cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.toggleSection('exclusions');
    }, ["enter"])), _cache[2] || (_cache[2] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function ($event) {
      return $options.toggleSection('exclusions');
    }, ["prevent"]), ["space"]))],
    "data-test": "exclusions"
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", {
    "class": "term__title",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.toggleSection('exclusions');
    })
  }, [(0,vue_esm_bundler/* createTextVNode */.eW)((0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.expanded_sections.exclusions')) + " ", 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("img", {
    src: arrow_namespaceObject,
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["icon", {
      rotated: $data.expandedSections.exclusions
    }])
  }, null, 2)]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["term__content", {
      expanded: $data.expandedSections.exclusions
    }])
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("ul", storeTermsvue_type_template_id_7d7b8bbb_hoisted_5, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($options.getExclusions, function (note, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("li", {
      key: 'exclusion-' + index
    }, (0,vue_esm_bundler/* toDisplayString */.v_)(note), 1);
  }), 128))])], 2)], 32)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)]), $options.getTerms.length > 0 ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    key: 0,
    "class": "term",
    tabindex: "0",
    role: "button",
    onKeydown: [_cache[4] || (_cache[4] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.toggleSection('terms');
    }, ["enter"])), _cache[5] || (_cache[5] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function ($event) {
      return $options.toggleSection('terms');
    }, ["prevent"]), ["space"]))],
    "data-test": "terms"
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", {
    "class": "term__title",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.toggleSection('terms');
    })
  }, [(0,vue_esm_bundler/* createTextVNode */.eW)((0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.expanded_sections.terms')) + " ", 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("img", {
    src: arrow_namespaceObject,
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["icon", {
      rotated: $data.expandedSections.terms
    }])
  }, null, 2)]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["term__content", {
      expanded: $data.expandedSections.terms
    }])
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("ul", storeTermsvue_type_template_id_7d7b8bbb_hoisted_6, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($options.getTerms, function (note, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("li", {
      key: 'term-' + index
    }, (0,vue_esm_bundler/* toDisplayString */.v_)(note), 1);
  }), 128))])], 2)], 32)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)])) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTermsvue_type_template_id_7d7b8bbb_hoisted_7, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", storeTermsvue_type_template_id_7d7b8bbb_hoisted_8, [(0,vue_esm_bundler/* createElementVNode */.Lk)("span", null, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.text.part1')), 1), $props.topCashbackUrl ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("span", {
    key: 0,
    "class": "terms__details",
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.openStore && $options.openStore.apply($options, arguments);
    })
  }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.text.link')), 1)) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("span", storeTermsvue_type_template_id_7d7b8bbb_hoisted_9, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.text.link')), 1)), (0,vue_esm_bundler/* createElementVNode */.Lk)("span", null, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.text.part2')), 1)])]))]);
}
;// CONCATENATED MODULE: ./source/content/components/storeTerms.vue?vue&type=template&id=7d7b8bbb

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/content/components/storeTerms.vue?vue&type=script&lang=js
/* harmony default export */ const storeTermsvue_type_script_lang_js = ({
  props: ['topCashbackUrl', 'parentComponent', 'merchantName', 'flagTermsAndExclusions', 'merchant'],
  data: function data() {
    return {
      expandedSections: {
        exclusions: true,
        terms: false
      }
    };
  },
  computed: {
    getTerms: function getTerms() {
      var _this$merchant$terms$, _this$merchant;
      return (_this$merchant$terms$ = (_this$merchant = this.merchant) === null || _this$merchant === void 0 || (_this$merchant = _this$merchant.terms) === null || _this$merchant === void 0 || (_this$merchant = _this$merchant[0]) === null || _this$merchant === void 0 ? void 0 : _this$merchant.Notes) !== null && _this$merchant$terms$ !== void 0 ? _this$merchant$terms$ : [];
    },
    getExclusions: function getExclusions() {
      var _this$merchant$exclus, _this$merchant2;
      return (_this$merchant$exclus = (_this$merchant2 = this.merchant) === null || _this$merchant2 === void 0 || (_this$merchant2 = _this$merchant2.exclusions) === null || _this$merchant2 === void 0 || (_this$merchant2 = _this$merchant2[0]) === null || _this$merchant2 === void 0 ? void 0 : _this$merchant2.Notes) !== null && _this$merchant$exclus !== void 0 ? _this$merchant$exclus : [];
    }
  },
  methods: {
    openStore: function openStore() {
      window.open(this.topCashbackUrl, '_blank');
      this.sendToAnalytics('Merchant Website Terms');
    },
    sendToAnalytics: function sendToAnalytics(eventName) {
      this.$store.dispatch('sendGA', {
        ec: this.parentComponent,
        ea: eventName,
        el: this.merchantName
      });
    },
    toggleSection: function toggleSection(key) {
      this.$set(this.expandedSections, key, !this.expandedSections[key]);
      this.sendToAnalytics(this.expandedSections[key] ? "Merchant Open ".concat(key.charAt(0).toUpperCase() + key.slice(1)) : "Merchant Close ".concat(key.charAt(0).toUpperCase() + key.slice(1)));
    }
  }
});
;// CONCATENATED MODULE: ./source/content/components/storeTerms.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/content/components/storeTerms.vue?vue&type=style&index=0&id=7d7b8bbb&lang=less
var storeTermsvue_type_style_index_0_id_7d7b8bbb_lang_less = __webpack_require__(3898);
;// CONCATENATED MODULE: ./source/content/components/storeTerms.vue?vue&type=style&index=0&id=7d7b8bbb&lang=less

;// CONCATENATED MODULE: ./source/content/components/storeTerms.vue




;


const storeTerms_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(storeTermsvue_type_script_lang_js, [['render',storeTermsvue_type_template_id_7d7b8bbb_render]])

/* harmony default export */ const storeTerms = (storeTerms_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/storeInfo.vue?vue&type=script&lang=js



/* harmony default export */ const storeInfovue_type_script_lang_js = ({
  props: ['merchant', 'conquestMerchant', 'merchantOffers', 'parentComponent', 'topCashbackUrl', 'merchantName', 'flagTermsAndExclusions'],
  components: {
    Tiers: tiers,
    OffersList: offersList,
    StoreTerms: storeTerms
  },
  computed: {
    merchantTiers: function merchantTiers() {
      return this.merchant.tiers;
    },
    showMerchant: function showMerchant() {
      return 0;
    }
  }
});
;// CONCATENATED MODULE: ./source/shared_components/storeInfo.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/shared_components/storeInfo.vue?vue&type=style&index=0&id=a3c02272&lang=less&scoped=true
var storeInfovue_type_style_index_0_id_a3c02272_lang_less_scoped_true = __webpack_require__(1972);
;// CONCATENATED MODULE: ./source/shared_components/storeInfo.vue?vue&type=style&index=0&id=a3c02272&lang=less&scoped=true

;// CONCATENATED MODULE: ./source/shared_components/storeInfo.vue




;


const storeInfo_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(storeInfovue_type_script_lang_js, [['render',storeInfovue_type_template_id_a3c02272_scoped_true_render],['__scopeId',"data-v-a3c02272"]])

/* harmony default export */ const storeInfo = (storeInfo_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeTerms.vue?vue&type=template&id=29e10647


var storeTermsvue_type_template_id_29e10647_hoisted_1 = {
  "class": "store-terms"
};
var storeTermsvue_type_template_id_29e10647_hoisted_2 = {
  key: 0,
  "class": "store-terms__text"
};
var storeTermsvue_type_template_id_29e10647_hoisted_3 = {
  key: 1,
  "class": "store-terms__text"
};
var storeTermsvue_type_template_id_29e10647_hoisted_4 = {
  key: 0,
  "class": "exclusions_terms"
};
var storeTermsvue_type_template_id_29e10647_hoisted_5 = {
  "class": "exclusions_terms__title"
};
var storeTermsvue_type_template_id_29e10647_hoisted_6 = {
  "class": "exclusions_terms__terms"
};
var storeTermsvue_type_template_id_29e10647_hoisted_7 = {
  "class": "term__description"
};
var storeTermsvue_type_template_id_29e10647_hoisted_8 = {
  "class": "term__description"
};
var storeTermsvue_type_template_id_29e10647_hoisted_9 = {
  key: 1
};
var _hoisted_10 = {
  key: 1
};
function storeTermsvue_type_template_id_29e10647_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTermsvue_type_template_id_29e10647_hoisted_1, [$data.region == 'us' && ($props.important || $props.exclusions) ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, {
    key: 0
  }, [$props.important ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTermsvue_type_template_id_29e10647_hoisted_2, [(0,vue_esm_bundler/* createElementVNode */.Lk)("span", null, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.store_terms.important')), 1), (0,vue_esm_bundler/* createTextVNode */.eW)((0,vue_esm_bundler/* toDisplayString */.v_)($props.important), 1)])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true), $props.exclusions ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    key: 1,
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["store-terms__text", $props.important ? 'store-terms__text_last' : ''])
  }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.store_terms.exclusions')) + (0,vue_esm_bundler/* toDisplayString */.v_)($props.exclusions), 3)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true), $props.topCashbackUrl ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    key: 2,
    "class": "store-terms__more",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.openStore && $options.openStore.apply($options, arguments);
    })
  }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.store_terms.more_details_simple')), 1)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)], 64)) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTermsvue_type_template_id_29e10647_hoisted_3, [$props.flagTermsAndExclusions ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTermsvue_type_template_id_29e10647_hoisted_4, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", storeTermsvue_type_template_id_29e10647_hoisted_5, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.expanded_sections.title')), 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", storeTermsvue_type_template_id_29e10647_hoisted_6, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "term",
    tabindex: "0",
    role: "button",
    onKeydown: [_cache[2] || (_cache[2] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.toggleSection('exclusions');
    }, ["enter"])), _cache[3] || (_cache[3] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function ($event) {
      return $options.toggleSection('exclusions');
    }, ["prevent"]), ["space"]))]
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", {
    "class": "term__title",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.toggleSection('exclusions');
    })
  }, [(0,vue_esm_bundler/* createTextVNode */.eW)((0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.expanded_sections.exclusions')) + " ", 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("img", {
    src: arrow_namespaceObject,
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["icon", {
      rotated: $data.expandedSections.exclusions
    }])
  }, null, 2)]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["term__content", {
      expanded: $data.expandedSections.exclusions
    }])
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("ul", storeTermsvue_type_template_id_29e10647_hoisted_7, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($options.getExclusions, function (note, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("li", {
      key: 'exclusion-' + index
    }, (0,vue_esm_bundler/* toDisplayString */.v_)(note), 1);
  }), 128))])], 2)], 32)]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "term",
    tabindex: "0",
    role: "button",
    onKeydown: [_cache[5] || (_cache[5] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.toggleSection('terms');
    }, ["enter"])), _cache[6] || (_cache[6] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function ($event) {
      return $options.toggleSection('terms');
    }, ["prevent"]), ["space"]))]
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("p", {
    "class": "term__title",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.toggleSection('terms');
    })
  }, [(0,vue_esm_bundler/* createTextVNode */.eW)((0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.expanded_sections.terms')) + " ", 1), (0,vue_esm_bundler/* createElementVNode */.Lk)("img", {
    src: arrow_namespaceObject,
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["icon", {
      rotated: $data.expandedSections.terms
    }])
  }, null, 2)]), (0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(["term__content", {
      expanded: $data.expandedSections.terms
    }])
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("ul", storeTermsvue_type_template_id_29e10647_hoisted_8, [((0,vue_esm_bundler/* openBlock */.uX)(true), (0,vue_esm_bundler/* createElementBlock */.CE)(vue_esm_bundler/* Fragment */.FK, null, (0,vue_esm_bundler/* renderList */.pI)($options.getTerms, function (note, index) {
    return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("li", {
      key: 'term-' + index
    }, (0,vue_esm_bundler/* toDisplayString */.v_)(note), 1);
  }), 128))])], 2)], 32)])) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeTermsvue_type_template_id_29e10647_hoisted_9, [(0,vue_esm_bundler/* createElementVNode */.Lk)("span", null, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.text.part1')), 1), $props.topCashbackUrl ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("span", {
    key: 0,
    "class": "store-terms__more",
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.openStore && $options.openStore.apply($options, arguments);
    })
  }, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.text.link')), 1)) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("span", _hoisted_10, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.text.link')), 1)), (0,vue_esm_bundler/* createElementVNode */.Lk)("span", null, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('content.components.store_terms.text.part2')), 1)]))]))]);
}
;// CONCATENATED MODULE: ./source/popup/components/storeTerms.vue?vue&type=template&id=29e10647

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeTerms.vue?vue&type=script&lang=js

/* harmony default export */ const components_storeTermsvue_type_script_lang_js = ({
  props: ['important', 'exclusions', 'topCashbackUrl', 'flagTermsAndExclusions'],
  data: function data() {
    return {
      region: REGION,
      expandedSections: {
        exclusions: true,
        terms: false
      }
    };
  },
  computed: {
    getTerms: function getTerms() {
      var _this$merchant$terms$, _this$merchant;
      return (_this$merchant$terms$ = (_this$merchant = this.merchant) === null || _this$merchant === void 0 || (_this$merchant = _this$merchant.terms) === null || _this$merchant === void 0 || (_this$merchant = _this$merchant[0]) === null || _this$merchant === void 0 ? void 0 : _this$merchant.Notes) !== null && _this$merchant$terms$ !== void 0 ? _this$merchant$terms$ : [];
    },
    getExclusions: function getExclusions() {
      var _this$merchant$exclus, _this$merchant2;
      return (_this$merchant$exclus = (_this$merchant2 = this.merchant) === null || _this$merchant2 === void 0 || (_this$merchant2 = _this$merchant2.exclusions) === null || _this$merchant2 === void 0 || (_this$merchant2 = _this$merchant2[0]) === null || _this$merchant2 === void 0 ? void 0 : _this$merchant2.Notes) !== null && _this$merchant$exclus !== void 0 ? _this$merchant$exclus : [];
    }
  },
  methods: {
    openStore: function openStore() {
      window.open(this.topCashbackUrl, '_blank');
    },
    sendToAnalytics: function sendToAnalytics(eventName) {
      this.$store.dispatch('sendGA', {
        ec: 'Popup',
        ea: eventName,
        el: this.merchantName
      });
    },
    toggleSection: function toggleSection(key) {
      this.$set(this.expandedSections, key, !this.expandedSections[key]);
      this.sendToAnalytics(this.expandedSections[key] ? "Merchant Open ".concat(key.charAt(0).toUpperCase() + key.slice(1)) : "Merchant Close ".concat(key.charAt(0).toUpperCase() + key.slice(1)));
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/storeTerms.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeTerms.vue?vue&type=style&index=0&id=29e10647&lang=less
var storeTermsvue_type_style_index_0_id_29e10647_lang_less = __webpack_require__(7689);
;// CONCATENATED MODULE: ./source/popup/components/storeTerms.vue?vue&type=style&index=0&id=29e10647&lang=less

;// CONCATENATED MODULE: ./source/popup/components/storeTerms.vue




;


const components_storeTerms_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(components_storeTermsvue_type_script_lang_js, [['render',storeTermsvue_type_template_id_29e10647_render]])

/* harmony default export */ const components_storeTerms = (components_storeTerms_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/header.vue?vue&type=template&id=11a5f273

var headervue_type_template_id_11a5f273_hoisted_1 = {
  key: 0,
  "class": "header__merchant-name"
};
var headervue_type_template_id_11a5f273_hoisted_2 = {
  key: 1,
  "class": "header__section"
};
var headervue_type_template_id_11a5f273_hoisted_3 = {
  key: 0,
  "class": "header__title"
};
var headervue_type_template_id_11a5f273_hoisted_4 = ["innerHTML"];
function headervue_type_template_id_11a5f273_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    "class": (0,vue_esm_bundler/* normalizeClass */.C4)(['header', $props.merchant && 'header_merchant'])
  }, [(0,vue_esm_bundler/* createElementVNode */.Lk)("div", {
    "class": "header__logo",
    style: (0,vue_esm_bundler/* normalizeStyle */.Tr)($props.merchant && {
      backgroundImage: "url(".concat($props.merchant.logo, ")")
    }),
    tabindex: "0",
    role: "link",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.openPage($data.homePage);
    }),
    onKeydown: _cache[1] || (_cache[1] = (0,vue_esm_bundler/* withKeys */.jR)(function ($event) {
      return $options.openPage($data.homePage);
    }, ["enter"])),
    alt: ""
  }, null, 36), $props.merchant.name ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", headervue_type_template_id_11a5f273_hoisted_1, (0,vue_esm_bundler/* toDisplayString */.v_)($props.merchant.name), 1)) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true), $props.merchant ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", headervue_type_template_id_11a5f273_hoisted_2, [$props.merchant.activated ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", headervue_type_template_id_11a5f273_hoisted_3, (0,vue_esm_bundler/* toDisplayString */.v_)(_ctx.$i18next.t('popup.components.header.title', {
    promotedText: $options.promotedText
  })), 1)) : ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", {
    key: 1,
    "class": "cta cta_medium",
    tabindex: "0",
    role: "button",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.activate && $options.activate.apply($options, arguments);
    }),
    onKeydown: [_cache[3] || (_cache[3] = (0,vue_esm_bundler/* withKeys */.jR)(function () {
      return $options.activate && $options.activate.apply($options, arguments);
    }, ["enter"])), _cache[4] || (_cache[4] = (0,vue_esm_bundler/* withKeys */.jR)((0,vue_esm_bundler/* withModifiers */.D$)(function () {
      return $options.activate && $options.activate.apply($options, arguments);
    }, ["prevent"]), ["space"]))],
    innerHTML: $options.buttonLabel
  }, null, 40, headervue_type_template_id_11a5f273_hoisted_4))])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)], 2);
}
;// CONCATENATED MODULE: ./source/popup/components/header.vue?vue&type=template&id=11a5f273

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/header.vue?vue&type=script&lang=js








/* harmony default export */ const headervue_type_script_lang_js = ({
  props: {
    cashback: Object,
    merchant: Object,
    user: Object
  },
  data: function data() {
    return {
      homePage: HOME_PAGE
    };
  },
  computed: {
    isRequiresBacs: function isRequiresBacs() {
      return !this.user.hasBacs && this.user.isLoggedIn && this.merchant.isRequiresBacs;
    },
    buttonLabel: function buttonLabel() {
      return this.isRequiresBacs ? i18n.t('popup.components.header.bacs_required') : purify_es/* default */.A.sanitize(i18n.t('popup.components.header.activate', {
        reward: this.merchant.reward.toLowerCase(),
        promotedText: this.promotedText
      }));
    },
    promotedText: function promotedText() {
      var _this = this;
      var text = "".concat(i18n.t('popup.components.header.cashback'));
      if (!merchants_AVIOS_MERCHANTS.length) return text;
      merchants_AVIOS_MERCHANTS.forEach(function (merchant) {
        if (_this.merchant.domain.includes(merchant)) {
          text = 'avios';
        }
      });
      return text;
    },
    flagRedirect: function flagRedirect() {
      return this.$store.state.flagRedirect;
    }
  },
  methods: {
    activate: function activate() {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this2$merchant, activationUrl, name, id, isRequiresBacs, tab;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2$merchant = _this2.merchant, activationUrl = _this2$merchant.activationUrl, name = _this2$merchant.name, id = _this2$merchant.id, isRequiresBacs = _this2$merchant.isRequiresBacs;
              _context.next = 3;
              return getActiveTab();
            case 3:
              tab = _context.sent;
              brodcastChannel.postMessage({
                type: 'analytics',
                dataGA: {
                  ec: 'Popup',
                  ea: 'Activation',
                  el: name
                }
              });
              brodcastChannel.postMessage({
                type: 'activate',
                dataActivate: {
                  activationUrl: activationUrl,
                  deeplink: tab.url,
                  newTab: openNewTabCashback(_this2.flagRedirect, isRequiresBacs, _this2.user.hasBacs),
                  merchantId: id
                },
                sender: {
                  tab: tab
                }
              });
              if (!_this2.isAutomationTest()) window.close();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    openPage: function openPage(url) {
      this.$store.dispatch('analytics', {
        dataGA: {
          ec: 'Popup',
          ea: 'Logo click'
        }
      });

      // broadcastChannel.postMessage({
      //   type: 'analytics',
      //   dataGA: {
      //     ec: 'Popup',
      //     ea: 'Logo click',
      //   },
      // });

      chrome.tabs.create({
        url: url
      });
      if (!this.isAutomationTest()) window.close();
    },
    isAutomationTest: function isAutomationTest() {
      return window.location.href.includes('automation_testing=true') && IS_TEST_VERSION;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/header.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/header.vue?vue&type=style&index=0&id=11a5f273&lang=less
var headervue_type_style_index_0_id_11a5f273_lang_less = __webpack_require__(3114);
;// CONCATENATED MODULE: ./source/popup/components/header.vue?vue&type=style&index=0&id=11a5f273&lang=less

;// CONCATENATED MODULE: ./source/popup/components/header.vue




;


const header_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(headervue_type_script_lang_js, [['render',headervue_type_template_id_11a5f273_render]])

/* harmony default export */ const header = (header_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/content/components/notification_template/storeSection.vue?vue&type=template&id=011b1fad

var storeSectionvue_type_template_id_011b1fad_hoisted_1 = {
  "class": "store-container"
};
var storeSectionvue_type_template_id_011b1fad_hoisted_2 = {
  key: 1,
  "class": "selected-deals"
};
var storeSectionvue_type_template_id_011b1fad_hoisted_3 = ["innerHTML"];
function storeSectionvue_type_template_id_011b1fad_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_store_info = (0,vue_esm_bundler/* resolveComponent */.g2)("store-info");
  var _component_store_terms = (0,vue_esm_bundler/* resolveComponent */.g2)("store-terms");
  return (0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeSectionvue_type_template_id_011b1fad_hoisted_1, [(0,vue_esm_bundler/* createVNode */.bF)(_component_store_info, {
    flagTermsAndExclusions: $options.flagTermsAndExclusions,
    topCashbackUrl: $options.currentMerchant.topCashbackUrl,
    merchantName: $options.currentMerchant.name,
    merchant: $options.currentMerchant,
    merchantOffers: $options.merchantOffers,
    parentComponent: $props.parentComponent,
    important: $options.important,
    exclusions: $options.exclusions
  }, null, 8, ["flagTermsAndExclusions", "topCashbackUrl", "merchantName", "merchant", "merchantOffers", "parentComponent", "important", "exclusions"]), !$options.flagTermsAndExclusions ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createBlock */.Wv)(_component_store_terms, {
    key: 0,
    topCashbackUrl: $options.currentMerchant.topCashbackUrl,
    merchantName: $options.currentMerchant.name,
    flagTermsAndExclusions: $options.flagTermsAndExclusions,
    merchant: $options.currentMerchant,
    important: $options.important,
    exclusions: $options.exclusions
  }, null, 8, ["topCashbackUrl", "merchantName", "flagTermsAndExclusions", "merchant", "important", "exclusions"])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true), $options.currentMerchant.domain === 'currys.co.uk' ? ((0,vue_esm_bundler/* openBlock */.uX)(), (0,vue_esm_bundler/* createElementBlock */.CE)("div", storeSectionvue_type_template_id_011b1fad_hoisted_2, [(0,vue_esm_bundler/* createElementVNode */.Lk)("span", {
    innerHTML: _ctx.$i18next.t('content.components.notification.see_all_selected_deals', {
      url: $options.currentMerchant.topCashbackUrl,
      name: $options.currentMerchant.name
    })
  }, null, 8, storeSectionvue_type_template_id_011b1fad_hoisted_3)])) : (0,vue_esm_bundler/* createCommentVNode */.Q3)("", true)]);
}
;// CONCATENATED MODULE: ./source/content/components/notification_template/storeSection.vue?vue&type=template&id=011b1fad

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(436);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/content/components/notification_template/storeSection.vue?vue&type=script&lang=js




/* harmony default export */ const storeSectionvue_type_script_lang_js = ({
  props: {
    merchant: Object,
    parentComponent: {
      type: String,
      "default": 'Notification Slider'
    }
  },
  data: function data() {
    return {
      region: REGION
    };
  },
  components: {
    StoreInfo: storeInfo,
    StoreTerms: storeTerms
  },
  computed: {
    flagTermsAndExclusions: function flagTermsAndExclusions() {
      return this.$store.state.flagTermsAndExclusions;
    },
    currentMerchant: function currentMerchant() {
      return this.merchant || this.$store.state.merchant;
    },
    merchantOffers: function merchantOffers() {
      var offers = this.currentMerchant.offers;
      if (!offers) return [];
      return (0,toConsumableArray/* default */.A)(offers).sort(function (a, b) {
        var aCode = !!(a.code && !NO_CODE_PATTERNS.find(function (pattern) {
          return a.code.includes(pattern);
        }));
        var bCode = !!(b.code && !NO_CODE_PATTERNS.find(function (pattern) {
          return b.code.includes(pattern);
        }));
        return bCode - aCode;
      });
    },
    important: function important() {
      var _this$currentMerchant;
      if (this.parentComponent === 'Popup' && this.region === 'us') return this.currentMerchant.info && ((_this$currentMerchant = this.currentMerchant.info) === null || _this$currentMerchant === void 0 ? void 0 : _this$currentMerchant.important);
      return null;
    },
    exclusions: function exclusions() {
      var _this$currentMerchant2;
      if (this.parentComponent === 'Popup' && this.region === 'us') return this.currentMerchant.info && ((_this$currentMerchant2 = this.currentMerchant.info) === null || _this$currentMerchant2 === void 0 ? void 0 : _this$currentMerchant2.exclusions);
      return null;
    }
  }
});
;// CONCATENATED MODULE: ./source/content/components/notification_template/storeSection.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/content/components/notification_template/storeSection.vue?vue&type=style&index=0&id=011b1fad&lang=less
var storeSectionvue_type_style_index_0_id_011b1fad_lang_less = __webpack_require__(2531);
;// CONCATENATED MODULE: ./source/content/components/notification_template/storeSection.vue?vue&type=style&index=0&id=011b1fad&lang=less

;// CONCATENATED MODULE: ./source/content/components/notification_template/storeSection.vue




;


const storeSection_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(storeSectionvue_type_script_lang_js, [['render',storeSectionvue_type_template_id_011b1fad_render]])

/* harmony default export */ const storeSection = (storeSection_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeTab/storeTab.vue?vue&type=script&lang=js





/* harmony default export */ const storeTabvue_type_script_lang_js = ({
  components: {
    StoreInfo: storeInfo,
    StoreTerms: components_storeTerms,
    VHeader: header,
    StoreSection: storeSection
  },
  data: function data() {
    return {
      region: REGION
    };
  },
  computed: {
    merchant: function merchant() {
      return this.$store.state.merchant;
    },
    user: function user() {
      return this.$store.state.user;
    },
    flagTermsAndExclusions: function flagTermsAndExclusions() {
      return this.$store.state.flagTermsAndExclusions;
    },
    merchantOffers: function merchantOffers() {
      var offers = this.merchant.offers;
      if (!offers) {
        return [];
      }
      offers.sort(function (a, b) {
        var aCode = !!(a.code && !NO_CODE_PATTERNS.find(function (pattern) {
          return a.code.includes(pattern);
        }));
        var bCode = !!(b.code && !NO_CODE_PATTERNS.find(function (pattern) {
          return b.code.includes(pattern);
        }));
        return bCode - aCode;
      });
      return offers;
    },
    important: function important() {
      return this.merchant.info && this.merchant.info.important;
    },
    exclusions: function exclusions() {
      return this.merchant.info && this.merchant.info.exclusions;
    },
    highAlert: function highAlert() {
      var _this$merchant;
      var alerts = (_this$merchant = this.merchant) === null || _this$merchant === void 0 ? void 0 : _this$merchant.highAlert;
      if (!alerts || Object.keys(alerts).length === 0) return '';
      var firstValue = Object.values(alerts)[0];
      return firstValue || '';
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/components/storeTab/storeTab.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/components/storeTab/storeTab.vue?vue&type=style&index=0&id=055307c0&lang=less
var storeTabvue_type_style_index_0_id_055307c0_lang_less = __webpack_require__(3829);
;// CONCATENATED MODULE: ./source/popup/components/storeTab/storeTab.vue?vue&type=style&index=0&id=055307c0&lang=less

;// CONCATENATED MODULE: ./source/popup/components/storeTab/storeTab.vue




;


const storeTab_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(storeTabvue_type_script_lang_js, [['render',storeTabvue_type_template_id_055307c0_render]])

/* harmony default export */ const storeTab = (storeTab_exports_);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/app.vue?vue&type=script&lang=js

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






// import VHeader from './components/header.vue';

// TABS





/* harmony default export */ const appvue_type_script_lang_js = ({
  components: {
    Welcome: welcome,
    Consents: consents,
    // VHeader,
    Navigation: navigation,
    offersTab: offersTab,
    recentTab: recentTab,
    storeTab: storeTab,
    HeaderMenu: headerMenu
  },
  data: function data() {
    return {
      transitionSide: 'right',
      // default,
      previousTab: null,
      // NEW
      homePage: HOME_PAGE
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm_bundler/* mapState */.aH)({
    status: function status(state) {
      return state.status;
    },
    currentTab: function currentTab(state) {
      return state.currentTab;
    },
    merchants: function merchants(state) {
      return state.merchants;
    },
    merchant: function merchant(state) {
      return state.merchant;
    },
    privateMode: function privateMode(state) {
      return state.privateMode;
    },
    loggedIn: function loggedIn(state) {
      return state.loggedIn;
    },
    user: function user(state) {
      return state.user;
    },
    showConsents: function showConsents(state) {
      return state.showConsents;
    }
  })), {}, {
    tabs: function tabs() {
      return this.merchant ? {
        store: "".concat(i18n.t('popup.app.store_title')),
        offers: "".concat(i18n.t('popup.app.offers_title'))
      } : {
        offers: "".concat(i18n.t('popup.app.offers_title')),
        recent: "".concat(i18n.t('popup.app.recent_title'))
      };
    },
    topOffers: function topOffers() {
      return this.$store.state.topOffers;
    },
    scrollbarClass: function scrollbarClass() {
      return "scrollbar-".concat(BROWSER);
    }
  }),
  methods: {
    openPage: function openPage(url) {
      this.$store.dispatch('analytics', {
        dataGA: {
          ec: 'Popup',
          ea: 'Logo click'
        }
      });
      chrome.tabs.create({
        url: url
      });
      if (!this.isAutomationTest()) window.close();
    }
  },
  watch: {
    currentTab: function currentTab(newTab, oldTab) {
      if (!oldTab) {
        this.transitionSide = 'right';
        this.previousTab = newTab;
        return;
      }
      var names = Object.keys(this.tabs);
      var prevIndex = names.indexOf(oldTab);
      var nextIndex = names.indexOf(newTab);
      this.transitionSide = prevIndex > nextIndex ? 'left' : 'right';
      this.previousTab = oldTab;
    }
  }
});
;// CONCATENATED MODULE: ./source/popup/app.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./source/popup/app.vue?vue&type=style&index=0&id=93f98cfa&lang=less
var appvue_type_style_index_0_id_93f98cfa_lang_less = __webpack_require__(8392);
;// CONCATENATED MODULE: ./source/popup/app.vue?vue&type=style&index=0&id=93f98cfa&lang=less

;// CONCATENATED MODULE: ./source/popup/app.vue




;


const app_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(appvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const popup_app = (app_exports_);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs
var fontawesome_svg_core = __webpack_require__(7107);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var free_solid_svg_icons = __webpack_require__(6188);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.mjs
var free_regular_svg_icons = __webpack_require__(7897);
;// CONCATENATED MODULE: ./source/fontAwesomeIcons.js
/* eslint-disable import/no-extraneous-dependencies */



/* harmony default export */ const fontAwesomeIcons = ({
  init: function init() {
    fontawesome_svg_core/* library */.Yv.add(free_solid_svg_icons/* faCopy */.jPR, free_regular_svg_icons/* faCircleCheck */.QRE);
  }
});
;// CONCATENATED MODULE: ./source/popup/app.js

// eslint-disable-next-line import/no-extraneous-dependencies
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// eslint-disable-next-line import/no-unresolved






// import { getStorageData } from '../utils';

fontAwesomeIcons.init();
document.addEventListener('DOMContentLoaded', function () {
  /* eslint-disable */

  // eslint-disable-next-line no-underscore-dangle

  sendContentMessage({
    action: 'sendAnalytics',
    data: {
      ec: 'Popup',
      ea: 'Open'
    }
  });
  var app = (0,vue_esm_bundler/* createApp */.Ef)(popup_app);
  app.use(store);
  app.config.globalProperties.$i18next = i18n;
  app.mount('#app');
  store.dispatch('init');
  /* eslint-enable */
});

/***/ }),

/***/ 2122:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2519:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7937:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3863:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8428:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7398:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1126:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9795:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2251:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8740:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7463:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 5870:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9864:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4853:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6459:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9141:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4664:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 457:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2531:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2122);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("08681dc6", content, true, {});

/***/ }),

/***/ 3898:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2519);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("096bd558", content, true, {});

/***/ }),

/***/ 8392:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7937);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("74a7f650", content, true, {});

/***/ }),

/***/ 3114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3863);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("905655c2", content, true, {});

/***/ }),

/***/ 8553:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8428);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("7b16816d", content, true, {});

/***/ }),

/***/ 6507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7398);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("a094ded6", content, true, {});

/***/ }),

/***/ 4969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1126);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("1ceab53d", content, true, {});

/***/ }),

/***/ 9656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9795);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("c6d91426", content, true, {});

/***/ }),

/***/ 5112:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2251);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("5aac2af7", content, true, {});

/***/ }),

/***/ 8425:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8740);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("4b803c81", content, true, {});

/***/ }),

/***/ 552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7463);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("e75fa858", content, true, {});

/***/ }),

/***/ 3829:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5870);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("a1a2c0b0", content, true, {});

/***/ }),

/***/ 7689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9864);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("0e0464de", content, true, {});

/***/ }),

/***/ 9568:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4853);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("c69a23e2", content, true, {});

/***/ }),

/***/ 5216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6459);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("60218f70", content, true, {});

/***/ }),

/***/ 1972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9141);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("83ffa098", content, true, {});

/***/ }),

/***/ 591:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4664);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("2c0fefda", content, true, {});

/***/ }),

/***/ 8400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(457);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(5083)/* ["default"] */ .A)
var update = add("db23c224", content, true, {});

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
/******/ 		__webpack_require__.j = 887;
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
/******/ 			887: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(9914)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map