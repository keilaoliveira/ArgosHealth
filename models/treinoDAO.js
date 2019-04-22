function treinoDAO(conexao){
    this._conexao = conexao();
}

treinoDAO.prototype.inserirTreino = function(dados){
    this._conexao.query('insert into exerciciopessoa set ?', dados);
}

treinoDAO.prototype.selecionarTreino = function(callback){
    this._conexao.query('select descricao from exercicio', callback);
}

module.exports = function(){
    return treinoDAO;
}