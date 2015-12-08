(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _pub = require('./pub');

var _pub2 = _interopRequireDefault(_pub);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Init = (function () {
  function Init() {
    _classCallCheck(this, Init);

    this.$body = $('body');
    this.$window = $(window);
    this.$document = $(document);
    this.$root = $('html, body');

    this._opts = window._opts;
    this._data = window._data;

    this.utils = new _utils2.default();

    this.init();
  }

  _createClass(Init, [{
    key: 'init',
    value: function init() {
      var _this = this;

      //Jquery ready
      $(function () {
        _this.sub = new _sub2.default(_this, _this.utils);
        _this.pub = new _pub2.default(_this, _this.utils);
      });
    }
  }]);

  return Init;
})();

exports.default = Init;

global.app = new Init();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./pub":2,"./sub":7,"./utils":12}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('./pub/layout');

var _layout2 = _interopRequireDefault(_layout);

var _page = require('./pub/page');

var _page2 = _interopRequireDefault(_page);

var _header = require('./pub/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./pub/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = function Pub(main, utils) {
  _classCallCheck(this, Pub);

  this.m = main;
  this.u = utils;

  //Basics
  this.u.window.scroll();
  this.u.window.resize();
  this.u.window.load();
  this.u.newsletter.pub();
  this.u.hash.pub();

  this.layout = new _layout2.default(main, utils);
  this.header = new _header2.default(main, utils);
  this.footer = new _footer2.default(main, utils);

  //Template specific tests
  if (this.m.$body.filter('[data-template=page]').size() > 0) this.page = new _page2.default(main, utils);
};

exports.default = Pub;

},{"./pub/footer":3,"./pub/header":4,"./pub/layout":5,"./pub/page":6}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = (function () {
  function Footer(main, utils) {
    _classCallCheck(this, Footer);

    this.m = main;
    this.u = utils;
    this.footer();
  }

  _createClass(Footer, [{
    key: 'footer',
    value: function footer() {
      var $footer = $('footer.main');
      var $newsletter_form = $('form.newsletter');

      radio('action/footer').broadcast({
        $newsletter_form: $newsletter_form
      });
    }
  }]);

  return Footer;
})();

exports.default = Footer;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = (function () {
  function Header(main, utils) {
    _classCallCheck(this, Header);

    this.m = main;
    this.u = utils;
    this.header();
  }

  _createClass(Header, [{
    key: 'header',
    value: function header() {
      var $header = $('header.default');
      var $show_pub = $header.find('[data-pub~=menu-show]');
      var $hide_pub = $header.find('[data-pub~=menu-hide]');
      var $links_sub = $header.find('[data-sub~=menu]');

      radio('action/header').broadcast({
        $header: $header,
        $show_pub: $show_pub,
        $hide_pub: $hide_pub,
        $links_sub: $links_sub
      });

      $show_pub.on('click', function (e) {
        radio('action/header/menu/show').broadcast();
      });

      $hide_pub.on('click', function (e) {
        radio('action/header/menu/hide').broadcast();
      });
    }
  }]);

  return Header;
})();

exports.default = Header;

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = (function () {
  function Layout(main, utils) {
    _classCallCheck(this, Layout);

    this.m = main;
    this.u = utils;
    this.setup();
  }

  _createClass(Layout, [{
    key: 'setup',
    value: function setup() {
      var $layout = $('#layout');

      radio('action/layout').broadcast({
        $layout: $layout
      });
    }
  }]);

  return Layout;
})();

exports.default = Layout;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Press from './page/press';

var Page = function Page(main, utils) {
  _classCallCheck(this, Page);

  this.m = main;
  this.u = utils;

  //this.press = new Press(main, utils);
};

exports.default = Page;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = require('./sub/layout');

var _layout2 = _interopRequireDefault(_layout);

var _page = require('./sub/page');

var _page2 = _interopRequireDefault(_page);

var _header = require('./sub/header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./sub/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sub = function Sub(main, utils) {
  _classCallCheck(this, Sub);

  this.m = main;
  this.u = utils;

  this.layout = new _layout2.default(main, utils);
  this.header = new _header2.default(main, utils);
  this.footer = new _footer2.default(main, utils);

  this.page = new _page2.default(main, utils);
};

exports.default = Sub;

},{"./sub/footer":8,"./sub/header":9,"./sub/layout":10,"./sub/page":11}],8:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Landing = (function () {
  function Landing(main, utils) {
    var _this = this;

    _classCallCheck(this, Landing);

    this.m = main;
    this.u = utils;
    radio('action/footer').subscribe(function (data) {
      _this.footer(data);
    });
  }

  _createClass(Landing, [{
    key: 'footer',
    value: function footer(data) {
      this.$newsletter_form = data.$newsletter_form;
      this.u.newsletter.pub();
      this.u.newsletter.sub();
    }
  }]);

  return Landing;
})();

exports.default = Landing;

},{}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = (function () {
  function Header(main, utils) {
    var _this = this;

    _classCallCheck(this, Header);

    this.m = main;
    this.u = utils;
    radio('action/header').subscribe(function (data) {
      _this.header(data);
    });
    radio('action/header/menu/show').subscribe(function (data) {
      _this.menuShow(data);
    });
    radio('action/header/menu/hide').subscribe(function (data) {
      _this.menuHide(data);
    });
  }

  _createClass(Header, [{
    key: 'header',
    value: function header(data) {
      this.$header = data.$header;
      this.$show_pub = data.$show_pub;
      this.$hide_pub = data.$hide_pub;
      this.$links_sub = data.$links_sub;
    }
  }, {
    key: 'menuShow',
    value: function menuShow(data) {
      console.log('show menu');
      this.$links_sub.addClass('active');
    }
  }, {
    key: 'menuHide',
    value: function menuHide(data) {
      console.log('hide menu');
      this.$links_sub.removeClass('active');
    }
  }]);

  return Header;
})();

