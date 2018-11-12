$(function(){
    var click = window.ontouchstart===null?"touchstart":"click";
    $("[id^=gacha]").on(click,function(){
        var id = $(this).attr("id");
        $("#area_" + id).show();
        $("[id^=gacha]").hide();
    });
    $("[id^=returnbtn_]").on(click,function(){
        $("[id^=gacha]").show();
        $("[id^=area_]").hide();
//        $(this).hide();

    });
})
