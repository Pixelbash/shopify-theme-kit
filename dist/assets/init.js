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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2VzNi9pbml0LmpzIiwic3JjL2Fzc2V0cy9lczYvcHViLmpzIiwic3JjL2Fzc2V0cy9lczYvcHViL2Zvb3Rlci5qcyIsInNyYy9hc3NldHMvZXM2L3B1Yi9oZWFkZXIuanMiLCJzcmMvYXNzZXRzL2VzNi9wdWIvbGF5b3V0LmpzIiwic3JjL2Fzc2V0cy9lczYvcHViL3BhZ2UuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIvZm9vdGVyLmpzIiwic3JjL2Fzc2V0cy9lczYvc3ViL2hlYWRlci5qcyIsInNyYy9hc3NldHMvZXM2L3N1Yi9sYXlvdXQuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIvcGFnZS5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvaGVscGVycy9jb29raWVzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvaGVscGVycy9maXhlcy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvaGFzaC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvaGVscGVycy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvdmVjdG9ycy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2xpZ2h0Ym94L21haW4uanMiLCJzcmMvYXNzZXRzL2VzNi91dGlscy9uZXdzbGV0dGVyL21haWxjaGltcC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3ByZWxvYWQvcHJlbG9hZC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3dpbmRvdy9wdWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBaUIsRUFBRSxNQUFG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RzdCLHFCQUFZLFFBQVEsU0FBUjtBQUhpQixTQUEvQjtBQUtELE9BTkQ7QUFPRDs7Ozs7O2tCQXRDa0IsRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5pbXBvcnQgUHViIGZyb20gJy4vcHViJztcclxuaW1wb3J0IFN1YiBmcm9tICcuL3N1Yic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuJGJvZHkgICAgID0gJCgnYm9keScpO1xyXG4gICAgdGhpcy4kd2luZG93ICAgPSAkKHdpbmRvdyk7XHJcbiAgICB0aGlzLiRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xyXG4gICAgdGhpcy4kcm9vdCAgICAgPSAkKCdodG1sLCBib2R5Jyk7XHJcblxyXG4gICAgdGhpcy5fb3B0cyA9IHdpbmRvdy5fb3B0cztcclxuICAgIHRoaXMuX2RhdGEgPSB3aW5kb3cuX2RhdGE7XHJcblxyXG4gICAgdGhpcy51dGlscyA9IG5ldyBVdGlscygpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH0gXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICAvL0pxdWVyeSByZWFkeVxyXG4gICAgJCgoKSA9PiB7IFxyXG4gICAgICB0aGlzLnN1YiA9IG5ldyBTdWIodGhpcywgdGhpcy51dGlscyk7XHJcbiAgICAgIHRoaXMucHViID0gbmV3IFB1Yih0aGlzLCB0aGlzLnV0aWxzKTsgXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmdsb2JhbC5hcHAgPSBuZXcgSW5pdCgpOyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9wdWIvbGF5b3V0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wdWIvcGFnZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9wdWIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3B1Yi9mb290ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHViIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgLy9CYXNpY3NcclxuICAgIHRoaXMudS53aW5kb3cuc2Nyb2xsKCk7XHJcbiAgICB0aGlzLnUud2luZG93LnJlc2l6ZSgpO1xyXG4gICAgdGhpcy51LndpbmRvdy5sb2FkKCk7XHJcbiAgICB0aGlzLnUubmV3c2xldHRlci5wdWIoKTtcclxuICAgIHRoaXMudS5oYXNoLnB1YigpO1xyXG4gICAgXHJcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMYXlvdXQobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcihtYWluLCB1dGlscyk7XHJcblxyXG4gICAgLy9UZW1wbGF0ZSBzcGVjaWZpYyB0ZXN0c1xyXG4gICAgaWYodGhpcy5tLiRib2R5LmZpbHRlcignW2RhdGEtdGVtcGxhdGU9cGFnZV0nKS5zaXplKCkgPiAwKSB0aGlzLnBhZ2UgPSBuZXcgUGFnZShtYWluLCB1dGlscyk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5mb290ZXIoKTtcclxuICB9XHJcblxyXG4gIGZvb3RlcigpIHtcclxuICAgIHZhciAkZm9vdGVyICAgICAgICAgICAgICA9ICQoJ2Zvb3Rlci5tYWluJyk7XHJcbiAgICB2YXIgJG5ld3NsZXR0ZXJfZm9ybSAgICAgPSAkKCdmb3JtLm5ld3NsZXR0ZXInKTtcclxuXHJcbiAgICByYWRpbygnYWN0aW9uL2Zvb3RlcicpLmJyb2FkY2FzdCh7XHJcbiAgICAgICRuZXdzbGV0dGVyX2Zvcm06JG5ld3NsZXR0ZXJfZm9ybVxyXG4gICAgfSk7XHJcbiAgfVxyXG59ICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHRoaXMuaGVhZGVyKCk7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIoKSB7XHJcbiAgICB2YXIgJGhlYWRlciAgICA9ICQoJ2hlYWRlci5kZWZhdWx0Jyk7XHJcbiAgICB2YXIgJHNob3dfcHViICA9ICRoZWFkZXIuZmluZCgnW2RhdGEtcHVifj1tZW51LXNob3ddJyk7XHJcbiAgICB2YXIgJGhpZGVfcHViICA9ICRoZWFkZXIuZmluZCgnW2RhdGEtcHVifj1tZW51LWhpZGVdJyk7XHJcbiAgICB2YXIgJGxpbmtzX3N1YiA9ICRoZWFkZXIuZmluZCgnW2RhdGEtc3Vifj1tZW51XScpO1xyXG5cclxuICAgIHJhZGlvKCdhY3Rpb24vaGVhZGVyJykuYnJvYWRjYXN0KHtcclxuICAgICAgJGhlYWRlciA6ICRoZWFkZXIsXHJcbiAgICAgICRzaG93X3B1YiA6ICRzaG93X3B1YixcclxuICAgICAgJGhpZGVfcHViIDogJGhpZGVfcHViLFxyXG4gICAgICAkbGlua3Nfc3ViIDogJGxpbmtzX3N1YlxyXG4gICAgfSk7XHJcbiBcclxuICAgICRzaG93X3B1Yi5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICByYWRpbygnYWN0aW9uL2hlYWRlci9tZW51L3Nob3cnKS5icm9hZGNhc3QoKTtcclxuICAgIH0pO1xyXG4gXHJcbiAgICAkaGlkZV9wdWIub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgcmFkaW8oJ2FjdGlvbi9oZWFkZXIvbWVudS9oaWRlJykuYnJvYWRjYXN0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXAoKSB7XHJcbiAgICB2YXIgJGxheW91dCA9ICQoJyNsYXlvdXQnKTtcclxuXHJcbiAgICByYWRpbygnYWN0aW9uL2xheW91dCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICRsYXlvdXQgOiAkbGF5b3V0XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCIvL2ltcG9ydCBQcmVzcyBmcm9tICcuL3BhZ2UvcHJlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIC8vdGhpcy5wcmVzcyA9IG5ldyBQcmVzcyhtYWluLCB1dGlscyk7XHJcbiAgfVxyXG59ICIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi9zdWIvbGF5b3V0JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi9zdWIvcGFnZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9zdWIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL3N1Yi9mb290ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgdGhpcy5sYXlvdXQgICA9IG5ldyBMYXlvdXQobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5oZWFkZXIgICA9IG5ldyBIZWFkZXIobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5mb290ZXIgICA9IG5ldyBGb290ZXIobWFpbiwgdXRpbHMpO1xyXG4gICAgXHJcbiAgICB0aGlzLnBhZ2UgICAgID0gbmV3IFBhZ2UobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5kaW5nIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICByYWRpbygnYWN0aW9uL2Zvb3RlcicpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMuZm9vdGVyKGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKGRhdGEpIHtcclxuICAgIHRoaXMuJG5ld3NsZXR0ZXJfZm9ybSA9IGRhdGEuJG5ld3NsZXR0ZXJfZm9ybTtcclxuICAgIHRoaXMudS5uZXdzbGV0dGVyLnB1YigpOyBcclxuICAgIHRoaXMudS5uZXdzbGV0dGVyLnN1YigpOyBcclxuICB9XHJcbn0gICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICByYWRpbygnYWN0aW9uL2hlYWRlcicpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMuaGVhZGVyKGRhdGEpO30pO1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9oZWFkZXIvbWVudS9zaG93Jykuc3Vic2NyaWJlKChkYXRhKSA9PiB7dGhpcy5tZW51U2hvdyhkYXRhKTt9KTtcclxuICAgIHJhZGlvKCdhY3Rpb24vaGVhZGVyL21lbnUvaGlkZScpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMubWVudUhpZGUoZGF0YSk7fSk7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIoZGF0YSkge1xyXG4gICAgdGhpcy4kaGVhZGVyICAgID0gZGF0YS4kaGVhZGVyO1xyXG4gICAgdGhpcy4kc2hvd19wdWIgID0gZGF0YS4kc2hvd19wdWI7XHJcbiAgICB0aGlzLiRoaWRlX3B1YiAgPSBkYXRhLiRoaWRlX3B1YjtcclxuICAgIHRoaXMuJGxpbmtzX3N1YiA9IGRhdGEuJGxpbmtzX3N1YjtcclxuICB9XHJcblxyXG4gIG1lbnVTaG93KGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzaG93IG1lbnUnKTtcclxuICAgIHRoaXMuJGxpbmtzX3N1Yi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBtZW51SGlkZShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaGlkZSBtZW51Jyk7XHJcbiAgICB0aGlzLiRsaW5rc19zdWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0gXHJcbn0gICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICByYWRpbygnYWN0aW9uL2xheW91dCcpLnN1YnNjcmliZSgoZGF0YSkgPT4ge3RoaXMubGF5b3V0KGRhdGEpO30pO1xyXG4gIH1cclxuXHJcbiAgbGF5b3V0KGRhdGEpIHtcclxuICAgIHRoaXMuJGxheW91dCA9IGRhdGEuJGxheW91dDtcclxuXHJcbiAgICAvL3N1YnNjcmlwdGlvbnNcclxuICAgIHJhZGlvKCd3aW5kb3cvcmVzaXplJykuc3Vic2NyaWJlKChzdWJfZGF0YSkgPT4ge3RoaXMucmVzaXplKHN1Yl9kYXRhKTt9KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygndXBkYXRlIGxheW91dCBoZWlnaHQnKTtcclxuICAgIHRoaXMud2luZG93X2hlaWdodCA9IHRoaXMubS4kd2luZG93LmhlaWdodCgpO1xyXG5cclxuICAgIHRoaXMuJGxheW91dC5jc3MoeyBcclxuICAgICAgJ21pbi1oZWlnaHQnOiB0aGlzLndpbmRvd19oZWlnaHRcclxuICAgIH0pO1xyXG5cclxuICAgIC8vUmVtb3ZlIGxvYWRpbmcgY2xhc3NcclxuICAgIGlmKHRoaXMuJGxheW91dC5oYXNDbGFzcygnbG9hZGluZycpKSB7XHJcbiAgICAgIHRoaXMuJGxheW91dC5yZW1vdmVDbGFzcygnbG9hZGluZycpXHJcbiAgICB9XHJcbiAgfVxyXG59ICAgIiwiLy9pbXBvcnQgUHJlc3MgZnJvbSAnLi9wYWdlL3ByZXNzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICAvL3RoaXMucHJlc3MgPSBuZXcgUHJlc3MobWFpbiwgdXRpbHMpO1xyXG4gIH1cclxufSAgICIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vdXRpbHMvaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IFZlY3RvcnMgZnJvbSAnLi91dGlscy9oZWxwZXJzL3ZlY3RvcnMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL3V0aWxzL2hlbHBlcnMvY29va2llcyc7XHJcbmltcG9ydCBIYXNoIGZyb20gJy4vdXRpbHMvaGVscGVycy9oYXNoJztcclxuaW1wb3J0IExpZ2h0Ym94IGZyb20gJy4vdXRpbHMvbGlnaHRib3gvbWFpbic7XHJcblxyXG5pbXBvcnQgUHJlbG9hZCBmcm9tICcuL3V0aWxzL3ByZWxvYWQvcHJlbG9hZCc7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi91dGlscy93aW5kb3cvcHViJztcclxuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi91dGlscy9uZXdzbGV0dGVyL21haWxjaGltcCc7XHJcbmltcG9ydCBGaXhlcyBmcm9tICcuL3V0aWxzL2hlbHBlcnMvZml4ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHRoaXMucHJlbG9hZCAgICA9IG5ldyBQcmVsb2FkKCk7XHJcbiAgICB0aGlzLm5ld3NsZXR0ZXIgPSBuZXcgTmV3c2xldHRlcigpO1xyXG4gICAgdGhpcy5oZWxwZXJzICAgID0gbmV3IEhlbHBlcnMoKTtcclxuICAgIHRoaXMudmVjdG9ycyAgICA9IG5ldyBWZWN0b3JzKCk7XHJcbiAgICB0aGlzLmNvb2tpZXMgICAgPSBuZXcgQ29va2llcygpO1xyXG4gICAgdGhpcy5oYXNoICAgICAgID0gbmV3IEhhc2goKTsgXHJcbiAgICB0aGlzLmxpZ2h0Ym94ICAgPSBuZXcgTGlnaHRib3goKTtcclxuICAgIHRoaXMud2luZG93ICAgICA9IG5ldyBXaW5kb3coKTtcclxuXHJcbiAgICAvL0ZpeGVzXHJcbiAgICB0aGlzLmZpeGVzICAgICAgPSBuZXcgRml4ZXMoKTsgXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llcyB7XHJcbiAgZ2V0KGNfbmFtZSkge1xyXG4gICAgICB2YXIgaSwgeCwgeSwgQVJSY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBBUlJjb29raWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgeCA9IEFSUmNvb2tpZXNbaV0uc3Vic3RyKDAsIEFSUmNvb2tpZXNbaV0uaW5kZXhPZihcIj1cIikpO1xyXG4gICAgICAgIHkgPSBBUlJjb29raWVzW2ldLnN1YnN0cihBUlJjb29raWVzW2ldLmluZGV4T2YoXCI9XCIpICsgMSk7XHJcbiAgICAgICAgeCA9IHgucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XHJcbiAgICAgICAgaWYgKHggPT0gY19uYW1lKSB7XHJcbiAgICAgICAgICByZXR1cm4gdW5lc2NhcGUoeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldChjX25hbWUsIHZhbHVlLCBleGhvdXJzKSB7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgb2Zmc2V0ID0gdGltZS5nZXRUaW1lKCk7XHJcbiAgICBvZmZzZXQgKz0gKDM2MDAgKiAxMDAwKSAqIGV4aG91cnM7XHJcbiAgICB0aW1lLnNldFRpbWUob2Zmc2V0KTtcclxuXHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBjX25hbWUgKyBcIj1cIiArIGVzY2FwZSh2YWx1ZSkgKyBcIjsgZXhwaXJlcz1cIiArIHRpbWUudG9HTVRTdHJpbmcoKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaXhlcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnNvbGUoKTsgIC8vQXZvaWQgbm8gY29uc29sZSBlcnJvcnNcclxuICAgIHRoaXMuaG92ZXJ0YXAoKTsgLy9GaXggZG91YmxlIHRhcHBpbmcgb24gbW9iaWxlIHdlYmtpdFxyXG4gIH1cclxuXHJcbiAgY29uc29sZSgpIHsgXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZDtcclxuICAgICAgICB2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XHJcbiAgICAgICAgdmFyIG1ldGhvZHMgPSBbXHJcbiAgICAgICAgICAgICdhc3NlcnQnLCAnY2xlYXInLCAnY291bnQnLCAnZGVidWcnLCAnZGlyJywgJ2RpcnhtbCcsICdlcnJvcicsXHJcbiAgICAgICAgICAgICdleGNlcHRpb24nLCAnZ3JvdXAnLCAnZ3JvdXBDb2xsYXBzZWQnLCAnZ3JvdXBFbmQnLCAnaW5mbycsICdsb2cnLFxyXG4gICAgICAgICAgICAnbWFya1RpbWVsaW5lJywgJ3Byb2ZpbGUnLCAncHJvZmlsZUVuZCcsICd0YWJsZScsICd0aW1lJywgJ3RpbWVFbmQnLFxyXG4gICAgICAgICAgICAndGltZVN0YW1wJywgJ3RyYWNlJywgJ3dhcm4nXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gbWV0aG9kcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSk7XHJcblxyXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgICAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF07XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXHJcbiAgICAgICAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuICB9XHJcblxyXG4gIGhvdmVydGFwKCkge1xyXG4gICAgJCgnYm9keScpLm9uKCd0b3VjaGVuZCcsJ2EsIHNwYW4sIGJ1dHRvbiwgaW5wdXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc2gge1xyXG4gIHB1YigpIHtcclxuICAgICQod2luZG93KS5iaW5kKCAnbG9hZCBoYXNoY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3B1YiBoYXNoIGNoYW5nZScpO1xyXG4gICAgICByYWRpbygnd2luZG93L2hhc2gvY2hhbmdlJykuYnJvYWRjYXN0KHtcclxuICAgICAgICBlOmUsXHJcbiAgICAgICAgaGFzaDpsb2NhdGlvbi5oYXNoLnNsaWNlKDEpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7IFxyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcclxuICBzbHVnaWZ5KHRleHQpIHtcclxuICAgIHJldHVybiB0ZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHcgXSsvZywnJykucmVwbGFjZSgvICsvZywnLScpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3JzIHtcclxuXHJcbiAgLy9BZGQgdmVjdG9yc1xyXG4gIGFkZChwMSxwMikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDpwMS54ICsgcDIueCxcclxuICAgICAgeTpwMS55ICsgcDIueVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vTXVsdGlwbHkgdmVjdG9yXHJcbiAgbXVsdGlwbHkocDEsdmFsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBwMS54ICogdmFsLFxyXG4gICAgICB5OiBwMS55ICogdmFsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9Ob3JtYWxpemVzIHRoZSB2ZWN0b3IgdG8gdmFsdWVzIGJldHdlZW4gLTEgYW5kIDFcclxuICBub3JtYWxpc2UocDEsIG5ld0xlbmd0aCkge1xyXG4gICAgdmFyIGwgPSB0aGlzLmxlbmd0aChwMSk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IChwMS54IC8gbCkgKiBuZXdMZW5ndGgsXHJcbiAgICAgIHk6IChwMS55IC8gbCkgKiBuZXdMZW5ndGhcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL1JldHVybnMgdGhlIHZlY3RvciBiZXR3ZWVuIHR3byBwb2ludHMuXHJcbiAgYmV0d2VlbihwMSxwMikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogcDEueCAtIHAyLngsXHJcbiAgICAgIHk6IHAxLnkgLSBwMi55XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy9HZXQgbGVuZ3RoIG9mIHZlY3RvclxyXG4gIGxlbmd0aChwKSB7IFxyXG4gICAgcmV0dXJuIE1hdGguc3FydChwLnggKiBwLnggKyBwLnkgKiBwLnkpO1xyXG4gIH1cclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcclxuICBjcmVhdGUobmV3X29wdGlvbnMpIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICBib3hfY2xhc3M6ICcnLFxyXG4gICAgICBib3hfY29udGVudDogJycsXHJcbiAgICAgIHdyYXBfY3NzOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgJ3otaW5kZXgnOiA5OTk5OTlcclxuICAgICAgfSxcclxuICAgICAgdGFibGVfY3NzOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJvd19jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAndGFibGUtcm93J1xyXG4gICAgICB9LFxyXG4gICAgICBjZWxsX2Nzczoge1xyXG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcclxuICAgICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxyXG4gICAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJveF9jc3M6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAnKmRpc3BsYXknOiAnaW5saW5lJyxcclxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZidcclxuICAgICAgfSxcclxuICAgICAgY2FsbGJhY2s6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgICQuZXh0ZW5kKHRydWUsIG9wdGlvbnMsIG5ld19vcHRpb25zKTtcclxuXHJcbiAgICB2YXIgJGxpZ2h0Ym94X3dyYXAgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtd3JhcFwiIC8+JykuYXBwZW5kVG8oJ2JvZHknKTtcclxuICAgIHZhciAkbGlnaHRib3hfdGFibGUgPSAkKCc8ZGl2IGNsYXNzPVwibGlnaHRib3gtdGFibGVcIiAvPicpLmFwcGVuZFRvKCRsaWdodGJveF93cmFwKTtcclxuICAgIHZhciAkbGlnaHRib3hfcm93ID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LXJvd1wiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X3RhYmxlKTtcclxuICAgIHZhciAkbGlnaHRib3hfY2VsbCA9ICQoJzxkaXYgY2xhc3M9XCJsaWdodGJveC1jZWxsXCIgLz4nKS5hcHBlbmRUbygkbGlnaHRib3hfcm93KTtcclxuICAgIHZhciAkbGlnaHRib3hfYm94ID0gJCgnPGRpdiBjbGFzcz1cImxpZ2h0Ym94LWJveFwiIC8+JykuYXBwZW5kVG8oJGxpZ2h0Ym94X2NlbGwpO1xyXG5cclxuICAgICRsaWdodGJveF93cmFwLmNzcyhvcHRpb25zLndyYXBfY3NzKTtcclxuICAgICRsaWdodGJveF90YWJsZS5jc3Mob3B0aW9ucy50YWJsZV9jc3MpO1xyXG4gICAgJGxpZ2h0Ym94X3Jvdy5jc3Mob3B0aW9ucy5yb3dfY3NzKTtcclxuICAgICRsaWdodGJveF9jZWxsLmNzcyhvcHRpb25zLmNlbGxfY3NzKTtcclxuICAgICRsaWdodGJveF9ib3guY3NzKG9wdGlvbnMuYm94X2Nzcyk7XHJcblxyXG4gICAgJGxpZ2h0Ym94X2JveC5hZGRDbGFzcyhvcHRpb25zLmJveF9jbGFzcyk7XHJcbiAgICAkbGlnaHRib3hfYm94Lmh0bWwob3B0aW9ucy5ib3hfY29udGVudCk7XHJcblxyXG5cclxuICAgIC8vY2xvc2UgY29uZGl0aW9uc1xyXG4gICAgJCgnLmxpZ2h0Ym94LWNlbGwnKS5maW5kKCcuY2xvc2UsIFtkYXRhLXB1Yj1jbG9zZV0nKS5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLmtleXVwKChlKSA9PiAge1xyXG4gICAgICBpZiAoZS53aGljaCA9PSAyNykge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0eXBlb2Yob3B0aW9ucy5jYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIG9wdGlvbnMuY2FsbGJhY2soJGxpZ2h0Ym94X3dyYXApO1xyXG4gIH1cclxuICBcclxuICByZW1vdmUoKSB7XHJcbiAgICAkKCcubGlnaHRib3gtd3JhcCcpLmZhZGVPdXQoMTAwMCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5saWdodGJveC13cmFwJykucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzbGV0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vdGhpcy5wdWIoKTtcclxuICB9XHJcbiAgXHJcbiAgcHViKCkge1xyXG4gICAgdmFyICRmb3JtID0gJCgnI25ld3NsZXR0ZXInKTtcclxuXHJcbiAgICAvL09uIGNsaWNrIHNlbmQgb3BlbiAnY2FzdFxyXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZygnYnJvYWRjYXN0IG5ld3NsZXR0ZXIgc2lnbnVwJyk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgcmFkaW8oJ2FjdGlvbi9uZXdzbGV0dGVyJykuYnJvYWRjYXN0KHtcclxuICAgICAgICBhY3Rpb24gOiAnc2lnbnVwJyxcclxuICAgICAgICBldmVudCA6IGUsXHJcbiAgICAgICAgJGZvcm0gOiAkZm9ybVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzdWIoKSB7XHJcbiAgICByYWRpbygnYWN0aW9uL25ld3NsZXR0ZXInKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdmFyICRmb3JtICAgID0gZGF0YS4kZm9ybTtcclxuICAgICAgdmFyICRzdWNjZXNzID0gJGZvcm0uZmluZCgnLnN1Y2Nlc3MnKTtcclxuICAgICAgdmFyICRlcnJvciAgID0gJGZvcm0uZmluZCgnLmVycm9yJyk7XHJcblxyXG4gICAgICB2YXIgYWN0aW9uID0gU3RyaW5nKCRmb3JtLmF0dHIoJ2FjdGlvbicpKTtcclxuXHJcbiAgICAgICRlcnJvci5oaWRlKCk7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgdXJsOiBhY3Rpb24sXHJcbiAgICAgICAgZGF0YTogJGZvcm0uc2VyaWFsaXplKCksXHJcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgIGFsZXJ0KFwiQ291bGQgbm90IGNvbm5lY3QgdG8gdGhlIHJlZ2lzdHJhdGlvbiBzZXJ2ZXIuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQgIT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICAgICAgLy8gU29tZXRoaW5nIHdlbnQgd3JvbmcsIGRvIHNvbWV0aGluZyB0byBub3RpZnkgdGhlIHVzZXIuIG1heWJlIGFsZXJ0KGRhdGEubXNnKTtcclxuICAgICAgICAgICAgJGVycm9yLnRleHQoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKS5zaG93KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJdCB3b3JrZWQsIGNhcnJ5IG9uLi4uXHJcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ2lucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgJHN1Y2Nlc3Muc2hvdygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2ltYWdlcyA9IFtdO1xyXG5cclxuICAgIGlmICghJCgnI3ByZWxvYWQnKS5pcygnKicpKSB7XHJcbiAgICAgIHRoaXMuJHByZWxvYWQgPSAkKCc8ZGl2IGlkPVwicHJlbG9hZFwiIC8+JykucHJlcGVuZFRvKCdib2R5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiRwcmVsb2FkID0gJCgnI3ByZWxvYWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltYWdlKG9wdHMpIHtcclxuICAgIHZhciBzcmMgPSBvcHRzLnNyYy5yZXBsYWNlKC9cXFwiL2csICcgJyk7XHJcbiAgICBjb25zb2xlLmxvZygncHJlbG9hZGluZyBpbWFnZTogJyArIHNyYyk7XHJcblxyXG4gICAgdGhpcy4kcHJlbG9hZC5hcHBlbmQoJzxpbWcgc3JjPVwiJyArIHNyYyArICdcIiAgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgLz4nKTtcclxuICAgIHRoaXMuJHByZWxvYWQuZmluZCgnIGltZ1tzcmM9XCInICsgc3JjICsgJ1wiXScpLmxvYWQoKGQpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZihvcHRzLmNhbGxiYWNrKSAhPSAndW5kZWZpbmVkJykgb3B0cy5jYWxsYmFjayhkKTsgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGltYWdlcyhvcHRzKSB7XHJcbiAgICB0aGlzLl9pbWFnZXMgPSBvcHRzLnNyYztcclxuICAgIHZhciBpbWFnZSAgPSB0aGlzLl9pbWFnZXMuc2hpZnQoKTtcclxuXHJcbiAgICBpZiAodHlwZW9mKGltYWdlKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmltYWdlKHtcclxuICAgICAgICBzcmM6aW1hZ2UsXHJcbiAgICAgICAgY2FsbGJhY2s6IChkKSA9PiB7XHJcbiAgICAgICAgICAvL0dvIHRvIHRoZSBuZXh0IGltYWdlXHJcbiAgICAgICAgICB0aGlzLmltYWdlcyh7XHJcbiAgICAgICAgICAgIHNyYzogdGhpcy5faW1hZ2VzLCBcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG9wdHMuY2FsbGJhY2tcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgIGlmKHR5cGVvZihvcHRzLmNhbGxiYWNrKSAhPSAndW5kZWZpbmVkJykgb3B0cy5jYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9pbWFnZXMgPSBbXTtcclxuICAgICQoJyNwcmVsb2FkIGltZycpLnJlbW92ZSgpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLnNjcm9sbCgpO1xyXG4gICAgLy8gdGhpcy5yZXNpemUoKTtcclxuICAgIC8vIHRoaXMubG9hZCgpO1xyXG4gIH1cclxuICBcclxuICBzY3JvbGwoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcbiAgICAkd2luZG93Lm9uKCdsb2FkIHNjcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICByYWRpbygnd2luZG93L3Njcm9sbCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgc2Nyb2xsVG9wIDogJHdpbmRvdy5zY3JvbGxUb3AoKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG4gICAgJHdpbmRvdy5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgcmFkaW8oJ3dpbmRvdy9yZXNpemUnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIHdpZHRoICA6ICR3aW5kb3cud2lkdGgoKSxcclxuICAgICAgICBoZWlnaHQgOiAkd2luZG93LmhlaWdodCgpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG4gICAgJHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICByYWRpbygnd2luZG93L2xvYWQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICAgIHdpZHRoICA6ICR3aW5kb3cud2lkdGgoKSxcclxuICAgICAgICBoZWlnaHQgOiAkd2luZG93LmhlaWdodCgpLFxyXG4gICAgICAgIHNjcm9sbFRvcCA6ICR3aW5kb3cuc2Nyb2xsVG9wKClcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXX0=
