module.exports = function (application) {
    application.get('/incluirAlimento', function (req, res) {
        res.render('metas/incluiAlimento',{dados:{}});
    });

    application.get('/exibiralimento/:id', function(req, res){
        application.controllers.adicionarAlimento.listAlimento(application, req, res);
    });

    application.post('/gravarMeta', function(req, res){
        application.controllers.alimento.insertAlimento(application, req, res);
    });

}

