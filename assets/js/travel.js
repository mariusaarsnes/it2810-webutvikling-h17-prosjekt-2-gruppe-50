$(function() {


    var destinations = $(".travelDestination");
    destinations.mouseover(function () {
        $(this).css('width', '340px');
        $('h3', this).css('font-size', '35px');
    });

    destinations.mouseout(function () {
        $(this).css('width', '300px');
        $('h3', this).css('font-size', '25px');
    });



});




