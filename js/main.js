
document.addEventListener('DOMContentLoaded', function () {
  /** Codigo de Navbar de contacto */
  const navSc = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
      navSc.classList.add('navbar-scrolled');
      console.log("El cambio solo fue exitoso.");
    } else {
      navSc.classList.remove('navbar-scrolled');
    }
  });

  /**Codigo del ID lightgallery*/
  $(document).ready(function () {
    $('#lightgallery').lightGallery({
      selector: '.car-magnify-gallery a',
    });
  });

});