const mario = document.querySelector('.mario')
var x = 1

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 800)
}

function direita() {
    x += 10
    setInterval(movimenta, 33);
    function movimenta () {
        mario.style.left = x + 'px'
        if (x >= window.innerWidth) {
            x = 10
        }        
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key; 
    
    switch (event.key) {
    
      case "ArrowLeft":
          console.log("Left arrow!")
          break;
      case "ArrowRight":
          direita()
          break;
      case "ArrowUp":
          console.log("Up arrow!")
          break;
      case "ArrowDown":
          jump()
          break;     
     }
});




