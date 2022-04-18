const main = document.getElementById('mainPhotograph')
const footer = document.querySelector('.like_price')
const lightBox = document.getElementById('modal_LightBox')
const modal =document.getElementById('contact_modal')
const firstError = document.getElementById('errorFirst');
const lastError = document.getElementById('errorLast');
const emailError = document.getElementById('errorEmail');
const birthDateError = document.getElementById('errorMessage');


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
/*
function sendForm(){
    modal.addEventListener('submit',(e) => {
        e.preventDefault();
    //creation de variable pour stocker les valeurs du formulaire
        let formIsValid = false;
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value
        let messageValue = quantity.value
        let emailValue = email.value
        const emailFormat = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;
       
    //gestion erreur premon
        if ( firstNameValue.length < 2) {
          firstError.style.display = "block";
          formIsValid =false
        }else{
          firstError.style.display = "none";
        }
    
    //gestion erreur nom
        if ( lastNameValue.length < 2 ) {
          lastError.style.display = "block";
          formIsValid =false
        }else{
          lastError.style.display = "none";
        }
    
    //gestion erreur email
        if (!emailFormat.test(emailValue)) {
          emailError.style.display ="block";
          formIsValid =false
        }else{
          emailError.style.display = "none";
        }
    
    //gestion erreur message
        if (messageValue.length <= 0 ) {
          messageError.style.display ="block"
          formIsValid = false
        }else{
          messageError.style.display = "none";
        }

        console.log(firstNameValue);
        console.log(lastNameValue);
        console.log(emailValue);
        console.log(messageValue);
    
    
    //si il n'y a aucune erreur  la fonction est appelée
        if(formIsValid === true){
            
            window.location = "index.html";
          sendForm(e)
         
          
        }
      })




}
*/

 

  