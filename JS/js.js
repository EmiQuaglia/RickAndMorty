// const apiUrl = 'https://rickandmortyapi.com/api/character/?name='
// const row = document.getElementById('row')
// const input = document.getElementById("input")
// const button = document.getElementById("button")

// button.addEventListener('click', () => {
//     const request = apiUrl + (input.value)
//     fetch(request)
//     .then(result =>{
//         return result.json()
//     })
//     .then(json => {
//         armarCard(json)
//     })
//     .catch(err => {
//         errorAlert()
//     })
// });


// function armarCard(character) {
//     const card = document.createElement('div')
//     const columna = document.createElement('div')
//     card.classList.add("card")
//     columna.classList.add("col-6","col-sm-6","col-md-4","col-lg-4","col-xl-4")

//     const img = document.createElement('img')
//     const cardBody = document.createElement('div')
//     const cardTitle = document.createElement('h5')
//     const description = document.createElement('p')

//     card.appendChild(img)
//     cardBody.appendChild(cardTitle)
//     cardBody.appendChild(description)
//     card.appendChild(cardBody)
//     columna.appendChild(card)
//     row.appendChild(columna)

    
//     img.src = character.image
//     cardTitle.innerHTML = character.name
//     description.innerHTML = character.species

// }

// function errorAlert(){
//     const alert = document.createElement("div")
//     const textAlert= document.createElement("p")
//     const strongText= document.createElement("strong")
//     const alertUbication = document.getElementById("alert")
//     alert.classList.add("alert alert-danger")

//     textAlert.innerHTML = "Tu búsqueda no coincide con ningún personaje"
//     strongText.innerHTML = "Rayos"

//     alert.appendChild(textAlert)
//     alert.appendChild(strongText)
//     alertUbication.appendChild(alert)

// }