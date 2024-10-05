const questions = [
    {
        question: "Вопрос 1: Какой результат 2 + 2?",
        options: [
            { answer: "3", isCorrect: false },
            { answer: "4", isCorrect: true },
            { answer: "5", isCorrect: false },
            { answer: "6", isCorrect: false },
        ],
    },
    {
        question: "Вопрос 2: Какой результат 5 * 3?",
        options: [
            { answer: "15", isCorrect: true },
            { answer: "10", isCorrect: false },
            { answer: "20", isCorrect: false },
            { answer: "25", isCorrect: false },
        ],
    },
    // Добавьте больше вопросов здесь
];

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = questions.length;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        optionsContainer.innerHTML += `
            <div>
                <input type="radio" name="q${currentQuestionIndex}" value="${index}"> ${option.answer}
            </div>
        `;
    });

    // Обновляем видимость кнопок
    document.getElementById("prev-button").style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById("next-button").style.display = currentQuestionIndex === totalQuestions - 1 ? 'none' : 'inline-block';
    document.getElementById("submit-button").style.display = currentQuestionIndex === totalQuestions - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    const form = document.getElementById('quiz');
    const answers = new FormData(form);
    score = 0;

    questions.forEach((question, index) => {
        const answerIndex = answers.get(`q${index}`);
        if (question.options[answerIndex] && question.options[answerIndex].isCorrect) {
            score++;
        }
    });

    showResults();
}

function showResults() {
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const correctPercentage = (score / totalQuestions) * 100;
    const incorrectPercentage = 100 - correctPercentage;

    document.getElementById('correct-progress').style.width = `${correctPercentage}%`;
    document.getElementById('correct-progress').setAttribute('aria-valuenow', correctPercentage);

    document.getElementById('incorrect-progress').style.width = `${incorrectPercentage}%`;
    document.getElementById('incorrect-progress').setAttribute('aria-valuenow', incorrectPercentage);
}

function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-form').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    loadQuestion();
}

// Загружаем первый вопрос при загрузке страницы
loadQuestion();
