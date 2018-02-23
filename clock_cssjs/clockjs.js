const secondHand = document.getElementsByClassName('second-hand')[0];
const minsHand = document.getElementsByClassName('min-hand')[0];
const hourHand = document.getElementsByClassName('hour-hand')[0];

function setDate() {
    const now = new Date();

    // get seconds from new Date() of now
    const seconds = now.getSeconds();

    // formula of convert milisecond to real second => ((seconds / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    // set style of seconds hand in css
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // get minutes from new Date() of now
    const mins = now.getMinutes();

    // formula of convert milisecond to real minutes => ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;

    // set style of minutes hand in css
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // get hour from new Date() of now
    const hour = now.getHours();

    // formula of convert milisecond to real minutes => ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;

    // set style of hour hand in css
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// setInterval function of date which is we coding it, set milisecond to 1000 for real time interval
setInterval(setDate, 1000);

// Runs it setDate functions to Clock Web Pages!!!
setDate();