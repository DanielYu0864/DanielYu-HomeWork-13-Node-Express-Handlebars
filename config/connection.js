const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123',
    database: 'burgers_db'
});

db.connect(function(err) {
    if(err) {
        console.error(err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

module.exports = db;