module.exports.insertUsuario = function(application, req, res){
    var dataForm = req.body;
    var conexao= application.servidor.connectionMysql;
    var usuarioD = new application.models.usuarioDAO(conexao);
    usuarioD.inserirUsuario(dataForm);
    res.redirect('/');
}