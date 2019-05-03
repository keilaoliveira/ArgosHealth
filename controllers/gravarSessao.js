module.exports.gravarSessao = function (application, req, res){
    var idPessoa = req.params.id;
    var conexao = application.servidor.connectionMysql;
    var sessaoD = new application.models.loginDAO(conexao);

    sessaoD = gravarSessao(idPessoa);
    res.redirect('/');
}