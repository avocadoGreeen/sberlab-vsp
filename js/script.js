$(function() {

    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');

    });

    $('.header__menu-item').mouseenter(function() {
        if ($('.arrow').not('.rotate')) {
            $(this).children('.icon').children('.arrow').addClass('rotate');
        };
        if ($('.sub__menu').hasClass('close')) {
            $(this).children('.sub__menu').removeClass('close');
        };
    });

    $('.header__menu-item').mouseleave(function() {
        if ($('.arrow').hasClass('rotate')) {
            $(this).children('.icon').children('.arrow').removeClass('rotate');
        };
        if ($('.sub__menu').not('.close')) {
            $(this).children('.sub__menu').addClass('close');
        };
    });

    $('.icon').click(function() {
        $(this).children('.arrow').toggleClass('rotate');
        $(this).closest('.header__menu-item').children('.sub__menu').toggleClass('close');
    });

});