var mysql = require('mysql2');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
<<<<<<< HEAD
    password : 'bandtec',
    database : 'Busfacility'
=======
    password : 'Lu220501@',
    database : 'acquatec'
>>>>>>> banco
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado ao BD com sucesso!')
});



module.exports = connection;