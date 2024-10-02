const questions = {
    1: [
        { question: "1/2 + 1/4 =", options: ["1/4", "3/4", "1/2", "1"], answer: "3/4" },
        { question: "1/3 - 1/6 =", options: ["1/6", "1/2", "1/3", "1/4"], answer: "1/6" },
        // Добавьте дополнительные вопросы...
    ],
    2: [
        { question: "2/5 + 1/5 =", options: ["3/5", "1/5", "1/4", "1/2"], answer: "3/5" },
        { question: "3/4 - 1/2 =", options: ["1/4", "1/2", "3/4", "1"], answer: "1/4" },
        // Добавьте дополнительные вопросы...
    ]
};

let currentQuestionIndex = 0;
let currentScore = 0;

function startTest(level) {
    currentQuestionIndex = 0; // Сбрасываем индекс вопросов
    currentScore = 0; // Сбрасываем счет
    displayQuestion(level);
}

function displayQuestion(level) {
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = ''; // Очистить контейнер

    const questionData = questions[level][currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
        <p>${currentQuestionIndex + 1}. ${questionData.question}</p>
        ${questionData.options.map(option => `
            <label>
                <input type="radio" name="question${currentQuestionIndex}" value="${option}" onchange="checkAnswer('${option}', '${questionData.answer}')"> ${option}
            </label>
        `).join('')}
    `;
    testContainer.appendChild(questionElement);

    const navigation = document.createElement('div');
    navigation.innerHTML = `
        <button onclick="prevQuestion()">Предыдущий вопрос</button>
        <button onclick="nextQuestion()">Следующий вопрос</button>
    `;
    testContainer.appendChild(navigation);

    updateNavigationButtons();
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        currentScore++;
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(1); // Здесь передаем уровень (можно сделать динамическим)
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions[1].length - 1) { // Убедитесь, что уровень соответствует
        currentQuestionIndex++;
        displayQuestion(1);
    } else {
        displayResults();
    }
}

function displayResults() {
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = `<h3>Ваш результат: ${currentScore}/${questions[1].length}</h3>`;
    // Здесь вы можете добавить код для отображения графика с использованием Chart.js
}

function updateNavigationButtons() {
    const prevButton = document.querySelector('button:nth-of-type(1)');
    const nextButton = document.querySelector('button:nth-of-type(2)');
    
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.innerText = currentQuestionIndex === questions[1].length - 1 ? "Завершить тест" : "Следующий вопрос";
}
