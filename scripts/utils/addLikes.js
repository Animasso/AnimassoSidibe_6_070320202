
function likesPhotos() {
    const totalLikesPhoto =document.querySelector('.heart')
    console.log(totalLikesPhoto);
    const clickLike= document.querySelectorAll('.imgHeart').forEach(item =>{
        item.addEventListener('click',()=>{
        totalLikesPhoto.innerHTML = parseInt(totalLikesPhoto.innerHTML)+1
        })
        
    })
    
    console.log(clickLike);
    
   
};
likesPhotos()