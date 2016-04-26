$(document).ready(function() {
$('.hamburger').on('click', function () {
	$('nav').addClass('open');

	if ($('nav').hasClass('open')){

		$('nav').removeClass('open');

	}else{
		
		$('nav').addClass('open');
	}
})
});