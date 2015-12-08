import Helpers from './utils/helpers/helpers';
import Vectors from './utils/helpers/vectors';
import Cookies from './utils/helpers/cookies';
import Hash from './utils/helpers/hash';
import Lightbox from './utils/lightbox/main';

import Preload from './utils/preload/preload';
import Window from './utils/window/pub';
import Newsletter from './utils/newsletter/mailchimp';
import Fixes from './utils/helpers/fixes';

export default class Utils {
  constructor() {

    this.preload    = new Preload();
    this.newsletter = new Newsletter();
    this.helpers    = new Helpers();
    this.vectors    = new Vectors();
    this.cookies    = new Cookies();
    this.hash       = new Hash(); 
    this.lightbox   = new Lightbox();
    this.window     = new Window();

    //Fixes
    this.fixes      = new Fixes(); 
  }
}