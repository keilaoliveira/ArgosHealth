
module.exports = function(application){
    application.get('/series', function (req, res) {

        res.end('<html><body>Pagina de Series</body></html>');

    });
}