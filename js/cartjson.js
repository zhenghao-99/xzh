define(["jquery","jquery-cookie"],function($){
	function cartjson(){
		$(function(){
				$.ajax({
					type: 'Get',
					url:'../data/cart.json',
					async:false,
					success:function(res){
						var sc_arr = eval($.cookie("buy"));

						for(var i = 0; i < sc_arr.length; i++){
							var html = "";
							for(var j = 0; j < res.length; j++){
								//for(var j = 0; j < res[5][i].length; j++){
									var id1= res[j].id;
																	//}
								if(id1 == sc_arr[i].id){
									var obj= res[j];
									//alert(sc_arr[i].id);
									
								}
							}

							html+=`<tr>
												                    <th style="color:black;background-color:#E3E3E3" width="80">
												                    	<label style="padding:0 0 0 10px;">
												                    		<input type="checkbox" class="checkall" name="goodsChecks" id="goodsChecks">
												                    		&nbsp;全选
												                    	</label>
												                    </th>
									<th style="color:black;background-color:#E3E3E3" colspan="2">商品</th>
									<th style="color:black;background-color:#E3E3E3; width:120px;text-align:center;">购买价(元)</th>
									<th style="color:black;background-color:#E3E3E3">
										<div class="quantity_div" style="color:black;">数量</div>
									</th>
									<th style="color:black;background-color:#E3E3E3">
										<div class="op_div" style="color:black;">操作</div>
									</th>
								</tr>
								<tr id="en_prd_tr" class="goodsitemb">
									<td colspan="6" class="activity_tips" style="text-align:left;padding: 5px;">&nbsp;
										<em class="activity_icon">打折</em>
										已满1件打9.0折
									</td>
								</tr>
								<tr id="en_prd_tr" class="goodsitemb item_checked">
								<td class="chebox">
									<input type="checkbox">
								</td>
								
								<td colspan="2">
									<div class="tx_img">
										<a href="details.html" target="_blank">
											<img src="../images/g1_66_88.jpg" alt="" width="60" height="80" style="border:#DFDFDF solid 1px;">
										</a>
									</div>
									<div class="txtl" valign="top">
										<table cellpadding="0" border="0" cellspacing="0" width="100%" style="text-align: left;padding: 0px;margin: 0px;">
											<tbody>
												<tr>
													<td colspan="2" style="text-align: left;margin: 0px;padding: 0px;color:black;">
														Saint Laurent
													</td><td>
												</td></tr>
												<tr>
													<td style="text-align: left;margin: 0px;padding: 0px;">
														<a target="_blank" class="wer_span wer_span_a" style="color:black;" href="">
															女士卫衣
														</a>
													</td>
													<td style="text-align: left;margin: 0px;padding: 0px;width: 80px;vertical-align: top;" class="">
													</td>
												</tr>
												<tr>
													<td colspan="2" style="text-align: left;margin: 0px;padding: 0px;">
															颜色 : 黑色 
															尺码 : XS 
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</td>
								<td class="pricetd">
										<p class="xiupricew"><a href="" title="走秀价" style="font-family:'Microsoft YaHei'">¥ 5840</a></p>
										<p style="font-family:'Microsoft YaHei'">¥ 4964</p>
								</td>
								<td>
									<input type="hidden" name="oldQuantity" id="oldQuantity" value="1">
									<a class="at">-</a>
									<input type="text" name="quantity" value="${sc_arr[i].num}" class="war_txt">
									<span style="cursor: pointer;" class="at">
											<small>+</small>
									</span>
										<span class="inventory_shortage"></span>
								</td>
								<td>
									<span><a href="">移至收藏夹</a></span>
									<br>
									<span><a class="butG" style="padding:2px 10px 2px 10px;">删除</a></span>
								</td>
															</tr>`

						}
						$(".t1").html(html);
						$(".c1").css("display", "none");
						$('.cartbar').css("display", "block");
						var m = parseInt($('.war_txt').val());
						var money = obj.price * m * 9 / 10;
						$('#totalAmoutPrice').html(money);
					},
					error:function(msg){
						console.log(msg);
					}
				})
				$('.t1').on("click", "small", function(){
					var num = parseInt($(this).parent().prev().val());
					//alert(num);
					num++;
					$(this).parent().prev().val(num);
					var m = parseInt($('.war_txt').val());
					
						var money = 4964 * m * 9 / 10;
						$('#totalAmoutPrice').html(money);

					var sc_arr1 = eval($.cookie("buy"));
					for(var i = 0; i < sc_arr1.length; i++){
						sc_arr1[0].num = parseInt($('.war_txt').val());
					}
					// 动态改变单项总价
					
					var str = JSON.stringify(sc_arr1);
					$.cookie("buy", str,{
						expires: 7,
						raw:true
					});
				})
				$('.t1').on("click", ".at", function(){
					var num = parseInt($(this).next().val());
					//alert(num);
					num--;
					if(num <= 0){
						num =1;
					}
					$(this).next().val(num);
					var m = parseInt($('.war_txt').val());
					
						var money = 4964 * m * 9 / 10;
						$('#totalAmoutPrice').html(money);

					var sc_arr1 = eval($.cookie("buy"));
					for(var i = 0; i < sc_arr1.length; i++){
						sc_arr1[0].num = parseInt($('.war_txt').val());
					}
					// 动态改变单项总价
					
					var str = JSON.stringify(sc_arr1);
					$.cookie("buy", str,{
						expires: 7,
						raw:true
					});
				})
				$('.t1').on("click", ".butG", function(){
					$('.t1').children().remove();
					$('.cartbar').css("display", "none");
					$('.c1').css("display", "block");
					$.cookie("buy",{expires:-1});
				})
			})

	}
	
	return{
		cartjson:cartjson
	}
})