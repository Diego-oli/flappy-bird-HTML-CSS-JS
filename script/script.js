const bird = document.querySelector('.bird');
const varCSS = document.documentElement;    // acessa campo de var do style.css
const pipes = document.querySelector('.pipes > img');
const pipeNormal = document.querySelector('.pipeNormal');
const cloud = document.querySelector('.cloud');
let flagClick = true;

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
    
    

    // console.log(valueBottom);
    // console.log(valuePositionMoment);
    // console.log(valuePositionJumpFinal);
}
    document.addEventListener('click', jump);

const checkCrash = setInterval(() => { 

    const pipesPosition = parseInt(pipes.offsetLeft);
    const birdPosition = parseInt(window.getComputedStyle(bird).bottom);
    const cloudPosition = parseInt(cloud.offsetLeft);

    console.log(birdPosition);

    if (((birdPosition <= 225 || birdPosition >= 385) && (pipesPosition === 190)) || birdPosition <= 97) {
        pipes.style.animation = 'none';
        pipeNormal.style.animation = 'none';
        cloud.style.animation = 'none';
        cloud.style.left = cloudPosition + 'px';
        bird.classList.remove('fallBird');
        console.log('bateu');
    }

}, 10);

function updateValue() {
    valueBottom = getComputedStyle(bird).getPropertyValue('bottom');    //pega valor atual de bottom do bird
    valuePositionMoment = getComputedStyle(varCSS).getPropertyValue('--positionMoment');
    valuePositionJumpFinal = getComputedStyle(varCSS).getPropertyValue('--positionJumpFinal');
}
