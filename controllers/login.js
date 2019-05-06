module.exports.validaLogin = function(application, req, res){
    
    var usuario = req.body.txtLogin;
    var senha = req.body.txtSenha;

    console.log(usuario+" "+senha);
    var conexao = application.servidor.connectionMysql;
    var loginD = new application.models.loginDAO(conexao);
    

    loginD.validacao(usuario,senha,function(error, resultado){
        if(error) res.send(error);
        
        if(resultado[0] != undefined){
            var userSession = req.session.usuario = usuario;
        }

        if(userSession){
            res.redirect('/home');

        }else{
            res.render('login/loginAcesso',{erro : 1});
        }
    });

}