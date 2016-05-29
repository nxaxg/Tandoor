$(document).ready(function(){
    //starting function
    $(".lang-menu").hide();
    
    $("#lang-show").html($('.lang-sel').html());
    //sticky header call
    stickyHeader();
    smoothy();
    //lang-btn animation
    $(".lang-btn").click(function(){
        $(".lang-menu").slideToggle();
        $("#lang-down").toggleClass('lang-menu-action');
        $(this).toggleClass('lang-active');
        $(".lang-op").click(function(){
           $(this).siblings().removeClass('lang-sel');
           $(this).addClass('lang-sel');
            var idioma = $(this).html();
            $("#lang-show").html(idioma);
        });
    });
    
    //categ-menu selection
    $(".categ-op").click(function(){
       $(this).siblings().removeClass('categ-sel'); 
       $(this).addClass('categ-sel'); 
    });
});

function stickyHeader(){
    var tope = 2; /*from top*/
      $(window).scroll(function() {
        var scroll = posActual(); /*posicion actual*/
        if(scroll >= tope){ 
               $('header').addClass('sticky-header');/*añadir clase si sobrepasa */
               $('#logo-img').attr('src', 'img/logo-sticky.png');
            }
            else {
                $('header').removeClass('sticky-header');
                $('#logo-img').attr('src', 'img/logo2-white.png');
            }
      });
    function posActual  () {
        return window.pageYOffset || document.documentElement.scrollTop;
    };
};

function smoothy() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
};

