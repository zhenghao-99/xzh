console.log('加载完成index');

	require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"login":"login-main"
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

require(['login'], function(login){
	login.login();	
})
