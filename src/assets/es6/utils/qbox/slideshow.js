export default class Slideshow {
  constructor(qbox) {
    this.templates = qbox.templates;
    this.options   = qbox.options;

    //Set up slideshow elements
    this.els = this.elements();

    //Set up slideshow state vars
    this.state = this.getState();

    if(this.options.mode == 'fade') {
      this.els.$slides.css({
        'z-index':5,
          opacity:0
      });
    }

    //hide controls if only one slide
    if(this.state.max == 0) {
      console.log(this.els.$next);
      this.els.$next.hide();
      this.els.$prev.hide();
    }

    this.select(this.state.slide);

    //Mark as iitialised
    this.state.initialised = true;

    return this;
  }

  getState() {
    return {
      slide:this.options.slide,
      max:this.options.slides.length - 1,
      initialised:false,
      wrap : this.options.wrap,
      box : {
        width: this.els.$box.width(),
      },
      gallery : {
        width : this.els.$box.width() * this.options.slides.length
      }
    };
  }

  next() {
    this.select(this.state.slide + 1);
  }

  prev() {
    this.select(this.state.slide - 1);
  }

  select(new_slide) {
    //Handle wrapping around
    var direction = (new_slide > this.state.slide) ? 'next':'prev';
    var new_slide = this.validateSelect(new_slide);

    if(this.options.mode == 'fade') {
      var this_slide = this.validateSelect(new_slide);
      var prev_slide = this.validateSelect(new_slide - 1);

      if(direction == 'prev') {
        prev_slide = this.validateSelect(new_slide + 1);
      }

      var $prev = this.els.$slides.filter(`[data-slide="${prev_slide}"]`);
      var $this = this.els.$slides.filter(`[data-slide="${this_slide}"]`);

      $prev.css({
        'z-index':10
      });

      $this.css({
        'z-index':20,
        'opacity':0
      });

      $this.animate({
        'opacity':1
      }, {
        duration: 500,
        complete: () => {
          $prev.css({
            'z-index':5
          });
        }
      });
    }

    //Update pager
    var pad_slide = this.leftPad(new_slide+1,2);
    var pad_max   = this.leftPad(this.state.max+1,2);
    this.els.$pager.text(`${pad_slide}/${pad_max}`);
    
    this.state.slide = new_slide;
  }

  remove() {
    var els = this.els;
    if(els.$wrap.size() > 0) {
      els.$wrap.fadeOut(1000, () => {
        els.$wrap.remove();
      });
    }
  }

  validateSelect(s) {
    var ret   = s;
    var state = this.state;

    if(state.wrap) {
      if(s < 0) ret = state.max;
      if(s > state.max) ret = 0;
    } else {
      if(s < 0 || s > state.max) ret = false; //Don't do anything
    }

    return ret;
  }

  elements() {
    var templates = this.templates
    var options   = this.options

    var inner = templates.slideshow({
      mode   : options.mode,
      slides : options.slides
    });

    var $wrap = $(templates.lightbox({
      slideshow:inner
    }));

    var els = {};
    els.$wrap = $wrap.appendTo($('body'));

    els.$close   = els.$wrap.find('.close, [data-pub~="close"]');
    els.$next    = els.$wrap.find('[data-pub~="next-slide"]');
    els.$prev    = els.$wrap.find('[data-pub~="prev-slide"]');
    els.$pager   = els.$wrap.find('[data-sub~="pager"]');
    els.$slides  = els.$wrap.find('[data-sub~="slide"]');
    els.$gallery = els.$wrap.find('[data-sub~="gallery"]');
    els.$box     = els.$wrap.find('[data-sub~="box"]');
    els.$tag     = els.$wrap.find('[data-sub~="tag"]');

    return els;
  }

  leftPad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
}