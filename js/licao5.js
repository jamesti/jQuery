jQuery(document).ready(function($) {

	var btn = $(':submit'),
		field= $('fieldset'),
		btn2 = $('#cc');

	btn2.click(function(event) {
		field.toggle('slow');
	});

	btn.click(function(event) {
		event.preventDefault();
		$('#myModal').modal('show')
	});

	var init = function(){
		window.console.log();
	}();

});