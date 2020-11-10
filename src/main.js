document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        closeOnClick: true,
        edge: 'right',
    };
    var instances = M.Sidenav.init(elems, options);
    slickSlider();
    slimtSlick();
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
      autoplaySpeed:1000,
    }
  );
}

function slimtSlick() {
  $('.slimt_slick').slick(
    {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
    }
  );
}
