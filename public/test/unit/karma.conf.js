let webpackConfig = require('../../../webpack.config');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    browsers: ['PhantomJS'],
    files: ['*.spec.js'],
    preprocessors: {
      '*.spec.js': ['webpack']
    },
    reporters: ['spec'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true 
    }
  });
};
