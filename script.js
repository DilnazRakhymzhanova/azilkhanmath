// Карусель (просто заглушка)


// Функционал для теста
let currentQuestionIndex = 0;
let userAnswers = [];

function loadQuestion(index) {
    const questions = [
        { question: "1. Что такое 1/2 + 1/4?", answers: ["a. 3/4", "b. 1/2", "c. 5/4"] },
        { question: "2. Что такое 3/5 - 1/5?", answers: ["a. 2/5", "b. 4/5", "c. 1/5"] },
        // Добавляйте вопросы с дробями
    ];

    const questionElement = document.querySelector('#question');
    const answerElements = document.querySelectorAll('.answer-btn');
    
    questionElement.textContent = questions[index].question;
    answerElements.forEach((btn, i) => {
        btn.textContent = questions[index].answers[i];
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadQuestion(currentQuestionIndex);
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');

    nextButton.addEventListener('click', function () {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    });

    prevButton.addEventListener('click', function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });
});
