function footerFactory(data) {
    const { likes, price } = data;
    const likeheart = `assets/icons/heartBlack.png`
    
    
function footerCardDOM(){

const stickyFooter =document.createElement('section')
stickyFooter.classList.add('sticky_footer')

const likeFooter = document.createElement('div')
likeFooter.classList.add('likeHeart')
stickyFooter.appendChild(likeFooter)

const spanLike = document.createElement('div')
spanLike.classList.add('likes-Footer')
spanLike.setAttribute('tabindex',0)
spanLike.setAttribute('aria-label','nombre de like')



likeFooter.appendChild(spanLike)
const imgHeart =document.createElement('img')
imgHeart.setAttribute('src',likeheart)
imgHeart.setAttribute('alt','like')
likeFooter.appendChild(imgHeart)

const spanPrice = document.createElement('span')
spanPrice.classList.add('price')
spanPrice.setAttribute('tabindex',0)
spanPrice.setAttribute('aria-label','prix')
spanPrice.textContent= price +'€' +''+ '/jour'
stickyFooter.appendChild(spanPrice)

return stickyFooter

}
return {likes,price,footerCardDOM}
}