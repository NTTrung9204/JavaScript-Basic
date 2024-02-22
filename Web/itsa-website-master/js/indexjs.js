/*darkNav for navbar on scroll*/
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 2) {
        $("#nav").addClass("darkNav");
    } else {
        $("#nav").removeClass("darkNav");
    }
});

/*sidebar affix*/
$('#sidebar').affix({
    offset: {
        top: $('header').height()-$('nav').height(),
        bottom: $('footer').outerHeight(true)
    }
});

$('#sidebar').bind('cssClassChanged',function() {
    ('#sidebar').affix('checkPosition');
});

/*smooth scrolling for any sidebar menu item*/
$(document).ready(function(){
    $('#sidebar li').each(function(index){
        $(this).click(function(){
            var goTowards=$(this).find('a').attr('href');
            $(this).blur();
            $('body,html').animate({scrollTop: ($(goTowards).offset().top - 60)}, 1000);
        });
    });
});

/* smooth scrolling for scroll to text1 on index.html */
$('#icon1').click(function () {
    $('.scroll-bottom').blur();
    $('body,html').animate({scrollTop: $('#text1').offset().top}, 1000);
});


/* smooth scrolling for scroll to top */
$('.scroll-top').click(function () {
    $('.scroll-top a').blur();
    $('body,html').animate({scrollTop: 0}, 1000);
});

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function () {
    var link = $(this).attr('href');
    var posi = $(link).offset().top;
    $('body,html').animate({scrollTop: posi}, 700);
});

//Set year in footer automatically
$('#currentYear').html(new Date().getFullYear());
