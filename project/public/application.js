$(document).ready(function(){
  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){
    $.each(data, function(i){
      $('.contacts').append("<li>" + data[i].surname + " " + data[i].first_name + "</li>")
    })
  })
})