exports.default = Header;

},{}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = (function () {
  function Layout(main, utils) {
    var _this = this;

    _classCallCheck(this, Layout);

    this.m = main;
    this.u = utils;
    radio('action/layout').subscribe(function (data) {
      _this.layout(data);
    });
  }

  _createClass(Layout, [{
    key: 'layout',
    value: function layout(data) {
      var _this2 = this;

      this.$layout = data.$layout;

      //subscriptions
      radio('window/resize').subscribe(function (sub_data) {
        _this2.resize(sub_data);
      });
    }
  }, {
    key: 'resize',
    value: function resize(data) {
      console.log('update layout height');
      this.window_height = this.m.$window.height();

      this.$layout.css({
        'min-height': this.window_height
      });

      //Remove loading class
      if (this.$layout.hasClass('loading')) {
        this.$layout.removeClass('loading');
      }
    }
  }]);

  return Layout;
})();

exports.default = Layout;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Press from './page/press';

var Page = function Page(main, utils) {
  _classCallCheck(this, Page);

  this.m = main;
  this.u = utils;

  //this.press = new Press(main, utils);
};

exports.default = Page;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./utils/helpers/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _vectors = require('./utils/helpers/vectors');

var _vectors2 = _interopRequireDefault(_vectors);

var _cookies = require('./utils/helpers/cookies');

var _cookies2 = _interopRequireDefault(_cookies);

var _hash = require('./utils/helpers/hash');

var _hash2 = _interopRequireDefault(_hash);

var _main = require('./utils/lightbox/main');

var _main2 = _interopRequireDefault(_main);

var _preload = require('./utils/preload/preload');

var _preload2 = _interopRequireDefault(_preload);

var _pub = require('./utils/window/pub');

var _pub2 = _interopRequireDefault(_pub);

var _mailchimp = require('./utils/newsletter/mailchimp');

var _mailchimp2 = _interopRequireDefault(_mailchimp);

var _fixes = require('./utils/helpers/fixes');

var _fixes2 = _interopRequireDefault(_fixes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function Utils() {
  _classCallCheck(this, Utils);

  this.preload = new _preload2.default();
  this.newsletter = new _mailchimp2.default();
  this.helpers = new _helpers2.default();
  this.vectors = new _vectors2.default();
  this.cookies = new _cookies2.default();
  this.hash = new _hash2.default();
  this.lightbox = new _main2.default();
  this.window = new _pub2.default();

  //Fixes
  this.fixes = new _fixes2.default();
};

exports.default = Utils;

},{"./utils/helpers/cookies":13,"./utils/helpers/fixes":14,"./utils/helpers/hash":15,"./utils/helpers/helpers":16,"./utils/helpers/vectors":17,"./utils/lightbox/main":18,"./utils/newsletter/mailchimp":19,"./utils/preload/preload":20,"./utils/window/pub":21}],13:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = (function () {
  function Cookies() {
    _classCallCheck(this, Cookies);
  }

  _createClass(Cookies, [{
    key: "get",
    value: function get(c_name) {
      var i,
          x,
          y,
          ARRcookies = document.cookie.split(";");
      for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
          return unescape(y);
        }
      }
      return false;
    }
  }, {
    key: "set",
    value: function set(c_name, value, exhours) {
      var time = new Date();
      var offset = time.getTime();
      offset += 3600 * 1000 * exhours;
      time.setTime(offset);

      document.cookie = c_name + "=" + escape(value) + "; expires=" + time.toGMTString();
    }
  }]);

  return Cookies;
})();

exports.default = Cookies;

},{}],14:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fixes = (function () {
  function Fixes() {
    _classCallCheck(this, Fixes);

    this.console(); //Avoid no console errors
    this.hovertap(); //Fix double tapping on mobile webkit
  }

  _createClass(Fixes, [{
    key: 'console',
    value: function console() {
      (function () {
        var method;
        var noop = function noop() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = window.console || {};

        while (length--) {
          method = methods[length];

          // Only stub undefined methods.
          if (!console[method]) {
            console[method] = noop;
          }
        }
      })();
    }
  }, {
    key: 'hovertap',
    value: function hovertap() {
      $('body').on('touchend', 'a, span, button, input', function (e) {
        $(e.currentTarget).trigger('click');
      });
    }
  }]);

  return Fixes;
})();

exports.default = Fixes;

},{}],15:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hash = (function () {
  function Hash() {
    _classCallCheck(this, Hash);
  }

  _createClass(Hash, [{
    key: 'pub',
    value: function pub() {
      $(window).bind('load hashchange', function (e) {
        console.log('pub hash change');
        radio('window/hash/change').broadcast({
          e: e,
          hash: location.hash.slice(1)
        });
      });
    }
  }]);

  return Hash;
})();

exports.default = Hash;

},{}],16:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = (function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, [{
    key: 'slugify',
    value: function slugify(text) {
      return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    }
  }]);

  return Helpers;
})();

exports.default = Helpers;

},{}],17:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vectors = (function () {
  function Vectors() {
    _classCallCheck(this, Vectors);
  }

  _createClass(Vectors, [{
    key: "add",

    //Add vectors
    value: function add(p1, p2) {
      return {
        x: p1.x + p2.x,
        y: p1.y + p2.y
      };
    }

    //Multiply vector

  }, {
    key: "multiply",
    value: function multiply(p1, val) {
      return {
        x: p1.x * val,
        y: p1.y * val
      };
    }

    //Normalizes the vector to values between -1 and 1

  }, {
    key: "normalise",
    value: function normalise(p1, newLength) {
      var l = this.length(p1);

      return {
        x: p1.x / l * newLength,
        y: p1.y / l * newLength
      };
    }

    //Returns the vector between two points.

  }, {
    key: "between",
    value: function between(p1, p2) {
      return {
        x: p1.x - p2.x,
        y: p1.y - p2.y
      };
    }

    //Get length of vector

  }, {
    key: "length",
    value: function length(p) {
      return Math.sqrt(p.x * p.x + p.y * p.y);
    }
  }]);

  return Vectors;
})();

