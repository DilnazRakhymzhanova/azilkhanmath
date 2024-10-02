const tests = {
    1: [
        { question: "Сколько будет 2 + 2?", answer: "4" },
        { question: "Сколько будет 3 * 3?", answer: "9" },
        { question: "Сколько будет 10 - 7?", answer: "3" },
        { question: "Сколько будет 12 / 4?", answer: "3" },
        { question: "Сколько будет 5 + 5?", answer: "10" },
    ],
    2: [
        { question: "Сколько будет 5 * 6?", answer: "30" },
        { question: "Сколько будет 24 / 3?", answer: "8" },
        { question: "Сколько будет 15 + 7?", answer: "22" },
        { question: "Сколько будет 9 * 9?", answer: "81" },
        { question: "Сколько будет 100 - 56?", answer: "44" },
    ],
};

function startTest(variant) {
    const container = document.getElementById('test-container');
    container.innerHTML = '';
    let correctAnswers = 0;
    let totalQuestions = tests[variant].length;

    tests[variant].forEach((q, index) => {
        const questionElement = document.createElement('div');
        const userAnswer = prompt(q.question);
        if (userAnswer === q.answer) {
            correctAnswers++;
        }
        questionElement.innerHTML = `<p>${index + 1}. ${q.question} Ответ: ${q.answer}</p>`;
        container.appendChild(questionElement);
    });

    const score = (correctAnswers / totalQuestions) * 100;
    renderChart(score);
}

function renderChart(score) {
    const ctx = document.getElementById('resultChart').getContext('2d');
    document.getElementById('resultChart').style.display = 'block';
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Правильные', 'Неправильные'],
            datasets: [{
                data: [score, 100 - score],
                backgroundColor: ['#4CAF50', '#FF5733']
            }]
        }
    });
}
