module.exports = function (application) {
    application.get('/', function (req, res) {
        res.render('login/loginAcesso');

    });

    application.post('/gravaSessao', function(req, res){
        application.controllers.login.validaLogin(application, req, res)
    })

    
}