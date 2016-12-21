import Helpers from './utils/helpers/helpers';
import Cookies from './utils/helpers/cookies';
import Fixes from './utils/helpers/fixes';
import DisableScroll from './utils/helpers/disable_scroll';
import Preload from './utils/preload/preload';
import Window from './utils/window/pub';
import Newsletter from './utils/newsletter/mailchimp';
import Lbox from './utils/lbox/lbox';
import Qbox from './utils/qbox/qbox';

export default class Utils {
  constructor() {

    this.fixes   = new Fixes(this);
    this.helpers = new Helpers(this);

    this.preload        = new Preload(this);
    this.window         = new Window(this);
    this.disable_scroll = new DisableScroll(this);
    this.newsletter     = new Newsletter(this);
    this.lbox           = new Lbox(this);
    this.qbox           = new Qbox(this);
    this.cookies        = new Cookies(this);
  }
}  