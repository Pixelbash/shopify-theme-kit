export default function() {
  return {
    updateScroll: function() {
        js._scroll_top = js._window.scrollTop();

        var si = js._handle_scrollin;

        if (si) js.updateScrollIn();
    },
    updateScreenSize: function() {
        js._window_height = js._window.height();

        //var ls = js._handle_landing_size;
        //if (ls) js.updateLandingPageSize();
    },

    updateProductVariantOption: function(evt) {
      var $target = $(evt.target);

      //get values for selected options
      var $variants = $('.product .variants');
      var $option_groups = $variants.find('.option-group');

      $option1s = $option_groups.eq(0).find('.option');
      $option2s = $option_groups.eq(1).find('.option');
      $option3s = $option_groups.eq(2).find('.option');

      var value1 = $option_groups.eq(0).find('input:radio:checked').val();
      var value2 = $option_groups.eq(1).find('input:radio:checked').val();
      var value3 = $option_groups.eq(2).find('input:radio:checked').val();

      //avoid undefined errors
      if(typeof(value1) == 'undefined') value1 = false;
      if(typeof(value2) == 'undefined') value2 = false;
      if(typeof(value3) == 'undefined') value3 = false;

      var v = {
        option_groups: $option_groups,
        option1s: $option1s,
        option2s: $option2s,
        option3s: $option3s,
        value1: value1,
        value2: value2,
        value3: value3
      };

      //reset our button and value
      js._product_cart_button.addClass('disabled').prop('disabled', true).text('Sold Out');
      js._product_hidden_variant.val(false);
      $('.product .variants .option').addClass('disabled');

      //hide any options that cant currently be selected
      js.updateProductVariantDisabled(v);

      //update id and show the cart if it needs it
      js.updateProductVariantID(v);
    },
    updateProductVariantDisabled: function(v) {

      //disable option1s that cant be selected
      v.option1s.each(function(i1,v1){
        var $option = $(v1);
        var value = $option.find('input:radio').val();
        var enabled = false;

        $.each(js._product.variants, function(i2,v2){
          //is this variant available
          //does variant match value
          if(v2.available === true && v2.option1 === value) {
            enabled = true;
          }
        });

        //show enabled labels
        if(enabled) $option.removeClass('disabled');
      });

      //disable option2s that cant be selected
      v.option2s.each(function(i1,v1){
        var $option = $(v1);
        var value = $option.find('input:radio').val();
        var enabled = false;

        $.each(js._product.variants, function(i2,v2){
          //is this variant available
          //does the variant match the value
          //does the variants parent == value1
          if(v2.available === true && v2.option1 === v.value1 && v2.option2 === value) {
            enabled = true;
          }

          //show enabled labels
          if(enabled) {
            $option.removeClass('disabled');
          }
        });
      });
    },
    updateProductVariantID: function(v) {
      var new_id = false;
      var available = false;
      var arr_options = [];

      //get our options array
      v.option_groups.each(function(i1,html_option_group){
          var $option_group = $(html_option_group);
          var val_selected = $option_group.find('input:radio:checked').val();
          arr_options[i1] = {
              category: $option_group.attr('data-option'),
              option: val_selected
          };
      });

      //get our option id
      $.each(js._product.variants, function(i1,variant){
          //loop through our options and disqualify anything that doesn't match
          var is_this = true;
          $.each(variant.options, function(i2,option){
              if(option != arr_options[i2].option) is_this = false;
          });

          if(is_this) {
            new_id = variant.id;
            available = variant.available;
            //console.log(variant);
            // console.log( Shopify.formatMoney(variant.price) );
            var price = Shopify.formatMoney(variant.price);
            if(available) {
              $('.product .price').text(price);
              $('.product .price').removeClass('price-sold');
            } else {
              $('.product .price').text('Sold Out');
              $('.product .price').addClass('price-sold');
            }
          }
      });

      //show/hide the add to cart button
      if(available) {
        js._product_cart_button.removeClass('disabled').prop('disabled', false).text('Add To Cart');
      } else {
        js._product_cart_button.addClass('disabled').prop('disabled', true).text('Sold Out');
      }

      //update our option id
      js._product_hidden_variant.val(new_id); 
    }, 
};
};