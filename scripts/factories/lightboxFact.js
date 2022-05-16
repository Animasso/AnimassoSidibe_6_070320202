function lightBoxFactory(data){
    const {title} = data;
    //const mediasImage = `assets/photographers/${photographerId}/${url}`;
    //const mediasVideo = `assets/photographers/${photographerId}/${video}`
    

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
        buttonClose.setAttribute('aria-label','close dialog')
        buttonClose.setAttribute('onclick','closeBox()')
        lightbox.appendChild(buttonClose)
    
        const containerLightBox = document.createElement('div')
        containerLightBox.classList.add('lightbox_container')
        lightbox.appendChild(containerLightBox)
        const modalLightBox = document.getElementById('modalLightBox')
        
        return lightbox
    
    }

    return {title, lightBoxCardDOM }
}







