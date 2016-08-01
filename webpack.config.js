

module.exports = {
    entry: [
        './src/app.js'
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    output:{
    	filename:'js/bundle.js',
    	path:__dirname +'/dist',
         sourceMapFile: "js/app.map"
    },
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    devtool: '#source-map',
};
