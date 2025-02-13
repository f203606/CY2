//Criando uma lista de supermercado
 listaSupermercado = ["ovo", "farinha", "leite"];
 console.log(listaSupermercado);

 listaNumero = [1, 2, 3, 4, 5];
 console.log(listaNumero);

 //2nd forma de criar uma lista:
 let heroes = [];
 heroes[2] = "Spider Man";
 heroes[0] = "Homem de Ferro";
 heroes[1] = "Hulk";
 console.log(heroes);
 console.log(heroes[1]);
 console.log(`Meu herói preferido: ${heroes[1]}`);

 let comp = heroes.length;
 console.log(`A lista tem ${comp} heróis.`);

 //Inserindo uma super heroina
 heroes.push("Mulher Maravilha");
 console.log(heroes);

 //Criando uma lista multidimensional

 let jogoDaVelha = [["X", "O", "X"],["O", "X", "O"],["O", "O", "X"]];
 console.log(jogoDaVelha);

 let listaSuperMercado = [["ovo", 18], ["farinha", 5], ["leite", 4.5]];
 console.log(`O preço do ovo é ${listaSuperMercado[0][1]}`);

 let objetoSupermercado = {"ovo": 18, "farinha": 5, "leite": 4.5};
 console.log(objetoSupermercado.ovo);

let listaCafe = ["café", 50];

 listaSuperMercado.push(listaCafe);
 console.log(listaSuperMercado)