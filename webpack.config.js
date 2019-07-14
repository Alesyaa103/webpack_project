const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const config = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname,  "dist"),
        filename: "[name].bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
    },module: {
        rules: [
            {
                test: /\.pug$/,
                use: [{
                        loader: "pug-loader",
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                'css-loader',
                'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css",
        }),
        new HtmlWebpackPlugin({
            filename: "password1.html",
            template: "./src/templates/password1.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "password2.html",
            template: "./src/templates/password2.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "password3.html",
            template: "./src/templates/password3.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "signUp1.html",
            template: "./src/templates/signUp1.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "signUp2.html",
            template: "./src/templates/signUp2.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "signUp6.html",
            template: "./src/templates/signUp6.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "signIn.html",
            template: "./src/templates/signIn.pug"
        }),
    ],
};

module.exports = (env,argv) => {
    if(argv.mode === "development"){}
    if (argv.mode === 'production') {}

    return config;
}