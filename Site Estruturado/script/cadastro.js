var email;


function enviarCadastro(){

    cadastrar()

}

function checkEmail(){

    email = input_email.value;
    console.log(email)

    if(email.indexOf('@') == -1){
        
    } else {
        alert('email valido')
    }

}

function mostrarSenha(){

    var tipo_olho = input_senha.type;
    
    if(tipo_olho == 'text'){
        input_senha.type = 'password';
        imagem_olho.src = "../style/src/invisivel_senha.png";
    } else if(tipo_olho == 'password'){
        input_senha.type = 'text';
        imagem_olho.src = '../style/src/visivel_senha.png';
    } else{ //deixando esse else apenas para o caso do type mudar para algum outro sem querer
        input_senha.type = 'password';
        imagem_olho.src = "../style/src/invisivel_senha.png";
    }

}
function cadastrar(){
    
    localStorage.setItem('cnpj',input_cnpj.value);
    localStorage.setItem('social',input_social.value);
    localStorage.setItem('email',input_email.value);
    localStorage.setItem('telefone',input_telefone.value);
    localStorage.setItem('senha',input_senha.value);
    
}