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


// start
    // start button starts timer countdown (event listener)
    startButton.addEventListener("click", startTimer)
    // start button starts quiz (event listener)
    startButton.addEventListener("click", startQuiz)

    // timer
    var countdownTimer = document.querySelector("#countdown"); // timer countdown
    var timeLeft = 6;

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

// high score button shows high scores (event listener)
viewScores.addEventListener("click", renderScores);


// quiz
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

function startQuiz() {
    // hide start-container
    startContainer.setAttribute("class", "hide");
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


// // questions
// function renderQuestion() {
//     var 
// }



// // answers
// function renderAnswer () {

//     // answering question changes to next question
//     answerOne.addEventListener("click", userResponse);
//     answerTwo.addEventListener("click", userResponse);
//     answerThree.addEventListener("click", userResponse);
//     answerFour.addEventListener("click", userResponse);

//     // if answer is correct, "correct" appears at the bottom of the question
//     // if answer is correct, no change to timer
//         messageEl.setAttribute("class", "show");
//         messageEl.textContent = "Correct!";

//     // if answer is incorrect, "wrong" appears at the bottom of the question
//     // if answer is incorrect, time is subtracted from timer
//         messageEl.setAttribute("class", "show");
//         messageEl.textContent = "Incorrect!"
//         timeLeft -= 10;

//     // when all questions are answered, game is over
// }


// score
    // submit button saves initials and score (event listener)
    submitButton.addEventListener("click", saveScore);

    var initialInput = document.querySelector("#initials"); // holds value of initial textbox
    var userScore = document.querySelector("#user-score"); // shares the same value as time when game ends
    var scoreList = document.querySelector("#score-list"); // object that holds all initials and scores
    var scores = [];
    var userInitials;
    // var userInfo = {
    //     userInitials: initialInput.value.trim(),
    //     userScore: timeLeft.value
    // };

function saveScore(event) {
    event.preventDefault();
    // checks if input is empty
    if (initialInput.value === "") {
        alert("Field cannot be left blank");
    } else {
        // enter user intials
        var userInitials = initialInput.value.trim();
        // add score to score array
        scores.push(userInitials);
        // save initials and score to localStorage
        localStorage.setItem("userInitials", JSON.stringify(scores));
    }
}


// high score
    // submit button shows all scores (event listener)
    submitButton.addEventListener("click", renderScores);

    function renderScores() {
        // hide end-container
        endContainer.setAttribute("class", "hide");
        // show highScore-container
        highScoreContainer.setAttribute("class", "show");

        // // get stored scores from localStorage
        // var scoreList = JSON.parse(localStorage.getItem("userInitials"));
        // // if scores were retrieved from localStorage, update the score array
        // if(scoreList !== null) {
        //     scores = scoreList;
        // } 
        // // clears the scoreList element

        // // render a new li for each score
        // for (var i = 0; i < scores.length; i++) {
        //     var score = scores[i];
        
        //     var li = document.createElement("li");
        //     li.textContent = score;
        //     li.setAttribute("data-index", i);
        //     li.setAttribute("class", ".score-list");
        
        //     scores.appendChild(li);
        //   }    
    }
    
    // clear button clears all scores (event listener)
    clearButton.addEventListener("click", clearScores);

    function clearScores() {
        localStorage.clear();
    }

    // back button returns back to start (event listener)
    backButton.addEventListener("click", backStart);

    function backStart() {
        // hide highScore-container
        highScoreContainer.setAttribute("class", "hide");
        // show header
        headerContainer.setAttribute("class", "show");
        // show start-container
        startContainer.setAttribute("class", "show");
        // reset variables
        timeLeft = 6;
        initialInput.value = "";
    }
                                                                                                            