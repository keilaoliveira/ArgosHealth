module.exports.insertAgua = function(aaplication, req, res){
    var dataForm = req.body;
    var conexao = application.servidor.connectionMysql;
    var aguaD = application.models.aguaDAO(conexao);
    aguaD.inserirAgua(dataForm);
    res.redirect();
}