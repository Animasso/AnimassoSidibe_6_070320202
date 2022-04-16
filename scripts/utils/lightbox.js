
function displayLightBox() {
    const modalLightBox = document.getElementById("modal_LightBox");
	modalLightBox.style.display = "block";
    main.style.display = "none"
    footer.style.display ="none"
}

function closeLightBox() {
    const modalLightBox = document.getElementById("modal_LightBox");
    modalLightBox.style.display = "none";
    main.style.display = "block"
    footer.style.display ="block"
}
