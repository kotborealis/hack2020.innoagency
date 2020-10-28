const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
    const prod = process.env.NODE_ENV === 'production';
    const ifProd = (plugin, _else = undefined) => prod ? plugin : _else;
    const ifDebug = (plugin, _else = undefined) => !prod ? plugin : _else;
    const removeEmpty = array => array.filter(p => !!p);

    return {
        entry: {
            app: path.join(__dirname, '../src/index.js'),
        },

        output: {
            filename: ifProd('[contenthash].[name].js', '[name].js'),
            path: path.join(__dirname, '../build/'),
            publicPath: '/',
        },

        devtool: ifDebug('eval-source-map'),

        mode: ifProd('production', 'development'),

        optimization: ifDebug({
            minimize: false,
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
        }, {
            minimize: true,
            minimizer: [new TerserPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })],
        }),

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                            }
                        }
                    ]
                },
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader'],
                },
                {
                    test: /\.css/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                hash: 'sha512',
                                digest: 'hex',
                                name: ifProd('[hash].[ext]', '[name].[ext]')
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|woff2?|eot)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                hash: 'sha512',
                                digest: 'hex',
                                name: ifProd('[contenthash].[ext]', '[name].[ext]')
                            }
                        }
                    ]
                },
                {
                    test: /\.mp3$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                hash: 'sha512',
                                digest: 'hex',
                                name: ifProd('[hash].[ext]', '[name].[ext]')
                            }
                        }
                    ]
                }
            ],
        },

        plugins: removeEmpty([
            ifDebug(new webpack.LoaderOptionsPlugin({
                debug: true
            })),

            new HtmlWebpackPlugin({
                template: path.join(__dirname, '../src/index.html'),
                filename: 'index.html',
                inject: 'body',
            }),

            new webpack.ProvidePlugin({
                process: 'process/browser'
            })
        ]),

        devServer: {
            host: `0.0.0.0`,
            port: 8080,
            public: `localhost:8080`,
            disableHostCheck: true,
            historyApiFallback: true,
            inline: true,
            open: false,
            overlay: true,
            before: require('../mock-api/')
        }
    };

};