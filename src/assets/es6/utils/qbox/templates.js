export default class Templates {
  constructor(qbox) {
    this.options = qbox.options;

    var templates = {};
    templates.lightbox  = this.lightbox();
    templates.slideshow = this.slideshow();

    return templates;
  }

  lightbox() {
    return _.template(`
      <div class="qbox-wrap">
        <div class="qbox-box" data-sub="box">
          <%= slideshow %>
        </div>
        <div class="qbox-controls">
          <div class="next" data-pub="next-slide">Next</div>
          <div class="prev" data-pub="prev-slide">Prev</div>
          <div class="close" data-pub="close">Close</div>
          <div class="pager-wrap"><div class="pager"><div class="inner" data-sub="pager"></div></div></div>
        </div>
      </div>
    `);
  }
  slideshow() {
    return _.template(`
      <div class="qbox-gallery" data-sub="gallery" data-mode="<%= mode %>">
        <% _.each(slides, (slide, index) => { %><div class="slide" data-sub="slide"  data-slide="<%= index %>">
            <%= slide.html %>
        </div><% }) %>
      </div>
    `);
  }
}