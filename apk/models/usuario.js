module.exports = function () {

    this.getUsuarios = function (connection, callback) {
        connection.query('select * from pessoa', callback);
    }
    
    return this;
}