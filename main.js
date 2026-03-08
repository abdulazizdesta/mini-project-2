const hamburger = document.getElementById('hamburger');
const listNavbar = document.getElementById('list-navbar-mobile');

hamburger.addEventListener('click', () => {
  listNavbar.classList.toggle('active');
});