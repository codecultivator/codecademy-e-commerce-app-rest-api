const Users = (pool) => {

  const getUsers = async() => {
    return pool.query('SELECT * FROM users');
  }
  
  const getUserById = async(id) => {
    return pool.query('SELECT * FROM users WHERE id = $1', [id]);
  }
  
  const createUser = async(name) => {
    return pool.query('INSERT INTO users (name) VALUES ($1) RETURNING id', [name]);
  }
  
  const updateUser = async(id, name) => {
    return pool.query('UPDATE users SET name = $1 WHERE id = $2', [name, id]);
  }
  
  const deleteUser = async(id) => {
    return pool.query('DELETE FROM users WHERE id = $1', [id]);
  }

  return {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }
};

module.exports = Users;