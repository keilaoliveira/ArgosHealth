function nutricaoDAO(conexao){
    this._conexao = conexao();
}

nutricaoDAO.prototype.viewNutricao = function(callback){
    this._conexao.query('select * from alimento', callback)
}

module.exports = function(){
    return nutricaoDAO;
}