$(document).ready(function() {

    var headerMobile = $('.header-mobile');

    $('.hamburger').on('click', function() {
        headerMobile.addClass('is-active');
    });
    $('.header-mobile-close').on('click', function () {
        headerMobile.removeClass('is-active');
    });

    var selectCustom = $('.select-custom');
    var selectArrow = $('.select-arrow');
    
    $(selectCustom).on('click', function() {
        if(!$(selectArrow).hasClass('is-visible')) {
            selectArrow.addClass('is-visible');
        } else {
            selectArrow.removeClass('is-visible');
        }});
});