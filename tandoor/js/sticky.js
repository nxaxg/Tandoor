$(document).ready(function(){
    //starting function
    $(".lang-menu").hide();
    
    $("#lang-show").html($('.lang-sel').html());
    //sticky header call
    stickyHeader();
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
});

function stickyHeader(){
    var tope = 2; /*from top*/
      $(window).scroll(function() {
        var scroll = posActual(); /*posicion actual*/
        if(scroll >= tope){ 
               $('header').addClass('sticky-header');/*añadir clase si sobrepasa */
               $('#logo-img').attr('src', 'img/logo2-white-color.png');
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

