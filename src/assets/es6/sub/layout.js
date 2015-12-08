export default class Layout {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    radio('action/layout').subscribe((data) => {this.layout(data);});
  }

  layout(data) {
    this.$layout = data.$layout;

    //subscriptions
    radio('window/resize').subscribe((sub_data) => {this.resize(sub_data);});
  }

  resize(data) {
    console.log('update layout height');
    this.window_height = this.m.$window.height();

    this.$layout.css({ 
      'min-height': this.window_height
    });

    //Remove loading class
    if(this.$layout.hasClass('loading')) {
      this.$layout.removeClass('loading')
    }
  }
}   