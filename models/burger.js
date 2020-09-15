const orm = require('../config/orm');

const burgers = {
    all: function(cb) {
       orm.selectAll('burgers', result => cb(result));
    },
    create: function(column, value, cb) {
        orm.insertOne('burgers', column, value, result => cb(result));
    },
    update: function(column, boolean, condition, cb) {
        orm.updateOne('burgers', column, boolean, condition, result => cb(result));
    }
}

module.exports = burgers;