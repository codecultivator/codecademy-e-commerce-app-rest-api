const Products = (pool) => {

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

  return {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  }
};

module.exports = Products;