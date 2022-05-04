
function openLightBox() {
    const modalLightBox = document.getElementById("modalLightBox");
	modalLightBox.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
    };

    class lightbox {
        static init (){
            console.log(`start init lightbox`);
            const srcMedia=[]
            console.log(document.querySelectorAll('.portofolio')
            ); 
            document.querySelectorAll('.portofolio')
            .forEach(item=>{
                console.log(`nnew item =`,item.src);
             if (item.src) {
                srcMedia.push(item.src)
             } else{
                    srcMedia.push(item.firstChild.src);
                    }
                    console.log(srcMedia);
                    item.addEventListener('click',e =>{
                        e.preventDefault()
                        new lightbox(e.currentTarget.getAttribute('src'))
                        console.log(e,`init lightbox`);
                    })
            })
           
        }
            constructor(url){
         const element = this.lightBoxCardDOM(url)
        document.body.appendChild(element)
            }
    
    function lightBoxCardDOM(url){
    
        const modalLightBox = document.getElementById('modalLightBox')
         const lightboxModel = lightBoxFactory(url)
         const lightBoxCardDOM =lightboxModel.lightBoxCardDOM()
         modalLightBox.appendChild(lightBoxCardDOM)
    
     
     }
      function nextImage(){
           e.preventDefault
           let i = this.images.findIndex(image=> image === this.url)
           if(i=== this.image.length -1){
               i = -1
           }
       }
       function prevImage(){
        e.preventDefault
        let i = this.images.findIndex(image=> image === this.url)
        if(i=== 0){
            i = this.image.length
        }
       }
  
    }
