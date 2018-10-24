define(["jquery","jquery-cookie","parabola"],function($,parabola){
	function shopcart(){
		$(function(){
            sc_car();

			$("#buyBtnId").on("click","#user_buy_btn",function(){
                
                var id1 = $('.img').attr("id");

                var first = $.cookie("buy") == null ? true : false;
                if(first){
                    $.cookie("buy", `[{id:${id1},num:1}]`, {
                        expires: 7,
                        raw: true
                    });
                }else{
                    var cookieStr = $.cookie("buy");
                    var arr = eval(cookieStr); 
                    var same = false; 
                    for(var i = 0; i < arr.length; i++){
                        if(arr[i].id == id1){
                            //3、之前存储过数量+1
                            arr[i].num++;
                            same = true;
                            break;
                        }
                    }
                    if(!same){
                        //4、没有相同的
                        var obj = {id: id1, num: 1};
                        arr.push(obj);
                    }
                    $.cookie("buy", JSON.stringify(arr), {
                        expires: 7,
                        raw: true
                    });
                }                

            })
            sc_car();

		})
        function sc_car(){
                var sc_str = $.cookie("buy");
                if(sc_str){
                    var sc_arr = eval(sc_str);
                    var sum = 0;
                    for(var i = 0; i < sc_arr.length; i++){
                        sum += sc_arr[i].num;
                    }
                    //alert(sum);
                    $("#num1").text(sum);
                }
            }

	}
	
	return{
		shopcart:shopcart
	}
})