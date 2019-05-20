module.exports.insertTreino = function(application, req, res){
    var dataForm = req.body;
    var conexao = application.servidor.connectionMysql;
    var userLog = req.session.usuario;
    var treinoD = new application.models.treinoDAO(conexao);
    treinoD.inserirTreino(dataForm, userLog);
    res.redirect('/treino');
    //location.reload(); 
}