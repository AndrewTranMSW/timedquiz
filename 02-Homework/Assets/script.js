// var a = "Hello Poop";
// console.log(a);
var time = document.querySelector(".time");
var secondsLeft = 90;

//This STARTS the game
let startButton = document.getElementById("start-btn");
startButton.addEventListener('click', startGame);
//Functioning

//This grabs the question container which contains the questions and the answers.
const questionContainerElement = document.getElementById("question-container");
//This grabs the specific QUESTION element
let questionElement = document.getElementById('question');
//this grabs the specific ANSWER element
const answerButtonsElement = document.getElementById('answer-buttons');
//Questions and answers
var questionIndex = 0 
let questionsList = [
    {
        question: "which is a fruit?",
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
            { text: 'Venus', correct: false },
            { text: 'Tomato', correct: true },
            { text: 'Lettuce', correct: false },
            { text: 'Cucumber', correct: false }
        ]
    },
    {
        question: "which is a fruit?",
        answers: [
            { text: 'Bacon', correct: false },
            { text: 'Tomato', correct: true },
            { text: 'Lettuce', correct: false },
            { text: 'Cucumber', correct: false }
        ]
    },
   
]



//THEN a timer starts and I am presented with a question


// function gameStart () {
//     var timerInterval = setInterval(function() {
//         startGame.addEventListener("click", gameStart);
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

function startGame () {
console.log('Started');
startButton.classList.add('hide');
// var timerInterval = setInterval(function() {
//     startGame.addEventListener('click', timerInterval);
//     secondsLeft--;
//     time.textContent = secondsLeft + " Seconds Left.";
// })
questionContainerElement.classList.remove('hide');
// setNextQuestion()
showQuestion()
}

// function setNextQuestion () {
//     showQuestion()
// }

function showQuestion() {
    var activeQuestion = questionsList[questionIndex]
    console.log(activeQuestion.question);
    questionElement.innerText = activeQuestion.question;
    var activeAnswer = activeQuestion.answers
    for (var i=0; i<activeAnswer.length; i++) {
        console.log(activeAnswer[i].text);
        var button = document.createElement('button')
        button.innerText = activeAnswer[i].text;
        var listItem = document.createElement('li')
        listItem.appendChild(button);
        answerButtonsElement.appendChild(listItem);
    }

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
}

function selectAnswer () {

}



// var questions = ["Which is a fruit?", "Which is a planet?", "Who was a President of the USA?", "Which Cherry MX switch sounds clicky and feels tactile?"];

// var choices = document.querySelector("#choice");
// var answersFruit = ["Bacon", "Tomato", "Lettuce", "Cucumber"];
// var answersPlanet = ["Pluto", "Juniper", "Venus", "Omarion"];
// var answersPresident = ["Alexander Hamilton", "Benjamin Cleveland", "Chester Garfield", "Calvin Coolidge"];
// var answersCherry = ["Red", "Brown", "Blue", "Black"];




//Make a function for a timer to be located on the screen that starts ONCE the start button is pressed
//Make a variable for the 


// End-user will need to be presented with a question and 4 multiple choice questions. They must click the correct one, if they do:
//The timer does not deduct time and the next question with 4 more multiple choice questions is presented

//If the incorrect answer is chosen:
 //   - The timer is deducted 10 seconds and...
 // - We move to the next question with 4 more multiple choice questions.



//WHEN I click the start button



//WHEN I answer a question



//THEN I am presented with another question

    

//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//WHEN the game is over
//THEN I can save my initials and my score

