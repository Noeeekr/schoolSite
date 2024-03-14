// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

const config = {
    mode: "development",
    target: ["web","es5"],
    entry: './src/components/loginPage.js',
    output: {
        filename: "loginPage.js",
        path: path.resolve(__dirname, 'dist','components')
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {   
                exclude: /node_modules/,
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env"
                    ],
                    plugins: [
                        ["@babel/plugin-transform-runtime"]
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
