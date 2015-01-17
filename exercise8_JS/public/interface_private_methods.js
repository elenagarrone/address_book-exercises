Interface.prototype._capitalizeFirstLetter = function(str){
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

Interface.prototype._listNewContact = function(data){
  $('.contacts').append("<li data-id=" + data.id + ">" + 
  "<h4>" + data.surname + " " + data.first_name + ":</h4>" +
  "<p id='address'>" + data.address + "</p>" + 
  "<p id='phone'>" + data.phone_number + "</p>" + 
  "<p id='email'>" + data.email + "</p>" +
  '<button class="rm_contact" id=rm_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Remove</button>' +
  '<button class="edit_contact" id=edit_'+ data.first_name + ' data-id=' + data.id + ' type="submit">Edit</button>'+ 
  "</li>");
};

Interface.prototype._alphabeticalOrder = function(){
  var mylist = $('ul');
  var listitems = mylist.children('li').get();
  listitems.sort(function(a, b) {
    var compA = $(a).text().toUpperCase();
    var compB = $(b).text().toUpperCase();
    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
  });
  $.each(listitems, function(idx, itm) { mylist.append(itm); });
};

Interface.prototype._validationsOn = function(nameElement, surnameElement){
  var name_validation = $(nameElement).val();
  var surname_validation = $(surnameElement).val();
  if (name_validation === "" && surname_validation === "" ) {
    this._flashMessage("Name and surname are required.");
  } else if (surname_validation === "") {
    this._flashMessage("A surname is required.");
  } else if (name_validation === "") {
    this._flashMessage("A name is required.");
  }
};

Interface.prototype._flashMessage = function(string){
  $('#add_contact').after('<h5>' + string + '</h5>');
  setTimeout(function(){
    $('h5').remove();
  }, 1500);
};

Interface.prototype._fllingForm = function(name, surname, address, email, phone){
  $('#edit_contact_form').show();
  $('#edit_name').val(name);
  $('#edit_surname').val(surname);
  $('#edit_address').val(address);
  $('#edit_email').val(email);
  $('#edit_number').val(phone);
};