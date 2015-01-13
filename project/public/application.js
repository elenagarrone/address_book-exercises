function capitalizeFirstLetter(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function(){
  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){

    $.each(data, function(i){
      $('.contacts').append("<li class=contact>" + data[i].surname + " " + data[i].first_name +
      " " + data[i].address + " " + data[i].phone_number + " " + data[i].email + "</li>")
    })

    $('li').sort(function(a,b){
      return $( a ).text() > $( b ).text();
    }).appendTo('ul')

    $('#search_button').on('click', function(){
      var search_name = capitalizeFirstLetter($('#search').val())

      $(".contacts li").each(function(){
        var text = $(this).text()

        if (text.indexOf(search_name) === -1) {
          $(this).hide();
        } else {
          $(this).show();
        }
      })

      $("<a class='all' href='#'>Show all</a>").insertAfter('form')
      $(".all").on('click', function(){
        $('li').show()
      })

    })

  })
})
