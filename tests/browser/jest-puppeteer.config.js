// jest-puppeteer.config.js
module.exports = {
  server: {
    command: 'node server.js',
    protocol: 'http',
    port: 3000,
    debug: true,
    launchTimeout: 240000,
  },
}
