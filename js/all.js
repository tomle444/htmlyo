$(function(){
	//alert("!");
	$(".recent-work").css("min-height", 640 );
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