$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true
    });

    $('.sliderNews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 4000,
        dots: true
    });
});

