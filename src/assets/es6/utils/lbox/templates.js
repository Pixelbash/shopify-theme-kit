export default class Templates {
  constructor(lbox) {
    this.options  = lbox.options;
    var templates = {};

    templates.lightbox  = this.lightbox();

    return templates;
  }

  lightbox() {
    return _.template(`
      <div class="lbox-wrap">
        <div class="lbox-box" data-sub="lbox-box">
          <%= options.content %>
        </div>
      </div>
    `);
  }
}