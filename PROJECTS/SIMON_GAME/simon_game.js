// MAIN JS FILE FOR ACHIEVING SIMON'S GAME FUNCTIONALITY
// Santiago Garcia Arango

const blue = document.getElementById('blue')
const purple = document.getElementById('purple')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const beginButton = document.getElementById('beginButton')

class Game {
    constructor() {
        this.initialize();
    }

    initialize() {
        beginButton.classList.add('hide');
    }
}

function startGame() {
    var game = new Game();
}
