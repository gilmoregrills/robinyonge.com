const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:['@babel/polyfill', './src/dev/index.jsx'],
    output: {
        path: path.join(__dirname, '/src/prod'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/dev/index.html'
        })
    ]
}
