module.exports.selecionarTreino = function(application, req, res){
    var conexao = application.servidor.connectionMysql;
    var treinoD = new application.models.treinoDAO(conexao);

    treinoD.selecionarTreino(function(error, treinoSelecionado){
        if(error) res.send(error);
        res.render('treino/cadastroTreino',{data : treinoSelecionado})
    })
}