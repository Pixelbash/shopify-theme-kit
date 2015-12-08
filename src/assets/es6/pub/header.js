export default class Header {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    this.header();
  }

  header() {
    var $header    = $('header.default');
    var $show_pub  = $header.find('[data-pub~=menu-show]');
    var $hide_pub  = $header.find('[data-pub~=menu-hide]');
    var $links_sub = $header.find('[data-sub~=menu]');

    radio('action/header').broadcast({
      $header : $header,
      $show_pub : $show_pub,
      $hide_pub : $hide_pub,
      $links_sub : $links_sub
    });
 
    $show_pub.on('click', (e) => {
      radio('action/header/menu/show').broadcast();
    });
 
    $hide_pub.on('click', (e) => {
      radio('action/header/menu/hide').broadcast();
    });
  }
}  