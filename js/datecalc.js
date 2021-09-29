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
/*
export function timer5(timer2, d1, d2) {
    //alert(d1 + d2);
    d1 = DateTime.fromISO(d1);
    d2 = DateTime.fromISO(d2);
    //alert(firstDate, secondDate);
    //dur = Duration.fromObject({ hours: 2, minutes: 7 });
    const inter = Interval.fromDateTimes(d1, d2)//.toISO;
    //alert(inter.length());
    //const target_date = DateTime.local().plus(100000)
    //alert(target_date);
    let dddd = d2.diff(d1, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();
    //dur = dddd;
    let inter2 = inter.difference()
    return `
    <span> 
    <p>${inter2}</p>
    <p>${inter.toDuration()}</p>
    <p>${timer2}:${dur.years}:${dur.months}:${dur.hours}:${dur.minutes}</p>
    
    <p>${dddd.years}: ${dddd.months}: ${dddd.days}: ${dddd.hours}: ${dddd.minutes}: ${dddd.seconds}</p>
    
    <p>${dur.minus({ seconds: 70 })}</p>
    </span>
`
}

*/

//export function setTimeou(timer2) {
 //   let t1 = DateTime.fromISO(timer2);
//    let dd = Duration.fromObject({ hours: t1.hour, minutes: t1.minute, seconds: t1.second }).toObject();
//    let timeOut = Duration.fromObject(dd).as('milliseconds');
//    return timeOut
//}

export function ttt(timer2) {
    let t1 = DateTime.fromISO(timer2);
    //let d1 = DateTime.local().plus(timer2);
    let t2 = DateTime.local();//.toFormat(year, month, day, hour, minute, second);

    //let timer22 = new Duration(['years', 'months', 'hours', 'minutes', 'seconds']).toObject();
    let dd = Duration.fromObject({ hours: t1.hour, minutes: t1.minute, seconds: t1.second }).toObject();
    let t3 = t2.plus(dd);
    //let dd1 = Duration.fromObject(dd).as('milliseconds');
    //alert(dd)
    //t3.fromObject().as('seconds')
    //alert(ddd);
    ////    let getCurTime = t3.diff(t2, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

    //let dd3 = Interval.fromDateTimes(t, t33).toDuration(['hours', 'minutes', 'seconds']).toObject();
    //alert(dd3);

    /*
dd = dd - 1;
dd = Duration.fromObject({
    hours: (dd - (dd % 3600)) / 3600,
    minutes: ((dd % 3600) - (dd % 3600) % 60) / 60,
    seconds: (dd - (dd - (dd % 3600)) - ((dd % 3600) - (dd % 3600) % 60))
}).toObject();
//as('hours', 'minutes', 'seconds');*/
    //alert(dd.hours);
    //alert(dd.minutes);
    //alert(dd.seconds);
    //dd3 = Interval.toDuration(['hours', 'minutes', 'seconds']).toObject();
    //Interval.toDuration(dd3?: string | string[], opts: {
    //    conversionAccuracy?: string;
    //});
    //alert(dd3.hours);
    //alert(dd3.minutes);
    //dd = dd.minus(1000); alert

    return t3

}

export function pauseTimer(timerId) {
    //alert('stop');
    clearInterval(timerId)
    return
}
export function getCountdown(t3) {
    let getCurTime;
    let t2 = DateTime.local();
    if (t2 >= t3) return getCurTime = 0;
    else

        return getCurTime = t3.diff(t2, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']).toObject();

    /*  Можно и по другому реализовать таймер через пеервод времени
     в секунды потом вычитая секугду и обратно в формат времени
     для того чтобы не выполнять условия по проверке если секунды минуты или часы станут меньше 0
     

        let t2 = DateTime.local();
        getCurTime = Duration.fromObject({
            hours: (getCurTime - (getCurTime % 3600)) / 3600,
            minutes: ((getCurTime % 3600) - (getCurTime % 3600) % 60) / 60,
            seconds: (getCurTime - (getCurTime - (getCurTime % 3600)) - ((getCurTime % 3600) - (getCurTime % 3600) % 60))
        }).toObject();
    
        //timerToHtml(getCurTime);
        getCurTime = Duration.fromObject(getCurTime).as('seconds');
        return getCurTime -= 1;*/

}

export const timerToHtml = getCurTime => `
<span>
<p>Часы  ${getCurTime.hours}    минуты  ${getCurTime.minutes}  Sec${parseInt(getCurTime.seconds)} </p>
</span>
`;








