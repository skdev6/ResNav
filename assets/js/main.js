$(function() {
	
// Wow Js Init
new WOW().init();


	// Header Nav Area
	$(".navbar-nav .nav-item .sub-menu").parent("li").each(function(){
		$(this).addClass('has-sub-menu');
		$(this).append('<span class="down-arrow-btn">');
	}); 

	$(window).on('resize', ResNav);

	function ResNav(){
		var WinWidth = $(window).innerWidth();
		if(WinWidth < 991){
			$(".down-arrow-btn").addClass('active-slide');
			$(".header-area .navbar .nav-toggle-btn").addClass('active-slide');
			$(".navbar-nav .nav-item .sub-menu").css('display', 'none');
			$(".header-area .navbar .nav-area").css('display', 'none');

		}else{
			$(".navbar-nav .nav-item .sub-menu").css('display', 'block');
			$(".header-area .navbar .nav-area").css('display', 'flex');
			$(".down-arrow-btn").removeClass('active-slide');
			$(".header-area .navbar .nav-toggle-btn").removeClass('active-slide');
			$(".nav-toggle-btn").removeClass('open'); 
		}
	} ResNav(); 

	$(".navbar-nav .nav-item .down-arrow-btn").click(function(){
		if ($(this).hasClass('active-slide')) {
			$(this).parent('li').children('.sub-menu').slideToggle("fast");
			$(this).toggleClass('active');
		}
	});

	$(".header-area .navbar .nav-toggle-btn").click(function(){
		if ($(this).hasClass('active-slide')) {
			$(".header-area .navbar .nav-area").slideToggle("fast");
		}
	});


	$(".nav-toggle-btn").click(function() {
		$(this).toggleClass('open'); 
	});


});