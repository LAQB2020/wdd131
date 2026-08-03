// Get las modification
document.getElementById("lastModified").innerHTML = document.lastModified;
//Get current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
// Add items to the select option
const button = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const oldTemples = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const largeTemples = document.querySelector('#large');
const smallTemples = document.querySelector('#small');
const home = document.querySelector('#home');
button.addEventListener('click', ()=> {

    navigation.classList.toggle('open');
    button.classList.toggle('open');
})