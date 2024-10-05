let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Функция для загрузки вопросов из JSON
async function loadQuestions(level) {
    try {
        const response = await fetch(`${level}.json`);
        if (!response.ok) throw new Error('Ошибка загрузки файла');
        const questions = await response.json();
        currentQuestions = questions;
        loadQuestion();
    } catch (error) {
        console.error(error);
        alert('Не удалось загрузить вопросы. Пожалуйста, проверьте файл JSON.');
    }
}

// Функция для инициализации теста
function startTest(level) {
    loadQuestions(level);
}

const totalQuestions = () => currentQuestions.length;

function loadQuestion() {
    if (currentQuestionIndex >= totalQuestions()) return;

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
    document.getElementById("next-button").style.display = currentQuestionIndex === totalQuestions() - 1 ? 'none' : 'inline-block';
    document.getElementById("submit-button").style.display = currentQuestionIndex === totalQuestions() - 1 ? 'inline-block' : 'none';
}

function selectOption(index) {
    // Логика для выбора ответа
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestions() - 1) {
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
    // Логика для отправки результатов
}

function showResults() {
    // Логика для отображения результатов
}

function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}
