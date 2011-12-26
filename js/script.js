(function ($, smoke) {
    $(function (){
	$('a').smoothScroll();
	$('audio').mediaelementplayer({
	    features: ['playpause','current','volume','fullscreen']
	});

	if (smoke) {
	    smoke.imgLocation = "img/smoke.png";
            smoke.smokeWidth = 130;
            smoke.smokeHeight = 100;
            smoke.makeEffect("smoke", 0, 0);
	}
  });
}(jQuery, SmokeEffect));







