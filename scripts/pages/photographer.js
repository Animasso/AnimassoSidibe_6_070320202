//Mettre le code JavaScript lié à la page photographer.html
function displayHeader(photographer){
    const banner = document.querySelector('.photographHeader')
    const photographerModel = photographerFactory(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    banner.appendChild(userHeaderDOM)

}
function displayMedias(medias){
    medias.forEach((oneMedia)=>{
        const displayPhotos = document.querySelector('.display-photos')
        const mediasModel = mediaListFactory(oneMedia)
        const mediasCardDOM =mediasModel.mediasCardDOM()
        displayPhotos.appendChild(mediasCardDOM)
    })
}

function displayBySort(oneMedia){
   const filterMedias= document.getElementById('filterSelect')
   console.log(filterMedias);
   filterMedias.addEventListener('change',(e)=>{
        if(e.target.value === "popularité"){
                oneMedia.sort((a,b)=>{
                return a.likes - b.likes
                })
        } 
        if(e.target.value === 'Date'){
            oneMedia.sort(function(a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c-d;
            });
        }
    })
    
}





function displayLightbox(url){
    
    const modalLightBox = document.getElementById('modalLightBox')
    const lightboxModel = lightBoxFactory(url)
    const lightBoxCardDOM =lightboxModel.lightBoxCardDOM()
    modalLightBox.appendChild(lightBoxCardDOM)

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
    const onePhotograph =photographers.find((photographer)=>photographer.id == idPhotographer) ;
   console.log(onePhotograph);
//afficher le le nom du photographe dans le formulaire
    const spanName =document.getElementById('formName')
    console.log(spanName);
    if (onePhotograph){
        const photographName = onePhotograph.name
        spanName.textContent = photographName
        displayHeader(onePhotograph)
    }
//obtenir les medias d'un photographe
    const oneMedia = medias.filter((media)=> media.photographerId == idPhotographer)
    console.log(oneMedia);
    
  
    function displayFooter(photographer){
    const footer =document.querySelector('.like_price')
    console.log(footer);
    const footerModel =footerFactory(photographer)
    const footerCardDOM =footerModel.footerCardDOM()
    footer.appendChild(footerCardDOM)
    //pour obtenir le nombre total de like d'un photographe
    const spanLike = document.querySelector('.likes-Footer')
    console.log(spanLike);
    if(onePhotograph){
    let arrayOfLikes =[]
    oneMedia.forEach(media=>{
        arrayOfLikes.push(media.likes)
    })
    console.log(arrayOfLikes); 
    const addition =(previousValue,currentValue)=>previousValue+currentValue
    const totalLikesMedias =arrayOfLikes.reduce(addition)
    console.log(totalLikesMedias);
    spanLike.innerHTML = totalLikesMedias
 }

}
    

    displayMedias(oneMedia)
    displayBySort(oneMedia)
    console.log(oneMedia);
    console.log(onePhotograph);
    if(typeof( likesPhotos )===typeof(Function))
    likesPhotos()
    if(onePhotograph){
        displayFooter(onePhotograph)
        displayLightbox(url)
    }
   
    
    
}
init()

