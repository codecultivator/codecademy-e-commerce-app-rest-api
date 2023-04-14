const Pool = require('pg').Pool
const pool = new Pool({
	product: process.env.DB_NAME,
	host: process.env.DB_HOST,
	database: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
})

const getProducts = async() => {
  return pool.query('SELECT * FROM products');
}

const getProductById = async(id) => {
  return pool.query('SELECT * FROM products WHERE id = $1', [id]);
}

const createProduct = async(name) => {
  return pool.query('INSERT INTO products (name) VALUES ($1) RETURNING id', [name]);
}

const updateProduct = async(id, name) => {
  return pool.query('UPDATE products SET name = $1 WHERE id = $2', [name, id]);
}

const deleteProduct = async(id) => {
  return pool.query('DELETE FROM products WHERE id = $1', [id]);
}


module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
