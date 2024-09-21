export function activateButton() {
  const siteHeader = document.getElementById('siteHeader');
  const toggleMenuButton = document.getElementById('toggleMenuButton');

  toggleMenuButton.addEventListener('click', () => {
    if (siteHeader.classList.contains('header-open')) {
      siteHeader.classList.remove('header-open');
      siteHeader.classList.add('header-closed');
    } else if (siteHeader.classList.contains('header-closed')) {
      siteHeader.classList.add('header-open');
      siteHeader.classList.remove('header-closed');
    }
  });
}

export default activateButton;



