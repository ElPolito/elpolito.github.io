const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    mode: process.env.NODE_ENV || 'development',
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    entry: {
        app: './src/index.tsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist/'),
    },
    module: {
        rules: [{
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader'],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: ['source-map-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/',
                    },
                }, ],
            },
            {
                test: /.md$/,
                use: ['raw-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
    },
    watch: false,
};

if (process.env.TYPE !== 'build') {
    config.watch = true;
}

module.exports = [config];