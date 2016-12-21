export default class Slideshow {
  constructor(lbox) {
    this.templates = lbox.templates;
    this.options   = lbox.options;
    //Set up slideshow elements
    this.els = this.elements();

    //Set up slideshow state vars
    this.state = this.getState();

    //Mark as initialised
    this.state.initialised = true;

    return this;
  }

  getState() {
    return {
      initialised:false,
      wrap : this.options.wrap,
      box : {
        width: this.els.$box.width(),
      }
    };
  }

  remove() {
    var els = this.els;
    if(els.$wrap.size() > 0) {
      els.$wrap.fadeOut(1000, () => {
        els.$wrap.remove();
      });
    }
  }

  elements() {
    var templates = this.templates;

    var $wrap = $(templates.lightbox({options:this.options}));

    var els = {};
    els.$wrap = $wrap.appendTo($('body'));

    els.$close = els.$wrap.find('.close, [data-pub~="close"]');
    els.$box   = els.$wrap.find('[data-sub~="lbox-box"]');

    return els;
  }
}