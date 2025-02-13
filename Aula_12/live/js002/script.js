document.write("<h1>Hello World!</h1>");

let nome = prompt("Qual é o seu nome? ");
document.write("<h2>Bem-vindo, " +nome+ "!</h2>");
document.write(`<h3>Bem-vindo, ${nome}!</h3>`)

let texto1 = prompt("Digite um número: ");
let texto2 = prompt("Digite outro número: ");

let n1 = Number(texto1);
let n2 = Number(texto2);

document.write(`A soma entre ${n1} e ${n2} é igual a ${n1+n2}`);



