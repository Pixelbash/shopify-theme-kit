export default class Listeners {
  constructor(qbox) {
    this.qbox = qbox;

    this.close();
    this.navigate();
  }

  close() {
    var slideshow = this.qbox.slideshow;

    //Remove on escape
    $('body').keyup((e) =>  {
      if (e.which == 27) {
        slideshow.remove();
      }
    });
    
    slideshow.els.$close.on('click', (e) => {
      slideshow.remove();
    });
  }

  navigate() {
    var slideshow = this.qbox.slideshow;
    //Hide if there is only one slide
    var $next = slideshow.els.$next;
    var $prev = slideshow.els.$prev;

    //Direction listeners
    $next.on('click', (e) => {
      slideshow.next();
    });
    
    $prev.on('click', (e) => {
      slideshow.prev();
    });
  }
}