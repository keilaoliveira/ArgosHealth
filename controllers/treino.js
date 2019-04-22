module.exports.insertTreino = function(application, req, res){
    var dataForm = req.body;
    var conexao = application.servidor.connectionMysql;
    var treinoD = application.models.treinoDAO(conexao);
    treinoD.inserirTreino(dataForm);
    res.redirect();
}