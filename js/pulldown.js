define(["jquery","jquery-cookie"],function($){
	function pulldown(){
		$(function(){
			$('.tyo_con').mouseenter(function(){
		        $(this).children('dl').show();
			});
			   $(".tyo_con").mouseleave(function(){
			     $(this).children('dl').hide();
			});

		})
		
	}
	return {
		pulldown: pulldown
	}
})