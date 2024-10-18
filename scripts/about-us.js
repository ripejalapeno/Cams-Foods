import resizeMap from "./general.js";
import { activateButton, openContactInfo } from "./header.js";

const homeLink = document.querySelector('.js-home-link');

homeLink.addEventListener('click', () => {
  window.location.href = 'index.html';
})

const deliLinks = document.querySelectorAll('.js-deli-link');

deliLinks.forEach((deliLink) => {
  deliLink.addEventListener('click', () => {
    window.location.href = 'deli.html'
  })
})

window.addEventListener('resize', () => {
  resizeMap();
})

resizeMap();
activateButton();
openContactInfo();