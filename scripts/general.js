export function resizeMap() {
  if (window.innerWidth <= 768) {
    googleMap.width = '250';
    googleMap.height = '125';
  } else if (window.innerWidth > 768 && window.innerWidth <= 1000) {
    googleMap.width = '500';
    googleMap.height = '250';
  } else {
    googleMap.width = '800';
    googleMap.height = '400';
  }
}

export default resizeMap;