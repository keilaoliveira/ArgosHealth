function loginDAO(conexao){
    this._conexao = conexao();
}

loginDAO.prototype.validacao = function(usuario,senha,callback){
    console.log("ae carai 2")
    this._conexao.query('select * from pessoa where email ="'+usuario+'" and senha ="'+senha + '"', callback);
}

loginDAO.prototype.gravarSessao = function(idPessoa){
    this._conexao.query('insert into logado value (?)', idPessoa);
}

module.exports = function(){
    return loginDAO;
}