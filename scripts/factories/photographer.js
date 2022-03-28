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

    return { name,id, picture,city,country,tagline,price, getUserCardDOM }
}

