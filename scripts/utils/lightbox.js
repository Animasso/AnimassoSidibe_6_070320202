function openLightBox() {
  const modalLightBox = document.getElementById("modalLightBox");
  const secondHeader = document.querySelector(".secondHeader");
  secondHeader.style.display = "none";
  modalLightBox.style.display = "block";
  main.style.display = "none";
  footer.style.display = "none";
}
function closeBox() {
  const closeLightbox = document.querySelector(".lightbox_close");
  const secondHeader = document.querySelector(".secondHeader");
  modalLightBox.style.display = "none";
  main.style.display = "block";
  footer.style.display = "block";
  secondHeader.style.display = "block";
}

class Lightbox {
  static init() {
    //   console.log(`start init lightbox`);
    const srcMedia = [];

    console.log(document.querySelectorAll(".portofolio"));
    document.querySelectorAll(".portofolio").forEach((item) => {
      if (item.src) {
        srcMedia.push(item.src);
      } else {
        srcMedia.push(item.firstChild.src);
      }
      item.addEventListener("click", (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute("src"), gallery);
      });
    });
    let gallery = srcMedia;
  }

  constructor(url, gallery) {
    this.lightBoxCardDOM(url);
    this.loadImage(url);
    this.gallery = gallery;
    this.nextImage();
    this.prevImage();
  }
  lightBoxCardDOM(url) {
    const modalLightBox = document.getElementById("modalLightBox");
    modalLightBox.innerHTML = ``;
    const lightboxModel = lightBoxFactory({ url });
    const lightBoxCardDOM = lightboxModel.lightBoxCardDOM();
    modalLightBox.appendChild(lightBoxCardDOM);
    return modalLightBox;
  }
  loadImage(url) {
    this.url = null;
    const container = document.querySelector(".lightbox_container");

    const imgContainer = document.createElement("img");
    imgContainer.classList.add("img_container");
    imgContainer.setAttribute("src", url);
    imgContainer.setAttribute("tabindex", 1);

    const videoContainer = document.createElement("video");
    videoContainer.classList.add("video_container");
    videoContainer.setAttribute("controls", "");
    videoContainer.setAttribute("src", url);
    videoContainer.setAttribute("type", "video/mp4");
    videoContainer.setAttribute("tabindex", 1);

    const loader = document.createElement("div");
    loader.classList.add("lightbox_loader");
    container.innerHTML = "";
    container.appendChild(loader);
    if (url.substr(-4) == ".mp4") {
      console.log(url.substr(-4));
      container.removeChild(loader);
      container.appendChild(videoContainer);
      this.url = url;
      console.log(url);
      console.log("chargé");
      videoContainer.src = url;
      console.log(url);
    } else {
      console.log(url.substr(-4));
      container.removeChild(loader);
      container.appendChild(imgContainer);
      this.url = url;
      console.log(url);
      console.log("chargé");
      imgContainer.src = url;
      console.log(url);
    }
  }
  nextImage() {
    const nextImage = document.querySelector(".lightbox_next");
    console.log(nextImage);

    nextImage.addEventListener("click", (e) => {
      e.preventDefault();
      let i = this.gallery.findIndex((image) => image === this.url);
      console.log(i);
      if (i === this.gallery.length - 1) {
        i = -1;
      }
      this.loadImage(this.gallery[i + 1]);
    });
  }
  prevImage() {
    const prevImage = document.querySelector(".lightbox_prev");
    prevImage.addEventListener("click", (e) => {
      e.preventDefault();
      let i = this.gallery.findIndex((image) => image === this.url);
      console.log(i);
      if (i === 0) {
        i = this.gallery.length;
      }
      this.loadImage(this.gallery[i - 1]);
    });
  }
}
