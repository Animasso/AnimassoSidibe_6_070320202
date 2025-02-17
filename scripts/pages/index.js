/* eslint-disable no-undef */

async function getPhotographers() {
  // récuperation des données des photographes
  const data = await fetch("../../data/photographers.json").then((response) =>
    response.json()
  );
  const photographers = data.photographers;
  return {
    photographers: [...photographers],
  };
}

//affichage des donnees
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
