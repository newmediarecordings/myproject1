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
let bouncer = [];

/*----- cached element references -----*/ 

let timerElement = document.querySelector('#timer');
let message = document.querySelector('.message');
let scoreMessage = document.querySelector('.score');
const squares = document.querySelectorAll('.square');

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
//shuffle cards - check!
//turn over cards or reveal, reveal is fine. 



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



function updateTimer() {
    if(timer === 0 && matchCount != 4) {
        alert('Time is up!');
        return window.location.reload();
    }
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
    bouncer = [];
    matchCount = 0;
    updateTimer();
    fillColor(shuffle(cards)); 
   
}

//boilerplate random generator

//the for loop first starts at zero, then adds one eachtime it goes through the function
//colorindex gets a random integer based on the card array's length
//let square connects the html id to the cards index array

  function fillColor(cardsArr) {
    // for loop or higher order arr
        for ( let i = 0; i < cardsArr.length; i++ ) {
            document.getElementById(`square${i+1}`).dataset.color=`${cards[i].color}`
        }
    } 



function checkMatch(element) {
    if (guesses.length === 0 && guesses.length != 2) {
        element.style.backgroundColor = element.dataset.color;
        guesses.push(element);
    } else if(guesses[0].id === element.id){
        return alert("Sorry, you can't choose the same square twice");
    } else {
        if (element.dataset.color === guesses[0].dataset.color){
            element.style.backgroundColor = element.dataset.color;
            setTimeout(function(){
                alert("This is a match");
                matchCount++
                return disableCard(element);
            }, 500)
        } else {
            element.style.backgroundColor = element.dataset.color;
            setTimeout(function(){
                alert("this is not a match");
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

function disableCard(el) {
    el.style.backgroundColor = "grey";
    guesses[0].style.backgroundColor = "grey";
    guesses = []
    scoreMessage.innerHTML = `You've Matched ${matchCount} pairs`;
    return checkWin()
}


function checkWin() {
   if(matchCount === 4) {
       alert('You Matched All the Tiles');
       window.location.reload();
   }
}
