class Projetil {
    constructor(posicao, velocidade) {
        this.posicao = posicao;
        this.largura = 2;
        this.altura = 20;
        this.velocidade = velocidade;
    }

    desenhar(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.posicao.x, this.posicao.y, this.largura, this.altura);
    }

    update() {
        this.posicao.y += this.velocidade;
    }
}

export default Projetil;

