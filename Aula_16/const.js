const car = "Land Rover";
//const car = "Fusca" //erro, pois uma const não pode ser declarada novamente dentro de seu escopo
if (car == "Land Rover") {
    //constantes também tem escopo de bloco.
    const car = "Ferrari";
    console.log("Dentro do if car: " + car)
    //const car = "Fusca" //erro, pois uma const não pode ser declarada novamente dentro de seu escopo
}
console.log("Fora do if car: " + car)