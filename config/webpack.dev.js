const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

function buildConfig(configDirs) {
    return {
        entry: configDirs.APP_DIR + '/index.js',        
        output: {
            path: configDirs.BUILD_DIR,
            filename: 'bundle.js',
            publicPath: '/'
        },
        mode: 'development',
        devServer: {
            contentBase: configDirs.BUILD_DIR,
            compress: false,
            port: 3000,
            historyApiFallback: true
        },
        resolve: {
            alias: {
                components: configDirs.APP_DIR + '/components/'
            },
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ["source-map-loader"],
                    enforce: "pre"
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(png|svg|jpg|gif|ttf|eot|woff)$/,
                    use: ["file-loader"]
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[local]___[hash:base64:5]'
                            }
                        }
                    ],
                    include: /\.module\.css$/
                },
                {
                    test: /\.css$/,
                    use: [
                      'style-loader',
                      'css-loader'
                    ],
                    exclude: /\.module\.css$/
                }
            ]
        },
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                template: configDirs.APP_DIR + '/index.html'
            }),
            new webpack.SourceMapDevToolPlugin({            
                filename: 'index.js.map',
                exclude: ['vendor.js']
            }),
            new MiniCssExtractPlugin()
        ]
    };
};

module.exports = buildConfig;