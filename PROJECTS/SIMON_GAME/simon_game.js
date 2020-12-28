// MAIN JS FILE FOR ACHIEVING SIMON'S GAME FUNCTIONALITY
// Santiago Garcia Arango

// Access the necessary elements from the HTML
const blue = document.getElementById('blue')
const purple = document.getElementById('purple')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const beginButton = document.getElementById('beginButton')

class Game {
    constructor() {
        this.initialize();
        this.generateSequence();
        this.nextLevel();
    }

    initialize() {
        // This allows to add a "none" to the display property
        beginButton.classList.add('hide');
        this.level = 1;
        this.colors = {
            blue: blue,
            purple: purple,
            orange: orange,
            green: green
        }
    }

    generateSequence() {
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.showSequence();
    }

    showSequence() {
        for (let i = 0; i < this.level; i++) {
            let current_color = this.transformNumberToColor(this.sequence[i]);
            this.highlightColor(current_color);
        }
    }

    transformNumberToColor(number) {
        if (number == 1) {
            return 'blue';
        } else if (number == 2) {
            return 'purple'; 
        } else if (number == 3) {
            return 'orange'; 
        } else {
            return 'green';
        }
    }

    highlightColor(current_color) {
        this.colors[current_color].classList.add('light');
        setTimeout(() => this.unHighlightColor(current_color), 400);
    }

    unHighlightColor(current_color) {
        this.colors[current_color].classList.remove('light');
    }
}


function startGame() {
    var game = new Game();
}
