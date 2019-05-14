function adicionarAlimentoDAO(conexao){
    this._conexao = conexao();
}

adicionarAlimentoDAO.prototype.exibirAlimento = function(idAlimento, callback){
    this._conexao.query('select * from alimento where idAlimento = '+ idAlimento, callback);
}

module.exports = function(){
    return adicionarAlimentoDAO;
}