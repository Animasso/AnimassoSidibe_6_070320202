
function openLightBox() {
    const modalLightBox = document.getElementById("modalLightBox");
	modalLightBox.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
    };

    class lightbox {
        static init (){
            const srcMedia=[] 
            document.querySelectorAll('.portofolio')
            .forEach(item=>{
             if (item.src) 
                srcMedia.push(item.src)
                else{
                    srcMedia.push(item.firstChild.src);
                    }
                    console.log(srcMedia);
                    item.addEventListener('click',e =>{
                        e.preventDefault()
                        new lightbox(e.currentTarget.getAttribute('src'))
                        console.log(e);
                    })
            })
           
        }
            constructor(url){
                const element = this.lightBoxCardDOM(url)
        document.body.appendChild(element)
            }
    }
       
    lightbox.init()

            /*.forEach(srcMedia=>srcMedia.addEventListener('click',e =>{
                e.preventDefault()
                new lightbox(e.currentTarget)
            }))
           
            console.log(srcMedia);
        }   
        constructor(url){
                const element = this.lightBoxCardDOM(url)
        document.body.appendChild(element)
            }
    }
       
    lightbox.init()
    };

   
  /*  const modalLightBox = document.getElementById("modalLightBox");
    const lightboxClose =document.querySelector('.lightbox_close')
    lightboxClose.addEventListener('click',()=>{
        modalLightBox.style.display = "none";
        main.style.display = "block"
        footer.style.display ="block"})
        item.addEventListener('click',(e) =>{
            e.preventDefault()
            lightBoxCardDOM(e.currentTarget.getAttribute('src',srcMedia))
              for (let i= 0; i < srcMedia.length; i++) {
                  const src = srcMedia[i];
                  src.indexOf(e.target)
                  console.log(src);
              }
              
          })*/