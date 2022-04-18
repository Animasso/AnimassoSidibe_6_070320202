
function displayLightBox() {
    const modalLightBox = document.getElementById("modal_LightBox");
	modalLightBox.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
}


    const modalLightBox = document.getElementById("modal_LightBox");
    const lightboxClose =document.querySelector('.lightbox_close')
    lightboxClose.addEventListener('click',()=>{
        modalLightBox.style.display = "none";
        main.style.display = "block"
        footer.style.display ="block"
    })
    

