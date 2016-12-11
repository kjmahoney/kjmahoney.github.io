$(document).foundation()
// change nav bar based on page scroll
function checkScroll(){
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
//links at top of page
$(function(){
  $(".home-link").click(function(){
    $("html,body").animate({scrollTop:$(".orbit").offset().top},"500");return false
  })
})

$(function(){
  $(".about-link").click(function(){
    $("html,body").animate({scrollTop:$(".main").offset().top},"500");return false
  })
})

$(function(){
  $(".portfolio-link").click(function(){
    console.log("working")
    $("html,body").animate({scrollTop:$(".portfolio").offset().top},"500");return false
  })
})

$(function(){
  $(".contact-link").click(function(){
    console.log("working")
    $("html,body").animate({scrollTop:$(".contact").offset().top},"500");return false
  })
})
