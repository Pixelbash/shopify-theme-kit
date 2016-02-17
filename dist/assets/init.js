(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _pub = require('./pub');

var _pub2 = _interopRequireDefault(_pub);

var _sub = require('./sub');

var _sub2 = _interopRequireDefault(_sub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Init = function () {
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
}();

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = function () {
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
}();

exports.default = Footer;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
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
}();

exports.default = Header;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
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
}();

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Landing = function () {
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
}();

exports.default = Landing;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
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
}();

exports.default = Header;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layout = function () {
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
}();

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = function () {
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
}();

exports.default = Cookies;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fixes = function () {
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
}();

exports.default = Fixes;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hash = function () {
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
}();

exports.default = Hash;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = function () {
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
}();

exports.default = Helpers;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vectors = function () {
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
}();

exports.default = Vectors;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
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
}();

exports.default = Main;

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Newsletter = function () {
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
}();

exports.default = Newsletter;

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Preload = function () {
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
}();

exports.default = Preload;

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = function () {
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
}();

exports.default = Pub;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2VzNi9pbml0LmpzIiwic3JjL2Fzc2V0cy9lczYvcHViLmpzIiwic3JjL2Fzc2V0cy9lczYvcHViL2Zvb3Rlci5qcyIsInNyYy9hc3NldHMvZXM2L3B1Yi9oZWFkZXIuanMiLCJzcmMvYXNzZXRzL2VzNi9wdWIvbGF5b3V0LmpzIiwic3JjL2Fzc2V0cy9lczYvcHViL3BhZ2UuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIvZm9vdGVyLmpzIiwic3JjL2Fzc2V0cy9lczYvc3ViL2hlYWRlci5qcyIsInNyYy9hc3NldHMvZXM2L3N1Yi9sYXlvdXQuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIvcGFnZS5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvaGVscGVycy9jb29raWVzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvaGVscGVycy9maXhlcy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvaGFzaC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvaGVscGVycy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvdmVjdG9ycy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2xpZ2h0Ym94L21haW4uanMiLCJzcmMvYXNzZXRzL2VzNi91dGlscy9uZXdzbGV0dGVyL21haWxjaGltcC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3ByZWxvYWQvcHJlbG9hZC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3dpbmRvdy9wdWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS3FCO0FBQ25CLFdBRG1CLElBQ25CLEdBQWM7MEJBREssTUFDTDs7QUFD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USxLQUFSLEVBQVQ7QUFDQSxrQkFBUyxRQUFRLE1BQVIsRUFBVDtBQUNBLHFCQUFZLFFBQVEsU0FBUixFQUFaO1NBSEYsRUFENEI7T0FBWCxDQUFuQixDQUhLOzs7O1NBNUJZIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCBQdWIgZnJvbSAnLi9wdWInO1xyXG5pbXBvcnQgU3ViIGZyb20gJy4vc3ViJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4kYm9keSAgICAgPSAkKCdib2R5Jyk7XHJcbiAgICB0aGlzLiR3aW5kb3cgICA9ICQod2luZG93KTtcclxuICAgIHRoaXMuJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XHJcbiAgICB0aGlzLiRyb290ICAgICA9ICQoJ2h0bWwsIGJvZHknKTtcclxuXHJcbiAgICB0aGlzLl9vcHRzID0gd2luZG93Ll9vcHRzO1xyXG4gICAgdGhpcy5fZGF0YSA9IHdpbmRvdy5fZGF0YTtcclxuXHJcbiAgICB0aGlzLnV0aWxzID0gbmV3IFV0aWxzKCk7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfSBcclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIC8vSnF1ZXJ5IHJlYWR5XHJcbiAgICAkKCgpID0+IHsgXHJcbiAgICAgIHRoaXMuc3ViID0gbmV3IFN1Yih0aGlzLCB0aGlzLnV0aWxzKTtcclxuICAgICAgdGhpcy5wdWIgPSBuZXcgUHViKHRoaXMsIHRoaXMudXRpbHMpOyBcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZ2xvYmFsLmFwcCA9IG5ldyBJbml0KCk7IiwiaW1wb3J0IExheW91dCBmcm9tICcuL3B1Yi9sYXlvdXQnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL3B1Yi9wYWdlJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL3B1Yi9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vcHViL2Zvb3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICAvL0Jhc2ljc1xyXG4gICAgdGhpcy51LndpbmRvdy5zY3JvbGwoKTtcclxuICAgIHRoaXMudS53aW5kb3cucmVzaXplKCk7XHJcbiAgICB0aGlzLnUud2luZG93LmxvYWQoKTtcclxuICAgIHRoaXMudS5uZXdzbGV0dGVyLnB1YigpO1xyXG4gICAgdGhpcy51Lmhhc2gucHViKCk7XHJcbiAgICBcclxuICAgIHRoaXMubGF5b3V0ID0gbmV3IExheW91dChtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKG1haW4sIHV0aWxzKTtcclxuXHJcbiAgICAvL1RlbXBsYXRlIHNwZWNpZmljIHRlc3RzXHJcbiAgICBpZih0aGlzLm0uJGJvZHkuZmlsdGVyKCdbZGF0YS10ZW1wbGF0ZT1wYWdlXScpLnNpemUoKSA+IDApIHRoaXMucGFnZSA9IG5ldyBQYWdlKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICB0aGlzLmZvb3RlcigpO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKCkge1xyXG4gICAgdmFyICRmb290ZXIgICAgICAgICAgICAgID0gJCgnZm9vdGVyLm1haW4nKTtcclxuICAgIHZhciAkbmV3c2xldHRlcl9mb3JtICAgICA9ICQoJ2Zvcm0ubmV3c2xldHRlcicpO1xyXG5cclxuICAgIHJhZGlvKCdhY3Rpb24vZm9vdGVyJykuYnJvYWRjYXN0KHtcclxuICAgICAgJG5ld3NsZXR0ZXJfZm9ybTokbmV3c2xldHRlcl9mb3JtXHJcbiAgICB9KTtcclxuICB9XHJcbn0gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5oZWFkZXIoKTtcclxuICB9XHJcblxyXG4gIGhlYWRlcigpIHtcclxuICAgIHZhciAkaGVhZGVyICAgID0gJCgnaGVhZGVyLmRlZmF1bHQnKTtcclxuICAgIHZhciAkc2hvd19wdWIgID0gJGhlYWRlci5maW5kKCdbZGF0YS1wdWJ+PW1lbnUtc2hvd10nKTtcclxuICAgIHZhciAkaGlkZV9wdWIgID0gJGhlYWRlci5maW5kKCdbZGF0YS1wdWJ+PW1lbnUtaGlkZV0nKTtcclxuICAgIHZhciAkbGlua3Nfc3ViID0gJGhlYWRlci5maW5kKCdbZGF0YS1zdWJ+PW1lbnVdJyk7XHJcblxyXG4gICAgcmFkaW8oJ2FjdGlvbi9oZWFkZXInKS5icm9hZGNhc3Qoe1xyXG4gICAgICAkaGVhZGVyIDogJGhlYWRlcixcclxuICAgICAgJHNob3dfcHViIDogJHNob3dfcHViLFxyXG4gICAgICAkaGlkZV9wdWIgOiAkaGlkZV9wdWIsXHJcbiAgICAgICRsaW5rc19zdWIgOiAkbGlua3Nfc3ViXHJcbiAgICB9KTtcclxuIFxyXG4gICAgJHNob3dfcHViLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHJhZGlvKCdhY3Rpb24vaGVhZGVyL21lbnUvc2hvdycpLmJyb2FkY2FzdCgpO1xyXG4gICAgfSk7XHJcbiBcclxuICAgICRoaWRlX3B1Yi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICByYWRpbygnYWN0aW9uL2hlYWRlci9tZW51L2hpZGUnKS5icm9hZGNhc3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICB0aGlzLnNldHVwKCk7XHJcbiAgfVxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIHZhciAkbGF5b3V0ID0gJCgnI2xheW91dCcpO1xyXG5cclxuICAgIHJhZGlvKCdhY3Rpb24vbGF5b3V0JykuYnJvYWRjYXN0KHtcclxuICAgICAgJGxheW91dCA6ICRsYXlvdXRcclxuICAgIH0pO1xyXG4gIH1cclxufSIsIi8vaW1wb3J0IFByZXNzIGZyb20gJy4vcGFnZS9wcmVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgLy90aGlzLnByZXNzID0gbmV3IFByZXNzKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gIiwiaW1wb3J0IExheW91dCBmcm9tICcuL3N1Yi9sYXlvdXQnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL3N1Yi9wYWdlJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL3N1Yi9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vc3ViL2Zvb3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICB0aGlzLmxheW91dCAgID0gbmV3IExheW91dChtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmhlYWRlciAgID0gbmV3IEhlYWRlcihtYWluLCB1dGlscyk7XHJcbiAgICB0aGlzLmZvb3RlciAgID0gbmV3IEZvb3RlcihtYWluLCB1dGlscyk7XHJcbiAgICBcclxuICAgIHRoaXMucGFnZSAgICAgPSBuZXcgUGFnZShtYWluLCB1dGlscyk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmRpbmcge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdhY3Rpb24vZm9vdGVyJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5mb290ZXIoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBmb290ZXIoZGF0YSkge1xyXG4gICAgdGhpcy4kbmV3c2xldHRlcl9mb3JtID0gZGF0YS4kbmV3c2xldHRlcl9mb3JtO1xyXG4gICAgdGhpcy51Lm5ld3NsZXR0ZXIucHViKCk7IFxyXG4gICAgdGhpcy51Lm5ld3NsZXR0ZXIuc3ViKCk7IFxyXG4gIH1cclxufSAgICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdhY3Rpb24vaGVhZGVyJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5oZWFkZXIoZGF0YSk7fSk7XHJcbiAgICByYWRpbygnYWN0aW9uL2hlYWRlci9tZW51L3Nob3cnKS5zdWJzY3JpYmUoKGRhdGEpID0+IHt0aGlzLm1lbnVTaG93KGRhdGEpO30pO1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9oZWFkZXIvbWVudS9oaWRlJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5tZW51SGlkZShkYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIGhlYWRlcihkYXRhKSB7XHJcbiAgICB0aGlzLiRoZWFkZXIgICAgPSBkYXRhLiRoZWFkZXI7XHJcbiAgICB0aGlzLiRzaG93X3B1YiAgPSBkYXRhLiRzaG93X3B1YjtcclxuICAgIHRoaXMuJGhpZGVfcHViICA9IGRhdGEuJGhpZGVfcHViO1xyXG4gICAgdGhpcy4kbGlua3Nfc3ViID0gZGF0YS4kbGlua3Nfc3ViO1xyXG4gIH1cclxuXHJcbiAgbWVudVNob3coZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ3Nob3cgbWVudScpO1xyXG4gICAgdGhpcy4kbGlua3Nfc3ViLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIG1lbnVIaWRlKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdoaWRlIG1lbnUnKTtcclxuICAgIHRoaXMuJGxpbmtzX3N1Yi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSBcclxufSAgICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXlvdXQge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdhY3Rpb24vbGF5b3V0Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5sYXlvdXQoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBsYXlvdXQoZGF0YSkge1xyXG4gICAgdGhpcy4kbGF5b3V0ID0gZGF0YS4kbGF5b3V0O1xyXG5cclxuICAgIC8vc3Vic2NyaXB0aW9uc1xyXG4gICAgcmFkaW8oJ3dpbmRvdy9yZXNpemUnKS5zdWJzY3JpYmUoKHN1Yl9kYXRhKSA9PiB7dGhpcy5yZXNpemUoc3ViX2RhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgbGF5b3V0IGhlaWdodCcpO1xyXG4gICAgdGhpcy53aW5kb3dfaGVpZ2h0ID0gdGhpcy5tLiR3aW5kb3cuaGVpZ2h0KCk7XHJcblxyXG4gICAgdGhpcy4kbGF5b3V0LmNzcyh7IFxyXG4gICAgICAnbWluLWhlaWdodCc6IHRoaXMud2luZG93X2hlaWdodFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9SZW1vdmUgbG9hZGluZyBjbGFzc1xyXG4gICAgaWYodGhpcy4kbGF5b3V0Lmhhc0NsYXNzKCdsb2FkaW5nJykpIHtcclxuICAgICAgdGhpcy4kbGF5b3V0LnJlbW92ZUNsYXNzKCdsb2FkaW5nJylcclxuICAgIH1cclxuICB9XHJcbn0gICAiLCIvL2ltcG9ydCBQcmVzcyBmcm9tICcuL3BhZ2UvcHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIC8vdGhpcy5wcmVzcyA9IG5ldyBQcmVzcyhtYWluLCB1dGlscyk7XHJcbiAgfVxyXG59ICAgIiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi91dGlscy9oZWxwZXJzL2hlbHBlcnMnO1xyXG5pbXBvcnQgVmVjdG9ycyBmcm9tICcuL3V0aWxzL2hlbHBlcnMvdmVjdG9ycyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJy4vdXRpbHMvaGVscGVycy9jb29raWVzJztcclxuaW1wb3J0IEhhc2ggZnJvbSAnLi91dGlscy9oZWxwZXJzL2hhc2gnO1xyXG5pbXBvcnQgTGlnaHRib3ggZnJvbSAnLi91dGlscy9saWdodGJveC9tYWluJztcclxuXHJcbmltcG9ydCBQcmVsb2FkIGZyb20gJy4vdXRpbHMvcHJlbG9hZC9wcmVsb2FkJztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuL3V0aWxzL3dpbmRvdy9wdWInO1xyXG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuL3V0aWxzL25ld3NsZXR0ZXIvbWFpbGNoaW1wJztcclxuaW1wb3J0IEZpeGVzIGZyb20gJy4vdXRpbHMvaGVscGVycy9maXhlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgdGhpcy5wcmVsb2FkICAgID0gbmV3IFByZWxvYWQoKTtcclxuICAgIHRoaXMubmV3c2xldHRlciA9IG5ldyBOZXdzbGV0dGVyKCk7XHJcbiAgICB0aGlzLmhlbHBlcnMgICAgPSBuZXcgSGVscGVycygpO1xyXG4gICAgdGhpcy52ZWN0b3JzICAgID0gbmV3IFZlY3RvcnMoKTtcclxuICAgIHRoaXMuY29va2llcyAgICA9IG5ldyBDb29raWVzKCk7XHJcbiAgICB0aGlzLmhhc2ggICAgICAgPSBuZXcgSGFzaCgpOyBcclxuICAgIHRoaXMubGlnaHRib3ggICA9IG5ldyBMaWdodGJveCgpO1xyXG4gICAgdGhpcy53aW5kb3cgICAgID0gbmV3IFdpbmRvdygpO1xyXG5cclxuICAgIC8vRml4ZXNcclxuICAgIHRoaXMuZml4ZXMgICAgICA9IG5ldyBGaXhlcygpOyBcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWVzIHtcclxuICBnZXQoY19uYW1lKSB7XHJcbiAgICAgIHZhciBpLCB4LCB5LCBBUlJjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IEFSUmNvb2tpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB4ID0gQVJSY29va2llc1tpXS5zdWJzdHIoMCwgQVJSY29va2llc1tpXS5pbmRleE9mKFwiPVwiKSk7XHJcbiAgICAgICAgeSA9IEFSUmNvb2tpZXNbaV0uc3Vic3RyKEFSUmNvb2tpZXNbaV0uaW5kZXhPZihcIj1cIikgKyAxKTtcclxuICAgICAgICB4ID0geC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcclxuICAgICAgICBpZiAoeCA9PSBjX25hbWUpIHtcclxuICAgICAgICAgIHJldHVybiB1bmVzY2FwZSh5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0KGNfbmFtZSwgdmFsdWUsIGV4aG91cnMpIHtcclxuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBvZmZzZXQgPSB0aW1lLmdldFRpbWUoKTtcclxuICAgIG9mZnNldCArPSAoMzYwMCAqIDEwMDApICogZXhob3VycztcclxuICAgIHRpbWUuc2V0VGltZShvZmZzZXQpO1xyXG5cclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGNfbmFtZSArIFwiPVwiICsgZXNjYXBlKHZhbHVlKSArIFwiOyBleHBpcmVzPVwiICsgdGltZS50b0dNVFN0cmluZygpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29uc29sZSgpOyAgLy9Bdm9pZCBubyBjb25zb2xlIGVycm9yc1xyXG4gICAgdGhpcy5ob3ZlcnRhcCgpOyAvL0ZpeCBkb3VibGUgdGFwcGluZyBvbiBtb2JpbGUgd2Via2l0XHJcbiAgfVxyXG5cclxuICBjb25zb2xlKCkgeyBcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbWV0aG9kO1xyXG4gICAgICAgIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcclxuICAgICAgICB2YXIgbWV0aG9kcyA9IFtcclxuICAgICAgICAgICAgJ2Fzc2VydCcsICdjbGVhcicsICdjb3VudCcsICdkZWJ1ZycsICdkaXInLCAnZGlyeG1sJywgJ2Vycm9yJyxcclxuICAgICAgICAgICAgJ2V4Y2VwdGlvbicsICdncm91cCcsICdncm91cENvbGxhcHNlZCcsICdncm91cEVuZCcsICdpbmZvJywgJ2xvZycsXHJcbiAgICAgICAgICAgICdtYXJrVGltZWxpbmUnLCAncHJvZmlsZScsICdwcm9maWxlRW5kJywgJ3RhYmxlJywgJ3RpbWUnLCAndGltZUVuZCcsXHJcbiAgICAgICAgICAgICd0aW1lU3RhbXAnLCAndHJhY2UnLCAnd2FybidcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBtZXRob2RzLmxlbmd0aDtcclxuICAgICAgICB2YXIgY29uc29sZSA9ICh3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9KTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZCA9IG1ldGhvZHNbbGVuZ3RoXTtcclxuXHJcbiAgICAgICAgICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cclxuICAgICAgICAgICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IG5vb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJ0YXAoKSB7XHJcbiAgICAkKCdib2R5Jykub24oJ3RvdWNoZW5kJywnYSwgc3BhbiwgYnV0dG9uLCBpbnB1dCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFzaCB7XHJcbiAgcHViKCkge1xyXG4gICAgJCh3aW5kb3cpLmJpbmQoICdsb2FkIGhhc2hjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncHViIGhhc2ggY2hhbmdlJyk7XHJcbiAgICAgIHJhZGlvKCd3aW5kb3cvaGFzaC9jaGFuZ2UnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGU6ZSxcclxuICAgICAgICBoYXNoOmxvY2F0aW9uLmhhc2guc2xpY2UoMSlcclxuICAgICAgfSk7XHJcbiAgICB9KTsgXHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xyXG4gIHNsdWdpZnkodGV4dCkge1xyXG4gICAgcmV0dXJuIHRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcdyBdKy9nLCcnKS5yZXBsYWNlKC8gKy9nLCctJyk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcnMge1xyXG5cclxuICAvL0FkZCB2ZWN0b3JzXHJcbiAgYWRkKHAxLHAyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OnAxLnggKyBwMi54LFxyXG4gICAgICB5OnAxLnkgKyBwMi55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9NdWx0aXBseSB2ZWN0b3JcclxuICBtdWx0aXBseShwMSx2YWwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IHAxLnggKiB2YWwsXHJcbiAgICAgIHk6IHAxLnkgKiB2YWxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL05vcm1hbGl6ZXMgdGhlIHZlY3RvciB0byB2YWx1ZXMgYmV0d2VlbiAtMSBhbmQgMVxyXG4gIG5vcm1hbGlzZShwMSwgbmV3TGVuZ3RoKSB7XHJcbiAgICB2YXIgbCA9IHRoaXMubGVuZ3RoKHAxKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogKHAxLnggLyBsKSAqIG5ld0xlbmd0aCxcclxuICAgICAgeTogKHAxLnkgLyBsKSAqIG5ld0xlbmd0aFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vUmV0dXJucyB0aGUgdmVjdG9yIGJldHdlZW4gdHdvIHBvaW50cy5cclxuICBiZXR3ZWVuKHAxLHAyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBwMS54IC0gcDIueCxcclxuICAgICAgeTogcDEueSAtIHAyLnlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL0dldCBsZW5ndGggb2YgdmVjdG9yXHJcbiAgbGVuZ3RoKHApIHsgXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHAueCAqIHAueCArIHAueSAqIHAueSk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xyXG4gIGNyZWF0ZShuZXdfb3B0aW9ucykge1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgIGJveF9jbGFzczogJycsXHJcbiAgICAgIGJveF9jb250ZW50OiAnJyxcclxuICAgICAgd3JhcF9jc3M6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICAnei1pbmRleCc6IDk5OTk5OVxyXG4gICAgICB9LFxyXG4gICAgICB0YWJsZV9jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgfSxcclxuICAgICAgcm93X2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1yb3cnXHJcbiAgICAgIH0sXHJcbiAgICAgIGNlbGxfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLWNlbGwnLFxyXG4gICAgICAgICd0ZXh0LWFsaWduJzogJ2NlbnRlcicsXHJcbiAgICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZSdcclxuICAgICAgfSxcclxuICAgICAgYm94X2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICcqZGlzcGxheSc6ICdpbmxpbmUnLFxyXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJ1xyXG4gICAgICB9LFxyXG4gICAgICBjYWxsYmFjazogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgJC5leHRlbmQodHJ1ZSwgb3B0aW9ucywgbmV3X29wdGlvbnMpO1xyXG5cclxuICAgIHZhciAkbGlnaHRib3hfd3JhcCA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC13cmFwXCIgLz4nKS5hcHBlbmRUbygnYm9keScpO1xyXG4gICAgdmFyICRsaWdodGJveF90YWJsZSA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC10YWJsZVwiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X3dyYXApO1xyXG4gICAgdmFyICRsaWdodGJveF9yb3cgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtcm93XCIgLz4nKS5hcHBlbmRUbygkbGlnaHRib3hfdGFibGUpO1xyXG4gICAgdmFyICRsaWdodGJveF9jZWxsID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWNlbGxcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF9yb3cpO1xyXG4gICAgdmFyICRsaWdodGJveF9ib3ggPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtYm94XCIgLz4nKS5hcHBlbmRUbygkbGlnaHRib3hfY2VsbCk7XHJcblxyXG4gICAgJGxpZ2h0Ym94X3dyYXAuY3NzKG9wdGlvbnMud3JhcF9jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X3RhYmxlLmNzcyhvcHRpb25zLnRhYmxlX2Nzcyk7XHJcbiAgICAkbGlnaHRib3hfcm93LmNzcyhvcHRpb25zLnJvd19jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X2NlbGwuY3NzKG9wdGlvbnMuY2VsbF9jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X2JveC5jc3Mob3B0aW9ucy5ib3hfY3NzKTtcclxuXHJcbiAgICAkbGlnaHRib3hfYm94LmFkZENsYXNzKG9wdGlvbnMuYm94X2NsYXNzKTtcclxuICAgICRsaWdodGJveF9ib3guaHRtbChvcHRpb25zLmJveF9jb250ZW50KTtcclxuXHJcblxyXG4gICAgLy9jbG9zZSBjb25kaXRpb25zXHJcbiAgICAkKCcubGlnaHRib3gtY2VsbCcpLmZpbmQoJy5jbG9zZSwgW2RhdGEtcHViPWNsb3NlXScpLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykua2V5dXAoKGUpID0+ICB7XHJcbiAgICAgIGlmIChlLndoaWNoID09IDI3KSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZihvcHRpb25zLmNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgb3B0aW9ucy5jYWxsYmFjaygkbGlnaHRib3hfd3JhcCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZSgpIHtcclxuICAgICQoJy5saWdodGJveC13cmFwJykuZmFkZU91dCgxMDAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLmxpZ2h0Ym94LXdyYXAnKS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NsZXR0ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy90aGlzLnB1YigpO1xyXG4gIH1cclxuICBcclxuICBwdWIoKSB7XHJcbiAgICB2YXIgJGZvcm0gPSAkKCcjbmV3c2xldHRlcicpO1xyXG5cclxuICAgIC8vT24gY2xpY2sgc2VuZCBvcGVuICdjYXN0XHJcbiAgICAkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdicm9hZGNhc3QgbmV3c2xldHRlciBzaWdudXAnKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByYWRpbygnYWN0aW9uL25ld3NsZXR0ZXInKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIGFjdGlvbiA6ICdzaWdudXAnLFxyXG4gICAgICAgIGV2ZW50IDogZSxcclxuICAgICAgICAkZm9ybSA6ICRmb3JtXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHN1YigpIHtcclxuICAgIHJhZGlvKCdhY3Rpb24vbmV3c2xldHRlcicpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICB2YXIgJGZvcm0gICAgPSBkYXRhLiRmb3JtO1xyXG4gICAgICB2YXIgJHN1Y2Nlc3MgPSAkZm9ybS5maW5kKCcuc3VjY2VzcycpO1xyXG4gICAgICB2YXIgJGVycm9yICAgPSAkZm9ybS5maW5kKCcuZXJyb3InKTtcclxuXHJcbiAgICAgIHZhciBhY3Rpb24gPSBTdHJpbmcoJGZvcm0uYXR0cignYWN0aW9uJykpO1xyXG5cclxuICAgICAgJGVycm9yLmhpZGUoKTtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICB1cmw6IGFjdGlvbixcclxuICAgICAgICBkYXRhOiAkZm9ybS5zZXJpYWxpemUoKSxcclxuICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoXCJDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgcmVnaXN0cmF0aW9uIHNlcnZlci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCAhPSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAvLyBTb21ldGhpbmcgd2VudCB3cm9uZywgZG8gc29tZXRoaW5nIHRvIG5vdGlmeSB0aGUgdXNlci4gbWF5YmUgYWxlcnQoZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAkZXJyb3IudGV4dCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycpLnNob3coKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEl0IHdvcmtlZCwgY2Fycnkgb24uLi5cclxuICAgICAgICAgICAgJGZvcm0uZmluZCgnaW5wdXQnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAkc3VjY2Vzcy5zaG93KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5faW1hZ2VzID0gW107XHJcblxyXG4gICAgaWYgKCEkKCcjcHJlbG9hZCcpLmlzKCcqJykpIHtcclxuICAgICAgdGhpcy4kcHJlbG9hZCA9ICQoJzxkaXYgaWQ9XCJwcmVsb2FkXCIgLz4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuJHByZWxvYWQgPSAkKCcjcHJlbG9hZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW1hZ2Uob3B0cykge1xyXG4gICAgdmFyIHNyYyA9IG9wdHMuc3JjLnJlcGxhY2UoL1xcXCIvZywgJyAnKTtcclxuICAgIGNvbnNvbGUubG9nKCdwcmVsb2FkaW5nIGltYWdlOiAnICsgc3JjKTtcclxuXHJcbiAgICB0aGlzLiRwcmVsb2FkLmFwcGVuZCgnPGltZyBzcmM9XCInICsgc3JjICsgJ1wiICBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIiAvPicpO1xyXG4gICAgdGhpcy4kcHJlbG9hZC5maW5kKCcgaW1nW3NyYz1cIicgKyBzcmMgKyAnXCJdJykubG9hZCgoZCkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mKG9wdHMuY2FsbGJhY2spICE9ICd1bmRlZmluZWQnKSBvcHRzLmNhbGxiYWNrKGQpOyBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VzKG9wdHMpIHtcclxuICAgIHRoaXMuX2ltYWdlcyA9IG9wdHMuc3JjO1xyXG4gICAgdmFyIGltYWdlICA9IHRoaXMuX2ltYWdlcy5zaGlmdCgpO1xyXG5cclxuICAgIGlmICh0eXBlb2YoaW1hZ2UpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2Uoe1xyXG4gICAgICAgIHNyYzppbWFnZSxcclxuICAgICAgICBjYWxsYmFjazogKGQpID0+IHtcclxuICAgICAgICAgIC8vR28gdG8gdGhlIG5leHQgaW1hZ2VcclxuICAgICAgICAgIHRoaXMuaW1hZ2VzKHtcclxuICAgICAgICAgICAgc3JjOiB0aGlzLl9pbWFnZXMsIFxyXG4gICAgICAgICAgICBjYWxsYmFjazogb3B0cy5jYWxsYmFja1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgaWYodHlwZW9mKG9wdHMuY2FsbGJhY2spICE9ICd1bmRlZmluZWQnKSBvcHRzLmNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuX2ltYWdlcyA9IFtdO1xyXG4gICAgJCgnI3ByZWxvYWQgaW1nJykucmVtb3ZlKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHViIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMuc2Nyb2xsKCk7XHJcbiAgICAvLyB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgLy8gdGhpcy5sb2FkKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHNjcm9sbCgpIHtcclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICR3aW5kb3cub24oJ2xvYWQgc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJhZGlvKCd3aW5kb3cvc2Nyb2xsJykuYnJvYWRjYXN0KHtcclxuICAgICAgICBzY3JvbGxUb3AgOiAkd2luZG93LnNjcm9sbFRvcCgpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcbiAgICAkd2luZG93Lm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICByYWRpbygnd2luZG93L3Jlc2l6ZScpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgd2lkdGggIDogJHdpbmRvdy53aWR0aCgpLFxyXG4gICAgICAgIGhlaWdodCA6ICR3aW5kb3cuaGVpZ2h0KClcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcbiAgICAkd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJhZGlvKCd3aW5kb3cvbG9hZCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgd2lkdGggIDogJHdpbmRvdy53aWR0aCgpLFxyXG4gICAgICAgIGhlaWdodCA6ICR3aW5kb3cuaGVpZ2h0KCksXHJcbiAgICAgICAgc2Nyb2xsVG9wIDogJHdpbmRvdy5zY3JvbGxUb3AoKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSJdfQ==
