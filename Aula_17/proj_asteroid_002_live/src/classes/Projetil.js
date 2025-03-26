class Projetil {
    constructor (posicao, velocidade) {
        this.posicao = posicao;
        this.velocidade = velocidade;
        this.altura = 20;
        this.largura = 2;
    }

    desenhar (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura)
    }

    update () {
        this.posicao.y += this.velocidade;
    }


}

export default Projetil;