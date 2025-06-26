import path from 'path';
import {fileURLToPath} from 'url';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '',
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
        use: [MiniCssExtractPlugin.loader, {loader: 'css-loader', options: {modules: {namedExport: false, exportLocalsConvention: 'as-is'}}}],
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
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
    new CleanWebpackPlugin(),
  ],
} satisfies Configuration;
