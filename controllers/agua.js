module.exports.insertAgua = function(application, req, res){
    var dataForm = req.body;
    var conexao = application.servidor.connectionMysql;
    var userLog = req.session.usuario;
    var aguaD = new application.models.aguaDAO(conexao);
    aguaD.inserirAgua(dataForm, userLog);
    res.redirect('/agua');
   // location.reload();
}