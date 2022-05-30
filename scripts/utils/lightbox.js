/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const secondHeader = document.querySelector(".secondHeader");

//ouverture de la lightbox
function openLightBox() {
  const main = document.getElementById("mainPhotograph");
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  modal.ariaHidden = "true";
  secondHeader.style.display = "none";
  modalLightBox.style.display = "block";
  main.style.display = "none";
  footer.style.display = "none";
}
//fermeture de la lightbox
function closeBox() {
  const main = document.getElementById("mainPhotograph");
  modalLightBox.style.display = "none";
  main.style.display = "block";
  footer.style.display = "block";
  secondHeader.style.display = "block";
}

class Lightbox {
  static init() {
    //recuperation des médias
    const srcMedia = [];
    document.querySelectorAll(".portofolio").forEach((item) => {
      if (item.src) {
        srcMedia.push(item.src);
      } else {
        srcMedia.push(item.firstChild.src);
      }
      item.addEventListener("click", (e) => {
        e.preventDefault();
        new Lightbox(
          e.currentTarget.getAttribute("src"),
          e.currentTarget.getAttribute("aria-label"),
          gallery,
          titles
        );
      });
    });
    let gallery = srcMedia;
    let titles = [];
    document.querySelectorAll(".title").forEach((item) => {
      titles.push(item.innerText);
    });
  }

  constructor(url, title, gallery, titles) {
    url = "http://127.0.0.1:5501/" + url;
    this.lightBoxCardDOM(url);
    this.loadImage(url, title);
    this.gallery = gallery;
    this.nextImage();
    this.prevImage();
    this.listener();
    this.titles = titles;
  }
  lightBoxCardDOM(url) {
    const modalLightBox = document.getElementById("modalLightBox");
    modalLightBox.innerHTML = ``;
    const lightboxModel = lightBoxFactory({ url });
    const lightBoxCardDOM = lightboxModel.lightBoxCardDOM();
    modalLightBox.appendChild(lightBoxCardDOM);
    return modalLightBox;
  }
  //Mise en place du chargement de l'image ou de la video avec le titre
  loadImage(url, titles) {
    this.url = null;
    const container = document.querySelector(".lightbox_container");

    const imgContainer = document.createElement("img");
    imgContainer.classList.add("img_container");
    imgContainer.setAttribute("src", url);
    imgContainer.setAttribute("data-title", titles);
    imgContainer.setAttribute("tabindex", 0);
    imgContainer.setAttribute("aria-label", titles);

    const videoContainer = document.createElement("video");
    videoContainer.classList.add("video_container");
    videoContainer.setAttribute("controls", "");
    videoContainer.setAttribute("src", url);
    videoContainer.setAttribute("data-title", titles);
    videoContainer.setAttribute("aria-label", titles);
    videoContainer.setAttribute("type", "video/mp4");
    videoContainer.setAttribute("tabindex", 0);

    const loader = document.createElement("div");
    loader.classList.add("lightbox_loader");
    container.innerHTML = "";
    container.appendChild(loader);
    if (url.substr(-4) == ".mp4") {
      container.removeChild(loader);
      container.appendChild(videoContainer);
      this.url = url;
      videoContainer.src = url;
      const titleMedia = document.createElement("h2");
      titleMedia.id = "lightbox-title-id";
      titleMedia.classList.add("mediatitle");
      container.appendChild(titleMedia);

      const titleElement = document.getElementById("lightbox-title-id");
      titleElement.textContent = titles;
    } else {
      container.removeChild(loader);
      container.appendChild(imgContainer);
      this.url = url;
      imgContainer.src = url;
      const titleMedia = document.createElement("h2");
      titleMedia.id = "lightbox-title-id";
      titleMedia.classList.add("mediatitle");
      container.appendChild(titleMedia);

      const titleElement = document.getElementById("lightbox-title-id");
      titleElement.textContent = titles;
    }
  }
  //changement d'image avec les boutons précedent et suivant
  nextImage() {
    const nextImage = document.querySelector(".lightbox_next");
    nextImage.addEventListener("click", (e) => {
      e.preventDefault();
      let i = this.gallery.findIndex((image) => image === this.url);
      if (i === this.gallery.length - 1) {
        i = -1;
      }
      this.loadImage(this.gallery[i + 1], this.titles[i + 1]);
    });
  }
  prevImage() {
    const prevImage = document.querySelector(".lightbox_prev");
    prevImage.addEventListener("click", (e) => {
      e.preventDefault();
      let i = this.gallery.findIndex((image) => image === this.url);

      if (i === 0) {
        i = this.gallery.length;
      }
      this.loadImage(this.gallery[i - 1], this.titles[i - 1]);
    });
  }

  //eventlistener pour la lightbox
  listener() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 37) {
        document.querySelector(".lightbox_prev").click();
      }
      if (e.keyCode === 39) {
        document.querySelector(".lightbox_next").click();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeBox();
      }
    });
  }
}
