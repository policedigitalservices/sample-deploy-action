const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    return {
        entry: 
            {
                index: "./src/js/index.js",
            },
        mode: 'development',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist', 'development'),
          },
        plugins: [
            new HtmlWebpackPlugin({
              template: "./index.html"
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css",
              }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/i,
                    use: {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env']
                        }
                      }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        env.NODE_ENV !== "production"
                            ? "style-loader"
                            : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        }
    }

}