/**
 * Created by Administrator on 2017/4/25.
 */
var path = require('path');

module.exports = {
    entry: './webpack.test.index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};