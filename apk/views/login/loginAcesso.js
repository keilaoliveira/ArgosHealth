function Login() {
    var done = 0;
    var usuario = document.getElementsByName('txtLogin')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('txtSenha')[0].value;
    senha = senha.toLowerCase();
  
    if (usuario == "abc" && senha == "123") {
      window.location.href = "/home";
      done = 1;
    }
    if (done == 0) {
      alert("Dados incorretos, tente novamente!");
  
    }
}