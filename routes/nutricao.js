module.exports = function (application) {
    application.get('/nutricao', function (req, res) {

        res.render('nutricao/tabelaNutricional');

    });
}