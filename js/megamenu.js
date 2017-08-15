/*global $ */
$(document).ready(function () {

    //開啟嚴格模式   "use strict";

    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $('.menu > ul').before('<div class=\"menu-mobile menu-ico\"></div>');


    $('.menu > ul > li').hover(function (e) {
        if ($(window).width() > 1199) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    

    $(".menu > ul > li").click(function () {
        if ($(window).width() <= 1199) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
		$(this).toggleClass("close");
        e.stopPropagation();
    });
	
	
	
	//member dropdown menu  
	$('.member-dropdown').click(function (e) {
		if($('.member-dropdown-ul').is(':visible')){
			$('.member-dropdown-ul').fadeOut('fast');
			$('.member-dropdown,.name').removeClass('close');
		}
		else{
			$('.member-dropdown-ul').fadeIn(50);
			$('.member-dropdown,.name').addClass('close');
		}
		e.stopPropagation();
    });
	
	
	$('body').click(function (e) {
		if ($('.menu-mobile.close:visible').size() != 0){
			$('.menu > ul').removeClass('show-on-mobile');
			$('.menu-mobile').removeClass('close');
		}
		
		if($('.member-dropdown-ul').is(':visible')){
			$('.member-dropdown-ul').fadeOut('fast');
			$('.member-dropdown,.name').removeClass('close');
		}
		
    });
	

});