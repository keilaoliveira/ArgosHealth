module.exports = function(application) {
    application.get('/cadastrarAgua', function(req, res){
        res.render('agua/cadastroAgua');
    });

    application.post('/insereAgua', function(req, res){
        application.controllers.agua.insertAgua(application, req, res);
    });
}