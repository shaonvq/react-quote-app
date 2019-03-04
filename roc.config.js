module.exports = {
  settings: {
    runtime: {
      applicationName: '',
      port: 3000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      routes: 'src/routes.js',
    },
    dev: {
      browsersync: {
        options: {
          open: true,
        },
      },
    },
  },
};
