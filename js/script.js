/*----- constants -----*/ 
//const booleans strings 
// inside of render function? checkMatch as a function that then call that function when the second card is clicked.
//cards array, all available cards

const cards = [ 
    {'color': 'blue', 'hexcode': '#0000ff'},
    {'color': 'purple', 'hexcode': '#800080'},
    {'color': 'pink', 'hexcode': '#ffc0cb'},
    {'color': 'teal', 'hexcode': '#008080'},
    {'color': 'blue', 'hexcode': '#0000ff'},
    {'color': 'purple', 'hexcode': '#800080'},
    {'color': 'pink', 'hexcode': '#ffc0cb'},
    {'color': 'teal', 'hexcode': '#008080'},
];

console.log(cards);

/*----- app's state (variables) -----*/ 
let winner;
let score;
let match;
let guesses;

/*----- cached element references -----*/ 
//computer needs to remember what was turned over
//  ''       ''   ''  ''     what cards are still available
// which cards match and keep score.

let message = document.querySelector('.message');

/*----- event listeners -----*/ 
document.querySelector('button').addEventListener('click', function() {
    console.log('clicked')
});
document.getElementById("square1")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
    checkMatch(evt.target.style.backgroundColor)
});
document.getElementById("square2")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
    checkMatch(evt.target.style.backgroundColor)
});
document.getElementById("square3")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
    checkMatch(evt.target.style.backgroundColor)
});
document.getElementById("square4")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
    checkMatch(evt.target.style.backgroundColor)
});
document.getElementById("square5")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
    checkMatch(evt.target.style.backgroundColor)
});
document.getElementById("square6")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
    checkMatch(evt.target.style.backgroundColor)
});
document.getElementById("square7")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
    checkMatch(evt.target.style.backgroundColor)
});
document.getElementById("square8")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
    checkMatch(evt.target.style.backgroundColor)
});

/*function reveal() {
var x = document.getElementById("square8");
if (x.style.display === "border") {
  x.style.display = "block";
} else {
  x.style.display = "border";
}
}
reveal ()
*/

function newFunction() {

}

document.getElementById("square8").onclick = function() { 
  
    document.getElementById("square8").style.display = newFunction(); 

} 

//.addEventListener('click', function(newFunction)
 //   console.log('grey')

/*----- functions -----*/
//shuffle cards - check!
//turn over cards or reveal, reveal is fine. 

function startTimer() {
    if(timer === 0) return;
    timer = timer - 1000
    render();
    return startTimer();
}

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

init();
function init() {
    winner = null;
   // timer = 60000;
    guesses = [];
   // render();
   shuffle(cards)
}
//this is the timer
let timer = 60000
function updateTimer() {
    if(timer === 0) {
        console.log('Timer Finished');
        return;
    }
    timer -= 1000
    let minutes = Math.floor(timer / 60000);
      let seconds = ((timer % 60000) / 1000).toFixed(0);
    // This is where we call render
    console.log(`
    ${minutes}:${(seconds < 10 ? '0' : '')}${seconds}
    `)
    setTimeout(function() {
        return updateTimer();
    }, 1000)
}
//boilerplate random generator

//the for loop first starts at zero, then adds one eachtime it goes through the function
//colorindex gets a random integer based on the card array's length
//let square connects the html id to the cards index array

  function fillColor(cardsArr) {
    // for loop or higher order arr
        for ( let i = 0; i < cardsArr.length; i++ ) {
            document.getElementById(`square${i+1}`).style.backgroundColor=`${cards[i].color}`
        }
       // checkMatch(square)
    } 

  //run this fillColor, is running that function there.
fillColor(cards) 

//matching 

function checkMatch(oneguess) {
    if (guesses.length<1) {
        guesses.push(oneguess)
    } else {
        if (oneguess === guesses[0]) {
            alert("this is match")
            guesses = []
        } else {
            alert("this is not a match")
            guesses = []
        }
    }
}
