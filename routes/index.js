const productsRouter = require('./products');

module.exports = function(app){
    app.use('/products', productsRouter)
}
