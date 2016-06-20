$(document).ready(function() {
    //FIND SECTION THAT PAGE IS ON
    get_section();
    $(window).scroll(function() {
        get_section();
    });
    //SCROLL TO SECTION THAT USER CLICKS
    $("nav ul li a").click(function() {
        scroll_to(this);
        return false;
    });
    $(".down").click(function() {
        scroll_to(this);
        return false;
    });
    //SHOW AND HIDE THE SECTIONS OF THE MENU
    $("#menu a").click(function() {
        var chosen_div = $(this).next();
        if ( chosen_div.css("display") == "none" ) {
            chosen_div.slideDown();
            $(this).children().removeClass("fa-chevron-down");
            $(this).children().addClass("fa-chevron-up");
        } else {
            chosen_div.slideUp();
            $(this).children().removeClass("fa-chevron-up");
            $(this).children().addClass("fa-chevron-down");
        }
    });
    //HIDE GOOGLE MAP OVERLAY
    $('#map-overlay').click(function() {
        $('#map-overlay').css('display','none');
    });
    //SCROLL TO FUNCTION
    function scroll_to(ele_clicked) {
        $('html, body').animate({
            scrollTop: $( $.attr(ele_clicked, 'href') ).offset().top - 47
        }, 700);
    };
    // GET SECTION FUNCTION
    function get_section() {
        if ($(window).scrollTop() >= ($('#menu').offset().top - 48 )) {
            $(".active").removeClass();
            $('#nav-menu').addClass('active');
        }
        if ($(window).scrollTop() >= ($('#hours').offset().top - 48 )) {
            $(".active").removeClass();
            $('#nav-hours').addClass('active');
        }
        if ($(window).scrollTop() >= ($('#contact').offset().top - 48 )) {
            $(".active").removeClass();
            $('#nav-contact').addClass('active');
        }
        if ($(window).scrollTop() < ($('#menu').offset().top - 48 )) {
            $(".active").removeClass();
            $('#nav-home').addClass('active');
        }
    };
});