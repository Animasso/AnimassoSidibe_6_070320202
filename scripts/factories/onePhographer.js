function onephotographerFactory(data) {
    const { name,id, portrait ,city , country , tagline ,price,alt} = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    const banner = document.querySelector('.photographHeader')
    console.log(banner);
    function photographerHeaderDOM() {
        const singlePhotographer = `
        <div class="name_localisation">
          <p class="name" tabindex="0">${name}</p>
          <p class="localisation" tabindex="0">${city + ", " + country}</p>
          <p class="taglign" tabindex="0">${tagline}</p>
        </div>
        <section class="contact" role="dialog">
          <button
            role="button"
            aria-label="prendre contact"
            class="contact_button"
            onclick="displayModal()"
          >
            Contactez-moi
          </button>
        </section>
        <div class="image-up">
          <img
            src="${picture}"
            alt=""
            tabindex="0"
          />
        </div>
        `
        banner.innerHTML = singlePhotographer 
        return 
    }
    return { name,id, picture,city,country,tagline,price,alt, photographerHeaderDOM }
}