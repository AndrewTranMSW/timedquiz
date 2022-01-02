// var a = "Hello Poop";
// console.log(a);
//This STARTS the game
let startButton = document.getElementById("start-btn");
startButton.addEventListener('click', startGame);
//This grabs the timer element
var timerEl = document.getElementById("timer-seconds");
var secondsLeft = 10;
//This grabs the question container which contains the questions and the answers.
const questionContainerElement = document.getElementById("question-container");
//This grabs the specific QUESTION element
let questionElement = document.getElementById('question');
//this grabs the specific ANSWER element
const answerButtonsElement = document.getElementById('answer-buttons');
//this listens for a click on the ANSWER element
answerButtonsElement.addEventListener('click', nextQuestion);
//Keeping Score
var score = 0;

//Questions and answers
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
        question: "which was a US President??",
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

// var timerEl = document.getElementById("timer-seconds");
// var secondsLeft = 90;
function startGame () {
    var timerInterval = setInterval(function() {
        timerEl.innerHTML=secondsLeft + " seconds left until booooooooop.";
        if(secondsLeft <=0){
            clearInterval(timerInterval); 
            timerEl.innerHTML = "Time is up hehe";
        }
        secondsLeft--;
    }, 1000);
    //code below is functional
    console.log('Started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    showQuestion();
}

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
}

function nextQuestion () {
    questionIndex++;
    //Empties the previous answers and inserts the next set of answers
    answerButtonsElement.innerHTML='';
    showQuestion();
}

// function countdown() {

// }


// var timerInterval = setInterval(function() {
//     startGame.addEventListener('click', timerInterval);
//     secondsLeft--;
//     time.textContent = secondsLeft + " Seconds Left.";
// })
// setNextQuestion()

// function setNextQuestion () {
//     showQuestion()
// }

//THEN a timer starts and I am presented with a question

// function gameStart () {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         time.textContent = secondsLeft + " seconds left until booooooooop.";
//         if(secondsLeft <=0){
//             clearInterval(timerInterval); 
//             document.getElementById("demo").innerHTML = "Time is up hehe";
//             return;
//         }
//     }, 1000);
// }
// gameStart();


//     questions.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//     })


// function selectAnswer () {
    
// }

//Make a function for a timer to be located on the screen that starts ONCE the start button is pressed
//Make a variable for the 

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

