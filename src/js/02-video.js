import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
let time = "";

const timeUpdate = throttle(data => {
    time = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))
}, 1000)

player.on('timeupdate', timeUpdate);

const retoreTime = () => {
    const currentTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    time = currentTime.seconds;
    player.setCurrentTime(time);
}

retoreTime();