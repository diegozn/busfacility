function pesquisar() {
    var pesquisa = ipt_pesquisa.value
    var jardim = document.getElementsByClassName('jd')
    if (pesquisa.startsWith ('jd')) {
        jardim.style.display = 'none'
    }
}