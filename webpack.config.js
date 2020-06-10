const path = require('path');

const entry={
    build: './test/index.js',
}
module.exports = [
    {
        name:"npm",
        entry: entry,
        output: {
            path: path.resolve(__dirname , './test'),
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env','@babel/preset-react'],
                        }
                    }
                }
            ]
        }
    }
]