var score = 0;
var time = 60;
var timing;
var questionNum = 0;
var timeRemain = document.getElementById('timeLeft');
var gameArea = document.querySelector('#gameArea');
var startButton = document.querySelector('#startButton');
var questionArray = [questionOne, questionTwo, questionThree, questionFour];
var scoreBoard = document.getElementById('scores');
var highButton = document.querySelector('#highScore');
var showScore = document.querySelector('#showScore');
var highScores = [];
var questions = {
    q1:{
        question: "How do you link to a javascript file?",
        a1: "<link rel='javascript' href='script.js'>",
        b1: "<script><link rel='javascript' href='script.js'></script>",
        c1: "<script src='script.js'></script>",
        d1: "<script>script.js</script>"
    },
    q2:{
        question: "Which of the following can't be done with client-side JavaScript?",
        a1: "Validating a form.",
        b1: "Sending a forms contents by email.",
        c1: "Storing the form's contents to a server.",
        d1: "Change an element through interaction."
    },
    q3:{
        question: "What is JavaScript?",
        a1: "A coding language to build the layout and design of a webpage.",
        b1: "A coding language created by Starbucks to assist in coffe making.",
        c1: "A coding language used to create interactivity in web browsers.",
        d1: "The primary coding language that adds content to a webpage."
    },
    q4:{
        question: "What would the console display?",
        a1: "True",
        b1: "False",
        c1: "Undefined",
        d1: "Where am I?"
    }
};




// Creating display
var input = document.createElement('input');
var h2 = document.createElement('h2');
var h3 = document.createElement('h3');
var div1 = document.createElement('div');
var scoreBox = document.createElement('div');
var ul = document.createElement('ul');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
gameArea.appendChild(h2);
gameArea.appendChild(div1);
gameArea.appendChild(ul);



// Functions for each question

function questionOne () {
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    h2.textContent = questions.q1.question;
    li1.textContent = questions.q1.a1;
    li2.textContent = questions.q1.b1;
    li3.textContent = questions.q1.c1;
    li3.classList.add("correct");
    li4.textContent = questions.q1.d1;
    gameArea.addEventListener("click", answerClick);
}

function questionTwo () {
    h2.textContent = questions.q2.question;
    li1.textContent = questions.q2.a1;
    li2.textContent = questions.q2.b1;
    li3.textContent = questions.q2.c1;
    li3.classList.add("correct");
    li4.textContent = questions.q2.d1;
    gameArea.addEventListener("click", answerClick);
}

function questionThree () {
    h2.textContent = questions.q3.question;
    li1.textContent = questions.q3.a1;
    li2.textContent = questions.q3.b1;
    li3.textContent = questions.q3.c1;
    li3.classList.add("correct");
    li4.textContent = questions.q3.d1;
    gameArea.addEventListener("click", answerClick);
}

function questionFour () {
    h2.textContent = questions.q4.question;
    div1.classList.add("div1");
    li1.textContent = questions.q4.a1;
    li2.textContent = questions.q4.b1;
    li2.classList.add("correct")
    li3.textContent = questions.q4.c1;
    li4.textContent = questions.q4.d1;
    gameArea.addEventListener("click", answerClick);
};


function answerClick(event) {

    // Time function
    function setTime() {
            timing = setInterval(function() {
            time--;
            timeRemain.textContent = time;
            console.log(time);
            if (time === 0) {
                clearInterval(timing);
                gameArea.textContent = "You lost!!";
                return;
            }
        }, 1000);
    };

    if (event.target.tagName === "BUTTON") {
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        startButton.remove();
        setTime();
        questionOne();
    }
    if (event.target.classList.contains("correct")) {
        score++;
        questionNum++;
        console.log("score is: " + score);
        if (questionNum === 1) {
            questionTwo();
        }   
        else if (questionNum ===2) {
            questionThree();
        }
        else if (questionNum === 3) {
            questionFour();
        }
        else {
            clearInterval(timing);
            saveScore();
        }
        return;

    } else if (event.target.tagName === "LI" && !event.target.classList.contains("correct") && !event.target.classList.contains("saving")) {
        time = time - 10;
        console.log("this is running")
    } else {
        return;
    }
 
};

const high_Scores = 'high scores';




// Saves score to local storage and pulls from local storage

function json() {
    var userScore = {
        total: time,
        initials: input.value.trim(),
    };
    const allScores = JSON.parse(localStorage.getItem(high_Scores)) ?? [];

    allScores.push(userScore);

    localStorage.setItem(high_Scores, JSON.stringify(allScores));

    // const allScores = JSON.parse(localStorage.getItem(high_Scores)) ?? [];
    

    gameArea.addEventListener('click', function(event){
        if (event.target.classList.contains('saveButton')) {
            gameArea.style.display = 'none';
            showScore.style.display = 'inline-block'
            const score1 = document.getElementById('score1');
            const score2 = document.getElementById('score2');
            const score3 = document.getElementById('score3');
            const scoresList = [score1, score2, score3];
            const samples = ["hi", "hey", "hello"];
            console.log(allScores)
            for (let i = 0; i < allScores.length; i++) {
                scoresList[i].innerHTML = allScores[i].initials + ": " + allScores[i].total;
            }
        }
    })
};



// final screen of game before saving

function saveScore() {
       gameArea.innerHTML = " ";
       gameArea.appendChild(scoreBox);
       scoreBox.appendChild(h2);
       scoreBox.appendChild(input);
       scoreBox.appendChild(li1);
        li1.classList.add("saveButton");
        h2.textContent = "Your final score is: " + time;
        li1.textContent = "Save score";
        li1.classList.add("saving");
        li1.addEventListener("click", json);
};
gameArea.addEventListener("click", answerClick);

