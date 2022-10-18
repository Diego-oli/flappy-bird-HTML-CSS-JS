const bird = document.querySelector('.bird');
const varCSS = document.documentElement;    // acessa campo de var do style.css

let valueBottom = getComputedStyle(bird).getPropertyValue('bottom');    //pega valor atual de bottom do bird
let valuePositionMoment = getComputedStyle(varCSS).getPropertyValue('--positionMoment');
let valuePositionJumpFinal = getComputedStyle(varCSS).getPropertyValue('--positionJumpFinal');

const jump = () => {
    varCSS.style.setProperty('--positionMoment', parseInt(valueBottom) + 'px');
    varCSS.style.setProperty('--positionJumpFinal', parseInt(valueBottom) + 100 + 'px');
    updateValue();

    bird.classList.add('jumpBird');

    console.log(valueBottom);
    console.log(valuePositionMoment);
    console.log(valuePositionJumpFinal);
}

function updateValue() {
    valueBottom = getComputedStyle(bird).getPropertyValue('bottom');    //pega valor atual de bottom do bird
    valuePositionMoment = getComputedStyle(varCSS).getPropertyValue('--positionMoment');
    valuePositionJumpFinal = getComputedStyle(varCSS).getPropertyValue('--positionJumpFinal');
}


document.addEventListener('click', jump);
