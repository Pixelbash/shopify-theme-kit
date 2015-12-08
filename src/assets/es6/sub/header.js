export default class Header {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    radio('action/header').subscribe((data) => {this.header(data);});
    radio('action/header/menu/show').subscribe((data) => {this.menuShow(data);});
    radio('action/header/menu/hide').subscribe((data) => {this.menuHide(data);});
  }

  header(data) {
    this.$header    = data.$header;
    this.$show_pub  = data.$show_pub;
    this.$hide_pub  = data.$hide_pub;
    this.$links_sub = data.$links_sub;
  }

  menuShow(data) {
    console.log('show menu');
    this.$links_sub.addClass('active');
  }

  menuHide(data) {
    console.log('hide menu');
    this.$links_sub.removeClass('active');
  } 
}    