function adicionarAlimentoDAO(conexao){
    this._conexao = conexao();
}

adicionarAlimentoDAO.prototype.exibirAlimento = function(idAlimento, callback){
    this._conexao.query('select * from alimento where idAlimento = '+ idAlimento, callback);
}

adicionarAlimentoDAO.prototype.inserirAlimento = function(dados, userLog){
    this._conexao.query('insert into refeicao(alimento, qtdRefeicao, periodo, idPessoa) values("'+
        dados.alimento+'",'+dados.qtdRefeicao+',"'+dados.periodo+'","'+userLog+'")')
}

module.exports = function(){
    return adicionarAlimentoDAO;
}