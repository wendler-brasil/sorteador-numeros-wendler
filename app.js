/* 
AO CLICAR EM SORTEAR
  ler quantidade, início e fim
  validar os três valores
  repetir o sorteio conforme a quantidade
  guardar os números em um array
  exibir o resultado
  habilitar o botão Reiniciar

AO CLICAR EM REINICIAR
  limpar os campos
  restaurar a mensagem inicial
  desabilitar o botão Reiniciar

*/

function sortear() {
    //leitura, validação, sorteio e exibição 
}

function reiniciar() {
    //restauração do estado inicial
}

const campoQuantidade = document.getElementById('quantidade');
const campoInicio = document.getElementById('de');
const campoFim = document.getElementById('ate');

const quantidadeTexto = campoQuantidade.value;
const inicioTexto = campoInicio.value;
const fimTexto = campoFim.value;

if (quantidadeTexto === '' || inicioTexto === '' || fimTexto === '') {
    alert('Preencha todos os campos.');
    return;
}

const quantidade = Number(quantidadeTexto);
const inicio = Number(inicioTexto);
const fim = Number(fimTexto);
