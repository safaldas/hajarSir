

module.exports = {
    entry: [
        './src/app.js'
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    watch:true,
    output:{
    	filename:'static/js/bundle.js',
    	path:__dirname +'/dist',
        sourceMapFile: "static/js/bundle.js.map"
    },
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    devtool: '#source-map',
};
