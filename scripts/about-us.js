import resizeMap from "./general.js";
import activateButton from "./header.js";

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

const subwayLinks = document.querySelectorAll('.js-subway-link');

subwayLinks.forEach((subwayLink) => {
  subwayLink.addEventListener('click', () => {
    window.open('https://restaurants.subway.com/united-states/mn/sandstone/320-state-highway-123', '_blank');
  })
});

const googleMap = document.getElementById('googleMap');

window.addEventListener('resize', () => {
  resizeMap();
})

resizeMap();
activateButton();