module.exports = function (application) {
    application.get('/treino', function (req, res) {
        //res.render('treino/exercicios');
        application.controllers.listaTreino.listaExercicios(application, req, res)
    });

    application.get('/listarTreino', function(req, res){
        application.controllers.listaTreino.listaExercicios(application, req, res);
    })
}