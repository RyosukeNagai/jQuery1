$(function(){
  $('.box1').slideDown(function(){
  	$('.box1').css({
  		'background-color': 'green',
  		'height': '100px',
  	}).slideUp(1000);
  });
});

$(function(){
	$('.box2').mouseover(function(){
		$('.box2').addClass('box2-ext');
	});
	$('.box2').mouseout(function(){
		$('.box2').removeClass('box2-ext');
	});
});

$(function(){
	$('.box3').on('click', function(){
		$('.box3').addClass('box2-ext');
	});
	$('.box3').mouseout(function(){
		$('.box3').removeClass('box2-ext');
	});
});

$(function(){
	$('.box4').on('click', function(){
		$(this).slideUp();
	});
});

