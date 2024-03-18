$(".main-menu>li").mouseover(function(){
    $(this).children(".sub-menu").stop().slideDown();
   })
   $(".main-menu>li").mouseleave(function(){
    $(this).children(".sub-menu").stop().slideUp();
   })



   $(".tab-gallery").hide();

   $(".btn-gallery").click(function(){
    $(".tab-gallery").show();
    $(".tab-news").hide();

   })

   $(".btn-news").click(function(){
    $(".tab-news").show();
    $(".tab-gallery").hide();

   })
