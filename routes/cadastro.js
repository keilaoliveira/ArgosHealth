module.exports = function (application) {
    application.get('/cadastro', function (req, res) {

        res.render('cadastro/cadastroUsuario');

    });

    application.post('/insereUsuario', function(req, res){
        application.controllers.usuario.insertUsuario(application, req, res);
    });
}