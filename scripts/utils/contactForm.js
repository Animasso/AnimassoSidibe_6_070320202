/* eslint-disable no-unused-vars */
const main = document.getElementById("mainPhotograph");
const footer = document.querySelector(".like_price");
const lightBox = document.getElementById("modalLightBox");

const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const firstError = document.getElementById("errorFirst");
const lastError = document.getElementById("errorLast");
const emailError = document.getElementById("errorEmail");
const messageError = document.getElementById("errorMessage");
const modal = document.getElementById("contact_modal");
const closeForm = document.querySelector(".closeForm");

//pour ouvrir le modal formulaire
function displayModal() {
  modal.ariaHidden = "false";
  modal.style.display = "block";
  main.style.display = "none";
  footer.style.display = "none";
  lightBox.style.display = "none";
}
//pour fermer le modal formulaire
function closeModal() {
  modal.style.display = "none";
  modal.ariaHidden = "true";
  main.style.display = "block";
  footer.style.display = "block";
  lightBox.style.display = "none";
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
closeForm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    closeModal();
  }
});

//envoi du formaulaire
const form = document.getElementById("contact_Photograph");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //creation de variable pour stocker les valeurs du formulaire
  let formIsValid = true;
  let firstNameValue = firstName.value;
  let lastNameValue = lastName.value;
  let messageValue = message.value;
  let emailValue = email.value;
  const emailFormat = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;

  //gestion erreur premon
  if (firstNameValue.length < 2) {
    firstError.style.display = "block";
    firstError.style.color = "black";
    firstError.style.fontWeight = "bolder";
    firstError.style.backgroundColor = "red";
    firstName.style.border = "3px solid red";
    formIsValid = false;
  } else {
    firstError.style.display = "none";
  }
  //gestion erreur nom
  if (lastNameValue.length < 2) {
    lastError.style.display = "block";
    lastError.style.color = "black";
    lastError.style.fontWeight = "bolder";
    lastError.style.backgroundColor = "red";
    lastName.style.border = "3px solid red";
    formIsValid = false;
  } else {
    lastError.style.display = "none";
  }
  //gestion erreur email
  if (!emailFormat.test(emailValue)) {
    emailError.style.display = "block";
    emailError.style.color = "black";
    emailError.style.fontWeight = "bolder";
    emailError.style.backgroundColor = "red";
    email.style.border = "3px solid red";
    formIsValid = false;
  } else {
    emailError.style.display = "none";
  }
  //gestion erreur message
  if (messageValue.length < 4) {
    messageError.style.display = "block";
    messageError.style.color = "black";
    messageError.style.fontWeight = "bolder";
    messageError.style.backgroundColor = "red";
    message.style.border = "3px solid red";
    formIsValid = false;
  } else {
    messageError.style.display = "none";
  }
  console.log(firstNameValue);
  console.log(lastNameValue);
  console.log(emailValue);
  console.log(messageValue);
  //si il n'y a aucune erreur  la fonction est appelée
  if (formIsValid === true) {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.display = "block";
    footer.style.display = "block";
    lightBox.style.display = "none";
    form.reset();
  }
});
