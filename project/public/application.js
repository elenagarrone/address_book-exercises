$(document).ready(function(){
  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){
    $('.contacts').append("<li>" + data[0].surname + "</li>")
  })
})
