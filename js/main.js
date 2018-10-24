console.log('加载完成index');

	require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		//抛物线函数，不遵从AMD
		"parabola": "parabola",
		"index": "index",
		"slide": "slide",
		"json" : "json",
		"pulldown":"pulldown"
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

require(['index', 'slide','json','pulldown'], function(index, slide,json,pulldown){
	index.main();
	slide.slide();
	json.json();
	pulldown.pulldown();
})