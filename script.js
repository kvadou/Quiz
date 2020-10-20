//let timeEl = document.querySelector("#time");
//let mainEl = document.getElementById("main");
let startQuizEl = document.querySelector("#start-quiz")

//let totalSeconds = 0;
//let secondsElapsed = 0;
//let interval;

// function setTime() {
//    totalSeconds = 60;
//}

// function startTimer() {
//    setTime();


//  }

startQuizEl.addEventListener("click", startTimer);



function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let minutes = 60,
        display = document.querySelector('#time');
    startTimer(minutes, display);
};