import Jogador from "./classes/Jogador.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.imageSmoothingEnabled = false;

const jogador = new Jogador(canvas.width, canvas.height);

const teclas = {
    esquerda: false,
    direita: false,
}

const jogoLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    jogador.desenhar(ctx);

    if (teclas.esquerda && jogador.posicao.x > 0) {
        jogador.moverEsquerda();
    }

    if (teclas.direita && jogador.posicao.x <= canvas.width - jogador.largura){
        jogador.moverDireita();
    }
    requestAnimationFrame(jogoLoop);
}

jogoLoop();

addEventListener("keydown", (event) => {
    const tecla = event.key.toLowerCase();
    
    if (tecla === "a") teclas.esquerda = true;
    if (tecla === "d") teclas.direita = true;
});

addEventListener("keyup", (event) => {
    const tecla = event.key.toLowerCase();
    
    if (tecla === "a") teclas.esquerda = false;
    if (tecla === "d") teclas.direita = false;
});