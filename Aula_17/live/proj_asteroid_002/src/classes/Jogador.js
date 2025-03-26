import { FRAMES_INICIAL, PATH_NAVE_SPRITES } from "../utils/Constantes.js";

class Jogador {
    constructor (canvasLargura, canvasAltura) {
        this.largura = 32 * 3;
        this.altura = 32 * 3;
        this.velocidade = 6;
        this.position = {
            x: canvasLargura/2 - this.largura/2,
            y: canvasAltura - this.altura - 30,
        };
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
        this.position.x -= this.velocidade;
    }

    moverDireita() {
        this.position.x += this.velocidade;
    }

    desenhar(ctx) {
        ctx.drawImage(
            this.naveSprites,
            this.sx,
            0,
            32,
            32,
            this.position.x,
            this.position.y,
            this.largura,
            this.altura,
        );
        this.update();
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