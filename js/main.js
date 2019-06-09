$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        autoPlay: true,
        autoplaySpeed: 1000,
    });

    $('.sliderNews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 1000,
        dots: true,
        variableWidth: true,
        arrow: true,
    });
});



