let selectStates = document.querySelector("select#state")
console.log(selectStates)


function addStates() {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((data, err) => {
        if (err) {
            return console.error(err)
        }
        else {
            for (state of data.data) {
                selectStates.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            } 
        }
    })
}

selectStates.addEventListener("load", addStates())

function addCities() {
    let selectCities = document.querySelector("select#city")
    let ufValue = event.target.value

    console.log(selectStates.attributes)
}

addCities