const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = (env) => ({
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  output: {
    publicPath:
      env.mode === 'development'
        ? 'http://localhost:8081/'
        : 'https://prod.test.com/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
});

module.exports = (_, env) => {
  console.log(env);
  return merge(commonConfig, devConfig(env));
};
