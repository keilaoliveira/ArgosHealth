function Validacao() {
    console.log("teste");
for (var i =0; i < dados.length; i++){

if ((usuario == "<%=dados[i].email%>") && (senha == "<%=dados[i].senha%>")){
    location.href = "gravarSessao/<%= dados[i].idPessoa %>"
    location.href = "/home"
} else {
    alert("Login ou senha invalidos")
}

}
}