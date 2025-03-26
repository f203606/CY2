function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','homem_bebe.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src','homem_jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','homem_adulto.png')
            } else {
                //idoso
                img.setAttribute('src','homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','mulher_bebe.png')
            } else if (idade < 30) {
                img.setAttribute('src','mulher_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','mulher_adulta.png')
            } else {
                img.setAttribute('src','mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}