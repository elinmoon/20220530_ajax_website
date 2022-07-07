$(document).ready(function(){
    
    var $url = ["coverstory.html", "character.html", "snapshots.html", "epilogue.html"];

    $.ajax({
        url : `./${$url[0]}`,
        success : function(result){
            $("#content").html(result);
        }
    });

    $("nav li").not(":last").click(function(){
        var clickIndex = $(this).index();
        $.ajax({
            url : `./${$url[clickIndex]}`,
            success : function(result){
                $("#content").html(result);
            }
        });

        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });


    $(".res_btn").click(function(){
        $(".dark_res").addClass("active");
        $("nav").addClass("active");
    });

    $("nav li:not(':last'), .close_btn, .dark_res").click(function(){
        $(".dark_res").removeClass("active");
        $("nav").removeClass("active");
    });


});