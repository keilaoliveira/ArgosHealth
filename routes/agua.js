module.exports = function (application) {
    application.get('/agua', function (req, res) {
        application.controllers.listaAgua.viewAgua(application, req, res);
    });
}