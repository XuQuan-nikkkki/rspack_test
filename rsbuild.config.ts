import { pluginReact } from "@rsbuild/plugin-react";
const path = require("path");

module.exports = {
  source: {
    entry: {
      quote: './src/quote_machine_of_Chibi_Maruko_chan/index.tsx',
      quote_test: './src/quote_test/index.tsx'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|ttf)$/,
        type: "asset",
      },
    ],
  },
  plugins: [pluginReact()],

  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/dist/",
  },
};
