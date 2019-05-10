function aguaDAO(conexao){
    this._conexao = conexao();
}

aguaDAO.prototype.inserirAgua = function(dados, userLog){
    //console.log(dados.horarioAgua+','+dados.qtdAgua+','+userLog);
    this._conexao.query('insert into agua(dtConsumo, horarioAgua, qtdAgua, idPessoa)values(sysdate(), "'
        +dados.horarioAgua+'","'+dados.qtdAgua+'","'+userLog+'")');
}

aguaDAO.prototype.selecionarAgua = function(callback, userLog){
    this._conexao.query('select * from agua where idPessoa = "'+userLog+'";', callback);
}

module.exports = function(){
    return aguaDAO;
}