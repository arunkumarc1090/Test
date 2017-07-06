jQuery(document).ready(function() {

// Active and smooth scroll script
function scroll() {
	$('a').click(function(){  
		//Toggle Class
		$(".active").removeClass("active");      
		$(this).closest('li').addClass("active");

		//var theClass = $(this).attr("href");
		$('href').parent('li').addClass('active');
			//Animate
			$('html, body').stop().animate({
				scrollTop: $( $(this).attr('href') ).offset().top 
			}, 1500);
			return false;
		  });
		$('.scrollTop a').scrollTop();
	}
scroll();

});