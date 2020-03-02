const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nozama'
})

const getAllProducts = () => {
    // connection.query('SELECT * FROM products', (err, result) => {
    //     if (err) {
    //         console.log('Error message: ' + err)
    //     } else {
    //         return result
    //     }
    // })
    console.log('hello from getallproducts')
};

connection.connect( err => {
    if (err) {
        return err
    }
});

// module.exports.getAllProducts = getAllProducts;
module.exports.connection = connection;