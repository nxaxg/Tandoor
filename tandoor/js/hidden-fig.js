$(document).ready(function(){
    //hidden-fig
    $(".hidden-fig").hide();
    
    
   $(".ver-mas-btn").click(function (e) {
        $(".hidden-fig:hidden").slice(0, 2).fadeIn(500);
        if ($(".hidden-fig:hidden").length === 0) {
            $(".cont-menu .ver-mas-btn").html("No hay más platos para mostrar");
            $(".cont-vinos .ver-mas-btn").html("No hay más vinos para mostrar");
            $(".ver-mas-btn").addClass("pressed-btn");
            e.preventDefault();
        }
    }); 
});