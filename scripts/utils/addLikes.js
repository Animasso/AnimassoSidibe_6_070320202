


function likesPhotos() {
   

      console.log('init likes');
      const imgHeart =document.querySelectorAll('.imgHeart')
      console.log(imgHeart);
      document.querySelectorAll('.imgHeart').forEach(item =>{
          console.log(item);
          item.addEventListener('click',(e)=>{
            const id = e.currentTarget.id
            let sibling = item.previousElementSibling
            console.log(sibling);
            console.log(id);
            console.log(e.currentTarget);
            
            const totalLikes = parseInt(sibling.textContent) + 1;
            sibling.innerText = totalLikes;
            console.log(e.currentTarget);
          })
          
      })
      
    
  };
  