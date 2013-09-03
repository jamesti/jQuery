/* Certifica-se de rodar seus scripts apenas após o total carregamento do documento HTML */
jQuery('document').ready( function($){

	/* Localiza e guarda referência à tag <body> */
	var b = $('body');
	

	/* Loga no conole os filhos de <body> */
	// window.console.log(b.children());

	/* Guarda na variável pes (array) todos os <p> cujo ID seja segundo_p */
	// var pes = b.find("p#segundo_p");
	
	/* 
		Exemplo de seletor complexo. Guarda na variável pes (array) todos os
		<p> que contenham a classe .par e que em seu conteúdo exista a palavra 
		"Segundo" 
	*/
	// var pes = b.find('p.par:contains("Segundo")');
	
	/* Localiza todos os <p> que possuem a classe .par */
	var pes = b.find('p.par');
	
	/* Loga no Firebug a var pes */
	window.console.log(b);

	/* Usa o método each() da jQuery para fazer um loop num array javascript
	e loga no console o conteúdo de cada elemento encontrado no array. Neste caso,
	tags <p> */
	b.each( function( index, item ){
		window.console.log( $(item).text() );
	} );
	
} );