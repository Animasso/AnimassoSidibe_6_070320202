function lightBoxFactory(data){
    const { title, image, video, photographerId } = data;
    const mediasImage = `assets/photographers/${photographerId}/${image}`;
    const mediasVideo = `assets/photographers/${photographerId}/${video}`

    function lightBoxCardDOM(){
  
        
        const lightbox =document.createElement('article')
        lightbox.classList.add('lightbox')
        lightbox.setAttribute('role','dialog')
        lightbox.setAttribute('aria-hidden', 'true')
        lightbox.setAttribute('aria-label','image closeup view')
       
        
        const buttonLeft = document.createElement('button')
        buttonLeft.classList.add('lightbox_prev')
        buttonLeft.setAttribute('aria-label','previous image')
        
        lightbox.appendChild(buttonLeft)
    
        const buttonRight = document.createElement('button')
        buttonRight.classList.add('lightbox_next')
       
        buttonRight.setAttribute('aria-label','next image')
        lightbox.appendChild(buttonRight)
    
        const buttonClose = document.createElement('button')
        buttonClose.classList.add('lightbox_close')
        buttonClose.setAttribute('aria-label','close lightbox')
        lightbox.appendChild(buttonClose)
    
        const containerLightBox = document.createElement('div')
        containerLightBox.classList.add('lightbox_container')
        lightbox.appendChild(containerLightBox)
    
            const imgContainer = document.createElement('img')
            imgContainer.classList.add('img_container')
            imgContainer.setAttribute('src',mediasImage)
            containerLightBox.appendChild(imgContainer)
            
        /*}else{
            const videoContainer = document.createElement('video')
            portofolioVideo.setAttribute('src', mediasVideo,)
            portofolioVideo.setAttribute('type', 'video/mp4',)
            containerLightBox.appendChild(videoContainer)
        }
        
    */
        return lightbox
    
    }

    return { title, image, video, photographerId, lightBoxCardDOM }
}







