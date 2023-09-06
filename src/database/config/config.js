require('dotenv').config();

module.exports = {
	dialect: 'postgres',
	username: process.env.POSTGRES_USER, 
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_HOST,
	port: 5432,
	database: process.env.POSTGRES_DATABASE,
	timezone: '-04:00',
	
	logging: false,
	dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false 
        }
      },
};
