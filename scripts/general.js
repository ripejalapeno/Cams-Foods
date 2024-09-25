export function resizeMap() {
  const googleMap = document.getElementById('googleMap');

  if (window.innerWidth <= 768) {
    googleMap.width = '250';
    googleMap.height = '250';
  } else if (window.innerWidth > 768 && window.innerWidth <= 1000) {
    googleMap.width = '500';
    googleMap.height = '250';
  } else {
    googleMap.width = '800';
    googleMap.height = '400';
  }
}

export function openContactInfo() {
  const contactLink = document.getElementById('contactLink');
  const contactButtons = document.querySelectorAll('.js-contact-button');

  console.log(contactButtons);

  contactLink.addEventListener('click', () => {
    contactButtons.forEach((button) => {
      console.log(button.style);
      if (button.style.visibility === '') {
        button.style.visibility = 'visible';
        button.style.opacity = 1;
      } else {
        button.style.visibility = '';
        button.style.opacity = 0;
      }
    })
  })
}

export default resizeMap;