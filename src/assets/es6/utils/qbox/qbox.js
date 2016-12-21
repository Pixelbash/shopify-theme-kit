import Preload from '../preload/preload';
import Templates from './templates';
import Listeners from './listeners';
import Options from './options';
import Slideshow from './slideshow';

export default class Qbox {
  constructor() {

  }

  create(overrides = {}) {
    this.options   = new Options(this, overrides);
    this.templates = new Templates(this);
    this.slideshow = new Slideshow(this);

    //Add listeners
    this.listeners = new Listeners(this);

    if (typeof(this.options.callback) === 'function') this.options.callback(this.slideshow);

  }  
} 