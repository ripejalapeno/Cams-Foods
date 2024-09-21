export function activateButton() {
  const siteHeader = document.getElementById('siteHeader');
  const toggleMenuButton = document.getElementById('toggleMenuButton');
  const menuIcon = document.getElementById('menuIcon');

  toggleMenuButton.addEventListener('click', () => {
    if (siteHeader.classList.contains('header-open')) {
      siteHeader.classList.remove('header-open');
      siteHeader.classList.add('header-closed');

      menuIcon.innerText = 'menu';


    } else if (siteHeader.classList.contains('header-closed')) {
      siteHeader.classList.add('header-open');
      siteHeader.classList.remove('header-closed');

      menuIcon.innerText = 'close';
    }
  });
}

export default activateButton;



