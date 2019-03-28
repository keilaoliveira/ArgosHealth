var mysql = require('mysql');

var conexaoMYSQL = function () {

    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'argoshealth'
    });
}

module.exports = function () {

    return conexaoMYSQL;
}