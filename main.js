let wrapper = document.querySelector('.wrapper');
let wrapperNext = document.querySelector('.wrapper-next');
let question = document.querySelector('.question');
let photo = document.querySelector('#photo');
let hint = document.querySelector('.hint');
let value = document.querySelector('.value');
let error = document.querySelector('.error');
let currentStepIndex = 0;
let questionButton = document.querySelector('.quest-button');
function firstStep () {
    wrapper.style.display = "none";
    showQuest();
    changeBackground();
}

function disableQuestionButton() {
    questionButton.style.pointerEvents = 'none';
}

function showQuest () {
    wrapperNext.style.display = 'block';
}

function changeBackground() {
    document.body.style.backgroundImage = "url('./images/background-2.jpg')";
}

questionButton.addEventListener('click', function(e) {
    handleButtonClick(e.target);
})

function showWrongMessage() {
    error.style.display = 'block';
}
function hideError(){
    error.style.display = 'none';
}
function clearInput() {
    value.value = '';
}

function handleButtonClick(event) {
    if (event) {
        console.log('event');
        showNextQuestion();
    }
}

function showNextQuestion() {
    if(currentStepIndex === 0) {
        showSecondQuestion();
    }else if(currentStepIndex === 1) {
        thirdQuestion();
    }else if(currentStepIndex === 2) {
        showFourthQuestion();
    }

}

function showSecondQuestion() {
    if(value.value === 'Love') {
        hideError();
        question.style.display = 'none';
        photo.src = './images/sofa.jpg';
        hint.innerHTML = 'Тут щось є, може не зовсім тобі, але тобі треба глянути! ';
        clearInput();
        currentStepIndex++;
    }else {
        showWrongMessage();
        setTimeout(hideError, 2000);
    }
}

function thirdQuestion() {
    if (value.value === 'You') {
        hideError();
        question.style.display = 'none';
        photo.src = './images/kinder_main.jpg';
        hint.innerHTML = 'відкрий, зроби дитині радість і зроби наступний крок!';
        clearInput();
        currentStepIndex++;

    }else {
        showWrongMessage();
        setTimeout(hideError, 2000);
    }

}
function showFourthQuestion() {
    if(value.value === 'Katyshka') {
        hideError();
        question.style.display = 'none';
        photo.src = './images/car.jpg';
        hint.innerHTML = 'You will find something there';
        clearInput();
        currentStepIndex++;
    }else showWrongMessage();
            setTimeout(hideError, 2000);
}

