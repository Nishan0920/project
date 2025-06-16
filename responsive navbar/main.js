const toggleBtn = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
