import Main from './image';
import Preload from '../preload/image';

export default class Gallery {
  constructor() {
    this.lightbox = new Main();
    this.preload  = new Preload();
  }

  slideshow($wrap) {
    var $slider   = $wrap.find('.slider');

    this._slider = $slider.bxSlider({
      pager : false,
      nextSelector: $wrap.find('.controls .next'),
      prevSelector: $wrap.find('.controls .prev'),
      mode : 'fade'
    });
  }
} 