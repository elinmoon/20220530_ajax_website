$(document).ready(function(){
    var $sn_arr = [
        ["cont_01.jpg", "Snapshot_01"],
        ["cont_02.jpg", "Snapshot_02"],
        ["cont_03.jpg", "Snapshot_03"],
        ["cont_04.jpg", "Snapshot_04"],
        ["cont_05.jpg", "Snapshot_05"],
        ["cont_06.jpg", "Snapshot_06"],
    ];

    for(v of $sn_arr){
        $(".origin").append(`
            <div class="sn_box" style="background-image:url(./img/${v[0]});">
                <div class="dark">
                    <a href=""><img src="./img/search_icon.svg" alt=""></a>
                </div>
            </div>
        `);
    }

    $(".snapshots button").click(function(){
        $.ajax({
            url : "./snapshots_add.html",
            success: function(result){
                $(".add").html(result);
            }
        });
        $(this).hide();
    });
});