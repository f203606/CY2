/* Funções

As funções devem ser utilizadas para agrupar e “esconder” um determinado conjunto de códigos com um objetivo bem definido.
*/

function areaDoRetangulo (largura, comprimento) {
    let area = largura * comprimento;
    console.log(area)
}
areaDoRetangulo (5,2);

// Retornando um valor (return)
function areaDoQuadrado (lado) {
    let area = lado**2;
    return area;
}
console.log(areaDoQuadrado(4));


/* As variáveis definidas no escopo de uma função só podem ser acessadas nesse escopo.
*/
