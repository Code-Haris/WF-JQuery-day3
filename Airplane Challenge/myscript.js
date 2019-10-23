$(window).ready(function() {

$(document).mousemove(function(e) {
    $('#moveme').offset({
        left: e.pageX - 100,
        top: e.pageY -100
    });
});

	$(`#moveme`).on(`dblclick`, function(){
		var a = $("#moveme");
                a.hide(1000);
                $.fx.speeds["very-slow"] = 2000;
                a.show("very-slow");
    $(document).off('mousemove');
});
	$(`#moveme`).on(`click`, function(){
		$(document).mousemove(function(e) {
    $('#moveme').offset({
        left: e.pageX - 100,
        top: e.pageY -100
    });
});});

});
	