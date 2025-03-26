import { PATH_NAVE_SPRITES, FRAMES_INICIAL } from "../utils/constantes.js";
import Projetil from "./Projetil.js";

class Jogador{
    constructor(canvasLargura, canvasAltura) {
        this.largura = 32 * 3;
        this.altura = 32 * 3;
        this.velocidade = 6;
        this.posicao = {
            x: canvasLargura/2 - this.largura/2,
            y: canvasAltura - this.altura - 30,
        }
        this.naveSprites = this.getImage(PATH_NAVE_SPRITES);

        this.sx = 0;
        this.contadorFrames = FRAMES_INICIAL;
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

    desenhar(ctx) {
        //ctx.fillStyle="red";
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

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
        if (this.contadorFrames === 0) {
            if (this.sx === 96) {
                this.sx = 0;
            } else {
                this.sx += 32;
            }
            this.contadorFrames = FRAMES_INICIAL;
        }
        this.contadorFrames--;        
    }

    atirar(projeteis) {
        const p = new Projetil(
            {
                x: this.posicao.x + this.largura/2,
                y: this.posicao.y,
            },
            -10,
        );
        projeteis.push(p);
    }
}

export default Jogador;