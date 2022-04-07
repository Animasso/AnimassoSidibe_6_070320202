function mediaListFactory(data) {
    const { name ,date , alt , likes,price,title,image,photographerId} = data;

    const mediasImages = `assets/photographers/${name}/${image}`;
    const displayPhotos = document.querySelector('.photos-artist')
    console.log(displayPhotos);
    
    function mediasCardDOM() {
        const mediasPhotographer=
        ` <img
        src="${mediasImages}"
        alt="${alt}"
        aria-label="photographe photo"
        tabindex="0"
      />
      <div class="photos-title" tabindex="0">
        <div class="title">${title}</div>
        <div
          class="numberLike"
          aria-label="nombre total de like"
          tabindex="0"
        >
          <p class="heart">${likes}</p>
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
        `
        displayPhotos.innerHTML = mediasPhotographer
        return displayPhotos
    }

    return { id,name, portrait ,date , alt , likes,price,title,image,photographerId ,mediasCardDOM }
}


