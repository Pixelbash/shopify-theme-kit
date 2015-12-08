export default class Cookies {
  get(c_name) {
      var i, x, y, ARRcookies = document.cookie.split(";");
      for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
          return unescape(y);
        }
      }
      return false;
  }

  set(c_name, value, exhours) {
    var time = new Date();
    var offset = time.getTime();
    offset += (3600 * 1000) * exhours;
    time.setTime(offset);

    document.cookie = c_name + "=" + escape(value) + "; expires=" + time.toGMTString();
  }
}