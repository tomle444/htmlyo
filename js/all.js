$(function(){
	//alert("!");
	$('.recent-work').css('min-height', 640 );
	$('.menu-icon, .close').click(function(){
		if($('.trigger').hasClass('active')){
			$('.trigger, body').removeClass('active');
			$('.trigger').css('display', 'block');
			$('.trigger').css('right', '-100%');
			$('.overlay').hide(); 

		} else{
			$('.trigger, body').addClass('active');
			$('.trigger').css('display', 'block');
			$('.trigger').css('right', 0);
			$('.overlay').show();
		}
	});

	if($('.homepage').length || $('.work').length){
		$('.work-overlay').css('display', 'none');
		$('.work-link').hover(function(){
			$(this).find('.work-overlay').stop();
			$(this).find('.work-overlay').fadeIn();
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