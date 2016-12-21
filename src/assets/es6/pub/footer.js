export default class Footer {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    radio('footer').broadcast();
  }
}  