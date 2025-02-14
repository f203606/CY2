/*
    Características da Linguagem:

1st: a linguagem diferencia letras maiúsculas e minúsculas; 
2nd: uma boa prática de programação é buscar sempre que possível utilizar o ponto e vírgula ao final de uma linha;
3rd: utilizar marcadores { } para criar blocos de código;
*/

let numero = 1;
let Numero = 2;
console.log(numero+Numero); //Soma igual a 3

/* 
    Incluindo JavaScript em página HTML5 - index001
<script src="js/script.js"></script>
*/

    //Comentários

//Comentário de 1 linha

/*
Comentário
de várias 
linhas
*/

/*  Declarando variáveis
Você pode declarar uma variável por vez ou várias ao mesmo tempo, como no exemplo a seguir.
*/

//Uma declaração
let x;

//Mais de uma declaração
let y;
let z;

//Várias declarações em apenas 1 linha
let a, b, c;

/* Quando quiser declarar uma variável e inicializá-la, mas não quiser dar a ela um valor específico, atribua o valor “null” */

let idade; //Idealmente, declarar let idade = null;
let maisVelho = 3 * idade
console.log(maisVelho)  
/*valor NaN tem uma maior probabilidade de acrescentar bugs em seus programas.*/

/*  Nomeando variáveis

Nomes de variáveis podem ser de qualquer comprimento.
O primeiro caractere deve ser uma letra (em maiúscula ou minúscula) ou um caractere de sublinhado (_). Números não podem ser usados como o primeiro caractere.
Não podem ser utilizados caracteres especiais como “ç”, “^” e “~”.
Os caracteres subsequentes devem ser letras, números ou sublinhados.
O nome da variável não deve ser uma palavra reservada de JavaScript.
*/

//  Tipos de variáveis

// número inteiro
let num = 10;
//número flutuante
let numFracionado = 7.5;
//booleano
let teste = true;
//string
var string = "Ctrl+Play"

console.log(num, numFracionado, teste, string);

//  Função typeof
let texto = "JavaScript"
console.log(typeof(texto))

//Entrada de valores e Concatenação - index002