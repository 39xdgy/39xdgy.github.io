const main_page_routes = require('./page');

const constructorMethod = (app) => {
  app.use('/', main_page_routes);
};

module.exports = constructorMethod;
