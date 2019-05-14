module.exports.listAlimento = function(application, req, res){
    var idAlimento = req.params.id;
    var conexao = application.servidor.connectionMysql;
    var alimentoD = new application.models.adicionarAlimentoDAO(conexao);
    alimentoD.exibirAlimento(idAlimento, function(error, alimentos){
        if(error) res.send(error);
            res.render('metas/incluiAlimento',{dados : alimentos});
    })
}
