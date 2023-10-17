import circleAudio from '../assets/audio/circle.mp3'
import crossAudio from '../assets/audio/cross.mp3'
import winAudio from '../assets/audio/win.mp3'
import drawAudio from '../assets/audio/draw.mp3'

const circle = new Audio(circleAudio);
const cross = new Audio(crossAudio);
const win = new Audio(winAudio);
const draw = new Audio(drawAudio);



export default {
    circle,
    cross,
    win,
    draw,
}