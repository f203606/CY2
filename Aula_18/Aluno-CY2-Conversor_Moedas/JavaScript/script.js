//#region Elementos
// Elementos de entrada e saída
let valorOrigem = document.getElementById("valorOrigem");
let taxaConversao = document.getElementById("taxaConversao");
let valorConvertido = document.getElementById("valorConvertido");

// Botões
let calcularConversao = document.getElementById("calcularConversao");
let resetarBotao = document.getElementById("resetar");
//#endregion

//#region Eventos
calcularConversao.addEventListener('click', calcularConversaoMoeda);
resetarBotao.addEventListener('click', recarregarPagina);
//#endregion

//#region Funções

// Função para calcular a conversão de moeda
function calcularConversaoMoeda() {
    // Obter os valores de entrada
    let valor = parseFloat(valorOrigem.value);   // Valor em moeda de origem
    let taxa = parseFloat(taxaConversao.value);  // Taxa de conversão

    // Verificar se os valores são válidos
    if (isNaN(valor) || isNaN(taxa) || valor <= 0 || taxa <= 0) {
        alert("Por favor, insira todos os valores corretamente.");
        return;
    }

    // Calcular o valor convertido
    let convertido = valor * taxa;

    // Exibir o valor convertido
    valorConvertido.value = convertido.toFixed(2);   // Exibir com 2 casas decimais
}

// Função para resetar a página
function recarregarPagina() {
    window.location.reload(true);
}
//#endregion
