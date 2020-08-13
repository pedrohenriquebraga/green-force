
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

async function getPosts() {
    await axios.get("https://green-force-project.glitch.me/api").then((posts, err) => {
        if (err) {
            return console.error(err)
        } else {
            return showPosts(posts.data)
        }
    })
}

function showPosts(posts) {
    const mural = document.querySelector("#mural")
    const contador = document.querySelector("#contador")

    contador.innerText = posts.length

    for (post of posts) {
        mural.innerHTML += `
        <div class="post">
            <h3>${post.title}</h3>
            <p id="author">Autor(a): ${post.name}</p>
            <img src="${post.image}" rel="nofollow external" alt="Imagem enviada por ${post.name}">
            <p><em>${post.desc}</em></p>
        </div>
        `
    }
}
