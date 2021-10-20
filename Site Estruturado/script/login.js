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