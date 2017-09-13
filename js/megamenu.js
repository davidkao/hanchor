/*global $ */
$(document).ready(function () {

    "use strict";
	
	$(".menu .layer-1-ul").css({"top":$("header").height()});
	$(window).resize(function() {
		$(".menu .layer-1-ul").css({"top":$("header").height()});
	});
	
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<div class=\"menu-mobile menu-ico\"></div>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(function (e) {
        if ($(window).width() > 1199) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function () {
        if ($(window).width() <= 1199) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
		$(this).toggleClass("close");
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
	
	

});