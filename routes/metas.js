module.exports = function (application) {
    application.get('/metas', function (req, res) {
        application.controllers.meta.viewMetas(application, req, res);
        // application.controllers.metaAlmoco.viewMetas(application, req, res);
    });
}