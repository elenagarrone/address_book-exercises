$(document).ready(function(){
  interface = new Interface();
  $('.hidden').hide();
  interface.displayContacts();

  $("#show_all").on('click', function(event){
    event.preventDefault();
    $('li').show();
  });

  $('#search_button').on('click', function(event){
    event.preventDefault();
    interface.displaySearchedContact();
    $('#search').val('');
  });
  
  $('#add_contact').on('click', function(event){
    event.preventDefault();
    $('#add_contact_form').show();
  });

  $('#submit_button').on('click', function(event){
    event.preventDefault();
    interface.postNewContact();
  });

  $('.contacts').on('click', '.rm_contact', function(){
    $('html, body').animate({scrollTop:0}, 'fast');
    interface.deleteContact(this);
  });

  $('.contacts').on('click', '.edit_contact', function(){
    $('html, body').animate({scrollTop:0}, 'fast');
    interface.preFillEditForm(this);
  });

  $('#edit_button').on('click', function(event){
    event.preventDefault();
    interface.editContact(this);
  });

  $('#close_add').on('click' , function(event){
    event.preventDefault();
    $('#add_contact_form').hide();
  });

  $('#close_edit').on('click' , function(event){
    event.preventDefault();
    $('#edit_contact_form').hide();
  });

});
