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
        }
    })
}

addStates()

function addCities(event) {
    const inputStates = document.querySelector("select#state")
    const inputCities = document.querySelector("select#city")

    inputCities.innerHTML = ''
    inputCities.disabled = true

    const ufValue = event.target.value
    const indexOfState = event.target.selectedIndex

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

document.querySelector("select#state").addEventListener("change", addCities)

function preview() {
    const boxOfPreview = document.querySelector("div#preview")
    const titlePreview
}