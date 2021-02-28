const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = configDirs => {
    return {
        mode: 'development',
        devServer: {
            contentBase: configDirs.BUILD_DIR,
            compress: false,
            port: 3000,
            historyApiFallback: true
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
        devtool: 'source-map'
    }
}
