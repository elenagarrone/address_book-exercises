function displayContacts(){
  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){
    $.each(data, function(i, data){ _listNewContact(data); });
    _alphabeticalOrder();
  });
}

function displaySearchedContact(){
  var search_name = _capitalizeFirstLetter($('#search').val());
  $(".contacts li").each(function(){
    var text = $(this).text();
    if (text.indexOf(search_name) === -1) {
      $(this).hide();
    } else {
      $(this).show();
      $('#show_all').show();
    }
  });
}

function postNewContact(){
  var name = $('input[name=name]').val();
  var surname = $('input[name=surname]').val();
  var address = $('input[name=address]').val();
  var email = $('input[name=email]').val();
  var phone_number = $('input[name=phone_number]').val();
  $.post('http://fast-gorge.herokuapp.com/contacts', {
    "first_name": name,
    "surname": surname,
    "address": address,
    "phone_number": phone_number,
    "email": email
  }, function(data){
    _listNewContact(data);
    $('#add_contact_form input').val('');
    $('#add_contact_form').hide();
    _alphabeticalOrder();
  })
  .fail(function() {
    _validationsOn('input[name=name]', 'input[name=surname]');
  })
  .done(function() {
    _flashMessage("The contact has been added successfully!");
  });
}

function editContact(element){
  var name = $('#edit_name').val();
  var surname = $('#edit_surname').val();
  var address = $('#edit_address').val();
  var email = $('#edit_email').val();
  var phone_number = $('#edit_number').val();
  var contact_id = $(element).data('id');
  $.ajax({
    url: "http://fast-gorge.herokuapp.com/contacts/",
    data: { id: contact_id, first_name: name, surname: surname, address: address, email: email, phone_number: phone_number },
    type: "PUT",
    success: function(data){
      $('li[data-id="'+ data.id +'"]').remove();
      _listNewContact(data);
      _flashMessage('The contact has been edited successfully!');
      $('#edit_contact_form input').val('');
      $('#edit_contact_form').hide();
      _alphabeticalOrder();
    },
    error: function(){
      _validationsOn('#edit_name', '#edit_surname');
    }
  });
}

function deleteContact(element){
  var contact_id = $(element).data('id');
  $.ajax({
    url: "http://fast-gorge.herokuapp.com/contacts/",
    data: { id: contact_id },
    type: "DELETE",
    success: function(data){
      $('li[data-id="'+ data.id +'"]').remove();
      _flashMessage('The contact has been deleted successfully!');
    }
  });
}

function preFillEditForm(element){
  var id = $(element).data('id');
  $('#edit_button').attr('data-id', id);
  var name_surname = $('li[data-id="'+ id +'"] h4').text().slice(0,-1).split(' ');
  var name = name_surname[0];
  var surname = name_surname[1];
  var address = $('li[data-id="'+ id +'"] p#address').text();
  var email = $('li[data-id="'+ id +'"] p#email').text();
  var phone = $('li[data-id="'+ id +'"] p#phone').text();
  $('#edit_contact_form').show();
  _fllingForm(name, surname, address, email, phone);
}

function _capitalizeFirstLetter(str){
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function _listNewContact(data){
  $('.contacts').append("<li data-id=" + data.id + "><h4>" + data.surname + " " + data.first_name + ":</h4>" +
  "<p id='address'>" + data.address + "</p><p id='phone'>" + data.phone_number + "</p><p id='email'>" + data.email + "</p>" +
  '<button class="rm_contact" id=rm_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Remove</button>' +
  '<button class="edit_contact" id=edit_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Edit</button>'+ 
  "</li>");
}

function _alphabeticalOrder(){
  var mylist = $('ul');
  var listitems = mylist.children('li').get();
  listitems.sort(function(a, b) {
    var compA = $(a).text().toUpperCase();
    var compB = $(b).text().toUpperCase();
    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
  });
  $.each(listitems, function(idx, itm) { mylist.append(itm); });
}

function _validationsOn(nameElement, surnameElement){
  var name_validation = $(nameElement).val();
  var surname_validation = $(surnameElement).val();
  if (name_validation === "" && surname_validation === "" ) {
    _flashMessage("Name and surname are required.");
  } else if (surname_validation === "") {
    _flashMessage("A surname is required.");
  } else if (name_validation === "") {
    _flashMessage("A name is required.");
  }
}

function _flashMessage(string){
  $('#add_contact').after('<h5>' + string + '</h5>');
  setTimeout(function(){
    $('h5').remove();
  }, 1500);
}

function _fllingForm(name, surname, address, email, phone){
  $('#edit_contact_form').show();
  $('#edit_name').val(name);
  $('#edit_surname').val(surname);
  $('#edit_address').val(address);
  $('#edit_email').val(email);
  $('#edit_number').val(phone);
}




$(document).ready(function(){
  $('.hidden').hide();
  displayContacts();

  $('.contacts').on('click', '.rm_contact', function(){
    $('html, body').animate({scrollTop:0}, 'fast');
    deleteContact(this);
  });

  $('.contacts').on('click', '.edit_contact', function(){
    $('html, body').animate({scrollTop:0}, 'fast');
    preFillEditForm(this);
  });

  $('#search_button').on('click', function(event){
    event.preventDefault();
    displaySearchedContact();
  });

  $("#show_all").on('click', function(event){
    event.preventDefault();
    $('li').show();
  });

  $('#add_contact').on('click', function(event){
    event.preventDefault();
    $('#add_contact_form').show();
  });

  $('#submit_button').on('click', function(event){
    event.preventDefault();
    postNewContact();
  });

  $('#edit_button').on('click', function(event){
    event.preventDefault();
    editContact(this);
  });

});
