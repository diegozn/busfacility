var login;
var senha;
var acesso = false;


function entrarLogin(){

    validarLogin()
    
    if(acesso == true){
        window.location.href = '../html/dashboard.html'
    }

}


function mostrarSenha(){

    var tipo_olho_3 = input_senha_3.type;
    
    if(tipo_olho_3 == 'text'){
        input_senha_3.type = 'password';
        imagem_olho.src = "../style/src/invisivel_senha.png";
    } else if(tipo_olho_3 == 'password'){
        input_senha_3.type = 'text';
        imagem_olho.src = '../style/src/visivel_senha.png';
    } else{ //deixando esse else apenas para o caso do type mudar para algum outro sem querer
        input_senha_3.type = 'password';
        imagem_olho.src = "../style/src/invisivel_senha.png";
    }
}

function validarLogin(){

    email = localStorage.getItem('email')
    senha = localStorage.getItem('senha')

    if(email == input_login.value && senha == input_senha_3.value){
        acesso = true;
    } else {
        acesso = false;
    }

}