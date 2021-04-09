// define variables for each container
var headerContainer = document.querySelector("header"); // disappears when high-score container is displayed
var startContainer = document.querySelector("#start-container");  // disappears when start button is pressed
var quizContainer = document.querySelector("#quiz-container"); // appears when start button is pressed
var endContainer = document.querySelector("#end-container");  // appears when timer is zero or last question is answered
var highScoreContainer = document.querySelector("#high-score-container"); // appears when submit button is pressed

// define variables for each button
var startButton = document.querySelector(".start-button"); // signals start of timer and quiz
var submitButton = document.querySelector(".submit-button"); // saves initials into local storage
var backButton = document.querySelector(".back-button"); // signals return to start
var clearButton = document.querySelector(".clear-button"); // clears local storage
var viewScores = document.querySelector(".view-high-scores"); // signals return to show high scores

// init function


// quiz
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    
    // hide & show applicable containers
    headerContainer.setAttribute("class", "show");
    startContainer.setAttribute("class", "hide");
    quizContainer.setAttribute("class", "show");
    endContainer.setAttribute("class", "hide");
    highScoreContainer.setAttribute("class", "hide");
    
    // start timer
    startTimer();
    // render questions
    renderQuestion();
}

function endQuiz() {
    
    // hide & show applicable containers
    headerContainer.setAttribute("class", "show");
    startContainer.setAttribute("class", "hide");
    quizContainer.setAttribute("class", "hide");
    endContainer.setAttribute("class", "show");
    highScoreContainer.setAttribute("class", "hide");
    
    // show score
    userScore.textContent = timeLeft;
    console.log(userScore.textContent);
}   

// timer
var countdownTimer = document.querySelector("#countdown"); // timer countdown
var timeLeft = 26;

function startTimer() {
    var timeInterval = setInterval(function () {
        // timer counts down and renders to page
        timeLeft--;
        countdownTimer.textContent = timeLeft;
        
        // when timer is zero, quiz ends
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}


// questions
var questionEl = document.querySelector(".questions");
var optionOneEl = document.querySelector(".option-1");
var optionTwoEl = document.querySelector(".option-2");
var optionThreeEl = document.querySelector(".option-3");
var optionFourEl = document.querySelector(".option-4");
var quizIndex = 0;
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

function renderQuestion() {
    var currentQuestion = quiz[quizIndex];
    questionEl.innerHTML = currentQuestion.question;
    optionOneEl.innerHTML = currentQuestion.options[0];
    optionTwoEl.innerHTML = currentQuestion.options[1];
    optionThreeEl.innerHTML = currentQuestion.options[2];
    optionFourEl.innerHTML = currentQuestion.options[3];
}


// answers
optionOneEl.addEventListener("click", renderAnswer);
optionTwoEl.addEventListener("click", renderAnswer);
optionThreeEl.addEventListener("click", renderAnswer);
optionFourEl.addEventListener("click", renderAnswer);

var messageEl = document.querySelector("#message"); // either "correct" or "incorrect" based on answer to question

function renderAnswer (event) {
    var selectedOption = event.target;
    
    // checks to see if the final question has been rendered
    if (quizIndex === quiz.length-1) {
        endQuiz();
    } else if (selectedOption.textContent === quiz[quizIndex].answer) {
        messageEl.setAttribute("class", "show");
        messageEl.textContent = "Correct!";
        quizIndex++;
        renderQuestion();
    } else {
        messageEl.setAttribute("class", "show");
        messageEl.textContent = "Incorrect!";
        timeLeft -= 10;
        quizIndex++;
        renderQuestion();
    }
    console.log(quizIndex);
}


// score
submitButton.addEventListener("click", saveScore);

var initialInput = document.querySelector("#initials"); // holds value of initial textbox
var userScore = document.querySelector("#user-score"); // shares the same value as time when game ends
var scoreList = document.querySelector(".score-list"); // object that holds all initials and scores
var scores = [];

// var userInfo = {
//     userInitials: initialInput.value.trim(),
//     userScore: timeLeft.value
// };

function saveScore(event) {
    event.preventDefault();
    // checks if input is empty
    var userInitials = initialInput.value.trim();

    if (userInitials.value === "") {
        alert("Field cannot be left blank");
        return;
    } else {
        // add score to score array
        scores.push(userInitials);
        // save initials and score to localStorage
        localStorage.setItem("userInitials", JSON.stringify(scores));
        renderScores();
    }
}


// high score
viewScores.addEventListener("click", renderScores);

function renderScores() {
    
    // hide & show applicable containers
    headerContainer.setAttribute("class", "hide");
    startContainer.setAttribute("class", "hide");
    quizContainer.setAttribute("class", "hide");
    endContainer.setAttribute("class", "hide");
    highScoreContainer.setAttribute("class", "show");

    // get stored scores from localStorage
    var savedScores = JSON.parse(localStorage.getItem("userInitials"));
  
    // if scores were retrieved from localStorage, update the score array
    if(savedScores !== null) {
        scoreList.textContent = savedScores;
    } 

    // // render a new li for each score
    // for (var i = 0; i < scores.length; i++) {
    //     var score = scores[i];
    
    //     var li = document.createElement("li");
    //     li.textContent = score;
    //     li.setAttribute("data-index", i);
    //     li.setAttribute("class", ".score-list");
    
    //     scores = score.appendChild(li);
    //   }    
}


clearButton.addEventListener("click", clearScores);

function clearScores() {
    localStorage.clear();
    scoreList.textContent = "";
}


backButton.addEventListener("click", backReset);

function backReset() {

    // hide & show applicable containers
    headerContainer.setAttribute("class", "show");
    startContainer.setAttribute("class", "show");
    quizContainer.setAttribute("class", "hide");
    endContainer.setAttribute("class", "hide");
    highScoreContainer.setAttribute("class", "hide");
    
    // reset variables
    timeLeft = 26;
    quizIndex = 0;
    initialInput.value = "";
    countdownTimer.textContent = "0";
}