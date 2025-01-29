const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const Dotenv = require('dotenv-webpack');

const deps = require("./package.json").dependencies;

const printCompilationMessage = require('./compilation.config.js');




module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";
  const publicPath = isProduction
    ? process.env.PUBLIC_PATH_PRODUCTION
    : process.env.PUBLIC_PATH_DEVELOPMENT;
    
    const remotes = argv.mode === "production" ? {
      mfe_st_common: 'mf_st_common@https://d3ukptxqg81hnz.cloudfront.net/mfe-st-common/remoteEntry.js',
      mfe_st_utils: 'mfe_st_utils@https://d3ukptxqg81hnz.cloudfront.net/mfe-st-utils/remoteEntry.js',
      mfe_st_errors: 'mfe_st_error@https://d3ukptxqg81hnz.cloudfront.net/mfe-st-error/remoteEntry.js',
      mfe_st_login: 'mfe_st_login@https://d3ukptxqg81hnz.cloudfront.net/mfe-st-login/remoteEntry.js'
    } : {
      mfe_st_common: 'mf_st_common@http://localhost:4210/remoteEntry.js',
      mfe_st_utils: 'mfe_st_utils@http://localhost:4211/remoteEntry.js',
      mfe_st_errors: 'mfe_st_error@http://localhost:4212/remoteEntry.js',
      mfe_st_login: 'mfe_st_login@http://localhost:4213/remoteEntry.js'
    };
  return {
    output: {
      publicPath: publicPath
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3000,
      historyApiFallback: true,
      watchFiles: [path.resolve(__dirname, 'src')],
      onListening: function (devServer) {
        const port = devServer.server.address().port

        printCompilationMessage('compiling', port)

        devServer.compiler.hooks.done.tap('OutputMessagePlugin', (stats) => {
          setImmediate(() => {
            if (stats.hasErrors()) {
              printCompilationMessage('failure', port)
            } else {
              printCompilationMessage('success', port)
            }
          })
        })
      }
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "mfe_st_host",
        filename: "remoteEntry.js",
        remotes: remotes,
        exposes: {},
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv()
    ],
  }
};

