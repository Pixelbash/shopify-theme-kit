export default function() {
  return {
  handlerScreenSize: function() {
    js.updateScreenSize();
    js._window.bind("load resize", function() {
      js.updateScreenSize();
    });
  },
  handlerScroll: function() {
    js.updateScroll();
    js._window.bind("load scroll", function() {
      js.updateScroll();
    });
  },
  handlerSearch: function() {
    var template = $('#search_template').html();
    var $search = js._header.find('a.search');

    $search.click(function(e){
      e.preventDefault();
      js.utilCreateLightbox({
        box_class: 'lightbox-search',
        box_content: template, 
        wrap_css: {
          background: 'rgba(0,0,0,0.8)'
        },
        callback: function() {
          $('.lightbox-cell .close').on('click', function(e) {
            if (e.target == this) {
              js.utilRemoveLightbox(); 
            }
          });
        }
      });
    });
  },
  handlerShipping: function() {
    var template = $('#shipping_template').html();
    var $shipping  = js._footer.find('a[href=#shipping]');

    $shipping.click(function(e){
      e.preventDefault();
      js.utilCreateLightbox({
        box_class: 'lightbox-page',
        box_content: template, 
        wrap_css: {
          background: 'rgba(0,0,0,0.8)'
        },
        box_css: {
          width:'50%',
          'max-height':'80%',
          overflow:'auto'
        },
        callback: function() {
          $('.lightbox-cell .close').on('click', function(e) {
            if (e.target == this) {
              js.utilRemoveLightbox(); 
            }
          });
        }
      });
    });
  },
  handlerCollectionMasonry: function() {
    var container = document.querySelector('.blocks');

    var msnry = new Masonry( container, { 
      itemSelector: '.block',
      columnWidth: 0
    });

    $(window).load(function(){
      var msnry = new Masonry( container, {
        itemSelector: '.block',
        columnWidth: 0
      });
    });
  },
  handlerCollectionSubmenu: function() {
    var $menu = $('.menu.menu-collection');

    //handle sticky menu
    $menu.stick_in_parent({
      offset_top: 100
    });

    $(window).load(function(){
      $menu.trigger("sticky_kit:recalc");
    });
  },
  handlerNewsletter: function() {
    var $form      = $('.form-newsletter');
    var $success   = $form.find('.success');
    var $error     = $form.find('.error');

    var action = String($form.attr('action'));

    $form.submit(function(e) {
      e.preventDefault();

      $error.hide();
      $.ajax({
        type: $form.attr('method'),
        url: action,
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        error: function(err) {
          alert("Could not connect to the registration server. Please try again later.");
        },
        success: function(data) {
          if (data.result != "success") {
            // Something went wrong, do something to notify the user. maybe alert(data.msg);
            $error.text('Please enter a valid email address').show();
          } else {
            // It worked, carry on...
            $form.find('input').val('');
            $success.show();
          }
        }
      });
    }); // end submit
  },
  handlerProductAttributes: function() {
    var $attributes = $('.product .attributes dl');
    var $tabs = $attributes.find('dt');
    $tabs.click(function(e){
      $this = $(e.target).closest('dt');
      $this.addClass('active');
      $attributes.find('dt').not($this).removeClass('active');
    });
  },
  handlerProductVariants: function(){
    var $variants = $('.product .variants');

    //only one variant? Skip out now
    if($('#product-select').size() < 1) return;

    //hide our original selector
    $('#product-select').remove();

    //replace our original selector with a hidden one
    $hidden_variant = $('<input type=hidden />').prependTo($variants);
    $hidden_variant.attr('name', 'id').attr('value', js._product.variants[0].id);
    js._product_hidden_variant = $hidden_variant;

    //create our option containers
    js.handlerProductVariantsCreate();

    //when an option is selected:
    js.handlerProductVariantSelect(function(){
      //loaded handler callback
      //select first option from each group
      $('.product .variants .options').each(function(i1,v1){ 
        $(v1).find('input:radio:first').trigger('click');
      });
    });
  },
  handlerProductVariantsCreate: function() {
    var $variants   = $('.product .variants');
    var $categories = $('<div class="options-wrap" />');
    
    var categories  = js._product.options;
    var options     = js._product.variants;

    $.each(categories, function(i1,category){
      var $category   = $('<div class="options" />');
      var $heading    = $('<h4 />').appendTo($category);
      var option_slug = js.utilSlug(category);

      $heading.text(category + ':');

      //list our options
      var arr_options = [];
      $.each(options, function(i2,variant) {
        var v_option = variant.options[i1];

        if(arr_options.indexOf(v_option) === -1) {
          arr_options.push(v_option);
        }
      });

      //wrap each option set in one of these
      var $options_wrap = $('<div class="option-group" />');
      $options_wrap.attr('data-option',option_slug).attr('data-id',i1);

      //create our radio/label pairs
      $.each(arr_options, function(i2,option_val){
        var $inner = $('<div class="option" />');
        var $option = $('<input type=radio />');
        var $label  = $('<label />');
        var id = 'opt-' + js.utilSlug(category) + '-' + i2;

        $inner.attr('data-value', option_val);
        $option.attr('name', option_slug +'[]').attr('id',id).val(option_val).attr('data-option',category);
        $label.text(option_val).attr('for', id);

        $inner.append($option).append($label);
        $options_wrap.append($inner);
      });

      $category.append($options_wrap);
      $categories.append($category);
    });

$categories.appendTo($variants);
},
handlerProductVariantSelect: function(callback) {
  var $option = $('.product .variants .option-group input:radio');

    //when clicked update radio
    $option.change(function(e){
      e.preventDefault();
      js.updateProductVariantOption(e);
    });

    if(typeof(callback) !== 'undefined') callback();
  },
  handlerListSizes: function() {
    var $lists = $('.desc-list-sizes');
    $lists.each(function(i1,v1){
      var $list = $(v1);
      var $sizes = $list.find('span');
      var sizes = [];
      $sizes.each(function(i2,v2){
        var $size = $(v2);
        var size = $size.attr('data-size');

        //prevent duplicates
        if(sizes.indexOf(size) == -1) {
          sizes.push(size);
          var text = '';
          if(i2 > 0) text += ', ';
          text += $size.attr('data-size');
          $size.text(text);
        } else {
          $size.remove();
        }
      });
    });
  },
};
};