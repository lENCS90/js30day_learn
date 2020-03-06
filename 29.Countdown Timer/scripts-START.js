// set countdown
let countdown;

// select timer display element
const timerDisplay = document.querySelector('.display__time-left');

// select end time element
const endTime = document.querySelector('.display__end-time');

// select buttons and form
const buttons = document.querySelectorAll('[data-time]');

// Function to run countdown timer
function timer(seconds) {
    // clear running timer
    clearInterval(countdown);
    // get time of now
    const now = Date.now();

    // and set then, now(minute) plus seconds * 1000 (convert to minutes)
    const then = now + seconds * 1000

    // display time left on running time
    displayTimeLeft(seconds);

    // display backtime
    displayEndTime(then);

    // set interval of seconds time send to countdown
    countdown = setInterval(() => {

        // get seconds left from then subtract of date now, next convert to miliseconds
        // after that rounded it
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if got 0 seconds left
        if (secondsLeft <= 0) {

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

// Function to display end after break from countdown
function displayEndTime(timestamp) {
    // selector of timestamp end date
    const end = new Date(timestamp);

    // get timestamp hour
    const hour = end.getHours();

    // get timestamp minute
    const minutes = end.getMinutes();

    // set endtime 
    // endTime.textContent = `Be Back at ${hour}:${minutes}`;

    // convert to AM/PM
    endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

// function start timer
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    // call to timer function
    timer(seconds);
}

// set button event binding with start timer function
buttons.forEach(button =>
    button.addEventListener('click', startTimer)
);

// set sumbit form event
document.customForm.addEventListener('submit', function (e) {
    // stop submit reload
    e.preventDefault();

    // select minutes form value
    const mins = this.minutes.value;

    // set timer with mins
    timer(mins * 60);

    // reset form
    this.reset();

})