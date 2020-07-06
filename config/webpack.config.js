const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const output = path.resolve(__dirname, "..", "build");
const input = path.resolve(__dirname, "..", "src", "index.js");
const public = path.resolve(__dirname, "..", "public");

module.exports = (env, argv) => {
    const config = {
        entry: input,
        output: {
            filename: "[name].[contenthash].js",
            path: output,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
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
            }),
        ],
        devtool: argv.mode === "development" ? "eval" : "hidden-source-map",
        devServer: {
            contentBase: output,
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
