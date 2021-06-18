const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const  webpack  = require("webpack");

//First, we need to create the main configuration object within our file.
//write options within this object that tell webpack what to do (entry, output, mode).
//a config file is not necessary, but we still want to use one so that we can be more specific with how webpack will function

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an HTML file
        })
    ],
    mode: 'development'
};