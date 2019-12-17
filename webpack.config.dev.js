require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

module.exports = () => {
    const CopyWebpack = new CopyWebpackPlugin([{
        from: path.resolve(srcDir, 'public'),
        to: 'public'
    }, ]);

    const BSPlugin = new BrowserSyncPlugin({
        open: false,
        port: process.env.BROWSER_SYNC_PORT,
        proxy: `http://localhost:${process.env.WEBPACK_SERVER_PORT}`,
    }, {
        reload: true,
    });

    const HMR = new webpack.HotModuleReplacementPlugin();

    const HTMLWebpackPlugin = new HtmlWebpackPlugin({
        meta: {
            viewport: 'width=device-width, initial-scale=1',
            charset: 'UTF-8',
        },
        template: path.resolve(srcDir, 'index.html'),
    });

    return {
        mode: 'development',
        entry: './src/app.tsx',
        output: {
            filename: 'app.bundle.js',
            path: distDir,
        },
        plugins: [CopyWebpack, BSPlugin, HTMLWebpackPlugin, HMR],
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [{
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: "ts-loader"
                    }]
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000',
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {},
                    }, ],
                },
            ]
        },
        devServer: {
            host: 'localhost',
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'src'),
            watchContentBase: true,
            // hot: true,
            stats: {
                colors: true,
                chunks: false,
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            port: process.env.WEBPACK_SERVER_PORT || 8000,
        },
    }
}