// Объект с вопросами
const allQuestions = {
    level1: [
        {
            question: "Вопрос 1: Представьте в виде смежной дроби 7/3 ?",
            options: [
                { answer: "1 2/3", isCorrect: false },
                { answer: "2 1/3", isCorrect: true },
                { answer: "2 1/7", isCorrect: false },
                { answer: "6", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 2: Какой результат 75 * 36?",
            options: [
                { answer: "2700", isCorrect: true },
                { answer: "1675", isCorrect: false },
                { answer: "2636", isCorrect: false },
                { answer: "2075", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 3: Сколько будет 0,2 * 100?",
            options: [
                { answer: "20", isCorrect: true },
                { answer: "2", isCorrect: false },
                { answer: "200", isCorrect: false },
                { answer: "0,2", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 4: Выполните действия 12,3 + 16,1",
            options: [
                { answer: "28,4", isCorrect: true },
                { answer: "27,5", isCorrect: false },
                { answer: "27,4", isCorrect: false },
                { answer: "28,1", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 5: Запишите в виде десятичной дроби проценты 1%; 53%; 102%?",
            options: [
                { answer: "0,1; 0,5; 1", isCorrect: false },
                { answer: "1; 53; 102", isCorrect: false },
                { answer: "0,1; 0,53; 1,2", isCorrect: false },
                { answer: "0,01; 0,53; 1,02", isCorrect: true },
            ],
        },
        {
            question: "Вопрос 6: Найдите |-56|",
            options: [
                { answer: "112", isCorrect: false },
                { answer: "28", isCorrect: false },
                { answer: "56", isCorrect: true },
                { answer: "-56", isCorrect: false },
            ],
        },
        {
            question:"Вопрос 7: Вычислите -7 + (-14)",
            options: [
                { answer: "7", isCorrect: false },
                { answer: "-21", isCorrect: true },
                { answer: "-7", isCorrect: false },
                { answer: "21", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 8: |-8| * (-7)?",
            options: [
                { answer: "-15", isCorrect: false },
                { answer: "1", isCorrect: false },
                { answer: "56", isCorrect: false },
                { answer: "-56", isCorrect: true },
            ],
        },
    ],
    level2: [
        {
            question: "Вопрос 1: Какая длина дороги, если самокат на скорости 100км/ч проехал его за 30 минут?",
            options: [
                { answer: "50 км", isCorrect: true },
                { answer: "100 км", isCorrect: false },
                { answer: "30 км", isCorrect: false },
                { answer: "40 км", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 2: Сколько будет корень из 144?",
            options: [
                { answer: "144", isCorrect: false },
                { answer: "12", isCorrect: true },
                { answer: "-12", isCorrect: false },
                { answer: "-144", isCorrect: false },
            ],
        },
        {
            question: "Вопрос 3: Найдите значение х, если 2х=1?",
            options: [
                { answer: "1", isCorrect: false },
                { answer: "2", isCorrect: false },
                { answer: "0,5", isCorrect: true },
                { answer: "ответа нет", isCorrect: false },
            ],
        },
        {
               question: "Вопрос 4: Вычислите отношение, 30 мин к 2 часам?",
            options: [
                { answer: "0,3 ч к 2 ч", isCorrect: false },
                { answer: "1 к 4", isCorrect: true },
                { answer: "30 к 120", isCorrect: false },
                { answer: "15 к 60", isCorrect: false },
            ],
        },
        {
               question: "Вопрос 5: Решите уравнение х : 10 = 3 : 2 ?",
            options: [
                { answer: "x=3", isCorrect: false },
                { answer: "x=10", isCorrect: false },
                { answer: "x=-15", isCorrect: false },
                { answer: "x=15", isCorrect: true },
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
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startTest(level) {
    currentQuestions = allQuestions[level];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('test-section').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const questionObj = currentQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionObj.question; // Исправлено

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Очищаем предыдущие варианты

    questionObj.options.forEach((option) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option.answer;
        optionButton.className = 'answer'; // Добавляем класс для стилизации
        optionButton.onclick = () => checkAnswer(option.isCorrect); // Обработка клика на ответ
        optionsContainer.appendChild(optionButton);
    });

    // Управляем видимостью кнопок
    document.getElementById('prev-button').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById('next-button').style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'none' : 'inline-block';
}

function checkAnswer(isCorrect) {
    // Проверяем ответ и выводим сообщение
    const feedbackMessage = isCorrect ? 'Правильно!' : 'Неправильно!';
    alert(feedbackMessage);

    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;
    showQuestion(); // Переход к следующему вопросу
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function submitQuiz() {
    showResults();
}

function showResults() {
    document.getElementById('test-section').style.display = 'none';
    const resultMessage = `Вы ответили правильно на ${score} из ${currentQuestions.length} вопросов.`; // Исправлено
    document.getElementById('result-message').textContent = resultMessage;
    updateProgressBars(score, currentQuestions.length); // Обновляем прогресс-бары
    document.getElementById('result-section').style.display = 'block';
}

function restartTest() {
    document.getElementById('result-section').style.display = 'none';
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    startTest('level1'); // Запускаем тест заново
}
