export default class DisableScroll {
  constructor() {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    this.keys = [37, 38, 39, 40];
  }

  disableScroll() {
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll',this.wheel, false);
      window.addEventListener('touchmove',this.touch, false);
    }

    window.onmousewheel = document.onmousewheel = this.wheel;
    document.onkeydown  = this.keydown;
  }

  enableScroll() {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.wheel, false);
      window.removeEventListener('touchmove', this.touch, false);
    }

    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
  }

  keydown(e) {
    var ds = window.app.u.disable_scroll;
    var keys = ds.keys;

    for (var i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        ds.removeDefault(e);
        return;
      }
    }
  }

  wheel(e) {
    var ds = window.app.u.disable_scroll;
    ds.removeDefault(e);
  }

  touch(e) {
    var ds = window.app.u.disable_scroll;
    ds.removeDefault(e);
  }

  removeDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;  
  }
} 