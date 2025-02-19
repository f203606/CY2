//Condicionais compostas
let tratamento = "senhor";
if (tratamento == "senhor") {
    console.log("Bem-vindo");
}
else {
    console.log("Bem-vinda")
}

//Condicionais Aninhadas com comparação
let hora = new Date().getHours();
console.log(`Agora são ${hora} horas.`);
if (hora < 12) {
    console.log('Bom dia!');
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!');
}