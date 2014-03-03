$(document).ready(function(){
	
<<<<<<< HEAD
	var options = {
		menu: 	false,
		pageX: 	null,
		pageY: 	null,
		startX: null,
		startY: null,
		timer: null,
		change: false,
	}
	
	
	$('.column a').click(function(){
		location.reload();
	});
	
	$('.panels .panels').hide();
	$('.panels .panels').eq(0).show();

	$(document).mousemove(function(e){
		options.pageX = e.pageX;
		options.pageY = e.pageY;
	});
=======
	$(window).load(function(){
		var subnav = $('.subnavigation').offset().top;
		
		$('.goat').click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 300);
			return false;
		});
>>>>>>> 3rd-Level-Displayed

		$(window).scroll(function(){
	        if($(window).scrollTop() > subnav) {
				if($('.goat').css("opacity") == 0){
					$('.goat').animate({opacity:1},300);
				}
	        	$('.subnavigation').css({
					position: 'fixed', 
					top: '0px'
				});
			}else{
				if($('.goat').css("opacity") == 1){
					$('.goat').animate({opacity:0},300);
				}
	        	$('.subnavigation').css({
					position: 'absolute', 
					top: 'auto'
				});
	        }
		});
	})


	$('.primary').click(function(event){
		var obj = $(this).hasClass('active');
		
		$el = $("."+$(this).attr('data'));
		$('.submenu').fadeOut(200);
		$el.fadeIn(300);

		$('.primary').removeClass("active");
		if(!obj){
			$(this).addClass("active");
		}	
		
		$(".submenus").animate({
			height: obj ? "0px" : "223px"
		},200);
		event.preventDefault();
	});
	
	$("article").click(function(){
		$('.submenus').animate({
			height: "0px"
		},200);
	});
	
});