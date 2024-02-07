$(document).ready(function() {
	setInterval(function(){
		var screenHeight = $(document).height();
		var screenWidth = $('.wrapper').width();
		var startLeft = getRandom(0,screenWidth);
		var timeRun = getRandom(10000,12000);
		var opacityR = Math.random() * (1-0.2) + 0.2;
		var sizeRandom = getRandom(5,20);
		var endLeft = getRandom(startLeft, startLeft);
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
		.appendTo('.wrapper')
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
	},200);
});
function getRandom(min, max){
	return Math.floor(Math.random() * (max-min)) + min;
}
function hasClassName(inElement, inClassName)
    {
        var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
        return regExp.test(inElement.className);
}

    function addClassName(inElement, inClassName)
    {
        if (!hasClassName(inElement, inClassName))
            inElement.className = [inElement.className, inClassName].join(' ');
}

    function removeClassName(inElement, inClassName)
    {
        if (hasClassName(inElement, inClassName)) {
            var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
            var curClasses = inElement.className;
            inElement.className = curClasses.replace(regExp, ' ');
        }
}

    function toggleClassName(inElement, inClassName)
    {
        if (hasClassName(inElement, inClassName))
            removeClassName(inElement, inClassName);
        else
            addClassName(inElement, inClassName);
}

    function toggleShape()
    {
      var shape = document.getElementById('shape');
      if (hasClassName(shape, 'ring')) {
        removeClassName(shape, 'ring');
        addClassName(shape, 'cube');
      } else {
        removeClassName(shape, 'cube');
        addClassName(shape, 'ring');
      }
      
      var stage = document.getElementById('stage');
      if (hasClassName(shape, 'ring'))
        stage.style.webkitTransform = 'translateZ(-200px)';
      else
        stage.style.webkitTransform = '';
}