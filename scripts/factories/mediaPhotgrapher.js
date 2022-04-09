function mediaListFactory(data) {
    const {id, name ,date , alt , likes,price,title,image,photographerId} = data;

    const mediasImages = `assets/photographers/${photographerId}/${image}`;
    
    function mediasCardDOM() {

        const photoArtist = document.querySelector('.photos-artist')
        const imgMain = document.createElement('img')
        imgMain.setAttribute('src',mediasImages)
        imgMain.setAttribute('alt',alt)
        imgMain.setAttribute('aria-label','photographe photo')
        imgMain.setAttribute('tabindex',0)
        photoArtist.appendChild(imgMain)
        
        const photoTitle = document.createElement('div')
        photoTitle.classList.add('photos-title')
        photoArtist.appendChild(photoTitle)
        
        
        const title = document.createElement('div')
        title.classList.add('title')
        title.setAttribute('tabindex',0)
        title.textContent = title
        photoTitle.appendChild(title)
        
        const numberLike= document.createElement('div')
        numberLike.classList.add('numberLike')
        numberLike.setAttribute('tabindex',0)
        numberLike.setAttribute('aria-label','nombre de like photo' )
        photoTitle.appendChild(numberLike)
        
        const pLike = document.createElement('p')
        pLike.classList.add('heart')
        pLike.textContent = likes
        pLike.setAttribute('tabindex',0)
        photoTitle.appendChild(pLike)
        
        const iheart = document.createElement('i')
        iheart.classList.add('fa-solid fa-heart')
        photoTitle.appendChild(iheart)
        return photoArtist
    }

    return { id,name,date , alt , likes,price,title,image,photographerId ,mediasCardDOM }
}


