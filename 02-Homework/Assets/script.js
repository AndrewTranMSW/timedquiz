// var a = "Hello Poop";
// console.log(a);
//This STARTS the game
let startButton = document.getElementById("start-btn");
startButton.addEventListener('click', startGame);
//This grabs the timer element
var timerEl = document.getElementById("timer-seconds");
var secondsLeft = 2;
//This grabs the question container which contains the questions and the answers.
const questionContainerElement = document.getElementById("question-container");
//This grabs the specific QUESTION element
let questionElement = document.getElementById('question');
//This grabs the specific ANSWER element
const answerButtonsElement = document.getElementById('answer-buttons');
//This listens for a click on the ANSWER element
answerButtonsElement.addEventListener('click', nextQuestion);
//This grabs the 'correct' and 'incorrect' element and displays whether or not the user got the answer right or wrong
var correctIncorrectEl = document.getElementById("correct-incorrect-text");
//Keeping Score
var score = 0;
//Initials Form
const initialsEl = document.getElementById("initialform");
//Initials Form Submit button for local storage
var submitBtn = document.getElementById("submit");

//Questions and answers, questionIndex starts at the top of the array and is used in the for loop.
var questionIndex = 0 
let questionsList = [
    {
        question: "Which is a fruit?",
        answers: [
            { text: 'Bacon', correct: false },
            { text: 'Tomato', correct: true },
            { text: 'Lettuce', correct: false },
            { text: 'Cucumber', correct: false }
        ]
    },
    {
        question: "Which is a planet?",
        answers: [
            { text: 'Pluto', correct: false },
            { text: 'Juniper', correct: false },
            { text: 'Venus', correct: true },
            { text: 'Omarion', correct: false }
        ]
    },
    {
        question: "Which was a US President??",
        answers: [
            { text: 'Alexander Hamilton', correct: false },
            { text: 'Benjamin Cleveland', correct: false },
            { text: 'Chester Garfield', correct: false },
            { text: 'Calvin Coolidge', correct: true }
        ]
    },
    {
        question: "Which Cherry MX switch is known to be both 'clicky' and tactile?",
        answers: [
            { text: 'Red', correct: false },
            { text: 'Brown', correct: false },
            { text: 'Blue', correct: true },
            { text: 'Black', correct: false }
        ]
    },
]

//Function for starting the game
function startGame () {
    console.log('Started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    showQuestion();
    //Timer
    var timerInterval = setInterval(function() {
        timerEl.innerHTML=secondsLeft + " seconds left until boop.";
        if(secondsLeft === 0){
            clearInterval(timerInterval); 
            timerEl.innerHTML = "Time is up";
            initialsEl.classList.remove('hide-form');
            questionContainerElement.classList.add('hide');
        }
        secondsLeft--;
    }, 1000);
}

//Function shows the questions and answers arrays
function showQuestion() {
    var activeQuestion = questionsList[questionIndex];
    var activeAnswer = activeQuestion.answers;

    questionElement.innerText = activeQuestion.question;
    
    for (var i=0; i<activeAnswer.length; i++) {
        console.log(activeAnswer[i].text);
        var button = document.createElement('button');
        var listItem = document.createElement('li');

        button.innerText = activeAnswer[i].text;
        listItem.appendChild(button);
        answerButtonsElement.appendChild(listItem);
    }

    //not working correctly
    if (activeAnswer === true) {
        // correctIncorrectEl.innerHTML = "Correct";
        console.log("correcto");
    } else {
        // correctIncorrectEl.innerHTML = "Incorrect";
        console.log("incorrecto");
    }
}

//Function for going to the next question of the array
function nextQuestion () {
    questionIndex++;
    //Empties the previous answers and inserts the next set of answers
    answerButtonsElement.innerHTML='';
    showQuestion();
}

//Registers initials to local storage
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    //Initials Text Value
    const initialsText = document.getElementById("initialsText").value;
    localStorage.setItem("initialsText", initialsText);
});


// End-user will need to be presented with a question and 4 multiple choice questions. They must click the correct one, if they do:
//The timer does not deduct time and the next question with 4 more multiple choice questions is presented

//If the incorrect answer is chosen:
 //   - The timer is deducted 10 seconds and...
 // - We move to the next question with 4 more multiple choice questions.

//WHEN I answer a question
//THEN I am presented with another question

//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//WHEN the game is over
//THEN I can save my initials and my score