exports.default = Vectors;

},{}],18:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = (function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, [{
    key: 'create',
    value: function create(new_options) {
      var _this = this;

      var options = {
        box_class: '',
        box_content: '',
        wrap_css: {
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: '#fff',
          'z-index': 999999
        },
        table_css: {
          display: 'table',
          width: '100%',
          height: '100%'
        },
        row_css: {
          display: 'table-row'
        },
        cell_css: {
          display: 'table-cell',
          'text-align': 'center',
          'vertical-align': 'middle'
        },
        box_css: {
          display: 'inline-block',
          '*display': 'inline',
          width: 'auto',
          height: 'auto',
          position: 'relative',
          padding: '20px',
          border: 'none',
          background: '#fff'
        },
        callback: false
      };

      $.extend(true, options, new_options);

      var $lightbox_wrap = $('<div class="lightbox-wrap" />').appendTo('body');
      var $lightbox_table = $('<div class="lightbox-table" />').appendTo($lightbox_wrap);
      var $lightbox_row = $('<div class="lightbox-row" />').appendTo($lightbox_table);
      var $lightbox_cell = $('<div class="lightbox-cell" />').appendTo($lightbox_row);
      var $lightbox_box = $('<div class="lightbox-box" />').appendTo($lightbox_cell);

      $lightbox_wrap.css(options.wrap_css);
      $lightbox_table.css(options.table_css);
      $lightbox_row.css(options.row_css);
      $lightbox_cell.css(options.cell_css);
      $lightbox_box.css(options.box_css);

      $lightbox_box.addClass(options.box_class);
      $lightbox_box.html(options.box_content);

      //close conditions
      $('.lightbox-cell').find('.close, [data-pub=close]').on('click', function (e) {
        _this.remove();
      });

      $('body').keyup(function (e) {
        if (e.which == 27) {
          _this.remove();
        }
      });

      if (typeof options.callback === 'function') options.callback($lightbox_wrap);
    }
  }, {
    key: 'remove',
    value: function remove() {
      $('.lightbox-wrap').fadeOut(1000, function () {
        $('.lightbox-wrap').remove();
      });
    }
  }]);

  return Main;
})();

exports.default = Main;

},{}],19:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Newsletter = (function () {
  function Newsletter() {
    //this.pub();

    _classCallCheck(this, Newsletter);
  }

  _createClass(Newsletter, [{
    key: 'pub',
    value: function pub() {
      var $form = $('#newsletter');

      //On click send open 'cast
      $form.on('submit', function (e) {
        console.log('broadcast newsletter signup');
        e.preventDefault();
        radio('action/newsletter').broadcast({
          action: 'signup',
          event: e,
          $form: $form
        });
      });
    }
  }, {
    key: 'sub',
    value: function sub() {
      radio('action/newsletter').subscribe(function (data) {
        var $form = data.$form;
        var $success = $form.find('.success');
        var $error = $form.find('.error');

        var action = String($form.attr('action'));

        $error.hide();
        $.ajax({
          type: $form.attr('method'),
          url: action,
          data: $form.serialize(),
          cache: false,
          dataType: 'json',
          contentType: "application/json; charset=utf-8",
          error: function error(err) {
            alert("Could not connect to the registration server. Please try again later.");
          },
          success: function success(data) {
            console.log(data);
            if (data.result != "success") {
              // Something went wrong, do something to notify the user. maybe alert(data.msg);
              $error.text('Please enter a valid email address').show();
            } else {
              // It worked, carry on...
              $form.find('input').val('');
              $success.show();
            }
          }
        });
      });
    }
  }]);

  return Newsletter;
})();

exports.default = Newsletter;

},{}],20:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Preload = (function () {
  function Preload() {
    _classCallCheck(this, Preload);

    this._images = [];

    if (!$('#preload').is('*')) {
      this.$preload = $('<div id="preload" />').prependTo('body');
    } else {
      this.$preload = $('#preload');
    }
  }

  _createClass(Preload, [{
    key: 'image',
    value: function image(opts) {
      var src = opts.src.replace(/\"/g, ' ');
      console.log('preloading image: ' + src);

      this.$preload.append('<img src="' + src + '"  style="display:none;" />');
      this.$preload.find(' img[src="' + src + '"]').load(function (d) {
        if (typeof opts.callback != 'undefined') opts.callback(d);
      });
    }
  }, {
    key: 'images',
    value: function images(opts) {
      var _this = this;

      this._images = opts.src;
      var image = this._images.shift();

      if (typeof image != 'undefined') {
        this.image({
          src: image,
          callback: function callback(d) {
            //Go to the next image
            _this.images({
              src: _this._images,
              callback: opts.callback
            });
          }
        });
      } else {
        this.clear();
        if (typeof opts.callback != 'undefined') opts.callback();
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._images = [];
      $('#preload img').remove();
    }
  }]);

  return Preload;
})();

exports.default = Preload;

},{}],21:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = (function () {
  function Pub() {
    // this.scroll();
    // this.resize();
    // this.load();

    _classCallCheck(this, Pub);
  }

  _createClass(Pub, [{
    key: 'scroll',
    value: function scroll() {
      var $window = $(window);

      $window.on('load scroll', function () {
        radio('window/scroll').broadcast({
          scrollTop: $window.scrollTop()
        });
      });
    }
  }, {
    key: 'resize',
    value: function resize() {
      var $window = $(window);

      $window.on('load resize', function () {
        radio('window/resize').broadcast({
          width: $window.width(),
          height: $window.height()
        });
      });
    }
  }, {
    key: 'load',
    value: function load() {
      var $window = $(window);

      $window.on('load', function () {
        radio('window/load').broadcast({
          width: $window.width(),
          height: $window.height(),
          scrollTop: $window.scrollTop()
        });
      });
    }
  }]);

  return Pub;
})();

