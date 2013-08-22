$(document).ready(function(){
  $('#get_color').on('click', function(e) {
    // console.log("click");
    e.preventDefault();



    var request = $.ajax({
      type: 'post',
      url: '/color'
    } );

    request.done(function(data) {
      //console.log(data.background);
      //console.log(data.box);
      //console.log(json);
      $('#color_me').find('li:nth-child('+data.box+')').css("background-color", data.background);
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log("not working");
    });

    request.always(function(arg1, arg2, arg3) {
      // console.log("always");
      // console.log(arg2);
    });

  });
});


