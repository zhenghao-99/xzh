define(["jquery","jquery-cookie"],function($){
	function main(){
		$(function(){
			$(".home_shortcut").on("mouseover", "a", function(){
				var index = $(this).index();
				switch (index) {
					case 0:
						$(this).stop().animate({
							"left": "0"
						});
						break;
					case 1:
						$(this).stop().animate({
							"left": "310"
						});
						break;
					case 2:
						$(this).stop().animate({
							"left": "615"
						});
						break;
					case 3:
						$(this).stop().animate({
							"left": "920"
						});
					default:
						break;
				}
			});
			
		})
		$(function(){
			$(".home_shortcut").on("mouseout", "a", function(){
				var index = $(this).index();
				switch (index) {
					case 0:
						$(this).stop().animate({
							"left": "35"

						});
						break;
					case 1:
						$(this).stop().animate({
							"left": "345"
						});
						break;
					case 2:
						$(this).stop().animate({
							"left": "650"
						});
						break;
					case 3:
						$(this).stop().animate({
							"left": "955"
						});
					default:
						break;
				}
			});
			
		})

	}
	
	return{
		main:main
	}
})