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
      console.log(search_name)

      $(".contacts li").each(function(){
        var text = $(this).text()

        // If the list item does not contain the text phrase fade it out
        if (text.indexOf(search_name) === -1) { // use the variable here
          $(this).hide();

          // Show the list item if the phrase matches and increase the count by 1
        } else {
          $(this).show();
          // count++;
        }
        console.log('hi')

      });
    })

  })
})
