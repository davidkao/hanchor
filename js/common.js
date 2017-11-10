$(document).ready(function(){
	
});


$(window).load(function() {
	
	$('select').niceSelect();
	
	//hover function
	$( "[hov]" ).hover(function(){$(this).stop().fadeTo(100,$(this).attr('hov'));},function(){$(this).stop().fadeTo(100,1)});
	$( "[voh]" ).each(function(){
		voh = $(this).attr('voh');
		$(this).css('opacity',voh);
		})
	$( "[voh]" ).hover(function(){$(this).stop().fadeTo(100,1)},function(){$(this).stop().fadeTo(100,$(this).attr('voh'));});
	
	$('.enlarger').hover(function() {
        $(this).find('.enlarged').addClass('enlarge_effect').addClass('enlarge_transition');
    }, function() {
        $(this).find('.enlarged').removeClass('enlarge_effect');
    });		
	
	
	//tab
	$('.tab-sel .tab-btn').click(function(){
		var tab_id = $(this).attr('data-tab');

		$(this).parents().eq(1).find('.tab-btn').removeClass('active');
		$(this).parents().eq(1).find('.tab-inner').removeClass('active');

		$(this).addClass('active');
		$(this).parents().eq(1).find("."+tab_id).addClass('active');
	})
	
	
	//menu scrolling
	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 400) {
			$('header .fixarea').addClass('headerfix');
		} else {
			$('header .fixarea').removeClass('headerfix');
		}	
	}).scroll();
	
	
	//login bg get height
	$('.login-bg').height($(".index-content").height());
	
	//init wow
	new WOW().init();
	
	//rwd tab
	if ($(window).width() < 768) {
		$('.tab').addClass('rwd-tab');
	}
	else{
		$('.tab').removeClass('rwd-tab');
	}
	
	$(".tab").click(function (e) {
        
		$(this).find('.rwd-tab-show').fadeToggle(150);
		e.preventDefault();
        
    });
	
	
	$(".currency-now").click(function (e) {
        
		$(this).parent().find('.drop').fadeToggle(150);
		e.preventDefault();
        
    });
	
	
	//visual_center
	$('.v-centerimg').centerImage();
	$('.v-centerimg-is').centerImage('inside');
	
	
	$(window).resize(function() {
		$('.login-bg').height($(".index-content").height());
		$('.v-centerimg').centerImage();
		$('.v-centerimg-is').centerImage('inside');
		
		if ($(window).width() < 768) {
			$('.tab').addClass('rwd-tab');
		}
		else{
			$('.tab').removeClass('rwd-tab');
		}
		
	});
	
	
	// Tooltip only Text
	$('.masterTooltip .label-radio').hover(function(){
			// Hover over code
			var title = $(this).attr('title');
			$(this).data('tipText', title).removeAttr('title');
			$('<p class="tooltip"></p>')
			.text(title)
			.appendTo('body')
			.fadeIn('slow');
	}, function() {
			// Hover out code
			$(this).attr('title', $(this).data('tipText'));
			$('.tooltip').remove();
	}).mousemove(function(e) {
			var mousex = e.pageX + 20; //Get X coordinates
			var mousey = e.pageY + 10; //Get Y coordinates
			$('.tooltip')
			.css({ top: mousey, left: mousex })
	});
	
	
});
