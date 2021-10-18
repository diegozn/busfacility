const acordeonArray = document.getElementsByClassName('acordeon');

for (var i = 0; i < acordeonArray.length; i++) {
    acordeonArray[i].addEventListener("click", function() {
        this.classList.toggle("selecionado");
        const painel = this.nextElementSibling;
        if (painel.style.maxHeight) {
            painel.style.maxHeight = null;
        } else {
            painel.style.maxHeight = painel.scrollHeight + "px";
        }
    })
}