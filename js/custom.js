// alert("hello")

$(document).ready(function() {

	$('#menu').click(function() {
		$('#navPanel').fadeIn('slow');
	});

	$('#navPanel').click(function() {
		$(this).fadeOut("slow");
	});
});