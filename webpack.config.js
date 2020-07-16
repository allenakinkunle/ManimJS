const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "manim.js",
        path: path.resolve(__dirname, "dist"),
        library: "manim",
        libraryTarget: "umd"
    },
    watch: true
};