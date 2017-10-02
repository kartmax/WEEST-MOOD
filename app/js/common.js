$(function() {

	// Custom JS

    //slimmenu
    $('#navigation').slimmenu(
        {
            resizeWidth: '725',
            collapserTitle: '',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });


    //class is-active menu
    $('#navigation a').click(function () {
        $('#navigation a').removeClass('is-active');
        $(this).addClass('is-active');
    });


    //panorama
    $('.main-bg').on('mousemove', function (e) {
        $(this).css({
            left: -e.pageX / 40 + 683
        });
    });


    //block-history + content
    $('a.for-us').click(function () {
       $('.little-history').slideToggle(200);
       $('main').toggle(100, function () {
           new WOW().init();
       });
        $('footer').slideToggle(100);
    });

    $('.little-history').click(function () {
        $(this).slideToggle(200);
        $('footer').slideToggle(200);
        $('main').slideToggle(200);
    });


    //scroll
    $(document).ready(function(){
    // hide #back-top first
        $("#back-top").hide();
    // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });
    // scroll body to 0px on click
            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    });

});
