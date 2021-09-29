//import { Howl } from "./howler.min.js";
export function loadScript(url, callback) {
    const script = document.createElement("script");

    //так как по обычному библиотека не подключалась я взял ваш пример по загрузке скрипта в head
    // и тогда звук будет включаться при очистке таймера или при окончании времени

    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
    /*
    const sound = new Howl({
        src: ['js/sound2.mp3'],
        volume: 0.5,
        onend: function () {
            alert('Finished!');
        }
    });
    sound.play()*/
}

//console.log('loadScript22222.js');