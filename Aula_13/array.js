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
console.log(heroes);

heroiPreferido = heroes[1];
console.log(`Herói preferido: ${heroiPreferido}`)

let comp = heroes.length;
console.log(`Comprimento da array heroes: ${comp}`)

heroes.push("Wonder Woman")
console.log(heroes)

// Copiando um array
let heroes2 = heroes; //referência
let heroes3 = heroes.splice(); //cópia. A referência não influencia

//Array Multidimensional (Matriz)
let jogoDaVelha = [];
jogoDaVelha["linha1"] = ["X","0", "X"];
jogoDaVelha["linha2"] = ["0","X", "X"];
jogoDaVelha["linha3"] = ["0","0", "X"];
console.log(jogoDaVelha)