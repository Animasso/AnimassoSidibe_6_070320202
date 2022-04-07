//Mettre le code JavaScript lié à la page photographer.html
function displayHeader(photographer){
    const banner = document.querySelector('.photographHeader')
    const photographerModel = photographerFactory(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    /*banner.appendChild(userHeaderDOM)*/
    banner.innerHTML=userHeaderDOM
    console.log(userHeaderDOM);

}


async function init() {
    const data = await fetch("https://raw.githubusercontent.com/Animasso/AnimassoSidibe_6_070320202/main/data/photographers.json")
    .then(response => response.json())
    console.log(data);
    let windowLocal = window.location.search
    let searchParams = new URLSearchParams(windowLocal);
    const idPhotographer = searchParams.get('id')

    console.log(windowLocal);
    console.log(idPhotographer);

    const photographers = data.photographers
    const medias = data.media
    const onePhotograph =photographers.find((photographer)=>photographer.id == idPhotographer)
    displayHeader(onePhotograph)

    const oneMedia = medias.filter((media)=> media.photographerId == idPhotographer)
    console.log(oneMedia);
    console.log(onePhotograph);
    // et bien retourner le tableau photographers seulement une fois
    
}

init()
