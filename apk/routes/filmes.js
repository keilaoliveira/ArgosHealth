module.exports = function (application) {
    application.get('/filmes', function (req, res) {

        res.render('filmes/movies');

    });
}