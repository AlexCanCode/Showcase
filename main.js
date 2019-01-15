$(window).scroll(function() {
	console.log($(document).scrollTop())
	if ($(document).scrollTop() > 50) {
		$("nav").addClass("shrink");
	}
	else {
		$("nav").removeClass("shrink");
	}
});