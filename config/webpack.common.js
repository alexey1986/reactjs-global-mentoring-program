const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = configDirs => {
    return {
        entry: configDirs.APP_DIR + '/index.js',
        resolve: {
            alias: {
                src: configDirs.APP_DIR,
                components: configDirs.APP_DIR + '/components/',
                reducers: configDirs.APP_DIR + '/reducers/',
                actionTypes: configDirs.APP_DIR + '/actionTypes/',
                actions: configDirs.APP_DIR + '/actions/',
                service: configDirs.APP_DIR + '/service/',
                api:  configDirs.APP_DIR + '/api/'
            },
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: configDirs.APP_DIR + '/index.html'
            }),
            new webpack.SourceMapDevToolPlugin({            
                filename: 'index.js.map',
                exclude: ['vendor.js']
            })
        ],
        output: {
            path: configDirs.BUILD_DIR,
            filename: 'bundle.compiled.js',
            sourceMapFilename: "bundle.compiled.js.map",
            publicPath: ''
        },
        devtool: "source-map"
    }
};
