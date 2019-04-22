module.exports = function (application) {
    application.get('/treino', function (req, res) {

        res.render('treino/exercicios');

    });
}