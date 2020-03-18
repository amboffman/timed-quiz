var startQuizButton = document.getElementById("start-quiz");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("time-left");
var secondsLeft = 76;
var header = document.getElementById("header");
var info = document.getElementById("info");
var viewHighScores = document.getElementById("view-high-scores");
var buttons = document.querySelector(".buttons");
var questions = ["Commonly used data types do NOT include:","The condition in an if/else sttement is enclosed within ______","Arrays in javascript can be used to store _____.","String values must be enclosed within ______ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];
var answers = ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers", "1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"];
var feedback = "";

function createAnswerButtons(){
    
    
    var answerButton1 = document.createElement("button");
    answerButton1.textContent = answers[0];
    document.body.append(answerButton1);
    answerButton1.className = "btn btn-primary text-center";
    answerButton1.setAttribute("style", "display:block; margin:20px auto; text-align:center");
    
    var answerButton2 = document.createElement("button");
    answerButton2.textContent = answers[1];
    document.body.append(answerButton2);
    answerButton2.className = "btn btn-primary text-center";
    answerButton2.setAttribute("style", "display:block; margin:20px auto; text-align:center");
    // answerButton2.addEventListener("click", wrongAnswer());
    
    var answerButton3 = document.createElement("button");
    answerButton3.textContent = answers[2];
    document.body.append(answerButton3);
    answerButton3.className = "btn btn-primary text-center";
    answerButton3.setAttribute("style", "display:block; margin:20px auto; text-align:center");
    
    
    var answerButton4 = document.createElement("button");
    answerButton4.textContent = answers[3];
    document.body.append(answerButton4);
    answerButton4.className = "btn btn-primary text-center";
    answerButton4.setAttribute("style", "display:block; margin:20px auto; text-align:center");
    
    var divider = document.createElement("hr");
    document.body.append(divider);


}
// when the user clicks start quiz
startQuizButton.addEventListener("click", startQuiz)
    function startQuiz(){
        // change h1 to left aligned
        header.style.textAlign = "left";
        // change h1 to question 1
        header.textContent = questions[0];
        // remove the p tag
        info.remove();
        // remove the start quiz button
        startQuizButton.remove();
        // add answer buttons with answer text
        createAnswerButtons();

        //begin countdown
        beginCountdown();

    
    }
    function wrongAnswer(){
        secondsLeft -= 10;
        alert("Incorrect Answer");

    }
    function beginCountdown() {
            var timerInterval = setInterval(function() {

              secondsLeft--;
          
              // update the count down
              timeLeft.textContent = secondsLeft;
          
              // check if time has run out
              if(secondsLeft === 0) {

                clearInterval(timerInterval);
                showColorExplosion();
              }
            }, 1000);
            }
            console.log(secondsLeft);
