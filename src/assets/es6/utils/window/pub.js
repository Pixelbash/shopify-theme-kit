export default class Pub {
  constructor(utils) {
    this.u = utils;

    //Get animation frame
    this.raf = utils.fixes.requestAnimationFrame();
    this.gdh = utils.helpers.getDocumentHeight;

    this._s = {
      $window : $(window),
      scroll : {
        top : {}
      },
      resize : {
        width : {},
        height : {}
      },
      document : {
        height : {}
      }
    };

    //Initialise state variables
    this.reset();

    //start loop
    this.loop();

    //force events to fire a few times
    $(window).on('load ready', (e) => {this.reset();});
    this.reset();
  }

  reset() {
    this._s.scroll.top.old      = -1;
    this._s.resize.width.old    = -1;
    this._s.resize.height.old   = -1;
    this._s.document.height.old = -1;

    this._s.scroll.top.current      = 0;
    this._s.resize.width.current    = 0;
    this._s.resize.height.current   = 0;
    this._s.document.height.current = 0;

    this._s.scroll.top.direction      = 'none';
    this._s.resize.width.direction    = 'none';
    this._s.resize.height.direction   = 'none';
  }

  loop() {
    var $window = this._s.$window;

    //Existing variables
    var old_top    = this._s.scroll.top.old;
    var old_width  = this._s.resize.width.old;
    var old_height = this._s.resize.height.old;
    var old_document_height = this._s.document.height.old;

    //New variables
    var new_top    = window.pageYOffset;
    var new_width  = $window.width();
    var new_height = $window.height();
    var new_document_height = this.gdh();

    //Scroll events
    if(old_top != new_top) {
      //Set variables
      this._s.scroll.top.current   = new_top;
      this._s.scroll.top.direction = (new_top > old_top) ? 'down' : 'up';

      //Fire event
      this.scrollPub();

      //Set old variables
      this._s.scroll.top.old    = new_top;
    }

    //Resize events
    if(old_width != new_width || old_height != new_height) {
      //Set variables
      this._s.resize.width.current    = new_width;
      this._s.resize.height.current   = new_height;

      this._s.resize.width.direction  = (new_width > old_width)   ? 'more' : 'less';
      this._s.resize.height.direction = (new_height > old_height) ? 'more' : 'less';

      //Fire event
      this.resizePub();

      //Set old variables
      this._s.resize.width.old  = new_width;
      this._s.resize.height.old = new_height;
    }

    //Layout events
    if(old_document_height != new_document_height) {
      //Set variables
      this._s.document.height.current = new_document_height;

      //Fire event
      this.layoutPub();

      //Set old variables
      this._s.document.height.old = new_document_height;
    }

    //Loop
    window.requestAnimationFrame((time) => {
      this.loop();
    });
  }

  scrollPub() {
    radio('window/scroll').broadcast({
      scroll_top : this._s.scroll.top.current,
      scroll_direction  : this._s.scroll.top.direction,
    });
  }

  resizePub() {
    radio('window/resize').broadcast({
      width  : this._s.resize.width.current,
      height : this._s.resize.height.current,
      width_direction  : this._s.resize.width.direction,
      height_direction : this._s.resize.height.direction,
    });
  }

  layoutPub() {
    radio('window/layout').broadcast({
      height  : this._s.document.height.current,
    });
  }
}
