module.exports = function (application) {
    application.get('/treino', function (req, res) {

        res.render('treino/exercicios');

    });

    application.post('/insereTreino', function(res, req){
        application.controllers.treino.insertTreino(application, req, res);
    })
}