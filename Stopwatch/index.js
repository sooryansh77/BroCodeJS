const display = document.getElementById("display");
let timer = null;
let isRunning = false;
let elapsedTime = 0;
let startTime = 0;

function start(){
    if(!isRunning){
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateClock, 20);
    }

}

function stop(){
    if(isRunning){
        isRunning = false;
        clearInterval(timer);
    }
}

function reset(){
    isRunning = false;
    elapsedTime = 0;
    startTime = 0;
    display.textContent = "00:00:00:00";

}

function updateClock(){
    elapsedTime = Date.now() - startTime;
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60 )) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor(((elapsedTime % 1000) / 10));

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");


    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}