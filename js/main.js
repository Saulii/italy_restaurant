$(document).ready(function(){
	$('#recervBtn').on('click', function(e) {
          e.preventDefault();
    var top = $('#call').offset().top;
    $('html,body').animate({
    	scrollTop: top
    }, 2000);

	});

$(function() {
	$('.book').click(function() {
		$('.modalBlock').show('slow');
	})
});

    $('.modalButton').click(function(){
	    $('.modalBlock').hide();
});

});