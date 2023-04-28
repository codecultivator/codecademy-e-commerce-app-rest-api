const config = require('dotenv').config();
const Pool = require('pg').Pool;

const init = (() => {
	const pool = new Pool({
		product: process.env.DB_NAME,
		host: process.env.DB_HOST,
		database: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		port: process.env.DB_PORT,
	})

	const createUsers = async() => {
		return pool.query("CREATE TABLE IF NOT EXISTS users ( \
			id SERIAL PRIMARY KEY, \
			username TEXT UNIQUE, \
			hashed_password TEXT, \
			salt TEXT \
		  )").then(res => pool.query("ALTER TABLE users OWNER TO ccecommerce"));
	}

	const createProducts = async() => {
		return pool.query("CREATE TABLE IF NOT EXISTS products ( \
			id SERIAL PRIMARY KEY, \
			name TEXT UNIQUE \
		  )").then(res => pool.query("ALTER TABLE products OWNER TO ccecommerce"));
	}

	const seedProducts = async() => {
		return pool.query("INSERT INTO products values (1, 'Foo')");
	}

	let doIt = async() => {

		console.log('Creating tables...');
		const createTables = await Promise.all([
			createUsers(),
			createProducts()
		]);
		console.log('Tables created.');

		console.log('Seeting tables...');
		const seedTables = await Promise.all([
			seedProducts()
		])
		console.log('Tables seeded');
	}

	doIt()
	
})()