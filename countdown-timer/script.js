const daysEls = document.getElementById("days");
const hoursEls = document.getElementById("hours");
const minsEls = document.getElementById("mins");
const secondsEls = document.getElementById("seconds");

const directionDate = '2022/01/01';

function countdown(){
    const correntDate = new Date();
    const targetDate = new Date(directionDate);

    const totalSeconds = (targetDate - correntDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysEls.innerHTML = formatTime(days);
    hoursEls.innerHTML = formatTime(hours);
    minsEls.innerHTML = formatTime(mins);
    secondsEls.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;

}

//initial call
countdown();

setInterval(countdown, 1000);
