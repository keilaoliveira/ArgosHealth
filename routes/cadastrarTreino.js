module.exports = function (application) {
    application.get('/cadastrarTreino', function (req, res) {
        //application.controllers.cadastrarTreino.selecionarTreino(application, req, res);
        res.render('treino/cadastroTreino');
    });

    application.post('/insereTreino', function(req, res){
        application.controllers.treino.insertTreino(application, req, res);
    });

    application.get('/selectTreino', function(req, res){
        application.controllers.cadastrarTreino.selecionarTreino(application, req, res);
    })
}