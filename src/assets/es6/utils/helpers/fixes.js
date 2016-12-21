export default class Fixes {
  constructor() {
    this.console();  //Avoid no console errors
    this.hovertap(); //Fix double tapping on mobile webkit
    //this.underscore(); //Fix web style delimiters in US templates in rails
    this.rivets();
  }

  console() { 
    (function() {
      var method;
      var noop = function() {};
      var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
      ];
      var length = methods.length;
      var console = (window.console = window.console || {});

      while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
      }
    }());
  }

  requestAnimationFrame() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame =
      window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                                   timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    }
  }

  hovertap() {
    var has_touch = 'ontouchend' in document ? true : false;
    if(has_touch) {
      $('body').off('click','a, span, button, input');
      // $('body').on('click','a, span, button, input', function(e) {
      //   var $target = $(e.currentTarget); 
      //   if(!!$target.attr('data-pub')) {
      //     e.preventDefault();
      //     e.stopPropagation();
      //   }
      // });
    }
  }

  underscore() {
    _.templateSettings = {
      interpolate: /\{\{\=(.+?)\}\}/g,
      evaluate: /\{\{(.+?)\}\}/g
    };
  }

  rivets() {
    rivets.formatters['eq'] = function (value, arg) {
      return value == arg;
    }
    rivets.formatters['lt'] = function (value, arg) {
      return value < arg;
    }
    rivets.formatters['lte'] = function (value, arg) {
      return value <= arg;
    }
    rivets.formatters['gt'] = function (value, arg) {
      return value > arg;
    }
    rivets.formatters['gte'] = function (value, arg) {
      return value >= arg;
    }
  }
} 