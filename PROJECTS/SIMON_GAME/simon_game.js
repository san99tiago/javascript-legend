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
        // Bind functoins to keep main object the Game and not window
        this.initialize = this.initialize.bind(this);
        this.chooseColor = this.chooseColor.bind(this);

        this.initialize();
        this.generateSequence();
        setTimeout(this.nextLevel, 500);
    }

    initialize() {
        // Let us show or hide the begin button
        this.toggleBeginButton();
        // This lets us keep the same "this" related to Game, instead of Window
        this.nextLevel = this.nextLevel.bind(this);
        this.level = 1;
        this.colors = {
            blue: blue,
            purple: purple,
            orange: orange,
            green: green
        }
    }

    toggleBeginButton() {
        if (beginButton.classList.contains('hide')) {
            beginButton.classList.remove('hide');
        } else {
            beginButton.classList.add('hide');
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
        setTimeout(() => this.unHighlightColor(currentColor), 500);
    }

    unHighlightColor(currentColor) {
        this.colors[currentColor].classList.remove('light');
    }

    addClickEvents() {
        // Add event listeners for clicks on each button
        this.colors.blue.addEventListener('click', this.chooseColor);
        this.colors.purple.addEventListener('click', this.chooseColor);
        this.colors.orange.addEventListener('click', this.chooseColor);
        this.colors.green.addEventListener('click', this.chooseColor);
    }

    removeClickEvents() {
        // Delete event listeners for clicks on each button
        this.colors.blue.removeEventListener('click', this.chooseColor);
        this.colors.purple.removeEventListener('click', this.chooseColor);
        this.colors.orange.removeEventListener('click', this.chooseColor);
        this.colors.green.removeEventListener('click', this.chooseColor);
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
            if (this.sublevel === this.level) {
                this.level++;
                this.removeClickEvents();

                if (this.level === (LAST_LEVEL + 1)) {
                    this.winTheGame();
                } else {
                    setTimeout(this.nextLevel, 1500);
                }
            }
        } else {
            this.loseTheGame();
        }
    }

    winTheGame() {
        // Generate alert with "sweet alert" library added in html
        swal("YOU WON THE GAME!",
            "Congratulations, your memory is amazing! \
            \nThis game was created by Santiago Garcia. \nDecember 2020",
            "success")
            .then(() => {
                this.removeClickEvents();
                this.initialize();
            });
    }

    loseTheGame() {
        // Generate alert with "sweet alert" library added in html
        swal("YOU FAILED :(",
            "Don't worry, keep trying to win the game! \
            \nThis game was created by Santiago Garcia. \nDecember 2020",
            "error")
            .then(() => {
                this.removeClickEvents();
                this.initialize();
            });
    }
}


function startGame() {
    window.game = new Game();
}
