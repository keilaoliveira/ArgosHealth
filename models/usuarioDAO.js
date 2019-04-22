function usuarioDAO(conexao){
    this._conexao = conexao();
}

usuarioDAO.prototype.inserirUsuario = function(dados){
    this._conexao.query('insert into pessoa set ?', dados);
}

module.exports = function(){
    return usuarioDAO;
}