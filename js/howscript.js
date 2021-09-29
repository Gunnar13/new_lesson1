//import { Howl, Howler, HowlerGlobal } from "./howler.min.js";
//import { Howl, Howler } from 'howler';
import "./howler.min.js";  //вот так можно сделать без loadScript но я к сожалению поздно догадался
export function sound() {
    alert('hi');

    const sou = new Howl({
        src: ['js/sound2.mp3'],
        volume: 0.5,
        onend: function () {
            alert('Finished!');
        }
    })
    sou.play()
}

