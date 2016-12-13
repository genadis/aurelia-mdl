'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

require('./mdl');

function configure(config) {
  config.globalResources('./mdl');
}