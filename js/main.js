
document.addEventListener('DOMContentLoaded', function () {
  const navSc = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
      navSc.classList.add('navbar-scrolled');
      console.log("El cambio solo fue exitoso.");
    } else {
      navSc.classList.remove('navbar-scrolled');
    }
  });
});