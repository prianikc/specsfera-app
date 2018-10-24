(function ($) {

    console.log('Hello world');

    // mmenu
    $(document).ready(function () {
        $("#my-menu").mmenu({
            navbar: {
                title: false
              },
            onClick: {
                close: true
                
            }
        });
        var API = $("#my-menu").data("mmenu");

        $("#my-button").click(function () {
            API.open();
        });
    });

    $('.modal-dialog').parent().on('show.bs.modal', function (e) {
        $(e.relatedTarget.attributes['data-target'].value).appendTo('body');
    })

    $("#my-menu, #main-navbar").on("click", "a", function () {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').stop().animate({
            scrollTop: top
        }, 1500);
    });

    $('#top_slide').on("click", function () {
        console.log('ups');
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'swing');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(window).height()) {
            $('.top_slide').addClass("active");
        } else {
            $('.top_slide').removeClass("active");
        };
    });
}(jQuery));