export function activateButton() {
  const siteHeader = document.getElementById('siteHeader');
  const toggleMenuButton = document.getElementById('toggleMenuButton');
  const menuIcon = document.getElementById('menuIcon');
  const contactButtons = document.querySelectorAll('.js-contact-button');

  toggleMenuButton.addEventListener('click', () => {
    if (siteHeader.classList.contains('header-open')) {
      siteHeader.classList.remove('header-open');
      siteHeader.classList.add('header-closed');

      menuIcon.innerText = 'menu';

      contactButtons.forEach((button) => {
        if (button.style.visibility === 'visible') {
          button.style.visibility = '';
          button.style.opacity = 0;
        }
      })

    } else if (siteHeader.classList.contains('header-closed')) {
      siteHeader.classList.add('header-open');
      siteHeader.classList.remove('header-closed');

      menuIcon.innerText = 'close';
    }
  });
}

export function openContactInfo() {
  const contactLink = document.getElementById('contactLink');
  const contactButtons = document.querySelectorAll('.js-contact-button');

  contactLink.addEventListener('click', () => {
    contactButtons.forEach((button) => {
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

export default activateButton;



