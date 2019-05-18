function treinoDAO(conexao){
    this._conexao = conexao();
    //this.userLog
}

treinoDAO.prototype.inserirTreino = function(dados, userLog){
    //console.log(dados.exercicio+','+dados.series+','+dados.repeticoes+','+dados.carga+','+dados.intervalo+','+userLog);
    this._conexao.query('insert into exerciciopessoa(exercicio, series, repeticoes, carga,intervalo, idPessoa)'+
        'values("'+dados.exercicio+'",'+dados.series+','+dados.repeticoes+',"'+
        dados.carga+'","'+dados.intervalo+'","'+userLog+'")');
}

treinoDAO.prototype.selecionarTreino = function(callback, userLog){
    this._conexao.query('select * from exerciciopessoa where idPessoa = "'+userLog+'";', callback);
}

module.exports = function(){
    return treinoDAO;
}