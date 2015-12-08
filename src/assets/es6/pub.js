import Layout from './pub/layout';
import Page from './pub/page';
import Header from './pub/header';
import Footer from './pub/footer';

export default class Pub {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;

    //Basics
    this.u.window.scroll();
    this.u.window.resize();
    this.u.window.load();
    this.u.newsletter.pub();
    this.u.hash.pub();
    
    this.layout = new Layout(main, utils);
    this.header = new Header(main, utils);
    this.footer = new Footer(main, utils);

    //Template specific tests
    if(this.m.$body.filter('[data-template=page]').size() > 0) this.page = new Page(main, utils);
  }
} 