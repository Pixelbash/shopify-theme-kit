export default class Preload {
  constructor() {
    this._images = [];

    if (!$('#preload').is('*')) {
      this.$preload = $('<div id="preload" />').prependTo('body');
    } else {
      this.$preload = $('#preload');
    }
  }

  image(opts) {
    var src = opts.src.replace(/\"/g, ' ');
    console.log('preloading image: ' + src);

    this.$preload.append('<img src="' + src + '"  style="display:none;" />');
    this.$preload.find(' img[src="' + src + '"]').load((d) => {
      if (typeof(opts.callback) != 'undefined') opts.callback(d); 
    });
  }

  images(opts) {
    this._images = opts.src;
    var image  = this._images.shift();

    if (typeof(image) != 'undefined') {
      this.image({
        src:image,
        callback: (d) => {
          //Go to the next image
          this.images({
            src: this._images, 
            callback: opts.callback
          });
        }
      });
    } else {
      this.clear();
      if(typeof(opts.callback) != 'undefined') opts.callback();
    }
  }

  clear() {
    this._images = [];
    $('#preload img').remove();
  }
}