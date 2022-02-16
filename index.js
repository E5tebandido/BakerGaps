const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/taccounts', (req, res) => {
    res.sendFile('taccounts.html', {
        root: path.join(__dirname, 'views/')
    });
})

app.get('/results', (req, res) => {
    res.sendFile('results.html', {
        root: path.join(__dirname, 'views/')
    });
})

app.get('/heritage', (req, res) => {
    res.sendFile('heritage.html', {
        root: path.join(__dirname, 'views/')
    });
})

app.listen('8080');
console.log('Running at port 8080' );

