const tests = {
    1: [
        { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], answer: "4" },
        { question: "What is 5 x 5?", options: ["15", "25", "30", "35"], answer: "25" },
        { question: "What is 9 - 3?", options: ["6", "3", "9", "12"], answer: "6" },
        // 17 more questions
    ],
    2: [
        { question: "What is 10 / 2?", options: ["2", "3", "5", "10"], answer: "5" },
        { question: "What is 7 + 5?", options: ["12", "11", "10", "14"], answer: "12" },
        { question: "What is 6 x 6?", options: ["30", "36", "42", "48"], answer: "36" },
        // 17 more questions
    ]
};

function startTest(testNumber) {
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = '';

    const test = tests[testNumber];
    test.forEach((questionObj, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('p');
        questionText.innerText = `${index + 1}. ${questionObj.question}`;
        questionElement.appendChild(questionText);

        questionObj.options.forEach(option => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${index + 1}`;
            radio.value = option;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));
            questionElement.appendChild(label);
            questionElement.appendChild(document.createElement('br'));
        });

        testContainer.appendChild(questionElement);
    });

    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.onclick = () => gradeTest(testNumber);
    testContainer.appendChild(submitButton);
}

function gradeTest(testNumber) {
    const test = tests[testNumber];
    let score = 0;

    test.forEach((questionObj, index) => {
        const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selected && selected.value === questionObj.answer) {
            score++;
        }
    });

    alert(`Your score: ${score} out of ${test.length}`);
}
