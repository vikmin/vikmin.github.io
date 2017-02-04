function initNavigation(id) {
    $.get("../navigation.html", function(data){
        $("#navigation-placeholder").replaceWith(data);
        $("#" + id).addClass("selected").attr("href","#");
    });
}