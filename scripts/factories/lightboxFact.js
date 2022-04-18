function lightBoxCardDom(){
  
    const modalLightBox = document.getElementById('modal_LightBox')
    console.log(modalLightBox);
    const lightbox =document.createElement('article')
    lightbox.classList.add('lightbox')
    lightbox.setAttribute('role','dialog')
    lightbox.setAttribute('aria-hidden', 'true')
    lightbox.setAttribute('aria-label','image closeup view')
    modalLightBox.appendChild(lightbox)

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

    imgContainer.setAttribute('src','')
    containerLightBox.appendChild(imgContainer)

}
lightBoxCardDom()