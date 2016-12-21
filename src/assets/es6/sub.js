import Page from './sub/page';
import Header from './sub/header';
import Footer from './sub/footer';

export default class Sub {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    this.header   = new Header(main, utils);
    this.footer   = new Footer(main, utils);
    
    this.page     = new Page(main, utils);
  }
} 