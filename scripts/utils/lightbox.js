
function displayLightBox() {
    const modalLightBox = document.getElementById("modal_LightBox");
	modalLightBox.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
    /*const srcMedia=[] 
    document.querySelectorAll('.portofolio').forEach(item=>{
     if (item.src) 
        srcMedia.push(item.src)
        else{
            srcMedia.push(item.firstChild.src);
            }
    })
 
    console.log(srcMedia);
}
*/

   
    }
    
    const modalLightBox = document.getElementById("modal_LightBox");
    const lightboxClose =document.querySelector('.lightbox_close')
    lightboxClose.addEventListener('click',()=>{
        modalLightBox.style.display = "none";
        main.style.display = "block"
        footer.style.display ="block"})
