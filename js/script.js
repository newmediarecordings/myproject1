/*----- constants -----*/ 

//cards array, all available cards

const cards = [ 
    {'color': 'blue', 'hexcode': '#0000ff', id: 1},
    {'color': 'purple', 'hexcode': '#800080', id: 2},
    {'color': 'pink', 'hexcode': '#ffc0cb', id: 3},
    {'color': 'teal', 'hexcode': '#008080', id: 4},
    {'color': 'blue', 'hexcode': '#0000ff', id: 5}, 
    {'color': 'purple', 'hexcode': '#800080', id: 6},
    {'color': 'pink', 'hexcode': '#ffc0cb', id: 7},
    {'color': 'teal', 'hexcode': '#008080', id: 8},
];

/*----- app's state (variables) -----*/ 

let winner;
let matchCount;
let score;
let match;
let timer;
let guesses;

/*----- cached element references -----*/ 

let timerElement = document.querySelector('#timer');
let message = document.querySelector('.message');
let scoreMessage = document.querySelector('.score');
const squares = document.querySelectorAll('.square');
var matched = document.getElementById('match')

/*----- event listeners -----*/ 

document.querySelector('button').addEventListener('click', function() {
    window.location.reload(true)
});

document.getElementById("square1")
.addEventListener('click', function(evt) {
    checkMatch(evt.target)
});
document.getElementById("square2")
.addEventListener('click', function(evt) {
    checkMatch(evt.target)
});
document.getElementById("square3")
.addEventListener('click', function(evt) {
    checkMatch(evt.target)
});
document.getElementById("square4")
.addEventListener('click', function(evt) {
    checkMatch(evt.target)
});
document.getElementById("square5")
.addEventListener('click', function(evt) {
    checkMatch(evt.target)
});
document.getElementById("square6")
.addEventListener('click', function(evt) {
    checkMatch(evt.target)
});
document.getElementById("square7")
.addEventListener('click', function(evt) {
    checkMatch(evt.target)
});
document.getElementById("square8")
.addEventListener('click', function(evt) {
    checkMatch(evt.target)
});

/*----- functions -----*/

//shuffle
function shuffle (array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

//Timer

function updateTimer() {
    if(timer === 0 && matchCount != 4) {
        document.getElementById("matched").innerHTML = `time's up!`;
        return window.location.reload();
    }
    //the math to countdown the seconds
    timer -= 1000
    let minutes = Math.floor(timer / 60000);
      let seconds = ((timer % 60000) / 1000).toFixed(0);
      // This is where we call render
    timerElement.textContent = minutes + ":" + seconds; 
    setTimeout(function() {
        return updateTimer();
    }, 1000)
} 

init();
function init() {
    winner = null;
    timer = 60000;
    guesses = [];
    matchCount = 0;
    updateTimer();
    fillColor(shuffle(cards)); 
}

//fill color by id

  function fillColor(cardsArr) {
        for ( let i = 0; i < cardsArr.length; i++ ) {
            document.getElementById(`square${i+1}`).dataset.color=`${cards[i].color}`
        }
    } 

//match, no match, and keeping someone from clicking the same card twice

function checkMatch(element) {
    document.getElementById("matched").innerHTML = ``;
    if (guesses.length === 0 && guesses.length != 2) {
        element.style.backgroundColor = element.dataset.color;
        guesses.push(element);
    } else if(guesses[0].id === element.id){
        return document.getElementById("matched").innerHTML = `Sorry, you can't choose the same square twice`;
    } else {
        if (element.dataset.color === guesses[0].dataset.color){
            element.style.backgroundColor = element.dataset.color;
            setTimeout(function(){
                document.getElementById("matched").innerHTML = `This is a match`;
                matchCount++
                return disableCard(element);
            }, 500)
        } else {
            element.style.backgroundColor = element.dataset.color;
            setTimeout(function(){
                document.getElementById("matched").innerHTML = `This is not a match`;
                return flip(element);
            }, 500) 
        }
    }
}

function flip(el) {
    el.style.backgroundColor = "aliceblue";
    guesses[0].style.backgroundColor = "aliceblue";
    guesses = [];
}

//disable clicking on matched squares

function disableCard(el) {
    el.style.backgroundColor = "black";
    guesses[0].style.backgroundColor = "black";
    guesses = []
    scoreMessage.innerHTML = `you've Matched ${matchCount} pairs`;
    return checkWin()
}

// you win message 

function checkWin() {
   if(matchCount === 4) {
    document.getElementById("won").innerHTML = `YOU WIN!`;
    setTimeout(function(){
       window.location.reload();
    }, 10000)
   }
}

