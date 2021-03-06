const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');

let shuffledQuestions, currentQuestionIndex, correctCounter = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    correctCounter = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedbutton = e.target;
    const correct = selectedbutton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (selectedbutton.dataset = correct) {
        correctCounter++;
        console.log(correctCounter);
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        //adding page links
        goToPages();
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [{
        question: 'Never have I ever fallen asleep in class',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'No', correct: false }
        ]
    },
    {
        question: 'Never have I ever fallen asleep in class',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'No', correct: false }
        ]
    },
    {
        question: 'Never have I ever fallen asleep in class',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'No', correct: false }
        ]
    },
    {
        question: 'Never have I ever fallen asleep in class',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'No', correct: false }
        ]
    },
];

function goToPages() {
    if (!correctCounter) {
        window.open('../html/extra.html', '_blank');
    } else if (correctCounter === 1) {
        window.open('../html/music-tv.html', '_blank');
    } else if (correctCounter === 2) {
        window.open('../html/twitchTv.html', '_blank');
    } else if (correctCounter === 3) {
        window.open('../html/diceGame.html', '_blank');
    } else if (correctCounter === 4) {
        window.open('../html/recipe.html', '_blank');
    } else {
        window.open('../html/bonusGame.html', '_blank');
    }
}