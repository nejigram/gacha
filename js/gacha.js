$(function(){
    var click = window.ontouchstart===null?"touchstart":"click";

    $(window).on('load resize',function(){
        $(".kurubox").height($(".kurubox").width() * 1.3);
        
    });
    $("[id^=gacha]").on(click,function(){
        var id = $(this).attr("id");
        $("#area_" + id).show();
        $("[id^=gacha]").hide();
    });
    $("[id^=returnbtn_]").on(click,function(){
        $("[id^=gacha]").show();
        $("[id^=area_]").hide();


    });

    $(".kurubox").on(click,function(){
        $(this).addClass("kurukuru");
    });
    $(".kurubox").on('animationend', function(){
/*        $("#test").append("test2");*/
    });

});
