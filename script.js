const tests = {
    1: [
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is 3 * 3?", answer: "9" },
        { question: "What is 10 - 7?", answer: "3" },
        { question: "What is 12 / 4?", answer: "3" },
        { question: "What is 5 + 5?", answer: "10" },
        { question: "What is 6 * 7?", answer: "42" },
        { question: "What is 15 - 5?", answer: "10" },
        { question: "What is 20 / 5?", answer: "4" },
        { question: "What is 8 + 2?", answer: "10" },
        { question: "What is 9 - 4?", answer: "5" },
        { question: "What is 7 * 2?", answer: "14" },
        { question: "What is 50 / 10?", answer: "5" },
        { question: "What is 100 - 90?", answer: "10" },
        { question: "What is 3 * 5?", answer: "15" },
        { question: "What is 6 + 6?", answer: "12" },
        { question: "What is 4 / 2?", answer: "2" },
        { question: "What is 11 - 1?", answer: "10" },
        { question: "What is 5 * 3?", answer: "15" },
        { question: "What is 18 / 2?", answer: "9" },
        { question: "What is 2 + 5?", answer: "7" },
        { question: "What is 8 - 3?", answer: "5" },
    ],
    2: [
        { question: "What is 3 + 5?", answer: "8" },
        { question: "What is 4 * 6?", answer: "24" },
        { question: "What is 9 - 4?", answer: "5" },
        { question: "What is 15 / 3?", answer: "5" },
        { question: "What is 7 + 2?", answer: "9" },
        { question: "What is 8 * 5?", answer: "40" },
        { question: "What is 20 - 4?", answer: "16" },
        { question: "What is 12 / 3?", answer: "4" },
        { question: "What is 11 + 9?", answer: "20" },
        { question: "What is 10 - 5?", answer: "5" },
        { question: "What is 5 * 5?", answer: "25" },
        { question: "What is 60 / 12?", answer: "5" },
        { question: "What is 30 - 10?", answer: "20" },
        { question: "What is 4 * 4?", answer: "16" },
        { question: "What is 13 + 7?", answer: "20" },
        { question: "What is 6 - 3?", answer: "3" },
        { question: "What is 14 / 2?", answer: "7" },
        { question: "What is 1 + 1?", answer: "2" },
        { question: "What is 16 - 8?", answer: "8" },
        { question: "What is 5 * 4?", answer: "20" },
        { question: "What is 24 / 6?", answer: "4" },
    ],
};

function startTest(variant) {
    const container = document.getElementById("test-container");
    container.innerHTML = '';

    const questions = tests[variant];
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        container.appendChild(questionElement);
    });
}
