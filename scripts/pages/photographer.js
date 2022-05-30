/* eslint-disable no-undef */
//Mise en place pour l'affichage du header de la page d'un photographe
function displayHeader(photographer) {
  const banner = document.querySelector(".photographHeader");
  const photographerModel = photographerFactory(photographer);
  const userHeaderDOM = photographerModel.getUserHeaderDOM();
  banner.appendChild(userHeaderDOM);
}
//Mise en place pour l'affichage des medias de la page d'un photographe
function displayMedias(medias) {
  medias.forEach((oneMedia) => {
    const displayPhotos = document.getElementById("display-photos");
    const mediasModel = mediaListFactory(oneMedia);
    const mediasCardDOM = mediasModel.mediasCardDOM();
    displayPhotos.appendChild(mediasCardDOM);
  });
}
//Suppression de la partie des medias pour l'affichage des medias selon le filtre
function deleteChild() {
  var e = document.getElementById("display-photos");
  e.innerHTML = "";
}
//initialisation de la page photographe
async function init() {
  const data = await fetch(
    "https://raw.githubusercontent.com/Animasso/AnimassoSidibe_6_070320202/main/data/photographers.json"
  ).then((response) => response.json());
  //changement de url de la page en fonction de l'id du photographe
  let windowLocal = window.location.search;
  let searchParams = new URLSearchParams(windowLocal);
  const idPhotographer = searchParams.get("id");

  const photographers = data.photographers;
  const medias = data.media;
  const onePhotograph = photographers.find(
    (photographer) => photographer.id == idPhotographer
  );

  //afficher le le nom du photographe dans le formulaire
  const spanName = document.getElementById("formName");
  if (onePhotograph) {
    const photographName = onePhotograph.name;
    spanName.textContent = photographName;
    displayHeader(onePhotograph);
  }
  //obtenir les medias d'un photographe
  let oneMedia = medias.filter(
    (media) => media.photographerId == idPhotographer
  );
  //obtenir les medias filtrer selon la popularité ,date et le titre
  if (onePhotograph) {
    const filterMedias = document.getElementById("filter-select");
    filterMedias.addEventListener("change", (e) => {
      deleteChild("display-photos");
      if (e.target.value === "Popularité") {
        sortedMedias = oneMedia.sort((a, b) => {
          return b.likes - a.likes;
        });
      }
      if (e.target.value === "Date") {
        sortedMedias = oneMedia.sort(function (a, b) {
          var c = new Date(a.date);
          var d = new Date(b.date);
          return c - d;
        });
      }
      if (e.target.value === "Titre") {
        sortedMedias = oneMedia.sort((a, b) => a.title.localeCompare(b.title));
      }
      oneMedia.forEach((oneMedia) => {
        const displayPhotos = document.getElementById("display-photos");
        const mediasModel = mediaListFactory(oneMedia);
        const mediasCardDOM = mediasModel.mediasCardDOM();
        displayPhotos.appendChild(mediasCardDOM);
      });
      likesPhotos();
      listenerLike();
      Lightbox.init();
    });
  }

  //mise en place du footer
  function displayFooter(photographer) {
    const footer = document.querySelector(".like_price");
    const footerModel = footerFactory(photographer);
    const footerCardDOM = footerModel.footerCardDOM();
    footer.appendChild(footerCardDOM);

    //pour obtenir le nombre total de like d'un photographe
    const spanLike = document.querySelector(".likes-Footer");
    if (onePhotograph) {
      let arrayOfLikes = [];
      oneMedia.forEach((media) => {
        arrayOfLikes.push(media.likes);
      });

      const addition = (previousValue, currentValue) =>
        previousValue + currentValue;
      const totalLikesMedias = arrayOfLikes.reduce(addition);
      spanLike.innerHTML = totalLikesMedias;
    }
  }

  displayMedias(oneMedia);
  if (typeof likesPhotos === typeof Function) likesPhotos();
  if (onePhotograph) {
    displayFooter(onePhotograph);
    Lightbox.init();
  }
}
init();
