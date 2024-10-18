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

window.addEventListener('resize', () => {
  resizeMap();
})

resizeMap();
activateButton();
openContactInfo();

// const debug = document.getElementById('debug');

// function updateDebug() {
//   let viewportHeight = window.innerHeight;
//   let viewportWidth = window.innerWidth;

//   let debugMessage = `Current Width: ${viewportWidth}`;

//   debug.innerText = debugMessage;
// }