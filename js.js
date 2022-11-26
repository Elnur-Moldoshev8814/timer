let year = document.querySelector('#year');
let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let countdown = document.querySelector('#countdown');
let preloader = document.querySelector('#preloader');

// ДЕЛАЕМ РАСЧЕЬ
let currentYear = new Date().getFullYear();
let nextYear = new Date(`01 01 ${currentYear + 1} 00:00:00`);


year.textContent = currentYear + 1;


function UpdateCounter() {
    let currentTime = new Date();
    let diff = nextYear - currentTime;

    const daysLeft = Math.round(diff / 1000 / 60 / 60 / 24);

    const hoursLeft = Math.round(diff / 1000 / 60 / 60) % 24;

    const minutesLeft = Math.round(diff / 1000 / 60) % 60;

    const secondsLeft = Math.round(diff / 1000) % 60;

    days.textContent = daysLeft < 10 ? '0' + daysLeft : daysLeft; // тоже самое ? что if, : иначе
    hours.textContent = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.textContent = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}
setInterval(UpdateCounter,100);

setTimeout(function() {
    preloader.remove();
    countdown.style.display = 'flex'
},100)