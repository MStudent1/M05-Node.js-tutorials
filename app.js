const express = require('express');

//Express app
const app = express();

//Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('/home.html',  { root: __dirname} );
});

app.get('/About', (req, res) => {
    res.sendFile('./views/About.html',  { root: __dirname} );
});

//redirect; old relative path, will redirect to new path (/about)
app.get('/about-us', (req, res) => {
    res.redirect('/About');
});

//404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});
