const apiUrl = 'https://rickandmortyapi.com/api/character/'
const apiUrlByName = 'https://rickandmortyapi.com/api/character/?name='
const row = document.getElementById('row')
const rowByName = document.getElementById("rowByName")
const requestInit = apiUrl + ('[1,2,3,4,5,6,7,8,9]')
const input = document.getElementById("input-search")
const button = document.getElementById("button-search")
let backButton;
let spinnerInit;


toggleSpinner();
fetch(requestInit)
    .then(result =>{
            return result.json()
    })
    .then(json => {
            populateCards(json)
            toggleSpinner()
            
    })
    .catch(err => (console.log(err)))

 button.addEventListener('click', () => {
    toggleSpinner()
     const request = apiUrlByName + (input.value)
     fetch(request)
         .then(result =>{
            return result.json()
     })
     .then(({ results }) => {
        const character = results[0];
        armarCardByName(character);
        toggleCharacters();
        button.disabled = true;
        backButtonHide();
        toggleSpinner();
        

        // COMO HACER PARA QUE CUANDO BORRAS EL INPUT VUELVAN A APARECER TODOS LOS PERSONAJES
        
     })
    .catch(err => {
        // errorAlert()
        console.log(err)
     })
 });


function populateCards(characters) {
    characters.forEach(character => {
        armarCard(character)    
    });
}

function toggleCharacters(){
    // if(row.id === "cardInit"){
    row.classList.toggle("hide")
    
}

// en esta funcion tenemos que recibir un parametro "idParam" y al elemento que queremos esconder previamente le agregamos ese id
    // elem.setAttribute('id', idParam)
    
function armarCard(character) {
    const card = document.createElement('div')
    const columna = document.createElement('div')
    card.classList.add("card")
    columna.classList.add("col-12","col-sm-6","col-md-4","col-lg-4","col-xl-4")
    //VER ESTO!!!!!!!!!!!!!!!!! y lo de !important 
    // let episodios = character.episode
    // let episodeParams = new URLSearchParams(episodios)
    // episodeParams.getAll(episodios)


    const img = document.createElement('img')
    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('h5')
    const description = document.createElement('p')

    card.appendChild(img)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(description)
    card.appendChild(cardBody)
    columna.appendChild(card)
    row.appendChild(columna)

    img.src = character.image
    cardTitle.innerHTML = character.name
    description.innerHTML = `Especie: ${character.species} <br/>Estatus: ${character.status} <br/>Genero: ${character.gender} <br/>Origen: ${character.origin.name}`
    
    // if(idParam === "cardInit"){
    //     row.setAttribute("id", idParam)
    // } else if (idParam === "cardByName"){
    // row.setAttribute("id", idParam)}

}

function armarCardByName(character) {
    const card = document.createElement('div')
    const columna = document.createElement('div')
    card.classList.add("card")
    columna.classList.add("col-12","col-sm-6","col-md-4","col-lg-4","col-xl-4")

    const img = document.createElement('img')
    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('h5')
    const description = document.createElement('p')

    card.appendChild(img)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(description)
    card.appendChild(cardBody)
    columna.appendChild(card)
    rowByName.appendChild(columna)

    img.src = character.image
    cardTitle.innerHTML = character.name
    description.innerHTML = `Especie: ${character.species} <br/>Estatus: ${character.status} <br/>Genero: ${character.gender} <br/>Origen: ${character.origin.name} `
                    

}


function backButtonHide() {
    backButton = document.createElement("button")
    const navSearch = document.getElementById("navSearch")

    navSearch.appendChild(backButton)

    backButton.classList.add("btn", "btn-dark")
    backButton.innerHTML = "Atrás"

    backButton.addEventListener('click', () => {
        toggleCharacters()
        toggleBackButton()
        button.disabled = false
        location.reload()
        
    })
}

function toggleBackButton(){
    backButton.classList.toggle("hide")
}



    //<button type="button" class="btn btn-dark">Dark</button>

function spinner(){
    spinnerInit = document.createElement("div")
    const textSpinner = document.createElement("span")
    const body = document.getElementById("body")
    spinnerInit.classList.add("spinner-border")
    textSpinner.classList.add("sr-only")

    spinnerInit.appendChild(textSpinner)
    body.appendChild(spinnerInit)
}

function toggleSpinner(){
    spinner()
    spinnerInit.classList.toggle("hide")
}

// function errorAlert(){
//     // mostrar cartel boostrap
// }

// }
// <div class="spinner-border" role="status">
// <span class="sr-only">Loading...</span>
// </div>