var http = require('http');
var server = http.createServer(function(req, res){

    var endereco = req.url ;

    if(endereco == "/"){
        res.end("<html><body>Home Page</body></html>");
    }else if(endereco == "/filmes"){
        res.end("<html><body>Filmes</body></html>");
    }else if(endereco == "/moda"){
        res.end("<html><body>Moda</body></html>");
    }else{
        res.end("<html><body>Endereco nao existe</body></html>");
    }

});

server.listen(3000, function(){

    console.log("Servidor On Line");

});