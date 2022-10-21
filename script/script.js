document.addEventListener('keydown', () => {
    // debugging
});

document.addEventListener('click', (event) => {
    if (flagMenu === false && event.target.classList.value === 'iconPlay') {
        menu.style.display = 'none';
        score.style.display = 'block';
        gameBoard.classList.remove('gameLowBrightness');
        bird.style.bottom = 50 + '%';
        pipeNormal.removeAttribute("style");
        pipeInvert.removeAttribute("style");
        points = 0;
        score.textContent = points + '';
        flagMenu = true;
    } else if (flagMenu === true) {
        // impede de contar os pontos antes da hora certa
        if (points === 0) {
            setTimeout(() => {
                flagPoints = true;
            }, 500)
        }
        jump();
    }
});

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

const checkCrash = setInterval(() => { 

    const pipesPosition = parseInt(pipeNormal.offsetLeft);
    const birdPosition = parseInt(window.getComputedStyle(bird).bottom);

    if (((birdPosition <= 225 || birdPosition >= 385) && (pipesPosition <= 190 && pipesPosition >= 70)) || birdPosition <= 97 && flagMenu === true) {
        pipeNormal.style.left = pipesPosition + 'px';
        pipeInvert.style.left = pipesPosition + 'px';


        bird.classList.remove('fallBird');
        bird.style.bottom = birdPosition + 'px';

        menu.style.display = 'flex';
        gameBoard.classList.add('gameLowBrightness');

        if (points > highScore) {
            highScore = points;
            scoreMenu.textContent = highScore + '';
            console.log('teste');
        }

        flagMenu = false;
        flagPoints = false;
    }

    if (pipesPosition <= 135 && pipesPosition >= 0 && flagPoints === true) {
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

