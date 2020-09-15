const db = require('./connection.js');

class Orm {
    constructor ()
    selectAll(cb) {
        let queryString = `SELECT * FROM burgers;`;
        db.query(queryString, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    };
    insertOne(value, cb) {
        let queryString = `
        INSERT INTO burgers (burger_name)
        VALUES (${ value });
        `;
        console.log(queryString);

        db.query(queryString, (err, result) => {
            if(err) throw err;

            cb(result);
        });
    }
    updateOne(condition, cb) {
        let queryString = `
        UPDATE burgers
        SET devoure = true
        WHERE id = ?;
        `;

        db.query(queryString, condition,(err, result) => {
            if(err) throw err;

            cb(result);
        });
    }
}

module.exports = Orm;