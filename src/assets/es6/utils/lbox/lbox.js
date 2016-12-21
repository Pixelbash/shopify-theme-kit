import Preload from '../preload/preload';
import Templates from './templates';
import Listeners from './listeners';
import Options from './options';
import Build from './build';

export default class Lbox {
  constructor() {

  }

  create(overrides = {}) {
    this.options   = new Options(this, overrides);
    this.templates = new Templates(this);
    this.build     = new Build(this);

    //Add listeners
    this.listeners = new Listeners(this);

    if (typeof(this.options.callback) === 'function') this.options.callback(this.build);

  }
} 