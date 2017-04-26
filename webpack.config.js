module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: './'
	},
	devServer: {
		port: 8080,
		inline: true
	},
	module: {
		loaders:[
			{
				test: /.\jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};