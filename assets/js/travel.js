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


    var index = 1;
    changeSlides(index);

    $('#left').click(function() {
        changeSlides( index -= 1);
    });
    $('#right').click(function() {
        changeSlides( index += 1);
    });


    function changeSlides(n) {
        var slides = $('.slides');
        if (n > slides.length-1) {
            index = 0;
        }
        else if (n < 0) {
            index = slides.length-1;
        }

        slides.css('display', 'none');
        $(slides[index]).css('display', 'block');
    }

    setInterval(function() {
        changeSlides(index += 1);
    }, 10000);
});




