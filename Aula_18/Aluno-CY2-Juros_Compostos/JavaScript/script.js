//#region Elementos
// Elementos de entrada e saída
let principal = document.getElementById("principal");
let taxa = document.getElementById("taxa");
let tempo = document.getElementById("tempo");
let juros = document.getElementById("juros");
let montante = document.getElementById("montante");

// Botões
let calcularCompostos = document.getElementById("calcularCompostos");
let resetarBotao = document.getElementById("resetar");
//#endregion

//#region Eventos
calcularCompostos.addEventListener('click', calcularJurosCompostos);
resetarBotao.addEventListener('click', recarregarPagina);
//#endregion

//#region Funções

// Função para calcular juros compostos
function calcularJurosCompostos() {
    // Obter os valores do principal, taxa de juros e tempo
    let P = parseFloat(principal.value);   // Valor principal
    let i = parseFloat(taxa.value) / 100;  // Converter a taxa de juros para percentual
    let t = parseFloat(tempo.value);       // Tempo em períodos

    // Verificar se os valores são válidos
    if (isNaN(P) || isNaN(i) || isNaN(t) || P <= 0 || i <= 0 || t <= 0) {
        alert("Por favor, insira todos os valores corretamente.");
        return;
    }

    // Fórmula de juros compostos: M = P * (1 + i)^t
    let M = P * Math.pow(1 + i, t); // Montante final com juros compostos
    let J = M - P; // Juros é o montante menos o principal

    // Exibindo os resultados nos campos
    juros.value = J.toFixed(2);   // Mostrar os juros calculados
    montante.value = M.toFixed(2); // Mostrar o montante final
}

// Função para resetar a página
function recarregarPagina() {
    window.location.reload(true);
}
//#endregion
