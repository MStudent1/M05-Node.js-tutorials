const express = require('express');

//Express app
const app = express();

//Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.send('<p>Home page</p>');
});

app.get('/about', (req, res) => {
    res.send('<p>About page</p>');
});

