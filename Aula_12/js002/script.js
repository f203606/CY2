let nome = prompt("Qual o seu nome? ");
document.write("<h1>Bem-vindo, " +nome+ "!</h1>"); //concatenação
document.write(`<h1>Bem-vindo, ${nome}!</h1>`); //template string

//Convertendo texto para número:
let texto1 = prompt("Digite um número: ");
let texto2 = prompt("Digite outro número: ");

let numero1 = Number(texto1);
let numero2 = Number(texto2);

let modulo = numero1 % numero2;
document.write(`<h2>O módulo de ${numero1} dividido por ${numero2} é igual a ${modulo}.</h2>`);
document.write(`<h2>${typeof(modulo)}</h2>`);

//Função toString()
let texto3 = numero1.toString();
document.write("<h2>" + typeof(texto3) + "</h2>")


