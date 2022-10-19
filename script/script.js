const bird = document.querySelector('.bird');
const varCSS = document.documentElement;    // acessa campo de var do style.css
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

function updateValue() {
    valueBottom = getComputedStyle(bird).getPropertyValue('bottom');    //pega valor atual de bottom do bird
    valuePositionMoment = getComputedStyle(varCSS).getPropertyValue('--positionMoment');
    valuePositionJumpFinal = getComputedStyle(varCSS).getPropertyValue('--positionJumpFinal');
}
