const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const WebpackModules = require('webpack-modules')

let CommonConfig = {
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             common: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'commons',
    //                 chunks: 'initial',
    //                 minChunks: 3,
    //             },
    //         },
    //     },
    //     runtimeChunk: {
    //         name: 'runtime'
    //     },
    //     namedModules: true,
    //     noEmitOnErrors: true,
    //     concatenateModules: true,
    // },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@core': path.resolve(__dirname, 'src/')
        },
        modules: [
            'node_modules'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackModules()
    ],
    module: {
        rules: [{
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}

module.exports = CommonConfig