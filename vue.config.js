module.exports = {
	publicPath: "./", // 署应用包时的基本 URL。 vue-router hash 模式使用
	//  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用
	outputDir: "dist", //  生产环境构建文件的目录
	lintOnSave: false,
	productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	devServer: {
		port: 8080, // 端口
		open: false, // 启动后打开浏览器
		overlay: {
			//  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
			warnings: false,
			errors: true,
		},
		// proxy: {
		//   //配置跨域
		//   '/api': {
		//       target: "https://test.xxx.com",
		//       // ws:true,
		//       changOrigin:true,
		//       pathRewrite:{
		//           '^/api':'/'
		//       }
		//   }
		// }
	},
	css: {
		// 启用 CSS modules
		modules: false,
		// 是否使用css分离插件
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项
		loaderOptions: {
			css: {},
			postcss: {
				plugins: [
					//remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
					//假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
					require("postcss-px2rem")({
						remUnit: 75,
					}),
				],
			},
		},
	},
};
