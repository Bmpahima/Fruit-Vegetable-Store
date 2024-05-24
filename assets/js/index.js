$(".menu").click(function() {
    $(".nav-bar").toggleClass("active");
});

function left(number) {
    let slider = $('.slider')[number];
    slider.scrollLeft -= 350;
}

function right(number) {
    let slider = $('.slider')[number];
    slider.scrollLeft += 350; 
}

$(document).ready(function(){
    $(".clickable").click(function(){
        $(this).next("[class$=-container]").slideToggle();
    });
});
