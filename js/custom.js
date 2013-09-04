jQuery(document).ready(function($) {
	
	var p1, p2, p3, btn;

	p1 = $('#p1');
	p2 = $('#p2');
	p3 = $('#p3');
	btn = $('button');

	btn.on('click', function() {
		modificar_segundo_p();
	});

	var modificar_segundo_p = function() {
		p2.text('Texto Modificado!');

		p2.html(p2.text() + '<br />Super Teste de HTML!');
		p2.attr('tittle', 'Simples teste de Título!');
		p2.css('background-color', 'orange');
	};

	var ini = function() {
		alert('jQuery é para poucos!');
	}();

});