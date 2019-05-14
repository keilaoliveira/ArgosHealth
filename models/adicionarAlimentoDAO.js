function adicionarAlimentoDAO(conexao){
    this._conexao = conexao();
}

adicionarAlimentoDAO.prototype.exibirAlimento = function(idAlimento, callback){
    this._conexao.query('select * from alimento where idAlimento = '+ idAlimento, callback);
}

adicionarAlimentoDAO.prototype.inserirAlimento = function(dados, userLog){
    console.log(dados.calorias);
}

module.exports = function(){
    return adicionarAlimentoDAO;
}