const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        './src/index.js',
        './src/v2/index.js'
    ],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
    },
    externals: {
        react: 'react',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}
