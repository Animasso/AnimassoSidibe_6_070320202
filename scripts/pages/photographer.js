//Mettre le code JavaScript lié à la page photographer.html
async function photographerSolo() {
    const data = await fetch("https://raw.githubusercontent.com/Animasso/AnimassoSidibe_6_070320202/main/data/photographers.json")
    .then(response => response.json())
    console.log(data);
    const photographers = data.photographers
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: [...photographers]})
}
