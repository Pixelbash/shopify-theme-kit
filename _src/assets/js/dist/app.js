(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// import './../lib/shopify/cart';
// import 'modernizr';
// import 'sticky-kit';
// import 'bxslider-4';
// import 'masonry';

var js_main = _interopRequire(require("./main"));

var js_handlers = _interopRequire(require("./handlers"));

var js_update = _interopRequire(require("./update"));

var js_utils = _interopRequire(require("./utils"));

Object.deepExtend = function (destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

global.js = {};

Object.deepExtend(js, js_main());
Object.deepExtend(js, js_handlers());
Object.deepExtend(js, js_update());
Object.deepExtend(js, js_utils());

console.log(js);

js.setup();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./handlers":2,"./main":3,"./update":4,"./utils":5}],2:[function(require,module,exports){
"use strict";

module.exports = function () {
  return {
    handlerScreenSize: function handlerScreenSize() {
      js.updateScreenSize();
      js._window.bind("load resize", function () {
        js.updateScreenSize();
      });
    },
    handlerScroll: function handlerScroll() {
      js.updateScroll();
      js._window.bind("load scroll", function () {
        js.updateScroll();
      });
    },
    handlerSearch: function handlerSearch() {
      var template = $("#search_template").html();
      var $search = js._header.find("a.search");

      $search.click(function (e) {
        e.preventDefault();
        js.utilCreateLightbox({
          box_class: "lightbox-search",
          box_content: template,
          wrap_css: {
            background: "rgba(0,0,0,0.8)"
          },
          callback: function callback() {
            $(".lightbox-cell .close").on("click", function (e) {
              if (e.target == this) {
                js.utilRemoveLightbox();
              }
            });
          }
        });
      });
    },
    handlerShipping: function handlerShipping() {
      var template = $("#shipping_template").html();
      var $shipping = js._footer.find("a[href=#shipping]");

      $shipping.click(function (e) {
        e.preventDefault();
        js.utilCreateLightbox({
          box_class: "lightbox-page",
          box_content: template,
          wrap_css: {
            background: "rgba(0,0,0,0.8)"
          },
          box_css: {
            width: "50%",
            "max-height": "80%",
            overflow: "auto"
          },
          callback: function callback() {
            $(".lightbox-cell .close").on("click", function (e) {
              if (e.target == this) {
                js.utilRemoveLightbox();
              }
            });
          }
        });
      });
    },
    handlerCollectionMasonry: function handlerCollectionMasonry() {
      var container = document.querySelector(".blocks");

      var msnry = new Masonry(container, {
        itemSelector: ".block",
        columnWidth: 0
      });

      $(window).load(function () {
        var msnry = new Masonry(container, {
          itemSelector: ".block",
          columnWidth: 0
        });
      });
    },
    handlerCollectionSubmenu: function handlerCollectionSubmenu() {
      var $menu = $(".menu.menu-collection");

      //handle sticky menu
      $menu.stick_in_parent({
        offset_top: 100
      });

      $(window).load(function () {
        $menu.trigger("sticky_kit:recalc");
      });
    },
    handlerNewsletter: function handlerNewsletter() {
      var $form = $(".form-newsletter");
      var $success = $form.find(".success");
      var $error = $form.find(".error");

      var action = String($form.attr("action"));

      $form.submit(function (e) {
        e.preventDefault();

        $error.hide();
        $.ajax({
          type: $form.attr("method"),
          url: action,
          data: $form.serialize(),
          cache: false,
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          error: function error(err) {
            alert("Could not connect to the registration server. Please try again later.");
          },
          success: function success(data) {
            if (data.result != "success") {
              // Something went wrong, do something to notify the user. maybe alert(data.msg);
              $error.text("Please enter a valid email address").show();
            } else {
              // It worked, carry on...
              $form.find("input").val("");
              $success.show();
            }
          }
        });
      }); // end submit
    },
    handlerProductAttributes: function handlerProductAttributes() {
      var $attributes = $(".product .attributes dl");
      var $tabs = $attributes.find("dt");
      $tabs.click(function (e) {
        $this = $(e.target).closest("dt");
        $this.addClass("active");
        $attributes.find("dt").not($this).removeClass("active");
      });
    },
    handlerProductVariants: function handlerProductVariants() {
      var $variants = $(".product .variants");

      //only one variant? Skip out now
      if ($("#product-select").size() < 1) {
        return;
      } //hide our original selector
      $("#product-select").remove();

      //replace our original selector with a hidden one
      $hidden_variant = $("<input type=hidden />").prependTo($variants);
      $hidden_variant.attr("name", "id").attr("value", js._product.variants[0].id);
      js._product_hidden_variant = $hidden_variant;

      //create our option containers
      js.handlerProductVariantsCreate();

      //when an option is selected:
      js.handlerProductVariantSelect(function () {
        //loaded handler callback
        //select first option from each group
        $(".product .variants .options").each(function (i1, v1) {
          $(v1).find("input:radio:first").trigger("click");
        });
      });
    },
    handlerProductVariantsCreate: function handlerProductVariantsCreate() {
      var $variants = $(".product .variants");
      var $categories = $("<div class=\"options-wrap\" />");

      var categories = js._product.options;
      var options = js._product.variants;

      $.each(categories, function (i1, category) {
        var $category = $("<div class=\"options\" />");
        var $heading = $("<h4 />").appendTo($category);
        var option_slug = js.utilSlug(category);

        $heading.text(category + ":");

        //list our options
        var arr_options = [];
        $.each(options, function (i2, variant) {
          var v_option = variant.options[i1];

          if (arr_options.indexOf(v_option) === -1) {
            arr_options.push(v_option);
          }
        });

        //wrap each option set in one of these
        var $options_wrap = $("<div class=\"option-group\" />");
        $options_wrap.attr("data-option", option_slug).attr("data-id", i1);

        //create our radio/label pairs
        $.each(arr_options, function (i2, option_val) {
          var $inner = $("<div class=\"option\" />");
          var $option = $("<input type=radio />");
          var $label = $("<label />");
          var id = "opt-" + js.utilSlug(category) + "-" + i2;

          $inner.attr("data-value", option_val);
          $option.attr("name", option_slug + "[]").attr("id", id).val(option_val).attr("data-option", category);
          $label.text(option_val).attr("for", id);

          $inner.append($option).append($label);
          $options_wrap.append($inner);
        });

        $category.append($options_wrap);
        $categories.append($category);
      });

      $categories.appendTo($variants);
    },
    handlerProductVariantSelect: function handlerProductVariantSelect(callback) {
      var $option = $(".product .variants .option-group input:radio");

      //when clicked update radio
      $option.change(function (e) {
        e.preventDefault();
        js.updateProductVariantOption(e);
      });

      if (typeof callback !== "undefined") callback();
    },
    handlerListSizes: function handlerListSizes() {
      var $lists = $(".desc-list-sizes");
      $lists.each(function (i1, v1) {
        var $list = $(v1);
        var $sizes = $list.find("span");
        var sizes = [];
        $sizes.each(function (i2, v2) {
          var $size = $(v2);
          var size = $size.attr("data-size");

          //prevent duplicates
          if (sizes.indexOf(size) == -1) {
            sizes.push(size);
            var text = "";
            if (i2 > 0) text += ", ";
            text += $size.attr("data-size");
            $size.text(text);
          } else {
            $size.remove();
          }
        });
      });
    } };
};

},{}],3:[function(require,module,exports){
"use strict";

module.exports = function () {
  return {
    _browser: false,
    _min_height: 400,
    setup: function setup() {
      js._browser = js.utilBrowserTest();
      $(document).ready(function () {

        // setup vars that require doc ready
        js._body = $("body");
        js._window = $(window);
        js._content_wrap = $(".content-wrap");
        js._content = js._content_wrap.find(".content");
        js._header = $("header.main");
        js._footer = $("footer.main");
        js._window_height = js._window.height();

        js.handlerScreenSize();
        js.handlerSearch();
        js.handlerShipping();
        js.handlerNewsletter();

        if ($("body").hasClass("collection") || $("body").hasClass("search") || $("body").hasClass("index")) {
          js.handlerCollectionMasonry();
        }

        if ($("body").hasClass("collection") || $(".menu.menu-collection").size() > 0) {
          js.handlerCollectionSubmenu();
        }

        if ($("body").hasClass("product")) {
          js.initProduct();
        }

        //Smooth back to top scroll
        $("a[href=#top]").click(function (e) {
          e.preventDefault();
          js.utilScrollToEl($("#top"));
        });
      });
    },
    initProduct: function initProduct() {
      js._product = page.product_json;
      js._product_cart_button = $("form.form-product button.add-to-cart");

      js.handlerProductVariants();
      js.handlerProductAttributes();
    } };
};

},{}],4:[function(require,module,exports){
"use strict";

module.exports = function () {
  return {
    updateScroll: function updateScroll() {
      js._scroll_top = js._window.scrollTop();

      var si = js._handle_scrollin;

      if (si) js.updateScrollIn();
    },
    updateScreenSize: function updateScreenSize() {
      js._window_height = js._window.height();

      //var ls = js._handle_landing_size;
      //if (ls) js.updateLandingPageSize();
    },

    updateProductVariantOption: function updateProductVariantOption(evt) {
      var $target = $(evt.target);

      //get values for selected options
      var $variants = $(".product .variants");
      var $option_groups = $variants.find(".option-group");

      $option1s = $option_groups.eq(0).find(".option");
      $option2s = $option_groups.eq(1).find(".option");
      $option3s = $option_groups.eq(2).find(".option");

      var value1 = $option_groups.eq(0).find("input:radio:checked").val();
      var value2 = $option_groups.eq(1).find("input:radio:checked").val();
      var value3 = $option_groups.eq(2).find("input:radio:checked").val();

      //avoid undefined errors
      if (typeof value1 == "undefined") value1 = false;
      if (typeof value2 == "undefined") value2 = false;
      if (typeof value3 == "undefined") value3 = false;

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
      js._product_cart_button.addClass("disabled").prop("disabled", true).text("Sold Out");
      js._product_hidden_variant.val(false);
      $(".product .variants .option").addClass("disabled");

      //hide any options that cant currently be selected
      js.updateProductVariantDisabled(v);

      //update id and show the cart if it needs it
      js.updateProductVariantID(v);
    },
    updateProductVariantDisabled: function updateProductVariantDisabled(v) {

      //disable option1s that cant be selected
      v.option1s.each(function (i1, v1) {
        var $option = $(v1);
        var value = $option.find("input:radio").val();
        var enabled = false;

        $.each(js._product.variants, function (i2, v2) {
          //is this variant available
          //does variant match value
          if (v2.available === true && v2.option1 === value) {
            enabled = true;
          }
        });

        //show enabled labels
        if (enabled) $option.removeClass("disabled");
      });

      //disable option2s that cant be selected
      v.option2s.each(function (i1, v1) {
        var $option = $(v1);
        var value = $option.find("input:radio").val();
        var enabled = false;

        $.each(js._product.variants, function (i2, v2) {
          //is this variant available
          //does the variant match the value
          //does the variants parent == value1
          if (v2.available === true && v2.option1 === v.value1 && v2.option2 === value) {
            enabled = true;
          }

          //show enabled labels
          if (enabled) {
            $option.removeClass("disabled");
          }
        });
      });
    },
    updateProductVariantID: function updateProductVariantID(v) {
      var new_id = false;
      var available = false;
      var arr_options = [];

      //get our options array
      v.option_groups.each(function (i1, html_option_group) {
        var $option_group = $(html_option_group);
        var val_selected = $option_group.find("input:radio:checked").val();
        arr_options[i1] = {
          category: $option_group.attr("data-option"),
          option: val_selected
        };
      });

      //get our option id
      $.each(js._product.variants, function (i1, variant) {
        //loop through our options and disqualify anything that doesn't match
        var is_this = true;
        $.each(variant.options, function (i2, option) {
          if (option != arr_options[i2].option) is_this = false;
        });

        if (is_this) {
          new_id = variant.id;
          available = variant.available;
          //console.log(variant);
          // console.log( Shopify.formatMoney(variant.price) );
          var price = Shopify.formatMoney(variant.price);
          if (available) {
            $(".product .price").text(price);
            $(".product .price").removeClass("price-sold");
          } else {
            $(".product .price").text("Sold Out");
            $(".product .price").addClass("price-sold");
          }
        }
      });

      //show/hide the add to cart button
      if (available) {
        js._product_cart_button.removeClass("disabled").prop("disabled", false).text("Add To Cart");
      } else {
        js._product_cart_button.addClass("disabled").prop("disabled", true).text("Sold Out");
      }

      //update our option id
      js._product_hidden_variant.val(new_id);
    } };
};

},{}],5:[function(require,module,exports){
"use strict";

module.exports = function () {
  return {
    utilPreloadImages: function utilPreloadImages(images, callback) {
      if (typeof js._preload_images == "undefined") js._preload_images = images;
      if (typeof callback == "undefined") callback = false;

      var image = js._preload_images.shift();
      if (typeof image != "undefined") {
        js.utilPreloadImage(image, function () {
          js.utilPreloadImages(js._preload_images, callback);
          $image = $("img[data-src=\"" + image + "\"]");
          $image.removeAttr("data-src").attr("src", image).animate({
            opacity: 1
          }, 1000);
        });
      } else {
        js.utilPreloadClear();
        if (callback) callback();
      }
    },
    utilPreloadImage: function utilPreloadImage(src, callback) {
      $preload = $("#preload");
      if ($("#preload").size() < 1) $preload = $("<div id=\"preload\" />").prependTo("body");
      src = src.replace(/\"/g, " ");

      $preload.append("<img src=\"" + src + "\"  style=\"display:none;\" />");
      $preload.find(" img[src=\"" + src + "\"]").load(function (e) {
        if (typeof callback == "function") callback();
      });
    },
    utilPreloadClear: function utilPreloadClear() {
      js._preload_images = [];
      $("#preload img").remove();
    },
    utilObjectSize: function utilObjectSize(obj) {
      var size = 0,
          key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    },
    utilScrollToEl: function utilScrollToEl($el) {
      $("html, body").animate({
        scrollTop: $el.offset().top + 5
      }, 500);
    },
    utilGetCookie: function utilGetCookie(c_name) {
      var i,
          x,
          y,
          ARRcookies = document.cookie.split(";");
      for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
          return unescape(y);
        }
      }
      return false;
    },
    utilSetCookie: function utilSetCookie(c_name, value, exdays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value = escape(value) + (exdays == null ? "" : "; expires=" + exdate.toUTCString());
      document.cookie = c_name + "=" + c_value;
    },
    utilBrowserTest: function utilBrowserTest() {
      var N = navigator.appName,
          ua = navigator.userAgent,
          tem;
      var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
      M = M ? [M[1], M[2]] : [N, navigator.appVersion, "-?"];

      return M;
    },
    utilDeviceTest: function utilDeviceTest() {
      var device = false;
      var is_ipad = navigator.userAgent.match(/(iPad)/g) ? true : false;
      var is_iphone = navigator.userAgent.match(/(iPhone)/g) ? true : false;

      if (is_ipad) device = "ipad";
      if (is_iphone) device = "iphone";

      return device;
    },
    utilCreateLightbox: function utilCreateLightbox(new_options) {
      var options = {
        box_class: "",
        box_content: "",
        wrap_css: {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: "#fff",
          "z-index": 999999
        },
        table_css: {
          display: "table",
          width: "100%",
          height: "100%"
        },
        row_css: {
          display: "table-row"
        },
        cell_css: {
          display: "table-cell",
          "text-align": "center",
          "vertical-align": "middle"
        },
        box_css: {
          display: "inline-block",
          "*display": "inline",
          width: "auto",
          height: "auto",
          position: "relative",
          padding: "20px",
          border: "none",
          background: "#fff"
        },
        callback: false
      };

      $.extend(true, options, new_options);

      var $lightbox_wrap = $("<div class=\"lightbox-wrap\" />").appendTo("body");
      var $lightbox_table = $("<div class=\"lightbox-table\" />").appendTo($lightbox_wrap);
      var $lightbox_row = $("<div class=\"lightbox-row\" />").appendTo($lightbox_table);
      var $lightbox_cell = $("<div class=\"lightbox-cell\" />").appendTo($lightbox_row);
      var $lightbox_box = $("<div class=\"lightbox-box\" />").appendTo($lightbox_cell);

      $lightbox_wrap.css(options.wrap_css);
      $lightbox_table.css(options.table_css);
      $lightbox_row.css(options.row_css);
      $lightbox_cell.css(options.cell_css);
      $lightbox_box.css(options.box_css);

      $lightbox_box.addClass(options.box_class);
      $lightbox_box.html(options.box_content);

      $(".lightbox-cell").on("click", function (e) {
        if (e.target == this) {
          js.utilRemoveLightbox();
        }
      });

      $("body").keyup(function (e) {
        if (e.which == 27) {
          js.utilRemoveLightbox();
        }
      });

      if (typeof options.callback === "function") options.callback($lightbox_wrap);
    },
    utilRemoveLightbox: function utilRemoveLightbox() {
      $(".lightbox-wrap").fadeOut(1000, function () {
        $(".lightbox-wrap").remove();
        js._handle_lightbox_gallery_size = false;
      });
    },
    helperCountValueByKey: function helperCountValueByKey(array, key, value) {
      var count = 0;

      $.each(array, function (i1, v1) {
        if (typeof v1[key] !== "undefined" && v1[key] === value) count++;
      });

      return count;
    },
    utilSlug: function utilSlug(text) {
      return text.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");
    }
  };
};

},{}]},{},[1]);
