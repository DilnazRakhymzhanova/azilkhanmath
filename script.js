// Register functionality
document.getElementById('register-btn')?.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html';
    } else {
        alert('Please enter both username and password.');
    }
});

// Login functionality
document.getElementById('login-btn')?.addEventListener('click', function() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'game.html';
    } else {
        alert('Incorrect username or password.');
    }
});

// Game functionality
let n1;
let n2;
let opSelector;
let ansOpt;
let answer;
let qNo = document.getElementById("Qno");
let score = document.getElementById("score");
let question = document.getElementById("question");
let buttons = document.getElementsByTagName("button");
let start = document.getElementById("start-btn");
let fScore = document.getElementById("final-score");
let startBox = document.getElementById("start-game");
let gameBox = document.getElementById("in-game");
let endBox = document.getElementById("end-game");
let progress = document.getElementById("progress");
let message = document.getElementById("message");
let operator = ['+', '-', '*', '/'];
let t;

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
        for (let i = 0; i < 200; i++) {
            if (n1 % n2 == 0 && n1 != 0 && n2 != 0 && n2 != 1 && n1 != n2) {
                break;
            }
            n1 = Math.floor(Math.random() * 100);
            n2 = Math.floor(Math.random() * 100);
        }
    }

    if (opSelector == "*") {
        for (let i = 0; i < 100; i++) {
            if (n1 * n2 <= 1000) {
                break;
            }
            n1 = Math.floor(Math.random() * 50);
            n2 = Math.floor(Math.random() * 50);
        }
    }
    question.innerHTML = n1 + opSelector + n2;
    answer = eval(question.innerHTML);
    question.innerHTML = question.innerHTML + " = ?";

    getOptions();
    getQNo();
}

function getOptions() {
    for (let i = 0; i < 4; i++) {
        if (answer > 100) {
            buttons[i].innerHTML = answer + Math.floor(Math.random() * answer * 0.4);
        } else if (answer > 30 && answer < 100) {
            buttons[i].innerHTML = answer + Math.floor(Math.random() * answer * 0.6);
        } else {
            buttons[i].innerHTML = Math.floor(Math.random() * 100);
        }

        if (answer < 0) {
            buttons[i].innerHTML = "-" + buttons[i].innerHTML;
        }
    }
    ansOpt = Math.floor(Math.random() * 4);
    buttons[ansOpt].innerHTML = answer;
}

function getQNo() {
    qNo.innerHTML = parseInt(qNo.innerHTML) + 1;
}

function getScore() {
    score.innerHTML = parseInt(score.innerHTML) + parseInt(progress.style.width);
}

function doWhenCorrect(i) {
    buttons[i].style.color = "#ffffff";
    buttons[i].style.backgroundColor = "#00796b";
    getScore();
}

function timed() {
    let timerWidth = 100;
    let interval = setInterval(function() {
        timerWidth -= 0.5;
        progress.style.width = timerWidth + "%";
        if (timerWidth <= 0) {
            clearInterval(interval);
            nextQuestion();
        }
    }, 100);
}

function lastmessage() {
    let finalScore = parseInt(score.innerHTML);
    let messageText = "";

    if (finalScore < 500) {
        messageText = "Better luck next time!";
    } else if (finalScore < 800) {
        messageText = "Good job!";
    } else {
        messageText = "Excellent work!";
    }

    message.innerHTML = messageText;
}
