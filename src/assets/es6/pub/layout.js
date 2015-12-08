export default class Layout {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    this.setup();
  }

  setup() {
    var $layout = $('#layout');

    radio('action/layout').broadcast({
      $layout : $layout
    });
  }
}