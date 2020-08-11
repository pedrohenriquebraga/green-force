const inputs = document.querySelectorAll(".input")
const button = document.querySelector("button")

function addStates() {
    let inputStates = document.querySelector("select#state")
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome").then((states, err) => {
        if (err) {
            return console.error(err)
        }
        else {
            for (state of states.data) {
                inputStates.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
            addCities()
        }
        
    })
}

addStates()

function addCities(event) {
    const inputCities = document.querySelector("select#city")

    inputCities.innerHTML = ''
    inputCities.disabled = true
    let ufValue;

    try {
        ufValue = event.target.value
    } catch (error) {
        ufValue = "12"
    }

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios?orderBy=nome`
    axios.get(url).then((cities, err) => {
        if (err) {
            return console.error(err)
        }
        else {
            for (city of cities.data) {
                inputCities.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            } 
        }

    })
    inputCities.disabled = false
}

document.querySelector("select#state").addEventListener("change" , addCities) 

function preview() {
    let title = document.querySelector("#title").value,
        author = document.querySelector("#name").value,
        image = document.querySelector("#image").value,
        desc = document.querySelector("#desc").value

    const imgOfPreview = document.querySelector("div#preview img"),
        titlePreview = document.querySelector("div#preview h3"),
        authorPreview = document.querySelector("div#preview #author"),
        descPreview = document.querySelector("div#preview p em")

    titlePreview.innerText = title || "Título"
    authorPreview.innerText = `Autor: ${author}` || "Autor: Desconhecido"
    descPreview.innerText = desc || "Conte porque resolveu plantar a árvore"
    imgOfPreview.setAttribute("src", image || "/imagens/imagem_preview.jpg")

}

function validationInputs() {    
    for (input of inputs) {
        if (input.value == "") {
            button.disabled = true
            button.classList.add("noValid")
            input.style.border = "1.5px solid red"
            break
        } else {
            button.disabled = false
            button.classList.remove("noValid")
            input.style.border = "1.5px solid #01cc66"
        }
    }
}

validationInputs()