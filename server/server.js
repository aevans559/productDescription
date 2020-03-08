const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3600;
const db = require('../db/db.js');

app.use( bodyParser.json() );

app.use(express.static('public/dist'));

app.route('/bundle')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), '/public/dist/bundle.js'));
  });

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