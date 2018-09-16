$(function () {
    //mentain the style of input fields

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

    $('html').on('click', function() {
        $('.not-menu').fadeOut();
        $('.mess-menu').fadeOut();
        $('.profile').fadeOut();
    });


    $('nav .rest-nav .notifi').on('click', function(e) {
        e.stopPropagation();
        $('.not-menu').fadeToggle();
        $('.mess-menu').fadeOut();
    });

    //
    $('.rest-nav .messages').on('click', function(e) {
        e.stopPropagation();
        $('.mess-menu').fadeToggle();
        $('.not-menu').fadeOut();
    });

    $('.form .form-control').removeClass('ng-invalid');
    
    $('.form .buttons, li .fa-sign-out').on('click', function() {
            setTimeout(function() {
                location.reload();
            });
     });

     $('.form .button, .logger').on('click', function() {
        setTimeout(function() {
            location.reload();
        }, 2040);
    });
     

     $('.right .clickable').click(function(e) {
        e.stopPropagation();
        $('.profile').fadeToggle();
     });
     
     $('.links .toggle').on('click', function() {
        $('aside').toggleClass('switch');
        $('.component').toggleClass('switched');
     });
});