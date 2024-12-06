const mario = document.querySelector('.mario')
var x = 1

const jump = () => {
    mario.classList.add('jump')
    setTimeout( () => {mario.classList.remove('jump')}, 800)
}

function direita() {
    x += 10
    mario.style.left = x + 'px'
}

function esquerda() {
    x -= 10
    mario.style.left = x + 'px'
}

document.addEventListener('keydown', function(event) {
    const key = event.key; 
    
    switch (event.key) {
        case "ArrowLeft":
            esquerda()
            break;
        case "ArrowRight":
            direita()
            break;
        case "ArrowUp":
            jump()
            break;
        case "ArrowDown":
            console.log("Left arrow!")
            break;     
        }
});




