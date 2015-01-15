function capitalizeFirstLetter(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function(){
  $('.add_contact_form').hide()
  $('.edit_contact_form').hide()
  $('.all').hide()

  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){

    $.each(data, function(i, data){
      $('.contacts').append("<li data-id=" + data.id + ">" + data.surname + " " + data.first_name + ":  " + data.address + " - " + data.phone_number + " - " + data.email +
      '<button class="rm_contact" id=rm_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Remove</button>' +
      '<button class="edit_contact" id=edit_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Edit</button>'
      + "</li>")
    })

    var mylist = $('ul');
    var listitems = mylist.children('li').get();
    listitems.sort(function(a, b) {
      var compA = $(a).text().toUpperCase();
      var compB = $(b).text().toUpperCase();
      return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    })
    $.each(listitems, function(idx, itm) { mylist.append(itm); });

  })


  $('.contacts').on('click', '.rm_contact', function(){
    var contact_id = $(this).data('id')
    $.ajax({
      url: "http://fast-gorge.herokuapp.com/contacts/",
      data: { id: contact_id },
      type: "DELETE",
      success: function(data){
        $('li[data-id="'+ data.id +'"]').remove()
      }
    });
  })


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

    $.post('http://fast-gorge.herokuapp.com/contacts', {
      "first_name": name,
      "surname": surname,
      "address": address,
      "phone_number": phone_number,
      "email": email
    }, function(data){
      $('.contacts').append("<li data-id=" + data.id + ">" + data.surname + " " + data.first_name + ":  " + data.address + " - " + data.phone_number + " - " + data.email +
      '<button class="rm_contact" id=rm_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Remove</button>' +
      '<button class="edit_contact" id=edit_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Edit</button>'
      + "</li>")

      $('.add_contact_form input').val('')

      $('.add_contact_form').hide()

      var mylist = $('ul');
      var listitems = mylist.children('li').get();
      listitems.sort(function(a, b) {
        var compA = $(a).text().toUpperCase();
        var compB = $(b).text().toUpperCase();
        return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
      })
      $.each(listitems, function(idx, itm) { mylist.append(itm); });

    })
  })


  $('.contacts').on('click', '.edit_contact', function(){
    id = $(this).data('id')
    $('#edit_button').attr('data-id', id);
    $('.edit_contact_form').show()
  })


  $('#edit_button').on('click', function(event){

    event.preventDefault()
    var name = $('#edit_name').val()
    var surname = $('#edit_surname').val()
    var address = $('#edit_address').val()
    var email = $('#edit_email').val()
    var phone_number = $('#edit_number').val()
    var contact_id = $(this).data('id')
    $.ajax({
      url: "http://fast-gorge.herokuapp.com/contacts/",
      data: { id: contact_id, first_name: name, surname: surname, address: address, email: email, phone_number: phone_number },
      type: "PUT",
      success: function(data){
        $('li[data-id="'+ data.id +'"]').remove()
        $('.contacts').append("<li data-id=" + data.id + ">" + data.surname + " " + data.first_name + ":  " + data.address + " - " + data.phone_number + " - " + data.email +
          '<button class="rm_contact" id=rm_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Remove</button>' +
          '<button class="edit_contact" id=edit_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Edit</button>'
          + "</li>")

        $('.edit_contact_form input').val('')

        $('.edit_contact_form').hide()

        var mylist = $('ul');
        var listitems = mylist.children('li').get();
        listitems.sort(function(a, b) {
          var compA = $(a).text().toUpperCase();
          var compB = $(b).text().toUpperCase();
          return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
        })
        $.each(listitems, function(idx, itm) { mylist.append(itm); });

      }
    });

  })


})
