function loginDAO(conexao){
    this._conexao = conexao();
}

loginDAO.prototype.validacao = function(usuario,senha,callback){
    this._conexao.query('select * from pessoa where email ="'+usuario+'" and senha ="'+senha + '"', callback);
}

module.exports = function(){
    return loginDAO;
}