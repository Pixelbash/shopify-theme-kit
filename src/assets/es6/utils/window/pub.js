export default class Pub {
  constructor() {
    // this.scroll();
    // this.resize();
    // this.load();
  }
  
  scroll() {
    var $window = $(window);

    $window.on('load scroll', function() {
      radio('window/scroll').broadcast({
        scrollTop : $window.scrollTop()
      });
    });
  }

  resize() {
    var $window = $(window);

    $window.on('load resize', function() {
      radio('window/resize').broadcast({
        width  : $window.width(),
        height : $window.height()
      });
    });
  }

  load() {
    var $window = $(window);

    $window.on('load', function() {
      radio('window/load').broadcast({
        width  : $window.width(),
        height : $window.height(),
        scrollTop : $window.scrollTop()
      });
    });
  }
}