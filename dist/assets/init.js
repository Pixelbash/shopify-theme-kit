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

},{"./pub":2,"./sub":6,"./utils":10}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  this.header = new _header2.default(main, utils);
  this.footer = new _footer2.default(main, utils);

  //Template specific tests
  if (this.m.$body.filter('[data-template=page]').size() > 0) this.page = new _page2.default(main, utils);
};

exports.default = Pub;

},{"./pub/footer":3,"./pub/header":4,"./pub/page":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = function Footer(main, utils) {
  _classCallCheck(this, Footer);

  this.m = main;
  this.u = utils;

  radio('footer').broadcast();
};

exports.default = Footer;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function Header(main, utils) {
  _classCallCheck(this, Header);

  this.m = main;
  this.u = utils;

  radio('header').broadcast();
};

exports.default = Header;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Page = function Page(main, utils) {
  _classCallCheck(this, Page);

  this.m = main;
  this.u = utils;

  radio('page').broadcast();
};

exports.default = Page;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  this.header = new _header2.default(main, utils);
  this.footer = new _footer2.default(main, utils);

  this.page = new _page2.default(main, utils);
};

exports.default = Sub;

},{"./sub/footer":7,"./sub/header":8,"./sub/page":9}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Default = function () {
  function Default(main, utils) {
    var _this = this;

    _classCallCheck(this, Default);

    this.m = main;
    this.u = utils;
    radio('footer').subscribe(function (d) {
      _this.init(d);
    });
  }

  _createClass(Default, [{
    key: 'init',
    value: function init(d) {
      this._d = d;
    }
  }]);

  return Default;
}();

exports.default = Default;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Default = function () {
  function Default(main, utils) {
    var _this = this;

    _classCallCheck(this, Default);

    this.m = main;
    this.u = utils;
    radio('header').subscribe(function (d) {
      _this.init(d);
    });
  }

  _createClass(Default, [{
    key: 'init',
    value: function init(d) {
      this._d = d;
    }
  }]);

  return Default;
}();

exports.default = Default;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Default = function () {
  function Default(main, utils) {
    var _this = this;

    _classCallCheck(this, Default);

    this.m = main;
    this.u = utils;
    radio('page').subscribe(function (d) {
      _this.init(d);
    });
  }

  _createClass(Default, [{
    key: 'init',
    value: function init(d) {
      this._d = d;
    }
  }]);

  return Default;
}();

exports.default = Default;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./utils/helpers/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _cookies = require('./utils/helpers/cookies');

var _cookies2 = _interopRequireDefault(_cookies);

var _fixes = require('./utils/helpers/fixes');

var _fixes2 = _interopRequireDefault(_fixes);

var _disable_scroll = require('./utils/helpers/disable_scroll');

var _disable_scroll2 = _interopRequireDefault(_disable_scroll);

var _preload = require('./utils/preload/preload');

var _preload2 = _interopRequireDefault(_preload);

var _pub = require('./utils/window/pub');

var _pub2 = _interopRequireDefault(_pub);

var _mailchimp = require('./utils/newsletter/mailchimp');

var _mailchimp2 = _interopRequireDefault(_mailchimp);

var _lbox = require('./utils/lbox/lbox');

var _lbox2 = _interopRequireDefault(_lbox);

var _qbox = require('./utils/qbox/qbox');

var _qbox2 = _interopRequireDefault(_qbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function Utils() {
  _classCallCheck(this, Utils);

  this.fixes = new _fixes2.default(this);
  this.helpers = new _helpers2.default(this);

  this.preload = new _preload2.default(this);
  this.window = new _pub2.default(this);
  this.disable_scroll = new _disable_scroll2.default(this);
  this.newsletter = new _mailchimp2.default(this);
  this.lbox = new _lbox2.default(this);
  this.qbox = new _qbox2.default(this);
  this.cookies = new _cookies2.default(this);
};

exports.default = Utils;

},{"./utils/helpers/cookies":11,"./utils/helpers/disable_scroll":12,"./utils/helpers/fixes":13,"./utils/helpers/helpers":14,"./utils/lbox/lbox":16,"./utils/newsletter/mailchimp":20,"./utils/preload/preload":21,"./utils/qbox/qbox":24,"./utils/window/pub":27}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisableScroll = function () {
  function DisableScroll() {
    _classCallCheck(this, DisableScroll);

    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    this.keys = [37, 38, 39, 40];
  }

  _createClass(DisableScroll, [{
    key: 'disableScroll',
    value: function disableScroll() {
      if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', this.wheel, false);
        window.addEventListener('touchmove', this.touch, false);
      }

      window.onmousewheel = document.onmousewheel = this.wheel;
      document.onkeydown = this.keydown;
    }
  }, {
    key: 'enableScroll',
    value: function enableScroll() {
      if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', this.wheel, false);
        window.removeEventListener('touchmove', this.touch, false);
      }

      window.onmousewheel = document.onmousewheel = document.onkeydown = null;
    }
  }, {
    key: 'keydown',
    value: function keydown(e) {
      var ds = window.app.u.disable_scroll;
      var keys = ds.keys;

      for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
          ds.removeDefault(e);
          return;
        }
      }
    }
  }, {
    key: 'wheel',
    value: function wheel(e) {
      var ds = window.app.u.disable_scroll;
      ds.removeDefault(e);
    }
  }, {
    key: 'touch',
    value: function touch(e) {
      var ds = window.app.u.disable_scroll;
      ds.removeDefault(e);
    }
  }, {
    key: 'removeDefault',
    value: function removeDefault(e) {
      e = e || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.returnValue = false;
    }
  }]);

  return DisableScroll;
}();

exports.default = DisableScroll;

},{}],13:[function(require,module,exports){
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
    //this.underscore(); //Fix web style delimiters in US templates in rails
    this.rivets();
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
    key: 'requestAnimationFrame',
    value: function requestAnimationFrame() {
      var lastTime = 0;
      var vendors = ['webkit', 'moz'];
      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };

        if (!window.cancelAnimationFrame) {
          window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
          };
        }
      }
    }
  }, {
    key: 'hovertap',
    value: function hovertap() {
      var has_touch = 'ontouchend' in document ? true : false;
      if (has_touch) {
        $('body').off('click', 'a, span, button, input');
        // $('body').on('click','a, span, button, input', function(e) {
        //   var $target = $(e.currentTarget); 
        //   if(!!$target.attr('data-pub')) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //   }
        // });
      }
    }
  }, {
    key: 'underscore',
    value: function underscore() {
      _.templateSettings = {
        interpolate: /\{\{\=(.+?)\}\}/g,
        evaluate: /\{\{(.+?)\}\}/g
      };
    }
  }, {
    key: 'rivets',
    value: function (_rivets) {
      function rivets() {
        return _rivets.apply(this, arguments);
      }

      rivets.toString = function () {
        return _rivets.toString();
      };

      return rivets;
    }(function () {
      rivets.formatters['eq'] = function (value, arg) {
        return value == arg;
      };
      rivets.formatters['lt'] = function (value, arg) {
        return value < arg;
      };
      rivets.formatters['lte'] = function (value, arg) {
        return value <= arg;
      };
      rivets.formatters['gt'] = function (value, arg) {
        return value > arg;
      };
      rivets.formatters['gte'] = function (value, arg) {
        return value >= arg;
      };
    })
  }]);

  return Fixes;
}();

exports.default = Fixes;

},{}],14:[function(require,module,exports){
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
  }, {
    key: 'getDocumentWidth',
    value: function getDocumentWidth() {
      return Math.max(document.documentElement["clientWidth"], document.body["scrollWidth"], document.documentElement["scrollWidth"], document.body["offsetWidth"], document.documentElement["offsetWidth"]);
    }
  }, {
    key: 'getDocumentHeight',
    value: function getDocumentHeight() {
      return Math.max(document.documentElement["clientHeight"], document.body["scrollHeight"], document.documentElement["scrollHeight"], document.body["offsetHeight"], document.documentElement["offsetHeight"]);
    }
  }]);

  return Helpers;
}();

exports.default = Helpers;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slideshow = function () {
  function Slideshow(lbox) {
    _classCallCheck(this, Slideshow);

    this.templates = lbox.templates;
    this.options = lbox.options;
    //Set up slideshow elements
    this.els = this.elements();

    //Set up slideshow state vars
    this.state = this.getState();

    //Mark as initialised
    this.state.initialised = true;

    return this;
  }

  _createClass(Slideshow, [{
    key: 'getState',
    value: function getState() {
      return {
        initialised: false,
        wrap: this.options.wrap,
        box: {
          width: this.els.$box.width()
        }
      };
    }
  }, {
    key: 'remove',
    value: function remove() {
      var els = this.els;
      if (els.$wrap.size() > 0) {
        els.$wrap.fadeOut(1000, function () {
          els.$wrap.remove();
        });
      }
    }
  }, {
    key: 'elements',
    value: function elements() {
      var templates = this.templates;

      var $wrap = $(templates.lightbox({ options: this.options }));

      var els = {};
      els.$wrap = $wrap.appendTo($('body'));

      els.$close = els.$wrap.find('.close, [data-pub~="close"]');
      els.$box = els.$wrap.find('[data-sub~="lbox-box"]');

      return els;
    }
  }]);

  return Slideshow;
}();

exports.default = Slideshow;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preload = require('../preload/preload');

var _preload2 = _interopRequireDefault(_preload);

var _templates = require('./templates');

var _templates2 = _interopRequireDefault(_templates);

var _listeners = require('./listeners');

var _listeners2 = _interopRequireDefault(_listeners);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _build = require('./build');

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lbox = function () {
  function Lbox() {
    _classCallCheck(this, Lbox);
  }

  _createClass(Lbox, [{
    key: 'create',
    value: function create() {
      var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.options = new _options2.default(this, overrides);
      this.templates = new _templates2.default(this);
      this.build = new _build2.default(this);

      //Add listeners
      this.listeners = new _listeners2.default(this);

      if (typeof this.options.callback === 'function') this.options.callback(this.build);
    }
  }]);

  return Lbox;
}();

exports.default = Lbox;

},{"../preload/preload":21,"./build":15,"./listeners":17,"./options":18,"./templates":19}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Listeners = function () {
  function Listeners(lbox) {
    _classCallCheck(this, Listeners);

    this.lbox = lbox;

    this.close();
  }

  _createClass(Listeners, [{
    key: 'close',
    value: function close() {
      var build = this.lbox.build;

      //Remove on escape
      $('body').keyup(function (e) {
        if (e.which == 27) {
          build.remove();
        }
      });

      build.els.$close.on('click', function (e) {
        build.remove();
      });
    }
  }]);

  return Listeners;
}();

exports.default = Listeners;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Options = function Options(lbox, overrides) {
  _classCallCheck(this, Options);

  return $.extend(true, {
    wrap: true,
    min_width: 500,
    content: '',
    callback: false
  }, overrides);
};

