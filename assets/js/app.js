// Carousel
$('.carousel').carousel({
  interval: 4000,
  pause: "hover"
});

// On Scroll Navbar Logo ausblenden
// mit transition padding entfernen
$(window).scroll(function () {
  let offsetY = 0;
  let offsetCurrent = window.pageYOffset;
  if(offsetY < offsetCurrent)
  {
    $('#navLogoLink').addClass('navlogo-hide');
    $('#navlistExtern').removeClass('mt-2');
    if (window.matchMedia("(min-width: 768px)").matches) {
      $('#navlistExtern').removeClass('navlist-extern');
      $('#navlinkMiddle').addClass('listLink');
      $('#navlinkLast').addClass('listLink');
    }
  } else if (offsetY === offsetCurrent) {
    $('#navLogoLink').removeClass('navlogo-hide');
    if (window.matchMedia("(min-width: 768px)").matches) {
      $('#navlistExtern').addClass('navlist-extern');
      $('#navlinkMiddle').removeClass('listLink');
      $('#navlinkLast').removeClass('listLink');
    }
  }
});