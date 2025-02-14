/*
Você pode declarar uma variável por vez ou várias ao mesmo tempo, como no exemplo a seguir.
*/

let nome = prompt("Qual o seu nome? ");
document.write("Bem-vindo " +nome+ "!"); //concatenação
document.write("<br>")
document.write(`Bem-vindo ${nome}!`); //template string
document.write("<br>")

//Convertendo texto para número:
let texto1 = prompt("Digite um número: ");
let texto2 = prompt("Digite outro número: ")

let numero1 = Number(texto1);
let numero2 = Number(texto2);

let modulo = numero1 % numero2
document.write(`O módulo de ${numero1} dividido por ${numero2} vale ${modulo}.`);
document.write("<br>")
document.write(typeof(modulo))
document.write("<br>")

//Função toString()
let texto3 = numero1.toString();
document.write(typeof(texto3))


