/*----- constants -----*/ 
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

document.querySelector('.square').addEventListener('click', function() {
    console.log('clicked square') // i really want this to reveal a card. 
});



/*----- functions -----*/
//shuffle cards
//turn over cards


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
          let colorIndex = getRandomInt(cards.length)
          let square=document.getElementById(`square${i+1}`).style.backgroundColor=`${cards[colorIndex].color}`
        
    } 
  }
  //run this fillColor, is running that function there.
fillColor()

//next up! add event listeners to the cards!


