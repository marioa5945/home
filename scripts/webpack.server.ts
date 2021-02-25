import webpack from 'webpack';
import config from './webpack.config';

(config.module as any).rules.push({
  test: /\.(ts|tsx)$/,
  exclude: /node-modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        cacheCompression: false,
      },
    },
    {
      loader: 'eslint-loader',
    },
  ],
});
(config.plugins as any).push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    remoteBlog: '"http://localhost:8080/js/remoteEntry.js"',
    remotePackageLibrary: '"http://localhost:8081/js/remoteEntry.js"',
  })
);
config.entry = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/app.tsx'];

export default { ...config };
