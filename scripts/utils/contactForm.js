const main = document.getElementById('mainPhotograph')
const footer = document.querySelector('.like_price')
const lightBox = document.getElementById('modalLightBox')

const firstName= document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const firstError = document.getElementById('errorFirst');
const lastError = document.getElementById('errorLast');
const emailError = document.getElementById('errorEmail');
const messageError = document.getElementById('errorMessage');
const modal = document.getElementById("contact_modal");
const closeForm = document.querySelector('.closeForm')


function displayModal() {
    const modal = document.getElementById("contact_modal");
  	modal.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
    lightBox.style.display ='none'
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.display = "block"
    footer.style.display ="block"
    lightBox.style.display ='none'

}
//pour fermer le modal formulaire
document.addEventListener('keydown', (event) => {  
  if (event.key === 'Escape') {
        closeModal()
  }
});
closeForm.addEventListener('keydown',(e)=>{
  if (e.key === 'Enter') {
    closeModal()
}
})
function sendForm(){
  const form =document.getElementById('contact_Photograph')
  console.log(form);
      form.addEventListener('submit',(e) => {
          e.preventDefault();
      //creation de variable pour stocker les valeurs du formulaire
          let formIsValid = true;
          let firstNameValue = firstName.value;
          let lastNameValue = lastName.value
          let messageValue = message.value
          let emailValue = email.value
          const emailFormat = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
         
      //gestion erreur premon
          if ( firstNameValue.length < 2) {
            firstError.style.display = "block";
            firstError.style.color ="red"
            firstName.style.border ="2px solid red"
            formIsValid =false
          }else{
            firstError.style.display = "none";
          }
          console.log(firstNameValue);
      //gestion erreur nom
          if ( lastNameValue.length < 2 ) {
              lastError.style.display = "block";
              lastError.style.color ="red"
              lastName.style.border ="2px solid red"
              formIsValid =false
          }else{
            lastError.style.display = "none";
          }
      //gestion erreur email
          if (!emailFormat.test(emailValue)) {
            emailError.style.display ="block";
            emailError.style.color ="red"
            email.style.border ="2px solid red"
            formIsValid =false
          }else{
            emailError.style.display = "none";
          }
      //gestion erreur message
          if (messageValue.length < 4 ) {
            messageError.style.display ="block"
            messageError.style.color ="red"
            message.style.border ="2px solid red"
            formIsValid = false
          }else{
            messageError.style.display = "none";
          }
          console.log(lastNameValue);
          console.log(emailValue);
          console.log(messageValue);
      //si il n'y a aucune erreur  la fonction est appelée
      if(formIsValid === true){
        sendForm();
        const modal = document.getElementById("contact_modal");
        modal.style.display = "none";
        main.style.display = "block"
        footer.style.display ="block"
        lightBox.style.display ='none'
      }
        })



}


     





  