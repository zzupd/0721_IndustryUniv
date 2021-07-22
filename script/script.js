$(function(){

    // GNB 시작
    $(".mainLi a, #subMenuBG").mouseover(function(){
        $(".subMenu").stop().slideDown(800);
        $("div#subMenuBG").stop().slideDown(800);
    });
    
    $(".mainLi a, #subMenuBG").mouseout(function(){
        $(".subMenu").stop().slideUp(300);
        $("div#subMenuBG").stop().slideUp(300);
    });

    
    // GNB 끝



});