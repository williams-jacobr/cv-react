import path from 'path';
import {fileURLToPath} from 'url';
import {Configuration as WebpackConfiguration} from 'webpack';
import Dotenv from 'dotenv-webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
console.log('process', process);

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export default {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', {runtime: "automatic"}],
              '@babel/preset-typescript',
            ],
          },
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', {loader: 'css-loader', options: {modules: {namedExport: false, exportLocalsConvention: 'as-is'}}}],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{loader: 'file-loader'}],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new Dotenv({path: './.env.local', safe: true}),
    new HtmlWebpackPlugin({template: 'src/index.html'}),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
} satisfies Configuration;
