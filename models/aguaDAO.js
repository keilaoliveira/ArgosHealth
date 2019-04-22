function aguaDAO(conexao){
    this._conexao = conexao();
}

aguaDAO.prototype.inserirAgua = function(dados){
    this._conexao.query('insert into agua set ?', dados);
}

module.exports = function(){
    return aguaDAO;
}