//var: a maneira mais antiga
var car = "Land Rover";
//var car = "Fusca" //Ok, pois uma variável var pode ser declarada novamente dentro de seu escopo
if (car == "Land Rover") {
    var car = "Ferrari";
    console.log("Dentro do if car: " + car)
}
console.log("Fora do if car: " + car)


