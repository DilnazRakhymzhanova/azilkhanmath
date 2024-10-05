let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Объект с вопросами
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
        {
            question: "Вопрос 3: Какой результат 10 - 6?",
            options: [
                { answer: "4", isCorrect: true },
                { answer: "5", isCorrect: false },
                { answer: "6", isCorrect: false },
                { answer: "3", isCorrect: false },
            ],
        },
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
        {
            question: "Вопрос 3: Какой результат 7 + 5?",
            options: [
                { answer: "11", isCorrect: false },
                { answer: "12", isCorrect: false },
                { answer: "13", isCorrect: true },
                { answer: "14", isCorrect: false },
            ],
        },
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
        {
            question: "Вопрос 3: Какой результат 3 * 3 + 1?",
            options: [
                { answer: "8", isCorrect: false },
                { answer: "9", isCorrect: true },
                { answer: "7", isCorrect: false },
                { answer: "10", isCorrect: false },
            ],
        },
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
        {
            question: "Вопрос 3: Какой результат 15 - 7 + 2?",
            options: [
                { answer: "8", isCorrect: false },
                { answer: "10", isCorrect: true },
                { answer: "9", isCorrect: false },
                { answer: "7", isCorrect: false },
            ],
        },
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
        {
            question: "Вопрос 3: Какой результат 20 / 4?",
            options: [
                { answer: "5", isCorrect: false },
                { answer: "6", isCorrect: false },
                { answer: "4", isCorrect: true },
                { answer: "3", isCorrect: false },
            ],
        },
    ],
};


// Функция для инициализации теста
function startTest(level) {
    currentQuestions = allQuestions[level]; // Получаем вопросы для выбранного уровня
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) return;

    const currentQuestion = currentQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        optionsContainer.innerHTML += `
            <button class="btn btn-primary" onclick="selectOption(${index})">${option.answer}</button>
        `;
    });

    // Обновляем видимость кнопок
    document.getElementById("prev-button").style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById("next-button").style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'none' : 'inline-block';
    document.getElementById("submit-button").style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'inline-block' : 'none';
}

function selectOption(index) {
    const selectedOption = currentQuestions[currentQuestionIndex].options[index];
    if (selectedOption.isCorrect) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    showResults();
}

function showResults() {
    document.getElementById("quiz-form").style.display = 'none';
    document.getElementById("results").style.display = 'block';
    document.getElementById("correct-progress").style.width = `${(score / currentQuestions.length) * 100}%`;
    document.getElementById("incorrect-progress").style.width = `${((currentQuestions.length - score) / currentQuestions.length) * 100}%`;
}

function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

