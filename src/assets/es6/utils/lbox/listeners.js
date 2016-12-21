export default class Listeners {
  constructor(lbox) {
    this.lbox = lbox;

    this.close();
  }

  close() {
    var build = this.lbox.build;

    //Remove on escape
    $('body').keyup((e) =>  {
      if (e.which == 27) {
        build.remove();
      }
    });
    
    build.els.$close.on('click', (e) => {
      build.remove();
    });
  }
}