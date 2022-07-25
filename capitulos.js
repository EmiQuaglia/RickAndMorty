const apiUrl = 'https://rickandmortyapi.com/api/episode/'
const row = document.getElementById('row')
const requestInit = apiUrl + ('[1,2,3,4,5,6,7,8,9]')

toggleSpinner();
fetch(requestInit)
    .then(result =>{
            return result.json()
    })
    .then(json => {
            populateEpisodes(json)
            toggleSpinner()
            
    })
    .catch(err => (console.log(err)))


    function populateEpisodes(episode) {
        episode.forEach(episode => {
            armarCard(episode)    
        });
    }

    
    function armarCard(episode) {
        const card = document.createElement('div')
        const columna = document.createElement('div')
        card.classList.add("card")
        columna.classList.add("col-12","col-sm-6","col-md-4","col-lg-4","col-xl-4")
    
        const cardBody = document.createElement('div')
        const cardTitle = document.createElement('h5')
        const description = document.createElement('p')
    
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(description)
        card.appendChild(cardBody)
        columna.appendChild(card)
        row.appendChild(columna)
    
        cardTitle.innerHTML = episode.name
        description.innerHTML = `Código del Episodio: ${episode.episode} <br/>Fecha de Emisión: ${episode.air_date}`
        
    }

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