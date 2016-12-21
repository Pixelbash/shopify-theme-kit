export default class Header {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    radio('header').broadcast();
  }
}  