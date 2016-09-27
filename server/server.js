'use strict';

const express = require('express');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config')
const config = require('../config');
const app = express();

// main server
app.use(express.static(path.join(__dirname + '/../client')));

app.get('/', function(req, res) {
  console.log(index);
  res.render('index');
});

app.get('/host', function(req, res) {
  res.send('Host Page');
})

app.listen(config.SERVER_PORT);

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// webpack proxy
new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:3000'
  }
}).listen(config.WEBPACK_DEV_SERVER_PORT, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Webpack Dev Server listening at http://localhost:' + config.WEBPACK_DEV_SERVER_PORT + '/');
});