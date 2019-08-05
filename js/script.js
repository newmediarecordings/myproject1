/*----- constants -----*/ 

/*----- app's state (variables) -----*/ 
let winner;

/*----- cached element references -----*/ 
let message = document.querySelector('.message');

/*----- event listeners -----*/ 
document.querySelector('button').addEventListener('click', function() {
    console.log('clicked')
});

document.querySelector('.square1').addEventListener('click', function() {
    console.log('clicked square1')
});


/*----- functions -----*/

function startTimer() {
    if(timer === 0) return;
    timer = timer - 1000
    render();
    return startTimer();

}
init();

function init() {
    winner = null;
    timer = 60000;
    render();
}
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