
var x = 50
var bola = document.querySelector('img')

function chutar() {
    setInterval(movimenta, 33);
    function movimenta () {
        x += 10
        bola.style.left = x + 'px'
        if (x >= window.innerWidth) {
            x = -200
        }
    }
}