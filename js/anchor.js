$(window).ready(function(){// By YHK
	
	
	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		var anchortop = anchorttopsize();
		
		if($(window).width() >= 768){
		
			if(windscroll >= anchortop){
				$('.sidebar-fix').addClass('fixed');
			} else{
				$('.sidebar-fix').removeClass('fixed');
			}
		}
		
		else{
			
		}
		
		
	}).scroll();
	
	/**/
	function anchorttopsize(){
		var val;
		if($(window).width()>=1200){
			val = 0;
		}
		else if($(window).width()>=768 && $(window).width() < 1200){
			val = 0;
			}
		else if($(window).width() < 768){
			val = 0;
			}
		return val;
		
		};
		
		
});