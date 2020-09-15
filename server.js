const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// Content for the app from 'public' directory
app.use(express.static('public'));

// Pares request as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as template engine
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(PORT, function() {
    console.log('listening to ' + PORT);
});