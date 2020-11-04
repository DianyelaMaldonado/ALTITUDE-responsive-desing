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
    $('.cs__slider-wrapper').slick(
      {
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        autoplay:true,
        adaptiveHeight:true,
        autoplaySpeed:3000,
      }
    );
}

