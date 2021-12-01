var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : 'Lu220501@',
    database : 'acquatec'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado ao BD com sucesso!')
});

module.exports = connection;