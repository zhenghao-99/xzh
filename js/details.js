console.log('加载完成index');

	require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		//抛物线函数，不遵从AMD
		"parabola": "parabola",
		"zoom":"zoom",
		"shopcart":"shopcart"
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

require(['zoom','shopcart'], function(zoom,shopcart){
	zoom.zoom();
	shopcart.shopcart();
})