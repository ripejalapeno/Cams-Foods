import resizeMap from "./general.js";
import {activateButton, openContactInfo} from "./header.js";

const aboutLink = document.querySelector('.js-about-link');

aboutLink.addEventListener('click', () => {
  window.location.href = 'about.html';
})

const deliLinks = document.querySelectorAll('.js-deli-link');

deliLinks.forEach((deliLink) => {
  deliLink.addEventListener('click', () => {
    window.location.href = 'deli.html'
  })
})

const emailInput = document.querySelector('.js-email-input');
const subscribeButton = document.querySelector('.js-subscribe-button');

function subscribe() {
  if (emailInput.value.includes('.com')) {
    emailInput.value = '';
    emailInput.placeholder = 'Welcome to the community';
    subscribeButton.innerText = 'Subscribed!';
  }
}

emailInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    subscribe();
  }
})

subscribeButton.addEventListener('click', () => {
  subscribe();
})

window.addEventListener('resize', () => {
  resizeMap();
})

resizeMap();

activateButton();

openContactInfo();


