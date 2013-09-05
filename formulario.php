<?php
# Adiciona o conteúdo recebido via POST em um arquivo texto
# Apenas para mostrar que as infos foram enviadas via AJAX
# da interface para o servidor
file_put_contents('_.txt', print_r($_POST, true));

# Monta um array com mensagem de retorno para ser lida no JS
$retorno = array('resultado'=>true);

# Serializa o array como JSON e retorna a string
echo json_encode($retorno);