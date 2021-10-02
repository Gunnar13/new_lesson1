import { DateTime, Duration, Interval, LocalZone } from "./esm.js"; // 1
import { loadScript } from "./loadScript.js";
import { sound } from "./howscript.js";
//import { Howl } from "./howler.min.js";
let dur = Duration.fromObject({ years: 0, months: 5, hours: 2, minutes: 7, seconds: 9 });


export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);
    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0]; // 2
    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

// 3
export const diffToHtml = diff => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;

export function calcTimer(startTime) {
    let t1 = DateTime.fromISO(startTime);
    let t2 = DateTime.local();//.toFormat(year, month, day, hour, minute, second);
    let durTime = Duration.fromObject({ hours: t1.hour, minutes: t1.minute, seconds: t1.second }).toObject();
    let setTimer = t2.plus(durTime);
    return setTimer
}

export function pauseTimer(timerId) {
    clearInterval(timerId)
    return
}
export function getCountdown(setTimer) {
    let getCurTime;
    let t2 = DateTime.local();
    if (t2 >= setTimer) return getCurTime = 0;
    else
        return getCurTime = setTimer.diff(t2, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();
}

export const timerToHtml = getCurTime => `
<span>
<p>Часы  ${getCurTime.hours}    минуты  ${getCurTime.minutes}  Sec${parseInt(getCurTime.seconds)} </p>
</span>
`;








