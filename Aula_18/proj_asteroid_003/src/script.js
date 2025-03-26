import Asteroide from "./classes/Asteroide.js";
import Jogador from "./classes/Jogador.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.imageSmoothingEnabled = false;

const jogador = new Jogador(canvas.width, canvas.height);
const asteroides = [];
const jogadorProjeteis = [];

const teclas = {
    esquerda: false,
    direita: false,
    tiro: {
        pressionada: false,
        liberada: true,
    }
}

const desenharAsteroides = () => {
    for (let i = 0; i < asteroides.length; i++) {
        const asteroide = asteroides[i];
        asteroide.desenhar(ctx);
    }
}

const apagarAsteroides = () => {
    asteroides.forEach( (asteroide, index) => {
        if (asteroide.atingiuBordaInferior()) {
            asteroides.splice(index, 1);    
        }
    } );
}

const desenharProjeteis = () => {
    jogadorProjeteis.forEach( (projetil) => {
        projetil.desenhar(ctx);
        projetil.update();
    })
}

const apagarProjeteis = () => {
    jogadorProjeteis.forEach((projetil, index) => {
        if (projetil.posicao.y <= 0) {
            jogadorProjeteis.splice(index, 1);
        }
    });
}

const verificarColisaoAsteroide = () => {
    asteroides.forEach( (asteroide, asteroideIndex) => {
        jogadorProjeteis.forEach( (projetil, projetilIndex) => {
            if (asteroide.colisao(projetil)){
                asteroides.splice(asteroideIndex, 1);
                jogadorProjeteis.splice(projetilIndex, 1);
            }
        } );
} );
};

//Loop
const jogoLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    jogador.desenhar(ctx);
    
    desenharAsteroides();
    apagarAsteroides();
    console.log(asteroides);

    desenharProjeteis();
    apagarProjeteis();
    console.log(jogadorProjeteis);

    verificarColisaoAsteroide();

    if (teclas.esquerda && jogador.posicao.x > 0) {
        jogador.moverEsquerda();
    }

    if (teclas.direita && jogador.posicao.x <= canvas.width - jogador.largura){
        jogador.moverDireita();
    }

    if (teclas.tiro.pressionada && teclas.tiro.liberada) {
        jogador.atirar(jogadorProjeteis);
        teclas.tiro.liberada = false; 
    }

    requestAnimationFrame(jogoLoop);
}

addEventListener("keydown", (event) => {
    const tecla = event.key.toLowerCase();
    
    if (tecla === "a") teclas.esquerda = true;
    if (tecla === "d") teclas.direita = true;
    if (tecla === " ") teclas.tiro.pressionada = true;
});

addEventListener("keyup", (event) => {
    const tecla = event.key.toLowerCase();
    
    if (tecla === "a") teclas.esquerda = false;
    if (tecla === "d") teclas.direita = false;
    if (tecla === " ") {
        teclas.tiro.pressionada = false;
        teclas.tiro.liberada = true;
    }
});

setInterval( () => {
    const objetoAsteroide = new Asteroide(canvas.width, canvas.height);
    asteroides.push(objetoAsteroide);
}, 1000);

jogoLoop();