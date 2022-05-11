
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
    
    class Lightbox {
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
                   console.log(srcMedia);
                    item.addEventListener('click',e =>{
                        e.preventDefault()
                        if (e.currentTarget.hasAttribute('src')) {
                            new Lightbox(e.currentTarget.getAttribute('src'),gallery)
                        }
                        else{
                            new Lightbox(e.currentTarget.getAttribute('src'),gallery)
                        }
                        
                       // console.log(e,`init lightbox`);
                    })
            })
           let gallery = srcMedia
        
           console.log(`gallery contient:`,gallery);
        }
        
        constructor(url,gallery){
             this.lightBoxCardDOM(url)
             this.loadImage(url)
             this.gallery = gallery
             this.nextImage ()
             this.prevImage()
        }
        lightBoxCardDOM(url){
            const modalLightBox = document.getElementById('modalLightBox')
            modalLightBox.innerHTML=``;
             const lightboxModel = lightBoxFactory({url})
             const lightBoxCardDOM =lightboxModel.lightBoxCardDOM()
             modalLightBox.appendChild(lightBoxCardDOM)
             return modalLightBox
                   
            }
        loadImage(url){
            this.url = null
            const image = new Image()
            const container = document.querySelector('.lightbox_container')
            const loader = document.createElement('div')
            loader.classList.add('lightbox_loader')
            container.innerHTML =''
            container.appendChild(loader)
            image.onload = ()=> {
                container.removeChild(loader)
                container.appendChild(image)
                this.url=url
                console.log(url);
            console.log('chargé');
            }  
            image.src= url
            console.log(url);
            
        }  
        
         nextImage(){
           const nextImage = document.querySelector('.lightbox_next') 
           console.log(nextImage);
    
               nextImage.addEventListener('click', (e)=>{
                e.preventDefault()
                let i = this.gallery.findIndex(image=> image === this.url)
                console.log(i);
                if(i=== this.gallery.length -1){
                    i = -1
                }
                this.loadImage(this.gallery[i + 1])
               
               })
           }
         prevImage(){
            const prevImage=document.querySelector('.lightbox_prev') 
            prevImage.addEventListener('click',(e) =>{
                e.preventDefault()
                let i = this.gallery.findIndex(image=> image === this.url)
                console.log(i);
                if(i=== 0){
                    i = this.gallery.length
                }
                this.loadImage(this.gallery[i -1])
            })
           
           }
        }
        