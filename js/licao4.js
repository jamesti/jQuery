jQuery(document).ready(function($) {

	var lista = $('#lista'), editar = $('.editar'),
		linhas = lista.find('tr'), botaonl = $('#novalinha');

	lista.on('click', '.editar', function(event) {
		event.preventDefault();
		linhas.removeClass('yellow');
		var link = event.currentTarget;
		var linha = $(link).closest('tr');
		linha.addClass('yellow');

	});

	botaonl.on('click', function() {
		
		var htmlFragment =  '';
			htmlFragment += '<tr>';
			htmlFragment += '<th>3</th>';
			htmlFragment += '<th>xxxxxx</th>';
			htmlFragment += '<th><a href="#" class="editar">editar</th>';
			htmlFragment += '</tr>';
		lista.find('tbody').prepend( htmlFragment );
		linhas = lista.find('tr');
	});

	var init = function(){
		window.console.log(editar);
	}();

});