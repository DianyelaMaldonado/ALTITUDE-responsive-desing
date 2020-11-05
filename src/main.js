document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        closeOnClick: true,
        edge: 'right',
    };
    var instances = M.Sidenav.init(elems, options);
    slickSlider();
});

function slickSlider() {
  $('.cs__slider-initial').slick(
    {
      dots: false,
      infinite: true,
      fade: true,
      cssEase: 'linear',
      arrows:false,
      autoplay:true,
      autoplaySpeed:2000,
    }
  );
}