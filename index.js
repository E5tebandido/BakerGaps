const express = require('express')
const app = express();

app.use(express.static(__dirname));

app.get('/taccounts', (req, res) => {
    res.send('hellooo')
})

app.listen('8080');
console.log('Running at port 8080' );

