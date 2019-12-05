(function($) {
	"use strict";
    $('.site-nav ul li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.subpage > section').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
	}
	)
	//On Window load & Resize
	$(window)
	.on('load', function() { //Load

	// initializing page transition.
	var ptPage = $('.subpages');
	if (ptPage[0]) {
		PageTransitions.init({
			menu: 'ul.site-main-menu',
		});
	}
})

.scroll(function () {
	if ($(window).scrollTop() < 20) {
		$('.suitable-header').removeClass('sticked');
	} else {
		$('.suitable-header').addClass('sticked');
	}
})
.scrollTop(0);
// On Document Load
$(document).on('ready', function() {
	$('.blog-masonry').masonry({
	// options
	itemSelector: '.item',

	});
	//Form Controls
	$('.form-control')
	.val('')
	.on("focusin", function(){
		$(this).parent('.form-group').addClass('form-group-focus');
	})
	.on("focusout", function(){
		if($(this).val().length === 0) {
			$(this).parent('.form-group').removeClass('form-group-focus');
		}
	});


});
	//Google maps
	$(function() {
		$("#map").googleMap({
		  zoom: 10, // Initial zoom level (optional)
		  coords: [48.895651, 2.290569], // Map center (optional)
		  type: "ROADMAP" // Map type (optional)
		});
	  })
})(jQuery);