const bird = document.querySelector('.bird');
const varCSS = document.documentElement;    // acessa campo de var do style.css
const pipeNormal = document.querySelector('.pipeNormal');
const pipeInvert = document.querySelector('.pipeInvert');
const score = document.querySelector('.points');

let points = 0;
var flagPoints = true;

var flagJump = true;
var flagFall = true;

let valueBottom = getComputedStyle(bird).getPropertyValue('bottom');    //pega valor atual de bottom do bird
let valuePositionMoment = getComputedStyle(varCSS).getPropertyValue('--positionMoment');
let valuePositionJumpFinal = getComputedStyle(varCSS).getPropertyValue('--positionJumpFinal');