exports.default = Options;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Templates = function () {
  function Templates(lbox) {
    _classCallCheck(this, Templates);

    this.options = lbox.options;
    var templates = {};

    templates.lightbox = this.lightbox();

    return templates;
  }

  _createClass(Templates, [{
    key: "lightbox",
    value: function lightbox() {
      return _.template("\n      <div class=\"lbox-wrap\">\n        <div class=\"lbox-box\" data-sub=\"lbox-box\">\n          <%= options.content %>\n        </div>\n      </div>\n    ");
    }
  }]);

  return Templates;
}();

exports.default = Templates;

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Preload = function () {
  function Preload() {
    _classCallCheck(this, Preload);

    this._files = [];

    //Create preload div
    if (!$('#preload').is('*')) {
      this.$preload = $('<div id="preload" />').appendTo('body');
    } else {
      this.$preload = $('#preload');
    }

    this.$preload.hide();
  }

  _createClass(Preload, [{
    key: 'files',
    value: function files(opts) {
      var _this = this;

      this._files = opts.src;

      var file = this._files.shift();
      if (typeof file != 'undefined') {
        this.file({
          src: file,
          callback: function callback(d) {
            //Go to the next file
            _this.files({
              src: _this._files,
              callback: opts.callback
            });
          }
        });
      } else {
        console.log('run callback!');
        this.clear();
        if (typeof opts.callback != 'undefined') opts.callback();
      }
    }
  }, {
    key: 'file',
    value: function file(opts) {
      var src = opts.src.replace(/\"/g, ' ');
      var type = this.getFileType(opts.src);
      var $p = this.$preload;
      var has_cb = typeof opts.callback != 'undefined';

      //Bail if we don't recognise the type
      if (type == false) {
        opts.callback(d);
        //Handle types
      } else if (type == 'img') {
        var $file = $('<img />').attr('src', src).appendTo($p);

        if (has_cb) {
          $file.on('load', function (d) {
            opts.callback(d);
          });
        }
      } else if (type == 'js') {
        $.getScript(src, function (d) {
          console.log('loaded js');
          if (has_cb) opts.callback(d);
        });
      } else if (type == 'css') {
        var $file = $('<link />').attr('href', src).attr('rel', 'stylesheet').appendTo($p);

        if (has_cb) {
          $file.load(function (d) {
            //console.log('loaded css');
            opts.callback(d);
          });
        }
      }
    }
  }, {
    key: 'image',
    value: function image(opts) {
      this.file(opts);
    }
  }, {
    key: 'images',
    value: function images(opts) {
      this.files(opts);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._images = [];
      $('#preload img').remove();
      $('#preload script').remove();
      $('#preload style').remove();
    }
  }, {
    key: 'getFileType',
    value: function getFileType(src) {
      var ext = src.substr(src.lastIndexOf('.') + 1);
      if (/(js)$/ig.test(ext)) {
        return 'js';
      } else if (/(css)$/ig.test(ext)) {
        return 'css';
      } else if (/(jpg|png|gif)$/ig.test(ext)) {
        return 'img';
      }
    }
  }]);

  return Preload;
}();

exports.default = Preload;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Listeners = function () {
  function Listeners(qbox) {
    _classCallCheck(this, Listeners);

    this.qbox = qbox;

    this.close();
    this.navigate();
  }

  _createClass(Listeners, [{
    key: 'close',
    value: function close() {
      var slideshow = this.qbox.slideshow;

      //Remove on escape
      $('body').keyup(function (e) {
        if (e.which == 27) {
          slideshow.remove();
        }
      });

      slideshow.els.$close.on('click', function (e) {
        slideshow.remove();
      });
    }
  }, {
    key: 'navigate',
    value: function navigate() {
      var slideshow = this.qbox.slideshow;
      //Hide if there is only one slide
      var $next = slideshow.els.$next;
      var $prev = slideshow.els.$prev;

      //Direction listeners
      $next.on('click', function (e) {
        slideshow.next();
      });

      $prev.on('click', function (e) {
        slideshow.prev();
      });
    }
  }]);

  return Listeners;
}();

exports.default = Listeners;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Options = function Options(qbox, overrides) {
  _classCallCheck(this, Options);

  return $.extend({
    slides: [],
    start: 0,
    wrap: true,
    mode: 'fade',
    tag: {},
    min_width: 500,
    callback: false
  }, overrides);
};

exports.default = Options;

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preload = require('../preload/preload');

var _preload2 = _interopRequireDefault(_preload);

var _templates = require('./templates');

var _templates2 = _interopRequireDefault(_templates);

var _listeners = require('./listeners');

var _listeners2 = _interopRequireDefault(_listeners);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _slideshow = require('./slideshow');

var _slideshow2 = _interopRequireDefault(_slideshow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Qbox = function () {
  function Qbox() {
    _classCallCheck(this, Qbox);
  }

  _createClass(Qbox, [{
    key: 'create',
    value: function create() {
      var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.options = new _options2.default(this, overrides);
      this.templates = new _templates2.default(this);
      this.slideshow = new _slideshow2.default(this);

      //Add listeners
      this.listeners = new _listeners2.default(this);

      if (typeof this.options.callback === 'function') this.options.callback(this.slideshow);
    }
  }]);

  return Qbox;
}();

exports.default = Qbox;

},{"../preload/preload":21,"./listeners":22,"./options":23,"./slideshow":25,"./templates":26}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slideshow = function () {
  function Slideshow(qbox) {
    _classCallCheck(this, Slideshow);

    this.templates = qbox.templates;
    this.options = qbox.options;

    //Set up slideshow elements
    this.els = this.elements();

    //Set up slideshow state vars
    this.state = this.getState();

    if (this.options.mode == 'fade') {
      this.els.$slides.css({
        'z-index': 5,
        opacity: 0
      });
    }

    //hide controls if only one slide
    if (this.state.max == 0) {
      console.log(this.els.$next);
      this.els.$next.hide();
      this.els.$prev.hide();
    }

    this.select(this.state.slide);

    //Mark as iitialised
    this.state.initialised = true;

    return this;
  }

  _createClass(Slideshow, [{
    key: 'getState',
    value: function getState() {
      return {
        slide: this.options.slide,
        max: this.options.slides.length - 1,
        initialised: false,
        wrap: this.options.wrap,
        box: {
          width: this.els.$box.width()
        },
        gallery: {
          width: this.els.$box.width() * this.options.slides.length
        }
      };
    }
  }, {
    key: 'next',
    value: function next() {
      this.select(this.state.slide + 1);
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.select(this.state.slide - 1);
    }
  }, {
    key: 'select',
    value: function select(new_slide) {
      //Handle wrapping around
      var direction = new_slide > this.state.slide ? 'next' : 'prev';
      var new_slide = this.validateSelect(new_slide);

      if (this.options.mode == 'fade') {
        var this_slide = this.validateSelect(new_slide);
        var prev_slide = this.validateSelect(new_slide - 1);

        if (direction == 'prev') {
          prev_slide = this.validateSelect(new_slide + 1);
        }

        var $prev = this.els.$slides.filter('[data-slide="' + prev_slide + '"]');
        var $this = this.els.$slides.filter('[data-slide="' + this_slide + '"]');

        $prev.css({
          'z-index': 10
        });

        $this.css({
          'z-index': 20,
          'opacity': 0
        });

        $this.animate({
          'opacity': 1
        }, {
          duration: 500,
          complete: function complete() {
            $prev.css({
              'z-index': 5
            });
          }
        });
      }

      //Update pager
      var pad_slide = this.leftPad(new_slide + 1, 2);
      var pad_max = this.leftPad(this.state.max + 1, 2);
      this.els.$pager.text(pad_slide + '/' + pad_max);

      this.state.slide = new_slide;
    }
  }, {
    key: 'remove',
    value: function remove() {
      var els = this.els;
      if (els.$wrap.size() > 0) {
        els.$wrap.fadeOut(1000, function () {
          els.$wrap.remove();
        });
      }
    }
  }, {
    key: 'validateSelect',
    value: function validateSelect(s) {
      var ret = s;
      var state = this.state;

      if (state.wrap) {
        if (s < 0) ret = state.max;
        if (s > state.max) ret = 0;
      } else {
        if (s < 0 || s > state.max) ret = false; //Don't do anything
      }

      return ret;
    }
  }, {
    key: 'elements',
    value: function elements() {
      var templates = this.templates;
      var options = this.options;

      var inner = templates.slideshow({
        mode: options.mode,
        slides: options.slides
      });

      var $wrap = $(templates.lightbox({
        slideshow: inner
      }));

      var els = {};
      els.$wrap = $wrap.appendTo($('body'));

      els.$close = els.$wrap.find('.close, [data-pub~="close"]');
      els.$next = els.$wrap.find('[data-pub~="next-slide"]');
      els.$prev = els.$wrap.find('[data-pub~="prev-slide"]');
      els.$pager = els.$wrap.find('[data-sub~="pager"]');
      els.$slides = els.$wrap.find('[data-sub~="slide"]');
      els.$gallery = els.$wrap.find('[data-sub~="gallery"]');
      els.$box = els.$wrap.find('[data-sub~="box"]');
      els.$tag = els.$wrap.find('[data-sub~="tag"]');

      return els;
    }
  }, {
    key: 'leftPad',
    value: function leftPad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
  }]);

  return Slideshow;
}();

exports.default = Slideshow;

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Templates = function () {
  function Templates(qbox) {
    _classCallCheck(this, Templates);

    this.options = qbox.options;

    var templates = {};
    templates.lightbox = this.lightbox();
    templates.slideshow = this.slideshow();

    return templates;
  }

  _createClass(Templates, [{
    key: "lightbox",
    value: function lightbox() {
      return _.template("\n      <div class=\"qbox-wrap\">\n        <div class=\"qbox-box\" data-sub=\"box\">\n          <%= slideshow %>\n        </div>\n        <div class=\"qbox-controls\">\n          <div class=\"next\" data-pub=\"next-slide\">Next</div>\n          <div class=\"prev\" data-pub=\"prev-slide\">Prev</div>\n          <div class=\"close\" data-pub=\"close\">Close</div>\n          <div class=\"pager-wrap\"><div class=\"pager\"><div class=\"inner\" data-sub=\"pager\"></div></div></div>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "slideshow",
    value: function slideshow() {
      return _.template("\n      <div class=\"qbox-gallery\" data-sub=\"gallery\" data-mode=\"<%= mode %>\">\n        <% _.each(slides, (slide, index) => { %><div class=\"slide\" data-sub=\"slide\"  data-slide=\"<%= index %>\">\n            <%= slide.html %>\n        </div><% }) %>\n      </div>\n    ");
    }
  }]);

  return Templates;
}();

exports.default = Templates;

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = function () {
  function Pub(utils) {
    var _this = this;

    _classCallCheck(this, Pub);

    this.u = utils;

    //Get animation frame
    this.raf = utils.fixes.requestAnimationFrame();
    this.gdh = utils.helpers.getDocumentHeight;

    this._s = {
      $window: $(window),
      scroll: {
        top: {}
      },
      resize: {
        width: {},
        height: {}
      },
      document: {
        height: {}
      }
    };

    //Initialise state variables
    this.reset();

    //start loop
    this.loop();

    //force events to fire a few times
    $(window).on('load ready', function (e) {
      _this.reset();
    });
    this.reset();
  }

  _createClass(Pub, [{
    key: 'reset',
    value: function reset() {
      this._s.scroll.top.old = -1;
      this._s.resize.width.old = -1;
      this._s.resize.height.old = -1;
      this._s.document.height.old = -1;

      this._s.scroll.top.current = 0;
      this._s.resize.width.current = 0;
      this._s.resize.height.current = 0;
      this._s.document.height.current = 0;

      this._s.scroll.top.direction = 'none';
      this._s.resize.width.direction = 'none';
      this._s.resize.height.direction = 'none';
    }
  }, {
    key: 'loop',
    value: function loop() {
      var _this2 = this;

      var $window = this._s.$window;

      //Existing variables
      var old_top = this._s.scroll.top.old;
      var old_width = this._s.resize.width.old;
      var old_height = this._s.resize.height.old;
      var old_document_height = this._s.document.height.old;

      //New variables
      var new_top = window.pageYOffset;
      var new_width = $window.width();
      var new_height = $window.height();
      var new_document_height = this.gdh();

      //Scroll events
      if (old_top != new_top) {
        //Set variables
        this._s.scroll.top.current = new_top;
        this._s.scroll.top.direction = new_top > old_top ? 'down' : 'up';

        //Fire event
        this.scrollPub();

        //Set old variables
        this._s.scroll.top.old = new_top;
      }

      //Resize events
      if (old_width != new_width || old_height != new_height) {
        //Set variables
        this._s.resize.width.current = new_width;
        this._s.resize.height.current = new_height;

        this._s.resize.width.direction = new_width > old_width ? 'more' : 'less';
        this._s.resize.height.direction = new_height > old_height ? 'more' : 'less';

        //Fire event
        this.resizePub();

        //Set old variables
        this._s.resize.width.old = new_width;
        this._s.resize.height.old = new_height;
      }

      //Layout events
      if (old_document_height != new_document_height) {
        //Set variables
        this._s.document.height.current = new_document_height;

        //Fire event
        this.layoutPub();

        //Set old variables
        this._s.document.height.old = new_document_height;
      }

      //Loop
      window.requestAnimationFrame(function (time) {
        _this2.loop();
      });
    }
  }, {
    key: 'scrollPub',
    value: function scrollPub() {
      radio('window/scroll').broadcast({
        scroll_top: this._s.scroll.top.current,
        scroll_direction: this._s.scroll.top.direction
      });
    }
  }, {
    key: 'resizePub',
    value: function resizePub() {
      radio('window/resize').broadcast({
        width: this._s.resize.width.current,
        height: this._s.resize.height.current,
        width_direction: this._s.resize.width.direction,
        height_direction: this._s.resize.height.direction
      });
    }
  }, {
    key: 'layoutPub',
    value: function layoutPub() {
      radio('window/layout').broadcast({
        height: this._s.document.height.current
      });
    }
  }]);

  return Pub;
}();

exports.default = Pub;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2VzNi9pbml0LmpzIiwic3JjL2Fzc2V0cy9lczYvcHViLmpzIiwic3JjL2Fzc2V0cy9lczYvcHViL2Zvb3Rlci5qcyIsInNyYy9hc3NldHMvZXM2L3B1Yi9oZWFkZXIuanMiLCJzcmMvYXNzZXRzL2VzNi9wdWIvcGFnZS5qcyIsInNyYy9hc3NldHMvZXM2L3N1Yi5qcyIsInNyYy9hc3NldHMvZXM2L3N1Yi9mb290ZXIuanMiLCJzcmMvYXNzZXRzL2VzNi9zdWIvaGVhZGVyLmpzIiwic3JjL2Fzc2V0cy9lczYvc3ViL3BhZ2UuanMiLCJzcmMvYXNzZXRzL2VzNi91dGlscy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvY29va2llcy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2hlbHBlcnMvZGlzYWJsZV9zY3JvbGwuanMiLCJzcmMvYXNzZXRzL2VzNi91dGlscy9oZWxwZXJzL2ZpeGVzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvaGVscGVycy9oZWxwZXJzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvbGJveC9idWlsZC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2xib3gvbGJveC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL2xib3gvbGlzdGVuZXJzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvbGJveC9vcHRpb25zLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvbGJveC90ZW1wbGF0ZXMuanMiLCJzcmMvYXNzZXRzL2VzNi91dGlscy9uZXdzbGV0dGVyL21haWxjaGltcC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3ByZWxvYWQvcHJlbG9hZC5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3Fib3gvbGlzdGVuZXJzLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvcWJveC9vcHRpb25zLmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvcWJveC9xYm94LmpzIiwic3JjL2Fzc2V0cy9lczYvdXRpbHMvcWJveC9zbGlkZXNob3cuanMiLCJzcmMvYXNzZXRzL2VzNi91dGlscy9xYm94L3RlbXBsYXRlcy5qcyIsInNyYy9hc3NldHMvZXM2L3V0aWxzL3dpbmRvdy9wdWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBaUIsRUFBRSxNQUFGLENBQWpCO0FBQ0EsU0FBSyxPQUFMLEdBQWlCLEVBQUUsTUFBRixDQUFqQjtBQUNBLFNBQUssU0FBTCxHQUFpQixFQUFFLFFBQUYsQ0FBakI7QUFDQSxTQUFLLEtBQUwsR0FBaUIsRUFBRSxZQUFGLENBQWpCOztBQUVBLFNBQUssS0FBTCxHQUFhLE9BQU8sS0FBcEI7QUFDQSxTQUFLLEtBQUwsR0FBYSxPQUFPLEtBQXBCOztBQUVBLFNBQUssS0FBTCxHQUFhLHFCQUFiOztBQUVBLFNBQUssSUFBTDtBQUNEOzs7OzJCQUVNO0FBQUE7O0FBQ0w7QUFDQSxRQUFFLFlBQU07QUFDTixjQUFLLEdBQUwsR0FBVyx5QkFBYyxNQUFLLEtBQW5CLENBQVg7QUFDQSxjQUFLLEdBQUwsR0FBVyx5QkFBYyxNQUFLLEtBQW5CLENBQVg7QUFDRCxPQUhEO0FBSUQ7Ozs7OztrQkFyQmtCLEk7OztBQXdCckIsT0FBTyxHQUFQLEdBQWEsSUFBSSxJQUFKLEVBQWI7Ozs7Ozs7Ozs7O0FDN0JBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUIsRyxHQUNuQixhQUFZLElBQVosRUFBaUIsS0FBakIsRUFBd0I7QUFBQTs7QUFDdEIsT0FBSyxDQUFMLEdBQVMsSUFBVDtBQUNBLE9BQUssQ0FBTCxHQUFTLEtBQVQ7O0FBRUEsT0FBSyxNQUFMLEdBQWMscUJBQVcsSUFBWCxFQUFpQixLQUFqQixDQUFkO0FBQ0EsT0FBSyxNQUFMLEdBQWMscUJBQVcsSUFBWCxFQUFpQixL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REQ7QUFFL0IsMEJBQW9CLEtBQUssRUFBTCxDQUFRLE1BQVIsQ0FBZSxHQUFmLENBQW1CO0FBRlIsT0FBakM7QUFJRDs7O2dDQUVXO0FBQ1YsWUFBTSxlQUFOLEVBQXVCLFNBQXZCLENBQWlDO0FBQy9CLGVBQVMsS0FBSyxFQUFMLENBQVEsTUFBUixDQUFlLEtBQWYsQ0FBcUIsT0FEQztBQUUvQixnQkFBUyxLQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsTUFBZixDQUFzQixPQUZBO0FBRy9CLHlCQUFtQixLQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsS0FBZixDQUFxQixTQUhUO0FBSS9CLDBCQUFtQixLQUFLLEVBQUwsQ0FBUSxNQUFSLENBQWUsTUFBZixDQUFzQjtBQUpWLE9BQWpDO0FBTUQ7OztnQ0FFVztBQUNWLFlBQU0sZUFBTixFQUF1QixTQUF2QixDQUFpQztBQUMvQixnQkFBVSxLQUFLLEVBQUwsQ0FBUSxRQUFSLENBQWlCLE1BQWpCLENBQXdCO0FBREgsT0FBakM7QUFHRDs7Ozs7O2tCQXBJa0IsRyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscyc7XHJcblxyXG5pbXBvcnQgUHViIGZyb20gJy4vcHViJztcclxuaW1wb3J0IFN1YiBmcm9tICcuL3N1Yic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuJGJvZHkgICAgID0gJCgnYm9keScpO1xyXG4gICAgdGhpcy4kd2luZG93ICAgPSAkKHdpbmRvdyk7XHJcbiAgICB0aGlzLiRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xyXG4gICAgdGhpcy4kcm9vdCAgICAgPSAkKCdodG1sLCBib2R5Jyk7XHJcblxyXG4gICAgdGhpcy5fb3B0cyA9IHdpbmRvdy5fb3B0cztcclxuICAgIHRoaXMuX2RhdGEgPSB3aW5kb3cuX2RhdGE7XHJcblxyXG4gICAgdGhpcy51dGlscyA9IG5ldyBVdGlscygpO1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH0gXHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICAvL0pxdWVyeSByZWFkeVxyXG4gICAgJCgoKSA9PiB7IFxyXG4gICAgICB0aGlzLnN1YiA9IG5ldyBTdWIodGhpcywgdGhpcy51dGlscyk7XHJcbiAgICAgIHRoaXMucHViID0gbmV3IFB1Yih0aGlzLCB0aGlzLnV0aWxzKTsgXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmdsb2JhbC5hcHAgPSBuZXcgSW5pdCgpOyIsImltcG9ydCBQYWdlIGZyb20gJy4vcHViL3BhZ2UnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vcHViL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9wdWIvZm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YiB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgXHJcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIobWFpbiwgdXRpbHMpO1xyXG4gICAgdGhpcy5mb290ZXIgPSBuZXcgRm9vdGVyKG1haW4sIHV0aWxzKTtcclxuXHJcbiAgICAvL1RlbXBsYXRlIHNwZWNpZmljIHRlc3RzXHJcbiAgICBpZih0aGlzLm0uJGJvZHkuZmlsdGVyKCdbZGF0YS10ZW1wbGF0ZT1wYWdlXScpLnNpemUoKSA+IDApIHRoaXMucGFnZSA9IG5ldyBQYWdlKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgcmFkaW8oJ2Zvb3RlcicpLmJyb2FkY2FzdCgpO1xyXG4gIH1cclxufSAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcblxyXG4gICAgcmFkaW8oJ2hlYWRlcicpLmJyb2FkY2FzdCgpO1xyXG4gIH1cclxufSAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHJhZGlvKCdwYWdlJykuYnJvYWRjYXN0KCk7XHJcbiAgfVxyXG59ICIsImltcG9ydCBQYWdlIGZyb20gJy4vc3ViL3BhZ2UnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vc3ViL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9zdWIvZm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YiB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyICAgPSBuZXcgSGVhZGVyKG1haW4sIHV0aWxzKTtcclxuICAgIHRoaXMuZm9vdGVyICAgPSBuZXcgRm9vdGVyKG1haW4sIHV0aWxzKTtcclxuICAgIFxyXG4gICAgdGhpcy5wYWdlICAgICA9IG5ldyBQYWdlKG1haW4sIHV0aWxzKTtcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdCB7XHJcbiAgY29uc3RydWN0b3IobWFpbix1dGlscykge1xyXG4gICAgdGhpcy5tID0gbWFpbjtcclxuICAgIHRoaXMudSA9IHV0aWxzO1xyXG4gICAgcmFkaW8oJ2Zvb3RlcicpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMuaW5pdChkKTt9KTtcclxuICB9XHJcblxyXG4gIGluaXQoZCkge1xyXG4gICAgdGhpcy5fZCA9IGQ7XHJcbiAgfVxyXG59ICAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHQge1xyXG4gIGNvbnN0cnVjdG9yKG1haW4sdXRpbHMpIHtcclxuICAgIHRoaXMubSA9IG1haW47XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuICAgIHJhZGlvKCdoZWFkZXInKS5zdWJzY3JpYmUoKGQpID0+IHt0aGlzLmluaXQoZCk7fSk7XHJcbiAgfVxyXG5cclxuICBpbml0KGQpIHtcclxuICAgIHRoaXMuX2QgPSBkO1xyXG4gIH1cclxufSAgICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0IHtcclxuICBjb25zdHJ1Y3RvcihtYWluLHV0aWxzKSB7XHJcbiAgICB0aGlzLm0gPSBtYWluO1xyXG4gICAgdGhpcy51ID0gdXRpbHM7XHJcbiAgICByYWRpbygncGFnZScpLnN1YnNjcmliZSgoZCkgPT4ge3RoaXMuaW5pdChkKTt9KTtcclxuICB9XHJcblxyXG4gIGluaXQoZCkge1xyXG4gICAgdGhpcy5fZCA9IGQ7XHJcbiAgfVxyXG59ICAgICIsImltcG9ydCBIZWxwZXJzIGZyb20gJy4vdXRpbHMvaGVscGVycy9oZWxwZXJzJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi91dGlscy9oZWxwZXJzL2Nvb2tpZXMnO1xyXG5pbXBvcnQgRml4ZXMgZnJvbSAnLi91dGlscy9oZWxwZXJzL2ZpeGVzJztcclxuaW1wb3J0IERpc2FibGVTY3JvbGwgZnJvbSAnLi91dGlscy9oZWxwZXJzL2Rpc2FibGVfc2Nyb2xsJztcclxuaW1wb3J0IFByZWxvYWQgZnJvbSAnLi91dGlscy9wcmVsb2FkL3ByZWxvYWQnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4vdXRpbHMvd2luZG93L3B1Yic7XHJcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4vdXRpbHMvbmV3c2xldHRlci9tYWlsY2hpbXAnO1xyXG5pbXBvcnQgTGJveCBmcm9tICcuL3V0aWxzL2xib3gvbGJveCc7XHJcbmltcG9ydCBRYm94IGZyb20gJy4vdXRpbHMvcWJveC9xYm94JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLmZpeGVzICAgPSBuZXcgRml4ZXModGhpcyk7XHJcbiAgICB0aGlzLmhlbHBlcnMgPSBuZXcgSGVscGVycyh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnByZWxvYWQgICAgICAgID0gbmV3IFByZWxvYWQodGhpcyk7XHJcbiAgICB0aGlzLndpbmRvdyAgICAgICAgID0gbmV3IFdpbmRvdyh0aGlzKTtcclxuICAgIHRoaXMuZGlzYWJsZV9zY3JvbGwgPSBuZXcgRGlzYWJsZVNjcm9sbCh0aGlzKTtcclxuICAgIHRoaXMubmV3c2xldHRlciAgICAgPSBuZXcgTmV3c2xldHRlcih0aGlzKTtcclxuICAgIHRoaXMubGJveCAgICAgICAgICAgPSBuZXcgTGJveCh0aGlzKTtcclxuICAgIHRoaXMucWJveCAgICAgICAgICAgPSBuZXcgUWJveCh0aGlzKTtcclxuICAgIHRoaXMuY29va2llcyAgICAgICAgPSBuZXcgQ29va2llcyh0aGlzKTtcclxuICB9XHJcbn0gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZXMge1xyXG4gIGdldChjX25hbWUpIHtcclxuICAgICAgdmFyIGksIHgsIHksIEFSUmNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgQVJSY29va2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHggPSBBUlJjb29raWVzW2ldLnN1YnN0cigwLCBBUlJjb29raWVzW2ldLmluZGV4T2YoXCI9XCIpKTtcclxuICAgICAgICB5ID0gQVJSY29va2llc1tpXS5zdWJzdHIoQVJSY29va2llc1tpXS5pbmRleE9mKFwiPVwiKSArIDEpO1xyXG4gICAgICAgIHggPSB4LnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xyXG4gICAgICAgIGlmICh4ID09IGNfbmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHVuZXNjYXBlKHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXQoY19uYW1lLCB2YWx1ZSwgZXhob3Vycykge1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIG9mZnNldCA9IHRpbWUuZ2V0VGltZSgpO1xyXG4gICAgb2Zmc2V0ICs9ICgzNjAwICogMTAwMCkgKiBleGhvdXJzO1xyXG4gICAgdGltZS5zZXRUaW1lKG9mZnNldCk7XHJcblxyXG4gICAgZG9jdW1lbnQuY29va2llID0gY19uYW1lICsgXCI9XCIgKyBlc2NhcGUodmFsdWUpICsgXCI7IGV4cGlyZXM9XCIgKyB0aW1lLnRvR01UU3RyaW5nKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzYWJsZVNjcm9sbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBsZWZ0OiAzNywgdXA6IDM4LCByaWdodDogMzksIGRvd246IDQwLFxyXG4gICAgLy8gc3BhY2ViYXI6IDMyLCBwYWdldXA6IDMzLCBwYWdlZG93bjogMzQsIGVuZDogMzUsIGhvbWU6IDM2XHJcbiAgICB0aGlzLmtleXMgPSBbMzcsIDM4LCAzOSwgNDBdO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZVNjcm9sbCgpIHtcclxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLHRoaXMud2hlZWwsIGZhbHNlKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsdGhpcy50b3VjaCwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSB0aGlzLndoZWVsO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duICA9IHRoaXMua2V5ZG93bjtcclxuICB9XHJcblxyXG4gIGVuYWJsZVNjcm9sbCgpIHtcclxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLndoZWVsLCBmYWxzZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnRvdWNoLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7ICBcclxuICB9XHJcblxyXG4gIGtleWRvd24oZSkge1xyXG4gICAgdmFyIGRzID0gd2luZG93LmFwcC51LmRpc2FibGVfc2Nyb2xsO1xyXG4gICAgdmFyIGtleXMgPSBkcy5rZXlzO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSBrZXlzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBrZXlzW2ldKSB7XHJcbiAgICAgICAgZHMucmVtb3ZlRGVmYXVsdChlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdoZWVsKGUpIHtcclxuICAgIHZhciBkcyA9IHdpbmRvdy5hcHAudS5kaXNhYmxlX3Njcm9sbDtcclxuICAgIGRzLnJlbW92ZURlZmF1bHQoZSk7XHJcbiAgfVxyXG5cclxuICB0b3VjaChlKSB7XHJcbiAgICB2YXIgZHMgPSB3aW5kb3cuYXBwLnUuZGlzYWJsZV9zY3JvbGw7XHJcbiAgICBkcy5yZW1vdmVEZWZhdWx0KGUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRGVmYXVsdChlKSB7XHJcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7ICBcclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZXMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb25zb2xlKCk7ICAvL0F2b2lkIG5vIGNvbnNvbGUgZXJyb3JzXHJcbiAgICB0aGlzLmhvdmVydGFwKCk7IC8vRml4IGRvdWJsZSB0YXBwaW5nIG9uIG1vYmlsZSB3ZWJraXRcclxuICAgIC8vdGhpcy51bmRlcnNjb3JlKCk7IC8vRml4IHdlYiBzdHlsZSBkZWxpbWl0ZXJzIGluIFVTIHRlbXBsYXRlcyBpbiByYWlsc1xyXG4gICAgdGhpcy5yaXZldHMoKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUoKSB7IFxyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgbWV0aG9kO1xyXG4gICAgICB2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307XHJcbiAgICAgIHZhciBtZXRob2RzID0gW1xyXG4gICAgICAgICdhc3NlcnQnLCAnY2xlYXInLCAnY291bnQnLCAnZGVidWcnLCAnZGlyJywgJ2RpcnhtbCcsICdlcnJvcicsXHJcbiAgICAgICAgJ2V4Y2VwdGlvbicsICdncm91cCcsICdncm91cENvbGxhcHNlZCcsICdncm91cEVuZCcsICdpbmZvJywgJ2xvZycsXHJcbiAgICAgICAgJ21hcmtUaW1lbGluZScsICdwcm9maWxlJywgJ3Byb2ZpbGVFbmQnLCAndGFibGUnLCAndGltZScsICd0aW1lRW5kJyxcclxuICAgICAgICAndGltZVN0YW1wJywgJ3RyYWNlJywgJ3dhcm4nXHJcbiAgICAgIF07XHJcbiAgICAgIHZhciBsZW5ndGggPSBtZXRob2RzLmxlbmd0aDtcclxuICAgICAgdmFyIGNvbnNvbGUgPSAod2luZG93LmNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSB8fCB7fSk7XHJcblxyXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF07XHJcblxyXG4gICAgICAgIC8vIE9ubHkgc3R1YiB1bmRlZmluZWQgbWV0aG9kcy5cclxuICAgICAgICBpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlW21ldGhvZF0gPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSgpKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcclxuICAgIHZhciBsYXN0VGltZSA9IDA7XHJcbiAgICB2YXIgdmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddO1xyXG4gICAgZm9yKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cclxuICAgICAgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvcnNbeF0rJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2ssIGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcclxuICAgICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lVG9DYWxsKTtcclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhvdmVydGFwKCkge1xyXG4gICAgdmFyIGhhc190b3VjaCA9ICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCA/IHRydWUgOiBmYWxzZTtcclxuICAgIGlmKGhhc190b3VjaCkge1xyXG4gICAgICAkKCdib2R5Jykub2ZmKCdjbGljaycsJ2EsIHNwYW4sIGJ1dHRvbiwgaW5wdXQnKTtcclxuICAgICAgLy8gJCgnYm9keScpLm9uKCdjbGljaycsJ2EsIHNwYW4sIGJ1dHRvbiwgaW5wdXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIC8vICAgdmFyICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7IFxyXG4gICAgICAvLyAgIGlmKCEhJHRhcmdldC5hdHRyKCdkYXRhLXB1YicpKSB7XHJcbiAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmRlcnNjb3JlKCkge1xyXG4gICAgXy50ZW1wbGF0ZVNldHRpbmdzID0ge1xyXG4gICAgICBpbnRlcnBvbGF0ZTogL1xce1xce1xcPSguKz8pXFx9XFx9L2csXHJcbiAgICAgIGV2YWx1YXRlOiAvXFx7XFx7KC4rPylcXH1cXH0vZ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJpdmV0cygpIHtcclxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzWydlcSddID0gZnVuY3Rpb24gKHZhbHVlLCBhcmcpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09IGFyZztcclxuICAgIH1cclxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzWydsdCddID0gZnVuY3Rpb24gKHZhbHVlLCBhcmcpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlIDwgYXJnO1xyXG4gICAgfVxyXG4gICAgcml2ZXRzLmZvcm1hdHRlcnNbJ2x0ZSddID0gZnVuY3Rpb24gKHZhbHVlLCBhcmcpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlIDw9IGFyZztcclxuICAgIH1cclxuICAgIHJpdmV0cy5mb3JtYXR0ZXJzWydndCddID0gZnVuY3Rpb24gKHZhbHVlLCBhcmcpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID4gYXJnO1xyXG4gICAgfVxyXG4gICAgcml2ZXRzLmZvcm1hdHRlcnNbJ2d0ZSddID0gZnVuY3Rpb24gKHZhbHVlLCBhcmcpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID49IGFyZztcclxuICAgIH1cclxuICB9XHJcbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscGVycyB7XHJcbiAgc2x1Z2lmeSh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFx3IF0rL2csJycpLnJlcGxhY2UoLyArL2csJy0nKTtcclxuICB9XHJcblxyXG4gIGdldERvY3VtZW50V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50V2lkdGhcIl0sIGRvY3VtZW50LmJvZHlbXCJzY3JvbGxXaWR0aFwiXSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wic2Nyb2xsV2lkdGhcIl0sIGRvY3VtZW50LmJvZHlbXCJvZmZzZXRXaWR0aFwiXSwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wib2Zmc2V0V2lkdGhcIl0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RG9jdW1lbnRIZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50SGVpZ2h0XCJdLCBkb2N1bWVudC5ib2R5W1wic2Nyb2xsSGVpZ2h0XCJdLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJzY3JvbGxIZWlnaHRcIl0sIGRvY3VtZW50LmJvZHlbXCJvZmZzZXRIZWlnaHRcIl0sIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcIm9mZnNldEhlaWdodFwiXSk7XHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlc2hvdyB7XHJcbiAgY29uc3RydWN0b3IobGJveCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBsYm94LnRlbXBsYXRlcztcclxuICAgIHRoaXMub3B0aW9ucyAgID0gbGJveC5vcHRpb25zO1xyXG4gICAgLy9TZXQgdXAgc2xpZGVzaG93IGVsZW1lbnRzXHJcbiAgICB0aGlzLmVscyA9IHRoaXMuZWxlbWVudHMoKTtcclxuXHJcbiAgICAvL1NldCB1cCBzbGlkZXNob3cgc3RhdGUgdmFyc1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICAvL01hcmsgYXMgaW5pdGlhbGlzZWRcclxuICAgIHRoaXMuc3RhdGUuaW5pdGlhbGlzZWQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbml0aWFsaXNlZDpmYWxzZSxcclxuICAgICAgd3JhcCA6IHRoaXMub3B0aW9ucy53cmFwLFxyXG4gICAgICBib3ggOiB7XHJcbiAgICAgICAgd2lkdGg6IHRoaXMuZWxzLiRib3gud2lkdGgoKSxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbW92ZSgpIHtcclxuICAgIHZhciBlbHMgPSB0aGlzLmVscztcclxuICAgIGlmKGVscy4kd3JhcC5zaXplKCkgPiAwKSB7XHJcbiAgICAgIGVscy4kd3JhcC5mYWRlT3V0KDEwMDAsICgpID0+IHtcclxuICAgICAgICBlbHMuJHdyYXAucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZWxlbWVudHMoKSB7XHJcbiAgICB2YXIgdGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZXM7XHJcblxyXG4gICAgdmFyICR3cmFwID0gJCh0ZW1wbGF0ZXMubGlnaHRib3goe29wdGlvbnM6dGhpcy5vcHRpb25zfSkpO1xyXG5cclxuICAgIHZhciBlbHMgPSB7fTtcclxuICAgIGVscy4kd3JhcCA9ICR3cmFwLmFwcGVuZFRvKCQoJ2JvZHknKSk7XHJcblxyXG4gICAgZWxzLiRjbG9zZSA9IGVscy4kd3JhcC5maW5kKCcuY2xvc2UsIFtkYXRhLXB1Yn49XCJjbG9zZVwiXScpO1xyXG4gICAgZWxzLiRib3ggICA9IGVscy4kd3JhcC5maW5kKCdbZGF0YS1zdWJ+PVwibGJveC1ib3hcIl0nKTtcclxuXHJcbiAgICByZXR1cm4gZWxzO1xyXG4gIH1cclxufSIsImltcG9ydCBQcmVsb2FkIGZyb20gJy4uL3ByZWxvYWQvcHJlbG9hZCc7XHJcbmltcG9ydCBUZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMnO1xyXG5pbXBvcnQgTGlzdGVuZXJzIGZyb20gJy4vbGlzdGVuZXJzJztcclxuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IEJ1aWxkIGZyb20gJy4vYnVpbGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGJveCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG92ZXJyaWRlcyA9IHt9KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgICA9IG5ldyBPcHRpb25zKHRoaXMsIG92ZXJyaWRlcyk7XHJcbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZXModGhpcyk7XHJcbiAgICB0aGlzLmJ1aWxkICAgICA9IG5ldyBCdWlsZCh0aGlzKTtcclxuXHJcbiAgICAvL0FkZCBsaXN0ZW5lcnNcclxuICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IExpc3RlbmVycyh0aGlzKTtcclxuXHJcbiAgICBpZiAodHlwZW9mKHRoaXMub3B0aW9ucy5jYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHRoaXMub3B0aW9ucy5jYWxsYmFjayh0aGlzLmJ1aWxkKTtcclxuXHJcbiAgfVxyXG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RlbmVycyB7XHJcbiAgY29uc3RydWN0b3IobGJveCkge1xyXG4gICAgdGhpcy5sYm94ID0gbGJveDtcclxuXHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHZhciBidWlsZCA9IHRoaXMubGJveC5idWlsZDtcclxuXHJcbiAgICAvL1JlbW92ZSBvbiBlc2NhcGVcclxuICAgICQoJ2JvZHknKS5rZXl1cCgoZSkgPT4gIHtcclxuICAgICAgaWYgKGUud2hpY2ggPT0gMjcpIHtcclxuICAgICAgICBidWlsZC5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGJ1aWxkLmVscy4kY2xvc2Uub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgYnVpbGQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIHtcclxuICBjb25zdHJ1Y3RvcihsYm94LCBvdmVycmlkZXMpIHtcclxuICAgIHJldHVybiAkLmV4dGVuZCh0cnVlLCB7XHJcbiAgICAgIHdyYXAgICA6IHRydWUsXHJcbiAgICAgIG1pbl93aWR0aDogNTAwLFxyXG4gICAgICBjb250ZW50OiAnJyxcclxuICAgICAgY2FsbGJhY2sgOiBmYWxzZVxyXG4gICAgfSwgb3ZlcnJpZGVzKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZXMge1xyXG4gIGNvbnN0cnVjdG9yKGxib3gpIHtcclxuICAgIHRoaXMub3B0aW9ucyAgPSBsYm94Lm9wdGlvbnM7XHJcbiAgICB2YXIgdGVtcGxhdGVzID0ge307XHJcblxyXG4gICAgdGVtcGxhdGVzLmxpZ2h0Ym94ICA9IHRoaXMubGlnaHRib3goKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xyXG4gIH1cclxuXHJcbiAgbGlnaHRib3goKSB7XHJcbiAgICByZXR1cm4gXy50ZW1wbGF0ZShgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsYm94LXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGJveC1ib3hcIiBkYXRhLXN1Yj1cImxib3gtYm94XCI+XHJcbiAgICAgICAgICA8JT0gb3B0aW9ucy5jb250ZW50ICU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvL3RoaXMucHViKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YigpIHtcclxuICAgIHZhciAkZm9ybSA9ICQoJyNuZXdzbGV0dGVyJyk7XHJcblxyXG4gICAgLy9PbiBjbGljayBzZW5kIG9wZW4gJ2Nhc3RcclxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc29sZS5sb2coJ2Jyb2FkY2FzdCBuZXdzbGV0dGVyIHNpZ251cCcpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJhZGlvKCdhY3Rpb24vbmV3c2xldHRlcicpLmJyb2FkY2FzdCh7XHJcbiAgICAgICAgYWN0aW9uIDogJ3NpZ251cCcsXHJcbiAgICAgICAgZXZlbnQgOiBlLFxyXG4gICAgICAgICRmb3JtIDogJGZvcm1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc3ViKCkge1xyXG4gICAgcmFkaW8oJ2FjdGlvbi9uZXdzbGV0dGVyJykuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIHZhciAkZm9ybSAgICA9IGRhdGEuJGZvcm07XHJcbiAgICAgIHZhciAkc3VjY2VzcyA9ICRmb3JtLmZpbmQoJy5zdWNjZXNzJyk7XHJcbiAgICAgIHZhciAkZXJyb3IgICA9ICRmb3JtLmZpbmQoJy5lcnJvcicpO1xyXG5cclxuICAgICAgdmFyIGFjdGlvbiA9IFN0cmluZygkZm9ybS5hdHRyKCdhY3Rpb24nKSk7XHJcblxyXG4gICAgICAkZXJyb3IuaGlkZSgpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIHVybDogYWN0aW9uLFxyXG4gICAgICAgIGRhdGE6ICRmb3JtLnNlcmlhbGl6ZSgpLFxyXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICBhbGVydChcIkNvdWxkIG5vdCBjb25uZWN0IHRvIHRoZSByZWdpc3RyYXRpb24gc2VydmVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgaWYgKGRhdGEucmVzdWx0ICE9IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nLCBkbyBzb21ldGhpbmcgdG8gbm90aWZ5IHRoZSB1c2VyLiBtYXliZSBhbGVydChkYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICRlcnJvci50ZXh0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJykuc2hvdygpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSXQgd29ya2VkLCBjYXJyeSBvbi4uLlxyXG4gICAgICAgICAgICAkZm9ybS5maW5kKCdpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICRzdWNjZXNzLnNob3coKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9maWxlcyA9IFtdO1xyXG5cclxuICAgIC8vQ3JlYXRlIHByZWxvYWQgZGl2XHJcbiAgICBpZiAoISQoJyNwcmVsb2FkJykuaXMoJyonKSkge1xyXG4gICAgICB0aGlzLiRwcmVsb2FkID0gJCgnPGRpdiBpZD1cInByZWxvYWRcIiAvPicpLmFwcGVuZFRvKCdib2R5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiRwcmVsb2FkID0gJCgnI3ByZWxvYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiRwcmVsb2FkLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIGZpbGVzKG9wdHMpIHtcclxuICAgIHRoaXMuX2ZpbGVzID0gb3B0cy5zcmM7XHJcblxyXG4gICAgdmFyIGZpbGUgPSB0aGlzLl9maWxlcy5zaGlmdCgpO1xyXG4gICAgaWYgKHR5cGVvZihmaWxlKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmZpbGUoe1xyXG4gICAgICAgIHNyYzpmaWxlLFxyXG4gICAgICAgIGNhbGxiYWNrOiAoZCkgPT4ge1xyXG4gICAgICAgICAgLy9HbyB0byB0aGUgbmV4dCBmaWxlXHJcbiAgICAgICAgICB0aGlzLmZpbGVzKHtcclxuICAgICAgICAgICAgc3JjOiB0aGlzLl9maWxlcywgXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBvcHRzLmNhbGxiYWNrXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3J1biBjYWxsYmFjayEnKTtcclxuICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICBpZih0eXBlb2Yob3B0cy5jYWxsYmFjaykgIT0gJ3VuZGVmaW5lZCcpIG9wdHMuY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbGUob3B0cykge1xyXG4gICAgdmFyIHNyYyAgICA9IG9wdHMuc3JjLnJlcGxhY2UoL1xcXCIvZywgJyAnKTtcclxuICAgIHZhciB0eXBlICAgPSB0aGlzLmdldEZpbGVUeXBlKG9wdHMuc3JjKTtcclxuICAgIHZhciAkcCAgICAgPSB0aGlzLiRwcmVsb2FkO1xyXG4gICAgdmFyIGhhc19jYiA9ICh0eXBlb2Yob3B0cy5jYWxsYmFjaykgIT0gJ3VuZGVmaW5lZCcpO1xyXG5cclxuICAgIC8vQmFpbCBpZiB3ZSBkb24ndCByZWNvZ25pc2UgdGhlIHR5cGVcclxuICAgIGlmKHR5cGUgPT0gZmFsc2UpIHtcclxuICAgICAgb3B0cy5jYWxsYmFjayhkKTsgXHJcbiAgICAvL0hhbmRsZSB0eXBlc1xyXG4gICAgfSBlbHNlIGlmKHR5cGUgPT0gJ2ltZycpIHtcclxuICAgICAgdmFyICRmaWxlID0gJCgnPGltZyAvPicpXHJcbiAgICAgICAgLmF0dHIoJ3NyYycsIHNyYylcclxuICAgICAgICAuYXBwZW5kVG8oJHApO1xyXG5cclxuICAgICAgaWYoaGFzX2NiKSB7XHJcbiAgICAgICAgJGZpbGUub24oJ2xvYWQnLCAoZCkgPT4ge1xyXG4gICAgICAgICAgIG9wdHMuY2FsbGJhY2soZCk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYodHlwZSA9PSAnanMnKSB7XHJcbiAgICAgICQuZ2V0U2NyaXB0KCBzcmMsIChkKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRlZCBqcycpO1xyXG4gICAgICAgIGlmKGhhc19jYikgb3B0cy5jYWxsYmFjayhkKTsgXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmKHR5cGUgPT0gJ2NzcycpIHtcclxuICAgICAgdmFyICRmaWxlID0gJCgnPGxpbmsgLz4nKVxyXG4gICAgICAgIC5hdHRyKCdocmVmJywgc3JjKVxyXG4gICAgICAgIC5hdHRyKCdyZWwnLCAnc3R5bGVzaGVldCcpXHJcbiAgICAgICAgLmFwcGVuZFRvKCRwKTtcclxuXHJcbiAgICAgIGlmKGhhc19jYikge1xyXG4gICAgICAgICRmaWxlLmxvYWQoKGQpID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2xvYWRlZCBjc3MnKTtcclxuICAgICAgICAgICBvcHRzLmNhbGxiYWNrKGQpOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW1hZ2Uob3B0cykge1xyXG4gICAgdGhpcy5maWxlKG9wdHMpO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VzKG9wdHMpIHtcclxuICAgIHRoaXMuZmlsZXMob3B0cyk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuX2ltYWdlcyA9IFtdO1xyXG4gICAgJCgnI3ByZWxvYWQgaW1nJykucmVtb3ZlKCk7XHJcbiAgICAkKCcjcHJlbG9hZCBzY3JpcHQnKS5yZW1vdmUoKTtcclxuICAgICQoJyNwcmVsb2FkIHN0eWxlJykucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWxlVHlwZShzcmMpIHtcclxuICAgIHZhciBleHQgPSBzcmMuc3Vic3RyKChzcmMubGFzdEluZGV4T2YoJy4nKSArIDEpKTtcclxuICAgIGlmKC8oanMpJC9pZy50ZXN0KGV4dCkpIHtcclxuICAgICAgcmV0dXJuICdqcyc7XHJcbiAgICB9IGVsc2UgaWYgKC8oY3NzKSQvaWcudGVzdChleHQpKSB7XHJcbiAgICAgIHJldHVybiAnY3NzJztcclxuICAgIH0gZWxzZSBpZiAoLyhqcGd8cG5nfGdpZikkL2lnLnRlc3QoZXh0KSkge1xyXG4gICAgICByZXR1cm4gJ2ltZyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RlbmVycyB7XHJcbiAgY29uc3RydWN0b3IocWJveCkge1xyXG4gICAgdGhpcy5xYm94ID0gcWJveDtcclxuXHJcbiAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB0aGlzLm5hdmlnYXRlKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHZhciBzbGlkZXNob3cgPSB0aGlzLnFib3guc2xpZGVzaG93O1xyXG5cclxuICAgIC8vUmVtb3ZlIG9uIGVzY2FwZVxyXG4gICAgJCgnYm9keScpLmtleXVwKChlKSA9PiAge1xyXG4gICAgICBpZiAoZS53aGljaCA9PSAyNykge1xyXG4gICAgICAgIHNsaWRlc2hvdy5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHNsaWRlc2hvdy5lbHMuJGNsb3NlLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHNsaWRlc2hvdy5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGUoKSB7XHJcbiAgICB2YXIgc2xpZGVzaG93ID0gdGhpcy5xYm94LnNsaWRlc2hvdztcclxuICAgIC8vSGlkZSBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzbGlkZVxyXG4gICAgdmFyICRuZXh0ID0gc2xpZGVzaG93LmVscy4kbmV4dDtcclxuICAgIHZhciAkcHJldiA9IHNsaWRlc2hvdy5lbHMuJHByZXY7XHJcblxyXG4gICAgLy9EaXJlY3Rpb24gbGlzdGVuZXJzXHJcbiAgICAkbmV4dC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBzbGlkZXNob3cubmV4dCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICRwcmV2Lm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHNsaWRlc2hvdy5wcmV2KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zIHtcclxuICBjb25zdHJ1Y3RvcihxYm94LCBvdmVycmlkZXMpIHtcclxuICAgIHJldHVybiAkLmV4dGVuZCh7XHJcbiAgICAgIHNsaWRlcyA6IFtdLFxyXG4gICAgICBzdGFydCAgOiAwLFxyXG4gICAgICB3cmFwICAgOiB0cnVlLFxyXG4gICAgICBtb2RlICAgOiAnZmFkZScsXHJcbiAgICAgIHRhZyAgICA6IHt9LFxyXG4gICAgICBtaW5fd2lkdGg6IDUwMCxcclxuICAgICAgY2FsbGJhY2sgOiBmYWxzZVxyXG4gICAgfSwgb3ZlcnJpZGVzKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgUHJlbG9hZCBmcm9tICcuLi9wcmVsb2FkL3ByZWxvYWQnO1xyXG5pbXBvcnQgVGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzJztcclxuaW1wb3J0IExpc3RlbmVycyBmcm9tICcuL2xpc3RlbmVycyc7XHJcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XHJcbmltcG9ydCBTbGlkZXNob3cgZnJvbSAnLi9zbGlkZXNob3cnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUWJveCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKG92ZXJyaWRlcyA9IHt9KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgICA9IG5ldyBPcHRpb25zKHRoaXMsIG92ZXJyaWRlcyk7XHJcbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZXModGhpcyk7XHJcbiAgICB0aGlzLnNsaWRlc2hvdyA9IG5ldyBTbGlkZXNob3codGhpcyk7XHJcblxyXG4gICAgLy9BZGQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBMaXN0ZW5lcnModGhpcyk7XHJcblxyXG4gICAgaWYgKHR5cGVvZih0aGlzLm9wdGlvbnMuY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB0aGlzLm9wdGlvbnMuY2FsbGJhY2sodGhpcy5zbGlkZXNob3cpO1xyXG5cclxuICB9ICBcclxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXNob3cge1xyXG4gIGNvbnN0cnVjdG9yKHFib3gpIHtcclxuICAgIHRoaXMudGVtcGxhdGVzID0gcWJveC50ZW1wbGF0ZXM7XHJcbiAgICB0aGlzLm9wdGlvbnMgICA9IHFib3gub3B0aW9ucztcclxuXHJcbiAgICAvL1NldCB1cCBzbGlkZXNob3cgZWxlbWVudHNcclxuICAgIHRoaXMuZWxzID0gdGhpcy5lbGVtZW50cygpO1xyXG5cclxuICAgIC8vU2V0IHVwIHNsaWRlc2hvdyBzdGF0ZSB2YXJzXHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIGlmKHRoaXMub3B0aW9ucy5tb2RlID09ICdmYWRlJykge1xyXG4gICAgICB0aGlzLmVscy4kc2xpZGVzLmNzcyh7XHJcbiAgICAgICAgJ3otaW5kZXgnOjUsXHJcbiAgICAgICAgICBvcGFjaXR5OjBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9oaWRlIGNvbnRyb2xzIGlmIG9ubHkgb25lIHNsaWRlXHJcbiAgICBpZih0aGlzLnN0YXRlLm1heCA9PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxzLiRuZXh0KTtcclxuICAgICAgdGhpcy5lbHMuJG5leHQuaGlkZSgpO1xyXG4gICAgICB0aGlzLmVscy4kcHJldi5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3QodGhpcy5zdGF0ZS5zbGlkZSk7XHJcblxyXG4gICAgLy9NYXJrIGFzIGlpdGlhbGlzZWRcclxuICAgIHRoaXMuc3RhdGUuaW5pdGlhbGlzZWQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzbGlkZTp0aGlzLm9wdGlvbnMuc2xpZGUsXHJcbiAgICAgIG1heDp0aGlzLm9wdGlvbnMuc2xpZGVzLmxlbmd0aCAtIDEsXHJcbiAgICAgIGluaXRpYWxpc2VkOmZhbHNlLFxyXG4gICAgICB3cmFwIDogdGhpcy5vcHRpb25zLndyYXAsXHJcbiAgICAgIGJveCA6IHtcclxuICAgICAgICB3aWR0aDogdGhpcy5lbHMuJGJveC53aWR0aCgpLFxyXG4gICAgICB9LFxyXG4gICAgICBnYWxsZXJ5IDoge1xyXG4gICAgICAgIHdpZHRoIDogdGhpcy5lbHMuJGJveC53aWR0aCgpICogdGhpcy5vcHRpb25zLnNsaWRlcy5sZW5ndGhcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG5leHQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdCh0aGlzLnN0YXRlLnNsaWRlICsgMSk7XHJcbiAgfVxyXG5cclxuICBwcmV2KCkge1xyXG4gICAgdGhpcy5zZWxlY3QodGhpcy5zdGF0ZS5zbGlkZSAtIDEpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KG5ld19zbGlkZSkge1xyXG4gICAgLy9IYW5kbGUgd3JhcHBpbmcgYXJvdW5kXHJcbiAgICB2YXIgZGlyZWN0aW9uID0gKG5ld19zbGlkZSA+IHRoaXMuc3RhdGUuc2xpZGUpID8gJ25leHQnOidwcmV2JztcclxuICAgIHZhciBuZXdfc2xpZGUgPSB0aGlzLnZhbGlkYXRlU2VsZWN0KG5ld19zbGlkZSk7XHJcblxyXG4gICAgaWYodGhpcy5vcHRpb25zLm1vZGUgPT0gJ2ZhZGUnKSB7XHJcbiAgICAgIHZhciB0aGlzX3NsaWRlID0gdGhpcy52YWxpZGF0ZVNlbGVjdChuZXdfc2xpZGUpO1xyXG4gICAgICB2YXIgcHJldl9zbGlkZSA9IHRoaXMudmFsaWRhdGVTZWxlY3QobmV3X3NsaWRlIC0gMSk7XHJcblxyXG4gICAgICBpZihkaXJlY3Rpb24gPT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgcHJldl9zbGlkZSA9IHRoaXMudmFsaWRhdGVTZWxlY3QobmV3X3NsaWRlICsgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciAkcHJldiA9IHRoaXMuZWxzLiRzbGlkZXMuZmlsdGVyKGBbZGF0YS1zbGlkZT1cIiR7cHJldl9zbGlkZX1cIl1gKTtcclxuICAgICAgdmFyICR0aGlzID0gdGhpcy5lbHMuJHNsaWRlcy5maWx0ZXIoYFtkYXRhLXNsaWRlPVwiJHt0aGlzX3NsaWRlfVwiXWApO1xyXG5cclxuICAgICAgJHByZXYuY3NzKHtcclxuICAgICAgICAnei1pbmRleCc6MTBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkdGhpcy5jc3Moe1xyXG4gICAgICAgICd6LWluZGV4JzoyMCxcclxuICAgICAgICAnb3BhY2l0eSc6MFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICR0aGlzLmFuaW1hdGUoe1xyXG4gICAgICAgICdvcGFjaXR5JzoxXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAkcHJldi5jc3Moe1xyXG4gICAgICAgICAgICAnei1pbmRleCc6NVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1VwZGF0ZSBwYWdlclxyXG4gICAgdmFyIHBhZF9zbGlkZSA9IHRoaXMubGVmdFBhZChuZXdfc2xpZGUrMSwyKTtcclxuICAgIHZhciBwYWRfbWF4ICAgPSB0aGlzLmxlZnRQYWQodGhpcy5zdGF0ZS5tYXgrMSwyKTtcclxuICAgIHRoaXMuZWxzLiRwYWdlci50ZXh0KGAke3BhZF9zbGlkZX0vJHtwYWRfbWF4fWApO1xyXG4gICAgXHJcbiAgICB0aGlzLnN0YXRlLnNsaWRlID0gbmV3X3NsaWRlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdmFyIGVscyA9IHRoaXMuZWxzO1xyXG4gICAgaWYoZWxzLiR3cmFwLnNpemUoKSA+IDApIHtcclxuICAgICAgZWxzLiR3cmFwLmZhZGVPdXQoMTAwMCwgKCkgPT4ge1xyXG4gICAgICAgIGVscy4kd3JhcC5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVNlbGVjdChzKSB7XHJcbiAgICB2YXIgcmV0ICAgPSBzO1xyXG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZihzdGF0ZS53cmFwKSB7XHJcbiAgICAgIGlmKHMgPCAwKSByZXQgPSBzdGF0ZS5tYXg7XHJcbiAgICAgIGlmKHMgPiBzdGF0ZS5tYXgpIHJldCA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZihzIDwgMCB8fCBzID4gc3RhdGUubWF4KSByZXQgPSBmYWxzZTsgLy9Eb24ndCBkbyBhbnl0aGluZ1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBlbGVtZW50cygpIHtcclxuICAgIHZhciB0ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlc1xyXG4gICAgdmFyIG9wdGlvbnMgICA9IHRoaXMub3B0aW9uc1xyXG5cclxuICAgIHZhciBpbm5lciA9IHRlbXBsYXRlcy5zbGlkZXNob3coe1xyXG4gICAgICBtb2RlICAgOiBvcHRpb25zLm1vZGUsXHJcbiAgICAgIHNsaWRlcyA6IG9wdGlvbnMuc2xpZGVzXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgJHdyYXAgPSAkKHRlbXBsYXRlcy5saWdodGJveCh7XHJcbiAgICAgIHNsaWRlc2hvdzppbm5lclxyXG4gICAgfSkpO1xyXG5cclxuICAgIHZhciBlbHMgPSB7fTtcclxuICAgIGVscy4kd3JhcCA9ICR3cmFwLmFwcGVuZFRvKCQoJ2JvZHknKSk7XHJcblxyXG4gICAgZWxzLiRjbG9zZSAgID0gZWxzLiR3cmFwLmZpbmQoJy5jbG9zZSwgW2RhdGEtcHVifj1cImNsb3NlXCJdJyk7XHJcbiAgICBlbHMuJG5leHQgICAgPSBlbHMuJHdyYXAuZmluZCgnW2RhdGEtcHVifj1cIm5leHQtc2xpZGVcIl0nKTtcclxuICAgIGVscy4kcHJldiAgICA9IGVscy4kd3JhcC5maW5kKCdbZGF0YS1wdWJ+PVwicHJldi1zbGlkZVwiXScpO1xyXG4gICAgZWxzLiRwYWdlciAgID0gZWxzLiR3cmFwLmZpbmQoJ1tkYXRhLXN1Yn49XCJwYWdlclwiXScpO1xyXG4gICAgZWxzLiRzbGlkZXMgID0gZWxzLiR3cmFwLmZpbmQoJ1tkYXRhLXN1Yn49XCJzbGlkZVwiXScpO1xyXG4gICAgZWxzLiRnYWxsZXJ5ID0gZWxzLiR3cmFwLmZpbmQoJ1tkYXRhLXN1Yn49XCJnYWxsZXJ5XCJdJyk7XHJcbiAgICBlbHMuJGJveCAgICAgPSBlbHMuJHdyYXAuZmluZCgnW2RhdGEtc3Vifj1cImJveFwiXScpO1xyXG4gICAgZWxzLiR0YWcgICAgID0gZWxzLiR3cmFwLmZpbmQoJ1tkYXRhLXN1Yn49XCJ0YWdcIl0nKTtcclxuXHJcbiAgICByZXR1cm4gZWxzO1xyXG4gIH1cclxuXHJcbiAgbGVmdFBhZChuLCB3aWR0aCwgeikge1xyXG4gICAgeiA9IHogfHwgJzAnO1xyXG4gICAgbiA9IG4gKyAnJztcclxuICAgIHJldHVybiBuLmxlbmd0aCA+PSB3aWR0aCA/IG4gOiBuZXcgQXJyYXkod2lkdGggLSBuLmxlbmd0aCArIDEpLmpvaW4oeikgKyBuO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlcyB7XHJcbiAgY29uc3RydWN0b3IocWJveCkge1xyXG4gICAgdGhpcy5vcHRpb25zID0gcWJveC5vcHRpb25zO1xyXG5cclxuICAgIHZhciB0ZW1wbGF0ZXMgPSB7fTtcclxuICAgIHRlbXBsYXRlcy5saWdodGJveCAgPSB0aGlzLmxpZ2h0Ym94KCk7XHJcbiAgICB0ZW1wbGF0ZXMuc2xpZGVzaG93ID0gdGhpcy5zbGlkZXNob3coKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xyXG4gIH1cclxuXHJcbiAgbGlnaHRib3goKSB7XHJcbiAgICByZXR1cm4gXy50ZW1wbGF0ZShgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxYm94LXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicWJveC1ib3hcIiBkYXRhLXN1Yj1cImJveFwiPlxyXG4gICAgICAgICAgPCU9IHNsaWRlc2hvdyAlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxYm94LWNvbnRyb2xzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dFwiIGRhdGEtcHViPVwibmV4dC1zbGlkZVwiPk5leHQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2XCIgZGF0YS1wdWI9XCJwcmV2LXNsaWRlXCI+UHJldjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlXCIgZGF0YS1wdWI9XCJjbG9zZVwiPkNsb3NlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZXItd3JhcFwiPjxkaXYgY2xhc3M9XCJwYWdlclwiPjxkaXYgY2xhc3M9XCJpbm5lclwiIGRhdGEtc3ViPVwicGFnZXJcIj48L2Rpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgKTtcclxuICB9XHJcbiAgc2xpZGVzaG93KCkge1xyXG4gICAgcmV0dXJuIF8udGVtcGxhdGUoYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicWJveC1nYWxsZXJ5XCIgZGF0YS1zdWI9XCJnYWxsZXJ5XCIgZGF0YS1tb2RlPVwiPCU9IG1vZGUgJT5cIj5cclxuICAgICAgICA8JSBfLmVhY2goc2xpZGVzLCAoc2xpZGUsIGluZGV4KSA9PiB7ICU+PGRpdiBjbGFzcz1cInNsaWRlXCIgZGF0YS1zdWI9XCJzbGlkZVwiICBkYXRhLXNsaWRlPVwiPCU9IGluZGV4ICU+XCI+XHJcbiAgICAgICAgICAgIDwlPSBzbGlkZS5odG1sICU+XHJcbiAgICAgICAgPC9kaXY+PCUgfSkgJT5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQdWIge1xyXG4gIGNvbnN0cnVjdG9yKHV0aWxzKSB7XHJcbiAgICB0aGlzLnUgPSB1dGlscztcclxuXHJcbiAgICAvL0dldCBhbmltYXRpb24gZnJhbWVcclxuICAgIHRoaXMucmFmID0gdXRpbHMuZml4ZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XHJcbiAgICB0aGlzLmdkaCA9IHV0aWxzLmhlbHBlcnMuZ2V0RG9jdW1lbnRIZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5fcyA9IHtcclxuICAgICAgJHdpbmRvdyA6ICQod2luZG93KSxcclxuICAgICAgc2Nyb2xsIDoge1xyXG4gICAgICAgIHRvcCA6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2l6ZSA6IHtcclxuICAgICAgICB3aWR0aCA6IHt9LFxyXG4gICAgICAgIGhlaWdodCA6IHt9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRvY3VtZW50IDoge1xyXG4gICAgICAgIGhlaWdodCA6IHt9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9Jbml0aWFsaXNlIHN0YXRlIHZhcmlhYmxlc1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgIC8vc3RhcnQgbG9vcFxyXG4gICAgdGhpcy5sb29wKCk7XHJcblxyXG4gICAgLy9mb3JjZSBldmVudHMgdG8gZmlyZSBhIGZldyB0aW1lc1xyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkIHJlYWR5JywgKGUpID0+IHt0aGlzLnJlc2V0KCk7fSk7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuX3Muc2Nyb2xsLnRvcC5vbGQgICAgICA9IC0xO1xyXG4gICAgdGhpcy5fcy5yZXNpemUud2lkdGgub2xkICAgID0gLTE7XHJcbiAgICB0aGlzLl9zLnJlc2l6ZS5oZWlnaHQub2xkICAgPSAtMTtcclxuICAgIHRoaXMuX3MuZG9jdW1lbnQuaGVpZ2h0Lm9sZCA9IC0xO1xyXG5cclxuICAgIHRoaXMuX3Muc2Nyb2xsLnRvcC5jdXJyZW50ICAgICAgPSAwO1xyXG4gICAgdGhpcy5fcy5yZXNpemUud2lkdGguY3VycmVudCAgICA9IDA7XHJcbiAgICB0aGlzLl9zLnJlc2l6ZS5oZWlnaHQuY3VycmVudCAgID0gMDtcclxuICAgIHRoaXMuX3MuZG9jdW1lbnQuaGVpZ2h0LmN1cnJlbnQgPSAwO1xyXG5cclxuICAgIHRoaXMuX3Muc2Nyb2xsLnRvcC5kaXJlY3Rpb24gICAgICA9ICdub25lJztcclxuICAgIHRoaXMuX3MucmVzaXplLndpZHRoLmRpcmVjdGlvbiAgICA9ICdub25lJztcclxuICAgIHRoaXMuX3MucmVzaXplLmhlaWdodC5kaXJlY3Rpb24gICA9ICdub25lJztcclxuICB9XHJcblxyXG4gIGxvb3AoKSB7XHJcbiAgICB2YXIgJHdpbmRvdyA9IHRoaXMuX3MuJHdpbmRvdztcclxuXHJcbiAgICAvL0V4aXN0aW5nIHZhcmlhYmxlc1xyXG4gICAgdmFyIG9sZF90b3AgICAgPSB0aGlzLl9zLnNjcm9sbC50b3Aub2xkO1xyXG4gICAgdmFyIG9sZF93aWR0aCAgPSB0aGlzLl9zLnJlc2l6ZS53aWR0aC5vbGQ7XHJcbiAgICB2YXIgb2xkX2hlaWdodCA9IHRoaXMuX3MucmVzaXplLmhlaWdodC5vbGQ7XHJcbiAgICB2YXIgb2xkX2RvY3VtZW50X2hlaWdodCA9IHRoaXMuX3MuZG9jdW1lbnQuaGVpZ2h0Lm9sZDtcclxuXHJcbiAgICAvL05ldyB2YXJpYWJsZXNcclxuICAgIHZhciBuZXdfdG9wICAgID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgdmFyIG5ld193aWR0aCAgPSAkd2luZG93LndpZHRoKCk7XHJcbiAgICB2YXIgbmV3X2hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XHJcbiAgICB2YXIgbmV3X2RvY3VtZW50X2hlaWdodCA9IHRoaXMuZ2RoKCk7XHJcblxyXG4gICAgLy9TY3JvbGwgZXZlbnRzXHJcbiAgICBpZihvbGRfdG9wICE9IG5ld190b3ApIHtcclxuICAgICAgLy9TZXQgdmFyaWFibGVzXHJcbiAgICAgIHRoaXMuX3Muc2Nyb2xsLnRvcC5jdXJyZW50ICAgPSBuZXdfdG9wO1xyXG4gICAgICB0aGlzLl9zLnNjcm9sbC50b3AuZGlyZWN0aW9uID0gKG5ld190b3AgPiBvbGRfdG9wKSA/ICdkb3duJyA6ICd1cCc7XHJcblxyXG4gICAgICAvL0ZpcmUgZXZlbnRcclxuICAgICAgdGhpcy5zY3JvbGxQdWIoKTtcclxuXHJcbiAgICAgIC8vU2V0IG9sZCB2YXJpYWJsZXNcclxuICAgICAgdGhpcy5fcy5zY3JvbGwudG9wLm9sZCAgICA9IG5ld190b3A7XHJcbiAgICB9XHJcblxyXG4gICAgLy9SZXNpemUgZXZlbnRzXHJcbiAgICBpZihvbGRfd2lkdGggIT0gbmV3X3dpZHRoIHx8IG9sZF9oZWlnaHQgIT0gbmV3X2hlaWdodCkge1xyXG4gICAgICAvL1NldCB2YXJpYWJsZXNcclxuICAgICAgdGhpcy5fcy5yZXNpemUud2lkdGguY3VycmVudCAgICA9IG5ld193aWR0aDtcclxuICAgICAgdGhpcy5fcy5yZXNpemUuaGVpZ2h0LmN1cnJlbnQgICA9IG5ld19oZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLl9zLnJlc2l6ZS53aWR0aC5kaXJlY3Rpb24gID0gKG5ld193aWR0aCA+IG9sZF93aWR0aCkgICA/ICdtb3JlJyA6ICdsZXNzJztcclxuICAgICAgdGhpcy5fcy5yZXNpemUuaGVpZ2h0LmRpcmVjdGlvbiA9IChuZXdfaGVpZ2h0ID4gb2xkX2hlaWdodCkgPyAnbW9yZScgOiAnbGVzcyc7XHJcblxyXG4gICAgICAvL0ZpcmUgZXZlbnRcclxuICAgICAgdGhpcy5yZXNpemVQdWIoKTtcclxuXHJcbiAgICAgIC8vU2V0IG9sZCB2YXJpYWJsZXNcclxuICAgICAgdGhpcy5fcy5yZXNpemUud2lkdGgub2xkICA9IG5ld193aWR0aDtcclxuICAgICAgdGhpcy5fcy5yZXNpemUuaGVpZ2h0Lm9sZCA9IG5ld19oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9MYXlvdXQgZXZlbnRzXHJcbiAgICBpZihvbGRfZG9jdW1lbnRfaGVpZ2h0ICE9IG5ld19kb2N1bWVudF9oZWlnaHQpIHtcclxuICAgICAgLy9TZXQgdmFyaWFibGVzXHJcbiAgICAgIHRoaXMuX3MuZG9jdW1lbnQuaGVpZ2h0LmN1cnJlbnQgPSBuZXdfZG9jdW1lbnRfaGVpZ2h0O1xyXG5cclxuICAgICAgLy9GaXJlIGV2ZW50XHJcbiAgICAgIHRoaXMubGF5b3V0UHViKCk7XHJcblxyXG4gICAgICAvL1NldCBvbGQgdmFyaWFibGVzXHJcbiAgICAgIHRoaXMuX3MuZG9jdW1lbnQuaGVpZ2h0Lm9sZCA9IG5ld19kb2N1bWVudF9oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Mb29wXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB7XHJcbiAgICAgIHRoaXMubG9vcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxQdWIoKSB7XHJcbiAgICByYWRpbygnd2luZG93L3Njcm9sbCcpLmJyb2FkY2FzdCh7XHJcbiAgICAgIHNjcm9sbF90b3AgOiB0aGlzLl9zLnNjcm9sbC50b3AuY3VycmVudCxcclxuICAgICAgc2Nyb2xsX2RpcmVjdGlvbiAgOiB0aGlzLl9zLnNjcm9sbC50b3AuZGlyZWN0aW9uLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNpemVQdWIoKSB7XHJcbiAgICByYWRpbygnd2luZG93L3Jlc2l6ZScpLmJyb2FkY2FzdCh7XHJcbiAgICAgIHdpZHRoICA6IHRoaXMuX3MucmVzaXplLndpZHRoLmN1cnJlbnQsXHJcbiAgICAgIGhlaWdodCA6IHRoaXMuX3MucmVzaXplLmhlaWdodC5jdXJyZW50LFxyXG4gICAgICB3aWR0aF9kaXJlY3Rpb24gIDogdGhpcy5fcy5yZXNpemUud2lkdGguZGlyZWN0aW9uLFxyXG4gICAgICBoZWlnaHRfZGlyZWN0aW9uIDogdGhpcy5fcy5yZXNpemUuaGVpZ2h0LmRpcmVjdGlvbixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGF5b3V0UHViKCkge1xyXG4gICAgcmFkaW8oJ3dpbmRvdy9sYXlvdXQnKS5icm9hZGNhc3Qoe1xyXG4gICAgICBoZWlnaHQgIDogdGhpcy5fcy5kb2N1bWVudC5oZWlnaHQuY3VycmVudCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
