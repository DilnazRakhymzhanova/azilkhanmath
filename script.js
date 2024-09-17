// Функции для регистрации и входа
function showRegister() {
    document.getElementById('register-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('start-game').style.display = 'none';
    document.getElementById('in-game').style.display = 'none';
    document.getElementById('end-game').style.display = 'none';
}

function showLogin() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const feedback = document.getElementById('register-feedback');

    if (password === confirmPassword) {
        feedback.textContent = 'Регистрация успешна!';
        feedback.className = 'feedback correct';
        showLogin();
    } else {
        feedback.textContent = 'Пароли не совпадают!';
        feedback.className = 'feedback incorrect';
    }
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const feedback = document.getElementById('login-feedback');

    // Здесь можно добавить код для проверки учетных данных
    if (email && password) {
        feedback.textContent = 'Вход успешен!';
        feedback.className = 'feedback correct';
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('start-game').style.display = 'block';
    } else {
        feedback.textContent = 'Неправильный email или пароль!';
        feedback.className = 'feedback incorrect';
    }
}

// Оригинальный код для игры
let n1, n2, opSelector, ansOpt, answer;
const qNo = document.getElementById("Qno");
const score = document.getElementById("score");
const question = document.getElementById("question");
const buttons = document.querySelectorAll(".answer-card button");
const startBtn = document.getElementById("start-btn");
const fScore = document.getElementById("final-score");
const startBox = document.getElementById("start-game");
const gameBox = document.getElementById("in-game");
const endBox = document.getElementById("end-game");
const progress = document.getElementById("progress");
const message = document.getElementById("message");
const operator = ['+', '-', '*', '/'];
let t;

function startGame() {
    score.innerHTML = "0";
    qNo.innerHTML = "0";
    nextQuestion();

    gameBox.style.display = "block";
    startBox.style.display = "none";
    endBox.style.display = "none";
    document.getElementById('timer').style.display = "block";
}

function restart() {
    score.innerHTML = "0";
    qNo.innerHTML = "0";
    nextQuestion();

    gameBox.style.display = "block";
    startBox.style.display = "none";
    endBox.style.display = "none";
    document.getElementById('timer').style.display = "block";
}

function whenFinished() {
    gameBox.style.display = "none";
    startBox.style.display = "none";
    endBox.style.display = "flex";
    lastmessage();
}

function nextQuestion() {
    progress.style.width = "100%";
    timed();
    fScore.innerHTML = score.innerHTML;
    if (qNo.innerText == "10") {
        whenFinished();
    }
    n1 = Math.floor(Math.random() * 100);
    n2 = Math.floor(Math.random() * 100);
    opSelector = operator[Math.floor(Math.random() * 4)];

    if (opSelector == "/") {
        while (n2 === 0 || n1 % n2 !== 0 || n2 === 1) {
            n1 = Math.floor(Math.random() * 100);
            n2 = Math.floor(Math.random() * 100);
        }
    }

    if (opSelector == "*") {
        while (n1 * n2 > 1000) {
            n1 = Math.floor(Math.random() * 50);
            n2 = Math.floor(Math.random() * 50);
        }
    }
    question.innerHTML = `${n1} ${opSelector} ${n2} = ?`;
    answer = eval(question.innerHTML.split('=')[0]);

    getOptions();
    getQNo();
}

function getOptions() {
    let options = new Set();
    while (options.size < 4) {
        options.add(answer + Math.floor(Math.random() * 20) - 10);
    }
    options = Array.from(options);
    ansOpt = Math.floor(Math.random() * 4);
    options[ansOpt] = answer;

    buttons.forEach((btn, i) => {
        btn.innerHTML = options[i];
    });
}

function getQNo() {
    qNo.innerHTML = parseInt(qNo.innerHTML) + 1;
}

function getScore() {
    score.innerHTML = parseInt(score.innerHTML) + 10;
}

function doWhenCorrect(i) {
    buttons[i].style.color = "#fff";
    buttons[i].style.backgroundColor = "green";
    getScore();
}

function doWhenIncorrect(i) {
    buttons[i].style.color = "#fff";
    buttons[i].style.backgroundColor = "#fb3640";
}

function outro(i) {
    setTimeout(() => {
        nextQuestion();
        buttons[i].style.color = "#000";
        buttons[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }, 500);
}

function lastmessage() {
    clearInterval(t);
    if (fScore.innerText >= 800) {
        message.innerHTML = "WOW !! UNBELIEVABLE !! &#128525;";
    } else if (fScore.innerText >= 500) {
        message.innerHTML = "TOO CLOSE !! &#128531;";
    } else if (fScore.innerText >= 100) {
        message.innerHTML = "Better luck next time &#128549;";
    } else {
        message.innerHTML = "Bad Luck &#128577;";
    }
}

function timed() {
    t = setInterval(() => {
        progress.style.width = (parseInt(progress.style.width) - 1) + "%";
        if (parseInt(progress.style.width) <= 0) {
            clearInterval(t);
            nextQuestion();
        }
    }, 100);
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (button.innerText == answer) {
            doWhenCorrect(index);
        } else {
            doWhenIncorrect(index);
        }
        clearInterval(t);
        outro(index);
    });
});
