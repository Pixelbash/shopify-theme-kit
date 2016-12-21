export default class Options {
  constructor(qbox, overrides) {
    return $.extend({
      slides : [],
      start  : 0,
      wrap   : true,
      mode   : 'fade',
      tag    : {},
      min_width: 500,
      callback : false
    }, overrides);
  }
}