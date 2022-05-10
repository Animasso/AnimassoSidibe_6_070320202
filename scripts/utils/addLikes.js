function likesPhotos() {
      console.log('init likes');
      const imgHeart =document.querySelectorAll('.imgHeart')
      
      document.querySelectorAll('.imgHeart').forEach(item =>{
          item.addEventListener('click',(e)=>{
          let sibling = item.previousElementSibling
          const totalLikes = parseInt(sibling.textContent) + 1;
          sibling.innerText = totalLikes;
          console.log(e.currentTarget);

          const spanLike = document.querySelector('.likes-Footer')
          const addOneLike = parseInt(spanLike.textContent) + 1
          spanLike.innerText =addOneLike
          })
          
      })
        
  };
  