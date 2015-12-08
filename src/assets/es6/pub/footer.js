export default class Footer {
  constructor(main,utils) {
    this.m = main;
    this.u = utils;
    this.footer();
  }

  footer() {
    var $footer              = $('footer.main');
    var $newsletter_form     = $('form.newsletter');

    radio('action/footer').broadcast({
      $newsletter_form:$newsletter_form
    });
  }
}  