$(window).ready(function() {

$(document).mousemove(function(e) {
    $('#moveme').offset({
        left: e.pageX - 100,
        top: e.pageY -100
    });
});

	$(`#moveme`).on(`click`, function(){
		(this).toggleClass( "off" );

	})
});