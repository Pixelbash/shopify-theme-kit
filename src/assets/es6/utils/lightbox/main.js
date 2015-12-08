export default class Main {
  create(new_options) {
    var options = {
      box_class: '',
      box_content: '',
      wrap_css: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: '#fff',
        'z-index': 999999
      },
      table_css: {
        display: 'table',
        width: '100%',
        height: '100%'
      },
      row_css: {
        display: 'table-row'
      },
      cell_css: {
        display: 'table-cell',
        'text-align': 'center',
        'vertical-align': 'middle'
      },
      box_css: {
        display: 'inline-block',
        '*display': 'inline',
        width: 'auto',
        height: 'auto',
        position: 'relative',
        padding: '20px',
        border: 'none',
        background: '#fff'
      },
      callback: false
    };

    $.extend(true, options, new_options);

    var $lightbox_wrap = $('<div class="lightbox-wrap" />').appendTo('body');
    var $lightbox_table = $('<div class="lightbox-table" />').appendTo($lightbox_wrap);
    var $lightbox_row = $('<div class="lightbox-row" />').appendTo($lightbox_table);
    var $lightbox_cell = $('<div class="lightbox-cell" />').appendTo($lightbox_row);
    var $lightbox_box = $('<div class="lightbox-box" />').appendTo($lightbox_cell);

    $lightbox_wrap.css(options.wrap_css);
    $lightbox_table.css(options.table_css);
    $lightbox_row.css(options.row_css);
    $lightbox_cell.css(options.cell_css);
    $lightbox_box.css(options.box_css);

    $lightbox_box.addClass(options.box_class);
    $lightbox_box.html(options.box_content);


    //close conditions
    $('.lightbox-cell').find('.close, [data-pub=close]').on('click', (e) => {
      this.remove();
    });

    $('body').keyup((e) =>  {
      if (e.which == 27) {
        this.remove();
      }
    });

    if (typeof(options.callback) === 'function') options.callback($lightbox_wrap);
  }
  
  remove() {
    $('.lightbox-wrap').fadeOut(1000, function() {
      $('.lightbox-wrap').remove();
    });
  }
}