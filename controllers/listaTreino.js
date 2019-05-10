module.exports.viewExercicios = function(application, req, res){
    var conexao = application.servidor.connectionMysql;
    var userLog = req.session.usuario;
    var exerciciosD = new application.models.treinoDAO(conexao);
    

    exerciciosD.selecionarTreino(function(error, resultado){
        
        if(error) res.send(error);
        res.render('treino/exercicios', {data : resultado})
    },userLog)
}