
$('#playButton').click(function () {
	console.log("play button clicked");
	$('#carousel-flowers').carousel('cycle');
});
$('#pauseButton').click(function () {
	console.log("pause button clicked");
	$('#carousel-flowers').carousel('pause');
});



$(document).ready(function() {

	spectrum();
	//NOW TAKING CONTROL OF THE CAPTIONS AND ADDING ANIMATIONS
	//https://www.sitepoint.com/bootstrap-carousel-with-css3-animations/
	//Function to animate slider captions
    function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $('#carousel-flowers'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel
    $myCarousel.carousel({
			interval: 5000,
			pause: "false"
		});

    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);

    //Pause carousel
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
        // STOPPING THE CYCLING AT THE LAST SLIDE
			  if ($('.carousel-inner .item:last').hasClass('active')) {
					  console.log("Pausing on the last slide");
						$('#pauseButton').trigger("click");
            $('#carousel-flowers').carousel('pause');
        }

    });










});
function spectrum() {
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  console.log("hue " + hue);
	$('#wrapper.jumbotron').animate({
		backgroundColor : hue
	}, 5000);
//	spectrum();
   setTimeout(spectrum,5000);
}
