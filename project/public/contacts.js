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
      $('.add_contact_form').append("<input class='add_address' type='text' name='address' placeholder='Address'>" )
      $('.add_contact_form').append("<input class='add_email' type='email' name='email' placeholder='Email'>" )
      $('.add_contact_form').append("<input class='add_phone' type='text' name='phone_number' placeholder='Phone number'>" )
      $('.add_contact_form').append("<input class='submit_contact' type='submit' value='Submit'>")

      $('.submit_contact').on('click', function(){
        var name = $('input[name=name]').val()
        var surname = $('input[name=surname]').val()
        var address = $('input[name=address]').val()
        var email = $('input[name=email]').val()
        var phone_number = $('input[name=phone_number]').val()
        $.post('http://fast-gorge.herokuapp.com/contacts', {
          "first_name": name,
          "surname": surname,
          "address": address,
          "phone_number": phone_number,
          "email": email,
        })
      })


    })

  })


})
