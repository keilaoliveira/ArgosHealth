module.exports.viewMetas = function(application, req, res){
    var conexao = application.servidor.connectionMysql;
    var userLog = req.session.usuario;
    var metasD = new application.models.metaDAO(conexao);

    metasD.metaManha(function(error, resultado){
        if(error) res.send(error);
        res.render('metas/alimentacao', {data : resultado})
    }, userLog)

    // metasD.metaAlmoco(function(error, resultado){
    //     if(error) res.send(error);
    //     res.render('metas/alimentacao', {dataAlmoco : resultado})
    // }, userLog)
}