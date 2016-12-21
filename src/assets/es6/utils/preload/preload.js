export default class Preload {
  constructor() {
    this._files = [];

    //Create preload div
    if (!$('#preload').is('*')) {
      this.$preload = $('<div id="preload" />').appendTo('body');
    } else {
      this.$preload = $('#preload');
    }

    this.$preload.hide();
  }

  files(opts) {
    this._files = opts.src;

    var file = this._files.shift();
    if (typeof(file) != 'undefined') {
      this.file({
        src:file,
        callback: (d) => {
          //Go to the next file
          this.files({
            src: this._files, 
            callback: opts.callback
          });
        }
      });
    } else {
      console.log('run callback!');
      this.clear();
      if(typeof(opts.callback) != 'undefined') opts.callback();
    }
  }

  file(opts) {
    var src    = opts.src.replace(/\"/g, ' ');
    var type   = this.getFileType(opts.src);
    var $p     = this.$preload;
    var has_cb = (typeof(opts.callback) != 'undefined');

    //Bail if we don't recognise the type
    if(type == false) {
      opts.callback(d); 
    //Handle types
    } else if(type == 'img') {
      var $file = $('<img />')
        .attr('src', src)
        .appendTo($p);

      if(has_cb) {
        $file.on('load', (d) => {
           opts.callback(d); 
        });
      }
    } else if(type == 'js') {
      $.getScript( src, (d) => {
        console.log('loaded js');
        if(has_cb) opts.callback(d); 
      });
    } else if(type == 'css') {
      var $file = $('<link />')
        .attr('href', src)
        .attr('rel', 'stylesheet')
        .appendTo($p);

      if(has_cb) {
        $file.load((d) => {
          //console.log('loaded css');
           opts.callback(d); 
        });
      }
    }
  }

  image(opts) {
    this.file(opts);
  }

  images(opts) {
    this.files(opts);
  }

  clear() {
    this._images = [];
    $('#preload img').remove();
    $('#preload script').remove();
    $('#preload style').remove();
  }

  getFileType(src) {
    var ext = src.substr((src.lastIndexOf('.') + 1));
    if(/(js)$/ig.test(ext)) {
      return 'js';
    } else if (/(css)$/ig.test(ext)) {
      return 'css';
    } else if (/(jpg|png|gif)$/ig.test(ext)) {
      return 'img';
    }
  }
}
