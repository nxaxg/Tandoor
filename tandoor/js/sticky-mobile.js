$(document).ready(function(){
    //starting function
    $(".moblang-menu").hide();
    $(".mobnav-menu").hide();
    //sticky header call
    stickyHeaderMobile();
    //lang-btn animation
    langMobile();
    navMobile();
});

function stickyHeaderMobile(){
    var tope = 2; /*from top*/
      $(window).scroll(function() {
        var scroll = posActual(); /*posicion actual*/
        if(scroll >= tope){ 
               $('.header-mobile').addClass('header-mobile-sticky');/*añadir clase si sobrepasa */
            }
            else {
                $('.header-mobile').removeClass('header-mobile-sticky');
            }
      });
    function posActual  () {
        return window.pageYOffset || document.documentElement.scrollTop;
    };
};

function langMobile(){
    $(".lang-icon").click(function(){
        $(".moblang-menu").slideToggle(500); 
        $(this).toggleClass('moblang-action');
        $(".mobnav-menu").slideUp(); 
        $('.nav-icon').removeClass('mobnav-action');
        $('.nav-icon').removeClass('mob-active');
        $(this).toggleClass('mob-active');
    });
}

function navMobile(){
    $(".nav-icon").click(function(){
        $(".mobnav-menu").slideToggle(500); 
        $(this).toggleClass('mobnav-action');
        $(".moblang-menu").slideUp(); 
        $('.lang-icon').removeClass('moblang-action');
        $('.lang-icon').removeClass('mob-active');;
        $(this).toggleClass('mob-active');
    });
}

