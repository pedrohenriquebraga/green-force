let time = 5000,
    imagens = document.querySelectorAll(".slide"),
    imagemAtual = 0,
    imagemMax = imagens.length;

function proxImagem() {
    
    imagens[imagemAtual].classList.remove('selecionada')
    imagemAtual++
    
    if (imagemAtual >= imagemMax) {
        imagemAtual = 0
    }

    imagens[imagemAtual].classList.add('selecionada')
}

function comeca() {
    setInterval(() => {
        proxImagem()
    }, time)
}

window.addEventListener("load", comeca)