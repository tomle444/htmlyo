$(function(){
	//alert("!");
	var navigationWidth = 400;
	$('.recent-work').css('min-height', 640 );
	$('.overlay').css('display', 'none' );
	$('.trigger').css('right', -navigationWidth );
	$('.trigger').css('width', navigationWidth );
	$('.menu-icon, .close').click(function(){
		if($('.trigger').hasClass('active')){
			$('.trigger, body').removeClass('active');
			$('.trigger').css('right', -navigationWidth );
			$('.main-container').css('right', 0 );
			$('.overlay').fadeOut(100); 

		} else{
			$('.trigger, body').addClass('active');
			$('.trigger').css('right', 0);
			$('.main-container').css('right', navigationWidth );
			$('.overlay').fadeIn();
		}
	});

	if($('.homepage').length || $('.work').length){
		$('.work-overlay').css('display', 'none');
		$('.work-link').hover(function(){
			$(this).find('.work-overlay').stop();
			$(this).find('.work-overlay').fadeIn(100);
		},
			function(){
				$(this).find('.work-overlay').fadeOut();
			}
		);
	}


	/**
	** Mobile Testing
	**/
	var isMobile = {
		Android: function() {
		    return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
		    return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
		    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
		    return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
		    return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
		    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if( isMobile.any() ) {
		$('body').addClass('touch');
	} else {
		$('body').addClass('no-touch');
	};
});

$(document).bind('ready scroll', function() {
    /*if ($(this).scrollTop() > 200) {
        if (!$('.site-header').hasClass('stickynav')) {
            $('.site-header').addClass('stickynav').css({
            	top: '-80px'
            }).stop().animate({
            	top: 0
            }, 500);

        }
    } else {

            $('.site-header').removeClass('stickynav').removeAttr('style');
        
    }*/
});



$( window ).load(function() {				
	function setHeight(){
		divHeight = $(".recent-work img").innerHeight();
		$(".recent-work").css("min-height", divHeight );
	};
	setHeight();
	

	/* Adjust container div height based on window resize */	
	$(window).resize(function(){
		setHeight();
	});
});