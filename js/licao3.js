jQuery(document).ready(function($) {
	
	var 
		nome = $('#txtnome'),
		email = $('#txtemail'),
		btn = $(':submit');

	btn.on('click', function(event) {
		event.preventDefault();
		
		if (nome.val() === '' || email.val() === '') {
			alert('Preencha os campos Obrigatórios!');
			nome.focus();
		} else{

		};

	});

});