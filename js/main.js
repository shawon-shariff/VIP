$(document).ready(function(){
	
	// loader
     $(window).load(function(){
	    $('.preloader').delay(500).fadeOut(700);
	  })
    // typed plugin
	var typed = new Typed('.sub-text', {
	  	strings: ['VIP IN THE BLACK'],
	  	typeSpeed: 100,
	  	startDelay: 0,
	  	loop:false,
	  	showCursor: false,
	});

});