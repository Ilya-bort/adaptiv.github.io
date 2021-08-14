$(function () {
    function ibj() {
        $.each($('.ibj'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
            }
        })
    }
    ibj()
    $('.header__burger').click(function () {
        $(this).toggleClass('active')
        $('body').toggleClass('lock')
        $('.header__menu').toggleClass('active')
    })
    $('.brands__item').click(function () {
        $(this).css('background-color', '#64c29e')
    })
    $('.slider__body').slick({
        arrows: false,
        dots: true,
        speed: 900,
        slidesToShow: 1,
        adaptiveHeight: true
    })
})