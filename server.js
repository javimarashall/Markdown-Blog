const express = require('express');
const app = express();

//Write HTML on index.js and ejs will convert it to HTML
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(5000);