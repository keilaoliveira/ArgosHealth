function treinoDAO(conexao){
    this._conexao = conexao();
}

treinoDAO.prototype.inserirTreino = function(dados){
    this._conexao.query('insert into exerciciopessoa set ?', dados);
}

module.exports = function(){
    return treinoDAO;
}