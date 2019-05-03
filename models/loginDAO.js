function loginDAO(conexao){
    this._conexao = conexao();
}

loginDAO.prototype.validacao = function(callback){
    this._conexao.query('select * from pessoa', callback);
}

loginDAO.prototype.gravarSessao = function(idPessoa){
    this._conexao.query('insert into logado value (?)', idPessoa);
}

module.exports = function(){
    return loginDAO;
}