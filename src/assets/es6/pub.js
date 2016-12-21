import Page from './pub/page';
import Header from './pub/header';
import Footer from './pub/footer';

export default class Pub {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    
    this.header = new Header(main, utils);
    this.footer = new Footer(main, utils);

    //Template specific tests
    if(this.m.$body.filter('[data-template=page]').size() > 0) this.page = new Page(main, utils);
  }
} 