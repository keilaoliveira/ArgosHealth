module.exports.insertAlimento = function(application, req, res){
    var dataForm = req.body;

    console.log(dataForm);
    var conexao = application.servidor.connectionMysql;
    var userLog = req.session.usuario;

    console.log(userLog)
    var alimentoD = new application.models.adicionarAlimentoDAO(conexao);
    alimentoD.inserirAlimento(dataForm, userLog);
    res.redirect('/metas');
}