const tests = {
    1: [
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is 3 * 3?", answer: "9" },
        { question: "What is 10 - 7?", answer: "3" },
        { question: "What is 12 / 4?", answer: "3" },
        { question: "What is 5 + 5?", answer: "10" }
    ],
    2: [
        { question: "What is 3 + 5?", answer: "8" },
        { question: "What is 4 * 6?", answer: "24" },
        { question: "What is 9 - 4?", answer: "5" },
        { question: "What is 15 / 3?", answer: "5" },
        { question: "What is 7 + 2?", answer: "9" }
    ]
};

let currentTest = null;

function startTest(variant) {
    const container = document.getElementById("test-container");
    container.innerHTML = '';

    currentTest = tests[variant];
    currentTest.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <input type="text" id="answer-${index}" placeholder="Your answer">
        `;
        container.appendChild(questionElement);
    });

    document.getElementById("submit-test").style.display = 'block';
}

function submitTest() {
    let correctAnswers = 0;
    currentTest.forEach((q, index) => {
        const userAnswer = document.getElementById(`answer-${index}`).value;
        if (userAnswer === q.answer) {
            correctAnswers++;
        }
    });

    alert(`You got ${correctAnswers} out of ${currentTest.length} correct!`);
}
