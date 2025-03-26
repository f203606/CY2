import { FRAMES_INICIAL, PATH_ASTEROIDE_SPRITES } from "../utils/constantes.js";

class Asteroide{
    constructor(canvasLargura, canvasAltura) {
        this.canvasAltura = canvasAltura;
        this.canvasLargura = canvasLargura;
        this.largura = 312 *0.2;
        this.altura = 336 *0.2;
        this.velocidade = 6;
        this.posicao = {
            x: Math.floor(Math.random() * this.canvasLargura),
            y: -this.altura,
        }
        this.asteroideSprites = this.getImage(PATH_ASTEROIDE_SPRITES);

        this.sx = 0;
        this.framesContador = FRAMES_INICIAL;
    }

    getImage(path) {
        const image = new Image();
        image.src = path;
        return image;
    }

    moverParaBaixo() {
        this.posicao.y += this.velocidade;
    }

    desenhar(ctx) {
        ctx.drawImage(
            this.asteroideSprites, 
            this.sx, 
            0,
            312, 
            312,
            this.posicao.x,
            this.posicao.y,
            this.largura,
            this.altura,
        );
        this.update();
    }

    update() {
        if (this.framesContador === 0) {
            if (this.sx === 312) {
                this.sx = 0;
            } else {
                this.sx += 312;
            }
            this.framesContador = FRAMES_INICIAL;
        }
        this.framesContador--;
        this.moverParaBaixo();     
    }

    atingiuBordaInferior() {
        return this.posicao.y > this.canvasAltura;
    }
}

export default Asteroide;