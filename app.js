const express = require('express');
const app = express();

const nunjucks = require('nunjucks');

const port = process.env.PORT || 4000;

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.use('/static', express.static('node_modules'));
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, () => console.log(`Now running at http://localhost:${port}/`));