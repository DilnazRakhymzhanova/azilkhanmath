// Register functionality
document.getElementById('register-btn')?.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
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
        window.location.href = 'game.html'; // Redirect to game page
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
let startBox = document.getElementById("start-game");
let gameBox = document.getElementById("in-game");
let endBox = document.getElementById("end-game");
let progress = document.getElementById("progress");
let message = document.getElementById("message");
let operator = ['+', '-', '*', '/'];
let t;

function startGame() {
    restart();
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

function doWhenIncorrect(i) {
    buttons[i].style.color = "#ffffff";
    buttons[i].style.backgroundColor = "#e53935";
}

function outro(i) {
    setTimeout(() => {
        nextQuestion();
        buttons[i].style.color = "#000";
        buttons[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }, 500);
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

buttons[0].addEventListener('click', () => {
    if (buttons[0].innerText == answer) {
        doWhenCorrect(0);
    } else {
        doWhenIncorrect(0);
    }
    clearInterval(t);
    outro(0);
});
buttons[1].addEventListener('click', () => {
    if (buttons[1].innerText == answer) {
        doWhenCorrect(1);
    } else {
        doWhenIncorrect(1);
    }
    clearInterval(t);
    outro(1);
});
buttons[2].addEventListener('click', () => {
    if (buttons[2].innerText == answer) {
        doWhenCorrect(2);
    } else {
        doWhenIncorrect(2);
    }
    clearInterval(t);
    outro(2);
});
buttons[3].addEventListener('click', () => {
    if (buttons[3].innerText == answer) {
        doWhenCorrect(3);
    } else {
        doWhenIncorrect(3);
    }
    clearInterval(t);
    outro(3);
});
