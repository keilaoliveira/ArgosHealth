function metaDAO(conexao){
    this._conexao = conexao();
}

metaDAO.prototype.metaManha = function(callback, userLog){
    this._conexao.query('select * from exibirrefeicaopessoa where idPessoa = "' + userLog + '" order by periodo;', callback);
}

module.exports = function(){
    return metaDAO;
}