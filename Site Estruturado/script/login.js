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