const boton= document.getElementById("button") 
const click= document.getElementById("click")
const urlApi= "https://rickandmortyapi.com/api/character/"
const personajeElegido= Math.trunc(Math.random() * 826  + 1)

click.addEventListener("click",()=>{
    fetch(urlApi + personajeElegido)
    .then(resultado=>{
        return resultado.json()
    })
    .then(resultadoJson =>{
        const imgId = document.getElementById("imagen")
        const textId= document.getElementById("nombre")
        console.log(resultadoJson)
        imgId.src= resultadoJson.image  
        textId.innerHTML= `Sos ${resultadoJson.name}`
    })

    .catch(error =>{
        console.log(error)
        alert("Personaje Inexistentex 434tyyy")
    })

    
})
