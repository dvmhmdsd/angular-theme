$(function () {
    $('.form .form-control').on('focus', function() {
        $(this).siblings('label').addClass('focus');
    });

    $('.form .form-control').on('focusout', function() {
        if ($(this).val() == '') {
            $(this).siblings('label').removeClass('focus');
        }
        
    });
});