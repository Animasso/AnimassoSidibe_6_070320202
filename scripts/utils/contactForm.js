const main = document.getElementById('mainPhotograph')
const footer = document.querySelector('.like_price')
console.log(main);
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    main.style.display = "block"
    footer.style.display ="block"
}
