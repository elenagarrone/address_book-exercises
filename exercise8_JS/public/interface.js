function Interface(){}

Interface.prototype.displayContacts = function(){
  var _this = this;
  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){
    $.each(data, function(i, data){ _this._listNewContact(data); });
    _this._alphabeticalOrder();
  });
};

Interface.prototype.displaySearchedContact = function(){
  var search_name = this._capitalizeFirstLetter($('#search').val());
  $(".contacts li").each(function(){
    var text = $(this).text();
    if (text.indexOf(search_name) === -1) {
      $(this).hide();
    } else {
      $(this).show();
      $('#show_all').show();
    }
  });
};

Interface.prototype.postNewContact = function(){
  var name = $('input[name=name]').val();
  var surname = $('input[name=surname]').val();
  var address = $('input[name=address]').val();
  var email = $('input[name=email]').val();
  var phone_number = $('input[name=phone_number]').val();
  var _this = this;
  $.post('http://fast-gorge.herokuapp.com/contacts', {
    "first_name": name,
    "surname": surname,
    "address": address,
    "phone_number": phone_number,
    "email": email
  }, function(data){
    _this._listNewContact(data);
    $('#add_contact_form input').val('');
    $('#add_contact_form').hide();
    _this._alphabeticalOrder();
  })
  .fail(function() {
    _this._validationsOn('input[name=name]', 'input[name=surname]');
  })
  .done(function() {
    _this._flashMessage("The contact has been added successfully!");
  });
};

Interface.prototype.editContact = function(element){
  var name = $('#edit_name').val();
  var surname = $('#edit_surname').val();
  var address = $('#edit_address').val();
  var email = $('#edit_email').val();
  var phone_number = $('#edit_number').val();
  var contact_id = $(element).data('id');
  var _this = this;
  $.ajax({
    url: "http://fast-gorge.herokuapp.com/contacts/",
    data: { id: contact_id, first_name: name, surname: surname, address: address, email: email, phone_number: phone_number },
    type: "PUT",
    success: function(data){
      $('li[data-id="'+ data.id +'"]').remove();
      _this._listNewContact(data);
      _this._flashMessage('The contact has been edited successfully!');
      $('#edit_contact_form input').val('');
      $('#edit_contact_form').hide();
      _this._alphabeticalOrder();
    },
    error: function(){
      _this._validationsOn('#edit_name', '#edit_surname');
    }
  });
};

Interface.prototype.deleteContact = function(element){
  var contact_id = $(element).data('id');
  var _this = this;
  $.ajax({
    url: "http://fast-gorge.herokuapp.com/contacts/",
    data: { id: contact_id },
    type: "DELETE",
    success: function(data){
      $('li[data-id="'+ data.id +'"]').remove();
      _this._flashMessage('The contact has been deleted successfully!');
    }
  });
};

Interface.prototype.preFillEditForm = function(element){
  var id = $(element).data('id');
  $('#edit_button').attr('data-id', id);
  var name_surname = $('li[data-id="'+ id +'"] h4').text().slice(0,-1).split(' ');
  var name = name_surname[0];
  var surname = name_surname[1];
  var address = $('li[data-id="'+ id +'"] p#address').text();
  var email = $('li[data-id="'+ id +'"] p#email').text();
  var phone = $('li[data-id="'+ id +'"] p#phone').text();
  $('#edit_contact_form').show();
  this._fllingForm(name, surname, address, email, phone);
};