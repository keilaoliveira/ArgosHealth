module.exports = function (application) {
    application.get('/incluirAlimento', function (req, res) {
        res.render('metas/incluiAlimento');
    });

    application.get('/exibiralimento/:id', function(req, res){
        application.controllers.adicionarAlimento.listAlimento(application, req, res);
    })

}

