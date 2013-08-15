$(document).ready(function(){
  $('#get_color').on('click', function(e) {
    console.log("click");
    e.preventDefault();



    var request = $.ajax({
      type: 'post',
      url: '/color',
    } );

    request.done(function(server_data) {
      console.log(server_data.background);
      console.log(server_data.box);
      //console.log(json);
      $('#color_me').find('li:nth-child('+server_data.box+')').css("background-color", ""+server_data.background+"");
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
      console.log("not working");
    });

    request.always(function(arg1, arg2, arg3) {
      //console.log("always");
    });

  });
});


// $('ul li:nth-child(random_number)').css("background-color", "random_color")