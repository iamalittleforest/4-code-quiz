// define variables for each container
var headerContainer = document.querySelector(".header"); // disappears when high-score container is displayed
var introContainer = document.querySelector(".intro-container");  // disappears when start button is pressed
var quizContainer = document.querySelector(".quiz-container"); // appears when start button is pressed
var endContainer = document.querySelector(".end-container");  // appears when timer is zero or last question is answered
var highScoreContainer = document.querySelector(".high-score-container"); // appears when submit button is pressed

// define variables for each button
var startButton = document.querySelector(".start-button"); // signals start of timer and quiz
var submitButton = document.querySelector(".submit-button"); // saves initials into local storage
var backButton = document.querySelector(".back-button"); // signals return to intro
var clearButton = document.querySelector(".clear-button"); // clears local storage
var viewScores = document.querySelector(".view-high-scores"); // signals return to show high scores

// variables that change
var countdownTimer = document.querySelector(".countdown"); // timer countdown
var question = document.querySelector(".questions");
var answerOne = document.querySelector(".answer-1");
var answerTwo = document.querySelector(".answer-2");
var answerThree = document.querySelector(".answer-3");
var answerFour = document.querySelector(".answer-4");
var results = document.querySelector(".results"); // either "correct" or "incorrect" based on answer to question
var initials = document.querySelector(".initials"); // holds value of initials
var finalScore = document.querySelector(".final-score") // shares the same value as time when game ends
var highestScore = document.querySelector(".highest-score"); // holds value of highest score


// init function
function init() {

}

// start button
    // start button starts quiz (event listener)
    startButton.addEventListener("click", startQuiz)
    // start button starts timer countdown (event listener)
    startButton.addEventListener("click", startTimer)

// quiz
function startQuiz() {

}
    // answering question changes to next question
    answerOne.addEventListener("click", userResponse);
    answerTwo.addEventListener("click", userResponse);
    answerThree.addEventListener("click", userResponse);
    answerFour.addEventListener("click", userResponse);

    function userResponse () {

    }
        // if answer is correct, "correct" appears at the bottom of the question
        function correctAnswer() {

        }

        // if answer is incorrect, "wrong" appears at the bottom of the question
        function incorrectAnswer() {

        }

    // when all questions are answered, game is over

// timer
function startTimer() {

}
    // if answer is correct, no change to timer

    // if answer is incorrect, time is subtracted from timer

    // when timer is zero, game is over
    if (countdown === 0) {

    }

// score
    // score is based on time remaining on timer
    function finalScore() {

    }

    // score is displayed on completion

    // enter initials and submit to save into local storage
    function setScore() {

    }

// high score

    // high score is retrieved from local storage and displayed
    function getHighScore() {

    }
    
    // clear score button clears high score from local storage (event listener)
    function clearHighScore() {
        highestScore = 0;
        setHighScore()
    }

    clearButton.addEventListener("click", clearHighScore);

    // go back button navigates back to code quiz
    backButton.addEventListener("click", )

    // show high scores
    viewHighScore.addEventListener("click", )