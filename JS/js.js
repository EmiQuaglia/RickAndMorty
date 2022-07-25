const info = document.getElementById("info")
const carrouselElem = document.getElementById("infoSerie")


info.addEventListener("click",(evento) => {
    evento.preventDefault();
    carrouselElem.scrollIntoView();
});