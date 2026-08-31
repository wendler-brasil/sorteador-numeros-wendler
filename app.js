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

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        alert('A quantidade deve ser um número inteiro positivo.');
        return;
    }

    if (!Number.isInteger(inicio) || !Number.isInteger(fim) ||
        inicio < 1 || fim < 1) {
        alert('O início e o fim devem ser números inteiros positivos.');
        return;
    }

    if (inicio > fim) {
        alert('O início não pode ser maior que o fim.');
        return;
    }

    //Sortear e exibir os números 
    const sorteados = [];

    for (let i = 0; i < quantidade; i++) {

        const numero = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
        sorteados.push(numero);

    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML =
        '<label class = "texto__paragrafo">' +
        `Números sorteados: ${sorteados.join(', ')}`
        + '</label>';

    //Controlar o botão Reiniciar

    const botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.disabled = false;
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');

}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class = "texto__paragrafo">' + 'Números sorteados: nenhum até agora' + '</label>';

    const botaoReiniciar = document.getElementById('btn-reiniciar');
    botaoReiniciar.disabled = true;
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
    document.getElementById('quantidade').focus();
}




