function onephotographerFactory(data) {
    const { name,id, portrait ,city , country , tagline ,price,alt} = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    const main = document.getElementById('mainPhotograph')
    function photographerHeaderDOM() {
        const singlePhotographer = `
        
        
        
        
        
        
        
        
        
        
        
        
        
        `;
        main.innerHTML = singlePhotographer 
        return main
    }
    return { name,id, picture,city,country,tagline,price,alt, photographerHeaderDOM }
}