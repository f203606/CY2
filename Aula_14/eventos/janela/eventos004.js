function mensagem() {
    let tempo = new Date();
    document.write("Bem-vindo! A página carregou às " + tempo.getHours() + ":" + tempo.getMinutes() + ":" + tempo.getSeconds())
}