console.log('加载完成index');

	require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		//抛物线函数，不遵从AMD
		"parabola": "parabola",
		"cartjson":"cartjson"
	},
	//设置模块之间的依赖关系
	shim: {
		"jquery-cookie": ["jquery"],
		/*
			定义不遵从AMD规范的js文件
		*/
		"parabola": {
			exports: "_"
		}
	}
})

require(['cartjson'], function(cartjson){
	cartjson.cartjson();
})