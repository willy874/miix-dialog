const path = require('path')
const Merge = require('webpack-merge')
const CommonConfig = require('./webpack.common.js')

module.exports = Merge(CommonConfig, {
    mode: 'development',
    entry: {
        index: './src/index.js',
        demo: './demo/src/index.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dev'),
        publicPath: './dev/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: 'global'
                    }
                }
            ]
        }]
    }
})