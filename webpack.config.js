const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    output: {
        filename: 'bi-common-bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
