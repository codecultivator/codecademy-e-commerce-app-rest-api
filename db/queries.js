//consider using:  https://github.com/sequelize/sequelize
//ex:  https://medium.com/mtholla/integrating-sequelize-into-your-node-app-a446353fb5ee
const Products = require("./products");
const Users = require("./users");

const Pool = require('pg').Pool
const pool = new Pool({
	product: process.env.DB_NAME,
	host: process.env.DB_HOST,
	database: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
})

module.exports = {
  products: Products(pool),
  users: Users(pool)
}
