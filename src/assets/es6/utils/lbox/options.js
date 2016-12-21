export default class Options {
  constructor(lbox, overrides) {
    return $.extend(true, {
      wrap   : true,
      min_width: 500,
      content: '',
      callback : false
    }, overrides);
  }
}