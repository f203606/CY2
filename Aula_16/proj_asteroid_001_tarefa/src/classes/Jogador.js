import { PATH_NAVE_SPRITES, FRAMES_INICIAL } from "../utils/constantes.js";

class Jogador{
    constructor(canvasWidth, canvasHeight) {
        this.largura = 32 * 3;
        this.altura = 32 * 3;
        this.velocidade = 6;
        this.posicao = {
            x: canvasWidth/2 - this.largura/2,
            y: canvasHeight - this.altura - 30,
        }
        this.naveSprites = this.getImage(PATH_NAVE_SPRITES);

        this.sx = 0;
        this.framesContador = FRAMES_INICIAL;
    }

    getImage(path) {
        const image = new Image();
        image.src = path;
        return image;
    }

    moverEsquerda() {
        this.posicao.x -= this.velocidade;
    }

    moverDireita() {
        this.posicao.x += this.velocidade;
    }

    moverCima() {
        this.posicao.y -= this.velocidade;
    }

    moverBaixo() {
        this.posicao.y += this.velocidade;
    }

    desenhar(ctx) {
        ctx.drawImage(
            this.naveSprites, 
            this.sx, 
            0,
            32, 
            32,
            this.posicao.x,
            this.posicao.y,
            this.largura,
            this.altura,
        );
        this.update()
    }

    update() {
        if (this.framesContador === 0) {
            if (this.sx === 96) {
                this.sx = 0;
            } else {
                this.sx += 32;
            }
            this.framesContador = FRAMES_INICIAL;
        }
        this.framesContador--;        
    }
}

export default Jogador;