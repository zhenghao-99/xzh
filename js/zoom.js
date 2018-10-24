define(["jquery","jquery-cookie"],function($){
	function zoom(){
		$(function(){
			// 绑定鼠标移入原图窗口事件
        $('#smallPicDiv').mouseover(function(e){
                $('#showimg').css('display','block');
                $('#bigPicDiv').css('display','block');

        })
        //绑定鼠标在原图窗口移动的事件
        $('#smallPicDiv').mousemove(function(e){

                // 获取鼠标当前的位置
                var x=e.pageX;
                var y=e.pageY;
                // 获取原图窗口距离文档的偏移位置
                var sX=$('#smallPicDiv').offset().left;
                var sY=$('#smallPicDiv').offset().top;

                // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
                var mx=x-sX;
                var my=y-sY;

                // 获取小框框的宽高
                var mw=$('#showimg').width()/2;
                var mh=$('#showimg').height()/2;

                // 鼠标移动后小框框的移动距离
                $('#showimg').css({left:mx-mw+'px',top:my-mh+'px'});

                // 获取小框框的偏移位置
                    var lw=$('#showimg').position().left;
                    var lh=$('#showimg').position().top;


                // 判断边界（小框框只能在原图窗口范围内移动）
                    var maxW=$('#smallPicDiv').width()-$('#showimg').width()
                    var maxH=$('#smallPicDiv').height()-$('#showimg').height()
                    // 左边界
                    if(lw<=0){$('#showimg').css('left','0px');}
                    // 右边界
                    if(lw>=maxW){
                        $('#showimg').css('left',maxW+'px');
                    }
                    // 上边界
                    if(lh<=0){$('#showimg').css('top','0px');}
                    // 下边界
                    if(lh>=maxH){
                        $('#showimg').css('top',maxH+'px');
                    }

                    // 获取小框框的偏移位置
                    var lw=$('#showimg').position().left;
                    var lh=$('#showimg').position().top;
                // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
                    var newX=lw*2.5;
                    var newY=lh*2.5;



                $('#bigPicDiv img').css({left:-newX+'px',top:-newY+'px'});
        })
        //绑定鼠标离开原图窗口事件
        $('#smallPicDiv').mouseout(function(){
                $('#bigPicDiv').css('display','none');
                $('#showimg').css('display','none');
        })

		})

	}
	
	return{
		zoom:zoom
	}
})