jQuery(document).ready(function($) {
	
	var 
		form = $('form'),
		fieldset = $('fieldset'),
		nome = $('#txtnome'),
		email = $('#txtemail'),
		btn = $(':submit');

	btn.on('click', function(event) {
		event.preventDefault();
		
		cadastro();

		tiraForm();

	});

	var tiraForm = function() {
		fieldset.toggle('slow');
	};

	var cadastro = function(){
		if (nome.val() === '' || email.val() === '') {

			alert('Preencha os campos Obrigatórios!');
			nome.focus();

		} else{

			var dados = form.serialize();

			$.ajax({ // Função utilitária jQuery que não necessita estar atrelada a um ou mais elementos HTML
				url: '/formulario.php', // URL do serviço que processará os dados
				type: 'post', // Tipo de envio. Poderia ser também get, put ou delete
				dataType: 'json', // Tipo de retorno. É preciso ter certeza que o serviço retornará uma string JSON
				data: dados, // Os dados do form
				success: function(data){ // Callback que será executado em caso de sucesso
					window.console.log(data);
					//reset(); // Só temos interesse em resetar caso seja sucesso
				},
				error: function(data){ // Callback que será executado em caso de falha
					window.console.log(data);
				}
			});
		};
	};

});