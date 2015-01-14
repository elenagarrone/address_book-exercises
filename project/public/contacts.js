function capitalizeFirstLetter(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function(){
  $('.add_contact_form').hide()
  $('.all').hide()

  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){

    $.each(data, function(i){
      $('.contacts').append("<li>" + data[i].surname + " - " + data[i].first_name + ":  " + data[i].address + " - " + data[i].phone_number + " - " + data[i].email +
      '<button class="rm_contact delete" data-id=' + data[i].id + ' type="submit">Remove</button>' + "</li>")
    })
  })


    $('.contacts').on('click', '.rm_contact', function(){
      var contact_id = $(this).data('id')
      $.ajax({
        url: "http://fast-gorge.herokuapp.com/contacts/",
        data: { id: contact_id },
        type: "DELETE",
        success: function(data){ console.log(data)}
      });
    })


    $('li').sort(function(a,b){
      return $( a ).text() > $( b ).text();
    }).appendTo('ul')


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
      $('.add_contact_form').show()
    })

      $('#submit_button').on('click', function(event){
        event.preventDefault()
        var name = $('input[name=name]').val()
        var surname = $('input[name=surname]').val()
        var address = $('input[name=address]').val()
        var email = $('input[name=email]').val()
        var phone_number = $('input[name=phone_number]').val()

        // $.ajax({
        //   url: 'http://fast-gorge.herokuapp.com/contacts',
        //   type: 'POST',
        //   data: { first_name: name, surname: surname, address: address, email: email, phone_number: phone_number }
        // })

        $.post('http://fast-gorge.herokuapp.com/contacts', {
          "first_name": name,
          "surname": surname,
          "address": address,
          "phone_number": phone_number,
          "email": email
        }, function(data){
          console.log(data)
          $('.contacts').append("<li>" + data.surname + " - " + data.first_name + ":  " + data.address + " - " + data.phone_number + " - " + data.email +
          '<button class="rm_contact delete" data-id=' + data.id + ' type="submit">Remove</button>' + "</li>")
        })
      })

})
