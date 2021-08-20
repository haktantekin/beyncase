
$(document).ready(function () {
 $(".close-icon").click(function(){
     $(".header-top").slideUp();
 });

    $(".mobile-icon").click(function () {
        $(this).toggleClass("close");
        if ($(".mobile-icon").hasClass("close")) {
            $(".mobile-nav").slideDown();
        }
        else {
            $(".mobile-nav").slideUp(); 
        }
    });
});