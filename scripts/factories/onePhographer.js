function onephotographerFactory(data) {
    const { name,id, portrait ,city , country , tagline ,price, alt} = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    const main = document.getElementById('mainPhotograph')
    function photographerHeaderDOM() {
        const singlePhotographer = `   
        <div class="photographHeader">
          <div class="name_localisation">
            <p class="name">Mimi keel</p>
            <p class="localisation">Uk, london</p>
            <p class="taglign">Voir le beau dans le quotidien</p>
          </div>
          <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
          <img src="assets/photographers/Photographers ID Photos/MimiKeel.jpg" alt="image du photographe">
      </div>
      <div id="select">
        <label for="filter-select">Trier par </label>
        <select name="select" id="filter-select">
          <option value="Popularité">Popularité</option>
          <option value="Date">Date</option>
          <option value="Titre">Titre</option>
        </select>
      </div>
      <div id="display-photos">
        <div class="photos-artist">
          <img src="assets/photographers/Photographers ID Photos/MimiKeel.jpg" alt="artist photos" />
        </div>
        <p class="photos-title">Un soleil couchant</p>
      </div
        `;
        main.innerHTML = singlePhotographer 
        return main
    }
    return { name,id, picture,city,country,tagline,price,alt,photographerHeaderDOM }
}