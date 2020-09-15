const db = require('./connection.js');

const orm = {

    selectAll: function(table, cb) {
        let queryString = `SELECT * FROM ${ table };`;
                        // `SELECT * FROM burgers;`
        db.query(queryString, (err, result) => {
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, column, value, cb) {
        let queryString = `
        INSERT INTO ${ table } (${ column })
        VALUES (${ value });
        `;
        // INSERT INTO burgers (burger_name)
        // VALUES (value);
        console.log(queryString);

        db.query(queryString, (err, result) => {
            if(err) throw err;

            cb(result);
        });
    },
    updateOne: function(table, column, boolean, condition, cb) {
        let queryString = `
        UPDATE ${ table }
        SET ${ column } = ${ boolean }
        WHERE id = ${ condition };
        `;
        // UPDATE burgers
        // SET devoure = true
        // WHERE id = ${ condition };

        db.query(queryString,(err, result) => {
            if(err) throw err;

            cb(result);
        });
    }
}

module.exports = Orm;