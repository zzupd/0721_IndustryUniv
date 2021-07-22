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

    // 슬라이드쇼 시작
    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame").animate(
            {"margin-left": "-1200px"},
            2400,
            function(){
                $("#slide a:first-child").insertAfter("#slide a:last-child");
                $("#shuttleFrame").css({"margin-left": "0"});
            }
        );
    }


    // 슬라이드쇼 끝




});