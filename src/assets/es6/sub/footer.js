export default class Default {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    radio('footer').subscribe((d) => {this.init(d);});
  }

  init(d) {
    this._d = d;
  }
}    