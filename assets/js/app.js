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
      $('#navlistExtern').removeClass('navtransition-up');
      $('#navlinkMiddleLeft').addClass('listLink');
      $('#navlinkMiddleRight').addClass('listLink');
    }
  } else if (offsetY === offsetCurrent) {
    $('#navLogoLink').removeClass('navlogo-hide');
    if (window.matchMedia("(min-width: 768px)").matches) {
      $('#navlistExtern').addClass('navtransition-up');
      $('#navlinkMiddleLeft').removeClass('listLink');
      $('#navlinkMiddleRight').removeClass('listLink');
    }
  }
});