exports.default = Pub;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2VzNi9pbml0LmpzIiwic3JjL2Fzc2V0cy9lczYvcHViLmpzIiwic3JjL2Fzc2V0cy9lczYvcHViL2Zvb3Rlci5qcyIsInNyYy9hc3NldHMvZXM2L3B1Yi9oZWFkZXIuanMiLCJzcmMvYXNzZXRzL2VzNi9wdWIvbGF5b3V0LmpzIiwic3JjL2Fzc2V0cy9lczYvcHViL3BhZ2UuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIvZm9vdGVyLmpzIiwic3JjL2Fzc2V0cy9lczYvc3ViL2hlYWRlci5qcyIsInNyYy9hc3NldHMvZXM2L3N1Yi9sYXlvdXQuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIvcGFnZS5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvaGVscGVycy9jb29raWVzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvaGVscGVycy9maXhlcy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvaGFzaC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvaGVscGVycy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvdmVjdG9ycy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2xpZ2h0Ym94L21haW4uanMiLCJzcmMvYXNzZXRzL2VzNi91dGlscy9uZXdzbGV0dGVyL21haWxjaGltcC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3ByZWxvYWQvcHJlbG9hZC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3dpbmRvdy9wdWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS3FCLElBQUk7QUFDdkIsV0FEbUIsSUFBSSxHQUNUOzBCQURLLElBQUk7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QUFFO0FBQ3hCLGdCQUFNLEVBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUN6QixtQkFBUyxFQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztTQXRDa0IsR0FBRzs7O2tCQUFILEdBQUciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaW1wb3J0IFB1YiBmcm9tICcuL3B1Yic7XHJcbmltcG9ydCBTdWIgZnJvbSAnLi9zdWInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLiRib2R5ICAgICA9ICQoJ2JvZHknKTtcclxuICAgIHRoaXMuJHdpbmRvdyAgID0gJCh3aW5kb3cpO1xyXG4gICAgdGhpcy4kZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcclxuICAgIHRoaXMuJHJvb3QgICAgID0gJCgnaHRtbCwgYm9keScpO1xyXG5cclxuICAgIHRoaXMuX29wdHMgPSB3aW5kb3cuX29wdHM7XHJcbiAgICB0aGlzLl9kYXRhID0gd2luZG93Ll9kYXRhO1xyXG5cclxuICAgIHRoaXMudXRpbHMgPSBuZXcgVXRpbHMoKTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9IFxyXG5cclxuICBpbml0KCkge1xyXG4gICAgLy9KcXVlcnkgcmVhZHlcclxuICAgICQoKCkgPT4geyBcclxuICAgICAgdGhpcy5zdWIgPSBuZXcgU3ViKHRoaXMsIHRoaXMudXRpbHMpO1xyXG4gICAgICB0aGlzLnB1YiA9IG5ldyBQdWIodGhpcywgdGhpcy51dGlscyk7IFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5nbG9iYWwuYXBwID0gbmV3IEluaXQoKTsiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vcHViL2xheW91dCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vcHViL3BhZ2UnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vcHViL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9wdWIvZm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YiB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIC8vQmFzaWNzXHJcbiAgICB0aGlzLnUud2luZG93LnNjcm9sbCgpO1xyXG4gICAgdGhpcy51LndpbmRvdy5yZXNpemUoKTtcclxuICAgIHRoaXMudS53aW5kb3cubG9hZCgpO1xyXG4gICAgdGhpcy51Lm5ld3NsZXR0ZXIucHViKCk7XHJcbiAgICB0aGlzLnUuaGFzaC5wdWIoKTtcclxuICAgIFxyXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgTGF5b3V0KG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcihtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIobWFpbiwgdXRpbHMpO1xyXG5cclxuICAgIC8vVGVtcGxhdGUgc3BlY2lmaWMgdGVzdHNcclxuICAgIGlmKHRoaXMubS4kYm9keS5maWx0ZXIoJ1tkYXRhLXRlbXBsYXRlPXBhZ2VdJykuc2l6ZSgpID4gMCkgdGhpcy5wYWdlID0gbmV3IFBhZ2UobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuZm9vdGVyKCk7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoKSB7XHJcbiAgICB2YXIgJGZvb3RlciAgICAgICAgICAgICAgPSAkKCdmb290ZXIubWFpbicpO1xyXG4gICAgdmFyICRuZXdzbGV0dGVyX2Zvcm0gICAgID0gJCgnZm9ybS5uZXdzbGV0dGVyJyk7XHJcblxyXG4gICAgcmFkaW8oJ2FjdGlvbi9mb290ZXInKS5icm9hZGNhc3Qoe1xyXG4gICAgICAkbmV3c2xldHRlcl9mb3JtOiRuZXdzbGV0dGVyX2Zvcm1cclxuICAgIH0pO1xyXG4gIH1cclxufSAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICB0aGlzLmhlYWRlcigpO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyKCkge1xyXG4gICAgdmFyICRoZWFkZXIgICAgPSAkKCdoZWFkZXIuZGVmYXVsdCcpO1xyXG4gICAgdmFyICRzaG93X3B1YiAgPSAkaGVhZGVyLmZpbmQoJ1tkYXRhLXB1Yn49bWVudS1zaG93XScpO1xyXG4gICAgdmFyICRoaWRlX3B1YiAgPSAkaGVhZGVyLmZpbmQoJ1tkYXRhLXB1Yn49bWVudS1oaWRlXScpO1xyXG4gICAgdmFyICRsaW5rc19zdWIgPSAkaGVhZGVyLmZpbmQoJ1tkYXRhLXN1Yn49bWVudV0nKTtcclxuXHJcbiAgICByYWRpbygnYWN0aW9uL2hlYWRlcicpLmJyb2FkY2FzdCh7XHJcbiAgICAgICRoZWFkZXIgOiAkaGVhZGVyLFxyXG4gICAgICAkc2hvd19wdWIgOiAkc2hvd19wdWIsXHJcbiAgICAgICRoaWRlX3B1YiA6ICRoaWRlX3B1YixcclxuICAgICAgJGxpbmtzX3N1YiA6ICRsaW5rc19zdWJcclxuICAgIH0pO1xyXG4gXHJcbiAgICAkc2hvd19wdWIub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgcmFkaW8oJ2FjdGlvbi9oZWFkZXIvbWVudS9zaG93JykuYnJvYWRjYXN0KCk7XHJcbiAgICB9KTtcclxuIFxyXG4gICAgJGhpZGVfcHViLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHJhZGlvKCdhY3Rpb24vaGVhZGVyL21lbnUvaGlkZScpLmJyb2FkY2FzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59ICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIHNldHVwKCkge1xyXG4gICAgdmFyICRsYXlvdXQgPSAkKCcjbGF5b3V0Jyk7XHJcblxyXG4gICAgcmFkaW8oJ2FjdGlvbi9sYXlvdXQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAkbGF5b3V0IDogJGxheW91dFxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiLy9pbXBvcnQgUHJlc3MgZnJvbSAnLi9wYWdlL3ByZXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICAvL3RoaXMucHJlc3MgPSBuZXcgUHJlc3MobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4vc3ViL2xheW91dCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4vc3ViL3BhZ2UnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vc3ViL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9zdWIvZm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YiB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHRoaXMubGF5b3V0ICAgPSBuZXcgTGF5b3V0KG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuaGVhZGVyICAgPSBuZXcgSGVhZGVyKG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuZm9vdGVyICAgPSBuZXcgRm9vdGVyKG1haW4sIHV0aWxzKTtcclxuICAgIFxyXG4gICAgdGhpcy5wYWdlICAgICA9IG5ldyBQYWdlKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZGluZyB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9mb290ZXInKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmZvb3RlcihkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGZvb3RlcihkYXRhKSB7XHJcbiAgICB0aGlzLiRuZXdzbGV0dGVyX2Zvcm0gPSBkYXRhLiRuZXdzbGV0dGVyX2Zvcm07XHJcbiAgICB0aGlzLnUubmV3c2xldHRlci5wdWIoKTsgXHJcbiAgICB0aGlzLnUubmV3c2xldHRlci5zdWIoKTsgXHJcbiAgfVxyXG59ICAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9oZWFkZXInKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmhlYWRlcihkYXRhKTt9KTtcclxuICAgIHJhZGlvKCdhY3Rpb24vaGVhZGVyL21lbnUvc2hvdycpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMubWVudVNob3coZGF0YSk7fSk7XHJcbiAgICByYWRpbygnYWN0aW9uL2hlYWRlci9tZW51L2hpZGUnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLm1lbnVIaWRlKGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyKGRhdGEpIHtcclxuICAgIHRoaXMuJGhlYWRlciAgICA9IGRhdGEuJGhlYWRlcjtcclxuICAgIHRoaXMuJHNob3dfcHViICA9IGRhdGEuJHNob3dfcHViO1xyXG4gICAgdGhpcy4kaGlkZV9wdWIgID0gZGF0YS4kaGlkZV9wdWI7XHJcbiAgICB0aGlzLiRsaW5rc19zdWIgPSBkYXRhLiRsaW5rc19zdWI7XHJcbiAgfVxyXG5cclxuICBtZW51U2hvdyhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2hvdyBtZW51Jyk7XHJcbiAgICB0aGlzLiRsaW5rc19zdWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgbWVudUhpZGUoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ2hpZGUgbWVudScpO1xyXG4gICAgdGhpcy4kbGlua3Nfc3ViLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9IFxyXG59ICAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9sYXlvdXQnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLmxheW91dChkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGxheW91dChkYXRhKSB7XHJcbiAgICB0aGlzLiRsYXlvdXQgPSBkYXRhLiRsYXlvdXQ7XHJcblxyXG4gICAgLy9zdWJzY3JpcHRpb25zXHJcbiAgICByYWRpbygnd2luZG93L3Jlc2l6ZScpLnN1YnNjcmliZSgoc3ViX2RhdGEpID0+IHt0aGlzLnJlc2l6ZShzdWJfZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZSBsYXlvdXQgaGVpZ2h0Jyk7XHJcbiAgICB0aGlzLndpbmRvd19oZWlnaHQgPSB0aGlzLm0uJHdpbmRvdy5oZWlnaHQoKTtcclxuXHJcbiAgICB0aGlzLiRsYXlvdXQuY3NzKHsgXHJcbiAgICAgICdtaW4taGVpZ2h0JzogdGhpcy53aW5kb3dfaGVpZ2h0XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1JlbW92ZSBsb2FkaW5nIGNsYXNzXHJcbiAgICBpZih0aGlzLiRsYXlvdXQuaGFzQ2xhc3MoJ2xvYWRpbmcnKSkge1xyXG4gICAgICB0aGlzLiRsYXlvdXQucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKVxyXG4gICAgfVxyXG4gIH1cclxufSAgICIsIi8vaW1wb3J0IFByZXNzIGZyb20gJy4vcGFnZS9wcmVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgLy90aGlzLnByZXNzID0gbmV3IFByZXNzKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gICAiLCJpbXBvcnQgSGVscGVycyBmcm9tICcuL3V0aWxzL2hlbHBlcnMvaGVscGVycyc7XHJcbmltcG9ydCBWZWN0b3JzIGZyb20gJy4vdXRpbHMvaGVscGVycy92ZWN0b3JzJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi91dGlscy9oZWxwZXJzL2Nvb2tpZXMnO1xyXG5pbXBvcnQgSGFzaCBmcm9tICcuL3V0aWxzL2hlbHBlcnMvaGFzaCc7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tICcuL3V0aWxzL2xpZ2h0Ym94L21haW4nO1xyXG5cclxuaW1wb3J0IFByZWxvYWQgZnJvbSAnLi91dGlscy9wcmVsb2FkL3ByZWxvYWQnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4vdXRpbHMvd2luZG93L3B1Yic7XHJcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4vdXRpbHMvbmV3c2xldHRlci9tYWlsY2hpbXAnO1xyXG5pbXBvcnQgRml4ZXMgZnJvbSAnLi91dGlscy9oZWxwZXJzL2ZpeGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLnByZWxvYWQgICAgPSBuZXcgUHJlbG9hZCgpO1xyXG4gICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3IE5ld3NsZXR0ZXIoKTtcclxuICAgIHRoaXMuaGVscGVycyAgICA9IG5ldyBIZWxwZXJzKCk7XHJcbiAgICB0aGlzLnZlY3RvcnMgICAgPSBuZXcgVmVjdG9ycygpO1xyXG4gICAgdGhpcy5jb29raWVzICAgID0gbmV3IENvb2tpZXMoKTtcclxuICAgIHRoaXMuaGFzaCAgICAgICA9IG5ldyBIYXNoKCk7IFxyXG4gICAgdGhpcy5saWdodGJveCAgID0gbmV3IExpZ2h0Ym94KCk7XHJcbiAgICB0aGlzLndpbmRvdyAgICAgPSBuZXcgV2luZG93KCk7XHJcblxyXG4gICAgLy9GaXhlc1xyXG4gICAgdGhpcy5maXhlcyAgICAgID0gbmV3IEZpeGVzKCk7IFxyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZXMge1xyXG4gIGdldChjX25hbWUpIHtcclxuICAgICAgdmFyIGksIHgsIHksIEFSUmNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgQVJSY29va2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHggPSBBUlJjb29raWVzW2ldLnN1YnN0cigwLCBBUlJjb29raWVzW2ldLmluZGV4T2YoXCI9XCIpKTtcclxuICAgICAgICB5ID0gQVJSY29va2llc1tpXS5zdWJzdHIoQVJSY29va2llc1tpXS5pbmRleE9mKFwiPVwiKSArIDEpO1xyXG4gICAgICAgIHggPSB4LnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xyXG4gICAgICAgIGlmICh4ID09IGNfbmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHVuZXNjYXBlKHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXQoY19uYW1lLCB2YWx1ZSwgZXhob3Vycykge1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIG9mZnNldCA9IHRpbWUuZ2V0VGltZSgpO1xyXG4gICAgb2Zmc2V0ICs9ICgzNjAwICogMTAwMCkgKiBleGhvdXJzO1xyXG4gICAgdGltZS5zZXRUaW1lKG9mZnNldCk7XHJcblxyXG4gICAgZG9jdW1lbnQuY29va2llID0gY19uYW1lICsgXCI9XCIgKyBlc2NhcGUodmFsdWUpICsgXCI7IGV4cGlyZXM9XCIgKyB0aW1lLnRvR01UU3RyaW5nKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZXMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb25zb2xlKCk7ICAvL0F2b2lkIG5vIGNvbnNvbGUgZXJyb3JzXHJcbiAgICB0aGlzLmhvdmVydGFwKCk7IC8vRml4IGRvdWJsZSB0YXBwaW5nIG9uIG1vYmlsZSB3ZWJraXRcclxuICB9XHJcblxyXG4gIGNvbnNvbGUoKSB7IFxyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBtZXRob2Q7XHJcbiAgICAgICAgdmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xyXG4gICAgICAgIHZhciBtZXRob2RzID0gW1xyXG4gICAgICAgICAgICAnYXNzZXJ0JywgJ2NsZWFyJywgJ2NvdW50JywgJ2RlYnVnJywgJ2RpcicsICdkaXJ4bWwnLCAnZXJyb3InLFxyXG4gICAgICAgICAgICAnZXhjZXB0aW9uJywgJ2dyb3VwJywgJ2dyb3VwQ29sbGFwc2VkJywgJ2dyb3VwRW5kJywgJ2luZm8nLCAnbG9nJyxcclxuICAgICAgICAgICAgJ21hcmtUaW1lbGluZScsICdwcm9maWxlJywgJ3Byb2ZpbGVFbmQnLCAndGFibGUnLCAndGltZScsICd0aW1lRW5kJyxcclxuICAgICAgICAgICAgJ3RpbWVTdGFtcCcsICd0cmFjZScsICd3YXJuJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBjb25zb2xlID0gKHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30pO1xyXG5cclxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kc1tsZW5ndGhdO1xyXG5cclxuICAgICAgICAgICAgLy8gT25seSBzdHViIHVuZGVmaW5lZCBtZXRob2RzLlxyXG4gICAgICAgICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcbiAgfVxyXG5cclxuICBob3ZlcnRhcCgpIHtcclxuICAgICQoJ2JvZHknKS5vbigndG91Y2hlbmQnLCdhLCBzcGFuLCBidXR0b24sIGlucHV0JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKGUuY3VycmVudFRhcmdldCkudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIYXNoIHtcclxuICBwdWIoKSB7XHJcbiAgICAkKHdpbmRvdykuYmluZCggJ2xvYWQgaGFzaGNoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwdWIgaGFzaCBjaGFuZ2UnKTtcclxuICAgICAgcmFkaW8oJ3dpbmRvdy9oYXNoL2NoYW5nZScpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgZTplLFxyXG4gICAgICAgIGhhc2g6bG9jYXRpb24uaGFzaC5zbGljZSgxKVxyXG4gICAgICB9KTtcclxuICAgIH0pOyBcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XHJcbiAgc2x1Z2lmeSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFx3IF0rL2csJycpLnJlcGxhY2UoLyArL2csJy0nKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9ycyB7XHJcblxyXG4gIC8vQWRkIHZlY3RvcnNcclxuICBhZGQocDEscDIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6cDEueCArIHAyLngsXHJcbiAgICAgIHk6cDEueSArIHAyLnlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL011bHRpcGx5IHZlY3RvclxyXG4gIG11bHRpcGx5KHAxLHZhbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogcDEueCAqIHZhbCxcclxuICAgICAgeTogcDEueSAqIHZhbFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vTm9ybWFsaXplcyB0aGUgdmVjdG9yIHRvIHZhbHVlcyBiZXR3ZWVuIC0xIGFuZCAxXHJcbiAgbm9ybWFsaXNlKHAxLCBuZXdMZW5ndGgpIHtcclxuICAgIHZhciBsID0gdGhpcy5sZW5ndGgocDEpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiAocDEueCAvIGwpICogbmV3TGVuZ3RoLFxyXG4gICAgICB5OiAocDEueSAvIGwpICogbmV3TGVuZ3RoXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9SZXR1cm5zIHRoZSB2ZWN0b3IgYmV0d2VlbiB0d28gcG9pbnRzLlxyXG4gIGJldHdlZW4ocDEscDIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHAxLnggLSBwMi54LFxyXG4gICAgICB5OiBwMS55IC0gcDIueVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vR2V0IGxlbmd0aCBvZiB2ZWN0b3JcclxuICBsZW5ndGgocCkgeyBcclxuICAgIHJldHVybiBNYXRoLnNxcnQocC54ICogcC54ICsgcC55ICogcC55KTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XHJcbiAgY3JlYXRlKG5ld19vcHRpb25zKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgYm94X2NsYXNzOiAnJyxcclxuICAgICAgYm94X2NvbnRlbnQ6ICcnLFxyXG4gICAgICB3cmFwX2Nzczoge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gICAgICAgICd6LWluZGV4JzogOTk5OTk5XHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYmxlX2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZScsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICB9LFxyXG4gICAgICByb3dfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLXJvdydcclxuICAgICAgfSxcclxuICAgICAgY2VsbF9jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXHJcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyxcclxuICAgICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJ1xyXG4gICAgICB9LFxyXG4gICAgICBib3hfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgJypkaXNwbGF5JzogJ2lubGluZScsXHJcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbGxiYWNrOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICAkLmV4dGVuZCh0cnVlLCBvcHRpb25zLCBuZXdfb3B0aW9ucyk7XHJcblxyXG4gICAgdmFyICRsaWdodGJveF93cmFwID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LXdyYXBcIiAvPicpLmFwcGVuZFRvKCdib2R5Jyk7XHJcbiAgICB2YXIgJGxpZ2h0Ym94X3RhYmxlID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LXRhYmxlXCIgLz4nKS5hcHBlbmRUbygkbGlnaHRib3hfd3JhcCk7XHJcbiAgICB2YXIgJGxpZ2h0Ym94X3JvdyA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC1yb3dcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF90YWJsZSk7XHJcbiAgICB2YXIgJGxpZ2h0Ym94X2NlbGwgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtY2VsbFwiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X3Jvdyk7XHJcbiAgICB2YXIgJGxpZ2h0Ym94X2JveCA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC1ib3hcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF9jZWxsKTtcclxuXHJcbiAgICAkbGlnaHRib3hfd3JhcC5jc3Mob3B0aW9ucy53cmFwX2Nzcyk7XHJcbiAgICAkbGlnaHRib3hfdGFibGUuY3NzKG9wdGlvbnMudGFibGVfY3NzKTtcclxuICAgICRsaWdodGJveF9yb3cuY3NzKG9wdGlvbnMucm93X2Nzcyk7XHJcbiAgICAkbGlnaHRib3hfY2VsbC5jc3Mob3B0aW9ucy5jZWxsX2Nzcyk7XHJcbiAgICAkbGlnaHRib3hfYm94LmNzcyhvcHRpb25zLmJveF9jc3MpO1xyXG5cclxuICAgICRsaWdodGJveF9ib3guYWRkQ2xhc3Mob3B0aW9ucy5ib3hfY2xhc3MpO1xyXG4gICAgJGxpZ2h0Ym94X2JveC5odG1sKG9wdGlvbnMuYm94X2NvbnRlbnQpO1xyXG5cclxuXHJcbiAgICAvL2Nsb3NlIGNvbmRpdGlvbnNcclxuICAgICQoJy5saWdodGJveC1jZWxsJykuZmluZCgnLmNsb3NlLCBbZGF0YS1wdWI9Y2xvc2VdJykub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5rZXl1cCgoZSkgPT4gIHtcclxuICAgICAgaWYgKGUud2hpY2ggPT0gMjcpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodHlwZW9mKG9wdGlvbnMuY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBvcHRpb25zLmNhbGxiYWNrKCRsaWdodGJveF93cmFwKTtcclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgJCgnLmxpZ2h0Ym94LXdyYXAnKS5mYWRlT3V0KDEwMDAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcubGlnaHRib3gtd3JhcCcpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvL3RoaXMucHViKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YigpIHtcclxuICAgIHZhciAkZm9ybSA9ICQoJyNuZXdzbGV0dGVyJyk7XHJcblxyXG4gICAgLy9PbiBjbGljayBzZW5kIG9wZW4gJ2Nhc3RcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc29sZS5sb2coJ2Jyb2FkY2FzdCBuZXdzbGV0dGVyIHNpZ251cCcpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJhZGlvKCdhY3Rpb24vbmV3c2xldHRlcicpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgYWN0aW9uIDogJ3NpZ251cCcsXHJcbiAgICAgICAgZXZlbnQgOiBlLFxyXG4gICAgICAgICRmb3JtIDogJGZvcm1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc3ViKCkge1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9uZXdzbGV0dGVyJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciAkZm9ybSAgICA9IGRhdGEuJGZvcm07XHJcbiAgICAgIHZhciAkc3VjY2VzcyA9ICRmb3JtLmZpbmQoJy5zdWNjZXNzJyk7XHJcbiAgICAgIHZhciAkZXJyb3IgICA9ICRmb3JtLmZpbmQoJy5lcnJvcicpO1xyXG5cclxuICAgICAgdmFyIGFjdGlvbiA9IFN0cmluZygkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcblxyXG4gICAgICAkZXJyb3IuaGlkZSgpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIHVybDogYWN0aW9uLFxyXG4gICAgICAgIGRhdGE6ICRmb3JtLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICBhbGVydChcIkNvdWxkIG5vdCBjb25uZWN0IHRvIHRoZSByZWdpc3RyYXRpb24gc2VydmVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0ICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nLCBkbyBzb21ldGhpbmcgdG8gbm90aWZ5IHRoZSB1c2VyLiBtYXliZSBhbGVydChkYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICRlcnJvci50ZXh0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJykuc2hvdygpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSXQgd29ya2VkLCBjYXJyeSBvbi4uLlxyXG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICRzdWNjZXNzLnNob3coKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9pbWFnZXMgPSBbXTtcclxuXHJcbiAgICBpZiAoISQoJyNwcmVsb2FkJykuaXMoJyonKSkge1xyXG4gICAgICB0aGlzLiRwcmVsb2FkID0gJCgnPGRpdiBpZD1cInByZWxvYWRcIiAvPicpLnByZXBlbmRUbygnYm9keScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4kcHJlbG9hZCA9ICQoJyNwcmVsb2FkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWFnZShvcHRzKSB7XHJcbiAgICB2YXIgc3JjID0gb3B0cy5zcmMucmVwbGFjZSgvXFxcIi9nLCAnICcpO1xyXG4gICAgY29uc29sZS5sb2coJ3ByZWxvYWRpbmcgaW1hZ2U6ICcgKyBzcmMpO1xyXG5cclxuICAgIHRoaXMuJHByZWxvYWQuYXBwZW5kKCc8aW1nIHNyYz1cIicgKyBzcmMgKyAnXCIgIHN0eWxlPVwiZGlzcGxheTpub25lO1wiIC8+Jyk7XHJcbiAgICB0aGlzLiRwcmVsb2FkLmZpbmQoJyBpbWdbc3JjPVwiJyArIHNyYyArICdcIl0nKS5sb2FkKChkKSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2Yob3B0cy5jYWxsYmFjaykgIT0gJ3VuZGVmaW5lZCcpIG9wdHMuY2FsbGJhY2soZCk7IFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbWFnZXMob3B0cykge1xyXG4gICAgdGhpcy5faW1hZ2VzID0gb3B0cy5zcmM7XHJcbiAgICB2YXIgaW1hZ2UgID0gdGhpcy5faW1hZ2VzLnNoaWZ0KCk7XHJcblxyXG4gICAgaWYgKHR5cGVvZihpbWFnZSkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5pbWFnZSh7XHJcbiAgICAgICAgc3JjOmltYWdlLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoZCkgPT4ge1xyXG4gICAgICAgICAgLy9HbyB0byB0aGUgbmV4dCBpbWFnZVxyXG4gICAgICAgICAgdGhpcy5pbWFnZXMoe1xyXG4gICAgICAgICAgICBzcmM6IHRoaXMuX2ltYWdlcywgXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBvcHRzLmNhbGxiYWNrXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICBpZih0eXBlb2Yob3B0cy5jYWxsYmFjaykgIT0gJ3VuZGVmaW5lZCcpIG9wdHMuY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5faW1hZ2VzID0gW107XHJcbiAgICAkKCcjcHJlbG9hZCBpbWcnKS5yZW1vdmUoKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQdWIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy5zY3JvbGwoKTtcclxuICAgIC8vIHRoaXMucmVzaXplKCk7XHJcbiAgICAvLyB0aGlzLmxvYWQoKTtcclxuICB9XHJcbiAgXHJcbiAgc2Nyb2xsKCkge1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG4gICAgJHdpbmRvdy5vbignbG9hZCBzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmFkaW8oJ3dpbmRvdy9zY3JvbGwnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIHNjcm9sbFRvcCA6ICR3aW5kb3cuc2Nyb2xsVG9wKClcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICR3aW5kb3cub24oJ2xvYWQgcmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJhZGlvKCd3aW5kb3cvcmVzaXplJykuYnJvYWRjYXN0KHtcclxuICAgICAgICB3aWR0aCAgOiAkd2luZG93LndpZHRoKCksXHJcbiAgICAgICAgaGVpZ2h0IDogJHdpbmRvdy5oZWlnaHQoKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICR3aW5kb3cub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmFkaW8oJ3dpbmRvdy9sb2FkJykuYnJvYWRjYXN0KHtcclxuICAgICAgICB3aWR0aCAgOiAkd2luZG93LndpZHRoKCksXHJcbiAgICAgICAgaGVpZ2h0IDogJHdpbmRvdy5oZWlnaHQoKSxcclxuICAgICAgICBzY3JvbGxUb3AgOiAkd2luZG93LnNjcm9sbFRvcCgpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19
