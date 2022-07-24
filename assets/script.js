//Variable storage

const High_Scores_Key = "highScores";

const highScores = JSON.parse(localStorage.getItem(High_Scores_Key)) || [];

const questions = [
    {
        //Question 1
        questionText: "The condition in an if / else statement is enclosed within ____.",
        options: ["1. Curly Brackets", "2. Quotes", "3. Parentheses", "4. Square Brackets"],
        correctAnswer: 1
    },
    {
        //Question 2
        questionText: "The first index of an array is ____.",
        options: ["1. 5", "2. 1", "3. 0", "User chooses"],
        correctAnswer: 2
    },
    {
        //Question 3
        questionText: "String values must be enclosed using ____ when they are assigned to variables.",
        options: ["1. Parentheses", "2. Periods", "3. Curly Brackets", "4. Quotation Marks"],
        correctAnswer: 2
    },
    {
        //Question 4
        questionText: "How can you quickly debug by printing out values during development?",
        options: ["1. Terminal/bash", "2. Terminal/zsh", "3. System.print(TELL ME)", "4. Console.log"],
        correctAnswer: 3
    },
    {
        //Question 5
        questionText: "If you wanted to check if two variables are equal to each other in an if/else statement you would use ____.",
        options: ["1. ==", "2. 'equals'", "3. ===", "4. ="],
        correctAnswer: 0
    }
];

const startScreenEl = document.getElementById("start-screen");
const startButtonEl = document.getElementById("start-button");

const quizScreenEl = document.getElementById("quiz-screen");
const timerEl = document.getElementById("timer");
const questionTextEl = document.getElementById("question-text");
const answerListEl = document.getElementById("answer-list");

const endScreenEl = document.getElementById("end-screen");
const scoreFormEl = document.getElementById("score-submission-form");
const scoreSpanEl = document.getElementById("score");

const highScoreScreenEl = document.getElementById("high-score-screen");
const clearHighScoresButtonEl = document.getElementById("clear-high-scores-button");
const mainMenuButtonEl = document.getElementsById("main-menu-button");

let questionIndex;
let score;
let timeRemaining;
let timerHandle;

const settimeRemaining = (seconds) = {
    if (!timerEl){
        return;
    }
    timerEl.textContent = ${timeRemaining};
    if (timeRemaining === 0) {
        endQuiz();
    }
};

const startTimer = () => {
    timerHandle = setInterval(
        () => settimeRemaining(timeRemaining - 1),
        1000
    );
};

const stopTimer = () => clearInterval(timerHandle);

const displayQuestion = (question) => {
    if (!questionTextEl || !answerListEl){
        return;
    }
    questionTextEl.textContent = question.text;
    answerListEl.innerHTML = "";
    question.answers.forEach((answer, i) => {
        const liEl = document.createElement("li");
        const answerButtonEl = document.createElement("button");
        answerButtonEl.textContent = answer;
        answerListEl.addEventListener("click", () => {
            if (i === question.correctIndex) {
                score += 1;
            } else {
                settimeRemaining(timeRemaining - 10);
            }
            advanceQuiz();
            });
            liEl.appendChild(answerButtonEl);
            answerListEl.appendChild(liEl);
        })''
    };

const advanceQuiz = () => {
    if (questionIndex < questions.length) {
        displayQuestion(questions[questionIndex]);
        questionIndex++;
    } else {
        endQuiz();
    }
};

const startQuiz = () => {
    if (!startScreenEl || !quizScreenEl || !endScreenEl) {
        return;
    }
    startScreenEl.hidden = true;
    endScreenEl.hidden = true;
    questionIndex = 0;
    score = 0;
    settimeRemaining(90);
    advanceQuiz();
    startTimer();
    quizScreenEl.hidden = false;
};

const endQuiz = () = => {
    if (!startScreenEl || !quizScreenEl || !scoreSpanEl || !endScreenEl) {
        return;
    }
    startScreenEl.hidden = true;
    quizScreenEl.hidden = true;
    scoreSpanEl.textContent = score;
    endScreenEl.hidden = false;
};

const displayHighScores = () => {
        if (!highScoreListEl) {
            return;
        }
        highScoreListEl.innerHTML = "";
        highScores.forEach((highScore) => {
        const liEl = document.createElement("li");
        liEl.textContent = ${highScore.initials} - ${highScore.score};
        highScoreListEl?.appendChild(liEl);
    });
};

startButtonEl?.addEventListener("click", startQuiz);

scoreFormEl?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(scoreFormEl);
    const initials = formData.get("initials");
    if (!initials) {
        alert("Enter initials");
        return false;
    }
    highScores.push({
        initials,
        score,
    });
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);
    localStorage.setItem(High_Scores_Key, JSON.stringify(highSCores));
    startScreenEl.hidden = true;
    quizScreenEl.hidden = true;
    endScreenEl.hidden = true;
    displayHighScores();
    highScoreScreenEl.hidden = false;
});

clearHighScoresButtonEl?.addEventListener("click", () => {
    localStorage.removeItem(High_Scores_Key);
    location.reload();
});
 
mainMenuButtonEl?.addEventListener("click", () => {
    startScreenEl.hidden = false;
    quizScreenEl.hidden = true;
    endScreenEl.hidden = true;
    highScoreScreenEl.hidden = true;
});