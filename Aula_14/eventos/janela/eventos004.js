function mensagem() {
    let msg = document.getElementById("msg");
    let tempo = new Date();
    msg.innerText = "Bem-vindo! A página carregou às " + tempo.getHours() + ":" + tempo.getMinutes() + ":" + tempo.getSeconds()    
}

