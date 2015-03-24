// import './../lib/shopify/cart';
// import 'modernizr';
// import 'sticky-kit';
// import 'bxslider-4';
// import 'masonry';

import js_main from './main';
import js_handlers from './handlers';
import js_update from './update';
import js_utils from './utils'; 

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

global.js = {};

Object.deepExtend(js,js_main());
Object.deepExtend(js,js_handlers());
Object.deepExtend(js,js_update());
Object.deepExtend(js,js_utils());

console.log(js);

js.setup();