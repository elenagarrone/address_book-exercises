function capitalizeFirstLetter(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function(){
  $.get('http://fast-gorge.herokuapp.com/contacts', function(data){

    $.each(data, function(i){
      $('.contacts').append("<li class=" + data[i].id + ">" + data[i].surname + " " + data[i].first_name +
      " " + data[i].address + " " + data[i].phone_number + " " + data[i].email + "</li>")
    })

    $('li').sort(function(a,b){
      return $( a ).text() > $( b ).text();
    }).appendTo('ul')

    $("<a class='all' href='#'>Show all</a>").insertAfter('form')
    $('.all').hide()

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

  })
})
