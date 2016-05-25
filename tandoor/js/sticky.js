$(document).ready(function(){
    header();
});

function header(){
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