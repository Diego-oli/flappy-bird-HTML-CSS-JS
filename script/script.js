const jump = () => {
    updateValue();
    if (flagJump === true) {
        varCSS.style.setProperty('--positionMoment', parseInt(valueBottom) + 'px');
        varCSS.style.setProperty('--positionJumpFinal', parseInt(valueBottom) + 100 + 'px');
        bird.classList.add('jumpBird');
        bird.classList.remove('fallBird');
        flagJump = false;
    }
    // espera o tempo de execucao da animacao de subida para depois ativar a animacao de descida
    if (flagJump === false && flagFall === true) {
        flagFall = false;
            setTimeout(() => {
                updateValue();
                bird.classList.remove('jumpBird');
                bird.classList.add('fallBird');
                flagJump = true;
                flagFall = true;
            }, 500);
    }
}

    document.addEventListener('click', jump); 

const checkCrash = setInterval(() => { 

    const pipesPosition = parseInt(pipeNormal.offsetLeft);
    const birdPosition = parseInt(window.getComputedStyle(bird).bottom);

    if (((birdPosition <= 225 || birdPosition >= 385) && (pipesPosition <= 190 && pipesPosition >= 70)) || birdPosition <= 97) {
        pipeNormal.style.animation = 'none';
        pipeInvert.style.animation = 'none';
        pipeNormal.style.left = pipesPosition + 'px';
        pipeInvert.style.left = pipesPosition + 'px';


        bird.classList.remove('fallBird');
        bird.style.bottom = birdPosition + 'px';
        bird.style.animation = 'none';

        flagPoints = false;
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
