const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VENDOR_LIBS = [
    'axios', 'sweetalert2', 'uuid',
    'vee-validate', 'vue', 'vue-router', 'vue-sweetalert2', 'vuex'
];

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry:   {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output:  {
        path:     path.join(__dirname, 'public'),
        filename: '[name].[chunkhash].min.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias:      {
            'vue$':       'vue/dist/vue.esm.js'
        }
    },
    module:  {
        rules: [
            {
                use:     'babel-loader',
                test:    /\.js$/,
                exclude: /node_modules/
            },
            {
                use:  ExtractTextPlugin.extract({use: 'css-loader'}),
                test: /\.css$/
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use:  'file-loader?name=fonts/[name].[ext]'
            },
            {
                test:   /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:  '[name].min.css',
            disable:   false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};