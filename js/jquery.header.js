$(document).ready(function(){
	
	var options = {
		menu: 	false,
		pageX: 	null,
		pageY: 	null,
		startX: null,
		startY: null,
		timer: null,
		change: false,
	}
	
	$('.panels .panels').hide();
	$('.panels .panels').eq(0).show();

	$(document).mousemove(function(e){
		options.pageX = e.pageX;
		options.pageY = e.pageY;
	});

	$('aside').hover(function() {
		options.startX = options.pageX;
	}, function(){
		options.startX = null;
		options.change = false;
	}).mousemove(function(){
		if(options.pageX >= (options.startX + 40) || options.pageX >= (options.startX - 40)) {
			options.change = true;
		}
	});

	$('aside a').hover(function(){
		$el = $(this);
		options.timer = window.setInterval(function(){
			if(options.change){
				$('aside a').removeClass('active');
				$el.addClass('active');
				$obj = $el.attr('data');
				$obj = $('.'+$obj);
				$('.panels .panels').hide();
				$obj.show();
			}
		},100);
	}, function(){
		window.clearInterval(options.timer);
	}).click(function(e){
		e.preventDefault();
	});

	$.fn.closeMenu = function() {
		$('.overlay').animate({
			opacity: 0
		},300, function(){
			$('.overlay').hide();
		});
		$('.submenu').animate({
			'height':'0px',
			'opacity':0
		},200, function(){
			$('.submenu').show();
		});
		options.menu = !options.menu;
	}

	$.fn.openMenu = function() {
		$('.overlay').show();
		$('.overlay').animate({
			opacity: 0.4
		},300);
		$('.submenu').show();
		$('.submenu').animate({
			'height':'400px',
			'opacity':1
		},200);		
		options.menu = !options.menu;
	}
	
	$("#shop").click(function(e){
		if(!options.menu){
			$(this).openMenu();
		}else{
			$(this).closeMenu();
		}
		e.preventDefault();
	});
	
	$('.overlay').click(function(e){
		$(this).closeMenu();
		e.preventDefault();
	});
	
});