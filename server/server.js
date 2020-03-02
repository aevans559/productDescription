const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;
const db = require('../db/db.js');

app.use( bodyParser.json() );

app.use(express.static('public/dist'));

app.get('/products', (req, res) => {
    db.connection.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.log('Error message: ' + err)
        } else {
            res.json(result)
        }
    })
    // res.json({object: 1})
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});