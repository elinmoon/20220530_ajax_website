$(document).ready(function(){
    var $snAdd_arr = [
        ["cont_07.jpg", "Snapshot_07"],
        ["cont_08.jpg", "Snapshot_08"],
        ["cont_09.jpg", "Snapshot_09"],
        ["cont_10.jpg", "Snapshot_10"],
        ["cont_11.jpg", "Snapshot_11"],
        ["cont_12.jpg", "Snapshot_12"],
        ["cont_13.jpg", "Snapshot_13"],
        ["cont_14.jpg", "Snapshot_14"],
        ["cont_15.jpg", "Snapshot_15"],
        ["cont_16.jpg", "Snapshot_16"],
        ["cont_17.jpg", "Snapshot_17"],
        ["cont_18.jpg", "Snapshot_18"],
        ["cont_19.jpg", "Snapshot_19"],
        ["cont_20.jpg", "Snapshot_20"],
    ];

    for(v of $snAdd_arr){
        $(".add_box").append(`
            <div class="sn_box" style="background-image:url(./img/${v[0]});">
                <div class="dark">
                    <a href=""><img src="./img/search_icon.svg" alt=""></a>
                </div>
            </div>
        `);
    }
});