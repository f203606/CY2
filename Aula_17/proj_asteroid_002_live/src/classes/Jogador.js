import { PATH_NAVE_SPRITES, FRAMES_INICIAL } from "../utils/constantes.js";
import Projetil from "./Projetil.js";

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