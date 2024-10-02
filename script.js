const tests = {
    1: [
        { question: "Сколько будет 1/2 + 1/3?", answer: "5/6" },
        { question: "Сколько будет 3/4 - 1/4?", answer: "1/2" },
        { question: "Сколько будет 2/5 * 3?", answer: "6/5" },
        { question: "Сколько будет 6/8 / 2?", answer: "3/8" },
        { question: "Сколько будет 1/4 + 3/4?", answer: "1" }
    ],
    2: [
        { question: "Сколько будет 5/6 - 1/2?", answer: "1/3" },
        { question: "Сколько будет 7/8 * 2/3?", answer: "7/12" },
        { question: "Сколько будет 9/4 / 3/2?", answer: "3/2" },
        { question: "Сколько будет 3/5 + 7/10?", answer: "13/10" },
        { question: "Сколько будет 2/7 * 5/3?", answer: "10/21" }
    ]
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
