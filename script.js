// Объект с вопросами для разных уровней
const allQuestions = {
    level1: [
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
        // Добавьте больше вопросов для уровня I здесь
    ],
    level2: [
        {
            question: "Вопрос 1: Какой результат 8 - 3?",
            options: [
                { answer: "5", isCorrect: true },
                { answer: "4", isCorrect: false },
                { answer: "3", isCorrect: false },
                { answer: "6", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 2: Какой результат 12 / 4?",
            options: [
                { answer: "4", isCorrect: false },
                { answer: "3", isCorrect: true },
                { answer: "2", isCorrect: false },
                { answer: "5", isCorrect: false },
            ],
        },
        // Добавьте больше вопросов для уровня II здесь
    ],
    level3: [
        {
            question: "Вопрос 1: Какой результат 9 + 6?",
            options: [
                { answer: "14", isCorrect: false },
                { answer: "15", isCorrect: false },
                { answer: "16", isCorrect: true },
                { answer: "17", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 2: Какой результат 45 / 5?",
            options: [
                { answer: "9", isCorrect: true },
                { answer: "10", isCorrect: false },
                { answer: "8", isCorrect: false },
                { answer: "7", isCorrect: false },
            ],
        },
        // Добавьте больше вопросов для уровня III здесь
    ],
    level4: [
        {
            question: "Вопрос 1: Какой результат 12 - 8?",
            options: [
                { answer: "3", isCorrect: false },
                { answer: "4", isCorrect: true },
                { answer: "5", isCorrect: false },
                { answer: "6", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 2: Какой результат 6 * 7?",
            options: [
                { answer: "40", isCorrect: false },
                { answer: "42", isCorrect: true },
                { answer: "44", isCorrect: false },
                { answer: "46", isCorrect: false },
            ],
        },
        // Добавьте больше вопросов для уровня IV здесь
    ],
    level5: [
        {
            question: "Вопрос 1: Какой результат 5 + 5?",
            options: [
                { answer: "9", isCorrect: false },
                { answer: "10", isCorrect: true },
                { answer: "11", isCorrect: false },
                { answer: "12", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 2: Какой результат 4 * 4?",
            options: [
                { answer: "15", isCorrect: false },
                { answer: "16", isCorrect: true },
                { answer: "17", isCorrect: false },
                { answer: "18", isCorrect: false },
            ],
        },
        // Добавьте больше вопросов для уровня V здесь
    ],
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = currentQuestions.length;

// Функция для инициализации теста
function startTest(level) {
    currentQuestions = allQuestions[level]; // Получаем вопросы для выбранного уровня
    currentQuestionIndex = 0; // Сбрасываем индекс текущего вопроса
    score = 0; // Сбрасываем счет
    loadQuestion(); // Загружаем первый вопрос
}

// Функция для загрузки текущего вопроса
function loadQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
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

// Функция для перехода к следующему вопросу
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Функция для перехода к предыдущему вопросу
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Функция для отправки теста
function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const answers = new FormData(form);
    score = 0;

    currentQuestions.forEach((question, index) => {
        const answerIndex = answers.get(`q${index}`);
        if (question.options[answerIndex] && question.options[answerIndex].isCorrect) {
            score++;
        }
    });

    showResults();
}

// Функция для отображения результатов
function showResults() {
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const correctPercentage = (score / currentQuestions.length) * 100;
    const incorrectPercentage = 100 - correctPercentage;

    document.getElementById('correct-progress').style.width = `${correctPercentage}%`;
    document.getElementById('correct-progress').setAttribute('aria-valuenow', correctPercentage);

    document.getElementById('incorrect-progress').style.width = `${incorrectPercentage}%`;
    document.getElementById('incorrect-progress').setAttribute('aria-valuenow', incorrectPercentage);
}

// Функция для перезапуска теста
function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-form').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    loadQuestion();
}

// Загружаем первый вопрос при загрузке страницы
loadQuestion();
