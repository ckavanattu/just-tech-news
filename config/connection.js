// call the sequelize connection constructor
// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MYSQL information for username and password

// accepts database name, SQL username, SQL password as parameters
const sequelize = new Sequelize (process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize