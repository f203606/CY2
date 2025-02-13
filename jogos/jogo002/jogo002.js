// Obtendo o contexto do canvas
const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Definindo o tamanho das raquetes e da bola
const paddleWidth = 10, paddleHeight = 100;
const ballSize = 10;

// Configurando as raquetes e a bola
let leftPaddleY = (canvas.height - paddleHeight) / 2;
let rightPaddleY = (canvas.height - paddleHeight) / 2;
let paddleSpeed = 4;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 3;
    
// Função para desenhar as raquetes
function drawPaddle(x, y) {
    context.fillStyle = "#FFF";
    context.fillRect(x, y, paddleWidth, paddleHeight);
}

// Função para desenhar a bola
function drawBall(x, y) {
    context.fillStyle = "#FFF";
    context.beginPath();
    context.arc(x, y, ballSize, 0, Math.PI * 2, false);
    context.fill();
}

// Função para mover a bola
function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Colisão com as paredes superior e inferior
    if (ballY + ballSize > canvas.height || ballY - ballSize < 0) {
        ballSpeedY = -ballSpeedY;
    }

    // Colisão com as raquetes
    if (ballX - ballSize < paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX + ballSize > canvas.width - paddleWidth && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }

    // Se a bola passar das raquetes (ponto)
    if (ballX - ballSize < 0 || ballX + ballSize > canvas.width) {
        resetBall();
    }
}

// Função para mover as raquetes
function movePaddles() {
    // Controle da raquete esquerda (Player 1)
    if (upArrowPressed && leftPaddleY > 0) {
        leftPaddleY -= paddleSpeed;
    } else if (downArrowPressed && leftPaddleY < canvas.height - paddleHeight) {
        leftPaddleY += paddleSpeed;
    }

    // Controle da raquete direita (Player 2 ou IA)
    if (ballY < rightPaddleY + paddleHeight / 2 && rightPaddleY > 0) {
        rightPaddleY -= paddleSpeed;
    } else if (ballY > rightPaddleY + paddleHeight / 2 && rightPaddleY < canvas.height - paddleHeight) {
        rightPaddleY += paddleSpeed;
    }
}

// Função de controle das teclas
let upArrowPressed = false;
let downArrowPressed = false;
document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowUp") {
        upArrowPressed = true;
    } else if (event.key == "ArrowDown") {
        downArrowPressed = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key == "ArrowUp") {
        upArrowPressed = false;
    } else if (event.key == "ArrowDown") {
        downArrowPressed = false;
    }
});

// Função para resetar a bola
function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;
    ballSpeedY = 3;
}

// Função principal de atualização
function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle(0, leftPaddleY);
    drawPaddle(canvas.width - paddleWidth, rightPaddleY);
    drawBall(ballX, ballY);
    moveBall();
    movePaddles();

    requestAnimationFrame(update); // Atualiza o jogo continuamente
}

// Iniciar o jogo
update();
