module.exports = function (application) {
    application.get('/cadTreino', function (req, res) {
        res.render('treino/cadastroTreino');
    });

    application.post('/insereUsuario', function(req, res){
        application.controllers.usuario.insertUsuario(application, req, res);
    });
}