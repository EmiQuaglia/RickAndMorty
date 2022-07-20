const apiUrl = 'https://rickandmortyapi.com/api/character/'
const apiUrlByName = 'https://rickandmortyapi.com/api/character/?name='
const row = document.getElementById('row')
const requestInit = apiUrl + ('[1,2,3,4,5,6,7,8,9]')
const input = document.getElementById("input")
const button = document.getElementById("button")

fetch(requestInit)
    .then(result =>{
            spinner()
            return result.json()
    })
    .then(json => {
            populateCards(json)
    })
    .catch(err => (console.log(err)))

// button.addEventListener('click', () => {
//     const request = apiUrl + (input.value)
//     fetch(request)
//         .then(result =>{
//             return result.json()
//     })
//     .then(json => {
//             armarCard(json)
//     })
//     .catch(err => {
//             errorAlert()
//     })
// });
    
button.addEventListener("click", function (){
        console.log("hola");
    });

function populateCards(characters) {
    characters.forEach(character => {
        armarCard(character)
    
    });
} 

function armarCard(character) {
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
    row.appendChild(columna)

    
    img.src = character.image
    cardTitle.innerHTML = character.name
    description.innerHTML = character.species

}


function spinner(){
    const spinner =document.createElement("div")
    const textSpinner = document.createElement("span")
    const body = document.getElementById("body")
    spinner.classList.add("spinner-border")
    textSpinner.classList.add("sr-only")

    spinner.appendChild(textSpinner)
    body.appendChild(spinner)

}

function errorAlert(){
    // mostrar cartel boostrap
}

// }
// <div class="spinner-border" role="status">
// <span class="sr-only">Loading...</span>
// </div>