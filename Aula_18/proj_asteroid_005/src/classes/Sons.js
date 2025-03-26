class Sons {
    constructor() {
        this.somTiro = [
            new Audio("src/assets/audios/tiro.mp3"),
            new Audio("src/assets/audios/tiro.mp3"),
            new Audio("src/assets/audios/tiro.mp3"),
            new Audio("src/assets/audios/tiro.mp3"),
            new Audio("src/assets/audios/tiro.mp3")
        ];

        this.somColisao = [
            new Audio("src/assets/audios/colisao.mp3"),
            new Audio("src/assets/audios/colisao.mp3"),
            new Audio("src/assets/audios/colisao.mp3"),
            new Audio("src/assets/audios/colisao.mp3"),
            new Audio("src/assets/audios/colisao.mp3")
        ]

        this.somTiroAtual = 0;
        this.somColisaoAtual = 0;
    }

    playSomTiro() {
        this.somTiro[this.somTiroAtual].currentTime = 0;
        this.somTiro[this.somTiroAtual].play();
        this.somTiroAtual = (this.somTiroAtual + 1) % this.somTiro.length;
    }

    playSomColisao() {
        this.somColisao[this.somColisaoAtual].currentTime = 0;
        this.somColisao[this.somColisaoAtual].play();
        this.somColisaoAtual = (this.somColisaoAtual + 1) % this.somColisao.length;
    }

}   

export default Sons;