$(document).foundation()

function checkScroll(){
  console.log($(window).scrollTop())
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() < startY){
      // console.log($(window).scrollTop())
        $('.navbar').addClass("scrolled");
        $('.nav-item').addClass("nav-item-scroll");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.nav-item').removeClass("nav-item-scroll");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
