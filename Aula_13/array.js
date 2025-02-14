/*Na aula passada, você aprendeu a criar variáveis em JavaScript. Imagine que você vai criar um código com o nome das suas séries favoritas.

Porém em algumas situações, essa solução não seria a melhor, por exemplo, se fossem 100 séries, seriam 100 variáveis! Ficaria muito difícil trabalhar com tantas variáveis assim, concorda?

Para resolver esse problema, você vai precisar armazenar vários valores juntos em um só lugar, o que não é possível com variáveis. Para isso, será necessário criar um vetor, que em inglês é chamado de array.

*/

/* Um array é uma estrutura de dados que armazena uma coleção de valores de tal forma que cada um desses valores possam ser identificados por um índice (posição dentro do array)
*/

//Em sequência:
let series = ["Game of anatomy", "The Walking Things", "Strange thrones"];
console.log(series);

//Indicando a posição:
let heroes = [];
heroes[2] = "Spider Man";
heroes[0] = "Homem de Ferro";
heroes[1] = "Hulk";
console.log(heroes);7

//Acessando valores do array:
heroiPreferido = heroes[1];
console.log(`Herói preferido: ${heroiPreferido}`)

//Retornando o tamanho do array:
let comp = heroes.length;
console.log(`Comprimento da array heroes: ${comp}`)

//Inserindo um valor no final do array:
heroes.push("Wonder Woman")
console.log(heroes)

// Copiando um array
let heroes2 = heroes; //mantém referência
let heroes3 = heroes.splice(); //referência não influencia

//Array Multidimensional (Matriz)
let jogoDaVelha = [];
jogoDaVelha["linha1"] = ["X","0", "0"];
jogoDaVelha["linha2"] = ["0","X", "0"];
jogoDaVelha["linha3"] = ["0","0", "X"];
console.log(jogoDaVelha)
console.log(jogoDaVelha.linha1);
console.log(jogoDaVelha["linha1"])

let listaSupermercado = [["ovo", 18], ["leite", 4.5]];
console.log(listaSupermercado);
console.log(`Imprimindo o preço do ovo: ${listaSupermercado[0][1]}`);

let objetoSupermercado = {"ovo":18, "leite":4.5};
console.log(objetoSupermercado);
console.log(`Imprimindo o preço do ovo: ${objetoSupermercado.ovo}`);
