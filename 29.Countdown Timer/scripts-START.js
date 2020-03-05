// set countdown
let countdown;

// select timer display element
const timerDisplay = document.querySelector('.display__time-left');

// Function to run countdown timer
function timer(seconds) {
    // get time of now
    const now = Date.now();

    // and set then, now(minute) plus seconds * 1000 (convert to minutes)
    const then = now + seconds * 1000

    // display time left on running time
    displayTimeLeft(seconds);

    // set interval of seconds time send to countdown
    countdown = setInterval(() => {

        // get seconds left from then subtract of date now, next convert to miliseconds
        // after that rounded it
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if got 0 seconds left
        if (secondsLeft < 0) {

            // callback of stop interval
            clearInterval(countdown);
        }

        // display time left out with call displayTimeLeft function
        displayTimeLeft(secondsLeft);
    }, 1000);
}

// Function to show display time

function displayTimeLeft(seconds) {
    // convert to minutes
    const minutes = Math.floor(seconds / 60);

    // convert time left of minutes to seconds
    const remainSeconds = seconds % 60;

    // format display, if remain seconds less than 10 second then 
    const display = `${minutes}:${remainSeconds < 10 ? '0' : ''}${remainSeconds}`;

    // set timerdisplay
    timerDisplay.textContent = display;
}