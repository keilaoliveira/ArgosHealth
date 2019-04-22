var mysqlConnect = require('mysql');

var conexaoMysql = function () {
    return mysqlConnect.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'argoshealth'
    });
}

module.exports = function () {
    console.log('Banco conectado');
    return conexaoMysql;
}