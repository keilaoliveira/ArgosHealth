module.exports.insertAlimento = function(application, req, res){
    var dataForm = req.body;
    var conexao = application.servidor.connectionMysql;
    var userLog = req.session.usuario;
    var alimentoD = new application.models.adicionarAlimentoDAO(conexao);
    alimentoD.inserirAlimento(dataForm, userLog);
    res.redirect('/incluirAlimento');
    location.reload();
}