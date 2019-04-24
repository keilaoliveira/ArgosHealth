module.exports = function (application) {
    application.get('/nutricao', function (req, res) {
        application.controllers.tabelaNutricao.exibirNutricao(application, req, res);
    });
}