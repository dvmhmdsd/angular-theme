$(function () {
    //mentain the style of input fields
    $('.form .form-control').removeClass('ng-invalid');

    $('.form .form-control').on('focus', function() {
        $(this).siblings('label').addClass('focus');
    });

    $('.form .form-control').on('focusout', function() {
        if ($(this).val() == '') {
            $(this).siblings('label').removeClass('focus');
        }
        if ($(this).hasClass('ng-invalid')) {
            $(this).siblings('label').addClass('focus');
        }
    });

    $("form .button").on('click', function () {
        $(this).addClass("progression");
    });
});