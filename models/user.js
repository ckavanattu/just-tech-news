const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our user model

class User extends Model {}

//define table columns and configuration

User.init (
    {
       // define an id column
       id: {
        // use the special sequalize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQLs 'NOT NULL' option
        allowNull: false,
        //instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
       },
       // define a username column
       username: {
        type: DataTypes.STRING,
        allowNull: false
       },
       //define an email column
       email: {
        type: DataTypes.STRING,
        allowNull: false,
        // check for duplicate email values in this table
        unique: true,
        // if allowNull is set to false, we can run our data through validators before creating a table data
        validate: {
            isEmail: true
        }
       },
       // define a password column
       password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //this means the password must be at least four characters long
            len: [4]
        }
       }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        //pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // dont automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // dont pluralize name of database table
        freezetableName: true,
        // use underscores instead of camel-casing ( comment_text and not commentText)
        underscored: true,
        //make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;