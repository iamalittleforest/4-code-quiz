// define variables for each container
var headerContainer = document.querySelector("header"); 
var startContainer = document.querySelector("#start-container");
var quizContainer = document.querySelector("#quiz-container");
var endContainer = document.querySelector("#end-container"); 
var highScoreContainer = document.querySelector("#high-score-container");


// quiz
var startButton = document.querySelector("#start-button");
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
}   

// timer
var countdownTimer = document.querySelector("#countdown");
var timeLeft = 76;
var timeInterval;

function startTimer() {
    timeInterval = setInterval(function () {

        // timer counts down and renders to page
        timeLeft--;
        countdownTimer.textContent = timeLeft;
        
        // when timer is zero, quiz ends
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

// questions
var questionEl = document.querySelector("#questions");
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

    // quiz ends after the last question is rendered
    if (quizIndex === quiz.length) {
        clearInterval(timeInterval);
        endQuiz();
    } else {
        questionEl.innerHTML = currentQuestion.question;
        optionOneEl.innerHTML = currentQuestion.options[0];
        optionTwoEl.innerHTML = currentQuestion.options[1];
        optionThreeEl.innerHTML = currentQuestion.options[2];
        optionFourEl.innerHTML = currentQuestion.options[3];  
    }
}

// answers
optionOneEl.addEventListener("click", renderAnswer);
optionTwoEl.addEventListener("click", renderAnswer);
optionThreeEl.addEventListener("click", renderAnswer);
optionFourEl.addEventListener("click", renderAnswer);

var messageEl = document.querySelector("#message"); 

function renderAnswer (event) {
    var selectedOption = event.target;
    
    // performs actions based on whether the answer is correct or incorrect
    if (selectedOption.textContent === quiz[quizIndex].answer) {
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
}


// score
var submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", saveScore);

var initialInput = document.querySelector("#initials"); 
var userScore = document.querySelector("#user-score"); 
var userInitials;
var allScores = [];

function saveScore(event) {
    event.preventDefault();
    
    var userInfo = {
        userScore: timeLeft,
        userInitials: initialInput.value.trim()
    };

    // only adds userInfo if input field is not empty
    if (userInitials === "") {
        alert("Field cannot be left blank");
        return false;
    } else {
        // add score to allScores array
        allScores.push(userInfo);
        // save userInfo to localStorage
        localStorage.setItem("userInfo", JSON.stringify(allScores));
        renderScores();
    }
}


// high score
var viewScores = document.querySelector("#view-high-scores");
viewScores.addEventListener("click", renderScores);

var scoreList = document.querySelector("#score-list");

function renderScores() {
    
    // hide & show applicable containers
    headerContainer.setAttribute("class", "hide");
    startContainer.setAttribute("class", "hide");
    quizContainer.setAttribute("class", "hide");
    endContainer.setAttribute("class", "hide");
    highScoreContainer.setAttribute("class", "show");

    // get stored userInfo from localStorage
    var savedScores = JSON.parse(localStorage.getItem("userInfo"));
  
    // checks to see if data is stored in localStorage
    if (savedScores !== null) {
        allScores = savedScores;
    } else {
        allScores = [];
    }

    // sort the allScores in decending order by userScore
    allScores.sort(function (a,b) {
        return b.userScore - a.userScore;
    });

    // clear the scoreList element
    scoreList.textContent = "";

    // create a new li for each score and append to the scoreList
    for (var i = 0; i < allScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${allScores[i].userScore} - ${allScores[i].userInitials}`;
        li.setAttribute("data-index", i);
        li.setAttribute("class", "#score-list");
        scoreList.appendChild(li);
      }    
}

// clear button
var clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearScores);

function clearScores() {
    localStorage.clear();
    scoreList.textContent = "";
}

// back button
var backButton = document.querySelector("#back-button");
backButton.addEventListener("click", backReset);

function backReset() {

    // hide & show applicable containers
    headerContainer.setAttribute("class", "show");
    startContainer.setAttribute("class", "show");
    quizContainer.setAttribute("class", "hide");
    endContainer.setAttribute("class", "hide");
    highScoreContainer.setAttribute("class", "hide");
    messageEl.setAttribute("class", "hide");
    
    // reset variables
    timeLeft = 76;
    quizIndex = 0;
    initialInput.value = "";
    countdownTimer.textContent = "0";
}

