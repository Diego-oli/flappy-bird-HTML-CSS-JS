const bird = document.querySelector('.bird');
const varCSS = document.documentElement;    // acessa campo de var do style.css
const pipeNormal = document.querySelector('.pipeNormal');
const pipeInvert = document.querySelector('.pipeInvert');
const cloud = document.querySelector('.cloud');
const score = document.querySelector('.points');

let points = 0;
flagPoints = true;

let valueBottom = getComputedStyle(bird).getPropertyValue('bottom');    //pega valor atual de bottom do bird
let valuePositionMoment = getComputedStyle(varCSS).getPropertyValue('--positionMoment');
let valuePositionJumpFinal = getComputedStyle(varCSS).getPropertyValue('--positionJumpFinal');

const jump = () => {

    updateValue();
    varCSS.style.setProperty('--positionMoment', parseInt(valueBottom) + 'px');
    varCSS.style.setProperty('--positionJumpFinal', parseInt(valueBottom) + 100 + 'px');
    bird.classList.add('jumpBird');
    bird.classList.remove('fallBird');
    
    setTimeout(() => {
        updateValue();
        bird.classList.remove('jumpBird');
        bird.classList.add('fallBird');
    }, 500);

    point.textContent = '500'

    // console.log(valueBottom);
    // console.log(valuePositionMoment);
    // console.log(valuePositionJumpFinal);
}
    document.addEventListener('click', jump);

const checkCrash = setInterval(() => { 

    const pipesPosition = parseInt(pipeNormal.offsetLeft);
    const birdPosition = parseInt(window.getComputedStyle(bird).bottom);
    const cloudPosition = parseInt(cloud.offsetLeft);

    if (((birdPosition <= 225 || birdPosition >= 385) && (pipesPosition <= 190 && pipesPosition >= 70)) || birdPosition <= 97) {
        pipeNormal.style.animation = 'none';
        pipeInvert.style.animation = 'none';
        pipeNormal.style.left = pipesPosition + 'px';
        pipeInvert.style.left = pipesPosition + 'px';

        cloud.style.animation = 'none';
        cloud.style.left = cloudPosition + 'px';

        bird.classList.remove('fallBird');
        bird.style.bottom = birdPosition + 'px';
        bird.style.animation = 'none';
    }

    if (pipesPosition <= 135 && flagPoints === true) {
        points++;
        score.textContent = points + '';
        flagPoints = false;

        // permite o aumento do score apenas em um intervalo de 1seg
        setTimeout(() => {
            flagPoints = true;
        }, 1000);
    }
}, 10);

function updateValue() {
    valueBottom = getComputedStyle(bird).getPropertyValue('bottom');    //pega valor atual de bottom do bird
    valuePositionMoment = getComputedStyle(varCSS).getPropertyValue('--positionMoment');
    valuePositionJumpFinal = getComputedStyle(varCSS).getPropertyValue('--positionJumpFinal');
}
