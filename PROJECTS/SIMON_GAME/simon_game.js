// MAIN JS FILE FOR ACHIEVING SIMON'S GAME FUNCTIONALITY
// Santiago Garcia Arango

// Access the necessary elements from the HTML
const blue = document.getElementById('blue')
const purple = document.getElementById('purple')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const beginButton = document.getElementById('beginButton')
const LAST_LEVEL = 5;

class Game {
    constructor() {
        this.initialize();
        this.generateSequence();
        setTimeout(this.nextLevel, 500);
    }

    initialize() {
        // This allows to add a "none" to the display property
        beginButton.classList.add('hide');
        // This lets us keep the same "this" related to Game, instead of Window
        this.nextLevel = this.nextLevel.bind(this)
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
        this.sublevel = 0;
        this.showSequence();
        this.addClickEvents();
    }

    showSequence() {
        for (let i = 0; i < this.level; i++) {
            // Get specific color based on current number
            const currentColor = this.transformNumberToColor(this.sequence[i]);

            // setTimeout is necessary so that the functions are in the correct
            // ... times, otherwise, they would call all at the same time
            setTimeout(() => this.highlightColor(currentColor), 1000 * i);
        }
    }

    transformNumberToColor(number) {
        if (number == 0) {
            return 'blue';
        } else if (number == 1) {
            return 'purple'; 
        } else if (number == 2) {
            return 'orange'; 
        } else {
            return 'green';
        }
    }

    transformColorToNumber(color) {
        if (color == 'blue') {
            return 0;
        } else if (color == 'purple') {
            return 1; 
        } else if (color == 'orange') {
            return 2; 
        } else {
            return 3;
        }
    }

    highlightColor(currentColor) {
        this.colors[currentColor].classList.add('light');
        setTimeout(() => this.unHighlightColor(currentColor), 400);
    }

    unHighlightColor(currentColor) {
        this.colors[currentColor].classList.remove('light');
    }

    addClickEvents() {
        // Add event listeners for clicks on each button
        // remark: bind is to let the browser know that the object is the Game,
        // ... and not the specific HTML element
        this.colors.blue.addEventListener('click', this.chooseColor.bind(this));
        this.colors.purple.addEventListener('click', this.chooseColor.bind(this));
        this.colors.orange.addEventListener('click', this.chooseColor.bind(this));
        this.colors.green.addEventListener('click', this.chooseColor.bind(this));
    }

    removeClickEvents() {
        // Delete event listeners for clicks on each button
        // remark: bind is to let the browser know that the object is the Game,
        // ... and not the specific HTML element
        this.colors.blue.removeEventListener('click', this.chooseColor.bind(this));
        this.colors.purple.removeEventListener('click', this.chooseColor.bind(this));
        this.colors.orange.removeEventListener('click', this.chooseColor.bind(this));
        this.colors.green.removeEventListener('click', this.chooseColor.bind(this));
    }

    chooseColor(ev) {
        // console.log(ev);

        // The target is created automatically and the "dataset" is an attribute
        // ... that appears when we add in HTML the "data-something" propperty
        const colorName = ev.target.dataset.color;
        const colorNumber = this.transformColorToNumber(colorName);
        this.highlightColor(colorName);

        // Check if specific button click matches each element of the array that
        // ... contains the desired sequence (check for correct choice)
        if (colorNumber == this.sequence[this.sublevel]) {
            this.sublevel++;

            // Check if user gets to last element of sequence in each level
            if (this.sublevel == this.level) {
                this.level++;
                this.removeClickEvents();

                if (this.level == (LAST_LEVEL + 1)) {
                    // TODO: win
                } else {
                    setTimeout(this.nextLevel, 1500);
                }
            }
        } else {
            // TODO: loose
        }

    }
}


function startGame() {
    window.game = new Game();
}
