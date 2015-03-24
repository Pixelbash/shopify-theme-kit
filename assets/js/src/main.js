export default function() {
  return {
  _browser: false,
  _min_height: 400,
  setup: function() {
    js._browser = js.utilBrowserTest();
    $(document).ready(function() {

      // setup vars that require doc ready
      js._body          = $('body');
      js._window        = $(window);
      js._content_wrap  = $('.content-wrap');
      js._content       = js._content_wrap.find('.content');
      js._header        = $('header.main');
      js._footer        = $('footer.main');
      js._window_height = js._window.height();

      js.handlerScreenSize();
      js.handlerSearch();
      js.handlerShipping();
      js.handlerNewsletter();

      if($('body').hasClass('collection') || $('body').hasClass('search') || $('body').hasClass('index')) {
        js.handlerCollectionMasonry();
      }

      if($('body').hasClass('collection') || $('.menu.menu-collection').size() > 0) {
        js.handlerCollectionSubmenu();
      }

      if($('body').hasClass('product')) {
        js.initProduct();
      }

      //Smooth back to top scroll
      $('a[href=#top]').click(function(e){
        e.preventDefault();
        js.utilScrollToEl($('#top'));
      });
    });
  },
  initProduct: function() {
    js._product = page.product_json;
    js._product_cart_button = $('form.form-product button.add-to-cart');

    js.handlerProductVariants();
    js.handlerProductAttributes();
  },
}; 
};