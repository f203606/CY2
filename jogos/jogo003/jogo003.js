const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Configurações iniciais
const basketWidth = 80;
const basketHeight = 20;
const basketSpeed = 5;
let basketX = (canvas.width - basketWidth) / 2;

let fruitWidth = 20;
let fruitHeight = 20;
let fruitX = Math.random() * (canvas.width - fruitWidth);
let fruitY = 0;
let fruitSpeed = 3;

let score = 0;
let gameOver = false;

function drawFruit() {
    ctx.fillStyle = "#FF6347";
    ctx.beginPath();
    ctx.arc(fruitX + fruitWidth / 2, fruitY + fruitHeight / 2, fruitWidth / 2, 0, Math.PI * 2);
    ctx.fill();
}

function moveFruit() {
    fruitY += fruitSpeed;
    if (fruitY > canvas.height) {
        if (fruitX > basketX && fruitX < basketX + basketWidth) {
            score += 1; // Acertou a fruta
        } else {
            gameOver = true; // Perdeu o jogo
        }
        resetFruit();
    }
}

function draw() {
    drawFruit();
    moveFruit();
    requestAnimationFrame(draw);
}

//Iniciar o jogo
draw();