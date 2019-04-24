module.exports.exibirNutricao = function(application, req, res){
    var conexao = application.servidor.connectionMysql;
    var nutricaoD = new application.models.nutricaoDAO(conexao);

    nutricaoD.viewNutricao(function(error, resultado){
        if(error) res.send(error);
        res.render('nutricao/tabelaNutricional',{dados : resultado})
        console.log("Ae carai");
    })
}