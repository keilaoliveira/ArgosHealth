module.exports = function (application) {
    application.get('/', function (req, res) {
        application.controllers.login.validaLogin(application, req, res)
        //res.render('login/loginAcesso');

    });

    application.get('/gravaSessao', function(req, res){
        console.log("Ae carai")
        application.controllers.login.validaLogin(application, req, res)
    })

    
}