window.onresize = function(){
    vw = window.innerWidth;
    if(vw > 993){
        $(".overlay").fadeOut(500);
    }
};
window.onscroll =function(){
    if($(window).scrollTop() > 200){
        $("#overlay-hero").fadeIn(500);    
    }
    else if($(window).scrollTop() < 200){
        $("#overlay-hero").fadeOut(500);    
    }
}

$("#menu-button").click(function(){
    $(".menu-hidden").animate({
        left: 0}, 500);
    $(".overlay").fadeIn(500);
});
$("#menu-button-close").click(function(){
    vw = window.innerWidth;
    $(".menu-hidden").animate({
        left: vw + 200}, 500);
    $(".overlay").fadeOut(500);
});