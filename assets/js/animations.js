var circles = $('.circle');
var topleftcontent = $('.top-left-content');

function circleResizer() {
	circles.each(function() {
		$(this).stop();
		$(this).css('width', topleftcontent.width()*$(this).data("size"));
		$(this).css('height', $(this).width());
	});
}

$(window).resize(function() {
	if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
    	startCircles();
    }, 500);

	circleResizer();
});


circleResizer();


function animateCircles(circle, bigger, time) {
	if(bigger) {
		circle.animate({
			width: "+=2%",
			height: "+=2%"
		}, time, function(){
			animateCircles(circle, false, time);
		});
	}else {
		circle.animate({
			width: "-=2%",
			height: "-=2%"
		}, time, function(){
			animateCircles(circle, true, time);
		});
	}
 }
 function startCircles() {
 	circles.each(function() {
 		animateCircles($(this), true, Math.floor((Math.random() * 2000) + 1000));
 	})
 }
 startCircles();
 


