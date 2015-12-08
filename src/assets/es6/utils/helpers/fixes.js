export default class Fixes {
  constructor() {
    this.console();  //Avoid no console errors
    this.hovertap(); //Fix double tapping on mobile webkit
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

  hovertap() {
    $('body').on('touchend','a, span, button, input', function(e) {
      $(e.currentTarget).trigger('click');
    });
  }
} 