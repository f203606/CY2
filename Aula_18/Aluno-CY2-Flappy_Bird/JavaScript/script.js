// Configuração do Canvas e Contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 800;

// Propriedades do Jogo
let bird = {
    x: 100,
    y: canvas.height / 2,
    width: 20,
    height: 20,
    gravity: 0.3,
    lift: -10,
    velocity: 0
};

let pipes = [];
let frame = 0;
let score = 0;
let gameOver = false;

// Função para desenhar o pássaro
function drawBird() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

// Função para desenhar os obstáculos
function drawPipes() {
    ctx.fillStyle = "green";

    pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
        ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height - pipe.bottom);
    });
}

// Função para gerar novos obstáculos
function generatePipes() {
    if (frame % 180 === 0 && !gameOver) {
        const pipeHeight = Math.floor(Math.random() * (canvas.height / 2));
        const gap = 300;
        pipes.push({
            x: canvas.width,
            width: 40,
            top: pipeHeight,
            bottom: pipeHeight + gap
        });
    }
}

// Função para mover os obstáculos
function movePipes() {
    pipes.forEach(pipe => {
        pipe.x -= 2;
    });
    pipes = pipes.filter(pipe => pipe.x + pipe.width > 0); // Remove pipes fora da tela
}

// Função para verificar colisão
function checkCollision() {
    // Colisão com os limites do jogo (superior e inferior)
    if (bird.y <= 0 || bird.y + bird.height >= canvas.height) {
        gameOver = true;
    }

    // Colisão com os tubos
    pipes.forEach(pipe => {
        if (
            bird.x + bird.width > pipe.x &&
            bird.x < pipe.x + pipe.width &&
            (bird.y < pipe.top || bird.y + bird.height > pipe.bottom)
        ) {
            gameOver = true;
        }
    });
}

// Função para desenhar o placar
function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

// Função para atualizar o jogo
function update() {
    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Atualizar a posição do pássaro
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    // Gerar e mover tubos
    generatePipes();
    movePipes();

    // Verificar colisão
    checkCollision();

    // Desenhar todos os componentes
    drawBird();
    drawPipes();
    drawScore();

    // Se o jogo acabou, mostrar "Game Over"
    if (gameOver) {
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", canvas.width / 2 - 75, canvas.height / 2);
    } else {
        // Incrementar a pontuação (1 ponto a cada tubo que passa)
        pipes.forEach(pipe => {
            if (pipe.x + pipe.width < bird.x && !pipe.scored) {
                score++;
                pipe.scored = true;
            }
        });
    }

    // Continuar a animação do jogo
    frame++;
    if (!gameOver) {
        requestAnimationFrame(update);
    }
}

// Função de controle de clique para o pássaro voar
canvas.addEventListener("click", () => {
    if (!gameOver) {
        bird.velocity = bird.lift;
    } else {
        // Resetar o jogo após a derrota
        bird.y = canvas.height / 2;
        bird.velocity = 0;
        pipes = [];
        score = 0;
        gameOver = false;
        frame = 0;
        update();
    }
});

// Iniciar o jogo
update();
