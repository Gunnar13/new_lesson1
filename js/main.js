import { printOutput } from "./output.js";
import { calcTimer, diffDates, diffToHtml, getCountdown, timerToHtml, pauseTimer } from "./datecalc.js";
//import { Howl } from "https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.1/howler.min.js";
//import { loadScript } from "./loadScript.js";
import { sound } from "./howscript.js";
import '../img/Forma4.png';
import '../js/sound2.mp3';
//console.log(src);
//console.log(s1);
//import css from '../css/style.css';
import "../css/style.css";
//console.log(css);

const dateCalcForm = document.getElementById("datecalc");    //выбрать блоки с которыми работать
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);

const timer6 = document.getElementById("timer6");
const mytimer = document.getElementById("mytimer");
mytimer.addEventListener("submit", getTimer);

const stopButton = document.getElementById("stopbtn");
stopButton.addEventListener("click", pause);

const clearButton = document.getElementById("clearbtn");
clearButton.addEventListener("click", clear);

let timerId = null;


function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();    //чтобы не было перезагрузки страницы

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else {
        printOutput("Для расчета промежутка необходимо заполнить оба поля");
        return
    }
}

function getTimer(event) {
    timer6.innerHTML = ' ';
    event.preventDefault();
    let { startTime } = event.target.elements;
    startTime = startTime.value;
    let setTimer = calcTimer(startTime);                   //вычислить конечное врем таймера
    start(timer6, setTimer);
    return

}

function start(timer6, setTimer) {
    timerId = setInterval(() => {
        let getCurTime = getCountdown(setTimer);
        if (getCurTime == 0) return clear()
        timer6.innerHTML = timerToHtml(getCurTime);
    }, 1000);

}

function pause() {
    pauseTimer(timerId)
    return
}

function clear() {
    clearInterval(timerId)
    timer6.innerHTML = '00:00:00 ';
    sound(); //alert(timeOut);
    return
}
