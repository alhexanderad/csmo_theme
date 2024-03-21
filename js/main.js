
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

  /** Slick Sliders*/

  $(document).ready(function () {
    $('.overlap-btns-area').lightGallery({
      selector: '.car-magnify-gallery a',
    });
  });
  
  $('.slick-carousel').each(function () {
    var slider = $(this);
    $(this).slick({
      infinite: true,
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '0'
    });

    $(this).closest('.slick-slider-area').find('.slick-prev').on("click", function () {
      slider.slick('slickPrev');
    });
    $(this).closest('.slick-slider-area').find('.slick-next').on("click", function () {
      slider.slick('slickNext');
    });
  });

});