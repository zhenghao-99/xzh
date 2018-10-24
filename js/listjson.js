define(["jquery","jquery-cookie"],function($){
	function listjson(){
		$(function(){
				$.ajax({
					type: 'Get',
					url:'../data/shoplist.json',
					async:false,
					success:function(res){
						var html = "";
						for(var i = 0; i < res.length; i++){
							$(`<li class="item">
						<ol id="flag_stock">
							<li class="pic">
								<a href="details.html" target="_blank"><img src="${res[i].img}"></a>
								<div class="fixName" style="bottom: 0px;"><p>限时8.5折 折上9折<span></span></p></div>
								<div id="J_sizeWrap_57677157" class="sold_size" style="top: 0px;">
								    <p class="sold_size_tit">可售尺码：</p>             
								    <ul class="sold_size_list clearfix J_sizeArea">
								    	<li class="ssl_item"><span>XS</span></li>
								    	<li class="ssl_item"><span>S</span></li>
								        <li class="ssl_item"><span>M</span></li>
								        <li class="ssl_item"><span>L</span></li>
								    </ul>          
								</div>
							</li>
							<li class="tit">
								<span>Saint Laurent</span>
								<a href="" target="_blank">女士卫衣</a>
							</li>
							<li class="price"><ins class="showprice">4964</ins><del class="delprice">5840</del></li>
						</ol>
					</li>`).appendTo($('.xs-itemsul-img'));
						}
						
					},
					error:function(msg){
						console.log(msg);
					}
				})
			})

	}
	
	return{
		listjson:listjson
	}
})