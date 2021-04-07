// define variables for each container
var headerContainer = document.querySelector(".header"); // disappears when high-score container is displayed
var introContainer = document.querySelector("#intro-container");  // disappears when start button is pressed
var quizContainer = document.querySelector("#quiz-container"); // appears when start button is pressed
var endContainer = document.querySelector("#end-container");  // appears when timer is zero or last question is answered
var highScoreContainer = document.querySelector("#high-score-container"); // appears when submit button is pressed

// define variables for each button
var startButton = document.querySelector(".start-button"); // signals start of timer and quiz
var submitButton = document.querySelector(".submit-button"); // saves initials into local storage
var backButton = document.querySelector(".back-button"); // signals return to intro
var clearButton = document.querySelector(".clear-button"); // clears local storage
var viewScores = document.querySelector(".view-high-scores"); // signals return to show high scores

// quiz variables
var question = document.querySelector(".questions");
var optionOne = document.querySelector(".option-1");
var optionTwo = document.querySelector(".option-2");
var optionThree = document.querySelector(".option-3");
var optionFour = document.querySelector(".option-4");
var messageEl = document.querySelector("#message"); // either "correct" or "incorrect" based on answer to question
var correct;
var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
];

// timer variables
var timeLeft = 76;
var countdownTimer = document.querySelector(".countdown"); // timer countdown


// score variables
var initials = document.querySelector(".initials"); // holds value of initials
var userScore = document.querySelector(".user-score") // shares the same value as time when game ends
var highestScore = document.querySelector(".highest-score"); // holds value of highest score
var allScores = {
    initials: initials.value.trim(),
    userScore: userScore.value.trim()
};

// init function


// start button
    // start button starts timer countdown (event listener)
    startButton.addEventListener("click", startTimer)
    // start button starts quiz (event listener)
    startButton.addEventListener("click", startQuiz)


// timer
function startTimer() {
    var timeInterval = setInterval(function () {
        // timer counting down
        timeLeft--;
        countdownTimer.textContent = timeLeft;

        // when timer is zero, quiz ends as incomplete
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            countdownTimer.textContent = "0";
            endQuiz();
        }
    }, 1000);
}

// quiz
function startQuiz() {
    // hide intro-container
    introContainer.setAttribute("class", "hide");
    // show quiz-container
    quizContainer.setAttribute("class", "show");
}

function endQuiz() {
    // hide quiz-container
    quizContainer.setAttribute("class", "hide");
    // show end-container
    endContainer.setAttribute("class", "show");
    // show score
    userScore.textContent = timeLeft;
}   




// questions
function renderQuestion() {
    var 
}



// answers
function renderAnswer () {

    // answering question changes to next question
    answerOne.addEventListener("click", userResponse);
    answerTwo.addEventListener("click", userResponse);
    answerThree.addEventListener("click", userResponse);
    answerFour.addEventListener("click", userResponse);

    // if answer is correct, "correct" appears at the bottom of the question
    // if answer is correct, no change to timer
        messageEl.setAttribute("class", "show");
        messageEl.textContent = "Correct!";

    // if answer is incorrect, "wrong" appears at the bottom of the question
    // if answer is incorrect, time is subtracted from timer
        messageEl.setAttribute("class", "show");
        messageEl.textContent = "Incorrect!"
        timeLeft -= 10;
}


    // when all questions are answered, game is over




// score
function saveScore() {
    // checks if input is empty
    if (initials !== "") {
        
    }
    // enter user intials
    initials = initials.value.trim();
    // save initials and score to local storage
    localStorage.setItem("initials", JSON.stringify(initials));
    localStorage.setItem("userScore", timeLeft);
}


// high score

    // high score is retrieved from local storage and displayed
    function getHighScore() {
        var highScores = JSON.parse(localStorage.getItem("initials");
        localStorage.getItem("userScore", timeLeft);
    }
    
    // clear score button clears high score from local storage (event listener)
    function clearHighScore() {
        localStorage.clear();
    }

    clearButton.addEventListener("click", clearHighScore);

    // go back button navigates back to code quiz
    backButton.addEventListener("click", )

    // show high scores
    viewHighScore.addEventListener("click", )