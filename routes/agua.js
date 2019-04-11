module.exports = function (application) {
    application.get('/agua', function (req, res) {

        res.render('agua/ingestao');

    });
}