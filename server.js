const express = require('express');

const routes = require('./controllers');

const sequelize = require('./config/connection');

const app = express();

const path = require('path')

const exphbs = require('express-handlebars');
const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const PORT = process.emitWarning.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//turn on routes

app.use(routes);

// turn on connection to db and server

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});