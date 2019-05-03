module.exports.validaLogin = function(application, req, res){
    var conexao = application.servidor.connectionMysql;
    var loginD = new application.models.loginDAO(conexao);
    
    loginD.validacao(function(error, resultado){
        if(error) res.send(error);
        res.render('login/loginAcesso', {dados : resultado});
    })

}