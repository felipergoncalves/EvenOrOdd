function consultaNum(){
    var num = Number(document.getElementById('recipient-name').value);
    var resultado = num % 2;

    var resposta = document.getElementById('message-text');

    if(!num){
        alert('Erro! Por favor digite um número');
        limparCampos();
    }else{
        if(resultado == 0){
            resultado = 'par';
            resposta.value = num + ' é ' + resultado;
        }else{
            resultado = 'ímpar';
            resposta.value = num + ' é ' + resultado;
        }
    }

    num.addEventListener('click', limparCampos())
}

function limparCampos(){
    document.getElementById('recipient-name').value = '';
    document.getElementById('message-text').value = '';
}

//Utilizando o 'readonly' = somente leitura para que o usuário não consiga digitar na input declarada
$('#message-text').prop('readonly', true);