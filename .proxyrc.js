const serveStatic = require('serve-static')
console.log("serveStatic", serveStatic)

module.exports = function (app) {
  // Use static middleware
  app.use(serveStatic('data'))
}