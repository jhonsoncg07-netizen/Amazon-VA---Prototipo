/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4075:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js
var toArray = __webpack_require__(7695);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(6822);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(5361);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4467);
// EXTERNAL MODULE: ./node_modules/lodash/uniqBy.js
var uniqBy = __webpack_require__(14);
var uniqBy_default = /*#__PURE__*/__webpack_require__.n(uniqBy);
// EXTERNAL MODULE: ./node_modules/lodash/filter.js
var filter = __webpack_require__(7612);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(2193);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(8023);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);
// EXTERNAL MODULE: ./node_modules/lodash/findKey.js
var findKey = __webpack_require__(826);
var findKey_default = /*#__PURE__*/__webpack_require__.n(findKey);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(5364);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@sleek/web-ext-sdk/dist/web-ext-sdk.js
var web_ext_sdk = __webpack_require__(7148);
// EXTERNAL MODULE: ./node_modules/@sleek/sdk/dist/sdk.js + 7 modules
var sdk = __webpack_require__(5823);
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
var REMOVE_ACTIVATION_FROM_LIST_DELAY = 60 * 1000;
var CLOSE_TAB_AFTER_ACTIVATION_TIMER = 5 * 1000;
var REMOVE_AFTER_ACTIVATION_FROM_LIST_DELAY = 10 * 1000;
var REMOVE_SUPPRESSION_FROM_LIST_DELAY = 40 * 1000;
var REMOVE_COMPETITOR_ACTIVATION_FROM_LIST_DELAY = 30 * 1000;
var CONFIRMATION_NOTIFICATION_DELAY_TIMESTAMP = 15 * 1000;
var DELAY_NOTIFICATION_ACTIVATING_CASHBACK = (/* unused pure expression or super */ null && (90 * 1000));
var DELAY_SECOND_NOTIFIER_TIMESTAMP = 10 * 60 * 1000;
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
var MERCHANTS_UPDATE_DELAY = 10 * 60 * 1000;
var CONFIGS_UPDATE_DELAY = 24 * 60 * 60 * 1000;
var FEATURE_FLAGS_UPDATE_DELAY = 24 * 60 * 60 * 1000;
var CONQUEST_UPDATE_DELAY = 24 * 60 * 60 * 1000;
var MERCHANT_EXCEPTIONS_UPDATE_DELAY = 24 * 60 * 60 * 1000;
if (IS_CONFIG_TESTING) {
  MERCHANTS_UPDATE_DELAY = 10 * 1000;
  CONFIGS_UPDATE_DELAY = 10 * 1000;
}

// Delay in minutes
var ACTIVATION_RESET_TIMER = 30 * 60 * 1000;
var RE_ACTIVATION_RESET_TIMER = 30 * 60 * 1000;
var SUPRESSION_RESET_TIMER = 30 * 60 * 1000;
var DISMISSAL_RESET_TIMER = 30 * 60 * 1000;
var CONQUEST_RESET_TIMER = 30 * 60 * 1000;
var UPDATE_SINGLE_MERCHANT_INTERVAL = 10 * 60 * 1000;
var UPDATE_SINGLE_MERCHANT_TIMEOUT = 30 * 1000;

;// CONCATENATED MODULE: ./source/constants/urls.js
/* eslint-disable import/no-mutable-exports */

var PROJECT = 'TOPUK';
var DOMAIN = 'www.topcashback.co.uk';
var TEST_DOMAIN = 'ukq-www.tcb.systems';
var CDN_DOMAIN = 'ukp.tcb-cdn.com';
var CDN_TEST_DOMAIN = 'ukq.tcb-cdn.com';
var EBAY_URL = 'ebay.co.uk';
var IGNORED_ULRS = ['news.sky.com'];
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

var TAB_COMPETITORS_ACTIVATION = [
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
];
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
var SUPPRESSION_PATTERNS = ['www.expedia.com/amex', 'px.owneriq.net', /(?<!login\.)dotomi\.com/, 'eden-park.fr/fr_fr/?utm_campaign=', 'www.1-2-3.fr', 'cm_mmc=Linkshare', 'PartnerID=LINKSHARE', 'action.metaffiliation.com', 'track.webgains.com', 'track.effiliation.com', 'clk.tradedoubler.com', 'www.jacadi.fr/?utm_source=', 'ftjcfx.com', 'commission-junction.com', 'rover.ebay.com', 'partners.hotwire.com', 'www.pjtra.com', '.7eer.', 'clickserver.com', '.r.bat.bing.com', 'www.pntrs.com', 'partners.wantable.co', 'cc-dt.com', '.ojrq.net', 'goto.orientaltrading.com', 'www.dpbolvw.net', 'goto.target.com', 'www.pntra.com', '.evyy.net', 'www.anrdoezrs.net', 'www.tkqlhce.com', 'linksynergy.walmart.com', 'www.anrdoezrs.net', 'emjcd.com', 'partners.jawbone.com', 'shareasale.com', 'www.awin1.com', 'linksynergy.walmart.com', 'gan.doubleclick.net', 'tracking.groupon.com', 'www.pepperjamnetwork.com', 'rcm-ca.amazon.ca', 'www.shareasale.com', 'www.jdoqocy.com', 'alitems.com', 'www.kqzyfj.com', 'goto.orientaltrading.com', 'affiliates.babiesrus.com', 'lduhtrp.net', 'ad.admitad.com', 'prf.hn', '.r.msn.com', 'apmebf.com', 'goto.target.com', 'www.intactearnings.com', 'click.linksynergy.com', 'partners.hostgator.com', '.avantlink.com', 'tqlkg.com', 'partners.wantable.co', 'go.redirectingat.com', 'www.pntrac.com', /(?<!tags\.rd\.)linksynergy.com/, 'www.qksrv.net', 'www.gopjn.com', 'affiliates.abebooks.com', 'www.pjatr.com', 'afsrc=1', 'affsrc=1', 'riffrid=mdp.hcom.US', 'riffrid=sem.hcom.us', 'rffrid=aff.hcom.us', 'riffrid=eml.hcom.US', 'riffrid=eml.hcom.CA', 'riffrid=eml.hcom.CF', 'riffrid=eml.hcom.U2', 'ranEAID', 'ranSiteID', 'magicfreebiesuk.co.uk', 'itsadoddle.co.uk', /shepherdsfriendly\.co\.uk.*utm_medium=km/, '/lp/b/amex', 'www.vrbo.com/amex/'];
var OVERRIDE_SUPPRESSION_PATTERNS = [
  // 'cj.dotomi.com/',
  // 'www.jdoqocy.com/',
  // 'www.emjcd.com/',
];
var GOOGLE_SUPPRESSION_PATTERNS = [/aclk\?sa=/, 'ohost=www.google.com', /(?<!td\.)(?<!fls\.)(?<!securepubads\.g\.)(?<!googleads\.g\.)doubleclick\.net/
// 'cp=\\d+-[\\w-]+',
// 'gclid=[\\w-]+',
// 'gclsrc=aw\\.ds',
// 'kwd=\\d+-\\d+',
];
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





// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var slicedToArray = __webpack_require__(3453);
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
/* harmony default export */ const i18n = ((/* unused pure expression or super */ null && (i18next)));
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
var getStorageData = promiseWrapper(chrome.storage.local, 'get');
var setStorageData = promiseWrapper(chrome.storage.local, 'set');
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
var getActiveTab = function getActiveTab() {
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
          return getStorageData('tcbtbauth');
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
          return getActiveTab();
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
  _decompressGzipBody = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5(compressedResponse) {
    var ds, decompressedStream, blob, data;
    return regenerator_default().wrap(function _callee5$(_context5) {
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
  _consoleLog = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee6() {
    var debug,
      _len,
      args,
      _key,
      body,
      _args6 = arguments;
    return regenerator_default().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return getStorageData('debug');
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

;// CONCATENATED MODULE: ./source/bg/core/utils.js



var utils_getStorageData = function getStorageData(keys) {
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
var utils_setStorageData = function setStorageData(items) {
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
var sendBackgroundMessageWithRetries = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(tabId, params) {
    var retries,
      interval,
      merchantName,
      callback,
      response,
      retriesLeft,
      _args = arguments;
    return regenerator_default().wrap(function _callee$(_context) {
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
}();
var utils_getActiveTab = function getActiveTab() {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(436);
// EXTERNAL MODULE: ./node_modules/lodash/groupBy.js
var groupBy = __webpack_require__(2013);
var groupBy_default = /*#__PURE__*/__webpack_require__.n(groupBy);
;// CONCATENATED MODULE: ./source/parses.js



/* eslint-disable no-prototype-builtins */


// const getMerchantId = (url) => {
//   const searchParams = new URL(url).searchParams;
//   return searchParams.get('mpid');
// };

var parseDomain = function parseDomain(url) {
  try {
    return new URL(url).host.replace('www.', '');
  } catch (e) {
    return url;
  }
};
var checkDomain = function checkDomain(url) {
  if (!/^https?:\/\//.test(url) && url != null) {
    return "".concat(HOME_PAGE).concat(url);
  }
  return url;
};
var checkCDNDomain = function checkCDNDomain(url) {
  if (!/^https?:\/\//.test(url) && url != null) {
    return "".concat(CDN_HOME).concat(url);
  }
  return url;
};
var parseUrl = function parseUrl(url) {
  try {
    return url.replace(/\/$/, '').replace('www.', '');
  } catch (e) {
    return url;
  }
};

// parseMerchant
var parseOffer = function parseOffer(offer, merchant) {
  return {
    activationUrl: checkDomain(offer.ClickThroughUrl),
    code: offer.Code,
    description: offer.Title,
    expiration: offer.ExpiryDate,
    logo: checkCDNDomain(merchant.SquareLogoUrl)
  };
};
var parseTopOffer = function parseTopOffer(offer) {
  return {
    name: offer.Name,
    activationUrl: checkDomain(offer.ClickThroughUrl) || checkDomain(offer.NavigateUrl),
    reward: offer.CashbackRate,
    description: offer.Description,
    dynamicText: offer.DynamicText || '',
    banner: checkCDNDomain(offer.ImageUrl),
    logo: checkCDNDomain(offer.SquareLogoUrl),
    startDate: offer.StartDateUtc,
    endDate: offer.ExpiryDateUtc
  };
};
var parseTiers = function parseTiers(tier) {
  return {
    name: tier.Title,
    reward: tier.CashbackRate.replace('.00', ''),
    expiration: tier.ExpiryDate,
    url: checkDomain(tier.ClickThroughUrl),
    categoryName: tier.Category ? tier.Category.Name : 'no_category',
    labelType: tier.Category ? 'category_type' : 'single_type',
    sortOrder: tier.Category ? parseInt(tier.Category.SortOrder, 10) : Number.MAX_VALUE
  };
};
var groupByTiers = function groupByTiers(tiers) {
  // parse tiers from json to an array
  var parsedTiers = tiers.map(parseTiers);
  // group parsed array by category and returns an object hash
  var groupedTiers = groupBy_default()(parsedTiers, 'categoryName');
  var organizedTiers = [];
  if (Object.keys(groupedTiers).length > 1 && groupedTiers.hasOwnProperty('no_category')) {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    groupedTiers.no_category.forEach(function (tier) {
      return tier.labelType = 'multiple_type';
    });
  }
  Object.entries(groupedTiers).forEach(function (_ref) {
    var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
      category = _ref2[0],
      items = _ref2[1];
    organizedTiers.push({
      name: category,
      rates: items,
      sortOrder: items['0'].sortOrder
    });
  });
  var sortedTiers = organizedTiers.sort(function (a, b) {
    return a.sortOrder - b.sortOrder;
  });
  return sortedTiers;
};
var parseMerchantSettings = function parseMerchantSettings(settings) {
  return {
    isNotificationEnabled: settings.DisplayAlerts,
    isSerpEnabled: settings.IncludeInSearchEngineResults === 'Any',
    suppressionKind: settings.IncludeInSearchEngineResults
  };
};
var parseMerchantInfo = function parseMerchantInfo(info) {
  return {
    important: info && info.Important,
    exclusions: info && info.Exclusions
  };
};
var parseSlimMerchant = function parseSlimMerchant(merchant) {
  return {
    id: "".concat(merchant.MerchantId),
    name: merchant.Name,
    logo: checkCDNDomain(merchant.SquareLogoUrl),
    domain: parseDomain(merchant.MerchantDomain),
    activationUrl: checkDomain(merchant.ClickThroughUrl),
    url: parseUrl(merchant.MerchantDomain).toLowerCase(),
    reward: merchant.CashbackRate,
    settings: parseMerchantSettings(merchant.DisplaySettings),
    info: parseMerchantInfo(merchant.AdditionalInformation),
    topCashbackUrl: checkDomain(merchant.TopCashbackUrl),
    couponsAmount: merchant.TotalDiscountCodes,
    offers_length: 0,
    isRequiresBacs: REQUIRED_BACS_ACTIVE ? merchant.RequiresBacs : false,
    lastModifiedSince: '',
    terms: merchant.Terms,
    exclusions: merchant.Exclusions,
    highAlert: merchant.HighAlert || []
  };
};
var parseMerchant = function parseMerchant(merchant) {
  return {
    id: "".concat(merchant.MerchantId),
    name: merchant.Name,
    logo: checkCDNDomain(merchant.SquareLogoUrl),
    domain: parseDomain(merchant.MerchantDomain),
    activationUrl: checkDomain(merchant.ClickThroughUrl),
    url: parseUrl(merchant.MerchantDomain).toLowerCase(),
    reward: merchant.CashbackRate,
    offers: [].concat((0,toConsumableArray/* default */.A)(merchant.Deals), (0,toConsumableArray/* default */.A)(merchant.DiscountCodes)).map(function (offer) {
      return parseOffer(offer, merchant);
    }),
    couponsAmount: (merchant.DiscountCodes || []).length,
    dealsAmount: (merchant.Deals || []).length,
    settings: parseMerchantSettings(merchant.DisplaySettings),
    tiers: groupByTiers(merchant.Offers),
    offers_length: merchant.Offers.length,
    info: parseMerchantInfo(merchant.AdditionalInformation),
    topCashbackUrl: checkDomain(merchant.TopCashbackUrl),
    isRequiresBacs: REQUIRED_BACS_ACTIVE ? merchant.RequiresBacs : false,
    terms: merchant.Terms,
    exclusions: merchant.Exclusions,
    highAlert: merchant.HighAlert || []
  };
};
var parseSlimMerchants = function parseSlimMerchants(data) {
  return data.filter(function (_ref3) {
    var domain = _ref3.MerchantDomain;
    return domain && domain.toLowerCase().indexOf('topcashback') === -1;
  }).filter(function (_ref4) {
    var domain = _ref4.MerchantDomain;
    return domain !== 'http://www.';
  }).map(parseSlimMerchant);
};
var parseUserInfo = function parseUserInfo(userInfo) {
  return {
    isLoggedIn: userInfo.IsLoggedIn,
    isPlus: userInfo.Membership === 'Plus',
    hasBacs: userInfo.HasBacsDetailsSaved || false
  };
};

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js
var get = __webpack_require__(6045);
// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(9859);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);
// EXTERNAL MODULE: ./node_modules/lodash/each.js
var each = __webpack_require__(6135);
var each_default = /*#__PURE__*/__webpack_require__.n(each);
// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(7309);
var find_default = /*#__PURE__*/__webpack_require__.n(find);
;// CONCATENATED MODULE: ./source/bg/core/fetcher.js





/* eslint class-methods-use-this: ["error", { "exceptMethods": ["parse"] }] */
var DynamicFetcher = /*#__PURE__*/function () {
  function DynamicFetcher(args) {
    (0,classCallCheck/* default */.A)(this, DynamicFetcher);
    var name = args.name,
      url = args.url,
      options = args.options,
      updateDelay = args.updateDelay,
      errorDelay = args.errorDelay;
    if (!name || !url) {
      throw new Error('name or url parameter is undefined');
    }
    this.name = name;
    this.url = url;
    this.options = options || {};
    this.updateDelay = updateDelay || 4 * 60 * 60 * 1000;
    this.errorDelay = errorDelay || this.updateDelay / 10;
    this.data = null;
  }
  return (0,createClass/* default */.A)(DynamicFetcher, [{
    key: "parse",
    value: function parse(data) {
      return data;
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(function (url, options) {
      var params = options ? merge_default()(this.options, options) : this.options;
      return fetch(url || this.url, params).then(function (response) {
        return response.json();
      });
    })
  }, {
    key: "update",
    value: function update(force) {
      var _this = this;
      clearInterval(this.updateInterval);
      return utils_getStorageData(["".concat(this.name, ".lastUpdate"), "".concat(this.name, ".data")]).then(function (items) {
        var lastUpdate = items["".concat(_this.name, ".lastUpdate")];
        var cashedData = items["".concat(_this.name, ".data")];
        var now = new Date().getTime();
        if (lastUpdate + _this.updateDelay >= now && cashedData && !force) {
          _this.data = cashedData;
          var nextUpdate = lastUpdate + _this.updateDelay - now;
          _this.updateInterval = setInterval(function () {
            return _this.update();
          }, nextUpdate);
          return _this.data;
        }
        return _this.fetch().then(function (data) {
          return _this.parse(data);
        }).then(function (data) {
          if (data) {
            _this.data = data;
            var cash = {};
            cash["".concat(_this.name, ".data")] = data;
            cash["".concat(_this.name, ".lastUpdate")] = now;
            utils_setStorageData(cash);
            _this.updateInterval = setInterval(function () {
              return _this.update();
            }, _this.updateDelay);
          } else {
            var errorUpdate = _this.data ? _this.errorDelay : _this.errorDelay / 10;
            _this.updateInterval = setInterval(function () {
              return _this.update(true);
            }, errorUpdate);
          }
          return _this.data;
        })["catch"](function (e) {
          consoleLog(e);
          var errorUpdate = _this.data ? _this.errorDelay : _this.errorDelay / 10;
          _this.updateInterval = setInterval(function () {
            return _this.update(true);
          }, errorUpdate);
        });
      });
    }
  }]);
}();

;// CONCATENATED MODULE: ./source/bg/core/baseMerchant.js














function _callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = (0,get/* default */.A)((0,getPrototypeOf/* default */.A)(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }


var BaseMerchants = /*#__PURE__*/function (_DynamicFetcher) {
  function BaseMerchants(_args) {
    var _this;
    (0,classCallCheck/* default */.A)(this, BaseMerchants);
    _this = _callSuper(this, BaseMerchants, [_args]);
    (0,defineProperty/* default */.A)(_this, "resetStates", /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
      var resetedStates;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (_this.isReady) {
              _context.next = 3;
              break;
            }
            _context.next = 3;
            return _this.initStates();
          case 3:
            resetedStates = [];
            _this.states.forEach(function (state) {
              resetedStates.push(merge_default()({
                id: state.id
              }, BaseMerchants.defaultState()));
            });
            _this.states = [].concat(resetedStates);
            utils_setStorageData({
              states: _this.states
            });
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    (0,defineProperty/* default */.A)(_this, "updateStates", /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (_this.isReady) {
              _context2.next = 3;
              break;
            }
            _context2.next = 3;
            return _this.initStates();
          case 3:
            each_default()(_this.data, function (m) {
              if (!find_default()(_this.states, function (s) {
                return s.id === m.id;
              })) {
                _this.states.push(merge_default()({
                  id: m.id
                }, BaseMerchants.defaultState()));
              }
            });
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
    (0,defineProperty/* default */.A)(_this, "setState", /*#__PURE__*/function () {
      var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(args) {
        var url, id, data, tabId, sid, merchant, state;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              url = args.url, id = args.id, data = args.data, tabId = args.tabId;
              sid = id;
              if (id === undefined || id === '' || id === null) {
                merchant = _this.getBy('url', url);
                sid = merchant && merchant.id;
              }
              if (!(sid === undefined || sid === '' || sid === null)) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return", false);
            case 5:
              state = find_default()(_this.states, function (s) {
                return s.id === sid.toString() || s.id === sid;
              });
              merge_default()(state, data);
              utils_setStorageData({
                states: _this.states
              });
              BaseMerchants.updateContentState({
                data: {
                  merchant: merge_default()({
                    id: sid
                  }, state)
                },
                excludedTabId: tabId
              });
              return _context3.abrupt("return", state);
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
    _this.states = [];
    _this.isReady = false;
    _this.initStates();
    return _this;
  }
  (0,inherits/* default */.A)(BaseMerchants, _DynamicFetcher);
  return (0,createClass/* default */.A)(BaseMerchants, [{
    key: "initStates",
    value: function () {
      var _initStates = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4() {
        var _yield$getStorageData, states;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return utils_getStorageData('states');
            case 2:
              _yield$getStorageData = _context4.sent;
              states = _yield$getStorageData.states;
              merge_default()(this.states, states);
              this.isReady = true;
              // inspired on settings.js (getStates to allow sync to be in place)
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function initStates() {
        return _initStates.apply(this, arguments);
      }
      return initStates;
    }()
  }, {
    key: "update",
    value: function update(force) {
      return _superPropGet(BaseMerchants, "update", this, 3)([force]).then(this.updateStates.bind(this));
    }
  }, {
    key: "refreshStates",
    value:
    // Use this method if user will be signed out
    function refreshStates() {
      each_default()(this.states, function (state) {
        merge_default()(state, BaseMerchants.defaultState());
      });
    }
  }, {
    key: "getBy",
    value: function getBy(method, data) {
      switch (method) {
        case 'url':
          return this.getByUrl(data);
        case 'activationUrl':
          return this.getByActivationUrl(data);
        case 'id':
          return this.getById(data);
        case 'name':
          return this.getByName(data);
        default:
          return null;
      }
    }
  }, {
    key: "getByUrl",
    value: function getByUrl(url) {
      if (!url) {
        return null;
      }
      try {
        var host = new URL(url).host;
        return find_default()(this.data, function (_ref4) {
          var domain = _ref4.domain;
          return host.match(domain);
        });
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "getByActivationUrl",
    value: function getByActivationUrl(url) {
      if (!url) {
        return null;
      }
      try {
        return find_default()(this.data, function (_ref5) {
          var activationUrl = _ref5.activationUrl;
          var match = includes_default()(url, activationUrl);
          return match;
        });
      } catch (e) {
        return null;
      }
    }
  }, {
    key: "getByName",
    value: function getByName(_ref6) {
      var name = _ref6.name,
        value = _ref6.value;
      return find_default()(this.data, function (merchant) {
        return merchant[name] === value;
      });
    }
  }, {
    key: "getById",
    value: function getById(id) {
      return this.data.find(function (m) {
        return String(m.id) === String(id);
      });
    }
  }], [{
    key: "defaultState",
    value: function defaultState() {
      return {
        activated: false,
        showNotification: true
      };
    }
  }, {
    key: "updateContentState",
    value: function updateContentState(_ref7) {
      var data = _ref7.data,
        excludedTabId = _ref7.excludedTabId;
      return getAllTabs().then(function (tabs) {
        var promises = [];
        var filtered = filter_default()(tabs, function (tab) {
          return tab.id !== excludedTabId;
        });
        each_default()(filtered, function (tab) {
          promises.push(sendBackgroundMessage(tab.id, {
            action: 'silentUpdate',
            data: data
          }));
        });
        return Promise.all(promises);
      });
    }
  }]);
}(DynamicFetcher);

;// CONCATENATED MODULE: ./source/bg/merchants.js









function merchants_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = merchants_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function merchants_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return merchants_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? merchants_arrayLikeToArray(r, a) : void 0; } }
function merchants_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

function merchants_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, merchants_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function merchants_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (merchants_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }





/* eslint class-methods-use-this: ["error", { "exceptMethods": ["parse", "parseMerchant"] }] */
var Merchants = /*#__PURE__*/function (_BaseMerchants) {
  function Merchants(_ref) {
    var _this;
    var getSettings = _ref.getSettings,
      setSettings = _ref.setSettings;
    (0,classCallCheck/* default */.A)(this, Merchants);
    _this = merchants_callSuper(this, Merchants, [{
      name: 'merchants',
      url: MERCHANTS_URL,
      updateDelay: MERCHANTS_UPDATE_DELAY,
      errorDelay: 0
    }]);
    _this.getSettings = getSettings;
    _this.setSettings = setSettings;
    _this.redirectCounter = 0;
    _this.modified = {};
    _this.lastModifiedMerchants = '';
    _this.previosIsPlus = false;
    _this.analytics = null;
    _this.setAlarmListenersMerchants();
    _this.setInitialValues();
    return _this;
  }
  (0,inherits/* default */.A)(Merchants, _BaseMerchants);
  return (0,createClass/* default */.A)(Merchants, [{
    key: "setInitialValues",
    value: function () {
      var _setInitialValues = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var _yield$getStorageData, lastModifiedMerchants, _yield$getStorageData2, previosIsPlus, data, modified;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return utils_getStorageData('lastModifiedMerchants');
            case 2:
              _yield$getStorageData = _context.sent;
              lastModifiedMerchants = _yield$getStorageData.lastModifiedMerchants;
              _context.next = 6;
              return utils_getStorageData('previosIsPlus');
            case 6:
              _yield$getStorageData2 = _context.sent;
              previosIsPlus = _yield$getStorageData2.previosIsPlus;
              this.lastModifiedMerchants = lastModifiedMerchants;
              this.previosIsPlus = previosIsPlus;
              _context.next = 12;
              return utils_getStorageData('merchants.data');
            case 12:
              data = _context.sent;
              this.data = data['merchants.data'];
              _context.next = 16;
              return utils_getStorageData('merchants.modified');
            case 16:
              modified = _context.sent;
              this.modified = !modified['merchants.modified'] ? {} : modified['merchants.modified'];
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setInitialValues() {
        return _setInitialValues.apply(this, arguments);
      }
      return setInitialValues;
    }()
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
      var userData, user, isPlus, settings, browser, device, headers, consents, response, isResponseCompressed, _iterator, _step, header, data;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return utils_getStorageData('user.data');
          case 2:
            userData = _context2.sent;
            user = userData['user.data'];
            isPlus = user && user.isPlus;
            _context2.next = 7;
            return this.getSettings();
          case 7:
            settings = _context2.sent;
            browser = getBrowser();
            device = getDevice();
            if (isPlus) {
              this.url = MERCHANTS_URL_PLUS;
            } else {
              this.url = MERCHANTS_URL;
            }
            if (this.previosIsPlus !== isPlus) {
              this.lastModifiedMerchants = '';
              this.previosIsPlus = isPlus;
              utils_setStorageData({
                previosIsPlus: this.previosIsPlus
              });
            }
            headers = {
              'If-Modified-Since': IS_CONFIG_TESTING ? '' : this.lastModifiedMerchants,
              'Toolbar-Version': VERSION,
              'Toolbar-Fingerprint': settings.analyticsClientId
            }; // eslint-disable-next-line no-undef
            _context2.next = 15;
            return app.settings.showConsents();
          case 15:
            consents = _context2.sent;
            if (!consents) {
              headers = _objectSpread(_objectSpread({}, headers), {}, {
                'Browser-Type': "".concat(browser, "_").concat(device)
              });
            }

            // only for testing check this back later
            _context2.next = 19;
            return fetch(this.url, {
              headers: headers,
              cache: IS_CONFIG_TESTING ? 'no-cache' : 'default'
            });
          case 19:
            response = _context2.sent;
            if (!(response.status === 304)) {
              _context2.next = 22;
              break;
            }
            return _context2.abrupt("return", {
              local: true,
              data: this.data
            });
          case 22:
            if (!(!response.ok || response.status !== 200)) {
              _context2.next = 24;
              break;
            }
            return _context2.abrupt("return", {
              local: true,
              data: this.data
            });
          case 24:
            isResponseCompressed = false; // eslint-disable-next-line no-restricted-syntax
            _iterator = merchants_createForOfIteratorHelper(response.headers.entries());
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                header = _step.value;
                if (header[0] === 'date') {
                  this.lastModifiedMerchants = header[1];
                  utils_setStorageData({
                    lastModifiedMerchants: this.lastModifiedMerchants
                  });
                }
                if (header[0] === 'content-type') {
                  if (header[1] === 'application/x-gzip') {
                    isResponseCompressed = true;
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            this.modified = {};
            utils_setStorageData({
              'merchants.modified': this.modified
            });
            data = [];
            if (!(isResponseCompressed && BROWSER !== 'safari')) {
              _context2.next = 36;
              break;
            }
            _context2.next = 33;
            return decompressGzipBody(response);
          case 33:
            data = _context2.sent;
            _context2.next = 39;
            break;
          case 36:
            _context2.next = 38;
            return response.json();
          case 38:
            data = _context2.sent;
          case 39:
            return _context2.abrupt("return", {
              local: false,
              data: data
            });
          case 40:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    })))
  }, {
    key: "setAlarmListenersMerchants",
    value: function setAlarmListenersMerchants() {
      var _this2 = this;
      chrome.alarms.onAlarm.addListener(function (event) {
        if (event.name === _this2.name) {
          _this2.update();
        } else if (event.name === "".concat(_this2.name, "_force")) {
          _this2.update(true);
        }
      });
    }
  }, {
    key: "update",
    value: function update(force) {
      var _this3 = this;
      return utils_getStorageData(["".concat(this.name, ".lastUpdate"), "".concat(this.name, ".data")]).then(function (items) {
        var lastUpdate = items["".concat(_this3.name, ".lastUpdate")];
        var cashedData = items["".concat(_this3.name, ".data")];
        var now = new Date().getTime();
        if (lastUpdate + _this3.updateDelay >= now && cashedData && !force) {
          _this3.data = cashedData;
          var nextUpdate = lastUpdate + _this3.updateDelay;
          chrome.alarms.create(_this3.name, {
            when: nextUpdate
          });
          return _this3.data;
        }
        return _this3.fetch().then(function (data) {
          return _this3.parse(data);
        }).then(function (data) {
          if (data) {
            _this3.errorDelay = 0;
            _this3.data = data;
            var cash = {};
            cash["".concat(_this3.name, ".data")] = data;
            cash["".concat(_this3.name, ".lastUpdate")] = now;
            utils_setStorageData(cash);
            chrome.alarms.create(_this3.name, {
              when: _this3.updateDelay + now
            });
          } else {
            _this3.handleError();
          }
          return _this3.data;
        })["catch"](function () {
          _this3.handleError();
        });
      }).then(this.updateStates.bind(this));
    }
  }, {
    key: "handleError",
    value: function handleError() {
      if (this.errorDelay < 24 * 60 * 60 * 1000) {
        this.errorDelay += 15 * 60 * 1000 + Math.floor(Math.random() * 180) * 1000;
      }
      var now = new Date().getTime();
      chrome.alarms.create("".concat(this.name, "_force"), {
        when: this.errorDelay + now
      });
    }
  }, {
    key: "parse",
    value: function parse(_ref3) {
      var local = _ref3.local,
        data = _ref3.data;
      if (local) {
        return data;
      }
      return parseSlimMerchants(data);
    }
  }, {
    key: "getMerchantAndState",
    value: function () {
      var _getMerchantAndState = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(_ref4) {
        var _ref4$url, url, _ref4$merchantId, merchantId, _ref4$updateSingleMer, updateSingleMerchant, merchant, state;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _ref4$url = _ref4.url, url = _ref4$url === void 0 ? null : _ref4$url, _ref4$merchantId = _ref4.merchantId, merchantId = _ref4$merchantId === void 0 ? null : _ref4$merchantId, _ref4$updateSingleMer = _ref4.updateSingleMerchant, updateSingleMerchant = _ref4$updateSingleMer === void 0 ? true : _ref4$updateSingleMer;
              merchant = null;
              if (!merchantId) {
                _context3.next = 8;
                break;
              }
              _context3.next = 5;
              return this.getById(merchantId);
            case 5:
              merchant = _context3.sent;
              _context3.next = 15;
              break;
            case 8:
              if (!url) {
                _context3.next = 14;
                break;
              }
              _context3.next = 11;
              return this.getByUrl(url);
            case 11:
              merchant = _context3.sent;
              _context3.next = 15;
              break;
            case 14:
              throw new Error('Error: No slug or id');
            case 15:
              if (!(merchant && updateSingleMerchant)) {
                _context3.next = 19;
                break;
              }
              _context3.next = 18;
              return this.updateSingleMerchant(merchant);
            case 18:
              merchant = _context3.sent;
            case 19:
              state = merchant && this.states.find(function (s) {
                return s.id === merchant.id;
              });
              return _context3.abrupt("return", {
                merchant: merchant,
                state: state
              });
            case 21:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getMerchantAndState(_x) {
        return _getMerchantAndState.apply(this, arguments);
      }
      return getMerchantAndState;
    }()
  }, {
    key: "updateModified",
    value: function updateModified(_ref5) {
      var merchantId = _ref5.merchantId,
        _ref5$updateRequestDa = _ref5.updateRequestDate,
        updateRequestDate = _ref5$updateRequestDa === void 0 ? false : _ref5$updateRequestDa,
        _ref5$updateLastDate = _ref5.updateLastDate,
        updateLastDate = _ref5$updateLastDate === void 0 ? false : _ref5$updateLastDate;
      if (updateRequestDate) {
        if (this.modified[merchantId]) {
          this.modified[merchantId].requestDate = Date.now() + UPDATE_SINGLE_MERCHANT_TIMEOUT;
          utils_setStorageData({
            'merchants.modified': this.modified
          });
        } else {
          this.modified[merchantId] = {
            requestDate: Date.now() + UPDATE_SINGLE_MERCHANT_TIMEOUT
          };
          utils_setStorageData({
            'merchants.modified': this.modified
          });
        }
      }
      if (updateLastDate) {
        this.modified[merchantId] = {
          lastDate: Date.now() + UPDATE_SINGLE_MERCHANT_INTERVAL,
          requestDate: null
        };
        utils_setStorageData({
          'merchants.modified': this.modified
        });
      }
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "updateSingleMerchant",
    value: function () {
      var _updateSingleMerchant = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4(merchant) {
        var userData, user, isPlus, url, browser, device, headers, consents, response, lastModifiedSince, _iterator2, _step2, header, data;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!this.modified[merchant.id]) {
                _context4.next = 5;
                break;
              }
              if (!(this.modified[merchant.id].lastDate > Date.now() && merchant.lastModifiedSince !== '')) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return", merchant);
            case 3:
              if (!(this.modified[merchant.id].requestDate > Date.now())) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return", merchant);
            case 5:
              this.updateModified({
                merchantId: merchant.id,
                updateRequestDate: true
              });
              _context4.next = 8;
              return utils_getStorageData('user.data');
            case 8:
              userData = _context4.sent;
              user = userData['user.data'];
              isPlus = user && user.isPlus;
              url = "".concat(isPlus ? MERCHANT_URL_PLUS : MERCHANT_URL).concat(merchant.id, ".json"); // if (IS_CONFIG_TESTING) {
              //   url = `${MERCHANTS_URL_DETAIL}_${merchant.id}.json`;
              // }
              browser = getBrowser();
              device = getDevice();
              headers = {
                'If-Modified-Since': merchant.lastModifiedSince,
                'Toolbar-Version': VERSION,
                // eslint-disable-next-line no-undef
                'Toolbar-Fingerprint': app.settings.analyticsClientId
              }; // eslint-disable-next-line no-undef
              _context4.next = 17;
              return app.settings.showConsents();
            case 17:
              consents = _context4.sent;
              if (!consents) {
                headers = _objectSpread(_objectSpread({}, headers), {}, {
                  'Browser-Type': "".concat(browser, "_").concat(device)
                });
              }
              _context4.next = 21;
              return fetch(url, {
                headers: headers
              });
            case 21:
              response = _context4.sent;
              if (!(response.status === 304)) {
                _context4.next = 25;
                break;
              }
              this.updateModified({
                merchantId: merchant.id,
                updateLastDate: true
              });
              return _context4.abrupt("return", merchant);
            case 25:
              if (!(!response.ok || response.status !== 200)) {
                _context4.next = 27;
                break;
              }
              return _context4.abrupt("return", merchant);
            case 27:
              lastModifiedSince = merchant.lastModifiedSince; // eslint-disable-next-line no-restricted-syntax
              _iterator2 = merchants_createForOfIteratorHelper(response.headers.entries());
              _context4.prev = 29;
              _iterator2.s();
            case 31:
              if ((_step2 = _iterator2.n()).done) {
                _context4.next = 38;
                break;
              }
              header = _step2.value;
              if (!(header[0] === 'date')) {
                _context4.next = 36;
                break;
              }
              lastModifiedSince = header[1];
              return _context4.abrupt("break", 38);
            case 36:
              _context4.next = 31;
              break;
            case 38:
              _context4.next = 43;
              break;
            case 40:
              _context4.prev = 40;
              _context4.t0 = _context4["catch"](29);
              _iterator2.e(_context4.t0);
            case 43:
              _context4.prev = 43;
              _iterator2.f();
              return _context4.finish(43);
            case 46:
              _context4.prev = 46;
              _context4.next = 49;
              return response.json();
            case 49:
              data = _context4.sent;
              _context4.next = 56;
              break;
            case 52:
              _context4.prev = 52;
              _context4.t1 = _context4["catch"](46);
              consoleLog('updateSingleMerchant', _context4.t1);
              return _context4.abrupt("return", merchant);
            case 56:
              this.updateModified({
                merchantId: merchant.id,
                updateLastDate: true
              });
              data = parseMerchant(data);
              _context4.next = 60;
              return merge_default()(data, {
                lastModifiedSince: lastModifiedSince
              });
            case 60:
              _context4.next = 62;
              return this.updateMerchants(data);
            case 62:
              return _context4.abrupt("return", data);
            case 63:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[29, 40, 43, 46], [46, 52]]);
      }));
      function updateSingleMerchant(_x2) {
        return _updateSingleMerchant.apply(this, arguments);
      }
      return updateSingleMerchant;
    }()
  }, {
    key: "updateMerchants",
    value: function () {
      var _updateMerchants = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5(updatedMerchant) {
        var merchantIndex;
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              merchantIndex = this.data.findIndex(function (merchant) {
                return merchant.id === updatedMerchant.id;
              });
              this.data[merchantIndex] = updatedMerchant;
              _context5.next = 4;
              return utils_setStorageData({
                'merchants.data': this.data
              });
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function updateMerchants(_x3) {
        return _updateMerchants.apply(this, arguments);
      }
      return updateMerchants;
    }()
  }, {
    key: "getByUrl",
    value: function getByUrl(url) {
      try {
        var _URL = new URL(url.toLowerCase()),
          host = _URL.host,
          pathname = _URL.pathname;
        var ignored = IGNORED_ULRS.find(function (ignoredUrl) {
          return host === ignoredUrl;
        });
        if (ignored) return null;
        var bestMatch = {
          len: 0,
          index: null
        };
        var filtered = this.data.filter(function (_ref6) {
          var domain = _ref6.domain;
          var rx = new RegExp("(^|\\.)".concat(domain));
          return rx.test(host);
        });
        filtered.forEach(function (_ref7, index) {
          var mUrl = _ref7.url,
            merchantId = _ref7.id;
          try {
            var currentUrl = host + pathname;
            currentUrl += currentUrl.endsWith('/') ? '' : '/';
            var isException = false;
            try {
              // eslint-disable-next-line no-undef
              isException = app.merchantExceptions.isException(url, merchantId);
              // eslint-disable-next-line no-empty
            } catch (_unused) {}
            if (!isException) {
              var _URL2 = new URL(mUrl),
                mHost = _URL2.host,
                mPath = _URL2.pathname;
              var merchantUrl = mHost + mPath;
              merchantUrl += merchantUrl.endsWith('/') ? '' : '/';
              var _ref8 = currentUrl.match(merchantUrl) || [],
                _ref9 = (0,slicedToArray/* default */.A)(_ref8, 1),
                match = _ref9[0];
              if (match && match.length > bestMatch.len) {
                Object.assign(bestMatch, {
                  len: match.length,
                  index: index
                });
              }
            }
          } catch (_unused2) {
            var message = "Url error! Domain: ".concat(mUrl);
            consoleLog(message);
          }
        });
        if (typeof bestMatch.index === 'number') {
          return filtered[bestMatch.index];
        }
        return null;
      } catch (e) {
        // no merchant matching url
        return null;
      }
    }
  }]);
}(BaseMerchants);

;// CONCATENATED MODULE: ./source/bg/customFetcher.js







function customFetcher_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, customFetcher_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function customFetcher_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (customFetcher_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var CustomFetcher = /*#__PURE__*/function (_DynamicFetcher) {
  function CustomFetcher() {
    var _this;
    (0,classCallCheck/* default */.A)(this, CustomFetcher);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = customFetcher_callSuper(this, CustomFetcher, [].concat(args));
    _this.setAlarmListenersCustomFetcher();
    _this.setInitialValues();
    return _this;
  }
  (0,inherits/* default */.A)(CustomFetcher, _DynamicFetcher);
  return (0,createClass/* default */.A)(CustomFetcher, [{
    key: "setInitialValues",
    value: function () {
      var _setInitialValues = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var data;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return utils_getStorageData("".concat(this.name, ".data"));
            case 2:
              data = _context.sent;
              this.data = data["".concat(this.name, ".data")];
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setInitialValues() {
        return _setInitialValues.apply(this, arguments);
      }
      return setInitialValues;
    }()
  }, {
    key: "setAlarmListenersCustomFetcher",
    value: function setAlarmListenersCustomFetcher() {
      var _this2 = this;
      chrome.alarms.onAlarm.addListener(function (event) {
        if (event.name === _this2.name) {
          _this2.update();
        } else if (event.name === "".concat(_this2.name, "_force")) {
          _this2.update(true);
        } else if (event.name === "".concat(_this2.name, "_force_without_save")) {
          _this2.update(true, false);
        }
      });
    }
  }, {
    key: "update",
    value: function update(force) {
      var _this3 = this;
      var saveStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (saveStorage) {
        chrome.alarms.clear("".concat(this.name, "_force_without_save"));
      }
      this.errorDelay = 20 * 60 * 1000 + Math.floor(Math.random() * 600) * 1000;
      return utils_getStorageData(["".concat(this.name, ".lastUpdate"), "".concat(this.name, ".data")]).then(function (items) {
        var lastUpdate = items["".concat(_this3.name, ".lastUpdate")];
        var cachedData = items["".concat(_this3.name, ".data")];
        var now = new Date().getTime();
        if (lastUpdate + _this3.updateDelay >= now && cachedData && !force) {
          _this3.data = cachedData;
          var nextUpdate = lastUpdate + _this3.updateDelay;
          chrome.alarms.create(_this3.name, {
            when: nextUpdate
          });
          return _this3.data;
        }
        return _this3.fetch().then(function (data) {
          return _this3.parse(data);
        }).then(function (data) {
          if (data || _this3.name.includes('flag') && data !== null) {
            _this3.data = data;
            var result = {};
            result["".concat(_this3.name, ".data")] = data;
            result["".concat(_this3.name, ".lastUpdate")] = now;
            if (saveStorage) {
              utils_setStorageData(result);
              chrome.alarms.create(_this3.name, {
                when: _this3.updateDelay + now
              });
            } else {
              chrome.alarms.create("".concat(_this3.name, "_force_without_save"), {
                when: _this3.updateDelay + now
              });
            }
          } else {
            var errorUpdate = _this3.errorDelay + now;
            if (saveStorage) {
              chrome.alarms.create("".concat(_this3.name, "_force"), {
                when: errorUpdate
              });
            } else {
              chrome.alarms.create("".concat(_this3.name, "_force_without_save"), {
                when: errorUpdate
              });
            }
          }
          return _this3.data;
        })["catch"](function () {
          var errorUpdate = _this3.errorDelay + now;
          if (saveStorage) {
            chrome.alarms.create("".concat(_this3.name, "_force"), {
              when: errorUpdate
            });
          } else {
            chrome.alarms.create("".concat(_this3.name, "_force_without_save"), {
              when: errorUpdate
            });
          }
        });
      });
    }
  }]);
}(DynamicFetcher);

;// CONCATENATED MODULE: ./source/bg/configs.js









function configs_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function configs_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? configs_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : configs_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function configs_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, configs_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function configs_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (configs_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }



var Configs = /*#__PURE__*/function (_CustomFetcher) {
  function Configs() {
    (0,classCallCheck/* default */.A)(this, Configs);
    return configs_callSuper(this, Configs, [{
      name: 'configs',
      url: CONFIGS_URL,
      updateDelay: CONFIGS_UPDATE_DELAY,
      errorDelay: 10 * 60 * 1000
    }]);
  }
  (0,inherits/* default */.A)(Configs, _CustomFetcher);
  return (0,createClass/* default */.A)(Configs, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(/*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(url, options) {
        var browser, device, headers, consents, prodOptions, params;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              browser = getBrowser();
              device = getDevice();
              headers = {
                'Toolbar-Version': VERSION,
                // eslint-disable-next-line no-undef
                'Toolbar-Fingerprint': app.settings.data.analyticsClientId
              }; // eslint-disable-next-line no-undef
              _context.next = 5;
              return app.settings.showConsents();
            case 5:
              consents = _context.sent;
              if (!consents) {
                headers = configs_objectSpread(configs_objectSpread({}, headers), {}, {
                  'Browser-Type': "".concat(browser, "_").concat(device)
                });
              }
              prodOptions = {
                headers: headers,
                cache: IS_CONFIG_TESTING ? 'no-cache' : 'default'
              };
              params = options ? merge_default()(this.options, options, prodOptions) : merge_default()(this.options, prodOptions);
              return _context.abrupt("return", fetch(url || this.url, params).then(function (response) {
                return response.json();
              }));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      return function (_x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "forceUpdate",
    value: function () {
      var _forceUpdate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.url = CONFIG_TOOL_URL;
              _context2.next = 3;
              return this.update(true);
            case 3:
              this.url = CONFIGS_URL;
              this.options = {};
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function forceUpdate() {
        return _forceUpdate.apply(this, arguments);
      }
      return forceUpdate;
    }()
  }]);
}(CustomFetcher);

;// CONCATENATED MODULE: ./source/bg/conquest.js









function conquest_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function conquest_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? conquest_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : conquest_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function conquest_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, conquest_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function conquest_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (conquest_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




var Conquest = /*#__PURE__*/function (_CustomFetcher) {
  function Conquest() {
    (0,classCallCheck/* default */.A)(this, Conquest);
    return conquest_callSuper(this, Conquest, [{
      name: 'conquest',
      url: CONQUEST_URL,
      updateDelay: CONQUEST_UPDATE_DELAY,
      errorDelay: 10 * 60 * 1000
    }]);
  }
  (0,inherits/* default */.A)(Conquest, _CustomFetcher);
  return (0,createClass/* default */.A)(Conquest, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(/*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(url, options) {
        var browser, device, headers, consents, prodOptions, params;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              browser = getBrowser();
              device = getDevice();
              headers = {
                'Toolbar-Version': VERSION,
                // eslint-disable-next-line no-undef
                'Toolbar-Fingerprint': app.settings.data.analyticsClientId
              }; // eslint-disable-next-line no-undef
              _context.next = 5;
              return app.settings.showConsents();
            case 5:
              consents = _context.sent;
              if (!consents) {
                headers = conquest_objectSpread(conquest_objectSpread({}, headers), {}, {
                  'Browser-Type': "".concat(browser, "_").concat(device)
                });
              }
              prodOptions = {
                headers: headers,
                cache: 'default'
              };
              params = options ? merge_default()(this.options, options, prodOptions) : merge_default()(this.options, prodOptions);
              return _context.abrupt("return", fetch(url || this.url, params).then(function (response) {
                return response.json();
              }));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      return function (_x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "getByUrl",
    value: function getByUrl(url) {
      try {
        var _URL = new URL(url.toLowerCase()),
          host = _URL.host,
          pathname = _URL.pathname;
        var ignored = IGNORED_ULRS.find(function (ignoredUrl) {
          return host === ignoredUrl;
        });
        if (ignored) return null;
        var bestMatch = {
          len: 0,
          index: null
        };
        var filtered = this.data.filter(function (_ref2) {
          var domain = _ref2.domain;
          try {
            var itemHost = new URL(domain.toLowerCase()).hostname;
            var escaped = itemHost.replace(/\./g, '\\.');
            var rx = new RegExp("(^|\\.)".concat(escaped, "$"));
            return rx.test(host);
          } catch (_unused) {
            return false;
          }
        });
        filtered.forEach(function (_ref3, index) {
          var mUrl = _ref3.domain;
          try {
            var _URL2 = new URL(mUrl),
              mHost = _URL2.host,
              mPath = _URL2.pathname;
            var currentUrl = host + pathname;
            currentUrl += currentUrl.endsWith('/') ? '' : '/';
            var merchantUrl = mHost + mPath;
            merchantUrl += merchantUrl.endsWith('/') ? '' : '/';
            if (currentUrl.startsWith(merchantUrl) && merchantUrl.length > bestMatch.len) {
              Object.assign(bestMatch, {
                len: merchantUrl.length,
                index: index
              });
            }
          } catch (_unused2) {
            var message = "Conquest Url error! Domain: ".concat(mUrl);
            consoleLog(message);
          }
        });
        if (typeof bestMatch.index === 'number') {
          return filtered[bestMatch.index];
        }
        return null;
      } catch (e) {
        // no merchant matching url
        return null;
      }
    }
  }, {
    key: "setShowNotification",
    value: function setShowNotification(slug, showNotification) {
      var data = [];
      var result = {};
      this.data.forEach(function (item) {
        var conquest = item;
        if (item.slug === slug) {
          conquest.showNotification = showNotification;
        }
        data.push(item);
      });
      this.data = data;
      result["".concat(this.name, ".data")] = data;
      utils_setStorageData(result);
    }
  }, {
    key: "setNotificationPosition",
    value: function () {
      var _setNotificationPosition = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(slug, notificationPosition) {
        var data, result;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              data = [];
              this.data.forEach(function (item) {
                var conquest = conquest_objectSpread({}, item);
                if (item.slug === slug) {
                  conquest.notificationPosition = notificationPosition;
                }
                data.push(conquest);
              });
              this.data = data;
              result = {};
              result["".concat(this.name, ".data")] = data;
              utils_setStorageData(result);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function setNotificationPosition(_x5, _x6) {
        return _setNotificationPosition.apply(this, arguments);
      }
      return setNotificationPosition;
    }()
  }, {
    key: "parse",
    value: function parse(data) {
      var _this = this;
      var result = [];
      data.forEach(function (item) {
        var newMerchant = {
          domain: item.Url,
          merchantId: item.MerchantId,
          showNotification: true,
          slug: item.Url.replace(/[^a-zA-Z0-9]/g, '')
        };
        var merchant = _this.getByUrl(item.Url);
        if (merchant) {
          newMerchant.showNotification = merchant.showNotification;
        }
        result.push(newMerchant);
      });
      return result;
    }
  }, {
    key: "resetState",
    value: function resetState() {
      if (this.data && this.data.length > 0) {
        this.data.forEach(function (conquest) {
          // eslint-disable-next-line no-param-reassign
          conquest.showNotification = true;
        });
        utils_setStorageData((0,defineProperty/* default */.A)({}, "".concat(this.name, ".data"), this.data));
      }
    }
  }]);
}(CustomFetcher);

;// CONCATENATED MODULE: ./source/bg/merchantExceptions.js






function merchantExceptions_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, merchantExceptions_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function merchantExceptions_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (merchantExceptions_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var MerchantExceptions = /*#__PURE__*/function (_CustomFetcher) {
  function MerchantExceptions() {
    var _this;
    (0,classCallCheck/* default */.A)(this, MerchantExceptions);
    _this = merchantExceptions_callSuper(this, MerchantExceptions, [{
      name: 'merchantExceptions',
      url: MERCHANT_EXCEPTIONS_URL,
      updateDelay: MERCHANT_EXCEPTIONS_UPDATE_DELAY,
      errorDelay: 10 * 60 * 1000
    }]);
    _this.data = {};
    return _this;
  }

  // eslint-disable-next-line class-methods-use-this
  (0,inherits/* default */.A)(MerchantExceptions, _CustomFetcher);
  return (0,createClass/* default */.A)(MerchantExceptions, [{
    key: "parse",
    value: function parse(data) {
      var result = {};
      Object.entries(data).forEach(function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
          merchantId = _ref2[0],
          urls = _ref2[1];
        result[merchantId] = urls.map(function (domain) {
          try {
            var _URL = new URL(domain),
              host = _URL.host,
              pathname = _URL.pathname;
            var _final = "".concat(host).concat(pathname);
            return _final.endsWith('/') ? _final : "".concat(_final, "/");
          } catch (err) {
            return null;
          }
        });
      });
      return result;
    }
  }, {
    key: "isException",
    value: function isException(url, merchantId) {
      try {
        var _this$data;
        var _URL2 = new URL(url),
          host = _URL2.host,
          pathname = _URL2.pathname;
        var current = host + pathname + (pathname.endsWith('/') ? '' : '/');
        var exceptions = (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data[String(merchantId)];
        if (!exceptions) return false;
        return exceptions.some(function (exUrl) {
          return current.startsWith(exUrl);
        });
      } catch (_unused) {
        return false;
      }
    }
  }]);
}(CustomFetcher);

;// CONCATENATED MODULE: ./source/bg/featureFlags.js








function featureFlags_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, featureFlags_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function featureFlags_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (featureFlags_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

// import {
//   FEATURE_FLAGS_URL, FEATURE_FLAGS_UPDATE_DELAY, VERSION,
// } from '../constants';
// import { getBrowser, getDevice } from '../utils';



var FeatureFlags = /*#__PURE__*/function (_CustomFetcher) {
  function FeatureFlags() {
    (0,classCallCheck/* default */.A)(this, FeatureFlags);
    return featureFlags_callSuper(this, FeatureFlags, [{
      name: 'featureFlags',
      url: FEATURE_FLAGS_URL,
      updateDelay: FEATURE_FLAGS_UPDATE_DELAY,
      errorDelay: 10 * 60 * 1000
    }]);
  }
  (0,inherits/* default */.A)(FeatureFlags, _CustomFetcher);
  return (0,createClass/* default */.A)(FeatureFlags, [{
    key: "setInitialValues",
    value: function () {
      var _setInitialValues = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var data;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return utils_getStorageData("".concat(this.name, ".data"));
            case 2:
              data = _context.sent;
              if (data) {
                this.data = data["".concat(this.name, ".data")];
              } else {
                this.data = false;
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setInitialValues() {
        return _setInitialValues.apply(this, arguments);
      }
      return setInitialValues;
    }()
  }, {
    key: "getFeatureFlags",
    value: function () {
      var _getFeatureFlags = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
        var _this$data, _this$data2, _this$data3, _this$data4;
        var isFirefox;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this.data) {
                _context2.next = 3;
                break;
              }
              _context2.next = 3;
              return this.forceRequest();
            case 3:
              isFirefox = getBrowser() === 'firefox';
              return _context2.abrupt("return", {
                flagRedirect: ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.IsRedirectFeatureEnabled) === 'true',
                flagRequireConsent: ((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2.RequireFirefoxConsent) === 'true' && isFirefox,
                flagTermsAndExclusions: ((_this$data3 = this.data) === null || _this$data3 === void 0 ? void 0 : _this$data3.ReturnTermsAndExclusions) === 'true',
                flagSleekEnabled: ((_this$data4 = this.data) === null || _this$data4 === void 0 ? void 0 : _this$data4.SleekEnabled) === 'true'
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getFeatureFlags() {
        return _getFeatureFlags.apply(this, arguments);
      }
      return getFeatureFlags;
    }()
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(/*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(url, options) {
        var headers, prodOptions, params;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              headers = {
                'Toolbar-Version': VERSION
              };
              prodOptions = {
                headers: headers,
                cache: 'default'
              };
              params = options ? merge_default()(this.options, options, prodOptions) : merge_default()(this.options, prodOptions);
              return _context3.abrupt("return", fetch(url || this.url, params).then(function (response) {
                return response.json();
              }));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      return function (_x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }())
  }, {
    key: "parse",
    value: function parse(data) {
      var _this$data5;
      var previousData = (_this$data5 = this.data) === null || _this$data5 === void 0 ? void 0 : _this$data5.SleekEnabled;
      var newData = data === null || data === void 0 ? void 0 : data.SleekEnabled;
      if (previousData == null) {
        return data;
      }
      if (previousData !== newData && getBrowser !== 'chrome') {
        chrome.alarms.create('reloadExtension', {
          delayInMinutes: 1
        });
      }
      return data;
    }
  }, {
    key: "forceRequest",
    value: function () {
      var _forceRequest = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4() {
        var force, items, lastUpdate, cachedData, now, nextUpdate, response, data, result, errorUpdate, _errorUpdate;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              force = true;
              this.errorDelay = 20 * 60 * 1000 + Math.floor(Math.random() * 600) * 1000;
              _context4.next = 4;
              return utils_getStorageData(["".concat(this.name, ".lastUpdate"), "".concat(this.name, ".data")]);
            case 4:
              items = _context4.sent;
              lastUpdate = items["".concat(this.name, ".lastUpdate")];
              cachedData = items["".concat(this.name, ".data")];
              now = new Date().getTime();
              if (!(lastUpdate + this.updateDelay >= now && cachedData && !force)) {
                _context4.next = 13;
                break;
              }
              this.data = cachedData;
              nextUpdate = lastUpdate + this.updateDelay;
              chrome.alarms.create(this.name, {
                when: nextUpdate
              });
              return _context4.abrupt("return", this.data);
            case 13:
              _context4.prev = 13;
              _context4.next = 16;
              return this.fetch();
            case 16:
              response = _context4.sent;
              data = this.parse(response);
              if (data || this.name.includes('flag') && data !== null) {
                this.data = data;
                result = {};
                result["".concat(this.name, ".data")] = data;
                result["".concat(this.name, ".lastUpdate")] = now;
                chrome.alarms.create("".concat(this.name, "_force_without_save"), {
                  when: this.updateDelay + now
                });
              } else {
                errorUpdate = this.errorDelay + now;
                chrome.alarms.create("".concat(this.name, "_force_without_save"), {
                  when: errorUpdate
                });
              }
              return _context4.abrupt("return", this.data);
            case 22:
              _context4.prev = 22;
              _context4.t0 = _context4["catch"](13);
              _errorUpdate = this.errorDelay + now;
              chrome.alarms.create("".concat(this.name, "_force_without_save"), {
                when: _errorUpdate
              });
            case 26:
              return _context4.abrupt("return", null);
            case 27:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[13, 22]]);
      }));
      function forceRequest() {
        return _forceRequest.apply(this, arguments);
      }
      return forceRequest;
    }()
  }]);
}(CustomFetcher);

// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(3375);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ./node_modules/lodash/remove.js
var remove = __webpack_require__(4174);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);
;// CONCATENATED MODULE: ./source/bg/core/cashback.js











var CashbackBase = /*#__PURE__*/function () {
  function CashbackBase(_ref) {
    var suppressionPatterns = _ref.suppressionPatterns,
      activationPatterns = _ref.activationPatterns,
      googleSuppressionPatterns = _ref.googleSuppressionPatterns,
      disableSuppressionPatterns = _ref.disableSuppressionPatterns,
      overrideSuppressionPatterns = _ref.overrideSuppressionPatterns;
    (0,classCallCheck/* default */.A)(this, CashbackBase);
    this.suppressionPatterns = suppressionPatterns;
    this.disableSuppressionPatterns = disableSuppressionPatterns;
    this.activationPatterns = activationPatterns;
    this.googleSuppressionPatterns = googleSuppressionPatterns;
    this.overrideSuppressionPatterns = overrideSuppressionPatterns;
    this.suppressions = [];
    this.activations = [];
    this.competitorsActivations = [];
    this.initActivationSuppressions();
    this.setAlarmListenersActivationsSuppressions();
  }
  return (0,createClass/* default */.A)(CashbackBase, [{
    key: "initActivationSuppressions",
    value: function () {
      var _initActivationSuppressions = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var _yield$getStorageData, activations, _yield$getStorageData2, competitorsActivations, _yield$getStorageData3, suppressions;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return utils_getStorageData('activations');
            case 2:
              _yield$getStorageData = _context.sent;
              activations = _yield$getStorageData.activations;
              merge_default()(this.activations, activations);
              _context.next = 7;
              return utils_getStorageData('competitorsActivations');
            case 7:
              _yield$getStorageData2 = _context.sent;
              competitorsActivations = _yield$getStorageData2.competitorsActivations;
              merge_default()(this.competitorsActivations, competitorsActivations);
              _context.next = 12;
              return utils_getStorageData('suppressions');
            case 12:
              _yield$getStorageData3 = _context.sent;
              suppressions = _yield$getStorageData3.suppressions;
              merge_default()(this.suppressions, suppressions);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initActivationSuppressions() {
        return _initActivationSuppressions.apply(this, arguments);
      }
      return initActivationSuppressions;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "checkUrlPattern",
    value: function checkUrlPattern(url, tabId, name) {
      // eslint-disable-next-line func-names
      return function (pattern) {
        var regex;
        if (pattern.regex === undefined) {
          regex = pattern;
        } else {
          regex = pattern.regex;
        }
        try {
          if (url.search(regex) > -1) {
            consoleLog({
              name: name,
              url: url,
              tabId: tabId,
              regex: regex
            });
            return true;
          }
          return false;
        } catch (e) {
          return url.indexOf(regex) > 0;
        }
      };
    }
  }, {
    key: "checkActivation",
    value: function () {
      var _checkActivation = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(_ref2) {
        var url, tabId, merchantId, patterns, isActivationUrl;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              url = _ref2.url, tabId = _ref2.tabId;
              merchantId = null;
              patterns = this.activationPatterns;
              isActivationUrl = find_default()(patterns, function (p) {
                return url && p && url.match(p);
              });
              if (isActivationUrl) {
                consoleLog({
                  name: 'checkActivation',
                  url: url,
                  tabId: tabId
                });
                this.setActivation({
                  url: url,
                  tabId: tabId,
                  merchantId: merchantId
                });
              }
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function checkActivation(_x) {
        return _checkActivation.apply(this, arguments);
      }
      return checkActivation;
    }()
  }, {
    key: "checkCompetitorsActivation",
    value: function () {
      var _checkCompetitorsActivation = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(_ref3) {
        var url, tabId, patterns, isActivationUrl, _yield$chrome$tabs$ge, windowId, parentTab, activation, tabObject, TabCompetitorActivation, WindowCompetitorActivation;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              url = _ref3.url, tabId = _ref3.tabId;
              patterns = this.activationPatterns;
              isActivationUrl = find_default()(patterns, function (p) {
                return url && p && url.match(p);
              });
              if (!(tabId > 0 && !isActivationUrl)) {
                _context3.next = 23;
                break;
              }
              _context3.next = 6;
              return chrome.tabs.get(tabId);
            case 6:
              _yield$chrome$tabs$ge = _context3.sent;
              windowId = _yield$chrome$tabs$ge.windowId;
              _context3.next = 10;
              return getTabs({
                active: true,
                windowId: windowId
              }).then(function (_ref4) {
                var _ref5 = (0,slicedToArray/* default */.A)(_ref4, 1),
                  tab = _ref5[0];
                return tab;
              });
            case 10:
              parentTab = _context3.sent;
              activation = this.findActivation(tabId);
              _context3.next = 14;
              return chrome.tabs.get(tabId);
            case 14:
              tabObject = _context3.sent;
              TabCompetitorActivation = find_default()(TAB_COMPETITORS_ACTIVATION, this.checkUrlPattern(url, tabId, 'checkCompetitorsActivation - tab'));
              WindowCompetitorActivation = find_default()(WINDOW_COMPETITORS_ACTIVATION, this.checkUrlPattern(url, tabId, 'checkCompetitorsActivation - window')); // the competitorActivation.competitor is needed because it can happen to
              // make a competitors activation while our activation is still on the array
              if (!(WindowCompetitorActivation && (!activation || WindowCompetitorActivation.competitor))) {
                _context3.next = 20;
                break;
              }
              this.setCompetitorsActivation({
                url: url,
                tabId: tabId,
                parentTab: parentTab === null || parentTab === void 0 ? void 0 : parentTab.id,
                competitorActivationKind: 'window',
                windowId: tabObject.windowId
              });
              return _context3.abrupt("return", true);
            case 20:
              if (!(TabCompetitorActivation && (!activation || TabCompetitorActivation.competitor))) {
                _context3.next = 23;
                break;
              }
              this.setCompetitorsActivation({
                url: url,
                tabId: tabId,
                parentTab: parentTab === null || parentTab === void 0 ? void 0 : parentTab.id,
                competitorActivationKind: 'tab',
                windowId: tabObject.windowId
              });
              return _context3.abrupt("return", true);
            case 23:
              return _context3.abrupt("return", false);
            case 24:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function checkCompetitorsActivation(_x2) {
        return _checkCompetitorsActivation.apply(this, arguments);
      }
      return checkCompetitorsActivation;
    }()
  }, {
    key: "checkSuppression",
    value: function () {
      var _checkSuppression = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4(_ref6) {
        var url, tabId, activation, merchantId, merchant, _response$result, response, activatedMerchants, activatedMerchant, now, activationTime, isOverrideSuppression, isSuppression, isGoogleSuppression, isDisableSuppression, tabObject;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              url = _ref6.url, tabId = _ref6.tabId;
              if (url) {
                _context4.next = 3;
                break;
              }
              return _context4.abrupt("return", false);
            case 3:
              activation = find_default()(this.activations, function (a) {
                return a.tabId === tabId;
              });
              if (!activation) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", false);
            case 6:
              merchantId = null;
              if (!(BROWSER === 'safari' && getDevice() === 'mobile')) {
                _context4.next = 24;
                break;
              }
              merchant = this.merchants.getByUrl(url);
              if (!merchant) {
                _context4.next = 24;
                break;
              }
              _context4.next = 12;
              return browser.runtime.sendNativeMessage('application.id', {
                message: 'get_merchants'
              });
            case 12:
              response = _context4.sent;
              activatedMerchants = (_response$result = response.result) === null || _response$result === void 0 ? void 0 : _response$result.merchants;
              activatedMerchant = activatedMerchants[merchant.id];
              if (!activatedMerchant) {
                _context4.next = 24;
                break;
              }
              now = new Date().getTime();
              activationTime = new Date(activatedMerchant.activationTime).getTime();
              delete activatedMerchants[merchant.id];
              browser.runtime.sendNativeMessage('application.id', {
                message: 'set_merchants',
                merchants: JSON.stringify(activatedMerchants)
              });
              if (!(now - activationTime < 2 * 60 * 1000)) {
                _context4.next = 24;
                break;
              }
              merchantId = merchant.id;
              this.setSuppression({
                url: url,
                tabId: tabId,
                suppressionKind: 'appSuppression',
                merchantId: merchantId
              });
              return _context4.abrupt("return", true);
            case 24:
              isOverrideSuppression = find_default()(this.overrideSuppressionPatterns, this.checkUrlPattern(url, tabId, 'checkSuppressionPattern - isOverrideSuppression'));
              isSuppression = find_default()(this.suppressionPatterns, this.checkUrlPattern(url, tabId, 'checkSuppressionPattern - isSuppression'));
              isGoogleSuppression = find_default()(this.googleSuppressionPatterns, this.checkUrlPattern(url, tabId, 'checkSuppressionPattern - isGoogleSuppression'));
              isDisableSuppression = find_default()(this.disableSuppressionPatterns, this.checkUrlPattern(url, tabId, 'checkSuppressionPattern - isDisableSuppression'));
              _context4.next = 30;
              return chrome.tabs.get(tabId);
            case 30:
              tabObject = _context4.sent;
              if (!isOverrideSuppression) {
                _context4.next = 34;
                break;
              }
              this.setSuppression({
                url: url,
                tabId: tabId,
                suppressionKind: 'overrideSuppression',
                windowId: tabObject.windowId
              });
              return _context4.abrupt("return", true);
            case 34:
              if (!isGoogleSuppression) {
                _context4.next = 37;
                break;
              }
              this.setSuppression({
                url: url,
                tabId: tabId,
                suppressionKind: 'googleSuppression',
                windowId: tabObject.windowId
              });
              return _context4.abrupt("return", true);
            case 37:
              if (!isSuppression) {
                _context4.next = 40;
                break;
              }
              this.setSuppression({
                url: url,
                tabId: tabId,
                suppressionKind: 'suppression',
                windowId: tabObject.windowId
              });
              return _context4.abrupt("return", true);
            case 40:
              if (isDisableSuppression) {
                this.setSuppression({
                  url: url,
                  tabId: tabId,
                  suppressionKind: 'disableSuppression',
                  windowId: tabObject.windowId
                });
              }
              return _context4.abrupt("return", false);
            case 42:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function checkSuppression(_x3) {
        return _checkSuppression.apply(this, arguments);
      }
      return checkSuppression;
    }()
  }, {
    key: "setSuppression",
    value: function setSuppression(_ref7) {
      var url = _ref7.url,
        tabId = _ref7.tabId,
        suppressionKind = _ref7.suppressionKind,
        windowId = _ref7.windowId;
      consoleLog({
        name: 'checkSuppression',
        url: url,
        tabId: tabId,
        suppressionKind: suppressionKind
      });
      var suppression = find_default()(this.suppressions, function (s) {
        return s.tabId === tabId;
      });
      if (!suppression) {
        suppression = {
          tabId: tabId,
          suppressionKind: suppressionKind,
          windowId: windowId
        };
        this.suppressions.push(suppression);
      } else if (suppressionKind === 'appSuppression' && suppression.suppressionKind !== 'appSuppression') {
        chrome.alarms.clear("suppressions_".concat(tabId));
        remove_default()(this.suppressions, function (i) {
          return i.tabId === tabId;
        });
        suppression = {
          tabId: tabId,
          suppressionKind: suppressionKind
        };
        this.suppressions.push(suppression);
        var competitorsActivations = find_default()(this.competitorsActivations, function (a) {
          return a.tabId === tabId;
        });
        if (competitorsActivations) {
          chrome.alarms.clear("competitorsActivations_".concat(tabId));
          remove_default()(this.competitorsActivations, function (i) {
            return i.tabId === tabId;
          });
          setStorageData({
            competitorsActivations: this.competitorsActivations
          });
        }
      } else if (suppressionKind === 'overrideSuppression' && suppression.suppressionKind !== 'overrideSuppression') {
        chrome.alarms.clear("suppressions_".concat(tabId));
        remove_default()(this.suppressions, function (i) {
          return i.tabId === tabId;
        });
        suppression = {
          tabId: tabId,
          suppressionKind: suppressionKind
        };
        this.suppressions.push(suppression);
        var _competitorsActivations = find_default()(this.competitorsActivations, function (a) {
          return a.tabId === tabId;
        });
        if (_competitorsActivations) {
          chrome.alarms.clear("competitorsActivations_".concat(tabId));
          remove_default()(this.competitorsActivations, function (i) {
            return i.tabId === tabId;
          });
          setStorageData({
            competitorsActivations: this.competitorsActivations
          });
        }
      }
      // clearTimeout(suppression.timer);
      chrome.alarms.create("suppressions_".concat(tabId), {
        when: Date.now() + REMOVE_SUPPRESSION_FROM_LIST_DELAY
      });
      setStorageData({
        suppressions: this.suppressions
      });
    }
  }, {
    key: "setAlarmListenersActivationsSuppressions",
    value: function setAlarmListenersActivationsSuppressions() {
      var _this = this;
      chrome.alarms.onAlarm.addListener(function (event) {
        var eventName = event.name.split('_')[0];
        var tabId = parseInt(event.name.split('_')[1], 10);
        _this.handleCashbackAlarmAction(eventName, tabId);
      });
    }
  }, {
    key: "handleCashbackAlarmAction",
    value: function handleCashbackAlarmAction(eventName, tabId) {
      if (eventName === 'suppressions') {
        remove_default()(this.suppressions, function (s) {
          return s.tabId === tabId;
        });
        setStorageData({
          suppressions: this.suppressions
        });
      } else if (eventName === 'activations') {
        remove_default()(this.activations, function (s) {
          return s.tabId === tabId;
        });
        setStorageData({
          activations: this.activations
        });
      } else if (eventName === 'competitorsActivations') {
        remove_default()(this.competitorsActivations, function (s) {
          return s.tabId === tabId;
        });
        setStorageData({
          competitorsActivations: this.competitorsActivations
        });
      }
    }
  }, {
    key: "setActivation",
    value: function setActivation(_ref8) {
      var tabId = _ref8.tabId,
        currentTabId = _ref8.currentTabId,
        deeplink = _ref8.deeplink,
        _ref8$merchantId = _ref8.merchantId,
        merchantId = _ref8$merchantId === void 0 ? null : _ref8$merchantId;
      var activation = find_default()(this.activations, function (a) {
        return a.tabId === tabId && (merchantId === null || a.merchantId === merchantId);
      });
      if (!activation) {
        activation = {
          tabId: tabId,
          currentTabId: currentTabId,
          merchantId: merchantId,
          siteLoaded: false
        };
        this.activations.push(activation);
      }
      activation.deeplink = activation.deeplink || deeplink;
      chrome.alarms.create("activations_".concat(tabId), {
        when: Date.now() + REMOVE_ACTIVATION_FROM_LIST_DELAY
      });
      setStorageData({
        activations: this.activations
      });
    }
  }, {
    key: "setCompetitorsActivation",
    value: function setCompetitorsActivation(_ref9) {
      var url = _ref9.url,
        tabId = _ref9.tabId,
        parentTab = _ref9.parentTab,
        competitorActivationKind = _ref9.competitorActivationKind,
        windowId = _ref9.windowId;
      consoleLog({
        name: 'checkCompetitorsActivation',
        url: url,
        tabId: tabId,
        competitorActivationKind: competitorActivationKind
      });
      var suppression = find_default()(this.suppressions, function (s) {
        return s.tabId === tabId && s.suppressionKind === 'appSuppression';
      });
      if (suppression) {
        return;
      }
      var competitorsActivations = find_default()(this.competitorsActivations, function (a) {
        return a.tabId === tabId;
      });
      if (!competitorsActivations) {
        competitorsActivations = {
          tabId: tabId,
          associatedTabs: [parentTab],
          windowId: windowId,
          competitorActivationKind: competitorActivationKind
        };
        this.competitorsActivations.push(competitorsActivations);
      } else if (competitorActivationKind === 'window' && competitorsActivations.competitorActivationKind !== 'window') {
        chrome.alarms.clear("competitorsActivations_".concat(tabId));
        remove_default()(this.competitorsActivations, function (i) {
          return i.tabId === tabId;
        });
        competitorsActivations = {
          tabId: tabId,
          associatedTabs: [parentTab].concat(competitorsActivations.associatedTabs),
          windowId: windowId,
          competitorActivationKind: competitorActivationKind
        };
        this.competitorsActivations.push(competitorsActivations);
      } else {
        competitorsActivations.associatedTabs.push(parentTab);
      }
      chrome.alarms.create("competitorsActivations_".concat(tabId), {
        when: Date.now() + REMOVE_COMPETITOR_ACTIVATION_FROM_LIST_DELAY
      });
      setStorageData({
        competitorsActivations: this.competitorsActivations
      });
    }
  }]);
}();

;// CONCATENATED MODULE: ./source/bg/cashback.js










function cashback_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, cashback_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function cashback_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (cashback_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




/* eslint class-methods-use-this:
["error", { "exceptMethods": ["checkUserLogin", "checkBasc"] }] */
var Cashback = /*#__PURE__*/function (_CashbackBase) {
  function Cashback() {
    var _this;
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0,classCallCheck/* default */.A)(this, Cashback);
    _this = cashback_callSuper(this, Cashback, [args]);
    _this.setAlarmListenersResetTimers();
    return _this;
  }
  /**
   * passes to checkURL
   * @param {*} args
   */
  (0,inherits/* default */.A)(Cashback, _CashbackBase);
  return (0,createClass/* default */.A)(Cashback, [{
    key: "check",
    value: (function () {
      var _check = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(args) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.checkURL(args);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function check(_x) {
        return _check.apply(this, arguments);
      }
      return check;
    }()
    /**
     * Where Activation and Suppression are checked
     * args.url args.tabId are the only required/used
     * @param {*} args
     * @returns {Boolean}
     */
    )
  }, {
    key: "checkURL",
    value: (function () {
      var _checkURL = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(args) {
        var matchCampId;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.checkPendingAlarms();
              this.checkCompetitorsActivation({
                url: args.url,
                tabId: args.tabId
              });
              _context2.next = 4;
              return this.checkActivation(args);
            case 4:
              _context2.next = 6;
              return this.checkSuppression(args);
            case 6:
              matchCampId = args.url.match(CAMPAIGN_ID_RX);
              if (matchCampId) {
                _context2.next = 9;
                break;
              }
              return _context2.abrupt("return", false);
            case 9:
              if (matchCampId[2].includes('campid') && !matchCampId[2].includes(CAMPAIGN_ID_EBAY)) {
                this.setSuppression({
                  tabId: args.tabId
                });
                this.defineIcon({
                  tabId: args.tabId
                });
                utils_setStorageData({
                  ebayTimestamp: Date.now() + 1000 * 60 * 60 * 24 // 24 hours
                });
              }
              return _context2.abrupt("return", true);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function checkURL(_x2) {
        return _checkURL.apply(this, arguments);
      }
      return checkURL;
    }())
  }, {
    key: "resetTimers",
    value: function resetTimers(alarm) {
      var removeAlarm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _alarm$split = alarm.split('_'),
        _alarm$split2 = (0,slicedToArray/* default */.A)(_alarm$split, 2),
        eventName = _alarm$split2[0],
        id = _alarm$split2[1];
      if (eventName === 'resetTimers') {
        var merchantId = parseInt(id, 10);
        this.merchants.setState({
          id: merchantId,
          data: {
            activated: false,
            showNotification: true,
            suppressed: false,
            suppressedWindows: [],
            suppressedKind: '',
            showReactivation: false,
            competitorActivationTab: null,
            competitorActivationWindows: [],
            competitorActivationKind: '',
            showSecondNotifier: false,
            showSecondNotifierTimestamp: null,
            showReactivationNotification: false
          }
        });
        if (removeAlarm) chrome.alarms.clear(alarm);
      } else if (eventName === 'resetActivations') {
        var _merchantId = parseInt(id, 10);
        this.merchants.setState({
          id: _merchantId,
          data: {
            topcashbackActivationTab: null
          }
        });
        if (removeAlarm) chrome.alarms.clear(alarm);
      } else if (eventName === 'resetConquest') {
        this.conquest.setShowNotification(id, true);
        if (removeAlarm) chrome.alarms.clear(alarm);
      }
    }
  }, {
    key: "checkPendingAlarms",
    value: function () {
      var _checkPendingAlarms = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3() {
        var _this2 = this;
        var alarms, timestamp;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return chrome.alarms.getAll();
            case 2:
              alarms = _context3.sent;
              timestamp = Date.now();
              alarms.forEach(function (alarm) {
                var alarmSplit = alarm.name.split('_');
                if (alarmSplit.length >= 3 && parseInt(alarmSplit[2], 10) < timestamp) {
                  _this2.resetTimers(alarm.name, true);
                }
              });
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function checkPendingAlarms() {
        return _checkPendingAlarms.apply(this, arguments);
      }
      return checkPendingAlarms;
    }()
  }, {
    key: "siteLoadedByActivationUrl",
    value: function siteLoadedByActivationUrl(_ref) {
      var url = _ref.url,
        tabId = _ref.tabId;
      var merchant = this.merchants.getByActivationUrl(url);
      if (merchant) {
        this.setActivation({
          url: url,
          tabId: tabId
        });
        return true;
      }
      return false;
    }

    /**
     * Wrapper to check Bacs
     *
     * @returns true if isn'nt requiredBacs or isRequiredBacs and user has Bacs
     */
  }, {
    key: "checkBasc",
    value: function checkBasc(_ref2) {
      var isRequiresBacs = _ref2.isRequiresBacs,
        userBacs = _ref2.userBacs;
      return !isRequiresBacs || isRequiresBacs && userBacs;
    }
  }, {
    key: "setAlarmListenersResetTimers",
    value: function setAlarmListenersResetTimers() {
      var _this3 = this;
      chrome.alarms.onAlarm.addListener(function (event) {
        _this3.resetTimers(event.name);
      });
    }

    /**
    * is only called on chrome.tabs.onUpdated event
    * is used to check ativations or suppression in case any of those exist
    *
    * @param url - current url
    * @param tabId - unique tab identifier
    * @param userBacs - userBacs
    * @returns {Boolean}
    */
  }, {
    key: "checkMerchantStatus",
    value: (function () {
      var _checkMerchantStatus = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4(_ref3) {
        var _this4 = this,
          _suppression,
          _suppression2,
          _suppression3;
        var url, tabId, userBacs, siteLoaded, merchant, activation, competitorActivation, suppression, state, avoidIntersections, _state$competitorActi, tab, windowId, topcashbackActivationTab, confirmationTimestamp, showReactivationNotification, sameTab, activationTabIds, competitorActivationTab, activated, showReactivation, activatingCashback, suppressedWindows, competitorActivationWindows, data;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              url = _ref3.url, tabId = _ref3.tabId, userBacs = _ref3.userBacs, siteLoaded = _ref3.siteLoaded;
              // eslint-disable-next-line object-curly-newline
              // get merchant using url given
              merchant = this.merchants.getByUrl(url);
              if (merchant) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return", false);
            case 4:
              // find activation on the activation array \ activation lasts 60s
              activation = this.findMerchantActivation(tabId, merchant.id);
              competitorActivation = this.findCompetitorsActivation(tabId); // find supression on the supression array \ supression lasts 40s
              suppression = this.findSuppression(tabId); // if suppression exists and is googleSuppression and merchant is serpEnabled Any then it will not be suppresssed and suppression will be null
              // the same if merchant is serpEnabled None
              // eslint-disable-next-line operator-linebreak
              if (suppression && suppression.suppressionKind === 'googleSuppression' && merchant.settings.suppressionKind === 'Any') {
                suppression = null;
              }

              // find the merchant state
              state = this.findState(merchant.id);
              avoidIntersections = function avoidIntersections(a, b) {
                if (!b) {
                  return a;
                }
                return a.filter(function (x) {
                  return !b.includes(x);
                });
              }; // add more tab ids to competitorActivation and activations
              if (!state.activated) {
                _context4.next = 14;
                break;
              }
              this.merchants.setState({
                id: merchant.id,
                data: {
                  topcashbackActivationTab: state.topcashbackActivationTab ? uniq_default()(state.topcashbackActivationTab.concat([tabId])) : [tabId]
                },
                tabId: null
              });
              _context4.next = 20;
              break;
            case 14:
              if (!(state.showReactivation && state.competitorActivationKind === 'window')) {
                _context4.next = 20;
                break;
              }
              _context4.next = 17;
              return chrome.tabs.get(tabId);
            case 17:
              tab = _context4.sent;
              windowId = tab.windowId;
              if ((_state$competitorActi = state.competitorActivationWindows) !== null && _state$competitorActi !== void 0 && _state$competitorActi.includes(windowId)) {
                this.merchants.setState({
                  id: merchant.id,
                  data: {
                    competitorActivationTab: state.competitorActivationTab ? avoidIntersections(uniq_default()(state.competitorActivationTab.concat([tabId])), state.topcashbackActivationTab) : [tabId]
                  },
                  tabId: null
                });
              }
            case 20:
              consoleLog({
                name: 'checkMerchantStatus state',
                state: state
              });
              if (!(!suppression && !activation && !competitorActivation)) {
                _context4.next = 23;
                break;
              }
              return _context4.abrupt("return", false);
            case 23:
              topcashbackActivationTab = state.topcashbackActivationTab;
              confirmationTimestamp = state.confirmation_timestamp; // persistent showReactivationNotification
              showReactivationNotification = !!state.showReactivationNotification;
              if (!activation) {
                _context4.next = 42;
                break;
              }
              showReactivationNotification = false;
              sameTab = tabId === activation.currentTabId || !activation.currentTabId;
              activationTabIds = [tabId, activation.currentTabId];
              if (sameTab) {
                activationTabIds = [tabId];
              }
              if (!confirmationTimestamp || Date.now() > confirmationTimestamp + REMOVE_ACTIVATION_FROM_LIST_DELAY) {
                confirmationTimestamp = Date.now() + CONFIRMATION_NOTIFICATION_DELAY_TIMESTAMP;
              }
              // add tabId to array of tabids where topcashback activated this merchant
              topcashbackActivationTab = uniq_default()(state.topcashbackActivationTab ? state.topcashbackActivationTab.concat(activationTabIds) : activationTabIds);
              // when activation is done it needs to pass through this
              // keeps the merchant active for 30 minutes
              chrome.alarms.create("resetTimers_".concat(merchant.id, "_").concat(Date.now() + ACTIVATION_RESET_TIMER), {
                when: Date.now() + ACTIVATION_RESET_TIMER
              });
              chrome.alarms.create("resetActivations_".concat(merchant.id, "_").concat(Date.now() + ACTIVATION_RESET_TIMER), {
                when: Date.now() + ACTIVATION_RESET_TIMER
              });
              if (!siteLoaded) {
                _context4.next = 42;
                break;
              }
              chrome.alarms.clear("activations_".concat(tabId));
              setTimeout(function () {
                _this4.handleCashbackAlarmAction('activations', tabId);
              }, REMOVE_AFTER_ACTIVATION_FROM_LIST_DELAY);
              if (sameTab) {
                _context4.next = 42;
                break;
              }
              _context4.next = 41;
              return updateTab(activation.currentTabId, {
                active: true
              });
            case 41:
              setTimeout(function () {
                removeTabs(tabId);
              }, CLOSE_TAB_AFTER_ACTIVATION_TIMER);
            case 42:
              competitorActivationTab = state.competitorActivationTab;
              if (competitorActivation) {
                if (state.activated) {
                  showReactivationNotification = true;
                }
                competitorActivationTab = uniq_default()(competitorActivationTab ? competitorActivationTab.concat([tabId].concat(competitorActivation.associatedTabs)) : [tabId].concat(competitorActivation.associatedTabs));
                confirmationTimestamp = null;
                remove_default()(topcashbackActivationTab, function (i) {
                  return i === tabId;
                });
                if (!state.activated && !activation) {
                  // case of competitor activation but our merchant isn't active
                  // update tabs where competitors are present
                  this.merchants.setState({
                    id: merchant.id,
                    data: {
                      showNotification: !suppression,
                      suppressed: !!suppression,
                      competitorActivationTab: competitorActivationTab,
                      topcashbackActivationTab: topcashbackActivationTab,
                      showReactivationNotification: showReactivationNotification
                    },
                    tabId: null
                  });
                  // return false;
                }
              }
              activated = !!activation && this.checkBasc({
                isRequiresBacs: merchant.isRequiresBacs,
                userBacs: userBacs
              }) && !competitorActivation;
              showReactivation = !!competitorActivation || state.showReactivation && !activated;
              activatingCashback = false;
              suppressedWindows = state.suppressedWindows ? state.suppressedWindows : [];
              if ((_suppression = suppression) !== null && _suppression !== void 0 && _suppression.windowId) {
                suppressedWindows.push(suppression.windowId);
              }
              competitorActivationWindows = state.competitorActivationWindows ? state.competitorActivationWindows : [];
              if (competitorActivation !== null && competitorActivation !== void 0 && competitorActivation.windowId) {
                competitorActivationWindows.push(competitorActivation.windowId);
              }
              data = {
                // affects the text on the icon and the showCaa on content/app.vue
                suppressed: !!suppression,
                suppressedKind: (_suppression2 = suppression) === null || _suppression2 === void 0 ? void 0 : _suppression2.suppressionKind,
                suppressedWindows: uniq_default()(suppressedWindows),
                // marks the merchant as active
                // activation exists and checkBasc just checks if the merchant can be activated for the user
                activated: activated,
                // used to enforce the confirmation notification delay
                confirmation_timestamp: confirmationTimestamp,
                // affects the show of notifications
                // (doesn't exist suppression or activation exists) and checkConfirmation
                showNotification: !!(!suppression || activation) && this.checkConfirmation(confirmationTimestamp) && !showReactivation,
                // the second part is to ensure that if the navigation redirects to the user itself it can be reactivated also
                showReactivation: showReactivation && !(((_suppression3 = suppression) === null || _suppression3 === void 0 ? void 0 : _suppression3.suppressionKind) === 'disableSuppression'),
                competitorActivationTab: showReactivation ? competitorActivationTab : null,
                competitorActivationWindows: uniq_default()(competitorActivationWindows),
                competitorActivationKind: competitorActivation === null || competitorActivation === void 0 ? void 0 : competitorActivation.competitorActivationKind,
                topcashbackActivationTab: topcashbackActivationTab,
                activatingCashback: activatingCashback,
                showReactivationNotification: showReactivationNotification
              };
              if (competitorActivation && !(state !== null && state !== void 0 && state.showReactivation)) {
                this.analytics.send({
                  ec: 'Competitor Activation',
                  ea: competitorActivation.competitorActivationKind,
                  el: merchant.name
                });
              } else if (suppression && !(state !== null && state !== void 0 && state.suppressed)) {
                this.analytics.send({
                  ec: 'Suppression',
                  ea: suppression.suppressionKind,
                  el: merchant.name
                });
              }
              // updates the state with new information
              this.merchants.setState({
                id: merchant.id,
                data: data,
                tabId: null
              });
              consoleLog({
                name: 'checkMerchantStatus',
                data: data
              });
              // removes suppression after updating state
              if (suppression) {
                chrome.alarms.create("resetTimers_".concat(merchant.id, "_").concat(Date.now() + SUPRESSION_RESET_TIMER), {
                  when: Date.now() + SUPRESSION_RESET_TIMER
                });
                // when suppression is done it needs to pass through this
                // keeps the merchant suppressed for 30 minutes
                chrome.alarms.clear("suppressions_".concat(tabId));
                if (suppression.suppressionKind !== 'disableSuppression') {
                  remove_default()(this.suppressions, function (i) {
                    return i.tabId === tabId;
                  });
                }
                utils_setStorageData({
                  suppressions: this.suppressions
                });
              }
              if (competitorActivation) {
                chrome.alarms.create("resetTimers_".concat(merchant.id, "_").concat(Date.now() + RE_ACTIVATION_RESET_TIMER), {
                  when: Date.now() + RE_ACTIVATION_RESET_TIMER
                });
                chrome.alarms.clear("competitorsActivations_".concat(tabId));
                // remove competitorActivation after deactivation merchant
                remove_default()(this.competitorsActivations, function (i) {
                  return i.tabId === tabId;
                });
                utils_setStorageData({
                  competitorsActivations: this.competitorsActivations
                });
              }
              return _context4.abrupt("return", true);
            case 58:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function checkMerchantStatus(_x3) {
        return _checkMerchantStatus.apply(this, arguments);
      }
      return checkMerchantStatus;
    }())
  }, {
    key: "checkDeeplink",
    value: function () {
      var _checkDeeplink = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5(_ref4) {
        var _this5 = this;
        var url, tabId, activation, _yield$this$merchants, merchant, state;
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              url = _ref4.url, tabId = _ref4.tabId;
              activation = this.findActivation(tabId);
              if (!(!activation || !activation.deeplink)) {
                _context5.next = 4;
                break;
              }
              return _context5.abrupt("return", false);
            case 4:
              _context5.next = 6;
              return this.merchants.getMerchantAndState({
                url: url
              });
            case 6:
              _yield$this$merchants = _context5.sent;
              merchant = _yield$this$merchants.merchant;
              state = _yield$this$merchants.state;
              if (merchant) {
                _context5.next = 11;
                break;
              }
              return _context5.abrupt("return", false);
            case 11:
              if (!(state.activated && merchant.domain.indexOf('booking.com') === 0)) {
                _context5.next = 14;
                break;
              }
              delete activation.deeplink;
              return _context5.abrupt("return", false);
            case 14:
              if (state.activated) {
                // if we have an activation redirects to where the user clicked activate
                // await updateTab(tabId, { url: activation.deeplink });
                delete activation.deeplink;
              }
              if (activation) {
                setTimeout(function () {
                  _this5.activations = _this5.activations.filter(function (i) {
                    return i.tabId !== tabId;
                  });
                }, 2 * 1000);
              }
              utils_setStorageData({
                activations: this.activations
              });
              return _context5.abrupt("return", true);
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function checkDeeplink(_x4) {
        return _checkDeeplink.apply(this, arguments);
      }
      return checkDeeplink;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee6(_ref5) {
        var data, sender, device, tab, url, deeplink, dataAction, newTab, merchantId, isLogged, tabId, currentTabId, useNewTab, oldRedirectOverride, resultTab, _resultTab;
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              data = _ref5.data, sender = _ref5.sender, device = _ref5.device;
              tab = sender.tab;
              url = data.activationUrl;
              deeplink = data.deeplink, dataAction = data.dataAction, newTab = data.newTab, merchantId = data.merchantId; // gets the value reactivation or null
              if (dataAction === 'reactivation') {
                url = url.replace('ref=tb', 'ref=tbCookieChecker');
              } else if (dataAction === 'secondNotifier') {
                if (BROWSER === 'chrome' && (REGION === 'us' || REGION === 'uk')) {
                  if (this.secondNotifierTimer === 10 * 60 * 1000) {
                    url = url.replace('ref=tb', 'ref=tbSN10');
                  } else {
                    url = url.replace('ref=tb', 'ref=tbSN5');
                  }
                } else {
                  url = url.replace('ref=tb', 'ref=tbSN10');
                }
              } else if (dataAction === 'CouponApplier') {
                url = url.replace('ref=tb', 'ref=tbCAA');
              } else if (dataAction === 'conquestActivate') {
                url = url.replace('ref=tb', 'ref=tbqst');
              }
              if (device === 'mobile') {
                url = url.replace('ref=tb', 'ref=mtb');
              }
              _context6.next = 8;
              return checkUserLogin();
            case 8:
              isLogged = _context6.sent;
              useNewTab = newTab;
              oldRedirectOverride = [];
              if (REGION === 'uk') {
                oldRedirectOverride = ['24811',
                // Compare the Market Travel Insurance
                '6428',
                // Very
                // '16813', // Disney Store
                // '23570', // Sephora
                // '25978', // Domino's Pizza
                '11349',
                // Debenhams
                // '18533', // Holland & Barrett
                // '24393', // Online home shop
                // '27969', // Superdrug
                // '23139', // Pro:Direct Soccer
                // '21157', // COS
                '26143',
                // Go.Compare Travel Insurance
                // '23209', // Joma Jewellery
                // '23786', // H Samuel
                // '10943', // Liz Earle
                // '14448', // BoohooMAN
                // '20272', // TUI
                // '5773', // Simply Be
                // '26218', // White Stuff
                // '23263', // ProCook
                '19740' // Matalan
                ];
              }
              if (oldRedirectOverride.includes(merchantId)) {
                useNewTab = false;
              }
              if (merchantId) {
                this.merchants.setState({
                  id: merchantId,
                  data: {
                    showNotification: true,
                    activatingCashback: true
                  }
                });
              }
              if (tab) {
                _context6.next = 18;
                break;
              }
              _context6.next = 17;
              return utils_getActiveTab();
            case 17:
              tab = _context6.sent;
            case 18:
              if (!useNewTab) {
                _context6.next = 27;
                break;
              }
              _context6.next = 21;
              return createTab({
                url: url,
                active: false
              });
            case 21:
              resultTab = _context6.sent;
              tabId = resultTab.id;
              currentTabId = tab.id;
              this.setActivation({
                tabId: tabId,
                currentTabId: currentTabId,
                deeplink: deeplink
              });
              _context6.next = 38;
              break;
            case 27:
              if (!(dataAction === 'conquestActivate')) {
                _context6.next = 33;
                break;
              }
              _context6.next = 30;
              return createTab({
                url: url
              });
            case 30:
              _resultTab = _context6.sent;
              _context6.next = 36;
              break;
            case 33:
              _context6.next = 35;
              return updateTab(tab.id, {
                url: url
              });
            case 35:
              _resultTab = _context6.sent;
            case 36:
              tabId = _resultTab.id;
              if (isLogged) {
                this.setActivation({
                  tabId: tabId,
                  currentTabId: currentTabId,
                  deeplink: deeplink
                });
              }
            case 38:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function activate(_x5) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "findActivation",
    value: function findActivation(tabId) {
      return this.activations.find(function (a) {
        return a.tabId === tabId;
      });
    }
  }, {
    key: "findMerchantActivation",
    value: function findMerchantActivation(tabId, merchantId) {
      var result = null;
      if (merchantId) {
        result = this.activations.find(function (a) {
          return a.tabId === tabId && a.merchantId === merchantId;
        });
      }
      if (!result) {
        var index = this.activations.findIndex(function (a) {
          return a.tabId === tabId && a.merchantId === null;
        });
        if (index >= 0) {
          result = this.activations[index];
          result.merchantId = merchantId;
          this.activations[index] = result;
        }
      }
      return result;
    }
  }, {
    key: "findCompetitorsActivation",
    value: function findCompetitorsActivation(tabId) {
      return this.competitorsActivations.find(function (a) {
        return a.tabId === tabId;
      });
    }
  }, {
    key: "findSuppression",
    value: function findSuppression(tabId) {
      return this.suppressions.find(function (s) {
        return s.tabId === tabId;
      });
    }
  }, {
    key: "findState",
    value: function findState(merchantId) {
      return this.merchants.states.find(function (s) {
        return s.id === merchantId;
      });
    }
  }, {
    key: "resetSuprressionActivation",
    value: function resetSuprressionActivation() {
      this.suppressions = [];
      this.activations = [];
      utils_setStorageData({
        suppressions: this.suppressions
      });
      utils_setStorageData({
        activations: this.activations
      });
    }

    /**
     * verifies conditions to check if showNotification can be set as true
     * @param {*} state
     * @returns {Boolean} true if doens't exist state.confirmation_timestamp or state.confirmation_timestamp is in the future
    */

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "checkConfirmation",
    value: function checkConfirmation(confirmationTimestamp) {
      return !confirmationTimestamp || confirmationTimestamp > Date.now();
    }
  }]);
}(CashbackBase);

;// CONCATENATED MODULE: ./source/bg/settings.js








/* eslint class-methods-use-this: ["error", { "exceptMethods": ["parse"] }] */
var Settings = /*#__PURE__*/function () {
  function Settings() {
    var _this = this;
    (0,classCallCheck/* default */.A)(this, Settings);
    (0,defineProperty/* default */.A)(this, "getSettings", /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!_this.isReady) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", _this.data);
          case 2:
            _context.next = 4;
            return _this.init();
          case 4:
            return _context.abrupt("return", _this.data);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    (0,defineProperty/* default */.A)(this, "setSettings", /*#__PURE__*/function () {
      var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(data) {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              merge_default()(_this.data, data);
              _context2.next = 3;
              return setStorageData({
                settings: _this.data
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    this.isFirefox = getBrowser() === 'firefox';
    this.data = {
      isAnalyticsEnabled: !(this.isFirefox || REGION === 'uk' || REGION === 'fr' || REGION === 'au'),
      analyticsClientId: uuidv4(),
      isNotificationEnabled: true,
      showGa: this.isFirefox || REGION === 'uk' || REGION === 'fr' || REGION === 'au'
    };
    this.isReady = false;
    this.init();
  }
  return (0,createClass/* default */.A)(Settings, [{
    key: "init",
    value: function () {
      var _init = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3() {
        var _yield$getStorageData, settings;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return getStorageData('settings');
            case 2:
              _yield$getStorageData = _context3.sent;
              settings = _yield$getStorageData.settings;
              merge_default()(this.data, settings);
              this.isReady = true;
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "showConsents",
    value: function () {
      var _showConsents = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4() {
        var aa,
          s,
          featureFlags,
          _args4 = arguments;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              aa = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : '';
              _context4.next = 3;
              return this.getSettings();
            case 3:
              s = _context4.sent;
              _context4.next = 6;
              return app.featureFlags.getFeatureFlags(aa);
            case 6:
              featureFlags = _context4.sent;
              return _context4.abrupt("return", featureFlags.flagRequireConsent && s.showGa);
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function showConsents() {
        return _showConsents.apply(this, arguments);
      }
      return showConsents;
    }()
  }]);
}();

;// CONCATENATED MODULE: ./source/bg/icon.js




// import { map } from 'lodash';

var Icon = /*#__PURE__*/function () {
  function Icon() {
    (0,classCallCheck/* default */.A)(this, Icon);
    this.state = {};
    this.images = {};
    this.defaultState = {
      color: '#1c7153',
      // '#F60859',
      step: 2.5,
      endStep: 0.5,
      repeats: 5
    };
    this.init();
  }
  return (0,createClass/* default */.A)(Icon, [{
    key: "init",
    value: function init() {
      this.state = Object.assign({}, this.defaultState);
    }
  }, {
    key: "animatorLoop",
    value: function animatorLoop(counter) {
      var img = counter % 27;
      this.setIcon({
        path: "icon_loop/".concat(img, ".png")
      });
      return this;
    }
  }, {
    key: "setIcon",
    value: function setIcon(_ref) {
      var path = _ref.path;
      if (path) {
        chrome.action.setIcon({
          path: path
        });
      }
      return this;
    }
  }, {
    key: "timeout",
    value: function () {
      var _timeout = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(ms) {
        var _this = this;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.clearTimeout();
              this.timerPromise = new Promise(function (resolve) {
                _this.timer = setTimeout(function () {
                  return resolve(true);
                }, ms);
              });
              return _context.abrupt("return", this.timerPromise);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function timeout(_x) {
        return _timeout.apply(this, arguments);
      }
      return timeout;
    }()
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }
      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };
      return clearTimeout;
    }(function () {
      clearTimeout(this.timer);
      this.timerPromise = null;
    })
  }, {
    key: "animate",
    value: function () {
      var _animate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
        var step,
          counter,
          frameRate,
          _args2 = arguments;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              step = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 2.5;
              counter = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 0;
              frameRate = 800 / 60;
              this.animatorLoop(counter);
              //   .setIcon({ path: ICONS });
              if (!(step >= 1 && !this.stopProcess)) {
                _context2.next = 10;
                break;
              }
              _context2.next = 7;
              return this.timeout(frameRate);
            case 7:
              _context2.next = 9;
              return this.animate(step - 0.04, counter + 1);
            case 9:
              return _context2.abrupt("return", true);
            case 10:
              return _context2.abrupt("return", true);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function animate() {
        return _animate.apply(this, arguments);
      }
      return animate;
    }()
  }, {
    key: "process",
    value: function () {
      var _process = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3() {
        var repeats, _i, _repeats, repeat;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              repeats = [1, 2, 3];
              /* eslint-disable */
              _i = 0, _repeats = repeats;
            case 2:
              if (!(_i < _repeats.length)) {
                _context3.next = 12;
                break;
              }
              repeat = _repeats[_i];
              if (!this.stopProcess) {
                _context3.next = 7;
                break;
              }
              this.stopProcess = false;
              return _context3.abrupt("break", 12);
            case 7:
              _context3.next = 9;
              return this.animate();
            case 9:
              _i++;
              _context3.next = 2;
              break;
            case 12:
              this.setIcon({
                path: ICONS_ACTIVE
              });
              /* eslint-enable */
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function process() {
        return _process.apply(this, arguments);
      }
      return process;
    }()
  }, {
    key: "stop",
    value: function () {
      var _stop = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4() {
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.clearTimeout();
              this.stopProcess = true;
              _context4.next = 4;
              return this.timeout(20);
            case 4:
              this.stopProcess = false;
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
  }, {
    key: "merchant",
    value: function () {
      var _merchant = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5() {
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.stop();
            case 2:
              // await this.clear().process();
              this.setIcon({
                path: ICONS
              });
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function merchant() {
        return _merchant.apply(this, arguments);
      }
      return merchant;
    }()
  }, {
    key: "nonMerchant",
    value: function () {
      var _nonMerchant = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee6() {
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.stop();
            case 2:
              this.setIcon({
                path: ICONS
              });
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function nonMerchant() {
        return _nonMerchant.apply(this, arguments);
      }
      return nonMerchant;
    }()
  }, {
    key: "activatedMerchant",
    value: function () {
      var _activatedMerchant = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee7() {
        return regenerator_default().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              this.state = {
                color: '#5ab091'
              };
              _context7.next = 3;
              return this.stop();
            case 3:
              _context7.next = 5;
              return this.process();
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function activatedMerchant() {
        return _activatedMerchant.apply(this, arguments);
      }
      return activatedMerchant;
    }()
  }]);
}();

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45);
;// CONCATENATED MODULE: ./source/bg/analytics.js





var _excluded = ["ea"];



var SmartAnalytics = /*#__PURE__*/function () {
  function SmartAnalytics(_ref) {
    var getSettings = _ref.getSettings,
      setSettings = _ref.setSettings;
    (0,classCallCheck/* default */.A)(this, SmartAnalytics);
    this.getSettings = getSettings;
    this.setSettings = setSettings;
    this.isReady = false;
    this.init();
  }
  return (0,createClass/* default */.A)(SmartAnalytics, [{
    key: "init",
    value: function () {
      var _init = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.isReady = true;
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(params) {
        var ea, otherParams, _chrome$runtime$getMa, version, browser, device, ABTestingParams, _yield$getStorageData, secondNotifierTimer, settings, analyticsBody, pinned, pinnedValue;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!ALLOW_GA) {
                _context2.next = 30;
                break;
              }
              ea = params.ea, otherParams = (0,objectWithoutProperties/* default */.A)(params, _excluded);
              _chrome$runtime$getMa = chrome.runtime.getManifest(), version = _chrome$runtime$getMa.version;
              browser = getBrowser();
              device = getDevice();
              otherParams.appVersion = version;
              otherParams.device = "".concat(browser, "_").concat(device);
              otherParams.browser = browser;
              otherParams.deviceCategory = device;

              // eslint-disable-next-line camelcase
              ABTestingParams = otherParams;
              if (!(BROWSER === 'chrome' && (REGION === 'us' || REGION === 'uk'))) {
                _context2.next = 16;
                break;
              }
              _context2.next = 13;
              return getStorageData('secondNotifierTimer');
            case 13:
              _yield$getStorageData = _context2.sent;
              secondNotifierTimer = _yield$getStorageData.secondNotifierTimer;
              ABTestingParams = merge_default()(otherParams, {
                ab_delay_timer: secondNotifierTimer / (60 * 1000)
              });
            case 16:
              ABTestingParams = merge_default()(ABTestingParams, {
                sleek: 'true'
              });
              _context2.next = 19;
              return this.getSettings();
            case 19:
              settings = _context2.sent;
              if (settings.isAnalyticsEnabled) {
                _context2.next = 22;
                break;
              }
              return _context2.abrupt("return", null);
            case 22:
              analyticsBody = {
                client_id: settings.analyticsClientId,
                events: [{
                  name: ea.replace(/[^a-z0-9]/gi, '_'),
                  params: ABTestingParams
                }]
              };
              if (!['chrome', 'firefox'].includes(BROWSER)) {
                _context2.next = 29;
                break;
              }
              _context2.next = 26;
              return chrome.action.getUserSettings();
            case 26:
              pinned = _context2.sent;
              pinnedValue = pinned.isOnToolbar ? 'Pinned' : 'Not Pinned';
              analyticsBody = merge_default()(analyticsBody, {
                user_properties: {
                  isPinned: {
                    value: pinnedValue
                  }
                }
              });
            case 29:
              return _context2.abrupt("return", fetch("https://www.google-analytics.com/mp/collect?measurement_id=".concat(GA_ID, "&api_secret=").concat(GA_API_SECRET), {
                method: 'POST',
                body: JSON.stringify(analyticsBody)
              }));
            case 30:
              return _context2.abrupt("return", null);
            case 31:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function send(_x) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "sendSelectPromotion",
    value: function () {
      var _sendSelectPromotion = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(eventType, merchantName, coupon, sessionId, orderValueBefore, orderValueAfter) {
        var _chrome$runtime$getMa2, version, settings, browser, device, price, discount;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!ALLOW_GA) {
                _context3.next = 13;
                break;
              }
              _chrome$runtime$getMa2 = chrome.runtime.getManifest(), version = _chrome$runtime$getMa2.version;
              _context3.next = 4;
              return this.getSettings();
            case 4:
              settings = _context3.sent;
              if (settings.isAnalyticsEnabled) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", null);
            case 7:
              browser = getBrowser();
              device = getDevice();
              price = orderValueBefore;
              discount = 0;
              if (price && orderValueAfter) {
                discount = price - orderValueAfter;
              }
              return _context3.abrupt("return", fetch("https://www.google-analytics.com/mp/collect?measurement_id=".concat(GA_ID, "&api_secret=").concat(GA_API_SECRET), {
                method: 'POST',
                body: JSON.stringify({
                  client_id: settings.analyticsClientId,
                  events: [{
                    name: 'begin_checkout',
                    params: {
                      appVersion: version,
                      device: "".concat(browser, "_").concat(device),
                      browser: browser,
                      deviceCategory: device,
                      currency: CURRENCY,
                      promotion_name: 'CAA SLEEK',
                      value: price,
                      coupon: coupon,
                      items: [{
                        item_id: sessionId,
                        item_name: "checkout_".concat(sessionId),
                        coupon: coupon,
                        discount: discount,
                        item_brand: merchantName,
                        price: price,
                        item_list_id: eventType,
                        affiliation: 'sleek',
                        quantity: 1
                      }]
                    }
                  }]
                })
              }));
            case 13:
              return _context3.abrupt("return", null);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function sendSelectPromotion(_x2, _x3, _x4, _x5, _x6, _x7) {
        return _sendSelectPromotion.apply(this, arguments);
      }
      return sendSelectPromotion;
    }()
  }]);
}();

;// CONCATENATED MODULE: ./source/bg/user.js









function user_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function user_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? user_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : user_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function user_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, user_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function user_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (user_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }




/* eslint class-methods-use-this: ["error", { "exceptMethods": ["parse"] }] */
var User = /*#__PURE__*/function (_CustomFetcher) {
  function User() {
    var _this;
    (0,classCallCheck/* default */.A)(this, User);
    _this = user_callSuper(this, User, [{
      name: 'user',
      url: USER_INFO_URL,
      updateDelay: 4 * 60 * 60 * 1000,
      errorDelay: 10 * 60 * 1000
    }]);
    _this.data = {
      isLoggedIn: false,
      isPlus: false,
      hasBacs: false
    };
    return _this;
  }
  (0,inherits/* default */.A)(User, _CustomFetcher);
  return (0,createClass/* default */.A)(User, [{
    key: "parse",
    value: function parse(data) {
      return parseUserInfo(data);
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }
      fetch.toString = function () {
        return _fetch.toString();
      };
      return fetch;
    }(/*#__PURE__*/function () {
      var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(url, options) {
        var TCBTBAuth, browser, device, headers, consents, params;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getUserTCBTBAuth();
            case 2:
              TCBTBAuth = _context.sent;
              if (TCBTBAuth) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", {
                IsLoggedIn: false,
                Membership: 'Classic',
                HasBacsDetailsSaved: false
              });
            case 5:
              browser = getBrowser();
              device = getDevice();
              headers = {
                'Toolbar-Version': VERSION,
                // eslint-disable-next-line no-undef
                'Toolbar-Fingerprint': app.settings.data.analyticsClientId
              }; // eslint-disable-next-line no-undef
              _context.next = 10;
              return app.settings.showConsents();
            case 10:
              consents = _context.sent;
              if (!consents) {
                headers = user_objectSpread(user_objectSpread({}, headers), {}, {
                  'Browser-Type': "".concat(browser, "_").concat(device)
                });
              }
              if (TCBTBAuth) {
                headers = merge_default()(headers, {
                  'Browser-Cookie': TCBTBAuth
                });
              }
              this.options = {
                headers: headers
              };
              params = options ? merge_default()(this.options, options) : this.options;
              return _context.abrupt("return", fetch(url || this.url, params).then(function (response) {
                return response.json();
              }));
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      return function (_x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }())
  }]);
}(CustomFetcher);

;// CONCATENATED MODULE: ./source/bg/migrations.js




var parseVersion = function parseVersion(version) {
  var parsed = '0.0.0.0';
  if (version) {
    parsed = version;
  }
  return parsed;
};
/* harmony default export */ const migrations = (/*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(app) {
    var beforeVersion, newVersion, oldVersion;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getStorageData('version');
        case 2:
          beforeVersion = _context.sent;
          newVersion = parseVersion(VERSION);
          oldVersion = parseVersion(beforeVersion.version);
          if (!(newVersion === oldVersion)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return");
        case 7:
          if (oldVersion < '6.1.0.0') {
            setStorageData({
              recentStores: []
            });
            setStorageData({
              'merchants.data': []
            });
            setStorageData({
              'merchants.lastUpdate': ''
            });
            setStorageData({
              'merchants.modified': {}
            });
            setStorageData({
              lastModifiedMerchants: ''
            });
            app.updateUserAndMerchants();
          }
          setStorageData({
            version: newVersion
          });
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
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
;// CONCATENATED MODULE: ./source/bg/app.js














/* eslint-disable object-curly-newline */
function app_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = app_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function app_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return app_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? app_arrayLikeToArray(r, a) : void 0; } }
function app_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function app_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function app_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? app_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : app_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

function app_callSuper(t, o, e) { return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, app_isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e)); }
function app_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (app_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
// eslint-disable-next-line import/no-extraneous-dependencies


// eslint-disable-next-line import/no-extraneous-dependencies


















/* eslint class-methods-use-this:
["error", { "exceptMethods": [
  "checkUserLogin", "getCurrentMerchant", "getTopOffers", "navigate"
] }] */

// eslint-disable-next-line no-underscore-dangle
var App = /*#__PURE__*/function (_Cashback) {
  function App() {
    var _this;
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0,classCallCheck/* default */.A)(this, App);
    _this = app_callSuper(this, App, [args]);
    (0,defineProperty/* default */.A)(_this, "handleEbayTabs", function () {
      _this.ebayCounter = 2;
      chrome.tabs.onRemoved.addListener(function () {
        chrome.tabs.query({}, function (tabs) {
          var result = tabs.find(function (tab) {
            return _this.merchants.getByUrl(tab.url);
          });
          if (!result) {
            _this.ebayCounter = 2;
          }
        });
      });
    });
    _this.featureFlags = new FeatureFlags();
    _this.settings = new Settings();
    _this.analytics = new SmartAnalytics({
      getSettings: _this.settings.getSettings,
      setSettings: _this.settings.setSettings
    });
    _this.setMessagesListener();
    _this.setContentStyles();
    _this.setEventListenersBeforeInit();
    _this.deviceModel = '';
    _this.device = '';
    _this.iconType = '';
    _this.homepage = {};
    _this.loadStorageVariables();
    _this.init();
    return _this;
  }
  (0,inherits/* default */.A)(App, _Cashback);
  return (0,createClass/* default */.A)(App, [{
    key: "init",
    value: function () {
      var _init = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
        var consents;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.settings.showConsents();
            case 2:
              consents = _context.sent;
              if (!consents) {
                this.merchantExceptions = new MerchantExceptions();
                this.featureFlags.update();
                this.settings.setSettings({});
                this.merchants = new Merchants({
                  getSettings: this.settings.getSettings,
                  setSettings: this.settings.setSettings
                });
                this.configs = new Configs();
                if (REGION === 'us') {
                  this.conquest = new Conquest();
                }
                this.user = new User();
                this.lastModifiedTopOffers = '';
                this.loadTopOffers();
                this.secondNotifierTimer = DELAY_SECOND_NOTIFIER_TIMESTAMP;
                this.initSleek();
                this.merchants.analytics = this.analytics;
                this.updateUserAndMerchants();
                this.configs.update();
                if (REGION === 'us') {
                  this.conquest.update();
                }
                this.merchantExceptions.update();
                this.setEventListeners();
                this.setEventListenersServiceWorker();
                this.broadcastChannel = brodcastChannel;
                this.setEventListenersBroadcastChannel();
                // can be mac ipad iphone
                this.handleEbayTabs();
                chrome.action.setBadgeBackgroundColor({
                  color: '#ED1C5C'
                });
                this.icon = new Icon();
                this.canInitContentSafari = false;
                this.loadSecondNotifierTimer();
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "initSleek",
    value: function () {
      var _initSleek = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3() {
        var _this2 = this;
        var featureFlags, isSleekEnabled;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.featureFlags.getFeatureFlags();
            case 2:
              featureFlags = _context3.sent;
              isSleekEnabled = featureFlags.flagSleekEnabled;
              if (!isSleekEnabled) {
                _context3.next = 9;
                break;
              }
              _context3.next = 7;
              return (0,web_ext_sdk/* initializeWebExtSdk */._n)('4390910ebc51724bfc30630f06f9a1024f714719f9391b15', {
                enableDebug: false,
                featureControls: {
                  emitCouponPageReady: true
                },
                addedAnalyticsProperties: {
                  geography: REGION.toUpperCase()
                }
              });
            case 7:
              this.sleekSdk = _context3.sent;
              this.sleekSdk.registerEventListener(/*#__PURE__*/function () {
                var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(event, tabDetails) {
                  var _event$data;
                  var tabUrl, tab, couponData, activeCoupon, merchantName, merchant, codes, sentSavingCodes, successCount, sessionResult, usedCoupon, price, orderValueAfter, discount, priceWithDiscount, discountPercentage, messageData;
                  return regenerator_default().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        tabUrl = '';
                        if (!(tabDetails !== null && tabDetails !== void 0 && tabDetails.tabId)) {
                          _context2.next = 12;
                          break;
                        }
                        _context2.prev = 2;
                        _context2.next = 5;
                        return chrome.tabs.get(tabDetails.tabId);
                      case 5:
                        tab = _context2.sent;
                        tabUrl = (tab === null || tab === void 0 ? void 0 : tab.url) || '';
                        _context2.next = 12;
                        break;
                      case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2["catch"](2);
                        consoleLog('SLEEK ERROR - get tab url', _context2.t0);
                      case 12:
                        couponData = null;
                        if (event.type === sdk/* SdkEventType */.VU.COUPON_SESSION_UPDATED && (_event$data = event.data) !== null && _event$data !== void 0 && (_event$data = _event$data.session) !== null && _event$data !== void 0 && _event$data.codes) {
                          activeCoupon = event.data.session.codes.find(function (code) {
                            return code.entryStatus === 'active';
                          });
                          if (activeCoupon) {
                            couponData = {
                              coupon: {
                                code: activeCoupon.value,
                                value: activeCoupon.value
                              }
                            };
                          }
                        }
                        merchantName = '';
                        try {
                          merchant = _this2.merchants.getByUrl(tabUrl);
                          if (merchant) {
                            _this2.analytics.send({
                              ec: 'Sleek Events',
                              ea: event.type,
                              el: merchant.name
                            });
                            merchantName = merchant.name;
                            if (event.type === sdk/* SdkEventType */.VU.COUPON_SESSION_UPDATED || event.type === sdk/* SdkEventType */.VU.COUPON_SESSION_COMPLETED) {
                              codes = event.data.session.codes || [];
                              if (event.type === sdk/* SdkEventType */.VU.COUPON_SESSION_UPDATED) {
                                if (event.data.session.state === 'complete') {
                                  sentSavingCodes = [];
                                  codes.forEach(function (codeData) {
                                    _this2.analytics.sendSelectPromotion(event.type, merchant.name, codeData.value, event.data.session.publicId, codeData.orderValueBefore || null, codeData.orderValueAfter || null);
                                    if (codeData.entryStatus === 'success' && sentSavingCodes.indexOf(codeData.value) === -1) {
                                      sentSavingCodes.push(codeData.value);
                                      _this2.analytics.send({
                                        ec: 'CAA Coupon Savings',
                                        ea: codeData.orderValueBefore - codeData.orderValueAfter > 0 ? 'Savings' : 'No Savings',
                                        el: merchant.name,
                                        coupon: codeData.value
                                      });
                                    }
                                    _this2.analytics.send({
                                      ec: 'CAA Coupon Status',
                                      ea: codeData.entryStatus,
                                      el: merchant.name,
                                      coupon: codeData.value
                                    });
                                  });
                                }
                              } else {
                                successCount = codes.filter(function (c) {
                                  return c.entryStatus === 'success';
                                }).length;
                                if (successCount === codes.length) {
                                  sessionResult = 'Complete Success';
                                } else if (successCount > 0) {
                                  sessionResult = 'Partial Success';
                                } else {
                                  sessionResult = 'Complete Fail';
                                }
                                _this2.analytics.send({
                                  ec: 'CAA Coupon Session',
                                  ea: sessionResult,
                                  el: merchant.name
                                });
                                usedCoupon = codes.find(function (c) {
                                  return c.entryStatus === 'success' && c.orderValueBefore > c.orderValueAfter;
                                });
                                _this2.analytics.sendSelectPromotion(event.type, merchant.name, (usedCoupon === null || usedCoupon === void 0 ? void 0 : usedCoupon.value) || null, event.data.session.publicId, (usedCoupon === null || usedCoupon === void 0 ? void 0 : usedCoupon.orderValueBefore) || null, (usedCoupon === null || usedCoupon === void 0 ? void 0 : usedCoupon.orderValueAfter) || null);
                                if ((usedCoupon === null || usedCoupon === void 0 ? void 0 : usedCoupon.orderValueBefore) !== null && (usedCoupon === null || usedCoupon === void 0 ? void 0 : usedCoupon.orderValueBefore) !== undefined) {
                                  price = usedCoupon === null || usedCoupon === void 0 ? void 0 : usedCoupon.orderValueBefore;
                                  orderValueAfter = (usedCoupon === null || usedCoupon === void 0 ? void 0 : usedCoupon.orderValueAfter) || price;
                                  discount = price && orderValueAfter ? price - orderValueAfter : 0;
                                  priceWithDiscount = orderValueAfter || price;
                                  discountPercentage = price ? discount / price * 100 : 0;
                                  _this2.analytics.send({
                                    ea: 'Result',
                                    ec: 'CAA Savings',
                                    el: merchant.name,
                                    price: price,
                                    priceWithDiscount: priceWithDiscount,
                                    discount: discount,
                                    discountPercentage: discountPercentage,
                                    coupon: (usedCoupon === null || usedCoupon === void 0 ? void 0 : usedCoupon.value) || null
                                  });
                                }
                              }
                            }
                          }
                        } catch (error) {
                          consoleLog('SLEEK ERROR', error);
                        }
                        consoleLog('SLEEK', event);
                        messageData = {
                          current: event.data,
                          currentTabDetails: app_objectSpread(app_objectSpread({}, tabDetails), {}, {
                            url: tabUrl
                          }),
                          previousCoupon: couponData
                        };
                        _context2.next = 20;
                        return sendBackgroundMessageWithRetries(tabDetails.tabId, {
                          action: "SLEEK_".concat(event.type),
                          data: messageData
                        }, 10, 100, merchantName, function (data) {
                          return _this2.analytics.send(data);
                        });
                      case 20:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[2, 9]]);
                }));
                return function (_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function initSleek() {
        return _initSleek.apply(this, arguments);
      }
      return initSleek;
    }()
  }, {
    key: "loadSecondNotifierTimer",
    value: function () {
      var _loadSecondNotifierTimer = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4() {
        var _yield$getStorageData, secondNotifierTimer, zeroOrOne;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(BROWSER === 'chrome' && (REGION === 'us' || REGION === 'uk'))) {
                _context4.next = 15;
                break;
              }
              _context4.next = 3;
              return getStorageData('secondNotifierTimer');
            case 3:
              _yield$getStorageData = _context4.sent;
              secondNotifierTimer = _yield$getStorageData.secondNotifierTimer;
              if (secondNotifierTimer) {
                _context4.next = 14;
                break;
              }
              // secondNotifierTimer isn't set on local storage
              // random 50% chance to be 5 minutes or 10 minutes
              zeroOrOne = Math.floor(Math.random() * 2);
              if (zeroOrOne === 0) {
                secondNotifierTimer = 10 * 60 * 1000;
              } else {
                secondNotifierTimer = 5 * 60 * 1000;
              }
              this.secondNotifierTimer = secondNotifierTimer;
              _context4.next = 11;
              return setStorageData({
                secondNotifierTimer: secondNotifierTimer
              });
            case 11:
              this.sendAnalytics({
                data: {
                  ec: 'Extension',
                  ea: 'RegisterTimer'
                }
              });
              _context4.next = 15;
              break;
            case 14:
              this.secondNotifierTimer = secondNotifierTimer;
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function loadSecondNotifierTimer() {
        return _loadSecondNotifierTimer.apply(this, arguments);
      }
      return loadSecondNotifierTimer;
    }()
  }, {
    key: "loadStorageVariables",
    value: function () {
      var _loadStorageVariables = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5() {
        var _yield$getStorageData2, iconType, _yield$getStorageData3, device, _yield$getStorageData4, deviceModel, settings, consents, response;
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return getStorageData('iconType');
            case 2:
              _yield$getStorageData2 = _context5.sent;
              iconType = _yield$getStorageData2.iconType;
              this.iconType = iconType;
              _context5.next = 7;
              return getStorageData('device');
            case 7:
              _yield$getStorageData3 = _context5.sent;
              device = _yield$getStorageData3.device;
              this.device = device;
              _context5.next = 12;
              return getStorageData('deviceModel');
            case 12:
              _yield$getStorageData4 = _context5.sent;
              deviceModel = _yield$getStorageData4.deviceModel;
              this.deviceModel = deviceModel;
              _context5.next = 17;
              return this.settings.getSettings();
            case 17:
              settings = _context5.sent;
              if (!(this.device !== 'mobile' && this.device !== 'desktop' && this.deviceModel !== 'iphone' && this.deviceModel !== 'ipad' && this.deviceModel !== 'mac')) {
                _context5.next = 32;
                break;
              }
              _context5.next = 21;
              return this.settings.showConsents();
            case 21:
              consents = _context5.sent;
              if (!(BROWSER === 'safari')) {
                _context5.next = 29;
                break;
              }
              _context5.next = 25;
              return browser.runtime.sendNativeMessage('application.id', {
                message: 'device',
                client_id: settings.analyticsClientId
              });
            case 25:
              response = _context5.sent;
              // check if message came from the right place
              if (response.response.message === 'device') {
                this.deviceModel = response.deviceModel;
                this.device = response.device;
                if (!consents) {
                  setStorageData({
                    device: response.device
                  });
                  setStorageData({
                    deviceModel: response.deviceModel
                  });
                }
              } else {
                this.device = 'desktop';
                this.deviceModel = 'mac';
                if (!consents) {
                  setStorageData({
                    device: 'desktop'
                  });
                  setStorageData({
                    deviceModel: 'mac'
                  });
                }
              }
              _context5.next = 32;
              break;
            case 29:
              this.device = 'desktop';
              this.deviceModel = 'mac';
              if (!consents) {
                setStorageData({
                  device: 'desktop'
                });
                setStorageData({
                  deviceModel: 'mac'
                });
              }
            case 32:
              // send information to ios about permissions enabled or not
              if (BROWSER === 'safari' && this.device === 'mobile') {
                chrome.permissions.getAll().then(function (result) {
                  var permissions = result.origins.includes('*://*/*');
                  if (permissions) {
                    chrome.runtime.sendNativeMessage('application.id', {
                      message: 'permissions_enabled',
                      client_id: settings.analyticsClientId
                    });
                  } else {
                    chrome.runtime.sendNativeMessage('application.id', {
                      message: 'reset',
                      client_id: settings.analyticsClientId
                    });
                  }
                });
              }
            case 33:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function loadStorageVariables() {
        return _loadStorageVariables.apply(this, arguments);
      }
      return loadStorageVariables;
    }()
  }, {
    key: "loadTopOffers",
    value: function () {
      var _loadTopOffers = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee6() {
        var _yield$getStorageData5, homepage;
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return getStorageData('lastModifiedTopOffers');
            case 2:
              this.lastModifiedTopOffers = _context6.sent;
              _context6.next = 5;
              return getStorageData('homepage');
            case 5:
              _yield$getStorageData5 = _context6.sent;
              homepage = _yield$getStorageData5.homepage;
              merge_default()(this.homepage, homepage);
            case 8:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function loadTopOffers() {
        return _loadTopOffers.apply(this, arguments);
      }
      return loadTopOffers;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "setEventListenersServiceWorker",
    value: function setEventListenersServiceWorker() {
      var _this3 = this;
      // eslint-disable-next-line no-restricted-globals
      self.addEventListener('message', /*#__PURE__*/function () {
        var _ref2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee7(event) {
          var dataGA;
          return regenerator_default().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                if (event.data && event.data.type === 'analytics') {
                  dataGA = event.data.dataGA;
                  _this3.analytics.send(dataGA);
                } else if (event.data && event.data.type === 'activate') {
                  _this3.activate({
                    data: event.data.dataActivate,
                    sender: event.data.sender,
                    device: _this3.device
                  });
                } else if (event.data && event.data.type === 'applyCoupons') {
                  _this3.applyCoupons({
                    sender: event.data.sender
                  });
                } else if (event.data && event.data.type === 'stopCoupons') {
                  _this3.stopCoupons({
                    sender: event.data.sender
                  });
                }
              case 1:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "setEventListenersBroadcastChannel",
    value: function setEventListenersBroadcastChannel() {
      var _this4 = this;
      // eslint-disable-next-line no-restricted-globals
      this.broadcastChannel.onmessage = /*#__PURE__*/function () {
        var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee8(event) {
          var dataGA;
          return regenerator_default().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                if (event.data && event.data.type === 'analytics') {
                  dataGA = event.data.dataGA;
                  _this4.analytics.send(dataGA);
                } else if (event.data && event.data.type === 'activate') {
                  _this4.activate({
                    data: event.data.dataActivate,
                    sender: event.data.sender,
                    device: _this4.device
                  });
                } else if (event.data && event.data.type === 'applyCoupons') {
                  _this4.applyCoupons({
                    sender: event.data.sender
                  });
                } else if (event.data && event.data.type === 'stopCoupons') {
                  _this4.stopCoupons({
                    sender: event.data.sender
                  });
                }
              case 1:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }));
        return function (_x4) {
          return _ref3.apply(this, arguments);
        };
      }();
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "applyCoupons",
    value: function () {
      var _applyCoupons = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee9(_ref4) {
        var sender, featureFlags, isSleekEnabled, merchant, codes;
        return regenerator_default().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              sender = _ref4.sender;
              _context9.next = 3;
              return this.featureFlags.getFeatureFlags();
            case 3:
              featureFlags = _context9.sent;
              isSleekEnabled = featureFlags.flagSleekEnabled;
              if (isSleekEnabled) {
                _context9.next = 7;
                break;
              }
              return _context9.abrupt("return");
            case 7:
              _context9.prev = 7;
              merchant = this.merchants.getByUrl(sender.url);
              if (merchant !== null && merchant !== void 0 && merchant.offers) {
                _context9.next = 11;
                break;
              }
              return _context9.abrupt("return");
            case 11:
              codes = this.couponProvider(merchant);
              if (!(codes.length === 0)) {
                _context9.next = 14;
                break;
              }
              return _context9.abrupt("return");
            case 14:
              (0,web_ext_sdk/* getWebExtSdk */.mN)().onTab(sender.tab.id).startCouponAutoApply(codes);
              _context9.next = 20;
              break;
            case 17:
              _context9.prev = 17;
              _context9.t0 = _context9["catch"](7);
              consoleLog('SLEEK APPLY COUPONS ERROR:', _context9.t0);
            case 20:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[7, 17]]);
      }));
      function applyCoupons(_x5) {
        return _applyCoupons.apply(this, arguments);
      }
      return applyCoupons;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "createResetConquestAlarm",
    value: function () {
      var _createResetConquestAlarm = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee10(_ref5) {
        var data, sendResponse, slug;
        return regenerator_default().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              data = _ref5.data, sendResponse = _ref5.sendResponse;
              slug = data.conquest.slug;
              this.conquest.setShowNotification(slug, false);
              chrome.alarms.create("resetConquest_".concat(slug, "_").concat(Date.now() + CONQUEST_RESET_TIMER), {
                when: Date.now() + CONQUEST_RESET_TIMER
              });
              sendResponse({
                success: true
              });
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function createResetConquestAlarm(_x6) {
        return _createResetConquestAlarm.apply(this, arguments);
      }
      return createResetConquestAlarm;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "updateConquestPosition",
    value: function () {
      var _updateConquestPosition = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee11(_ref6) {
        var data, sendResponse, conquest;
        return regenerator_default().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              data = _ref6.data, sendResponse = _ref6.sendResponse;
              conquest = data.conquest;
              this.conquest.setNotificationPosition(conquest.slug, conquest.notificationPosition);
              sendResponse({
                success: true
              });
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function updateConquestPosition(_x7) {
        return _updateConquestPosition.apply(this, arguments);
      }
      return updateConquestPosition;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "stopCoupons",
    value: function () {
      var _stopCoupons = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee12(_ref7) {
        var sender, featureFlags, isSleekEnabled, tabInstance;
        return regenerator_default().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              sender = _ref7.sender;
              _context12.next = 3;
              return this.featureFlags.getFeatureFlags();
            case 3:
              featureFlags = _context12.sent;
              isSleekEnabled = featureFlags.flagSleekEnabled;
              if (isSleekEnabled) {
                _context12.next = 7;
                break;
              }
              return _context12.abrupt("return");
            case 7:
              try {
                tabInstance = (0,web_ext_sdk/* getWebExtSdk */.mN)().onTab({
                  tabId: sender.tab.id
                });
                tabInstance.stopCouponAutoApply();
              } catch (error) {
                consoleLog('SLEEK STOP COUPONS ERROR:', error);
              }
            case 8:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function stopCoupons(_x8) {
        return _stopCoupons.apply(this, arguments);
      }
      return stopCoupons;
    }()
  }, {
    key: "installRedirect",
    value: function () {
      var _installRedirect = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee13() {
        var redirect,
          settings,
          url,
          tab,
          _args13 = arguments;
        return regenerator_default().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              redirect = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : false;
              _context13.next = 3;
              return this.settings.getSettings();
            case 3:
              settings = _context13.sent;
              url = "".concat(AFTER_INSTALL_URL, "&fingerprint=").concat(settings.analyticsClientId, "&version=").concat(VERSION);
              if (this.device === 'mobile') {
                url = "".concat(AFTER_INSTALL_URL_MOBILE, "&fingerprint=").concat(settings.analyticsClientId, "&version=").concat(VERSION);
              }
              if (BROWSER === 'safari') {
                browser.runtime.sendNativeMessage('application.id', {
                  message: 'installed',
                  client_id: settings.analyticsClientId
                });
              }
              if (!redirect) {
                _context13.next = 14;
                break;
              }
              _context13.next = 10;
              return getActiveTab();
            case 10:
              tab = _context13.sent;
              chrome.tabs.update(tab.id, {
                url: url
              });
              _context13.next = 15;
              break;
            case 14:
              chrome.tabs.create({
                url: url
              });
            case 15:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function installRedirect() {
        return _installRedirect.apply(this, arguments);
      }
      return installRedirect;
    }() // when this function is called this refers to serviceWorker this.app refers this class/file
  }, {
    key: "handleAdded",
    value: function () {
      var _handleAdded = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee14(permissions) {
        var hasPermissions, settings;
        return regenerator_default().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              // check permissions browser.permissions.getAll() -> promise -> origins must be "*://*/*"
              hasPermissions = permissions.origins.includes('*://*/*');
              _context14.next = 3;
              return this.app.settings.getSettings();
            case 3:
              settings = _context14.sent;
              if (hasPermissions) {
                this.app.installRedirect(true);
                chrome.permissions.onAdded.removeListener(this.app.handleAdded);
                // communicate with web extension handler
                browser.runtime.sendNativeMessage('application.id', {
                  message: 'permissions_enabled',
                  client_id: settings.analyticsClientId
                }, function (response) {
                  consoleLog('Received sendNativeMessage response:');
                  consoleLog(response);
                });
              }
            case 5:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function handleAdded(_x9) {
        return _handleAdded.apply(this, arguments);
      }
      return handleAdded;
    }()
  }, {
    key: "checkPermissions",
    value: function () {
      var _checkPermissions = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee15(url) {
        var settings, _yield$chrome$permiss, origins, originsHasPermissions, tab, urlInstall;
        return regenerator_default().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return this.settings.getSettings();
            case 2:
              settings = _context15.sent;
              if (!(new RegExp(HOME_PAGE).test(url) || url === '')) {
                _context15.next = 18;
                break;
              }
              _context15.next = 6;
              return chrome.permissions.getAll();
            case 6:
              _yield$chrome$permiss = _context15.sent;
              origins = _yield$chrome$permiss.origins;
              originsHasPermissions = origins.includes('*://*/*');
              if (!originsHasPermissions) {
                chrome.runtime.sendNativeMessage('application.id', {
                  message: 'reset',
                  client_id: settings.analyticsClientId
                });
              }
              if (!(new RegExp(PERMISSIONS).test(url) || new RegExp(PERMISSIONS_MOBILE).test(url))) {
                _context15.next = 18;
                break;
              }
              if (!originsHasPermissions) {
                _context15.next = 18;
                break;
              }
              chrome.runtime.sendNativeMessage('application.id', {
                message: 'permissions_enabled',
                client_id: settings.analyticsClientId
              });
              _context15.next = 15;
              return getActiveTab();
            case 15:
              tab = _context15.sent;
              urlInstall = "".concat(AFTER_INSTALL_URL_MOBILE, "&fingerprint=").concat(settings.analyticsClientId, "&version=").concat(VERSION);
              chrome.tabs.update(tab.id, {
                url: urlInstall
              });
            case 18:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function checkPermissions(_x10) {
        return _checkPermissions.apply(this, arguments);
      }
      return checkPermissions;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "checkTcbtbauth",
    value: function () {
      var _checkTcbtbauth = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee16(tabId, url) {
        var cookies, result, tcbtbauth, loggedIn, previousTcbtbauth;
        return regenerator_default().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              if (!(url.includes(HOME_PAGE) && BROWSER === 'safari')) {
                _context16.next = 18;
                break;
              }
              _context16.next = 3;
              return chrome.scripting.executeScript({
                target: {
                  tabId: tabId
                },
                func: function func() {
                  return document.cookie;
                }
              });
            case 3:
              cookies = _context16.sent;
              result = cookies[0].result.split('; ').reduce(function (prev, current) {
                var _current$split = current.split('='),
                  _current$split2 = (0,toArray/* default */.A)(_current$split),
                  name = _current$split2[0],
                  value = _current$split2.slice(1);
                // eslint-disable-next-line no-param-reassign
                prev[name] = value.join('=');
                return prev;
              }, {});
              tcbtbauth = result.TCBTBAuth;
              loggedIn = result.LoggedIn;
              if (!(tcbtbauth && loggedIn === 'True')) {
                _context16.next = 16;
                break;
              }
              _context16.next = 10;
              return getStorageData('tcbtbauth');
            case 10:
              previousTcbtbauth = _context16.sent;
              if (!((previousTcbtbauth === null || previousTcbtbauth === void 0 ? void 0 : previousTcbtbauth.tcbtbauth) !== tcbtbauth)) {
                _context16.next = 14;
                break;
              }
              _context16.next = 14;
              return setStorageData({
                tcbtbauth: tcbtbauth
              });
            case 14:
              _context16.next = 18;
              break;
            case 16:
              _context16.next = 18;
              return setStorageData({
                tcbtbauth: ''
              });
            case 18:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function checkTcbtbauth(_x11, _x12) {
        return _checkTcbtbauth.apply(this, arguments);
      }
      return checkTcbtbauth;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "couponProvider",
    value: function couponProvider(merchant) {
      try {
        var coupons = uniqBy_default()(filter_default()(merchant.offers, function (_ref8) {
          var code = _ref8.code;
          return code && !NO_CODE_PATTERNS.find(function (pattern) {
            return code.includes(pattern);
          });
        }), 'code');
        var codes = coupons.map(function (offer) {
          return offer.code;
        });
        return codes;
      } catch (error) {
        consoleLog('SLEEK COUPON ERROR', error);
        return [];
      }
    }
  }, {
    key: "setEventListenersBeforeInit",
    value: function setEventListenersBeforeInit() {
      var _this5 = this;
      chrome.runtime.onInstalled.addListener(/*#__PURE__*/function () {
        var _ref10 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee17(_ref9) {
          var reason, reloadExtension, _yield$getStorageData6, permissionsTabOpened, _yield$chrome$permiss2, origins, originsHasPermissions, settings;
          return regenerator_default().wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
              case 0:
                reason = _ref9.reason;
                _context17.next = 3;
                return getStorageData('reloadExtension');
              case 3:
                reloadExtension = _context17.sent;
                if (!reloadExtension.reloadExtension) {
                  _context17.next = 8;
                  break;
                }
                _context17.next = 7;
                return setStorageData({
                  reloadExtension: false
                });
              case 7:
                return _context17.abrupt("return");
              case 8:
                _context17.next = 10;
                return getStorageData('permissionsTabOpened');
              case 10:
                _yield$getStorageData6 = _context17.sent;
                permissionsTabOpened = _yield$getStorageData6.permissionsTabOpened;
                if (!(reason === 'install')) {
                  _context17.next = 31;
                  break;
                }
                _context17.next = 15;
                return setStorageData({
                  permissionsTabOpened: true
                });
              case 15:
                if (!(BROWSER !== 'safari')) {
                  _context17.next = 19;
                  break;
                }
                _this5.installRedirect(false);
                _context17.next = 29;
                break;
              case 19:
                if (!(BROWSER === 'safari' && !permissionsTabOpened)) {
                  _context17.next = 29;
                  break;
                }
                if (_this5.deviceModel) {
                  _context17.next = 23;
                  break;
                }
                _context17.next = 23;
                return _this5.loadStorageVariables();
              case 23:
                _context17.next = 25;
                return chrome.permissions.getAll();
              case 25:
                _yield$chrome$permiss2 = _context17.sent;
                origins = _yield$chrome$permiss2.origins;
                originsHasPermissions = origins.includes('*://*/*');
                if (originsHasPermissions) {
                  _this5.installRedirect(false);
                } else {
                  if (_this5.deviceModel === 'iphone') {
                    chrome.tabs.create({
                      url: "".concat(PERMISSIONS_MOBILE)
                    });
                  } else {
                    chrome.tabs.create({
                      url: "".concat(PERMISSIONS)
                    });
                  }
                  chrome.permissions.onAdded.addListener(_this5.handleAdded);
                }
              case 29:
                _context17.next = 32;
                break;
              case 31:
                if (reason === 'update') {
                  migrations(_this5);
                }
              case 32:
                _context17.next = 34;
                return _this5.settings.getSettings();
              case 34:
                settings = _context17.sent;
                chrome.runtime.setUninstallURL("".concat(AFTER_UNINSTALL_URL, "?fingerprint=").concat(settings.analyticsClientId, "&version=").concat(VERSION));
              case 36:
              case "end":
                return _context17.stop();
            }
          }, _callee17);
        }));
        return function (_x13) {
          return _ref10.apply(this, arguments);
        };
      }());
      chrome.alarms.onAlarm.addListener(/*#__PURE__*/function () {
        var _ref11 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee18(alarm) {
          return regenerator_default().wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
              case 0:
                if (!(alarm.name === 'reloadExtension')) {
                  _context18.next = 4;
                  break;
                }
                _context18.next = 3;
                return setStorageData({
                  reloadExtension: true
                });
              case 3:
                browser.runtime.reload();
              case 4:
              case "end":
                return _context18.stop();
            }
          }, _callee18);
        }));
        return function (_x14) {
          return _ref11.apply(this, arguments);
        };
      }());
      chrome.runtime.onStartup.addListener(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee20() {
        var consents;
        return regenerator_default().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return _this5.settings.showConsents();
            case 2:
              consents = _context20.sent;
              if (!consents) {
                setTimeout(/*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee19() {
                  return regenerator_default().wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                      case 0:
                        _context19.next = 2;
                        return _this5.merchants.resetStates();
                      case 2:
                        _context19.next = 4;
                        return _this5.conquest.resetState();
                      case 4:
                        _this5.resetSuprressionActivation();
                      case 5:
                      case "end":
                        return _context19.stop();
                    }
                  }, _callee19);
                })), 1000);
              }
              chrome.alarms.getAll(function (alarms) {
                alarms.forEach(function (alarm) {
                  if (alarm.name.startsWith('suppressions_') || alarm.name.startsWith('resetConquest_') || alarm.name.startsWith('resetTimers_') || alarm.name.startsWith('activations_')) {
                    chrome.alarms.clear(alarm.name);
                  }
                });
              });
            case 5:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      })));
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this6 = this;
      chrome.webRequest.onBeforeRequest.addListener(function (details) {
        if (details.frameId === 0 && details.url) {
          consoleLog({
            name: 'URL EVENT - onBeforeRequest',
            url: details.url,
            tabId: details.tabId
          });
          _this6.check(details);
        }
      }, {
        urls: ['<all_urls>'],
        types: ['main_frame']
      });
      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, _ref14) {
        var url = _ref14.url;
        chrome.tabs.get(tabId, /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee21() {
          return regenerator_default().wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
              case 0:
                if (!chrome.runtime.lastError) {
                  _context21.next = 2;
                  break;
                }
                return _context21.abrupt("return");
              case 2:
                _this6.checkTcbtbauth(tabId, url);
                sendBackgroundMessage(tabId, {
                  action: 'BG_URL',
                  data: {
                    url: url
                  }
                });
                consoleLog({
                  name: 'URL EVENT - onUpdated',
                  url: url,
                  tabId: tabId
                });
                _context21.next = 7;
                return _this6.check({
                  url: url,
                  tabId: tabId
                });
              case 7:
                if (changeInfo.status === 'loading') {
                  if (BROWSER === 'safari') {
                    _this6.canInitContentSafari = false;
                  }
                  _this6.checkMerchantStatus({
                    url: url,
                    tabId: tabId,
                    userBacs: _this6.user.data && _this6.user.data.hasBacs,
                    siteLoaded: false
                  });
                } else if (changeInfo.status === 'complete') {
                  if (BROWSER === 'safari') {
                    if (_this6.device === 'mobile') {
                      _this6.checkPermissions(url);
                    }
                    _this6.checkMerchantStatus({
                      url: url,
                      tabId: tabId,
                      userBacs: _this6.user.data && _this6.user.data.hasBacs,
                      siteLoaded: true
                    });
                    _this6.canInitContentSafari = true;
                  } else {
                    _this6.checkMerchantStatus({
                      url: url,
                      tabId: tabId,
                      userBacs: _this6.user.data && _this6.user.data.hasBacs,
                      siteLoaded: true
                    });
                  }
                  if (url.includes(JOIN_PAGE_URL)) {
                    updateTab(tabId, {
                      active: true
                    });
                  }
                  _this6.checkDeeplink({
                    url: url,
                    tabId: tabId
                  });
                  _this6.checkRecentStore(url);
                  _this6.updateBacs(url);
                }
                _this6.updateIcon(tabId);
              case 9:
              case "end":
                return _context21.stop();
            }
          }, _callee21);
        })));
      });
      chrome.tabs.onActivated.addListener(function (_ref16) {
        var tabId = _ref16.tabId;
        return _this6.updateIcon(tabId);
      });
      chrome.action.onClicked.addListener(function (tab) {
        return _this6.iconClicked(tab);
      });

      // using web navigation instead of webrequest to maintain compatibility with safari
      // TODO: future improvement is to change every webRequest to webNavigation
      chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
        if (details.url !== 'about:blank') {
          consoleLog({
            name: 'URL EVENT - onBeforeNavigate',
            url: details.url,
            tabId: details.tabId
          });
          _this6.check({
            url: details.url,
            tabId: details.tabId
          });
        }
      });
    }

    // maybe join this 2 function for content styles instead of storing data on app variable
  }, {
    key: "setContentStyles",
    value: function () {
      var _setContentStyles = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee22() {
        var req, styles;
        return regenerator_default().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              _context22.prev = 0;
              _context22.next = 3;
              return fetch(chrome.runtime.getURL('content/styles.css'));
            case 3:
              req = _context22.sent;
              _context22.next = 6;
              return req.text();
            case 6:
              styles = _context22.sent;
              this.contentStyles = styles;
              _context22.next = 13;
              break;
            case 10:
              _context22.prev = 10;
              _context22.t0 = _context22["catch"](0);
              consoleLog(_context22.t0);
            case 13:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this, [[0, 10]]);
      }));
      function setContentStyles() {
        return _setContentStyles.apply(this, arguments);
      }
      return setContentStyles;
    }()
  }, {
    key: "getContentStyles",
    value: function () {
      var _getContentStyles = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee23(_ref17) {
        var sendResponse;
        return regenerator_default().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              sendResponse = _ref17.sendResponse;
              if (this.contentStyles) {
                _context23.next = 4;
                break;
              }
              _context23.next = 4;
              return this.setContentStyles();
            case 4:
              sendResponse(this.contentStyles);
            case 5:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this);
      }));
      function getContentStyles(_x15) {
        return _getContentStyles.apply(this, arguments);
      }
      return getContentStyles;
    }()
  }, {
    key: "setMessagesListener",
    value: function setMessagesListener() {
      var _this7 = this;
      chrome.runtime.onMessage.addListener(function (_ref18, sender, sendResponse) {
        var module = _ref18.module,
          action = _ref18.action,
          data = _ref18.data,
          device = _ref18.device,
          namespace = _ref18.namespace;
        // message from sleek
        if (namespace && namespace.includes('sleek:bg')) {
          return;
        }
        var executor = module ? _this7[module] : _this7;
        if (executor && typeof executor[action] === 'function') {
          executor[action].call(executor, {
            data: data,
            sender: sender,
            device: device,
            sendResponse: sendResponse
          });
        } else {
          sendResponse(null);
        }
        // eslint-disable-next-line consistent-return
        return true;
      });
    }
  }, {
    key: "acceptConsents",
    value: function acceptConsents(_ref19) {
      var data = _ref19.data,
        sendResponse = _ref19.sendResponse;
      var analytical = data.analytical;
      this.settings.setSettings({
        isAnalyticsEnabled: analytical
      });
      if (this.settings.data.isAnalyticsEnabled) {
        this.sendAnalytics({
          data: {
            ec: 'Extension',
            ea: 'Install'
          }
        });
      }
      sendResponse(null);
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "updateGaPopupPosition",
    value: function updateGaPopupPosition(_ref20) {
      var data = _ref20.data,
        sendResponse = _ref20.sendResponse;
      var updatedGaPopupPosition = data.gaPopupPosition;
      this.settings.setSettings({
        gaPopupPosition: updatedGaPopupPosition
      });
      sendResponse({
        success: true
      });
    }
  }, {
    key: "updateUserAndMerchants",
    value: function () {
      var _updateUserAndMerchants = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee24() {
        return regenerator_default().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              if (this.analytics.isReady) {
                _context24.next = 3;
                break;
              }
              _context24.next = 3;
              return this.analytics.init();
            case 3:
              if (!this.user) {
                this.user = new User();
              }
              _context24.next = 6;
              return this.user.update();
            case 6:
              this.merchants.update();
            case 7:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function updateUserAndMerchants() {
        return _updateUserAndMerchants.apply(this, arguments);
      }
      return updateUserAndMerchants;
    }()
  }, {
    key: "updateBacs",
    value: function updateBacs(url) {
      if (url.includes(PAYMENT_DETAILS_URL)) this.user.update(true);
    }
  }, {
    key: "hideGaPopup",
    value: function () {
      var _hideGaPopup = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee25(_ref21) {
        var sendResponse, beforeVersion;
        return regenerator_default().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              sendResponse = _ref21.sendResponse;
              _context25.next = 3;
              return this.settings.setSettings({
                showGa: false
              });
            case 3:
              this.init();
              _context25.next = 6;
              return getStorageData('version');
            case 6:
              beforeVersion = _context25.sent;
              if (!beforeVersion.version) {
                setStorageData({
                  version: VERSION
                });
              }
              sendResponse(null);
            case 9:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function hideGaPopup(_x16) {
        return _hideGaPopup.apply(this, arguments);
      }
      return hideGaPopup;
    }()
  }, {
    key: "sendAnalytics",
    value: function sendAnalytics(_ref22) {
      var data = _ref22.data,
        sendResponse = _ref22.sendResponse;
      if (this.settings.data.isAnalyticsEnabled) {
        this.analytics.send(data);
      }
      // this is needed because when we call this function inside the service_worker context we won't have the sendResponse obj
      if (sendResponse) {
        sendResponse(null);
      }
    }
  }, {
    key: "sendCaaAnalytics",
    value: function sendCaaAnalytics(_ref23) {
      var data = _ref23.data,
        sendResponse = _ref23.sendResponse;
      if (this.settings.data.isAnalyticsEnabled) {
        this.analytics.send(data.ga);
      }
      sendResponse(null);
    }

    // eslint-disable-next-line consistent-return
  }, {
    key: "updateIcon",
    value: function () {
      var _updateIcon = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee26(tabId) {
        var _this8 = this;
        var _ref24, id, url, _yield$this$merchants, merchant, state, canShowOnTab, wasActivatedBefore, canShowBadgeText, type;
        return regenerator_default().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              _context26.prev = 0;
              _context26.next = 3;
              return getActiveTab();
            case 3:
              _context26.t0 = _context26.sent;
              if (_context26.t0) {
                _context26.next = 6;
                break;
              }
              _context26.t0 = {};
            case 6:
              _ref24 = _context26.t0;
              id = _ref24.id;
              url = _ref24.url;
              if (!(isNumber_default()(tabId) && id !== tabId)) {
                _context26.next = 11;
                break;
              }
              return _context26.abrupt("return", false);
            case 11:
              _context26.next = 13;
              return this.merchants.getMerchantAndState({
                url: url
              });
            case 13:
              _yield$this$merchants = _context26.sent;
              merchant = _yield$this$merchants.merchant;
              state = _yield$this$merchants.state;
              canShowOnTab = state && state.competitorActivationTab ? !state.competitorActivationTab.includes(tabId) : true;
              wasActivatedBefore = state && state.topcashbackActivationTab ? state.topcashbackActivationTab.includes(tabId) : false;
              canShowBadgeText = state && state.showReactivation && (canShowOnTab || wasActivatedBefore);
              chrome.action.setBadgeText({
                text: state && (!state.suppressed || canShowBadgeText || !!state.activated) ? "".concat(merchant.offers_length > 0 ? merchant.offers_length : 1) : ''
              });
              type = findKey_default()({
                activatedMerchant: state && state.activated,
                merchant: state,
                nonMerchant: !state
              }, function (validType) {
                return validType;
              });
              if (!(type === this.iconType)) {
                _context26.next = 23;
                break;
              }
              return _context26.abrupt("return", false);
            case 23:
              this.iconType = type;
              _context26.next = 26;
              return setStorageData({
                iconType: this.iconType
              });
            case 26:
              return _context26.abrupt("return", this.icon[type]());
            case 29:
              _context26.prev = 29;
              _context26.t1 = _context26["catch"](0);
              setTimeout(function () {
                _this8.updateIcon(tabId);
              }, 100);
            case 32:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this, [[0, 29]]);
      }));
      function updateIcon(_x17) {
        return _updateIcon.apply(this, arguments);
      }
      return updateIcon;
    }()
  }, {
    key: "updateMerchantState",
    value: function updateMerchantState(_ref25) {
      var data = _ref25.data,
        _ref25$sender = _ref25.sender,
        sender = _ref25$sender === void 0 ? {} : _ref25$sender,
        sendResponse = _ref25.sendResponse;
      this.merchants.setState({
        url: sender.url,
        id: data.id,
        data: data.state
      });
      if (data.reset === true) {
        // this should only be triggered for notification dismissal right now
        chrome.alarms.create("resetTimers_".concat(data.id, "_").concat(Date.now() + DISMISSAL_RESET_TIMER), {
          when: Date.now() + DISMISSAL_RESET_TIMER
        });
      }
      this.updateIcon();
      sendResponse(null);
    }
  }, {
    key: "checkRecentStore",
    value: function () {
      var _checkRecentStore = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee27(url) {
        var merchant, _yield$getStorageData7, _yield$getStorageData8, recentStores, findById, index;
        return regenerator_default().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              merchant = this.merchants.getBy('url', url);
              if (!merchant) {
                _context27.next = 14;
                break;
              }
              _context27.next = 4;
              return getStorageData('recentStores');
            case 4:
              _yield$getStorageData7 = _context27.sent;
              _yield$getStorageData8 = _yield$getStorageData7.recentStores;
              recentStores = _yield$getStorageData8 === void 0 ? [] : _yield$getStorageData8;
              findById = function findById(element) {
                return element.id === merchant.id;
              };
              index = recentStores.findIndex(findById);
              if (index > -1) {
                recentStores.splice(index, 1);
              }
              recentStores.unshift({
                id: merchant.id,
                logo: merchant.logo
              });
              recentStores.slice(0, 50);
              _context27.next = 14;
              return setStorageData({
                recentStores: recentStores
              });
            case 14:
              return _context27.abrupt("return", false);
            case 15:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this);
      }));
      function checkRecentStore(_x18) {
        return _checkRecentStore.apply(this, arguments);
      }
      return checkRecentStore;
    }()
  }, {
    key: "getCurrentMerchant",
    value: function () {
      var _getCurrentMerchant = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee28() {
        var _yield$getActiveTab, url, _yield$this$merchants2, merchant, state;
        return regenerator_default().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              _context28.next = 2;
              return getActiveTab();
            case 2:
              _yield$getActiveTab = _context28.sent;
              url = _yield$getActiveTab.url;
              _context28.next = 6;
              return this.merchants.getMerchantAndState({
                url: url
              });
            case 6:
              _yield$this$merchants2 = _context28.sent;
              merchant = _yield$this$merchants2.merchant;
              state = _yield$this$merchants2.state;
              return _context28.abrupt("return", merchant ? merge_default()({}, state, merchant) : null);
            case 10:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this);
      }));
      function getCurrentMerchant() {
        return _getCurrentMerchant.apply(this, arguments);
      }
      return getCurrentMerchant;
    }() // called by serp
  }, {
    key: "getMerchant",
    value: function () {
      var _getMerchant = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee29(_ref26) {
        var data, sendResponse, consents, _yield$this$merchants3, _merchant, state, rawSecondaryURL, secondaryUrlData;
        return regenerator_default().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              data = _ref26.data, sendResponse = _ref26.sendResponse;
              _context29.next = 3;
              return this.settings.showConsents();
            case 3:
              consents = _context29.sent;
              if (consents) {
                _context29.next = 20;
                break;
              }
              _context29.next = 7;
              return this.merchants.getMerchantAndState({
                url: data.url,
                updateSingleMerchant: false
              });
            case 7:
              _yield$this$merchants3 = _context29.sent;
              _merchant = _yield$this$merchants3.merchant;
              state = _yield$this$merchants3.state;
              if (!(data.secondary_url && data.secondary_url !== '' && !_merchant)) {
                _context29.next = 17;
                break;
              }
              // to check merchant through the link under the title on SERP
              rawSecondaryURL = data.secondary_url.replace(/\s*›\s*/g, '/');
              _context29.next = 14;
              return this.merchants.getMerchantAndState({
                url: rawSecondaryURL,
                updateSingleMerchant: false
              });
            case 14:
              secondaryUrlData = _context29.sent;
              _merchant = secondaryUrlData.merchant;
              state = secondaryUrlData.state;
            case 17:
              sendResponse(_merchant ? merge_default()({}, _merchant, state) : null);
              _context29.next = 21;
              break;
            case 20:
              sendResponse(null);
            case 21:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function getMerchant(_x19) {
        return _getMerchant.apply(this, arguments);
      }
      return getMerchant;
    }()
  }, {
    key: "initContent",
    value: function () {
      var _initContent = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee30(_ref27) {
        var sender, sendResponse, consents, _sender$tab, _sender$tab2, url, _yield$getStorageData9, _yield$getStorageData10, mutedMerchants, isLogged, _this$user, showGa, index, _yield$this$merchants4, _merchant2, state, isEbay, _yield$getStorageData11, _yield$getStorageData12, ebayTimestamp, conquest, conquestMerchant, _conquest, result, response;
        return regenerator_default().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              sender = _ref27.sender, sendResponse = _ref27.sendResponse;
              _context30.next = 3;
              return this.settings.showConsents();
            case 3:
              consents = _context30.sent;
              if (!consents) {
                _context30.next = 19;
                break;
              }
              _context30.t0 = sendResponse;
              _context30.t1 = app_objectSpread;
              _context30.t2 = app_objectSpread;
              _context30.t3 = {};
              _context30.next = 11;
              return this.featureFlags.getFeatureFlags();
            case 11:
              _context30.t4 = _context30.sent;
              _context30.t5 = (0, _context30.t2)(_context30.t3, _context30.t4);
              _context30.t6 = {};
              _context30.t7 = {
                showGa: true
              };
              _context30.t8 = (0, _context30.t1)(_context30.t5, _context30.t6, _context30.t7);
              (0, _context30.t0)(_context30.t8);
              _context30.next = 83;
              break;
            case 19:
              url = sender.url;
              _context30.next = 22;
              return getStorageData('mutedMerchants');
            case 22:
              _yield$getStorageData9 = _context30.sent;
              _yield$getStorageData10 = _yield$getStorageData9.mutedMerchants;
              mutedMerchants = _yield$getStorageData10 === void 0 ? [] : _yield$getStorageData10;
              _context30.next = 27;
              return checkUserLogin();
            case 27:
              isLogged = _context30.sent;
              if (!url.includes(HOME_PAGE)) {
                _context30.next = 35;
                break;
              }
              if ((_this$user = this.user) !== null && _this$user !== void 0 && _this$user.data) {
                _context30.next = 33;
                break;
              }
              this.user = new User();
              _context30.next = 33;
              return this.user.update();
            case 33:
              _context30.next = 35;
              return this.updateUserInfo(isLogged);
            case 35:
              showGa = this.settings.data.showGa && !this.settings.data.isAnalyticsEnabled && new RegExp(HOME_PAGE).test(url);
              if (!(BROWSER === 'safari')) {
                _context30.next = 48;
                break;
              }
              index = 0;
            case 38:
              if (!(index < 40)) {
                _context30.next = 48;
                break;
              }
              if (this.canInitContentSafari) {
                _context30.next = 44;
                break;
              }
              _context30.next = 42;
              return new Promise(function (res) {
                setTimeout(function () {
                  return res('waited');
                }, 100);
              });
            case 42:
              _context30.next = 45;
              break;
            case 44:
              return _context30.abrupt("break", 48);
            case 45:
              index += 1;
              _context30.next = 38;
              break;
            case 48:
              _context30.next = 50;
              return this.merchants.getMerchantAndState({
                url: url
              });
            case 50:
              _yield$this$merchants4 = _context30.sent;
              _merchant2 = _yield$this$merchants4.merchant;
              state = _yield$this$merchants4.state;
              isEbay = _merchant2 && _merchant2.domain === EBAY_URL;
              _context30.next = 56;
              return getStorageData(['ebayTimestamp']);
            case 56:
              _yield$getStorageData11 = _context30.sent;
              _yield$getStorageData12 = _yield$getStorageData11.ebayTimestamp;
              ebayTimestamp = _yield$getStorageData12 === void 0 ? 0 : _yield$getStorageData12;
              if (_merchant2 && _merchant2.name.includes('eBay')) {
                if (ebayTimestamp < Date.now()) {
                  setStorageData({
                    ebayTimestamp: 0
                  });
                }
              }
              conquest = null;
              conquestMerchant = null;
              if (!(REGION === 'us')) {
                _context30.next = 71;
                break;
              }
              _context30.next = 65;
              return this.conquest.getByUrl(url);
            case 65:
              conquest = _context30.sent;
              if (!((_conquest = conquest) !== null && _conquest !== void 0 && _conquest.merchantId)) {
                _context30.next = 71;
                break;
              }
              _context30.next = 69;
              return this.merchants.getMerchantAndState({
                merchantId: conquest.merchantId
              });
            case 69:
              result = _context30.sent;
              conquestMerchant = result.merchant;
            case 71:
              _context30.t9 = app_objectSpread;
              _context30.t10 = app_objectSpread;
              _context30.t11 = {
                settings: this.settings,
                merchant: isEbay ? merge_default()({}, state, _merchant2, {
                  showEbay: this.ebayCounter > 0
                }) : merge_default()({}, state, _merchant2),
                user: this.user.data,
                mutedMerchants: mutedMerchants,
                configs: this.configs.data
              };
              _context30.next = 76;
              return this.featureFlags.getFeatureFlags();
            case 76:
              _context30.t12 = _context30.sent;
              _context30.t13 = (0, _context30.t10)(_context30.t11, _context30.t12);
              _context30.t14 = {};
              _context30.t15 = {
                isLogged: isLogged,
                showGa: showGa,
                tabId: sender === null || sender === void 0 || (_sender$tab = sender.tab) === null || _sender$tab === void 0 ? void 0 : _sender$tab.id,
                windowId: sender === null || sender === void 0 || (_sender$tab2 = sender.tab) === null || _sender$tab2 === void 0 ? void 0 : _sender$tab2.windowId,
                secondNotifierTimer: this.secondNotifierTimer,
                conquest: conquest,
                conquestMerchant: conquestMerchant
              };
              response = (0, _context30.t9)(_context30.t13, _context30.t14, _context30.t15);
              sendResponse(response);
              if (isEbay) {
                this.ebayCounter -= 1;
              }
            case 83:
              return _context30.abrupt("return", true);
            case 84:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this);
      }));
      function initContent(_x20) {
        return _initContent.apply(this, arguments);
      }
      return initContent;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "uninstall",
    value: function uninstall(_ref28) {
      var sendResponse = _ref28.sendResponse;
      chrome.management.uninstallSelf({
        showConfirmDialog: true
      });
      sendResponse(null);
    }
  }, {
    key: "getStorePopupInfo",
    value: function () {
      var _getStorePopupInfo = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee31(_ref29) {
        var data, sendResponse, showConsents, _state, _state2, user, merchants, index, _yield$this$merchants5, _merchant3, state, _yield$this$getTopOff, banners, topOffers, _yield$getStorageData13, _yield$getStorageData14, recentStores, validRecentStores, errorParsing, _iterator, _step, _loop, response;
        return regenerator_default().wrap(function _callee31$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              data = _ref29.data, sendResponse = _ref29.sendResponse;
              _context32.next = 3;
              return this.settings.showConsents();
            case 3:
              showConsents = _context32.sent;
              if (!showConsents) {
                _context32.next = 19;
                break;
              }
              _context32.t0 = sendResponse;
              _context32.t1 = app_objectSpread;
              _context32.t2 = app_objectSpread;
              _context32.t3 = {};
              _context32.next = 11;
              return this.featureFlags.getFeatureFlags();
            case 11:
              _context32.t4 = _context32.sent;
              _context32.t5 = (0, _context32.t2)(_context32.t3, _context32.t4);
              _context32.t6 = {};
              _context32.t7 = {
                showConsents: showConsents
              };
              _context32.t8 = (0, _context32.t1)(_context32.t5, _context32.t6, _context32.t7);
              (0, _context32.t0)(_context32.t8);
              _context32.next = 82;
              break;
            case 19:
              user = this.user.data;
              merchants = null;
              merchants = this.merchants.data;
              index = 0;
            case 23:
              if (!(index < 40)) {
                _context32.next = 35;
                break;
              }
              if (!(!user || !merchants)) {
                _context32.next = 31;
                break;
              }
              if (!user) {
                user = this.user.data;
              }
              if (!merchants) {
                merchants = this.merchants.data;
              }
              // eslint-disable-next-line no-await-in-loop
              _context32.next = 29;
              return new Promise(function (res) {
                setTimeout(function () {
                  return res('waited');
                }, 100);
              });
            case 29:
              _context32.next = 32;
              break;
            case 31:
              return _context32.abrupt("break", 35);
            case 32:
              index += 1;
              _context32.next = 23;
              break;
            case 35:
              _context32.next = 37;
              return this.merchants.getMerchantAndState({
                url: data.url
              });
            case 37:
              _yield$this$merchants5 = _context32.sent;
              _merchant3 = _yield$this$merchants5.merchant;
              state = _yield$this$merchants5.state;
              if ((_state = state) !== null && _state !== void 0 && _state.suppressed && ((_state2 = state) === null || _state2 === void 0 ? void 0 : _state2.suppressedKind) === 'disableSuppression') {
                _merchant3 = null;
                state = null;
              }
              _context32.next = 43;
              return this.getTopOffers();
            case 43:
              _yield$this$getTopOff = _context32.sent;
              banners = _yield$this$getTopOff.banners;
              topOffers = _yield$this$getTopOff.topOffers;
              _context32.next = 48;
              return getStorageData('recentStores');
            case 48:
              _yield$getStorageData13 = _context32.sent;
              _yield$getStorageData14 = _yield$getStorageData13.recentStores;
              recentStores = _yield$getStorageData14 === void 0 ? [] : _yield$getStorageData14;
              if (!(!_merchant3 && this.device === 'desktop' && this.deviceModel !== 'iphone')) {
                _context32.next = 71;
                break;
              }
              validRecentStores = [];
              errorParsing = false; // eslint-disable-next-line no-restricted-syntax, guard-for-in
              _iterator = app_createForOfIteratorHelper(recentStores);
              _context32.prev = 55;
              _loop = /*#__PURE__*/regenerator_default().mark(function _loop() {
                var elem, recentMerchant;
                return regenerator_default().wrap(function _loop$(_context31) {
                  while (1) switch (_context31.prev = _context31.next) {
                    case 0:
                      elem = _step.value;
                      try {
                        recentMerchant = merchants.find(function (el) {
                          return el.id === elem.id;
                        }); // eslint-disable-next-line no-await-in-loop
                        elem.name = recentMerchant.name;
                        elem.reward = recentMerchant.reward;
                        elem.activationUrl = recentMerchant.activationUrl;
                        validRecentStores.push(elem);
                      } catch (error) {
                        errorParsing = true;
                      }
                    case 2:
                    case "end":
                      return _context31.stop();
                  }
                }, _loop);
              });
              _iterator.s();
            case 58:
              if ((_step = _iterator.n()).done) {
                _context32.next = 62;
                break;
              }
              return _context32.delegateYield(_loop(), "t9", 60);
            case 60:
              _context32.next = 58;
              break;
            case 62:
              _context32.next = 67;
              break;
            case 64:
              _context32.prev = 64;
              _context32.t10 = _context32["catch"](55);
              _iterator.e(_context32.t10);
            case 67:
              _context32.prev = 67;
              _iterator.f();
              return _context32.finish(67);
            case 70:
              if (errorParsing) {
                recentStores = validRecentStores;
                setStorageData({
                  recentStores: recentStores
                });
              }
              // update variable after updateSingleMerchant
            case 71:
              _context32.t11 = app_objectSpread;
              _context32.t12 = app_objectSpread;
              _context32.t13 = {
                user: user,
                merchants: merchants,
                banners: banners,
                topOffers: topOffers
              };
              _context32.next = 76;
              return this.featureFlags.getFeatureFlags();
            case 76:
              _context32.t14 = _context32.sent;
              _context32.t15 = (0, _context32.t12)(_context32.t13, _context32.t14);
              _context32.t16 = {};
              _context32.t17 = {
                merchant: _merchant3 ? merge_default()({}, state, _merchant3) : null,
                recentStores: recentStores,
                showConsents: showConsents
              };
              response = (0, _context32.t11)(_context32.t15, _context32.t16, _context32.t17);
              sendResponse(response);
            case 82:
            case "end":
              return _context32.stop();
          }
        }, _callee31, this, [[55, 64, 67, 70]]);
      }));
      function getStorePopupInfo(_x21) {
        return _getStorePopupInfo.apply(this, arguments);
      }
      return getStorePopupInfo;
    }()
  }, {
    key: "getDeviceInfo",
    value: function () {
      var _getDeviceInfo = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee32(_ref30) {
        var sendResponse, response;
        return regenerator_default().wrap(function _callee32$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              sendResponse = _ref30.sendResponse;
              if (!(!this.device || !this.deviceModel)) {
                _context33.next = 4;
                break;
              }
              _context33.next = 4;
              return this.loadStorageVariables();
            case 4:
              response = {
                device: this.device,
                deviceModel: this.deviceModel
              };
              sendResponse(response);
            case 6:
            case "end":
              return _context33.stop();
          }
        }, _callee32, this);
      }));
      function getDeviceInfo(_x22) {
        return _getDeviceInfo.apply(this, arguments);
      }
      return getDeviceInfo;
    }() // eslint-disable-next-line class-methods-use-this
  }, {
    key: "openSettings",
    value: function openSettings() {
      chrome.runtime.openOptionsPage();
    }
  }, {
    key: "saveSettings",
    value: function saveSettings(_ref31) {
      var data = _ref31.data,
        sendResponse = _ref31.sendResponse;
      this.settings.setSettings(JSON.parse(JSON.stringify(data.data)));
      sendResponse(null);
    }
  }, {
    key: "updateUserInfo",
    value: function () {
      var _updateUserInfo = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee33(isLogged) {
        var userData;
        return regenerator_default().wrap(function _callee33$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              if (!(this.user.data.isLoggedIn === isLogged)) {
                _context34.next = 2;
                break;
              }
              return _context34.abrupt("return");
            case 2:
              this.user.data.isLoggedIn = isLogged;
              _context34.next = 5;
              return this.user.update(true);
            case 5:
              userData = _context34.sent;
              if (userData) {
                _context34.next = 8;
                break;
              }
              return _context34.abrupt("return");
            case 8:
              _context34.next = 10;
              return this.merchants.update(true);
            case 10:
            case "end":
              return _context34.stop();
          }
        }, _callee33, this);
      }));
      function updateUserInfo(_x23) {
        return _updateUserInfo.apply(this, arguments);
      }
      return updateUserInfo;
    }()
  }, {
    key: "navigate",
    value: function () {
      var _navigate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee34(_ref32) {
        var data, sendResponse, url, isNewTab, tab;
        return regenerator_default().wrap(function _callee34$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              data = _ref32.data, sendResponse = _ref32.sendResponse;
              url = data.url, isNewTab = data.isNewTab;
              if (!isNewTab) {
                _context35.next = 6;
                break;
              }
              chrome.tabs.create({
                url: url
              });
              _context35.next = 10;
              break;
            case 6:
              _context35.next = 8;
              return getActiveTab();
            case 8:
              tab = _context35.sent;
              chrome.tabs.update(tab.id, {
                url: url
              });
            case 10:
              sendResponse(null);
            case 11:
            case "end":
              return _context35.stop();
          }
        }, _callee34);
      }));
      function navigate(_x24) {
        return _navigate.apply(this, arguments);
      }
      return navigate;
    }()
  }, {
    key: "getTopOffers",
    value: function () {
      var _getTopOffers = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee35() {
        var now, dateFilter, browser, device, response, _iterator2, _step2, header, data, banners, topOffers;
        return regenerator_default().wrap(function _callee35$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              if (!isEmpty_default()(this.homepage)) {
                _context36.next = 3;
                break;
              }
              _context36.next = 3;
              return this.loadTopOffers();
            case 3:
              now = new Date();
              dateFilter = function dateFilter(_ref33) {
                var startDate = _ref33.startDate,
                  endDate = _ref33.endDate;
                return new Date(startDate) < now && now < new Date(endDate);
              };
              browser = getBrowser();
              device = getDevice();
              _context36.next = 9;
              return fetch("".concat(TOP_OFFERS_URL).concat(this.user.data && this.user.data.isPlus ? 'plus' : 'classic'), {
                headers: {
                  'If-Modified-Since': this.lastModifiedTopOffers,
                  'Toolbar-Version': VERSION,
                  'Toolbar-Fingerprint': this.settings.data.analyticsClientId,
                  'Browser-Type': "".concat(browser, "_").concat(device)
                }
              });
            case 9:
              response = _context36.sent;
              // eslint-disable-next-line no-restricted-syntax
              _iterator2 = app_createForOfIteratorHelper(response.headers.entries());
              _context36.prev = 11;
              _iterator2.s();
            case 13:
              if ((_step2 = _iterator2.n()).done) {
                _context36.next = 21;
                break;
              }
              header = _step2.value;
              if (!(header[0] === 'date')) {
                _context36.next = 19;
                break;
              }
              this.lastModifiedTopOffers = header[1];
              setStorageData({
                lastModifiedTopOffers: this.lastModifiedTopOffers
              });
              return _context36.abrupt("break", 21);
            case 19:
              _context36.next = 13;
              break;
            case 21:
              _context36.next = 26;
              break;
            case 23:
              _context36.prev = 23;
              _context36.t0 = _context36["catch"](11);
              _iterator2.e(_context36.t0);
            case 26:
              _context36.prev = 26;
              _iterator2.f();
              return _context36.finish(26);
            case 29:
              if (!(response.status === 304)) {
                _context36.next = 31;
                break;
              }
              return _context36.abrupt("return", this.homepage);
            case 31:
              if (!(!response.ok || response.status !== 200)) {
                _context36.next = 33;
                break;
              }
              return _context36.abrupt("return", this.homepage);
            case 33:
              _context36.next = 35;
              return response.json();
            case 35:
              data = _context36.sent;
              banners = data.CarouselItems.map(parseTopOffer).filter(dateFilter); // // add merchant name to topoffer
              // data.BestDeals.forEach((element) => {
              //   const id = parseInt((new URLSearchParams(element.ClickThroughUrl)).get('mpid'), 10);
              //   const merchant = this.merchants.data.find(s => s.id === id);
              //   // eslint-disable-next-line no-param-reassign
              //   element.name = merchant.name;
              // });
              topOffers = data.BestDeals.map(parseTopOffer).filter(dateFilter);
              setStorageData({
                homepage: {
                  banners: banners,
                  topOffers: topOffers
                }
              });
              return _context36.abrupt("return", {
                banners: banners,
                topOffers: topOffers
              });
            case 40:
            case "end":
              return _context36.stop();
          }
        }, _callee35, this, [[11, 23, 26, 29]]);
      }));
      function getTopOffers() {
        return _getTopOffers.apply(this, arguments);
      }
      return getTopOffers;
    }()
  }]);
}(Cashback);

__webpack_require__.g.app = new App({
  activationPatterns: ACTIVATION_PATTERNS,
  suppressionPatterns: SUPPRESSION_PATTERNS,
  disableSuppressionPatterns: DISABLE_PATTERNS,
  googleSuppressionPatterns: GOOGLE_SUPPRESSION_PATTERNS,
  overrideSuppressionPatterns: OVERRIDE_SUPPRESSION_PATTERNS
});

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
/******/ 		__webpack_require__.j = 130;
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
/******/ 			130: 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(4075)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map