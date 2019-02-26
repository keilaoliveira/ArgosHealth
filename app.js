
//var modulo = require('./exemplos/modulos');
//console.log(modulo());
//var moduloCalc = require('./exemplos/moduloCalc')(5, 5);

//Importanto módulos ao sistema

//Incluindo caminho para execução das rotas

//require('./apk/routes/home')(app);
//require('./apk/routes/filmes')(app);


var app = require('./servidor/server'); 


app.listen(3000, function(){

    console.log('Servidor OnLine');

})