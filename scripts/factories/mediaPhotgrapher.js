/* eslint-disable no-unused-vars */
function mediaListFactory(data) {
    const { id, name, date, likes, price, title, image, video, photographerId } = data;

    const mediasImages = `assets/photographers/${photographerId}/${image}`;
    const mediasVideos = `assets/photographers/${photographerId}/${video}`
   // console.log(mediasImages);
    const likeheart = `assets/icons/heart.png`
    function mediasCardDOM() {


        const photosPlusTitle = document.createElement('div')
        photosPlusTitle.classList.add('photos_Plus_Title')
      
        if (video == undefined) {
            const imgMain = document.createElement('img')
            imgMain.classList.add('portofolio')
            imgMain.setAttribute('src', mediasImages)
            imgMain.setAttribute('onclick','openLightBox()')
            imgMain.setAttribute('aria-label', title )
            imgMain.setAttribute('tabindex', 0)
            photosPlusTitle.appendChild(imgMain)
        } else {
            const portofolioVideo = document.createElement('video')
            portofolioVideo.classList.add('portofolio')
            portofolioVideo.setAttribute('src', mediasVideos,)
            portofolioVideo.setAttribute('onclick','openLightBox()')
            portofolioVideo.setAttribute('type', 'video/mp4',)
            portofolioVideo.setAttribute('aria-label', title)
            portofolioVideo.setAttribute('tabindex', 0)
            photosPlusTitle.appendChild(portofolioVideo)
        }


        const photoTitle = document.createElement('div')
        photoTitle.classList.add('photos-title')
        photosPlusTitle.appendChild(photoTitle)


        const titles = document.createElement('div')
        titles.classList.add('title')
        titles.setAttribute('tabindex', 0)
        titles.textContent = title
        photoTitle.appendChild(titles)

        const numberLike = document.createElement('div')
        numberLike.classList.add('numberLike')
        numberLike.setAttribute('tabindex', 0)
        numberLike.setAttribute('aria-label', 'nombre de like photo')
        photoTitle.appendChild(numberLike)
      
        const pLike = document.createElement('p')
        pLike.classList.add('heart')
        pLike.textContent = likes
        pLike.id = "heart-"+ id
        pLike.setAttribute('tabindex', 0)
        numberLike.appendChild(pLike)

        const iheart = document.createElement('p')
        iheart.classList.add('imgHeart')
        iheart.setAttribute('tabindex', 0)
        iheart.setAttribute('aria-label', 'liké la photo')
        iheart.id ="imgHeart-" +id
        const pLikeHeart = document.createElement('img')
        pLikeHeart.setAttribute('src', likeheart)
  
        iheart.appendChild(pLikeHeart)
        numberLike.appendChild(iheart)

        return photosPlusTitle
    }  
    

    return { id, name, date, likes, price, title, image, video, photographerId, mediasCardDOM }
}


   

