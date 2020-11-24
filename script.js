

//declared variables (DOM)
var timeLeft = document.querySelector("#timeLeft");
var start = document.querySelector("#startButton");
var questionsQuiz = document.querySelector("#questionsQuiz");
var wrapper = document.querySelector("#wrapper");



//declared variables

var score = 0;
var questionsList = 0;

//seconds left to answer each question
var secondsLeft = 50;
//holds interval
var holdInterval = 0;
//penalty time for wrong answer choices
var penalty = 5;
// created a new ordered list element
var olElement = document.createElement("ol");



//Created arrays for questions  

var questions = [

    {
        title: "How does Michael burn his foot?",
        choices: ["Walking through a fire", "A space heater", "On a george foreman grill", "The pavement"],
        answer: "On a george foreman grill"
    },

    {
        title: "What is Pam's favorite flavor of yogurt?",
        choices: ["Strawberry", "Mixed berry", "Cherry", "Orange"],
        answer: "Mixed berry"
    },

    {
        title: "What is Dwight's favorite tv show?",
        choices: ["Battlestar galactica", "Star trek", "Star wars", "Firefly"],
        answer: "Battlestar galactica"
    },

    {
        title: "Pam convinces which co-worker that he's being recruited by the CIA?",
        choices: ["Jim", "Michael", "Stanley", "Dwight"],
        answer: "Dwight"
    },

    {
        title: "Who starts a fire by cooking a cheese pita in the office?",
        choices: ["Ryan", "Meredith", "Kevin", "Kelly"],
        answer: "Ryan"
    },

    {
        title: "Where does Jim propose to Pam?",
        choices: ["At the office", "A restaurant", "A gas station", "At her college"],
        answer: "A gas station"
    },
];
//just checking console log
console.log(questions);

//starts the timer when button clicked
start.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            timeLeft.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allFinished();
                timeLeft.textContent = "Your time is up!";
            }
        }, 1000);
    }
    renderquestionsList();
});



function renderquestionsList () {
    questionsQuiz.innerHTML = "";
    olElement.innerHTML = "";
    //for loops all the infomation in the array 
    for (var i  = 0; i < questions.length; i++) {
        //includes question title only
        var questionsTitle = questions[questionsList].title;
        var questionsChoice = questions[questionsList].choices;
        questionsQuiz.textContent = questionsTitle;

    }

    //for each of the answer choices 
    questionsChoice.forEach(function (newElement) {
        var listElement = document.createElement("li");
        listElement.textContent = newElement;
        questionsQuiz.appendChild(olElement);
        olElement.appendChild(listElement);
        listElement.addEventListener("click", (contrast));
    })
}

//event to contrast the answer choices with answers 
function contrast(event) {
    const section = event.target;

    if (section.matches("li")) {

        var divTag = document.createElement("div");
        divTag.setAttribute("id", "divTag");
        //right answer choice 
        if (section.textContent == questions[questionsList].answer) {
            score ++;
            divTag.textContent = "Correct! The answer is: " + questions[questionsList].answer;
            //wrong answer choice 
        }
        else {
            //will take off 5 seconds for wrong answer choices 
            secondsLeft = secondsLeft - penalty;
            divTag.textContent = "Incorrect! The correct answer is: " + questions[questionsList].answer;
        }
    }

//the questions list determines what question user is on 

    questionsList++;

    if (questionsList >= questions.length) {
        allFinished();
        divTag.textContent = "The quiz has ended!" + " " + "You got " + score + "/" + questions.length + " Correct!";
        } 
        else {
            renderquestionsList();
        }
        questionsQuiz.appendChild(divTag);
}

//user finishes the quiz 
function allFinished() {
    questionsQuiz.innerHTML = "";
    timeLeft.innerHTML = "";

    //created new h1 heading
    var h1Heading = document.createElement("h1");
    h1Heading.setAttribute("id", "h1Heading");
    h1Heading.textContent = "All Finished!"


    questionsQuiz.appendChild(h1Heading);

    //created a new paragraph
    var newParagraph = document.createElement("p");
    newParagraph.setAttribute("id", "newParagraph");

    if (secondsLeft >= 0) {
        var timeDuration = secondsLeft;
        var paragraphTwo = document.createElement("p");
        clearInterval(holdInterval);
        newParagraph.textContent = "Your final score is: " + timeDuration;

        questionsQuiz.appendChild(paragraphTwo);
    }
    //created new label that says enter your initials
    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter your initials";
    questionsQuiz.appendChild(newLabel);

    //created an input for user to type initials
    var newInput = document.createElement("input");
    newInput.setAttribute("id", "initials");
    newInput.textContent = "";
    questionsQuiz.appendChild(newInput);

    //created a submit button 
    var newSubmit = document.createElement("button");
    newSubmit.setAttribute("id", "Submit");
    newSubmit.textContent = "Submit";
    questionsQuiz.appendChild(newSubmit);
    
    newSubmit.addEventListener("click", function(event) {
        event.preventDefault();

        


    })


}




