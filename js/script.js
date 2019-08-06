/*----- constants -----*/ 
//const booleans strings 
// inside of render function? checkMatch as a function that then call that function when the second card is clicked.
//cards array, all available cards
const cards = [ 
    {'color': 'red', 'hexcode': '#ff0000'}, 
    {'color': 'orange', 'hexcode': '#ffa500'},
    {'color': 'yellow', 'hexcode': '#ffff00'},
    {'color': 'green', 'hexcode': '#008000'},
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
});
document.getElementById("square2")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
});
document.getElementById("square3")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
});
document.getElementById("square4")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
});
document.getElementById("square5")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
});
document.getElementById("square6")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
});
document.getElementById("square7")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
});
document.getElementById("square8")
.addEventListener('click', function(evt) {
    console.log(evt.target.style.backgroundColor)
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
// init();

function init() {
    winner = null;
    timer = 60000;
    render();
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
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
//the for loop first starts at zero, then adds one eachtime it goes through the function
//colorindex gets a random integer based on the card array's length
//let square connects the html id to the cards index array
  function fillColor() {
      for(let i=0; i<8;i++) {
          let colorIndex = getRandomInt(cards.length);
          let square= document.getElementById(`square${i+1}`).style.backgroundColor=`${cards[colorIndex].color}`
        checkMatch(square)
    } 
  }
  //run this fillColor, is running that function there.
fillColor() 

//matching 

function checkMatch(value) {
    if (value === value) {
        console.log('match');
        } else {
        console.log('no match')
        }
    }