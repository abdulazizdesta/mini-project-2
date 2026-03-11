const hamburger = document.getElementById('hamburger');
const listNavbar = document.getElementById('list-navbar-mobile');

hamburger.addEventListener('click', function() {
  listNavbar.classList.toggle('active');
});