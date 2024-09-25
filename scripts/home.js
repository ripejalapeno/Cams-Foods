import { resizeMap, openContactInfo } from "./general.js";
import activateButton from "./header.js";

const weeklyAdLink = document.querySelector('.js-weekly-ad-link');

weeklyAdLink.addEventListener('click', () => {
  window.open('https://www.chrisfoodcenter.com/_files/ugd/a8f83f_69fe4fc91e594fbbbce5b3fa3dda310a.pdf', '_blank');
})

const meatProcessingLink = document.querySelector('.js-meat-processing-link');

meatProcessingLink.addEventListener('click', () => {
  window.open('https://www.chrisfoodcenter.com/_files/ugd/a8f83f_87a12b9b919842969aaaed4d6c31ffd9.pdf', '_blank');
})

const applicationLink = document.querySelector('.js-application-link');

applicationLink.addEventListener('click', () => {
  window.open('https://www.chrisfoodcenter.com/_files/ugd/a8f83f_df944cbf21c44cf699cc73293c81a9db.pdf', '_blank');
})

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



const partyPlanningLink = document.querySelector('.js-party-planning-link');

partyPlanningLink.addEventListener('click', () => {
  window.open('https://www.chrisfoodcenter.com/_files/ugd/a8f83f_8fb4bc5e9da748c39fde3bc0180b0bcb.pdf', '_blank');
})

const privacyPolicyLink = document.querySelector('.js-privacy-policy-link');

privacyPolicyLink.addEventListener('click', () => {
  window.open('https://www.termsfeed.com/privacy-policy/38e911da9c8703282c79049e44f737f6', '_blank');
})

const subwayLinks = document.querySelectorAll('.js-subway-link');

subwayLinks.forEach((subwayLink) => {
  subwayLink.addEventListener('click', () => {
    window.open('https://restaurants.subway.com/united-states/mn/sandstone/320-state-highway-123', '_blank');
  })
})


const floralLink = document.querySelector('.js-floral-link');

floralLink.addEventListener('click', () => {
  window.open('https://www.cherisflowerbasket.com/#', '_blank');
})

window.addEventListener('resize', () => {
  resizeMap();
})

resizeMap();

activateButton();

openContactInfo();


