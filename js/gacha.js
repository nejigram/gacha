$(function(){
    var click = window.ontouchstart===null?"touchstart":"click";
    var card_open_scd = 500;

    var tmp_card_open_scd = 0;
    $(window).on('load resize',function(){
        height_check();

    });
    $("[id^=gacha]").on(click,function(){
        var id = $(this).attr("id");
        $("#area_" + id).find(".ura").each(function(i,elm){
            var imgno = str_zero(random_int(1,40),3);
            $(elm).children("img").attr("src","https://www.nejigram.com/assets/img/stamp/"+imgno+".png");
            $(elm).prev().addClass("pikapika2");
        });

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
function random_int(min,max) {
    return Math.floor( Math.random() * (max + 1 - min) ) + min ;

}
function str_zero(num,length){
    return ('0000000000' + num).slice(-length);
}
