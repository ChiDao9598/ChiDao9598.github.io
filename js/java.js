function getRandom(min, max){
	return Math.floor(Math.random() * (max-min)) + min;
}

$(document).ready(function() {
	setInterval(function(){
		var screenHeight = $(document).height();
		var screenWidth = $('.container').width();
		var startLeft = getRandom(0,screenWidth);
		var timeRun = getRandom(4000,6000);
		var opacityR = Math.random() * (1-0.2) + 0.2;
		var sizeRandom = getRandom(5,20);
		var endLeft = getRandom(startLeft-200, startLeft+200);
		var heart = document.createElement('span');

		$(heart).addClass('snow-item fa fa-heart').css({
			'position' : 'absolute',
			'z-index' :'auto',
			'color' : '#ff0000',
			'display' : 'block',
			'top' : 0,
			'left' : startLeft,
			'opacity' : opacityR,
			'font-size' : sizeRandom+'px'
		})
		.appendTo('body')
		.animate({
			'top': screenHeight - sizeRandom,
			'left' : endLeft,
		}, {
			duration : timeRun,
			easing : 'linear',
			complete : function(){
				$(this).fadeOut('fast', function() {
					$(this).remove();		
					});
				}
			});
	},100);
});
