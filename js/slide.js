define(["jquery","jquery-cookie"],function($){
	function slide(){
		$(function(){
			//按钮
			var oBtns = $(".num").find("ol").find("li");
			var oUl = $("#div1").find("ul");
			var aLis = oUl.find("li");

			var iNow = 0;
			var timer = null;

			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			timer = setInterval(timerInner,2000);

			//鼠标移入 移出
			$("#div1").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})

			function timerInner(){
				iNow++;
				document.title = iNow;
				tab();
			}

			//点击切换图片
			function tab(){
				//1、先让当前被点击的按钮active
				oBtns.attr("class", "").eq(iNow).attr("class", "active");


				//最后一张图片，active的按钮也是下标0
				if(iNow == aLis.size() - 1){
					oBtns.eq(0).attr('class', "active");
				}

				//2、切换图片
				 $("#div1").stop().animate({
					left: -1200 * iNow
				}, 500, function(){
					if(iNow == aLis.size() - 1){
						 $("#div1").css("left", 0);
						iNow = 0;
					}
				});
			}
		})
		
	}
	return {
		slide: slide
	}
})
