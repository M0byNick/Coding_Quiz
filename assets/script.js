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

let questionIndex;
let score;
let timeRemaining;
let timerHandle;

const setTimeRemaining = (seconds) = {
    if (!timerEl){
        return;
    }
    timerEl.textContent =  ${timeRemaining};
    if (timeRemaining === 0) {
        endQuiz();
    }
};

const startTimer = () => {
    timerHandle = setInterval(
        () => setTimeRemaining(timeRemaining - 1),
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
                setTimeRemaining(timeRemaining - 10);
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
    setTimeRemaining(90);
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
 

//Hiding cards
function hideCards(){
    quiz_start.setAttribute("hidden", true);
    quiz_questions.setAttribute("hidden", true);
    high_score_card.setAttribute("hidden", true);
}

//Global variables
var quizTimer = document.getElementById("timer");
var button1 = document.getElementById("option1");
var button2 = document.getElementById("option2");
var button3 = document.getElementById("option3");
var button4 = document.getElementById("option4");
var highscoreInputName = document.getElementById("name");


const question_result = document.querySelector("#correctness");
const resultText = document.querySelector("#resultText");
const final_results = document.querySelector("#end-result");
const final_score = document.querySelector("final_score");

//Hiding result div until needed
function hideResult(){
    final_results.display = "none";
}

//Array of questions for quiz
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
]

var totalQuestions = questions.length;
var currentQuestionIndex = 0;
var timeLeft = 91;
var timerInterval;
var score = 0;
var correctSelection;

function displayTime(){
    timeDisplay.textContent = timeLeft;
}



document.querySelector("#start-button").addEventListener("click", startQuiz);

//Selection of question and loop to iterate through array of questions and their options
function showQuestion(){
    let question = questions[currentQuestionIndex];
    let options = question.options;

    let questionEl = document.querySelector("#question-text");
    questionEl.textContent = question.questionText;

    for (i=0; i < options.length; i++){
        let option = options[i];
        let optionButton = document.querySelector("#option" + i);
        optionButton.textContent = option;
    }
}

function displayFinalScore(){
    quiz_start.style.display = "none";
    end_result.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    final_score.textContent = "You got " + score + " of a total " + totalQuestions + " questions correct!";
}

function startQuiz(){
    //Clear cards for the questions to be displayed
    hideCards();
    questionCard.removeAttribute("hidden");

    //Setting first question to display for the start of the quiz
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();

    //Countdown and then end quiz and display scores
    timerInterval = setInterval(function(){
        timeLeft--;
        quizTimer.textContent = "Remaining Time: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            displayFinalScore();
        }
    }, 1000);
    quiz_start.style.display = "block";
    stopQuiz();
}

function correctOption(optionButton){
    return optionButton.textContent === questions[currentQuestionIndex].answer;
}

function checkAnswer(eventObj){
    let optionButton = eventObj.target;
    question_result.style.display = "block";
    if(optionIsCorrect(optionButton)){
        resultText.textContent = "Nice. You got this question correct!";
        setTimeout(hideResultText, 2000);
        score++
    }
    else{
        resultText.textContent = "Sorry, you've answered this question incorrectly.";
        setTimeout(hideResultText, 2000);
        time = time - 10;
        if(time <= 10 && time > 0){
            display.textContent = "Hurry up!"
        }
    }
    if(time === 0){
        displayTime();
        stopQuiz();
    }
    }

document.querySelector("#quiz_options").addEventListener("click", checkAnswer);

function stopQuiz(){
    clearInterval(timerInterval)
    hideCards();
    end_result.removeAttribute("hidden");
    displayFinalScore();
}

const submitButton = document.querySelector("submit");
const inputEl = document.querySelector("name");

submitButton.addEventListener("click", saveScore);

const highScoreHyper = document.querySelector("highscores");
highScoreHyper.addEventListener("click", showScores);

function saveScore(event){
    event.preventDefault();

    if(!inputEl.value){
        alert("Please enter your name so your high score will be saved before pressing submit");
        return false;
    }
    else{
        var savedHighScore = JSON.parse(localStorage.getItem("savedHighScore")) || [];
        var currentPlayer = highscoreInputName.value();
        var currentHighScore = {
            name: currentPlayer,
            score: score
        };
    }
    updateLeaderboardScores(leaderBoard);

    hideCards();
    high_score_card.removeAttribute("hidden");

    renderScores();
}

function updateLeaderboardScores(leaderBoard){
    let leaderBoardArray = getLeaderBoard();
    leaderBoardArray.push(leaderBoard);
    localStorage.setItem("leaderBoardArray", JSON.stringify(leaderBoardArray));
    console.log(leaderBoardArray);
    leaderBoardArray.splice(10);
}

function renderScores(){
    let sortedLeaderArray = sortLeaderboard();
    const highScoreList = document.querySelector("#high-score-card")
    highScoreList.innerHTML = "";
    for (i=0; i < sortedLeaderArray.length; i++) {
        let leaderBoardEntry = sortedLeaderArray[i];
        let newListComponent = document.createElement("list");
        newListComponent.textContent = leaderBoardEntry.name + " - " + leaderBoardEntry.score;
        highScoreList.append(newListComponent);
    }
}

function showScores(){
    hideCards();high_score_card.removeAttribute("hidden");

    clearInterval(timerInterval);

    time = undefined;
    displayTime();

    renderScores();
}

function getLeaderBoard(){
    let storedLeaderBoard = localStorage.getItem("leaderBoardArray");
    if(storedLeaderBoard !== null) {
        let leaderBoardArray = JSON.parse(storedLeaderBoard);
        return leaderBoardArray;
    }
    else{
        leaderBoardArray = [];
    }
    return leaderBoardArray;
}

function sortLeaderboard(){
    let leaderBoardArray = getLeaderBoard();
    if(!leaderBoardArray){
        return;
    }
    leaderBoardArray.sort(function (score1, score2){
        return score2.score - score1.score;
    });
    return leaderBoardArray;
}

const clearHighscoresButton = document.querySelector("#clearScores");
clearHighscoresButton.addEventListener("click", clearHighScores);

function clearHighScores(){
    localStorage.clear();
    renderScores();
}

const mainMenuButton = document.querySelector("mainMenu");
mainMenuButton.addEventListener("click", returnMainMenu);

function returnMainMenu(){
    hideCards();
    startQuiz.removeAttribute("hidden");
}

