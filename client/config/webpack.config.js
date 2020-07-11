const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");

const output = path.resolve(__dirname, "..", "build");
const input = path.resolve(__dirname, "..", "src", "index.js");
const public = path.resolve(__dirname, "..", "public");

module.exports = (env, argv) => {
    const config = {
        entry: input,
        output: {
            filename: "[name].[contenthash].js",
            path: output,
            publicPath: "/",
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: {
                                    includePaths: [
                                        path.resolve(__dirname, "..", "src"),
                                    ],
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(woff2?|ttf|otf|eot|svg)$/,
                    include: path.resolve(
                        __dirname,
                        "..",
                        "src",
                        "assets",
                        "styles",
                        "fonts"
                    ),
                    exclude: /node_modules/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "./fonts/[name].[ext]",
                            publicPath: "/",
                            esModule: false,
                        },
                    },
                },
                {
                    test: /\.(jpe?g|png|bmp|gif)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "./images/[name].[ext]",
                            publicPath: "/",
                            esModule: false,
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false,
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(public, "index.html"),
            }),
            new WebpackManifestPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: argv.mode === "development" ? "server" : "static",
                openAnalyzer: false,
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
            new DotenvWebpackPlugin({
                path: path.resolve(__dirname, "../.env"),
            }),
        ],
        devtool: argv.mode === "development" ? "eval" : "source-map",
        devServer: {
            contentBase: output,
            historyApiFallback: true,
        },
        optimization: {
            moduleIds: "hashed",
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "all",
                    },
                },
            },
        },
    };

    return config;
};
