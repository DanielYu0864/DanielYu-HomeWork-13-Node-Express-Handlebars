const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'm34vq44e12868bmg',
    password: 'cwecimg0v02nlxxd',
    database: 'rclx0qkq74yq3pnv'
});

db.connect(function(err) {
    if(err) {
        console.error(err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});

module.exports = db;