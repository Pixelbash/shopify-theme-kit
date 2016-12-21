export default class Page {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    radio('page').broadcast();
  }
} 