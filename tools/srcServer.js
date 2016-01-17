// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfigBuilder = require('../webpack.config');
var webpackConfig = webpackConfigBuilder('development');

var bundler = webpack(webpackConfig);

var mocks = {
  "/api/spaceweather": function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      title: [
        "This is Major Tom to Ground Control",
        "I'm stepping through the door",
        "And I'm floating in a most peculiar way",
        "And the stars look very different today",
        "For here",
        "Am I sitting in a tin can",
        "Far above the world",
        "Planet Earth is blue",
        "And there's nothing I can do"
      ][Math.floor(Math.random() * 9)],
      planets: [
        {
          name: 'Mercury',
          temperature: 440 + Math.floor(Math.random() * 10)
        },
        {
          name: 'Venus',
          temperature: 737  + Math.floor(Math.random() * 10)
        },
        {
          name: 'Earth',
          temperature: 288 + Math.floor(Math.random() * 10)
        },
        {
          name: 'Mars',
          temperature: 210 + Math.floor(Math.random() * 10)
        }
      ]
    }));
  }
};

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  server: {
    baseDir: 'src',

    middleware: [
      function (req, res, next) {
        if (mocks[req.url]) {
          mocks[req.url](req, res);
        }
        next();
      },
      webpackDevMiddleware(bundler, {
        // Dev middleware can't access config, so we provide publicPath
        publicPath: webpackConfig.output.publicPath,

        // pretty colored output
        stats: { colors: true },

        // Set to false to display a list of each file that is being bundled.
        noInfo: true

        // for other settings see
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),

      // bundler should be the same as above
      webpackHotMiddleware(bundler)
    ]
  },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/*.html',
    'api/weatherdata.json'
  ]
});
