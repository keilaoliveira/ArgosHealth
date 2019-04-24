module.exports.listaExercicios = function(application, req, res){
    var conexao = application.servidor.connectionMysql;
    var exerciciosD = new application.models.treinoDAO(conexao);

    exerciciosD.selecionarTreino(function(error, resultado){
        if(error) res.send(error);
        res.render('treino/cadastroTreino', {data : resultado})
    })
}