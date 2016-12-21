export default class Main {
  create(new_options) {
    var options = {
      fade_in: true,
      box_class: '',
      box_content: '',
      wrap_css: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(244,239,232,0.92)',
        'z-index': 999999,
        opacity:0
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

    //Remove any existing lightboxes
    $('.lightbox-wrap').remove();

    var $lightbox_wrap  = $('<div class="lightbox-wrap" />').appendTo('body');
    var $lightbox_table = $('<div class="lightbox-table" />').appendTo($lightbox_wrap);
    var $lightbox_row   = $('<div class="lightbox-row" />').appendTo($lightbox_table);
    var $lightbox_cell  = $('<div class="lightbox-cell" />').appendTo($lightbox_row);
    var $lightbox_box   = $('<div class="lightbox-box" />').appendTo($lightbox_cell);

    $lightbox_wrap.css(options.wrap_css);
    $lightbox_table.css(options.table_css);
    $lightbox_row.css(options.row_css);
    $lightbox_cell.css(options.cell_css);
    $lightbox_box.css(options.box_css);

    $lightbox_box.addClass(options.box_class);
    $lightbox_box.html(options.box_content);

    if(options.fade_in == true) {
      $lightbox_wrap.animate({
        opacity:1
      },500,() => {
        //close conditions
        $('.lightbox-cell .close').on('click', (e) => {
          this.remove();
        });
        $('.lightbox-cell').on('click', (e) => {
          if($(e.target).hasClass('lightbox-cell')) this.remove();
        }); 
      });
    } else {
      $lightbox_wrap.css({
        opacity:1
      });
      //close conditions
      $('.lightbox-cell .close').on('click', (e) => {
        this.remove();
      });
      $('.lightbox-cell').on('click', (e) => {
        if($(e.target).hasClass('lightbox-cell')) this.remove();
      });
    } 

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

  loading() {
    this.create({
      box_class: 'lightbox-loading',
      box_content : 'Loading...',
      box_css : {
        background:'none'
      }
    });
  }
}