var connection = require('./connection');

var orm = {
    selectAll: function (table_name, cb) {
        var queryString = 'SELECT * FROM' + table_name + ';';
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table + '(' + cols + ') VALUES (?,?)';
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table_name, object, condition, cb) {
        var queryString = 'UPDATE ' + table_name + ' SET ? WHERE ?;';
        connection.query(queryString, [object, condition], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;
