const productsRouter = require('./products');
const usersRouter = require('./users');

module.exports = function(app){
    app.use('/products', productsRouter)
    app.use('/users', usersRouter)
}
