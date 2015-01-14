function capitalizeFirstLetter(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function(){

  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){

    $.each(data, function(i){
      $('.contacts').append("<li class=" + data[i].id + ">" + data[i].surname + " " + data[i].first_name +
      " " + data[i].address + " " + data[i].phone_number + " " + data[i].email + "</li>")
    })

    $('li').sort(function(a,b){
      return $( a ).text() > $( b ).text();
    }).appendTo('ul')

    $("<a class='all' href='#'>Show all</a>").insertAfter('.search_form')
    $('.all').hide()

    $('#search_button').on('click', function(){
      var search_name = capitalizeFirstLetter($('#search').val())

      $(".all").on('click', function(){
        $('li').show()
      })

      $(".contacts li").each(function(){
        var text = $(this).text()

        if (text.indexOf(search_name) === -1) {
          $(this).hide();
        } else {
          $(this).show();
          $('.all').show()
        }
      })

    })

    $('.add_contact').on('click', function(){
      $('.add_contact_form').append("<input class='add_name' type='text' name='name' placeholder='Name'>" )
      $('.add_contact_form').append("<input class='add_surname' type='text' name='surname' placeholder='Surname'>" )
      $('.add_contact_form').append("<input class='add_email' type='email' name='email' placeholder='Email'>" )
      $('.add_contact_form').append("<input class='add_phone' type='text' name='phone_number' placeholder='Phone number'>" )
    })

  })

  // $.post('http://fast-gorge.herokuapp.com/contacts', function(data){
  //
  //
  //
  // })

})
