
function openLightBox() {
    const modalLightBox = document.getElementById("modalLightBox");
    const secondHeader = document.querySelector('.secondHeader')
    secondHeader.style.display = "none"
	modalLightBox.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
    };
    function closeBox(){
        const closeLightbox = document.querySelector('.lightbox_close')
        console.log(closeLightbox);
        const secondHeader = document.querySelector('.secondHeader')
            modalLightBox.style.display = "none";
            main.style.display = "block"
            footer.style.display ="block"
            secondHeader.style.display = "block"
        
    }
    
    class lightbox {
        static init (){
         //   console.log(`start init lightbox`);
            const srcMedia=[]
            console.log(document.querySelectorAll('.portofolio')
            ); 
            document.querySelectorAll('.portofolio')
            .forEach(item=>{
               // console.log(`nnew item =`,item.src);
             if (item.src) {
                srcMedia.push(item.src)
             } else{
                    srcMedia.push(item.firstChild.src);
                    }
               //     console.log(srcMedia);
                    item.addEventListener('click',e =>{
                        e.preventDefault()
                        new lightbox(e.currentTarget.getAttribute('src'))
                       // console.log(e,`init lightbox`);
                    })
            })
           
        }
        constructor(url){
             this.lightBoxCardDOM(url)
        }
    
        
        
    
        lightBoxCardDOM(url){
            const modalLightBox = document.getElementById('modalLightBox')
            modalLightBox.innerHTML=``;
             const lightboxModel = lightBoxFactory({url})
             const lightBoxCardDOM =lightboxModel.lightBoxCardDOM()
             modalLightBox.appendChild(lightBoxCardDOM)

             return modalLightBox
         }
        
         /* function nextImage(e){
           const nextImage=document.querySelector('.lightbox_next') 
               e.preventDefault
               nextImage.addEventListener('click',e=>{
                let i = this.images.findIndex(image=> image === this.url)
                if(i=== this.image.length -1){
                    i = -1
                }
               })
             
           }
           function prevImage(e){
            const prevImage=document.querySelector('.lightbox_prev') 
            e.preventDefault
            prevImage.addEventListener('click',e=>{
                let i = this.images.findIndex(image=> image === this.url)
                if(i=== 0){
                    i = this.image.length
                }
            })
           
           }*/
        }
        