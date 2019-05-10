module.exports.viewAgua = function(application, req, res){
    var conexao = application.servidor.connectionMysql;
    var userLog = req.session.usuario;
    var aguaD = new application.models.aguaDAO(conexao);

    aguaD.selecionarAgua(function(error, resultado){
        if(error) res.send(error);
        res.render('agua/ingestao',{data : resultado})
    }, userLog)
}