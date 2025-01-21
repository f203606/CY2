//let: solucionando problemas do var
let car = "Land Rover";
//let car = "Fusca" //erro, pois uma variável let não pode ser declarada novamente dentro de seu escopo

if (car == "Land Rover") {
    let car = "Ferrari";
    console.log("Dentro do if car: " + car)
    //let car = "Fusca" //erro, pois uma variável let não pode ser declarada novamente dentro de seu escopo
}
console.log("Fora do if car: " + car)