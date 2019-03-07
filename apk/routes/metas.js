module.exports = function (application) {
    application.get('/metas', function (req, res) {

        res.render('metas/alimentacao');

    });
}