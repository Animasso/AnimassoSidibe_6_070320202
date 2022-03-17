    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
	    const data = await fetch("../data/photographers.json")
        const photographers = data
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [photographers]})
    }
    class photographer {
        constructor(data) {
            this.name = data.name
            this.id = data.id
            this.city = data.city
            this.country = data.country
            this.tagline = data.tagline
            this.price = data.price  
            this.portait = data.portait           
        }
     
        get name() {
            return this.name
        }
     
        get id() {
            return this.id
        }

        get city() {
            return this.city
        }

        get country() {
            return this.country
        }

        get tagline() {
            return this.tagline
        }

        get price() {
            return this.price
        }

        get portait() {
            return this.portait
        }
     }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    