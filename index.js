const merge = require('webpack-merge');
const wordpressReact = require('./presets/wordpress-react');

const create = (config) => (custom) => merge(config, custom);

module.exports = {
  wordpressReact: create(wordpressReact),
};
