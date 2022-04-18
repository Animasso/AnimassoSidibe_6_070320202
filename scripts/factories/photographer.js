function photographerFactory(data) {
    const { name,id, portrait ,city , country , tagline ,price} = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt",name)
        img.setAttribute("aria-label",'aller vers la page personnel de' + name)
        const link = document.createElement('a')
        link.setAttribute('href',"./photographer.html?id=" + id);
        const h2 = document.createElement( 'h2' );
        h2.setAttribute("tabindex",0)
        const h3 = document.createElement( 'h3' )
        h3.setAttribute("tabindex",0)
        const h4 = document.createElement('h4')
        h4.setAttribute("tabindex",0)
        const h5 = document.createElement('h5')
        h5.setAttribute("tabindex",0)
        h2.textContent = name;
        h3.textContent = city +',' + " " + country
        h4.textContent = tagline
        h5.textContent = price + '€' + "/jour"
        article.appendChild(link)
        link.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3)
        article.appendChild(h4)
        article.appendChild(h5)
        return (article);
    }
    function getUserHeaderDOM() {
    const banner = document.querySelector('.photographHeader')
        const sectionHeader = document.createElement('article')
        sectionHeader.classList.add('infoPhotograph')
        banner.appendChild(sectionHeader)

        const localisation = document.createElement('div')
        localisation.classList.add('name_localisation')
        sectionHeader.appendChild(localisation)
        
        const pname = document.createElement('p')
        const plocalisation = document.createElement('p')
        const ptaglign =document.createElement('p')
        pname.classList.add('name')
        pname.setAttribute("tabindex",0)
        plocalisation.classList.add('localisation')
        plocalisation.setAttribute("tabindex",0)
        ptaglign.classList.add('taglign')
        ptaglign.setAttribute("tabindex",0)
        pname.textContent = name
        plocalisation.textContent = city +',' + " " + country
        ptaglign.textContent = tagline
        localisation.appendChild(pname)
        localisation.appendChild(plocalisation)
        localisation.appendChild(ptaglign)

        const dialogueContact = document.createElement('section')
        sectionHeader.appendChild(dialogueContact)
        dialogueContact.classList.add('contact')
        const contactButton =document.createElement('button')
        contactButton.classList.add('contact_button')
        contactButton.setAttribute('role','dialogue')
        contactButton.setAttribute('aria-label','prendre contact')
        contactButton.setAttribute('onclick' ,'displayModal()')
        dialogueContact.appendChild(contactButton)
        contactButton.textContent = 'Contactez-moi'

        const imagephotgraph = document.createElement('div')
        imagephotgraph.classList.add('image-up')
        sectionHeader.appendChild(imagephotgraph)
        const imgHeader = document.createElement( 'img' );
        imgHeader.setAttribute("src", picture)
        imgHeader.setAttribute("alt",name)
        imgHeader.setAttribute("aria-label", name)
        imgHeader.setAttribute("tabindex",0)
        imagephotgraph.appendChild(imgHeader)
        
       return sectionHeader
    }

    return { name,id, picture,city,country,tagline,price, getUserCardDOM ,getUserHeaderDOM}
}

