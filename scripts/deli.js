import resizeMap from "./general.js";
import { activateButton, openContactInfo} from "./header.js";

const specialsBox = document.querySelector('.js-deli-specials-box');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  specialsBox.style.transform = `translateY(${scrollPosition * -1.5}px)`;
})

const homeLink = document.querySelector('.js-home-link');

homeLink.addEventListener('click', () => {
  window.location.href = 'index.html';
})

const aboutLink = document.querySelector('.js-about-link');

aboutLink.addEventListener('click', () => {
  window.location.href = 'about.html';
})

const subwayLinks = document.querySelectorAll('.js-subway-link');

subwayLinks.forEach((subwayLink) => {
  subwayLink.addEventListener('click', () => {
    window.open('https://restaurants.subway.com/united-states/mn/sandstone/320-state-highway-123', '_blank');
  })
});



const debug = document.getElementById('debug');

function updateDebug() {
  let viewportHeight = window.innerHeight;
  let viewportWidth = window.innerWidth;

  let debugMessage = `Current Width: ${viewportWidth}`;

  debug.innerText = debugMessage;
}

const googleMap = document.getElementById('googleMap');

window.addEventListener('resize', () => {
  resizeMap();
})

resizeMap();

activateButton();

openContactInfo();