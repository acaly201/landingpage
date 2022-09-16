//Slide thu vien Boostrap
$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
    
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });
});

//Xu ly thanh menu hien ra
$(document).ready(function($) {   
  var TopFixMenu = $(".box-menu-header1");
    $(window).scroll(function(){
        if($(this).scrollTop()>1150){ 
        TopFixMenu.show();
        }else{
            TopFixMenu.hide();
        }}
    )
});
