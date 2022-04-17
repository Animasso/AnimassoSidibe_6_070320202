function formFactory(data){

    const{name,id} = data

    function formDom(){
        const contactModal = document.getElementById('contact_modal')
        let divGroup =""

        divGroup+=
        `
        <div
          class="modal"
          aria-hidden="true"
          role="dialog"
          aria-describedby="formulaire de contact"
        >
          <header class="formGroup">
            <h2 tabindex="0">Contactez-moi <br />${photographerID.name}</h2>
            <img
              src="assets/icons/close.svg"
              tabindex="0"
              onclick="closeModal()"
              aria-label="fermer le formulaire"
            />
          </header>
  
          <form id="contact_Photograph" role="form">
            <div role="group" aria-labelledby="formulaire">
              <label for="first_name">Prénom</label>
              <input
                type="text"
                name="first_name"
                autocomplete="given-name"
                id="first_name"
                aria-required="true"
                minlength="2"
              />
  
              <label for="last_name">Nom</label>
              <input
                type="text"
                name="last_name"
                autocomplete="family-name"
                id="last_name"
                aria-required="true"
                minlength="2"
              />
  
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                autocomplete="email"
                id="email"
                aria-required="true"
              />
  
              <label for="message">Votre message</label>
              <textarea
                name="message"
                id="message"
                aria-required="true"
              ></textarea>
            </div>
            <button class="contact_button" type="submit">Envoyer</button>
          </form>
        </div>
    `
    contactModal.innerHTML =divGroup
    return contactModal
    }
    return{name,id}
}