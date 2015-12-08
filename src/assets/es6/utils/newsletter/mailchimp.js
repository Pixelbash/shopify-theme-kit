export default class Newsletter {
  constructor() {
    //this.pub();
  }
  
  pub() {
    var $form = $('#newsletter');

    //On click send open 'cast
    $form.on('submit', function(e){
      console.log('broadcast newsletter signup');
      e.preventDefault();
      radio('action/newsletter').broadcast({
        action : 'signup',
        event : e,
        $form : $form
      });
    });
  }
  
  sub() {
    radio('action/newsletter').subscribe((data) => {
      var $form    = data.$form;
      var $success = $form.find('.success');
      var $error   = $form.find('.error');

      var action = String($form.attr('action'));

      $error.hide();
      $.ajax({
        type: $form.attr('method'),
        url: action,
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        error: function(err) {
          alert("Could not connect to the registration server. Please try again later.");
        },
        success: function(data) {
          console.log(data);
          if (data.result != "success") {
            // Something went wrong, do something to notify the user. maybe alert(data.msg);
            $error.text('Please enter a valid email address').show();
          } else {
            // It worked, carry on...
            $form.find('input').val('');
            $success.show();
          }
        }
      });
    });
  }
}