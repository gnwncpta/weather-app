const path = require('path');

const webpack = {
    mode: 'production',
    entry: './src/weather.js',
    output: {
        filename: 'weather.bundled.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'}
        ]
    }
}

module.exports = webpack;