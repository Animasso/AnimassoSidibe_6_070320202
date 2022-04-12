
function likesPhotos() {
    const clickLike= document.querySelectorAll('.imgHeart')
    const totalLikesPhoto =document.querySelector('.heart')
    console.log(clickLike);
    console.log(totalLikesPhoto);
    clickLike.addEventListener('click',()=>{
    totalLikesPhoto ++
    })
};
likesPhotos()