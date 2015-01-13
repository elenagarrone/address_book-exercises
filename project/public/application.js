$(document).ready(function(){
  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){
    $.each(data, function(i){
      $('.contacts').append("<li class='contact'>" + data[i].surname + " " + data[i].first_name + "</li>")
    })
  })
})
