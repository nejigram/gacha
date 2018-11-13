$(function(){
    var click = window.ontouchstart===null?"touchstart":"click";
    var card_open_scd = 500;
//    var data;
    var tmp_card_open_scd = 0;
    $(window).on('load resize',function(){
        height_check();

    });
    $("[id^=gacha]").on(click,function(){
        var id = $(this).attr("id");
        $("#area_" + id).show();
        height_check();
        $("[id^=gacha]").hide();

        $("#area_" + id).find(".kurubox").each(function(i,elm){
            tmp_card_open_scd = card_open_scd * (i + 1);
            data = elm;
            card_open(elm);
        });
    });
    $("[id^=returnbtn_]").on(click,function(){
        location.reload();
    });

    $(".kurubox").on(click,function(){
        $(this).addClass("kurukuru");
    });
    $(".kurubox").on('animationend', function(){

    });
    function height_check(){
        $(".kurubox").each(function(i,elm){
            $(elm).height($(elm).width() * 1.3);

        });
    }
    function card_open(data){
        setTimeout(function(){
            $(data).addClass("kurukuru");
        },tmp_card_open_scd);

    }
});
