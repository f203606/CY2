const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

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

// Função para desenhar a cesta
function drawBasket() {
    ctx.fillStyle = "#FF6347";
    ctx.fillRect(basketX, canvas.height - basketHeight, basketWidth, basketHeight);
}

// Função para desenhar a fruta
function drawFruit() {
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(fruitX + fruitWidth / 2, fruitY + fruitHeight / 2, fruitWidth / 2, 0, Math.PI * 2);
    ctx.fill();
}

// Função para mover a fruta
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

// Função para reiniciar a posição da fruta
function resetFruit() {
    fruitX = Math.random() * (canvas.width - fruitWidth);
    fruitY = 0;
}

// Função para mover a cesta
function moveBasket() {
    if (rightPressed && basketX + basketWidth < canvas.width) {
        basketX += basketSpeed;
    } else if (leftPressed && basketX > 0) {
        basketX -= basketSpeed;
    }
}

// Função para desenhar a tela
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameOver) {
        ctx.fillStyle = "#FF0000";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over!", canvas.width / 2 - 100, canvas.height / 2);
        ctx.fillText("Pontos: " + score, canvas.width / 2 - 50, canvas.height / 2 + 40);
        return;
    }

    drawBasket();
    drawFruit();
    moveFruit();
    moveBasket();

    // Exibindo a pontuação
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Pontos: " + score, 20, 30);

    requestAnimationFrame(draw);
}

// Controle do movimento da cesta
let leftPressed = false;
let rightPressed = false;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        leftPressed = true;
    } else if (event.key === "ArrowRight") {
        rightPressed = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
        leftPressed = false;
    } else if (event.key === "ArrowRight") {
        rightPressed = false;
    }
});

// Iniciar o jogo
draw();
