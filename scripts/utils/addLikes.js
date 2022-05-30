/* eslint-disable no-unused-vars */
//mise en place des likes sur tout les média
function likesPhotos() {
  console.log("init likes");
  const imgHeart = document.querySelectorAll(".imgHeart");
  imgHeart.forEach((item) => {
    item.addEventListener("click", (e) => {
      let sibling = item.previousElementSibling;
      const totalLikes = parseInt(sibling.textContent) + 1;
      sibling.innerText = totalLikes;
      console.log(e.currentTarget);
      const spanLike = document.querySelector(".likes-Footer");
      const addOneLike = parseInt(spanLike.textContent) + 1;
      spanLike.innerText = addOneLike;
    });
  });
}
//eventListener pour les likes
function listenerLike() {
  const imgHeart = document.querySelectorAll(".imgHeart");
  imgHeart.forEach((item) => {
    item.addEventListener("keydown", function (e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        document.querySelectorAll(".imgHeart").click();
      }
    });
  });
}
listenerLike();
