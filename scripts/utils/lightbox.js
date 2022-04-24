
function openLightBox() {
    const modalLightBox = document.getElementById("modalLightBox");
	modalLightBox.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
    const srcMedia=[] 
    document.querySelectorAll('.portofolio').forEach(item=>{
        item.addEventListener('click',(e) =>{
            e.preventDefault()
            const src = e.currentTarget 
            console.log(src);
        }) 
     if (item.src) 
        srcMedia.push(item.src)
        else{
            srcMedia.push(item.firstChild.src);
            }
    })
 
    console.log(srcMedia);



   
    }
    
  /*  const modalLightBox = document.getElementById("modalLightBox");
    const lightboxClose =document.querySelector('.lightbox_close')
    lightboxClose.addEventListener('click',()=>{
        modalLightBox.style.display = "none";
        main.style.display = "block"
        footer.style.display ="block"})*/
